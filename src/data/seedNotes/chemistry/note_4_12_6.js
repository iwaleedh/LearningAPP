export const note_chemistry_4_12_6 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-lattice-hydration',
      data: {
        text: 'Understand lattice enthalpy definition, hydration enthalpy, solution enthalpy, and their relationships via enthalpy level diagrams and thermodynamic cycles.'
      }
    },
    {
      type: 'heading',
      id: 'h-lattice-formation',
      data: {
        text: 'Lattice Enthalpy: Formation and Dissociation',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-latt-form-1',
      data: {
        text: 'Lattice enthalpy can be defined in two directions: (1) Formation: M^n+(g) + nX⁻(g) → MX_n(s), ΔH < 0 (exothermic, energy released); (2) Dissociation: MX_n(s) → M^n+(g) + nX⁻(g), ΔH > 0 (endothermic, energy required to break bonds). These are equal in magnitude but opposite in sign.'
      }
    },
    {
      type: 'callout',
      id: 'co-latt-sign-convention',
      data: {
        style: 'key',
        title: 'Lattice Enthalpy Sign Convention',
        text: 'In this course, lattice enthalpy ΔH_lattice refers to the dissociation process (always positive):\nMX_n(s) → M^n+(g) + nX⁻(g)   ΔH_lattice > 0\n\nSome textbooks use the opposite sign convention. Always check which definition your course uses. The magnitude (strength of bonding) is what matters most.'
      }
    },
    {
      type: 'heading',
      id: 'h-hydration-enthalpy',
      data: {
        text: 'Hydration Enthalpy: Ions in Solution',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-hydration-def-1',
      data: {
        text: 'Hydration enthalpy is the enthalpy change when one mole of gaseous ions becomes surrounded by water molecules in aqueous solution:'
      }
    },
    {
      type: 'equation',
      id: 'eq-hydration-def',
      data: {
        html: 'M<sup>n+</sup>(g) + aq → M<sup>n+</sup>(aq)   ΔH<sub>hyd</sub> (always negative)'
      }
    },
    {
      type: 'paragraph',
      id: 'p-hydration-def-2',
      data: {
        text: 'Hydration is exothermic (ΔH < 0) because water molecules (dipoles) are attracted to ions through ion-dipole forces. The oxygen end of water (δ−) attracts cations; the hydrogen end (δ+) attracts anions. The released energy is the hydration enthalpy.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-hydration-factors',
      data: {
        text: 'Hydration enthalpy depends on ion charge and size: (1) Higher charge → stronger ion-dipole interactions → larger hydration enthalpy (more negative); (2) Smaller radius → closer water molecules → stronger interactions → larger hydration enthalpy. Thus, Mg²⁺ has a much larger hydration enthalpy than Na⁺.'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-hydration-values',
      data: {
        caption: 'Hydration Enthalpy Values (Example)',
        headers: ['Ion', 'Charge', 'Radius / pm', 'ΔH_hyd / kJ mol⁻¹', 'Trend'],
        rows: [
          ['Na⁺', '+1', '102', '−406', 'Small, singly charged'],
          ['Mg²⁺', '+2', '72', '−1921', 'Very small, doubly charged → much larger'],
          ['Cl⁻', '−1', '181', '−363', 'Larger, singly charged'],
          ['O²⁻', '−2', '140', '−1461', 'Highly charged, small → large magnitude']
        ]
      }
    },
    {
      type: 'callout',
      id: 'co-hydration-mechanism',
      data: {
        style: 'worked',
        title: 'Ion-Dipole Hydration: The Mechanism',
        text: 'For Na⁺(g) → Na⁺(aq):\nWater\'s oxygen (δ−) is attracted to Na⁺ nucleus. Multiple water molecules surround the cation, each donating electron density towards the ion.\n\nFor Cl⁻(g) → Cl⁻(aq):\nWater\'s hydrogen (δ+) is attracted to Cl⁻. Water molecules form hydrogen bonds around the anion.\n\nIn both cases, energy is released (exothermic). The process is spontaneous at all temperatures (ΔH < 0, ΔS > 0 from disorder increase of solvated ions).'
      }
    },
    {
      type: 'heading',
      id: 'h-solution-enthalpy',
      data: {
        text: 'Solution Enthalpy: Lattice Breaking + Hydration',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-solution-def-1',
      data: {
        text: 'When an ionic solid dissolves in water, two opposing processes occur simultaneously: (1) Lattice breaking: energy absorbed (endothermic, ΔH > 0); (2) Hydration of ions: energy released (exothermic, ΔH < 0). The net enthalpy change is solution enthalpy.'
      }
    },
    {
      type: 'equation',
      id: 'eq-solution-enthalpy',
      data: {
        html: 'ΔH<sub>solution</sub> = ΔH<sub>latt(dissociation)</sub> + ΣΔH<sub>hydration</sub>'
      }
    },
    {
      type: 'paragraph',
      id: 'p-solution-process',
      data: {
        text: 'MX_n(s) → M^n+(g) + nX⁻(g)   [lattice dissociation, endothermic]\nM^n+(g) + nX⁻(g) → M^n+(aq) + nX⁻(aq)   [hydration, exothermic]\nNet: MX_n(s) → MX_n(aq)   ΔH_solution = ΔH_lattice + ΣΔH_hyd'
      }
    },
    {
      type: 'paragraph',
      id: 'p-solution-sign',
      data: {
        text: 'Solution enthalpy can be positive (endothermic dissolution, e.g. NH₄Cl) or negative (exothermic dissolution, e.g. NaOH). If lattice enthalpy is large, dissolution is endothermic. If hydration is large enough to overcome the lattice barrier, dissolution is exothermic.'
      }
    },
    {
      type: 'heading',
      id: 'h-enthalpy-level-diagram',
      data: {
        text: 'Enthalpy Level Diagrams',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-level-diagram-1',
      data: {
        text: 'An enthalpy level diagram shows the enthalpy at each step of the dissolution process. The starting level is the solid compound; intermediate level is gaseous ions; final level is aqueous ions.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-level-diagram-2',
      data: {
        text: 'For NaCl: The diagram shows NaCl(s) at a reference level, then rises to NaCl(g) / Na⁺(g) + Cl⁻(g) (higher energy due to lattice breaking), then falls to NaCl(aq) / Na⁺(aq) + Cl⁻(aq) (lower energy than gaseous ions due to hydration). The net drop from solid to aqueous shows whether dissolution is exothermic or endothermic.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-level-diagram-3',
      data: {
        text: 'For endothermic dissolution (e.g. NH₄Cl): The aqueous level is higher than the solid level. The hydration energy is not enough to fully compensate for the lattice energy, so dissolution absorbs heat overall.'
      }
    },
    {
      type: 'callout',
      id: 'co-level-example',
      data: {
        style: 'tip',
        title: 'Reading Enthalpy Level Diagrams',
        text: 'Start: Solid ionic compound (reference, e.g. 0 kJ mol⁻¹)\nArrow up: Lattice dissociation (endothermic; height = ΔH_lattice, positive)\nArrow down: Hydration (exothermic; depth = |ΣΔH_hyd|, negative)\nFinal level: Aqueous ions\n\nIf final is BELOW start: ΔH_solution < 0 (exothermic)\nIf final is ABOVE start: ΔH_solution > 0 (endothermic)\nHeight difference from start to final = |ΔH_solution|'
      }
    },
    {
      type: 'heading',
      id: 'h-thermodynamic-cycle',
      data: {
        text: 'Solution Enthalpy Cycle (Hess\'s Law Application)',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-cycle-intro',
      data: {
        text: 'We can use a thermodynamic cycle to relate lattice enthalpy, hydration enthalpy, and solution enthalpy. This is similar to a Born-Haber cycle but focused on dissolution:'
      }
    },
    {
      type: 'paragraph',
      id: 'p-cycle-diagram',
      data: {
        text: 'Cycle for MX_n:\nPath 1 (direct): MX_n(s) → MX_n(aq)   ΔH_solution\nPath 2 (via gas): MX_n(s) → M^n+(g) + nX⁻(g) → M^n+(aq) + nX⁻(aq)\nBy Hess\'s law: ΔH_solution = ΔH_lattice(dissoc) + ΣΔH_hyd'
      }
    },
    {
      type: 'callout',
      id: 'co-solution-calculation',
      data: {
        style: 'worked',
        title: 'Calculating Solution Enthalpy: NaCl Example',
        text: 'Given:\nΔH_lattice (dissociation) = +786 kJ mol⁻¹\nΔH_hyd(Na⁺) = −406 kJ mol⁻¹\nΔH_hyd(Cl⁻) = −363 kJ mol⁻¹\n\nCalculation:\nΔH_solution = 786 + (−406) + (−363) = 786 − 769 = +17 kJ mol⁻¹\n\nResult: Dissolution is slightly endothermic (ΔH > 0). This is consistent with observation — dissolving NaCl feels slightly cool because it absorbs heat from surroundings.'
      }
    },
    {
      type: 'checklist',
      id: 'cl-lattice-hydration',
      data: {
        items: [
          { text: 'Lattice enthalpy (dissociation) is the energy to break apart an ionic solid into gaseous ions', checked: false },
          { text: 'Hydration enthalpy is the energy released when gaseous ions become aqueous', checked: false },
          { text: 'Higher ion charge and smaller radius → larger hydration enthalpy (more negative)', checked: false },
          { text: 'Solution enthalpy = lattice enthalpy + sum of hydration enthalpies', checked: false },
          { text: 'Enthalpy level diagrams show the pathway visually', checked: false },
          { text: 'If solution enthalpy < 0, dissolution is exothermic; if > 0, endothermic', checked: false }
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
        text: 'Understand: Dissolving involves breaking the lattice (endothermic) and hydrating ions (exothermic). ΔH_solution = −ΔH_lattice + ΔH_hydration(cation) + ΔH_hydration(anion).\n\nApply: Calculate ΔH_solution for KCl given lattice enthalpy and hydration enthalpies.\n\nAnalyze: Why does LiF have a very exothermic hydration enthalpy but barely dissolves in water?\n\nEvaluate: ΔH_solution for NaCl is slightly positive, yet it dissolves readily. Explain using entropy.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'sum-lattice-hydration',
      data: {
        text: 'Lattice enthalpy (dissociation) breaks ionic solid to gaseous ions (endothermic). Hydration enthalpy surrounds ions with water (exothermic). Solution enthalpy = ΔH_latt + ΣΔH_hyd. Small, highly charged ions have large hydration enthalpies. Dissolving can be endothermic or exothermic depending on which process dominates. Enthalpy level diagrams and thermodynamic cycles show the energy pathways.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-lattice-formation',
        prompt: 'Explain the difference between lattice enthalpy (formation) and lattice enthalpy (dissociation).'
      },
      {
        id: 'cue-2',
        blockId: 'h-hydration-enthalpy',
        prompt: 'Define hydration enthalpy. Explain why Mg²⁺ has a much larger hydration enthalpy than Na⁺.'
      },
      {
        id: 'cue-3',
        blockId: 'h-solution-enthalpy',
        prompt: 'Write the equation for solution enthalpy in terms of lattice and hydration enthalpies.'
      },
      {
        id: 'cue-4',
        blockId: 'co-solution-calculation',
        prompt: 'Calculate the solution enthalpy of NaCl given the three values in the worked example.'
      },
      {
        id: 'cue-5',
        blockId: 'h-enthalpy-level-diagram',
        prompt: 'Sketch an enthalpy level diagram for an endothermic dissolution process.'
      }
    ],
    summaryText: 'Lattice enthalpy (dissociation) breaks solid to gaseous ions (endothermic, +ve). Hydration enthalpy aquates ions (exothermic, −ve). Solution enthalpy = ΔH_latt + ΣΔH_hyd. Small, highly charged ions have large |ΔH_hyd|. Dissolution is exothermic if hydration > lattice; endothermic if lattice > hydration.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'NaCl Solution Enthalpy Calculation',
      detail: 'ΔH_solution = 786 + (−406) + (−363) ≈ +17 kJ mol⁻¹ (slightly endothermic)',
      year: '2023',
      source: 'Solution Thermodynamics Data',
      tags: ['solution-enthalpy', 'hess-law', 'nacl']
    },
    {
      id: 'ev-2',
      title: 'Mg²⁺ Hydration Enthalpy',
      detail: 'ΔH_hyd(Mg²⁺) = −1921 kJ mol⁻¹ (very large) due to small radius (72 pm) and +2 charge',
      year: '2023',
      source: 'Hydration Data Tables',
      tags: ['hydration-enthalpy', 'charge-effect', 'size-effect']
    }
  ]
};
