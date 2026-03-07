export const note_chemistry_4_13_0 = {
  blocks: [
    {
      id: 'obj-kc',
      type: 'objective',
      data: {
        text: 'Understand equilibrium constant expressions (Kc) for homogeneous and heterogeneous systems; write Kc expressions; identify which species are included or omitted'
      }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'The Equilibrium Constant Expression (Kc)', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'At equilibrium, the ratio of products to reactants (raised to their stoichiometric powers) is constant at a given temperature. This ratio is called the equilibrium constant, Kc. For a reversible reaction: aA + bB ⇌ cC + dD, the expression is shown below. Kc depends only on temperature; it is independent of the initial concentrations or the presence of a catalyst.'
      }
    },
    {
      id: 'co-notation-kc',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Notation: Square Brackets are Mandatory',
        text: 'In Kc expressions, ALWAYS use square brackets [ ] to denote concentrations. The subscript "c" stands for concentration. You may occasionally see [...]eq to emphasise equilibrium concentrations, but this is not required in exams — it is implied. Round brackets ( ) are reserved for Kp. Examiners will not award notation marks if you use round brackets in a Kc expression.'
      }
    },
    {
      id: 'co-kc-vs-position',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Kc ≠ Equilibrium Position — Critical Distinction',
        text: 'Kc is constant at a given temperature — it does NOT change when you alter concentration, pressure, or add a catalyst. Those factors shift the position of equilibrium (the ratio of products to reactants moves), but once the system re-equilibrates the ratio returns to the same Kc value. Only a change in temperature changes Kc itself. This distinction is frequently tested: the position of equilibrium can change while Kc remains constant.'
      }
    },
    {
      id: 'eq-kc-general',
      type: 'equation',
      data: {
        html: 'K<sub>c</sub> = <span class="nb-frac"><span class="nb-num">[C]<sup>c</sup>[D]<sup>d</sup></span><span class="nb-den">[A]<sup>a</sup>[B]<sup>b</sup></span></span>',
        caption: 'General Kc expression: products over reactants, each raised to stoichiometric coefficient'
      }
    },
    {
      id: 'p-units',
      type: 'paragraph',
      data: {
        text: 'The units of Kc depend on the overall change in the number of moles (Δn). If Δn = n(products) − n(reactants), then Kc has units of (mol dm⁻³)^Δn. For example, for a reaction where Δn = −1, Kc has units of mol dm⁻³ (or mol⁻¹ dm³). If Δn = 0, Kc is dimensionless.'
      }
    },
    {
      id: 'h-homogeneous',
      type: 'heading',
      data: { text: 'Homogeneous Equilibria', level: 2 }
    },
    {
      id: 'p-homo',
      type: 'paragraph',
      data: {
        text: 'Homogeneous equilibria occur when all reactants and products are in the same physical state (all gases or all aqueous solutions). In homogeneous systems, all species appear in the Kc expression with their stoichiometric powers.'
      }
    },
    {
      id: 'ex-homo-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: N₂ + 3H₂ ⇌ 2NH₃',
        text: 'Kc = [NH₃]² / ([N₂][H₂]³). Here, Δn = 2 − (1 + 3) = −2, so Kc has units of (mol dm⁻³)⁻² or mol⁻² dm⁶. All three species are in the same state and all appear in Kc.'
      }
    },
    {
      id: 'ex-homo-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: 2NO₂ ⇌ N₂O₄',
        text: 'Kc = [N₂O₄] / [NO₂]². Here, Δn = 1 − 2 = −1, so Kc has units of mol dm⁻³. Both species are gases.'
      }
    },
    {
      id: 'h-heterogeneous',
      type: 'heading',
      data: { text: 'Heterogeneous Equilibria', level: 2 }
    },
    {
      id: 'p-hetero',
      type: 'paragraph',
      data: {
        text: 'Heterogeneous equilibria involve reactants and products in different physical states (e.g. solids, liquids, and gases). The key rule: pure solids and pure liquids are omitted from the Kc expression because their concentrations (in their pure state) are effectively constant and do not change with reaction progress.'
      }
    },
    {
      id: 'ex-hetero-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: CaCO₃(s) ⇌ CaO(s) + CO₂(g)',
        text: 'Kc = [CO₂]. The two solids are omitted because pure solid concentrations are constant. Only the gas concentration varies and appears in Kc. Δn = 1, so Kc has units of mol dm⁻³.'
      }
    },
    {
      id: 'ex-hetero-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: C(s) + H₂O(g) ⇌ CO(g) + H₂(g)',
        text: 'Kc = ([CO][H₂]) / [H₂O]. Solid carbon is omitted. Water vapour (a gas) is included. Δn = 2 − 1 = 1, so Kc has units of mol dm⁻³.'
      }
    },
    {
      id: 'ex-hetero-mg',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Past Paper MCQ: Mg(OH)₂(s) ⇌ Mg²⁺(aq) + 2OH⁻(aq)',
        text: 'Mg(OH)₂ is a pure solid — it is omitted from Kc. The coefficient of 2 on OH⁻ means it appears squared. Mg²⁺ and OH⁻ are aqueous solutes and are included.\n\nKc = [Mg²⁺(aq)] × [OH⁻(aq)]²\n\nCommon exam errors: (1) forgetting to square [OH⁻]; (2) including the solid. Always check state symbols — (s) and pure (l) are omitted; (g) and (aq) are included.'
      }
    },
    {
      id: 'p-rule',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Omission Rule',
        text: 'Pure solids and pure liquids (as solvents, e.g. water in dilute aqueous solutions) are ALWAYS omitted from Kc expressions. Aqueous ions and dissolved molecules (solutes) are ALWAYS included. Gases and pure liquid reactants/products are included.'
      }
    },
    {
      id: 'tbl-comparison',
      type: 'comparisonTable',
      data: {
        headers: ['System Type', 'Example', 'Kc Expression', 'Units of Kc'],
        rows: [
          ['Homogeneous (gas)', 'N₂ + 3H₂ ⇌ 2NH₃', '[NH₃]² / ([N₂][H₂]³)', 'mol⁻² dm⁶'],
          ['Homogeneous (aqueous)', 'CH₃COOH ⇌ CH₃COO⁻ + H⁺', '[CH₃COO⁻][H⁺] / [CH₃COOH]', 'dimensionless or mol dm⁻³'],
          ['Heterogeneous (gas + solid)', 'CaCO₃(s) ⇌ CaO(s) + CO₂(g)', '[CO₂]', 'mol dm⁻³'],
          ['Heterogeneous (gas + aqueous)', 'N₂O₄(g) ⇌ 2NO₂(aq)', '[NO₂]² / [N₂O₄]', 'dimensionless or mol dm⁻³']
        ],
        caption: 'Kc expressions for different equilibrium types'
      }
    },
    {
      id: 'h-writing',
      type: 'heading',
      data: { text: 'Writing Kc Expressions: Step-by-Step', level: 3 }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Write products in the numerator and reactants in the denominator.',
          'Raise each concentration to the power of its stoichiometric coefficient.',
          'For heterogeneous systems, omit pure solids and pure liquids.',
          'Check units using Δn = n(products) − n(reactants).'
        ]
      }
    },
    {
      id: 'checklist-kc',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can identify homogeneous vs heterogeneous equilibria', checked: false },
          { text: 'Can write Kc expressions correctly with stoichiometric powers', checked: false },
          { text: 'Know which species to omit (pure solids and pure liquids)', checked: false },
          { text: 'Can calculate units of Kc from Δn', checked: false }
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
        text: 'Understand: Kc expressions include only species whose concentrations change at equilibrium. Pure solids and liquids are omitted because their concentrations are constant.\n\nApply: Write the Kc expression for: CaCO₃(s) ⇌ CaO(s) + CO₂(g). Why are solids omitted?\n\nAnalyze: If Kc >> 1, what does this tell you about the position of equilibrium? What if Kc << 1?\n\nEvaluate: A student includes H₂O(l) in a Kc expression for an aqueous reaction. Is this correct? When might it be included?'
      },
      terms: []
    },
    {
      id: 'summary-kc',
      type: 'summary',
      data: {
        text: 'Kc = [products]^stoich / [reactants]^stoich. For homogeneous systems, all species are included. For heterogeneous systems, omit pure solids and pure liquids. Units depend on Δn. Kc is independent of initial concentrations and catalysts, but depends on temperature.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-kc-general',
        prompt: 'What is the general form of the equilibrium constant expression Kc for aA + bB ⇌ cC + dD?'
      },
      {
        id: 'cue-2',
        blockId: 'p-hetero',
        prompt: 'Why are pure solids and pure liquids omitted from Kc expressions?'
      },
      {
        id: 'cue-3',
        blockId: 'p-units',
        prompt: 'How do you determine the units of Kc?'
      },
      {
        id: 'cue-4',
        blockId: 'ex-hetero-1',
        prompt: 'Write the Kc expression for CaCO₃(s) ⇌ CaO(s) + CO₂(g).'
      },
      {
        id: 'cue-5',
        blockId: 'p-rule',
        prompt: 'What is included and what is omitted from Kc expressions in heterogeneous systems?'
      }
    ],
    summaryText: 'Kc = [products]^stoichiometric coefficient / [reactants]^stoichiometric coefficient. Omit pure solids and pure liquids. Units = (mol dm⁻³)^Δn where Δn = moles of products − moles of reactants.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Equilibrium Constant Definition',
      detail: 'Kc is the ratio of equilibrium concentrations raised to stoichiometric powers, constant at a given temperature.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['equilibrium', 'Kc', 'homogeneous', 'heterogeneous']
    }
  ]
};
