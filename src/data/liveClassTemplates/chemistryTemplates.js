/**
 * Chemistry canvas templates — full-layout presets for common diagrams.
 * Each template defines an array of Fabric.js-serializable objects.
 */

const chemistryTemplates = [
  {
    id: 'chem-dot-cross',
    subject: 'chemistry',
    label: 'Dot-and-Cross Diagram',
    description: 'Two overlapping circles for drawing electron dot-and-cross diagrams',
    canvasWidth: 800,
    canvasHeight: 600,
    objects: [
      { type: 'circle', left: 250, top: 200, radius: 120, fill: 'transparent', stroke: '#3b82f6', strokeWidth: 2.5, selectable: true },
      { type: 'circle', left: 400, top: 200, radius: 120, fill: 'transparent', stroke: '#ef4444', strokeWidth: 2.5, selectable: true },
      { type: 'text', left: 240, top: 150, text: 'Atom A', fontSize: 16, fontWeight: 'bold', fill: '#3b82f6', selectable: true },
      { type: 'text', left: 440, top: 150, text: 'Atom B', fontSize: 16, fontWeight: 'bold', fill: '#ef4444', selectable: true },
      { type: 'text', left: 340, top: 420, text: 'Shared pair region', fontSize: 13, fill: '#6b7280', selectable: true },
    ],
  },
  {
    id: 'chem-enthalpy-diagram',
    subject: 'chemistry',
    label: 'Enthalpy Level Diagram',
    description: 'Energy levels with reactants, products, and activation energy arrows',
    canvasWidth: 800,
    canvasHeight: 600,
    objects: [
      // y-axis
      { type: 'line', x1: 100, y1: 80, x2: 100, y2: 500, stroke: '#1f2937', strokeWidth: 2.5, selectable: false },
      // y-axis arrowhead
      { type: 'triangle', left: 92, top: 65, width: 16, height: 14, fill: '#1f2937', angle: 0, selectable: false },
      { type: 'text', left: 30, top: 260, text: 'Energy', fontSize: 14, fontWeight: 'bold', fill: '#1f2937', angle: -90, selectable: true },
      // Reactant level
      { type: 'line', x1: 130, y1: 220, x2: 320, y2: 220, stroke: '#3b82f6', strokeWidth: 3, selectable: true },
      { type: 'text', left: 140, top: 225, text: 'Reactants', fontSize: 14, fontWeight: '600', fill: '#3b82f6', selectable: true },
      // Product level
      { type: 'line', x1: 460, y1: 380, x2: 650, y2: 380, stroke: '#10b981', strokeWidth: 3, selectable: true },
      { type: 'text', left: 480, top: 385, text: 'Products', fontSize: 14, fontWeight: '600', fill: '#10b981', selectable: true },
      // ΔH arrow
      { type: 'text', left: 360, top: 290, text: 'ΔH', fontSize: 18, fontWeight: 'bold', fill: '#ef4444', selectable: true },
      // Reaction progress label
      { type: 'text', left: 350, top: 510, text: 'Reaction progress →', fontSize: 14, fill: '#1f2937', selectable: true },
    ],
  },
  {
    id: 'chem-titration-setup',
    subject: 'chemistry',
    label: 'Titration Apparatus',
    description: 'Burette, conical flask, and clamp stand layout',
    canvasWidth: 800,
    canvasHeight: 600,
    objects: [
      // Clamp stand (vertical line + base)
      { type: 'line', x1: 200, y1: 100, x2: 200, y2: 500, stroke: '#6b7280', strokeWidth: 4, selectable: true },
      { type: 'line', x1: 130, y1: 500, x2: 270, y2: 500, stroke: '#6b7280', strokeWidth: 4, selectable: true },
      // Burette body
      { type: 'rect', left: 260, top: 120, width: 20, height: 220, fill: 'transparent', stroke: '#1f2937', strokeWidth: 2, selectable: true },
      { type: 'text', left: 290, top: 120, text: 'Burette', fontSize: 13, fill: '#1f2937', selectable: true },
      // Conical flask outline
      { type: 'triangle', left: 220, top: 380, width: 100, height: 90, fill: 'transparent', stroke: '#1f2937', strokeWidth: 2, angle: 180, selectable: true },
      { type: 'text', left: 230, top: 480, text: 'Conical flask', fontSize: 13, fill: '#1f2937', selectable: true },
      // Title
      { type: 'text', left: 450, top: 80, text: 'Titration Setup', fontSize: 22, fontWeight: 'bold', fill: '#1f2937', selectable: true },
      // Annotations area
      { type: 'text', left: 450, top: 180, text: 'Notes:', fontSize: 14, fill: '#6b7280', selectable: true },
    ],
  },
];

export default chemistryTemplates;
