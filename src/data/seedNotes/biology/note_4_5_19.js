export const note_biology_4_5_19 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand population dynamics, what factors determine population size, and predator-prey relationships." }
    },
    {
      id: "h-pop",
      type: "heading",
      data: { text: "Factors Determining Population Size", level: 2 }
    },
    {
      id: "list-abiotic",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Abiotic factors: Non-living components such as light intensity, temperature, pH, water availability, and oxygen. Ideal abiotic factors require less energy for survival, leaving more energy for growth and reproduction, increasing population size."
        ]
      }
    },
    {
      id: "list-biotic",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Interspecific competition: Competition between different species for the same resources. It leaves both populations smaller than if they were alone. The competitive exclusion principle states two species occupying identical niches cannot coexist.",
          "Intraspecific competition: Competition within the same species for resources like food, mates, and territory. This causes population size to fluctuate around the carrying capacity.",
          "Predation: The consumption of one organism by another."
        ]
      }
    },
    {
      id: "callout-predator",
      type: "callout",
      data: { style: "key", title: "Predator-Prey Cycles", text: "Prey population rises → More food for predators → Predator population rises → Predators eat more prey → Prey population falls → Less food for predators → Predator population falls → Cycle repeats." }
    },
{ 'id': 'callout-examiner-19c5e917', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Limiting Factors', 'text': 'Do not mix up density-dependent factors (e.g., competition for food, disease) with density-independent factors (e.g., natural disasters, sudden temperature changes) when explaining what maintains populations at their carrying capacity.' } },
    {
      id: 'callout-tip-u4-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "The Predator-Prey Lag Phase",
        text: "In predator-prey graphs, the predator population peaks *after* the prey population peaks. Always mention the time lag required for predators to reproduce after eating the abundant prey."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-abiotic", prompt: "Give three examples of abiotic factors that affect population size." },
      { id: "cue-2", blockId: "list-biotic", prompt: "What is the difference between interspecific and intraspecific competition?" },
      { id: "cue-3", blockId: "callout-predator", prompt: "Explain a typical predator-prey population cycle." }
    ],
    summaryText: "Population size is regulated by abiotic factors (temperature, water) and biotic factors (competition, predation). Intraspecific competition is within a species, while interspecific is between different species. Predator-prey models oscillate rhythmically.",
    ready: true
  },
  evidence: []
};