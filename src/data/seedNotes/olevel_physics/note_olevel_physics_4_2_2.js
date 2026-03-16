export const note_olevel_physics_4_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-2-3-potential-difference.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define potential difference (voltage), use V = W/Q, and describe how to measure voltage with a voltmeter.' },
    },
    {
      id: 'h-pd',
      type: 'heading',
      data: { text: 'Potential Difference (Voltage)', level: 2 },
    },
    {
      id: 'para-pd',
      type: 'paragraph',
      data: {
        text: '<strong>Potential difference (pd)</strong>, also called <strong>voltage</strong>, is the <em>energy transferred per unit charge</em> as charge passes through a component. It tells you how much electrical energy is converted to other forms (heat, light, sound, etc.) per coulomb of charge.',
      },
    },
    {
      id: 'eq-pd',
      type: 'equation',
      data: {
        html: 'V = <span class="nb-frac"><span class="nb-num">W</span><span class="nb-den">Q</span></span>',
        caption: 'V = potential difference (V), W = energy transferred (J), Q = charge (C)',
      },
    },
    {
      id: 'call-key-volt',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Volt',
        text: '1 volt = 1 joule per coulomb (1 V = 1 J/C). If V = 6 V across a resistor, then 6 J of electrical energy is converted to heat for every coulomb of charge that passes through.',
      },
    },
    {
      id: 'h-voltmeter',
      type: 'heading',
      data: { text: 'Measuring Voltage: Voltmeter', level: 2 },
    },
    {
      id: 'para-voltmeter',
      type: 'paragraph',
      data: {
        text: 'A <strong>voltmeter</strong> measures the potential difference between two points. It must be connected <strong>in parallel</strong> with the component. It must have a very <strong>high resistance</strong> so that negligible current flows through it, otherwise it would change the circuit.',
      },
    },
    {
      id: 'table-ammeter-voltmeter',
      type: 'comparisonTable',
      data: {
        caption: 'Ammeter vs voltmeter connections',
        headers: ['Meter', 'Connection', 'Resistance', 'Why'],
        rows: [
          ['Ammeter', 'In series', 'Very LOW', 'Must not restrict current in circuit'],
          ['Voltmeter', 'In parallel', 'Very HIGH', 'Must not draw significant current from circuit'],
        ],
      },
    },
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Worked Examples', level: 2 },
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Finding Voltage',
        text: 'A charge of 5 C transfers 60 J of energy in a resistor. Find the potential difference.\n\nV = W/Q = 60/5 = 12 V',
      },
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Finding Energy',
        text: 'A 230 V mains socket. A charge of 3 C passes through a toaster. How much energy is transferred?\n\nW = VQ = 230 × 3 = 690 J',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Rearrange V = W/Q in two ways: <strong>W = VQ</strong> (energy transferred) and <strong>Q = W/V</strong> (charge). Learn all three forms.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Potential difference V = W/Q in volts (1 V = 1 J/C). It is the energy transferred per coulomb. A voltmeter connects in parallel with very high resistance.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'V = W/Q; potential difference is energy per charge; voltmeter in parallel with high resistance.',
    cues: [
      { id: 'cue-1', blockId: 'para-pd', prompt: 'Define potential difference.', answer: 'The energy transferred per unit charge as it passes through a component, measured in volts (V).' },
      { id: 'cue-2', blockId: 'eq-pd', prompt: 'State the equation for potential difference.', answer: 'V = W/Q, where V is in volts, W is in joules, and Q is in coulombs.' },
      { id: 'cue-3', blockId: 'para-voltmeter', prompt: 'How should a voltmeter be connected and why?', answer: 'In parallel — so it measures the voltage across the component. It has very high resistance so it takes negligible current.' },
      { id: 'cue-4', blockId: 'call-worked2', prompt: 'A 12 V battery moves 4 C of charge. How much energy is transferred?', answer: 'W = VQ = 12 × 4 = 48 J.' },
    ],
  },
  evidence: [],
  mentions: [],
};
