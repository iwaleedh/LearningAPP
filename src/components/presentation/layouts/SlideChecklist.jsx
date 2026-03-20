/** SlideChecklist.jsx — Exam revision checklist slide */
export default function SlideChecklist({ slide, animStep }) {
  const { elements = [] } = slide;

  return (
    <div className="pres-slide-checklist">
      <div className="pres-slide-title-bar">
        <h2 className="pres-slide-title">✅ Exam Checklist</h2>
      </div>

      <div className="pres-slide-body">
        {elements.map((el, i) => {
          const isVisible = animStep >= el.delay;
          return (
            <div
              key={i}
              className={`pres-checklist-item pres-element ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: isVisible ? `${i * 60}ms` : '0ms' }}
            >
              <div className="pres-checklist-icon">
                {el.checked ? '✓' : ''}
              </div>
              <span>{el.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
