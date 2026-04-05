import { useState, useRef, useEffect, useCallback } from 'react';

const RULER_H = 44;          // height of ruler body in canvas px
const ROT_R = 10;            // radius of rotation handle in px
const MIN_RULER_W = 520;     // minimum ruler width for smaller canvases
const RULER_OVERSCAN = 48;   // extra width beyond diagonal so the edge reaches past the page
const TICK_STEP = 5;
const LABEL_STEP = 200;

/**
 * RulerWidget — GoodNotes-style physical ruler overlay.
 *
 * Positioned absolutely inside .lc-canvas-wrap.
 * Drag body to move · Drag rotation handle (right end) to rotate.
 * Parent receives the current { x, y, angle } via onChange so the canvas
 * drawing handler can project strokes onto the ruler's axis.
 *
 * @param {{ containerRef, canvasW, canvasH, onChange }} props
 */
export default function RulerWidget({ containerRef, canvasW, canvasH, onChange }) {
  const [pos, setPos]     = useState({ x: canvasW / 2, y: canvasH / 2 });
  const [angle, setAngle] = useState(0); // degrees

  const posRef  = useRef(pos);
  const dragRef = useRef(null); // { mode: 'move'|'rotate', sx, sy, ox, oy }
  const activePointerIdRef = useRef(null);
  const totalWidth = Math.max(
    MIN_RULER_W,
    Math.hypot(Math.max(canvasW, 1), Math.max(canvasH, 1)) + RULER_OVERSCAN,
  );
  const halfWidth = totalWidth / 2;

  // Keep posRef in sync for the pointermove handler (avoids stale closure)
  useEffect(() => { posRef.current = pos; }, [pos]);

  // Notify parent whenever ruler moves / rotates
  useEffect(() => {
    onChange?.({ x: pos.x, y: pos.y, angle });
  }, [pos, angle, onChange]);

  // Convert client coords → canvas coords
  const getCanvasPt = useCallback((clientX, clientY) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return { x: clientX, y: clientY };
    return { x: clientX - rect.left, y: clientY - rect.top };
  }, [containerRef]);

  // Global pointermove / pointerup listeners (active whole lifetime of component)
  useEffect(() => {
    const onMove = (e) => {
      const d = dragRef.current;
      if (!d || (activePointerIdRef.current !== null && e.pointerId !== activePointerIdRef.current)) return;
      const p = getCanvasPt(e.clientX, e.clientY);
      if (d.mode === 'move') {
        setPos({ x: d.ox + (p.x - d.sx), y: d.oy + (p.y - d.sy) });
      } else if (d.mode === 'rotate') {
        const dx = p.x - posRef.current.x;
        const dy = p.y - posRef.current.y;
        setAngle(Math.atan2(dy, dx) * 180 / Math.PI);
      }
    };
    const onUp = (e) => {
      if (activePointerIdRef.current !== null && e.pointerId !== activePointerIdRef.current) return;
      dragRef.current = null;
      activePointerIdRef.current = null;
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, [getCanvasPt]);

  // Body: drag to move
  const onBodyDown = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    activePointerIdRef.current = e.pointerId;
    if (typeof e.currentTarget?.setPointerCapture === 'function') {
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // Ignore capture failures on unsupported browsers.
      }
    }
    const p = getCanvasPt(e.clientX, e.clientY);
    dragRef.current = { mode: 'move', sx: p.x, sy: p.y, ox: posRef.current.x, oy: posRef.current.y };
  }, [getCanvasPt]);

  // Rotation handle: drag to rotate
  const onRotDown = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    activePointerIdRef.current = e.pointerId;
    if (typeof e.currentTarget?.setPointerCapture === 'function') {
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // Ignore capture failures on unsupported browsers.
      }
    }
    dragRef.current = { mode: 'rotate' };
  }, []);

  // Build tick marks: dense minor ticks, stronger major ticks, labels spaced out for readability.
  const ticks = [];
  const lastTick = Math.floor(totalWidth / TICK_STEP) * TICK_STEP;
  for (let i = 0; i <= lastTick; i += TICK_STEP) {
    const labelled = i > 0 && i < lastTick && i % LABEL_STEP === 0;
    const major = !labelled && i % 100 === 0;
    const mid = !labelled && !major && i % 50 === 0;
    const ten = !labelled && !major && !mid && i % 10 === 0;
    const h = labelled ? 16 : major ? 14 : mid ? 10 : ten ? 7 : 3;
    const label = labelled ? String(i / 10) : null;
    ticks.push({ i, h, label });
  }

  return (
    <div
      style={{
        position: 'absolute',
        left:   pos.x,
        top:    pos.y,
        width:  totalWidth,
        height: RULER_H,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        transformOrigin: 'center center',
        pointerEvents: 'none',
        zIndex: 8,
        userSelect: 'none',
        touchAction: 'none',
      }}
    >
      {/* ── Ruler body (SVG) ──────────────────────────────────────── */}
      <svg
        width={totalWidth}
        height={RULER_H}
        style={{ display: 'block', pointerEvents: 'none' }}
      >
        {/* Body */}
        <rect
          x={0}
          y={0}
          width={totalWidth}
          height={RULER_H}
          rx={5}
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(15,23,42,0.28)"
          strokeWidth={1.2}
          pointerEvents="all"
          onPointerDown={onBodyDown}
          style={{ cursor: 'grab', touchAction: 'none' }}
        />

        {/* Top-edge highlight (the "straight edge" you draw against) */}
        <line
          x1={6}
          y1={2}
          x2={totalWidth - 6}
          y2={2}
          stroke="rgba(15,23,42,0.6)"
          strokeWidth={2.4}
        />

        {/* Shadow under straight edge */}
        <line
          x1={6}
          y1={4}
          x2={totalWidth - 6}
          y2={4}
          stroke="rgba(255,255,255,0.28)"
          strokeWidth={1}
        />

        {/* Tick marks */}
        {ticks.map(({ i, h, label }) => (
          <g key={i}>
            <line
              x1={i} y1={RULER_H - h - 2} x2={i} y2={RULER_H - 3}
              stroke="rgba(15,23,42,0.78)"
              strokeWidth={h > 10 ? 1.6 : 1}
            />
            {label && (
              <text
                x={i} y={RULER_H - h - 5}
                textAnchor="middle" fontSize={9}
                fill="rgba(15,23,42,0.82)"
                fontFamily="system-ui, sans-serif"
                fontWeight={600}
              >
                {label}
              </text>
            )}
          </g>
        ))}

        {/* Centre dashed guide */}
        <line
          x1={halfWidth}
          y1={8}
          x2={halfWidth}
          y2={RULER_H - 4}
          stroke="rgba(15,23,42,0.24)"
          strokeWidth={1}
          strokeDasharray="2,3"
        />
      </svg>

      {/* ── Rotation handle (right end) ────────────────────────────── */}
      <div
        title="Drag to rotate"
        style={{
          position: 'absolute',
          right: -(ROT_R + 5),
          top: '50%',
          transform: 'translateY(-50%)',
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: 'transparent',
          border: 'none',
          cursor: 'grab',
          pointerEvents: 'all',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          touchAction: 'none',
        }}
        onPointerDown={onRotDown}
        aria-label="Rotate ruler"
      >
        <div
          style={{
            width: ROT_R * 2,
            height: ROT_R * 2,
            borderRadius: '50%',
            background: 'rgba(99,102,241,0.92)',
            border: '2.5px solid rgba(255,255,255,0.9)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.28)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <svg width={12} height={12} viewBox="0 0 12 12">
            <path
              d="M2 6 A4 4 0 0 1 10 6"
              fill="none" stroke="white" strokeWidth={1.5}
              strokeLinecap="round"
            />
            <polygon points="10,4 10,8 12,6" fill="white" />
          </svg>
        </div>
      </div>

      {/* ── Left end marker ───────────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        left: -(6),
        top: '50%',
        transform: 'translateY(-50%)',
        width: 4,
        height: RULER_H * 0.55,
        borderRadius: 2,
        background: 'rgba(15,23,42,0.3)',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
