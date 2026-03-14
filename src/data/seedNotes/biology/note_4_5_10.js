export const note_biology_4_5_10 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Examine the specific properties of RuBisCO and its role in carbon fixation." }
    },
    {
      id: "h-rubisco",
      type: "heading",
      data: { text: "RuBisCO (Ribulose Bisphosphate Carboxylase-Oxygenase)", level: 2 }
    },
    {
      id: "p-rubisco",
      type: "paragraph",
      data: { text: "RuBisCO is the most abundant enzyme on Earth, found in the stroma of chloroplasts. It catalyses the first major step of carbon fixation in the Calvin cycle, combining carbon dioxide with the 5-carbon compound ribulose bisphosphate (RuBP) to form highly unstable 6-carbon intermediates that break down into GP." }
    },
    {
      id: "h-inefficiency",
      type: "heading",
      data: { text: "Inefficiency and Photorespiration", level: 3 }
    },
    {
      id: "p-inefficiency",
      type: "paragraph",
      data: { text: "RuBisCO is notoriously inefficient. It acts slowly (catalysing only ~3 reactions per second per active site), and crucially, its active site does not perfectly discriminate between CO₂ and O₂." }
    },
    {
      id: "list-photorespiration",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Carboxylase activity: Normal photosynthesis. CO₂ binds to RuBP → GP.",
          "Oxygenase activity (Photorespiration): O₂ binds competitively to the active site. RuBP reacts with O₂ resulting in a product that cannot be used efficiently in the Calvin cycle. This wastes ATP and loses fixed carbon as CO₂, significantly reducing photosynthetic efficiency, especially at high temperatures when oxygen becomes relatively more soluble than CO₂."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-rubisco", prompt: "What exact reaction does RuBisCO catalyse in the Calvin cycle?" },
      { id: "cue-2", blockId: "list-photorespiration", prompt: "What is photorespiration and why is it detrimental to a plant?" },
      { id: "cue-3", blockId: "list-photorespiration", prompt: "Why does photorespiration increase at high temperatures?" }
    ],
    summaryText: "RuBisCO slowly catalyses the fixation of CO₂ to RuBP. However, it can also bind oxygen (photorespiration), which wastes ATP, loses carbon, and reduces photosynthetic efficiency, particularly at higher temperatures.",
    ready: true
  },
  evidence: []
};