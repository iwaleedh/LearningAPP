import { useState, useEffect, useRef } from 'react';
import { X, Type, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

const FONT_CATEGORIES = [
  {
    id: 'handwriting',
    label: '✏️ Handwriting',
    fonts: [
      { id: 'caveat',       name: 'Caveat',               value: 'Caveat, cursive' },
      { id: 'kalam',        name: 'Kalam',                value: 'Kalam, cursive' },
      { id: 'patrick',      name: 'Patrick Hand',         value: "'Patrick Hand', cursive" },
      { id: 'permanent',    name: 'Permanent Marker',     value: "'Permanent Marker', cursive" },
      { id: 'dancing',      name: 'Dancing Script',       value: "'Dancing Script', cursive" },
      { id: 'gloria',       name: 'Gloria Hallelujah',    value: "'Gloria Hallelujah', cursive" },
      { id: 'indie',        name: 'Indie Flower',         value: "'Indie Flower', cursive" },
      { id: 'architects',   name: 'Architects Daughter',  value: "'Architects Daughter', cursive" },
      { id: 'shadows',      name: 'Shadows Into Light',   value: "'Shadows Into Light', cursive" },
      { id: 'schoolbell',   name: 'Schoolbell',           value: 'Schoolbell, cursive' },
    ],
  },
  {
    id: 'sans',
    label: 'Sans',
    fonts: [
      { id: 'inter',    name: 'Inter',     value: 'Inter, sans-serif' },
      { id: 'nunito',   name: 'Nunito',    value: 'Nunito, sans-serif' },
      { id: 'poppins',  name: 'Poppins',   value: 'Poppins, sans-serif' },
      { id: 'roboto',   name: 'Roboto',    value: 'Roboto, sans-serif' },
      { id: 'opensans', name: 'Open Sans', value: "'Open Sans', sans-serif" },
      { id: 'lato',     name: 'Lato',      value: 'Lato, sans-serif' },
    ],
  },
  {
    id: 'serif',
    label: 'Serif',
    fonts: [
      { id: 'merriweather', name: 'Merriweather',     value: 'Merriweather, serif' },
      { id: 'playfair',     name: 'Playfair Display', value: "'Playfair Display', serif" },
      { id: 'lora',         name: 'Lora',             value: 'Lora, serif' },
    ],
  },
  {
    id: 'mono',
    label: 'Mono',
    fonts: [
      { id: 'jetbrains', name: 'JetBrains Mono', value: "'JetBrains Mono', monospace" },
      { id: 'fira',      name: 'Fira Code',      value: "'Fira Code', monospace" },
    ],
  },
  {
    id: 'dhivehi',
    label: 'ދިވެހި',
    fonts: [
      { id: 'faruma', name: 'ފާރުމާ (Faruma)', value: "'Noto Sans Thaana', 'MV Boli', sans-serif" },
    ],
  },
];

const ALL_FONTS = FONT_CATEGORIES.flatMap(c => c.fonts);

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
  onClose,
}) {
  const font = currentFont || ALL_FONTS[0].value;
  const size = currentSize || 24;
  const weight = currentWeight || 'normal';
  const underline = isUnderline || false;
  const italic = isItalic || false;
  const align = currentAlign || 'left';
  const [previewText, setPreviewText] = useState('Sample Text');
  const pickerRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    const timer = setTimeout(() => {
      const handleClickOutside = (e) => {
        if (pickerRef.current && !pickerRef.current.contains(e.target)) {
          onClose();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, 100);
    return () => clearTimeout(timer);
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

  return (
    <div className="lc-font-picker" ref={pickerRef}>
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

      {/* Font family */}
      <div className="lc-font-row">
        <label className="lc-font-label">Font</label>
        <select
          className="lc-font-select"
          value={font}
          style={{ fontFamily: font }}
          onChange={(e) => emit({ font: e.target.value })}
        >
          {FONT_CATEGORIES.map(cat => (
            <optgroup key={cat.id} label={cat.label}>
              {cat.fonts.map(f => (
                <option key={f.id} value={f.value}>{f.name}</option>
              ))}
            </optgroup>
          ))}
        </select>
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
              className={`lc-font-style-btn${italic ? ' lc-font-style-btn--active' : ''}`}
              onClick={() => emit({ italic: !italic })}
              title="Italic"
            >
              <Italic size={15} />
            </button>
            <button
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
