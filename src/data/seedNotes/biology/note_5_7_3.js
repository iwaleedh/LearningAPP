export const note_biology_5_7_3 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the main reactions of the Krebs cycle and state its products." }
    },
    {
      id: "h-krebs",
      type: "heading",
      data: { text: "The Krebs Cycle", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "The Krebs cycle is a series of oxidation-reduction reactions set in the mitochondrial matrix." }
    },
    {
      id: "list-cycle",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Acetyl CoA (2C) enters the cycle and releases Coenzyme A (which goes back to the link reaction).",
          "The 2C acetate combines with a 4-carbon compound (oxaloacetate) to form a 6-carbon compound (citrate).",
          "The 6C compound is decarboxylated (loses CO2) and oxidized (NAD is reduced to NADH) to form a 5C compound.",
          "The 5C compound undergoes further decarboxylation and oxidation, producing 1 ATP via substrate-level phosphorylation, 2 more NADH, and 1 reduced FAD (FADH2).",
          "The original 4C compound is regenerated to continue the cycle."
        ]
      }
    },
    {
      id: "callout-yield",
      type: "callout",
      data: { style: "key", title: "Yield per cycle vs per glucose", text: "One cycle (1 Acetyl CoA): 3 NADH, 1 FADH2, 1 ATP, 2 CO2. Per glucose (2 cycles): 6 NADH, 2 FADH2, 2 ATP, 4 CO2." }
    },
{ 'id': 'callout-examiner-5293ac42', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } },
{ 'id': 'callout-examiner-65beb10c', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-cycle", prompt: "Which two molecules combine at the start of the Krebs cycle to form a 6-carbon compound?" },
      { id: "cue-2", blockId: "callout-yield", prompt: "How many ATP molecules are produced directly in the Krebs cycle per glucose molecule?" },
      { id: "cue-3", blockId: "callout-yield", prompt: "What happens to the reduced NAD and FAD produced here?" }
    ],
    summaryText: "In the Krebs cycle, Acetyl CoA drops acetate (2C) which joins oxaloacetate (4C) to make a 6C compound. A series of redox and decarboxylation reactions regenerate the 4C compound, yielding 3 NADH, 1 FADH2, 1 ATP and 2 CO2 per turn.",
    ready: true
  },
  evidence: []
};