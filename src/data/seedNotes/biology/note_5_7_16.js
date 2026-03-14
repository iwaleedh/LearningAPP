export const note_biology_5_7_16 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Explain the processes of ultrafiltration in the Bowman's capsule and selective reabsorption in the proximal convoluted tubule (PCT)." }
    },
    {
      id: "h-ultrafiltration",
      type: "heading",
      data: { text: "Ultrafiltration", level: 2 }
    },
    {
      id: "p-ultra",
      type: "paragraph",
      data: { text: "Occurs between the glomerulus and the Bowman's capsule." }
    },
    {
      id: "list-ultra",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "The afferent arteriole entering the glomerulus is wider than the efferent arteriole leaving. This creates high hydrostatic blood pressure inside the capillaries.",
          "This forces small molecules (water, glucose, amino acids, urea, inorganic ions) out of the blood.",
          "The filtrate passes through three layers: the capillary endothelial pores, the basement membrane (the main filter), and the filtration slits between the podocyte cells of the capsule.",
          "Large proteins and blood cells are physically too large to cross the basement membrane and remain in the blood."
        ]
      }
    },
    {
      id: "h-reabsorption",
      type: "heading",
      data: { text: "Selective Reabsorption (PCT)", level: 2 }
    },
    {
      id: "list-pct",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "The glomerular filtrate flows into the Proximal Convoluted Tubule (PCT).",
          "All glucose and amino acids must be reabsorbed back into the blood.",
          "Sodium ions are actively transported out of the PCT epithelial cells into the blood. This lowers the Na+ concentration inside the cell.",
          "Na+ diffuses from the lumen of the PCT into the epithelial cell down its concentration gradient, pulling glucose/amino acids with it via co-transport proteins.",
          "Glucose/amino acids then diffuse into the blood via facilitated diffusion.",
          "This lowers the water potential of the blood, causing some water to be reabsorbed via osmosis."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-ultra", prompt: "How is high hydrostatic pressure generated in the glomerulus?" },
      { id: "cue-2", blockId: "list-ultra", prompt: "Why are red blood cells not found in the glomerular filtrate?" },
      { id: "cue-3", blockId: "list-pct", prompt: "How is glucose reabsorbed from the PCT into the epithelial cells?" }
    ],
    summaryText: "High hydrostatic pressure in the glomerulus forces small molecules through the basement membrane into the Bowman's capsule (ultrafiltration). In the PCT, all glucose and amino acids are selectively reabsorbed by Na+ co-transport.",
    ready: true
  },
  evidence: []
};