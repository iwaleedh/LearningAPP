/** SlideWorkedExample.jsx — Step-by-step reveal for 'worked' callouts */
export default function SlideWorkedExample({ slide, animStep }) {
  const { title, elements = [] } = slide;

  return (
    <div className="pres-slide-worked">
      <div className="pres-slide-title-bar">
        <h2 className="pres-slide-title">✏️ {title}</h2>
      </div>

      <div className="pres-slide-body">
        {elements.map((el, i) => {
          const isVisible = animStep >= el.delay;
          return (
            <div
              key={i}
              className={`pres-step-item pres-element ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: isVisible ? `${i * 70}ms` : '0ms' }}
            >
              <span className="pres-step-num">{i + 1}</span>
              <span dangerouslySetInnerHTML={{ __html: el.html }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
