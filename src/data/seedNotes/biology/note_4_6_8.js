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
    },
{ 'id': 'callout-examiner-1b21d266', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Antibodies vs Antigens', 'text': 'A frequent error is interchanging antigens and antibodies. **Antigens** are molecules (often proteins) on the surface of pathogens that trigger immune responses. **Antibodies** are the complementary Y-shaped proteins produced by plasma cells (B cells) to bind to those specific antigens.' } },
{ 'id': 'callout-examiner-280f2561', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'T Helper Cell Activation', 'text': 'In long-answer questions about the specific immune response, it is crucial to state that **T helper cells** release **cytokines**. These specific chemicals stimulate both the clonal expansion of B cells (into plasma cells) and T killer cells.' } },
    {
      id: 'callout-tip-u4-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Who makes the antibodies?",
        text: "B cells do not directly 'shoot' antibodies at pathogens. They must first undergo clonal expansion and differentiate into plasma cells. It is the plasma cells that secrete the antibodies."
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