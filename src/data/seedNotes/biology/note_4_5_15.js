export const note_biology_4_5_15 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the carbon cycle, including photosynthesis, respiration, decomposition, and combustion." }
    },
    {
      id: "h-carbon-cycle",
      type: "heading",
      data: { text: "The Carbon Cycle", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Carbon is an essential element in all organic biological molecules. Knowing how it cycles between the atmosphere (as CO₂), living things, and the earth is vital." }
    },
    {
      id: "list-processes",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Photosynthesis: Removes CO₂ from the atmosphere and fixes it into organic molecules in plants.",
          "Respiration: Both plants and animals metabolise organic molecules, releasing CO₂ back into the atmosphere.",
          "Feeding: Carbon in organic molecules is passed down the food chain from producers to consumers.",
          "Decomposition: Organisms die and excrete waste. Saprobiotic microorganisms (bacteria, fungi) secrete enzymes to digest these, absorbing the products and releasing CO₂ via their own respiration.",
          "Fossilisation: In extreme conditions (e.g., lack of oxygen/waterlogged soil causing incomplete decomposition), dead organic matter forms fossil fuels over millions of years.",
          "Combustion: Burning fossil fuels or biomass releases locked-up carbon back into the atmosphere as CO₂."
        ]
      }
    },
    {
      id: "callout-balance",
      type: "callout",
      data: { style: "warning", title: "Carbon Balance", text: "Historically, the carbon cycle was balanced. Human activities—broadly deforestation (reducing photosynthesis) and combusting fossil fuels—have disrupted this balance, leading to rising atmospheric CO₂ levels." }
    },
{ 'id': 'callout-examiner-5e1386a8', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Common Mistake', 'text': 'Remember that microorganisms (like bacteria and fungi) involved in decomposition also respire, releasing CO₂ into the atmosphere. Students frequently forget to include microbial respiration in carbon cycle questions.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-processes", prompt: "Which single biological process removes carbon dioxide from the atmosphere?" },
      { id: "cue-2", blockId: "list-processes", prompt: "Explain the role of decomposers in the carbon cycle." },
      { id: "cue-3", blockId: "callout-balance", prompt: "How have human activities imbalanced the carbon cycle?" }
    ],
    summaryText: "The carbon cycle balances CO₂ removal via photosynthesis with CO₂ release through respiration, decomposition, and combustion. Decomposers return trapped carbon. Humans disrupt this by deforestation and burning fossil fuels.",
    ready: true
  },
  evidence: []
};