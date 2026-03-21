export const note_biology_4_6_4 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Compare the structure of bacteria and viruses." }
    },
    {
      id: "h-bacteria",
      type: "heading",
      data: { text: "Bacterial Structure", level: 2 }
    },
    {
      id: "list-bacteria",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Cell Type: Prokaryotic (unicellular).",
          "Size: Generally 0.5 to 5 µm.",
          "Genetic Material: Circular chromosomal DNA free in the cytoplasm, plus small extra rings called plasmids.",
          "Organelles: No membrane-bound organelles (e.g., no nucleus or mitochondria). Contain 70S ribosomes.",
          "Boundary: Plasma membrane surrounded by a cell wall made of peptidoglycan (murein).",
          "Extras: May possess a slime capsule, pili, or flagella."
        ]
      }
    },
    {
      id: "h-viruses",
      type: "heading",
      data: { text: "Viral Structure", level: 2 }
    },
    {
      id: "list-viruses",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Cell Type: Non-cellular (acellular) particles. Obligate intracellular parasites.",
          "Size: Much smaller than bacteria (20 to 300 nm).",
          "Genetic Material: Core of nucleic acid, which can be either DNA or RNA (single or double stranded).",
          "Organelles: None. They lack cytoplasm and ribosomes.",
          "Boundary: Protein coat called a capsid. Some also possess an outer lipid envelope stolen from host cells.",
          "Extras: Often have attachment proteins (antigens) sticking out to bind to host cells."
        ]
      }
    },
{ 'id': 'callout-examiner-c52c0260', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-bacteria", prompt: "What is the bacterial cell wall made of?" },
      { id: "cue-2", blockId: "list-viruses", prompt: "Describe the structural components of a virus." },
      { id: "cue-3", blockId: "list-viruses", prompt: "Can a virus contain both DNA and RNA?" }
    ],
    summaryText: "Bacteria are living prokaryotes with a peptidoglycan wall, circular DNA, and 70S ribosomes. Viruses are acellular particles containing either DNA or RNA enclosed in a protein capsid, often with attachment proteins.",
    ready: true
  },
  evidence: []
};