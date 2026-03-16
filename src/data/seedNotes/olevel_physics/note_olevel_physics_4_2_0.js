export const note_olevel_physics_4_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-2-1-current.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define electric current, use I = Q/t, and distinguish conventional current from electron flow.' },
    },
    {
      id: 'h-current',
      type: 'heading',
      data: { text: 'Electric Current', level: 2 },
    },
    {
      id: 'para-current',
      type: 'paragraph',
      data: {
        text: '<strong>Electric current</strong> is the rate of flow of electric charge. In metal conductors, current is due to the flow of free <strong>electrons</strong>. In electrolytes and ionised gases, current is carried by positive and negative <strong>ions</strong>.',
      },
    },
    {
      id: 'eq-current',
      type: 'equation',
      data: {
        html: 'I = <span class="nb-frac"><span class="nb-num">Q</span><span class="nb-den">t</span></span>',
        caption: 'I = current (A), Q = charge (C), t = time (s)',
      },
    },
    {
      id: 'call-key-current',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Ampere',
        text: 'The SI unit of current is the <strong>ampere (A)</strong>. 1 A = 1 coulomb per second. Charge Q is measured in coulombs (C). Rearranging: <strong>Q = It</strong> and <strong>t = Q/I</strong>.',
      },
    },
    {
      id: 'h-conventional',
      type: 'heading',
      data: { text: 'Conventional Current vs Electron Flow', level: 2 },
    },
    {
      id: 'para-conventional',
      type: 'paragraph',
      data: {
        text: '<strong>Conventional current</strong> was defined before electrons were discovered — it was assumed positive charges flow from the <strong>positive terminal to the negative terminal</strong> of a battery. In reality, electrons (negative) move from the <strong>negative terminal to the positive terminal</strong>. Both descriptions are valid; always use conventional current in circuit diagrams.',
      },
    },
    {
      id: 'table-current',
      type: 'comparisonTable',
      data: {
        caption: 'Conventional current vs electron flow',
        headers: ['Property', 'Conventional Current', 'Electron Flow'],
        rows: [
          ['Particle', 'Positive charge (conceptual)', 'Electron (e⁻)'],
          ['Direction', '+ terminal → − terminal (external)', '− terminal → + terminal (external)'],
          ['Used in', 'All circuit diagrams, calculations', 'Explanation of physical mechanism'],
        ],
      },
    },
    {
      id: 'h-ammeter',
      type: 'heading',
      data: { text: 'Measuring Current: Ammeter', level: 2 },
    },
    {
      id: 'para-ammeter',
      type: 'paragraph',
      data: {
        text: 'An <strong>ammeter</strong> measures current and must be connected <strong>in series</strong> with the component being measured. It has a very low resistance so it does not significantly change the current in the circuit.',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A charge of 120 C flows through a lamp in 4 minutes. Calculate the current.\n\nt = 4 × 60 = 240 s\nI = Q/t = 120/240 = 0.5 A',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always convert time to <strong>seconds</strong> before using I = Q/t. A common mistake is using minutes directly.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Current I = Q/t in amperes. In metals, electrons are the charge carriers flowing from − to +. Conventional current flows + to −. An ammeter is placed in series with very low resistance.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'I = Q/t; electrons flow − to +; conventional current flows + to −; ammeter in series.',
    cues: [
      { id: 'cue-1', blockId: 'eq-current', prompt: 'Write the equation relating current, charge and time.', answer: 'I = Q/t, where I is in amperes (A), Q in coulombs (C), and t in seconds (s).' },
      { id: 'cue-2', blockId: 'para-conventional', prompt: 'Which direction do electrons actually flow in a metal conductor?', answer: 'From the negative terminal to the positive terminal — opposite to conventional current.' },
      { id: 'cue-3', blockId: 'para-ammeter', prompt: 'How should an ammeter be connected and why?', answer: 'In series, because it must be in the same path as the current; it has very low resistance so it does not affect the circuit.' },
      { id: 'cue-4', blockId: 'call-worked', prompt: 'A charge of 90 C flows in 30 s. What is the current?', answer: 'I = Q/t = 90/30 = 3 A.' },
    ],
  },
  evidence: [],
  mentions: [],
};
