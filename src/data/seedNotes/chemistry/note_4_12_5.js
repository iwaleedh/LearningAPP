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
      type: 'callout',
      id: 'co-terminology',
      data: {
        style: 'tip',
        title: 'Terminology: Lattice Energy vs Lattice Enthalpy',
        text: 'At A Level, the terms <strong>lattice energy</strong> and <strong>lattice enthalpy</strong> are used interchangeably — you will get full marks in the exam regardless of which term you use. Both refer to the enthalpy change when one mole of an ionic solid is formed from its constituent gaseous ions under standard conditions (298 K, 100 kPa).'
      }
    },
    {
      type: 'heading',
      id: 'h-definitions',
      data: { text: 'Key Definitions for Born-Haber Cycles', level: 2 }
    },
    {
      type: 'callout',
      id: 'callout-at',
      data: {
        style: 'key',
        title: 'Standard Enthalpy of Atomisation (ΔH_at)',
        text: 'The enthalpy change when <strong>one mole of gaseous atoms</strong> is formed from an element in its standard state.<br/><br/><em>e.g. ½Cl₂(g) → Cl(g)</em><br/>This is always an endothermic process.'
      }
    },
    {
      type: 'callout',
      id: 'callout-ea',
      data: {
        style: 'key',
        title: 'Electron Affinity',
        text: 'The <strong>First Electron Affinity</strong> is the enthalpy change when each atom in one mole of gaseous atoms gains an electron to form a 1- ion.<br/><em>e.g. Cl(g) + e⁻ → Cl⁻(g)</em><br/>This is typically exothermic because the electron is attracted to the nucleus. However, the <strong>Second Electron Affinity</strong> (e.g. O⁻ → O²⁻) is always endothermic because the negative electron is being repelled by an already negative ion.'
      }
    },
    {
      type: 'heading',
      id: 'h-charge-data',
      data: { text: 'Effect of Charge and Radius on Lattice Enthalpy', level: 2 }
    },
    {
      type: 'comparisonTable',
      id: 'table-charge-radius',
      data: {
        caption: 'Lattice enthalpy values illustrating charge and radius effects',
        headers: ['Compound', 'Ions', 'Interionic distance / nm', 'Lattice enthalpy / kJ mol⁻¹'],
        rows: [
          ['LiF', 'Li⁺ F⁻ (+1/−1)', '0.207', '−1031'],
          ['CaF₂', 'Ca²⁺ F⁻ (+2/−1)', '0.236', '−2630'],
          ['Al₂O₃', 'Al³⁺ O²⁻ (+3/−2)', '0.193', '−15 504']
        ]
      }
    },
    {
      type: 'callout',
      id: 'co-charge-analysis',
      data: {
        style: 'tip',
        title: 'Key Comparison: NaF vs CaF₂ — Charge Dominates',
        text: 'NaF and CaF₂ have almost <strong>identical interionic distances</strong> (~0.233–0.235 nm), yet CaF₂ has a lattice enthalpy almost <strong>triple</strong> that of NaF. This demonstrates that ionic <strong>charge has by far the largest effect</strong> on lattice enthalpy magnitude — much greater than the effect of ionic radius.'
      }
    },
    {
      type: 'heading',
      id: 'h-born-haber',
      data: { text: 'Born-Haber Cycles', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-born-haber',
      data: { text: 'Lattice energy cannot be calculated directly from an experiment. Instead, we use a Born-Haber cycle, which applies Hess\'s Law. It states that the direct route (Enthalpy of Formation) equals the sum of the indirect steps:' }
    },
    {
      type: 'equation',
      id: 'eq-born-haber',
      data: {
        html: 'ΔH<sub>form</sub> = ΔH<sub>at(metal)</sub> + ΔH<sub>IE</sub> + ΔH<sub>at(non-metal)</sub> + ΔH<sub>EA</sub> + ΔH<sub>lattice</sub>',
        caption: 'The Born-Haber equation summary'
      }
    },
    {
      type: 'callout',
      id: 'callout-bh-example',
      data: {
        style: 'worked',
        title: 'Worked Example: Finding Lattice Energy of NaCl',
        text: '<strong>Given:</strong><br/>ΔH_form(NaCl) = -411 kJ mol⁻¹<br/>ΔH_at(Na) = +107 kJ mol⁻¹<br/>1st IE(Na) = +496 kJ mol⁻¹<br/>ΔH_at(Cl) = +122 kJ mol⁻¹<br/>1st EA(Cl) = -349 kJ mol⁻¹<br/><br/><strong>Calculation:</strong><br/>-411 = (+107) + (+496) + (+122) + (-349) + ΔH_lattice<br/>-411 = 376 + ΔH_lattice<br/>ΔH_lattice = -411 - 376 = <strong>-787 kJ mol⁻¹</strong>'
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
      type: 'callout',
      id: 'co-bhc-example-cscl',
      data: {
        style: 'worked',
        title: 'Worked Example: Born-Haber Cycle for CsCl',
        text: 'Target: Cs(s) + ½Cl₂(g) → CsCl(s)\nΔH_f(CsCl) = −433 kJ mol⁻¹\n\nSteps:\n1. Atomisation of Cs:  Cs(s) → Cs(g)              ΔH_at = +73 kJ mol⁻¹\n2. 1st IE of Cs:       Cs(g) → Cs⁺(g) + e⁻        IE₁ = +376 kJ mol⁻¹\n3. Atomisation of Cl:  ½Cl₂(g) → Cl(g)            ΔH_at = +121 kJ mol⁻¹\n4. 1st EA of Cl:       Cl(g) + e⁻ → Cl⁻(g)        EA₁ = −346 kJ mol⁻¹\n5. Lattice formation:  Cs⁺(g) + Cl⁻(g) → CsCl(s)  ΔH_latt = ?\n\nBy Hess\'s law:\n−433 = 73 + 376 + 121 + (−346) + ΔH_latt\n−433 = 224 + ΔH_latt\nΔH_latt = −433 − 224 = −657 kJ mol⁻¹'
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
      type: 'callout',
      id: 'co-exam-tip-label',
      data: {
        style: 'tip',
        title: '📝 Exam Technique: Labelling vs Drawing',
        text: 'In the exam it is <strong>extremely rare</strong> to be asked to draw a Born-Haber cycle from scratch. You are far more likely to be asked to:<br/>• <strong>Label specific arrows</strong> on a pre-drawn cycle (e.g. "what enthalpy change does W represent?")<br/>• Include correct <strong>multiplying factors</strong> (e.g. write 2 × IE₁ when two Na atoms are ionised)<br/>• Write the algebraic equation for the unknown step<br/><br/>Always specify the <strong>ion or atom</strong> — e.g. "first ionisation energy of <em>lithium</em>", not just "first ionisation energy". You can also write Li⁺ as the symbol.'
      }
    },
    {
      type: 'heading',
      id: 'h-bhc-na2o',
      data: { text: 'Labelling Example: Na₂O Born-Haber Cycle', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-na2o-intro',
      data: {
        text: 'Na₂O is a good exam example because it requires multiplying by 2 for sodium, and it uses both the first AND second electron affinities of oxygen. Note that the second EA is always positive (endothermic) — the arrow goes UP in a cycle diagram, which can look unusual at first.'
      }
    },
    {
      type: 'callout',
      id: 'co-bhc-example-na2o',
      data: {
        style: 'worked',
        title: 'Worked Labelling Example: Na₂O (Lattice enthalpy = −2520 kJ mol⁻¹)',
        text: 'Formation: 2Na(s) + ½O₂(g) → Na₂O(s)   ΔH_f = −414 kJ mol⁻¹\n\nSteps with exam labels:\n• 2 × ΔH_at(Na):  2 × (+108) = +216 kJ mol⁻¹    ← multiply by 2 (two Na atoms)\n• ΔH_at(O):       ½O₂(g) → O(g)   +249 kJ mol⁻¹\n• 2 × IE₁(Na):    2 × (+496) = +992 kJ mol⁻¹    ← multiply by 2\n• 1st EA(O):      O(g) + e⁻ → O⁻(g)   −141 kJ mol⁻¹  (arrow DOWN — exothermic)\n• 2nd EA(O):      O⁻(g) + e⁻ → O²⁻(g)  +790 kJ mol⁻¹  (arrow UP — endothermic)\n• ΔH_latt:        2Na⁺(g) + O²⁻(g) → Na₂O(s)  unknown\n\nBy Hess\'s law:\n−414 = 216 + 249 + 992 + (−141) + 790 + ΔH_latt\n−414 = 2106 + ΔH_latt\nΔH_latt = −414 − 2106 = −2520 kJ mol⁻¹\n\nKey exam point: always show working. If you omit the ×2 for Na and get a wrong final answer, you still earn error-carried-forward marks — but only if the working is shown.'
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
        text: 'The <strong>experimental lattice enthalpy</strong> is found from a Born-Haber cycle (using experimentally measured atomisation, ionisation, electron affinity and formation enthalpies). The <strong>theoretical lattice enthalpy</strong> is calculated from electrostatic principles. At A Level you are not required to carry out this calculation, but you must know the three assumptions it makes.'
      }
    },
    {
      type: 'callout',
      id: 'co-perfect-ionic',
      data: {
        style: 'key',
        title: 'The Perfect Ionic Model — Three Assumptions',
        text: 'The theoretical calculation assumes a <strong>perfect ionic model</strong>:<br/>1. The ions are <strong>in contact</strong> with each other.<br/>2. The ions are <strong>perfectly spherical</strong> (no distortion of electron cloud).<br/>3. The <strong>charge is evenly distributed</strong> over the surface of each ion.<br/><br/>If these assumptions hold, the compound is 100% ionic. When experiment and theory diverge significantly it means the model has broken down — the substance has <strong>covalent character</strong> caused by polarisation.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-theory-exp-2',
      data: {
        text: 'For the sodium halides, theoretical and experimental values agree very closely (~1–2% difference), confirming they are essentially ionic. For silver halides, the experimental value is noticeably more negative than the theoretical, revealing significant covalent character caused by the Ag⁺ cation polarising the large halide anion.'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-lattice-values',
      data: {
        caption: 'Sodium halides (agree well) vs Silver halides (diverge, covalent character)',
        headers: ['Compound', 'Theoretical / kJ mol⁻¹', 'Experimental / kJ mol⁻¹', 'Difference / %', 'Conclusion'],
        rows: [
          ['NaF', '−912', '−918', '~0.7%', 'Very close — purely ionic'],
          ['NaCl', '−771', '−786', '~2.0%', 'Close — mostly ionic'],
          ['NaBr', '−736', '−751', '~2.0%', 'Close — mostly ionic'],
          ['AgF', '−920', '−953', '~3.6%', 'Diverging — some covalent character'],
          ['AgCl', '−833', '−905', '~8.6%', 'Large divergence — significant covalent character'],
          ['AgBr', '−816', '−891', '~9.2%', 'Large divergence — considerable covalent character']
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
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Charge Effect >>> Radius Effect on Lattice Enthalpy",
        text: "NaF (singly charged, ~0.233 nm) vs CaF\u2082 (doubly charged, ~0.236 nm): nearly identical distances, but CaF\u2082 lattice enthalpy is TRIPLE that of NaF. Charge dominates. Students often overweight the radius effect."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Born-Haber Cycle Setup",
        text: "Always follow the same sequence: atomisation (\u0394H_at) \u2192 ionisation (IE) \u2192 electron affinity (EA) \u2192 lattice formation. The sum equals enthalpy of formation. Use Hess's law: \u0394H_form = \u03a3(\u0394H steps) + \u0394H_lattice."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-0a',
        blockId: 'callout-at',
        prompt: 'Define standard enthalpy of atomisation.'
      },
      {
        id: 'cue-0b',
        blockId: 'callout-ea',
        prompt: 'Why is the First Electron Affinity exothermic, but the Second is endothermic?'
      },
      {
        id: 'cue-1',
        blockId: 'h-lattice-enthalpy-def',
        prompt: 'Define lattice enthalpy. Why is it always negative and what does its magnitude indicate?'
      },
      {
        id: 'cue-2',
        blockId: 'eq-born-haber',
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
    summaryText: 'Atomisation = elements → gaseous atoms. Electron Affinity = atoms gaining electrons. Born-Haber uses Hess\'s law: form = at + IE + EA + lattice. Experimental & theoretical agree for ionic compounds but diverge with covalent character or polarisation.',
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
