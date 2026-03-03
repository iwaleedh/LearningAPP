export const note_chemistry_4_11_4 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Learn how to deduce the order of reaction from initial-rate data by comparing how rates change when concentrations are varied.' },
      terms: ['order deduction', 'initial rates', 'concentration variation'],
    },
    {
      id: 'h-comparing-rates',
      type: 'heading',
      data: { text: 'Comparing Initial Rates', level: 2 },
      terms: [],
    },
    {
      id: 'p-comparing',
      type: 'paragraph',
      data: { text: 'To deduce order from initial-rate data, we perform experiments where we vary the initial concentration of one reactant (keeping others constant) and measure how the initial rate changes. By comparing the rate changes to concentration changes, we can determine the order. For example, if doubling [A] doubles the rate, order is 1. If doubling [A] quadruples the rate, order is 2. If rate is unaffected by [A], order is 0.' },
      terms: ['order deduction'],
    },
    {
      id: 'h-doubling-effect',
      type: 'heading',
      data: { text: 'Doubling Concentration Effect Table', level: 2 },
      terms: [],
    },
    {
      id: 'table-doubling',
      type: 'comparisonTable',
      data: {
        headers: ['Order', 'When [A] doubles', 'Effect on rate', 'Calculation'],
        rows: [
          ['0', '[A] → 2[A]', 'No change (rate stays same)', 'rate = k (no [A] term)'],
          ['1', '[A] → 2[A]', 'Rate × 2', 'rate = k(2[A]) = 2k[A]'],
          ['2', '[A] → 2[A]', 'Rate × 4 (= 2²)', 'rate = k(2[A])² = 4k[A]²'],
          ['1.5 (e.g.)', '[A] → 2[A]', 'Rate × 2^1.5 ≈ 2.83', 'rate = k(2[A])^1.5 = 2^1.5 × k[A]^1.5'],
        ],
        caption: 'Effect on rate when concentration is doubled, for different orders',
      },
      terms: [],
    },
    {
      id: 'callout-key-pattern',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Pattern',
        text: 'If [A] is multiplied by a factor f, the rate is multiplied by f^m, where m is the order. For example: [A] × 3 → rate × 3^m. [A] × 2 → rate × 2^m. This is the key to deducing order from concentration and rate comparisons.',
      },
      terms: [],
    },
    {
      id: 'h-worked-ex1',
      type: 'heading',
      data: { text: 'Worked Example 1: Finding Order from Doubling', level: 2 },
      terms: [],
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Order with respect to A',
        text: 'Experiments for reaction A + B → products: (1) [A]₀ = 0.10 mol dm⁻³, [B]₀ = 0.20 mol dm⁻³, initial rate = 0.008 mol dm⁻³ s⁻¹. (2) [A]₀ = 0.20 mol dm⁻³, [B]₀ = 0.20 mol dm⁻³, initial rate = 0.032 mol dm⁻³ s⁻¹. [A] doubled, [B] constant. Rate changed from 0.008 to 0.032: factor = 0.032/0.008 = 4 = 2². Therefore, order with respect to A is 2.',
      },
      terms: [],
    },
    {
      id: 'h-worked-ex2',
      type: 'heading',
      data: { text: 'Worked Example 2: Finding Overall Order', level: 2 },
      terms: [],
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Order with respect to B',
        text: 'Using same reaction. From Expt 1: [B]₀ = 0.20, rate = 0.008. New expt: [A]₀ = 0.10, [B]₀ = 0.40, rate = 0.016. [B] doubled, [A] constant. Rate doubled: factor = 2 = 2¹. Order with respect to B is 1. Overall order = 2 + 1 = 3. Rate equation: rate = k[A]²[B].',
      },
      terms: [],
    },
    {
      id: 'h-step-by-step',
      type: 'heading',
      data: { text: 'Step-by-Step Procedure', level: 2 },
      terms: [],
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'From initial-rate data, select two experiments that differ in the concentration of only one reactant.',
          'Calculate the factor by which that concentration changed: factor = [A]₂ / [A]₁.',
          'Calculate the factor by which the rate changed: factor = rate₂ / rate₁.',
          'Use: rate factor = (concentration factor)^m, so m = log(rate factor) / log(concentration factor).',
          'Repeat for each reactant to find all individual orders.',
          'Sum all orders to find overall order.',
          'Write the rate equation: rate = k[A]^m[B]^n...',
        ],
      },
      terms: [],
    },
    {
      id: 'callout-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Formula',
        text: 'Order m = log(rate₂/rate₁) / log([A]₂/[A]₁). Alternatively, if concentration doubles: order m such that 2^m = rate factor.',
      },
      terms: [],
    },
    {
      id: 'h-table-example',
      type: 'heading',
      data: { text: 'Full Data Analysis Table', level: 2 },
      terms: [],
    },
    {
      id: 'table-analysis',
      type: 'comparisonTable',
      data: {
        headers: ['Expt', '[A] / mol dm⁻³', '[B] / mol dm⁻³', 'Initial rate / mol dm⁻³ s⁻¹'],
        rows: [
          ['1', '0.10', '0.10', '0.001'],
          ['2', '0.20', '0.10', '0.004'],
          ['3', '0.10', '0.20', '0.002'],
        ],
        caption: 'Example initial-rate data for order deduction',
      },
      terms: [],
    },
    {
      id: 'p-analysis',
      type: 'paragraph',
      data: { text: 'Analysis of table above: (1) Expt 1 → 2: [A] × 2, [B] constant. Rate × 4. Order w.r.t. A = 2. (2) Expt 1 → 3: [A] constant, [B] × 2. Rate × 2. Order w.r.t. B = 1. Overall order = 3. Rate equation: rate = k[A]²[B].' },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I understand the principle that rate ∝ (concentration)^m', checked: false },
          { text: 'I can use doubling tables to find order quickly', checked: false },
          { text: 'I can apply the formula m = log(rate₂/rate₁) / log([A]₂/[A]₁)', checked: false },
          { text: 'I can find the order with respect to each reactant from data', checked: false },
          { text: 'I can write the complete rate equation and find overall order', checked: false },
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
        text: 'Understand: Comparing ratios of rate change to concentration change reveals the order. If rate doubles when concentration doubles, order = 1; if rate quadruples, order = 2.\n\nApply: Three experiments give rates 2.0, 8.0, and 2.0 × 10⁻³ when [X] = 0.1, 0.2, 0.1 and [Y] = 0.1, 0.1, 0.2. Deduce orders.\n\nAnalyze: What happens if two concentrations change simultaneously? Can you still deduce orders?\n\nEvaluate: Experimental errors in rate measurements can lead to non-integer orders. How should you handle this?'
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Deducing order: compare initial rates for different concentrations. Rate factor = (concentration factor)^m. If [A] doubles and rate × 4, order = 2. If [A] × 3 and rate × 9, order = 2. Use m = log(rate₂/rate₁) / log([A]₂/[A]₁).' },
      terms: [],
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-pattern', prompt: 'If [A] is multiplied by factor f, by what factor does the rate change for order m?' },
      { id: 'cue-2', blockId: 'table-doubling', prompt: 'If [A] doubles, by what factor does the rate change for order 0, 1, and 2?' },
      { id: 'cue-3', blockId: 'callout-we1', prompt: 'In a worked example, [A] doubled and rate × 4. What is the order with respect to A?' },
      { id: 'cue-4', blockId: 'callout-formula', prompt: 'Write the formula relating order m to rate and concentration factors.' },
      { id: 'cue-5', blockId: 'list-steps', prompt: 'Outline the step-by-step procedure to deduce order from initial-rate data.' },
    ],
    summaryText: 'Rate factor = (concentration factor)^m. If [A] doubles: order 0 → rate same; order 1 → rate × 2; order 2 → rate × 4. Formula: m = log(rate₂/rate₁) / log([A]₂/[A]₁).',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Deducing Orders from Rate Data — Chemguide', detail: 'Step-by-step guide to determining reaction order from experimental initial-rate measurements.', year: '2013', source: 'chemguide.co.uk/physical/basicrates/determineorder.html', tags: ['kinetics', 'order', 'rate data'] },
  ],
};
