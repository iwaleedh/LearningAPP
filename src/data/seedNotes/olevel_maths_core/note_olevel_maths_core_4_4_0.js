export const note_olevel_maths_core_4_4_0 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify and count lines of symmetry in 2D shapes; draw lines of symmetry on diagrams; use symmetry to find missing lengths and angles.' }
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'What is a Line of Symmetry?', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A <strong>line of symmetry</strong> (axis of symmetry) divides a shape into two halves that are <strong>mirror images</strong> of each other. If you fold the shape along the line, the two halves fit exactly on top of each other. A shape may have zero, one, or many lines of symmetry.' }
    },
    {
      id: 'h-polygons',
      type: 'heading',
      data: { text: 'Lines of Symmetry in Regular Polygons', level: 2 }
    },
    {
      id: 'p-regular',
      type: 'paragraph',
      data: { text: 'A <strong>regular polygon with <em>n</em> sides</strong> always has exactly <strong><em>n</em> lines of symmetry</strong>. Each line passes through a vertex and the midpoint of the opposite side (for odd n), or through opposite vertices or midpoints (for even n).' }
    },
    {
      id: 'table-symmetry',
      type: 'comparisonTable',
      data: {
        caption: 'Lines of symmetry for common 2D shapes',
        headers: ['Shape', 'Lines of symmetry', 'Notes'],
        rows: [
          ['Equilateral triangle', '3', 'Each line through a vertex to the midpoint of opposite side'],
          ['Isosceles triangle', '1', 'Through the apex and midpoint of base'],
          ['Scalene triangle', '0', 'No equal sides or angles'],
          ['Square', '4', '2 through opposite vertices, 2 through midpoints of opposite sides'],
          ['Rectangle', '2', 'Through midpoints of opposite sides only'],
          ['Parallelogram', '0', 'Equal sides but no reflection symmetry'],
          ['Rhombus', '2', 'Along each diagonal'],
          ['Trapezium (general)', '0', ''],
          ['Isosceles trapezium', '1', 'Through midpoints of the two parallel sides'],
          ['Kite', '1', 'Along the longer diagonal'],
          ['Regular pentagon', '5', ''],
          ['Regular hexagon', '6', 'Through pairs of opposite vertices and pairs of midpoints'],
          ['Circle', 'Infinite', 'Any diameter is a line of symmetry']
        ]
      }
    },
    {
      id: 'svg-symmetry',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 210" width="540" height="210">
  <style>
    text { font-family: sans-serif; font-size: 10px; fill: #374151; }
    .name { font-weight: 700; fill: #6366f1; font-size: 11px; }
    .symline { stroke: #ef4444; stroke-width: 1.5; stroke-dasharray: 5,3; }
  </style>
  <!-- Equilateral triangle (3 lines) -->
  <g transform="translate(20, 20)">
    <polygon points="55,5 100,85 10,85" fill="#2d2f72" stroke="#6366f1" stroke-width="1.5"/>
    <line x1="55" y1="5" x2="55" y2="85" class="symline"/>
    <line x1="10" y1="85" x2="77.5" y2="45" class="symline"/>
    <line x1="100" y1="85" x2="32.5" y2="45" class="symline"/>
    <text x="18" y="103" class="name">Equilateral</text>
    <text x="22" y="114">3 lines</text>
  </g>
  <!-- Isosceles triangle (1 line) -->
  <g transform="translate(155, 20)">
    <polygon points="55,5 90,85 20,85" fill="#0a2e1a" stroke="#10b981" stroke-width="1.5"/>
    <line x1="55" y1="5" x2="55" y2="85" class="symline" stroke="#10b981"/>
    <text x="18" y="103" class="name">Isosceles</text>
    <text x="25" y="114">1 line</text>
  </g>
  <!-- Square (4 lines) -->
  <g transform="translate(280, 20)">
    <rect x="15" y="10" width="75" height="75" fill="#4a1040" stroke="#9333ea" stroke-width="1.5"/>
    <line x1="52.5" y1="10" x2="52.5" y2="85" class="symline" stroke="#9333ea"/>
    <line x1="15" y1="47.5" x2="90" y2="47.5" class="symline" stroke="#9333ea"/>
    <line x1="15" y1="10" x2="90" y2="85" class="symline" stroke="#9333ea"/>
    <line x1="90" y1="10" x2="15" y2="85" class="symline" stroke="#9333ea"/>
    <text x="22" y="103" class="name">Square</text>
    <text x="25" y="114">4 lines</text>
  </g>
  <!-- Regular hexagon (6 lines) -->
  <g transform="translate(400, 10)">
    <polygon points="55,5 95,30 95,75 55,100 15,75 15,30" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
    <line x1="55" y1="5" x2="55" y2="100" class="symline" stroke="#ca8a04"/>
    <line x1="15" y1="30" x2="95" y2="75" class="symline" stroke="#ca8a04"/>
    <line x1="95" y1="30" x2="15" y2="75" class="symline" stroke="#ca8a04"/>
    <line x1="15" y1="52.5" x2="95" y2="52.5" class="symline" stroke="#ca8a04"/>
    <line x1="35" y1="17.5" x2="75" y2="87.5" class="symline" stroke="#ca8a04"/>
    <line x1="75" y1="17.5" x2="35" y2="87.5" class="symline" stroke="#ca8a04"/>
    <text x="22" y="120" class="name">Hexagon</text>
    <text x="25" y="131">6 lines</text>
  </g>
</svg>`,
        caption: 'Lines of symmetry (red dashed) for equilateral triangle (3), isosceles triangle (1), square (4), regular hexagon (6)'
      }
    },
    {
      id: 'h-using',
      type: 'heading',
      data: { text: 'Using Symmetry to Find Missing Lengths and Angles', level: 2 }
    },
    {
      id: 'p-using',
      type: 'paragraph',
      data: { text: 'If a shape has a line of symmetry, then lengths, angles, and coordinates that are mirror images of each other must be <strong>equal</strong>. This is very useful in geometry proofs and calculations.' }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '<strong>Q:</strong> An isosceles triangle has a line of symmetry along the vertical. The two base angles are marked x and the apex angle is 48°. Find x.<br><br>By symmetry, both base angles are equal → each = x.<br>x + x + 48° = 180° (angle sum of triangle)<br>2x = 132° → x = <strong>66°</strong>'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Rule',
        text: 'A regular polygon with n sides has <strong>exactly n lines of symmetry</strong>. A circle has <strong>infinitely many</strong> lines of symmetry. A parallelogram has <strong>zero</strong> lines of symmetry (it has rotational symmetry of order 2 instead).'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Parallelogram Trap',
        text: 'Candidates often say a parallelogram has 2 lines of symmetry (the diagonals). This is <strong>wrong</strong>. The diagonals of a parallelogram are NOT lines of symmetry — the shape does not map onto itself when folded along them. A parallelogram has <strong>zero</strong> lines of symmetry.'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'A line of symmetry creates a mirror image. Regular n-sided polygon has n lines of symmetry. Circle has infinite lines. Parallelogram has 0 lines. Use symmetry to equate angles and lengths on either side of the axis.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Line of symmetry = mirror axis. Regular n-gon has n lines. Circle has ∞. Parallelogram has 0.',
    cues: [
      { id: 'cue-1', blockId: 'p-def', prompt: 'What is a line of symmetry? How can you test if a line is a line of symmetry?' },
      { id: 'cue-2', blockId: 'p-regular', prompt: 'How many lines of symmetry does a regular polygon with n sides have?' },
      { id: 'cue-3', blockId: 'table-symmetry', prompt: 'State the number of lines of symmetry for: rectangle, rhombus, kite, parallelogram.' },
      { id: 'cue-4', blockId: 'callout-tip', prompt: 'Why does a parallelogram have 0 lines of symmetry, not 2?' },
      { id: 'cue-5', blockId: 'callout-worked', prompt: 'An isosceles triangle has an apex angle of 36°. Find each base angle using symmetry and the angle sum rule.' }
    ]
  },
  evidence: []
};
