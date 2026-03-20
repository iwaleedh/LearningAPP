/** SlideDiagram.jsx — SVG diagram slide */
export default function SlideDiagram({ slide, animStep }) {
  const { svgContent, caption } = slide;
  const svgVisible = animStep >= 0;
  const captionVisible = animStep >= 1;

  return (
    <div className="pres-slide-diagram">
      <div
        className={`pres-svg-wrapper pres-element ${svgVisible ? 'visible' : ''}`}
        style={{ transitionDelay: '0ms' }}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
      {caption && (
        <p
          className={`pres-diagram-caption pres-element ${captionVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '60ms' }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}
