/**
 * Seed note: Chemistry · Unit 4 · Topic 11 · Subtopic 3
 * "Initial-rate and continuous monitoring"
 */

export const note_chemistry_4_11_3 = {
  blocks: [
    {
      id: 'objective-block',
      type: 'objective',
      data: {
        text: 'Contrast the initial rates method (e.g., iodine clock) with continuous monitoring methods.'
      },
      terms: []
    },
    // ── WHY INITIAL RATES? ─────────────────────────────────────────────────
    {
      id: 'h-initial',
      type: 'heading',
      data: { text: 'The "Initial Rates" Method', level: 2 },
      terms: []
    },
    {
      id: 'p-why-initial',
      type: 'paragraph',
      data: {
        text: 'As a reaction progresses, the concentration of the reactants constantly drops, which means the rate of reaction constantly slows down. To determine how the concentration of a specific reactant affects the rate, it is much easier to measure the rate accurately at the <em>exact moment the reaction begins</em> (at t=0, when the concentrations are exactly known and maximal). This is the <strong>Initial Rate</strong> method.'
      },
      terms: ['Initial rate']
    },
    // ── CLOCK REACTIONS ─────────────────────────────────────────────────────
    {
      id: 'h-clock',
      type: 'heading',
      data: { text: 'Clock Reactions', level: 2 },
      terms: []
    },
    {
      id: 'p-clock',
      type: 'paragraph',
      data: {
        text: 'A "clock reaction" is a classic way to measure the initial rate. In a clock reaction, you measure the time (t) it takes for a visually obvious change to occur (usually a sudden colour change). <br/><br/>If the amount of product needed to cause the colour change is kept very small and constant, we can make an important assumption: the initial rate is <strong>inversely proportional to the time taken</strong>.'
      },
      terms: []
    },
    {
      id: 'eq-clock',
      type: 'equation',
      data: {
        latex: '\\text{Initial Rate} \\propto \\frac{1}{t}',
        caption: 'The fundamental mathematical assumption of a clock reaction.'
      },
      terms: []
    },
    {
      id: 'list-iodine',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          '<strong>The Iodine Clock Reaction:</strong> Iodine (I₂) is produced in the main reaction.',
          'A small, known amount of sodium thiosulfate (Na₂S₂O₃) is added to the mixture along with starch indicator.',
          'As soon as any I₂ is produced, the thiosulfate reacts with it instantly, turning it back into colourless I⁻.',
          'When all the thiosulfate is finally used up, the I₂ survives. It instantly reacts with the starch, turning the solution <strong>blue-black</strong>.',
          'The time taken for the blue-black colour to appear is recorded.'
        ]
      },
      terms: ['Sodium thiosulfate', 'Starch indicator']
    },
    // ── CONTINUOUS VS INITIAL ──────────────────────────────────────────────
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Continuous Monitoring vs. Initial Rates', level: 2 },
      terms: []
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Comparing Rate Investigation Methods',
        headers: ['Feature', 'Continuous Monitoring', 'Initial Rates (Clock Reaction)'],
        rows: [
          ['<strong>How is it done?</strong>', 'Follow one complete reaction from start to finish. Measure concentration repeatedly at regular time intervals.', 'Perform multiple separate experiments, changing the starting concentration of one reactant each time. Only measure the rate at the very start.'],
          ['<strong>How is Order found?</strong>', 'Plot a Concentration vs Time graph. Look at the shape of the curve or examine the half-life.', 'Plot an Initial Rate vs Concentration graph. If the line is horizontal (Order 0), diagonal straight (Order 1), or a parabola (Order 2).'],
          ['<strong>Advantage</strong>', 'Requires only one experiment to gather all the data needed.', 'Excellent for complex reactions involving multiple reactants, as you can isolate the effect of one reactant at a time.']
        ]
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
        blockId: 'p-why-initial',
        prompt: 'Why is it often advantageous to measure the "initial rate" rather than the average rate of a reaction?'
      },
      {
        id: 'cue-2',
        blockId: 'eq-clock',
        prompt: 'Write the proportionality statement used to calculate the comparative initial rate in a clock reaction.'
      },
      {
        id: 'cue-3',
        blockId: 'list-iodine',
        prompt: 'In the Iodine Clock reaction, what is the specific chemical purpose of adding a small amount of Sodium Thiosulfate?'
      },
      {
        id: 'cue-4',
        blockId: 'table-compare',
        prompt: 'Contrast the graphing method used to deduce the order of reaction in continuous monitoring vs initial rates.'
      }
    ],
    summaryText: 'Initial rates are measured at t=0 when reactant concentrations are exactly known. Clock reactions (like the iodine clock) use a visual change to measure the time (t) taken for a small amount of product to form, assuming Initial Rate ∝ 1/t. Sodium thiosulfate delays the starch colour change until a specific amount of I₂ has formed.',
    ready: false
  },
  evidence: []
};

export default note_chemistry_4_11_3;
