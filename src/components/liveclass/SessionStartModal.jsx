import { useState } from 'react';
import { X, Play, BookOpen } from 'lucide-react';

const BG_OPTIONS = [
  { id: 'white',  label: 'Blank',    emoji: '⬜' },
  { id: 'lined',  label: 'Lined',    emoji: '📋' },
  { id: 'grid',   label: 'Graph',    emoji: '🔲' },
  { id: 'dotted', label: 'Dotted',   emoji: '∷'  },
  { id: 'yellow', label: 'Notepad',  emoji: '📝' },
];

/**
 * Modal for the teacher to configure and start a new Live Class session.
 *
 * @param {{ onStart: (title:string, backgroundType:string) => void, onClose: () => void }} props
 */
export default function SessionStartModal({ onStart, onClose }) {
  const [title, setTitle] = useState('');
  const [bg, setBg] = useState('white');
  const [loading, setLoading] = useState(false);

  async function handleStart() {
    if (!title.trim()) return;
    setLoading(true);
    try {
      await onStart(title.trim(), bg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="lc-modal-overlay" onClick={onClose}>
      <div className="lc-modal card" onClick={e => e.stopPropagation()}>
        <button className="lc-modal-close btn btn-ghost btn-icon" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="lc-modal-header">
          <BookOpen size={22} />
          <h2>Start Live Class</h2>
        </div>

        <label className="lc-modal-label">
          Session title
          <input
            className="lc-modal-input"
            type="text"
            placeholder="e.g. WCH11 — Moles &amp; Equations"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleStart()}
            autoFocus
          />
        </label>

        <label className="lc-modal-label">
          Paper background
          <div className="lc-bg-grid">
            {BG_OPTIONS.map(opt => (
              <button
                key={opt.id}
                className={`lc-bg-btn ${bg === opt.id ? 'lc-bg-btn--active' : ''}`}
                onClick={() => setBg(opt.id)}
                type="button"
              >
                <span className="lc-bg-preview" data-bg={opt.id}></span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        </label>

        <button
          className="btn btn-primary lc-modal-start-btn"
          onClick={handleStart}
          disabled={loading || !title.trim()}
        >
          {loading ? 'Starting…' : (
            <>
              <Play size={16} />
              Start Class
            </>
          )}
        </button>
      </div>
    </div>
  );
}
