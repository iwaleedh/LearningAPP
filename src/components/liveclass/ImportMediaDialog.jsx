/**
 * ImportMediaDialog.jsx
 *
 * Two-tab modal for importing media onto the Live Class canvas.
 *   Tab "Image" — drag-drop or file picker for any image format.
 *   Tab "PDF"   — file picker for .pdf → renders each page via pdfjs-dist
 *                 → thumbnail grid → user selects pages → places as images.
 *
 * Props:
 *   onClose()                   — close without placing anything
 *   onPlaceImage(dataUrl)       — place a single image on canvas (centered)
 *   onPlaceImages(dataUrls[])   — place multiple page images stacked vertically
 */

import { useState, useRef, useCallback } from 'react';
import { X, Image as ImageIcon, FileText, Upload, Check } from 'lucide-react';
import { loadPdfJs } from '../../services/pdf/loadPdfJs.js';

const RENDER_SCALE = 1.5; // resolution multiplier for PDF pages

export default function ImportMediaDialog({ onClose, onPlaceImage, onPlaceImages }) {
  const [tab, setTab] = useState('image'); // 'image' | 'pdf'
  const [dragging, setDragging] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);  // data URL of picked image
  const [pdfPages, setPdfPages] = useState([]);            // [{ dataUrl, index }]
  const [selectedPages, setSelectedPages] = useState(new Set());
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [pdfError, setPdfError] = useState('');
  const imageInputRef = useRef(null);
  const pdfInputRef = useRef(null);

  // ── Image tab ─────────────────────────────────────────────────────────────
  function readImageFile(file) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target.result);
    reader.readAsDataURL(file);
  }

  function handleImageDrop(e) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    readImageFile(file);
  }

  function handleImportImage() {
    if (!imagePreview) return;
    onPlaceImage(imagePreview);
    onClose();
  }

  // ── PDF tab ───────────────────────────────────────────────────────────────
  async function renderPdf(file) {
    setLoadingPdf(true);
    setPdfError('');
    setPdfPages([]);
    setSelectedPages(new Set());

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfjsLib = await loadPdfJs();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const pages = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: RENDER_SCALE });
        const offscreen = document.createElement('canvas');
        offscreen.width = viewport.width;
        offscreen.height = viewport.height;
        const ctx = offscreen.getContext('2d');
        await page.render({ canvasContext: ctx, viewport }).promise;
        pages.push({ dataUrl: offscreen.toDataURL('image/jpeg', 0.92), index: i });
      }

      setPdfPages(pages);
      // Select all pages by default
      setSelectedPages(new Set(pages.map(p => p.index)));
    } catch (err) {
      setPdfError('Could not read PDF. Make sure it is not password-protected.');
      console.error('ImportMediaDialog PDF error:', err);
    } finally {
      setLoadingPdf(false);
    }
  }

  function togglePage(index) {
    setSelectedPages(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  function handleImportPages() {
    const ordered = pdfPages
      .filter(p => selectedPages.has(p.index))
      .map(p => p.dataUrl);
    if (!ordered.length) return;
    onPlaceImages(ordered);
    onClose();
  }

  const stopPropagation = useCallback((e) => e.stopPropagation(), []);

  return (
    <div className="lc-import-overlay" onClick={onClose}>
      <div className="lc-import-dialog card animate-fade-in" onClick={stopPropagation}>
        {/* Header */}
        <div className="lc-import-header">
          <div className="lc-import-tabs">
            <button
              className={`lc-import-tab ${tab === 'image' ? 'lc-import-tab--active' : ''}`}
              onClick={() => setTab('image')}
            >
              <ImageIcon size={15} /> Image
            </button>
            <button
              className={`lc-import-tab ${tab === 'pdf' ? 'lc-import-tab--active' : ''}`}
              onClick={() => setTab('pdf')}
            >
              <FileText size={15} /> PDF
            </button>
          </div>
          <button className="lc-import-close btn-icon" onClick={onClose} title="Close">
            <X size={18} />
          </button>
        </div>

        {/* ── Image tab ──────────────────────────────────────────── */}
        {tab === 'image' && (
          <div className="lc-import-body">
            {imagePreview ? (
              <div className="lc-import-preview-wrap">
                <img src={imagePreview} className="lc-import-preview" alt="preview" />
                <div className="lc-import-preview-actions">
                  <button className="btn btn-secondary btn-sm" onClick={() => setImagePreview(null)}>
                    Choose different
                  </button>
                  <button className="btn btn-primary btn-sm" onClick={handleImportImage}>
                    Place on canvas
                  </button>
                </div>
              </div>
            ) : (
              <div
                className={`lc-import-dropzone ${dragging ? 'lc-import-dropzone--drag' : ''}`}
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleImageDrop}
                onClick={() => imageInputRef.current?.click()}
              >
                <Upload size={32} className="lc-import-dropzone-icon" />
                <p className="lc-import-dropzone-text">
                  Drag &amp; drop an image here<br />
                  <span>or click to browse</span>
                </p>
                <p className="lc-import-dropzone-hint">PNG, JPG, GIF, WebP, SVG</p>
                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(e) => readImageFile(e.target.files?.[0])}
                />
              </div>
            )}
          </div>
        )}

        {/* ── PDF tab ──────────────────────────────────────────────── */}
        {tab === 'pdf' && (
          <div className="lc-import-body">
            {pdfPages.length === 0 && !loadingPdf && (
              <div
                className={`lc-import-dropzone ${dragging ? 'lc-import-dropzone--drag' : ''}`}
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  const file = e.dataTransfer.files?.[0];
                  if (file?.type === 'application/pdf') renderPdf(file);
                }}
                onClick={() => pdfInputRef.current?.click()}
              >
                <FileText size={32} className="lc-import-dropzone-icon" />
                <p className="lc-import-dropzone-text">
                  Drag &amp; drop a PDF here<br />
                  <span>or click to browse</span>
                </p>
                <p className="lc-import-dropzone-hint">Pages will be rendered as images</p>
                {pdfError && <p className="lc-import-error">{pdfError}</p>}
                <input
                  ref={pdfInputRef}
                  type="file"
                  accept=".pdf,application/pdf"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) renderPdf(file);
                  }}
                />
              </div>
            )}

            {loadingPdf && (
              <div className="lc-import-loading">
                <span className="lc-import-spinner" />
                Rendering PDF pages…
              </div>
            )}

            {pdfPages.length > 0 && !loadingPdf && (
              <>
                <div className="lc-import-pdf-toolbar">
                  <span className="lc-import-pdf-count">
                    {pdfPages.length} page{pdfPages.length !== 1 ? 's' : ''} — {selectedPages.size} selected
                  </span>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => setSelectedPages(
                      selectedPages.size === pdfPages.length
                        ? new Set()
                        : new Set(pdfPages.map(p => p.index))
                    )}
                  >
                    {selectedPages.size === pdfPages.length ? 'Deselect all' : 'Select all'}
                  </button>
                  <button className="btn btn-ghost btn-sm" onClick={() => {
                    setPdfPages([]);
                    setSelectedPages(new Set());
                  }}>
                    Load different PDF
                  </button>
                </div>

                <div className="lc-import-pdf-grid">
                  {pdfPages.map(({ dataUrl, index }) => {
                    const selected = selectedPages.has(index);
                    return (
                      <div
                        key={index}
                        className={`lc-import-pdf-thumb ${selected ? 'lc-import-pdf-thumb--selected' : ''}`}
                        onClick={() => togglePage(index)}
                        title={`Page ${index}`}
                      >
                        <img src={dataUrl} alt={`Page ${index}`} />
                        <div className="lc-import-pdf-page-num">p.{index}</div>
                        {selected && (
                          <div className="lc-import-pdf-check">
                            <Check size={14} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="lc-import-pdf-footer">
                  <button
                    className="btn btn-primary"
                    onClick={handleImportPages}
                    disabled={selectedPages.size === 0}
                  >
                    Import {selectedPages.size} page{selectedPages.size !== 1 ? 's' : ''} →
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
