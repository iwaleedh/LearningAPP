export const note_chemistry_1_5_3 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Write equations and state conditions for the addition reactions of alkenes with H₂, Br₂, HBr, H₂O, and H₂SO₄; apply Markovnikov\'s rule to unsymmetrical additions.'
    }
  }, {
    id: 'h-intro',
    type: 'heading',
    data: {
      text: 'Addition Reactions of Alkenes',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["Alkenes undergo <strong>addition reactions</strong> because the \u03C0 bond in C=C is a region of high electron density and is relatively easy to break.", "In addition reactions, the two components of the reagent add across the double bond, converting it to a single bond.", "The product is always a saturated molecule (no C=C remains)."]
    }
  }, {
    id: 'h-hydrogenation',
    type: 'heading',
    data: {
      text: '1. Hydrogenation (Addition of H₂)',
      level: 2
    }
  }, {
    id: 'callout-key-h2',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Hydrogenation',
      text: 'Alkene + H₂ → alkane\nConditions: Ni catalyst, 150 °C (or Pt/Pd at room temperature)\nThe C=C becomes C–C; molecule is now fully saturated.'
    }
  }, {
    id: 'eq-h2',
    type: 'equation',
    data: {
      html: 'CH₂=CH₂ + H₂ <span style="font-size:0.85em">→<sup>Ni, 150°C</sup></span> CH₃CH₃',
      caption: 'Hydrogenation of ethene → ethane. Industrial use: hardening vegetable oils to make margarine.'
    }
  }, {
    id: 'h-halogenation',
    type: 'heading',
    data: {
      text: '2. Halogenation (Addition of Br₂ or Cl₂)',
      level: 2
    }
  }, {
    id: 'callout-key-br2',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Halogenation',
      text: 'Alkene + Br₂ → dihalogenoalkane\nConditions: room temperature, no UV light (no catalyst needed)\nBromine water decolourises — used as a test for C=C (see note 1_5_4).'
    }
  }, {
    id: 'eq-br2',
    type: 'equation',
    data: {
      html: 'CH₂=CH₂ + Br₂ → CH₂BrCH₂Br',
      caption: 'Addition of bromine to ethene → 1,2-dibromoethane. Orange/brown Br₂ decolourises.'
    }
  }, {
    id: 'h-hbr',
    type: 'heading',
    data: {
      text: '3. Addition of Hydrogen Halides (HBr, HCl)',
      level: 2
    }
  }, {
    id: 'callout-key-hbr',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Hydrohalogenation',
      text: 'Alkene + HBr → halogenoalkane\nConditions: room temperature, no catalyst needed (HBr gas or HBr in solution)\nFor unsymmetrical alkenes, Markovnikov\'s rule determines the major product.'
    }
  }, {
    id: 'eq-hbr-sym',
    type: 'equation',
    data: {
      html: 'CH₂=CH₂ + HBr → CH₃CH₂Br',
      caption: 'Addition of HBr to ethene (symmetrical) → bromoethane. Only one product possible.'
    }
  }, {
    id: 'eq-hbr-asym',
    type: 'equation',
    data: {
      html: 'CH₃CH=CH₂ + HBr → CH₃CHBrCH₃ (major) + CH₃CH₂CH₂Br (minor)',
      caption: 'Addition of HBr to propene (unsymmetrical) → two possible products; Markovnikov\'s rule predicts the major product.'
    }
  }, {
    id: 'h-markovnikov',
    type: 'heading',
    data: {
      text: 'Markovnikov\'s Rule',
      level: 2
    }
  }, {
    id: 'callout-key-markov',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Markovnikov\'s Rule',
      text: 'When HX adds to an unsymmetrical alkene, the H atom adds to the carbon of the C=C that already has MORE hydrogen atoms attached (the less substituted carbon). Equivalently: X⁻ adds to the MORE substituted carbon (forming the more stable carbocation intermediate).'
    }
  }, {
    id: 'callout-worked-markov',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Markovnikov\'s Rule with Propene + HBr',
      text: 'Propene: CH₃–CH=CH₂\nC1 of C=C (=CH₂) has 2 H atoms\nC2 of C=C (CH=) has 1 H atom\n\nMarkovnikov: H adds to C1 (more H atoms) → Br adds to C2\nMajor product: CH₃–CHBr–CH₃ (2-bromopropane)\n\nWhy? The intermediate carbocation on C2 (secondary carbocation, CH₃CH⁺CH₃) is more stable than the primary carbocation on C1 (CH₃CH₂CH₂⁺). More stable intermediate → lower activation energy → major product.'
    }
  }, {
    id: 'h-water',
    type: 'heading',
    data: {
      text: '4. Hydration (Addition of H₂O)',
      level: 2
    }
  }, {
    id: 'callout-key-water',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Hydration',
      text: 'Alkene + H₂O → alcohol\nConditions: concentrated H₃PO₄ (phosphoric acid) catalyst, 300 °C, 60 atm\nOR: H₂SO₄ catalyst (indirect hydration via ethyl hydrogen sulfate intermediate)'
    }
  }, {
    id: 'eq-h2o',
    type: 'equation',
    data: {
      html: 'CH₂=CH₂ + H₂O <span style="font-size:0.85em">→<sup>H₃PO₄, 300°C, 60 atm</sup></span> CH₃CH₂OH',
      caption: 'Industrial production of ethanol from ethene by direct hydration. Markovnikov\'s rule applies for unsymmetrical alkenes.'
    }
  }, {
    id: 'h-h2so4',
    type: 'heading',
    data: {
      text: '5. Addition of H₂SO₄ (Sulfuric Acid)',
      level: 2
    }
  }, {
    id: 'p-h2so4',
    type: "list",
    data: {
      style: "unordered",
      items: ["Cold concentrated H\u2082SO\u2084 adds across the C=C to form an alkyl hydrogen sulfate."]
    }
  }, {
    id: 'eq-h2so4',
    type: 'equation',
    data: {
      html: 'CH₂=CH₂ + H₂SO₄ → CH₃CH₂OSO₃H &nbsp;→<sup>H₂O, warm</sup>&nbsp; CH₃CH₂OH + H₂SO₄',
      caption: 'Indirect hydration: ethene + H₂SO₄ → ethyl hydrogen sulfate → ethanol (H₂SO₄ regenerated).'
    }
  }, {
    id: 'h-summary-table',
    type: 'heading',
    data: {
      text: 'Summary Table of Alkene Addition Reactions',
      level: 2
    }
  }, {
    id: 'table-summary',
    type: 'comparisonTable',
    data: {
      caption: 'Addition reactions of alkenes — reagents, conditions and products',
      headers: ['Reagent', 'Conditions', 'Product', 'Reaction type'],
      rows: [['H₂', 'Ni catalyst, 150 °C', 'Alkane', 'Hydrogenation'], ['Br₂ (in CCl₄ or aqueous)', 'Room temperature, no UV', 'Dibromoalkane', 'Bromination (test for C=C)'], ['Cl₂', 'Room temperature', 'Dichloroalkane', 'Chlorination'], ['HBr', 'Room temperature', 'Bromoalkane (Markovnikov)', 'Hydrohalogenation'], ['HCl', 'Room temperature', 'Chloroalkane (Markovnikov)', 'Hydrohalogenation'], ['H₂O', 'H₃PO₄ catalyst, 300 °C, 60 atm', 'Alcohol (Markovnikov)', 'Hydration'], ['H₂SO₄ (conc.)', 'Cold, then warm with H₂O', 'Alcohol (via alkyl sulfate)', 'Indirect hydration']]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tips',
      text: '• Always state conditions (catalyst, temperature, pressure) — marks are awarded for these.\n• For Markovnikov\'s rule: "H adds to the C with more H already" is a quick guide; explain using carbocation stability for full marks.\n• Hydrogenation of C=C is also used to test for unsaturation (uptake of H₂ measured).\n• The industrial hydration of ethene uses H₃PO₄ at 300 °C and 60 atm — learn these specific conditions.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Writing the wrong product for Markovnikov additions — always identify which C has more H before adding.\n• Forgetting that hydrogenation requires a Ni catalyst — it does NOT occur at room temperature without a catalyst.\n• Confusing direct hydration (H₃PO₄, 300 °C) with indirect hydration (cold H₂SO₄ then water).'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can write equations and state conditions for addition of H₂, Br₂, HBr, H₂O to alkenes.',
        checked: false
      }, {
        text: 'I can state and apply Markovnikov\'s rule to predict the major product of unsymmetrical additions.',
        checked: false
      }, {
        text: 'I can explain Markovnikov\'s rule in terms of carbocation stability.',
        checked: false
      }, {
        text: 'I can describe the industrial hydration of ethene to produce ethanol.',
        checked: false
      }, {
        text: 'I can distinguish direct hydration (H₃PO₄) from indirect hydration (H₂SO₄ + H₂O).',
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
      text: 'Understand: Alkenes undergo addition because electron-rich π bond is attacked by electrophiles. Products are saturated, 100% atom economy.\n\nApply: Write equations for propene + (a) H₂/Ni (b) HBr (c) Br₂ (d) H₂O/H₃PO₄.\n\nAnalyze: Predict the major product of HBr + propene using Markovnikov\'s rule. Explain why.\n\nEvaluate: Addition has 100% atom economy vs substitution. Is addition always "better"?'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Alkenes undergo addition reactions across the C=C: H₂ (Ni, 150°C → alkane), Br₂ (r.t. → dibromide), HBr (r.t. → bromoalkane, Markovnikov), H₂O (H₃PO₄, 300°C, 60 atm → alcohol). Markovnikov\'s rule: H adds to the less-substituted C (more stable carbocation formed). All addition products are saturated.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'table-summary',
      prompt: 'What are the conditions for hydrogenation of alkenes? What is the product?'
    }, {
      id: 'cue-2',
      blockId: 'callout-key-markov',
      prompt: 'State Markovnikov\'s rule and apply it to propene + HBr.'
    }, {
      id: 'cue-3',
      blockId: 'callout-worked-markov',
      prompt: 'Why is 2-bromopropane the major product when HBr adds to propene?'
    }, {
      id: 'cue-4',
      blockId: 'callout-key-water',
      prompt: 'What are the conditions for direct hydration of ethene to ethanol?'
    }, {
      id: 'cue-5',
      blockId: 'eq-h2so4',
      prompt: 'Describe the indirect hydration of ethene using H₂SO₄.'
    }],
    summaryText: 'Alkene additions: H₂ (Ni,150°C→alkane), Br₂ (r.t.→dibromide), HBr (r.t., Markovnikov→bromoalkane), H₂O (H₃PO₄, 300°C, 60atm→alcohol). Markovnikov: H to more-H carbon; most stable carbocation intermediate.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'Addition reactions of alkenes including Markovnikov\'s rule are required for Topic 5.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['addition reactions', 'Markovnikov', 'alkenes']
  }]
};