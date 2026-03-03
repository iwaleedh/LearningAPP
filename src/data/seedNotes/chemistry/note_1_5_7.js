export const note_chemistry_1_5_7 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Evaluate methods of polymer disposal; explain the environmental problems of non-biodegradable plastics and assess the sustainability of alternative approaches.'
    }
  }, {
    id: 'h-problem',
    type: 'heading',
    data: {
      text: 'The Polymer Disposal Problem',
      level: 2
    }
  }, {
    id: 'p-problem',
    type: "list",
    data: {
      style: "unordered",
      items: ["Addition polymers such as poly(ethene), PVC and polystyrene are made from strong C\u2013C and C\u2013H bonds.", "These bonds are not broken by microorganisms \u2192 the polymers are <strong>non-biodegradable</strong>.", "They persist in the environment for hundreds of years, accumulating in landfill, oceans and as microplastics.", "Globally, ~380 million tonnes of plastic are produced annually, and only ~9% is recycled."]
    }
  }, {
    id: 'h-methods',
    type: 'heading',
    data: {
      text: 'Disposal Methods — Overview',
      level: 2
    }
  }, {
    id: 'table-methods',
    type: 'comparisonTable',
    data: {
      caption: 'Methods of polymer disposal — advantages and disadvantages',
      headers: ['Method', 'Description', 'Advantages', 'Disadvantages'],
      rows: [['Landfill', 'Plastics buried in designated sites', 'Simple, cheap, handles mixed waste', 'Non-biodegradable → persists centuries; landfill space running out; leaching of chemicals; methane from organic components'], ['Incineration (combustion)', 'Burn plastics at high temperature to recover energy', 'Energy recovery (waste-to-energy); reduces volume by ~90%; handles contaminated plastics', 'CO₂ released → greenhouse gas; toxic gases (HCl from PVC, dioxins); requires expensive flue-gas scrubbing'], ['Mechanical recycling', 'Sort, shred, melt and remould thermoplastics', 'Conserves resources; reduces landfill; lower energy than making new polymer', 'Polymers must be separated by type; contamination degrades quality; some plastics cannot be recycled mechanically'], ['Chemical recycling (feedstock)', 'Break polymer back into monomers or fuels (pyrolysis, hydrocracking)', 'Produces pure monomers for re-use; handles mixed plastics; closed-loop', 'High energy cost; expensive; not widely available commercially yet'], ['Biodegradable plastics', 'Polymers designed to break down by microorganisms (e.g. PLA, PHB)', 'Reduces persistent pollution; composted naturally', 'Often require industrial composting conditions; land/food crop use for bio-based feedstocks; may contaminate recycling streams'], ['Reduce and reuse', 'Use fewer single-use plastics; reuse containers', 'Best environmental option; no disposal needed', 'Requires behaviour change; not always practical']]
    }
  }, {
    id: 'h-incineration',
    type: 'heading',
    data: {
      text: 'Incineration — Detailed Analysis',
      level: 2
    }
  }, {
    id: 'p-incineration',
    type: "list",
    data: {
      style: "unordered",
      items: ["Burning plastics releases energy that can generate electricity (waste-to-energy plants)."]
    }
  }, {
    id: 'table-incineration',
    type: 'comparisonTable',
    data: {
      caption: 'Combustion products from common polymers',
      headers: ['Polymer', 'Combustion products', 'Environmental/health issue'],
      rows: [['Poly(ethene), poly(propene)', 'CO₂ + H₂O (complete); CO + soot (incomplete)', 'CO₂ greenhouse gas; CO toxic; soot (particulates)'], ['PVC (contains Cl)', 'CO₂ + H₂O + HCl gas', 'HCl is corrosive, acid rain precursor; dioxins may form'], ['Polystyrene (aromatic ring)', 'CO₂ + H₂O + benzene/styrene vapour', 'Benzene is carcinogenic; soot/black smoke'], ['PTFE (contains F)', 'CO₂ + HF gas', 'HF is extremely toxic and corrosive']]
    }
  }, {
    id: 'h-recycling',
    type: 'heading',
    data: {
      text: 'Recycling — Polymer Identification Codes',
      level: 2
    }
  }, {
    id: 'p-recycling',
    type: "list",
    data: {
      style: "unordered",
      items: ["Thermoplastics (soften on heating) can be mechanically recycled."]
    }
  }, {
    id: 'table-codes',
    type: 'comparisonTable',
    data: {
      caption: 'Common plastic resin identification codes',
      headers: ['Code', 'Polymer', 'Common products', 'Recyclability'],
      rows: [['1 — PET', 'Poly(ethylene terephthalate)', 'Drinks bottles, food trays', 'Widely recycled'], ['2 — HDPE', 'High-density poly(ethene)', 'Milk bottles, pipes', 'Widely recycled'], ['3 — PVC', 'Poly(chloroethene)', 'Pipes, window frames', 'Rarely recycled (Cl content)'], ['4 — LDPE', 'Low-density poly(ethene)', 'Plastic bags, film', 'Sometimes recycled (specialist)'], ['5 — PP', 'Poly(propene)', 'Food containers, car parts', 'Increasingly recycled'], ['6 — PS', 'Poly(phenylethene) / polystyrene', 'Foam cups, packaging', 'Rarely recycled'], ['7 — Other', 'Mixed/other polymers (e.g. PTFE, PC)', 'Various', 'Difficult to recycle']]
    }
  }, {
    id: 'h-biodegradable',
    type: 'heading',
    data: {
      text: 'Biodegradable and Bio-based Polymers',
      level: 2
    }
  }, {
    id: 'table-biodeg',
    type: 'comparisonTable',
    data: {
      caption: 'Examples of biodegradable/bio-based polymers',
      headers: ['Polymer', 'Source', 'Degradation', 'Advantage', 'Limitation'],
      rows: [['PLA (poly(lactic acid))', 'Fermentation of corn starch or sugarcane', 'Hydrolysis in industrial compost (>58 °C)', 'Compostable, bio-based, lower carbon footprint', 'Requires industrial composting; competes with food crops'], ['PHB (polyhydroxybutyrate)', 'Bacterial fermentation', 'Biodegrades in soil and water', 'Truly biodegradable in natural environments', 'Expensive; brittle; low production scale'], ['Cellulose-based polymers', 'Plant cellulose', 'Hydrolysis in environment', 'Renewable and biodegradable', 'Limited mechanical properties']]
    }
  }, {
    id: 'h-microplastics',
    type: 'heading',
    data: {
      text: 'Microplastics — An Emerging Crisis',
      level: 2
    }
  }, {
    id: 'p-microplastics',
    type: "list",
    data: {
      style: "unordered",
      items: ["<strong>Microplastics</strong> are plastic particles &lt;5 mm in diameter formed by: (1) fragmentation of larger plastics by UV light and mechanical action; (2) direct release of microbeads (cosmetics, toothpaste).", "They are found in oceans, freshwater, soil, air, and increasingly in human tissue.", "Effects: ingested by marine organisms \u2192 enters food chain; may carry toxic chemicals; long-term health effects under investigation."]
    }
  }, {
    id: 'h-sustainability',
    type: 'heading',
    data: {
      text: 'Sustainability — The Waste Hierarchy',
      level: 2
    }
  }, {
    id: 'list-hierarchy',
    type: 'list',
    data: {
      style: 'numbered',
      items: ['<strong>Prevention</strong> — best option: avoid creating plastic waste in the first place.', '<strong>Reuse</strong> — use products multiple times before disposal.', '<strong>Recycling</strong> — mechanical or chemical recycling of waste plastics.', '<strong>Recovery</strong> — energy recovery via incineration.', '<strong>Disposal</strong> — landfill: worst option, last resort.']
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tips',
      text: '• When asked to "evaluate" disposal methods, always give BOTH advantages and disadvantages.\n• For incineration, remember PVC releases HCl (and potentially dioxins) — this is a specific disadvantage.\n• Non-biodegradable = strong C–C and C–H bonds not attacked by microorganisms — link to polymer structure.\n• The waste hierarchy order (prevent > reuse > recycle > recover > dispose) is a useful framework for evaluation questions.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Saying plastics are "non-biodegradable because they don\'t dissolve in water" — the correct reason is that microorganisms cannot break C–C and C–H bonds.\n• Forgetting that incineration of PVC produces HCl — always specify the polymer when discussing combustion products.\n• Confusing biodegradable with compostable — some biodegradable plastics only degrade under specific industrial conditions.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can explain why addition polymers are non-biodegradable in terms of bond strength.',
        checked: false
      }, {
        text: 'I can evaluate landfill, incineration, mechanical recycling, and chemical recycling as disposal methods.',
        checked: false
      }, {
        text: 'I can state the toxic combustion products from PVC and polystyrene.',
        checked: false
      }, {
        text: 'I can describe what microplastics are and explain their environmental impact.',
        checked: false
      }, {
        text: 'I can describe biodegradable alternatives (PLA, PHB) and evaluate their sustainability.',
        checked: false
      }, {
        text: 'I can state the waste hierarchy in the correct order.',
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
      text: 'Understand: Most addition polymers are non-biodegradable (inert C–C backbone). Disposal: landfill, incineration, recycling — each with trade-offs.\n\nApply: Burning PE produces CO₂ + H₂O; burning PVC also produces HCl. Write balanced equations.\n\nAnalyze: Compare mechanical recycling (remoulding) vs chemical recycling (depolymerisation).\n\nEvaluate: "Biodegradable polymers are always better." Critically evaluate considering microplastics and composting infrastructure.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Addition polymers are non-biodegradable (strong C–C, C–H bonds). Disposal: landfill (persistent, limited space), incineration (energy recovery but CO₂/HCl/dioxins from PVC), mechanical recycling (needs sorting, quality loss), chemical recycling (pure monomers, expensive), biodegradable polymers (PLA, PHB — compostable but crop-competing). Microplastics from UV fragmentation enter food chains. Waste hierarchy: prevent > reuse > recycle > recover > dispose.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'p-problem',
      prompt: 'Why are addition polymers non-biodegradable? Link your answer to chemical bonding.'
    }, {
      id: 'cue-2',
      blockId: 'table-methods',
      prompt: 'Give two advantages and two disadvantages of incinerating plastics.'
    }, {
      id: 'cue-3',
      blockId: 'table-incineration',
      prompt: 'What toxic gas is produced when PVC is incinerated? Why is this a problem?'
    }, {
      id: 'cue-4',
      blockId: 'p-microplastics',
      prompt: 'What are microplastics and how do they form? State two environmental concerns.'
    }, {
      id: 'cue-5',
      blockId: 'list-hierarchy',
      prompt: 'State the waste hierarchy from best to worst option for plastic disposal.'
    }],
    summaryText: 'Addition polymers: non-biodegradable (C–C, C–H bonds). Landfill: persistent. Incineration: energy but CO₂/HCl. Recycling: mechanical (sorting needed) or chemical (expensive). Biodegradable polymers (PLA/PHB) need industrial composting. Microplastics: <5mm, enter food chains. Hierarchy: prevent > reuse > recycle > recover > dispose.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'Polymer disposal and sustainability is required for Topic 5 Alkenes.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['polymer disposal', 'sustainability', 'recycling']
  }, {
    id: 'ev-2',
    title: 'UNEP Global Plastics Outlook',
    detail: 'Global plastic production reached ~380 million tonnes annually; only ~9% is recycled.',
    year: '2022',
    source: 'UNEP',
    tags: ['microplastics', 'plastic waste']
  }]
};