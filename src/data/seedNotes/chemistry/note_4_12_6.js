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
      id: 'h-lattice-factors',
      data: { text: 'Factors Affecting Lattice Energy', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-lattice-factors',
      data: { text: 'The magnitude of lattice energy is determined by four factors:' }
    },
    {
      type: 'list',
      id: 'list-lattice',
      data: {
        style: 'numbered',
        items: [
          '<strong>Ionic Charge (biggest effect):</strong> Higher charge → stronger electrostatic attraction → larger lattice energy. Doubling charge roughly quadruples the force (Coulomb\'s law). e.g. Mg²⁺ vs Na⁺.',
          '<strong>Ionic Radius (sum of radii):</strong> Smaller ions pack closer together → stronger attraction → larger lattice energy. e.g. Li⁺ gives a larger lattice energy than Cs⁺ with the same anion.',
          '<strong>Type of lattice structure:</strong> Different crystal structures (e.g. rock salt, wurtzite) affect coordination number and therefore packing efficiency and lattice energy.',
          '<strong>Extent of covalent interactions:</strong> If the ions are polarised, there is partial covalent character, causing the experimental lattice energy to be more negative than the theoretical (perfect ionic) value.'
        ]
      }
    },
    {
      type: 'heading',
      id: 'h-covalent',
      data: { text: 'Experimental vs Theoretical Lattice Energy', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-covalent',
      data: { text: 'Theoretical lattice energies are calculated using the <strong>Perfect Ionic Model</strong>, which assumes ions are perfect, un-distorted solid spheres. A significant difference between the theoretical value and the experimental value (from a Born-Haber cycle) indicates the presence of <strong>Covalent Character</strong>.' }
    },
    {
      type: 'callout',
      id: 'callout-fajans',
      data: {
        style: 'key',
        title: 'Fajans\' Rules for Polarization',
        text: 'Covalent character arises when the positive cation distorts (polarizes) the electron cloud of the negative anion. Polarization is highest when:<br/>1. The cation is small and highly charged (high charge density).<br/>2. The anion is large and highly charged (electrons are further from the nucleus).<br/><br/><em>Example: Silver iodide (AgI) has a much more exothermic experimental lattice energy than its theoretical value because the large I⁻ ion is heavily polarized by the Ag⁺ ion, causing significant covalent overlap.</em>'
      }
    },
    {
      type: 'paragraph',
      id: 'p-charge-density',
      data: {
        text: '<strong>Polarising power</strong> is the ability of a cation to distort (polarise) an anion\'s electron cloud. It can be approximated using <strong>charge density</strong> = charge ÷ (ionic radius)². The higher the charge density of the cation, the greater its polarising power.'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-charge-density',
      data: {
        caption: 'Charge density comparison: Na⁺ vs Mg²⁺ — explaining MgCl₂ vs NaCl lattice discrepancy',
        headers: ['Ion', 'Charge', 'Charge density (approx.)', '% diff from theoretical ΔH_latt', 'Interpretation'],
        rows: [
          ['Na⁺', '+1', '~111 (relative)', '~1.3%', 'Low polarising power → mainly ionic'],
          ['Mg²⁺', '+2', '~556 (relative)', '~7.7%', 'High polarising power → significant covalent character']
        ]
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-ag-halides',
      data: {
        caption: 'Silver halides: increasing covalent character with anion size',
        headers: ['Compound', 'Anion radius / nm', 'Experimental – Theoretical difference', 'Conclusion'],
        rows: [
          ['AgF', '0.133', '~4%', 'Small F⁻ — low polarisability — small discrepancy'],
          ['AgI', '0.215', '~12.5%', 'Large I⁻ — highly polarisable — large discrepancy, significant covalent character']
        ]
      }
    },
    {
      type: 'callout',
      id: 'co-fajans-pattern',
      data: {
        style: 'warning',
        title: 'Fajans\' Rules — Pattern to Remember',
        text: 'The bigger the anion and the smaller/more charged the cation, the <strong>more covalent</strong> the compound\'s character. Moving from AgF to AgI, the fluoride radius increases significantly (0.133 → 0.215 nm). The larger I⁻ is far more polarisable — its electrons are further from the nucleus and more easily distorted towards the Ag⁺ cation. This covalent overlap makes the experimental ΔH_latt more negative than the theoretical value.'
      }
    },
    {
      type: 'heading',
      id: 'h-hydration',
      data: { text: 'Enthalpies of Solution and Hydration', level: 2 }
    },
    {
      type: 'callout',
      id: 'callout-def-sol',
      data: {
        style: 'key',
        title: 'Definitions: Solution and Hydration Enthalpies',
        text: '<strong>Enthalpy of Hydration (ΔH_hyd):</strong> The enthalpy change when one mole of gaseous ions is completely surrounded by water molecules to form an infinitely dilute solution. Always exothermic (bonds formed between ions and water dipoles).<br/><br/><strong>Enthalpy of Solution (ΔH_sol):</strong> The enthalpy change when one mole of an ionic solid dissolves in water to form an <strong>infinitely dilute solution</strong>. Can be exothermic or endothermic.<br/><br/><strong>Why "infinitely dilute"?</strong> During dissolution, two competing processes occur simultaneously:<br/>• Ions moving further apart as concentration decreases → <em>endothermic</em><br/>• Ions becoming increasingly hydrated → <em>exothermic</em><br/>At infinite dilution, further dilution has <strong>no further effect</strong> on the enthalpy. This point cannot be achieved experimentally, so values are obtained by <strong>extrapolation</strong>.'
      }
    },
    {
      type: 'equation',
      id: 'eq-sol-cycle',
      data: {
        html: 'ΔH<sub>sol</sub> = −ΔH<sub>lattice</sub> + ΣΔH<sub>hydration</sub>',
        caption: 'The solution energy cycle'
      }
    },
    {
      type: 'heading',
      id: 'h-group2',
      data: { text: 'Solubility Trends in Group 2', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-group2',
      data: { text: 'We can explain the opposite solubility trends of Group 2 Hydroxides vs Sulfates by comparing the rate at which Lattice Energy and Hydration Enthalpy decrease as the cation gets larger down the group.' }
    },
    {
      type: 'comparisonTable',
      id: 'table-group2',
      data: {
        caption: 'Group 2 Solubility Trends',
        headers: ['Compound', 'Trend Down Group', 'Explanation'],
        rows: [
          ['Sulfates', 'BECOME LESS SOLUBLE', 'Both Lattice and Hydration enthalpies become less negative (fall in magnitude) down the group. However, because sulfate is a large ion, Lattice Enthalpy falls <em>slower</em> than Hydration Enthalpy. Therefore, ΔH_sol becomes more endothermic.'],
          ['Hydroxides', 'BECOME MORE SOLUBLE', 'Because hydroxide is a small ion, the distance from cation to anion matters immensely. Here, Lattice Enthalpy falls <em>much faster</em> than Hydration Enthalpy. Therefore, ΔH_sol becomes more exothermic (favorable).']
        ]
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
      type: 'callout',
      id: 'co-hydration-entropy',
      data: {
        style: 'warning',
        title: 'Hydration and Entropy — Opposing Effects',
        text: 'Hydration releases energy (ΔH < 0, favourable), but it also <strong>decreases entropy</strong>. When water molecules order themselves tightly around an ion they lose freedom of movement — the surrounding water becomes <strong>more ordered</strong>. This is the opposite of what entropy favours (more disorder).\n\nSo hydration is enthalpically favourable but entropically unfavourable. At normal temperatures the enthalpy term wins and dissolution is thermodynamically driven — but this is why some compounds need to be heated to dissolve.'
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
      type: 'heading',
      id: 'h-ppq-li2so4',
      data: { text: 'Past Paper Style: Li₂SO₄ Energy Cycle', level: 2 }
    },
    {
      type: 'callout',
      id: 'co-ppq-li2so4',
      data: {
        style: 'worked',
        title: 'Past Paper Example (June 2019 style): Labelling a Li₂SO₄ Born-Haber Cycle',
        text: 'An energy cycle is used to determine the experimental lattice energy of Li₂SO₄. Steps are labelled W, X, Y, Z, V.\n\n<strong>Identify each step:</strong>\n• W: 2Li(g) → 2Li⁺(g) + 2e⁻  →  <em>2 × first IE of lithium</em>  (multiply by 2)\n• X: S(s) → S(g)  →  <em>enthalpy of atomisation of sulfur</em>\n• Y: S(g) + 2e⁻ → SO₄²⁻(g)  →  <em>first EA + second EA of sulfur</em>\n• Z: 2Li(s) + S(s) → Li₂SO₄(s)  →  <em>standard enthalpy of formation of Li₂SO₄</em>\n• V: 2Li(s) → 2Li(g)  →  <em>2 × enthalpy of atomisation of lithium</em>\n\n<strong>Lattice enthalpy equation:</strong>\nΔH_latt = Z − W − V − X − Y\n(or equivalently: ΔH_latt = Z − (W + V + X + Y))\n\n<strong>Key exam technique:</strong>\n• Name the <em>specific substance</em> — "first ionisation energy of <em>lithium</em>", not just "first ionisation energy"\n• Include multiplying factors (W = 2 × IE₁ of Li, V = 2 × ΔH_at of Li)\n• "First EA + Second EA of sulfur" counts as one mark — state both\n\n<strong>Why is experimental ΔH_latt more negative than theoretical for Li₂SO₄?</strong>\nThe experimental value is more negative because Li₂SO₄ has <strong>covalent character</strong> — the small, highly charged Li⁺ cation polarises the large SO₄²⁻ anion, distorting its electron cloud and causing partial covalent overlap.'
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
          { text: 'Solution enthalpy = lattice enthalpy (dissociation) + sum of hydration enthalpies', checked: false },
          { text: 'Enthalpy of solution refers to infinitely dilute solution — values obtained by extrapolation', checked: false },
          { text: 'Hydration increases order (decreases entropy) despite being exothermic', checked: false },
          { text: 'Experimental ΔH_latt more negative than theoretical → covalent character (polarisation)', checked: false },
          { text: 'In exam questions: always name the specific ion/atom, include multiplying factors', checked: false }
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
        id: 'cue-0a',
        blockId: 'list-lattice',
        prompt: 'Which factor has a larger effect on Lattice Energy magnitude: Ionic Charge or Ionic Radius?'
      },
      {
        id: 'cue-0b',
        blockId: 'callout-fajans',
        prompt: 'According to Fajans\' Rules, what characteristics make an ion highly polarizing (cation) or easily polarizable (anion)?'
      },
      {
        id: 'cue-0c',
        blockId: 'table-group2',
        prompt: 'Explain why Group 2 Sulfates become less soluble down the group while Hydroxides become more soluble.'
      },
      {
        id: 'cue-1',
        blockId: 'h-lattice-formation',
        prompt: 'Explain the difference between lattice enthalpy (formation) and lattice enthalpy (dissociation).'
      },
      {
        id: 'cue-2',
        blockId: 'callout-def-sol',
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
    summaryText: 'Ionic Charge controls lattice magnitude more than radius. Covalent character is shown by discrepancies with the perfect ionic model (due to polarization/Fajans\' rules). ΔH_sol = −ΔH_latt + ΣΔH_hyd. Sulfates become less soluble (lattice falls slower), hydroxides more soluble down group 2.',
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
