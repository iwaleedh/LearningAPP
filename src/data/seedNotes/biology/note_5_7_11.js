export const note_biology_5_7_11 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand cardiac output and how heart rate is controlled by the cardiovascular control centre and the SA node." }
    },
    {
      id: "h-cardiac",
      type: "heading",
      data: { text: "Cardiac Output", level: 2 }
    },
    {
      id: "callout-co",
      type: "callout",
      data: { style: "key", title: "Equation", text: "Cardiac Output (cm³/min) = Heart Rate (bpm) × Stroke Volume (cm³)" }
    },
    {
      id: "p-myogenic",
      type: "paragraph",
      data: { text: "The heart muscle is myogenic; it initiates its own contractions. The Sinoatrial Node (SAN) in the right atrium acts as the natural pacemaker." }
    },
    {
      id: "h-medulla",
      type: "heading",
      data: { text: "Autonomic Nervous Control", level: 3 }
    },
    {
      id: "p-medulla",
      type: "paragraph",
      data: { text: "During exercise, cells respire faster, releasing more CO2, which lowers blood pH. Chemoreceptors in the aorta and carotid arteries detect this." }
    },
    {
      id: "list-control",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Chemoreceptors send sensory nerve impulses to the Cardiovascular Control Centre (CVCC) in the medulla oblongata.",
          "The CVCC increases the frequency of impulses along the sympathetic nervous system to the SAN.",
          "Sympathetic nerves release noradrenaline at the SAN, which causes the SAN to fire action potentials more frequently.",
          "Heart rate increases, increasing cardiac output, which flushes excess CO2 to the lungs faster."
        ]
      }
    },
    {
      id: "p-parasym",
      type: "paragraph",
      data: { text: "When exercise stops, pH rises back to normal. The CVCC sends impulses down the parasympathetic nervous system (vagus nerve), which releases acetylcholine at the SAN, slowing the heart rate down." }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "callout-co", prompt: "Give the formula for Cardiac Output." },
      { id: "cue-2", blockId: "p-medulla", prompt: "What specifically do blood chemoreceptors detect during exercise?" },
      { id: "cue-3", blockId: "list-control", prompt: "Which branch of the nervous system is responsible for accelerating the heart rate?" }
    ],
    summaryText: "Cardiac Output = Heart Rate x Stroke Volume. Increased CO2 during exercise lowers pH. Chemoreceptors signal the Medulla (CVCC). Sympathetic nerves release noradrenaline at the SAN, increasing heart rate. Parasympathetic nerves release acetylcholine to slow it.",
    ready: true
  },
  evidence: []
};