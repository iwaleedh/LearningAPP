export const note_chemistry_4_11_1 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand half-life in kinetics, particularly for first-order reactions, and interpret graphs of concentration vs time.' },
      terms: ['half-life', 'first-order reaction', 't½'],
    },
    {
      id: 'h-half-life',
      type: 'heading',
      data: { text: 'Half-Life Definition', level: 2 },
      terms: [],
    },
    {
      id: 'p-half-life',
      type: 'paragraph',
      data: { text: 'Half-life (t½) is the time taken for the concentration of a reactant to reduce to half its initial value. For example, if [A]₀ = 0.8 mol dm⁻³ and after 50 seconds [A] = 0.4 mol dm⁻³, then t½ = 50 s. Half-life is characteristic of a reaction and depends on the order of the reaction and the rate constant k.' },
      terms: ['half-life'],
    },
    {
      id: 'h-first-order',
      type: 'heading',
      data: { text: 'First-Order Reactions: Constant Half-Life', level: 2 },
      terms: [],
    },
    {
      id: 'p-first-order',
      type: 'paragraph',
      data: { text: 'For a first-order reaction (rate = k[A]), the half-life is constant and independent of initial concentration. This is a KEY characteristic. If t½ = 10 minutes at [A]₀ = 0.8 mol dm⁻³, then t½ = 10 minutes again when starting from 0.4 mol dm⁻³. The half-life is calculated from: t½ = 0.693/k, where k is in s⁻¹ (or min⁻¹ if time is in minutes).' },
      terms: ['first-order reaction', 'constant half-life'],
    },
    {
      id: 'eq-half-life',
      type: 'equation',
      data: {
        html: 't<sub>½</sub> = <span class="nb-frac"><span class="nb-num">0.693</span><span class="nb-den">k</span></span>',
        caption: 'First-order half-life equation (0.693 = ln 2)',
      },
      terms: [],
    },
    {
      id: 'callout-key-constant',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Constant Half-Life (First-Order Only)',
        text: 'Only first-order reactions have a CONSTANT half-life independent of initial concentration. For zero-order and second-order reactions, t½ depends on initial concentration. This is used to identify first-order reactions from experimental data.',
      },
      terms: ['first-order reaction', 'constant half-life'],
    },
    {
      id: 'h-concentration-graph',
      type: 'heading',
      data: { text: 'Concentration vs Time Graphs', level: 2 },
      terms: [],
    },
    {
      id: 'p-conc-graph',
      type: 'paragraph',
      data: { text: 'A first-order reaction produces an exponential decay curve when plotting [A] against time. The curve is steeper at the beginning (high [A], high rate) and levels off as [A] decreases. The half-life can be identified by marking successive halvings of concentration on the time axis — for first-order, these time intervals are equal.' },
      terms: ['concentration vs time graph'],
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Half-Life Calculation',
        text: 'A first-order decomposition has k = 0.0693 s⁻¹. Calculate t½: t½ = 0.693 / 0.0693 = 10 s. If [A]₀ = 1.0 mol dm⁻³: after 10 s, [A] = 0.5 mol dm⁻³; after 20 s, [A] = 0.25 mol dm⁻³; after 30 s, [A] = 0.125 mol dm⁻³. Each interval of 10 s halves the concentration.',
      },
      terms: [],
    },
    {
      id: 'h-recognise',
      type: 'heading',
      data: { text: 'Recognising First-Order from Data', level: 2 },
      terms: [],
    },
    {
      id: 'p-recognise',
      type: 'paragraph',
      data: { text: 'To identify a first-order reaction from experimental data: (1) Plot [A] vs time and check for an exponential decay curve (not linear). (2) Mark successive halvings of [A] on the time axis. If the time intervals are equal, the reaction is first-order. (3) Calculate k from t½ = 0.693/k and verify by testing the rate equation rate = k[A] with experimental data points.' },
      terms: ['first-order reaction'],
    },
    {
      id: 'table-comparison',
      type: 'comparisonTable',
      data: {
        headers: ['Order', '[A] vs time graph', 'Half-life', 't½ depends on...'],
        rows: [
          ['0', 'Straight line (linear)', 't½ = [A]₀ / 2k', '[A]₀'],
          ['1', 'Exponential decay curve', 't½ = 0.693 / k', 'k only (constant)'],
          ['2', 'Curve, decreasing slope', 't½ = 1 / (k[A]₀)', '[A]₀'],
        ],
        caption: 'Half-life characteristics for different orders',
      },
      terms: [],
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Identifying First-Order',
        text: 'If you see "half-life is constant" or "equal time intervals halve the concentration," immediately think first-order. Conversely, if half-life changes, the reaction is not first-order.',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can define half-life', checked: false },
          { text: 'I understand that first-order half-life is constant', checked: false },
          { text: 'I can calculate t½ using t½ = 0.693/k', checked: false },
          { text: 'I can identify first-order reactions from constant half-life', checked: false },
          { text: 'I can interpret [A] vs time exponential decay curves', checked: false },
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
        text: 'Understand: Half-life is constant for first-order reactions — each successive half-life is the same regardless of initial concentration. This is unique to first-order kinetics.\n\nApply: A first-order reaction has t½ = 40 s. Calculate the fraction remaining after 120 s.\n\nAnalyze: How can you determine reaction order from a concentration-time graph without calculating rates?\n\nEvaluate: Radioactive decay is first-order. Why does this make carbon-14 dating reliable over thousands of years?'
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Half-life is the time for [A] to halve. First-order reactions have constant t½ = 0.693/k, independent of [A]₀. [A] vs time shows exponential decay for first-order. Constant half-life is a diagnostic for first-order kinetics.' },
      terms: [],
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-half-life', prompt: 'What is half-life, and give an example with numbers.' },
      { id: 'cue-2', blockId: 'eq-half-life', prompt: 'Write the equation for half-life in a first-order reaction.' },
      { id: 'cue-3', blockId: 'callout-key-constant', prompt: 'Why is constant half-life a characteristic of first-order reactions only?' },
      { id: 'cue-4', blockId: 'p-recognise', prompt: 'How would you identify a first-order reaction from experimental [A] vs time data?' },
      { id: 'cue-5', blockId: 'callout-we1', prompt: 'If k = 0.0693 s⁻¹ for a first-order reaction, calculate t½ and predict [A] after 20 s if [A]₀ = 1.0 mol dm⁻³.' },
    ],
    summaryText: 't½ = time for [A] to halve; t½ = 0.693/k for first-order; first-order t½ is constant (key identifying feature); [A] vs time is exponential decay curve.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'First-Order Reactions and Half-Life — Chemguide', detail: 'Explanation of half-life in first-order reactions and how to recognize them from graphs.', year: '2013', source: 'chemguide.co.uk/physical/basicrates/firstorder.html', tags: ['kinetics', 'first-order', 'half-life'] },
  ],
};
