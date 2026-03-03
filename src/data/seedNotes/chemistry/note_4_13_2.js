export const note_chemistry_4_13_2 = {
  blocks: [
    {
      id: 'obj-calc',
      type: 'objective',
      data: {
        text: 'Calculate equilibrium constants from equilibrium concentrations using ICE tables; interpret Kc values; solve worked problems involving Kc calculations'
      }
    },
    {
      id: 'h-ice',
      type: 'heading',
      data: { text: 'ICE Tables: Setting Up the Calculation', level: 2 }
    },
    {
      id: 'p-ice-intro',
      type: 'paragraph',
      data: {
        text: 'To calculate Kc, you need the equilibrium concentrations of all species. If you are given initial concentrations and the change in concentration for one species, use an ICE table (Initial, Change, Equilibrium) to find all equilibrium concentrations, then substitute into the Kc expression.'
      }
    },
    {
      id: 'p-ice-steps',
      type: 'paragraph',
      data: {
        text: 'ICE table steps: (1) Write the balanced equation and stoichiometric coefficients. (2) List initial concentrations in the I row. (3) Express the change in concentration using a variable x (related to the stoichiometry). (4) Write equilibrium concentrations as initial ± change. (5) Substitute into the Kc expression and solve. (6) Check that all equilibrium concentrations are positive and sensible.'
      }
    },
    {
      id: 'h-example-1',
      type: 'heading',
      data: { text: 'Worked Example 1: Gas-Phase Equilibrium (N₂ + 3H₂ ⇌ 2NH₃)', level: 2 }
    },
    {
      id: 'p-ex1-setup',
      type: 'paragraph',
      data: {
        text: 'Initial concentrations: [N₂] = 1.0 mol dm⁻³, [H₂] = 3.0 mol dm⁻³, [NH₃] = 0 mol dm⁻³. At equilibrium, [NH₃] = 0.5 mol dm⁻³. Find Kc.'
      }
    },
    {
      id: 'table-ice-1',
      type: 'comparisonTable',
      data: {
        headers: ['', 'N₂', 'H₂', 'NH₃'],
        rows: [
          ['Initial (mol dm⁻³)', '1.0', '3.0', '0'],
          ['Change (mol dm⁻³)', '−x', '−3x', '+2x'],
          ['Equilibrium (mol dm⁻³)', '1.0−x', '3.0−3x', '2x']
        ],
        caption: 'ICE table for N₂ + 3H₂ ⇌ 2NH₃'
      }
    },
    {
      id: 'p-ex1-calc',
      type: 'paragraph',
      data: {
        text: 'Since [NH₃] at equilibrium is 2x = 0.5 mol dm⁻³, then x = 0.25 mol dm⁻³. Therefore: [N₂] = 1.0 − 0.25 = 0.75 mol dm⁻³, [H₂] = 3.0 − 3(0.25) = 2.25 mol dm⁻³, [NH₃] = 0.5 mol dm⁻³.'
      }
    },
    {
      id: 'ex1-calc-kc',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Calculate Kc',
        text: 'Kc = [NH₃]² / ([N₂][H₂]³) = (0.5)² / (0.75 × (2.25)³) = 0.25 / (0.75 × 11.39) = 0.25 / 8.54 = 0.029 mol⁻² dm⁶. This low value indicates that at this temperature, the forward reaction does not proceed significantly—the equilibrium favours reactants.'
      }
    },
    {
      id: 'h-example-2',
      type: 'heading',
      data: { text: 'Worked Example 2: Esterification (CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O)', level: 2 }
    },
    {
      id: 'p-ex2-setup',
      type: 'paragraph',
      data: {
        text: 'Initial concentrations: [CH₃COOH] = 0.50 mol dm⁻³, [C₂H₅OH] = 0.50 mol dm⁻³, [CH₃COOC₂H₅] = 0, [H₂O] = 0. At equilibrium, [CH₃COOC₂H₅] = 0.20 mol dm⁻³. Find Kc (assume water concentration does not change significantly).'
      }
    },
    {
      id: 'table-ice-2',
      type: 'comparisonTable',
      data: {
        headers: ['', 'CH₃COOH', 'C₂H₅OH', 'CH₃COOC₂H₅', 'H₂O'],
        rows: [
          ['Initial (mol dm⁻³)', '0.50', '0.50', '0', 'solvent'],
          ['Change (mol dm⁻³)', '−x', '−x', '+x', 'omit'],
          ['Equilibrium (mol dm⁻³)', '0.50−x', '0.50−x', 'x', 'omit']
        ],
        caption: 'ICE table for esterification (water as solvent is omitted)'
      }
    },
    {
      id: 'p-ex2-calc',
      type: 'paragraph',
      data: {
        text: 'Since [CH₃COOC₂H₅] at equilibrium is x = 0.20 mol dm⁻³: [CH₃COOH] = 0.50 − 0.20 = 0.30 mol dm⁻³, [C₂H₅OH] = 0.50 − 0.20 = 0.30 mol dm⁻³, [CH₃COOC₂H₅] = 0.20 mol dm⁻³.'
      }
    },
    {
      id: 'ex2-calc-kc',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Calculate Kc',
        text: 'Kc = [CH₃COOC₂H₅] / ([CH₃COOH][C₂H₅OH]) = 0.20 / (0.30 × 0.30) = 0.20 / 0.09 = 2.2 (dimensionless, since Δn = 0). This indicates a moderate forward reaction; the equilibrium mixture contains a significant amount of ester.'
      }
    },
    {
      id: 'h-interpretation',
      type: 'heading',
      data: { text: 'Interpreting Kc Values', level: 2 }
    },
    {
      id: 'p-interpret',
      type: 'paragraph',
      data: {
        text: 'Large Kc (>>1): Equilibrium lies to the right; products are strongly favoured; most reactants have converted. Small Kc (<<1): Equilibrium lies to the left; reactants are favoured; little conversion occurs. Kc ≈ 1: Significant amounts of both reactants and products at equilibrium. Always check units when comparing Kc values.'
      }
    },
    {
      id: 'checklist-calc',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can set up and complete ICE tables correctly', checked: false },
          { text: 'Can calculate equilibrium concentrations from initial and change', checked: false },
          { text: 'Can substitute into Kc expressions and solve', checked: false },
          { text: 'Can interpret Kc values in terms of equilibrium position', checked: false }
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
        text: 'Understand: ICE tables (Initial, Change, Equilibrium) systematically track concentration changes to calculate K from experimental data.\n\nApply: 1.0 mol of A and 1.0 mol of B in 1.0 dm³ reach equilibrium with 0.6 mol C. Calculate Kc for A + B ⇌ C + D.\n\nAnalyze: If Kc = 4.0, does this mean 80% of reactants have converted? Explain why not.\n\nEvaluate: A student solves an ICE table and gets a negative concentration. What does this indicate about their calculation?'
      },
      terms: []
    },
    {
      id: 'summary-calc',
      type: 'summary',
      data: {
        text: 'Use ICE tables to track changes in concentration. Substitute equilibrium concentrations into the Kc expression. Large Kc favours products; small Kc favours reactants; Kc ≈ 1 gives mixed equilibrium.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-ice-steps',
        prompt: 'What are the five main steps in setting up and solving an ICE table?'
      },
      {
        id: 'cue-2',
        blockId: 'table-ice-1',
        prompt: 'For N₂ + 3H₂ ⇌ 2NH₃, if [NH₃] at equilibrium is 0.5 mol dm⁻³, what is x and the equilibrium [N₂]?'
      },
      {
        id: 'cue-3',
        blockId: 'ex1-calc-kc',
        prompt: 'Calculate Kc for N₂ + 3H₂ ⇌ 2NH₃ with equilibrium concentrations [N₂]=0.75, [H₂]=2.25, [NH₃]=0.5 mol dm⁻³.'
      },
      {
        id: 'cue-4',
        blockId: 'p-interpret',
        prompt: 'What does Kc >> 1, Kc << 1, and Kc ≈ 1 tell you about the equilibrium position?'
      },
      {
        id: 'cue-5',
        blockId: 'table-ice-2',
        prompt: 'In the esterification example, why is water omitted from the Kc expression?'
      }
    ],
    summaryText: 'ICE tables organize initial, change, and equilibrium concentrations. Use stoichiometry to relate changes. Substitute equilibrium values into Kc expression. Interpret Kc: large K favours products, small K favours reactants.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'ICE Table Method for Kc Calculations',
      detail: 'Systematic approach to calculating equilibrium constants from initial and equilibrium concentrations.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['equilibrium', 'Kc', 'ICE table', 'calculations']
    }
  ]
};
