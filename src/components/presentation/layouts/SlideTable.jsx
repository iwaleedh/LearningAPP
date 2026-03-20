/** SlideTable.jsx — Animated comparison table slide */
export default function SlideTable({ slide, animStep }) {
  const { title, headers = [], rows = [], elements = [] } = slide;

  // header is always element delay=0, rows are delay=1..n
  const headerVisible = animStep >= 0;

  return (
    <div className="pres-slide-table">
      {title && (
        <div className="pres-slide-title-bar">
          <h2 className="pres-slide-title" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.4rem)' }}>{title}</h2>
        </div>
      )}

      <div style={{ flex: 1, overflow: 'auto' }}>
        <table className="pres-table">
          <thead>
            <tr className={`pres-element ${headerVisible ? 'visible' : ''}`} style={{ transitionDelay: '0ms' }}>
              {headers.map((h, i) => (
                <th key={i} dangerouslySetInnerHTML={{ __html: h }} />
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => {
              const isVisible = animStep >= ri + 1;
              return (
                <tr
                  key={ri}
                  className={`pres-element ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: isVisible ? `${ri * 80}ms` : '0ms' }}
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

      {/* Caption element */}
      {elements.find(e => e.type === 'caption') && animStep >= rows.length + 1 && (
        <p
          className="pres-table-caption pres-element visible"
          style={{ transitionDelay: `${rows.length * 80}ms` }}
        >
          {elements.find(e => e.type === 'caption').text}
        </p>
      )}
    </div>
  );
}
