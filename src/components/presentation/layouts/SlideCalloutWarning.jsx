/** SlideCalloutWarning.jsx — Orange common-mistake/warning slide */
export default function SlideCalloutWarning({ slide, animStep }) {
  const { title, elements = [] } = slide;
  const titleVisible = animStep >= 0;
  const bodyVisible = animStep >= 1;

  return (
    <div className="pres-slide-warning" style={{ height: '100%' }}>
      <div
        className={`pres-warning-header pres-element ${titleVisible ? 'visible' : ''}`}
        style={{ transitionDelay: '0ms' }}
      >
        <span className="pres-warning-header-icon">⚠️</span>
        <span className="pres-warning-header-text">{title}</span>
      </div>

      <div
        className={`pres-warning-body pres-element ${bodyVisible ? 'visible' : ''}`}
        style={{ transitionDelay: '80ms' }}
      >
        {elements.map((el, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: el.html }} />
        ))}
      </div>
    </div>
  );
}
