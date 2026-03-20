export const note_olevel_physics_4_2_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-2-6-resistors-in-series.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply the series circuit rules: same current throughout, voltages add up, and R_total = R₁ + R₂ + ... to solve circuit problems.' },
    },
    {
      id: 'h-series',
      type: 'heading',
      data: { text: 'Series Circuits', level: 2 },
    },
    {
      id: 'para-series',
      type: 'paragraph',
      data: {
        text: 'In a <strong>series circuit</strong>, components are connected in a single loop — there is only <strong>one path</strong> for current to flow. If one component breaks, all components stop working.',
      },
    },
    {
      id: 'h-rules',
      type: 'heading',
      data: { text: 'Series Circuit Rules', level: 2 },
    },
    {
      id: 'list-rules',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Current is the same</strong> at every point in the circuit: I₁ = I₂ = I₃ = I' },
          { text: '<strong>Voltage adds up</strong> to the supply voltage: V_total = V₁ + V₂ + V₃' },
          { text: '<strong>Total resistance</strong> is the sum of individual resistances: R_total = R₁ + R₂ + R₃' },
        ],
      },
    },
    {
      id: 'eq-series',
      type: 'equation',
      data: {
        html: 'R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> + ...',
        caption: 'Total resistance in series = sum of individual resistances',
      },
    },
    {
      id: 'svg-series',
      type: 'svg',
      data: {
        caption: 'Series circuit: same current through all; voltages V₁, V₂ add up to supply voltage.',
        svg: `<svg viewBox="0 0 380 160" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="12">
  <!-- Battery -->
  <rect x="15" y="65" width="30" height="40" rx="4" fill="#78350f" stroke="#f59e0b" stroke-width="2"/>
  <text x="30" y="90" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="11">EMF</text>
  <!-- Top wire -->
  <line x1="45" y1="75" x2="345" y2="75" stroke="#374151" stroke-width="2"/>
  <!-- Bottom wire -->
  <line x1="45" y1="105" x2="345" y2="105" stroke="#374151" stroke-width="2"/>
  <!-- Closing wire right -->
  <line x1="345" y1="75" x2="345" y2="105" stroke="#374151" stroke-width="2"/>

  <!-- Resistor R1 -->
  <rect x="90" y="63" width="60" height="24" rx="4" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="120" y="79" text-anchor="middle" fill="#1d4ed8" font-weight="bold">R₁</text>
  <!-- Resistor R2 -->
  <rect x="200" y="63" width="60" height="24" rx="4" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="230" y="79" text-anchor="middle" fill="#1d4ed8" font-weight="bold">R₂</text>
  <!-- Resistor R3 -->
  <rect x="280" y="63" width="50" height="24" rx="4" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="305" y="79" text-anchor="middle" fill="#1d4ed8" font-weight="bold">R₃</text>

  <!-- Current arrows on wire -->
  <defs>
    <marker id="carr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L0,7 L7,3.5 z" fill="#6366f1"/>
    </marker>
  </defs>
  <line x1="55" y1="75" x2="85" y2="75" stroke="#6366f1" stroke-width="1.5" marker-end="url(#carr)"/>
  <line x1="155" y1="75" x2="195" y2="75" stroke="#6366f1" stroke-width="1.5" marker-end="url(#carr)"/>
  <line x1="265" y1="75" x2="278" y2="75" stroke="#6366f1" stroke-width="1.5" marker-end="url(#carr)"/>

  <!-- Labels below -->
  <text x="120" y="125" text-anchor="middle" fill="#374151" font-size="11">V₁</text>
  <text x="230" y="125" text-anchor="middle" fill="#374151" font-size="11">V₂</text>
  <text x="305" y="125" text-anchor="middle" fill="#374151" font-size="11">V₃</text>
  <text x="190" y="148" text-anchor="middle" fill="#64748b" font-size="11">V_total = V₁ + V₂ + V₃ &nbsp;|&nbsp; same I throughout</text>
</svg>`,
      },
    },
    {
      id: 'h-voltage',
      type: 'heading',
      data: { text: 'Voltage Sharing in Series', level: 3 },
    },
    {
      id: 'para-voltage',
      type: 'paragraph',
      data: {
        text: 'Voltage is shared between resistors in proportion to their resistance. A larger resistor gets a larger share of the voltage: V₁/V₂ = R₁/R₂.',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A 6 Ω and 3 Ω resistor are connected in series to a 9 V battery.\n\nR_total = 6 + 3 = 9 Ω\nI = V/R = 9/9 = 1 A\nV₁ (6 Ω) = IR = 1 × 6 = 6 V\nV₂ (3 Ω) = IR = 1 × 3 = 3 V\nCheck: 6 + 3 = 9 V ✓',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Series circuit: same current everywhere; voltages add to supply; R_total = R₁ + R₂ + ... Adding more resistors in series increases total resistance and reduces current.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Series: same I, voltages add up, R_total = R₁ + R₂ + ....',
    cues: [
      { id: 'cue-1', blockId: 'list-rules', prompt: 'State the three rules of a series circuit.', answer: '1. Current is the same throughout. 2. Voltages add up to supply voltage. 3. R_total = R₁ + R₂ + R₃.' },
      { id: 'cue-2', blockId: 'eq-series', prompt: 'What is the total resistance of three resistors (2 Ω, 4 Ω, 6 Ω) in series?', answer: 'R_total = 2 + 4 + 6 = 12 Ω.' },
      { id: 'cue-3', blockId: 'call-worked', prompt: 'A 4 Ω and 6 Ω resistor are in series with a 20 V supply. Find the current and voltage across each.', answer: 'R = 10 Ω, I = 2 A, V(4Ω) = 8 V, V(6Ω) = 12 V.' },
      { id: 'cue-4', blockId: 'para-voltage', prompt: 'If two series resistors have R₁ = 2R₂, what fraction of total voltage appears across R₁?', answer: 'V₁ = 2/3 of V_total (R₁ gets twice the voltage of R₂).' },
    ],
  },
  evidence: [],
  mentions: [],
};
