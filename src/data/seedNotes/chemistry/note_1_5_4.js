export const note_chemistry_1_5_4 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe the bromine water test for C=C unsaturation; explain the observation and write the equation for the reaction.'
    }
  }, {
    id: 'h-test',
    type: 'heading',
    data: {
      text: 'The Bromine Water Test for C=C',
      level: 2
    }
  }, {
    id: 'callout-key-test',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Bromine Water Test — Summary',
      text: 'Bromine water (Br₂ dissolved in water) is orange/brown. When shaken with an alkene, it rapidly decolourises (turns colourless) due to addition of Br₂ across the C=C double bond. Alkanes do NOT decolourise bromine water in the dark.'
    }
  }, {
    id: 'h-method',
    type: 'heading',
    data: {
      text: 'Method',
      level: 2
    }
  }, {
    id: 'list-method',
    type: 'list',
    data: {
      style: 'numbered',
      items: ['Add a few drops of the unknown compound to a test tube.', 'Add 1–2 cm³ of bromine water (orange/brown).', 'Shake gently and observe the colour change.', 'Perform in the dark (or diffuse light) to exclude free-radical substitution (which also decolourises, but requires UV/bright light).']
    }
  }, {
    id: 'h-observation',
    type: 'heading',
    data: {
      text: 'Observations and Interpretation',
      level: 2
    }
  }, {
    id: 'table-obs',
    type: 'comparisonTable',
    data: {
      caption: 'Bromine water test results',
      headers: ['Observation', 'Interpretation'],
      rows: [['Bromine water rapidly decolourises (orange → colourless)', 'C=C double bond present — electrophilic addition of Br₂ occurred'], ['Bromine water remains orange/brown', 'No C=C present (compound is saturated — alkane, or no reactive functional group)'], ['Decolourises slowly only in bright light/UV', 'Alkane — free-radical substitution (not a positive test for C=C)']]
    }
  }, {
    id: 'h-equation',
    type: 'heading',
    data: {
      text: 'Equation for the Reaction',
      level: 2
    }
  }, {
    id: 'eq-br2-ethene',
    type: 'equation',
    data: {
      html: 'CH₂=CH₂ + Br₂ → CH₂BrCH₂Br',
      caption: 'Ethene + bromine → 1,2-dibromoethane (colourless). The orange Br₂ is consumed → solution decolourises.'
    }
  }, {
    id: 'eq-br2-general',
    type: 'equation',
    data: {
      html: 'R–CH=CH–R\' + Br₂ → R–CHBr–CHBr–R\'',
      caption: 'General equation: Br₂ adds across the C=C to give a vicinal dibromide (Br on adjacent carbons).'
    }
  }, {
    id: 'h-bromine-water',
    type: 'heading',
    data: {
      text: 'Bromine Water vs Pure Bromine',
      level: 2
    }
  }, {
    id: 'p-bromine-water',
    type: "list",
    data: {
      style: "unordered",
      items: ["When bromine <em>water</em> is used (rather than pure Br\u2082 in an organic solvent), water can also act as a nucleophile and compete with Br\u207B."]
    }
  }, {
    id: 'list-br-water-products',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['CH₂BrCH₂Br (1,2-dibromoethane) — from Br⁻ attacking the bromonium ion', 'CH₂BrCH₂OH (2-bromoethanol / bromohydrin) — from H₂O attacking the bromonium ion', 'The colour change is still observed — both reactions consume Br₂.', 'In an organic solvent (e.g. CCl₄), only Br₂ is present → only the dibromoalkane forms.']
    }
  }, {
    id: 'h-why-fast',
    type: 'heading',
    data: {
      text: 'Why Does Br₂ React So Rapidly With Alkenes?',
      level: 2
    }
  }, {
    id: 'p-why-fast',
    type: "list",
    data: {
      style: "unordered",
      items: ["The \u03C0 bond in alkenes is a region of high electron density.", "As a Br\u2082 molecule approaches, the electron cloud of the \u03C0 bond repels the electrons in Br\u2082, polarising it to Br\u03B4\u207A\u2013Br\u03B4\u207B.", "The \u03B4\u207A Br acts as an electrophile and is attacked by the \u03C0 electrons.", "This forms a cyclic bromonium ion intermediate, which is then attacked by Br\u207B (nucleophile) to give the product.", "The overall mechanism is <strong>electrophilic addition</strong>."]
    }
  }, {
    id: 'h-comparison',
    type: 'heading',
    data: {
      text: 'Alkene vs Alkane — Comparing Reactions with Bromine',
      level: 2
    }
  }, {
    id: 'table-comparison',
    type: 'comparisonTable',
    data: {
      caption: 'Alkene vs alkane reaction with bromine water',
      headers: ['Property', 'Alkene + Br₂(aq)', 'Alkane + Br₂(aq)'],
      rows: [['Colour change', 'Rapid decolourisation (orange → colourless)', 'No change in dark; slow decolourisation in UV/bright light'], ['Conditions', 'Room temperature, no light needed', 'Requires UV or bright light for slow reaction'], ['Mechanism', 'Electrophilic addition', 'Free-radical substitution'], ['Product(s)', 'Dibromoalkane (+ bromohydrin with Br₂(aq))', 'Bromoalkane + HBr'], ['By-product', 'None (or HBr from bromohydrin)', 'HBr gas evolved (turns damp litmus red)']]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tips',
      text: '• Always state "rapidly decolourises in the dark" for the alkene test — adding "in the dark" distinguishes it from alkane free-radical substitution which also decolourises but requires UV light.\n• The product is a dibromoalkane — name it correctly (e.g. 1,2-dibromoethane from ethene).\n• When asked to "describe the test", state: reagent (bromine water), observation (decolourises), and inference (C=C present).'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Saying bromine water "goes colourless" without stating it starts orange/brown — always describe initial and final colour.\n• Forgetting to specify "in the dark" — this is crucial to distinguish from alkane halogenation.\n• Saying the test uses "bromine solution" — be specific: bromine water (Br₂(aq)) or bromine in CCl₄.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can describe the bromine water test for unsaturation: reagent, observation, and inference.',
        checked: false
      }, {
        text: 'I can write the equation for addition of Br₂ to an alkene.',
        checked: false
      }, {
        text: 'I can explain why the test must be performed in the dark.',
        checked: false
      }, {
        text: 'I can compare the reaction of alkenes and alkanes with bromine water.',
        checked: false
      }, {
        text: 'I can explain why alkenes react rapidly with Br₂ using the concept of the π bond.',
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
      text: 'Understand: Bromine test: Br₂(aq) decolourises with alkenes (addition across C=C) but stays orange with alkanes.\n\nApply: Describe the test to distinguish hex-1-ene from hexane. State reagent, method, observations.\n\nAnalyze: Br₂ water also decolourises with phenol and SO₂. How could you confirm C=C specifically?\n\nEvaluate: Is the bromine test qualitative or quantitative? Could it measure degree of unsaturation (iodine number)?'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Bromine water test (in the dark): alkenes rapidly decolourise orange/brown Br₂(aq) → colourless dibromoalkane (electrophilic addition). Alkanes do not react in the dark. In bromine water, a bromohydrin may also form as a side product. The π bond of the alkene polarises Br₂ (Brδ⁺–Brδ⁻) → electrophilic addition mechanism.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-test',
      prompt: 'Describe the bromine water test for C=C: reagent, observation, inference.'
    }, {
      id: 'cue-2',
      blockId: 'eq-br2-ethene',
      prompt: 'Write the equation for the reaction of ethene with bromine.'
    }, {
      id: 'cue-3',
      blockId: 'table-comparison',
      prompt: 'How does the reaction of an alkene with bromine water differ from that of an alkane?'
    }, {
      id: 'cue-4',
      blockId: 'p-why-fast',
      prompt: 'Why does Br₂ react rapidly with alkenes? What intermediate forms?'
    }, {
      id: 'cue-5',
      blockId: 'callout-tip',
      prompt: 'Why must the bromine water test be performed in the dark?'
    }],
    summaryText: 'Bromine water test: orange/brown → colourless rapidly in dark = C=C present (electrophilic addition). Alkane: no reaction in dark (needs UV). Product: dibromoalkane (+ bromohydrin if using Br₂(aq)). π bond polarises Br₂ → Brδ⁺ electrophile.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'The bromine water test for unsaturation is required practical knowledge for Topic 5.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['bromine water', 'test for alkenes', 'unsaturation']
  }]
};