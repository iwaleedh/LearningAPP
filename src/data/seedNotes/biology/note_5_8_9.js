export const note_biology_5_8_9 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Explain how phytochromes and auxins control plant development and tropisms." }
    },
    {
      id: "h-phytochrome",
      type: "heading",
      data: { text: "Phytochromes and Photomorphogenesis", level: 2 }
    },
    {
      id: "p-phyto",
      type: "paragraph",
      data: { text: "Plants detect light using photoreceptor proteins called phytochromes, which exist in two reversible isomeric forms." }
    },
    {
      id: "list-phyto",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Pr (Phytochrome Red): Absorbs red light (660nm). It is inactive.",
          "Pfr (Phytochrome Far-Red): Absorbs far-red light (730nm). It is the biologically active form.",
          "Daylight: Sunlight is rich in red light. Pr rapidly converts into active Pfr. Pfr accumulates during the day.",
          "Nighttime: Pfr slowly converts back into Pr in darkness.",
          "Function: The ratio of Pfr/Pr controls germination, flowering, and greening. For example, active Pfr acts as a transcription factor, binding to DNA in the dark to stimulate genes for flowering in long-day plants."
        ]
      }
    },
    {
      id: "h-auxin",
      type: "heading",
      data: { text: "Auxin and Phototropism", level: 2 }
    },
    {
      id: "list-auxin",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "IAA (Indoleacetic Acid) is synthesized in the actively growing shoot tip (meristem).",
          "If light hits the shoot unidirectionally, auxin is actively transported to the shaded side of the shoot.",
          "High auxin concentration on the shaded side stimulates cells there to elongate faster than the illuminated side.",
          "This uneven growth causes the shoot to bend towards the light (positive phototropism)."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-phyto", prompt: "Which isomeric form of phytochrome is biologically active?" },
      { id: "cue-2", blockId: "list-phyto", prompt: "What happens to the levels of Pfr during a long, uninterrupted night?" },
      { id: "cue-3", blockId: "list-auxin", prompt: "How does auxin cause a shoot to bend towards a unilateral light source?" }
    ],
    summaryText: "Phytochromes detect light. Pfr is the active form built up during daylight, regulating gene expression for flowering and germination. Auxin (IAA) mediates phototropism by accumulating on the shaded side of a stem, accelerating cell elongation there.",
    ready: true
  },
  evidence: []
};