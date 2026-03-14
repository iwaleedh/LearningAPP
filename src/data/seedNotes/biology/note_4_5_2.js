export const note_biology_4_5_2 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the Calvin cycle (light-independent reactions) and how carbon dioxide is converted into organic substances." }
    },
    {
      id: "h-calvin",
      type: "heading",
      data: { text: "The Calvin Cycle (Light-Independent Reactions)", level: 2 }
    },
    {
      id: "p-calvin",
      type: "paragraph",
      data: { text: "Occurs in the stroma and uses the products of the light-dependent reactions (ATP and reduced NADP) to fix carbon dioxide." }
    },
    {
      id: "list-calvin-steps",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Carbon Fixation: CO₂ diffuses into the stroma and combines with a 5-carbon compound, Ribulose Bisphosphate (RuBP). This is catalysed by the enzyme RuBisCO.",
          "Formation of GP: This creates an unstable 6-carbon intermediate which immediately breaks down into two molecules of the 3-carbon compound Glycerate 3-Phosphate (GP).",
          "Reduction of GP: The two molecules of GP are reduced to two molecules of Glyceraldehyde 3-Phosphate (GALP). This step requires ATP (energy) and reduced NADP (hydrogen) from the LDR.",
          "Regeneration: 5 out of 6 GALP molecules are used to regenerate RuBP (using more ATP). 1 out of 6 GALP molecules is used to make useful organic substances (like glucose, cellulose, lipids, amino acids)."
        ]
      }
    },
    {
      id: "callout-calvin-yield",
      type: "callout",
      data: { style: "worked", title: "Making one hexose sugar", text: "Because 1 CO₂ generates a net gain of 1 carbon atom, it takes 6 turns of the Calvin cycle (fixing 6 CO₂ molecules) to produce 2 extra GALP molecules, which join to form 1 molecule of glucose." }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-calvin-steps", prompt: "What enzyme catalyses the fixation of CO₂?" },
      { id: "cue-2", blockId: "list-calvin-steps", prompt: "How is GP converted to GALP, and what is required from the LDR?" },
      { id: "cue-3", blockId: "callout-calvin-yield", prompt: "How many turns of the Calvin cycle are required to produce one molecule of glucose?" }
    ],
    summaryText: "CO₂ combines with RuBP (catalysed by RuBisCO) to form GP. GP is reduced to GALP using ATP and NADPH. Most GALP regenerates RuBP, while some makes glucose and other organics.",
    ready: true
  },
  evidence: []
};