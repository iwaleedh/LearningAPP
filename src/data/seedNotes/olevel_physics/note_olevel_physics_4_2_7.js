export const note_olevel_physics_4_2_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-2-8-potential-divider.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Analyse a potential divider circuit, apply V_out = V_in × R₂/(R₁ + R₂), and explain LDR/thermistor applications.' },
    },
    {
      id: 'h-divider',
      type: 'heading',
      data: { text: 'The Potential Divider', level: 2 },
    },
    {
      id: 'para-divider',
      type: 'paragraph',
      data: {
        text: 'A <strong>potential divider</strong> (voltage divider) consists of two (or more) resistors connected in series across a supply voltage. The output voltage is taken across one of the resistors. It divides the supply voltage in proportion to the resistances.',
      },
    },
    {
      id: 'eq-divider',
      type: 'equation',
      data: {
        html: 'V<sub>out</sub> = V<sub>in</sub> × <span class="nb-frac"><span class="nb-num">R<sub>2</sub></span><span class="nb-den">R<sub>1</sub> + R<sub>2</sub></span></span>',
        caption: 'V_out = output voltage across R₂; V_in = supply voltage; R₁ = upper resistor; R₂ = lower resistor',
      },
    },
    {
      id: 'svg-divider',
      type: 'svg',
      data: {
        caption: 'Potential divider circuit: R₁ and R₂ in series; V_out is measured across R₂.',
        svg: `<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="12">
  <!-- Supply voltage left -->
  <line x1="40" y1="30" x2="40" y2="210" stroke="#374151" stroke-width="2"/>
  <!-- Top wire -->
  <line x1="40" y1="30" x2="180" y2="30" stroke="#374151" stroke-width="2"/>
  <!-- Bottom wire -->
  <line x1="40" y1="210" x2="180" y2="210" stroke="#374151" stroke-width="2"/>
  <!-- V_in label -->
  <text x="22" y="125" text-anchor="middle" fill="#374151" font-weight="bold" font-size="11">V_in</text>
  <text x="22" y="60" text-anchor="middle" fill="#ef4444" font-size="11">+</text>
  <text x="22" y="195" text-anchor="middle" fill="#3b82f6" font-size="11">−</text>

  <!-- Resistor R1 top -->
  <line x1="180" y1="30" x2="180" y2="75" stroke="#374151" stroke-width="2"/>
  <rect x="160" y="75" width="40" height="50" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="180" y="104" text-anchor="middle" fill="#1d4ed8" font-weight="bold">R₁</text>
  <line x1="180" y1="125" x2="180" y2="155" stroke="#374151" stroke-width="2"/>

  <!-- Resistor R2 bottom -->
  <rect x="160" y="155" width="40" height="50" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="180" y="184" text-anchor="middle" fill="#15803d" font-weight="bold">R₂</text>
  <line x1="180" y1="205" x2="180" y2="210" stroke="#374151" stroke-width="2"/>

  <!-- Output voltage across R2 -->
  <line x1="200" y1="155" x2="240" y2="155" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,2"/>
  <line x1="200" y1="210" x2="240" y2="210" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,2"/>
  <line x1="240" y1="155" x2="240" y2="210" stroke="#64748b" stroke-width="2"/>
  <text x="255" y="186" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="11">V_out</text>

  <!-- Junction dot -->
  <circle cx="180" cy="155" r="4" fill="#374151"/>
</svg>`,
      },
    },
    {
      id: 'h-sensors',
      type: 'heading',
      data: { text: 'Potential Dividers with Sensors', level: 2 },
    },
    {
      id: 'para-sensors',
      type: 'paragraph',
      data: {
        text: 'Replacing R₁ or R₂ with a sensor (LDR or thermistor) creates a circuit where V_out changes automatically with the environment:',
      },
    },
    {
      id: 'table-sensors',
      type: 'comparisonTable',
      data: {
        caption: 'Sensor behaviour in potential divider circuits',
        headers: ['Sensor', 'Resistance changes with...', 'R₁ = sensor, R₂ fixed: V_out when sensor resistance ↑'],
        rows: [
          ['LDR (Light Dependent Resistor)', 'Light intensity: resistance ↓ as light ↑', 'V_out increases (more voltage across fixed R₂)'],
          ['NTC Thermistor', 'Temperature: resistance ↓ as temp ↑', 'V_out increases (more voltage across fixed R₂)'],
        ],
      },
    },
    {
      id: 'para-apps',
      type: 'paragraph',
      data: {
        text: '<strong>Applications:</strong> An LDR in a potential divider can trigger an automatic light switch — when V_out falls below a threshold (e.g. at night when R_LDR is high), a transistor switches on the street light. A thermistor similarly controls a thermostat.',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'R₁ = 4 kΩ, R₂ = 6 kΩ, V_in = 10 V. Find V_out across R₂.\n\nV_out = V_in × R₂/(R₁ + R₂) = 10 × 6/(4+6) = 10 × 0.6 = 6 V',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'V_out is across <strong>R₂ (the bottom resistor)</strong>. If R₂ increases, V_out increases. If R₂ decreases, V_out decreases. Think: "bigger R₂ → bigger share of voltage."',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Potential divider: V_out = V_in × R₂/(R₁+R₂). Replacing R₁ with an LDR or thermistor gives an output voltage that changes with light or temperature.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'V_out = V_in × R₂/(R₁+R₂); LDR/thermistor replaces one resistor to make voltage change with environment.',
    cues: [
      { id: 'cue-1', blockId: 'eq-divider', prompt: 'Write the potential divider equation for V_out.', answer: 'V_out = V_in × R₂/(R₁ + R₂), where R₂ is the lower resistor across which the output is measured.' },
      { id: 'cue-2', blockId: 'call-worked', prompt: 'R₁ = 3 kΩ, R₂ = 7 kΩ, V_in = 5 V. Find V_out.', answer: 'V_out = 5 × 7/(3+7) = 5 × 0.7 = 3.5 V.' },
      { id: 'cue-3', blockId: 'table-sensors', prompt: 'In a potential divider with an LDR as R₁, what happens to V_out as light intensity increases?', answer: 'LDR resistance decreases → less voltage across R₁ → more voltage across R₂ → V_out increases.' },
      { id: 'cue-4', blockId: 'para-apps', prompt: 'How can a potential divider with an LDR be used as an automatic light switch?', answer: 'At night, the LDR resistance is high, making V_out low enough to trigger (via transistor) a relay or LED to switch on.' },
    ],
  },
  evidence: [],
  mentions: [],
};
