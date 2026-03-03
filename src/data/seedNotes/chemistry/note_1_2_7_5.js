/**
 * WCH12 | Topic 7: Intermolecular Forces | Subtopic 5
 * Forces vs physical properties
 */

export const note_chemistry_1_2_7_5 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Relate the type and strength of intermolecular forces to physical properties: boiling point, melting point, viscosity and volatility. Compare properties across homologous series and structural isomers.'
    }
  }, {
    id: 'h-properties',
    type: 'heading',
    data: {
      text: 'Intermolecular Forces and Physical Properties',
      level: 2
    },
    terms: ['Intermolecular forces']
  }, {
    id: 'callout-bp-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Key Principle',
      text: 'Stronger intermolecular forces → more energy needed to separate molecules → higher boiling point, higher melting point, lower volatility, higher viscosity.\n\nWeaker intermolecular forces → less energy needed → lower boiling point, more volatile, lower viscosity.'
    },
    terms: ['Intermolecular forces']
  }, {
    id: 'table-properties',
    type: 'comparisonTable',
    data: {
      caption: 'How intermolecular force strength affects physical properties',
      headers: ['Property', 'Stronger IMF → ', 'Weaker IMF →', 'Key factor'],
      rows: [['Boiling point', 'Higher', 'Lower', 'Energy to separate molecules in liquid'], ['Melting point', 'Higher', 'Lower', 'Energy to disrupt solid structure'], ['Vapour pressure / volatility', 'Lower (less volatile)', 'Higher (more volatile)', 'Ease of escaping liquid surface'], ['Viscosity', 'Higher (thicker)', 'Lower (runny)', 'Resistance to flow — molecules stick together'], ['Solubility in water', 'Higher (if H-bonding)', 'Lower (non-polar)', '"Like dissolves like"']]
    },
    terms: ['Intermolecular forces']
  }, {
    id: 'h-homologous',
    type: 'heading',
    data: {
      text: 'Trends in Homologous Series',
      level: 2
    },
    terms: ['Intermolecular forces']
  }, {
    id: 'p-homologous',
    type: "list",
    data: {
      style: "unordered",
      items: ["g.", "alkanes, alcohols), as chain length increases: Mr increases, surface area increases, London forces increase \u2192 boiling point increases.", "This is a gradual, predictable trend."]
    },
    terms: ['London forces']
  }, {
    id: 'table-alkanes',
    type: 'comparisonTable',
    data: {
      caption: 'Boiling points of straight-chain alkanes — London forces increase with chain length',
      headers: ['Alkane', 'Mr', 'Boiling point (°C)', 'State at room temp'],
      rows: [['Methane CH₄', '16', '−161', 'Gas'], ['Ethane C₂H₆', '30', '−89', 'Gas'], ['Propane C₃H₈', '44', '−42', 'Gas'], ['Butane C₄H₁₀', '58', '−1', 'Gas'], ['Pentane C₅H₁₂', '72', '36', 'Liquid'], ['Decane C₁₀H₂₂', '142', '174', 'Liquid']]
    },
    terms: ['London forces']
  }, {
    id: 'h-isomers',
    type: 'heading',
    data: {
      text: 'Comparing Structural Isomers',
      level: 2
    },
    terms: ['Intermolecular forces']
  }, {
    id: 'callout-isomers-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Isomers — Same Mr, Different IMF',
      text: 'Structural isomers have the same Mr but different structures → different IMF → different properties.\n\nExample: Ethanol vs dimethyl ether (both C₂H₆O, Mr = 46)\n  • Ethanol (CH₃CH₂OH): has O–H → hydrogen bonds → bp = 78°C\n  • Dimethyl ether (CH₃OCH₃): no O–H → dipole + London only → bp = −24°C\n\nDifference of 102°C despite same Mr — due to H-bonding in ethanol.'
    },
    terms: ['Hydrogen bond', 'Intermolecular forces']
  }, {
    id: 'callout-branching-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Branching — Same Mr, Reduced London Forces',
      text: 'Branched isomers have LOWER boiling points than straight-chain isomers of the same Mr.\n\nReason: branching reduces surface area → fewer London force contacts between molecules.\n\nPentane (straight, bp 36°C) > 2-methylbutane (bp 28°C) > 2,2-dimethylpropane (neopentane, bp 10°C)\nAll have Mr = 72.'
    },
    terms: ['London forces']
  }, {
    id: 'callout-tip-explain',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Explaining Boiling Points',
      text: 'A complete explanation of boiling point difference must include:\n  1. Identify the IMF in each substance\n  2. State which forces are stronger and why\n  3. State that more energy is required to overcome the stronger forces\n  4. Conclude with the effect on boiling point\n\nNever just say "stronger bonds" — always specify the TYPE of intermolecular force.'
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
        text: 'Stronger IMF → higher bp, higher mp, lower volatility, higher viscosity',
        checked: false
      }, {
        text: 'Chain length ↑ in homologous series → London forces ↑ → bp ↑',
        checked: false
      }, {
        text: 'Branching ↑ → surface area ↓ → London forces ↓ → bp ↓',
        checked: false
      }, {
        text: 'Ethanol bp 78°C vs dimethyl ether bp −24°C: H-bonding in ethanol',
        checked: false
      }, {
        text: 'Always name the specific IMF type in exam answers',
        checked: false
      }]
    }
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Stronger intermolecular forces raise boiling point, melting point and viscosity while lowering volatility. In homologous series, longer chains have stronger London forces and higher boiling points. Branching reduces surface area and lowers boiling points. Structural isomers with O–H groups H-bond and have much higher boiling points than isomers without.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-bp-key',
      prompt: 'State how IMF strength affects boiling point, volatility and viscosity.'
    }, {
      id: 'cue-2',
      blockId: 'callout-isomers-key',
      prompt: 'Ethanol and dimethyl ether both have Mr = 46. Ethanol bp = 78°C, dimethyl ether bp = −24°C. Explain this difference.'
    }, {
      id: 'cue-3',
      blockId: 'callout-branching-key',
      prompt: 'Pentane, 2-methylbutane and neopentane all have Mr = 72. Order their boiling points and explain.'
    }],
    summaryText: 'IMF strength → physical properties; homologous series trends; branching effects; isomer comparisons.',
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