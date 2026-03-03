export const note_chemistry_1_4_0 = {
  blocks: [{
    id: 'obj-hazard-risk',
    type: 'objective',
    data: {
      text: 'Distinguish between hazard and risk; explain how risk is assessed and managed in chemistry practical work.'
    }
  }, {
    id: 'h-definitions',
    type: 'heading',
    data: {
      text: 'Hazard vs Risk — Core Definitions',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["Before carrying out any chemical experiment, it is essential to understand two key safety concepts: <strong>hazard</strong> and <strong>risk</strong>.", "These terms are often confused but have precise scientific meanings."]
    }
  }, {
    id: 'callout-key-hazard',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Hazard',
      text: 'A hazard is an inherent property of a substance or situation that has the potential to cause harm. It is an intrinsic characteristic — e.g. flammability, toxicity, corrosiveness.'
    }
  }, {
    id: 'callout-key-risk',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Risk',
      text: 'Risk is the likelihood (probability) that a hazard will actually cause harm under the conditions of use, combined with the severity of that harm.'
    }
  }, {
    id: 'p-distinction',
    type: "list",
    data: {
      style: "unordered",
      items: ["A substance can be highly hazardous but carry very low risk if suitable precautions are taken.", "Conversely, a low-hazard substance may pose a high risk if used carelessly."]
    }
  }, {
    id: 'h-equation',
    type: 'heading',
    data: {
      text: 'The Risk Equation',
      level: 2
    }
  }, {
    id: 'eq-risk',
    type: 'equation',
    data: {
      html: 'Risk ∝ Hazard × Likelihood of exposure × Severity of consequence',
      caption: 'Risk is not the same as hazard — it depends on both probability and consequence.'
    }
  }, {
    id: 'h-examples',
    type: 'heading',
    data: {
      text: 'Worked Examples',
      level: 2
    }
  }, {
    id: 'table-examples',
    type: 'comparisonTable',
    data: {
      caption: 'Hazard vs Risk — practical examples',
      headers: ['Substance / Situation', 'Hazard', 'Risk (with precautions)', 'Risk (without precautions)'],
      rows: [['Concentrated HCl', 'Corrosive, toxic fumes', 'Low — used in fume cupboard with gloves', 'High — causes chemical burns'], ['Ethanol', 'Highly flammable', 'Low — no naked flames, small quantities', 'High — ignites easily, fire hazard'], ['Bromine water (dilute)', 'Toxic, irritant', 'Low — used in small amounts, gloves worn', 'Medium — irritates skin/eyes'], ['Liquid nitrogen', 'Cryogenic burns, asphyxiant', 'Low — insulated gloves, ventilated room', 'High — severe frostbite, O₂ displacement']]
    }
  }, {
    id: 'h-assessment',
    type: 'heading',
    data: {
      text: 'Risk Assessment Process',
      level: 2
    }
  }, {
    id: 'list-ra',
    type: 'list',
    data: {
      style: 'numbered',
      items: ['Identify all hazardous substances and operations in the experiment.', 'Consult CLEAPSS Hazcard / safety data sheets (SDS) for each substance.', 'Assess the likelihood of exposure and severity of harm.', 'Identify control measures to reduce risk (substitution, containment, PPE).', 'Record the risk assessment before the experiment begins.', 'Review and update if the procedure changes.']
    }
  }, {
    id: 'h-hazard-symbols',
    type: 'heading',
    data: {
      text: 'GHS Hazard Pictograms',
      level: 2
    }
  }, {
    id: 'p-ghs',
    type: "list",
    data: {
      style: "unordered",
      items: ["The Globally Harmonised System (GHS) uses standardised pictograms to communicate hazards.", "Students must be able to recognise these symbols and state what they mean."]
    }
  }, {
    id: 'table-ghs',
    type: 'comparisonTable',
    data: {
      caption: 'Common GHS hazard pictograms',
      headers: ['Symbol name', 'Appearance', 'Meaning'],
      rows: [['Flame', '🔥 Red diamond, flame', 'Flammable — catches fire easily'], ['Skull & crossbones', '☠️ Black skull', 'Acute toxicity — harmful/fatal if swallowed, inhaled or absorbed'], ['Corrosion', '🧪 Liquid destroying surface', 'Corrosive — damages skin, eyes, metals'], ['Exclamation mark', '❗ Black exclamation', 'Irritant, harmful, skin/eye sensitiser'], ['Exploding bomb', '💥 Explosion shape', 'Explosive or unstable'], ['Health hazard', '🫁 Torso with star', 'Serious long-term health effects (carcinogen, mutagen, reproductive toxin)'], ['Oxidiser', '⭕ Flame over circle', 'Oxidising agent — can intensify fire'], ['Gas cylinder', '🟦 Pressurised cylinder', 'Gas under pressure — risk of explosion if heated'], ['Environment', '🌿 Dead fish & tree', 'Aquatic or environmental hazard']]
    }
  }, {
    id: 'h-control',
    type: 'heading',
    data: {
      text: 'Control Measures — Hierarchy',
      level: 2
    }
  }, {
    id: 'list-hierarchy',
    type: 'list',
    data: {
      style: 'numbered',
      items: ['<strong>Elimination</strong> — remove the hazard entirely (best option).', '<strong>Substitution</strong> — replace with a less hazardous substance.', '<strong>Engineering controls</strong> — fume cupboard, safety screens.', '<strong>Administrative controls</strong> — written procedures, training.', '<strong>PPE (Personal Protective Equipment)</strong> — gloves, goggles, lab coat (last resort).']
    }
  }, {
    id: 'callout-tip-exam',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tip',
      text: 'Exam questions often ask you to "identify the hazard" and "state a precaution to reduce the risk". Always distinguish: the hazard is the property of the substance (e.g. flammable); the precaution reduces the risk (e.g. keep away from naked flames).'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistake',
      text: 'Do NOT say "the risk is that it is toxic" — toxicity is the hazard. The risk is the probability of being harmed by the toxic substance given the conditions of use.'
    }
  }, {
    id: 'checklist-hazard',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can define hazard and risk precisely and distinguish between them.',
        checked: false
      }, {
        text: 'I can explain how risk depends on both likelihood and severity.',
        checked: false
      }, {
        text: 'I can recognise common GHS hazard pictograms and state their meaning.',
        checked: false
      }, {
        text: 'I can describe the five steps of a risk assessment.',
        checked: false
      }, {
        text: 'I can list the hierarchy of control measures in order of preference.',
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
      text: 'Understand: Hazard is the potential danger; risk considers likelihood and severity under actual conditions.\n\nApply: Conc. H₂SO₄ is corrosive. Describe three control measures that reduce the risk in a school lab.\n\nAnalyze: Compare risk assessments for ethanol (flammable, low toxicity) vs benzene (carcinogenic) as solvents.\n\nEvaluate: "Zero risk is impossible in chemistry." Discuss whether the goal should be eliminating hazards or managing risks.'
    },
    terms: []
  }, {
    id: 'summary-hazard',
    type: 'summary',
    data: {
      text: 'A hazard is an inherent property with potential to cause harm; risk is the likelihood × severity of that harm occurring. Risk assessments identify hazards, consult safety data, and apply control measures in order: elimination > substitution > engineering > admin > PPE. GHS pictograms communicate hazard type globally.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-hazard',
      prompt: 'What is the precise definition of a hazard?'
    }, {
      id: 'cue-2',
      blockId: 'callout-key-risk',
      prompt: 'What is the precise definition of risk, and how does it differ from hazard?'
    }, {
      id: 'cue-3',
      blockId: 'list-ra',
      prompt: 'What are the six steps of a risk assessment?'
    }, {
      id: 'cue-4',
      blockId: 'list-hierarchy',
      prompt: 'List the five levels of the control measure hierarchy, from most to least preferred.'
    }, {
      id: 'cue-5',
      blockId: 'table-ghs',
      prompt: 'What do the flame, skull & crossbones, and corrosion GHS pictograms mean?'
    }],
    summaryText: 'Hazard = inherent potential to harm. Risk = likelihood × severity. Risk assessments use the hierarchy: eliminate, substitute, engineer, administrate, PPE. GHS symbols communicate hazard type at a glance.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'CLEAPSS Hazcard guidance',
    detail: 'CLEAPSS provides hazard cards for all common laboratory chemicals used in UK schools and colleges.',
    year: '2023',
    source: 'CLEAPSS',
    tags: ['safety', 'hazard']
  }, {
    id: 'ev-2',
    title: 'GHS globally harmonised system',
    detail: 'The UN GHS standardises hazard communication through pictograms, signal words and hazard statements worldwide.',
    year: '2021',
    source: 'United Nations',
    tags: ['GHS', 'pictograms']
  }]
};