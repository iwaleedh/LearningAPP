export const note_olevel_physics_4_4_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-4-6-transformer.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe transformer structure, apply the transformer equation, and calculate power and current in ideal transformers.' },
    },
    {
      id: 'h-structure',
      type: 'heading',
      data: { text: 'Transformer Structure', level: 2 },
    },
    {
      id: 'para-structure',
      type: 'paragraph',
      data: {
        text: 'A transformer consists of: <strong>two coils</strong> (primary and secondary) wound on a <strong>laminated soft iron core</strong>. The primary coil receives AC input; the secondary coil delivers the transformed voltage. Transformers only work with <strong>AC, not DC</strong> (a changing current is needed to produce a changing field).',
      },
    },
    {
      id: 'h-how',
      type: 'heading',
      data: { text: 'How a Transformer Works', level: 2 },
    },
    {
      id: 'para-how',
      type: 'paragraph',
      data: {
        text: 'AC in the primary coil creates a continuously changing magnetic field in the iron core. This changing field links with the secondary coil, inducing an AC EMF by electromagnetic induction. The ratio of voltages equals the ratio of turns.',
      },
    },
    {
      id: 'eq-transformer',
      type: 'equation',
      data: {
        html: '<span class="nb-frac"><span class="nb-num">V<sub>p</sub></span><span class="nb-den">V<sub>s</sub></span></span> = <span class="nb-frac"><span class="nb-num">N<sub>p</sub></span><span class="nb-den">N<sub>s</sub></span></span>',
        caption: 'V_p = primary voltage, V_s = secondary voltage, N_p = primary turns, N_s = secondary turns',
      },
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Step-Up and Step-Down Transformers', level: 2 },
    },
    {
      id: 'table-types',
      type: 'comparisonTable',
      data: {
        caption: 'Types of Transformer',
        headers: ['Type', 'Turns ratio (N_s vs N_p)', 'Voltage', 'Current', 'Use'],
        rows: [
          ['Step-up', 'N_s > N_p', 'V_s > V_p', 'I_s < I_p', 'Power station → national grid (400 kV)'],
          ['Step-down', 'N_s < N_p', 'V_s < V_p', 'I_s > I_p', 'Substation → home (230 V)'],
        ],
      },
    },
    {
      id: 'h-power',
      type: 'heading',
      data: { text: 'Ideal Transformer Power Equation', level: 2 },
    },
    {
      id: 'para-ideal',
      type: 'paragraph',
      data: {
        text: 'An <strong>ideal transformer</strong> has no energy losses. Therefore, power in = power out:',
      },
    },
    {
      id: 'eq-power',
      type: 'equation',
      data: {
        html: 'V<sub>p</sub> × I<sub>p</sub> = V<sub>s</sub> × I<sub>s</sub>',
        caption: 'If voltage is stepped up, current is stepped down by the same factor (and vice versa).',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A transformer has N_p = 200 turns and N_s = 1000 turns. Primary voltage = 50 V, primary current = 10 A.\n\nV_s/V_p = N_s/N_p → V_s = 50 × (1000/200) = 250 V (step-up)\n\nI_s = V_p × I_p / V_s = 50 × 10 / 250 = 2 A (stepped down)',
      },
    },
    {
      id: 'h-iron-core',
      type: 'heading',
      data: { text: 'Why a Laminated Iron Core?', level: 2 },
    },
    {
      id: 'para-laminate',
      type: 'paragraph',
      data: {
        text: 'The <strong>soft iron core</strong> channels the magnetic flux efficiently between coils. The core is <strong>laminated</strong> (made of thin insulated layers) to reduce <strong>eddy currents</strong> — circular currents induced in the core that waste energy as heat. Lamination breaks up these currents, improving efficiency.',
      },
    },
    {
      id: 'svg-transformer',
      type: 'svg',
      data: {
        caption: 'Transformer: primary coil, iron core, and secondary coil',
        svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <!-- Iron core (E-shape) -->
  <rect x="130" y="30" width="100" height="140" rx="5" fill="#1e293b" stroke="#6b7280" stroke-width="2"/>
  <!-- Core window cutout -->
  <rect x="150" y="60" width="60" height="80" rx="3" fill="#0f172a"/>
  <!-- Primary coil (left) -->
  <rect x="80" y="55" width="70" height="90" rx="5" fill="#2d2f72" stroke="#6366f1" stroke-width="2.5"/>
  <!-- Primary coil turns (visual) -->
  <line x1="88" y1="65" x2="148" y2="65" stroke="#6366f1" stroke-width="1.5"/>
  <line x1="88" y1="75" x2="148" y2="75" stroke="#6366f1" stroke-width="1.5"/>
  <line x1="88" y1="85" x2="148" y2="85" stroke="#6366f1" stroke-width="1.5"/>
  <line x1="88" y1="95" x2="148" y2="95" stroke="#6366f1" stroke-width="1.5"/>
  <line x1="88" y1="105" x2="148" y2="105" stroke="#6366f1" stroke-width="1.5"/>
  <line x1="88" y1="115" x2="148" y2="115" stroke="#6366f1" stroke-width="1.5"/>
  <line x1="88" y1="125" x2="148" y2="125" stroke="#6366f1" stroke-width="1.5"/>
  <line x1="88" y1="135" x2="148" y2="135" stroke="#6366f1" stroke-width="1.5"/>
  <text x="85" y="165" fill="#6366f1" font-weight="bold">Primary</text>
  <text x="90" y="177" fill="#6366f1">N_p turns</text>
  <!-- Secondary coil (right) -->
  <rect x="210" y="55" width="70" height="90" rx="5" fill="#0a2e1a" stroke="#10b981" stroke-width="2.5"/>
  <!-- Fewer turns for step-down illustration -->
  <line x1="212" y1="70" x2="278" y2="70" stroke="#10b981" stroke-width="1.5"/>
  <line x1="212" y1="90" x2="278" y2="90" stroke="#10b981" stroke-width="1.5"/>
  <line x1="212" y1="110" x2="278" y2="110" stroke="#10b981" stroke-width="1.5"/>
  <line x1="212" y1="130" x2="278" y2="130" stroke="#10b981" stroke-width="1.5"/>
  <text x="210" y="165" fill="#10b981" font-weight="bold">Secondary</text>
  <text x="212" y="177" fill="#10b981">N_s turns</text>
  <!-- V_p input -->
  <line x1="30" y1="75" x2="80" y2="75" stroke="#374151" stroke-width="2"/>
  <line x1="30" y1="135" x2="80" y2="135" stroke="#374151" stroke-width="2"/>
  <text x="5" y="108" fill="#374151">V_p</text>
  <text x="10" y="120" fill="#374151">AC in</text>
  <!-- V_s output -->
  <line x1="280" y1="75" x2="330" y2="75" stroke="#374151" stroke-width="2"/>
  <line x1="280" y1="135" x2="330" y2="135" stroke="#374151" stroke-width="2"/>
  <text x="332" y="108" fill="#374151">V_s</text>
  <text x="330" y="120" fill="#374151">out</text>
  <!-- Iron core label -->
  <text x="145" y="22" fill="#6b7280">Laminated iron core</text>
  <line x1="180" y1="24" x2="180" y2="30" stroke="#6b7280" stroke-width="1.5"/>
</svg>`,
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Transformer: V_p/V_s = N_p/N_s. Step-up: more secondary turns → higher voltage. Ideal: V_p×I_p = V_s×I_s. Laminated core reduces eddy current losses. Only works with AC.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'V_p/V_s = N_p/N_s. Step-up: N_s > N_p → V_s > V_p. Ideal: V_p I_p = V_s I_s. Needs AC.',
    cues: [
      { id: 'cue-1', blockId: 'eq-transformer', prompt: 'Write the transformer turns equation.', answer: 'V_p / V_s = N_p / N_s' },
      { id: 'cue-2', blockId: 'call-worked', prompt: 'A transformer steps 240 V down to 12 V. Primary has 2000 turns. How many turns in the secondary?', answer: 'N_s = 2000 × (12/240) = 100 turns.' },
      { id: 'cue-3', blockId: 'eq-power', prompt: 'A transformer steps 100 V up to 500 V. Primary current = 2 A. Find secondary current (ideal).', answer: 'I_s = V_p × I_p / V_s = 100 × 2 / 500 = 0.4 A.' },
      { id: 'cue-4', blockId: 'para-laminate', prompt: 'Why is the iron core of a transformer laminated?', answer: 'To reduce eddy currents (circular currents in the core that waste energy as heat). Lamination restricts eddy current paths.' },
    ],
  },
  evidence: [],
  mentions: [],
};
