export const note_olevel_maths_core_4_1_0 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify and classify types of lines and angles; use correct angle notation; measure angles accurately with a protractor.' }
    },
    {
      id: 'h-lines',
      type: 'heading',
      data: { text: 'Types of Lines', level: 2 }
    },
    {
      id: 'p-lines',
      type: 'paragraph',
      data: { text: 'A <strong>straight line</strong> extends infinitely in both directions with no curvature. A <strong>line segment</strong> has two definite endpoints. A <strong>curved line</strong> bends continuously. Two lines are <strong>perpendicular (⊥)</strong> when they meet at exactly 90°. Two lines are <strong>parallel (∥)</strong> when they never meet — they remain the same distance apart everywhere. Parallel lines are marked with matching arrow symbols (→ →).' }
    },
    {
      id: 'h-angles',
      type: 'heading',
      data: { text: 'Types of Angles', level: 2 }
    },
    {
      id: 'list-angles',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Acute angle:</strong> greater than 0° and less than 90°' },
          { text: '<strong>Right angle:</strong> exactly 90° — shown by a small square at the vertex' },
          { text: '<strong>Obtuse angle:</strong> greater than 90° and less than 180°' },
          { text: '<strong>Straight angle:</strong> exactly 180° — forms a straight line' },
          { text: '<strong>Reflex angle:</strong> greater than 180° and less than 360°' },
          { text: '<strong>Full turn:</strong> exactly 360° — a complete rotation back to the start' }
        ]
      }
    },
    {
      id: 'svg-angle-types',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 190" width="560" height="190">
  <style>
    text { font-family: sans-serif; font-size: 11px; fill: #374151; }
    .lbl { font-weight: 700; fill: #3b82f6; font-size: 12px; }
    .cap { fill: #6b7280; font-size: 11px; }
  </style>
  <!-- Acute ~50° -->
  <g transform="translate(40,140)">
    <line x1="0" y1="0" x2="65" y2="0" stroke="#374151" stroke-width="2"/>
    <line x1="0" y1="0" x2="42" y2="-52" stroke="#374151" stroke-width="2"/>
    <path d="M23,0 A23,23 0 0,0 14.8,-18.5" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="26" y="-6" class="lbl">50°</text>
    <text x="10" y="18" class="cap">Acute</text>
  </g>
  <!-- Right 90° -->
  <g transform="translate(160,140)">
    <line x1="0" y1="0" x2="65" y2="0" stroke="#374151" stroke-width="2"/>
    <line x1="0" y1="0" x2="0" y2="-65" stroke="#374151" stroke-width="2"/>
    <rect x="2" y="-16" width="12" height="12" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="18" y="-22" class="lbl">90°</text>
    <text x="12" y="18" class="cap">Right</text>
  </g>
  <!-- Obtuse 130° -->
  <g transform="translate(285,140)">
    <line x1="0" y1="0" x2="65" y2="0" stroke="#374151" stroke-width="2"/>
    <line x1="0" y1="0" x2="-50" y2="-38" stroke="#374151" stroke-width="2"/>
    <path d="M30,0 A30,30 0 0,0 -23,-17.4" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="8" y="-18" class="lbl">130°</text>
    <text x="8" y="18" class="cap">Obtuse</text>
  </g>
  <!-- Reflex 260° -->
  <g transform="translate(430,90)">
    <line x1="0" y1="0" x2="65" y2="0" stroke="#374151" stroke-width="2"/>
    <line x1="0" y1="0" x2="0" y2="-65" stroke="#374151" stroke-width="2"/>
    <path d="M32,0 A32,32 0 1,1 0,-32" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="34" y="18" class="lbl">260°</text>
    <text x="12" y="60" class="cap">Reflex</text>
  </g>
</svg>`,
        caption: 'Types of angles: acute (50°), right (90°), obtuse (130°), reflex (260°)'
      }
    },
    {
      id: 'h-notation',
      type: 'heading',
      data: { text: 'Angle Notation', level: 2 }
    },
    {
      id: 'p-notation',
      type: 'paragraph',
      data: { text: 'The angle at vertex B formed by rays BA and BC is written <strong>∠ABC</strong> or <strong>∠CBA</strong>. The <em>middle letter</em> is always the vertex. When there is no ambiguity you can write <strong>∠B</strong>. In diagrams, unknown angles are labelled with lower-case letters such as <em>x</em>, <em>a</em>, or <em>b</em>.' }
    },
    {
      id: 'h-protractor',
      type: 'heading',
      data: { text: 'Measuring Angles with a Protractor', level: 2 }
    },
    {
      id: 'list-protractor',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Place the <strong>centre mark</strong> of the protractor exactly on the vertex of the angle.' },
          { text: 'Align the <strong>baseline (0° line)</strong> with one arm of the angle.' },
          { text: 'Read the scale at the point where the <em>second arm</em> crosses — use the scale that begins at 0° on the side you aligned.' },
          { text: '<strong>Sense-check:</strong> if the angle looks acute, the reading must be less than 90°; if it looks obtuse, it must be between 90° and 180°.' }
        ]
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Classify and Estimate',
        text: '<strong>Q:</strong> Without measuring, classify (a) 47° &ensp; (b) 90° &ensp; (c) 163° &ensp; (d) 298°<br><br>(a) 47° — between 0° and 90° → <strong>Acute</strong><br>(b) 90° — exactly 90° → <strong>Right angle</strong><br>(c) 163° — between 90° and 180° → <strong>Obtuse</strong><br>(d) 298° — between 180° and 360° → <strong>Reflex</strong>'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Classification Summary',
        text: '0° &lt; <strong>acute</strong> &lt; 90° &nbsp;|&nbsp; <strong>right</strong> = 90° &nbsp;|&nbsp; 90° &lt; <strong>obtuse</strong> &lt; 180° &nbsp;|&nbsp; <strong>straight</strong> = 180° &nbsp;|&nbsp; 180° &lt; <strong>reflex</strong> &lt; 360° &nbsp;|&nbsp; <strong>full turn</strong> = 360°'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Two Scales on Protractors',
        text: 'Protractors have an inner and an outer scale. A very common mistake is reading the wrong one. Fix: always start from 0° on the arm you aligned. If you get 50° but the angle is clearly obtuse, you have read the wrong scale — the answer should be 180° − 50° = 130°.'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Lines are straight, curved, perpendicular (⊥, meet at 90°) or parallel (∥, never meet). Angles: acute 0°–90°; right = 90°; obtuse 90°–180°; straight = 180°; reflex 180°–360°; full turn = 360°. Notation: ∠ABC means the angle at B (middle letter). Always use the correct scale on a protractor.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Six angle types: acute, right, obtuse, straight, reflex, full turn. Perpendicular (⊥) meets at 90°. Parallel (∥) never meets. Middle letter in ∠ABC is the vertex.',
    cues: [
      { id: 'cue-1', blockId: 'list-angles', prompt: 'Name all six types of angles and give the size range of each.' },
      { id: 'cue-2', blockId: 'p-lines', prompt: 'What is the difference between perpendicular lines and parallel lines? What symbols are used?' },
      { id: 'cue-3', blockId: 'p-notation', prompt: 'In the notation ∠ABC, which letter is the vertex? Give an example.' },
      { id: 'cue-4', blockId: 'list-protractor', prompt: 'Describe the correct steps for measuring an angle with a protractor. What is the common error?' }
    ]
  },
  evidence: []
};
