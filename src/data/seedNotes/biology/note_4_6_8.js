export const note_biology_4_6_8 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the roles of APCs, T helper cells, T killer cells, and B cells in the specific immune response." }
    },
    {
      id: "h-specific",
      type: "heading",
      data: { text: "The Specific Immune Response", level: 2 }
    },
    {
      id: "p-specific",
      type: "paragraph",
      data: { text: "The specific immune response involves distinct pathways: the humoral response (targets pathogens in body fluids via antibodies) and the cell-mediated response (targets infected or cancerous cells)." }
    },
    {
      id: "h-activation",
      type: "heading",
      data: { text: "Activation of T Helper Cells", level: 3 }
    },
    {
      id: "list-activation",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "A Macrophage undergoes phagocytosis and becomes an Antigen Presenting Cell (APC).",
          "A T helper cell with a complementary CD4 receptor binds to the presented antigen on the APC.",
          "This binding activates the T helper cell, causing it to divide by mitosis into a clone of active T helper cells and T memory cells."
        ]
      }
    },
    {
      id: "h-humoral",
      type: "heading",
      data: { text: "The Humoral Response (B cell activation)", level: 3 }
    },
    {
      id: "list-humoral",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "A B cell with complementary antibodies binds directly to the pathogen's antigens, engulfs it, and becomes an APC.",
          "An activated T helper cell binds to this B cell APC and releases cytokines.",
          "The cytokines trigger the B cell to undergo clonal expansion (mitosis).",
          "The B cells differentiate into B effector (plasma) cells, which secrete millions of antibodies, and B memory cells, which remain in the blood for secondary immunity."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-activation", prompt: "How becomes an APC initially in the immune response?" },
      { id: "cue-2", blockId: "list-humoral", prompt: "What do activated T helper cells secrete to trigger clonal expansion in B cells?" },
      { id: "cue-3", blockId: "list-humoral", prompt: "What is the function of B effector (plasma) cells?" }
    ],
    summaryText: "Specific immunity requires T helper cells to bind to Macrophage APCs. Activated T helpers then release cytokines. These cytokines bind to B cells (Humoral) triggering clonal expansion into antibody-secreting plasma cells and memory cells.",
    ready: true
  },
  evidence: []
};