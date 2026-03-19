import { useEffect, useRef } from 'react';

/**
 * LaserPointerOverlay — renders laser pointers in two modes:
 *
 * 1. **dot** mode: Glowing dot with a short fading trail (follows cursor)
 * 2. **trail** mode: Freehand strokes that fade away after ~3 seconds (GoodNotes style)
 *
 * The overlay sits absolutely on top of the canvas and captures NO pointer events.
 *
 * @param {Object} props
 * @param {Array<{x,y,tool,identity}>} props.cursors — active cursor positions
 * @param {Array<{id,points,identity,createdAt}>} props.trails — drawn laser trails
 * @param {number} props.width
 * @param {number} props.height
 * @param {'dot'|'trail'} props.localMode — current laser mode of local user
 */
export default function LaserPointerOverlay({ cursors, trails, width, height, localMode }) {
  const canvasRef = useRef(null);
  // trail: Map<identity, Array<{x,y,alpha}>>
  const trailsRef = useRef(new Map());

  // Trail fade duration in ms
  const TRAIL_FADE_DURATION = 3000;

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let animId;

    function draw() {
      ctx.clearRect(0, 0, c.width, c.height);

      const now = Date.now();

      // ── Draw laser trails (freehand strokes that fade out) ──
      if (trails && trails.length > 0) {
        trails.forEach(trail => {
          if (trail.points.length < 2) return;

          const age = now - trail.createdAt;
          const progress = Math.min(age / TRAIL_FADE_DURATION, 1);
          const alpha = 1 - progress;

          if (alpha <= 0) return;

          ctx.beginPath();
          ctx.moveTo(
            trail.points[0].x * c.width,
            trail.points[0].y * c.height
          );

          for (let i = 1; i < trail.points.length; i++) {
            ctx.lineTo(
              trail.points[i].x * c.width,
              trail.points[i].y * c.height
            );
          }

          ctx.strokeStyle = `rgba(255, 50, 50, ${alpha * 0.9})`;
          ctx.lineWidth = 4;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();

          // Glow effect
          ctx.strokeStyle = `rgba(255, 100, 100, ${alpha * 0.3})`;
          ctx.lineWidth = 10;
          ctx.stroke();
        });
      }

      // ── Draw dot mode cursors ──
      cursors?.forEach(({ x, y, tool, mode }) => {
        // Only draw dot visualization for dot mode (or unspecified mode for backward compat)
        if (tool === 'laser' && mode !== 'trail') {
          const px = x * c.width;
          const py = y * c.height;

          // Update trail for this cursor
          let trail = trailsRef.current.get('dot_cursor') ?? [];
          trail.push({ x: px, y: py, alpha: 1.0 });
          if (trail.length > 20) trail = trail.slice(-20);
          trailsRef.current.set('dot_cursor', trail);

          // Draw fading trail
          trail.forEach((pt, i) => {
            const a = (i / trail.length) * pt.alpha * 0.6;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, Math.max(1, (i / trail.length) * 4), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 50, 50, ${a})`;
            ctx.fill();
          });

          // Glowing dot
          ctx.beginPath();
          ctx.arc(px, py, 7, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 80, 80, 0.25)';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#ff3232';
          ctx.fill();
        } else if (tool === 'pointer') {
          // Pointer — arrow-style indicator
          const px = x * c.width;
          const py = y * c.height;
          ctx.beginPath();
          ctx.arc(px, py, 6, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
          ctx.fill();
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      // Fade out dot-mode trails over time
      trailsRef.current.forEach((trail, id) => {
        const faded = trail.map(pt => ({ ...pt, alpha: pt.alpha * 0.85 })).filter(pt => pt.alpha > 0.01);
        if (faded.length === 0) trailsRef.current.delete(id);
        else trailsRef.current.set(id, faded);
      });

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, [cursors, trails]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="lc-laser-overlay"
      style={{ pointerEvents: 'none', position: 'absolute', top: 0, left: 0, zIndex: 10 }}
    />
  );
}
