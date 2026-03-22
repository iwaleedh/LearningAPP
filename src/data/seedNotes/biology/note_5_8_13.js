export const note_biology_5_8_13 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the application of DNA microarrays and bioinformatics in modern biology." }
    },
    {
      id: "h-arrays",
      type: "heading",
      data: { text: "DNA Microarrays", level: 2 }
    },
    {
      id: "p-arrays",
      type: "paragraph",
      data: { text: "Microarrays are small glass slides studded with thousands of millions of single-stranded synthetic DNA probes. They are used to determine which exact genes are 'switched on' in a cell simultaneously." }
    },
    {
      id: "list-arrays",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "mRNA is extracted from the test cells (e.g. a tumor cell).",
          "Reverse transcriptase is used to convert this mRNA into single-stranded cDNA.",
          "The cDNA is tagged with a fluorescent dye.",
          "The mixture is washed over the microarray. If the cDNA finds a complementary probe on the grid, it base-pairs tightly (hybridizes).",
          "The microarray is washed. Unbound cDNA is rinsed away. The slide is hit with a laser.",
          "The fluorescent spots reveal exactly which genes were actively being transcribed."
        ]
      }
    },
    {
      id: "h-bioinformatics",
      type: "heading",
      data: { text: "Bioinformatics", level: 3 }
    },
    {
      id: "p-bioinformatics",
      type: "paragraph",
      data: { text: "Bioinformatics is the application of powerful computer algorithms and vast databases to store, map, and analyze massive amounts of biological data—such as entire human genomes, predicting 3D protein folding structures, or mapping evolutionary phylogenetics." }
    },
{ 'id': 'callout-examiner-280ce568', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Common Mistake', 'text': 'A common misconception is that microarrays measure genomic DNA directly. In expression profiling, they actually measure the abundance of fluorescently labelled **mRNA** (or cDNA derived from it) to deduce which genes are actively being expressed.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-arrays", prompt: "If a spot on a DNA microarray severely fluoresces, what does that conclude about the original cell?" },
      { id: "cue-2", blockId: "list-arrays", prompt: "Why is cDNA, rather than primary DNA, used to wash over the microarray?" },
      { id: "cue-3", blockId: "p-bioinformatics", prompt: "What is bioinformatics?" }
    ],
    summaryText: "Microarrays use complementary DNA probes to rapidly hybridize with fluorescently-tagged cDNA, revealing exactly which genes are actively being expressed in a tissue. Bioinformatics combines biology and computer science to analyze these vast quantities of genetic data.",
    ready: true
  },
  evidence: []
};