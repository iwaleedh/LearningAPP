/** SlideInfographic.jsx — Key concept (callout: key) highlighted card */
export default function SlideInfographic({ slide, animStep }) {
  const { title, elements = [], theme } = slide;
  const titleVisible = animStep >= 0;
  const bodyVisible = animStep >= 1;

  return (
    <div className="pres-slide-infographic" style={{ '--pres-color': theme?.primary }}>
      <div
        className={`pres-info-header pres-element ${titleVisible ? 'visible' : ''}`}
        style={{ transitionDelay: '0ms' }}
      >
        <span className="pres-info-icon">💡</span>
        <h2 className="pres-slide-title">{title}</h2>
      </div>

      <div
        className={`pres-info-body pres-element ${bodyVisible ? 'visible' : ''}`}
        style={{ transitionDelay: '80ms' }}
      >
        {elements.map((el, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: el.html }} />
        ))}
      </div>
    </div>
  );
}
