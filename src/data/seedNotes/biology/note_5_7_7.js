export const note_biology_5_7_7 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand how to safely use a respirometer to measure the rate of respiration in small organisms." }
    },
    {
      id: "h-respirometer",
      type: "heading",
      data: { text: "The Respirometer", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "A respirometer measures the rate of oxygen consumption by a living organism (like woodlice or germinating seeds) over a set time." }
    },
    {
      id: "list-setup",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Setup: Place the organism in a sealed test tube connected via a U-tube capillary (containing coloured fluid/manometer) to a control tube containing glass beads of the same mass.",
          "Absorbing CO2: Both tubes contain a basic chemical (like soda lime or potassium hydroxide) to fully absorb any CO2 produced by respiration.",
          "Mechanism: As the organism respires, it consumes O2 gas. Because any exhaled CO2 is absorbed by the soda lime, total gas volume inside the experimental tube decreases.",
          "Measurement: This drops the gas pressure in the tube, sucking the coloured fluid in the U-tube towards the organism. The distance the meniscus moves is recorded."
        ]
      }
    },
    {
      id: "callout-safety",
      type: "callout",
      data: { style: "warning", title: "Key Controls & Safety", text: "Soda lime is corrosive, so a wire mesh must separate it from the animal. Temperature must be kept perfectly constant using a water bath, otherwise expanding gases will cause inaccurate manometer readings." }
    },
{ 'id': 'callout-examiner-d47b8ac5', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-setup", prompt: "Why is soda lime placed inside a respirometer?" },
      { id: "cue-2", blockId: "list-setup", prompt: "Why does the fluid meniscus move towards the experimental tube containing the organism?" },
      { id: "cue-3", blockId: "callout-safety", prompt: "Why must a respirometer be kept in a water bath?" }
    ],
    summaryText: "A respirometer measures O2 consumption. As O2 is breathed in and exhaled CO2 is chemically absorbed by soda lime, air pressure drops, moving a capillary meniscus. Temperature is tightly controlled via water baths.",
    ready: true
  },
  evidence: []
};