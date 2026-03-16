export const note_olevel_physics_1_7_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-7-1-energy-stores-and-transfers.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'List different stores of energy; describe how energy is transferred between stores; state the principle of conservation of energy.' },
    },
    {
      id: 'h-stores',
      type: 'heading',
      data: { text: 'Energy Stores', level: 2 },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Principle of Conservation of Energy',
        text: 'Energy cannot be created or destroyed. It can only be <strong>transferred</strong> from one store to another or <strong>converted</strong> from one form to another.<br><br>Total energy before = Total energy after (in a closed system)',
      },
    },
    {
      id: 'list-stores',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Kinetic (KE):</strong> energy due to motion' },
          { text: '<strong>Gravitational potential (GPE):</strong> energy due to height in a gravitational field' },
          { text: '<strong>Elastic/strain potential:</strong> stored in stretched/compressed springs, elastic bands' },
          { text: '<strong>Chemical:</strong> stored in foods, fuels, batteries' },
          { text: '<strong>Thermal (heat):</strong> internal energy due to random particle motion' },
          { text: '<strong>Nuclear:</strong> stored in atomic nuclei' },
          { text: '<strong>Electrical:</strong> associated with electric charges and fields' },
          { text: '<strong>Sound:</strong> vibrations of particles' },
          { text: '<strong>Light (radiant):</strong> electromagnetic radiation' },
        ],
      },
    },
    {
      id: 'svg-energy',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="220" fill="#fff7ed" rx="10"/>
  <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Energy Transfer: Ball Thrown Up</text>
  <!-- Ground line -->
  <line x1="30" y1="185" x2="410" y2="185" stroke="#6b7280" stroke-width="2"/>
  <!-- Stage 1: ground moving -->
  <rect x="35" y="35" width="110" height="155" fill="white" stroke="#e5e7eb" rx="6"/>
  <text x="90" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#374151">At launch</text>
  <circle cx="90" cy="165" r="12" fill="#6366f1"/>
  <line x1="90" y1="153" x2="90" y2="125" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="90,125 86,134 94,134" fill="#2563eb"/>
  <text x="100" y="138" font-size="10" fill="#2563eb">v (max)</text>
  <text x="90" y="195" text-anchor="middle" font-size="10" fill="#2563eb">KE = max</text>
  <text x="90" y="207" text-anchor="middle" font-size="10" fill="#16a34a">GPE = 0</text>
  <!-- Stage 2: halfway up -->
  <rect x="165" y="35" width="110" height="155" fill="white" stroke="#e5e7eb" rx="6"/>
  <text x="220" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#374151">Halfway up</text>
  <circle cx="220" cy="125" r="12" fill="#6366f1"/>
  <text x="220" y="195" text-anchor="middle" font-size="10" fill="#2563eb">KE = ½ max</text>
  <text x="220" y="207" text-anchor="middle" font-size="10" fill="#16a34a">GPE = ½ max</text>
  <!-- Stage 3: at top -->
  <rect x="295" y="35" width="110" height="155" fill="white" stroke="#e5e7eb" rx="6"/>
  <text x="350" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#374151">At top</text>
  <circle cx="350" cy="65" r="12" fill="#6366f1"/>
  <text x="350" y="195" text-anchor="middle" font-size="10" fill="#2563eb">KE = 0</text>
  <text x="350" y="207" text-anchor="middle" font-size="10" fill="#16a34a">GPE = max</text>
  <!-- Arrows between -->
  <line x1="145" y1="110" x2="163" y2="110" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="163,110 155,106 155,114" fill="#f59e0b"/>
  <text x="154" y="104" text-anchor="middle" font-size="9" fill="#f59e0b">KE→GPE</text>
  <line x1="275" y1="110" x2="293" y2="110" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="293,110 285,106 285,114" fill="#f59e0b"/>
  <text x="284" y="104" text-anchor="middle" font-size="9" fill="#f59e0b">KE→GPE</text>
</svg>`,
        caption: 'KE converts to GPE as ball rises. Total mechanical energy conserved (ignoring air resistance).',
      },
    },
    {
      id: 'h-transfer',
      type: 'heading',
      data: { text: 'Energy Transfer Pathways', level: 2 },
    },
    {
      id: 'list-transfer',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Mechanically:</strong> via forces doing work (pushing, pulling, throwing)' },
          { text: '<strong>Electrically:</strong> via moving charges in a circuit' },
          { text: '<strong>Thermally (heating):</strong> via conduction, convection, radiation' },
          { text: '<strong>Radiation:</strong> via light, sound, other waves' },
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Useful vs Wasted Energy',
        text: 'Real machines always produce some <em>wasted</em> energy (usually heat). Even though total energy is always conserved, only some of it is the <em>useful</em> output. Efficiency measures the fraction that is useful.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Energy stores: kinetic, GPE, elastic, chemical, thermal, nuclear, electrical, sound, light. Energy is conserved — only transferred or converted. Transfers occur mechanically, electrically, thermally, or by radiation. In real systems some energy is wasted as heat.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Energy cannot be created or destroyed — only transferred. KE ↔ GPE ↔ heat. Total energy always conserved.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'State the principle of conservation of energy.', answer: 'Energy cannot be created or destroyed. It can only be transferred from one store to another or converted from one form to another. Total energy is constant in a closed system.' },
      { id: 'cue-2', blockId: 'list-stores', prompt: 'Name four different stores of energy.', answer: 'Any four from: kinetic, gravitational potential, elastic/strain, chemical, thermal, nuclear, electrical, sound, light.' },
      { id: 'cue-3', blockId: 'svg-energy', prompt: 'Describe the energy changes for a ball thrown vertically upwards (ignoring air resistance).', answer: 'At launch: maximum KE, zero GPE. As it rises: KE converts to GPE. At the top: zero KE, maximum GPE. Total mechanical energy stays constant throughout.' },
      { id: 'cue-4', blockId: 'list-transfer', prompt: 'Give one example each of mechanical and electrical energy transfer.', answer: 'Mechanical: a force pushing a box along a floor. Electrical: current flowing through a resistor, transferring electrical energy to thermal energy.' },
    ],
  },
  evidence: [],
  mentions: [],
};
