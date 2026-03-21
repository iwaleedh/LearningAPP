export const note_biology_4_5_9 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Differentiate between cyclic and non-cyclic photophosphorylation in the light-dependent reactions." }
    },
    {
      id: "h-non-cyclic",
      type: "heading",
      data: { text: "Non-Cyclic Photophosphorylation", level: 2 }
    },
    {
      id: "p-non-cyclic",
      type: "paragraph",
      data: { text: "The primary pathway of the light-dependent reactions." }
    },
    {
      id: "list-non-cyclic",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Involves both Photosystem I (PSI) and Photosystem II (PSII).",
          "Electrons follow a linear path: from water (photolysis) → PSII → Electron Transport Chain → PSI → NADP.",
          "Products: ATP, reduced NADP (NADPH), and Oxygen (O₂ as a waste product of photolysis)."
        ]
      }
    },
    {
      id: "h-cyclic",
      type: "heading",
      data: { text: "Cyclic Photophosphorylation", level: 2 }
    },
    {
      id: "p-cyclic",
      type: "paragraph",
      data: { text: "An alternative pathway that produces only ATP, usually when the cell needs extra ATP relative to NADPH." }
    },
    {
      id: "list-cyclic",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Involves only Photosystem I (PSI).",
          "Electrons from PSI are excited, pass down the electron transport chain (generating a proton gradient for ATP synthesis), but instead of reducing NADP, they return to PSI to be excited again.",
          "Products: ATP only.",
          "No photolysis of water occurs, so no oxygen is produced, and no reduced NADP is generated."
        ]
      }
    },
{ 'id': 'callout-examiner-9c8da0fb', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-non-cyclic", prompt: "Which photosystems are involved in non-cyclic photophosphorylation?" },
      { id: "cue-2", blockId: "list-cyclic", prompt: "What are the products of cyclic vs non-cyclic photophosphorylation?" },
      { id: "cue-3", blockId: "list-cyclic", prompt: "Why is no oxygen produced during cyclic photophosphorylation?" }
    ],
    summaryText: "Non-cyclic photophosphorylation uses PSI & PSII, involves photolysis, and produces ATP, NADPH, and O₂. Cyclic involves only PSI, electrons recycle, and produces only ATP (no photolysis, no NADPH).",
    ready: true
  },
  evidence: []
};