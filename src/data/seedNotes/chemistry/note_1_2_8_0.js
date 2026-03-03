/**
 * WCH12 | Topic 8: Redox & Groups 1, 2, 7 | Subtopic 0
 * Oxidation numbers and rules
 */

export const note_chemistry_1_2_8_0 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'State the rules for assigning oxidation numbers (states). Assign oxidation numbers to atoms in molecules, ions and compounds. Use oxidation numbers to identify oxidation and reduction in reactions.'
    }
  }, {
    id: 'h-oxidation',
    type: 'heading',
    data: {
      text: 'Oxidation Numbers (Oxidation States)',
      level: 2
    },
    terms: ['Oxidation number', 'Oxidation state']
  }, {
    id: 'p-oxidation',
    type: "list",
    data: {
      style: "unordered",
      items: ["An oxidation number (or oxidation state) is a number assigned to an atom in a compound that represents the charge it would have if all bonds were ionic.", "Oxidation numbers help us track electron transfer in redox reactions.", "g.", "iron(III)) or as signed integers on atoms."]
    },
    terms: ['Oxidation number']
  }, {
    id: 'callout-rules-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Rules for Assigning Oxidation Numbers',
      text: '1. Elements (uncombined): oxidation number = 0   e.g. Na, O₂, Cl₂, Fe → all 0\n2. Simple monatomic ions: oxidation number = ionic charge   e.g. Na⁺ = +1, Cl⁻ = −1, Fe³⁺ = +3\n3. Fluorine: always −1 in compounds (most electronegative)\n4. Oxygen: usually −2 (except in peroxides = −1, OF₂ = +2)\n5. Hydrogen: usually +1 (except in metal hydrides = −1, e.g. NaH)\n6. Sum of oxidation numbers in a neutral compound = 0\n7. Sum of oxidation numbers in a polyatomic ion = ionic charge'
    },
    terms: ['Oxidation number']
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example 1 — Finding Oxidation Numbers',
      text: 'Find the oxidation number of Mn in KMnO₄:\n\nK = +1,  O = −2  (×4 = −8)\nLet Mn = x\nSum = 0 (neutral compound):\n  +1 + x + (−8) = 0\n  x = +7\n∴ Mn is +7 in KMnO₄\n\n─────────────────────────────────────────\nFind the oxidation number of Cr in Cr₂O₇²⁻:\n\nO = −2  (×7 = −14)\nLet Cr = x  (×2 = 2x)\nSum = −2 (ionic charge):\n  2x + (−14) = −2\n  2x = +12\n  x = +6\n∴ Cr is +6 in Cr₂O₇²⁻'
    },
    terms: ['Oxidation number']
  }, {
    id: 'h-oxi-red',
    type: 'heading',
    data: {
      text: 'Oxidation and Reduction in Terms of Oxidation Numbers',
      level: 2
    },
    terms: ['Oxidation', 'Reduction']
  }, {
    id: 'callout-oilrig-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 OIL RIG — Oxidation Is Loss, Reduction Is Gain (of electrons)',
      text: 'Oxidation: oxidation number INCREASES (loses electrons)\nReduction: oxidation number DECREASES (gains electrons)\n\nOIL RIG = Oxidation Is Loss, Reduction Is Gain (of electrons)\n\nExample: Mg → Mg²⁺  (0 → +2) = oxidation (loses 2 electrons)\n         Cl₂ → 2Cl⁻  (0 → −1) = reduction (each Cl gains 1 electron)'
    },
    terms: ['Oxidation', 'Reduction']
  }, {
    id: 'table-oxidation',
    type: 'comparisonTable',
    data: {
      caption: 'Common oxidation number values to memorise',
      headers: ['Element/Ion', 'Usual oxidation number', 'Exceptions'],
      rows: [['Group 1 metals (Na, K)', '+1', 'None'], ['Group 2 metals (Mg, Ca)', '+2', 'None'], ['Al', '+3', 'None'], ['O', '−2', 'Peroxides (−1), OF₂ (+2)'], ['H', '+1', 'Metal hydrides (−1, e.g. NaH)'], ['F', '−1', 'Never positive (most electronegative)'], ['Cl', '−1', '+1, +3, +5, +7 in oxyanions'], ['S', '−2, +4, +6', 'Varies widely'], ['N', '−3, 0, +2, +3, +4, +5', 'Varies widely']]
    },
    terms: ['Oxidation number']
  }, {
    id: 'callout-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example 2 — Identifying Redox',
      text: 'Is the following reaction a redox reaction?\n  Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)\n\nAssign oxidation numbers:\n  Zn:  0 → +2  (oxidation — loses 2e⁻)\n  Cu:  +2 → 0  (reduction — gains 2e⁻)\n  S:   +6 → +6  (unchanged)\n  O:   −2 → −2  (unchanged)\n\nYes — it is a redox reaction. Zn is oxidised; Cu²⁺ is reduced.\nZn is the reducing agent; CuSO₄ is the oxidising agent.'
    },
    terms: ['Oxidation number', 'Oxidation', 'Reduction']
  }, {
    id: 'h-checklist',
    type: 'heading',
    data: {
      text: 'Exam Checklist',
      level: 2
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Elements = 0; monatomic ions = ionic charge',
        checked: false
      }, {
        text: 'O = −2 (except peroxides −1); H = +1 (except metal hydrides −1); F = always −1',
        checked: false
      }, {
        text: 'Sum of oxidation numbers = 0 for neutral compound; = charge for polyatomic ion',
        checked: false
      }, {
        text: 'OIL RIG: Oxidation = increase in oxidation number; Reduction = decrease',
        checked: false
      }, {
        text: 'Reducing agent: gets oxidised (loses electrons); Oxidising agent: gets reduced',
        checked: false
      }]
    }
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Oxidation numbers are assigned using a set of rules: elements = 0, O = −2, H = +1, F = −1, sum = 0 for neutral compounds. OIL RIG: oxidation is increase in oxidation number (loss of electrons); reduction is decrease (gain of electrons). The reducing agent is oxidised; the oxidising agent is reduced.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-rules-key',
      prompt: 'State the 7 rules for assigning oxidation numbers. What is the oxidation number of O in peroxides?'
    }, {
      id: 'cue-2',
      blockId: 'callout-we1',
      prompt: 'Find the oxidation number of Mn in KMnO₄ and Cr in Cr₂O₇²⁻.'
    }, {
      id: 'cue-3',
      blockId: 'callout-oilrig-key',
      prompt: 'What does OIL RIG stand for? Is an increase or decrease in oxidation number oxidation?'
    }],
    summaryText: 'Oxidation number rules, OIL RIG, worked examples, identifying redox.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL WCH12 Spec',
    detail: 'Topic 8: Redox & Groups',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['WCH12', 'Redox', 'Oxidation numbers']
  }]
};