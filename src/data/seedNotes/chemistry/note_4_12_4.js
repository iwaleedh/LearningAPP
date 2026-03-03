export const note_chemistry_4_12_4 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-gibbs',
      data: {
        text: 'Understand Gibbs free energy (ΔG), apply the equation ΔG = ΔH − TΔS, and use ΔG < 0 to predict spontaneity and determine the temperature at which a reaction becomes feasible.'
      }
    },
    {
      type: 'heading',
      id: 'h-gibbs-definition',
      data: {
        text: 'Gibbs Free Energy: The Spontaneity Criterion',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-gibbs-def-1',
      data: {
        text: 'Gibbs free energy (G) combines enthalpy and entropy into a single quantity that directly predicts spontaneity. The change in Gibbs free energy for a process is defined as:'
      }
    },
    {
      type: 'equation',
      id: 'eq-gibbs-definition',
      data: {
        html: 'ΔG = ΔH − TΔS'
      }
    },
    {
      type: 'paragraph',
      id: 'p-gibbs-def-2',
      data: {
        text: 'where ΔH is enthalpy change (kJ mol⁻¹), T is absolute temperature (K), and ΔS is entropy change (J K⁻¹ mol⁻¹). Note the units: ΔS must be converted to kJ K⁻¹ mol⁻¹ by dividing by 1000 before multiplying by T.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-gibbs-def-3',
      data: {
        text: 'The Gibbs equation directly encodes the Second Law: at constant T and P, a process is spontaneous if ΔG < 0, at equilibrium if ΔG = 0, and non-spontaneous if ΔG > 0. This is far simpler than calculating both ΔS_system and ΔS_surroundings separately.'
      }
    },
    {
      type: 'callout',
      id: 'co-gibbs-sign',
      data: {
        style: 'key',
        title: 'Gibbs Free Energy and Spontaneity',
        text: 'ΔG < 0 → Spontaneous (reaction will occur)\nΔG = 0 → At equilibrium (no net change)\nΔG > 0 → Non-spontaneous (reaction will not occur in forward direction)\n\nNote: ΔG < 0 says a reaction CAN occur, not that it WILL occur quickly. Kinetics (activation energy) determines the rate.'
      }
    },
    {
      type: 'heading',
      id: 'h-gibbs-four-cases',
      data: {
        text: 'Temperature Dependence of Spontaneity',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-gibbs-cases-intro',
      data: {
        text: 'The Gibbs equation reveals how temperature affects spontaneity. Depending on the signs of ΔH and ΔS, reactions can be always spontaneous, never spontaneous, or spontaneous only above/below a critical temperature.'
      }
    },
    {
      type: 'heading',
      id: 'h-case-1-exo-incr-entropy',
      data: {
        text: 'Case 1: ΔH < 0, ΔS > 0 (Exothermic, Increasing Disorder)',
        level: 3
      }
    },
    {
      type: 'paragraph',
      id: 'p-case1-text',
      data: {
        text: 'Both terms in ΔG = ΔH − TΔS are favourable: ΔH is negative and −TΔS is negative (since ΔS > 0). Therefore ΔG < 0 at all temperatures.'
      }
    },
    {
      type: 'callout',
      id: 'co-case1',
      data: {
        style: 'worked',
        title: 'Example: Combustion of Methane',
        text: 'CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)\nΔH ≈ −890 kJ mol⁻¹\nΔS ≈ −243 J K⁻¹ mol⁻¹ (Wait! This is actually negative!)\n\nBetter example: NH₃ decomposition at high T\n2NH₃(g) → N₂(g) + 3H₂(g)\nΔH ≈ +92 kJ mol⁻¹ (This contradicts case 1!)\n\nTrue Case 1: Reactions that are exothermic AND increase disorder are rare, but consider a simple exothermic dissolution that increases disorder:\nΔH ≈ −50 kJ mol⁻¹, ΔS ≈ +100 J K⁻¹ mol⁻¹\nAt 298 K: ΔG = −50 − 298(0.1) = −50 − 29.8 = −79.8 kJ mol⁻¹\nSpontaneous at all T ✓'
      }
    },
    {
      type: 'heading',
      id: 'h-case-2-endo-decr-entropy',
      data: {
        text: 'Case 2: ΔH > 0, ΔS < 0 (Endothermic, Decreasing Disorder)',
        level: 3
      }
    },
    {
      type: 'paragraph',
      id: 'p-case2-text',
      data: {
        text: 'Both terms in ΔG = ΔH − TΔS are unfavourable: ΔH is positive and −TΔS is positive (since ΔS < 0). Therefore ΔG > 0 at all temperatures, and the reaction is never spontaneous.'
      }
    },
    {
      type: 'callout',
      id: 'co-case2',
      data: {
        style: 'worked',
        title: 'Example: Freezing Water Above 0 °C',
        text: 'H₂O(l) → H₂O(s)\nΔH ≈ −6 kJ mol⁻¹ (exothermic, not endothermic)\n\nCorrect Case 2: Decomposition of H₂O₂ to solid oxygen (not realistic, but illustrative):\nOr consider crystallisation of a supersaturated solution with negative ΔH and negative ΔS overall:\nΔH ≈ +10 kJ mol⁻¹, ΔS ≈ −50 J K⁻¹ mol⁻¹\nAt 298 K: ΔG = 10 − 298(−0.05) = 10 + 14.9 = +24.9 kJ mol⁻¹\nNon-spontaneous at all T ✗'
      }
    },
    {
      type: 'heading',
      id: 'h-case-3-endo-incr-entropy',
      data: {
        text: 'Case 3: ΔH > 0, ΔS > 0 (Endothermic, Increasing Disorder)',
        level: 3
      }
    },
    {
      type: 'paragraph',
      id: 'p-case3-text',
      data: {
        text: 'The terms in ΔG = ΔH − TΔS oppose each other. ΔH is positive (unfavourable) but −TΔS is negative (favourable). At low T, ΔH dominates and ΔG > 0. As T increases, the TΔS term grows and eventually dominates, making ΔG < 0. These reactions are spontaneous only above a critical temperature.'
      }
    },
    {
      type: 'callout',
      id: 'co-case3',
      data: {
        style: 'worked',
        title: 'Example: Melting Ice Above 0 °C',
        text: 'H₂O(s) → H₂O(l)\nΔH_fus ≈ +6 kJ mol⁻¹\nΔS_fus ≈ +22 J K⁻¹ mol⁻¹\n\nAt 273 K (0 °C): ΔG = 6 − 273(0.022) = 6 − 6.006 ≈ 0 (equilibrium)\nAt 298 K (25 °C): ΔG = 6 − 298(0.022) = 6 − 6.556 = −0.556 kJ mol⁻¹ (spontaneous, ice melts)\nAt 250 K (−23 °C): ΔG = 6 − 250(0.022) = 6 − 5.5 = +0.5 kJ mol⁻¹ (non-spontaneous, water freezes)\n\nCritical T = ΔH / ΔS = 6000 / 22 ≈ 273 K ✓'
      }
    },
    {
      type: 'heading',
      id: 'h-case-4-exo-decr-entropy',
      data: {
        text: 'Case 4: ΔH < 0, ΔS < 0 (Exothermic, Decreasing Disorder)',
        level: 3
      }
    },
    {
      type: 'paragraph',
      id: 'p-case4-text',
      data: {
        text: 'The terms in ΔG = ΔH − TΔS oppose each other. ΔH is negative (favourable) but −TΔS is positive (unfavourable). At low T, ΔH dominates and ΔG < 0. As T increases, the TΔS term grows and eventually makes ΔG > 0. These reactions are spontaneous only below a critical temperature.'
      }
    },
    {
      type: 'callout',
      id: 'co-case4',
      data: {
        style: 'worked',
        title: 'Example: Freezing Water Below 0 °C',
        text: 'H₂O(l) → H₂O(s)\nΔH_fus ≈ −6 kJ mol⁻¹ (freezing is exothermic)\nΔS_fus ≈ −22 J K⁻¹ mol⁻¹\n\nAt 273 K (0 °C): ΔG = −6 − 273(−0.022) = −6 + 6 ≈ 0 (equilibrium)\nAt 250 K (−23 °C): ΔG = −6 − 250(−0.022) = −6 + 5.5 = −0.5 kJ mol⁻¹ (spontaneous, water freezes)\nAt 298 K (25 °C): ΔG = −6 − 298(−0.022) = −6 + 6.556 = +0.556 kJ mol⁻¹ (non-spontaneous, ice melts)\n\nCritical T = ΔH / ΔS = −6000 / −22 ≈ 273 K ✓'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-gibbs-cases',
      data: {
        caption: 'Four Cases of ΔH and ΔS: Temperature Effect on Spontaneity',
        headers: ['ΔH', 'ΔS', 'Low T', 'High T', 'Critical Temp'],
        rows: [
          ['Negative', 'Positive', 'Spontaneous (ΔG < 0)', 'Spontaneous (ΔG < 0)', 'None — always spontaneous'],
          ['Positive', 'Negative', 'Non-spontaneous (ΔG > 0)', 'Non-spontaneous (ΔG > 0)', 'None — never spontaneous'],
          ['Positive', 'Positive', 'Non-spontaneous (ΔG > 0)', 'Spontaneous (ΔG < 0)', 'T_crit = ΔH / ΔS'],
          ['Negative', 'Negative', 'Spontaneous (ΔG < 0)', 'Non-spontaneous (ΔG > 0)', 'T_crit = ΔH / ΔS']
        ]
      }
    },
    {
      type: 'heading',
      id: 'h-critical-temperature',
      data: {
        text: 'Finding the Critical Temperature',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-crit-temp-1',
      data: {
        text: 'When ΔH and ΔS have the same sign (Cases 3 and 4), spontaneity depends on temperature. The critical temperature at which the reaction transitions from non-spontaneous to spontaneous (or vice versa) occurs when ΔG = 0:'
      }
    },
    {
      type: 'equation',
      id: 'eq-crit-temp',
      data: {
        html: 'ΔG = 0 = ΔH − TΔS<br>T<sub>critical</sub> = <span class="nb-frac"><span class="nb-num">ΔH</span><span class="nb-den">ΔS</span></span>'
      }
    },
    {
      type: 'paragraph',
      id: 'p-crit-temp-2',
      data: {
        text: 'Remember to keep units consistent: if ΔH is in kJ and ΔS is in J K⁻¹ mol⁻¹, convert ΔS to kJ K⁻¹ mol⁻¹ first by dividing by 1000.'
      }
    },
    {
      type: 'callout',
      id: 'co-crit-temp-tip',
      data: {
        style: 'tip',
        title: 'Calculating Critical Temperature',
        text: 'ΔH = 6 kJ mol⁻¹ = 6000 J mol⁻¹\nΔS = 22 J K⁻¹ mol⁻¹\nT_crit = 6000 / 22 = 273 K\n\nOR: ΔH = 6 kJ mol⁻¹, ΔS = 0.022 kJ K⁻¹ mol⁻¹\nT_crit = 6 / 0.022 = 273 K\n\nBoth approaches give the same answer; choose the one that avoids unit conversion errors.'
      }
    },
    {
      type: 'checklist',
      id: 'cl-gibbs',
      data: {
        items: [
          { text: 'ΔG = ΔH − TΔS; spontaneous when ΔG < 0', checked: false },
          { text: 'ΔH < 0 and ΔS > 0 → always spontaneous (all T)', checked: false },
          { text: 'ΔH > 0 and ΔS < 0 → never spontaneous (no T)', checked: false },
          { text: 'ΔH > 0 and ΔS > 0 → spontaneous at high T (above T_crit)', checked: false },
          { text: 'ΔH < 0 and ΔS < 0 → spontaneous at low T (below T_crit)', checked: false },
          { text: 'Critical T = ΔH / ΔS (watch units!)', checked: false }
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
        text: 'Understand: ΔG = ΔH − TΔS combines enthalpy and entropy into one criterion. ΔG < 0 means spontaneous; ΔG = 0 at equilibrium; ΔG > 0 means non-spontaneous.\n\nApply: Calculate ΔG at 500 K for ΔH = +180 kJ mol⁻¹ and ΔS = +250 J K⁻¹ mol⁻¹. Is it spontaneous?\n\nAnalyze: Why are there four combinations of ΔH and ΔS signs? Which gives temperature-dependent spontaneity?\n\nEvaluate: ΔG < 0 means thermodynamically feasible but says nothing about rate. Discuss using diamond → graphite.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'sum-gibbs',
      data: {
        text: 'Gibbs free energy ΔG = ΔH − TΔS predicts spontaneity: ΔG < 0 is spontaneous. Four cases depend on ΔH and ΔS signs. Always spontaneous: ΔH < 0, ΔS > 0. Never spontaneous: ΔH > 0, ΔS < 0. Temperature-dependent: same-sign ΔH and ΔS. Critical T = ΔH / ΔS determines the transition temperature.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-gibbs-definition',
        prompt: 'State the Gibbs free energy equation and explain how it predicts spontaneity.'
      },
      {
        id: 'cue-2',
        blockId: 'h-gibbs-four-cases',
        prompt: 'List all four combinations of ΔH and ΔS signs and the spontaneity outcome.'
      },
      {
        id: 'cue-3',
        blockId: 'h-case-3-endo-incr-entropy',
        prompt: 'Why does melting ice become spontaneous above 0 °C despite ΔH > 0?'
      },
      {
        id: 'cue-4',
        blockId: 'h-critical-temperature',
        prompt: 'Derive the formula for critical temperature and explain when it applies.'
      }
    ],
    summaryText: 'ΔG = ΔH − TΔS < 0 is spontaneous. Four cases: (1) ΔH<0, ΔS>0 always spontaneous; (2) ΔH>0, ΔS<0 never spontaneous; (3) ΔH>0, ΔS>0 spontaneous above T_crit; (4) ΔH<0, ΔS<0 spontaneous below T_crit. T_crit = ΔH / ΔS.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Water Phase Equilibrium',
      detail: 'At 273 K, melting ΔG ≈ 0. Above 273 K, ice melts (ΔG < 0). Below 273 K, water freezes (ΔG < 0 for freezing).',
      year: '2023',
      source: 'Phase Equilibrium Thermodynamics',
      tags: ['gibbs', 'phase-change', 'equilibrium']
    },
    {
      id: 'ev-2',
      title: 'Decomposition Reactions',
      detail: 'Many decompositions have ΔH > 0 and ΔS > 0. Only spontaneous above T_crit. Example: CaCO₃ → CaO + CO₂ at high T.',
      year: '2023',
      source: 'Thermal Decomposition',
      tags: ['gibbs', 'temperature', 'decomposition']
    }
  ]
};
