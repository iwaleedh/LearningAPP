import { useState, useCallback } from 'react';

/**
 * SpotlightOverlay — darkens everything outside a draggable circle.
 *
 * The SVG sits absolutely on top of the canvas (pointer-events: all so the
 * user can drag the spotlight). Teacher controls its position by dragging.
 *
 * @param {{ width: number, height: number, enabled: boolean }} props
 */
export default function SpotlightOverlay({ width, height, enabled }) {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 }); // normalized
  const [dragging, setDragging] = useState(false);
  const radius = Math.min(width, height) * 0.2; // 20% of the smaller dimension

  const handleMove = useCallback((e) => {
    if (!dragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, [dragging]);

  if (!enabled) return null;

  const cx = pos.x * width;
  const cy = pos.y * height;

  return (
    <svg
      className="lc-spotlight-overlay"
      width={width}
      height={height}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 9, cursor: 'crosshair' }}
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onMouseMove={handleMove}
    >
      <defs>
        <mask id="spotlight-mask">
          <rect width={width} height={height} fill="white" />
          <circle cx={cx} cy={cy} r={radius} fill="black" />
        </mask>
      </defs>
      <rect
        width={width}
        height={height}
        fill="rgba(0,0,0,0.72)"
        mask="url(#spotlight-mask)"
      />
      {/* bright ring */}
      <circle cx={cx} cy={cy} r={radius} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
    </svg>
  );
}
