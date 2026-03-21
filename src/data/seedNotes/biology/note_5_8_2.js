export const note_biology_5_8_2 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the role of myelination and saltatory conduction in speeding up nerve impulses." }
    },
    {
      id: "h-myelin",
      type: "heading",
      data: { text: "Myelination", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Many axons are wrapped in layers of lipid-rich membrane called the myelin sheath. In the peripheral nervous system, this sheath is produced by Schwann cells wrapping repeatedly around the axon." }
    },
    {
      id: "list-myelin",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Insulation: Myelin is an electrical insulator preventing the movement of ions (Na+ and K+) across the axonal membrane.",
          "Nodes of Ranvier: Small unmyelinated gaps between Schwann cells where ion channels are concentrated.",
          "Saltatory Conduction: Action potentials can only occur at the Nodes of Ranvier. Therefore, the impulse 'jumps' from node to node.",
          "Speed: Saltatory conduction allows impulses to travel up to 100x faster than in unmyelinated axons of the same diameter, and requires less ATP as fewer Na+/K+ pumps are needed."
        ]
      }
    },
{ 'id': 'callout-examiner-abdeb644', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-intro", prompt: "Which cells produce the myelin sheath in the peripheral nervous system?" },
      { id: "cue-2", blockId: "list-myelin", prompt: "What is a Node of Ranvier?" },
      { id: "cue-3", blockId: "list-myelin", prompt: "Why does saltatory conduction save the neurone metabolic energy?" }
    ],
    summaryText: "Schwann cells wrap axons in an insulating myelin sheath, forcing action potentials to 'jump' exclusively at the Nodes of Ranvier (saltatory conduction). This vastly increases transmission speed and conserves ATP.",
    ready: true
  },
  evidence: []
};