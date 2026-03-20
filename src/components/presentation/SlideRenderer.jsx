/**
 * SlideRenderer.jsx
 * Dispatches to the correct slide layout component based on slide.layout.
 */
import SlideCover from './layouts/SlideCover';
import SlideBullets from './layouts/SlideBullets';
import SlideTable from './layouts/SlideTable';
import SlideDiagram from './layouts/SlideDiagram';
import SlideInfographic from './layouts/SlideInfographic';
import SlideWorkedExample from './layouts/SlideWorkedExample';
import SlideCalloutTip from './layouts/SlideCalloutTip';
import SlideCalloutWarning from './layouts/SlideCalloutWarning';
import SlideEquation from './layouts/SlideEquation';
import SlideChecklist from './layouts/SlideChecklist';
import SlideSummary from './layouts/SlideSummary';

const LAYOUT_MAP = {
  cover:          SlideCover,
  bullets:        SlideBullets,
  table:          SlideTable,
  diagram:        SlideDiagram,
  infographic:    SlideInfographic,
  'worked-example': SlideWorkedExample,
  tip:            SlideCalloutTip,
  warning:        SlideCalloutWarning,
  equation:       SlideEquation,
  checklist:      SlideChecklist,
  summary:        SlideSummary,
};

export default function SlideRenderer({ slide, animStep, direction }) {
  const Component = LAYOUT_MAP[slide?.layout] ?? SlideBullets;
  const animClass = direction === 'back' ? 'pres-slide--enter-left' : 'pres-slide--enter-right';

  return (
    <div className={`pres-slide ${animClass}`} style={{ '--pres-color': slide?.theme?.primary }}>
      <Component slide={slide} animStep={animStep} />
    </div>
  );
}
