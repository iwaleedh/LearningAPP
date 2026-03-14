export const note_biology_5_7_0 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the overall equation for aerobic respiration and the role of ATP." }
    },
    {
      id: "h-aerobic",
      type: "heading",
      data: { text: "Aerobic Respiration Overview", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Aerobic respiration is the process of completely breaking down a respiratory substrate (like glucose) in the presence of oxygen to release energy, which is used to synthesize ATP." }
    },
    {
      id: "callout-equation",
      type: "callout",
      data: { style: "key", title: "Overall Equation", text: "C6H12O6 + 6O2 → 6CO2 + 6H2O + Energy (ATP)" }
    },
    {
      id: "h-atp",
      type: "heading",
      data: { text: "The Role of ATP", level: 2 }
    },
    {
      id: "p-atp",
      type: "paragraph",
      data: { text: "Adenosine triphosphate (ATP) is the universal energy currency of cells. It consists of adenine, ribose, and three phosphate groups. Energy is released when the bonds between the phosphate groups are broken via a hydrolysis reaction (catalyzed by ATP hydrolase), yielding ADP and inorganic phosphate (Pi)." }
    },
    {
      id: "list-stages",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Glycolysis: Occurs in the cytoplasm.",
          "Link Reaction: Occurs in the mitochondrial matrix.",
          "Krebs Cycle: Occurs in the mitochondrial matrix.",
          "Oxidative Phosphorylation: Occurs across the inner mitochondrial membrane (cristae)."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-intro", prompt: "What is the primary purpose of aerobic respiration?" },
      { id: "cue-2", blockId: "callout-equation", prompt: "Write the overall chemical equation for aerobic respiration." },
      { id: "cue-3", blockId: "list-stages", prompt: "Name the four stages of aerobic respiration and state where each occurs." }
    ],
    summaryText: "Aerobic respiration fully breaks down glucose to produce ATP (C6H12O6 + 6O2 -> 6CO2 + 6H2O + ATP). It involves Glycolysis (cytoplasm), Link Reaction (matrix), Krebs Cycle (matrix), and Oxidative Phosphorylation (cristae).",
    ready: true
  },
  evidence: []
};