export const note_biology_4_5_26 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the concept of sustainability and conservation, and ways we can manage resources for the future." }
    },
    {
      id: "h-sustainability",
      type: "heading",
      data: { text: "Sustainability", level: 2 }
    },
    {
      id: "p-sustainability",
      type: "paragraph",
      data: { text: "Sustainability means meeting the needs of the current generation without compromising the ability of future generations to meet their own needs. It requires balancing ecological, social, and economic demands." }
    },
    {
      id: "h-conservation",
      type: "heading",
      data: { text: "Conservation vs Preservation", level: 2 }
    },
    {
      id: "list-conservation",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Conservation: Active management and maintenance of ecosystems to maximize biodiversity. It often involves human intervention (e.g., grazing sheep to maintain a plagioclimax, controlled burning) to allow local communities to sustainably use resources.",
          "Preservation: Protecting habitats in their completely natural state by totally banning human interference (cordoning off a virgin forest)."
        ]
      }
    },
    {
      id: "h-management",
      type: "heading",
      data: { text: "Managing Resources sustainably", level: 3 }
    },
    {
      id: "list-management",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Coppicing: Cutting tree trunks down to their base. New shoots rapidly grow from the stool. This provides a continuous supply of wood without killing the trees.",
          "Fishing Quotas: Setting limits on the number and size of fish caught to ensure breeding populations are protected.",
          "Reforestation: Replanting trees whenever trees are felled."
        ]
      }
    },
{ 'id': 'callout-examiner-1cbf8276', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Conservation vs Preservation', 'text': 'Be precise. Conservation often involves the active management of ecosystems (like coppicing or controlled grazing) to maintain biodiversity, whereas preservation implies simply protecting areas by minimizing human intervention entirely.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-sustainability", prompt: "Define sustainability." },
      { id: "cue-2", blockId: "list-conservation", prompt: "What is the difference between conservation and preservation?" },
      { id: "cue-3", blockId: "list-management", prompt: "How does coppicing act as a sustainable resource management method?" }
    ],
    summaryText: "Sustainability meets current needs without harming future generations. Conservation actively manages ecosystems (e.g., coppicing, fishing quotas) to maintain biodiversity while allowing resource use, whereas preservation bans all human interference.",
    ready: true
  },
  evidence: []
};