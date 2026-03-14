export const note_biology_5_7_18 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Recognize how gene expression and protein synthesis can be controlled by steroid hormones (e.g., in muscle adaptation)." }
    },
    {
      id: "h-gene",
      type: "heading",
      data: { text: "Control of Gene Expression", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Cells adapt to sustained exercise by upregulating certain genes (e.g., making more myosin or mitochondrial enzymes). This is often coordinated by hormones." }
    },
    {
      id: "list-transcription",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Transcription Factors: Proteins that bind to specific promoter regions on DNA. They either help RNA polymerase attach to begin transcribing an mRNA copy of a gene (activators) or completely block RNA polymerase (repressors).",
          "Steroid Hormones: Hormones like testosterone or cortisol are lipid-soluble. They diffuse directly through the phospholipid bilayer into the cytoplasm.",
          "Receptor Binding: The hormone binds to a specific intracellular receptor, forming a hormone-receptor complex.",
          "Nucleus entry: This complex moves into the nucleus through a nuclear pore.",
          "Activation: The complex acts as a transcription factor. It binds to the promoter sequence of a target gene, stimulating RNA polymerase to transcribe the gene.",
          "Translation: The resulting mRNA travels to ribosomes to be translated into new proteins, altering the cell's structure/function."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-transcription", prompt: "What is a transcription factor?" },
      { id: "cue-2", blockId: "list-transcription", prompt: "How do steroid hormones enter a cell without requiring a membrane protein?" },
      { id: "cue-3", blockId: "list-transcription", prompt: "What does the hormone-receptor complex do inside the nucleus?" }
    ],
    summaryText: "Transcription factors turn genes 'on' or 'off'. Lipid-soluble steroid hormones diffuse into the cell, bind an internal receptor, and enter the nucleus. The complex binds to DNA promoters, acting as a transcription factor to start mRNA synthesis.",
    ready: true
  },
  evidence: []
};