export const note_chemistry_1_4_10 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Write equations for complete and incomplete combustion of alkanes; explain the formation and environmental impact of combustion pollutants.'
    }
  }, {
    id: 'h-combustion',
    type: 'heading',
    data: {
      text: 'Combustion of Alkanes',
      level: 2
    }
  }, {
    id: 'p-combustion',
    type: "list",
    data: {
      style: "unordered",
      items: ["Alkanes are the primary component of fossil fuels (natural gas, petrol, diesel).", "When burned, they release energy \u2014 this is their main practical use.", "Combustion can be complete or incomplete depending on the oxygen supply."]
    }
  }, {
    id: 'h-complete',
    type: 'heading',
    data: {
      text: 'Complete Combustion',
      level: 2
    }
  }, {
    id: 'callout-key-complete',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Complete Combustion',
      text: 'When an alkane burns in excess oxygen, complete combustion occurs producing only carbon dioxide (CO₂) and water (H₂O). No pollutants other than CO₂ are formed.'
    }
  }, {
    id: 'eq-methane',
    type: 'equation',
    data: {
      html: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
      caption: 'Complete combustion of methane — ΔH is highly exothermic.'
    }
  }, {
    id: 'eq-octane',
    type: 'equation',
    data: {
      html: '2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O',
      caption: 'Complete combustion of octane (a major component of petrol).'
    }
  }, {
    id: 'p-general-complete',
    type: "list",
    data: {
      style: "unordered",
      items: ["General equation for complete combustion of a straight-chain alkane C\u2099H\u2082\u2099\u208A\u2082:"]
    }
  }, {
    id: 'eq-general',
    type: 'equation',
    data: {
      html: 'CₙH₂ₙ₊₂ + <span class="nb-frac"><span class="nb-num">3n+1</span><span class="nb-den">2</span></span>O₂ → nCO₂ + (n+1)H₂O',
      caption: 'General equation for complete combustion of alkane CₙH₂ₙ₊₂.'
    }
  }, {
    id: 'h-incomplete',
    type: 'heading',
    data: {
      text: 'Incomplete Combustion',
      level: 2
    }
  }, {
    id: 'callout-key-incomplete',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Incomplete Combustion',
      text: 'When oxygen supply is limited, incomplete combustion occurs. Products include carbon monoxide (CO), carbon (soot/particulates), and water — as well as some unburned hydrocarbons. Less energy is released than in complete combustion.'
    }
  }, {
    id: 'eq-incomplete',
    type: 'equation',
    data: {
      html: '2CH₄ + 3O₂ → 2CO + 4H₂O &nbsp;(limited O₂ → CO)',
      caption: 'Incomplete combustion of methane producing toxic carbon monoxide.'
    }
  }, {
    id: 'h-pollutants',
    type: 'heading',
    data: {
      text: 'Combustion Pollutants and Their Effects',
      level: 2
    }
  }, {
    id: 'table-pollutants',
    type: 'comparisonTable',
    data: {
      caption: 'Pollutants from combustion of fossil fuels',
      headers: ['Pollutant', 'Source', 'Environmental/Health effect', 'Reduction method'],
      rows: [['Carbon dioxide (CO₂)', 'Complete combustion of any carbon-containing fuel', 'Greenhouse gas — enhances greenhouse effect → global warming, climate change', 'Use renewables; carbon capture; reduce fuel use'], ['Carbon monoxide (CO)', 'Incomplete combustion (limited O₂)', 'Toxic — binds irreversibly to haemoglobin (forming carboxyhaemoglobin) → reduces O₂ transport → death', 'Catalytic converters; ensure adequate ventilation'], ['Carbon (soot/particulates)', 'Incomplete combustion', 'Respiratory problems; carcinogenic; reduces air quality; global dimming', 'Better combustion design; particulate filters (DPF)'], ['Sulfur dioxide (SO₂)', 'Combustion of sulfur-containing fuels (coal, some diesel)', 'Acid rain (SO₂ + H₂O → H₂SO₃/H₂SO₄) — damages ecosystems, buildings, human health', 'Desulfurisation of fuel; flue gas desulfurisation (limestone scrubbing)'], ['Nitrogen oxides (NOₓ: NO, NO₂)', 'High-temperature combustion — N₂ + O₂ react in engine cylinders', 'Acid rain; photochemical smog; respiratory irritant; NO₂ is toxic', 'Catalytic converters; EGR (exhaust gas recirculation); lean-burn engines'], ['Unburned hydrocarbons', 'Incomplete combustion or fuel evaporation', 'Photochemical smog; some are carcinogenic (e.g. benzene)', 'Catalytic converters; improved combustion'], ['Ozone (O₃, tropospheric)', 'Secondary pollutant: NOₓ + hydrocarbons + UV light', 'Respiratory irritant; photochemical smog component', 'Reduce NOₓ and hydrocarbon emissions']]
    }
  }, {
    id: 'h-catalytic',
    type: 'heading',
    data: {
      text: 'Catalytic Converters',
      level: 2
    }
  }, {
    id: 'p-catalytic',
    type: "list",
    data: {
      style: "unordered",
      items: ["Catalytic converters in vehicle exhausts use a platinum\u2013rhodium\u2013palladium honeycomb catalyst to convert toxic pollutants into less harmful substances:"]
    }
  }, {
    id: 'list-catalytic',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['2CO + 2NO → 2CO₂ + N₂ (CO oxidised; NO reduced)', 'Hydrocarbons + O₂ → CO₂ + H₂O (unburned fuel oxidised)', 'The catalyst provides a surface for the reaction — lowers activation energy without being consumed.', 'Limitation: does not remove CO₂ (a greenhouse gas); less effective when cold (requires ~300 °C to operate).']
    }
  }, {
    id: 'h-acid-rain',
    type: 'heading',
    data: {
      text: 'Acid Rain — Formation',
      level: 2
    }
  }, {
    id: 'list-acid-rain',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['SO₂ + H₂O → H₂SO₃ (sulfurous acid, weak)', '2SO₂ + O₂ → 2SO₃; SO₃ + H₂O → H₂SO₄ (sulfuric acid, strong)', 'NO + ½O₂ → NO₂; 3NO₂ + H₂O → 2HNO₃ + NO (nitric acid)', 'Acid rain pH typically 4–5 (normal rain ~5.6)', 'Effects: kills aquatic life (fish), damages tree roots, corrodes limestone buildings and metal structures.']
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tips',
      text: '• For CO toxicity: state it binds to haemoglobin (forming carboxyhaemoglobin) and PREVENTS oxygen transport — do not just say "it is toxic".\n• For NOₓ formation: explain it forms at high temperatures in engine cylinders where N₂ and O₂ from air react.\n• CO₂ is NOT directly toxic — its effect is as a greenhouse gas causing global warming.\n• Learn the catalytic converter equation: 2CO + 2NO → 2CO₂ + N₂.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Saying CO₂ causes acid rain — it does not (it forms very weak carbonic acid). Acid rain is primarily from SO₂ and NOₓ.\n• Forgetting that NOₓ comes from the nitrogen in AIR, not from the fuel itself (in petrol/diesel engines).\n• Confusing soot (carbon particles) with CO — soot is solid carbon; CO is a colourless, odourless gas.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can write balanced equations for complete and incomplete combustion of alkanes.',
        checked: false
      }, {
        text: 'I can name 5 combustion pollutants and state their source and harmful effect.',
        checked: false
      }, {
        text: 'I can explain how CO causes poisoning at the molecular level.',
        checked: false
      }, {
        text: 'I can write equations showing how acid rain forms from SO₂ and NOₓ.',
        checked: false
      }, {
        text: 'I can explain how catalytic converters work and write the key equation.',
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
      text: 'Understand: Complete combustion → CO₂ + H₂O; incomplete → CO, C, H₂O. Pollutants include CO, NOₓ, SO₂, particulates.\n\nApply: Write equations for complete and incomplete combustion of propane.\n\nAnalyze: NOₓ forms at high T even though N₂ is unreactive. Explain how activation energy is overcome.\n\nEvaluate: Catalytic converters reduce CO and NOₓ but not CO₂. Do they provide a complete solution to vehicle pollution?'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Complete combustion (excess O₂): alkane → CO₂ + H₂O. Incomplete combustion (limited O₂): → CO + soot + H₂O. Pollutants: CO (toxic — blocks Hb), CO₂ (greenhouse gas), SO₂/NOₓ (acid rain), soot (respiratory). Catalytic converters: 2CO + 2NO → 2CO₂ + N₂. Acid rain from SO₂ and NOₓ dissolving in water.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'eq-octane',
      prompt: 'Write a balanced equation for the complete combustion of octane (C₈H₁₈).'
    }, {
      id: 'cue-2',
      blockId: 'table-pollutants',
      prompt: 'Why is CO so dangerous? Explain at the molecular level.'
    }, {
      id: 'cue-3',
      blockId: 'table-pollutants',
      prompt: 'How does SO₂ cause acid rain? Write an equation.'
    }, {
      id: 'cue-4',
      blockId: 'list-catalytic',
      prompt: 'What is the equation for the reaction in a catalytic converter that removes CO and NO?'
    }, {
      id: 'cue-5',
      blockId: 'callout-warning',
      prompt: 'Does CO₂ cause acid rain? Explain your answer.'
    }],
    summaryText: 'Complete combustion → CO₂ + H₂O. Incomplete → CO + soot. CO binds haemoglobin → prevents O₂ transport. SO₂/NOₓ → acid rain. Catalytic converter: 2CO + 2NO → 2CO₂ + N₂.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'Combustion of alkanes and environmental impact of pollutants is required Topic 4 content.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['combustion', 'pollutants', 'acid rain']
  }]
};