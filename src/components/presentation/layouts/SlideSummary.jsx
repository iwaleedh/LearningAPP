/** SlideSummary.jsx — Final recap slide */
export default function SlideSummary({ slide, animStep }) {
  const { elements = [] } = slide;
  const headerVisible = animStep >= 0;

  return (
    <div className="pres-slide-summary" style={{ height: '100%' }}>
      <div
        className={`pres-summary-header pres-element ${headerVisible ? 'visible' : ''}`}
        style={{ transitionDelay: '0ms' }}
      >
        <span className="pres-summary-header-icon">📋</span>
        <span className="pres-summary-header-text">Lesson Summary</span>
      </div>

      <div className="pres-summary-body">
        {elements.map((el, i) => {
          const isVisible = animStep >= el.delay;
          return (
            <div
              key={i}
              className={`pres-summary-point pres-element ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              <span className="pres-summary-bullet">✦</span>
              <span>{el.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
