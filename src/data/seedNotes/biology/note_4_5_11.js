export const note_biology_4_5_11 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Describe how the structure of a leaf is adapted for efficient photosynthesis." }
    },
    {
      id: "h-leaf-adapt",
      type: "heading",
      data: { text: "Structural Adaptations of the Leaf", level: 2 }
    },
    {
      id: "list-leaf",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Large surface area: Broader leaves capture as much light as possible.",
          "Thin: Provides a short diffusion pathway for carbon dioxide to reach the mesophyll cells.",
          "Transparent cuticle and epidermis: Allows light to pass through to the photosynthetic mesophyll cells beneath.",
          "Palisade mesophyll layer: Packed with chloroplasts and arranged vertically to maximize light absorption.",
          "Spongy mesophyll layer: Contains large air spaces to allow rapid diffusion of CO₂ to palisade cells and O₂ away.",
          "Stomata: Pores in the lower epidermis that open and close (controlled by guard cells) to regulate gas exchange.",
          "Xylem network: Provides a constant supply of water needed for photolysis.",
          "Phloem network: Rapidly removes the sugars produced via translocation, maintaining concentration gradients."
        ]
      }
    },
{ 'id': 'callout-examiner-d5e09da3', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-leaf", prompt: "How does the palisade mesophyll cell arrangement aid photosynthesis?" },
      { id: "cue-2", blockId: "list-leaf", prompt: "Why do leaves need a spongy mesophyll layer?" },
      { id: "cue-3", blockId: "list-leaf", prompt: "What is the function of the xylem and phloem in photosynthesis?" }
    ],
    summaryText: "Leaves are thin and wide (surface area, short diffusion gap). A transparent cuticle lets light reach heavily chloroplast-packed palisade cells. Air spaces in spongy mesophyll aid diffusion, while xylem/phloem provide water and carry away sugars.",
    ready: true
  },
  evidence: []
};