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
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Build Kc from equilibrium concentrations",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "For aA + bB ⇌ cC + dD, the concentration expression is [C]ᶜ[D]ᵈ/[A]ᵃ[B]ᵇ for the species included in the equilibrium model. Use equilibrium concentrations, not initial concentrations. Raise each concentration to its stoichiometric coefficient. Pure solids and pure liquids are omitted from the appropriate heterogeneous expression because their activities are effectively constant.<br/><br/>In A-Level concentration notation, units are derived from the net concentration power. Temperature changes K; concentration and pressure changes can alter the equilibrium composition without changing K at that temperature. A catalyst does not change K. State the equation direction: reversing the equation gives the reciprocal equilibrium constant."
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
      id: 'ex-homo-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Esterification Reaction (All Liquids)',
        text: 'CH₃COOH(l) + CH₃CH₂OH(l) ⇌ CH₃COOCH₂CH₃(l) + H₂O(l)\n\nKc = ([CH₃COOCH₂CH₃] × [H₂O]) / ([CH₃COOH] × [CH₃CH₂OH]). All species are liquids, so they interact in a homogeneous mixture. Everything is included in the Kc expression. Since there are equal moles of liquid on both sides (Δn = 0), Kc has no units.'
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
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Notation Trap: Kc vs Kp Brackets",
        text: "For Kc expressions, ALWAYS use square brackets [ ]. Examiners will not award notation marks if you use round brackets. This is different from Kp which MUST use round brackets p(...)."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'key',
        title: "Critical Misconception: Kc \u2260 the Equilibrium Position",
        text: "Kc is constant at a given temperature and does NOT change when you alter concentration, pressure, or add a catalyst. The position of equilibrium shifts to restore Qc = Kc, but Kc itself remains unchanged. Only temperature changes K."
      }
    }
  ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "For H₂(g) + I₂(g) ⇌ 2HI(g), equilibrium concentrations are 0.20, 0.10 and 0.40 mol dm⁻³ respectively. Kc = 0.40²/(0.20 × 0.10) = <strong>8.0</strong>. Concentration powers cancel, so Kc has no units in this treatment. Reversing the equation gives Kc = 1/8.0 = 0.125."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Do not insert moles directly unless volume factors cancel after proper substitution. Do not infer reaction speed from a large K value; K describes equilibrium composition."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "Which concentrations belong in Kc?",
        "checked": false
      },
      {
        "text": "How do coefficients appear in the expression?",
        "checked": false
      },
      {
        "text": "What happens to K when the equation is reversed?",
        "checked": false
      },
      {
        "text": "Can a catalyst increase Kc at fixed temperature?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "For aA + bB ⇌ cC + dD, the concentration expression is [C]ᶜ[D]ᵈ/[A]ᵃ[B]ᵇ for the species included in the equilibrium model. Use equilibrium concentrations, not initial concentrations. Raise each concentration to its stoichiometric coefficient. Pure solids and pure liquids are omitted from the appropriate heterogeneous expression because their activities are effectively constant."
  }
}
  ],
  recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "Which concentrations belong in Kc?",
      "answer": "Equilibrium concentrations."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "How do coefficients appear in the expression?",
      "answer": "As powers of the corresponding concentrations."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "What happens to K when the equation is reversed?",
      "answer": "It becomes its reciprocal."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "Can a catalyst increase Kc at fixed temperature?",
      "answer": "No. It changes the rate of reaching equilibrium, not the equilibrium constant."
    }
  ],
  "summaryText": "For aA + bB ⇌ cC + dD, the concentration expression is [C]ᶜ[D]ᵈ/[A]ᵃ[B]ᵇ for the species included in the equilibrium model. Use equilibrium concentrations, not initial concentrations. Raise each concentration to its stoichiometric coefficient. Pure solids and pure liquids are omitted from the appropriate heterogeneous expression because their activities are effectively constant.",
  "ready": true
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
  , {"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}]
};
