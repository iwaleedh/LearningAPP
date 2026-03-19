import { useState, useRef, useEffect, useCallback } from 'react';

const HALF_W  = 260;   // half-width of ruler in canvas px (total = 520 px)
const RULER_H = 44;    // height of ruler body in canvas px
const ROT_R   = 10;    // radius of rotation handle in px
const TOTAL_W = HALF_W * 2;

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
      if (!d) return;
      const p = getCanvasPt(e.clientX, e.clientY);
      if (d.mode === 'move') {
        setPos({ x: d.ox + (p.x - d.sx), y: d.oy + (p.y - d.sy) });
      } else if (d.mode === 'rotate') {
        const dx = p.x - posRef.current.x;
        const dy = p.y - posRef.current.y;
        setAngle(Math.atan2(dy, dx) * 180 / Math.PI);
      }
    };
    const onUp = () => { dragRef.current = null; };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [getCanvasPt]);

  // Body: drag to move
  const onBodyDown = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    const p = getCanvasPt(e.clientX, e.clientY);
    dragRef.current = { mode: 'move', sx: p.x, sy: p.y, ox: posRef.current.x, oy: posRef.current.y };
  }, [getCanvasPt]);

  // Rotation handle: drag to rotate
  const onRotDown = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    dragRef.current = { mode: 'rotate' };
  }, []);

  // Build tick marks: every 5px tick, every 10px medium, every 50px long, every 100px labelled
  const ticks = [];
  for (let i = 0; i <= TOTAL_W; i += 5) {
    const major = i % 100 === 0;
    const mid   = !major && i % 50 === 0;
    const ten   = !major && !mid && i % 10 === 0;
    const h     = major ? 16 : mid ? 12 : ten ? 7 : 3;
    const label = major && i > 0 && i < TOTAL_W ? String(i / 10) : null;
    ticks.push({ i, h, label });
  }

  return (
    <div
      style={{
        position: 'absolute',
        left:   pos.x,
        top:    pos.y,
        width:  TOTAL_W,
        height: RULER_H,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        transformOrigin: 'center center',
        pointerEvents: 'none',
        zIndex: 8,
        userSelect: 'none',
      }}
    >
      {/* ── Ruler body (SVG) ──────────────────────────────────────── */}
      <svg
        width={TOTAL_W}
        height={RULER_H}
        style={{ display: 'block', pointerEvents: 'all', cursor: 'grab' }}
        onPointerDown={onBodyDown}
      >
        <defs>
          <linearGradient id="lc-ruler-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="rgba(228,233,252,0.96)" />
            <stop offset="100%" stopColor="rgba(192,208,246,0.91)" />
          </linearGradient>
        </defs>

        {/* Body */}
        <rect
          x={0} y={0} width={TOTAL_W} height={RULER_H} rx={5}
          fill="url(#lc-ruler-grad)"
          stroke="rgba(99,118,210,0.55)" strokeWidth={1.5}
        />

        {/* Top-edge highlight (the "straight edge" you draw against) */}
        <line
          x1={6} y1={1.5} x2={TOTAL_W - 6} y2={1.5}
          stroke="rgba(255,255,255,0.78)" strokeWidth={2}
        />

        {/* Shadow under straight edge */}
        <line
          x1={6} y1={3} x2={TOTAL_W - 6} y2={3}
          stroke="rgba(99,118,210,0.12)" strokeWidth={1}
        />

        {/* Tick marks */}
        {ticks.map(({ i, h, label }) => (
          <g key={i}>
            <line
              x1={i} y1={RULER_H - h - 2} x2={i} y2={RULER_H - 3}
              stroke="rgba(70,90,175,0.65)"
              strokeWidth={h > 10 ? 1.5 : 1}
            />
            {label && (
              <text
                x={i} y={RULER_H - h - 5}
                textAnchor="middle" fontSize={9}
                fill="rgba(58,76,162,0.78)"
                fontFamily="system-ui, sans-serif"
                fontWeight={500}
              >
                {label}
              </text>
            )}
          </g>
        ))}

        {/* Centre dashed guide */}
        <line
          x1={HALF_W} y1={8} x2={HALF_W} y2={RULER_H - 4}
          stroke="rgba(99,118,210,0.3)" strokeWidth={1} strokeDasharray="2,3"
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
          width: ROT_R * 2,
          height: ROT_R * 2,
          borderRadius: '50%',
          background: 'rgba(99,102,241,0.92)',
          border: '2.5px solid rgba(255,255,255,0.9)',
          cursor: 'grab',
          pointerEvents: 'all',
          boxShadow: '0 2px 6px rgba(0,0,0,0.28)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPointerDown={onRotDown}
      >
        {/* small rotation icon dots */}
        <svg width={12} height={12} viewBox="0 0 12 12">
          <path
            d="M2 6 A4 4 0 0 1 10 6"
            fill="none" stroke="white" strokeWidth={1.5}
            strokeLinecap="round"
          />
          <polygon points="10,4 10,8 12,6" fill="white" />
        </svg>
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
        background: 'rgba(99,118,210,0.35)',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
