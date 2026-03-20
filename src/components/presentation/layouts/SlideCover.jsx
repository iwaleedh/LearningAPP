/** SlideCover.jsx — Title / Objective cover slide */
export default function SlideCover({ slide }) {
  const { title, subtitle, unit, objectiveText, theme } = slide;
  return (
    <div className="pres-slide-cover" style={{ height: '100%' }}>
      {/* Glow blob */}
      <div className="pres-cover-glow" style={{ background: theme?.primary }} />

      <span className="pres-cover-emoji pres-element visible" style={{ transitionDelay: '0ms' }}>
        {theme?.emoji ?? '📘'}
      </span>

      {unit && (
        <div className="pres-slide-subtitle pres-element visible" style={{ transitionDelay: '60ms', marginBottom: '0.5rem' }}>
          {unit}
        </div>
      )}

      <h1 className="pres-cover-title pres-element visible" style={{ transitionDelay: '120ms' }}>
        {title}
      </h1>

      {subtitle && subtitle !== title && (
        <p className="pres-cover-subtitle pres-element visible" style={{ transitionDelay: '180ms' }}>
          {subtitle}
        </p>
      )}

      {objectiveText && (
        <div className="pres-cover-objective pres-element visible" style={{ transitionDelay: '260ms' }}>
          <div className="pres-cover-objective-label">🎯 Learning objective</div>
          <div dangerouslySetInnerHTML={{ __html: objectiveText }} />
        </div>
      )}
    </div>
  );
}
