export const note_chemistry_4_13_6 = {
  blocks: [
    {
      id: 'obj-extent',
      type: 'objective',
      data: {
        text: 'Interpret K values to predict the extent of reaction (how far forward or backward it proceeds); determine units of Kc and Kp; apply K values to predict equilibrium position in new scenarios'
      }
    },
    {
      id: 'h-extent-intro',
      type: 'heading',
      data: { text: 'Interpreting K Values: Extent of Reaction', level: 2 }
    },
    {
      id: 'p-extent-intro',
      type: 'paragraph',
      data: {
        text: 'The magnitude of K quantitatively describes how far a reaction proceeds towards products (or remains with reactants) at equilibrium. K >> 1 means the reaction goes virtually to completion, leaving very little reactant unconverted. K << 1 means the reaction barely proceeds, with most reactant remaining. K ≈ 1 means significant amounts of both reactants and products are present at equilibrium.'
      }
    },
    {
      id: 'tbl-extent',
      type: 'comparisonTable',
      data: {
        headers: ['K value', 'Extent of reaction', 'At equilibrium', 'Example'],
        rows: [
          ['K > 10³', 'Essentially complete', 'Almost all products, negligible reactant', 'Strong acid dissociation (very large K)'],
          ['K = 10 to 10³', 'Significant conversion', 'Substantial products and some reactant', 'Weak acid dissociation (moderate K)'],
          ['K ≈ 1', 'Moderate conversion', 'Comparable amounts of reactants and products', 'Esterification (K ≈ 4)'],
          ['K = 10⁻³ to 10⁻¹', 'Limited conversion', 'Mostly reactant with some products', 'Reverse of weak acid dissociation'],
          ['K < 10⁻³', 'Negligible conversion', 'Virtually all reactants, negligible products', 'Reverse of strong acid dissociation']
        ],
        caption: 'Interpretation of K values in terms of extent of reaction'
      }
    },
    {
      id: 'ex-extent-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Esterification Equilibrium',
        text: 'For CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O, Kc ≈ 4. This moderate K indicates that the reaction reaches a compromise: starting with equimolar amounts, roughly 67% of the acid is converted to ester, while 33% remains unreacted. This is why esterification in the lab often requires excess alcohol or product removal to push the equilibrium right.'
      }
    },
    {
      id: 'h-units-determination',
      type: 'heading',
      data: { text: 'Determining Units of K', level: 2 }
    },
    {
      id: 'p-units-intro',
      type: 'paragraph',
      data: {
        text: 'The units of Kc depend on the change in the number of moles in solution: Δn = (stoichiometric coefficients of products) − (stoichiometric coefficients of reactants). The units are (mol dm⁻³)^Δn. For Kp, the units are (atm or Pa)^Δn where Δn is the change in number of moles of gas.'
      }
    },
    {
      id: 'p-delta-n-calc',
      type: 'paragraph',
      data: {
        text: 'For Kc: Δn = (c + d) − (a + b) in the reaction aA + bB ⇌ cC + dD. For Kp: same calculation but using only gaseous species. If Δn = 0, K is dimensionless. If Δn > 0, K has units of (concentration or pressure)^Δn. If Δn < 0, K has units of 1/(concentration or pressure)^|Δn|.'
      }
    },
    {
      id: 'ex-units-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Units of Kc for N₂ + 3H₂ ⇌ 2NH₃',
        text: 'Δn = 2 − (1 + 3) = −2. Units of Kc = (mol dm⁻³)⁻² = mol⁻² dm⁶. Numerically, if Kc = 0.029, we write Kc = 0.029 mol⁻² dm⁶. This tells us that the K value is very small, indicating limited forward reaction at moderate temperatures.'
      }
    },
    {
      id: 'ex-units-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Units of Kc for CH₃COOH ⇌ CH₃COO⁻ + H⁺',
        text: 'Δn = (1 + 1) − 1 = 1. Units of Kc = mol dm⁻³. Since Δn > 0, we often write Kc or Ka with units mol dm⁻³ or mol L⁻¹. For acetic acid, Ka ≈ 1.8 × 10⁻⁵ mol dm⁻³, a small value indicating weak dissociation.'
      }
    },
    {
      id: 'h-unit-rules',
      type: 'heading',
      data: { text: 'Quick Rules for Units', level: 2 }
    },
    {
      id: 'list-unit-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '(products) − (reactants) = Δn. Units = (mol dm⁻³)^Δn or (atm)^Δn',
          'Δn = 0: K is dimensionless (no units)',
          'Δn = 1: K has units mol dm⁻³ or atm',
          'Δn = −1: K has units mol⁻¹ dm³ or atm⁻¹',
          'Δn = −2: K has units mol⁻² dm⁶ or atm⁻²',
          'Check by substituting units into the Kc or Kp expression and verifying cancellation'
        ]
      }
    },
    {
      id: 'h-prediction',
      type: 'heading',
      data: { text: 'Using K to Predict Equilibrium Position in New Scenarios', level: 2 }
    },
    {
      id: 'p-prediction',
      type: 'paragraph',
      data: {
        text: 'Once K is known at a given temperature, it can be used to predict equilibrium position for ANY initial conditions at that temperature. By calculating the reaction quotient Q = ([products]^stoich) / ([reactants]^stoich), you can compare Q to K: if Q < K, the reaction proceeds right (forward); if Q > K, it proceeds left (backward); if Q = K, the system is at equilibrium.'
      }
    },
    {
      id: 'ex-prediction-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Using K to Predict Direction',
        text: 'For N₂ + 3H₂ ⇌ 2NH₃ at 500 K, Kc = 0.029 mol⁻² dm⁶. At time zero: [N₂] = 2.0, [H₂] = 2.0, [NH₃] = 0 mol dm⁻³. Q = (0)² / (2.0 × (2.0)³) = 0. Since Q < K, the reaction proceeds right (forward) until Q = K. This is the basis for predicting spontaneous direction and extent of reaction.'
      }
    },
    {
      id: 'h-comparing-k',
      type: 'heading',
      data: { text: 'Comparing K Values Across Reactions', level: 2 }
    },
    {
      id: 'p-compare',
      type: 'paragraph',
      data: {
        text: 'Be careful when comparing K values from different reactions, especially if they have different units (due to different Δn). A reaction with K = 100 (units mol dm⁻³) is not necessarily more favourable than a reaction with K = 2 (dimensionless); the units must be accounted for. However, if two reactions at the same temperature have the same Δn and similar K values with the same units, the larger K indicates more complete conversion.'
      }
    },
    {
      id: 'p-linked-rxns',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'K for Linked Reactions',
        text: 'If reaction 1: A ⇌ B has K₁, and reaction 2: B ⇌ C has K₂, then the overall reaction A ⇌ C has K_overall = K₁ × K₂. If a reaction is reversed, K_new = 1/K_original. Multiplying reactions multiplies their K values.'
      }
    },
    {
      id: 'checklist-extent',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can interpret K values qualitatively (K >> 1, K << 1, K ≈ 1)', checked: false },
          { text: 'Can calculate Δn for reactions', checked: false },
          { text: 'Can determine units of Kc and Kp correctly', checked: false },
          { text: 'Can use K to predict equilibrium direction (Q vs K comparison)', checked: false },
          { text: 'Understand that K is independent of initial concentrations', checked: false }
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
        text: 'Understand: Large K means products heavily favoured; small K means reactants favoured. The units of K depend on the stoichiometry.\n\nApply: A reaction has Kc = 3.2 × 10⁻⁸. Describe the equilibrium mixture and state whether products or reactants dominate.\n\nAnalyze: If you reverse a reaction, how does the new K relate to the original K? What if you double all coefficients?\n\nEvaluate: Two reactions have K = 10⁶ and K = 10⁻⁶. A student says both are "at equilibrium." Is this correct?'
      },
      terms: []
    },
    {
      id: 'summary-extent',
      type: 'summary',
      data: {
        text: 'K >> 1: reaction essentially complete, products favoured. K << 1: reaction barely proceeds, reactants favoured. K ≈ 1: equilibrium mixture of both. Units of K depend on Δn: (mol dm⁻³)^Δn. Use Q vs K to predict direction. K is constant at a given T for any initial conditions.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-extent-intro',
        prompt: 'What does K >> 1, K << 1, and K ≈ 1 tell you about the extent of reaction?'
      },
      {
        id: 'cue-2',
        blockId: 'p-delta-n-calc',
        prompt: 'How do you calculate Δn and determine the units of Kc?'
      },
      {
        id: 'cue-3',
        blockId: 'ex-units-1',
        prompt: 'For N₂ + 3H₂ ⇌ 2NH₃, calculate Δn and state the units of Kc.'
      },
      {
        id: 'cue-4',
        blockId: 'p-prediction',
        prompt: 'How do you use the reaction quotient Q to predict whether a reaction will proceed forward or backward?'
      },
      {
        id: 'cue-5',
        blockId: 'p-linked-rxns',
        prompt: 'If reaction 1 has K₁ = 4 and reaction 2 (the reverse of reaction 1) starts, what is K₂?'
      }
    ],
    summaryText: 'K >> 1: reaction goes essentially to completion. K << 1: reaction barely proceeds. K ≈ 1: mixed equilibrium. Units = (mol dm⁻³)^Δn where Δn = products − reactants. Use Q vs K to predict direction. K is constant at fixed T.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Extent of Reaction and K Interpretation',
      detail: 'K values quantitatively predict how far a reaction proceeds and extent of conversion.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['equilibrium', 'K', 'extent', 'reaction quotient', 'units']
    }
  ]
};
