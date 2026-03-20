export const note_olevel_maths_core_5_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Lengths Areas And Volumes/volume.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Calculate the volume of cuboids, prisms, cylinders, pyramids, cones, and spheres. Apply volume formulas to solve problems, including finding unknown dimensions.',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What is Volume?', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: '<b>Volume</b> is the amount of 3D space occupied by a solid. It is measured in <b>cubic units</b>: mm³, cm³, m³. You multiply three lengths, so units are always cubed.',
      },
    },
    {
      id: 'h-formulas',
      type: 'heading',
      data: { text: 'Volume Formulas', level: 2 },
    },
    {
      id: 'tbl-formulas',
      type: 'comparisonTable',
      data: {
        caption: 'Volume formulas for standard 3D shapes',
        headers: ['Shape', 'Formula', 'Variables'],
        rows: [
          ['Cuboid', 'V = l × w × h', 'l = length, w = width, h = height'],
          ['Prism (any cross-section)', 'V = A × l', 'A = cross-section area, l = length'],
          ['Cylinder', 'V = πr²h', 'r = radius, h = height'],
          ['Pyramid', 'V = ⅓ × base area × h', 'h = perpendicular height'],
          ['Cone', 'V = ⅓πr²h', 'r = base radius, h = perpendicular height'],
          ['Sphere', 'V = (4/3)πr³', 'r = radius'],
        ],
      },
    },
    {
      id: 'h-key-eqs',
      type: 'heading',
      data: { text: 'Key Equations', level: 2 },
    },
    {
      id: 'eq-cuboid',
      type: 'equation',
      data: { html: 'V = l × w × h', caption: 'Volume of a cuboid' },
    },
    {
      id: 'eq-prism',
      type: 'equation',
      data: { html: 'V = A × l', caption: 'Volume of any prism (A = cross-section area, l = length)' },
    },
    {
      id: 'eq-cylinder',
      type: 'equation',
      data: { html: 'V = πr²h', caption: 'Volume of a cylinder' },
    },
    {
      id: 'eq-cone',
      type: 'equation',
      data: {
        html: 'V = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span>πr²h',
        caption: 'Volume of a cone',
      },
    },
    {
      id: 'eq-sphere',
      type: 'equation',
      data: {
        html: 'V = <span class="nb-frac"><span class="nb-num">4</span><span class="nb-den">3</span></span>πr³',
        caption: 'Volume of a sphere',
      },
    },
    {
      id: 'svg-3d',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial" font-size="11">
  <!-- Cuboid -->
  <polygon points="20,60 80,60 80,120 20,120" fill="#2d1b69" stroke="#6366f1" stroke-width="1.5"/>
  <polygon points="80,60 110,35 110,95 80,120" fill="#2d1b69" stroke="#6366f1" stroke-width="1.5"/>
  <polygon points="20,60 50,35 110,35 80,60" fill="#2d1b69" stroke="#6366f1" stroke-width="1.5"/>
  <text x="65" y="145" text-anchor="middle" fill="#6366f1" font-weight="bold">Cuboid</text>
  <text x="50" y="90" text-anchor="middle" fill="#374151" font-size="10">l×w×h</text>

  <!-- Cylinder -->
  <ellipse cx="190" cy="55" rx="35" ry="12" fill="#0a2e1a" stroke="#10b981" stroke-width="1.5"/>
  <rect x="155" y="55" width="70" height="60" fill="#0a2e1a" stroke="#10b981" stroke-width="1.5"/>
  <ellipse cx="190" cy="115" rx="35" ry="12" fill="#065f46" stroke="#10b981" stroke-width="1.5"/>
  <text x="190" y="145" text-anchor="middle" fill="#10b981" font-weight="bold">Cylinder</text>
  <text x="190" y="88" text-anchor="middle" fill="#374151" font-size="10">πr²h</text>

  <!-- Cone -->
  <polygon points="300,30 265,120 335,120" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
  <ellipse cx="300" cy="120" rx="35" ry="10" fill="#44370a" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="300" y="148" text-anchor="middle" fill="#f59e0b" font-weight="bold">Cone</text>
  <text x="300" y="85" text-anchor="middle" fill="#374151" font-size="10">⅓πr²h</text>

  <!-- Sphere -->
  <circle cx="430" cy="85" r="45" fill="#3d1212" stroke="#ef4444" stroke-width="1.5"/>
  <ellipse cx="430" cy="85" rx="45" ry="15" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="430" y="148" text-anchor="middle" fill="#ef4444" font-weight="bold">Sphere</text>
  <text x="430" y="85" text-anchor="middle" fill="#374151" font-size="10">⁴⁄₃πr³</text>
</svg>`,
        caption: '3D shapes: cuboid, cylinder, cone, sphere with their volume formulas',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Cuboid',
        text: 'A cuboid is 8 cm long, 5 cm wide, and 3 cm tall. Find its volume.<br><br>V = l × w × h = 8 × 5 × 3 = <b>120 cm³</b>',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Cylinder',
        text: 'A cylinder has radius 4 cm and height 9 cm. Find its volume.<br><br>V = πr²h = π × 4² × 9 = π × 16 × 9 = 144π ≈ <b>452 cm³</b> (3 s.f.)',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Triangular prism',
        text: 'A prism has a triangular cross-section with base 6 cm and height 4 cm. Its length is 10 cm.<br><br>Cross-section area = ½ × 6 × 4 = 12 cm²<br>V = A × l = 12 × 10 = <b>120 cm³</b>',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Sphere',
        text: 'Find the volume of a sphere with radius 5 cm.<br><br>V = (4/3)πr³ = (4/3) × π × 5³ = (4/3) × π × 125 = 500π/3 ≈ <b>524 cm³</b> (3 s.f.)',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Learn which shapes have the factor of ⅓: <b>cone</b> and <b>pyramid</b>. A cone is exactly ⅓ the volume of a cylinder with the same base and height. A pyramid is exactly ⅓ the volume of the corresponding prism.',
      },
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can calculate V = lwh for a cuboid', checked: false },
          { text: 'I can calculate V = A × l for any prism', checked: false },
          { text: 'I can calculate V = πr²h for a cylinder', checked: false },
          { text: 'I can calculate V = ⅓πr²h for a cone', checked: false },
          { text: 'I can calculate V = (4/3)πr³ for a sphere', checked: false },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Volume is in cubic units. Key formulas: Cuboid = lwh; Prism = A×l; Cylinder = πr²h; Cone = ⅓πr²h; Sphere = (4/3)πr³. Cones and pyramids have a factor of ⅓ compared to their prism/cylinder equivalents.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Volume formulas: cuboid lwh, cylinder πr²h, cone ⅓πr²h, sphere (4/3)πr³, prism A×l.',
    cues: [
      { id: 'cue-1', blockId: 'eq-cylinder', prompt: 'Write the formula for the volume of a cylinder.' },
      { id: 'cue-2', blockId: 'eq-cone', prompt: 'Write the formula for the volume of a cone.' },
      { id: 'cue-3', blockId: 'eq-sphere', prompt: 'Write the formula for the volume of a sphere.' },
      { id: 'cue-4', blockId: 'callout-tip', prompt: 'Which shapes have a factor of ⅓ in their volume formula?' },
      { id: 'cue-5', blockId: 'eq-prism', prompt: 'How do you find the volume of any prism?' },
    ],
  },
  evidence: [],
  mentions: [],
};
