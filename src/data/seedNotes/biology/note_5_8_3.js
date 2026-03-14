export const note_biology_5_8_3 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Describe the mechanism of synaptic transmission across a chemical synapse." }
    },
    {
      id: "h-synapse",
      type: "heading",
      data: { text: "Synaptic Transmission", level: 2 }
    },
    {
      id: "list-steps",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "An action potential arrives at the synaptic knob of the pre-synaptic neurone.",
          "The depolarisation causes voltage-gated Calcium (Ca2+) channels to open.",
          "Calcium ions diffuse rapidly into the pre-synaptic knob.",
          "This influx of Ca2+ causes secretory vesicles containing neurotransmitter (e.g. acetylcholine) to fuse with the pre-synaptic membrane (exocytosis).",
          "The neurotransmitter diffuses across the narrow synaptic cleft.",
          "Neurotransmitter binds to specific complementary receptors on the post-synaptic membrane.",
          "This binding causes ligand-gated Sodium (Na+) channels to open, leading to depolarisation of the post-synaptic neurone (generating an Excitatory Post-Synaptic Potential, or EPSP).",
          "The neurotransmitter is broken down by enzymes (e.g., acetylcholinesterase) to prevent continuous firing, and the products are reabsorbed."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-steps", prompt: "What specific ion influx triggers the fusion of neurotransmitter vesicles?" },
      { id: "cue-2", blockId: "list-steps", prompt: "By what mechanism does neurotransmitter cross the synaptic cleft?" },
      { id: "cue-3", blockId: "list-steps", prompt: "Why must acetylcholinesterase break down acetylcholine in the cleft?" }
    ],
    summaryText: "Action potentials trigger Ca2+ influx at the pre-synaptic knob, causing exocytosis of neurotransmitter vesicles. The neurotransmitter diffuses across the cleft, binds to receptors, and opens Na+ channels to trigger a post-synaptic action potential.",
    ready: true
  },
  evidence: []
};