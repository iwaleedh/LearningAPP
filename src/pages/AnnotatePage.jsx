import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPaperById } from '../data/pastPapers/index.js';
import { savePageAnnotation, getPageAnnotations } from '../services/annotation/annotationStore';
import { createUndoManager } from '../services/annotation/undoManager';
import { loadPdfJs } from '../services/pdf/loadPdfJs.js';
import AnnotationToolbar from '../components/annotation/AnnotationToolbar';
import ThumbnailSidebar from '../components/annotation/ThumbnailSidebar';
import AnnotationCanvas from '../components/annotation/AnnotationCanvas';
import { DEFAULT_TEXT_FONT } from '../components/annotation/fontDefaults.js';
import './Pages.css';

const PDF_SCALE = 1.5;

export default function AnnotatePage() {
    const { paperId } = useParams();
    const navigate = useNavigate();

    // Paper + PDF
    const [paper, setPaper] = useState(null);
    const [pdfDoc, setPdfDoc] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pdfDimensions, setPdfDimensions] = useState(null);
    const [pdfStatus, setPdfStatus] = useState('loading'); // 'loading' | 'ready' | 'error'

    // Tools
    const [activeTool, setActiveTool] = useState('pen');
    const [toolOptions, setToolOptions] = useState({
        color: '#ef4444',
        width: 4,
        ...DEFAULT_TEXT_FONT,
        fill: '#ef4444',
    });

    // Persistence
    const [dirty, setDirty] = useState(false);
    const [saveStatus, setSaveStatus] = useState(null); // null | 'saving' | 'saved'
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);

    // Refs
    const canvasRef = useRef(null);        // AnnotationCanvas imperative handle
    const pdfCanvasRef = useRef(null);     // raw <canvas> for pdf.js rendering
    const renderTaskRef = useRef(null);
    const loadingTaskRef = useRef(null);
    const undoMgr = useRef(createUndoManager());
    const annotationsCache = useRef({});   // pageNum → fabricJson
    const autoSaveTimer = useRef(null);

    useEffect(() => {
        let cancelled = false;

        setPaper(null);

        void getPaperById(paperId).then((resolvedPaper) => {
            if (cancelled) return;

            if (!resolvedPaper) {
                navigate('/past-papers', { replace: true });
                return;
            }

            setPaper(resolvedPaper);
        });

        return () => {
            cancelled = true;
        };
    }, [paperId, navigate]);

    // ── PDF document loading ──────────────────────────────────────────────
    useEffect(() => {
        if (!paper?.questionPaperUrl) return;
        setPdfStatus('loading');
        setPdfDoc(null);
        setPageCount(0);
        setCurrentPage(1);

        let cancelled = false;

        void loadPdfJs()
            .then((pdfjsLib) => {
                if (cancelled) return;

                const task = pdfjsLib.getDocument(paper.questionPaperUrl);
                loadingTaskRef.current = task;
                return task.promise.then((pdf) => {
                    if (cancelled) return;
                    setPdfDoc(pdf);
                    setPageCount(pdf.numPages);
                    setPdfStatus('ready');
                });
            })
            .catch(() => {
                if (!cancelled) {
                    setPdfStatus('error');
                }
            });

        return () => {
            cancelled = true;
            loadingTaskRef.current?.destroy?.();
        };
    }, [paper]);

    // ── Load cached annotations from IndexedDB ────────────────────────────
    useEffect(() => {
        if (!paper) return;
        getPageAnnotations(paper.id).then((annotations) => {
            annotationsCache.current = annotations;
        });
    }, [paper]);

    // ── Render current PDF page ───────────────────────────────────────────
    useEffect(() => {
        if (!pdfDoc || !pdfCanvasRef.current) return;
        const dpr = window.devicePixelRatio || 1;

        renderTaskRef.current?.cancel();

        pdfDoc.getPage(currentPage).then((page) => {
            if (!pdfCanvasRef.current) return;
            const viewport = page.getViewport({ scale: PDF_SCALE * dpr });
            const canvas = pdfCanvasRef.current;

            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const logW = viewport.width / dpr;
            const logH = viewport.height / dpr;
            canvas.style.width = logW + 'px';
            canvas.style.height = logH + 'px';

            setPdfDimensions({ width: logW, height: logH });

            const ctx = canvas.getContext('2d');
            const task = page.render({ canvasContext: ctx, viewport });
            renderTaskRef.current = task;
            task.promise.catch(() => {}); // cancelled renders are silent
        });
    }, [pdfDoc, currentPage]);

    // ── Load annotation layer when page or canvas is ready ───────────────
    useEffect(() => {
        if (!canvasRef.current || !pdfDimensions) return;
        const stored = annotationsCache.current[currentPage];
        canvasRef.current.loadFromJSON(stored ?? null);
        setCanUndo(undoMgr.current.canUndo(currentPage));
        setCanRedo(undoMgr.current.canRedo(currentPage));
    }, [currentPage, pdfDimensions]);

    // ── Save helpers ──────────────────────────────────────────────────────
    const savePage = useCallback(async (pageNum) => {
        if (!paper || !canvasRef.current) return;
        const json = canvasRef.current.toJSON();
        annotationsCache.current[pageNum] = json;
        await savePageAnnotation(paper.id, pageNum, json);
    }, [paper]);

    const scheduleAutoSave = useCallback(() => {
        clearTimeout(autoSaveTimer.current);
        autoSaveTimer.current = setTimeout(async () => {
            await savePage(currentPage);
            setDirty(false);
            setSaveStatus('saved');
            setTimeout(() => setSaveStatus(null), 2000);
        }, 2000);
    }, [currentPage, savePage]);

    // ── Canvas change callback (from AnnotationCanvas) ───────────────────
    const handleCanvasChange = useCallback(({ prevState }) => {
        undoMgr.current.push(currentPage, prevState);
        setCanUndo(true);
        setCanRedo(false);
        setDirty(true);
        scheduleAutoSave();
    }, [currentPage, scheduleAutoSave]);

    // ── Undo / Redo ───────────────────────────────────────────────────────
    const handleUndo = useCallback(() => {
        if (!canvasRef.current || !undoMgr.current.canUndo(currentPage)) return;
        const currentState = canvasRef.current.toJSON();
        const prevState = undoMgr.current.undo(currentPage, currentState);
        canvasRef.current.loadFromJSON(prevState ?? null);
        setCanUndo(undoMgr.current.canUndo(currentPage));
        setCanRedo(undoMgr.current.canRedo(currentPage));
        setDirty(true);
        scheduleAutoSave();
    }, [currentPage, scheduleAutoSave]);

    const handleRedo = useCallback(() => {
        if (!canvasRef.current || !undoMgr.current.canRedo(currentPage)) return;
        const currentState = canvasRef.current.toJSON();
        const nextState = undoMgr.current.redo(currentPage, currentState);
        if (nextState) canvasRef.current.loadFromJSON(nextState);
        setCanUndo(undoMgr.current.canUndo(currentPage));
        setCanRedo(undoMgr.current.canRedo(currentPage));
        setDirty(true);
        scheduleAutoSave();
    }, [currentPage, scheduleAutoSave]);

    // ── Manual save ───────────────────────────────────────────────────────
    const handleSave = useCallback(async () => {
        setSaveStatus('saving');
        await savePage(currentPage);
        setDirty(false);
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus(null), 2000);
    }, [currentPage, savePage]);

    // ── Clear page ────────────────────────────────────────────────────────
    const handleClear = useCallback(() => {
        if (!window.confirm('Clear all annotations on this page?')) return;
        const prevState = canvasRef.current?.toJSON();
        if (prevState) undoMgr.current.push(currentPage, prevState);
        canvasRef.current?.clear();
        setCanUndo(true);
        setCanRedo(false);
        setDirty(true);
        scheduleAutoSave();
    }, [currentPage, scheduleAutoSave]);

    // ── Export ────────────────────────────────────────────────────────────
    const handleExport = useCallback(async () => {
        if (!paper || !pdfDimensions) return;
        await savePage(currentPage);
        const { exportAnnotatedPDF } = await import('../services/annotation/pdfExport.js');
        await exportAnnotatedPDF(paper, annotationsCache.current, pdfDimensions);
    }, [paper, currentPage, savePage, pdfDimensions]);

    // ── Page navigation ───────────────────────────────────────────────────
    const handlePageSelect = useCallback(async (newPage) => {
        if (newPage === currentPage || newPage < 1 || newPage > pageCount) return;
        await savePage(currentPage);
        setCurrentPage(newPage);
    }, [currentPage, pageCount, savePage]);

    const handlePrevPage = useCallback(() => handlePageSelect(currentPage - 1), [currentPage, handlePageSelect]);
    const handleNextPage = useCallback(() => handlePageSelect(currentPage + 1), [currentPage, handlePageSelect]);

    // ── Close ─────────────────────────────────────────────────────────────
    const handleClose = useCallback(async () => {
        if (dirty) await savePage(currentPage);
        navigate('/past-papers');
    }, [dirty, currentPage, savePage, navigate]);

    // ── Keyboard shortcuts ────────────────────────────────────────────────
    useEffect(() => {
        const onKey = (e) => {
            // Don't intercept when user is typing in an input or in fabric text editing
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (e.target.isContentEditable) return;

            if ((e.metaKey || e.ctrlKey) && !e.shiftKey && e.key === 'z') { e.preventDefault(); handleUndo(); return; }
            if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'z') { e.preventDefault(); handleRedo(); return; }
            if ((e.metaKey || e.ctrlKey) && e.key === 's') { e.preventDefault(); handleSave(); return; }

            if (!e.metaKey && !e.ctrlKey && !e.altKey) {
                const toolMap = { p: 'pen', h: 'highlighter', t: 'text', r: 'rect', c: 'circle', l: 'line', e: 'eraser', v: 'select' };
                if (toolMap[e.key]) { setActiveTool(toolMap[e.key]); return; }
                if (e.key === 'ArrowLeft') { e.preventDefault(); handlePrevPage(); }
                if (e.key === 'ArrowRight') { e.preventDefault(); handleNextPage(); }
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [handleUndo, handleRedo, handleSave, handlePrevPage, handleNextPage]);

    // ── Unsaved changes guard (beforeunload only — useBlocker requires data router) ─
    useEffect(() => {
        const handler = (e) => { if (dirty) { e.preventDefault(); e.returnValue = ''; } };
        window.addEventListener('beforeunload', handler);
        return () => window.removeEventListener('beforeunload', handler);
    }, [dirty]);

    // ── Cleanup ───────────────────────────────────────────────────────────
    useEffect(() => () => clearTimeout(autoSaveTimer.current), []);

    if (!paper) {
        return (
            <div className="annotate-page">
                <div className="annotate-status">
                    <div className="annotate-spinner" />
                    <span>Loading paper…</span>
                </div>
            </div>
        );
    }

    const paperTitle = `${paper.year} ${paper.month} — ${paper.unit} ${paper.unitName}`;

    return (
        <div className="annotate-page">
            <AnnotationToolbar
                activeTool={activeTool}
                onToolChange={setActiveTool}
                toolOptions={toolOptions}
                onOptionsChange={(partial) => setToolOptions((prev) => ({ ...prev, ...partial }))}
                canUndo={canUndo}
                canRedo={canRedo}
                onUndo={handleUndo}
                onRedo={handleRedo}
                onClear={handleClear}
                onSave={handleSave}
                onExport={handleExport}
                onClose={handleClose}
                saveStatus={saveStatus}
                dirty={dirty}
                paperTitle={paperTitle}
                currentPage={currentPage}
                pageCount={pageCount}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
            />

            <div className="annotate-body">
                {pdfDoc && pageCount > 0 && (
                    <ThumbnailSidebar
                        pdfDoc={pdfDoc}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        onPageSelect={handlePageSelect}
                    />
                )}

                <div className="annotate-scroll-area">
                    {pdfStatus === 'loading' && (
                        <div className="annotate-status">
                            <div className="annotate-spinner" />
                            <span>Loading PDF…</span>
                        </div>
                    )}
                    {pdfStatus === 'error' && (
                        <div className="annotate-status annotate-status--error">
                            Could not load the PDF. Check your connection or try again.
                        </div>
                    )}
                    {pdfStatus === 'ready' && (
                        <div
                            className="annotate-canvas-wrapper"
                            style={pdfDimensions
                                ? { width: pdfDimensions.width, height: pdfDimensions.height }
                                : { minWidth: 600, minHeight: 800 }
                            }
                        >
                            {/* Layer 1 — PDF rendered by pdf.js */}
                            <canvas ref={pdfCanvasRef} className="annotate-pdf-canvas" />

                            {/* Layer 2 — fabric.js annotation canvas */}
                            {pdfDimensions && (
                                <AnnotationCanvas
                                    ref={canvasRef}
                                    width={pdfDimensions.width}
                                    height={pdfDimensions.height}
                                    activeTool={activeTool}
                                    toolOptions={toolOptions}
                                    onCanvasChange={handleCanvasChange}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
