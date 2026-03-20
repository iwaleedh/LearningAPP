import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

/**
 * AnnotationCanvas
 * A transparent <canvas> overlay that sits on top of the slide.
 * Exposed API via ref: { clear() }
 *
 * Props:
 *   active      {boolean}  — whether annotation mode is on
 *   tool        {string}   — 'pen' | 'highlighter' | 'eraser'
 *   color       {string}   — CSS hex colour
 *   size        {'s'|'m'|'l'} — stroke size key
 *   onAnnotated {Function} — called when first stroke starts (so parent can know)
 */
const SIZE_MAP = {
  pen:         { s: 2,  m: 4,  l: 8  },
  highlighter: { s: 14, m: 22, l: 36 },
  eraser:      { s: 18, m: 32, l: 56 },
};

const AnnotationCanvas = forwardRef(function AnnotationCanvas(
  { active, tool, color, size, onAnnotated },
  ref
) {
  const canvasRef = useRef(null);
  const drawing   = useRef(false);
  const lastPos   = useRef({ x: 0, y: 0 });

  // Expose clear() to parent
  useImperativeHandle(ref, () => ({
    clear() {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    },
  }));

  // Keep canvas pixel dimensions in sync with its CSS dimensions
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ro = new ResizeObserver(() => {
      const { width, height } = canvas.getBoundingClientRect();
      // Preserve drawing by copying to temp canvas
      const tmp = document.createElement('canvas');
      tmp.width  = canvas.width;
      tmp.height = canvas.height;
      tmp.getContext('2d').drawImage(canvas, 0, 0);
      canvas.width  = width  * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      const ctx = canvas.getContext('2d');
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      ctx.drawImage(tmp, 0, 0, width, height);
    });
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  // Helper: get canvas coords from a PointerEvent
  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  // Apply tool settings to ctx
  const applyTool = (ctx) => {
    const lineWidth = SIZE_MAP[tool]?.[size] ?? 4;
    if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.globalAlpha  = 1;
      ctx.strokeStyle  = 'rgba(0,0,0,1)';
      ctx.lineWidth    = lineWidth;
    } else if (tool === 'highlighter') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha  = 0.35;
      ctx.strokeStyle  = color;
      ctx.lineWidth    = lineWidth;
    } else {
      // pen
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha  = 1;
      ctx.strokeStyle  = color;
      ctx.lineWidth    = lineWidth;
    }
    ctx.lineCap  = 'round';
    ctx.lineJoin = 'round';
  };

  const onPointerDown = (e) => {
    if (!active) return;
    e.preventDefault();
    canvasRef.current.setPointerCapture(e.pointerId);
    drawing.current = true;
    lastPos.current = getPos(e);
    onAnnotated?.();
    // Begin a new path dot (for single tap)
    const ctx = canvasRef.current.getContext('2d');
    applyTool(ctx);
    ctx.beginPath();
    ctx.arc(lastPos.current.x, lastPos.current.y, (ctx.lineWidth / 2), 0, Math.PI * 2);
    ctx.fill();
  };

  const onPointerMove = (e) => {
    if (!active || !drawing.current) return;
    e.preventDefault();
    const pos = getPos(e);
    const ctx = canvasRef.current.getContext('2d');
    applyTool(ctx);
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    lastPos.current = pos;
  };

  const onPointerUp = (e) => {
    if (!active) return;
    e.preventDefault();
    drawing.current = false;
  };

  return (
    <canvas
      ref={canvasRef}
      className="annotation-canvas"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        // Pass-through clicks when not annotating
        pointerEvents: active ? 'all' : 'none',
        cursor: active
          ? tool === 'eraser'
            ? 'cell'
            : 'crosshair'
          : 'inherit',
        zIndex: 10,
        touchAction: 'none',
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    />
  );
});

export default AnnotationCanvas;
