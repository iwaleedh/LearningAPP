export const note_olevel_maths_extended_4_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Geometry/angles-in-parallel-lines.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify and use corresponding, alternate and co-interior (allied) angles formed when a transversal crosses parallel lines.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Angles in Parallel Lines', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When a straight line (called a <strong>transversal</strong>) crosses two <strong>parallel lines</strong>, it creates special pairs of equal or supplementary angles. Parallel lines are marked with arrows (&rarr; &rarr;) on diagrams.' }
    },
    {
      id: 'h-corresponding',
      type: 'heading',
      data: { text: 'Corresponding Angles', level: 2 }
    },
    {
      id: 'p-corresponding',
      type: 'paragraph',
      data: { text: '<strong>Corresponding angles</strong> are in the same position at each intersection — they form an <strong>F-shape</strong> (which may be reversed or upside down). Corresponding angles are <strong>equal</strong>.' }
    },
    {
      id: 'svg-corresponding',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 250" xmlns="http://www.w3.org/2000/svg"><style>text{font-family:system-ui;font-size:13px;fill:#334155}line{stroke:#6366f1;stroke-width:2.5}.hl{stroke:#10b981;stroke-width:3}</style><line x1="30" y1="70" x2="320" y2="70"/><line x1="30" y1="170" x2="320" y2="170"/><line x1="100" y1="20" x2="220" y2="230"/><text x="330" y="68">&rarr;</text><text x="330" y="168">&rarr;</text><path d="M 148 70 A 15 15 0 0 1 140 56" fill="none" class="hl"/><text x="155" y="58" fill="#10b981" font-weight="600"><em>a</em></text><path d="M 188 170 A 15 15 0 0 1 180 156" fill="none" class="hl"/><text x="195" y="158" fill="#10b981" font-weight="600"><em>a</em></text><text x="175" y="242" text-anchor="middle" font-weight="600" fill="#6366f1">Corresponding angles (F-shape): equal</text></svg>',
        caption: 'Corresponding angles are equal — look for the F-shape'
      }
    },
    {
      id: 'h-alternate',
      type: 'heading',
      data: { text: 'Alternate Angles', level: 2 }
    },
    {
      id: 'p-alternate',
      type: 'paragraph',
      data: { text: '<strong>Alternate angles</strong> are on opposite sides of the transversal, between the parallel lines — they form a <strong>Z-shape</strong> (or reversed Z). Alternate angles are <strong>equal</strong>.' }
    },
    {
      id: 'svg-alternate',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 250" xmlns="http://www.w3.org/2000/svg"><style>text{font-family:system-ui;font-size:13px;fill:#334155}line{stroke:#6366f1;stroke-width:2.5}.hl{stroke:#f59e0b;stroke-width:3}</style><line x1="30" y1="70" x2="320" y2="70"/><line x1="30" y1="170" x2="320" y2="170"/><line x1="100" y1="20" x2="220" y2="230"/><text x="330" y="68">&rarr;</text><text x="330" y="168">&rarr;</text><path d="M 148 70 A 15 15 0 0 0 140 84" fill="none" class="hl"/><text x="125" y="95" fill="#f59e0b" font-weight="600"><em>b</em></text><path d="M 188 170 A 15 15 0 0 1 180 156" fill="none" class="hl"/><text x="195" y="158" fill="#f59e0b" font-weight="600"><em>b</em></text><text x="175" y="242" text-anchor="middle" font-weight="600" fill="#6366f1">Alternate angles (Z-shape): equal</text></svg>',
        caption: 'Alternate angles are equal — look for the Z-shape'
      }
    },
    {
      id: 'h-cointerior',
      type: 'heading',
      data: { text: 'Co-interior (Allied) Angles', level: 2 }
    },
    {
      id: 'p-cointerior',
      type: 'paragraph',
      data: { text: '<strong>Co-interior angles</strong> (also called <strong>allied angles</strong> or <strong>same-side interior angles</strong>) are on the same side of the transversal, between the parallel lines — they form a <strong>C-shape</strong> (or U-shape). Co-interior angles are <strong>supplementary</strong> (add up to 180°).' }
    },
    {
      id: 'svg-cointerior',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 250" xmlns="http://www.w3.org/2000/svg"><style>text{font-family:system-ui;font-size:13px;fill:#334155}line{stroke:#6366f1;stroke-width:2.5}.hl{stroke:#ef4444;stroke-width:3}</style><line x1="30" y1="70" x2="320" y2="70"/><line x1="30" y1="170" x2="320" y2="170"/><line x1="100" y1="20" x2="220" y2="230"/><text x="330" y="68">&rarr;</text><text x="330" y="168">&rarr;</text><path d="M 148 70 A 15 15 0 0 0 140 84" fill="none" class="hl"/><text x="125" y="95" fill="#ef4444" font-weight="600"><em>c</em></text><path d="M 188 170 A 15 15 0 0 0 180 184" fill="none" class="hl"/><text x="165" y="195" fill="#ef4444" font-weight="600"><em>d</em></text><text x="175" y="242" text-anchor="middle" font-weight="600" fill="#6366f1">Co-interior angles (C-shape): <em>c</em> + <em>d</em> = 180°</text></svg>',
        caption: 'Co-interior angles sum to 180° — look for the C-shape'
      }
    },
    {
      id: 'table-summary',
      type: 'comparisonTable',
      data: {
        caption: 'Angle pairs in parallel lines',
        headers: ['Angle Pair', 'Shape', 'Relationship', 'Reason (for working)'],
        rows: [
          ['Corresponding', 'F-shape', 'Equal', '"corresponding angles"'],
          ['Alternate', 'Z-shape', 'Equal', '"alternate angles"'],
          ['Co-interior', 'C-shape', 'Sum to 180°', '"co-interior angles"']
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A transversal crosses two parallel lines. One angle is 65°. Find the three related angles.<br><br>Corresponding angle = <strong>65°</strong> (corresponding angles)<br>Alternate angle = <strong>65°</strong> (alternate angles)<br>Co-interior angle = 180° − 65° = <strong>115°</strong> (co-interior angles sum to 180°)'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — With Algebra',
        text: 'Two co-interior angles are (3<em>x</em> + 10)° and (2<em>x</em> + 30)°. Find <em>x</em>.<br><br>Co-interior angles sum to 180°:<br>3<em>x</em> + 10 + 2<em>x</em> + 30 = 180<br>5<em>x</em> + 40 = 180<br>5<em>x</em> = 140<br><em>x</em> = <strong>28</strong>'
      }
    },
    {
      id: 'callout-tip-shapes',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Finding the Shape',
        text: 'Trace the letter shape with your finger: <strong>F</strong> for corresponding, <strong>Z</strong> for alternate, <strong>C</strong> for co-interior. The letters can be backwards, upside down, or rotated — it still works!'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'These angle rules ONLY work when the lines are <strong>parallel</strong>. If the question does not state or mark the lines as parallel, you cannot assume these properties apply.'
      }
    },
    {
      id: 'checklist-exam',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can identify corresponding angles (F-shape)', checked: false },
          { text: 'I can identify alternate angles (Z-shape)', checked: false },
          { text: 'I can identify co-interior angles (C-shape) and know they sum to 180°', checked: false },
          { text: 'I always state angle reasons in my working', checked: false }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'When a transversal crosses parallel lines: corresponding angles (F-shape) are equal, alternate angles (Z-shape) are equal, and co-interior angles (C-shape) add up to 180°. Always state the geometric reason in your working. These rules only apply to parallel lines.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Corresponding (F) and alternate (Z) angles are equal; co-interior (C) angles sum to 180°.',
    cues: [
      { id: 'cue-1', blockId: 'p-corresponding', prompt: 'What are corresponding angles and what letter shape do they form?', answer: 'Corresponding angles are in the same position at each intersection, forming an F-shape. They are equal.' },
      { id: 'cue-2', blockId: 'p-alternate', prompt: 'What are alternate angles?', answer: 'Alternate angles are on opposite sides of the transversal, between the parallel lines (Z-shape). They are equal.' },
      { id: 'cue-3', blockId: 'p-cointerior', prompt: 'What are co-interior angles and what do they sum to?', answer: 'Co-interior (allied) angles are on the same side of the transversal, between parallel lines (C-shape). They sum to 180°.' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'When can you NOT use parallel line angle rules?', answer: 'These rules only apply when the lines are confirmed to be parallel. You cannot assume lines are parallel from a diagram alone.' }
    ]
  },
  evidence: []
};
