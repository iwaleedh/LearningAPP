import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Minimize2, Maximize2, X } from 'lucide-react';
import { getSeedNote } from '../data/seedNotes/index';
import { resolveNoteContext } from '../services/notes/noteContext';
import { blocksToSlides, totalSteps } from '../components/presentation/slideEngine';
import SlideRenderer from '../components/presentation/SlideRenderer';
import AnnotationCanvas from '../components/presentation/AnnotationCanvas';
import AnnotationToolbar from '../components/presentation/AnnotationToolbar';
import { getSubjectLabel, getSyllabusBySubject } from '../data/syllabusIndex';
import '../components/presentation/Presentation.css';

export default function PresentationPage() {
  const { subject, unitId, topicId, subtopicIndex } = useParams();
  const navigate = useNavigate();

  // ── Resolve context & seed note ──────────────────────────────────────────────
  const syllabus = useMemo(() => getSyllabusBySubject(subject), [subject]);

  const context = useMemo(
    () => resolveNoteContext({ subject, unitId, topicId, subtopicIndex }, syllabus),
    [subject, unitId, topicId, subtopicIndex, syllabus]
  );

  const noteId = `note:${subject}:${unitId}:${topicId}:${subtopicIndex}`;
  const seedNote = useMemo(() => getSeedNote(noteId), [noteId]);

  // ── Build slides ─────────────────────────────────────────────────────────────
  const slides = useMemo(() => {
    if (!seedNote || !seedNote.blocks) return [];
    return blocksToSlides(seedNote.blocks, subject, {
      unitTitle: context?.unitTitle,
      topicTitle: context?.topicTitle,
      subtopicTitle: context?.subtopicTitle,
    });
  }, [seedNote, subject, context]);

  // ── Playback state ───────────────────────────────────────────────────────────
  const [slideIdx, setSlideIdx] = useState(0);
  const [animStep, setAnimStep] = useState(0);
  const [direction, setDirection] = useState('forward');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  // ── Annotation state ─────────────────────────────────────────────────────────
  const [annotActive, setAnnotActive]  = useState(false);
  const [annotTool,   setAnnotTool]    = useState('pen');
  const [annotColor,  setAnnotColor]   = useState('#ffffff');
  const [annotSize,   setAnnotSize]    = useState('m');
  const canvasRef = useRef(null);

  const currentSlide = slides[slideIdx];
  const steps = currentSlide ? totalSteps(currentSlide) : 1;

  // ── Navigation ───────────────────────────────────────────────────────────────
  const goNext = useCallback(() => {
    if (animStep < steps - 1) {
      setAnimStep(a => a + 1);
    } else if (slideIdx < slides.length - 1) {
      setDirection('forward');
      setSlideIdx(i => i + 1);
      setAnimStep(0);
    }
  }, [animStep, steps, slideIdx, slides.length]);

  const goPrev = useCallback(() => {
    if (animStep > 0) {
      setAnimStep(a => a - 1);
    } else if (slideIdx > 0) {
      setDirection('back');
      setSlideIdx(i => i - 1);
      // Reveal all elements of the previous slide
      const prevSlide = slides[slideIdx - 1];
      setAnimStep(prevSlide ? totalSteps(prevSlide) - 1 : 0);
    }
  }, [animStep, slideIdx, slides]);

  const goToSlide = useCallback((idx) => {
    setDirection(idx >= slideIdx ? 'forward' : 'back');
    setSlideIdx(idx);
    setAnimStep(0);
    // Clear annotations when jumping slides
    canvasRef.current?.clear();
  }, [slideIdx]);

  // Clear annotations on every slide advance
  const goNextWithClear = useCallback(() => {
    const wasOnLastStep = animStep >= steps - 1;
    goNext();
    if (wasOnLastStep) canvasRef.current?.clear();
  }, [goNext, animStep, steps]);

  const goPrevWithClear = useCallback(() => {
    const wasOnFirstStep = animStep === 0;
    goPrev();
    if (wasOnFirstStep) canvasRef.current?.clear();
  }, [goPrev, animStep]);

  // ── Fullscreen API ───────────────────────────────────────────────────────────
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.()?.catch(() => {});
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  // ── Keyboard handler ─────────────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      // Don't intercept if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNextWithClear(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goPrevWithClear(); }
      if (e.key === 'Escape') {
        if (annotActive) { setAnnotActive(false); return; }
        navigate('/presentation');
      }
      if (e.key === 'f' || e.key === 'F') toggleFullscreen();
      if (e.key === 'a' || e.key === 'A') setAnnotActive(v => !v);
      if ((e.key === 'c' || e.key === 'C') && annotActive) canvasRef.current?.clear();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNextWithClear, goPrevWithClear, navigate, toggleFullscreen, annotActive]);

  // ── Progress ─────────────────────────────────────────────────────────────────
  const progressPct = slides.length <= 1
    ? 100
    : Math.round(((slideIdx) / (slides.length - 1)) * 100);

  const subjectLabel = getSubjectLabel(subject);
  const accentColor = currentSlide?.theme?.primary ?? '#6366f1';

  // ── Empty state ──────────────────────────────────────────────────────────────
  if (!seedNote || slides.length === 0) {
    return (
      <div className="pres-page" ref={containerRef} style={{ '--pres-color': '#6366f1' }}>
        <div className="pres-topbar">
          <div className="pres-topbar-left">
            <button className="pres-exit-btn" onClick={() => navigate('/presentation')}>
              <X size={14} /> Exit
            </button>
          </div>
        </div>
        <div className="pres-canvas">
          <div className="pres-empty">
            <span className="pres-empty-icon">📊</span>
            <div className="pres-empty-title">No slides available</div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.88rem' }}>
              No seed note found for this subtopic yet.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="pres-page"
      ref={containerRef}
      style={{ '--pres-color': accentColor }}
    >
      {/* ── Top bar ── */}
      <div className="pres-topbar">
        <div className="pres-topbar-left">
          <button className="pres-exit-btn" onClick={() => navigate('/presentation')}>
            <X size={14} /> Exit
          </button>
          <div className="pres-topbar-meta">
            <span className="pres-subject-badge">{subjectLabel}</span>
            <span className="pres-topic-label">
              {context?.topicTitle} · {context?.subtopicTitle}
            </span>
          </div>
        </div>

        <div className="pres-topbar-right">
          <span className="pres-slide-counter">
            {slideIdx + 1} / {slides.length}
          </span>
          <button className="pres-icon-btn" onClick={toggleFullscreen} title="Toggle fullscreen (F)">
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div className="pres-progress-bar-track">
        <div
          className="pres-progress-bar-fill"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* ── Slide canvas ── */}
      <div
        className={`pres-canvas ${annotActive ? 'annot-active' : ''}`}
        onClick={annotActive ? undefined : goNextWithClear}
        role="button"
        tabIndex={0}
        aria-label="Advance presentation (click or Space/→)"
      >
        <span className="pres-canvas-hint pres-canvas-hint--left">‹</span>
        <span className="pres-canvas-hint pres-canvas-hint--right">›</span>

        {currentSlide && (
          <div style={{ position: 'relative', width: 'min(900px,100%)', minHeight: 'min(540px,78vh)', maxHeight: '78vh' }}>
            <SlideRenderer
              key={`slide-${slideIdx}`}
              slide={currentSlide}
              animStep={animStep}
              direction={direction}
            />
            {/* Annotation canvas sits on top of the slide */}
            <AnnotationCanvas
              ref={canvasRef}
              active={annotActive}
              tool={annotTool}
              color={annotColor}
              size={annotSize}
            />
            {/* Annotation toolbar floats beside the slide */}
            <AnnotationToolbar
              active={annotActive}
              onToggle={() => setAnnotActive(v => !v)}
              tool={annotTool}
              onTool={setAnnotTool}
              color={annotColor}
              onColor={setAnnotColor}
              size={annotSize}
              onSize={setAnnotSize}
              onClear={() => canvasRef.current?.clear()}
            />
            {annotActive && (
              <div className="annot-mode-badge">✏️ ANNOTATING</div>
            )}
          </div>
        )}
      </div>

      {/* ── Bottom controls ── */}
      <div className="pres-controls">
        {/* Slide dots */}
        <div className="pres-dots" aria-hidden="true">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`pres-dot ${i === slideIdx ? 'active' : i < slideIdx ? 'passed' : ''}`}
              onClick={(e) => { e.stopPropagation(); goToSlide(i); }}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>

        <span className="pres-anim-hint">
          {animStep < steps - 1
            ? `Step ${animStep + 1} of ${steps}`
            : slideIdx < slides.length - 1
            ? 'Next slide →'
            : '✓ End of lesson'}
        </span>

        {/* Nav buttons */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            className="pres-nav-btn"
            onClick={(e) => { e.stopPropagation(); goPrevWithClear(); }}
            disabled={slideIdx === 0 && animStep === 0}
          >
            <ArrowLeft size={14} />
            <span>Prev</span>
          </button>
          <button
            className="pres-nav-btn pres-nav-btn--primary"
            onClick={(e) => { e.stopPropagation(); goNextWithClear(); }}
            disabled={slideIdx === slides.length - 1 && animStep >= steps - 1}
          >
            <span>
              {animStep < steps - 1 ? 'Reveal' : slideIdx < slides.length - 1 ? 'Next Slide' : 'Done'}
            </span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
