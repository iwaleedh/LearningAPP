export const note_biology_5_8_4 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Evaluate how specific drugs and poisons affect synaptic transmission." }
    },
    {
      id: "h-drugs",
      type: "heading",
      data: { text: "Drug Actions on Synapses", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Neurological drugs target specific proteins at the synapse. They can either stimulate the nervous system (agonists/excitatory) or depress it (antagonists/inhibitory)." }
    },
    {
      id: "list-mechanisms",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Receptor Agonists: Drugs with a similar shape to the natural neurotransmitter that bind and activate the post-synaptic receptors (e.g., Nicotine).",
          "Receptor Antagonists: Drugs that bind to receptors and block them without activating them, preventing the natural neurotransmitter from acting (e.g., Curare blocks acetylcholine, causing paralysis).",
          "Enzyme Inhibitors: Drugs that inhibit the breakdown enzymes in the cleft (e.g., Sarin nerve gas blocks acetylcholinesterase, leading to constant muscle spasms and death).",
          "Reuptake Inhibitors: Drugs that prevent the reabsorption pumps on the pre-synaptic membrane from clearing the cleft. (e.g., SSRIs block serotonin reuptake, treating depression).",
          "Release Modulators: L-Dopa increases dopamine synthesis; Botulinum toxin prevents acetylcholine release."
        ]
      }
    },
{ 'id': 'callout-examiner-1fddfb46', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-mechanisms", prompt: "What is the difference between a receptor agonist and an antagonist?" },
      { id: "cue-2", blockId: "list-mechanisms", prompt: "What happens if a drug blocks acetylcholinesterase?" },
      { id: "cue-3", blockId: "list-mechanisms", prompt: "How do SSRIs work to increase serotonin levels in the brain?" }
    ],
    summaryText: "Drugs modify synapses by mimicking neurotransmitters (agonists), blocking receptors (antagonists), preventing neurotransmitter breakdown (enzyme inhibitors), or blocking clearance from the cleft (reuptake inhibitors like SSRIs).",
    ready: true
  },
  evidence: []
};