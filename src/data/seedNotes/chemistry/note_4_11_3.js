export const note_chemistry_4_11_3 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Learn the initial-rate method and continuous monitoring technique to determine orders of reaction from experimental data.' },
      terms: ['initial-rate method', 'continuous monitoring', 'order determination'],
    },
    {
      id: 'h-initial-rate',
      type: 'heading',
      data: { text: 'Initial-Rate Method', level: 2 },
      terms: [],
    },
    {
      id: 'p-initial-rate',
      type: 'paragraph',
      data: { text: 'The initial-rate method measures the rate of reaction at the very start (when [reactants] are at their initial concentrations), before significant change occurs. This allows us to determine the order of reaction experimentally. The procedure is: (1) perform multiple identical experiments, varying the initial concentration of one reactant only; (2) measure the initial rate for each (usually from the gradient of a [A] vs time graph at t=0); (3) compare how the initial rate changes when concentration changes.' },
      terms: ['initial-rate method'],
    },
    {
      id: 'callout-key-initial',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Initial Rate?',
        text: 'We measure the rate at the very start because the order is defined as rate = k[A]^m at any point. By measuring early (before [A] changes much), we capture the rate under defined initial conditions. Later in the reaction, [A] has decreased, complicating the analysis.',
      },
      terms: [],
    },
    {
      id: 'h-procedure',
      type: 'heading',
      data: { text: 'Initial-Rate Experimental Procedure', level: 2 },
      terms: [],
    },
    {
      id: 'p-procedure',
      type: 'paragraph',
      data: { text: 'Setup: prepare a series of reaction vessels, each with the same volume of all reactants except one. Vary the initial concentration of one reactant (e.g., [A]) by factors of 2. Keep all other conditions constant (temperature, volume, other concentrations). Start the reaction and record time taken for a visible change (e.g., colour development, turbidity, gas evolution) or record concentration at short time intervals. Calculate initial rate = Δ[A]/Δt at t ≈ 0.' },
      terms: [],
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Initial-Rate Worked Example',
        text: 'Reaction: A + B → products. Experiments: [A]₀ = 0.1 mol dm⁻³, time to colour = 60 s (rate ∝ 1/60). [A]₀ = 0.2 mol dm⁻³, time = 30 s (rate ∝ 1/30). [A]₀ = 0.4 mol dm⁻³, time = 7.5 s (rate ∝ 1/7.5). Doubling [A] halves time (rate doubles). Tripling [A] triples rate. → Order with respect to A is 1.',
      },
      terms: [],
    },
    {
      id: 'h-continuous',
      type: 'heading',
      data: { text: 'Continuous Monitoring Method', level: 2 },
      terms: [],
    },
    {
      id: 'p-continuous',
      type: 'paragraph',
      data: { text: 'In continuous monitoring, we record concentration (or related property) at regular time intervals throughout the reaction using an instrument (colorimeter, conductivity probe, gas syringe, etc.). This generates a full concentration vs time graph. From this, we can calculate the rate at any point (including the initial rate) by measuring the gradient at that point. We then plot a rate vs [A] graph to determine the order.' },
      terms: ['continuous monitoring'],
    },
    {
      id: 'h-rate-graphs',
      type: 'heading',
      data: { text: 'Plotting Rate vs Concentration Graphs', level: 2 },
      terms: [],
    },
    {
      id: 'p-rate-graphs',
      type: 'paragraph',
      data: { text: 'Once initial rates (or rates at specific [A] values) are determined for different concentrations, we plot rate (y-axis) against [A] (x-axis). The shape of this graph reveals the order: (1) Order 0: horizontal straight line (rate constant, independent of [A]). (2) Order 1: straight line through origin (rate ∝ [A]). (3) Order 2: parabola (rate ∝ [A]²). Alternatively, plotting ln(rate) vs ln([A]) gives a straight line; the gradient is the order.' },
      terms: ['rate vs concentration graph'],
    },
    {
      id: 'table-order-identification',
      type: 'comparisonTable',
      data: {
        headers: ['Order', 'Rate vs [A] graph', 'ln(rate) vs ln([A]) graph', 'Gradient of ln plot'],
        rows: [
          ['0', 'Horizontal line', 'Horizontal line', '0'],
          ['1', 'Straight line through origin', 'Straight line', '1'],
          ['2', 'Parabola (rate ∝ [A]²)', 'Straight line', '2'],
        ],
        caption: 'Identifying order from rate vs concentration plots',
      },
      terms: [],
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Quick Tip: Comparing Initial Rates',
        text: 'If rate₂/rate₁ = ([\A]₂/[A]₁)^m, then m (the order) = log(rate₂/rate₁) / log([A]₂/[A]₁). Example: if doubling [A] triples the rate, m = log(3) / log(2) ≈ 1.58 ≈ 1.5, so order is approximately 1.5.',
      },
      terms: [],
    },
    {
      id: 'h-comparing-methods',
      type: 'heading',
      data: { text: 'Initial-Rate vs Continuous Monitoring', level: 2 },
      terms: [],
    },
    {
      id: 'p-comparing',
      type: 'paragraph',
      data: { text: 'Initial-rate method requires multiple separate experiments but gives precise rates at defined conditions; good for finding order with respect to individual reactants. Continuous monitoring uses one experiment but requires continuous measurement apparatus (colorimeter, probe); gives full reaction progress data. Both can determine order, but initial-rate is more straightforward for order determination, while continuous monitoring is more efficient for data collection.' },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can describe the initial-rate method and why we measure at t≈0', checked: false },
          { text: 'I can design an experiment to vary [A] and measure initial rates', checked: false },
          { text: 'I can interpret rate vs [A] graphs to find the order', checked: false },
          { text: 'I understand continuous monitoring and how to extract initial rates', checked: false },
          { text: 'I can use the formula m = log(rate₂/rate₁) / log([A]₂/[A]₁) to find order', checked: false },
        ],
      },
      terms: [],
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Initial rates avoid complications from reverse reactions and product inhibition. By varying one concentration at a time, you isolate each order.\n\nApply: Given three experiments where doubling [A] quadruples the rate, deduce the order with respect to A.\n\nAnalyze: Why must you keep all other concentrations constant when determining the order of one reactant?\n\nEvaluate: Continuous monitoring gives a full concentration-time curve. Is this always better than the initial-rate method?'
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Initial-rate method: vary one [reactant], measure rate at t≈0, compare rates to find order. Continuous monitoring: record [A] vs time over full reaction, plot rate vs [A]. Both determine order experimentally. Rate vs [A] graph shape or log plot gradient reveals the order.' },
      terms: [],
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-initial-rate', prompt: 'Describe the initial-rate method for determining order of reaction.' },
      { id: 'cue-2', blockId: 'callout-we1', prompt: 'If doubling [A] doubles the rate, what is the order with respect to A?' },
      { id: 'cue-3', blockId: 'p-rate-graphs', prompt: 'What shape is a rate vs [A] graph for order 1 and order 2 reactions?' },
      { id: 'cue-4', blockId: 'callout-tip', prompt: 'How can you calculate order m from initial rates and concentrations?' },
      { id: 'cue-5', blockId: 'p-comparing', prompt: 'Compare the advantages and disadvantages of initial-rate vs continuous monitoring methods.' },
    ],
    summaryText: 'Initial-rate method: vary one [reactant], measure early rate. Continuous monitoring: record [A] vs time. Plot rate vs [A]; shape or slope of ln(rate) vs ln([A]) reveals order. m = log(rate₂/rate₁) / log([A]₂/[A]₁).',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Determining Order of Reaction — Chemguide', detail: 'Detailed explanation of initial-rate and continuous monitoring methods to determine reaction order.', year: '2013', source: 'chemguide.co.uk/physical/basicrates/determineorder.html', tags: ['kinetics', 'order determination', 'initial-rate'] },
  ],
};
