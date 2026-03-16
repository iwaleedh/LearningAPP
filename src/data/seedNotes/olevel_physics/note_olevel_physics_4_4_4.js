export const note_olevel_physics_4_4_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-4-5-ac-generator.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the structure and operation of an AC generator and explain how it produces AC and how the EMF varies with rotation.' },
    },
    {
      id: 'h-structure',
      type: 'heading',
      data: { text: 'AC Generator Structure', level: 2 },
    },
    {
      id: 'list-parts',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Coil</strong> — rotates in the magnetic field.' },
          { text: '<strong>Permanent magnets (N and S poles)</strong> — provide the field.' },
          { text: '<strong>Slip rings</strong> — two complete rings attached to the coil ends; rotate with the coil.' },
          { text: '<strong>Carbon brushes</strong> — fixed contacts pressing on the slip rings; carry current to the external circuit.' },
        ],
      },
    },
    {
      id: 'h-how',
      type: 'heading',
      data: { text: 'How the AC Generator Works', level: 2 },
    },
    {
      id: 'para-how',
      type: 'paragraph',
      data: {
        text: 'As the coil rotates, each side cuts through magnetic field lines, inducing an EMF (electromagnetic induction). The EMF continuously changes direction as each side moves alternately up and down through the field — producing <strong>alternating current (AC)</strong>.',
      },
    },
    {
      id: 'h-emf-variation',
      type: 'heading',
      data: { text: 'How Induced EMF Varies with Rotation', level: 2 },
    },
    {
      id: 'list-emf',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'EMF is <strong>maximum</strong> when the coil is parallel to the field (coil sides cut field lines at right angles = maximum rate of flux change).' },
          { text: 'EMF is <strong>zero</strong> when the coil is perpendicular to the field (coil sides move parallel to field lines = zero rate of flux change).' },
          { text: 'The output is a <strong>sinusoidal (sine wave)</strong> AC voltage.' },
        ],
      },
    },
    {
      id: 'h-slip-vs-split',
      type: 'heading',
      data: { text: 'Slip Rings vs Split-Ring Commutator', level: 2 },
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Generator vs Motor: Key Difference',
        headers: ['Device', 'Contact type', 'Output', 'Function'],
        rows: [
          ['AC Generator', 'Slip rings (complete rings)', 'AC (alternating)', 'Converts kinetic energy → electrical energy'],
          ['DC Motor', 'Split-ring commutator (two halves)', 'Uses DC', 'Converts electrical energy → kinetic energy'],
        ],
      },
    },
    {
      id: 'h-increase',
      type: 'heading',
      data: { text: 'Increasing Generator Output', level: 2 },
    },
    {
      id: 'list-increase',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Rotate the coil <strong>faster</strong> (increases both amplitude and frequency).' },
          { text: 'Use a <strong>stronger magnet</strong>.' },
          { text: 'Increase <strong>number of turns</strong> in the coil.' },
        ],
      },
    },
    {
      id: 'svg-generator',
      type: 'svg',
      data: {
        caption: 'AC generator: rotating coil with slip rings and brushes, outputting a sine wave',
        svg: `<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <!-- Left side: generator diagram -->
  <!-- N pole -->
  <rect x="10" y="60" width="50" height="100" rx="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
  <text x="22" y="115" fill="#16a34a" font-weight="bold" font-size="16">N</text>
  <!-- S pole -->
  <rect x="170" y="60" width="50" height="100" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="183" y="115" fill="#ef4444" font-weight="bold" font-size="16">S</text>
  <!-- Coil -->
  <rect x="75" y="70" width="80" height="80" rx="5" fill="#e0e7ff" stroke="#6366f1" stroke-width="2.5"/>
  <text x="96" y="113" fill="#6366f1">Coil</text>
  <!-- Axle -->
  <line x1="115" y1="50" x2="115" y2="220" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4,3"/>
  <!-- Slip rings -->
  <ellipse cx="115" cy="170" rx="15" ry="6" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
  <ellipse cx="115" cy="180" rx="15" ry="6" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
  <text x="130" y="178" fill="#d97706" font-size="9">slip rings</text>
  <!-- Brushes -->
  <rect x="82" y="168" width="10" height="8" rx="2" fill="#374151"/>
  <rect x="82" y="178" width="10" height="8" rx="2" fill="#374151"/>
  <text x="53" y="175" fill="#374151" font-size="9">brushes</text>
  <!-- Rotation arrow -->
  <path d="M105,75 A15,15 0 0,1 125,75" fill="none" stroke="#6366f1" stroke-width="2"/>
  <text x="100" y="68" fill="#6366f1" font-size="9">⟳ rotate</text>
  <!-- Output wires -->
  <line x1="92" y1="172" x2="70" y2="172" stroke="#374151" stroke-width="1.5"/>
  <line x1="92" y1="182" x2="70" y2="182" stroke="#374151" stroke-width="1.5"/>
  <!-- Right side: sine wave output -->
  <rect x="235" y="40" width="140" height="120" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="275" y="58" fill="#22d3ee" font-size="10" font-weight="bold">AC Output</text>
  <line x1="240" y1="100" x2="370" y2="100" stroke="#334155" stroke-width="1"/>
  <path d="M240,100 C255,60 270,60 285,100 C300,140 315,140 330,100 C345,60 360,60 370,100"
        stroke="#22d3ee" stroke-width="2.5" fill="none"/>
  <text x="244" y="158" fill="#6b7280" font-size="9">sine wave (AC)</text>
  <!-- Arrow from generator to output -->
  <line x1="220" y1="110" x2="233" y2="110" stroke="#9ca3af" stroke-width="1.5"/>
  <polygon points="231,106 239,110 231,114" fill="#9ca3af"/>
</svg>`,
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Increasing rotation speed increases BOTH the peak (amplitude) AND the frequency of the AC output. This is different from a transformer where changing turns only changes voltage.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'AC generator: rotating coil + permanent magnets + slip rings + brushes. Coil cutting field → induced AC. EMF max when coil parallel to field, zero when perpendicular. Output = sine wave.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'AC generator: rotating coil, slip rings (not commutator), AC sine wave output. EMF peaks when coil is parallel to field.',
    cues: [
      { id: 'cue-1', blockId: 'list-parts', prompt: 'Name the four main parts of an AC generator.', answer: 'Rotating coil, permanent magnets, slip rings, carbon brushes.' },
      { id: 'cue-2', blockId: 'list-emf', prompt: 'When is the induced EMF maximum during coil rotation?', answer: 'When the coil is parallel to the field (sides cut field lines at 90°, maximum rate of flux change).' },
      { id: 'cue-3', blockId: 'table-compare', prompt: 'What is the key structural difference between an AC generator and a DC motor?', answer: 'Generator uses slip rings (complete rings) → AC output. Motor uses split-ring commutator → continuous rotation.' },
      { id: 'cue-4', blockId: 'list-increase', prompt: 'How does increasing rotation speed affect the AC output?', answer: 'Both the peak amplitude and the frequency increase.' },
    ],
  },
  evidence: [],
  mentions: [],
};
