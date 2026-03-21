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
      id: 'co-rice-methods',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'RICE Table — Three Approaches to Know',
        text: 'The ICE table is also called the RICE table (Reaction, Initial, Change, Equilibrium) in IAL specifications.\n\nApproach 1 — Moles given, volume unknown:\nSet up the table in moles. Divide by volume V when converting to concentrations. If V is not given, write it as the letter V — it will cancel algebraically in the Kc expression (works when Δn = 0, or when top and bottom have equal powers so V cancels).\n\nApproach 2 — Moles given, volume given:\nDivide each equilibrium mole value by the volume to get concentrations, then substitute into Kc.\n\nApproach 3 — % reacted given:\nIf told "X% of species A reacted", calculate the change as (X/100) × initial moles of A. Use stoichiometric ratios for all other species.\n\nApproach 4 — Concentrations given directly:\nIf the question provides initial concentrations (not moles), use them directly in the RICE table. If two solutions are mixed, dilute each concentration before setting up the table: c_new = c_original × (V_original / V_total).'
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
      id: 'h-example-n2o4',
      type: 'heading',
      data: { text: 'Worked Example: N₂O₄(g) ⇌ 2NO₂(g) — Coefficient in RICE Table', level: 2 }
    },
    {
      id: 'co-n2o4-rice',
      type: 'callout',
      data: {
        style: 'worked',
        title: '0.1 mol N₂O₄ in 0.1 dm³ flask; equilibrium moles of N₂O₄ = 0.071',
        text: 'The coefficient of 2 for NO₂ means its change is TWICE the change in N₂O₄.\n\nRICE table (moles):\n  N₂O₄: 0.100 → −0.029 → 0.071\n  NO₂:      0 → +2×0.029 = +0.058 → 0.058\n\nConcentrations (÷ 0.1 dm³):\n  [N₂O₄] = 0.071 / 0.1 = 0.71 mol dm⁻³\n  [NO₂]  = 0.058 / 0.1 = 0.58 mol dm⁻³\n\nKc = [NO₂]² / [N₂O₄] = (0.58)² / 0.71 = 0.336 / 0.71 = 0.474 mol dm⁻³\n\nUnits: (mol dm⁻³)² / (mol dm⁻³) = mol dm⁻³ (Δn = 2−1 = +1)'
      }
    },
    {
      id: 'h-example-haber-pct',
      type: 'heading',
      data: { text: 'Worked Example: % Reacted — N₂ + 3H₂ ⇌ 2NH₃', level: 2 }
    },
    {
      id: 'co-haber-pct',
      type: 'callout',
      data: {
        style: 'worked',
        title: '1.5 mol N₂, 4.0 mol H₂ in 1.5 dm³; 30% of N₂ reacts',
        text: 'Change in N₂ = 30% × 1.5 = 0.45 mol\n\nRICE table (moles):\n  N₂: 1.50 → −0.45 → 1.05\n  H₂: 4.00 → −3×0.45 = −1.35 → 2.65\n  NH₃:   0 → +2×0.45 = +0.90 → 0.90\n\nConcentrations (÷ 1.5 dm³):\n  [N₂]  = 1.05/1.5 = 0.700 mol dm⁻³\n  [H₂]  = 2.65/1.5 = 1.767 mol dm⁻³\n  [NH₃] = 0.90/1.5 = 0.600 mol dm⁻³\n\nKc = [NH₃]² / ([N₂][H₂]³)\n   = (0.600)² / (0.700 × (1.767)³)\n   = 0.360 / (0.700 × 5.514) = 0.360 / 3.860 = 0.0933 mol⁻² dm⁶\n\nUnits: (mol dm⁻³)² / ((mol dm⁻³) × (mol dm⁻³)³) = mol⁻² dm⁶'
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
      id: 'h-example-moles-v',
      type: 'heading',
      data: { text: 'Worked Example: Moles Given, Volume Unknown — V Cancels', level: 2 }
    },
    {
      id: 'co-ester-moles',
      type: 'callout',
      data: {
        style: 'worked',
        title: '2 mol CH₃COOH + 2 mol C₂H₅OH in sealed flask; 0.67 mol CH₃COOH at equilibrium',
        text: 'Volume V is not given — use V as a symbol; it will cancel.\n\nRICE table (moles, 1:1:1:1 ratios):\n  CH₃COOH:    2.00 → −1.33 → 0.67\n  C₂H₅OH:    2.00 → −1.33 → 0.67\n  CH₃COOC₂H₅: 0   → +1.33 → 1.33\n  H₂O:         0   → +1.33 → 1.33\n\nConcentrations (÷ V):\n  [CH₃COOH] = [C₂H₅OH] = 0.67/V\n  [CH₃COOC₂H₅] = [H₂O] = 1.33/V\n\nKc = (1.33/V)(1.33/V) / ((0.67/V)(0.67/V)) = (1.33)² / (0.67)² = 1.769 / 0.449 = 3.94\n\nV cancels completely because Δn = 0. Kc is dimensionless (no units).'
      }
    },
    {
      id: 'h-example-cyano',
      type: 'heading',
      data: { text: 'Worked Example: Concentrations Given Directly (After Mixing)', level: 2 }
    },
    {
      id: 'p-mixing-dilution',
      type: 'paragraph',
      data: {
        text: 'When two solutions of known concentration are mixed, the total volume increases and each solution is diluted. Calculate diluted concentrations first: c_new = c_original × (V_original / V_total). Then use these diluted values as your RICE table initial concentrations.'
      }
    },
    {
      id: 'co-cyanohydrin',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Propanone + HCN ⇌ Cyanohydrin; 4-mark question',
        text: '100 cm³ of 0.10 mol dm⁻³ propanone + 100 cm³ of 0.20 mol dm⁻³ HCN; V_total = 200 cm³\n\nDiluted initial concentrations:\n  [Propanone] = 0.10 × (100/200) = 0.050 mol dm⁻³\n  [HCN]       = 0.20 × (100/200) = 0.100 mol dm⁻³\n\nAt equilibrium: [cyanohydrin] = 0.034 mol dm⁻³\n\nRICE table (mol dm⁻³, all 1:1:1 ratios):\n  Propanone:   0.050 → −0.034 → 0.016\n  HCN:         0.100 → −0.034 → 0.066\n  Cyanohydrin: 0     → +0.034 → 0.034\n\nKc  = [cyanohydrin] / ([propanone][HCN])\n    = 0.034 / (0.016 × 0.066) = 0.034 / 0.001056 = 32 dm³ mol⁻¹\n\nUnits: mol dm⁻³ / (mol dm⁻³)² = dm³ mol⁻¹ (write positive power first: dm³ mol⁻¹).'
      }
    },
    {
      id: 'co-mark-scheme-5',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'How Kc / Kp Questions Are Marked (5-mark Questions)',
        text: 'A typical 5-mark Kp or Kc calculation question awards marks as follows:\n• 1 mark: Correct Kc/Kp expression written out\n• 1 mark: Equilibrium moles/concentrations for all species (RICE table)\n• 1 mark: Partial pressures or concentrations correctly calculated\n• 1 mark: Numerical answer to the correct significant figures\n• 1 mark: Correct units\n\nAlways show your RICE table. Intermediate working earns marks even if your final answer is wrong (error carried forward). Never omit units — an answer without units loses that mark.'
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
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Stoichiometric Coefficients in RICE Tables",
        text: "Students often forget to apply stoichiometric coefficients to changes: if the coefficient of NO\u2082 in 2NO\u2082 \u21cc N\u2082O\u2084 is 2, the change in NO\u2082 is TWICE the change in N\u2082O\u2084. Check your ICE table \u2014 each change must reflect stoichiometry."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "% Reacted Calculations",
        text: "If told 'X% of species A reacted', calculate change as (X/100) \u00d7 initial moles, then use stoichiometric ratios for all other species. Students often mix percentages incorrectly."
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
