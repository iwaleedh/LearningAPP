export const note_chemistry_1_3_1 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Explain how ions form by electron transfer; write ionic equations for ion formation; predict the charges of ions from group number and electron configuration.'
    }
  }, {
    id: 'h-ion-formation',
    type: 'heading',
    data: {
      text: 'Ion Formation by Electron Transfer',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["Ionic bonds form when electrons are transferred from a metal atom to a non-metal atom.", "The metal loses electrons to form a positive ion (cation); the non-metal gains electrons to form a negative ion (anion).", "Both ions typically achieve a noble gas electron configuration (full outer shell)."]
    }
  }, {
    id: 'callout-key-def',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key definition — ionic bond',
      text: 'An ionic bond is the strong electrostatic attraction between oppositely charged ions. It is non-directional (acts equally in all directions) and holds ions together in a giant lattice structure.'
    }
  }, {
    id: 'h-predicting',
    type: 'heading',
    data: {
      text: 'Predicting Ion Charges from Group Number',
      level: 2
    }
  }, {
    id: 'table-charges',
    type: 'comparisonTable',
    data: {
      caption: 'Ion charges from periodic table group',
      headers: ['Group', 'Electrons lost/gained', 'Ion charge', 'Example'],
      rows: [['1', 'Loses 1', '1+', 'Na⁺, K⁺, Li⁺'], ['2', 'Loses 2', '2+', 'Mg²⁺, Ca²⁺, Ba²⁺'], ['13', 'Loses 3', '3+', 'Al³⁺'], ['15', 'Gains 3', '3−', 'N³⁻, P³⁻'], ['16', 'Gains 2', '2−', 'O²⁻, S²⁻'], ['17', 'Gains 1', '1−', 'F⁻, Cl⁻, Br⁻, I⁻']]
    }
  }, {
    id: 'h-examples',
    type: 'heading',
    data: {
      text: 'Worked Examples of Electron Transfer',
      level: 2
    }
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Formation of NaCl',
      text: 'Sodium (Group 1): Na → Na⁺ + e⁻\n  Config: [Ne]3s¹ → [Ne]  (loses 1 electron → noble gas config)\n\nChlorine (Group 17): Cl + e⁻ → Cl⁻\n  Config: [Ne]3s²3p⁵ → [Ne]3s²3p⁶ = [Ar]  (gains 1 electron → noble gas config)\n\nOverall: Na + Cl → Na⁺Cl⁻\nElectrostatic attraction between Na⁺ and Cl⁻ forms the ionic bond.'
    }
  }, {
    id: 'callout-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Formation of MgO',
      text: 'Magnesium (Group 2): Mg → Mg²⁺ + 2e⁻\n  Config: [Ne]3s² → [Ne]  (loses 2 electrons)\n\nOxygen (Group 16): O + 2e⁻ → O²⁻\n  Config: 1s²2s²2p⁴ → 1s²2s²2p⁶ = [Ne]  (gains 2 electrons)\n\nOverall: Mg + O → Mg²⁺O²⁻'
    }
  }, {
    id: 'callout-we3',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Formation of CaCl₂',
      text: 'Calcium (Group 2): Ca → Ca²⁺ + 2e⁻  (loses 2 electrons)\nChlorine (Group 17): each Cl + e⁻ → Cl⁻  (gains 1 electron)\n\nRatio: 1 Ca²⁺ : 2 Cl⁻  (charges balance: 2+ and 2×1− = 2−)\n\nOverall: Ca + Cl₂ → Ca²⁺(Cl⁻)₂'
    }
  }, {
    id: 'h-noble-gas',
    type: 'heading',
    data: {
      text: 'Noble Gas Configurations',
      level: 2
    }
  }, {
    id: 'p-noble-gas',
    type: "list",
    data: {
      style: "unordered",
      items: ["Most ions formed by main-group elements achieve the electron configuration of the nearest noble gas.", "This is a stable arrangement because the outer shell is fully filled.", "g.", "Fe\xB2\u207A, Cu\xB2\u207A)."]
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common mistake — ionic bond is NOT a shared pair',
      text: 'Do not confuse ionic and covalent bonding. In ionic bonding, electrons are TRANSFERRED — one atom loses electrons and another gains them. There is no sharing. A covalent bond involves a SHARED pair of electrons between two atoms.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Define an ionic bond',
        checked: false
      }, {
        text: 'Predict ion charges from group number',
        checked: false
      }, {
        text: 'Write equations for the formation of Na⁺, Mg²⁺, Cl⁻, O²⁻',
        checked: false
      }, {
        text: 'Explain how both ions in NaCl achieve noble gas configurations',
        checked: false
      }, {
        text: 'Determine the ratio of ions in a compound to give overall charge neutrality',
        checked: false
      }]
    }
  },
    // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
  {
    id: 'bloom-understand',
    type: 'callout',
    data: {
      style: 'key',
      title: '🧠 Deeper Understanding — Why It Matters',
      text: 'Understand: Ion formation involves electron transfer to achieve stable configurations. Metals lose electrons; non-metals gain.\n\nApply: Draw dot-and-cross diagrams for MgCl₂ formation showing electron transfer.\n\nAnalyze: Why does aluminium form Al³⁺ rather than Al²⁺? Consider electronic configuration and successive IE.\n\nEvaluate: Fe²⁺ and Fe³⁺ exist without noble gas configurations. Does this invalidate the octet rule model?'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Ionic bond = electrostatic attraction between oppositely charged ions formed by electron transfer. Metals lose electrons (cations); non-metals gain electrons (anions). Group number predicts charge: Group 1 → 1+, Group 2 → 2+, Group 16 → 2−, Group 17 → 1−. Both ions usually achieve noble gas electron configuration. Compound must be electrically neutral overall.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-def',
      prompt: 'Define an ionic bond.'
    }, {
      id: 'cue-2',
      blockId: 'table-charges',
      prompt: 'What charge does a Group 16 element form as an ion? Why?'
    }, {
      id: 'cue-3',
      blockId: 'callout-we1',
      prompt: 'Write the electron transfer equations for the formation of NaCl from Na and Cl atoms.'
    }, {
      id: 'cue-4',
      blockId: 'callout-we3',
      prompt: 'Why is the formula of calcium chloride CaCl₂ and not CaCl?'
    }, {
      id: 'cue-5',
      blockId: 'p-noble-gas',
      prompt: 'Why do main-group elements tend to form ions with noble gas configurations?'
    }],
    summaryText: 'Ionic bond: electrostatic attraction, electron transfer. Metals → cations (lose e⁻); non-metals → anions (gain e⁻). Group → charge: Gp1=1+, Gp2=2+, Gp16=2−, Gp17=1−. Compound overall neutral.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 3',
    detail: 'Ion formation, electron transfer, ionic bonding',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['ionic bonding', 'electron transfer']
  }]
};