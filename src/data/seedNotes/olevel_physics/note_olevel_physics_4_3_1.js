export const note_olevel_physics_4_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-3-2-series-circuits.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe properties of series circuits and solve problems involving current, voltage, and resistance in series.' },
    },
    {
      id: 'h-series',
      type: 'heading',
      data: { text: 'Properties of Series Circuits', level: 2 },
    },
    {
      id: 'list-properties',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>One path only</strong> — current has only one route through all components.' },
          { text: '<strong>Same current</strong> flows through every component: I₁ = I₂ = I₃ = I.' },
          { text: '<strong>Voltages add up</strong> to the supply (EMF): V₁ + V₂ + V₃ = V_supply.' },
          { text: '<strong>Total resistance</strong> = sum of all resistances: R_T = R₁ + R₂ + R₃.' },
          { text: '<strong>Fault effect:</strong> if one component fails (breaks), the circuit is broken and <em>all</em> components stop working.' },
        ],
      },
    },
    {
      id: 'h-current',
      type: 'heading',
      data: { text: 'Why Current is the Same Everywhere', level: 3 },
    },
    {
      id: 'para-current',
      type: 'paragraph',
      data: {
        text: 'Charge cannot pile up at any point in a series circuit (conservation of charge). Therefore, the same amount of charge per second must pass every point — so current is identical throughout.',
      },
    },
    {
      id: 'h-voltage',
      type: 'heading',
      data: { text: 'Voltage Splitting', level: 3 },
    },
    {
      id: 'para-voltage',
      type: 'paragraph',
      data: {
        text: 'The supply voltage is divided between the series resistors. Each resistor gets a share proportional to its resistance. If R₁ = 2R₂, then V₁ = 2V₂.',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Three resistors R₁ = 2 Ω, R₂ = 3 Ω, R₃ = 5 Ω in series with a 20 V supply.\n\nR_T = 2 + 3 + 5 = 10 Ω\nI = V/R = 20/10 = 2 A\nV₁ = IR₁ = 2 × 2 = 4 V\nV₂ = IR₂ = 2 × 3 = 6 V\nV₃ = IR₃ = 2 × 5 = 10 V\nCheck: 4 + 6 + 10 = 20 V ✓',
      },
    },
    {
      id: 'h-application',
      type: 'heading',
      data: { text: 'Application: Christmas Tree Lights', level: 2 },
    },
    {
      id: 'para-christmas',
      type: 'paragraph',
      data: {
        text: 'Traditional Christmas tree lights are wired in series. This has a major disadvantage: if <strong>one bulb fails</strong> (filament breaks), the circuit is broken and <strong>all bulbs go out</strong>. Modern LED light strings use parallel circuits so one failure does not affect others.',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'In a series circuit, adding more resistors increases the total resistance and decreases the current. Each individual component gets a lower voltage when more resistors are added.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Series circuits: one path, same current throughout, voltages add up to EMF, R_total = sum. Failure of one component stops all. Voltage splits in proportion to resistance.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Series: 1 path, same I everywhere, V₁+V₂=V_supply, R_T=R₁+R₂; one fault stops all.',
    cues: [
      { id: 'cue-1', blockId: 'list-properties', prompt: 'List three key properties of a series circuit.', answer: '1. Same current throughout. 2. Voltages add to supply voltage. 3. R_total = sum of resistances.' },
      { id: 'cue-2', blockId: 'para-current', prompt: 'Why is the current the same at every point in a series circuit?', answer: 'Charge is conserved — it cannot accumulate at any point, so the same charge passes per second at every point.' },
      { id: 'cue-3', blockId: 'call-worked', prompt: 'Two resistors 8 Ω and 2 Ω are in series with a 10 V supply. Find the current and voltage across the 8 Ω resistor.', answer: 'R_T = 10 Ω, I = 1 A, V(8Ω) = 8 V.' },
      { id: 'cue-4', blockId: 'para-christmas', prompt: 'Why do series Christmas lights all go out when one bulb fails?', answer: 'The broken bulb creates a gap in the single path — no current can flow anywhere in the circuit.' },
    ],
  },
  evidence: [],
  mentions: [],
};
