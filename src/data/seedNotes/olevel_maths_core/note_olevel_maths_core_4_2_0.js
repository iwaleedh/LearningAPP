export const note_olevel_maths_core_4_2_0 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use the angle sum of a triangle (180°) and the exterior angle theorem to find missing angles; identify and apply properties of equilateral, isosceles, scalene, and right-angled triangles.' }
    },
    {
      id: 'h-sum',
      type: 'heading',
      data: { text: 'Angle Sum of a Triangle', level: 2 }
    },
    {
      id: 'p-sum',
      type: 'paragraph',
      data: { text: 'The three interior angles of <strong>any</strong> triangle always add up to <strong>180°</strong>. This is true for every triangle regardless of its shape or size. To find a missing angle, add the two known angles and subtract from 180°.' }
    },
    {
      id: 'eq-sum',
      type: 'equation',
      data: { html: 'a + b + c = 180°', caption: 'Sum of interior angles in any triangle' }
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Types of Triangles', level: 2 }
    },
    {
      id: 'table-types',
      type: 'comparisonTable',
      data: {
        caption: 'Types of triangles and their properties',
        headers: ['Type', 'Sides', 'Angles', 'Key facts'],
        rows: [
          ['Equilateral', '3 equal sides', '3 × 60°', 'All sides and angles equal; 3 lines of symmetry'],
          ['Isosceles', '2 equal sides', '2 equal base angles', 'Base angles are equal; 1 line of symmetry'],
          ['Scalene', 'All sides different', 'All angles different', 'No equal sides or angles; no lines of symmetry'],
          ['Right-angled', 'Any combination', 'One angle = 90°', 'Can also be isosceles (45–45–90)']
        ]
      }
    },
    {
      id: 'h-exterior',
      type: 'heading',
      data: { text: 'Exterior Angle of a Triangle', level: 2 }
    },
    {
      id: 'p-exterior',
      type: 'paragraph',
      data: { text: 'An <strong>exterior angle</strong> of a triangle is formed by extending one side of the triangle. The exterior angle equals the <strong>sum of the two non-adjacent interior angles</strong> (also called the two "opposite" interior angles). This is a direct consequence of the 180° rule: if the exterior angle and the interior angle on the straight line add to 180°, and the three interior angles also add to 180°, the exterior angle must equal the other two combined.' }
    },
    {
      id: 'eq-exterior',
      type: 'equation',
      data: { html: 'Exterior angle = a + b &nbsp;(where a and b are the two non-adjacent interior angles)', caption: 'Exterior angle theorem' }
    },
    {
      id: 'svg-triangle',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210" width="520" height="210">
  <style>
    text { font-family: sans-serif; font-size: 12px; fill: #374151; }
    .lbl { font-weight: 700; font-size: 13px; fill: #3b82f6; }
    .ext { font-weight: 700; font-size: 13px; fill: #ef4444; }
    .title { font-weight: 700; fill: #374151; font-size: 12px; }
    .eq { fill: #6b7280; font-size: 11px; }
  </style>
  <!-- Interior angle sum diagram -->
  <g transform="translate(30, 20)">
    <text x="40" y="0" class="title">Interior angles: a + b + c = 180°</text>
    <!-- Triangle -->
    <polygon points="100,160 220,160 160,50" fill="#2d2f72" stroke="#3b82f6" stroke-width="2"/>
    <!-- Angle arcs -->
    <path d="M113,160 A15,15 0 0,0 107,146" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
    <path d="M207,160 A15,15 0 0,1 214,147" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
    <path d="M153,62 A15,15 0 0,1 166,62" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="90" y="178" class="lbl">a</text>
    <text x="213" y="178" class="lbl">b</text>
    <text x="153" y="42" class="lbl">c</text>
    <text x="95" y="200" class="eq">a + b + c = 180°</text>
  </g>
  <!-- Exterior angle diagram -->
  <g transform="translate(295, 20)">
    <text x="10" y="0" class="title">Exterior angle = a + b</text>
    <!-- Triangle -->
    <polygon points="30,160 165,160 100,50" fill="#4a1040" stroke="#9333ea" stroke-width="2"/>
    <!-- Extended line -->
    <line x1="165" y1="160" x2="220" y2="160" stroke="#374151" stroke-width="2" stroke-dasharray="5,3"/>
    <!-- Interior angle arcs -->
    <path d="M44,160 A16,16 0 0,0 37,146" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
    <path d="M93,62 A15,15 0 0,1 107,62" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
    <!-- Exterior angle arc -->
    <path d="M195,160 A30,30 0 0,0 161,135" fill="none" stroke="#ef4444" stroke-width="2"/>
    <text x="20" y="178" class="lbl">a</text>
    <text x="93" y="42" class="lbl">b</text>
    <text x="196" y="148" class="ext">d</text>
    <text x="10" y="200" class="eq">d = a + b</text>
  </g>
</svg>`,
        caption: 'Left: interior angles a + b + c = 180°. Right: exterior angle d = a + b.'
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples',
        text: '<strong>Example 1:</strong> A triangle has angles 65° and 48°. Find the third angle.<br>Third angle = 180° − 65° − 48° = <strong>67°</strong><br><br><strong>Example 2:</strong> An isosceles triangle has a top angle of 40°. Find the base angles.<br>Two base angles are equal. Let each = x.<br>40 + x + x = 180 → 2x = 140 → x = <strong>70°</strong><br><br><strong>Example 3:</strong> The exterior angle of a triangle is 110°. One of the opposite interior angles is 62°. Find the other.<br>Other interior angle = 110° − 62° = <strong>48°</strong>'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Facts',
        text: '• Interior angles of any triangle sum to <strong>180°</strong><br>• Equilateral triangle: all angles = <strong>60°</strong><br>• Isosceles triangle: <strong>base angles are equal</strong><br>• Exterior angle = sum of the <strong>two opposite</strong> interior angles'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Isosceles Shortcut',
        text: 'For an isosceles triangle, if you know the apex angle, subtract it from 180° then divide by 2 to get each base angle. For example: apex = 50° → base angles = (180° − 50°) ÷ 2 = 65° each.'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Any triangle: angle sum = 180°. Equilateral: 3 × 60°. Isosceles: 2 equal base angles. Right-angled: one 90° angle. Exterior angle of triangle = sum of two opposite interior angles.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Triangle angle sum = 180°. Equilateral: 60°. Isosceles: equal base angles. Exterior angle = sum of two opposite interior angles.',
    cues: [
      { id: 'cue-1', blockId: 'eq-sum', prompt: 'What do the interior angles of any triangle add up to? Write the formula.' },
      { id: 'cue-2', blockId: 'table-types', prompt: 'Name the four types of triangles and state the key angle property of each.' },
      { id: 'cue-3', blockId: 'eq-exterior', prompt: 'What is the exterior angle theorem? Write it as a formula.' },
      { id: 'cue-4', blockId: 'callout-worked', prompt: 'An isosceles triangle has an apex angle of 70°. Find the base angles.' },
      { id: 'cue-5', blockId: 'callout-worked', prompt: 'An exterior angle of a triangle is 125° and one non-adjacent interior angle is 70°. Find the other interior angle.' }
    ]
  },
  evidence: []
};
