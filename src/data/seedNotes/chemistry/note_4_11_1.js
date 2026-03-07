/**
 * Seed note: Chemistry · Unit 4 · Topic 11 · Subtopic 1
 * "Half-life analysis"
 */

export const note_chemistry_4_11_1 = {
  blocks: [
    {
      id: 'objective-block',
      type: 'objective',
      data: {
        text: 'Understand the concept of half-life (t½), deduce the order of a reaction from a concentration-time graph, and calculate k using k = ln(2) / t½.'
      },
      terms: []
    },
    // ── HALF LIFE DEFINITION ───────────────────────────────────────────────
    {
      id: 'h-halflife',
      type: 'heading',
      data: { text: 'What is Half-life?', level: 2 },
      terms: []
    },
    {
      id: 'callout-halflife',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Half-life (t½)',
        text: 'The half-life of a reactant is the <strong>time taken</strong> for the concentration of that reactant to fall to exactly half of its original value.'
      },
      terms: ['Half-life']
    },
    {
      id: 'p-halflife-intro',
      type: 'paragraph',
      data: {
        text: 'Half-life is a visual tool used on <strong>Concentration vs Time</strong> graphs. By measuring the time it takes for the concentration to drop from 100% to 50%, and then measuring the time it takes to drop from 50% to 25%, we can easily deduce the order of the reaction.'
      },
      terms: []
    },
    // ── DEDUCING ORDER FROM GRAPHS ─────────────────────────────────────────
    {
      id: 'h-graphs',
      type: 'heading',
      data: { text: 'Deducing Order from Half-life', level: 2 },
      terms: []
    },
    {
      id: 'table-halflife',
      type: 'comparisonTable',
      data: {
        caption: 'Concentration-Time Graph Rules',
        headers: ['Order', 'Shape of [Conc] vs Time Graph', 'Behavior of Half-life (t½)'],
        rows: [
          ['<strong>Zero Order</strong>', 'A straight downward diagonal line.', 'The half-life <strong>decreases</strong> as the reaction proceeds. (The second half-life is shorter than the first).'],
          ['<strong>First Order</strong>', 'A gentle downward curve.', 'The half-life remains exactly <strong>constant</strong>! (It takes the same amount of time to go from 1.0M→0.5M as it does to go from 0.5M→0.25M).'],
          ['<strong>Second Order</strong>', 'A very steep downward curve, leveling out quickly.', 'The half-life <strong>increases</strong> as the reaction proceeds. (The second half-life is twice as long as the first).']
        ]
      },
      terms: []
    },
    {
      id: 'warning-exam',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Exam Proof',
        text: 'If an exam question asks you to prove a reaction is first order from a graph, you MUST read at least <strong>two</strong> separate half-lives from the graph (e.g. at [Conc]/2 and [Conc]/4) and state explicitly: "The first and second half-lives are both [X] minutes. Because the half-life is constant, the reaction is first order."'
      },
      terms: []
    },
    // ── CALCULATING THE RATE CONSTANT ──────────────────────────────────────
    {
      id: 'h-calc',
      type: 'heading',
      data: { text: 'Calculating k from Half-life', level: 2 },
      terms: []
    },
    {
      id: 'p-calc',
      type: 'paragraph',
      data: {
        text: 'For a <strong>first-order reaction only</strong>, because the half-life is perfectly constant, there is a direct mathematical relationship between the half-life (t½) and the rate constant (k).'
      },
      terms: []
    },
    {
      id: 'eq-halflife',
      type: 'equation',
      data: {
        latex: 'k = \\frac{\\ln(2)}{t_{1/2}}',
        caption: 'Equation linking the rate constant (k) to half-life for a first-order reaction.'
      },
      terms: []
    },
    {
      id: 'bloom-calc',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example Calculation',
        text: '<strong>Q:</strong> From a concentration-time graph, the half-life of a first-order reaction is found to be 200 seconds. Calculate the rate constant, k, and state its units.<br/><br/><strong>A:</strong><br/>t½ = 200 s<br/>k = ln(2) / 200<br/>k = 0.693 / 200<br/>k = <strong>3.47 × 10⁻³ s⁻¹</strong>'
      },
      terms: []
    }
  ],
  // ── RECALL CUES ────────────────────────────────────────────────────────
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-halflife',
        prompt: 'Define the term half-life.'
      },
      {
        id: 'cue-2',
        blockId: 'table-halflife',
        prompt: 'You look at a concentration-time graph. The first half-life takes 30 seconds. The second half-life takes 30 seconds. What is the order of the reaction?'
      },
      {
        id: 'cue-3',
        blockId: 'warning-exam',
        prompt: 'How must you prove a reaction is first-order using a concentration-time graph in an exam?'
      },
      {
        id: 'cue-4',
        blockId: 'eq-halflife',
        prompt: 'What mathematical formula links the rate constant (k) to the half-life (t½) for a first-order reaction?'
      }
    ],
    summaryText: 'Half-life is the time taken for concentration to halve. A CONSTANT half-life proves a reaction is first-order. For first-order reactions, k can be calculated using the formula k = ln(2) / t½.',
    ready: false
  },
  evidence: []
};

export default note_chemistry_4_11_1;
