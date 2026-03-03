export const note_chemistry_4_11_6 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand the link between rate equations, reaction mechanisms, rate-determining steps, and molecularity.' },
      terms: ['reaction mechanism', 'rate-determining step', 'molecularity', 'elementary step'],
    },
    {
      id: 'h-mechanism-intro',
      type: 'heading',
      data: { text: 'Reaction Mechanisms', level: 2 },
      terms: [],
    },
    {
      id: 'p-mechanism',
      type: 'paragraph',
      data: { text: 'A reaction mechanism is the sequence of elementary steps (simple reactions at the molecular level) that together make up the overall reaction. The overall equation is the sum of all elementary steps (with intermediates cancelling). The rate equation for the overall reaction is determined by the slowest (rate-determining) step and any fast pre-equilibria.' },
      terms: ['reaction mechanism', 'elementary step'],
    },
    {
      id: 'callout-key-mech',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Concept: Rate-Determining Step',
        text: 'The rate-determining step (RDS) is the slowest elementary step in a mechanism. It controls the overall reaction rate. The rate equation has the form of the RDS (with concentration terms), modified by any pre-equilibrium concentrations needed to eliminate intermediates.',
      },
      terms: ['rate-determining step'],
    },
    {
      id: 'h-molecularity',
      type: 'heading',
      data: { text: 'Molecularity', level: 2 },
      terms: [],
    },
    {
      id: 'p-molecularity',
      type: 'paragraph',
      data: { text: 'Molecularity is the number of molecules (or atoms/ions) that participate in an elementary step. For example: A → products has molecularity 1 (unimolecular). A + B → products has molecularity 2 (bimolecular). A + B + C → products has molecularity 3 (termolecular, rare). The order of an elementary step equals its molecularity (unlike the overall rate equation, where order is experimentally determined).' },
      terms: ['molecularity'],
    },
    {
      id: 'table-molecularity',
      type: 'comparisonTable',
      data: {
        headers: ['Elementary step', 'Molecularity', 'Rate law for this step', 'Example'],
        rows: [
          ['A → products', '1 (unimolecular)', 'rate = k₁[A]', 'Decomposition, isomerization'],
          ['A + B → products', '2 (bimolecular)', 'rate = k₂[A][B]', 'Most reactions'],
          ['2A → products', '2 (bimolecular)', 'rate = k₃[A]²', 'Dimer formation'],
          ['A + B + C → products', '3 (termolecular)', 'rate = k₄[A][B][C]', 'Rare; slow'],
        ],
        caption: 'Molecularity of elementary steps and their rate laws',
      },
      terms: [],
    },
    {
      id: 'h-rds-example',
      type: 'heading',
      data: { text: 'Rate Equation from Rate-Determining Step', level: 2 },
      terms: [],
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 1: Single RDS',
        text: 'Reaction: A + B → C. Proposed mechanism: (Step 1, slow) A + B → C. The RDS is step 1. Rate = k₁[A][B]. Molecularity of RDS = 2. Overall order = 2. This matches if the experimentally determined order is 2.',
      },
      terms: [],
    },
    {
      id: 'h-pre-equilibrium',
      type: 'heading',
      data: { text: 'Pre-Equilibrium and Intermediate Elimination', level: 2 },
      terms: [],
    },
    {
      id: 'p-pre-eq',
      type: 'paragraph',
      data: { text: 'When there are fast steps before the RDS, intermediates are produced and partially consumed. These fast steps establish a pre-equilibrium. The RDS rate law initially involves intermediates (products of fast steps), but we must express these in terms of reactants using the pre-equilibrium constants, to derive the overall rate equation.' },
      terms: ['pre-equilibrium', 'intermediate'],
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 2: RDS with Pre-Equilibrium',
        text: 'Reaction: A + B → C. Proposed mechanism: (Step 1, fast equilibrium) A ⇌ A* (intermediate). (Step 2, slow) A* + B → C. Rate = k₂[A*][B]. From pre-equilibrium of step 1: K₁ = [A*]/[A], so [A*] = K₁[A]. Substituting: rate = k₂K₁[A][B]. Overall: rate = k_overall[A][B], where k_overall = k₂K₁. Order with respect to A and B is 1 each, overall order 2.',
      },
      terms: [],
    },
    {
      id: 'h-sn1-sn2',
      type: 'heading',
      data: { text: 'Example: SN1 vs SN2 Mechanisms', level: 2 },
      terms: [],
    },
    {
      id: 'p-sn1-sn2',
      type: 'paragraph',
      data: { text: 'SN2 (bimolecular nucleophilic substitution): RX + Nu⁻ → RNu + X⁻, single-step mechanism. Molecularity = 2. Rate = k[RX][Nu⁻]. Order = 2. SN1 (unimolecular nucleophilic substitution): (Step 1, slow) RX → R⁺ + X⁻. (Step 2, fast) R⁺ + Nu⁻ → RNu. Rate determined by step 1: rate = k₁[RX]. Order = 1 (independent of [Nu⁻]).' },
      terms: ['SN1', 'SN2', 'mechanism'],
    },
    {
      id: 'table-sn',
      type: 'comparisonTable',
      data: {
        headers: ['Mechanism', 'Steps', 'RDS', 'Rate equation', 'Overall order'],
        rows: [
          ['SN2', 'One step', 'RX + Nu⁻ → RNu + X⁻', 'rate = k[RX][Nu⁻]', '2'],
          ['SN1', 'Two steps: RX → R⁺ (slow), R⁺ + Nu⁻ → RNu (fast)', 'RX ionization', 'rate = k[RX]', '1'],
        ],
        caption: 'Nucleophilic substitution mechanisms and their rate equations',
      },
      terms: [],
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Distinguishing SN1 from SN2',
        text: 'Experimentally, if rate ∝ [RX] only (order 1), mechanism is SN1. If rate ∝ [RX][Nu⁻] (order 2), mechanism is SN2. This shows how rate equations reveal mechanistic details.',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I understand reaction mechanisms and how overall equations sum to cancel intermediates', checked: false },
          { text: 'I can define molecularity and relate it to elementary step rate laws', checked: false },
          { text: 'I know the rate-determining step controls the overall rate', checked: false },
          { text: 'I can derive rate equations from mechanisms using RDS and pre-equilibria', checked: false },
          { text: 'I can explain why SN1 is first-order and SN2 is second-order', checked: false },
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
        text: 'Understand: The rate-determining step (RDS) is the slowest step and controls the overall rate. The rate equation only includes species involved up to and including the RDS.\n\nApply: The rate equation is rate = k[A][B]. Suggest a two-step mechanism consistent with this.\n\nAnalyze: Why does the rate equation for SN1 only include the haloalkane, while SN2 includes both haloalkane and nucleophile?\n\nEvaluate: Can a catalyst appear in the rate equation? Explain with reference to the mechanism.'
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Mechanism = sequence of elementary steps. RDS (slowest step) determines overall rate equation. Molecularity = number of molecules in one step; equals order of that step. Pre-equilibria relate intermediate concentrations to reactant concentrations, giving overall rate equation.' },
      terms: [],
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-mechanism', prompt: 'What is a reaction mechanism, and how do elementary steps relate to the overall equation?' },
      { id: 'cue-2', blockId: 'callout-key-mech', prompt: 'What is the rate-determining step, and how does it control the rate equation?' },
      { id: 'cue-3', blockId: 'p-molecularity', prompt: 'Define molecularity and state how it relates to the rate law of an elementary step.' },
      { id: 'cue-4', blockId: 'callout-we2', prompt: 'Explain how pre-equilibria are used to eliminate intermediates from rate equations.' },
      { id: 'cue-5', blockId: 'p-sn1-sn2', prompt: 'Compare SN1 and SN2 mechanisms: RDS, rate equation, and overall order.' },
    ],
    summaryText: 'Mechanism = elementary steps. RDS (slow step) determines rate. Molecularity = molecules in one step. Pre-equilibrium constants used to eliminate intermediates. SN1: order 1 (RDS: ionization). SN2: order 2 (single step, bimolecular).',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Reaction Mechanisms and Rate Equations — Chemguide', detail: 'Detailed explanation of how mechanisms determine rate equations through RDS and pre-equilibria.', year: '2013', source: 'chemguide.co.uk/physical/basicrates/rds.html', tags: ['kinetics', 'mechanism', 'RDS', 'molecularity'] },
  ],
};
