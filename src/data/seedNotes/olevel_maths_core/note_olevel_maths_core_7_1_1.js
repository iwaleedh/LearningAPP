export const note_olevel_maths_core_7_1_1 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand reflection across a mirror line; perform and describe reflections by stating the equation of the mirror line.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is a Reflection?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: 'A <strong>reflection</strong> flips a shape across a <strong>mirror line</strong>. Every point on the image is the same <em>perpendicular distance</em> from the mirror line as the corresponding point on the object, but on the opposite side. The image is <strong>congruent</strong> to the object.' }
    },
    {
      id: 'h-mirrorlines',
      type: 'heading',
      data: { text: 'Common Mirror Lines and Coordinate Rules', level: 2 }
    },
    {
      id: 'tbl-mirrors',
      type: 'comparisonTable',
      data: {
        caption: 'Standard mirror lines and their effect on coordinates (x, y)',
        headers: ['Mirror Line', 'Equation', '(x, y) maps to'],
        rows: [
          ['x-axis', 'y = 0', '(x, −y)'],
          ['y-axis', 'x = 0', '(−x, y)'],
          ['Line y = x', 'y = x', '(y, x)'],
          ['Line y = −x', 'y = −x', '(−y, −x)'],
          ['Vertical line', 'x = k', '(2k − x, y)'],
          ['Horizontal line', 'y = k', '(x, 2k − y)']
        ]
      }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Always State the Mirror Line Equation',
        text: 'When describing a reflection you <strong>must</strong> give the equation of the mirror line (e.g. "reflection in the line y = 0" or "reflection in x = −1"). Simply saying "reflected" without the line equation earns no marks.'
      }
    },
    {
      id: 'h-performing',
      type: 'heading',
      data: { text: 'Performing a Reflection', level: 2 }
    },
    {
      id: 'p-performing',
      type: 'paragraph',
      data: { text: 'Apply the coordinate rule for the mirror line to each vertex. For a line not listed in the table, draw a perpendicular from each vertex to the line, measure the distance, and mark the image point the same distance on the other side.' }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Reflect Across y = 1',
        text: 'Triangle PQR: P(1, 3), Q(4, 3), R(4, 5). Reflect in the line y = 1.\n\nUse rule (x, 2k − y) with k = 1:\n• P(1, 3) → P\'(1, 2×1 − 3) = P\'(1, −1)\n• Q(4, 3) → Q\'(4, 2×1 − 3) = Q\'(4, −1)\n• R(4, 5) → R\'(4, 2×1 − 5) = R\'(4, −3)\n\nCheck: P is 2 units above y = 1, so P\' should be 2 units below y = 1 → y = −1 ✓'
      }
    },
    {
      id: 'h-properties',
      type: 'heading',
      data: { text: 'Properties of Reflection', level: 2 }
    },
    {
      id: 'list-properties',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'The line joining any point to its image is <strong>perpendicular</strong> to the mirror line.' },
          { text: 'Object and image are the same distance from the mirror line (equidistant).' },
          { text: 'The mirror line is the <strong>perpendicular bisector</strong> of the segment AA\'.' },
          { text: 'Image is congruent to object (same size, same shape, but laterally flipped).' }
        ]
      }
    },
    {
      id: 'h-describing',
      type: 'heading',
      data: { text: 'Describing a Reflection', level: 2 }
    },
    {
      id: 'list-describing',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Find the mirror line: it must be equidistant from each corresponding pair of vertices.' },
          { text: 'Check that AA\' is perpendicular to your candidate line.' },
          { text: 'State: "Reflection in the line y = …" (or x = …, y = x, etc.).' }
        ]
      }
    },
    {
      id: 'svg-reflection',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" width="280" height="220">
  <defs>
    <pattern id="rgrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="280" height="220" fill="#f8fafc"/>
  <rect width="280" height="220" fill="url(#rgrid)"/>
  <line x1="20" y1="110" x2="260" y2="110" stroke="#94a3b8" stroke-width="1"/>
  <line x1="60" y1="10" x2="60" y2="210" stroke="#94a3b8" stroke-width="1"/>
  <text x="255" y="105" font-size="10" fill="#64748b">x</text>
  <text x="64" y="14" font-size="10" fill="#64748b">y</text>
  <text x="42" y="124" font-size="9" fill="#64748b">O</text>
  <line x1="20" y1="110" x2="260" y2="110" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="218" y="105" font-size="9" fill="#ef4444" font-weight="bold">y = 0</text>
  <polygon points="80,50 140,50 100,10" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="64" y="43" font-size="9" fill="#1d4ed8">A(1,3)</text>
  <text x="132" y="43" font-size="9" fill="#1d4ed8">B(4,3)</text>
  <text x="88" y="8" font-size="9" fill="#1d4ed8">C(2,5)</text>
  <polygon points="80,170 140,170 100,210" fill="#fed7aa" stroke="#f97316" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="58" y="185" font-size="9" fill="#c2410c">A'(1,−3)</text>
  <text x="130" y="185" font-size="9" fill="#c2410c">B'(4,−3)</text>
  <text x="82" y="216" font-size="9" fill="#c2410c">C'(2,−5)</text>
  <line x1="80" y1="50" x2="80" y2="170" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2,2"/>
  <line x1="100" y1="10" x2="100" y2="210" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2,2"/>
</svg>`,
        caption: 'Triangle ABC (blue) reflected across the x-axis (y = 0) to give A\'B\'C\' (orange). Dashed lines show equal distances.'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Use Tracing Paper in the Exam',
        text: 'You are allowed to use tracing paper in the exam. For reflections across diagonal lines (y = x, y = −x), trace the object and the mirror line, then fold the tracing paper along the mirror line to locate the image accurately.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'A reflection flips a shape across a mirror line so each image point is the same perpendicular distance from the line as the object point, but on the other side. To describe: state the equation of the mirror line. Image is congruent. Common rules: y=0 → (x,−y); x=0 → (−x,y); y=x → (y,x); y=k → (x, 2k−y).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Reflection: flip across a mirror line — state the line equation. Image is congruent.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-mirrors',
        prompt: 'What is the coordinate rule for reflecting (x, y) across the line y = x?',
        answer: '(x, y) → (y, x) — swap the two coordinates.'
      },
      {
        id: 'cue-2',
        blockId: 'callout-worked1',
        prompt: 'Point Q(4, 3) is reflected in the line y = 1. What are the image coordinates?',
        answer: 'Q\'(4, −1). Use y → 2(1) − 3 = −1.'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-mirrors',
        prompt: 'What is the rule for reflecting across the y-axis (x = 0)?',
        answer: '(x, y) → (−x, y) — negate the x-coordinate, y stays the same.'
      },
      {
        id: 'cue-4',
        blockId: 'callout-key1',
        prompt: 'What must you always state when describing a reflection?',
        answer: 'The equation of the mirror line (e.g. "reflection in the line y = 0").'
      }
    ]
  },
  evidence: []
};
