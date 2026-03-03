/**
 * WCH12 | Topic 8: Redox & Groups 1, 2, 7 | Subtopic 8
 * Fluorine and astatine predictions
 */

export const note_chemistry_1_2_8_8 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Use knowledge of halogen and halide trends to make predictions about the properties of fluorine and astatine. Explain why fluorine is anomalous in some respects.'
    }
  }, {
    id: 'h-predict',
    type: 'heading',
    data: {
      text: 'Predicting Properties of Fluorine and Astatine',
      level: 2
    },
    terms: ['Halogen']
  }, {
    id: 'p-predict',
    type: "list",
    data: {
      style: "unordered",
      items: ["Fluorine (at the top of Group 17) and astatine (at the bottom) are at the extremes of the group trends.", "By extrapolating the trends, we can predict properties of astatine.", "Fluorine, however, shows some anomalous behaviour because of its uniquely small atomic radius, highest electronegativity and lack of low-energy d-orbitals."]
    },
    terms: ['Halogen']
  }, {
    id: 'table-predict',
    type: 'comparisonTable',
    data: {
      caption: 'Predicted properties of fluorine and astatine based on group trends',
      headers: ['Property', 'Fluorine (F₂)', 'Chlorine (Cl₂)', 'Bromine (Br₂)', 'Iodine (I₂)', 'Astatine (At₂) predicted'],
      rows: [['State (room temp)', 'Gas (pale yellow)', 'Gas (yellow-green)', 'Liquid (red-brown)', 'Solid (black)', 'Solid (dark)'], ['Boiling point', '−188°C', '−35°C', '59°C', '184°C', '>184°C (predicted ~340°C)'], ['Oxidising ability', 'Strongest', 'Strong', 'Moderate', 'Weak', 'Weakest'], ['Reducing ability of X⁻', 'F⁻ weakest', 'Cl⁻ weak', 'Br⁻ moderate', 'I⁻ strong', 'At⁻ strongest'], ['Electronegativity', '4.0 (highest)', '3.2', '3.0', '2.7', 'Lowest (~2.2)']]
    },
    terms: ['Halogen']
  }, {
    id: 'h-fluorine-anomalies',
    type: 'heading',
    data: {
      text: 'Why Fluorine is Anomalous',
      level: 2
    },
    terms: ['Halogen']
  }, {
    id: 'callout-fluorine-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Fluorine Anomalies',
      text: '1. F–F bond enthalpy is unusually LOW (+158 kJ mol⁻¹ — lower than Cl–Cl at +243)\n   Reason: small F atom → lone pairs on adjacent F atoms repel each other strongly\n\n2. Fluorine is the MOST reactive halogen despite a weak F–F bond because it forms extremely strong bonds with other elements (e.g. H–F = +568 kJ mol⁻¹)\n\n3. Fluorine cannot show positive oxidation states (no d-orbitals available for expansion)\n   All other halogens can show +1, +3, +5, +7 oxidation states in oxyanions (e.g. ClO₄⁻)\n\n4. HF is a WEAK acid despite being a hydrogen halide — unusually strong H–F bond (568 kJ mol⁻¹) resists dissociation\n   HCl, HBr, HI are all strong acids\n\n5. Fluorine reacts differently with water:\n   F₂ + H₂O → 2HF + ½O₂  (oxidises water — too reactive)\n   Cl₂ + H₂O ⇌ HCl + HOCl  (disproportionation)'
    },
    terms: ['Halogen']
  }, {
    id: 'callout-astatine-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Predicting Astatine Properties',
      text: 'Based on Group 17 trends, At₂ would be predicted to:\n  • Be a dark/black solid at room temperature (stronger London forces)\n  • Have a boiling point above 184°C\n  • Be the weakest oxidising agent in Group 17\n  • Have At⁻ as the strongest reducing agent\n  • Not displace any other halide from solution (I₂ would displace At⁻)\n  • React with H₂SO₄ to give the most extensive reduction (beyond H₂S)\n\nNote: Astatine is highly radioactive — properties are predicted, not easily measured.'
    },
    terms: ['Halogen']
  }, {
    id: 'callout-tip-predict',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Prediction Questions',
      text: 'For prediction questions about At or F:\n  1. Identify the trend (e.g. boiling point increases, oxidising ability decreases)\n  2. State what would be predicted for At (extending the trend further)\n  3. Justify using the atomic structure reason (e.g. larger atom, more electrons, lower electronegativity)\n\nFor fluorine anomaly questions, always link to its uniquely small atomic radius and highest electronegativity.'
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
        text: 'Astatine predicted: dark solid, weakest oxidising halogen, At⁻ strongest reducing halide',
        checked: false
      }, {
        text: 'F–F bond unexpectedly weak (158 kJ mol⁻¹) due to lone pair repulsion',
        checked: false
      }, {
        text: 'F most reactive despite weak F–F bond — forms very strong bonds with other elements',
        checked: false
      }, {
        text: 'F cannot show positive oxidation states (no d-orbitals)',
        checked: false
      }, {
        text: 'HF is a weak acid (strong H–F bond); HCl, HBr, HI are strong acids',
        checked: false
      }, {
        text: 'F₂ oxidises water; Cl₂ disproportionates in water',
        checked: false
      }]
    }
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Astatine is predicted to be a dark solid with the lowest oxidising ability and strongest reducing At⁻ ion in Group 17. Fluorine is anomalous: its F–F bond is weaker than Cl–Cl (lone pair repulsion), yet it is the most reactive halogen (forms very strong bonds); it cannot show positive oxidation states; HF is a weak acid. Fluorine oxidises water while chlorine disproportionates in it.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'table-predict',
      prompt: 'Predict the state, boiling point and oxidising ability of astatine (At₂) at room temperature. Justify your predictions.'
    }, {
      id: 'cue-2',
      blockId: 'callout-fluorine-key',
      prompt: 'State THREE anomalous properties of fluorine compared to the rest of Group 17. Explain why the F–F bond is weaker than Cl–Cl.'
    }, {
      id: 'cue-3',
      blockId: 'callout-fluorine-key',
      prompt: 'Why is HF a weak acid when HCl, HBr and HI are strong acids? Which two halogens react differently with water, and how?'
    }],
    summaryText: 'Astatine predictions, fluorine anomalies: F–F bond, no positive ox states, HF weak acid, water reactions.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL WCH12 Spec',
    detail: 'Topic 8: Halogens',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['WCH12', 'Halogens', 'Fluorine', 'Astatine']
  }]
};