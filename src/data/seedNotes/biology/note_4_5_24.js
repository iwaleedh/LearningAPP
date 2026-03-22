export const note_biology_4_5_24 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand how isolation leads to speciation (allopatric and sympatric)." }
    },
    {
      id: "h-speciation",
      type: "heading",
      data: { text: "Speciation", level: 2 }
    },
    {
      id: "p-def",
      type: "paragraph",
      data: { text: "Speciation is the development of a new species from an existing species. A species is defined as a group of organisms that can naturally interbreed to produce fertile offspring. Speciation occurs when diverging populations become reproductively isolated." }
    },
    {
      id: "h-allopatric",
      type: "heading",
      data: { text: "Allopatric Speciation", level: 3 }
    },
    {
      id: "p-allopatric",
      type: "paragraph",
      data: { text: "Caused by Geographical Isolation." }
    },
    {
      id: "list-allopatric",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "A physical barrier (e.g., a new mountain range, earthquake, river) permanently separates a single population into two.",
          "This prevents gene flow between the two populations.",
          "Each population experiences different environmental conditions, and therefore different selection pressures.",
          "Different alleles become advantageous. Natural selection causes different allele frequencies to change in each population over many generations.",
          "Eventually, the DNA of the populations becomes so different they can no longer interbreed to produce fertile offspring. They are now two distinct species."
        ]
      }
    },
    {
      id: "h-sympatric",
      type: "heading",
      data: { text: "Sympatric Speciation", level: 3 }
    },
    {
      id: "p-sympatric",
      type: "paragraph",
      data: { text: "No geographical barrier. Speciation occurs in the same area due to a mutation resulting in random reproductive isolation (e.g., polyploidy preventing successful meiosis, changes in courtship behavior, or different flowering times preventing gamete fusion)." }
    },
{ 'id': 'callout-examiner-75bacc79', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Structuring Speciation Answers', 'text': 'Include the key steps logically: 1) Isolation (geographical or reproductive), 2) Prevention of gene flow, 3) Different selection pressures, and 4) Accumulation of genetic differences and allele frequencies until interbreeding cannot produce fertile offspring.' } },
    {
      id: 'callout-tip-u4-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Allopatric vs Sympatric",
        text: "Allopatric = 'Different country' (Geographical isolation). Sympatric = 'Same country' (Reproductive isolation, such as different mating seasons or behaviors, within the same area)."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-def", prompt: "Define a species." },
      { id: "cue-2", blockId: "list-allopatric", prompt: "Describe how a geographical barrier leads to allopatric speciation." },
      { id: "cue-3", blockId: "p-sympatric", prompt: "How does sympatric speciation differ from allopatric speciation?" }
    ],
    summaryText: "Speciation requires reproductive isolation preventing gene flow. Allopatric uses a geographical barrier causing separate populations to face different selection pressures. Sympatric happens in the same habitat via behavioral or genetic mutations.",
    ready: true
  },
  evidence: []
};