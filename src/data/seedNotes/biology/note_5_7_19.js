export const note_biology_5_7_19 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Investigate respiration in yeast using redox indicators (TTC/Methylene Blue)." }
    },
    {
      id: "h-cp15",
      type: "heading",
      data: { text: "Core Practical 15: Yeast Respiration", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "During respiration, dehydrogenase enzymes remove hydrogen atoms from substrates. In a lab, artificial hydrogen acceptors (redox indicators) like TTC (triphenyl tetrazolium chloride) or Methylene Blue can intercept these hydrogens." }
    },
    {
      id: "list-method",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Mix yeast suspension with a glucose solution in a boiling tube.",
          "Place the tube in a temperature-controlled water bath and allow it to equilibrate.",
          "Add a set volume of redox indicator (e.g., TTC or Methylene Blue) and immediately start a stopwatch.",
          "Methylene blue accepts hydrogens (becomes reduced) and changes color from blue to colorless. TTC turns from colorless to pink/red.",
          "Time how long it takes for the color change to complete.",
          "Rate of respiration is calculated as 1 / Time taken."
        ]
      }
    },
    {
      id: "p-vars",
      type: "paragraph",
      data: { text: "This setup can be used to test how temperature, substrate concentration, or substrate type (glucose vs maltose) affects the rate of respiration in yeast." }
    },
{ 'id': 'callout-examiner-b1fcbf79', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-intro", prompt: "What cellular particle do redox indicators like Methylene Blue intercept?" },
      { id: "cue-2", blockId: "list-method", prompt: "What color change indicates that Methylene Blue has been reduced?" },
      { id: "cue-3", blockId: "list-method", prompt: "How do you calculate the rate of respiration from this experiment?" }
    ],
    summaryText: "Core Practical 15 uses redox indicators (Methylene blue or TTC) that accept respiratory hydrogens. Time taken for the dye to change color (blue to colorless) is measured. Rate = 1/time. This tests factors like Temp or Sugar type on yeast.",
    ready: true
  },
  evidence: []
};