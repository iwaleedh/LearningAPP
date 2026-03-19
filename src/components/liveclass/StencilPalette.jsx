import { useState } from 'react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { stencilsBySubject, getStencilCategories } from '../../data/liveClassStencils/index.js';

const SUBJECT_LABELS = {
  chemistry: 'Chemistry',
  physics: 'Physics',
  biology: 'Biology',
  mathematics: 'Mathematics',
  business: 'Business',
};
const SUBJECTS = Object.keys(SUBJECT_LABELS);

/**
 * Drag-and-drop stencil sidebar for the Live Class whiteboard.
 * Teacher or student drags a stencil thumbnail → drops onto canvas.
 *
 * @param {{ onDropStencil: (stencil: object) => void, onClose: () => void }} props
 */
export default function StencilPalette({ onDropStencil, onClose }) {
  const [activeSubject, setActiveSubject] = useState('chemistry');
  const [expandedCats, setExpandedCats] = useState({});

  const categories = getStencilCategories(activeSubject);
  const stencils = stencilsBySubject[activeSubject] || [];

  const toggleCat = (cat) =>
    setExpandedCats((prev) => ({ ...prev, [cat]: !prev[cat] }));

  /** Start HTML5 drag — encode stencil id + svg into dataTransfer */
  const handleDragStart = (e, stencil) => {
    e.dataTransfer.setData('application/x-stencil', JSON.stringify({
      id: stencil.id,
      svg: stencil.svg,
      defaultWidth: stencil.defaultWidth,
      defaultHeight: stencil.defaultHeight,
      label: stencil.label,
    }));
    e.dataTransfer.effectAllowed = 'copy';
  };

  /** Click = instant drop at canvas centre (fallback for touch / non-drag) */
  const handleClick = (stencil) => {
    onDropStencil?.(stencil);
  };

  return (
    <div className="lc-stencil-panel card">
      <div className="lc-stencil-header">
        <h3>Stencils</h3>
        <button className="btn btn-ghost btn-sm" onClick={onClose} title="Close"><X size={16} /></button>
      </div>

      {/* Subject tabs */}
      <div className="lc-stencil-tabs">
        {SUBJECTS.map((s) => (
          <button
            key={s}
            className={`lc-stencil-tab ${activeSubject === s ? 'lc-stencil-tab--active' : ''}`}
            onClick={() => setActiveSubject(s)}
          >
            {SUBJECT_LABELS[s]}
          </button>
        ))}
      </div>

      {/* Category accordion */}
      <div className="lc-stencil-body">
        {categories.map((cat) => {
          const isOpen = expandedCats[cat] !== false; // default open
          const items = stencils.filter((s) => s.category === cat);
          return (
            <div key={cat} className="lc-stencil-cat">
              <button className="lc-stencil-cat-btn" onClick={() => toggleCat(cat)}>
                {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                <span>{cat}</span>
                <span className="lc-stencil-cat-count">{items.length}</span>
              </button>
              {isOpen && (
                <div className="lc-stencil-grid">
                  {items.map((st) => (
                    <div
                      key={st.id}
                      className="lc-stencil-item"
                      draggable
                      onDragStart={(e) => handleDragStart(e, st)}
                      onClick={() => handleClick(st)}
                      title={st.label}
                    >
                      <div
                        className="lc-stencil-preview"
                        dangerouslySetInnerHTML={{ __html: st.svg }}
                      />
                      <span className="lc-stencil-label">{st.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
