export const note_olevel_physics_4_4_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-4-3-dc-motor.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the structure and operation of a DC electric motor and explain how continuous rotation is maintained.' },
    },
    {
      id: 'h-structure',
      type: 'heading',
      data: { text: 'DC Motor Structure', level: 2 },
    },
    {
      id: 'list-parts',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Coil (armature)</strong> — a rectangular loop of wire that rotates.' },
          { text: '<strong>Permanent magnets (N and S)</strong> — provide the external magnetic field.' },
          { text: '<strong>Split-ring commutator</strong> — two halves of a ring attached to the coil ends; reverses current every half turn.' },
          { text: '<strong>Carbon brushes</strong> — fixed contacts that press against the commutator and supply current from the external circuit.' },
        ],
      },
    },
    {
      id: 'h-how',
      type: 'heading',
      data: { text: 'How the Motor Works', level: 2 },
    },
    {
      id: 'para-how',
      type: 'paragraph',
      data: {
        text: 'Current flows through the coil. The coil is in a magnetic field, so each side experiences a force (motor effect / Fleming\'s LHR). The forces on opposite sides are in opposite directions, creating a <strong>turning force (couple)</strong> that rotates the coil.',
      },
    },
    {
      id: 'h-commutator',
      type: 'heading',
      data: { text: 'Role of the Split-Ring Commutator', level: 2 },
    },
    {
      id: 'para-commutator',
      type: 'paragraph',
      data: {
        text: 'After every half rotation, the coil sides swap positions in the field. Without intervention, the forces would reverse, stopping the rotation. The <strong>split-ring commutator reverses the current direction</strong> in the coil every half turn — ensuring the forces always act in the same rotational direction, so the coil keeps spinning continuously in the same direction.',
      },
    },
    {
      id: 'h-speed',
      type: 'heading',
      data: { text: 'Increasing Motor Speed', level: 2 },
    },
    {
      id: 'list-speed',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Increase the <strong>current</strong> through the coil.' },
          { text: 'Increase the <strong>magnetic field strength</strong> (stronger magnets).' },
          { text: 'Increase the <strong>number of turns</strong> in the coil.' },
        ],
      },
    },
    {
      id: 'svg-motor',
      type: 'svg',
      data: {
        caption: 'DC motor cross-section: coil between N and S poles, split-ring commutator and brushes',
        svg: `<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <!-- N pole -->
  <rect x="30" y="60" width="55" height="110" rx="8" fill="#0a3020" stroke="#16a34a" stroke-width="2"/>
  <text x="42" y="120" fill="#16a34a" font-weight="bold" font-size="18">N</text>
  <!-- S pole -->
  <rect x="275" y="60" width="55" height="110" rx="8" fill="#3d1212" stroke="#ef4444" stroke-width="2"/>
  <text x="288" y="120" fill="#ef4444" font-weight="bold" font-size="18">S</text>
  <!-- Coil (rectangular) -->
  <rect x="140" y="70" width="80" height="90" rx="4" fill="#2d2f72" stroke="#3b82f6" stroke-width="3"/>
  <text x="158" y="118" fill="#3b82f6">Coil</text>
  <!-- Force arrows on coil sides -->
  <text x="95" y="88" fill="#d97706" font-size="10">F↑</text>
  <line x1="100" y1="100" x2="100" y2="70" stroke="#d97706" stroke-width="2" marker-end="url(#arr-up)"/>
  <text x="245" y="158" fill="#d97706" font-size="10">F↓</text>
  <line x1="255" y1="140" x2="255" y2="165" stroke="#d97706" stroke-width="2"/>
  <!-- Axle -->
  <line x1="180" y1="40" x2="180" y2="190" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="185" y="45" fill="#9ca3af" font-size="9">axle</text>
  <!-- Commutator halves -->
  <path d="M155,175 A25,10 0 0,1 205,175" fill="#78350f" stroke="#d97706" stroke-width="2"/>
  <path d="M155,175 A25,10 0 0,0 205,175" fill="#44370a" stroke="#d97706" stroke-width="2"/>
  <text x="140" y="195" fill="#d97706" font-size="9">Split-ring commutator</text>
  <!-- Brushes -->
  <rect x="125" y="178" width="15" height="10" rx="2" fill="#374151" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="220" y="178" width="15" height="10" rx="2" fill="#374151" stroke="#1f2937" stroke-width="1.5"/>
  <text x="90" y="175" fill="#374151" font-size="9">brush</text>
  <text x="237" y="175" fill="#374151" font-size="9">brush</text>
  <!-- Field arrow -->
  <text x="110" y="158" fill="#4b5563" font-size="9">← B field →</text>
  <!-- Rotation arrow -->
  <path d="M170,85 A20,20 0 0,1 190,85" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,2"/>
  <text x="162" y="80" fill="#3b82f6" font-size="9">⟳ rotation</text>
</svg>`,
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'AC Generator vs DC Motor',
        text: 'Both have coil + magnets. The motor uses a SPLIT-RING commutator (reverses current each half-turn → continuous rotation). The generator uses SLIP RINGS (maintain continuous contact → produces AC). Remember: Motor = Split-ring, Generator = Slip rings.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'DC motor: current in coil → force (motor effect) → rotation. Split-ring commutator reverses current every half turn to maintain continuous rotation. Speed ↑ with current, field strength, or coil turns.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'DC motor: coil + magnets + split-ring commutator + brushes. Commutator reverses current each half-turn → continuous rotation.',
    cues: [
      { id: 'cue-1', blockId: 'list-parts', prompt: 'Name the four main components of a DC motor.', answer: 'Coil (armature), permanent magnets, split-ring commutator, carbon brushes.' },
      { id: 'cue-2', blockId: 'para-commutator', prompt: 'What is the function of the split-ring commutator in a DC motor?', answer: 'It reverses the current direction in the coil every half rotation, so the forces always produce rotation in the same direction.' },
      { id: 'cue-3', blockId: 'list-speed', prompt: 'State two ways to increase the speed of a DC motor.', answer: 'Increase the current; increase the magnetic field strength; increase the number of coil turns.' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'How is a DC motor different from an AC generator in its construction?', answer: 'Motor uses a split-ring commutator; generator uses slip rings.' },
    ],
  },
  evidence: [],
  mentions: [],
};
