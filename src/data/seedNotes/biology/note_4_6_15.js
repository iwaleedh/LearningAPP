export const note_biology_4_6_15 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand how to determine the time of death of a mammal by evaluating body temperature, rigor mortis, decomposition, and forensic entomology." }
    },
    {
      id: "h-tod",
      type: "heading",
      data: { text: "Estimating Time of Death", level: 2 }
    },
    {
      id: "list-factors",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Body Temperature (Algor mortis): Mammals maintain a 37°C internal temperature. After death, metabolic reactions stop producing heat, and the body cools to the ambient environmental temperature following a predictable sigmoid cooling curve (usually complete within 24 hours).",
          "Muscle Contraction (Rigor mortis): After death, ATP production stops. Calcium ions leak into muscle fibres, causing myosin and actin to bind irreversibly. The muscles stiffen. This begins ~3 hours after death, peaks at 12 hours, and fades around 36 hours as enzymes break down the muscle proteins.",
          "Extent of Decomposition: Hours after death, cells begin to break themselves down (autolysis). Bacteria from the gut invade the tissues, producing gases (putrefaction) leading to bloating and skin discoloration (greenish hue).",
          "Forensic Entomology: The study of insects on the corpse. Different species colonize the body at different stages (succession). Blowflies arrive first to lay eggs. By analyzing the life-cycle stage of the maggots present, and knowing the ambient temperature's effect on their growth rate, an accurate minimum time since death can be estimated."
        ]
      }
    },
    {
      id: "callout-combine",
      type: "callout",
      data: { style: "warning", title: "Combining Evidence", text: "No single method provides an exact time. Forensic scientists must combine evidence from cooling curves, stiffness, insect life cycles, and take ambient conditions (e.g., clothing, body size, outside temperature) into account." }
    },
{ 'id': 'callout-examiner-45af569a', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Ambient Conditions', 'text': 'In data interpretation questions, always consider factors that affect cooling or insect development—such as wind, clothing, body mass, or immersion in water.' } },
{ 'id': 'callout-examiner-b9731491', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Rigor Mortis', 'text': 'Remember that rigor mortis is temporary. Stiffness passes eventually due to muscle breakdown by enzymes. Its presence or absence helps narrow down the time of death window.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-factors", prompt: "What causes rigor mortis?" },
      { id: "cue-2", blockId: "list-factors", prompt: "Why does algor mortis eventually stop?" },
      { id: "cue-3", blockId: "list-factors", prompt: "Explain how forensic entomology is used to estimate time of death." }
    ],
    summaryText: "Time of death is estimated combining multiple physical metrics. Algor mortis (cooling to ambient temp), Rigor mortis (stiffening due to ATP lack), Decomposition (autolysis and putrefaction), and Forensic entomology (analyzing maggot life cycles and insect succession).",
    ready: true
  },
  evidence: []
};