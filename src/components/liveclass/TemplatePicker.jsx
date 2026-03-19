import { useState } from 'react';
import { X, LayoutTemplate } from 'lucide-react';
import { templatesBySubject, getTemplateSubjects } from '../../data/liveClassTemplates/index.js';

const SUBJECT_LABELS = {
  chemistry: 'Chemistry',
  physics: 'Physics',
  biology: 'Biology',
  mathematics: 'Mathematics',
  business: 'Business',
};

/**
 * Template picker side-panel for the Live Class whiteboard.
 * Shows a grid of preset canvas templates grouped by subject.
 * Clicking a template calls onLoadTemplate with the full template object.
 *
 * @param {{ onLoadTemplate: (template: object) => void, onClose: () => void }} props
 */
export default function TemplatePicker({ onLoadTemplate, onClose }) {
  const subjects = getTemplateSubjects();
  const [activeSubject, setActiveSubject] = useState(subjects[0] || 'chemistry');
  const templates = templatesBySubject[activeSubject] || [];

  return (
    <div className="lc-template-panel card">
      <div className="lc-template-header">
        <h3><LayoutTemplate size={16} /> Templates</h3>
        <button className="btn btn-ghost btn-sm" onClick={onClose} title="Close">
          <X size={16} />
        </button>
      </div>

      {/* Subject tabs */}
      <div className="lc-template-tabs">
        {subjects.map((s) => (
          <button
            key={s}
            className={`lc-template-tab ${activeSubject === s ? 'lc-template-tab--active' : ''}`}
            onClick={() => setActiveSubject(s)}
          >
            {SUBJECT_LABELS[s] || s}
          </button>
        ))}
      </div>

      {/* Template grid */}
      <div className="lc-template-body">
        {templates.length === 0 && (
          <p className="lc-template-empty">No templates for this subject yet.</p>
        )}
        {templates.map((tpl) => (
          <button
            key={tpl.id}
            className="lc-template-card"
            onClick={() => onLoadTemplate(tpl)}
            title={tpl.description}
          >
            <div className="lc-template-preview">
              <LayoutTemplate size={28} />
            </div>
            <div className="lc-template-info">
              <span className="lc-template-name">{tpl.label}</span>
              <span className="lc-template-desc">{tpl.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
