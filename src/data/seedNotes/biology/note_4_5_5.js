export const note_biology_4_5_5 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the difference between gross primary productivity (GPP) and net primary productivity (NPP) in relation to photosynthesis." }
    },
    {
      id: "h-prod",
      type: "heading",
      data: { text: "GPP and NPP", level: 2 }
    },
    {
      id: "p-prod",
      type: "paragraph",
      data: { text: "Energy enters food webs through producers (plants) via photosynthesis. However, plants do not convert 100% of light energy into organic matter." }
    },
    {
      id: "list-terms",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Gross Primary Productivity (GPP): The total rate at which plants convert light energy into chemical energy in an ecosystem. The total amount of glucose made by photosynthesis.",
          "Respiration (R): A significant portion of the chemical energy (glucose) made by GPP is used in plant respiration to power cellular work.",
          "Net Primary Productivity (NPP): The remaining chemical energy after plant respiration is subtracted. This is the energy available for growth and reproduction, and the amount available to the next trophic level."
        ]
      }
    },
    {
      id: "callout-npp",
      type: "callout",
      data: { style: "key", title: "Equation", text: "NPP = GPP - R" }
    },
    {
      id: "p-loss",
      type: "paragraph",
      data: { text: "Why isn't GPP 100% of incoming light? Not all wavelengths are absorbed (some are green/reflected), light misses chloroplasts, or passes through the leaf. Limiting factors (CO₂) may restrict the maximum rate." }
    },
{ 'id': 'callout-examiner-b4a2471a', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-terms", prompt: "Define Gross Primary Productivity (GPP) and Net Primary Productivity (NPP)." },
      { id: "cue-2", blockId: "callout-npp", prompt: "What is the equation linking NPP, GPP, and R?" },
      { id: "cue-3", blockId: "p-loss", prompt: "Give three reasons why plants only convert a small percentage of incoming light energy into GPP." }
    ],
    summaryText: "GPP is the total chemical energy produced by photosynthesis. NPP is GPP minus respiratory losses (NPP=GPP-R). Energy isn't perfectly captured due to reflected light, missed chloroplasts, and limiting factors.",
    ready: true
  },
  evidence: []
};