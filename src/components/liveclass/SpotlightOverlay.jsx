import { useState, useCallback, useId } from 'react';

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
  const maskId = useId(); // L-8: unique mask ID per instance

  const handleMove = useCallback((e) => {
    if (!dragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    // H-10: Support both mouse and touch events
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setPos({
      x: (clientX - rect.left) / rect.width,
      y: (clientY - rect.top) / rect.height,
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
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 9, cursor: 'crosshair', touchAction: 'none' }}
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onMouseMove={handleMove}
      onTouchStart={() => setDragging(true)}
      onTouchEnd={() => setDragging(false)}
      onTouchCancel={() => setDragging(false)}
      onTouchMove={handleMove}
    >
      <defs>
        <mask id={maskId}>
          <rect width={width} height={height} fill="white" />
          <circle cx={cx} cy={cy} r={radius} fill="black" />
        </mask>
      </defs>
      <rect
        width={width}
        height={height}
        fill="rgba(0,0,0,0.72)"
        mask={`url(#${maskId})`}
      />
      {/* bright ring */}
      <circle cx={cx} cy={cy} r={radius} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
    </svg>
  );
}
