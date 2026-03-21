export const note_biology_5_8_10 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Describe the tools used in genetic engineering, including restriction endonucleases, ligases, and plasmids." }
    },
    {
      id: "h-tools",
      type: "heading",
      data: { text: "Recombinant DNA Tools", level: 2 }
    },
    {
      id: "list-tools",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Restriction Endonucleases: Enzymes that act as precise biochemical scissors. They recognize specific palindromic DNA sequences and cut the sugar-phosphate backbone. Many leave staggered cuts, producing exposed single-stranded 'sticky ends'.",
          "Reverse Transcriptase: An enzyme sourced from retroviruses. It artificially synthesizes a single strand of complementary DNA (cDNA) from a mature mRNA template molecule. This method is excellent because the resulting cDNA contains no non-coding introns.",
          "Plasmids: Small, circular rings of DNA found in bacteria. They are used as vectors to carry the target gene into the host organism.",
          "DNA Ligase: The biochemical glue. Once sticky ends of a plasmid and a target gene have hydrogen-bonded together (annealed), DNA Ligase creates new phosphodiester bonds to permanently seal the recombinant DNA backbone."
        ]
      }
    },
{ 'id': 'callout-examiner-ef9d997f', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-tools", prompt: "What is the function of a restriction endonuclease in genetic engineering?" },
      { id: "cue-2", blockId: "list-tools", prompt: "Why is reverse transcriptase often preferred over restriction enzymes when isolating a human gene for bacteria?" },
      { id: "cue-3", blockId: "list-tools", prompt: "What specific chemical bond does DNA Ligase form?" }
    ],
    summaryText: "Genetic engineering requires a target gene (isolated via restriction enzymes cutting 'sticky ends', or cDNA from reverse transcriptase), a vector (like a bacterial plasmid), and DNA Ligase to permanently seal the sugar-phosphate backbone together.",
    ready: true
  },
  evidence: []
};