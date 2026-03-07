export const note_chemistry_4_12_3 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-total-entropy',
      data: {
        text: 'Understand that spontaneity depends on the total entropy change of system and surroundings, and apply the relationship ΔS_total = ΔS_system + ΔS_surroundings and ΔS_surr = −ΔH_sys / T.'
      }
    },
    {
      type: 'heading',
      id: 'h-entropy-intro',
      data: { text: 'What is Entropy?', level: 2 }
    },
    {
      type: 'callout',
      id: 'callout-entropy-def',
      data: {
        style: 'key',
        title: 'Entropy & Arrangements',
        text: 'Entropy (<strong>S</strong>) is a measure of the disorder or randomness in a system. It is fundamentally linked to the number of possible arrangements (<strong>W</strong>) of particles and their energy. The more ways particles and energy can be distributed, the higher the entropy.<br/><br/>Gases have a much higher entropy than liquids, and liquids have a higher entropy than solids, because gas particles move freely and have virtually infinite possible arrangements.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-predicting-entropy',
      data: { text: 'We can often predict whether the entropy of a system increases or decreases just by looking at a chemical equation:' }
    },
    {
      type: 'list',
      id: 'list-entropy-rules',
      data: {
        style: 'bullet',
        items: [
          '<strong>Change of State:</strong> Solid → Liquid → Gas results in an <em>increase</em> in entropy.',
          '<strong>Number of Moles:</strong> A reaction that produces <em>more</em> moles of products than reactants (especially gas moles) results in an <em>increase</em> in entropy.'
        ]
      }
    },
    {
      type: 'heading',
      id: 'h-stability',
      data: { text: 'Thermodynamic vs Kinetic Stability', level: 2 }
    },
    {
      type: 'comparisonTable',
      id: 'table-stability',
      data: {
        caption: 'Comparing Stability Types',
        headers: ['Type', 'Governed By', 'Meaning'],
        rows: [
          ['Thermodynamic Stability', 'Entropy (ΔS_total)', 'Describes whether a reaction is fundamentally feasible or spontaneous. If thermodynamically <em>unstable</em>, the reaction <em>wants</em> to happen.'],
          ['Kinetic Stability', 'Activation Energy (Ea)', 'Describes the rate. A mixture might be thermodynamically unstable but kinetically stable (e.g. petrol and oxygen at room temp won\'t combust without a spark - high Ea).']
        ]
      }
    },
    {
      type: 'callout',
      id: 'callout-entropy-sys',
      data: {
        style: 'key',
        title: 'Entropy of System (ΔS_system)',
        text: 'Calculated using standard entropy values from a data booklet.<br/><br/><strong>ΔS_system = ΣS(products) - ΣS(reactants)</strong><br/><br/><em>Units: J K⁻¹ mol⁻¹</em>'
      }
    },
    {
      type: 'heading',
      id: 'h-system-surroundings',
      data: {
        text: 'System, Surroundings, and the Universe',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-sys-surr-1',
      data: {
        text: 'In thermodynamics, we divide the world into three parts: the system (the reaction or process we are studying), the surroundings (everything else in contact with the system), and the universe (system + surroundings). Energy is conserved between them: if the system releases heat, the surroundings absorb it, and vice versa.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-sys-surr-2',
      data: {
        text: 'The Second Law of Thermodynamics states that for a spontaneous process, the entropy of the universe increases: ΔS_universe > 0. This means: ΔS_system + ΔS_surroundings > 0'
      }
    },
    {
      type: 'callout',
      id: 'co-second-law-statement',
      data: {
        style: 'key',
        title: 'The Second Law and Spontaneity',
        text: 'A process is spontaneous if and only if: ΔS_total = ΔS_system + ΔS_surroundings > 0\n\nA process is at equilibrium if ΔS_total = 0\nA process is non-spontaneous if ΔS_total < 0'
      }
    },
    {
      type: 'heading',
      id: 'h-entropy-surroundings',
      data: {
        text: 'Entropy Change of the Surroundings',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-entropy-surr-1',
      data: {
        text: 'The surroundings are typically a large heat reservoir at constant temperature T. When the system releases heat (exothermic, ΔH < 0), the surroundings absorb that heat and their entropy increases. When the system absorbs heat (endothermic, ΔH > 0), the surroundings release heat and their entropy decreases.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-entropy-surr-2',
      data: {
        text: 'The entropy change of the surroundings is proportional to the heat transferred: ΔS_surroundings = q_surr / T'
      }
    },
    {
      type: 'paragraph',
      id: 'p-entropy-surr-3',
      data: {
        text: 'At constant pressure, the heat absorbed by the surroundings equals the negative of the system\'s enthalpy change (energy conservation): q_surr = −ΔH_system. Therefore:'
      }
    },
    {
      type: 'equation',
      id: 'eq-entropy-surr',
      data: {
        html: 'ΔS<sub>surroundings</sub> = <span class="nb-frac"><span class="nb-num">−ΔH<sub>system</sub></span><span class="nb-den">T</span></span>'
      }
    },
    {
      type: 'callout',
      id: 'co-entropy-surr-expl',
      data: {
        style: 'tip',
        title: 'Understanding the Surroundings Formula',
        text: 'If ΔH_system < 0 (exothermic): −ΔH_system > 0, so ΔS_surr > 0 ✓ (surroundings gain disorder)\nIf ΔH_system > 0 (endothermic): −ΔH_system < 0, so ΔS_surr < 0 ✗ (surroundings lose disorder)\n\nFor spontaneity at high T, a large positive ΔS_system can overcome a negative ΔS_surr.'
      }
    },
    {
      type: 'heading',
      id: 'h-total-entropy-calc',
      data: {
        text: 'Calculating Total Entropy Change',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-total-entropy-1',
      data: {
        text: 'The total entropy change of the universe is the sum of entropy changes in the system and surroundings:'
      }
    },
    {
      type: 'equation',
      id: 'eq-total-entropy',
      data: {
        html: 'ΔS<sub>total</sub> = ΔS<sub>system</sub> + ΔS<sub>surroundings</sub> = ΔS<sub>system</sub> − <span class="nb-frac"><span class="nb-num">ΔH<sub>system</sub></span><span class="nb-den">T</span></span>'
      }
    },
    {
      type: 'callout',
      id: 'co-total-entropy-example',
      data: {
        style: 'worked',
        title: 'Melting Ice at Different Temperatures',
        text: 'H₂O(s) → H₂O(l)   ΔH_sys ≈ +6 kJ mol⁻¹ (endothermic at melting point)\nΔS_sys ≈ +22 J K⁻¹ mol⁻¹\n\nAt 273 K (0 °C, melting point):\nΔS_surr = −6000 / 273 ≈ −22 J K⁻¹ mol⁻¹\nΔS_total = 22 + (−22) = 0 → At equilibrium ✓\n\nAt 278 K (5 °C, above melting point):\nΔS_surr = −6000 / 278 ≈ −21.6 J K⁻¹ mol⁻¹\nΔS_total = 22 + (−21.6) = +0.4 > 0 → Spontaneous ✓\n\nAt 268 K (−5 °C, below melting point):\nΔS_surr = −6000 / 268 ≈ −22.4 J K⁻¹ mol⁻¹\nΔS_total = 22 + (−22.4) = −0.4 < 0 → Non-spontaneous ✓'
      }
    },
    {
      type: 'heading',
      id: 'h-spontaneity-entropy',
      data: {
        text: 'Predicting Spontaneity Using Total Entropy',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-spont-entropy-1',
      data: {
        text: 'When ΔS_system > 0 and ΔH_system < 0 (exothermic, increasing disorder): Both ΔS_sys and ΔS_surr are positive, so ΔS_total is always positive. These reactions are spontaneous at all temperatures.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-spont-entropy-2',
      data: {
        text: 'When ΔS_system < 0 and ΔH_system > 0 (endothermic, decreasing disorder): Both ΔS_sys and ΔS_surr are negative, so ΔS_total is always negative. These reactions are never spontaneous.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-spont-entropy-3',
      data: {
        text: 'When ΔS_system > 0 and ΔH_system > 0 (endothermic but disordered): ΔS_sys is positive but ΔS_surr is negative. At low T, ΔS_surr dominates (large negative term) and ΔS_total < 0. At high T, ΔS_sys dominates (TΔS grows larger) and ΔS_total > 0. These reactions are spontaneous above a critical temperature.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-spont-entropy-4',
      data: {
        text: 'When ΔS_system < 0 and ΔH_system < 0 (exothermic but ordered): ΔS_sys is negative but ΔS_surr is positive. At low T, ΔS_surr dominates and ΔS_total > 0. At high T, the TΔS_surr term shrinks and ΔS_total < 0. These reactions are spontaneous only below a critical temperature.'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-spontaneity-total',
      data: {
        caption: 'Spontaneity Based on ΔH and ΔS of System',
        headers: ['ΔH_system', 'ΔS_system', 'ΔS_total Behaviour', 'Spontaneity'],
        rows: [
          ['Negative (exo)', 'Positive (disorder)', 'Always > 0', 'Always spontaneous (all T)'],
          ['Positive (endo)', 'Negative (order)', 'Always < 0', 'Never spontaneous (no T)'],
          ['Positive (endo)', 'Positive (disorder)', 'Negative at low T, positive at high T', 'Spontaneous only above T_crit'],
          ['Negative (exo)', 'Negative (order)', 'Positive at low T, negative at high T', 'Spontaneous only below T_crit']
        ]
      }
    },
    {
      type: 'checklist',
      id: 'cl-total-entropy',
      data: {
        items: [
          { text: 'ΔS_total = ΔS_system + ΔS_surroundings; spontaneous when ΔS_total > 0', checked: false },
          { text: 'ΔS_surroundings = −ΔH_system / T', checked: false },
          { text: 'Exothermic reactions increase surroundings entropy', checked: false },
          { text: 'At the equilibrium point, ΔS_total = 0', checked: false },
          { text: 'Temperature affects the balance between ΔS_system and ΔS_surroundings', checked: false }
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
        text: 'Understand: ΔS_total = ΔS_system + ΔS_surroundings. The surroundings\' entropy change depends on heat transfer: ΔS_surr = −ΔH/T.\n\nApply: For a reaction with ΔH = −100 kJ mol⁻¹ and ΔS_system = −50 J K⁻¹ mol⁻¹ at 298 K, calculate ΔS_total and determine spontaneity.\n\nAnalyze: How does temperature affect whether an endothermic reaction is spontaneous? Use ΔS_surr = −ΔH/T.\n\nEvaluate: At what temperature does CaCO₃ decomposition become spontaneous? Discuss the assumptions in this calculation.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'sum-total-entropy',
      data: {
        text: 'Spontaneity depends on total entropy: ΔS_total = ΔS_system − ΔH_system/T > 0. The surroundings\' entropy change is ΔS_surr = −ΔH_sys/T. Exothermic reactions increase surroundings entropy; endothermic reactions decrease it. At a phase transition equilibrium, ΔS_total = 0, and T determines which direction is spontaneous.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-0a',
        blockId: 'list-entropy-rules',
        prompt: 'How do changes of state and moles affect the entropy of a system?'
      },
      {
        id: 'cue-0b',
        blockId: 'table-stability',
        prompt: 'What is the difference between thermodynamic and kinetic stability?'
      },
      {
        id: 'cue-0c',
        blockId: 'callout-entropy-sys',
        prompt: 'State the formula for calculating the Entropy of the System.'
      },
      {
        id: 'cue-1',
        blockId: 'h-system-surroundings',
        prompt: 'State the Second Law of Thermodynamics in terms of total entropy.'
      },
      {
        id: 'cue-2',
        blockId: 'h-entropy-surroundings',
        prompt: 'Derive and explain the formula ΔS_surroundings = −ΔH_system / T.'
      },
      {
        id: 'cue-3',
        blockId: 'h-total-entropy-calc',
        prompt: 'Calculate ΔS_total for melting ice at 268 K, 273 K, and 278 K. Explain the results.'
      },
      {
        id: 'cue-4',
        blockId: 'h-spontaneity-entropy',
        prompt: 'Under what temperature condition is an endothermic reaction with ΔS_system > 0 spontaneous?'
      }
    ],
    summaryText: 'Entropy links to arrangements. Thermodynamic stability depends on ΔS_total, kinetic on Ea. ΔS_sys = ΣS(products) - ΣS(reactants). ΔS_total = ΔS_sys − ΔH_sys/T. Spontaneous when ΔS_total > 0. At equilibrium, ΔS_total = 0.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Ice Melting at Equilibrium',
      detail: 'At 273 K (0 °C), ΔS_sys and −ΔH_sys/T cancel exactly: ΔS_total = 0 (equilibrium point)',
      year: '2023',
      source: 'Phase Equilibrium Thermodynamics',
      tags: ['entropy', 'equilibrium', 'phase-change']
    },
    {
      id: 'ev-2',
      title: 'Temperature-Dependent Spontaneity',
      detail: 'Reactions with ΔH > 0 and ΔS > 0 become spontaneous as T increases because TΔS term grows.',
      year: '2023',
      source: 'A-Level Chemistry Specification',
      tags: ['spontaneity', 'temperature', 'gibbs']
    }
  ]
};
