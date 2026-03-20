/** SlideCalloutTip.jsx — Purple tip/exam-hint slide */
export default function SlideCalloutTip({ slide, animStep }) {
  const { title, elements = [] } = slide;
  const titleVisible = animStep >= 0;
  const bodyVisible = animStep >= 1;

  return (
    <div className="pres-slide-tip" style={{ height: '100%' }}>
      <div
        className={`pres-tip-header pres-element ${titleVisible ? 'visible' : ''}`}
        style={{ transitionDelay: '0ms' }}
      >
        <span className="pres-tip-header-icon">💬</span>
        <span className="pres-tip-header-text">{title}</span>
      </div>

      <div
        className={`pres-tip-body pres-element ${bodyVisible ? 'visible' : ''}`}
        style={{ transitionDelay: '80ms' }}
      >
        {elements.map((el, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: el.html }} />
        ))}
      </div>
    </div>
  );
}
