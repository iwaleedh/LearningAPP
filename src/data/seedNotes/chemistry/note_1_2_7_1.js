/**
 * WCH12 | Topic 7: Intermolecular Forces | Subtopic 1
 * Permanent dipole interactions
 */

export const note_chemistry_1_2_7_1 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Explain permanent dipole–dipole interactions and how they arise from polar bonds. Compare permanent dipole forces with London forces and explain their effect on physical properties.'
    }
  }, {
    id: 'h-dipole',
    type: 'heading',
    data: {
      text: 'Permanent Dipole–Dipole Interactions',
      level: 2
    },
    terms: ['Permanent dipole', 'Intermolecular forces']
  }, {
    id: 'p-dipole',
    type: "list",
    data: {
      style: "unordered",
      items: ["A permanent dipole exists in a molecule when there is a difference in electronegativity between bonded atoms, AND the bond dipoles do not cancel due to molecular shape.", "Molecules with a permanent dipole are described as polar molecules.", "The \u03B4+ end of one molecule is attracted to the \u03B4\u2212 end of a neighbouring molecule \u2014 this is a permanent dipole\u2013dipole interaction."]
    },
    terms: ['Permanent dipole']
  }, {
    id: 'callout-pd-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Conditions for a Permanent Dipole',
      text: 'TWO conditions must BOTH be met:\n  1. Polar bonds present (atoms of different electronegativity)\n  2. Dipoles do NOT cancel — asymmetric molecular shape\n\nExamples with permanent dipole: HCl, H₂O, NH₃, SO₂, CH₃Cl\nExamples WITHOUT (dipoles cancel): CO₂ (linear), CCl₄ (tetrahedral), BF₃ (trigonal planar)'
    },
    terms: ['Permanent dipole']
  }, {
    id: 'table-dipole',
    type: 'comparisonTable',
    data: {
      caption: 'Comparing London forces and permanent dipole–dipole interactions',
      headers: ['Feature', 'London forces', 'Permanent dipole–dipole'],
      rows: [['Present in', 'ALL molecules', 'Polar molecules only'], ['Origin', 'Temporary dipole → induced dipole', 'Permanent δ+ attracts δ−'], ['Relative strength', 'Weaker (for similar Mr)', 'Stronger than London forces alone'], ['Effect on bp', 'Increases with Mr', 'Higher bp than non-polar molecules of similar Mr']]
    },
    terms: ['London forces', 'Permanent dipole']
  }, {
    id: 'callout-we-dipole',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example — Comparing Boiling Points',
      text: 'Why does propanone (CH₃COCH₃, Mr = 58) have a higher boiling point (56°C) than butane (C₄H₁₀, Mr = 58, bp = −1°C)?\n\nBoth have the same Mr → similar London forces.\nPropanone is polar (C=O bond, asymmetric) → permanent dipole–dipole interactions.\nButane is non-polar → London forces only.\n\nThe additional permanent dipole–dipole forces in propanone require more energy to overcome → higher boiling point.'
    },
    terms: ['Permanent dipole']
  }, {
    id: 'callout-tip-dipole',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Comparing Intermolecular Forces',
      text: 'When comparing boiling points:\n  1. First identify ALL intermolecular forces present in each molecule\n  2. Consider both London forces (depends on Mr/electrons) AND dipole forces\n  3. Explain which forces are stronger and why more energy is needed to overcome them\n\nNever forget London forces — they are present in ALL molecules including polar ones.'
    }
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
        text: 'Permanent dipole: polar bonds + asymmetric shape',
        checked: false
      }, {
        text: 'Permanent dipole–dipole: δ+ of one molecule attracts δ− of another',
        checked: false
      }, {
        text: 'CO₂, CCl₄, BF₃: polar bonds but NO net dipole (cancel by symmetry)',
        checked: false
      }, {
        text: 'Polar molecules have BOTH London forces AND dipole–dipole forces',
        checked: false
      }, {
        text: 'Higher boiling point than non-polar molecules of same Mr — extra dipole forces',
        checked: false
      }]
    }
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Permanent dipole–dipole interactions occur between polar molecules (polar bonds + asymmetric shape). The δ+ end of one molecule attracts the δ− end of a neighbour. These forces are stronger than London forces for molecules of similar size, giving polar molecules higher boiling points than non-polar isomers of the same Mr.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-pd-key',
      prompt: 'State the TWO conditions required for a molecule to have a permanent dipole. Give two examples of molecules with and without a permanent dipole.'
    }, {
      id: 'cue-2',
      blockId: 'callout-we-dipole',
      prompt: 'Propanone and butane both have Mr = 58. Propanone bp = 56°C, butane bp = −1°C. Explain this difference in terms of intermolecular forces.'
    }],
    summaryText: 'Permanent dipole–dipole interactions, conditions for a dipole, comparison with London forces.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL WCH12 Spec',
    detail: 'Topic 7: Intermolecular Forces',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['WCH12', 'Intermolecular forces']
  }]
};