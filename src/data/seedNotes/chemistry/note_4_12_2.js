export const note_chemistry_4_12_2 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-entropy-phase',
      data: {
        text: 'Understand entropy changes during phase transitions (melting and boiling) and dissolution, and recognise how temperature affects entropy.'
      }
    },
    {
      type: 'heading',
      id: 'h-phase-entropy',
      data: {
        text: 'Entropy Changes During Phase Transitions',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-phase-entropy-1',
      data: {
        text: 'When matter changes state, entropy changes dramatically. Melting (solid → liquid) and boiling (liquid → gas) both increase entropy because particles gain freedom of movement. The entropy change can be calculated using the phase transition enthalpy and the transition temperature.'
      }
    },
    {
      type: 'heading',
      id: 'h-melting-entropy',
      data: {
        text: 'Melting: Solid to Liquid',
        level: 3
      }
    },
    {
      type: 'paragraph',
      id: 'p-melting-entropy-1',
      data: {
        text: 'During melting, particles break free from their fixed lattice positions and can now move throughout the liquid. This dramatic increase in disorder means ΔS_melting is always positive and substantial. The entropy change for melting can be estimated using: ΔS = ΔH_fusion / T_melt'
      }
    },
    {
      type: 'paragraph',
      id: 'p-melting-entropy-2',
      data: {
        text: 'For example, ice melting at 273 K (0 °C): ΔH_fusion ≈ 6 kJ mol⁻¹, so ΔS_melting ≈ 6000 J mol⁻¹ ÷ 273 K ≈ 22 J K⁻¹ mol⁻¹. This is a significant entropy gain from just unlocking particle positions.'
      }
    },
    {
      type: 'heading',
      id: 'h-boiling-entropy',
      data: {
        text: 'Boiling: Liquid to Gas',
        level: 3
      }
    },
    {
      type: 'paragraph',
      id: 'p-boiling-entropy-1',
      data: {
        text: 'Boiling represents an even larger entropy increase than melting. Particles transition from a condensed liquid phase to a dilute gas where they occupy vastly more space and move freely. Boiling entropy changes are typically 4–10 times larger than melting entropy changes for the same substance.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-boiling-entropy-2',
      data: {
        text: 'For water boiling at 373 K (100 °C): ΔH_vap ≈ 40.6 kJ mol⁻¹, so ΔS_boiling ≈ 40600 J mol⁻¹ ÷ 373 K ≈ 109 J K⁻¹ mol⁻¹. This far exceeds the melting entropy change because the jump from liquid to gas is far more dramatic in terms of particle freedom.'
      }
    },
    {
      type: 'heading',
      id: 'h-dissolution-entropy',
      data: {
        text: 'Entropy Change During Dissolution',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-dissolution-entropy-1',
      data: {
        text: 'Dissolving a solid typically increases entropy. The solute particles separate and become dispersed throughout the solvent, greatly increasing the number of accessible microstates. This is true even when dissolution is endothermic — the entropy gain often outweighs the energy cost.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-dissolution-entropy-2',
      data: {
        text: 'Two entropy contributions occur during dissolution: (1) the solute particles are no longer confined to a lattice, increasing their entropy; (2) some solvent molecules become organised around the solute (hydration or solvation), which can slightly decrease their entropy. The net effect is usually a positive ΔS_solution because the liberation of solute particles dominates.'
      }
    },
    {
      type: 'callout',
      id: 'co-dissolution-example',
      data: {
        style: 'worked',
        title: 'Dissolving NH₄Cl: An Endothermic Example',
        text: 'NH₄Cl(s) → NH₄⁺(aq) + Cl⁻(aq)\nΔH ≈ +15 kJ mol⁻¹ (endothermic)\nΔS ≈ +100 J K⁻¹ mol⁻¹ (positive)\n\nDespite absorbing 15 kJ of energy, dissolution is spontaneous because the entropy increase is large enough. At 298 K: ΔG = 15000 − 298 × 100 = 15000 − 29800 = −14800 J mol⁻¹ < 0.'
      }
    },
    {
      type: 'heading',
      id: 'h-temperature-entropy',
      data: {
        text: 'Effect of Temperature on Entropy',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-temp-entropy-1',
      data: {
        text: 'Absolute entropy (S°) increases with temperature. As temperature rises, particles move faster and occupy more microstates — entropy increases. This is captured quantitatively by: ΔS = nC_p ln(T₂/T₁) for a substance, where C_p is heat capacity and T₁, T₂ are initial and final temperatures.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-temp-entropy-2',
      data: {
        text: 'The effect is modest within the solid or liquid phase (small C_p), but becomes dramatic at phase transitions. As temperature approaches a phase transition, the entropy of the current phase increases, and at the transition, entropy jumps sharply (ΔS_phase ≈ ΔH_phase / T_trans).'
      }
    },
    {
      type: 'paragraph',
      id: 'p-temp-entropy-3',
      data: {
        text: 'Near absolute zero (0 K), entropy approaches zero for perfect crystals (Third Law of Thermodynamics). Standard molar entropy S° at 298 K is the reference state — all entropy changes are measured relative to this.'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-phase-entropy',
      data: {
        caption: 'Entropy Changes in Phase Transitions',
        headers: ['Transition', 'Direction', 'ΔS Sign', 'Relative Size', 'Particle Freedom Change'],
        rows: [
          ['Melting', 'Solid → Liquid', 'Positive', 'Moderate (~20–30 J K⁻¹ mol⁻¹)', 'Particles unlock from lattice'],
          ['Boiling', 'Liquid → Gas', 'Positive', 'Large (~80–120 J K⁻¹ mol⁻¹)', 'Particles widely separated, free movement'],
          ['Sublimation', 'Solid → Gas', 'Positive', 'Very large (~150+ J K⁻¹ mol⁻¹)', 'Combined effect of melting + boiling'],
          ['Freezing', 'Liquid → Solid', 'Negative', 'Moderate (~−20–30 J K⁻¹ mol⁻¹)', 'Particles lock into lattice'],
          ['Condensation', 'Gas → Liquid', 'Negative', 'Large (~−80–120 J K⁻¹ mol⁻¹)', 'Particles crowded together']
        ]
      }
    },
    {
      type: 'callout',
      id: 'co-entropy-prediction',
      data: {
        style: 'tip',
        title: 'Predicting Entropy Change Sign',
        text: 'Melting, boiling, dissolving, and gas expansion → ΔS > 0\nFreezing, condensation, and gas compression → ΔS < 0\nUse particle freedom and disorder as your guide: more freedom = ΔS > 0'
      }
    },
    {
      type: 'checklist',
      id: 'cl-entropy-transitions',
      data: {
        items: [
          { text: 'Melting increases entropy (particles unlock); ΔS_melting = ΔH_fusion / T_melt', checked: false },
          { text: 'Boiling increases entropy even more (particles become gas); ΔS_boiling >> ΔS_melting', checked: false },
          { text: 'Dissolution usually increases entropy despite sometimes being endothermic', checked: false },
          { text: 'Higher temperature increases entropy within a phase', checked: false },
          { text: 'Freezing, condensation, and compression decrease entropy (ΔS < 0)', checked: false }
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
        text: 'Understand: Phase transitions involve large entropy changes because the degree of disorder changes dramatically — especially solid→liquid and liquid→gas.\n\nApply: Calculate ΔS for the melting of ice given ΔH_fus = 6.01 kJ mol⁻¹ at 273 K using ΔS = ΔH/T.\n\nAnalyze: Why is ΔS_vaporisation much larger than ΔS_fusion for the same substance?\n\nEvaluate: Dissolution of NaCl increases system entropy but is endothermic. Assess whether it is spontaneous at 25°C.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'sum-phase-entropy',
      data: {
        text: 'Melting and boiling both increase entropy as particles gain freedom. Boiling entropy changes are much larger than melting. Dissolution usually increases entropy even when endothermic. Temperature increase raises entropy within a phase and dramatically at transitions. Use ΔS = ΔH / T at equilibrium to estimate phase transition entropy changes.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-melting-entropy',
        prompt: 'Why does melting always increase entropy? Calculate ΔS for ice melting at 273 K (ΔH_fus = 6 kJ mol⁻¹).'
      },
      {
        id: 'cue-2',
        blockId: 'h-boiling-entropy',
        prompt: 'Why is the entropy change for boiling much larger than for melting?'
      },
      {
        id: 'cue-3',
        blockId: 'h-dissolution-entropy',
        prompt: 'How can endothermic dissolution (e.g. NH₄Cl) be spontaneous if it requires energy input?'
      },
      {
        id: 'cue-4',
        blockId: 'h-temperature-entropy',
        prompt: 'Explain how temperature affects entropy. How does the Third Law relate to this?'
      }
    ],
    summaryText: 'Phase transitions increase entropy: melting (~20 J K⁻¹ mol⁻¹), boiling (~100 J K⁻¹ mol⁻¹). Dissolution increases entropy. Higher T increases S within a phase. Use ΔS = ΔH / T_trans for phase changes.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Water Melting Entropy',
      detail: 'At 273 K, ΔH_fus = 6.01 kJ mol⁻¹. ΔS_melting = 6010 / 273 ≈ 22 J K⁻¹ mol⁻¹',
      year: '2023',
      source: 'Thermodynamic Data Tables',
      tags: ['phase-change', 'entropy', 'calculation']
    },
    {
      id: 'ev-2',
      title: 'Water Boiling Entropy',
      detail: 'At 373 K, ΔH_vap = 40.7 kJ mol⁻¹. ΔS_boiling = 40700 / 373 ≈ 109 J K⁻¹ mol⁻¹',
      year: '2023',
      source: 'Thermodynamic Data Tables',
      tags: ['phase-change', 'entropy', 'calculation']
    }
  ]
};
