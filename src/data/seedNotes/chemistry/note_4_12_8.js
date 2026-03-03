export const note_chemistry_4_12_8 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-review-entropy',
      data: {
        text: 'Consolidate understanding of entropy, Gibbs free energy, and their applications to spontaneity, solubility, and phase transitions. Practice calculations and interpretation of thermodynamic data.'
      }
    },
    {
      type: 'heading',
      id: 'h-conceptual-summary',
      data: {
        text: 'Conceptual Summary: Entropy and Energetics',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-summary-1',
      data: {
        text: 'Thermodynamic spontaneity depends on two factors: enthalpy (ΔH, energy released/absorbed) and entropy (ΔS, increase/decrease in disorder). Neither alone determines whether a reaction occurs; we must consider both via Gibbs free energy: ΔG = ΔH − TΔS. When ΔG < 0, a process is spontaneous and will occur.'
      }
    },
    {
      type: 'heading',
      id: 'h-key-equations',
      data: {
        text: 'Essential Equations for Entropy and Energetics',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-equations-intro',
      data: {
        text: 'Master these four core equations to solve thermodynamic problems:'
      }
    },
    {
      type: 'equation',
      id: 'eq-entropy-surroundings',
      data: {
        html: '1. ΔS<sub>surroundings</sub> = <span class="nb-frac"><span class="nb-num">−ΔH<sub>system</sub></span><span class="nb-den">T</span></span>'
      }
    },
    {
      type: 'equation',
      id: 'eq-total-entropy-2',
      data: {
        html: '2. ΔS<sub>total</sub> = ΔS<sub>system</sub> + ΔS<sub>surroundings</sub> = ΔS<sub>system</sub> − <span class="nb-frac"><span class="nb-num">ΔH<sub>system</sub></span><span class="nb-den">T</span></span>'
      }
    },
    {
      type: 'equation',
      id: 'eq-gibbs-main',
      data: {
        html: '3. ΔG = ΔH − TΔS   (spontaneous when ΔG < 0)'
      }
    },
    {
      type: 'equation',
      id: 'eq-critical-temp-2',
      data: {
        html: '4. Critical temperature: T<sub>crit</sub> = <span class="nb-frac"><span class="nb-num">ΔH</span><span class="nb-den">ΔS</span></span>   (when ΔG = 0)'
      }
    },
    {
      type: 'heading',
      id: 'h-problem-solving-guide',
      data: {
        text: 'Problem-Solving Guide',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-psg-1',
      data: {
        text: 'When solving thermodynamic problems, follow these steps:'
      }
    },
    {
      type: 'paragraph',
      id: 'p-psg-2',
      data: {
        text: '1. Identify what is given (ΔH, ΔS, T, ΔG) and what is asked.\n2. Check units: ΔH in kJ, ΔS in J K⁻¹ mol⁻¹. Convert if needed (divide ΔS by 1000 to get kJ K⁻¹ mol⁻¹).\n3. Determine the signs of ΔH and ΔS to predict spontaneity trends.\n4. Calculate ΔG = ΔH − TΔS if T is given, or T_crit if solving for temperature.\n5. Interpret: ΔG < 0 is spontaneous; ΔG > 0 is non-spontaneous; ΔG = 0 is equilibrium.'
      }
    },
    {
      type: 'callout',
      id: 'co-unit-trap',
      data: {
        style: 'warning',
        title: 'Unit Conversion Trap',
        text: 'Common mistake: forgetting to convert ΔS to kJ K⁻¹ mol⁻¹ when calculating TΔS.\n\nCorrect:\nΔS = 100 J K⁻¹ mol⁻¹ = 0.1 kJ K⁻¹ mol⁻¹\nAt 298 K: TΔS = 298 × 0.1 = 29.8 kJ mol⁻¹\n\nWrong (common error):\nAt 298 K: TΔS = 298 × 100 = 29800 kJ mol⁻¹ (way too large!)'
      }
    },
    {
      type: 'heading',
      id: 'h-exam-questions',
      data: {
        text: 'Common Exam Question Types',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-exam-1',
      data: {
        text: 'Type A: "Predict the spontaneity of this reaction." Look at ΔH and ΔS signs. Use the four-case framework from note 4.12.4.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-exam-2',
      data: {
        text: 'Type B: "Calculate ΔG at temperature T." Use ΔG = ΔH − TΔS. Be careful with units. Interpret the sign.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-exam-3',
      data: {
        text: 'Type C: "At what temperature does this reaction become spontaneous?" Set ΔG = 0 and solve for T. This is T_crit = ΔH / ΔS. Then determine if spontaneity occurs above or below this T based on the signs of ΔH and ΔS.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-exam-4',
      data: {
        text: 'Type D: "Construct a Born-Haber cycle and find lattice enthalpy." Set up steps systematically (atomisation, ionisation, electron affinity, lattice). Use Hess\'s law: sum all ΔH values and solve for the unknown.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-exam-5',
      data: {
        text: 'Type E: "Explain why this compound dissolves / does not dissolve." Use ΔG = ΔH − TΔS and identify which term dominates. Consider lattice and hydration enthalpies.'
      }
    },
    {
      type: 'heading',
      id: 'h-worked-exam-question',
      data: {
        text: 'Worked Exam Question: Full Solution',
        level: 2
      }
    },
    {
      type: 'callout',
      id: 'co-exam-worked',
      data: {
        style: 'worked',
        title: 'Sample Exam Question',
        text: 'Question:\nSodium carbonate (Na₂CO₃) has ΔH_f = −1130 kJ mol⁻¹ and ΔS° = +140 J K⁻¹ mol⁻¹.\n\n(a) Predict the spontaneity of Na₂CO₃(s) formation at 298 K and 1000 K.\n(b) At what temperature does the reaction become non-spontaneous?\n(c) Explain your answers using ΔG = ΔH − TΔS.\n\nSolution:\n\n(a) At 298 K:\nΔG = ΔH − TΔS = −1130 − (298 × 0.140) = −1130 − 41.7 = −1171.7 kJ mol⁻¹\nΔG << 0 → Spontaneous and favourable ✓\n\nAt 1000 K:\nΔG = −1130 − (1000 × 0.140) = −1130 − 140 = −1270 kJ mol⁻¹\nΔG < 0 → Still spontaneous (even more so!)\n\n(b) The reaction becomes non-spontaneous when ΔG = 0:\nAt equilibrium: 0 = −1130 − TΔS\nT = ΔH / (−ΔS) = −1130 / (−0.140) ≈ 8071 K\n\nSince ΔH < 0 and ΔS > 0, both terms favour formation. ΔG will never become positive — the reaction remains spontaneous at all achievable temperatures.\n\n(c) Explanation:\nΔH < 0 (exothermic) → formation releases energy (negative contribution to ΔG)\nΔS > 0 (disorder increase) → −TΔS is negative (additional negative contribution to ΔG)\nBoth factors favour ΔG < 0, so formation is always spontaneous. Temperature has little effect because both terms work in the same direction.'
      }
    },
    {
      type: 'heading',
      id: 'h-quick-decision-tree',
      data: {
        text: 'Quick Decision Tree: Is It Spontaneous?',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-decision-1',
      data: {
        text: 'Use this flow chart to quickly predict spontaneity:\n\nStart: What are the signs of ΔH and ΔS?\n\n1. ΔH < 0 AND ΔS > 0 → Always spontaneous (all T) ✓✓\n2. ΔH > 0 AND ΔS < 0 → Never spontaneous (no T) ✗✗\n3. ΔH > 0 AND ΔS > 0 → Spontaneous only at high T (above T_crit) ↑\n4. ΔH < 0 AND ΔS < 0 → Spontaneous only at low T (below T_crit) ↓'
      }
    },
    {
      type: 'heading',
      id: 'h-thermodynamic-data-interpretation',
      data: {
        text: 'Interpreting Thermodynamic Data Tables',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-data-1',
      data: {
        text: 'Standard conditions: 298 K (25 °C), 100 kPa (1 atm). All values in data tables refer to these conditions unless stated otherwise.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-data-2',
      data: {
        text: 'ΔH_f (standard enthalpy of formation): Enthalpy change to form 1 mol of compound from its elements in their standard states. Elements have ΔH_f = 0 by definition.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-data-3',
      data: {
        text: 'S° (standard molar entropy): Absolute entropy of 1 mol at 298 K. Never negative (Third Law of Thermodynamics). Larger values indicate more disordered substances.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-data-4',
      data: {
        text: 'For a reaction: ΔH_reaction = Σ ΔH_f(products) − Σ ΔH_f(reactants)\nΔS_reaction = Σ S°(products) − Σ S°(reactants)'
      }
    },
    {
      type: 'heading',
      id: 'h-phase-equilibria-summary',
      data: {
        text: 'Phase Equilibria: Melting, Boiling, Dissolving',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-phase-eq-1',
      data: {
        text: 'At phase equilibrium (melting point, boiling point, saturation), ΔG = 0 and ΔG = 0 = ΔH − TΔS, so T = ΔH / ΔS.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-phase-eq-2',
      data: {
        text: 'For melting: T_melt = ΔH_fus / ΔS_fus. Ice at 273 K (0 °C) is in equilibrium with water; below this T, freezing is spontaneous; above it, melting is spontaneous.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-phase-eq-3',
      data: {
        text: 'For boiling: T_boil = ΔH_vap / ΔS_vap. Water at 373 K (100 °C) is in equilibrium with steam; below this T, condensation is spontaneous; above it, boiling is spontaneous.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-phase-eq-4',
      data: {
        text: 'For dissolving: At saturation, ΔG = 0. Below saturation (unsaturated), dissolution is spontaneous; above saturation (supersaturated), precipitation is spontaneous.'
      }
    },
    {
      type: 'checklist',
      id: 'cl-entropy-recap',
      data: {
        items: [
          { text: 'ΔG = ΔH − TΔS; spontaneous when ΔG < 0', checked: false },
          { text: 'ΔS_total = ΔS_sys − ΔH_sys/T; spontaneous when ΔS_total > 0', checked: false },
          { text: 'ΔH < 0, ΔS > 0 → always spontaneous', checked: false },
          { text: 'ΔH > 0, ΔS < 0 → never spontaneous', checked: false },
          { text: 'Same sign ΔH and ΔS → temperature-dependent spontaneity at T_crit = ΔH/ΔS', checked: false },
          { text: 'Lattice enthalpy: strength of ionic bonding (larger magnitude = stronger bonds)', checked: false },
          { text: 'Hydration enthalpy: energy released when gaseous ion is solvated', checked: false },
          { text: 'Solution enthalpy = lattice enthalpy + sum of hydration enthalpies', checked: false },
          { text: 'Most dissolution is entropy-driven despite being endothermic', checked: false },
          { text: 'Check units: ΔH in kJ, ΔS in J K⁻¹ mol⁻¹ (convert to kJ K⁻¹ mol⁻¹ when multiplying by T)', checked: false }
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
        text: 'Understand: Entropy, enthalpy, and Gibbs free energy together form a complete framework for predicting spontaneity and equilibrium.\n\nApply: For a reaction with ΔH = −50 kJ mol⁻¹ and ΔS = −100 J K⁻¹ mol⁻¹, find the temperature at which ΔG = 0.\n\nAnalyze: Compare the usefulness of ΔS_total vs ΔG for predicting spontaneity. Are they equivalent?\n\nEvaluate: Thermodynamics predicts IF a reaction occurs; kinetics predicts HOW FAST. Give an example where this distinction matters.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'sum-entropy-review',
      data: {
        text: 'Entropy and Gibbs free energy determine spontaneity: ΔG = ΔH − TΔS < 0 is spontaneous. Four cases combine ΔH and ΔS signs; temperature determines spontaneity when they have the same sign. Born-Haber cycles and solution thermodynamics apply these principles. Lattice and hydration enthalpies explain ionic bonding and solubility. Most processes are entropy-driven: disorder increase dominates at normal temperatures.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-key-equations',
        prompt: 'State the four essential equations for entropy and energetics, including the critical temperature formula.'
      },
      {
        id: 'cue-2',
        blockId: 'h-problem-solving-guide',
        prompt: 'List the five-step problem-solving strategy for thermodynamic questions.'
      },
      {
        id: 'cue-3',
        blockId: 'co-unit-trap',
        prompt: 'Explain the unit conversion trap with ΔS and show the correct calculation for TΔS.'
      },
      {
        id: 'cue-4',
        blockId: 'h-quick-decision-tree',
        prompt: 'Reproduce the quick decision tree for predicting spontaneity from ΔH and ΔS signs.'
      },
      {
        id: 'cue-5',
        blockId: 'co-exam-worked',
        prompt: 'Work through the Na₂CO₃ exam question, calculating ΔG at two temperatures and identifying the critical temperature.'
      }
    ],
    summaryText: 'ΔG = ΔH − TΔS < 0 is spontaneous. Four sign combinations: (1) ΔH<0, ΔS>0 always spontaneous; (2) ΔH>0, ΔS<0 never spontaneous; (3) ΔH>0, ΔS>0 spontaneous above T_crit; (4) ΔH<0, ΔS<0 spontaneous below T_crit. Critical T = ΔH/ΔS. Watch units: ΔS in J K⁻¹ mol⁻¹ requires conversion to kJ K⁻¹ mol⁻¹.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Na₂CO₃ Formation Always Spontaneous',
      detail: 'ΔH = −1130 kJ mol⁻¹, ΔS = +140 J K⁻¹ mol⁻¹. Both favour formation; ΔG < 0 at all T.',
      year: '2023',
      source: 'Thermodynamic Data Tables',
      tags: ['spontaneity', 'ΔH-ΔS', 'temperature-independent']
    },
    {
      id: 'ev-2',
      title: 'Unit Conversion Common Error',
      detail: 'Must convert ΔS from J K⁻¹ mol⁻¹ to kJ K⁻¹ mol⁻¹ before calculating TΔS in kJ mol⁻¹.',
      year: '2023',
      source: 'Exam Mark Schemes',
      tags: ['calculation', 'units', 'common-error']
    }
  ]
};
