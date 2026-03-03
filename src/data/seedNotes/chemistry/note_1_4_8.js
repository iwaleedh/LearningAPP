export const note_chemistry_1_4_8 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Define structural isomerism; draw and name all structural isomers for a given molecular formula up to C₆.'
    }
  }, {
    id: 'h-intro',
    type: 'heading',
    data: {
      text: 'What is Structural Isomerism?',
      level: 2
    }
  }, {
    id: 'callout-key-iso',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Structural Isomers — Definition',
      text: 'Structural isomers (also called constitutional isomers) are compounds that have the same molecular formula but different structural formulae — i.e. the atoms are connected in a different order or arrangement.'
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["Because structural isomers have different connectivity, they have different physical properties (boiling point, melting point, density) and often different chemical properties too."]
    }
  }, {
    id: 'h-types',
    type: 'heading',
    data: {
      text: 'Types of Structural Isomerism',
      level: 2
    }
  }, {
    id: 'table-types',
    type: 'comparisonTable',
    data: {
      caption: 'Types of structural isomerism',
      headers: ['Type', 'Description', 'Example (C₄H₁₀)'],
      rows: [['Chain isomerism', 'Different arrangement of the carbon skeleton (straight vs branched chain)', 'Butane vs 2-methylpropane'], ['Position isomerism', 'Same carbon skeleton and functional group, but functional group on a different carbon', 'Butan-1-ol vs butan-2-ol'], ['Functional group isomerism', 'Same molecular formula but different functional groups', 'C₂H₆O: ethanol (alcohol) vs methoxymethane (ether)']]
    }
  }, {
    id: 'h-chain',
    type: 'heading',
    data: {
      text: 'Chain Isomerism — Worked Examples',
      level: 2
    }
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'C₄H₁₀ — Chain Isomers',
      text: 'Molecular formula: C₄H₁₀ (butane — general formula CₙH₂ₙ₊₂, n=4)\n\nIsomer 1: Butane\nCH₃–CH₂–CH₂–CH₃ (straight chain, 4 carbons)\nb.p. = −1 °C\n\nIsomer 2: 2-Methylpropane\n(CH₃)₃CH — branched, longest chain = 3C with a methyl branch on C2\nb.p. = −12 °C\n\nNote: 2-methylpropane has a lower boiling point because its more compact shape gives a smaller surface area → weaker London forces.'
    }
  }, {
    id: 'callout-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'C₅H₁₂ — Chain Isomers (3 isomers)',
      text: 'Molecular formula: C₅H₁₂\n\nIsomer 1: Pentane — CH₃CH₂CH₂CH₂CH₃ (b.p. +36 °C)\n\nIsomer 2: 2-Methylbutane — CH₃CH(CH₃)CH₂CH₃ (b.p. +28 °C)\n\nIsomer 3: 2,2-Dimethylpropane — C(CH₃)₄ (b.p. +10 °C)\n\nHighly branched → most compact → lowest boiling point.'
    }
  }, {
    id: 'h-position',
    type: 'heading',
    data: {
      text: 'Position Isomerism — Worked Examples',
      level: 2
    }
  }, {
    id: 'callout-we3',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'C₄H₉Br — Position Isomers',
      text: 'Molecular formula: C₄H₉Br (bromobutane)\n\n1-Bromobutane: Br on C1 — CH₂Br–CH₂–CH₂–CH₃\n2-Bromobutane: Br on C2 — CH₃–CHBr–CH₂–CH₃\n\nBoth have same skeleton (butane) and same functional group (–Br), but Br is in a different position → position isomers.'
    }
  }, {
    id: 'h-functional',
    type: 'heading',
    data: {
      text: 'Functional Group Isomerism — Worked Examples',
      level: 2
    }
  }, {
    id: 'callout-we4',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'C₃H₆O — Functional Group Isomers',
      text: 'Molecular formula: C₃H₆O\n\nIsomer 1: Propanal (aldehyde) — CH₃CH₂CHO\nIsomer 2: Propan-2-one / acetone (ketone) — CH₃COCH₃\nIsomer 3: Allyl alcohol (unsaturated alcohol) — CH₂=CHCH₂OH\n\nAll have C₃H₆O but completely different functional groups and very different chemistry.'
    }
  }, {
    id: 'h-counting',
    type: 'heading',
    data: {
      text: 'Systematic Approach to Drawing Isomers',
      level: 2
    }
  }, {
    id: 'list-systematic',
    type: 'list',
    data: {
      style: 'numbered',
      items: ['Draw the longest possible straight chain first.', 'Shorten the chain by 1 carbon and try all positions for the removed branch(es).', 'Continue shortening and branching until no new structures are possible.', 'Check for position isomers: move the functional group to each carbon in turn.', 'Check for functional group isomers: what other functional groups have this molecular formula?', 'Verify each structure is unique — rotate and mirror images are the same compound.']
    }
  }, {
    id: 'h-c6',
    type: 'heading',
    data: {
      text: 'C₆H₁₄ — Counting Chain Isomers',
      level: 2
    }
  }, {
    id: 'table-c6',
    type: 'comparisonTable',
    data: {
      caption: 'All 5 structural isomers of C₆H₁₄ (hexane)',
      headers: ['IUPAC name', 'Structural representation', 'Boiling point / °C'],
      rows: [['Hexane', 'CH₃(CH₂)₄CH₃', '+69'], ['2-Methylpentane', 'CH₃CH(CH₃)(CH₂)₂CH₃', '+60'], ['3-Methylpentane', 'CH₃CH₂CH(CH₃)CH₂CH₃', '+63'], ['2,2-Dimethylbutane', '(CH₃)₃CCH₂CH₃', '+50'], ['2,3-Dimethylbutane', 'CH₃CH(CH₃)CH(CH₃)CH₃', '+58']]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tips',
      text: '• Always check that structural isomers have exactly the same molecular formula.\n• Two structures that are mirror images of each other (enantiomers) are NOT structural isomers — they are stereoisomers.\n• When drawing isomers in an exam, work systematically (longest chain first, then branch) to avoid missing any.\n• Branching always lowers boiling point relative to the straight-chain isomer (less surface area → weaker London forces).'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Drawing the same structure twice in a different orientation and calling them isomers — rotate mentally first.\n• Forgetting position isomers — moving a functional group from C1 to C2 gives a different compound.\n• Confusing structural isomerism with stereoisomerism (E/Z, optical) — stereoisomers have the same connectivity.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can define structural isomer precisely.',
        checked: false
      }, {
        text: 'I can distinguish chain, position and functional group isomerism.',
        checked: false
      }, {
        text: 'I can systematically draw all structural isomers of alkanes up to C₆.',
        checked: false
      }, {
        text: 'I can explain why branched isomers have lower boiling points.',
        checked: false
      }, {
        text: 'I can identify when two drawn structures are actually the same compound.',
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
      text: 'Understand: Structural isomers have same molecular formula but different arrangements — chain, position, or functional group isomerism.\n\nApply: Draw all structural isomers of C₄H₁₀O. Classify as alcohol or ether.\n\nAnalyze: How do different –OH positions in butan-1-ol vs butan-2-ol affect oxidation products?\n\nEvaluate: "Structural isomers have different physical but same chemical properties." Assess with examples.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Structural isomers have the same molecular formula but different structural formulae. Types: chain (different skeleton), position (functional group on different C), functional group (different functional group). Draw systematically: longest chain first, then reduce chain length and add branches. Branching lowers boiling point (less surface area → weaker London forces).'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-iso',
      prompt: 'Define structural isomers. How do they differ from stereoisomers?'
    }, {
      id: 'cue-2',
      blockId: 'table-types',
      prompt: 'Name and describe the three types of structural isomerism.'
    }, {
      id: 'cue-3',
      blockId: 'callout-we1',
      prompt: 'Draw and name the two structural isomers of C₄H₁₀.'
    }, {
      id: 'cue-4',
      blockId: 'table-c6',
      prompt: 'How many structural isomers does C₆H₁₄ have? Name them.'
    }, {
      id: 'cue-5',
      blockId: 'callout-tip',
      prompt: 'Why does 2,2-dimethylpropane have a lower boiling point than pentane?'
    }],
    summaryText: 'Structural isomers: same molecular formula, different structural formula. Types: chain, position, functional group. C₄H₁₀ has 2 isomers; C₅H₁₂ has 3; C₆H₁₄ has 5. Branching → lower b.p. (less surface area → weaker London forces).',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'Structural isomerism including chain, position and functional group isomers is required for Topic 4.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['isomerism', 'structural isomers']
  }]
};