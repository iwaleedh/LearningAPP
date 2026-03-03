export const note_chemistry_4_13_5 = {
  blocks: [
    {
      id: 'obj-entropy',
      type: 'objective',
      data: {
        text: 'Understand the relationship between ΔG°, K, and equilibrium; use ΔG° = −RT ln K to predict spontaneity and equilibrium position; interpret K values in terms of Gibbs free energy'
      }
    },
    {
      id: 'h-gibbs',
      type: 'heading',
      data: { text: 'Gibbs Free Energy and Equilibrium', level: 2 }
    },
    {
      id: 'p-gibbs-intro',
      type: 'paragraph',
      data: {
        text: 'The Gibbs free energy change (ΔG°) determines whether a reaction is thermodynamically feasible. At equilibrium, ΔG° = 0, meaning there is no driving force for further reaction. The relationship between ΔG°, the equilibrium constant K, and absolute temperature T is given by the fundamental equation below.'
      }
    },
    {
      id: 'eq-gibbs-k',
      type: 'equation',
      data: {
        html: 'ΔG° = −RT ln K',
        caption: 'Relationship between ΔG° and K: R = 8.314 J mol⁻¹ K⁻¹, T in Kelvin, ln is natural logarithm'
      }
    },
    {
      id: 'p-derivation',
      type: 'paragraph',
      data: {
        text: 'This equation comes from the thermodynamic relationship ΔG° = ΔH° − TΔS°. At equilibrium, the reaction quotient Q equals K, and the Gibbs free energy under those conditions is zero. The equation shows that K depends on both enthalpy and entropy contributions, through ΔG°.'
      }
    },
    {
      id: 'h-interpretation',
      type: 'heading',
      data: { text: 'Interpreting ΔG° and K Values', level: 2 }
    },
    {
      id: 'p-interp-large',
      type: 'paragraph',
      data: {
        text: 'Large K (K >> 1): ΔG° is very negative, meaning the reaction is thermodynamically very favourable. Products are strongly favoured at equilibrium. Small K (K << 1): ΔG° is very positive, meaning the reaction is thermodynamically unfavourable. Reactants are favoured at equilibrium. K ≈ 1: ΔG° ≈ 0, meaning the reaction is near equilibrium with both reactants and products present.'
      }
    },
    {
      id: 'ex-large-k',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Large K',
        text: 'For a reaction at 298 K with K = 10⁶, ΔG° = −(8.314)(298) ln(10⁶) = −(2477) × (13.82) = −34.2 kJ mol⁻¹. This negative ΔG° indicates a spontaneous reaction with products strongly favoured. Most of the limiting reactant is converted to products.'
      }
    },
    {
      id: 'ex-small-k',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Small K',
        text: 'For a reaction at 298 K with K = 10⁻⁶, ΔG° = −(8.314)(298) ln(10⁻⁶) = −(2477) × (−13.82) = +34.2 kJ mol⁻¹. This positive ΔG° indicates an unfavourable reaction. Reactants are favoured; very little product forms.'
      }
    },
    {
      id: 'h-spontaneity',
      type: 'heading',
      data: { text: 'Predicting Spontaneity from K and ΔG°', level: 2 }
    },
    {
      id: 'p-spontan',
      type: 'paragraph',
      data: {
        text: 'A reaction is spontaneous (thermodynamically favourable) if ΔG° < 0, which corresponds to K > 1. A reaction is non-spontaneous if ΔG° > 0, which corresponds to K < 1. At equilibrium, ΔG° = 0 and K is at its equilibrium value. The larger the magnitude of |ΔG°|, the further K deviates from unity.'
      }
    },
    {
      id: 'tbl-gibbs-k',
      type: 'comparisonTable',
      data: {
        headers: ['ΔG°', 'K value', 'Reaction nature', 'Equilibrium position'],
        rows: [
          ['Very negative (< −20 kJ mol⁻¹)', 'K >> 1 (e.g. 10⁶)', 'Spontaneous, product-favoured', 'Far to the right'],
          ['Slightly negative (−5 to −20 kJ mol⁻¹)', 'K > 1 (e.g. 10 to 10²)', 'Spontaneous, favours products', 'Moderately right'],
          ['≈ 0 (−5 to +5 kJ mol⁻¹)', 'K ≈ 1', 'Near equilibrium', 'Mixture of reactants and products'],
          ['Slightly positive (+5 to +20 kJ mol⁻¹)', 'K < 1 (e.g. 10⁻² to 10⁻¹)', 'Non-spontaneous, favours reactants', 'Moderately left'],
          ['Very positive (> +20 kJ mol⁻¹)', 'K << 1 (e.g. 10⁻⁶)', 'Non-spontaneous, reactant-favoured', 'Far to the left']
        ],
        caption: 'Relationship between ΔG°, K, and equilibrium position'
      }
    },
    {
      id: 'h-temperature-dep',
      type: 'heading',
      data: { text: 'Temperature Dependence of ΔG° and K', level: 2 }
    },
    {
      id: 'p-temp-dep',
      type: 'paragraph',
      data: {
        text: 'From ΔG° = −RT ln K, it is clear that as temperature increases, the value of ΔG° changes. For an exothermic reaction with ΔH° < 0, low temperature makes ΔG° more negative (K increases). For an endothermic reaction with ΔH° > 0, high temperature makes ΔG° more negative (K increases). This is consistent with the entropy-enthalpy balance: ΔG° = ΔH° − TΔS°.'
      }
    },
    {
      id: 'p-combined',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Link Between Enthalpy, Entropy, and K',
        text: 'ΔG° = ΔH° − TΔS°. At low T: ΔH° term dominates; exothermic reactions (ΔH° < 0) favour products. At high T: TΔS° term grows; reactions with ΔS° > 0 favour products. At equilibrium: ΔG° = 0, so ΔH° = TΔS°. The equation ΔG° = −RT ln K quantifies this relationship.'
      }
    },
    {
      id: 'h-calculating-k',
      type: 'heading',
      data: { text: 'Calculating K from ΔG°', level: 2 }
    },
    {
      id: 'p-calc-k',
      type: 'paragraph',
      data: {
        text: 'If ΔG° is known, K can be calculated by rearranging: ln K = −ΔG°/RT, so K = e^(−ΔG°/RT). This allows you to predict the equilibrium constant without measuring concentrations, using purely thermodynamic data.'
      }
    },
    {
      id: 'eq-k-from-gibbs',
      type: 'equation',
      data: {
        html: 'K = e<sup>−ΔG°/RT</sup> &emsp; or &emsp; ln K = <span class="nb-frac"><span class="nb-num">−ΔG°</span><span class="nb-den">RT</span></span>',
        caption: 'Calculating K from ΔG° data'
      }
    },
    {
      id: 'ex-calc-k',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Calculate K from ΔG°',
        text: 'For a reaction with ΔG° = −20 kJ mol⁻¹ = −20,000 J mol⁻¹ at 298 K: ln K = −(−20,000)/(8.314 × 298) = 20,000/2477 = 8.07. So K = e^8.07 ≈ 3200. The positive, large K confirms a product-favoured reaction.'
      }
    },
    {
      id: 'checklist-entropy',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can use ΔG° = −RT ln K equation', checked: false },
          { text: 'Can interpret ΔG° and K values qualitatively', checked: false },
          { text: 'Can predict spontaneity from K (K > 1 is spontaneous)', checked: false },
          { text: 'Can calculate K from ΔG° data', checked: false },
          { text: 'Understand how temperature affects ΔG° and K', checked: false }
        ]
      }
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: ΔG° = −RT ln K links thermodynamics to equilibrium. When ΔG° < 0, K > 1 (products favoured); when ΔG° > 0, K < 1 (reactants favoured).\n\nApply: Calculate K at 298 K for a reaction with ΔG° = −10 kJ mol⁻¹.\n\nAnalyze: Why does ΔG° = 0 correspond to K = 1? What does this mean about the position of equilibrium?\n\nEvaluate: ΔG° predicts the standard equilibrium position. In practice, conditions are rarely standard. How does this limit the usefulness of ΔG°?'
      },
      terms: []
    },
    {
      id: 'summary-entropy',
      type: 'summary',
      data: {
        text: 'ΔG° = −RT ln K links Gibbs free energy to the equilibrium constant. Large K (>> 1) means ΔG° is very negative (spontaneous, products favoured). Small K (<< 1) means ΔG° is very positive (non-spontaneous, reactants favoured). K = e^(−ΔG°/RT) allows calculation from thermodynamic data.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-gibbs-k',
        prompt: 'What is the equation relating ΔG° and K? What are the units of R and T?'
      },
      {
        id: 'cue-2',
        blockId: 'p-interp-large',
        prompt: 'What does a large K value (K >> 1) tell you about ΔG° and the reaction?'
      },
      {
        id: 'cue-3',
        blockId: 'ex-small-k',
        prompt: 'Calculate ΔG° for a reaction with K = 10⁻⁶ at 298 K.'
      },
      {
        id: 'cue-4',
        blockId: 'p-temp-dep',
        prompt: 'Explain how temperature affects ΔG° and K for an exothermic reaction.'
      },
      {
        id: 'cue-5',
        blockId: 'eq-k-from-gibbs',
        prompt: 'Rearrange ΔG° = −RT ln K to solve for K.'
      }
    ],
    summaryText: 'ΔG° = −RT ln K. Large K → very negative ΔG° → spontaneous, products favoured. Small K → very positive ΔG° → non-spontaneous, reactants favoured. K = e^(−ΔG°/RT). Temperature affects both ΔG° and K via entropy and enthalpy.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Gibbs Free Energy and Equilibrium Constant Relationship',
      detail: 'Thermodynamic link between ΔG°, K, and reaction spontaneity.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['equilibrium', 'K', 'ΔG°', 'spontaneity', 'thermodynamics']
    }
  ]
};
