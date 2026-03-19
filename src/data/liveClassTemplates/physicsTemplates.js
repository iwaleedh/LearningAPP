/**
 * Physics canvas templates — circuit diagrams, force diagrams, wave setups.
 */

const physicsTemplates = [
  {
    id: 'phys-circuit-base',
    subject: 'physics',
    label: 'Circuit Diagram Base',
    description: 'Rectangular circuit loop with labelled terminals for adding components',
    canvasWidth: 800,
    canvasHeight: 600,
    objects: [
      // Main loop
      { type: 'line', x1: 200, y1: 150, x2: 600, y2: 150, stroke: '#1f2937', strokeWidth: 2.5, selectable: true },
      { type: 'line', x1: 600, y1: 150, x2: 600, y2: 450, stroke: '#1f2937', strokeWidth: 2.5, selectable: true },
      { type: 'line', x1: 600, y1: 450, x2: 200, y2: 450, stroke: '#1f2937', strokeWidth: 2.5, selectable: true },
      { type: 'line', x1: 200, y1: 450, x2: 200, y2: 150, stroke: '#1f2937', strokeWidth: 2.5, selectable: true },
      // Cell symbol placeholder (top)
      { type: 'line', x1: 380, y1: 135, x2: 380, y2: 165, stroke: '#ef4444', strokeWidth: 3, selectable: true },
      { type: 'line', x1: 400, y1: 140, x2: 400, y2: 160, stroke: '#ef4444', strokeWidth: 1.5, selectable: true },
      { type: 'text', left: 370, top: 110, text: 'Cell', fontSize: 12, fill: '#ef4444', selectable: true },
      // Component label areas
      { type: 'text', left: 610, top: 280, text: 'R₁', fontSize: 16, fontWeight: 'bold', fill: '#3b82f6', selectable: true },
      { type: 'text', left: 370, top: 460, text: 'R₂', fontSize: 16, fontWeight: 'bold', fill: '#10b981', selectable: true },
      // Title
      { type: 'text', left: 300, top: 50, text: 'Circuit Diagram', fontSize: 20, fontWeight: 'bold', fill: '#1f2937', selectable: true },
    ],
  },
  {
    id: 'phys-free-body',
    subject: 'physics',
    label: 'Free-Body Diagram',
    description: 'Central object with labelled force arrows (W, N, F, Drag)',
    canvasWidth: 800,
    canvasHeight: 600,
    objects: [
      // Central object box
      { type: 'rect', left: 340, top: 240, width: 120, height: 80, fill: '#eff6ff', stroke: '#3b82f6', strokeWidth: 2.5, rx: 6, ry: 6, selectable: true },
      { type: 'text', left: 370, top: 265, text: 'Object', fontSize: 15, fontWeight: 'bold', fill: '#3b82f6', selectable: true },
      // Weight (down)
      { type: 'line', x1: 400, y1: 320, x2: 400, y2: 430, stroke: '#ef4444', strokeWidth: 3, selectable: true },
      { type: 'triangle', left: 392, top: 430, width: 16, height: 14, fill: '#ef4444', angle: 180, selectable: true },
      { type: 'text', left: 410, top: 400, text: 'W = mg', fontSize: 14, fontWeight: '600', fill: '#ef4444', selectable: true },
      // Normal (up)
      { type: 'line', x1: 400, y1: 240, x2: 400, y2: 130, stroke: '#10b981', strokeWidth: 3, selectable: true },
      { type: 'triangle', left: 392, top: 116, width: 16, height: 14, fill: '#10b981', angle: 0, selectable: true },
      { type: 'text', left: 410, top: 140, text: 'N', fontSize: 14, fontWeight: '600', fill: '#10b981', selectable: true },
      // Applied force (right)
      { type: 'line', x1: 460, y1: 280, x2: 580, y2: 280, stroke: '#8b5cf6', strokeWidth: 3, selectable: true },
      { type: 'triangle', left: 578, top: 272, width: 16, height: 14, fill: '#8b5cf6', angle: 90, selectable: true },
      { type: 'text', left: 530, top: 255, text: 'F', fontSize: 14, fontWeight: '600', fill: '#8b5cf6', selectable: true },
      // Friction (left)
      { type: 'line', x1: 340, y1: 280, x2: 220, y2: 280, stroke: '#f59e0b', strokeWidth: 3, selectable: true },
      { type: 'triangle', left: 212, top: 272, width: 16, height: 14, fill: '#f59e0b', angle: -90, selectable: true },
      { type: 'text', left: 230, top: 255, text: 'f', fontSize: 14, fontWeight: '600', fill: '#f59e0b', selectable: true },
    ],
  },
  {
    id: 'phys-wave-diagram',
    subject: 'physics',
    label: 'Wave Properties Diagram',
    description: 'Labelled wave showing amplitude, wavelength, and equilibrium',
    canvasWidth: 800,
    canvasHeight: 600,
    objects: [
      // Equilibrium line
      { type: 'line', x1: 80, y1: 300, x2: 720, y2: 300, stroke: '#9ca3af', strokeWidth: 1.5, strokeDashArray: [8, 6], selectable: false },
      { type: 'text', left: 630, top: 305, text: 'Equilibrium', fontSize: 12, fill: '#9ca3af', selectable: true },
      // y-axis
      { type: 'line', x1: 100, y1: 120, x2: 100, y2: 480, stroke: '#1f2937', strokeWidth: 2, selectable: false },
      { type: 'text', left: 20, top: 280, text: 'Displacement', fontSize: 13, fontWeight: 'bold', fill: '#1f2937', angle: -90, selectable: true },
      // x-axis
      { type: 'line', x1: 100, y1: 480, x2: 720, y2: 480, stroke: '#1f2937', strokeWidth: 2, selectable: false },
      { type: 'text', left: 380, top: 490, text: 'Distance →', fontSize: 13, fontWeight: 'bold', fill: '#1f2937', selectable: true },
      // Amplitude arrow
      { type: 'line', x1: 250, y1: 300, x2: 250, y2: 180, stroke: '#ef4444', strokeWidth: 2, selectable: true },
      { type: 'text', left: 260, top: 220, text: 'A', fontSize: 16, fontWeight: 'bold', fill: '#ef4444', selectable: true },
      // Wavelength arrow
      { type: 'line', x1: 180, y1: 140, x2: 420, y2: 140, stroke: '#3b82f6', strokeWidth: 2, selectable: true },
      { type: 'text', left: 270, top: 115, text: 'λ', fontSize: 18, fontWeight: 'bold', fill: '#3b82f6', selectable: true },
      // Title
      { type: 'text', left: 300, top: 50, text: 'Transverse Wave', fontSize: 20, fontWeight: 'bold', fill: '#1f2937', selectable: true },
      // Draw-here hint
      { type: 'text', left: 200, top: 530, text: '✏ Draw the wave shape on the canvas', fontSize: 13, fill: '#9ca3af', selectable: true },
    ],
  },
];

export default physicsTemplates;
