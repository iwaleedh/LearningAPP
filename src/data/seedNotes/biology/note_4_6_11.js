export const note_biology_4_6_11 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Assess the effects of antibiotics, distinguish between bacteriocidal and bacteriostatic, and understand antibiotic resistance." }
    },
    {
      id: "h-abx",
      type: "heading",
      data: { text: "Antibiotics", level: 2 }
    },
    {
      id: "p-abx",
      type: "paragraph",
      data: { text: "Antibiotics are chemicals that kill or inhibit the growth of bacteria. They target bacterial cellular machinery without harming the eukaryotic host cells (e.g., targeting 70S ribosomes or peptidoglycan walls). They do not work against viruses." }
    },
    {
      id: "list-types",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Bactericidal: Kill bacteria directly (e.g., Penicillin destroys cell walls leading to osmotic lysis).",
          "Bacteriostatic: Prevent bacteria from dividing and growing (e.g., Tetracycline binds to ribosomes to stop protein synthesis), allowing the immune system time to clear the infection."
        ]
      }
    },
    {
      id: "h-resistance",
      type: "heading",
      data: { text: "Antibiotic Resistance (Evolution in action)", level: 2 }
    },
    {
      id: "list-resistance",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Random mutations in bacterial DNA occur naturally, sometimes generating an allele that provides resistance to an antibiotic (e.g., producing an enzyme that breaks down penicillin).",
          "When the antibiotic is used, it acts as a strong selection pressure. The susceptible bacteria die.",
          "The resistant bacteria survive, divide rapidly (without competition), and pass the resistance allele to their offspring.",
          "Bacteria can also transfer resistance plasmids horizontally to other bacterial species via conjugation.",
          "The frequency of the resistance allele increases in the population (e.g., MRSA)."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-types", prompt: "What is the difference between bactericidal and bacteriostatic antibiotics?" },
      { id: "cue-2", blockId: "p-abx", prompt: "Why do antibiotics not work against viruses?" },
      { id: "cue-3", blockId: "list-resistance", prompt: "Describe how antibiotic resistance evolves in a bacterial population." }
    ],
    summaryText: "Bactericidal antibiotics kill (e.g., wall damage); bacteriostatic antibiotics halt reproduction (e.g., protein synthesis). Resistance evolves via natural selection: an antibiotic kills susceptible bacteria, so random resistant mutants survive, multiply, and pass on the resistant allele.",
    ready: true
  },
  evidence: []
};