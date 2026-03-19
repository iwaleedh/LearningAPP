/**
 * Biology canvas templates — cell diagrams, genetics grids, enzyme plots.
 */

const biologyTemplates = [
  {
    id: 'bio-punnett-square',
    subject: 'biology',
    label: 'Punnett Square',
    description: '2×2 genetics cross grid with parent allele labels',
    canvasWidth: 800,
    canvasHeight: 600,
    objects: [
      // Grid lines — horizontal
      { type: 'line', x1: 250, y1: 200, x2: 550, y2: 200, stroke: '#1f2937', strokeWidth: 2, selectable: false },
      { type: 'line', x1: 250, y1: 300, x2: 550, y2: 300, stroke: '#1f2937', strokeWidth: 2, selectable: false },
      { type: 'line', x1: 250, y1: 400, x2: 550, y2: 400, stroke: '#1f2937', strokeWidth: 2, selectable: false },
      // Grid lines — vertical
      { type: 'line', x1: 250, y1: 200, x2: 250, y2: 400, stroke: '#1f2937', strokeWidth: 2, selectable: false },
      { type: 'line', x1: 400, y1: 200, x2: 400, y2: 400, stroke: '#1f2937', strokeWidth: 2, selectable: false },
      { type: 'line', x1: 550, y1: 200, x2: 550, y2: 400, stroke: '#1f2937', strokeWidth: 2, selectable: false },
      // Parent allele labels (top)
      { type: 'text', left: 300, top: 170, text: 'A', fontSize: 22, fontWeight: 'bold', fill: '#3b82f6', selectable: true },
      { type: 'text', left: 450, top: 170, text: 'a', fontSize: 22, fontWeight: 'bold', fill: '#3b82f6', selectable: true },
      // Parent allele labels (left)
      { type: 'text', left: 215, top: 235, text: 'A', fontSize: 22, fontWeight: 'bold', fill: '#ef4444', selectable: true },
      { type: 'text', left: 215, top: 335, text: 'a', fontSize: 22, fontWeight: 'bold', fill: '#ef4444', selectable: true },
      // Header labels
      { type: 'text', left: 350, top: 130, text: 'Parent 1 gametes', fontSize: 14, fill: '#3b82f6', selectable: true },
      { type: 'text', left: 100, top: 280, text: 'Parent 2\ngametes', fontSize: 14, fill: '#ef4444', textAlign: 'center', selectable: true },
      // Title
      { type: 'text', left: 300, top: 60, text: 'Punnett Square', fontSize: 22, fontWeight: 'bold', fill: '#1f2937', selectable: true },
      // Genotype ratio area
      { type: 'text', left: 250, top: 430, text: 'Genotype ratio:', fontSize: 14, fontWeight: '600', fill: '#6b7280', selectable: true },
      { type: 'text', left: 250, top: 455, text: 'Phenotype ratio:', fontSize: 14, fontWeight: '600', fill: '#6b7280', selectable: true },
    ],
  },
  {
    id: 'bio-animal-cell',
    subject: 'biology',
    label: 'Animal Cell Outline',
    description: 'Large cell outline with labelled organelle regions',
    canvasWidth: 800,
    canvasHeight: 600,
    objects: [
      // Cell membrane (large ellipse)
      { type: 'ellipse', left: 160, top: 100, rx: 260, ry: 200, fill: '#fef3c7', stroke: '#f59e0b', strokeWidth: 3, selectable: true },
      // Nucleus
      { type: 'circle', left: 310, top: 200, radius: 60, fill: '#dbeafe', stroke: '#3b82f6', strokeWidth: 2.5, selectable: true },
      { type: 'text', left: 330, top: 225, text: 'Nucleus', fontSize: 13, fontWeight: 'bold', fill: '#3b82f6', selectable: true },
      // Mitochondria label area
      { type: 'ellipse', left: 180, top: 300, rx: 30, ry: 14, fill: '#fce7f3', stroke: '#ec4899', strokeWidth: 2, selectable: true },
      { type: 'text', left: 130, top: 330, text: 'Mitochondria', fontSize: 12, fill: '#ec4899', selectable: true },
      // ER area
      { type: 'text', left: 440, top: 160, text: 'Rough ER', fontSize: 12, fill: '#8b5cf6', selectable: true },
      { type: 'text', left: 440, top: 280, text: 'Smooth ER', fontSize: 12, fill: '#8b5cf6', selectable: true },
      // Ribosome dots hint
      { type: 'text', left: 440, top: 180, text: '• • •', fontSize: 14, fill: '#8b5cf6', selectable: true },
      // Cell membrane label
      { type: 'text', left: 500, top: 100, text: 'Cell\nmembrane', fontSize: 12, fontWeight: '600', fill: '#f59e0b', selectable: true },
      // Title
      { type: 'text', left: 280, top: 30, text: 'Animal Cell', fontSize: 22, fontWeight: 'bold', fill: '#1f2937', selectable: true },
      // Draw-here hint
      { type: 'text', left: 200, top: 530, text: '✏ Add organelle drawings inside the cell', fontSize: 13, fill: '#9ca3af', selectable: true },
    ],
  },
  {
    id: 'bio-enzyme-rate',
    subject: 'biology',
    label: 'Enzyme Rate Graph',
    description: 'Axes for plotting rate of reaction vs. substrate concentration',
    canvasWidth: 800,
    canvasHeight: 600,
    objects: [
      // y-axis
      { type: 'line', x1: 120, y1: 80, x2: 120, y2: 480, stroke: '#1f2937', strokeWidth: 2.5, selectable: false },
      { type: 'triangle', left: 112, top: 66, width: 16, height: 14, fill: '#1f2937', angle: 0, selectable: false },
      { type: 'text', left: 20, top: 250, text: 'Rate of reaction', fontSize: 14, fontWeight: 'bold', fill: '#1f2937', angle: -90, selectable: true },
      // x-axis
      { type: 'line', x1: 120, y1: 480, x2: 700, y2: 480, stroke: '#1f2937', strokeWidth: 2.5, selectable: false },
      { type: 'triangle', left: 700, top: 472, width: 16, height: 14, fill: '#1f2937', angle: 90, selectable: false },
      { type: 'text', left: 310, top: 500, text: '[Substrate] →', fontSize: 14, fontWeight: 'bold', fill: '#1f2937', selectable: true },
      // Vmax dashed line
      { type: 'line', x1: 120, y1: 160, x2: 680, y2: 160, stroke: '#ef4444', strokeWidth: 1.5, strokeDashArray: [8, 6], selectable: true },
      { type: 'text', left: 680, top: 148, text: 'Vmax', fontSize: 14, fontWeight: 'bold', fill: '#ef4444', selectable: true },
      // Km marker
      { type: 'line', x1: 300, y1: 320, x2: 300, y2: 480, stroke: '#3b82f6', strokeWidth: 1.5, strokeDashArray: [6, 4], selectable: true },
      { type: 'text', left: 290, top: 490, text: 'Km', fontSize: 14, fontWeight: 'bold', fill: '#3b82f6', selectable: true },
      // Title
      { type: 'text', left: 250, top: 30, text: 'Enzyme Kinetics', fontSize: 20, fontWeight: 'bold', fill: '#1f2937', selectable: true },
      // Draw hint
      { type: 'text', left: 350, top: 350, text: '✏ Draw Michaelis-Menten curve', fontSize: 13, fill: '#9ca3af', selectable: true },
    ],
  },
];

export default biologyTemplates;
