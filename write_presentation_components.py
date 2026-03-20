#!/usr/bin/env python3
"""Write all 11 presentation layout JSX components."""
import os

BASE = "src/components/presentation/layouts"

# ── SlideCover ────────────────────────────────────────────────────────────────
SLIDE_COVER = """\
import React from 'react';

export default function SlideCover({ slide, animStep }) {
  const { title, subtitle, objectiveText, unit, theme } = slide;

  return (
    <div className="pres-slide-cover">
      <div className="pres-cover-blob pres-cover-blob-1" />
      <div className="pres-cover-blob pres-cover-blob-2" />

      {unit && (
        <span
          className={`pres-cover-unit pres-element ${animStep >= 0 ? 'visible' : ''}`}
          style={{ transitionDelay: animStep >= 0 ? '0ms' : '0ms' }}
        >
          {theme?.emoji} {unit}
        </span>
      )}

      <h1
        className={`pres-cover-title pres-element ${animStep >= 0 ? 'visible' : ''}`}
        style={{ transitionDelay: animStep >= 0 ? '60ms' : '0ms' }}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {subtitle && (
        <p
          className={`pres-cover-subtitle pres-element ${animStep >= 1 ? 'visible' : ''}`}
          style={{ transitionDelay: animStep >= 1 ? '0ms' : '0ms' }}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}

      {objectiveText && (
        <div
          className={`pres-cover-objective pres-element ${animStep >= 2 ? 'visible' : ''}`}
          style={{ transitionDelay: animStep >= 2 ? '0ms' : '0ms' }}
        >
          <div className="pres-cover-objective-label">Learning Objective</div>
          <p
            className="pres-cover-objective-text"
            dangerouslySetInnerHTML={{ __html: objectiveText }}
          />
        </div>
      )}
    </div>
  );
}
"""

# ── SlideBullets ──────────────────────────────────────────────────────────────
SLIDE_BULLETS = """\
import React from 'react';

export default function SlideBullets({ slide, animStep }) {
  const { title, elements = [] } = slide;

  return (
    <div className="pres-slide-bullets">
      <div className="pres-bullets-header">
        <div className="pres-accent-line" />
        <h2
          className={`pres-slide-title pres-element ${animStep >= 0 ? 'visible' : ''}`}
          style={{ transitionDelay: animStep >= 0 ? '0ms' : '0ms' }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <div className="pres-slide-body">
        {elements.map((el, i) => {
          const isVisible = animStep >= el.delay;
          const delay = isVisible ? `${i * 55}ms` : '0ms';

          if (el.type === 'bullet') {
            return (
              <div
                key={i}
                className={`pres-bullet-item pres-element ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: delay }}
              >
                <span className="pres-bullet-arrow">▶</span>
                <span dangerouslySetInnerHTML={{ __html: el.html || el.text }} />
              </div>
            );
          }
          if (el.type === 'paragraph') {
            return (
              <p
                key={i}
                className={`pres-paragraph-block pres-element ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: delay }}
                dangerouslySetInnerHTML={{ __html: el.html || el.text }}
              />
            );
          }
          if (el.type === 'quote') {
            return (
              <blockquote
                key={i}
                className={`pres-quote-block pres-element ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: delay }}
                dangerouslySetInnerHTML={{ __html: el.html || el.text }}
              />
            );
          }
          if (el.type === 'code') {
            return (
              <pre
                key={i}
                className={`pres-code-block pres-element ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: delay }}
                dangerouslySetInnerHTML={{ __html: el.html || el.text }}
              />
            );
          }
          return (
            <div
              key={i}
              className={`pres-bullet-item pres-element ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: delay }}
            >
              <span className="pres-bullet-arrow">▶</span>
              <span dangerouslySetInnerHTML={{ __html: el.html || el.text }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
"""

# ── SlideInfographic ──────────────────────────────────────────────────────────
SLIDE_INFOGRAPHIC = """\
import React from 'react';

export default function SlideInfographic({ slide, animStep }) {
  const { title, elements = [] } = slide;

  return (
    <div className="pres-slide-infographic">
      <div className="pres-info-top-bar">
        <span
          className={`pres-info-badge pres-element ${animStep >= 0 ? 'visible' : ''}`}
          style={{ transitionDelay: animStep >= 0 ? '0ms' : '0ms' }}
        >
          💡 Key Concept
        </span>
        <h2
          className={`pres-info-title pres-element ${animStep >= 0 ? 'visible' : ''}`}
          style={{ transitionDelay: animStep >= 0 ? '60ms' : '0ms' }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <div className="pres-info-body">
        {elements.map((el, i) => {
          const isVisible = animStep >= el.delay;
          return (
            <div
              key={i}
              className={`pres-info-card pres-element ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: isVisible ? `${i * 65}ms` : '0ms' }}
              dangerouslySetInnerHTML={{ __html: el.html || el.text }}
            />
          );
        })}
      </div>
    </div>
  );
}
"""

# ── SlideTable ────────────────────────────────────────────────────────────────
SLIDE_TABLE = """\
import React from 'react';

export default function SlideTable({ slide, animStep }) {
  const { title, headers = [], rows = [], caption } = slide;

  return (
    <div className="pres-slide-table">
      <div className="pres-table-header">
        <div className="pres-accent-line" />
        <h2
          className={`pres-slide-title pres-element ${animStep >= 0 ? 'visible' : ''}`}
          style={{ transitionDelay: animStep >= 0 ? '0ms' : '0ms' }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <div className="pres-table-wrap">
        <table className="pres-comparison-table">
          {headers.length > 0 && (
            <thead>
              <tr
                className={`pres-element ${animStep >= 1 ? 'visible' : ''}`}
                style={{ transitionDelay: animStep >= 1 ? '0ms' : '0ms' }}
              >
                {headers.map((h, i) => (
                  <th key={i} dangerouslySetInnerHTML={{ __html: h }} />
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {rows.map((row, ri) => {
              const delay = ri + 2;
              const isVisible = animStep >= delay;
              return (
                <tr
                  key={ri}
                  className={`pres-element ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: isVisible ? `${ri * 55}ms` : '0ms' }}
                >
                  {row.map((cell, ci) => (
                    <td key={ci} dangerouslySetInnerHTML={{ __html: cell }} />
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {caption && (
        <p
          className={`pres-slide-caption pres-element ${animStep >= rows.length + 2 ? 'visible' : ''}`}
          style={{ transitionDelay: '0ms' }}
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
    </div>
  );
}
"""

# ── SlideDiagram ──────────────────────────────────────────────────────────────
SLIDE_DIAGRAM = """\
import React from 'react';

export default function SlideDiagram({ slide, animStep }) {
  const { title, svgContent, caption } = slide;

  return (
    <div className="pres-slide-diagram">
      {title && (
        <div className="pres-diagram-header">
          <span className="pres-diagram-icon">◈</span>
          <h2
            className={`pres-diagram-title pres-element ${animStep >= 0 ? 'visible' : ''}`}
            style={{ transitionDelay: animStep >= 0 ? '0ms' : '0ms' }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      )}

      <div
        className={`pres-diagram-body pres-element ${animStep >= 1 ? 'visible' : ''}`}
        style={{ transitionDelay: animStep >= 1 ? '0ms' : '0ms' }}
        dangerouslySetInnerHTML={{ __html: svgContent || '' }}
      />

      {caption && (
        <p
          className={`pres-slide-caption pres-element ${animStep >= 2 ? 'visible' : ''}`}
          style={{ transitionDelay: animStep >= 2 ? '0ms' : '0ms' }}
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
    </div>
  );
}
"""

# ── SlideEquation ─────────────────────────────────────────────────────────────
SLIDE_EQUATION = """\
import React from 'react';

export default function SlideEquation({ slide, animStep }) {
  const { title, elements = [] } = slide;

  return (
    <div className="pres-slide-equation">
      <div className="pres-eq-glow" />

      {title && (
        <h2
          className={`pres-eq-title pres-element ${animStep >= 0 ? 'visible' : ''}`}
          style={{ transitionDelay: animStep >= 0 ? '0ms' : '0ms' }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}

      {elements.map((el, i) => {
        const isVisible = animStep >= el.delay;
        const delay = isVisible ? `${i * 80}ms` : '0ms';

        if (el.type === 'equation') {
          return (
            <div
              key={i}
              className={`pres-eq-card pres-element ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: delay }}
            >
              <div
                className="pres-eq-formula"
                dangerouslySetInnerHTML={{ __html: el.html || el.text }}
              />
            </div>
          );
        }
        if (el.type === 'caption') {
          return (
            <p
              key={i}
              className={`pres-eq-caption pres-element ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: delay }}
              dangerouslySetInnerHTML={{ __html: el.html || el.text }}
            />
          );
        }
        return (
          <p
            key={i}
            className={`pres-paragraph-block pres-element ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: delay }}
            dangerouslySetInnerHTML={{ __html: el.html || el.text }}
          />
        );
      })}
    </div>
  );
}
"""

# ── SlideWorkedExample ────────────────────────────────────────────────────────
SLIDE_WORKED = """\
import React from 'react';

export default function SlideWorkedExample({ slide, animStep }) {
  const { title, elements = [] } = slide;

  return (
    <div className="pres-slide-worked">
      <div className="pres-worked-header">
        <span
          className={`pres-worked-badge pres-element ${animStep >= 0 ? 'visible' : ''}`}
          style={{ transitionDelay: animStep >= 0 ? '0ms' : '0ms' }}
        >
          ✏️ Worked Example
        </span>
        {title && (
          <h2
            className={`pres-worked-title pres-element ${animStep >= 0 ? 'visible' : ''}`}
            style={{ transitionDelay: animStep >= 0 ? '60ms' : '0ms' }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
      </div>

      <div className="pres-worked-steps">
        {elements.map((el, i) => {
          const isVisible = animStep >= el.delay;
          return (
            <div
              key={i}
              className={`pres-step-card pres-element ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: isVisible ? `${i * 60}ms` : '0ms' }}
            >
              <div className="pres-step-number">{i + 1}</div>
              <div
                className="pres-step-text"
                dangerouslySetInnerHTML={{ __html: el.html || el.text }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
"""

# ── SlideCalloutTip ───────────────────────────────────────────────────────────
SLIDE_TIP = """\
import React from 'react';

export default function SlideCalloutTip({ slide, animStep }) {
  const { title, elements = [] } = slide;

  return (
    <div className="pres-slide-tip">
      <div className="pres-tip-top">
        <span
          className={`pres-tip-badge pres-element ${animStep >= 0 ? 'visible' : ''}`}
          style={{ transitionDelay: animStep >= 0 ? '0ms' : '0ms' }}
        >
          💬 Exam Tip
        </span>
        {title && (
          <h2
            className={`pres-tip-title pres-element ${animStep >= 0 ? 'visible' : ''}`}
            style={{ transitionDelay: animStep >= 0 ? '65ms' : '0ms' }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
      </div>

      <div className="pres-tip-body">
        {elements.map((el, i) => {
          const isVisible = animStep >= el.delay;
          return (
            <div
              key={i}
              className={`pres-tip-card pres-element ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: isVisible ? `${i * 55}ms` : '0ms' }}
              dangerouslySetInnerHTML={{ __html: el.html || el.text }}
            />
          );
        })}
      </div>
    </div>
  );
}
"""

# ── SlideCalloutWarning ───────────────────────────────────────────────────────
SLIDE_WARNING = """\
import React from 'react';

export default function SlideCalloutWarning({ slide, animStep }) {
  const { title, elements = [] } = slide;

  return (
    <div className="pres-slide-warning">
      <div className="pres-warning-top">
        <span
          className={`pres-warning-badge pres-element ${animStep >= 0 ? 'visible' : ''}`}
          style={{ transitionDelay: animStep >= 0 ? '0ms' : '0ms' }}
        >
          ⚠️ Watch Out
        </span>
        {title && (
          <h2
            className={`pres-warning-title pres-element ${animStep >= 0 ? 'visible' : ''}`}
            style={{ transitionDelay: animStep >= 0 ? '65ms' : '0ms' }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
      </div>

      <div className="pres-warning-body">
        {elements.map((el, i) => {
          const isVisible = animStep >= el.delay;
          return (
            <div
              key={i}
              className={`pres-warning-card pres-element ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: isVisible ? `${i * 55}ms` : '0ms' }}
              dangerouslySetInnerHTML={{ __html: el.html || el.text }}
            />
          );
        })}
      </div>
    </div>
  );
}
"""

# ── SlideChecklist ────────────────────────────────────────────────────────────
SLIDE_CHECKLIST = """\
import React from 'react';

export default function SlideChecklist({ slide, animStep }) {
  const { title, elements = [] } = slide;

  return (
    <div className="pres-slide-checklist">
      <div className="pres-checklist-header">
        <div className="pres-accent-line" />
        <h2
          className={`pres-slide-title pres-element ${animStep >= 0 ? 'visible' : ''}`}
          style={{ transitionDelay: animStep >= 0 ? '0ms' : '0ms' }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <span className="pres-checklist-badge">Exam Checklist</span>
      </div>

      <div className="pres-checklist-grid">
        {elements.map((el, i) => {
          const isVisible = animStep >= el.delay;
          return (
            <div
              key={i}
              className={`pres-check-item pres-element ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: isVisible ? `${i * 45}ms` : '0ms' }}
            >
              <div className="pres-check-box">✓</div>
              <span
                className="pres-check-text"
                dangerouslySetInnerHTML={{ __html: el.html || el.text }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
"""

# ── SlideSummary ──────────────────────────────────────────────────────────────
SLIDE_SUMMARY = """\
import React from 'react';

export default function SlideSummary({ slide, animStep }) {
  const { title, elements = [] } = slide;

  return (
    <div className="pres-slide-summary">
      <div className="pres-summary-header">
        <div className="pres-accent-line" />
        <h2
          className={`pres-slide-title pres-element ${animStep >= 0 ? 'visible' : ''}`}
          style={{ transitionDelay: animStep >= 0 ? '0ms' : '0ms' }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <span className="pres-summary-badge">Summary</span>
      </div>

      <div className="pres-summary-grid">
        {elements.map((el, i) => {
          const isVisible = animStep >= el.delay;
          return (
            <div
              key={i}
              className={`pres-summary-card pres-element ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: isVisible ? `${i * 45}ms` : '0ms' }}
            >
              <span className="pres-summary-star">✦</span>
              <span
                className="pres-summary-text"
                dangerouslySetInnerHTML={{ __html: el.html || el.text }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
"""

files = {
    'SlideCover.jsx': SLIDE_COVER,
    'SlideBullets.jsx': SLIDE_BULLETS,
    'SlideInfographic.jsx': SLIDE_INFOGRAPHIC,
    'SlideTable.jsx': SLIDE_TABLE,
    'SlideDiagram.jsx': SLIDE_DIAGRAM,
    'SlideEquation.jsx': SLIDE_EQUATION,
    'SlideWorkedExample.jsx': SLIDE_WORKED,
    'SlideCalloutTip.jsx': SLIDE_TIP,
    'SlideCalloutWarning.jsx': SLIDE_WARNING,
    'SlideChecklist.jsx': SLIDE_CHECKLIST,
    'SlideSummary.jsx': SLIDE_SUMMARY,
}

for fname, content in files.items():
    path = os.path.join(BASE, fname)
    with open(path, 'w') as f:
        f.write(content)
    print(f'✓ {fname}')

print('All components written.')
