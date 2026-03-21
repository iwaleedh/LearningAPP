export const note_biology_4_5_12 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand ecosystems, food chains, webs, and trophic levels." }
    },
    {
      id: "h-ecosystems",
      type: "heading",
      data: { text: "Ecosystems", level: 2 }
    },
    {
      id: "p-eco",
      type: "paragraph",
      data: { text: "An ecosystem is a biological community of interacting organisms (biotic factors) and their physical environment (abiotic factors) interacting as a system." }
    },
    {
      id: "list-terms",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Population: All organisms of a single species living in the same area at the same time.",
          "Community: All populations of all interacting species living in the same area.",
          "Habitat: The physical place where an organism lives."
        ]
      }
    },
    {
      id: "h-food",
      type: "heading",
      data: { text: "Food Chains and Food Webs", level: 2 }
    },
    {
      id: "p-webs",
      type: "paragraph",
      data: { text: "A food chain shows the simple linear transfer of energy between organisms. A food web is a network of interconnected food chains, showing complex feeding relationships." }
    },
    {
      id: "list-trophic",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Producer: Autotrophs (plants/algae) that synthesise organic molecules using light energy.",
          "Primary Consumer: Herbivores that eat producers.",
          "Secondary/Tertiary Consumer: Carnivores that eat other consumers.",
          "Decomposers: Saprobionts (fungi/bacteria) that break down dead organic matter into inorganic ions, returning them to the soil."
        ]
      }
    },
{ 'id': 'callout-examiner-816e5d2a', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-eco", prompt: "Define an ecosystem." },
      { id: "cue-2", blockId: "list-terms", prompt: "What is the difference between a population and a community?" },
      { id: "cue-3", blockId: "list-trophic", prompt: "What is the role of decomposers in an ecosystem?" }
    ],
    summaryText: "An ecosystem includes all interacting biotic communities and abiotic factors. Food webs show energy transfer via trophic levels from producers to consumers, supported by decomposers recycling nutrients.",
    ready: true
  },
  evidence: []
};