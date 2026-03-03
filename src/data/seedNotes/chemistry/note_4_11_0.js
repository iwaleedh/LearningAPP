export const note_chemistry_4_11_0 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand rate equations, orders of reaction, and the rate constant k.' },
      terms: ['rate equation', 'order of reaction', 'rate constant'],
    },
    {
      id: 'h-rate-eq',
      type: 'heading',
      data: { text: 'Rate Equations', level: 2 },
      terms: [],
    },
    {
      id: 'p-rate-eq',
      type: 'paragraph',
      data: { text: 'A rate equation (or rate law) shows how the rate of a reaction depends on the concentrations of reactants. For a reaction between A and B: rate = k[A]<sup>m</sup>[B]<sup>n</sup>, where m and n are the orders of reaction with respect to A and B, and k is the rate constant. The rate has units of mol dm⁻³ s⁻¹.' },
      terms: ['rate equation', 'rate constant'],
    },
    {
      id: 'eq-rate',
      type: 'equation',
      data: {
        html: 'rate = k[A]<sup>m</sup>[B]<sup>n</sup>',
        caption: 'General rate equation: m and n are experimentally determined orders',
      },
      terms: [],
    },
    {
      id: 'h-order',
      type: 'heading',
      data: { text: 'Order of Reaction', level: 2 },
      terms: [],
    },
    {
      id: 'p-order',
      type: 'paragraph',
      data: { text: 'The order of reaction with respect to a reactant is the power to which its concentration is raised in the rate equation. For example, if rate = k[A]²[B], the order with respect to A is 2, with respect to B is 1, and the overall order is 2 + 1 = 3. Orders are ALWAYS determined experimentally from rate data — never from the chemical equation.' },
      terms: ['order of reaction', 'overall order'],
    },
    {
      id: 'callout-key-order',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Order Definitions',
        text: 'Order 0: rate is independent of concentration; doubling [A] has no effect on rate. Order 1: rate ∝ [A]; doubling [A] doubles the rate. Order 2: rate ∝ [A]²; doubling [A] quadruples the rate.',
      },
      terms: ['order of reaction'],
    },
    {
      id: 'table-orders',
      type: 'comparisonTable',
      data: {
        headers: ['Order', 'Rate Law (single reactant)', 'Effect of doubling [A]', 'Graph (ln rate vs ln [A])'],
        rows: [
          ['0', 'rate = k', 'No change', 'Horizontal line, slope = 0'],
          ['1', 'rate = k[A]', 'Rate × 2', 'Straight line, slope = 1'],
          ['2', 'rate = k[A]²', 'Rate × 4', 'Straight line, slope = 2'],
        ],
        caption: 'Summary of orders of reaction and their effects',
      },
      terms: [],
    },
    {
      id: 'h-overall',
      type: 'heading',
      data: { text: 'Overall Order', level: 2 },
      terms: [],
    },
    {
      id: 'p-overall',
      type: 'paragraph',
      data: { text: 'The overall order is the sum of all individual orders. For rate = k[A]²[B][C]⁰·⁵, the overall order = 2 + 1 + 0.5 = 3.5. The overall order determines the units of the rate constant k (see later notes).' },
      terms: ['overall order'],
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Rate Equation',
        text: 'The reaction A + B → C has rate = k[A][B]². (a) Find the order with respect to A (answer: 1) and B (answer: 2). (b) Calculate overall order: 1 + 2 = 3. (c) If [A] doubles while [B] stays constant, rate increases by factor 2 × 1 = 2.',
      },
      terms: [],
    },
    {
      id: 'h-rate-const',
      type: 'heading',
      data: { text: 'Rate Constant k', level: 2 },
      terms: [],
    },
    {
      id: 'p-rate-const',
      type: 'paragraph',
      data: { text: 'The rate constant k is a proportionality constant that links the rate to concentrations. Its value depends on temperature — higher temperature → larger k → faster reaction. k is independent of reactant concentrations. The units of k depend on the overall order of the reaction, as covered in later subtopic notes.' },
      terms: ['rate constant'],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can write a rate equation from experimental data', checked: false },
          { text: 'I can state what order 0, 1, 2 means and their effects', checked: false },
          { text: 'I can calculate overall order from individual orders', checked: false },
          { text: 'I understand that orders are experimentally determined, not from equations', checked: false },
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
        text: 'Understand: Rate equations show how concentration affects rate. Order tells you the power to which concentration is raised — it is found experimentally, NOT from the balanced equation.\n\nApply: For rate = k[A]²[B], calculate the new rate if [A] doubles and [B] halves.\n\nAnalyze: Why can the order of a reactant be zero? What does this tell you about the mechanism?\n\nEvaluate: A student claims "doubling all concentrations always doubles the rate." Assess this for a second-order reaction.'
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Rate equations show rate = k[A]^m[B]^n. Orders m and n are experimentally determined. Overall order = sum of all orders. Units of rate are mol dm⁻³ s⁻¹. Rate constant k depends on temperature only.' },
      terms: [],
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-rate', prompt: 'Write the general form of a rate equation for reactants A and B.' },
      { id: 'cue-2', blockId: 'callout-key-order', prompt: 'What does order 1 mean, and how does doubling concentration affect the rate?' },
      { id: 'cue-3', blockId: 'p-order', prompt: 'How are orders of reaction determined?' },
      { id: 'cue-4', blockId: 'p-overall', prompt: 'For rate = k[A]²[B], what is the overall order?' },
      { id: 'cue-5', blockId: 'p-rate-const', prompt: 'What is the effect of temperature on the rate constant k?' },
    ],
    summaryText: 'rate = k[A]^m[B]^n; orders are experimentally determined; overall order = sum of all orders; k is independent of concentration but depends on temperature.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Rate Equations and Order — Chemguide', detail: 'Comprehensive explanation of rate equations, orders of reaction, and rate constants.', year: '2013', source: 'chemguide.co.uk/physical/basicrates/orders.html', tags: ['kinetics', 'rate equation', 'order'] },
  ],
};
