export const note_biology_4_6_7 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the non-specific immune responses: inflammation, interferons, and phagocytosis." }
    },
    {
      id: "h-inflammation",
      type: "heading",
      data: { text: "Inflammation", level: 2 }
    },
    {
      id: "p-inflamm",
      type: "paragraph",
      data: { text: "When tissue is damaged, injured cells and mast cells release histamine." }
    },
    {
      id: "list-inflamm",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Histamine causes vasodilation of local arterioles, increasing blood flow (causing redness and heat).",
          "Histamine increases the permeability of capillaries.",
          "Blood plasma leaks into the tissue fluid, causing swelling (oedema).",
          "This brings white blood cells (phagocytes) and antibodies directly to the infected area."
        ]
      }
    },
    {
      id: "h-interferons",
      type: "heading",
      data: { text: "Interferons", level: 2 }
    },
    {
      id: "p-interferons",
      type: "paragraph",
      data: { text: "Interferons are antiviral proteins produced by cells that have been infected by a virus. They diffuse to surrounding uninfected cells, inhibiting viral protein synthesis and restricting viral replication." }
    },
    {
      id: "h-phago",
      type: "heading",
      data: { text: "Phagocytosis", level: 2 }
    },
    {
      id: "list-phago",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Recognition: A phagocyte (e.g., macrophage or neutrophil) recognizes pathogen antigens via receptors.",
          "Engulfment: The phagocyte extends its membrane to engulf the pathogen, trapping it in a vesicle called a phagosome.",
          "Digestion: Lysosomes fuse with the phagosome (forming a phagolysosome) and release digestive enzymes (lysozymes) which hydrolyze the pathogen.",
          "Presentation: Macrophages will then present the pathogen's antigens on their own cell surface, becoming an Antigen Presenting Cell (APC). This bridges the non-specific and specific immune responses."
        ]
      }
    },
{ 'id': 'callout-examiner-8cc390d6', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } },
{ 'id': 'callout-examiner-2dffea26', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-inflamm", prompt: "What chemical triggers vasodilation during inflammation?" },
      { id: "cue-2", blockId: "p-interferons", prompt: "What is the specific role of interferons?" },
      { id: "cue-3", blockId: "list-phago", prompt: "Describe the steps of phagocytosis." }
    ],
    summaryText: "Non-specific responses do not target specific antigens. Histamine causes inflammation (vasodilation, permeability, swelling). Interferons inhibit viral replication. Phagocytes engulf and digest pathogens in phagolysosomes, with macrophages proceeding to become APCs.",
    ready: true
  },
  evidence: []
};