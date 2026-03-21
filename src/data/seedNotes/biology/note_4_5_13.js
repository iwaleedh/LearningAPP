export const note_biology_4_5_13 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand energy transfer between trophic levels and how to calculate trophic efficiency." }
    },
    {
      id: "h-energy-transfer",
      type: "heading",
      data: { text: "Energy Transfer and Losses", level: 2 }
    },
    {
      id: "p-transfer",
      type: "paragraph",
      data: { text: "Energy is transferred through ecosystems via feeding. However, across each trophic level, around 90% of the energy is lost, meaning only about 10% is passed to the next level." }
    },
    {
      id: "list-losses",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Lost as heat: Energy released during aerobic respiration is lost as heat to the environment.",
          "Excretion and Egestion: Energy lost in urine and faeces (undigested material like cellulose/bones).",
          "Uneaten parts: Not all parts of the organism are consumed by the predator (e.g., roots, fur, teeth).",
          "Metabolic processes: Energy gets used for movement, active transport, and regulating body temperature (in endotherms), eventually lost as heat."
        ]
      }
    },
    {
      id: "h-efficiency",
      type: "heading",
      data: { text: "Calculating Efficiency", level: 3 }
    },
    {
      id: "callout-efficiency",
      type: "callout",
      data: { style: "worked", title: "Trophic Efficiency Formula", text: "Efficiency (%) = (Energy available after transfer / Energy available before transfer) × 100" }
    },
    {
      id: "p-chain-length",
      type: "paragraph",
      data: { text: "Because energy is lost so rapidly at each stage, most food chains are restricted to 4 or 5 trophic levels, as there is insufficient energy to support a higher trophic level." }
    },
{ 'id': 'callout-examiner-04c8cde2', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-losses", prompt: "State three ways energy is lost between consumer trophic levels." },
      { id: "cue-2", blockId: "p-chain-length", prompt: "Why are food chains rarely longer than 4 or 5 trophic levels?" },
      { id: "cue-3", blockId: "callout-efficiency", prompt: "How do you calculate trophic efficiency?" }
    ],
    summaryText: "Around 90% of energy is lost at each trophic level via heat (from respiration), excretion, faeces, and uneaten parts. This limits food chain length. Efficiency is (energy after / energy before) × 100.",
    ready: true
  },
  evidence: []
};