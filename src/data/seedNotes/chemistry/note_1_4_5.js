export const note_chemistry_1_4_5 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe homolytic and heterolytic bond fission; explain how each type of fission leads to different reactive intermediates.'
    }
  }, {
    id: 'h-intro',
    type: 'heading',
    data: {
      text: 'Bond Fission — Introduction',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["When a covalent bond breaks during a chemical reaction, the two bonding electrons can be distributed between the two fragments in two fundamentally different ways.", "The way a bond breaks determines what type of reactive intermediate is formed and what mechanism follows."]
    }
  }, {
    id: 'h-homolytic',
    type: 'heading',
    data: {
      text: 'Homolytic Fission',
      level: 2
    }
  }, {
    id: 'callout-key-homo',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Homolytic Fission',
      text: 'Each atom receives ONE of the two bonding electrons. This produces two electrically neutral species called FREE RADICALS, each with one unpaired electron. Shown with a single-headed (fish-hook) arrow (↷) in mechanisms.'
    }
  }, {
    id: 'eq-homo',
    type: 'equation',
    data: {
      html: 'A–B → A• + B•',
      caption: 'Homolytic fission: each fragment gets one electron → two free radicals (•).'
    }
  }, {
    id: 'p-homo-conditions',
    type: "list",
    data: {
      style: "unordered",
      items: ["Homolytic fission is favoured by high energy conditions such as <strong>UV light</strong> or very high temperatures.", "g.", "halogenation of alkanes)."]
    }
  }, {
    id: 'h-heterolytic',
    type: 'heading',
    data: {
      text: 'Heterolytic Fission',
      level: 2
    }
  }, {
    id: 'callout-key-hetero',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Heterolytic Fission',
      text: 'Both bonding electrons go to ONE of the two atoms. This produces a positive ion (cation, carbocation) and a negative ion (anion, carbanion or halide). Shown with a full double-headed curved arrow (⟶) in mechanisms.'
    }
  }, {
    id: 'eq-hetero',
    type: 'equation',
    data: {
      html: 'A–B → A<sup>+</sup> + B<sup>−</sup>  &nbsp;or&nbsp;  A–B → A<sup>−</sup> + B<sup>+</sup>',
      caption: 'Heterolytic fission: both electrons go to one fragment → ions.'
    }
  }, {
    id: 'p-hetero-conditions',
    type: "list",
    data: {
      style: "unordered",
      items: ["Heterolytic fission is favoured by <strong>polar solvents</strong> and the presence of nucleophiles or electrophiles.", "g.", "electrophilic addition to alkenes, nucleophilic substitution of halogenoalkanes)."]
    }
  }, {
    id: 'h-comparison',
    type: 'heading',
    data: {
      text: 'Comparison Table',
      level: 2
    }
  }, {
    id: 'table-comparison',
    type: 'comparisonTable',
    data: {
      caption: 'Homolytic vs heterolytic fission',
      headers: ['Feature', 'Homolytic fission', 'Heterolytic fission'],
      rows: [['Electron distribution', 'One electron each (1:1)', 'Both electrons to one atom (0:2)'], ['Products', 'Two free radicals (neutral)', 'Cation + anion (charged)'], ['Arrow type (mechanism)', 'Single-headed (fish-hook) ↷', 'Double-headed (full) ⟶'], ['Conditions favoured', 'UV light, high temperature, gas phase', 'Polar solvents, ionic reagents'], ['Reaction type', 'Free-radical reactions', 'Ionic mechanisms (SN, EA, EA)'], ['Example', 'Cl–Cl → 2 Cl• (UV light)', 'H–Br → H⁺ + Br⁻ (polar solvent)']]
    }
  }, {
    id: 'h-intermediates',
    type: 'heading',
    data: {
      text: 'Reactive Intermediates',
      level: 2
    }
  }, {
    id: 'table-intermediates',
    type: 'comparisonTable',
    data: {
      caption: 'Reactive intermediates produced by bond fission',
      headers: ['Intermediate', 'Origin', 'Charge', 'Electrons', 'Reactivity'],
      rows: [['Free radical (•)', 'Homolytic fission', 'Neutral', '1 unpaired e⁻', 'Very reactive; attacks bonds to pair its electron'], ['Carbocation (R⁺)', 'Heterolytic fission (C keeps 0 e⁻)', 'Positive', 'Empty orbital on C', 'Electrophile; attacked by nucleophiles'], ['Carbanion (R⁻)', 'Heterolytic fission (C keeps 2 e⁻)', 'Negative', 'Lone pair on C', 'Nucleophile; attacks electrophiles'], ['Nucleophile (:Nu)', 'Electron-rich species', 'Neutral or −', 'Lone pair available', 'Attacks electron-deficient C'], ['Electrophile (E⁺)', 'Electron-deficient species', 'Neutral or +', 'Empty orbital or δ+', 'Attacks electron-rich sites (C=C, lone pairs)']]
    }
  }, {
    id: 'h-polar-bonds',
    type: 'heading',
    data: {
      text: 'Polar Bonds and Fission',
      level: 2
    }
  }, {
    id: 'p-polar',
    type: "list",
    data: {
      style: "unordered",
      items: ["The polarity of a bond influences which type of fission is more likely.", "In a polar C\u2013X bond (X = halogen), the electrons are already shifted towards X.", "Heterolytic fission giving C\u207A and X\u207B is therefore facilitated \u2014 the bond is pre-polarised.", "Non-polar bonds (C\u2013C, Cl\u2013Cl) tend towards homolytic fission when activated by UV light."]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tips — Curly Arrows',
      text: '• A full curly arrow (⟶) represents the movement of a pair of electrons (heterolytic).\n• A half-headed (fish-hook) arrow (↷) represents the movement of a single electron (homolytic).\n• Arrows go FROM the electron source (bond or lone pair) TO the electron sink (electrophilic centre or new bond).'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Drawing full curly arrows for free-radical steps — must use single-headed (fish-hook) arrows.\n• Confusing "homolytic" with "homogeneous" — they are unrelated terms.\n• Saying free radicals are "positively charged" — they are neutral with one unpaired electron.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can define homolytic fission and state the intermediates produced.',
        checked: false
      }, {
        text: 'I can define heterolytic fission and state the intermediates produced.',
        checked: false
      }, {
        text: 'I can compare homolytic and heterolytic fission in a table.',
        checked: false
      }, {
        text: 'I can explain why UV light promotes homolytic fission.',
        checked: false
      }, {
        text: 'I can draw the correct arrow type (full or fish-hook) for each type of fission.',
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
      text: 'Understand: Homolytic fission → radicals (one electron each); heterolytic fission → ions (both electrons to one atom). Type depends on polarity and conditions.\n\nApply: Draw curly arrows for (a) homolytic Cl–Cl fission (b) heterolytic H–Cl fission. State products.\n\nAnalyze: Why does homolytic fission need UV/heat while heterolytic occurs at room temperature in polar solvents?\n\nEvaluate: "Homolytic fission is less common than heterolytic in organic reactions." Assess this statement.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Homolytic fission: one electron each → two free radicals (neutral, unpaired e⁻); fish-hook arrows; UV/high temperature. Heterolytic fission: both electrons to one atom → cation + anion; full curly arrows; polar solvents/ionic conditions. Carbocations are electrophiles; carbanions are nucleophiles; free radicals are neutral and highly reactive.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-homo',
      prompt: 'Define homolytic fission. What intermediates does it produce?'
    }, {
      id: 'cue-2',
      blockId: 'callout-key-hetero',
      prompt: 'Define heterolytic fission. What intermediates does it produce?'
    }, {
      id: 'cue-3',
      blockId: 'table-comparison',
      prompt: 'Compare homolytic and heterolytic fission: conditions, products, and arrow types.'
    }, {
      id: 'cue-4',
      blockId: 'table-intermediates',
      prompt: 'Is a carbocation a nucleophile or electrophile? Explain why.'
    }, {
      id: 'cue-5',
      blockId: 'callout-tip',
      prompt: 'When drawing a mechanism, what is the difference between a full curly arrow and a fish-hook arrow?'
    }],
    summaryText: 'Homolytic: 1 e⁻ each → 2 free radicals (neutral); fish-hook arrows; UV light. Heterolytic: 2 e⁻ to one atom → cation + anion; full curly arrows; polar conditions.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'Bond fission types are core content for Topic 4 Organic Foundations.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['bond fission', 'mechanism']
  }]
};