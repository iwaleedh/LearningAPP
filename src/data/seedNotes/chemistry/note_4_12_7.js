export const note_chemistry_4_12_7 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-solubility-entropy',
      data: {
        text: 'Understand thermodynamic solubility trends using ΔG = ΔH − TΔS to explain why some compounds dissolve despite endothermic dissolution, and recognise temperature effects on solubility.'
      }
    },
    {
      type: 'heading',
      id: 'h-solubility-gibbs',
      data: {
        text: 'Solubility and Gibbs Free Energy',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-solubility-gibbs-1',
      data: {
        text: 'A compound dissolves spontaneously if ΔG_solution < 0. Using ΔG = ΔH − TΔS, we can understand why some compounds dissolve even when dissolution is endothermic (ΔH > 0): the entropy increase (ΔS > 0) is large enough that TΔS > ΔH at the temperature of interest, making ΔG < 0.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-solubility-gibbs-2',
      data: {
        text: 'For most dissolution processes: ΔH > 0 (breaking ionic bonds requires energy) and ΔS > 0 (ions spread throughout solution, increasing disorder). At low temperature, ΔH dominates and ΔG > 0 (insoluble). At high temperature, TΔS dominates and ΔG < 0 (soluble). This explains why many salts become more soluble at higher temperatures.'
      }
    },
    {
      type: 'callout',
      id: 'co-solubility-entropy-driven',
      data: {
        style: 'key',
        title: 'Entropy-Driven Solubility',
        text: 'Most dissolution is entropy-driven. Even though breaking lattice bonds is endothermic, the massive increase in disorder when solid → aqueous solution makes the process spontaneous.\n\nΔS_solution includes:\n• Disorder of ions spread throughout solvent (+ve)\n• Disorder increase from hydration layers forming (+ve)\n• Small decrease from water structure around ions (−ve)\n\nNet ΔS_solution is almost always positive.'
      }
    },
    {
      type: 'heading',
      id: 'h-solubility-classification',
      data: {
        text: 'Three Types of Dissolution: ΔH and ΔS Effects',
        level: 2
      }
    },
    {
      type: 'heading',
      id: 'h-type-1-exo-incr',
      data: {
        text: 'Type 1: Exothermic Dissolution (ΔH < 0, ΔS > 0)',
        level: 3
      }
    },
    {
      type: 'paragraph',
      id: 'p-type1-text',
      data: {
        text: 'Both ΔH and ΔS favour dissolution. ΔG < 0 at all temperatures, so the compound is soluble across all temperatures. Examples include NaOH and most common salts with low lattice enthalpies relative to hydration energies.'
      }
    },
    {
      type: 'callout',
      id: 'co-type1-example',
      data: {
        style: 'worked',
        title: 'Example: NaOH Dissolution',
        text: 'NaOH(s) → NaOH(aq)\nΔH_solution ≈ −42 kJ mol⁻¹ (exothermic — water gets warm)\nΔS_solution ≈ +10 J K⁻¹ mol⁻¹ (positive, from disorder)\n\nAt 298 K: ΔG = −42 − 298(0.01) = −42 − 3 = −45 kJ mol⁻¹\nVery negative → highly soluble (and highly exothermic)\n\nAs T increases, TΔS increases but ΔG remains negative because ΔH is already very negative. NaOH remains soluble at all normal temperatures.'
      }
    },
    {
      type: 'heading',
      id: 'h-type-2-endo-incr',
      data: {
        text: 'Type 2: Endothermic Dissolution (ΔH > 0, ΔS > 0)',
        level: 3
      }
    },
    {
      type: 'paragraph',
      id: 'p-type2-text',
      data: {
        text: 'Enthalpy opposes dissolution; entropy drives it. ΔG = ΔH − TΔS is negative only when TΔS > ΔH, which occurs above a critical temperature. These compounds are typically insoluble at low T but become soluble at higher temperatures.'
      }
    },
    {
      type: 'callout',
      id: 'co-type2-example',
      data: {
        style: 'worked',
        title: 'Example: NH₄Cl Dissolution',
        text: 'NH₄Cl(s) → NH₄Cl(aq)\nΔH_solution ≈ +15 kJ mol⁻¹ (endothermic — solution cools)\nΔS_solution ≈ +70 J K⁻¹ mol⁻¹ (large entropy increase)\n\nCritical T = ΔH / ΔS = 15000 / 70 ≈ 214 K (−59 °C) — far below room temperature!\n\nAt 298 K: ΔG = 15 − 298(0.07) = 15 − 20.9 = −5.9 kJ mol⁻¹\nNegative → soluble at room temperature despite being endothermic.\n\nAt 200 K: ΔG = 15 − 200(0.07) = 15 − 14 = +1 kJ mol⁻¹\nPositive → essentially insoluble at very low temperature.'
      }
    },
    {
      type: 'heading',
      id: 'h-type-3-endo-decr',
      data: {
        text: 'Type 3: Dissolution with Decreasing Entropy (ΔH > 0, ΔS < 0)',
        level: 3
      }
    },
    {
      type: 'paragraph',
      id: 'p-type3-text',
      data: {
        text: 'Both ΔH and ΔS oppose dissolution. ΔG > 0 at all temperatures, so the compound is insoluble (sparingly soluble) across all temperatures. Examples include highly insoluble salts like BaSO₄ and many complex salts with very large hydration entropy costs.'
      }
    },
    {
      type: 'callout',
      id: 'co-type3-example',
      data: {
        style: 'worked',
        title: 'Example: BaSO₄ Precipitation',
        text: 'BaSO₄(s) → Ba²⁺(aq) + SO₄²⁻(aq)\nΔH_solution ≈ +20 kJ mol⁻¹ (endothermic)\nΔS_solution ≈ −30 J K⁻¹ mol⁻¹ (entropy decreases!)\n\nWhy negative ΔS? The large, highly charged ions (SO₄²⁻) heavily order water molecules around them, reducing solvent entropy more than the gained disorder of free ions compensates.\n\nAt 298 K: ΔG = 20 − 298(−0.03) = 20 + 8.94 = +28.94 kJ mol⁻¹\nLarge and positive → essentially insoluble at all temperatures.\n\nBaSO₄ will NOT dissolve, precipitate will form: Ba²⁺ + SO₄²⁻ → BaSO₄(s) ✓'
      }
    },
    {
      type: 'heading',
      id: 'h-temperature-solubility-trends',
      data: {
        text: 'Temperature Effects on Solubility',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-temp-solubility-1',
      data: {
        text: 'Most ionic compounds follow Le Chatelier\'s principle: dissolving is endothermic (ΔH > 0), so solubility increases with temperature. However, some compounds (like Ca(OH)₂ and Na₂SO₄ · 10H₂O) have exothermic dissolution and decrease in solubility with increasing temperature — a reverse trend.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-temp-solubility-2',
      data: {
        text: 'The Gibbs equation explains this: For most salts with ΔH > 0 and ΔS > 0, increasing T makes TΔS grow relative to ΔH, so ΔG becomes more negative and solubility increases. For exothermic dissolution (ΔH < 0), increasing T makes TΔS grow and ΔG may become less negative or positive, decreasing solubility.'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-solubility-types',
      data: {
        caption: 'Solubility Types and Temperature Trends',
        headers: ['Type', 'ΔH', 'ΔS', 'Low T Solubility', 'High T Solubility', 'Example'],
        rows: [
          ['Type 1', '< 0 (exo)', '> 0', 'Very soluble', 'Very soluble', 'NaOH (increases slightly)'],
          ['Type 2', '> 0 (endo)', '> 0', 'Soluble to insoluble', 'Very soluble', 'NH₄Cl (increases)'],
          ['Type 3', '> 0 (endo)', '< 0', 'Insoluble', 'Insoluble', 'BaSO₄ (remains insoluble)'],
          ['Reverse', '< 0 (exo)', 'Negative overall', 'Very soluble', 'Less soluble', 'Ca(OH)₂ (decreases)']
        ]
      }
    },
    {
      type: 'heading',
      id: 'h-common-misconception',
      data: {
        text: 'Common Misconception: "Endothermic = Insoluble"',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-misconception-1',
      data: {
        text: 'Many students believe that because dissolving requires breaking ionic bonds (endothermic), salt solutions should be unstable and insoluble. This is wrong! The massive entropy increase from disorder overcomes the enthalpy cost. At room temperature, TΔS typically exceeds ΔH, making ΔG < 0.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-misconception-2',
      data: {
        text: 'The key insight: "Entropy rules at normal temperatures." Dissolving is entropy-driven because ΔS_solution is large and positive. Only at very low temperatures or for highly insoluble compounds does enthalpy dominate.'
      }
    },
    {
      type: 'callout',
      id: 'co-entropy-dominance',
      data: {
        style: 'tip',
        title: 'Why Most Salts Dissolve Despite Endothermic Process',
        text: 'Energy cost to break lattice: ≈ +600 to +1000 kJ mol⁻¹\nEnergy released from hydration: ≈ −700 to −1100 kJ mol⁻¹ (often comparable or larger)\n\nBut entropy change dominates at room temperature:\nTΔS ≈ 298 K × 50 J K⁻¹ mol⁻¹ = 15 kJ mol⁻¹\nThis is often enough to make ΔG < 0 even if ΔH > 0.'
      }
    },
    {
      type: 'checklist',
      id: 'cl-solubility',
      data: {
        items: [
          { text: 'Most dissolution is endothermic (ΔH > 0) but still spontaneous due to entropy increase', checked: false },
          { text: 'ΔG_solution < 0 means spontaneous/soluble; ΔG > 0 means insoluble', checked: false },
          { text: 'Type 1: ΔH < 0, ΔS > 0 — always soluble (NaOH)', checked: false },
          { text: 'Type 2: ΔH > 0, ΔS > 0 — soluble at high T (NH₄Cl)', checked: false },
          { text: 'Type 3: ΔH > 0, ΔS < 0 — never soluble (BaSO₄)', checked: false },
          { text: 'Critical temperature T = ΔH / ΔS determines solubility transition', checked: false },
          { text: 'Most salts increase solubility with temperature (endothermic dissolution)', checked: false }
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
        text: 'Understand: Solubility depends on ΔG_solution = ΔH_solution − TΔS_solution. Even endothermic dissolution can occur if ΔS is sufficiently positive.\n\nApply: Predict whether a salt with ΔH_sol = +20 kJ mol⁻¹ and ΔS_sol = +100 J K⁻¹ mol⁻¹ dissolves at 25°C.\n\nAnalyze: Why does the solubility of most salts increase with temperature but some decrease?\n\nEvaluate: Can ΔG alone predict how much dissolves, or only whether any dissolves? Discuss the difference.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'sum-solubility',
      data: {
        text: 'Solubility is determined by ΔG = ΔH − TΔS. Most dissolution is entropy-driven despite being endothermic because disorder increase dominates at room temperature. Type 1 salts (ΔH<0, ΔS>0) are always soluble. Type 2 (ΔH>0, ΔS>0) soluble above T_crit. Type 3 (ΔH>0, ΔS<0) insoluble at all T. Temperature typically increases solubility by making TΔS term larger relative to ΔH.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Most Dissolution Is ENTROPY-Driven Despite Being Endothermic",
        text: "NH\u2084Cl dissolves endothermically (\u0394H > 0), yet is soluble because \u0394S_solution \u2248 +70 J K\u207b\u00b9 mol\u207b\u00b9 is large. At 298 K, T\u0394S term dominates. Students incorrectly think exothermic dissolution is more spontaneous."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Most Salts Become MORE Soluble When Heated",
        text: "For typical salts with \u0394H > 0 and \u0394S > 0, increasing T makes T\u0394S grow relative to \u0394H, so \u0394G becomes more negative \u2192 higher solubility. Exceptions like Ca(OH)\u2082 are rare (exothermic dissolution)."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-solubility-gibbs',
        prompt: 'Explain why NH₄Cl dissolves at room temperature despite dissolution being endothermic.'
      },
      {
        id: 'cue-2',
        blockId: 'h-type-1-exo-incr',
        prompt: 'For NaOH, ΔH < 0 and ΔS > 0. Is it soluble at all temperatures? Why?'
      },
      {
        id: 'cue-3',
        blockId: 'h-type-2-endo-incr',
        prompt: 'Calculate the critical temperature for NH₄Cl. Is it soluble at 298 K?'
      },
      {
        id: 'cue-4',
        blockId: 'h-type-3-endo-decr',
        prompt: 'Why does BaSO₄ have ΔS < 0? Why is it insoluble at all temperatures?'
      },
      {
        id: 'cue-5',
        blockId: 'h-temperature-solubility-trends',
        prompt: 'Explain why most salt solubility increases with temperature using the Gibbs equation.'
      }
    ],
    summaryText: 'Solubility is entropy-driven: ΔG = ΔH − TΔS < 0 for soluble. Type 1: ΔH<0, ΔS>0 always soluble. Type 2: ΔH>0, ΔS>0 soluble above T_crit = ΔH/ΔS. Type 3: ΔH>0, ΔS<0 insoluble. Most salts increase solubility with T as TΔS grows.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'NH₄Cl Entropy-Driven Dissolution',
      detail: 'ΔH = +15 kJ mol⁻¹, ΔS = +70 J K⁻¹ mol⁻¹. At 298 K, ΔG ≈ −5.9 kJ mol⁻¹. Soluble despite endothermic.',
      year: '2023',
      source: 'Solution Thermodynamics',
      tags: ['entropy-driven', 'endothermic-dissolution', 'solubility']
    },
    {
      id: 'ev-2',
      title: 'BaSO₄ Insolubility',
      detail: 'ΔH ≈ +20 kJ mol⁻¹, ΔS ≈ −30 J K⁻¹ mol⁻¹. At 298 K, ΔG ≈ +29 kJ mol⁻¹. Insoluble at all T.',
      year: '2023',
      source: 'Solubility Product Data',
      tags: ['entropy-decrease', 'insoluble-salt', 'precipitation']
    },
    {
      id: 'ev-3',
      title: 'Temperature Reversal: Ca(OH)₂',
      detail: 'Exothermic dissolution (ΔH < 0). As T increases, TΔS increases and ΔG becomes less negative. Solubility decreases with T — reverse of normal trend.',
      year: '2023',
      source: 'Anomalous Solubility Data',
      tags: ['temperature-effect', 'exothermic-dissolution', 'reverse-trend']
    }
  ]
};
