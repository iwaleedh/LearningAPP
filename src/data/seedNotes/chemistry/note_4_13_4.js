export const note_chemistry_4_13_4 = {
  blocks: [
    {
      id: 'obj-temp',
      type: 'objective',
      data: {
        text: 'Understand how temperature changes affect the equilibrium constant K; predict direction of shift for exothermic and endothermic reactions; interpret temperature effects on equilibrium position'
      }
    },
    {
      id: 'h-temp-effect',
      type: 'heading',
      data: { text: 'Temperature as the ONLY Factor That Changes K', level: 2 }
    },
    {
      id: 'p-temp-intro',
      type: 'paragraph',
      data: {
        text: 'Temperature is unique among factors affecting equilibrium: it is the only condition that changes the value of K itself. Changes in concentration or pressure shift the equilibrium position but leave K unchanged. Temperature changes alter K, which then drives a new equilibrium position. The direction and magnitude of the change depend on whether the reaction is exothermic or endothermic.'
      }
    },
    {
      id: 'h-exothermic',
      type: 'heading',
      data: { text: 'Exothermic Reactions (ΔH < 0)', level: 2 }
    },
    {
      id: 'p-exo',
      type: 'paragraph',
      data: {
        text: 'For an exothermic reaction, increasing temperature shifts the equilibrium to the left (backward, towards reactants) and DECREASES K. This occurs because the system treats the added heat as a "product" and shifts to consume it. Conversely, decreasing temperature shifts equilibrium to the right (forward, towards products) and INCREASES K.'
      }
    },
    {
      id: 'ex-exo-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ mol⁻¹ (exothermic)',
        text: 'At 500 K, Kp = 1.45 × 10⁻⁵ atm⁻². At 400 K (lower temperature), Kp increases to ~0.016 atm⁻² because the lower temperature shifts equilibrium towards products. This is why the Haber process uses low temperature (~450 K) and high pressure—though kinetically slow, the equilibrium position is favourable.'
      }
    },
    {
      id: 'h-endothermic',
      type: 'heading',
      data: { text: 'Endothermic Reactions (ΔH > 0)', level: 2 }
    },
    {
      id: 'p-endo',
      type: 'paragraph',
      data: {
        text: 'For an endothermic reaction, increasing temperature shifts the equilibrium to the right (forward, towards products) and INCREASES K. The system treats the added heat as a "reactant" and shifts to consume it. Decreasing temperature shifts equilibrium to the left (backward, towards reactants) and DECREASES K.'
      }
    },
    {
      id: 'ex-endo-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: N₂O₄ ⇌ 2NO₂, ΔH = +57 kJ mol⁻¹ (endothermic)',
        text: 'At room temperature, the equilibrium mixture is mostly colourless N₂O₄. Upon heating, the equilibrium shifts right to produce brown NO₂ gas, and K increases. Upon cooling, the mixture becomes colourless again as K decreases and the equilibrium shifts left. This colour change is a visual demonstration of temperature effects on equilibrium.'
      }
    },
    {
      id: 'p-rule',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Temperature and K Rule',
        text: 'Exothermic (ΔH < 0): Increase T → K decreases, shift left. Decrease T → K increases, shift right. Endothermic (ΔH > 0): Increase T → K increases, shift right. Decrease T → K decreases, shift left. Always check the sign of ΔH to predict the effect.'
      }
    },
    {
      id: 'h-catalyst-reminder',
      type: 'heading',
      data: { text: 'Catalyst Effect (Reminder)', level: 2 }
    },
    {
      id: 'p-cat-reminder',
      type: 'paragraph',
      data: {
        text: 'A catalyst lowers the activation energy for both forward and backward reactions equally. It speeds up the rate at which equilibrium is reached but does NOT change the equilibrium position or K. The catalyst does not affect the thermodynamics of the reaction.'
      }
    },
    {
      id: 'tbl-all-factors',
      type: 'comparisonTable',
      data: {
        headers: ['Factor', 'Effect on Position', 'Effect on K', 'Applies To'],
        rows: [
          ['Increase [reactant]', 'Shifts right', 'No change', 'All equilibria'],
          ['Increase [product]', 'Shifts left', 'No change', 'All equilibria'],
          ['Increase pressure', 'Towards fewer moles', 'No change', 'Δn ≠ 0 only'],
          ['Decrease pressure', 'Towards more moles', 'No change', 'Δn ≠ 0 only'],
          ['Increase temperature', 'Exo: left; Endo: right', 'Exo: ↓; Endo: ↑', 'All equilibria'],
          ['Decrease temperature', 'Exo: right; Endo: left', 'Exo: ↑; Endo: ↓', 'All equilibria'],
          ['Add catalyst', 'No change', 'No change', 'All equilibria']
        ],
        caption: 'Summary of all factors affecting equilibrium'
      }
    },
    {
      id: 'h-practical',
      type: 'heading',
      data: { text: 'Practical Implications', level: 2 }
    },
    {
      id: 'p-haber',
      type: 'paragraph',
      data: {
        text: 'The Haber process (N₂ + 3H₂ ⇌ 2NH₃) is exothermic with ΔH = −92 kJ mol⁻¹. Thermodynamically, low temperature favours product formation (NH₃). However, reaction kinetics are very slow at low temperature. A compromise is used: ~450 K and high pressure (200 atm) with an iron catalyst. The high pressure favours products (fewer moles on right), the moderate temperature is a compromise, and the catalyst ensures reasonable reaction rate.'
      }
    },
    {
      id: 'checklist-temp',
      type: 'checklist',
      data: {
        items: [
          { text: 'Understand that temperature is the only factor that changes K', checked: false },
          { text: 'Can predict K changes for exothermic reactions', checked: false },
          { text: 'Can predict K changes for endothermic reactions', checked: false },
          { text: 'Know that catalysts do not affect K or equilibrium position', checked: false },
          { text: 'Can explain the Haber process conditions', checked: false }
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
        text: 'Understand: For exothermic reactions, increasing T decreases K. For endothermic reactions, increasing T increases K. This is the ONLY factor that changes K.\n\nApply: Kc for an exothermic reaction is 500 at 300 K. Predict whether Kc is greater or less than 500 at 400 K.\n\nAnalyze: Draw a graph of ln K vs 1/T for an exothermic reaction. What is the gradient?\n\nEvaluate: Can a reaction have K = exactly 0 or K = infinity? What would this mean physically?'
      },
      terms: []
    },
    {
      id: 'summary-temp',
      type: 'summary',
      data: {
        text: 'Temperature is the ONLY factor that changes K. Exothermic reactions: increase T → K decreases (left shift). Endothermic reactions: increase T → K increases (right shift). Catalysts do not change K or position. Concentration and pressure changes shift position but do not change K.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-temp-intro',
        prompt: 'Why is temperature unique among factors affecting equilibrium?'
      },
      {
        id: 'cue-2',
        blockId: 'p-exo',
        prompt: 'For an exothermic reaction, what happens to K when temperature increases?'
      },
      {
        id: 'cue-3',
        blockId: 'p-endo',
        prompt: 'For an endothermic reaction, what happens to K when temperature increases?'
      },
      {
        id: 'cue-4',
        blockId: 'ex-endo-1',
        prompt: 'Explain why N₂O₄ ⇌ 2NO₂ changes colour when heated. What is the colour change?'
      },
      {
        id: 'cue-5',
        blockId: 'p-haber',
        prompt: 'Why does the Haber process use ~450 K and high pressure instead of even lower temperature?'
      }
    ],
    summaryText: 'Temperature changes K; all other factors do not. Exothermic: high T → K ↓ (left shift). Endothermic: high T → K ↑ (right shift). Catalysts speed up equilibrium but do not change K or position. Concentration and pressure shift position without changing K.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Temperature Effects on Equilibrium Constant',
      detail: 'Temperature is the only factor that changes K; direction depends on ΔH sign.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['equilibrium', 'K', 'temperature', 'exothermic', 'endothermic']
    }
  ]
};
