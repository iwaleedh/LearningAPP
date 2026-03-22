export const note_biology_4_6_16 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the principles of PCR and gel electrophoresis to produce DNA profiles." }
    },
    {
      id: "h-pcr",
      type: "heading",
      data: { text: "Polymerase Chain Reaction (PCR)", level: 2 }
    },
    {
      id: "p-pcr-intro",
      type: "paragraph",
      data: { text: "PCR is a technique to rapidly amplify (copy) a tiny sample of DNA, making millions of copies for analysis." }
    },
    {
      id: "list-pcr",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Denaturation (~95°C): The DNA sample is heated to break the hydrogen bonds between complementary base pairs, separating the double helix into two single strands.",
          "Annealing (~55°C): The mixture is cooled. Short, single-stranded DNA primers bind (anneal) to their complementary sequences at the start of the target gene.",
          "Elongation (~72°C): The mixture is heated to the optimum temperature for Taq polymerase (a heat-stable enzyme from hot spring bacteria). Taq polymerase builds the new complementary DNA strands using free nucleotides.",
          "The cycle is repeated roughly 30 times."
        ]
      }
    },
    {
      id: "h-profiling",
      type: "heading",
      data: { text: "Gel Electrophoresis (DNA Profiling)", level: 2 }
    },
    {
      id: "list-profiling",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "The amplified DNA is cut into variable-length fragments (STRs) using restriction endonuclease enzymes.",
          "The fragments are placed into wells inside an agarose gel, bathed in a buffer solution.",
          "An electrical current is passed through the gel. Because DNA has negatively charged phosphate groups, the fragments move towards the positive anode.",
          "Shorter, lighter DNA fragments move through the gel matrix faster and further than longer, heavier fragments.",
          "A fluorescent or radioactive tag is added so bands appear under UV light (or X-ray).",
          "The band pattern is compared against a suspect's DNA or victim's DNA to look for a perfect match."
        ]
      }
    },
{ 'id': 'callout-examiner-dbb8b60d', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Taq Polymerase', 'text': 'Always refer to the enzyme used in PCR specifically as \'Taq polymerase\', noting that its optimum temperature is high and it does not denature at 95°C.' } },
{ 'id': 'callout-examiner-51b2241c', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Gel Electrophoresis Movement', 'text': 'DNA fragments move towards the positive electrode (anode) because DNA is negatively charged. The smaller fragments move further and faster.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-pcr", prompt: "What happens during the 95°C stage of PCR?" },
      { id: "cue-2", blockId: "list-pcr", prompt: "Why is Taq polymerase used instead of human DNA polymerase?" },
      { id: "cue-3", blockId: "list-profiling", prompt: "In gel electrophoresis, why do DNA fragments move towards the positive electrode?" },
      { id: "cue-4", blockId: "list-profiling", prompt: "Which fragments travel the furthest during electrophoresis?" }
    ],
    summaryText: "PCR amplifies tiny DNA samples in three steps: Denaturation (95C separates strands), Annealing (55C primers bind), Elongation (72C Taq polymerase copies). Electrophoresis sorts the cut fragments by size: negatively-charged DNA moves to the anode, with smaller fragments moving furthest, creating a unique band profile.",
    ready: true
  },
  evidence: []
};