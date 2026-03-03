export const note_chemistry_4_11_5 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand how the units of the rate constant k depend on the overall order of the reaction.' },
      terms: ['rate constant units', 'overall order', 'dimensional analysis'],
    },
    {
      id: 'h-units-intro',
      type: 'heading',
      data: { text: 'Units of k and Overall Order', level: 2 },
      terms: [],
    },
    {
      id: 'p-units-intro',
      type: 'paragraph',
      data: { text: 'The units of the rate constant k are determined by rearranging the rate equation k = rate / ([A]^m[B]^n...). Since rate always has units mol dm⁻³ s⁻¹, the units of k depend on the sum of the powers m and n (the overall order). Different overall orders give different units for k.' },
      terms: ['rate constant units', 'overall order'],
    },
    {
      id: 'callout-key-principle',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Fundamental Principle',
        text: 'Units of k = (units of rate) / (units of concentration)^(overall order) = (mol dm⁻³ s⁻¹) / (mol dm⁻³)^n = mol^(1−n) dm^(3n−3) s⁻¹, where n = overall order.',
      },
      terms: [],
    },
    {
      id: 'h-zero-order',
      type: 'heading',
      data: { text: 'Zero-Order Reactions', level: 2 },
      terms: [],
    },
    {
      id: 'p-zero-order',
      type: 'paragraph',
      data: { text: 'For a zero-order reaction: rate = k (no concentration terms). Rearranging: k = rate, so units of k are the same as units of rate: mol dm⁻³ s⁻¹.' },
      terms: ['zero-order reaction'],
    },
    {
      id: 'eq-zero',
      type: 'equation',
      data: {
        html: 'k = rate (units: mol dm<sup>−3</sup> s<sup>−1</sup>)',
        caption: 'Rate constant units for zero-order reaction',
      },
      terms: [],
    },
    {
      id: 'h-first-order',
      type: 'heading',
      data: { text: 'First-Order Reactions', level: 2 },
      terms: [],
    },
    {
      id: 'p-first-order',
      type: 'paragraph',
      data: { text: 'For a first-order reaction: rate = k[A]. Rearranging: k = rate / [A]. Units: k = (mol dm⁻³ s⁻¹) / (mol dm⁻³) = s⁻¹.' },
      terms: ['first-order reaction'],
    },
    {
      id: 'eq-first',
      type: 'equation',
      data: {
        html: 'k = <span class="nb-frac"><span class="nb-num">rate</span><span class="nb-den">[A]</span></span> (units: s<sup>−1</sup>)',
        caption: 'Rate constant units for first-order reaction',
      },
      terms: [],
    },
    {
      id: 'callout-key-first',
      type: 'callout',
      data: {
        style: 'key',
        title: 'First-Order k',
        text: 'For first-order reactions, k has units s⁻¹ (or min⁻¹ if time is in minutes). This is independent of concentration. Recall: for first-order, t½ = 0.693/k (units check: s / s⁻¹ = s ✓).',
      },
      terms: [],
    },
    {
      id: 'h-second-order',
      type: 'heading',
      data: { text: 'Second-Order Reactions', level: 2 },
      terms: [],
    },
    {
      id: 'p-second-order',
      type: 'paragraph',
      data: { text: 'For a second-order reaction (e.g., rate = k[A]² or rate = k[A][B]): k = rate / [A]². Units: k = (mol dm⁻³ s⁻¹) / (mol dm⁻³)² = (mol dm⁻³ s⁻¹) / (mol² dm⁻⁶) = mol⁻¹ dm³ s⁻¹.' },
      terms: ['second-order reaction'],
    },
    {
      id: 'eq-second',
      type: 'equation',
      data: {
        html: 'k = <span class="nb-frac"><span class="nb-num">rate</span><span class="nb-den">[A]<sup>2</sup></span></span> (units: mol<sup>−1</sup> dm<sup>3</sup> s<sup>−1</sup>)',
        caption: 'Rate constant units for second-order reaction',
      },
      terms: [],
    },
    {
      id: 'h-higher-order',
      type: 'heading',
      data: { text: 'Higher Overall Orders', level: 2 },
      terms: [],
    },
    {
      id: 'p-higher',
      type: 'paragraph',
      data: { text: 'For overall order n: k = rate / [A]^n, so units of k = (mol dm⁻³ s⁻¹) / (mol dm⁻³)^n. Simplifying: mol^(1−n) dm^(3n−3) s⁻¹. For order 3: mol⁻² dm⁶ s⁻¹. The pattern: each unit of order adds (mol⁻¹ dm³) to the denominator.' },
      terms: [],
    },
    {
      id: 'table-units',
      type: 'comparisonTable',
      data: {
        headers: ['Overall Order', 'Rate Equation Example', 'Units of k', 'Calculation'],
        rows: [
          ['0', 'rate = k', 'mol dm⁻³ s⁻¹', '(mol dm⁻³ s⁻¹) / 1'],
          ['1', 'rate = k[A]', 's⁻¹ (or min⁻¹)', '(mol dm⁻³ s⁻¹) / (mol dm⁻³)'],
          ['2', 'rate = k[A][B] or k[A]²', 'mol⁻¹ dm³ s⁻¹', '(mol dm⁻³ s⁻¹) / (mol dm⁻³)²'],
          ['3', 'rate = k[A]²[B]', 'mol⁻² dm⁶ s⁻¹', '(mol dm⁻³ s⁻¹) / (mol dm⁻³)³'],
        ],
        caption: 'Units of rate constant k for different overall orders',
      },
      terms: [],
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Units of k',
        text: 'For rate = k[A]²[B] (overall order 3): k = rate / ([A]² × [B]). Units: k = (mol dm⁻³ s⁻¹) / [(mol dm⁻³)² × (mol dm⁻³)] = (mol dm⁻³ s⁻¹) / (mol³ dm⁻⁹) = mol⁻² dm⁶ s⁻¹.',
      },
      terms: [],
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Quick Check',
        text: 'Units of k tell you the order! If given k has units s⁻¹ → first-order. Units mol⁻¹ dm³ s⁻¹ → second-order. Units mol dm⁻³ s⁻¹ → zero-order. This is a useful check when writing rate equations.',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I understand the relationship between k units and overall order', checked: false },
          { text: 'I can state the units of k for order 0, 1, 2, and 3', checked: false },
          { text: 'I can derive k units from a rate equation using dimensional analysis', checked: false },
          { text: 'I can deduce the overall order from the units of k', checked: false },
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
        text: 'Understand: Units of k depend on overall order because k = rate / [A]ⁿ. This dimensional analysis links the rate equation to measurable quantities.\n\nApply: Determine the units of k for a third-order reaction where rate is in mol dm⁻³ s⁻¹.\n\nAnalyze: Why do zero-order and second-order reactions have k with different units? Relate to the rate equation.\n\nEvaluate: If a student reports k without units, why is this a serious error in chemistry?'
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Order 0: k in mol dm⁻³ s⁻¹. Order 1: k in s⁻¹. Order 2: k in mol⁻¹ dm³ s⁻¹. Order 3: k in mol⁻² dm⁶ s⁻¹. General: units k = (mol dm⁻³ s⁻¹) / (mol dm⁻³)^n.' },
      terms: [],
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-principle', prompt: 'State the general formula for units of k in terms of overall order n.' },
      { id: 'cue-2', blockId: 'eq-first', prompt: 'What are the units of k for a first-order reaction?' },
      { id: 'cue-3', blockId: 'eq-second', prompt: 'What are the units of k for a second-order reaction?' },
      { id: 'cue-4', blockId: 'p-higher', prompt: 'Derive the units of k for an overall order of 3.' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'If k has units s⁻¹, what order is the reaction?' },
    ],
    summaryText: 'Order 0 → k: mol dm⁻³ s⁻¹. Order 1 → k: s⁻¹. Order 2 → k: mol⁻¹ dm³ s⁻¹. Order 3 → k: mol⁻² dm⁶ s⁻¹. Formula: units k = (mol dm⁻³ s⁻¹) / (mol dm⁻³)^n.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Units of Rate Constant — Chemguide', detail: 'Explanation of how units of k depend on the overall order of the reaction.', year: '2013', source: 'chemguide.co.uk/physical/basicrates/rateconstantunits.html', tags: ['kinetics', 'rate constant', 'units', 'order'] },
  ],
};
