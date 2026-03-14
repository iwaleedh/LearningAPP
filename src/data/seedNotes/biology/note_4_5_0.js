export const note_biology_4_5_0 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the overall equation and overview of photosynthesis, including the structure of chloroplasts." }
    },
    {
      id: "h-photo",
      type: "heading",
      data: { text: "Photosynthesis Overview", level: 2 }
    },
    {
      id: "p-photo",
      type: "paragraph",
      data: { text: "Photosynthesis is the process by which autotrophs use light energy to synthesise organic molecules (like glucose) from inorganic molecules (carbon dioxide and water). It transfers light energy into chemical energy." }
    },
    {
      id: "callout-eq",
      type: "callout",
      data: { style: "key", title: "Overall Equation", text: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂" }
    },
    {
      id: "h-chloroplast",
      type: "heading",
      data: { text: "Structure of Chloroplasts", level: 3 }
    },
    {
      id: "list-chloro",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Double membrane: Envelope controlling what enters and leaves.",
          "Thylakoids: Flattened fluid-filled sacs containing photosynthetic pigments (chlorophyll). Site of light-dependent reactions.",
          "Grana: Stacks of thylakoids, providing a large surface area for light absorption.",
          "Stroma: Fluid surrounding thylakoids containing enzymes (e.g., RuBisCO). Site of light-independent reactions.",
          "Starch grains & lipid droplets: Temporary stores of the products of photosynthesis.",
          "Circular DNA and 70S ribosomes: For synthesis of chloroplast proteins."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "callout-eq", prompt: "What is the overall balanced equation for photosynthesis?" },
      { id: "cue-2", blockId: "list-chloro", prompt: "Where in the chloroplast do the light-dependent and light-independent reactions occur?" }
    ],
    summaryText: "Photosynthesis converts light energy to chemical energy (glucose). Light-dependent reactions occur in the thylakoid membranes, and light-independent reactions occur in the stroma of chloroplasts.",
    ready: true
  },
  evidence: []
};