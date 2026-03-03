export const note_chemistry_4_12_5 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-born-haber',
      data: {
        text: 'Understand lattice enthalpy definition, construct Born-Haber cycles for ionic compounds, apply Hess\'s law to calculate unknown enthalpy values, and compare theoretical vs experimental lattice enthalpies.'
      }
    },
    {
      type: 'heading',
      id: 'h-lattice-enthalpy-def',
      data: {
        text: 'Lattice Enthalpy: Definition and Significance',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-latt-def-1',
      data: {
        text: 'Lattice enthalpy (or lattice energy) is defined as the enthalpy change when one mole of an ionic solid is formed from its gaseous ions under standard conditions:'
      }
    },
    {
      type: 'equation',
      id: 'eq-latt-def',
      data: {
        html: 'M<sup>n+</sup>(g) + nX<sup>−</sup>(g) → MX<sub>n</sub>(s)   ΔH = ΔH<sub>lattice</sub>'
      }
    },
    {
      type: 'paragraph',
      id: 'p-latt-def-2',
      data: {
        text: 'Lattice enthalpy is always negative (exothermic) because energy is released when gaseous ions come together to form an ordered crystal lattice. It represents the strength of the ionic bonds in the solid. High lattice enthalpy means a strong, stable ionic compound; low lattice enthalpy means a weaker compound.'
      }
    },
    {
      type: 'callout',
      id: 'co-latt-significance',
      data: {
        style: 'key',
        title: 'Lattice Enthalpy as a Measure of Ionic Bond Strength',
        text: 'Larger charge on ions → stronger ionic attraction → larger lattice enthalpy (more negative)\nSmaller ionic radii → closer ions → stronger attraction → larger lattice enthalpy\n\nExample: MgO has very large lattice enthalpy (−3900 kJ mol⁻¹) because Mg²⁺ and O²⁻ are small and highly charged.\nNaCl has lower lattice enthalpy (−786 kJ mol⁻¹) because Na⁺ and Cl⁻ are larger and singly charged.'
      }
    },
    {
      type: 'heading',
      id: 'h-born-haber-cycle',
      data: {
        text: 'Born-Haber Cycle: Step by Step',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-bhc-intro',
      data: {
        text: 'A Born-Haber cycle is a Hess\'s law diagram that breaks down the formation of an ionic compound into a series of separate steps, each with a known (or measurable) enthalpy change. By summing all steps, we can calculate the lattice enthalpy, which cannot be measured directly.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-bhc-steps',
      data: {
        text: 'For a compound MX_n, the typical steps are:\n1. Atomisation of metal M: M(s) → M(g)   ΔH_at(M)\n2. Ionisation of metal: M(g) → M^n+(g) + ne⁻   ΔH_IE (ionisation energy)\n3. Atomisation of non-metal: ½X₂(g) → X(g)   ΔH_at(X)\n4. Electron affinity: X(g) + e⁻ → X⁻(g)   ΔH_EA (electron affinity)\n5. Formation of ionic compound: M^n+(g) + nX⁻(g) → MX_n(s)   ΔH_lattice'
      }
    },
    {
      type: 'callout',
      id: 'co-bhc-example-nacl',
      data: {
        style: 'worked',
        title: 'Born-Haber Cycle for NaCl: Complete Example',
        text: 'Target: Formation of NaCl(s) from elements:\nNa(s) + ½Cl₂(g) → NaCl(s)   ΔH_f = −411 kJ mol⁻¹\n\nBorn-Haber cycle steps:\n1. Atomisation of Na:      Na(s) → Na(g)                ΔH₁ = +109 kJ mol⁻¹\n2. Ionisation of Na:       Na(g) → Na⁺(g) + e⁻          ΔH₂ = +500 kJ mol⁻¹\n3. Atomisation of Cl₂:     ½Cl₂(g) → Cl(g)              ΔH₃ = +121 kJ mol⁻¹\n4. Electron affinity of Cl: Cl(g) + e⁻ → Cl⁻(g)         ΔH₄ = −364 kJ mol⁻¹\n5. Formation (lattice):    Na⁺(g) + Cl⁻(g) → NaCl(s)   ΔH₅ = ΔH_lattice (unknown)\n\nBy Hess\'s law: ΔH_f = ΔH₁ + ΔH₂ + ΔH₃ + ΔH₄ + ΔH₅\n−411 = 109 + 500 + 121 + (−364) + ΔH_lattice\n−411 = 366 + ΔH_lattice\nΔH_lattice = −411 − 366 = −777 kJ mol⁻¹\n\nThis matches the experimental value closely, confirming our understanding of ionic bonding.'
      }
    },
    {
      type: 'heading',
      id: 'h-bhc-mgcl2',
      data: {
        text: 'Born-Haber Cycle for MgCl₂',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-bhc-mgcl2-intro',
      data: {
        text: 'For compounds with polyatomic ions or multiple charges, the Born-Haber cycle is more complex. MgCl₂ requires ionisation of two electrons from Mg and addition of two Cl⁻ ions.'
      }
    },
    {
      type: 'callout',
      id: 'co-bhc-example-mgcl2',
      data: {
        style: 'worked',
        title: 'Born-Haber Cycle for MgCl₂',
        text: 'Target: Mg(s) + Cl₂(g) → MgCl₂(s)   ΔH_f = −641 kJ mol⁻¹\n\nBorn-Haber cycle steps:\n1. Atomisation of Mg:     Mg(s) → Mg(g)                    ΔH₁ = +148 kJ mol⁻¹\n2. First ionisation of Mg: Mg(g) → Mg⁺(g) + e⁻            ΔH₂ = +738 kJ mol⁻¹\n3. Second ionisation:     Mg⁺(g) → Mg²⁺(g) + e⁻            ΔH₃ = +1451 kJ mol⁻¹\n4. Atomisation of Cl₂:    Cl₂(g) → 2Cl(g)                  ΔH₄ = +242 kJ mol⁻¹\n5. Electron affinities:   2Cl(g) + 2e⁻ → 2Cl⁻(g)          ΔH₅ = 2 × (−364) = −728 kJ mol⁻¹\n6. Lattice formation:     Mg²⁺(g) + 2Cl⁻(g) → MgCl₂(s)   ΔH₆ = ΔH_lattice\n\nBy Hess\'s law:\n−641 = 148 + 738 + 1451 + 242 + (−728) + ΔH_lattice\n−641 = 1851 + ΔH_lattice\nΔH_lattice = −641 − 1851 = −2492 kJ mol⁻¹\n\nMgCl₂ has a lower lattice enthalpy than MgO because the ionic radii are larger and the charges are lower (Cl⁻ vs O²⁻).'
      }
    },
    {
      type: 'heading',
      id: 'h-hess-law-application',
      data: {
        text: 'Applying Hess\'s Law to Born-Haber Cycles',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-hess-intro',
      data: {
        text: 'Hess\'s law states that the enthalpy change of a reaction depends only on the initial and final states, not on the pathway taken. In a Born-Haber cycle, the overall enthalpy change equals the sum of all individual steps, regardless of the order in which we write them.'
      }
    },
    {
      type: 'equation',
      id: 'eq-hess-bhc',
      data: {
        html: 'ΔH<sub>formation</sub> = ΔH<sub>atomisation(M)</sub> + ΣΔH<sub>ionisation</sub> + ΔH<sub>atomisation(X)</sub> + ΣΔH<sub>electron affinity</sub> + ΔH<sub>lattice</sub>'
      }
    },
    {
      type: 'paragraph',
      id: 'p-hess-application',
      data: {
        text: 'To find the unknown value (usually lattice enthalpy), rearrange and solve. Remember that all steps must have consistent direction: we typically show atomisation (exothermic, negative ΔH) and electron affinity (exothermic, negative ΔH) with their actual signs, while formation enthalpy is given in tables.'
      }
    },
    {
      type: 'heading',
      id: 'h-theoretical-vs-experimental',
      data: {
        text: 'Theoretical vs Experimental Lattice Enthalpy',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-theory-exp-1',
      data: {
        text: 'Lattice enthalpy can be calculated in two ways: theoretically (using Born-Haber cycles with experimental thermodynamic data) and experimentally (using Born-Landé equation or other models based on ionic crystal theory).'
      }
    },
    {
      type: 'paragraph',
      id: 'p-theory-exp-2',
      data: {
        text: 'For purely ionic compounds (like NaCl), theoretical and experimental values agree closely. However, for compounds with significant covalent character (like AgCl or CuCl), the experimental lattice enthalpy is often higher than predicted by simple ionic theory. This discrepancy reveals polarisation effects and partial covalent bonding.'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-lattice-values',
      data: {
        caption: 'Theoretical vs Experimental Lattice Enthalpy (Examples)',
        headers: ['Compound', 'Theoretical / kJ mol⁻¹', 'Experimental / kJ mol⁻¹', 'Difference / %', 'Interpretation'],
        rows: [
          ['NaCl', '−766', '−786', '+2.6%', 'Good agreement; mostly ionic'],
          ['MgO', '−3850', '−3900', '+1.3%', 'Excellent agreement; purely ionic'],
          ['AgCl', '−910', '−915', '+0.5%', 'Good agreement; slight covalent character'],
          ['CuCl', '−980', '−1000', '+2%', 'Some covalent character detected']
        ]
      }
    },
    {
      type: 'callout',
      id: 'co-polarity-effect',
      data: {
        style: 'tip',
        title: 'Why Do Differences Occur?',
        text: 'Simple ionic model assumes purely Coulombic (electrostatic) interactions. Real ionic compounds have:\n• Polarisation: cations distort anion electron clouds (electron clouds attracted towards cation)\n• Partial covalency: some electron density shared between ions\n\nThese effects strengthen ionic bonds beyond pure electrostatic prediction, increasing experimental lattice enthalpy.'
      }
    },
    {
      type: 'checklist',
      id: 'cl-bhc',
      data: {
        items: [
          { text: 'Lattice enthalpy is the enthalpy change for M^n+(g) + nX⁻(g) → MX_n(s)', checked: false },
          { text: 'Lattice enthalpy always negative; higher magnitude = stronger ionic bonding', checked: false },
          { text: 'Born-Haber cycle breaks formation into atomisation, ionisation, electron affinity, and lattice steps', checked: false },
          { text: 'Hess\'s law: sum of all steps = formation enthalpy', checked: false },
          { text: 'Theoretical and experimental lattice enthalpies usually agree within 1–3%', checked: false },
          { text: 'Large discrepancies indicate polarisation or covalent character', checked: false }
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
        text: 'Understand: Born-Haber cycles apply Hess\'s law to calculate lattice enthalpies that cannot be measured directly. They connect atomisation, ionisation, electron affinity, and formation enthalpies.\n\nApply: Construct a Born-Haber cycle for NaCl and calculate its lattice enthalpy from given data.\n\nAnalyze: Why is the experimental lattice enthalpy of AgI much larger than the theoretical value? What does this indicate about bond character?\n\nEvaluate: Born-Haber cycles assume purely ionic bonding. Assess the validity of this assumption for LiCl vs CsF.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'sum-bhc',
      data: {
        text: 'Lattice enthalpy measures the strength of ionic bonding in a crystal. Born-Haber cycles use Hess\'s law to combine atomisation, ionisation, electron affinity, and formation steps to calculate lattice enthalpy. Experimental and theoretical values agree closely for purely ionic compounds but diverge when significant covalency or polarisation is present.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-lattice-enthalpy-def',
        prompt: 'Define lattice enthalpy. Why is it always negative and what does its magnitude indicate?'
      },
      {
        id: 'cue-2',
        blockId: 'h-born-haber-cycle',
        prompt: 'List the five main steps in a Born-Haber cycle for a simple MX compound.'
      },
      {
        id: 'cue-3',
        blockId: 'co-bhc-example-nacl',
        prompt: 'Calculate the lattice enthalpy of NaCl given: ΔH_f = −411 kJ mol⁻¹ and the five step values in the example.'
      },
      {
        id: 'cue-4',
        blockId: 'h-theoretical-vs-experimental',
        prompt: 'Explain why experimental lattice enthalpy is sometimes higher than theoretical predictions.'
      }
    ],
    summaryText: 'Lattice enthalpy is the enthalpy to form 1 mol of ionic solid from gaseous ions (always negative). Born-Haber cycles combine atomisation, ionisation, electron affinity, and formation via Hess\'s law. Theoretical and experimental values agree for purely ionic compounds but diverge with covalent character or polarisation.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'NaCl Lattice Enthalpy Calculation',
      detail: 'Experimental value −786 kJ mol⁻¹ calculated from Born-Haber cycle using formation enthalpy −411 kJ mol⁻¹.',
      year: '2023',
      source: 'Born-Haber Cycle Data',
      tags: ['lattice-enthalpy', 'hess-law', 'nacl']
    },
    {
      id: 'ev-2',
      title: 'MgCl₂ High Lattice Enthalpy',
      detail: 'Lattice enthalpy ≈ −2492 kJ mol⁻¹ due to Mg²⁺ small size and high charge. Much higher than NaCl.',
      year: '2023',
      source: 'Born-Haber Cycle Data',
      tags: ['lattice-enthalpy', 'charge-effect', 'ionic-bonding']
    },
    {
      id: 'ev-3',
      title: 'Covalent Character Effect',
      detail: 'AgCl experimental (−915 kJ mol⁻¹) slightly higher than theoretical (−910 kJ mol⁻¹) due to polarisation and covalency.',
      year: '2023',
      source: 'Ionic Bonding Analysis',
      tags: ['polarisation', 'covalency', 'ionic-character']
    }
  ]
};
