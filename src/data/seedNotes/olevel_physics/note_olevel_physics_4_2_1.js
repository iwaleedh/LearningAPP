export const note_olevel_physics_4_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-2-2-electromotive-force.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define electromotive force (EMF), distinguish it from terminal voltage, and apply V = ε − Ir for circuits with internal resistance.' },
    },
    {
      id: 'h-emf',
      type: 'heading',
      data: { text: 'Electromotive Force (EMF)', level: 2 },
    },
    {
      id: 'para-emf',
      type: 'paragraph',
      data: {
        text: '<strong>Electromotive force (EMF, symbol ε)</strong> is the <em>energy supplied per unit charge</em> by a source such as a battery, generator, or solar cell. It is measured in <strong>volts (V)</strong>, where 1 V = 1 J/C.',
      },
    },
    {
      id: 'eq-emf',
      type: 'equation',
      data: {
        html: 'ε = <span class="nb-frac"><span class="nb-num">W</span><span class="nb-den">Q</span></span>',
        caption: 'ε = EMF (V), W = energy supplied (J), Q = charge (C)',
      },
    },
    {
      id: 'call-key-emf',
      type: 'callout',
      data: {
        style: 'key',
        title: 'EMF is an Energy Supply',
        text: 'EMF is <em>not</em> a force — it is the <strong>energy transferred to each coulomb of charge</strong> by the source. A 12 V battery gives 12 joules to every coulomb passing through it.',
      },
    },
    {
      id: 'h-internal',
      type: 'heading',
      data: { text: 'Internal Resistance', level: 2 },
    },
    {
      id: 'para-internal',
      type: 'paragraph',
      data: {
        text: 'Every real battery has an <strong>internal resistance (<em>r</em>)</strong> due to the resistance of the chemicals inside it. When current flows, some energy is "wasted" as heat inside the battery, so the <strong>terminal voltage</strong> (voltage available to the external circuit) is less than the EMF.',
      },
    },
    {
      id: 'eq-terminal',
      type: 'equation',
      data: {
        html: 'V = ε − Ir',
        caption: 'V = terminal voltage (V), ε = EMF (V), I = current (A), r = internal resistance (Ω)',
      },
    },
    {
      id: 'para-terminal-explain',
      type: 'paragraph',
      data: {
        text: 'The term <em>Ir</em> is the <strong>voltage drop</strong> (or "lost volts") across the internal resistance. As current increases (e.g. when connecting a lower external resistance), the terminal voltage drops more.',
      },
    },
    {
      id: 'h-emf-vs-pd',
      type: 'heading',
      data: { text: 'EMF vs Potential Difference (pd)', level: 2 },
    },
    {
      id: 'table-emf-pd',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of EMF and potential difference',
        headers: ['Property', 'EMF (ε)', 'Potential Difference (V)'],
        rows: [
          ['Definition', 'Energy supplied per unit charge by source', 'Energy transferred per unit charge by component'],
          ['Source', 'Battery, generator, solar cell', 'Resistor, lamp, motor'],
          ['Energy', 'Electrical energy is <em>created</em>', 'Electrical energy is <em>used</em>'],
          ['Measurement', 'Across terminals with no load (open circuit)', 'Across a component in circuit'],
          ['Relationship', 'ε = V + Ir', 'V = IR'],
        ],
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A battery has EMF = 9 V and internal resistance r = 1 Ω. When connected to an external resistor, current I = 2 A flows.\n\nTerminal voltage V = ε − Ir = 9 − (2 × 1) = 9 − 2 = 7 V\n\nThe external circuit receives 7 V; 2 V is lost inside the battery.',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When no current flows (open circuit), terminal voltage = EMF. A voltmeter across an open-circuit battery reads its EMF. Terminal voltage is always <em>less than or equal to</em> EMF.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'EMF = energy supplied per coulomb (J/C = V). Terminal voltage V = ε − Ir, where Ir is lost volts inside the battery. EMF > terminal voltage whenever current flows.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'EMF: energy per charge from source. Terminal voltage = EMF − voltage drop inside battery (V = ε − Ir).',
    cues: [
      { id: 'cue-1', blockId: 'para-emf', prompt: 'Define electromotive force (EMF).', answer: 'EMF is the energy supplied per unit charge by a source, measured in volts (1 V = 1 J/C).' },
      { id: 'cue-2', blockId: 'eq-terminal', prompt: 'Write the equation connecting terminal voltage, EMF, and internal resistance.', answer: 'V = ε − Ir, where V is terminal voltage, ε is EMF, I is current, and r is internal resistance.' },
      { id: 'cue-3', blockId: 'table-emf-pd', prompt: 'What is the key difference between EMF and potential difference?', answer: 'EMF is energy supplied per charge by a source; pd is energy transferred per charge by a component. EMF creates electrical energy; pd converts it.' },
      { id: 'cue-4', blockId: 'call-worked', prompt: 'A battery (ε = 6 V, r = 0.5 Ω) drives a current of 4 A. Find the terminal voltage.', answer: 'V = ε − Ir = 6 − (4 × 0.5) = 6 − 2 = 4 V.' },
    ],
  },
  evidence: [],
  mentions: [],
};
