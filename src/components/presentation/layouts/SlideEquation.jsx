/** SlideEquation.jsx — Centred formula display slide */
export default function SlideEquation({ slide, animStep }) {
  const { title, elements = [] } = slide;
  const eqEl = elements.find(e => e.type === 'equation');
  const capEl = elements.find(e => e.type === 'caption');
  const eqVisible = animStep >= 0;
  const capVisible = animStep >= 1;

  return (
    <div className="pres-slide-equation">
      {title && title !== 'Equation' && (
        <h2 className="pres-slide-title" style={{ marginBottom: '0.5rem' }}>{title}</h2>
      )}

      {eqEl && (
        <div
          className={`pres-equation-box pres-element ${eqVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0ms' }}
          dangerouslySetInnerHTML={{ __html: eqEl.html }}
        />
      )}

      {capEl && (
        <p
          className={`pres-equation-caption pres-element ${capVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '80ms' }}
        >
          {capEl.text}
        </p>
      )}
    </div>
  );
}
