import {
  Eraser,
  Highlighter,
  PenLine,
  Trash2,
  X,
} from 'lucide-react';

/**
 * AnnotationToolbar
 * Floating side-panel that controls the annotation canvas.
 *
 * Props:
 *   active       {boolean}     — annotation mode on/off
 *   onToggle     {Function}    — toggle mode
 *   tool         {string}      — 'pen' | 'highlighter' | 'eraser'
 *   onTool       {Function}    — (tool) => void
 *   color        {string}      — hex colour
 *   onColor      {Function}    — (hex) => void
 *   size         {'s'|'m'|'l'} — stroke size
 *   onSize       {Function}    — (size) => void
 *   onClear      {Function}    — clear canvas
 */

const COLORS = [
  { hex: '#ffffff', label: 'White' },
  { hex: '#facc15', label: 'Yellow' },
  { hex: '#fb923c', label: 'Orange' },
  { hex: '#f87171', label: 'Red' },
  { hex: '#34d399', label: 'Green' },
  { hex: '#60a5fa', label: 'Blue' },
  { hex: '#e879f9', label: 'Pink' },
  { hex: '#000000', label: 'Black' },
];

const TOOLS = [
  { id: 'pen',         icon: PenLine,     label: 'Pen' },
  { id: 'highlighter', icon: Highlighter, label: 'Highlighter' },
  { id: 'eraser',      icon: Eraser,      label: 'Eraser' },
];

const SIZES = [
  { id: 's', label: 'S' },
  { id: 'm', label: 'M' },
  { id: 'l', label: 'L' },
];

export default function AnnotationToolbar({
  active, onToggle,
  tool, onTool,
  color, onColor,
  size, onSize,
  onClear,
}) {
  return (
    <div className={`annot-toolbar ${active ? 'annot-toolbar--active' : ''}`}>

      {/* ── Toggle button (always visible) ── */}
      <button
        className={`annot-toggle-btn ${active ? 'active' : ''}`}
        onClick={onToggle}
        title="Toggle annotation mode (A)"
        aria-label="Toggle annotation mode"
      >
        <PenLine size={18} />
      </button>

      {/* ── Expanded panel (only when active) ── */}
      {active && (
        <div className="annot-panel">

          {/* Divider */}
          <div className="annot-divider" />

          {/* Tool buttons */}
          <div className="annot-section">
            {TOOLS.map((t) => {
              const ToolIcon = t.icon;
              return (
                <button
                  key={t.id}
                  className={`annot-tool-btn ${tool === t.id ? 'active' : ''}`}
                  onClick={() => onTool(t.id)}
                  title={t.label}
                  aria-label={t.label}
                >
                  <ToolIcon size={16} />
                </button>
              );
            })}
          </div>

          <div className="annot-divider" />

          {/* Colour swatches */}
          <div className="annot-section annot-colors">
            {COLORS.map(({ hex, label }) => (
              <button
                key={hex}
                className={`annot-color-swatch ${color === hex ? 'active' : ''}`}
                style={{ background: hex }}
                onClick={() => onColor(hex)}
                title={label}
                aria-label={label}
              />
            ))}
          </div>

          <div className="annot-divider" />

          {/* Size selector */}
          <div className="annot-section">
            {SIZES.map(({ id, label }) => (
              <button
                key={id}
                className={`annot-size-btn ${size === id ? 'active' : ''}`}
                onClick={() => onSize(id)}
                title={`Size ${label}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="annot-divider" />

          {/* Clear */}
          <button
            className="annot-tool-btn annot-clear-btn"
            onClick={onClear}
            title="Clear annotations (C)"
            aria-label="Clear annotations"
          >
            <Trash2 size={16} />
          </button>

        </div>
      )}
    </div>
  );
}
