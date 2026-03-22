export const note_biology_5_8_0 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the structure and function of sensory, relay and motor neurones." }
    },
    {
      id: "h-neurones",
      type: "heading",
      data: { text: "Neurone Anatomy", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Neurones are highly specialized cells that transmit electrical impulses rapidly across the body. They all share common features: a cell body containing the nucleus, highly branched dendrites that receive signals, and a long axon that transmits impulses away from the cell body." }
    },
    {
      id: "list-types",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Sensory Neurone: Carries impulses from receptors to the CNS. Typically has a very long dendron carrying impulses towards the cell body (which is located off to the side in a dorsal root ganglion) and a short axon.",
          "Relay (Intermediate) Neurone: Found entirely within the CNS. Highly branching dendrites and numerous axon terminals to connect sensory and motor neurones.",
          "Motor Neurone: Carries impulses from the CNS to an effector (muscle or gland). Has a large cell body at one end with short dendrites, and a very long axon terminating at neuromuscular junctions."
        ]
      }
    },
{ 'id': 'callout-examiner-86a081e2', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Common Mistake', 'text': 'Students often draw sensory neurones with the cell body at the end. Remember that the cell body of a sensory neurone is located along a branch off the main axon/dendron, typically in a dorsal root ganglion.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-types", prompt: "Which type of neurone connects receptors to the CNS?" },
      { id: "cue-2", blockId: "list-types", prompt: "Where is the cell body of a sensory neurone typically located?" },
      { id: "cue-3", blockId: "list-types", prompt: "What makes a relay neurone structurally distinct from a motor neurone?" }
    ],
    summaryText: "Sensory neurones connect receptors to the CNS (long dendron, off-center cell body). Relay neurones process signals inside the CNS. Motor neurones connect the CNS to effectors (long axon, cell body at dendrite end).",
    ready: true
  },
  evidence: []
};