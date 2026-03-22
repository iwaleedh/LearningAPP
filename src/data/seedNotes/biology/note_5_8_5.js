export const note_biology_5_8_5 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand how photoreceptor cells (rods and cones) convert light energy into neural impulses." }
    },
    {
      id: "h-eye",
      type: "heading",
      data: { text: "The Retina and Photoreceptors", level: 2 }
    },
    {
      id: "list-cells",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Rod Cells: Highly sensitive to low light intensities but cannot distinguish colour. Found mainly at the periphery of the retina. Large degree of retinal convergence (multiple rods connect to one bipolar cell), granting high sensitivity but low visual acuity.",
          "Cone Cells: Sensitive to high light intensities and responsible for colour vision (RGB variations). Found densely packed at the fovea. One-to-one connection with bipolar cells grants very high visual acuity but low sensitivity."
        ]
      }
    },
    {
      id: "h-dark",
      type: "heading",
      data: { text: "In the Dark (The Dark Current)", level: 2 }
    },
    {
      id: "list-dark",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Na+ is actively pumped out of the rod cell, but it diffuses straight back in through open, non-specific cation channels. The rod cell remains depolarised (-40mV).",
          "The depolarised membrane constantly releases an inhibitory neurotransmitter (glutamate) into the synapse with the bipolar cell.",
          "This prevents the bipolar cell from firing."
        ]
      }
    },
    {
      id: "h-light",
      type: "heading",
      data: { text: "In the Light", level: 2 }
    },
    {
      id: "list-light",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Light energy is absorbed by the pigment rhodopsin, causing it to break down into retinal and opsin (bleaching).",
          "Opsin triggers a sequence that closes the non-specific Na+ channels.",
          "Because the Na+ pump continues to work, but Na+ can no longer re-enter, the rod cell becomes hyperpolarised.",
          "The rod cell stops releasing the inhibitory neurotransmitter.",
          "The bipolar cell is freed from inhibition, depolarises, and fires an action potential down the optic nerve."
        ]
      }
    },
{ 'id': 'callout-examiner-1b4b005e', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': 'Light causes sodium ion channels to close in a rod cell, leading to hyperpolarisation—which counterintuitively *stops* the release of the inhibitory neurotransmitter glutamate.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-cells", prompt: "Why do rod cells provide high sensitivity but poor visual acuity?" },
      { id: "cue-2", blockId: "list-dark", prompt: "What is unusual about the rod cell membrane potential when in complete darkness?" },
      { id: "cue-3", blockId: "list-light", prompt: "How does the breakdown of rhodopsin ultimately cause an action potential in the optic nerve?" }
    ],
    summaryText: "In the dark, rod cells are depolarised and release inhibitory neurotransmitters. Light bleaches rhodopsin, closing Na+ channels. This hyperpolarises the rod, stopping the inhibitor release, thus allowing the bipolar cell to fire an impulse.",
    ready: true
  },
  evidence: []
};