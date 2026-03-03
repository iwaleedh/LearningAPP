/**
 * WCH12 | Topic 7: Intermolecular Forces | Subtopic 4
 * Predicting hydrogen bonding
 */

export const note_chemistry_1_2_7_4 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Predict whether a molecule can form hydrogen bonds, identify the donor and acceptor atoms, and explain the effect of hydrogen bonding on boiling points of hydrides across periods.'
    }
  }, {
    id: 'h-predict',
    type: 'heading',
    data: {
      text: 'Predicting Hydrogen Bonding',
      level: 2
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'callout-predict-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 How to Predict if a Molecule Can H-Bond',
      text: 'A molecule can form hydrogen bonds if it contains:\n  • N–H bond (e.g. NH₃, amines, amides)\n  • O–H bond (e.g. H₂O, alcohols, carboxylic acids)\n  • F–H bond (e.g. HF)\n\nAND there must be a lone pair on N, O or F available as acceptor (in same or different molecule).\n\nMolecules with ONLY C–H bonds cannot form hydrogen bonds (H is not electronegative enough on C).'
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'table-predict',
    type: 'comparisonTable',
    data: {
      caption: 'Predicting hydrogen bonding in common molecules',
      headers: ['Molecule', 'Relevant bond', 'Can H-bond?', 'Notes'],
      rows: [['H₂O', 'O–H', 'Yes — donor and acceptor', 'Up to 4 H-bonds per molecule'], ['NH₃', 'N–H', 'Yes — donor and acceptor', '3 N–H donors; 1 lone pair acceptor'], ['HF', 'F–H', 'Yes — donor and acceptor', 'Only 1 H–F per molecule; 3 lone pairs on F'], ['CH₃OH (methanol)', 'O–H', 'Yes — donor and acceptor', 'Alcohols H-bond via O–H'], ['CH₃OCH₃ (dimethyl ether)', 'C–H only (no O–H)', 'Acceptor only (lone pair on O)', 'Cannot donate H-bonds; can accept from water'], ['CH₄', 'C–H only', 'No', 'C not electronegative enough'], ['HCl', 'H–Cl', 'No (very weak at best)', 'Cl too large; H-bond negligible'], ['CH₃COOH (ethanoic acid)', 'O–H', 'Yes — strong dimer formation', 'Forms cyclic dimers via 2 H-bonds']]
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'h-hydrides',
    type: 'heading',
    data: {
      text: 'Boiling Points of Hydrides Across Periods',
      level: 2
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'p-hydrides',
    type: "list",
    data: {
      style: "unordered",
      items: ["For most groups, boiling points of hydrides increase down the group as molecular size increases (more London forces).", "However, the first member of Groups 15, 16 and 17 (NH\u2083, H\u2082O, HF) all have anomalously HIGH boiling points compared to the group trend \u2014 because they form hydrogen bonds."]
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'table-hydrides',
    type: 'comparisonTable',
    data: {
      caption: 'Boiling points of Group 16 hydrides — H₂O is anomalously high',
      headers: ['Hydride', 'Mr', 'Boiling point (°C)', 'H-bonds?'],
      rows: [['H₂O', '18', '100', 'Yes — extensive H-bonding'], ['H₂S', '34', '−60', 'No (S not electronegative enough)'], ['H₂Se', '81', '−41', 'No'], ['H₂Te', '130', '−2', 'No']]
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'callout-dimer-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Carboxylic Acid Dimers',
      text: 'Carboxylic acids (e.g. ethanoic acid) form cyclic dimers in the liquid and vapour phase via TWO hydrogen bonds between two molecules:\n\n  O–H · · · O=C\n  ‖              |\n  C=O · · · H–O\n\nThis means the "effective" Mr is doubled, giving carboxylic acids unexpectedly high boiling points.'
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'callout-tip-predict',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Intermolecular vs Intramolecular H-bonds',
      text: 'Intermolecular H-bonds: between different molecules → affect boiling point, solubility\nIntramolecular H-bonds: within the same molecule (e.g. 2-nitrophenol) → REDUCE boiling point compared to isomers with intermolecular H-bonds\n\nAlways specify which type you mean in exam answers.'
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
        text: 'H-bonds require N–H, O–H or F–H bonds in the molecule',
        checked: false
      }, {
        text: 'Acceptor must have lone pair on N, O or F',
        checked: false
      }, {
        text: 'CH₃OCH₃ can accept H-bonds from water but cannot donate them',
        checked: false
      }, {
        text: 'H₂O, HF, NH₃ have anomalously high boiling points due to H-bonding',
        checked: false
      }, {
        text: 'Carboxylic acids form cyclic dimers via 2 H-bonds',
        checked: false
      }]
    }
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'H-bonds form when N–H, O–H or F–H groups are present and a lone pair acceptor is available. Molecules with only C–H bonds cannot form H-bonds. H₂O, HF and NH₃ have anomalously high boiling points due to H-bonding. Carboxylic acids form cyclic dimers. Ethers can accept but not donate H-bonds.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-predict-key',
      prompt: 'State the rule for predicting whether a molecule can form hydrogen bonds. Can CH₄ form H-bonds? Explain.'
    }, {
      id: 'cue-2',
      blockId: 'table-hydrides',
      prompt: 'Why does H₂O have a much higher boiling point than H₂S despite having a lower Mr?'
    }, {
      id: 'cue-3',
      blockId: 'callout-dimer-key',
      prompt: 'Explain why carboxylic acids have unexpectedly high boiling points. What is a dimer?'
    }],
    summaryText: 'Predicting H-bonds, hydride boiling point trends, dimers, intermolecular vs intramolecular.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL WCH12 Spec',
    detail: 'Topic 7: Intermolecular Forces',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['WCH12', 'Hydrogen bonding']
  }]
};