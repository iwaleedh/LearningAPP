export const note_biology_5_8_1 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Explain how resting and action potentials are generated and propagated." }
    },
    {
      id: "h-resting",
      type: "heading",
      data: { text: "The Resting Potential (-70mV)", level: 2 }
    },
    {
      id: "list-resting",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Sodium-Potassium pumps actively transport 3 Na+ out of the axon for every 2 K+ pumped in, using ATP.",
          "The axon membrane is highly permeable to K+ (K+ leak channels are open), allowing K+ to diffuse back out down its concentration gradient.",
          "The membrane is impermeable to Na+.",
          "Consequently, the outside of the membrane becomes positively charged relative to the negatively charged inside (-70mV)."
        ]
      }
    },
    {
      id: "h-action",
      type: "heading",
      data: { text: "The Action Potential", level: 2 }
    },
    {
      id: "list-action",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Depolarisation: A stimulus causes voltage-gated Na+ channels to open. Na+ floods into the axon down the electrochemical gradient, making the inside positive (+40mV).",
          "Repolarisation: Na+ channels close and voltage-gated K+ channels open. K+ floods out of the axon, restoring internal negativity.",
          "Hyperpolarisation: K+ channels are slow to close, causing an 'overshoot' (membrane drops below -70mV). During this refractory period, another action potential cannot be generated, ensuring unidirectional flow.",
          "Propagation: The influx of Na+ sets up localized electrical circuits that depolarise the adjacent section of the membrane, triggering the next action potential like falling dominoes."
        ]
      }
    },
{ 'id': 'callout-examiner-808044ae', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': 'When describing the resting potential, clearly state the ratio of ions actively transported: 3 Na⁺ out for every 2 K⁺ moved in, establishing the electrochemical gradient.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-resting", prompt: "What is the ratio of Na+ to K+ transported by the Na+/K+ pump?" },
      { id: "cue-2", blockId: "list-action", prompt: "Which ion is responsible for the rapid depolarisation of an action potential?" },
      { id: "cue-3", blockId: "list-action", prompt: "What is the biological purpose of the refractory period?" }
    ],
    summaryText: "Resting potential (-70mV) is maintained by the Na+/K+ pump and K+ leak channels. Depolarisation (+40mV) is caused by Na+ influx. Repolarisation is caused by K+ efflux. The refractory period ensures the impulse travels in one direction.",
    ready: true
  },
  evidence: []
};