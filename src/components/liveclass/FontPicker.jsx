import { useState, useEffect, useRef } from 'react';
import { X, Type, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import {
  ALL_LIVE_CLASS_FONTS,
  FONT_CATEGORIES,
  HANDWRITING_FONT_OPTIONS,
  getLiveClassFontLabel,
} from './fontDefaults.js';

const ALL_FONTS = ALL_LIVE_CLASS_FONTS;

const FONT_SIZES = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 42, 48, 60, 72, 96];

const FONT_WEIGHTS = [
  { id: 'normal', label: 'Regular', value: 'normal' },
  { id: 'bold', label: 'Bold', value: 'bold' },
  { id: 'light', label: 'Light', value: '300' },
  { id: 'semibold', label: 'Semi', value: '600' },
];

const ALIGN_OPTIONS = [
  { value: 'left', icon: AlignLeft },
  { value: 'center', icon: AlignCenter },
  { value: 'right', icon: AlignRight },
];

export default function FontPicker({
  currentFont,
  currentSize,
  currentWeight,
  currentColor,
  currentAlign,
  isUnderline,
  isItalic,
  onChange,
  style,
  onClose,
}) {
  const font = currentFont || ALL_FONTS[0].value;
  const size = currentSize || 24;
  const weight = currentWeight || 'normal';
  const underline = isUnderline || false;
  const italic = isItalic || false;
  const align = currentAlign || 'left';
  const [previewText, setPreviewText] = useState('Write clearly on the board');
  const [showFontMenu, setShowFontMenu] = useState(false);
  const [fontQuery, setFontQuery] = useState('');
  const pickerRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    let handleClickOutside;
    const timer = setTimeout(() => {
      handleClickOutside = (e) => {
        if (pickerRef.current && !pickerRef.current.contains(e.target)) {
          onClose();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (handleClickOutside) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [onClose]);

  // emit — pass explicit new values to avoid React async state batching
  const emit = (overrides = {}) => {
    onChange({
      fontFamily:     overrides.font      !== undefined ? overrides.font      : font,
      fontSize:       overrides.size      !== undefined ? overrides.size      : size,
      fontWeight:     overrides.weight    !== undefined ? overrides.weight    : weight,
      textDecoration: (overrides.underline !== undefined ? overrides.underline : underline) ? 'underline' : '',
      fontStyle:      (overrides.italic    !== undefined ? overrides.italic    : italic)    ? 'italic'    : 'normal',
      textAlign:      overrides.align     !== undefined ? overrides.align     : align,
      fill:           currentColor || '#1f2937',
    });
  };

  const isDhivehi = font.includes('Thaana') || font.includes('MV Boli');
  const selectedFontLabel = getLiveClassFontLabel(font);
  const fontPreviewSample = previewText.trim() || 'Sample text';
  const normalizedFontQuery = fontQuery.trim().toLowerCase();
  const filteredFontCategories = FONT_CATEGORIES
    .map((category) => ({
      ...category,
      fonts: category.fonts.filter((fontOption) => (
        !normalizedFontQuery || fontOption.name.toLowerCase().includes(normalizedFontQuery)
      )),
    }))
    .filter((category) => category.fonts.length > 0);
  const totalFontCount = ALL_FONTS.length;

  return (
    <div
      className="lc-font-picker"
      ref={pickerRef}
      style={style}
      onMouseDown={(event) => event.stopPropagation()}
      onClick={(event) => event.stopPropagation()}
    >
      {/* Header */}
      <div className="lc-font-picker-header">
        <span className="lc-font-picker-title">
          <Type size={16} />
          Font
        </span>
        <button className="lc-font-picker-close" onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>
      </div>

      {/* Live preview */}
      <div className="lc-font-preview">
        <input
          type="text"
          value={previewText}
          onChange={(e) => setPreviewText(e.target.value)}
          className="lc-font-preview-input"
          placeholder="Type to preview…"
          dir={isDhivehi ? 'rtl' : 'ltr'}
          style={{
            fontFamily:     font,
            fontSize:       Math.min(size, 28),
            fontWeight:     weight,
            textDecoration: underline ? 'underline' : 'none',
            fontStyle:      italic ? 'italic' : 'normal',
            textAlign:      align,
            color:          currentColor || '#1f2937',
          }}
        />
      </div>

      <div className="lc-font-row">
        <div className="lc-font-section-head">
          <label className="lc-font-label">Handwriting picks</label>
          <span className="lc-font-helper">Visible previews for classroom writing</span>
        </div>
        <div className="lc-font-swatch-grid" role="listbox" aria-label="Handwriting fonts">
          {HANDWRITING_FONT_OPTIONS.map((fontOption) => {
            const isActive = fontOption.value === font;
            return (
              <button
                key={fontOption.id}
                type="button"
                className={`lc-font-swatch${isActive ? ' lc-font-swatch--active' : ''}`}
                style={{ fontFamily: fontOption.value }}
                onClick={() => emit({ font: fontOption.value })}
                aria-pressed={isActive}
                title={fontOption.name}
              >
                <span className="lc-font-swatch-name">{fontOption.name}</span>
                <span className="lc-font-swatch-sample">{fontPreviewSample}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Font family */}
      <div className="lc-font-row">
        <div className="lc-font-section-head">
          <label className="lc-font-label">All fonts</label>
          <span className="lc-font-helper">Current: {selectedFontLabel}</span>
        </div>
        <div className="lc-font-family-dropdown">
          <button
            type="button"
            className={`lc-font-family-trigger${showFontMenu ? ' lc-font-family-trigger--active' : ''}`}
            onClick={(event) => {
              event.stopPropagation();
              setShowFontMenu((value) => !value);
            }}
            title={`Choose font: ${selectedFontLabel}`}
          >
            <span className="lc-font-family-trigger-main" style={{ fontFamily: font }}>{selectedFontLabel}</span>
            <span className="lc-font-family-trigger-meta">{totalFontCount} fonts</span>
          </button>

          {showFontMenu && (
            <div className="lc-font-family-menu">
              <input
                type="text"
                value={fontQuery}
                onChange={(event) => setFontQuery(event.target.value)}
                className="lc-font-family-search"
                placeholder="Search fonts..."
              />

              <div className="lc-font-family-list" role="listbox" aria-label="All fonts">
                {filteredFontCategories.map((category) => (
                  <div key={category.id} className="lc-font-family-group">
                    <div className="lc-font-family-group-label">{category.label}</div>
                    {category.fonts.map((fontOption) => {
                      const isActive = fontOption.value === font;
                      return (
                        <button
                          key={fontOption.id}
                          type="button"
                          className={`lc-font-family-option${isActive ? ' lc-font-family-option--active' : ''}`}
                          style={{ fontFamily: fontOption.value }}
                          onClick={(event) => {
                            event.stopPropagation();
                            emit({ font: fontOption.value });
                            setShowFontMenu(false);
                          }}
                          aria-pressed={isActive}
                          title={fontOption.name}
                        >
                          <span className="lc-font-family-option-name">{fontOption.name}</span>
                          <span className="lc-font-family-option-sample">{fontPreviewSample}</span>
                        </button>
                      );
                    })}
                  </div>
                ))}

                {filteredFontCategories.length === 0 && (
                  <div className="lc-font-family-empty">No fonts match that search.</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Size + Weight */}
      <div className="lc-font-row lc-font-row--split">
        <div>
          <label className="lc-font-label">Size</label>
          <select
            className="lc-font-select"
            value={size}
            onChange={(e) => emit({ size: Number(e.target.value) })}
          >
            {FONT_SIZES.map(s => (
              <option key={s} value={s}>{s}px</option>
            ))}
          </select>
        </div>
        <div>
          <label className="lc-font-label">Weight</label>
          <select
            className="lc-font-select"
            value={weight}
            onChange={(e) => emit({ weight: e.target.value })}
          >
            {FONT_WEIGHTS.map(w => (
              <option key={w.id} value={w.value}>{w.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Align + Style */}
      <div className="lc-font-row lc-font-row--split">
        <div>
          <label className="lc-font-label">Align</label>
          <div className="lc-font-style-toggles">
            {ALIGN_OPTIONS.map((option) => {
              const IconComponent = option.icon;
              return (
                <button
                  key={option.value}
                  type="button"
                  className={`lc-font-style-btn${align === option.value ? ' lc-font-style-btn--active' : ''}`}
                  onClick={() => emit({ align: option.value })}
                  title={option.value.charAt(0).toUpperCase() + option.value.slice(1)}
                >
                  <IconComponent size={15} />
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <label className="lc-font-label">Style</label>
          <div className="lc-font-style-toggles">
            <button
              type="button"
              className={`lc-font-style-btn${italic ? ' lc-font-style-btn--active' : ''}`}
              onClick={() => emit({ italic: !italic })}
              title="Italic"
            >
              <Italic size={15} />
            </button>
            <button
              type="button"
              className={`lc-font-style-btn${underline ? ' lc-font-style-btn--active' : ''}`}
              onClick={() => emit({ underline: !underline })}
              title="Underline"
            >
              <Underline size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
