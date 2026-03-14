export const note_biology_6_6A_0 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Review the key IA2 practical methods expected for Unit 6 (from Units 4 and 5)." }
    },
    {
      id: "h-methods",
      type: "heading",
      data: { text: "IA2 Practical Methods", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Unit 6 questions will test your understanding of the 9 core practicals from Units 4 and 5." }
    },
    {
      id: "list-practicals",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "CP 10: Succession. Using quadrats and transects to investigate plant distribution changes.",
          "CP 11: Hill Reaction. Using chloroplasts and DCPIP to measure the rate of light-dependent photosynthesis.",
          "CP 12: Temperature & Enzyme. Effect of temp on hatching/enzymes.",
          "CP 13: Brine Shrimp / Daphnia. Effect of temperature on heart rate (Q10).",
          "CP 14: Gel Electrophoresis. Separating DNA fragments (theoretical knowledge often tested).",
          "CP 15: Antibiotics on Bacteria. Agar diffusion/zone of inhibition.",
          "CP 16: Respirometers. Measuring the rate of respiration in yeast or woodlice.",
          "CP 17: Spirometers. Measuring tidal volume and minute ventilation.",
          "CP 18: Snail Habituation. Measuring withdrawal response times."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-practicals", prompt: "Which practical involves measuring zones of inhibition?" },
      { id: "cue-2", blockId: "list-practicals", prompt: "What redox indicator is used to substitute for NADP in the Hill Reaction (CP11)?" },
      { id: "cue-3", blockId: "list-practicals", prompt: "Which piece of equipment is used to calculate Minute Ventilation in CP17?" }
    ],
    summaryText: "Unit 6 reviews A2 practicals including Ecology (quadrats), Photosynthesis (DCPIP), Microbiology (agar zones), Respiration (respirometers), Zoology (Daphnia heart rate, snail habituation) and Physiology (spirometers).",
    ready: true
  },
  evidence: []
};