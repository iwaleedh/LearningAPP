export const note_chemistry_1_4_6 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Define free radical, electrophile and nucleophile; explain their roles in organic reaction mechanisms.'
    }
  }, {
    id: 'h-intro',
    type: 'heading',
    data: {
      text: 'Reactive Intermediates in Organic Chemistry',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["Organic reactions proceed via short-lived, high-energy <strong>reactive intermediates</strong>.", "The three most important for A-level are free radicals, electrophiles, and nucleophiles.", "Understanding what they are and how they react underpins all organic mechanisms."]
    }
  }, {
    id: 'h-radical',
    type: 'heading',
    data: {
      text: 'Free Radicals',
      level: 2
    }
  }, {
    id: 'callout-key-radical',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Free Radical — Definition',
      text: 'A free radical is a species with one or more unpaired electrons. It is electrically neutral and extremely reactive. Free radicals are formed by homolytic fission of a covalent bond (one electron to each fragment).'
    }
  }, {
    id: 'list-radical-props',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Notation: a dot (•) is placed next to the symbol, e.g. Cl•, CH₃•, •OH', 'Neutral — carries no charge', 'Highly reactive — the unpaired electron drives reactions', 'React by attacking bonds to pair their electron (chain reactions)', 'Formed by: UV light, high temperatures, peroxides', 'Examples: Cl• (chlorine radical), Br• (bromine radical), •CH₃ (methyl radical), •OH (hydroxyl radical)']
    }
  }, {
    id: 'h-electrophile',
    type: 'heading',
    data: {
      text: 'Electrophiles',
      level: 2
    }
  }, {
    id: 'callout-key-electrophile',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Electrophile — Definition',
      text: 'An electrophile is an electron-pair acceptor. It is electron-deficient and attacks regions of high electron density (e.g. C=C double bonds, lone pairs). Electrophiles are positively charged or have a δ+ charge.'
    }
  }, {
    id: 'table-electrophiles',
    type: 'comparisonTable',
    data: {
      caption: 'Common electrophiles at A-level',
      headers: ['Electrophile', 'Formula', 'Why electron-deficient', 'Reaction type'],
      rows: [['Proton', 'H⁺', 'Positive charge, empty 1s orbital', 'Acid-base, electrophilic addition'], ['Halogen molecule (polarised)', 'Br₂ (as Brδ+–Brδ−)', 'δ+ on one Br due to induced polarisation', 'Electrophilic addition to alkenes'], ['Hydrogen halide', 'HBr (Hδ+–Brδ−)', 'δ+ on H due to Br electronegativity', 'Electrophilic addition to alkenes'], ['Carbocation', 'R⁺ (e.g. CH₃⁺)', 'Empty p orbital on C', 'SN1, rearrangements'], ['Nitronium ion', 'NO₂⁺', 'Positive charge', 'Electrophilic substitution of benzene'], ['Acyl chloride', 'RCOCl (Cδ+)', 'δ+ on carbonyl C due to Cl and O', 'Nucleophilic addition–elimination'], ['Sulfur trioxide', 'SO₃', 'S has empty d orbitals, very electrophilic', 'Sulfonation of benzene']]
    }
  }, {
    id: 'h-nucleophile',
    type: 'heading',
    data: {
      text: 'Nucleophiles',
      level: 2
    }
  }, {
    id: 'callout-key-nucleophile',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Nucleophile — Definition',
      text: 'A nucleophile is an electron-pair donor. It is electron-rich and attacks regions of low electron density (e.g. δ+ carbon in a polar bond). Nucleophiles are negatively charged or have a lone pair available for donation.'
    }
  }, {
    id: 'table-nucleophiles',
    type: 'comparisonTable',
    data: {
      caption: 'Common nucleophiles at A-level',
      headers: ['Nucleophile', 'Formula', 'Electron source', 'Reaction type'],
      rows: [['Hydroxide ion', 'OH⁻', 'Negative charge + lone pairs on O', 'Nucleophilic substitution of halogenoalkanes'], ['Water', 'H₂O', 'Lone pairs on O', 'Hydrolysis reactions'], ['Cyanide ion', 'CN⁻', 'Negative charge + lone pair on C', 'Nucleophilic addition to carbonyls'], ['Ammonia', 'NH₃', 'Lone pair on N', 'Substitution with halogenoalkanes'], ['Halide ions', 'Cl⁻, Br⁻, I⁻', 'Negative charge + lone pairs', 'Substitution reactions'], ['Alkoxide ion', 'RO⁻', 'Negative charge + lone pairs on O', 'Williamson ether synthesis'], ['Hydride ion (from NaBH₄)', 'H⁻', 'Negative charge (from B–H bond)', 'Nucleophilic addition to C=O']]
    }
  }, {
    id: 'h-comparison',
    type: 'heading',
    data: {
      text: 'Comparison: Free Radical vs Electrophile vs Nucleophile',
      level: 2
    }
  }, {
    id: 'table-comparison',
    type: 'comparisonTable',
    data: {
      caption: 'Summary comparison of reactive intermediates',
      headers: ['Property', 'Free radical', 'Electrophile', 'Nucleophile'],
      rows: [['Charge', 'Neutral', 'Positive or δ+', 'Negative or has lone pair'], ['Electrons', '1 unpaired electron', 'Electron deficient', 'Electron rich'], ['Origin', 'Homolytic fission', 'Heterolytic fission or polar bond', 'Lone pair/negative charge'], ['Attacks', 'C–H or C–X bonds (to pair its electron)', 'Electron-rich sites (C=C, lone pairs)', 'Electron-deficient sites (C–X δ+, C=O)'], ['Arrow type', 'Fish-hook (↷)', 'Full curly arrow (⟶)', 'Full curly arrow (⟶)'], ['Example', 'Cl•', 'H⁺, Br₂, HBr', 'OH⁻, CN⁻, NH₃']]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tip',
      text: '• Nucleophile = "nucleus-loving" → attracted to positive/δ+ centres → donates electrons.\n• Electrophile = "electron-loving" → attracted to electron-rich sites → accepts electrons.\n• Remember: curly arrows always start FROM the electron source (lone pair, bond, or negative charge) and point TO where those electrons go.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Saying a nucleophile "donates a proton" — nucleophiles donate electron pairs, not protons (that is an acid).\n• Confusing electrophile with oxidising agent — overlap exists but they are not synonymous.\n• Drawing free radical arrows as full double-headed arrows — must be single-headed fish-hook arrows.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can define free radical, electrophile, and nucleophile precisely.',
        checked: false
      }, {
        text: 'I can give three examples of each type of reactive intermediate.',
        checked: false
      }, {
        text: 'I can explain why electrophiles attack C=C bonds and nucleophiles attack C–X bonds.',
        checked: false
      }, {
        text: 'I can state the correct arrow type for each type of intermediate in a mechanism.',
        checked: false
      }, {
        text: 'I can distinguish between nucleophile and base (both donate electron pairs, but bases specifically donate to H⁺).',
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
      text: 'Understand: Free radicals have unpaired electrons (reactive). Electrophiles accept electron pairs; nucleophiles donate electron pairs.\n\nApply: Classify as radical, electrophile, or nucleophile: Cl•, H⁺, OH⁻, NO₂⁺, NH₃.\n\nAnalyze: Why is BF₃ an electrophile even without positive charge? Use its electron structure.\n\nEvaluate: Water acts as both nucleophile and electrophile. Explain how and give examples.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Free radicals: neutral, 1 unpaired electron, from homolytic fission, fish-hook arrows. Electrophiles: electron-deficient (E⁺ or δ+), accept electron pairs, attack electron-rich sites. Nucleophiles: electron-rich (lone pairs or negative charge), donate electron pairs, attack δ+ carbons. All three are reactive intermediates central to organic mechanisms.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-radical',
      prompt: 'What is a free radical? How is it formed and how is it represented?'
    }, {
      id: 'cue-2',
      blockId: 'callout-key-electrophile',
      prompt: 'Define electrophile. Give three examples.'
    }, {
      id: 'cue-3',
      blockId: 'callout-key-nucleophile',
      prompt: 'Define nucleophile. Give three examples.'
    }, {
      id: 'cue-4',
      blockId: 'table-comparison',
      prompt: 'Compare free radicals, electrophiles, and nucleophiles by charge, electron count, and arrow type.'
    }, {
      id: 'cue-5',
      blockId: 'callout-tip',
      prompt: 'What does "nucleophile" literally mean, and how does this help you remember what it does?'
    }],
    summaryText: 'Free radicals: neutral, unpaired e⁻, fish-hook arrows. Electrophiles: e⁻-deficient, attack C=C. Nucleophiles: e⁻-rich (lone pairs/charge), attack δ+C. All three are reactive intermediates.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'Free radicals, electrophiles and nucleophiles are core Topic 4 content required for mechanism drawing.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['free radicals', 'electrophiles', 'nucleophiles']
  }]
};