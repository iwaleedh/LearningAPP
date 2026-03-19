/**
 * Business / Economics canvas templates — SWOT, breakeven, supply-demand.
 */

const businessTemplates = [
  {
    id: 'biz-swot-grid',
    subject: 'business',
    label: 'SWOT Analysis Grid',
    description: '2×2 coloured SWOT matrix with section headers',
    canvasWidth: 800,
    canvasHeight: 600,
    objects: [
      // Title
      { type: 'text', left: 290, top: 20, text: 'SWOT Analysis', fontSize: 22, fontWeight: 'bold', fill: '#1f2937', selectable: true },
      // Quadrant backgrounds
      { type: 'rect', left: 100, top: 80, width: 290, height: 230, fill: '#dbeafe', stroke: '#93c5fd', strokeWidth: 1.5, rx: 8, ry: 8, selectable: true },
      { type: 'rect', left: 410, top: 80, width: 290, height: 230, fill: '#dcfce7', stroke: '#86efac', strokeWidth: 1.5, rx: 8, ry: 8, selectable: true },
      { type: 'rect', left: 100, top: 330, width: 290, height: 230, fill: '#fef9c3', stroke: '#fde047', strokeWidth: 1.5, rx: 8, ry: 8, selectable: true },
      { type: 'rect', left: 410, top: 330, width: 290, height: 230, fill: '#fce7f3', stroke: '#f9a8d4', strokeWidth: 1.5, rx: 8, ry: 8, selectable: true },
      // Headers
      { type: 'text', left: 190, top: 92, text: 'Strengths', fontSize: 17, fontWeight: 'bold', fill: '#2563eb', selectable: true },
      { type: 'text', left: 485, top: 92, text: 'Weaknesses', fontSize: 17, fontWeight: 'bold', fill: '#16a34a', selectable: true },
      { type: 'text', left: 180, top: 342, text: 'Opportunities', fontSize: 17, fontWeight: 'bold', fill: '#ca8a04', selectable: true },
      { type: 'text', left: 505, top: 342, text: 'Threats', fontSize: 17, fontWeight: 'bold', fill: '#db2777', selectable: true },
      // Bullet hints
      { type: 'text', left: 120, top: 130, text: '•\n•\n•', fontSize: 14, fill: '#93c5fd', selectable: true },
      { type: 'text', left: 430, top: 130, text: '•\n•\n•', fontSize: 14, fill: '#86efac', selectable: true },
      { type: 'text', left: 120, top: 380, text: '•\n•\n•', fontSize: 14, fill: '#fde047', selectable: true },
      { type: 'text', left: 430, top: 380, text: '•\n•\n•', fontSize: 14, fill: '#f9a8d4', selectable: true },
      // Internal / External labels (left side)
      { type: 'text', left: 30, top: 170, text: 'Internal', fontSize: 13, fontWeight: '600', fill: '#6b7280', angle: -90, selectable: true },
      { type: 'text', left: 30, top: 430, text: 'External', fontSize: 13, fontWeight: '600', fill: '#6b7280', angle: -90, selectable: true },
      // Positive / Negative labels (top)
      { type: 'text', left: 210, top: 60, text: 'Positive', fontSize: 13, fontWeight: '600', fill: '#6b7280', selectable: true },
      { type: 'text', left: 510, top: 60, text: 'Negative', fontSize: 13, fontWeight: '600', fill: '#6b7280', selectable: true },
    ],
  },
  {
    id: 'biz-breakeven',
    subject: 'business',
    label: 'Break-Even Chart',
    description: 'Cost/revenue axes with TR, TC, FC lines layout',
    canvasWidth: 800,
    canvasHeight: 600,
    objects: [
      // y-axis
      { type: 'line', x1: 120, y1: 60, x2: 120, y2: 500, stroke: '#1f2937', strokeWidth: 2.5, selectable: false },
      { type: 'triangle', left: 112, top: 46, width: 16, height: 14, fill: '#1f2937', angle: 0, selectable: false },
      { type: 'text', left: 20, top: 250, text: 'Costs / Revenue (£)', fontSize: 13, fontWeight: 'bold', fill: '#1f2937', angle: -90, selectable: true },
      // x-axis
      { type: 'line', x1: 120, y1: 500, x2: 720, y2: 500, stroke: '#1f2937', strokeWidth: 2.5, selectable: false },
      { type: 'triangle', left: 720, top: 492, width: 16, height: 14, fill: '#1f2937', angle: 90, selectable: false },
      { type: 'text', left: 350, top: 520, text: 'Output (units) →', fontSize: 13, fontWeight: 'bold', fill: '#1f2937', selectable: true },
      // Fixed costs (dashed horizontal)
      { type: 'line', x1: 120, y1: 380, x2: 680, y2: 380, stroke: '#f59e0b', strokeWidth: 2, strokeDashArray: [10, 6], selectable: true },
      { type: 'text', left: 680, top: 365, text: 'FC', fontSize: 14, fontWeight: 'bold', fill: '#f59e0b', selectable: true },
      // Total costs label start
      { type: 'text', left: 600, top: 120, text: 'TC', fontSize: 14, fontWeight: 'bold', fill: '#ef4444', selectable: true },
      // Total revenue label
      { type: 'text', left: 640, top: 80, text: 'TR', fontSize: 14, fontWeight: 'bold', fill: '#10b981', selectable: true },
      // Break-even point label
      { type: 'text', left: 360, top: 240, text: '× BEP', fontSize: 14, fontWeight: 'bold', fill: '#6366f1', selectable: true },
      // Title
      { type: 'text', left: 260, top: 20, text: 'Break-Even Chart', fontSize: 20, fontWeight: 'bold', fill: '#1f2937', selectable: true },
      // Draw hint
      { type: 'text', left: 200, top: 550, text: '✏ Draw TC and TR lines intersecting at BEP', fontSize: 13, fill: '#9ca3af', selectable: true },
    ],
  },
  {
    id: 'biz-supply-demand',
    subject: 'business',
    label: 'Supply & Demand Diagram',
    description: 'Price/quantity axes with S and D curve placeholders',
    canvasWidth: 800,
    canvasHeight: 600,
    objects: [
      // y-axis (Price)
      { type: 'line', x1: 140, y1: 60, x2: 140, y2: 500, stroke: '#1f2937', strokeWidth: 2.5, selectable: false },
      { type: 'triangle', left: 132, top: 46, width: 16, height: 14, fill: '#1f2937', angle: 0, selectable: false },
      { type: 'text', left: 50, top: 260, text: 'Price (P)', fontSize: 14, fontWeight: 'bold', fill: '#1f2937', angle: -90, selectable: true },
      // x-axis (Quantity)
      { type: 'line', x1: 140, y1: 500, x2: 720, y2: 500, stroke: '#1f2937', strokeWidth: 2.5, selectable: false },
      { type: 'triangle', left: 720, top: 492, width: 16, height: 14, fill: '#1f2937', angle: 90, selectable: false },
      { type: 'text', left: 370, top: 520, text: 'Quantity (Q) →', fontSize: 14, fontWeight: 'bold', fill: '#1f2937', selectable: true },
      // Demand label (top-left to bottom-right)
      { type: 'text', left: 200, top: 110, text: 'D', fontSize: 20, fontWeight: 'bold', fill: '#3b82f6', selectable: true },
      { type: 'text', left: 620, top: 440, text: 'D', fontSize: 20, fontWeight: 'bold', fill: '#3b82f6', selectable: true },
      // Supply label (bottom-left to top-right)
      { type: 'text', left: 200, top: 440, text: 'S', fontSize: 20, fontWeight: 'bold', fill: '#ef4444', selectable: true },
      { type: 'text', left: 620, top: 110, text: 'S', fontSize: 20, fontWeight: 'bold', fill: '#ef4444', selectable: true },
      // Equilibrium point
      { type: 'text', left: 405, top: 260, text: 'E', fontSize: 18, fontWeight: 'bold', fill: '#6366f1', selectable: true },
      // Equilibrium dashed lines
      { type: 'line', x1: 140, y1: 280, x2: 400, y2: 280, stroke: '#6366f1', strokeWidth: 1.5, strokeDashArray: [6, 4], selectable: true },
      { type: 'text', left: 100, top: 268, text: 'Pe', fontSize: 13, fontWeight: 'bold', fill: '#6366f1', selectable: true },
      { type: 'line', x1: 400, y1: 280, x2: 400, y2: 500, stroke: '#6366f1', strokeWidth: 1.5, strokeDashArray: [6, 4], selectable: true },
      { type: 'text', left: 390, top: 505, text: 'Qe', fontSize: 13, fontWeight: 'bold', fill: '#6366f1', selectable: true },
      // Title
      { type: 'text', left: 240, top: 20, text: 'Supply & Demand', fontSize: 20, fontWeight: 'bold', fill: '#1f2937', selectable: true },
      // Draw hint
      { type: 'text', left: 200, top: 555, text: '✏ Draw S and D curves through the labels', fontSize: 13, fill: '#9ca3af', selectable: true },
    ],
  },
];

export default businessTemplates;
