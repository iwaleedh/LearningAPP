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
        title: 'Gibbs Free Energy: Feasibility vs Spontaneity',
        text: 'ΔG < 0 → Thermodynamically Feasible (reaction <i>can</i> occur)\nΔG = 0 → At equilibrium (no net change)\nΔG > 0 → Not feasible (reaction will not occur in forward direction)\n\n<b>Important Warning:</b> The word "spontaneous" can be misleading. ΔG < 0 only means a reaction is <i>feasible</i> (the energetic outcome is favourable). It says <b>nothing</b> about the rate. \n\nFor example, coal (carbon) reacting with oxygen to form CO₂ has a very negative ΔG, making it highly feasible. But a lump of coal will sit in the air forever because of an enormous <b>activation energy</b> barrier (kinetics). It is feasible, but not "spontaneous" in everyday language unless a spark is provided.'
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
      type: 'callout',
      id: 'co-caco3-crit-temp',
      data: {
        style: 'worked',
        title: 'Worked Example: CaCO₃ Decomposition — Finding T_crit',
        text: 'CaCO₃(s) → CaO(s) + CO₂(g)\nΔH = +178 kJ mol⁻¹    ΔS = +160.4 J K⁻¹ mol⁻¹ = +0.1604 kJ K⁻¹ mol⁻¹\n\nSigns: ΔH > 0, ΔS > 0  →  Case 3: spontaneous only above T_crit\n\nAt 293 K (room temperature):\nΔG = 178 − 293 × 0.1604 = 178 − 47.0 = +131 kJ mol⁻¹\nΔG > 0  →  NOT feasible at room temperature ✗\n\nAt 1273 K (a furnace):\nΔG = 178 − 1273 × 0.1604 = 178 − 204.2 = −26.2 kJ mol⁻¹\nΔG < 0  →  feasible at high temperature ✓\n\nFinding T_crit (where ΔG = 0):\n0 = 178 − T × 0.1604\nT = 178 ÷ 0.1604 = 1110 K  (≈ 837 °C)\n\nConclusion: CaCO₃ decomposition only becomes feasible above 1110 K.\nBelow 1110 K: CaCO₃ is stable. Above 1110 K: decomposition is spontaneous.'
      }
    },
    {
      type: 'heading',
      id: 'h-gibbs-equilibrium',
      data: {
        text: 'Linking ΔG° to the Equilibrium Constant K',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-gibbs-k-intro',
      data: {
        text: 'Gibbs free energy under standard conditions (ΔG°) is directly connected to the equilibrium constant K of a reaction. The relationship is:'
      }
    },
    {
      type: 'equation',
      id: 'eq-gibbs-k',
      data: {
        html: 'ΔG° = −RT ln K',
        caption: 'R = 8.314 J K⁻¹ mol⁻¹  |  T in kelvin  |  ΔG° in joules (NOT kJ)'
      }
    },
    {
      type: 'paragraph',
      id: 'p-gibbs-k-explained',
      data: {
        text: 'Rearranging: ln K = −ΔG° / RT. A large negative ΔG° gives a large positive ln K, which means a large K — products are heavily favoured and the reaction goes nearly to completion. A large positive ΔG° gives a large negative ln K, which means a very small K — reactants are strongly favoured and almost no product forms.'
      }
    },
    {
      type: 'callout',
      id: 'co-gibbs-k-unit-trap',
      data: {
        style: 'warning',
        title: 'Unit Trap: ΔG° Must Be in Joules',
        text: 'R = 8.314 J K⁻¹ mol⁻¹ — R is in joules.\nTherefore ΔG° must ALSO be in joules when using ΔG° = −RT ln K.\n\nIf ΔG° is given in kJ mol⁻¹, multiply by 1000 before substituting:\n\nΔG° = −60.0 kJ mol⁻¹  →  −60 000 J mol⁻¹\n\nForgetting this gives an answer about 1000× too large or too small!'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-gibbs-k-relationship',
      data: {
        caption: 'Relationship Between ΔG° and Equilibrium Constant K',
        headers: ['ΔG° sign', 'ln K sign', 'K value', 'Reaction position'],
        rows: [
          ['Large negative (e.g. −100 kJ)', 'Large positive', 'K >> 1', 'Products nearly complete — forward reaction favoured'],
          ['Small negative (e.g. −5 kJ)', 'Small positive', 'K slightly > 1', 'Slightly products-favoured'],
          ['Zero (ΔG° = 0)', 'Zero', 'K = 1', 'Reactants and products equally present at equilibrium'],
          ['Small positive (e.g. +5 kJ)', 'Small negative', 'K slightly < 1', 'Slightly reactants-favoured'],
          ['Large positive (e.g. +100 kJ)', 'Large negative', 'K << 1', 'Barely any product forms — reactants almost entirely remain']
        ]
      }
    },
    {
      type: 'callout',
      id: 'co-gibbs-k-worked',
      data: {
        style: 'worked',
        title: 'Worked Examples: Calculating K from ΔG°',
        text: 'Example 1: ΔG° = −60.0 kJ mol⁻¹ at 373 K\n\nStep 1 — Convert to joules: ΔG° = −60 000 J mol⁻¹\nStep 2 — Rearrange for ln K:\n  ln K = −ΔG° / RT = −(−60 000) / (8.314 × 373)\n  ln K = 60 000 / 3101 = 19.35\nStep 3 — Find K using eˣ:\n  K = e¹⁹·³⁵ = 2.53 × 10⁸\n\nVery large K → reaction goes almost to completion. ✓\n\n---\n\nExample 2: ΔG° = +60.0 kJ mol⁻¹ at 373 K\n\n  ln K = −(+60 000) / (8.314 × 373) = −19.35\n  K = e⁻¹⁹·³⁵ = 3.96 × 10⁻⁹\n\nVery small K → almost no product forms. ✓\n\nNote: On a calculator: to find K from ln K, press Shift + ln (i.e. the eˣ button), then enter the value.'
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
          { text: 'Critical T = ΔH / ΔS (watch units!)', checked: false },
          { text: 'ΔG° = −RT ln K links standard Gibbs energy to equilibrium constant', checked: false },
          { text: 'For ΔG° = −RT ln K: ΔG° must be in JOULES (multiply kJ by 1000); R = 8.314 J K⁻¹ mol⁻¹', checked: false },
          { text: 'Large negative ΔG° → large K (products favoured); large positive ΔG° → small K (reactants favoured)', checked: false }
        ]
      }
    },
    {
      id: "h-graph",
      type: "heading",
      data: { "text": "Analyzing ΔG vs T Graphs", "level": 2 }
    },
    {
      id: "p-graph",
      type: "paragraph",
      data: { "text": "You can plot ΔG on the y-axis against Temperature (T) on the x-axis. Comparing this to the equation of a straight line (y = mx + c):<br/><strong>ΔG = (−ΔS)T + ΔH</strong><br/>y = mx + c" }
    },
    {
      id: "list-graph",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "<strong>y-intercept (c):</strong> The value where the line crosses the y-axis is the enthalpy change (<strong>ΔH</strong>).",
          "<strong>Gradient (m):</strong> The slope of the line is exactly <strong>−ΔS</strong>. (So if the graph goes <em>downwards</em>, −ΔS is negative, which means ΔS is <em>positive</em>!).",
          "<strong>x-intercept:</strong> The point where the line crosses the x-axis (where ΔG = 0) is the exact temperature (T) at which the reaction becomes feasible."
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
      },
      {
        id: 'cue-5',
        blockId: 'h-graph',
        prompt: 'When plotting a graph of ΔG against Temperature (T), what do the y-intercept, gradient, and x-intercept represent?'
      },
      {
        id: 'cue-6',
        blockId: 'h-gibbs-equilibrium',
        prompt: 'State the equation linking ΔG° to K. Calculate K when ΔG° = −60.0 kJ mol⁻¹ at 373 K.'
      }
    ],
    summaryText: 'ΔG = ΔH − TΔS < 0 is spontaneous. Four cases. T_crit = ΔH/ΔS. On a ΔG vs T graph: y-intercept is ΔH, gradient is −ΔS, and x-intercept is T_crit. CaCO₃ decomposition: T_crit = 1110 K. ΔG° = −RT ln K: convert ΔG° to joules; large negative ΔG° → large K; large positive ΔG° → small K.',
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
