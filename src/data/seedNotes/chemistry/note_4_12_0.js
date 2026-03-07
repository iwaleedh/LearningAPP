export const note_chemistry_4_12_0 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-spontaneity',
      data: {
        text: 'Understand that spontaneity is not determined by enthalpy alone; exothermic reactions are not always spontaneous, and endothermic reactions can be spontaneous.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-equilibrium-framing',
      data: {
        text: 'Every reaction reaches a position of equilibrium — the real question is not "does this reaction happen?" but "where does the position of equilibrium lie?" For some reactions the equilibrium lies so far to the right that the reaction appears complete (e.g. combustion). For others, equilibrium lies mostly to the left and little product forms. Thermodynamics predicts which direction is favoured and how far the reaction proceeds; entropy and Gibbs free energy quantify this.'
      }
    },
    {
      type: 'heading',
      id: 'h-exo-limits',
      data: {
        text: 'Exothermic Reactions Are Not Always Spontaneous',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-exo-limits-1',
      data: {
        text: 'Many spontaneous reactions release energy (ΔH < 0), but the converse is not true: not all exothermic reactions occur spontaneously. Consider ice melting at room temperature — the reverse reaction (water freezing) is exothermic (ΔH < 0), yet ice will melt rather than freeze because the temperature and entropy effects override enthalpy.'
      }
    },
    {
      type: 'callout',
      id: 'co-exo-example',
      data: {
        style: 'worked',
        title: 'Example: Reverse Freezing',
        text: 'H₂O(l) → H₂O(s)   ΔH ≈ −6 kJ mol⁻¹ (exothermic)\n\nAt 25 °C, this reaction does NOT occur spontaneously despite being exothermic. The freezing point is 0 °C; above this, water molecules have enough thermal energy to disorder rather than crystallise. Entropy opposes the process.'
      }
    },
    {
      type: 'heading',
      id: 'h-endo-spontaneous',
      data: {
        text: 'Endothermic Reactions Can Be Spontaneous',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-endo-spont-1',
      data: {
        text: 'Many processes absorb energy yet proceed spontaneously at certain temperatures. Dissolving ammonium nitrate in water is strongly endothermic (ΔH ≈ +26 kJ mol⁻¹), yet it dissolves readily. Similarly, melting ice above 0 °C, boiling water above 100 °C, and many dissolving salts occur spontaneously despite absorbing heat from the surroundings.'
      }
    },
    {
      type: 'callout',
      id: 'co-endo-example',
      data: {
        style: 'tip',
        title: 'Exam Tip: Recognise Endothermic Spontaneity',
        text: 'If a question describes a process that absorbs heat but occurs naturally, entropy must be driving it. Look for increased disorder: gas evolution, dissolving in solution, melting, boiling, or increased particle count.'
      }
    },
    {
      type: 'heading',
      id: 'h-enthalpy-limitation',
      data: {
        text: 'Enthalpy Alone Cannot Predict Spontaneity',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-enth-limit-1',
      data: {
        text: 'The sign of ΔH is necessary but not sufficient to determine whether a reaction is spontaneous. A second thermodynamic property — entropy (S) — must also be considered. Spontaneity depends on both the energy released (ΔH) and the increase in disorder (ΔS), as well as the absolute temperature. This is captured by Gibbs free energy: ΔG = ΔH − TΔS.'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-spontaneity-limits',
      data: {
        caption: 'Why Enthalpy Fails as a Sole Predictor',
        headers: ['Reaction Type', 'ΔH Sign', 'Common Feature', 'Limitation'],
        rows: [
          ['Combustion', 'Negative (exothermic)', 'Usually spontaneous', 'Some exothermic reactions don\'t occur (e.g. kinetic barriers)'],
          ['Freezing at 25°C', 'Negative (exothermic)', 'NOT spontaneous', 'ΔH < 0 but ΔS is very negative; T cancels the benefit'],
          ['Dissolving NH₄NO₃', 'Positive (endothermic)', 'Spontaneous at 25°C', 'ΔH > 0 yet ΔS >> 0 drives the process'],
          ['Decomposition', 'Can be either', 'Temperature-dependent', 'At low T, ΔH dominates; at high T, TΔS dominates']
        ]
      }
    },
    {
      type: 'paragraph',
      id: 'p-enth-limit-2',
      data: {
        text: 'Spontaneity ultimately reflects the Second Law of Thermodynamics: for an isolated system, spontaneous processes increase total entropy (ΔS_total > 0). When we include the surroundings, even an endothermic process can increase total entropy if it releases enough disorder to compensate.'
      }
    },
    {
      type: 'callout',
      id: 'co-second-law',
      data: {
        style: 'key',
        title: 'The Second Law Rules',
        text: 'Spontaneous processes increase the entropy of the universe. ΔH is just one factor; ΔS is equally important. A reaction with ΔH > 0 and ΔS > 0 can still be spontaneous at high temperatures.'
      }
    },
    {
      type: 'heading',
      id: 'h-kinetic-barrier',
      data: {
        text: 'Kinetic vs. Thermodynamic Spontaneity',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-kinetic-barrier',
      data: {
        text: 'Even if a reaction is thermodynamically spontaneous (ΔG < 0), it may not happen at a measurable rate if the activation energy is very high. Diamond → graphite is spontaneous at room temperature, yet diamonds don\'t convert because the activation barrier is enormous. Thermodynamic spontaneity tells us what CAN happen; kinetics tells us what WILL happen in a reasonable timeframe.'
      }
    },
    {
      type: 'callout',
      id: 'co-kinetic-stability-examples',
      data: {
        style: 'worked',
        title: 'Kinetic vs Thermodynamic Stability: Concrete Examples',
        text: 'Carbon + oxygen → CO₂: Thermodynamically very feasible (ΔG << 0), but carbon sitting in air does NOT spontaneously combust — it is kinetically stable at room temperature because the activation energy barrier is too high without an ignition source.\n\nMethane + oxygen → CO₂ + H₂O: Also thermodynamically very feasible. Yet natural gas can be stored safely at room temperature — kinetically stable because C–H bonds require significant activation energy to break.\n\nH₂ + O₂ → H₂O: The mixture of gases coexists without reacting at room temperature (kinetically stable). Thermodynamically: ΔG << 0 (highly favoured). Introduce a spark → immediate reaction.\n\nKey distinction:\n• Thermodynamic feasibility (ΔG < 0) → tells us the DIRECTION and position of equilibrium.\n• Kinetic stability (high Eₐ) → determines whether the reaction actually proceeds at a useful rate.'
      }
    },
    {
      type: 'checklist',
      id: 'cl-spont-limits',
      data: {
        items: [
          { text: 'ΔH < 0 (exothermic) does not guarantee spontaneity', checked: false },
          { text: 'ΔH > 0 (endothermic) does not prevent spontaneity if ΔS is large enough', checked: false },
          { text: 'Gibbs free energy ΔG = ΔH − TΔS combines both factors', checked: false },
          { text: 'Spontaneous when ΔG < 0, non-spontaneous when ΔG > 0', checked: false },
          { text: 'Kinetic barriers can prevent spontaneous reactions from occurring', checked: false }
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
        text: 'Understand: Spontaneity requires ΔS_total > 0, not just ΔH < 0. Endothermic reactions can be spontaneous if the entropy increase is large enough.\n\nApply: NH₄NO₃ dissolving is endothermic but spontaneous. Explain using entropy changes.\n\nAnalyze: Why is the combustion of diamond thermodynamically spontaneous but kinetically inert at room temperature?\n\nEvaluate: "Exothermic reactions are always spontaneous." Provide two counter-examples and explain.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'sum-spont',
      data: {
        text: 'Spontaneity depends on both enthalpy and entropy. Exothermic reactions are often spontaneous, but not always — entropy may oppose them. Endothermic reactions can be spontaneous if entropy increases sufficiently. The true criterion is Gibbs free energy: ΔG < 0 indicates spontaneity.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-exo-limits',
        prompt: 'Why is the freezing of water at 25 °C exothermic but not spontaneous?'
      },
      {
        id: 'cue-2',
        blockId: 'h-endo-spontaneous',
        prompt: 'Give an example of an endothermic reaction that is spontaneous. Why does it occur despite absorbing heat?'
      },
      {
        id: 'cue-3',
        blockId: 'h-enthalpy-limitation',
        prompt: 'What is the limitation of using ΔH alone to predict spontaneity?'
      },
      {
        id: 'cue-4',
        blockId: 'h-kinetic-barrier',
        prompt: 'Distinguish between thermodynamic spontaneity and kinetic spontaneity using diamond as an example.'
      }
    ],
    summaryText: 'ΔH is insufficient alone. ΔG = ΔH − TΔS is the true criterion: ΔG < 0 → spontaneous. Exothermic reactions often occur, but entropy can prevent them. Endothermic reactions can be driven by entropy gain at high enough T.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Freezing Point Depression',
      detail: 'Water freezes at 0 °C; below this, ΔG < 0. Above 0 °C, TΔS > ΔH despite ΔH < 0.',
      year: '2023',
      source: 'A-Level Chemistry Specification',
      tags: ['phase-change', 'entropy', 'temperature']
    },
    {
      id: 'ev-2',
      title: 'Ammonium Nitrate Dissolution',
      detail: 'NH₄NO₃(s) → NH₄⁺(aq) + NO₃⁻(aq); ΔH ≈ +26 kJ mol⁻¹, yet spontaneous. Large ΔS from solvation drives the process.',
      year: '2023',
      source: 'Thermodynamics Practicals',
      tags: ['endothermic', 'dissolution', 'entropy-driven']
    }
  ]
};
