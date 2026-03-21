export const note_biology_5_7_20 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Core Practical 16: Investigate the rate of respiration practically using a respirometer." }
    },
    {
      id: "h-cp16",
      type: "heading",
      data: { text: "Core Practical 16: Respirometer Practice", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "An extension of the respirometer theory, this practical focuses on precise data collection to calculate actual O2 uptake volumes and RQ." }
    },
    {
      id: "list-calc",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Volume Calculation: Measure the distance (d) the fluid moves in a set time (t). Find the radius (r) of the capillary bore. The volume of oxygen consumed is πr² × d.",
          "Rate Calculation: Rate of O2 consumption = Volume / Time (cm³/min). This can be standardized per gram of organism weight.",
          "Calculating RQ without Soda Lime: If you run a second identical experiment but replace the soda lime with glass beads, no CO2 is absorbed. Any change in volume is strictly due to the difference between O2 used and CO2 produced.",
          "By comparing the movement in the two tubes, you can determine exactly how much CO2 was exhaled, allowing the calculation of RQ."
        ]
      }
    },
    {
      id: "callout-tips",
      type: "callout",
      data: { style: "warning", title: "Common Errors", text: "Ensure the syringe/pipettes are perfectly airtight using petroleum jelly on seals. Leave the three-way tap open to the air for 5 minutes during temp equilibration to let pressure adjust before closing the system." }
    },
{ 'id': 'callout-examiner-407a8b16', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-calc", prompt: "What is the mathematical formula used to calculate the volume of O2 consumed?" },
      { id: "cue-2", blockId: "list-calc", prompt: "How can a respirometer be adapted to calculate RQ?" },
      { id: "cue-3", blockId: "callout-tips", prompt: "Why must the three-way tap be left open before taking measurements?" }
    ],
    summaryText: "In CP16, volume of O2 consumed = πr²d. Removing the soda lime reveals the precise volume of CO2 exhaled, allowing for an RQ calculation. Strict airtight seals and temperature equilibration are mandatory to prevent pressure errors.",
    ready: true
  },
  evidence: []
};