export const note_olevel_physics_4_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-4-1-electromagnetism.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the magnetic field around a current-carrying wire and solenoid, and state factors affecting field strength.' },
    },
    {
      id: 'h-wire',
      type: 'heading',
      data: { text: 'Magnetic Field Around a Straight Wire', level: 2 },
    },
    {
      id: 'para-wire',
      type: 'paragraph',
      data: {
        text: 'A current-carrying wire produces a <strong>circular magnetic field</strong> around it. The field lines are concentric circles centred on the wire. Field direction is found using the <strong>right-hand grip rule</strong>: wrap the right hand around the wire with the thumb pointing in the direction of conventional current — fingers curl in the direction of the field.',
      },
    },
    {
      id: 'h-factors',
      type: 'heading',
      data: { text: 'Factors Affecting Field Strength (Wire)', level: 2 },
    },
    {
      id: 'list-factors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Increasing the <strong>current</strong> increases the field strength.' },
          { text: 'Field strength is <strong>greater closer</strong> to the wire (field lines more bunched together).' },
        ],
      },
    },
    {
      id: 'h-solenoid',
      type: 'heading',
      data: { text: 'Solenoid', level: 2 },
    },
    {
      id: 'para-solenoid',
      type: 'paragraph',
      data: {
        text: 'A <strong>solenoid</strong> is a coil of wire. When current flows, it produces a magnetic field similar to a <strong>bar magnet</strong> — with a north pole at one end and a south pole at the other. The field inside is strong and uniform; outside it spreads out like a bar magnet field.',
      },
    },
    {
      id: 'h-factors2',
      type: 'heading',
      data: { text: 'Factors Affecting Solenoid Field Strength', level: 2 },
    },
    {
      id: 'list-solenoid',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Increasing the <strong>current</strong>.' },
          { text: 'Increasing the number of <strong>turns (coils)</strong> per unit length.' },
          { text: 'Adding a <strong>soft iron core</strong> (makes an electromagnet — much stronger).' },
        ],
      },
    },
    {
      id: 'h-pole',
      type: 'heading',
      data: { text: 'Determining Solenoid Pole', level: 2 },
    },
    {
      id: 'para-pole',
      type: 'paragraph',
      data: {
        text: 'Looking at one end of the solenoid: if current flows <strong>anticlockwise</strong> around that face → it is the <strong>North</strong> pole. If current flows <strong>clockwise</strong> → <strong>South</strong> pole. (Mnemonic: N has an anticlockwise N-shape; S has a clockwise S-shape.)',
      },
    },
    {
      id: 'svg-solenoid',
      type: 'svg',
      data: {
        caption: 'Solenoid magnetic field — acts like a bar magnet with N and S poles',
        svg: `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <!-- Solenoid body -->
  <rect x="100" y="80" width="180" height="40" rx="6" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
  <!-- Coil loops -->
  <ellipse cx="110" cy="100" rx="8" ry="20" fill="none" stroke="#6366f1" stroke-width="2"/>
  <ellipse cx="130" cy="100" rx="8" ry="20" fill="none" stroke="#6366f1" stroke-width="2"/>
  <ellipse cx="150" cy="100" rx="8" ry="20" fill="none" stroke="#6366f1" stroke-width="2"/>
  <ellipse cx="170" cy="100" rx="8" ry="20" fill="none" stroke="#6366f1" stroke-width="2"/>
  <ellipse cx="190" cy="100" rx="8" ry="20" fill="none" stroke="#6366f1" stroke-width="2"/>
  <ellipse cx="210" cy="100" rx="8" ry="20" fill="none" stroke="#6366f1" stroke-width="2"/>
  <ellipse cx="270" cy="100" rx="8" ry="20" fill="none" stroke="#6366f1" stroke-width="2"/>
  <!-- N / S poles -->
  <rect x="55" y="75" width="45" height="50" rx="5" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
  <text x="65" y="104" fill="#16a34a" font-weight="bold" font-size="16">N</text>
  <rect x="280" y="75" width="45" height="50" rx="5" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="292" y="104" fill="#ef4444" font-weight="bold" font-size="16">S</text>
  <!-- Field lines (external) -->
  <path d="M55,92 C20,70 10,40 40,20 C80,0 160,5 200,10 C270,18 330,30 360,50 C365,65 340,80 305,85"
        fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/>
  <path d="M55,108 C20,130 10,160 40,180 C80,200 160,195 200,190 C270,182 330,170 360,150 C365,135 340,120 305,115"
        fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Current direction label -->
  <text x="100" y="155" fill="#6366f1" font-size="9">Current direction →</text>
  <line x1="115" y1="148" x2="110" y2="120" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3,2"/>
  <!-- Labels -->
  <text x="100" y="175" fill="#4b5563" font-size="9">Right-hand grip rule: thumb → current direction; fingers → field direction</text>
</svg>`,
      },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Electromagnet',
        text: 'An electromagnet is a solenoid with a soft iron core. It is only magnetic when current flows. Used in relays, electric bells, cranes, and MRI machines. The iron core is soft (not permanent) so it demagnetises when current stops.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Current in a wire → circular magnetic field. Solenoid → bar-magnet field (N and S poles). Field strength ∝ current and number of turns. Soft iron core creates an electromagnet.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Wire: circular field (right-hand grip rule). Solenoid: bar-magnet field, strength ∝ current and turns, iron core = electromagnet.',
    cues: [
      { id: 'cue-1', blockId: 'para-wire', prompt: 'Describe the shape of the magnetic field around a straight current-carrying wire.', answer: 'Concentric circles centred on the wire.' },
      { id: 'cue-2', blockId: 'list-solenoid', prompt: 'State three ways to increase the strength of a solenoid\'s magnetic field.', answer: '1. Increase current. 2. Increase turns per unit length. 3. Insert a soft iron core.' },
      { id: 'cue-3', blockId: 'para-pole', prompt: 'Looking at the end of a solenoid where current flows anticlockwise, which pole is it?', answer: 'North pole.' },
      { id: 'cue-4', blockId: 'call-key', prompt: 'Why is a soft iron core used in an electromagnet rather than steel?', answer: 'Soft iron is easily magnetised and demagnetised; it loses magnetism when the current stops. Steel would remain permanently magnetised.' },
    ],
  },
  evidence: [],
  mentions: [],
};
