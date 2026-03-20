export const note_olevel_maths_core_4_2_1 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use the angle sum of a quadrilateral (360°) and properties of special quadrilaterals to find missing angles.' }
    },
    {
      id: 'h-sum',
      type: 'heading',
      data: { text: 'Angle Sum of a Quadrilateral', level: 2 }
    },
    {
      id: 'p-sum',
      type: 'paragraph',
      data: { text: 'The four interior angles of <strong>any quadrilateral</strong> always add up to <strong>360°</strong>. You can prove this by drawing a diagonal — it splits the quadrilateral into two triangles, each with angle sum 180°, giving 2 × 180° = 360°.' }
    },
    {
      id: 'eq-sum',
      type: 'equation',
      data: { html: 'a + b + c + d = 360°', caption: 'Sum of interior angles in any quadrilateral' }
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Properties of Special Quadrilaterals', level: 2 }
    },
    {
      id: 'table-quads',
      type: 'comparisonTable',
      data: {
        caption: 'Properties of special quadrilaterals',
        headers: ['Shape', 'Sides', 'Angles', 'Diagonals', 'Lines of symmetry'],
        rows: [
          ['Square', '4 equal sides; all opposite sides parallel', 'All 90°', 'Equal length; bisect at 90°; bisect each other', '4'],
          ['Rectangle', 'Opposite sides equal and parallel', 'All 90°', 'Equal length; bisect each other (not at 90°)', '2'],
          ['Parallelogram', 'Opposite sides equal and parallel', 'Opposite angles equal; co-interior = 180°', 'Bisect each other (not equal, not at 90°)', '0'],
          ['Rhombus', '4 equal sides; opposite sides parallel', 'Opposite angles equal', 'Bisect at 90°; bisect each other (not equal)', '2'],
          ['Trapezium', 'One pair of parallel sides', 'Co-interior angles (same side) sum to 180°', 'Generally neither equal nor bisect', '0 (1 if isosceles)'],
          ['Kite', 'Two pairs of adjacent equal sides', 'One pair of opposite angles equal', 'One diagonal bisects the other at 90°', '1']
        ]
      }
    },
    {
      id: 'svg-quads',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 210" width="560" height="210">
  <style>
    text { font-family: sans-serif; font-size: 10px; fill: #374151; }
    .name { font-weight: 700; fill: #6366f1; font-size: 11px; }
    .sq { fill: #e0e7ff; stroke: #6366f1; stroke-width: 1.5; }
    .rect { fill: #dcfce7; stroke: #10b981; stroke-width: 1.5; }
    .para { fill: #fce7f3; stroke: #9333ea; stroke-width: 1.5; }
    .trap { fill: #fef9c3; stroke: #ca8a04; stroke-width: 1.5; }
    .rhom { fill: #fee2e2; stroke: #ef4444; stroke-width: 1.5; }
    .kite { fill: #e0f2fe; stroke: #0284c7; stroke-width: 1.5; }
  </style>
  <!-- Square -->
  <g transform="translate(15,30)">
    <rect x="0" y="0" width="60" height="60" class="sq"/>
    <rect x="4" y="4" width="8" height="8" fill="none" stroke="#6366f1" stroke-width="1"/>
    <text x="8" y="82" class="name">Square</text>
  </g>
  <!-- Rectangle -->
  <g transform="translate(105,40)">
    <rect x="0" y="0" width="80" height="50" class="rect"/>
    <rect x="4" y="4" width="8" height="8" fill="none" stroke="#10b981" stroke-width="1"/>
    <text x="12" y="72" class="name">Rectangle</text>
  </g>
  <!-- Parallelogram -->
  <g transform="translate(215,40)">
    <polygon points="15,0 95,0 80,50 0,50" class="para"/>
    <text x="12" y="72" class="name">Parallelogram</text>
  </g>
  <!-- Rhombus -->
  <g transform="translate(335,20)">
    <polygon points="35,0 70,40 35,80 0,40" class="rhom"/>
    <text x="12" y="100" class="name">Rhombus</text>
  </g>
  <!-- Trapezium -->
  <g transform="translate(15,130)">
    <polygon points="20,0 80,0 100,55 0,55" class="trap"/>
    <text x="8" y="75" class="name">Trapezium</text>
  </g>
  <!-- Kite -->
  <g transform="translate(145,120)">
    <polygon points="35,0 70,40 35,80 0,40" class="kite"/>
    <text x="15" y="100" class="name">Kite</text>
  </g>
  <!-- Angle labels showing 360° -->
  <g transform="translate(310,130)">
    <polygon points="30,0 120,10 130,70 0,60" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
    <text x="3" y="-5" fill="#6366f1" font-size="10" font-weight="700">Any quadrilateral:</text>
    <text x="-2" y="18" fill="#6366f1" font-size="10">a</text>
    <text x="115" y="18" fill="#6366f1" font-size="10">b</text>
    <text x="118" y="75" fill="#6366f1" font-size="10">c</text>
    <text x="-4" y="72" fill="#6366f1" font-size="10">d</text>
    <text x="30" y="90" fill="#374151" font-size="10">a+b+c+d = 360°</text>
  </g>
</svg>`,
        caption: 'Six special quadrilaterals and the angle sum rule for any quadrilateral'
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples',
        text: '<strong>Example 1:</strong> A quadrilateral has angles 85°, 100°, 95°, and x. Find x.<br>85 + 100 + 95 + x = 360 → 280 + x = 360 → x = <strong>80°</strong><br><br><strong>Example 2:</strong> A parallelogram has one angle of 65°. Find the other three angles.<br>Adjacent angle (co-interior) = 180° − 65° = 115°<br>Opposite angles are equal: other pair = 65° and 115°<br>→ Angles: <strong>65°, 115°, 65°, 115°</strong><br><br><strong>Example 3:</strong> A kite has angles 50°, 130°, 50° (top–right–bottom). Find the fourth angle.<br>50 + 130 + 50 + x = 360 → x = <strong>130°</strong>'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Quick Angle Facts for Quadrilaterals',
        text: '• <strong>Any quadrilateral:</strong> angles sum to 360°<br>• <strong>Square / Rectangle:</strong> all four angles = 90°<br>• <strong>Parallelogram / Rhombus:</strong> opposite angles equal; adjacent angles co-interior (sum to 180°)<br>• <strong>Trapezium:</strong> each pair of co-interior angles (on the same side of the parallel lines) sums to 180°'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Co-interior Angles in Parallelograms',
        text: 'In a parallelogram, adjacent angles are co-interior (allied), so they always add to 180°. If one angle is given, the adjacent angle = 180° minus that angle, and opposite angles are equal. You can find all four angles from just one.'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Quadrilateral angle sum = 360°. Square/rectangle: all 90°. Parallelogram/rhombus: opposite angles equal; adjacent sum to 180°. Trapezium: co-interior angles on same side sum to 180°. Kite: one pair of opposite angles equal.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Interior angles of any quadrilateral = 360°. Key shapes: square (90° each), parallelogram (opposite equal, adjacent = 180°), kite (one pair opposite equal).',
    cues: [
      { id: 'cue-1', blockId: 'eq-sum', prompt: 'What is the angle sum of any quadrilateral? How is this derived from triangles?' },
      { id: 'cue-2', blockId: 'table-quads', prompt: 'State the angle properties of a parallelogram.' },
      { id: 'cue-3', blockId: 'table-quads', prompt: 'How many lines of symmetry does a rhombus have? A rectangle? A parallelogram?' },
      { id: 'cue-4', blockId: 'callout-worked', prompt: 'A quadrilateral has three angles of 90°, 75°, and 110°. Find the fourth angle.' }
    ]
  },
  evidence: []
};
