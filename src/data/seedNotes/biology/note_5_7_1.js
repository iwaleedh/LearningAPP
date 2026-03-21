export const note_biology_5_7_1 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the biochemical steps of glycolysis and its net products." }
    },
    {
      id: "h-glycolysis",
      type: "heading",
      data: { text: "Glycolysis", level: 2 }
    },
    {
      id: "p-glycolysis",
      type: "paragraph",
      data: { text: "Glycolysis is the first stage of respiration. It takes place in the cell cytoplasm and does not require oxygen (it is an anaerobic process used in both aerobic and anaerobic respiration)." }
    },
    {
      id: "list-steps",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Phosphorylation: Glucose (6C) is phosphorylated using 2 ATP molecules into hexose bisphosphate. This makes the molecule more reactive and traps it inside the cell.",
          "Lysis: The hexose bisphosphate splits into two molecules of triose phosphate (TP, 3C).",
          "Oxidation: Each TP is oxidized (loses hydrogen). The hydrogen is accepted by the coenzyme NAD, forming reduced NAD (NADH).",
          "ATP Formation: Substrate-level phosphorylation occurs. Phosphates transfer from the 3C compounds to ADP, producing 4 ATP total. The two 3C molecules become pyruvate."
        ]
      }
    },
    {
      id: "callout-yield",
      type: "callout",
      data: { style: "key", title: "Net Yield of Glycolysis", text: "Per glucose molecule: 2 Pyruvate, 2 net ATP (4 produced - 2 used), 2 Reduced NAD." }
    },
{ 'id': 'callout-examiner-78b9cc5d', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-glycolysis", prompt: "Where does glycolysis occur?" },
      { id: "cue-2", blockId: "list-steps", prompt: "Why is glucose phosphorylated at the start of glycolysis?" },
      { id: "cue-3", blockId: "callout-yield", prompt: "What is the net yield of ATP from glycolysis per glucose molecule?" }
    ],
    summaryText: "Glycolysis occurs in the cytoplasm. Glucose is phosphorylated using 2 ATP, split into 2 TP, then oxidized to 2 pyruvate, yielding 4 ATP (net 2) and 2 reduced NAD.",
    ready: true
  },
  evidence: []
};