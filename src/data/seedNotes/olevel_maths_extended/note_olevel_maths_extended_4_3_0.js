export const note_olevel_maths_extended_4_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Geometry/bearings.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Measure and calculate three-figure bearings, and solve bearing problems using angle facts and trigonometry.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Bearings', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>bearing</strong> is a way of describing direction. Bearings are used in navigation, surveying, and many real-world geometry problems at IGCSE.' }
    },
    {
      id: 'h-rules',
      type: 'heading',
      data: { text: 'Three Rules of Bearings', level: 2 }
    },
    {
      id: 'callout-key-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Three Rules',
        text: '1. Bearings are measured from <strong>North</strong>.<br>2. Bearings are measured <strong>clockwise</strong>.<br>3. Bearings are always written as <strong>three figures</strong> (e.g. 045° not 45°).'
      }
    },
    {
      id: 'table-compass',
      type: 'comparisonTable',
      data: {
        caption: 'Cardinal and intercardinal bearings',
        headers: ['Direction', 'Bearing'],
        rows: [
          ['North (N)', '000°'],
          ['North-East (NE)', '045°'],
          ['East (E)', '090°'],
          ['South-East (SE)', '135°'],
          ['South (S)', '180°'],
          ['South-West (SW)', '225°'],
          ['West (W)', '270°'],
          ['North-West (NW)', '315°']
        ]
      }
    },
    {
      id: 'svg-compass',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><style>text{font-family:system-ui;font-size:13px;fill:#334155;font-weight:600}line{stroke:#6366f1;stroke-width:2}.tick{stroke:#94a3b8;stroke-width:1}</style><circle cx="150" cy="150" r="120" fill="none" stroke="#6366f1" stroke-width="2"/><line x1="150" y1="30" x2="150" y2="270"/><line x1="30" y1="150" x2="270" y2="150"/><text x="150" y="22" text-anchor="middle" fill="#6366f1">N (000°)</text><text x="278" y="155" fill="#6366f1">E (090°)</text><text x="150" y="290" text-anchor="middle" fill="#6366f1">S (180°)</text><text x="5" y="155" fill="#6366f1">W (270°)</text><circle cx="150" cy="150" r="3" fill="#6366f1"/><path d="M 150 150 L 230 80" stroke="#ef4444" stroke-width="2.5" fill="none" marker-end="url(#arr)"/><defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker></defs><path d="M 150 130 A 20 20 0 0 1 165 138" fill="none" stroke="#ef4444" stroke-width="2"/><text x="172" y="125" fill="#ef4444">045°</text></svg>',
        caption: 'Compass with bearing 045° shown'
      }
    },
    {
      id: 'h-back',
      type: 'heading',
      data: { text: 'Back Bearings', level: 2 }
    },
    {
      id: 'p-back',
      type: 'paragraph',
      data: { text: 'The <strong>back bearing</strong> (or reverse bearing) is the bearing from B back to A when you know the bearing from A to B.' }
    },
    {
      id: 'callout-key-back',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Back Bearing Formula',
        text: 'If the bearing from A to B is <em>θ</em>:<br><br>• If <em>θ</em> < 180°: back bearing = <em>θ</em> + 180°<br>• If <em>θ</em> ≥ 180°: back bearing = <em>θ</em> − 180°<br><br>In short: <strong>add or subtract 180°</strong> to keep the answer between 0° and 360°.'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Back Bearing',
        text: 'The bearing of B from A is 065°. Find the bearing of A from B.<br><br>065° < 180°, so add 180°:<br>Bearing of A from B = 065° + 180° = <strong>245°</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Back Bearing (≥ 180°)',
        text: 'The bearing of Q from P is 210°. Find the bearing of P from Q.<br><br>210° ≥ 180°, so subtract 180°:<br>Bearing of P from Q = 210° − 180° = <strong>030°</strong>'
      }
    },
    {
      id: 'h-problems',
      type: 'heading',
      data: { text: 'Solving Bearing Problems', level: 2 }
    },
    {
      id: 'list-strategy',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Draw a clear diagram with a <strong>North line</strong> at every relevant point' },
          { text: 'Mark the bearing as a <strong>clockwise angle from North</strong>' },
          { text: 'Use <strong>alternate angles</strong> (parallel North lines create Z-angles)' },
          { text: 'Use <strong>co-interior angles</strong> (sum to 180° between parallel lines)' },
          { text: 'Apply <strong>trigonometry</strong> or the <strong>sine/cosine rule</strong> for distances and angles' }
        ]
      }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Three-Point Problem',
        text: 'A ship sails from A on a bearing of 060° for 10 km to B, then from B on a bearing of 150° for 8 km to C. Find the bearing of C from A.<br><br>At B, the angle ABC = 150° − 60° = 90° (using North lines and alternate angles with adjustments).<br><br>Actually: North at B is parallel to North at A. Angle between BA extended and North at B: the bearing from A to B is 060°, so the back bearing (B to A) is 240°. Angle NBA (measured clockwise from North at B through East to BA direction) = 240°.<br>Bearing from B to C = 150°.<br>Angle ABC = 240° − 150° = 90°.<br><br>In right triangle ABC: tan(angle BAC) = 8/10 = 0.8, so angle BAC = 38.7°.<br>Bearing of C from A = 060° + 38.7° ≈ <strong>099°</strong> (to 3 figures).'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always draw a North line at <strong>every point</strong> in a bearing diagram. Use the fact that all North lines are parallel to find angles using alternate (Z) and co-interior (C) angle rules.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Forgetting the <strong>three-figure</strong> rule: a bearing of 35° must be written as <strong>035°</strong>. Also, 360° should be written as <strong>000°</strong> (due North).'
      }
    },
    {
      id: 'checklist-exam',
      type: 'checklist',
      data: {
        items: [
          { text: 'I know the 3 rules: from North, clockwise, three figures', checked: false },
          { text: 'I can calculate back bearings', checked: false },
          { text: 'I draw North lines at every point', checked: false },
          { text: 'I can use angle rules with parallel North lines', checked: false }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Bearings are measured from North, clockwise, as three figures. To find a back bearing, add or subtract 180°. In bearing problems, draw a North line at every point and use alternate/co-interior angle rules (since North lines are parallel) along with trigonometry to find angles and distances.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Bearings are measured from North, clockwise, as 3-figure angles.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-rules', prompt: 'State the three rules of bearings.', answer: '1) Measured from North. 2) Measured clockwise. 3) Written as three figures (e.g. 045°).' },
      { id: 'cue-2', blockId: 'callout-key-back', prompt: 'How do you find a back bearing?', answer: 'Add 180° if the bearing is less than 180°, or subtract 180° if the bearing is 180° or more.' },
      { id: 'cue-3', blockId: 'table-compass', prompt: 'What is the bearing of South-West?', answer: '225°.' },
      { id: 'cue-4', blockId: 'list-strategy', prompt: 'Why should you draw a North line at every point in a bearing problem?', answer: 'North lines are parallel, so you can use alternate and co-interior angle rules to find unknown angles.' }
    ]
  },
  evidence: []
};
