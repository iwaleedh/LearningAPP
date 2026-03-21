export const note_biology_5_8_11 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Evaluate the methods and challenges of somatic and germ-line gene therapy." }
    },
    {
      id: "h-therapy",
      type: "heading",
      data: { text: "Gene Therapy", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Gene therapy involves inserting a fully functional allele into a patient's cells to replace or override a defective allele (e.g., in Cystic Fibrosis)." }
    },
    {
      id: "list-vectors",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Viral Vectors: Modified viruses (like adenoviruses) are used to 'infect' the patient and inject the functioning DNA directly into their cells. High efficiency, but risk of severe immune response or the virus reverting to a harmful form.",
          "Liposomes: Spheres of lipid bilayer wrapping the DNA. They safely fuse with the cell membrane, emptying the DNA into the cell. Much lower efficiency and gene expression than viruses, but far less immunogenic."
        ]
      }
    },
    {
      id: "h-types",
      type: "heading",
      data: { text: "Somatic vs Germ-line", level: 3 }
    },
    {
      id: "list-types",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Somatic Therapy: Targets specific body tissues (like lung epithelium). The effects are temporary because epithelial cells die and are replaced by new unhealthy ones. The healthy gene cannot be passed on to offspring. Currently legal and practiced.",
          "Germ-Line Therapy: Targets a fertilized egg/embryo. Every single cell in the resulting human will possess the healthy gene. The fix is permanent and will be passed to future generations. Currently highly illegal worldwide due to massive ethical and eugenics concerns."
        ]
      }
    },
{ 'id': 'callout-examiner-56b9d50a', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-vectors", prompt: "What is a major risk associated with using viral vectors in gene therapy?" },
      { id: "cue-2", blockId: "list-types", prompt: "Why must somatic cell gene therapy be continually repeated throughout a patient's life?" },
      { id: "cue-3", blockId: "list-types", prompt: "What is the definitive ethical line separating somatic and germ-line therapy?" }
    ],
    summaryText: "Gene therapy uses viral vectors or liposomes to deliver functional alleles into cells. Somatic therapy is temporary and isolated to the patient's body tissues. Germ-line therapy alters embryos, creating permanent, heritable changes, but is currently illegal due to ethical concerns.",
    ready: true
  },
  evidence: []
};