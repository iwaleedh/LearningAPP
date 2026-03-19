/**
 * Mathematics canvas templates — coordinate axes, unit circle, graph grids.
 */

const mathematicsTemplates = [
  {
    id: 'math-coordinate-axes',
    subject: 'mathematics',
    label: 'Coordinate Axes',
    description: 'x-y axes with gridlines and origin label',
    canvasWidth: 800,
    canvasHeight: 600,
    objects: [
      // Grid lines (light) — vertical
      ...Array.from({ length: 7 }, (_, i) => ({
        type: 'line',
        x1: 160 + i * 80,
        y1: 60,
        x2: 160 + i * 80,
        y2: 540,
        stroke: '#e5e7eb',
        strokeWidth: 1,
        selectable: false,
      })),
      // Grid lines (light) — horizontal
      ...Array.from({ length: 7 }, (_, i) => ({
        type: 'line',
        x1: 80,
        y1: 100 + i * 70,
        x2: 720,
        y2: 100 + i * 70,
        stroke: '#e5e7eb',
        strokeWidth: 1,
        selectable: false,
      })),
      // x-axis
      { type: 'line', x1: 80, y1: 310, x2: 720, y2: 310, stroke: '#1f2937', strokeWidth: 2.5, selectable: false },
      { type: 'triangle', left: 720, top: 302, width: 16, height: 14, fill: '#1f2937', angle: 90, selectable: false },
      { type: 'text', left: 700, top: 315, text: 'x', fontSize: 16, fontWeight: 'bold', fontStyle: 'italic', fill: '#1f2937', selectable: true },
      // y-axis
      { type: 'line', x1: 400, y1: 60, x2: 400, y2: 540, stroke: '#1f2937', strokeWidth: 2.5, selectable: false },
      { type: 'triangle', left: 392, top: 46, width: 16, height: 14, fill: '#1f2937', angle: 0, selectable: false },
      { type: 'text', left: 408, top: 55, text: 'y', fontSize: 16, fontWeight: 'bold', fontStyle: 'italic', fill: '#1f2937', selectable: true },
      // Origin
      { type: 'text', left: 378, top: 315, text: 'O', fontSize: 14, fontWeight: 'bold', fill: '#1f2937', selectable: true },
    ],
  },
  {
    id: 'math-unit-circle',
    subject: 'mathematics',
    label: 'Unit Circle',
    description: 'Circle on axes with key angle labels (0, π/2, π, 3π/2)',
    canvasWidth: 800,
    canvasHeight: 600,
    objects: [
      // Axes
      { type: 'line', x1: 100, y1: 300, x2: 700, y2: 300, stroke: '#1f2937', strokeWidth: 2, selectable: false },
      { type: 'line', x1: 400, y1: 80, x2: 400, y2: 520, stroke: '#1f2937', strokeWidth: 2, selectable: false },
      // Unit circle
      { type: 'circle', left: 220, top: 120, radius: 180, fill: 'transparent', stroke: '#6366f1', strokeWidth: 2.5, selectable: true },
      // Key points
      { type: 'text', left: 580, top: 305, text: '0 (1, 0)', fontSize: 13, fill: '#1f2937', selectable: true },
      { type: 'text', left: 405, top: 95, text: 'π/2 (0, 1)', fontSize: 13, fill: '#1f2937', selectable: true },
      { type: 'text', left: 160, top: 305, text: 'π (−1, 0)', fontSize: 13, fill: '#1f2937', selectable: true },
      { type: 'text', left: 405, top: 475, text: '3π/2 (0, −1)', fontSize: 13, fill: '#1f2937', selectable: true },
      // Angle θ hint
      { type: 'text', left: 430, top: 270, text: 'θ', fontSize: 18, fontWeight: 'bold', fill: '#6366f1', selectable: true },
      // Title
      { type: 'text', left: 310, top: 30, text: 'Unit Circle', fontSize: 20, fontWeight: 'bold', fill: '#1f2937', selectable: true },
    ],
  },
  {
    id: 'math-number-line',
    subject: 'mathematics',
    label: 'Number Line',
    description: 'Horizontal number line from −5 to 5 with tick marks',
    canvasWidth: 800,
    canvasHeight: 400,
    objects: [
      // Main line
      { type: 'line', x1: 80, y1: 200, x2: 720, y2: 200, stroke: '#1f2937', strokeWidth: 2.5, selectable: false },
      { type: 'triangle', left: 720, top: 192, width: 16, height: 14, fill: '#1f2937', angle: 90, selectable: false },
      // Tick marks and labels
      ...Array.from({ length: 11 }, (_, i) => {
        const val = i - 5;
        const x = 400 + val * 56;
        return [
          { type: 'line', x1: x, y1: 190, x2: x, y2: 210, stroke: '#1f2937', strokeWidth: 2, selectable: false },
          { type: 'text', left: x - 6, top: 215, text: String(val), fontSize: 13, fill: '#1f2937', selectable: true },
        ];
      }).flat(),
      // Origin highlight
      { type: 'circle', left: 394, top: 194, radius: 6, fill: '#6366f1', stroke: '#6366f1', strokeWidth: 1, selectable: true },
      // Title
      { type: 'text', left: 320, top: 100, text: 'Number Line', fontSize: 20, fontWeight: 'bold', fill: '#1f2937', selectable: true },
    ],
  },
];

export default mathematicsTemplates;
