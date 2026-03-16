export const note_olevel_physics_4_3_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-3-3-parallel-circuits.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe properties of parallel circuits and solve current, voltage, and resistance problems for parallel arrangements.' },
    },
    {
      id: 'h-parallel',
      type: 'heading',
      data: { text: 'Properties of Parallel Circuits', level: 2 },
    },
    {
      id: 'list-properties',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Multiple paths</strong> — current can flow through any branch independently.' },
          { text: '<strong>Same voltage</strong> across every parallel branch: V₁ = V₂ = V₃ = V_supply.' },
          { text: '<strong>Currents add up</strong> to total current: I_total = I₁ + I₂ + I₃.' },
          { text: '<strong>Total resistance</strong> is less than any individual branch: 1/R_T = 1/R₁ + 1/R₂ + 1/R₃.' },
          { text: '<strong>Fault effect:</strong> if one component fails, others continue to operate independently.' },
        ],
      },
    },
    {
      id: 'h-voltage-same',
      type: 'heading',
      data: { text: 'Why Voltage is the Same Across All Branches', level: 3 },
    },
    {
      id: 'para-voltage-same',
      type: 'paragraph',
      data: {
        text: 'All parallel branches share the same two points (nodes) connected to the supply. By definition, the potential difference between those two points is the same for every branch.',
      },
    },
    {
      id: 'h-current-split',
      type: 'heading',
      data: { text: 'Current Division', level: 3 },
    },
    {
      id: 'para-current-split',
      type: 'paragraph',
      data: {
        text: 'Current splits between branches in inverse proportion to resistance: <strong>lower resistance → more current</strong>. The branch with half the resistance carries twice the current.',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'R₁ = 4 Ω and R₂ = 12 Ω in parallel across a 12 V supply.\n\n1/R_T = 1/4 + 1/12 = 3/12 + 1/12 = 4/12 → R_T = 3 Ω\nI_total = V/R_T = 12/3 = 4 A\nI₁ = V/R₁ = 12/4 = 3 A\nI₂ = V/R₂ = 12/12 = 1 A\nCheck: 3 + 1 = 4 A ✓',
      },
    },
    {
      id: 'h-household',
      type: 'heading',
      data: { text: 'Household Wiring Uses Parallel Circuits', level: 2 },
    },
    {
      id: 'para-household',
      type: 'paragraph',
      data: {
        text: 'All appliances in a home are wired in <strong>parallel</strong>. This means: (1) each appliance receives the full mains voltage (230 V), (2) switching one device off does not affect others, and (3) each device draws the current it needs independently. The total current drawn increases as more devices are switched on.',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When calculating the total current in a parallel circuit, find the current in each branch separately (I = V/R for each), then add them. Don\'t just use the total voltage and total resistance — that gives the same answer but going branch-by-branch avoids mistakes.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Parallel circuit: multiple paths, same voltage across all branches, currents add up, total R is less than smallest branch. Household wiring is parallel for independent operation.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Parallel: same V, I adds up, R_T < smallest R; independent operation; used in household wiring.',
    cues: [
      { id: 'cue-1', blockId: 'list-properties', prompt: 'State three properties of a parallel circuit.', answer: '1. Same voltage across all branches. 2. Total current = sum of branch currents. 3. Total resistance < any single branch resistance.' },
      { id: 'cue-2', blockId: 'para-current-split', prompt: 'In a parallel circuit, which branch carries more current — the one with higher or lower resistance?', answer: 'The branch with lower resistance carries more current (I = V/R; lower R → higher I for same V).' },
      { id: 'cue-3', blockId: 'call-worked', prompt: 'Two 6 Ω resistors are in parallel. Find the total resistance.', answer: '1/R_T = 1/6 + 1/6 = 2/6 → R_T = 3 Ω.' },
      { id: 'cue-4', blockId: 'para-household', prompt: 'Why are household appliances wired in parallel rather than series?', answer: 'Each appliance gets the full mains voltage; they operate independently; switching one off doesn\'t affect the others.' },
    ],
  },
  evidence: [],
  mentions: [],
};
