/** SlideBullets.jsx — Standard heading + animated bullet list slide */
export default function SlideBullets({ slide, animStep }) {
  const { title, elements = [] } = slide;

  return (
    <div className="pres-slide-bullets">
      {title && (
        <div className="pres-slide-title-bar">
          <h2 className="pres-slide-title">{title}</h2>
        </div>
      )}

      <div className="pres-slide-body">
        {elements.map((el, i) => {
          const isVisible = animStep >= el.delay;
          const delay = isVisible ? `${i * 60}ms` : '0ms';

          if (el.type === 'bullet') {
            return (
              <div
                key={i}
                className={`pres-bullet-item pres-element ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: delay }}
              >
                <span className="pres-bullet-dot" />
                <span dangerouslySetInnerHTML={{ __html: el.html }} />
              </div>
            );
          }

          if (el.type === 'paragraph') {
            return (
              <div
                key={i}
                className={`pres-paragraph-block pres-element ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: delay }}
                dangerouslySetInnerHTML={{ __html: el.html }}
              />
            );
          }

          if (el.type === 'quote') {
            return (
              <div
                key={i}
                className={`pres-quote-block pres-element ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: delay }}
              >
                <span dangerouslySetInnerHTML={{ __html: el.html }} />
                {el.source && <footer style={{ marginTop: '0.3rem', fontSize: '0.78rem', opacity: 0.6 }}>— {el.source}</footer>}
              </div>
            );
          }

          if (el.type === 'code') {
            return (
              <pre
                key={i}
                className={`pres-code-block pres-element ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: delay }}
              >
                {el.code}
              </pre>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
