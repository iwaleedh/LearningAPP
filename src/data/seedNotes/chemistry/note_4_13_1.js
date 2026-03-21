export const note_chemistry_4_13_1 = {
  blocks: [
    {
      id: 'obj-kp',
      type: 'objective',
      data: {
        text: 'Understand equilibrium constant expressions in terms of partial pressures (Kp); write Kp expressions; relate partial pressure to mole fraction and total pressure'
      }
    },
    {
      id: 'h-partial-pressure',
      type: 'heading',
      data: { text: 'Partial Pressure and Mole Fraction', level: 2 }
    },
    {
      id: 'p-partial',
      type: 'paragraph',
      data: {
        text: 'In a gas mixture, each gas exerts a partial pressure, which is the pressure it would exert if it alone occupied the container at the same temperature. By Dalton\'s Law, the total pressure is the sum of all partial pressures. The partial pressure of a gas is related to its mole fraction (χ) by the equation p_A = χ_A × P_total.'
      }
    },
    {
      id: 'eq-partial-pressure',
      type: 'equation',
      data: {
        html: 'p<sub>A</sub> = χ<sub>A</sub> × P<sub>total</sub> &emsp; or &emsp; p<sub>A</sub> = <span class="nb-frac"><span class="nb-num">n<sub>A</sub></span><span class="nb-den">n<sub>total</sub></span></span> × P<sub>total</sub>',
        caption: 'Partial pressure from mole fraction and total pressure'
      }
    },
    {
      id: 'ex-mole-frac',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Calculating Partial Pressures',
        text: 'In a 2.0 dm³ container at 500 K, an equilibrium mixture contains 0.4 mol N₂, 1.2 mol H₂, and 0.8 mol NH₃ (total 2.4 mol). If total pressure is 10 atm, then p(N₂) = (0.4/2.4) × 10 = 1.67 atm, p(H₂) = (1.2/2.4) × 10 = 5.0 atm, p(NH₃) = (0.8/2.4) × 10 = 3.33 atm.'
      }
    },
    {
      id: 'h-kp-expr',
      type: 'heading',
      data: { text: 'The Equilibrium Constant in Terms of Partial Pressure (Kp)', level: 2 }
    },
    {
      id: 'p-kp-def',
      type: 'paragraph',
      data: {
        text: 'For a gas-phase equilibrium aA(g) + bB(g) ⇌ cC(g) + dD(g), the equilibrium constant Kp is defined using partial pressures instead of concentrations. The expression is analogous to Kc: products (raised to stoichiometric powers) over reactants (raised to stoichiometric powers).'
      }
    },
    {
      id: 'eq-kp-general',
      type: 'equation',
      data: {
        html: 'K<sub>p</sub> = <span class="nb-frac"><span class="nb-num">p(C)<sup>c</sup> × p(D)<sup>d</sup></span><span class="nb-den">p(A)<sup>a</sup> × p(B)<sup>b</sup></span></span>',
        caption: 'Kp expression for gas-phase equilibria'
      }
    },
    {
      id: 'co-kp-notation',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Notation: Round Brackets for Kp — Exam Critical',
        text: 'For Kp expressions, ALWAYS use round brackets ( ) with "p" to denote partial pressures: written as p(CO₂) or p(N₂). Do NOT use square brackets [ ] — those are for Kc. Examiners will withhold marks for incorrect brackets. This is one of the most penalised notation errors in IAL exams. Always re-read the question to confirm whether it asks for Kc or Kp.'
      }
    },
    {
      id: 'p-kp-units',
      type: 'paragraph',
      data: {
        text: 'The units of Kp are atm^Δn (or Pa^Δn depending on the pressure unit used), where Δn is the change in the number of moles of gas: Δn = c + d − a − b. If Δn = 0, Kp is dimensionless. If Δn > 0, Kp has units of (pressure)^Δn. If Δn < 0, Kp has units of (pressure)^(−Δn) in the denominator.'
      }
    },
    {
      id: 'ex-kp-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: N₂ + 3H₂ ⇌ 2NH₃',
        text: 'Kp = p(NH₃)² / (p(N₂) × p(H₂)³). Here, Δn = 2 − (1 + 3) = −2, so Kp has units of atm⁻² or Pa⁻². If the partial pressures are p(N₂) = 1.67 atm, p(H₂) = 5.0 atm, p(NH₃) = 3.33 atm, then Kp = (3.33)² / (1.67 × (5.0)³) = 11.09 / 208.75 = 0.053 atm⁻².'
      }
    },
    {
      id: 'h-pcl5',
      type: 'heading',
      data: { text: 'Worked Example: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)', level: 2 }
    },
    {
      id: 'co-pcl5-rice',
      type: 'callout',
      data: {
        style: 'worked',
        title: '1 mol PCl₅, P = 6 atm; at equilibrium 0.60 mol Cl₂',
        text: 'RICE table (include a "Total" column for Kp calculations):\n  PCl₅: 1.00 → −0.60 → 0.40\n  PCl₃:    0 → +0.60 → 0.60\n  Cl₂:     0 → +0.60 → 0.60\n  Total at equilibrium: 0.40 + 0.60 + 0.60 = 1.60 mol\n\nMole fractions:\n  χ(PCl₅) = 0.40/1.60 = 0.250\n  χ(PCl₃) = χ(Cl₂) = 0.60/1.60 = 0.375\n\nPartial pressures (× 6 atm):\n  p(PCl₅) = 0.250 × 6 = 1.50 atm\n  p(PCl₃) = p(Cl₂) = 0.375 × 6 = 2.25 atm\n\nKp expression: Kp = p(PCl₃) × p(Cl₂) / p(PCl₅)\n   = 2.25 × 2.25 / 1.50 = 3.38 atm\n\nUnits: atm × atm / atm = atm (Δn = +1 → units = atm¹)'
      }
    },
    {
      id: 'h-haber-kp',
      type: 'heading',
      data: { text: 'Worked Example: Haber Process (20% Reacted, P = 2 atm)', level: 2 }
    },
    {
      id: 'co-haber-kp',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'N₂ + 3H₂ ⇌ 2NH₃: 1 mol N₂, 3 mol H₂, 20% of N₂ reacts',
        text: 'Change in N₂ = 20% × 1.00 = 0.20 mol\n\nRICE table:\n  N₂: 1.00 → −0.20 → 0.80\n  H₂: 3.00 → −3×0.20 = −0.60 → 2.40\n  NH₃:   0 → +2×0.20 = +0.40 → 0.40\n  Total: 0.80 + 2.40 + 0.40 = 3.60 mol\n\nMole fractions:\n  χ(N₂)  = 0.80/3.60 = 0.222\n  χ(H₂)  = 2.40/3.60 = 0.667\n  χ(NH₃) = 0.40/3.60 = 0.111\n\nPartial pressures (× 2 atm):\n  p(N₂)  = 0.444 atm;  p(H₂) = 1.333 atm;  p(NH₃) = 0.222 atm\n\nKp = p(NH₃)² / (p(N₂) × p(H₂)³)\n   = (0.222)² / (0.444 × (1.333)³)\n   = 0.0493 / (0.444 × 2.370) = 0.0493 / 1.052 = 0.0469 atm⁻²\n\nUnits: atm² / (atm × atm³) = atm⁻²'
      }
    },
    {
      id: 'h-kp-kc-rel',
      type: 'heading',
      data: { text: 'Relationship Between Kp and Kc', level: 2 }
    },
    {
      id: 'p-relation',
      type: 'paragraph',
      data: {
        text: 'Kp and Kc are related by the equation Kp = Kc(RT)^Δn, where R = 8.314 J mol⁻¹ K⁻¹ (or 0.08206 dm³ atm mol⁻¹ K⁻¹), T is absolute temperature in Kelvin, and Δn is the change in moles of gas. This relationship comes from the ideal gas law pV = nRT, which shows that partial pressure is proportional to concentration at constant T and V.'
      }
    },
    {
      id: 'eq-kp-kc',
      type: 'equation',
      data: {
        html: 'K<sub>p</sub> = K<sub>c</sub>(RT)<sup>Δn</sup>',
        caption: 'Relationship between Kp and Kc'
      }
    },
    {
      id: 'ex-relation',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Converting Kc to Kp',
        text: 'For N₂ + 3H₂ ⇌ 2NH₃ at 500 K, if Kc = 1.45 mol⁻² dm⁶, then Kp = 1.45 × (8.314 × 500)⁻² = 1.45 × (4157)⁻² = 1.45 × 5.78 × 10⁻⁸ = 8.4 × 10⁻⁸. Note: Use R = 8.314 J mol⁻¹ K⁻¹ to convert units properly.'
      }
    },
    {
      id: 'p-why-kp',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'When to Use Kp',
        text: 'Kp is particularly useful for gas-phase equilibria because pressures are easily measured and equilibrium positions can be predicted by manipulating the total pressure. Kp also avoids complications from volume changes at constant T.'
      }
    },
    {
      id: 'co-kp-total-moles-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'RICE Table for Kp: Always Include a Total Moles Column',
        text: 'When working with Kp, add a fifth "Total" column to your RICE table. After completing the Equilibrium row, sum all equilibrium moles to get n_total. This is the denominator in all your mole fractions (χ = n_i / n_total). Forgetting to add the total moles column is a common source of errors in multi-step Kp questions.'
      }
    },
    {
      id: 'h-heterogeneous-kp',
      type: 'heading',
      data: { text: 'Homogeneous vs Heterogeneous Equilibria', level: 2 }
    },
    {
      id: 'p-heterogeneous-kp',
      type: 'paragraph',
      data: {
        text: 'A homogeneous gaseous equilibrium involves only components in the gaseous phase. For example, the Contact Process or Haber Process equilibria. A heterogeneous equilibrium involves gases in contact with solids or liquids. Just like with Kc, we do not include terms for solids or liquids in the Kp expression, because their concentration/vapor pressure is effectively constant and incorporated into the equilibrium constant.'
      }
    },
    {
      id: 'ex-hetero-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Heating Carbon with Steam',
        text: 'Equation: C(s) + H₂O(g) ⇌ CO(g) + H₂(g)\n\nKp is exactly the same as if everything was gaseous, except you leave out the solid carbon.\n\nKp = <span class="nb-frac"><span class="nb-num">p(CO) × p(H₂)</span><span class="nb-den">p(H₂O)</span></span>'
      }
    },
    {
      id: 'ex-hetero-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Heating Calcium Carbonate',
        text: 'Equation: CaCO₃(s) ⇌ CaO(s) + CO₂(g)\n\nThis equilibrium only establishes in a closed system. The only non-solid component is carbon dioxide. That is all that remains in the Kp expression.\n\nKp = p(CO₂)'
      }
    },
    {
      id: 'h-writing-kp',
      type: 'heading',
      data: { text: 'Writing Kp Expressions', level: 3 }
    },
    {
      id: 'list-kp-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Write partial pressures of products in the numerator.',
          'Write partial pressures of reactants in the denominator.',
          'Raise each partial pressure to the power of its stoichiometric coefficient.',
          'Calculate Δn and determine units: (pressure)^Δn.',
          'Liquid and solid phases do not appear in Kp expressions.'
        ]
      }
    },
    {
      id: 'checklist-kp',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can calculate partial pressures from mole fractions and total pressure', checked: false },
          { text: 'Can write Kp expressions with correct stoichiometric powers', checked: false },
          { text: 'Can determine units of Kp from Δn', checked: false },
          { text: 'Can use the Kp = Kc(RT)^Δn relationship', checked: false }
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
        text: 'Understand: Kp uses partial pressures instead of concentrations. Partial pressure = mole fraction × total pressure. Kp applies only to gas-phase equilibria.\n\nApply: In N₂ + 3H₂ ⇌ 2NH₃, if total pressure is 200 atm and mole fractions are known, calculate Kp.\n\nAnalyze: Why does changing total pressure shift equilibrium position but not change Kp?\n\nEvaluate: Compare the advantages of using Kp vs Kc for gas-phase equilibria. When is each more convenient?'
      },
      terms: []
    },
    {
      id: 'summary-kp',
      type: 'summary',
      data: {
        text: 'Kp = p(products)^stoich / p(reactants)^stoich. Partial pressures are found from p_i = χ_i × P_total. Units of Kp = (pressure)^Δn where Δn = moles products − moles reactants. Kp and Kc are related by Kp = Kc(RT)^Δn.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Kp Notation \u2014 Most Penalised Error",
        text: "For Kp expressions, ALWAYS use round brackets: p(CO\u2082), p(N\u2082). Do NOT use square brackets. Examiners explicitly withhold marks for incorrect bracket notation in IAL exams \u2014 this is ONE OF THE MOST PENALISED ERRORS."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Kp-Kc Relationship Trap",
        text: "Remember Kp = Kc(RT)^\u0394n works only when R = 8.314 J mol\u207b\u00b9 K\u207b\u00b9 (NOT 8.31). Use wrong R value and your answer fails completely."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'c-kp-hetero',
        blockId: 'h-heterogeneous-kp',
        prompt: 'Are solids or liquids included in Kp expressions?'
      },
      {
        id: 'cue-1',
        blockId: 'eq-kp-general',
        prompt: 'What is the general form of the Kp expression for aA(g) + bB(g) ⇌ cC(g) + dD(g)?'
      },
      {
        id: 'cue-2',
        blockId: 'eq-partial-pressure',
        prompt: 'How do you calculate the partial pressure of a gas given its mole fraction and total pressure?'
      },
      {
        id: 'cue-3',
        blockId: 'eq-kp-kc',
        prompt: 'What is the relationship between Kp and Kc?'
      },
      {
        id: 'cue-4',
        blockId: 'p-kp-units',
        prompt: 'What are the units of Kp for a reaction where Δn = −2?'
      },
      {
        id: 'cue-5',
        blockId: 'ex-mole-frac',
        prompt: 'Calculate the partial pressure of N₂ if its mole fraction is 0.4/2.4 and total pressure is 10 atm.'
      }
    ],
    summaryText: 'Kp = p(products)^stoichiometric / p(reactants)^stoichiometric. Partial pressure p_i = χ_i × P_total. Units are (pressure)^Δn. Kp = Kc(RT)^Δn relates the two constants.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Partial Pressure and Kp Definition',
      detail: 'Kp is defined using partial pressures in place of concentrations; useful for gas-phase equilibria.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['equilibrium', 'Kp', 'partial pressure', 'gas phase']
    }
  ]
};
