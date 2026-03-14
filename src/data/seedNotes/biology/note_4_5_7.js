export const note_biology_4_5_7 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand how to carry out chromatography to separate photosynthetic pigments." }
    },
    {
      id: "h-chromatography-method",
      type: "heading",
      data: { text: "Method for Pigment Chromatography", level: 2 }
    },
    {
      id: "list-chrom-method",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Grind leaves with a small amount of extraction solvent (e.g., propanone or acetone) and sand using a mortar and pestle to break open cells and release pigments.",
          "Draw a pencil line near the bottom of a TLC (Thin Layer Chromatography) plate. Pencil is used because ink would dissolve in the solvent.",
          "Use a capillary tube to spot the pigment extract onto the center of the line. Build up a concentrated spot by applying, letting it dry, and reapplying.",
          "Place the TLC plate into a beaker containing a small volume of solvent. The solvent level must be below the pencil line so the pigments do not wash away.",
          "Cover the beaker with a watch glass to prevent the solvent from evaporating and to saturate the atmosphere.",
          "Remove the plate when the solvent front is near the top. Immediately mark the solvent front with a pencil before it evaporates.",
          "Measure the distance from the origin to the center of each pigment spot, and the distance to the solvent front to calculate Rf values."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-chrom-method", prompt: "Why must the origin line be drawn in pencil instead of pen?" },
      { id: "cue-2", blockId: "list-chrom-method", prompt: "Why must the solvent level be below the origin line?" }
    ],
    summaryText: "Pigments are extracted using a solvent, spotted onto a TLC plate on a pencil line, runs in a covered beaker with solvent below the line, and Rf values are calculated.",
    ready: true
  },
  evidence: []
};