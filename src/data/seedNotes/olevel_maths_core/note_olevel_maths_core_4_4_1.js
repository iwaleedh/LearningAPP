export const note_olevel_maths_core_4_4_1 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify and state the order of rotational symmetry of 2D shapes; find the centre of rotation; distinguish between line symmetry and rotational symmetry.' }
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'What is Rotational Symmetry?', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A shape has <strong>rotational symmetry</strong> if it looks exactly the same after being rotated through less than 360° about a fixed point called the <strong>centre of rotation</strong>. The number of times the shape looks the same in one full 360° turn is called its <strong>order of rotational symmetry</strong>.' }
    },
    {
      id: 'p-order1',
      type: 'paragraph',
      data: { text: 'A shape with <strong>order 1</strong> has no rotational symmetry — it only matches itself after a full 360° turn. Technically every shape has at least order 1, but we say a shape with order 1 has "no rotational symmetry". Order ≥ 2 means it has rotational symmetry.' }
    },
    {
      id: 'h-regular',
      type: 'heading',
      data: { text: 'Rotational Symmetry of Regular Polygons', level: 2 }
    },
    {
      id: 'p-regular',
      type: 'paragraph',
      data: { text: 'A <strong>regular polygon with n sides</strong> has rotational symmetry of order <em>n</em>. The fractional turns that bring it back to match itself are 1/n, 2/n, 3/n, …, n/n (= full turn). For example, a regular hexagon (n = 6) matches itself after rotations of 60°, 120°, 180°, 240°, 300°, and 360°.' }
    },
    {
      id: 'svg-rots',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 190" width="540" height="190">
  <style>
    text { font-family: sans-serif; font-size: 10px; fill: #374151; }
    .name { font-weight: 700; fill: #3b82f6; font-size: 11px; }
    .order { fill: #ef4444; font-weight: 700; font-size: 11px; }
    .centre { fill: #ef4444; }
  </style>
  <!-- Equilateral triangle — order 3 -->
  <g transform="translate(20, 20)">
    <polygon points="55,5 100,85 10,85" fill="#2d2f72" stroke="#3b82f6" stroke-width="1.5"/>
    <circle cx="55" cy="58" r="4" class="centre"/>
    <text x="18" y="108" class="name">Equilateral △</text>
    <text x="18" y="120" class="order">Order 3</text>
    <text x="18" y="132">(120°, 240°, 360°)</text>
  </g>
  <!-- Square — order 4 -->
  <g transform="translate(165, 20)">
    <rect x="10" y="10" width="75" height="75" fill="#0a2e1a" stroke="#10b981" stroke-width="1.5"/>
    <circle cx="47.5" cy="47.5" r="4" fill="#10b981"/>
    <text x="18" y="108" class="name">Square</text>
    <text x="18" y="120" class="order" fill="#10b981">Order 4</text>
    <text x="5" y="132">(90°, 180°, 270°, 360°)</text>
  </g>
  <!-- Parallelogram — order 2 -->
  <g transform="translate(310, 30)">
    <polygon points="10,70 80,70 100,10 30,10" fill="#4a1040" stroke="#9333ea" stroke-width="1.5"/>
    <circle cx="55" cy="40" r="4" fill="#9333ea"/>
    <text x="10" y="98" class="name">Parallelogram</text>
    <text x="18" y="110" class="order" fill="#9333ea">Order 2</text>
    <text x="18" y="122">(180°, 360°)</text>
  </g>
  <!-- Regular hexagon — order 6 -->
  <g transform="translate(430, 10)">
    <polygon points="55,5 90,28 90,72 55,95 20,72 20,28" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
    <circle cx="55" cy="50" r="4" fill="#ca8a04"/>
    <text x="22" y="115" class="name">Hexagon</text>
    <text x="22" y="127" class="order" fill="#ca8a04">Order 6</text>
    <text x="13" y="139">(60°, 120°, ..., 360°)</text>
  </g>
</svg>`,
        caption: 'Order of rotational symmetry: equilateral triangle (3), square (4), parallelogram (2), regular hexagon (6). Red dot marks the centre of rotation.'
      }
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Comparing Line and Rotational Symmetry', level: 2 }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Line symmetry vs rotational symmetry for common shapes',
        headers: ['Shape', 'Lines of symmetry', 'Order of rotational symmetry'],
        rows: [
          ['Equilateral triangle', '3', '3'],
          ['Isosceles triangle', '1', '1 (none)'],
          ['Scalene triangle', '0', '1 (none)'],
          ['Square', '4', '4'],
          ['Rectangle', '2', '2'],
          ['Parallelogram', '0', '2'],
          ['Rhombus', '2', '2'],
          ['Regular pentagon', '5', '5'],
          ['Regular hexagon', '6', '6'],
          ['Circle', 'Infinite', 'Infinite'],
          ['Kite', '1', '1 (none)'],
          ['Letter "S"', '0', '2']
        ]
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '<strong>Q:</strong> Describe the symmetry of a regular octagon.<br><br>n = 8 sides → regular polygon rules:<br>• Lines of symmetry: <strong>8</strong> (4 through opposite vertices + 4 through midpoints of opposite sides)<br>• Order of rotational symmetry: <strong>8</strong><br>• Rotation angle: 360° ÷ 8 = <strong>45°</strong> per step<br><br><strong>Q2:</strong> What is the order of rotational symmetry of a rectangle?<br>After 180° it maps onto itself; after 360° again → <strong>Order 2</strong>'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Rules',
        text: '• Regular n-gon: always <strong>n lines</strong> of symmetry AND rotational symmetry of <strong>order n</strong><br>• Rotation angle per step = 360° ÷ order<br>• Parallelogram: <strong>0 lines</strong> of symmetry but <strong>order 2</strong> rotational — a useful exception to remember<br>• Order 1 = no rotational symmetry'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Parallelogram is the Classic Trick',
        text: 'The parallelogram is the most commonly tested exception: it has <strong>no lines of symmetry</strong> but <strong>order 2 rotational symmetry</strong>. Candidates mistake the diagonals for lines of symmetry — but folding a parallelogram along a diagonal does NOT give a match. However, a half-turn (180°) maps it exactly onto itself.'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Order of rotational symmetry = number of times a shape fits on itself in 360°. Regular n-gon has order n. Rotation angle = 360°/n. Parallelogram has order 2 but 0 lines of symmetry. Order 1 means no rotational symmetry.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Order n = shape looks same n times in 360°. Regular n-gon has order n. Parallelogram has order 2, 0 lines of symmetry.',
    cues: [
      { id: 'cue-1', blockId: 'p-def', prompt: 'Define the order of rotational symmetry. What does order 1 mean?' },
      { id: 'cue-2', blockId: 'p-regular', prompt: 'A regular hexagon has rotational symmetry of order 6. What rotation angle maps it to itself?' },
      { id: 'cue-3', blockId: 'table-compare', prompt: 'A parallelogram has order 2 rotational symmetry but 0 lines of symmetry. Explain why.' },
      { id: 'cue-4', blockId: 'callout-worked', prompt: 'State the order of rotational symmetry and number of lines of symmetry for a regular octagon.' }
    ]
  },
  evidence: []
};
