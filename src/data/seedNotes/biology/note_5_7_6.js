export const note_biology_5_7_6 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the Respiratory Quotient (RQ), how to calculate it, and interpret values for different substrates." }
    },
    {
      id: "h-rq",
      type: "heading",
      data: { text: "Respiratory Quotient (RQ)", level: 2 }
    },
    {
      id: "p-def",
      type: "paragraph",
      data: { text: "The Respiratory Quotient indicates the type of respiratory substrate being metabolized. To fully oxidize different molecules (carbohydrates, lipids, proteins), different amounts of oxygen are required." }
    },
    {
      id: "callout-formula",
      type: "callout",
      data: { style: "key", title: "RQ Formula", text: "RQ = Volume of CO2 produced / Volume of O2 consumed" }
    },
    {
      id: "h-values",
      type: "heading",
      data: { text: "Typical RQ Values", level: 3 }
    },
    {
      id: "list-values",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Carbohydrates (like glucose): RQ = 1.0. The formula C6H12O6 + 6O2 → 6CO2 + 6H2O gives exactly 6/6 = 1.",
          "Proteins: RQ is roughly 0.9.",
          "Lipids: RQ is roughly 0.7. Lipids have a very high proportion of carbon-hydrogen bonds compared to oxygen, so they require much more oxygen for complete oxidation.",
          "Mixed diet: Most organisms respire a mix, giving an average resting RQ of around 0.8 to 0.85."
        ]
      }
    },
    {
      id: "p-anaerobic",
      type: "paragraph",
      data: { text: "If an RQ value is greater than 1, it means the organism is struggling for oxygen and is starting to undergo anaerobic respiration (producing more CO2 than the O2 it consumes)." }
    },
{ 'id': 'callout-examiner-30095a51', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } },
{ 'id': 'callout-examiner-1d9add6b', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "callout-formula", prompt: "State the formula for Respiratory Quotient." },
      { id: "cue-2", blockId: "list-values", prompt: "What is the typical RQ for a lipid and why is it so low?" },
      { id: "cue-3", blockId: "p-anaerobic", prompt: "What does an RQ value of 1.2 suggest?" }
    ],
    summaryText: "RQ = CO2 produced / O2 consumed. Carbohydrates = 1.0, Proteins ~0.9, Lipids ~0.7 (require much more O2 due to many C-H bonds). An RQ > 1 implies anaerobic respiration is occurring.",
    ready: true
  },
  evidence: []
};