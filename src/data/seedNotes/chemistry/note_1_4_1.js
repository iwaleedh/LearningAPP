export const note_chemistry_1_4_1 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe the specific hazards of common organic chemicals and explain the control measures used to reduce risk in organic chemistry practicals.'
    }
  }, {
    id: 'h-intro',
    type: 'heading',
    data: {
      text: 'Why Organic Chemicals Need Special Care',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["Many organic compounds are flammable, volatile, toxic or carcinogenic.", "Because they are often used in larger quantities as solvents or reactants, the risk in organic chemistry practicals is often higher than in inorganic work.", "Specific control measures must be applied."]
    }
  }, {
    id: 'h-hazards',
    type: 'heading',
    data: {
      text: 'Hazards of Common Organic Chemicals',
      level: 2
    }
  }, {
    id: 'table-hazards',
    type: 'comparisonTable',
    data: {
      caption: 'Hazards of common organic chemicals encountered in A-level chemistry',
      headers: ['Chemical', 'Hazard(s)', 'GHS Pictogram(s)', 'Key Risk'],
      rows: [['Ethanol (C₂H₅OH)', 'Highly flammable, irritant', 'Flame, Exclamation mark', 'Fire/explosion near ignition sources'], ['Cyclohexane', 'Highly flammable, irritant, harmful vapour', 'Flame, Exclamation mark', 'Narcotic effects at high vapour concentrations'], ['Bromine (Br₂)', 'Toxic, corrosive, oxidising', 'Skull, Corrosion, Oxidiser', 'Severe skin/eye/respiratory burns'], ['Concentrated H₂SO₄', 'Corrosive, oxidising', 'Corrosion, Oxidiser', 'Severe exothermic burns on contact with skin'], ['1-bromobutane', 'Harmful, irritant, flammable', 'Exclamation mark, Flame', 'Irritates skin and respiratory tract'], ['Dichloromethane (DCM)', 'Irritant, suspected carcinogen, harmful vapour', 'Exclamation mark, Health hazard', 'Long-term exposure risk; narcotic at high concentrations'], ['Acetone (propanone)', 'Highly flammable, irritant', 'Flame, Exclamation mark', 'Very low flash point — fire hazard'], ['Phenol', 'Toxic, corrosive', 'Skull, Corrosion', 'Absorbed through skin; systemic toxicity']]
    }
  }, {
    id: 'h-controls',
    type: 'heading',
    data: {
      text: 'Control Measures for Organic Practicals',
      level: 2
    }
  }, {
    id: 'list-controls',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['<strong>Fume cupboard:</strong> Use for all volatile organic chemicals and reactions producing toxic gases.', '<strong>No naked flames:</strong> Use electric hot plates or water baths instead of Bunsen burners with flammable solvents.', '<strong>Small quantities:</strong> Use the minimum volume needed to reduce exposure and waste.', '<strong>Sealed containers:</strong> Keep organic solvents in stoppered containers to reduce vapour concentration.', '<strong>Gloves:</strong> Chemical-resistant nitrile gloves for corrosive/toxic organics (not latex which may permeate).', '<strong>Safety goggles:</strong> Mandatory for all organic work, especially with corrosive or splashing liquids.', '<strong>Lab coat:</strong> Protects skin from splashes.', '<strong>Spill kit:</strong> Dry sand or absorbent granules to contain solvent spills (not water — may spread).', '<strong>Fire extinguisher:</strong> CO₂ or dry powder — NOT water — for organic solvent fires.']
    }
  }, {
    id: 'h-disposal',
    type: 'heading',
    data: {
      text: 'Safe Disposal of Organic Waste',
      level: 2
    }
  }, {
    id: 'p-disposal',
    type: "list",
    data: {
      style: "unordered",
      items: ["Organic solvents must <strong>never</strong> be poured down the sink.", "They are collected in labelled organic waste containers and disposed of by licensed hazardous waste contractors.", "g.", "DCM, chloroform) are kept separate from non-halogenated solvents."]
    }
  }, {
    id: 'h-specific',
    type: 'heading',
    data: {
      text: 'Specific Organic Reactions — Risk Highlights',
      level: 2
    }
  }, {
    id: 'table-reactions',
    type: 'comparisonTable',
    data: {
      caption: 'Risk control measures for specific organic reaction types at A-level',
      headers: ['Reaction type', 'Key hazard', 'Control measure'],
      rows: [['Free-radical halogenation', 'UV light source; Br₂ toxic vapour', 'UV lamp shielded; fume cupboard; sealed apparatus'], ['Reflux with alcohol', 'Flammable ethanol vapour', 'Anti-bumping granules; water bath not Bunsen; condenser fitted'], ['Distillation', 'Flammable distillate, bumping', 'Anti-bumping granules; no naked flame; receiver not sealed'], ['Recrystallisation', 'Hot flammable solvent vapour', 'Water bath, fume cupboard, no naked flame'], ['Acid/alcohol esterification', 'Corrosive H₂SO₄ catalyst; flammable alcohol', 'Add acid to alcohol; fume cupboard; heat gently']]
    }
  }, {
    id: 'callout-worked',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Risk Assessment Question',
      text: 'Q: A student heats ethanol with concentrated H₂SO₄ to make ethene. State two hazards and one control measure for each.\n\nHazard 1: Ethanol is highly flammable.\nControl: Use a water bath, not a Bunsen burner.\n\nHazard 2: Concentrated H₂SO₄ is corrosive.\nControl: Wear chemical-resistant gloves and safety goggles.'
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tip',
      text: 'When asked for a "control measure", be specific. "Be careful" or "wear PPE" alone score 0. Name the exact PPE (e.g. nitrile gloves) or the specific engineering control (e.g. fume cupboard, water bath instead of Bunsen).'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Using water to fight an organic solvent fire — water spreads flammable liquid fires.\n• Pouring organic waste down the drain — illegal and environmentally damaging.\n• Using latex gloves with organic solvents — many organics permeate latex rapidly.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can state the specific hazards (flammable, toxic, corrosive) of common organic chemicals.',
        checked: false
      }, {
        text: 'I can link each hazard to an appropriate, specific control measure.',
        checked: false
      }, {
        text: 'I know why water baths are used instead of Bunsen burners with flammable solvents.',
        checked: false
      }, {
        text: 'I can explain safe disposal procedures for organic waste.',
        checked: false
      }, {
        text: 'I understand why organic waste must not go down the drain.',
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
      text: 'Understand: Risk assessment identifies hazards, evaluates exposure routes, and implements controls (fume cupboards, PPE, small quantities).\n\nApply: Plan a risk assessment for using bromine (toxic) and hexane (flammable). Identify hazards and controls.\n\nAnalyze: Why use minimum quantities in school practicals? Discuss safety and environmental reasons.\n\nEvaluate: Fume cupboards reduce toxic exposure but increase energy use. Are they always justified?'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Organic chemicals are frequently flammable, volatile, toxic or carcinogenic. Control measures include fume cupboards, water baths (not Bunsen burners), chemical-resistant gloves, sealed containers, and correct waste disposal in labelled organic waste containers. Always link the specific hazard to the specific control measure in exam answers.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'table-hazards',
      prompt: 'State two hazards of ethanol and two hazards of bromine.'
    }, {
      id: 'cue-2',
      blockId: 'list-controls',
      prompt: 'Why should a water bath be used instead of a Bunsen burner when heating an organic solvent?'
    }, {
      id: 'cue-3',
      blockId: 'p-disposal',
      prompt: 'Why must organic solvents not be poured down the sink?'
    }, {
      id: 'cue-4',
      blockId: 'callout-worked',
      prompt: 'Give one hazard and one specific control measure for heating ethanol with concentrated H₂SO₄.'
    }, {
      id: 'cue-5',
      blockId: 'callout-warning',
      prompt: 'Why should you NOT use water to extinguish an organic solvent fire?'
    }],
    summaryText: 'Organics are flammable/toxic/corrosive — use fume cupboard, water bath, nitrile gloves, goggles. Dispose of organic waste in labelled containers, never down the drain. CO₂/dry powder extinguishers for solvent fires.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'CLEAPSS Laboratory Handbook',
    detail: 'Detailed guidance on safe handling of organic chemicals in educational settings.',
    year: '2023',
    source: 'CLEAPSS',
    tags: ['organic safety', 'control measures']
  }]
};