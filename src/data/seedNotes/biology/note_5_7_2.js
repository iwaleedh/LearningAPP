export const note_biology_5_7_2 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the steps of the Link Reaction and its products." }
    },
    {
      id: "h-link",
      type: "heading",
      data: { text: "The Link Reaction", level: 2 }
    },
    {
      id: "p-link",
      type: "paragraph",
      data: { text: "If oxygen is available, the pyruvate produced in glycolysis is actively transported from the cytoplasm into the mitochondrial matrix to undergo the link reaction." }
    },
    {
      id: "list-steps",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Decarboxylation: Pyruvate (3C) loses a carbon dioxide molecule.",
          "Oxidation: The molecule is oxidized (loses hydrogen), which reduces NAD to NADH, forming a 2-carbon molecule called acetate.",
          "Coenzyme A: Acetate immediately combines with Coenzyme A (CoA) to form Acetyl Coenzyme A (Acetyl CoA)."
        ]
      }
    },
    {
      id: "callout-yield",
      type: "callout",
      data: { style: "worked", title: "Net Yield per Glucose", text: "Because 1 glucose makes 2 pyruvate, the link reaction happens twice per glucose. Yield: 2 Acetyl CoA, 2 CO2, 2 Reduced NAD. (NO ATP is formed here)." }
    },
{ 'id': 'callout-examiner-089acf33', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-link", prompt: "Where does the link reaction take place?" },
      { id: "cue-2", blockId: "list-steps", prompt: "What are the two main chemical processes that convert pyruvate to acetate?" },
      { id: "cue-3", blockId: "callout-yield", prompt: "How much ATP is produced during the link reaction?" }
    ],
    summaryText: "The link reaction in the mitochondrial matrix links glycolysis to the Krebs cycle. Pyruvate (3C) is decarboxylated and oxidized to acetate (2C), reducing NAD. Acetate binds CoA to form Acetyl CoA. No ATP is made.",
    ready: true
  },
  evidence: []
};