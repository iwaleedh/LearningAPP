export const note_olevel_maths_core_7_1_2 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand rotation about a centre; perform and describe rotations by stating the centre, angle, and direction.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is a Rotation?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: 'A <strong>rotation</strong> turns a shape about a fixed point called the <strong>centre of rotation</strong>. Every point moves through the same angle. The image is <strong>congruent</strong> to the object — same size and shape, but in a different orientation.' }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Three Things to State in a Rotation',
        text: 'To fully describe a rotation you must give all three:\n1. <strong>Centre of rotation</strong> — coordinates, e.g. (0, 0)\n2. <strong>Angle of rotation</strong> — in degrees, e.g. 90°\n3. <strong>Direction</strong> — clockwise (CW) or anticlockwise (ACW)'
      }
    },
    {
      id: 'h-rules',
      type: 'heading',
      data: { text: 'Rotation Rules About the Origin (0, 0)', level: 2 }
    },
    {
      id: 'list-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>90° anticlockwise (ACW):</strong> (x, y) → (−y, x)' },
          { text: '<strong>90° clockwise (CW):</strong> (x, y) → (y, −x)' },
          { text: '<strong>180° (either direction):</strong> (x, y) → (−x, −y)' },
          { text: '<strong>270° ACW</strong> = 90° CW: (x, y) → (y, −x)' }
        ]
      }
    },
    {
      id: 'p-other-centre',
      type: 'paragraph',
      data: { text: 'For rotations about any other centre <em>(a, b)</em>: translate the whole shape so the centre moves to the origin (subtract <em>a</em> from x and <em>b</em> from y), apply the rotation rule, then translate back (add <em>a</em> and <em>b</em>).' }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Rotate 90° Anticlockwise About (0, 0)',
        text: 'Triangle with vertices A(2, 1), B(4, 1), C(4, 3). Rotate 90° anticlockwise about the origin.\n\nRule: (x, y) → (−y, x)\n• A(2, 1) → A\'(−1, 2)\n• B(4, 1) → B\'(−1, 4)\n• C(4, 3) → C\'(−3, 4)\n\nCheck: B(4,1) was to the right of the origin. After 90° ACW it should be above the origin. B\'=(−1, 4) is above and to the left ✓.'
      }
    },
    {
      id: 'svg-rotation',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 240" width="280" height="240">
  <defs>
    <pattern id="rotgrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="280" height="240" fill="#0f172a"/>
  <rect width="280" height="240" fill="url(#rotgrid)"/>
  <line x1="10" y1="140" x2="270" y2="140" stroke="#94a3b8" stroke-width="1"/>
  <line x1="140" y1="10" x2="140" y2="230" stroke="#94a3b8" stroke-width="1"/>
  <text x="263" y="136" font-size="10" fill="#64748b">x</text>
  <text x="144" y="14" font-size="10" fill="#64748b">y</text>
  <text x="124" y="155" font-size="9" fill="#64748b">O</text>
  <polygon points="180,120 220,120 220,80" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="176" y="135" font-size="9" fill="#1d4ed8">A(2,1)</text>
  <text x="214" y="135" font-size="9" fill="#1d4ed8">B(4,1)</text>
  <text x="222" y="76" font-size="9" fill="#1d4ed8">C(4,3)</text>
  <polygon points="120,100 120,60 80,60" fill="#0a3020" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="99" y="116" font-size="9" fill="#166534">A'(−1,2)</text>
  <text x="100" y="55" font-size="9" fill="#166534">B'(−1,4)</text>
  <text x="58" y="55" font-size="9" fill="#166534">C'(−3,4)</text>
  <path d="M 180 120 A 52 52 0 0 0 122 100" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
  <polygon points="122,100 116,109 129,110" fill="#64748b"/>
  <text x="148" y="118" font-size="9" fill="#475569">90° ACW</text>
</svg>`,
        caption: 'Triangle ABC (blue) rotated 90° anticlockwise about the origin → A\'B\'C\' (green)'
      }
    },
    {
      id: 'h-finding-centre',
      type: 'heading',
      data: { text: 'Finding the Centre of Rotation', level: 2 }
    },
    {
      id: 'list-finding',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Draw the line segment joining vertex A to its image A\'.' },
          { text: 'Construct the perpendicular bisector of AA\'.' },
          { text: 'Repeat for another pair (B and B\').' },
          { text: 'The centre of rotation is where the perpendicular bisectors intersect.' }
        ]
      }
    },
    {
      id: 'h-properties',
      type: 'heading',
      data: { text: 'Properties of Rotation', level: 2 }
    },
    {
      id: 'list-properties',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'The centre of rotation is equidistant from each vertex and its image.' },
          { text: 'Angle AOA\' = angle of rotation for every vertex A.' },
          { text: 'A 90° CW rotation is the same as a 270° ACW rotation.' },
          { text: 'Image is congruent to the object.' }
        ]
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Use Tracing Paper to Find the Centre',
        text: 'Trace the object shape onto tracing paper. Hold a pencil at a candidate centre point and rotate the paper until the traced shape lines up with the image. The pinned point is the centre of rotation. Try the origin first — it is the most common centre in exam questions.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'A rotation turns a shape by a given angle and direction about a fixed centre. Always state: centre, angle, and direction (CW or ACW). Rules about the origin: 90° ACW → (−y, x); 90° CW → (y, −x); 180° → (−x, −y). The image is congruent to the object.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Rotation: state centre, angle, direction. 90° ACW→(−y,x); 90° CW→(y,−x); 180°→(−x,−y). Image is congruent.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-key1',
        prompt: 'What three pieces of information must you state to fully describe a rotation?',
        answer: 'Centre of rotation (coordinates), angle of rotation (degrees), and direction (clockwise or anticlockwise).'
      },
      {
        id: 'cue-2',
        blockId: 'list-rules',
        prompt: 'What is the coordinate rule for a 90° clockwise rotation about the origin?',
        answer: '(x, y) → (y, −x).'
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked1',
        prompt: 'Vertex C(4, 3) is rotated 90° anticlockwise about (0, 0). What are the image coordinates?',
        answer: 'C\'(−3, 4). Rule: (x, y) → (−y, x), so (4, 3) → (−3, 4).'
      },
      {
        id: 'cue-4',
        blockId: 'list-finding',
        prompt: 'How do you find the centre of rotation when given an object and its image?',
        answer: 'Construct the perpendicular bisectors of the segments joining corresponding vertices (AA\', BB\'); the centre is where they intersect.'
      }
    ]
  },
  evidence: []
};
