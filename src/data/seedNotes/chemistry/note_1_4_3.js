export const note_chemistry_1_4_3 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Apply IUPAC systematic naming rules to name and draw straight-chain, branched-chain, and substituted organic compounds up to 10 carbons.'
    }
  }, {
    id: 'h-prefixes',
    type: 'heading',
    data: {
      text: 'Carbon Chain Prefixes',
      level: 2
    }
  }, {
    id: 'p-prefixes-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["The IUPAC name of an organic compound is built from a stem that indicates the number of carbon atoms in the longest continuous chain, plus a suffix indicating the functional group, and prefixes for substituents."]
    }
  }, {
    id: 'table-prefixes',
    type: 'comparisonTable',
    data: {
      caption: 'IUPAC carbon-chain prefixes (must be memorised)',
      headers: ['Number of C atoms', 'Prefix', 'Example (alkane)'],
      rows: [['1', 'meth-', 'Methane'], ['2', 'eth-', 'Ethane'], ['3', 'prop-', 'Propane'], ['4', 'but-', 'Butane'], ['5', 'pent-', 'Pentane'], ['6', 'hex-', 'Hexane'], ['7', 'hept-', 'Heptane'], ['8', 'oct-', 'Octane'], ['9', 'non-', 'Nonane'], ['10', 'dec-', 'Decane']]
    }
  }, {
    id: 'h-suffixes',
    type: 'heading',
    data: {
      text: 'Functional Group Suffixes',
      level: 2
    }
  }, {
    id: 'table-suffixes',
    type: 'comparisonTable',
    data: {
      caption: 'IUPAC suffixes for major functional groups',
      headers: ['Functional group', 'Suffix', 'Example'],
      rows: [['Alkane (C–C only)', '-ane', 'Propane'], ['Alkene (C=C)', '-ene', 'Propene'], ['Alkyne (C≡C)', '-yne', 'Propyne'], ['Alcohol (–OH)', '-ol', 'Propan-1-ol'], ['Aldehyde (–CHO)', '-al', 'Propanal'], ['Ketone (C=O)', '-one', 'Propan-2-one'], ['Carboxylic acid (–COOH)', '-oic acid', 'Propanoic acid'], ['Ester (–COO–)', '-anoate', 'Ethyl propanoate'], ['Amine (–NH₂)', '-amine', 'Propylamine / propan-1-amine'], ['Amide (–CONH₂)', '-amide', 'Propanamide'], ['Nitrile (–CN)', '-nitrile', 'Propanenitrile']]
    }
  }, {
    id: 'h-rules',
    type: 'heading',
    data: {
      text: 'IUPAC Naming Rules — Step by Step',
      level: 2
    }
  }, {
    id: 'list-rules',
    type: 'list',
    data: {
      style: 'numbered',
      items: ['<strong>Find the longest carbon chain</strong> containing the principal functional group — this is the parent chain.', '<strong>Number the chain</strong> from the end that gives the principal functional group (or first branch) the lowest locant.', '<strong>Name substituents</strong> as prefixes: methyl (–CH₃), ethyl (–C₂H₅), fluoro (–F), chloro (–Cl), bromo (–Br), iodo (–I), nitro (–NO₂).', '<strong>Use multiplier prefixes</strong> for repeated substituents: di-, tri-, tetra-, penta-.', '<strong>List substituents alphabetically</strong> (ignoring di-, tri- etc.) before the parent chain name.', '<strong>Indicate position</strong> of each substituent and functional group with a locant (number) placed immediately before the part of the name it refers to.', '<strong>Use commas</strong> to separate numbers from numbers, and <strong>hyphens</strong> to separate numbers from letters.']
    }
  }, {
    id: 'h-worked1',
    type: 'heading',
    data: {
      text: 'Worked Examples',
      level: 2
    }
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Example 1 — Branched alkane',
      text: 'Name: CH₃–CH(CH₃)–CH₂–CH₃\n\nStep 1: Longest chain = 4 carbons → but-\nStep 2: Number from left: methyl group on C2 → 2-methyl\nStep 3: Functional group = alkane → -ane\nName: 2-methylbutane'
    }
  }, {
    id: 'callout-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Example 2 — Alcohol',
      text: 'Name: CH₃–CH₂–CH(OH)–CH₃\n\nStep 1: Longest chain = 4 carbons → but-\nStep 2: –OH on C3 from the left, but C2 from the right → number from right to give –OH locant 2\nStep 3: Functional group = alcohol → -ol\nName: butan-2-ol'
    }
  }, {
    id: 'callout-we3',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Example 3 — Alkene with branch',
      text: 'Name: CH₂=C(CH₃)–CH₂–CH₃\n\nStep 1: Longest chain including C=C = 4 carbons → but-\nStep 2: C=C starts at C1 → but-1-ene\nStep 3: Methyl branch on C2\nName: 2-methylbut-1-ene'
    }
  }, {
    id: 'callout-we4',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Example 4 — Halogenoalkane',
      text: 'Name: CH₃–CHBr–CH₂–CH₂–CH₃\n\nStep 1: Longest chain = 5 carbons → pent-\nStep 2: Br on C2 (from left) → 2-bromo\nStep 3: Functional group = alkane → -ane\nName: 2-bromopentane'
    }
  }, {
    id: 'h-cyclo',
    type: 'heading',
    data: {
      text: 'Naming Cyclic Compounds',
      level: 2
    }
  }, {
    id: 'p-cyclo',
    type: "list",
    data: {
      style: "unordered",
      items: ["Cyclic compounds use the prefix <strong>cyclo-</strong> before the parent chain name.", "The ring carbons are always numbered starting from the carbon bearing the principal functional group or highest-priority substituent."]
    }
  }, {
    id: 'list-cyclo',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Cyclopropane — 3-carbon ring, C₃H₆', 'Cyclobutane — 4-carbon ring, C₄H₈', 'Cyclopentane — 5-carbon ring, C₅H₁₀', 'Cyclohexane — 6-carbon ring, C₆H₁₂', 'Methylcyclohexane — cyclohexane ring with a –CH₃ substituent']
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tips',
      text: '• Always give the principal functional group the lowest possible locant.\n• For alkenes, the locant refers to the lower-numbered carbon of the double bond.\n• When alphabetising substituents, ignore multiplier prefixes (di, tri): "dimethyl" is alphabetised under "m".\n• In older IUPAC style, the locant can precede the whole name (e.g. 2-butanol), but modern IUPAC prefers butan-2-ol — learn to recognise both.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Not finding the longest chain — the parent chain must be the longest continuous carbon chain.\n• Numbering from the wrong end — always minimise the locant of the principal functional group first.\n• Forgetting to alphabetise substituents before writing the name.\n• Writing "2-butanol" when the modern IUPAC name is "butan-2-ol".'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I know the IUPAC prefixes for 1–10 carbon chains (meth- to dec-).',
        checked: false
      }, {
        text: 'I can name alkanes, alkenes, alcohols, halogenoalkanes, and carboxylic acids using IUPAC rules.',
        checked: false
      }, {
        text: 'I can correctly number the chain to give the functional group the lowest locant.',
        checked: false
      }, {
        text: 'I can name branched compounds with multiple substituents, listed alphabetically.',
        checked: false
      }, {
        text: 'I can name cycloalkanes using the cyclo- prefix.',
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
      text: 'Understand: IUPAC naming: identify longest chain, number from end nearest first substituent, name substituents with positions.\n\nApply: Name CH₃CH(CH₃)CH₂CH(Cl)CH₃. Draw 2,3-dimethylbutane.\n\nAnalyze: Why does IUPAC require numbering from the end giving lowest locants?\n\nEvaluate: Common names like "acetone" persist despite IUPAC. Discuss advantages/disadvantages of each system.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'IUPAC names = prefix (chain length) + substituent prefixes (alphabetical) + suffix (functional group). Number the chain to give the principal functional group the lowest locant. Use cyclo- for ring compounds. Multipliers di-, tri- are not counted in alphabetical ordering of substituents.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'table-prefixes',
      prompt: 'Give the IUPAC prefixes for 1, 4, 6, and 10 carbons.'
    }, {
      id: 'cue-2',
      blockId: 'table-suffixes',
      prompt: 'What suffix indicates an alcohol? A carboxylic acid? An alkene?'
    }, {
      id: 'cue-3',
      blockId: 'list-rules',
      prompt: 'What are the key steps in applying IUPAC naming rules to a branched compound?'
    }, {
      id: 'cue-4',
      blockId: 'callout-we2',
      prompt: 'Name CH₃–CH₂–CH(OH)–CH₃ using IUPAC rules.'
    }, {
      id: 'cue-5',
      blockId: 'callout-warning',
      prompt: 'State two common mistakes students make when applying IUPAC naming rules.'
    }],
    summaryText: 'IUPAC: longest chain (meth–dec) + suffix (functional group) + numbered substituent prefixes (alphabetical). Minimise locant of principal functional group. Cyclo- for rings.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'IUPAC 2013 Recommendations',
    detail: 'The current IUPAC 2013 recommendations for organic nomenclature establish the rules for systematic naming used in A-level chemistry.',
    year: '2013',
    source: 'IUPAC',
    tags: ['naming', 'IUPAC']
  }]
};