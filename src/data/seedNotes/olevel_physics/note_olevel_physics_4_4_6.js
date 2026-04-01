export const note_olevel_physics_4_4_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-4-7-national-grid.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe how electrical energy is transmitted via the national grid, and explain why high voltage is used to reduce power losses.' },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'The National Grid Overview', level: 2 },
    },
    {
      id: 'para-intro',
      type: 'paragraph',
      data: {
        text: 'The <strong>national grid</strong> is a network of cables and transformers that distributes electricity from power stations to homes and industry. Electricity must be transmitted efficiently over long distances. Transformers allow voltage to be stepped up or down as needed.',
      },
    },
    {
      id: 'h-stages',
      type: 'heading',
      data: { text: 'Stages of Transmission', level: 2 },
    },
    {
      id: 'list-stages',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Generation:</strong> Power stations generate electricity at ~25 kV using AC generators.' },
          { text: '<strong>Step-up:</strong> A step-up transformer increases voltage to ~400 kV for long-distance transmission.' },
          { text: '<strong>Transmission:</strong> High-voltage AC travels through overhead cables on pylons across the country.' },
          { text: '<strong>Step-down (primary substation):</strong> Voltage reduced to ~33 kV for heavy industry.' },
          { text: '<strong>Step-down (secondary substation):</strong> Reduced to ~11 kV for light industry, then ~400 V or 230 V for homes.' },
        ],
      },
    },
    {
      id: 'h-why-hv',
      type: 'heading',
      data: { text: 'Why High Voltage Reduces Energy Loss', level: 2 },
    },
    {
      id: 'para-hv',
      type: 'paragraph',
      data: {
        text: 'Cables have resistance. Power is lost as heat in cables according to <strong>P = I²R</strong>. Stepping up the voltage reduces the current (since P = IV, same power requires less current at higher voltage). Lower current → dramatically lower power loss in the cables.',
      },
    },
    {
      id: 'eq-loss',
      type: 'equation',
      data: {
        html: 'P<sub>loss</sub> = I<sup>2</sup>R',
        caption: 'Power loss in transmission cables. Reducing I greatly reduces losses (I² effect).',
      },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Idea: Why High Voltage?',
        text: 'If current is halved (by doubling voltage), power loss falls to (½)² = ¼ of original. Tripling voltage → current ÷ 3 → power loss ÷ 9. High voltage, low current = far less wasted energy.',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A power station transmits 1 MW along cables with total resistance 5 Ω.\n\nOption A — transmitted at 10 kV:\n  I = P/V = 1×10⁶ / 10×10³ = 100 A\n  P_loss = I²R = 100² × 5 = 50 000 W = 50 kW\n\nOption B — transmitted at 200 kV:\n  I = 1×10⁶ / 200×10³ = 5 A\n  P_loss = 5² × 5 = 125 W   ← far less loss',
      },
    },
    {
      id: 'h-ac',
      type: 'heading',
      data: { text: 'Why AC, Not DC?', level: 2 },
    },
    {
      id: 'para-ac',
      type: 'paragraph',
      data: {
        text: 'Transformers only work with <strong>alternating current (AC)</strong> because they rely on a continuously changing magnetic field. DC produces a steady field that does not induce an EMF in the secondary coil. The national grid therefore uses AC throughout.',
      },
    },
    {
      id: 'svg-grid',
      type: 'svg',
      data: {
        caption: 'National grid: power station → step-up → pylons → substations → homes',
        svg: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="9">
  <!-- Power station -->
  <rect x="10" y="70" width="70" height="50" rx="5" fill="#3d1212" stroke="#ef4444" stroke-width="2"/>
  <text x="16" y="90" fill="#b91c1c" font-weight="bold">Power</text>
  <text x="14" y="102" fill="#b91c1c" font-weight="bold">Station</text>
  <text x="20" y="114" fill="#b91c1c">~25 kV</text>
  <!-- Wire to step-up -->
  <line x1="80" y1="95" x2="110" y2="95" stroke="#374151" stroke-width="2"/>
  <!-- Step-up transformer -->
  <rect x="110" y="65" width="55" height="60" rx="4" fill="#2d2f72" stroke="#3b82f6" stroke-width="2"/>
  <text x="117" y="90" fill="#4338ca" font-weight="bold">Step-up</text>
  <text x="113" y="103" fill="#4338ca">Transformer</text>
  <text x="115" y="116" fill="#4338ca">→ 400 kV</text>
  <!-- Wire to pylons -->
  <line x1="165" y1="95" x2="200" y2="95" stroke="#374151" stroke-width="2"/>
  <!-- Pylon 1 -->
  <line x1="210" y1="40" x2="210" y2="130" stroke="#6b7280" stroke-width="2.5"/>
  <line x1="196" y1="65" x2="224" y2="65" stroke="#6b7280" stroke-width="2"/>
  <line x1="196" y1="80" x2="224" y2="80" stroke="#6b7280" stroke-width="2"/>
  <!-- Overhead cables -->
  <path d="M 200 65 Q 240 68 265 65" stroke="#374151" stroke-width="1.5" fill="none"/>
  <path d="M 200 80 Q 240 83 265 80" stroke="#374151" stroke-width="1.5" fill="none"/>
  <text x="195" y="55" fill="#374151">400 kV</text>
  <!-- Pylon 2 -->
  <line x1="265" y1="40" x2="265" y2="130" stroke="#6b7280" stroke-width="2.5"/>
  <line x1="251" y1="65" x2="279" y2="65" stroke="#6b7280" stroke-width="2"/>
  <line x1="251" y1="80" x2="279" y2="80" stroke="#6b7280" stroke-width="2"/>
  <!-- Wire to step-down primary substation -->
  <line x1="280" y1="95" x2="310" y2="95" stroke="#374151" stroke-width="2"/>
  <!-- Step-down primary -->
  <rect x="310" y="65" width="60" height="60" rx="4" fill="#0a2e1a" stroke="#10b981" stroke-width="2"/>
  <text x="315" y="88" fill="#065f46" font-weight="bold">Step-down</text>
  <text x="314" y="100" fill="#065f46">33 kV / 11 kV</text>
  <text x="316" y="113" fill="#065f46">Substation</text>
  <!-- Wire to homes -->
  <line x1="370" y1="95" x2="400" y2="95" stroke="#374151" stroke-width="2"/>
  <!-- Homes -->
  <rect x="400" y="75" width="35" height="40" rx="3" fill="#44370a" stroke="#ca8a04" stroke-width="2"/>
  <polygon points="400,75 417,55 435,75" fill="#44370a" stroke="#ca8a04" stroke-width="2"/>
  <text x="404" y="130" fill="#92400e" font-weight="bold">230 V</text>
  <text x="401" y="143" fill="#92400e">Homes</text>
  <!-- Labels -->
  <text x="120" y="155" fill="#6b7280">AC only — transformers change voltage</text>
</svg>`,
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'National grid: generate at 25 kV → step-up to 400 kV (reduces current) → transmit via pylons → step-down to 230 V for homes. High voltage keeps current low, so P = I²R losses in cables are minimised. AC is essential for transformers.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Power station → step-up (400 kV) → pylons → step-down (230 V). P_loss = I²R, so high V means low I and less loss. AC required for transformers.',
    cues: [
      { id: 'cue-1', blockId: 'h-stages', prompt: 'What voltage is electricity stepped up to for long-distance transmission in the national grid?', answer: 'Approximately 400 kV.' },
      { id: 'cue-2', blockId: 'eq-loss', prompt: 'Why does stepping up voltage reduce energy losses in transmission cables?', answer: 'Higher voltage → lower current (same power). P_loss = I²R, so less current means much less power wasted as heat.' },
      { id: 'cue-3', blockId: 'para-ac', prompt: 'Why must the national grid use AC rather than DC?', answer: 'Transformers need a changing magnetic field to induce EMF. DC produces a steady field, so no EMF is induced in the secondary coil.' },
    ],
  },
  evidence: [],
  mentions: [],
};
