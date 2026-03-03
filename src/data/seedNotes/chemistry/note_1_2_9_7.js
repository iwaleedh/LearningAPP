/**
 * WCH12 | Topic 9: Kinetics & Equilibrium Intro | Subtopic 7
 * Yield-rate industrial compromise
 */

export const note_chemistry_1_2_9_7 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Explain the industrial compromise between yield and rate using the Haber process and Contact process as examples. Justify the choice of temperature, pressure and catalyst used in each process.'
    }
  }, {
    id: 'h-compromise',
    type: 'heading',
    data: {
      text: 'The Industrial Compromise: Yield vs Rate',
      level: 2
    },
    terms: ['Haber process', 'Contact process']
  }, {
    id: 'p-compromise',
    type: "list",
    data: {
      style: "unordered",
      items: ["In industry, the conditions chosen for a reaction must balance two competing factors: yield (the proportion of reactants converted to products, favoured by thermodynamics) and rate (the speed of production, favoured by kinetics).", "The optimum conditions are a compromise \u2014 often not the conditions that maximise either yield or rate alone."]
    }
  }, {
    id: 'h-haber',
    type: 'heading',
    data: {
      text: 'The Haber Process — Making Ammonia',
      level: 2
    },
    terms: ['Haber process']
  }, {
    id: 'callout-haber-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Haber Process Conditions',
      text: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)   ΔH = −92 kJ mol⁻¹\n\nConditions used: ~450°C, ~200 atm (20 MPa), Fe catalyst\n\nTemperature choice (450°C):\n  • Reaction is exothermic → lower T shifts equilibrium RIGHT → higher yield\n  • BUT lower T → slower rate → too slow to be economical\n  • 450°C is a compromise: reasonable yield AND acceptable rate\n\nPressure choice (200 atm):\n  • 4 mol gas → 2 mol gas → higher P shifts equilibrium RIGHT → higher yield\n  • Higher P also increases rate\n  • BUT very high P is expensive and dangerous to maintain\n  • 200 atm is a compromise between yield/rate and cost/safety\n\nCatalyst (Fe with K₂O promoter):\n  • Lowers Eₐ → faster rate without changing equilibrium position\n  • Allows lower T to be used → improves economics\n\nUnreacted N₂ and H₂ are recycled → overall conversion is high even if single-pass yield is ~15%.'
    }
  }, {
    id: 'h-contact',
    type: 'heading',
    data: {
      text: 'The Contact Process — Making Sulfuric Acid',
      level: 2
    },
    terms: ['Contact process']
  }, {
    id: 'callout-contact-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Contact Process Conditions',
      text: 'Stage 2: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)   ΔH = −196 kJ mol⁻¹\n\nConditions used: ~450°C, 1–2 atm, V₂O₅ catalyst\n\nTemperature choice (450°C):\n  • Exothermic → lower T gives higher yield\n  • 450°C: compromise between yield (≈99%) and rate\n  • Below 400°C: too slow even with catalyst\n\nPressure choice (1–2 atm):\n  • 3 mol gas → 2 mol gas → higher P would give more SO₃\n  • BUT SO₃ yield is already ~99% at low P → no economic benefit from high P\n  • High P equipment costly → low P used\n\nCatalyst (V₂O₅ — vanadium(V) oxide):\n  • Allows reaction to proceed at 450°C\n  • Poisoned by arsenic impurities (SO₂ must be purified first)'
    }
  }, {
    id: 'table-comparison',
    type: 'comparisonTable',
    data: {
      caption: 'Haber vs Contact process — industrial compromise summary',
      headers: ['Factor', 'Haber Process (NH₃)', 'Contact Process (H₂SO₄)'],
      rows: [['Equation', 'N₂ + 3H₂ ⇌ 2NH₃', '2SO₂ + O₂ ⇌ 2SO₃'], ['ΔH', '−92 kJ mol⁻¹ (exothermic)', '−196 kJ mol⁻¹ (exothermic)'], ['Temperature', '~450°C (compromise)', '~450°C (compromise)'], ['Pressure', '~200 atm (high — costly)', '~1–2 atm (low — yield already high)'], ['Catalyst', 'Fe (+ K₂O promoter)', 'V₂O₅'], ['Single-pass yield', '~15% (unreacted gases recycled)', '~99%']]
    }
  }, {
    id: 'callout-tip-justify',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Justifying Industrial Conditions',
      text: 'When asked to justify conditions:\n  Temperature: state ΔH sign → what Le Chatelier predicts → why compromise is needed (rate vs yield)\n  Pressure: state moles of gas each side → what Le Chatelier predicts → why the actual pressure is chosen (cost/safety)\n  Catalyst: "lowers Eₐ → faster rate → allows lower T → better yield and economics"\n\nAlways link thermodynamics (yield) AND kinetics (rate) in your answer.'
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
        text: 'Haber: N₂ + 3H₂ ⇌ 2NH₃; ΔH = −92; 450°C, 200 atm, Fe catalyst',
        checked: false
      }, {
        text: 'Contact: 2SO₂ + O₂ ⇌ 2SO₃; ΔH = −196; 450°C, 1–2 atm, V₂O₅',
        checked: false
      }, {
        text: 'Low T → higher yield but slower rate → compromise around 450°C',
        checked: false
      }, {
        text: 'High P → higher yield for reactions with fewer gas moles products',
        checked: false
      }, {
        text: 'Catalyst: lowers Eₐ, no effect on equilibrium position or Kc',
        checked: false
      }, {
        text: 'Haber: unreacted gases recycled → overall high conversion',
        checked: false
      }]
    }
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Industrial processes balance yield (thermodynamics) and rate (kinetics). Haber process: 450°C (compromise T), 200 atm, Fe catalyst. Contact process: 450°C, 1–2 atm, V₂O₅ catalyst. Lower T increases yield for exothermic reactions but slows rate. High P increases yield when products have fewer gas moles. Catalysts increase rate without shifting equilibrium.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-haber-key',
      prompt: 'State the conditions used in the Haber process. Justify the choice of temperature and pressure.'
    }, {
      id: 'cue-2',
      blockId: 'callout-contact-key',
      prompt: 'State the conditions used in the Contact process. Why is a low pressure used despite the reaction having fewer gas moles on the right?'
    }, {
      id: 'cue-3',
      blockId: 'callout-tip-justify',
      prompt: 'Explain the general industrial compromise between yield and rate. What role does the catalyst play?'
    }],
    summaryText: 'Haber and Contact process conditions, yield vs rate compromise, catalyst role.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL WCH12 Spec',
    detail: 'Topic 9: Equilibrium',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['WCH12', 'Equilibrium', 'Haber', 'Contact process']
  }]
};