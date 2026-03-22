export const note_biology_4_6_9 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the roles of T killer cells and the structure of antibodies." }
    },
    {
      id: "h-cell-mediated",
      type: "heading",
      data: { text: "The Cell-Mediated Response (T Killer Cells)", level: 2 }
    },
    {
      id: "list-tkiller",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "A normal body cell becomes infected by a virus and presents viral antigens on its surface, becoming an APC.",
          "A T killer cell with a complementary receptor binds to the infected APC.",
          "Cytokines from an activated T helper cell stimulate the bound T killer cell to rapidly divide by mitosis (clonal expansion).",
          "The active T killer cells release enzymes (like perforin) that punch holes in the infected cell's membrane, causing it to undergo lysis and die, halting viral replication."
        ]
      }
    },
    {
      id: "h-antibodies",
      type: "heading",
      data: { text: "Antibody Structure and Function", level: 2 }
    },
    {
      id: "p-abs",
      type: "paragraph",
      data: { text: "Antibodies (immunoglobulins) are Y-shaped glycoproteins synthesized by plasma B cells." }
    },
    {
      id: "list-abs-struct",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Structure: Consist of four polypeptide chains (two heavy, two light) held together by disulfide bridges.",
          "Variable Region: Contains the antigen-binding sites. Its specific 3D shape is complementary to one specific antigen.",
          "Constant Region: The stem of the Y, which binds to receptors on phagocytes.",
          "Hinge Region: Gives flexibility to bind to multiple antigens."
        ]
      }
    },
    {
      id: "list-abs-function",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Agglutination: Because they have two binding sites, antibodies can cross-link multiple pathogens together. This clumps them, making them too large to enter host cells and easier for phagocytes to engulf them.",
          "Neutralization: Antibodies bind to toxins or viral attachment proteins, blocking them from causing harm."
        ]
      }
    },
{ 'id': 'callout-examiner-0dd34471', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Antibody Production', 'text': 'Remember that antibodies are produced by plasma cells (differentiated B cells), not directly by T cells or macrophages.' } },
{ 'id': 'callout-examiner-bf55c38e', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Disulfide Bonds', 'text': 'When describing antibody structure, always explicitly mention \'disulfide bridges\' connecting the heavy and light chains.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-tkiller", prompt: "How do T killer cells destroy infected cells?" },
      { id: "cue-2", blockId: "list-abs-struct", prompt: "Describe the tertiary/quaternary structure of an antibody." },
      { id: "cue-3", blockId: "list-abs-function", prompt: "Explain the process of agglutination." }
    ],
    summaryText: "T killer cells release perforin to lyse virus-infected cells. Antibodies are Y-shaped, 4-chain glycoproteins with disulfide bridges. The variable region binds complementary antigens, causing agglutination (clumping) or neutralization.",
    ready: true
  },
  evidence: []
};