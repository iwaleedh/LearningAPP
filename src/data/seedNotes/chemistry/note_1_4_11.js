export const note_chemistry_1_4_11 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Evaluate alternative fuels including hydrogen, biofuels and alcohols; explain the concept of carbon neutrality and assess sustainability.'
    }
  }, {
    id: 'h-intro',
    type: 'heading',
    data: {
      text: 'Why Alternative Fuels?',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["Fossil fuels (coal, oil, natural gas) are finite, non-renewable resources whose combustion releases CO\u2082 stored over millions of years, contributing to the enhanced greenhouse effect and climate change.", "Alternative fuels aim to reduce net CO\u2082 emissions, decrease dependence on fossil fuels, and improve energy security."]
    }
  }, {
    id: 'h-carbon-neutral',
    type: 'heading',
    data: {
      text: 'Carbon Neutrality',
      level: 2
    }
  }, {
    id: 'callout-key-cn',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Carbon Neutral — Definition',
      text: 'A process is carbon neutral if the amount of CO₂ released into the atmosphere equals the amount removed (absorbed) from the atmosphere over the same period. Net CO₂ release = zero.'
    }
  }, {
    id: 'p-cn',
    type: "list",
    data: {
      style: "unordered",
      items: ["In theory, burning a biofuel is carbon neutral because the CO\u2082 released during combustion equals the CO\u2082 absorbed by the plant during photosynthesis when it grew.", "However, in practice, energy used in planting, harvesting, transporting and processing the crop means biofuels are rarely truly carbon neutral."]
    }
  }, {
    id: 'h-hydrogen',
    type: 'heading',
    data: {
      text: 'Hydrogen as a Fuel',
      level: 2
    }
  }, {
    id: 'eq-hydrogen',
    type: 'equation',
    data: {
      html: '2H₂ + O₂ → 2H₂O',
      caption: 'Combustion of hydrogen — only product is water (no CO₂, no pollutants).'
    }
  }, {
    id: 'table-hydrogen',
    type: 'comparisonTable',
    data: {
      caption: 'Hydrogen as a fuel — advantages and disadvantages',
      headers: ['Advantage', 'Disadvantage'],
      rows: [['Only product is water — zero CO₂ emissions at point of use', 'Most H₂ is currently produced from fossil fuels (steam reforming of methane) → not truly clean'], ['Very high energy density per kg (141 MJ kg⁻¹ vs 47 MJ kg⁻¹ for petrol)', 'Difficult and expensive to store — requires very high pressure or cryogenic cooling (−253 °C)'], ['Can be used in fuel cells (very efficient, no combustion needed)', 'Highly flammable and explosive — safety concerns'], ['No toxic combustion products', 'Hydrogen infrastructure (pipelines, fuelling stations) largely absent'], ['Can be produced by electrolysis of water using renewable electricity (green H₂)', 'Electrolysis currently energy-intensive and expensive']]
    }
  }, {
    id: 'h-biofuels',
    type: 'heading',
    data: {
      text: 'Biofuels',
      level: 2
    }
  }, {
    id: 'callout-key-biofuel',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Biofuel — Definition',
      text: 'A biofuel is a fuel produced from biological materials (biomass) — i.e. recently living organisms. Examples include bioethanol (fermented from sugars/starch), biodiesel (from plant oils), and biogas (methane from anaerobic digestion of organic waste).'
    }
  }, {
    id: 'table-biofuels',
    type: 'comparisonTable',
    data: {
      caption: 'Biofuels — advantages and disadvantages',
      headers: ['Advantage', 'Disadvantage'],
      rows: [['Renewable — grown from crops that can be replanted', 'Land use: biofuel crops compete with food crops → food price rises, deforestation'], ['In theory carbon neutral — CO₂ released = CO₂ fixed during growth', 'Not truly carbon neutral in practice — energy for farming, processing, transport adds to carbon footprint'], ['Can use existing engines (bioethanol blends, biodiesel blends)', 'Lower energy density than fossil fuels — more fuel needed per km'], ['Reduces dependence on fossil fuel imports', 'Monoculture crops reduce biodiversity'], ['Biogas from waste is sustainable and reduces landfill methane', 'Bioethanol production (fermentation) uses food crops (sugar cane, corn)']]
    }
  }, {
    id: 'h-bioethanol',
    type: 'heading',
    data: {
      text: 'Bioethanol',
      level: 2
    }
  }, {
    id: 'p-bioethanol',
    type: "list",
    data: {
      style: "unordered",
      items: ["Bioethanol is produced by fermentation of sugars from crops such as sugar cane (Brazil) or corn (USA).", "g.", "E10 = 10% ethanol) or used as a standalone fuel."]
    }
  }, {
    id: 'eq-bioethanol',
    type: 'equation',
    data: {
      html: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O',
      caption: 'Complete combustion of ethanol.'
    }
  }, {
    id: 'h-alcohol-fuel',
    type: 'heading',
    data: {
      text: 'Alcohols as Fuels',
      level: 2
    }
  }, {
    id: 'table-alcohol',
    type: 'comparisonTable',
    data: {
      caption: 'Alcohols as fuels — comparison with petrol',
      headers: ['Property', 'Ethanol', 'Petrol (octane)'],
      rows: [['Energy density (MJ L⁻¹)', '~21', '~34'], ['Carbon emissions per MJ', 'Lower (if bio-sourced)', 'Higher'], ['Octane rating', 'Higher (~108) → less engine knock', 'Lower (~87–98)'], ['Miscibility with petrol', 'Miscible in most ratios', '—'], ['Corrosiveness', 'Can corrode rubber seals in older engines', 'Standard'], ['Water absorption', 'Hygroscopic — absorbs water from air', 'Not hygroscopic']]
    }
  }, {
    id: 'h-greenhouse',
    type: 'heading',
    data: {
      text: 'The Greenhouse Effect and Global Warming',
      level: 2
    }
  }, {
    id: 'p-greenhouse',
    type: "list",
    data: {
      style: "unordered",
      items: ["The natural greenhouse effect keeps Earth warm enough for life.", "However, <strong>enhanced</strong> greenhouse effect from increased CO\u2082 (and CH\u2084, N\u2082O) from human activity is causing global warming.", "CO\u2082 absorbs infrared radiation emitted by Earth's surface and re-emits it in all directions, trapping heat in the atmosphere."]
    }
  }, {
    id: 'list-greenhouse',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['CO₂ is a linear molecule — asymmetric stretching/bending modes absorb IR radiation.', 'Pre-industrial CO₂: ~280 ppm; current (2024): ~422 ppm (NOAA).', 'Consequences: rising sea levels, more extreme weather, ecosystem disruption, ocean acidification.', 'Methane (CH₄) from livestock and landfill has a global warming potential ~28× CO₂ over 100 years.']
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tips',
      text: '• "Carbon neutral" means net CO₂ = zero over the life cycle — not zero CO₂ at the point of combustion.\n• Hydrogen\'s only combustion product is water — always state this clearly.\n• For biofuels, always evaluate BOTH advantages and disadvantages — exam questions often ask for a balanced assessment.\n• The enhanced greenhouse effect is caused by INCREASED concentrations of greenhouse gases from human activity.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Saying biofuels are "carbon neutral" without qualification — in practice they are not, due to energy costs of production.\n• Confusing the greenhouse effect (natural, necessary) with the enhanced greenhouse effect (human-caused, problematic).\n• Saying hydrogen "produces no pollution" without noting that current H₂ production is mainly from fossil fuels.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can define carbon neutral and explain why biofuels are only approximately carbon neutral.',
        checked: false
      }, {
        text: 'I can evaluate hydrogen as a fuel — advantages and disadvantages.',
        checked: false
      }, {
        text: 'I can evaluate biofuels — advantages and disadvantages.',
        checked: false
      }, {
        text: 'I can write the equation for combustion of ethanol.',
        checked: false
      }, {
        text: 'I can explain the enhanced greenhouse effect and link it to CO₂ from fossil fuels.',
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
      text: 'Understand: Alternative fuels aim to reduce fossil fuel dependence. Carbon neutrality = CO₂ released equals CO₂ absorbed during production.\n\nApply: Why is bioethanol carbon neutral but petroleum is not? Include the carbon cycle.\n\nAnalyze: H₂ fuel cells produce only water, yet producing H₂ often uses fossil fuels. Analyze the true carbon footprint.\n\nEvaluate: "Electric vehicles are zero-emission." Critically evaluate considering electricity source and battery production.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Carbon neutral = zero net CO₂ over life cycle. Hydrogen fuel: only product H₂O, but storage/production challenges. Biofuels: renewable and approximately carbon neutral, but land use, food competition and energy cost of production are concerns. Enhanced greenhouse effect: increased CO₂ from burning fossil fuels → global warming. Alcohols (ethanol) can blend with petrol but have lower energy density.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-cn',
      prompt: 'Define carbon neutral. Why are biofuels only approximately carbon neutral?'
    }, {
      id: 'cue-2',
      blockId: 'table-hydrogen',
      prompt: 'Give two advantages and two disadvantages of hydrogen as a fuel.'
    }, {
      id: 'cue-3',
      blockId: 'table-biofuels',
      prompt: 'Give two advantages and two disadvantages of biofuels.'
    }, {
      id: 'cue-4',
      blockId: 'eq-bioethanol',
      prompt: 'Write the equation for complete combustion of ethanol.'
    }, {
      id: 'cue-5',
      blockId: 'p-greenhouse',
      prompt: 'Explain how CO₂ contributes to the enhanced greenhouse effect.'
    }],
    summaryText: 'Carbon neutral: net CO₂ = 0. Hydrogen: clean combustion (H₂O only) but storage/production issues. Biofuels: renewable but land use and processing energy limit true carbon neutrality. CO₂ enhanced greenhouse effect → global warming.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'NOAA Global Monitoring Laboratory',
    detail: 'Atmospheric CO₂ reached 422 ppm in 2024, up from 280 ppm pre-industrial levels.',
    year: '2024',
    source: 'NOAA',
    tags: ['greenhouse effect', 'CO₂', 'climate change']
  }, {
    id: 'ev-2',
    title: 'Edexcel WCH11 Specification',
    detail: 'Alternative fuels and carbon neutrality are required for Topic 4.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['biofuels', 'hydrogen', 'alternative fuels']
  }]
};