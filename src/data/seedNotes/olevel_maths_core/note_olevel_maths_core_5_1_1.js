export const note_olevel_maths_core_5_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Lengths Areas And Volumes/area.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Know and apply area formulas for rectangles, triangles, parallelograms, trapeziums, and rhombuses/kites. Solve problems involving the areas of these standard shapes.',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What is Area?', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: '<b>Area</b> is the amount of 2D space enclosed within a shape. It is measured in <b>square units</b>: mm², cm², m², or km². You multiply two lengths together, so the units are always squared.',
      },
    },
    {
      id: 'h-formulas',
      type: 'heading',
      data: { text: 'Area Formulas for Standard Shapes', level: 2 },
    },
    {
      id: 'tbl-formulas',
      type: 'comparisonTable',
      data: {
        caption: 'Area formulas for standard 2D shapes',
        headers: ['Shape', 'Formula', 'Variables'],
        rows: [
          ['Rectangle', 'A = l × w', 'l = length, w = width'],
          ['Triangle', 'A = ½ × b × h', 'b = base, h = perpendicular height'],
          ['Parallelogram', 'A = b × h', 'b = base, h = perpendicular height'],
          ['Trapezium', 'A = ½(a + b) × h', 'a, b = parallel sides, h = height'],
          ['Rhombus / Kite', 'A = ½ × d₁ × d₂', 'd₁, d₂ = diagonals'],
        ],
      },
    },
    {
      id: 'svg-shapes',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial" font-size="11">
  <!-- Rectangle -->
  <rect x="10" y="20" width="100" height="60" fill="#2d1b69" stroke="#6366f1" stroke-width="2"/>
  <text x="60" y="15" text-anchor="middle" fill="#374151">l = 10</text>
  <text x="118" y="55" fill="#374151">w = 6</text>
  <text x="60" y="98" text-anchor="middle" fill="#6366f1" font-weight="bold">Rectangle</text>

  <!-- Triangle -->
  <polygon points="150,85 250,85 220,25" fill="#0a2e1a" stroke="#10b981" stroke-width="2"/>
  <line x1="220" y1="25" x2="220" y2="85" stroke="#10b981" stroke-width="1" stroke-dasharray="4"/>
  <text x="200" y="100" text-anchor="middle" fill="#374151">b</text>
  <text x="225" y="58" fill="#374151">h</text>
  <text x="200" y="115" text-anchor="middle" fill="#10b981" font-weight="bold">Triangle</text>

  <!-- Parallelogram -->
  <polygon points="280,80 360,80 350,25 270,25" fill="#78350f" stroke="#f59e0b" stroke-width="2"/>
  <line x1="350" y1="25" x2="350" y2="80" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4"/>
  <text x="315" y="97" text-anchor="middle" fill="#374151">b</text>
  <text x="357" y="57" fill="#374151">h</text>
  <text x="315" y="112" text-anchor="middle" fill="#f59e0b" font-weight="bold">Parallelogram</text>

  <!-- Trapezium -->
  <polygon points="30,180 160,180 130,130 60,130" fill="#3d1212" stroke="#ef4444" stroke-width="2"/>
  <text x="95" y="125" text-anchor="middle" fill="#374151">a</text>
  <text x="95" y="196" text-anchor="middle" fill="#374151">b</text>
  <line x1="130" y1="130" x2="130" y2="180" stroke="#ef4444" stroke-width="1" stroke-dasharray="4"/>
  <text x="138" y="160" fill="#374151">h</text>
  <text x="95" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold">Trapezium</text>

  <!-- Rhombus -->
  <polygon points="310,155 360,120 410,155 360,190" fill="#2d1b69" stroke="#8b5cf6" stroke-width="2"/>
  <line x1="310" y1="155" x2="410" y2="155" stroke="#8b5cf6" stroke-width="1" stroke-dasharray="4"/>
  <line x1="360" y1="120" x2="360" y2="190" stroke="#8b5cf6" stroke-width="1" stroke-dasharray="4"/>
  <text x="360" y="150" text-anchor="middle" fill="#374151" font-size="10">d₁</text>
  <text x="385" y="142" fill="#374151" font-size="10">d₂</text>
  <text x="360" y="215" text-anchor="middle" fill="#8b5cf6" font-weight="bold">Rhombus</text>
</svg>`,
        caption: 'Standard shapes with labelled dimensions',
      },
    },
    {
      id: 'h-key-eqs',
      type: 'heading',
      data: { text: 'Key Equations', level: 2 },
    },
    {
      id: 'eq-rect',
      type: 'equation',
      data: { html: 'A = l × w', caption: 'Area of a rectangle' },
    },
    {
      id: 'eq-tri',
      type: 'equation',
      data: {
        html: 'A = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span> × b × h',
        caption: 'Area of a triangle (b = base, h = perpendicular height)',
      },
    },
    {
      id: 'eq-para',
      type: 'equation',
      data: { html: 'A = b × h', caption: 'Area of a parallelogram' },
    },
    {
      id: 'eq-trap',
      type: 'equation',
      data: {
        html: 'A = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>(a + b)h',
        caption: 'Area of a trapezium (a, b = parallel sides, h = perpendicular height)',
      },
    },
    {
      id: 'eq-rhombus',
      type: 'equation',
      data: {
        html: 'A = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span> × d<sub>1</sub> × d<sub>2</sub>',
        caption: 'Area of a rhombus or kite (d₁, d₂ = diagonals)',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Rectangle',
        text: 'Find the area of a rectangle with length 13 cm and width 5 cm.<br><br>A = l × w = 13 × 5 = <b>65 cm²</b>',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Triangle',
        text: 'A triangle has base 10 m and perpendicular height 6 m. Find the area.<br><br>A = ½ × b × h = ½ × 10 × 6 = <b>30 m²</b>',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Trapezium',
        text: 'A trapezium has parallel sides of 9 cm and 5 cm, and a perpendicular height of 4 cm.<br><br>A = ½(a + b)h = ½(9 + 5) × 4 = ½ × 14 × 4 = <b>28 cm²</b>',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Rhombus',
        text: 'A rhombus has diagonals of length 12 cm and 8 cm. Find the area.<br><br>A = ½ × d₁ × d₂ = ½ × 12 × 8 = <b>48 cm²</b>',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Perpendicular Height',
        text: 'For triangles and parallelograms, you must use the <b>perpendicular height</b> — the vertical height from base to apex, NOT the slant side. If the shape is slanted, the height is the vertical distance measured at a right angle to the base.',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If you are given a parallelogram and asked for area, do not multiply the two sides together — that is not the area. You must have the perpendicular height. Similarly, for a triangle, the height must be perpendicular to the base.',
      },
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can apply A = l × w for rectangles', checked: false },
          { text: 'I can apply A = ½bh for triangles using perpendicular height', checked: false },
          { text: 'I can apply A = bh for parallelograms', checked: false },
          { text: 'I can apply A = ½(a+b)h for trapeziums', checked: false },
          { text: 'I can apply A = ½d₁d₂ for rhombuses and kites', checked: false },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Area is measured in square units. Key formulas: Rectangle A = lw; Triangle A = ½bh; Parallelogram A = bh; Trapezium A = ½(a+b)h; Rhombus/Kite A = ½d₁d₂. Always use the perpendicular height, not the slant side.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Area formulas: rectangle lw, triangle ½bh, parallelogram bh, trapezium ½(a+b)h, rhombus ½d₁d₂.',
    cues: [
      { id: 'cue-1', blockId: 'eq-tri', prompt: 'Write the formula for the area of a triangle.' },
      { id: 'cue-2', blockId: 'eq-trap', prompt: 'Write the formula for the area of a trapezium.' },
      { id: 'cue-3', blockId: 'eq-rhombus', prompt: 'How do you find the area of a rhombus using its diagonals?' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'Why can\'t you use the slant side as the height in triangle and parallelogram area formulae?' },
      { id: 'cue-5', blockId: 'p-intro', prompt: 'What units is area measured in?' },
    ],
  },
  evidence: [],
  mentions: [],
};
