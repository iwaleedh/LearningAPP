export const note_biology_4_5_23 = {
  blocks: [
    {
      id: 'obj-23',
      type: 'objective',
      data: { text: 'Understand the roles of mutation, natural selection, and evolution in the development of species.' }
    },
    {
      id: 'h-evolution-intro',
      type: 'heading',
      data: { text: 'Evolution and Heritable Characteristics', level: 2 }
    },
    {
      id: 'p-evolution-def',
      type: 'paragraph',
      data: { text: 'Evolution can be defined as changes in the heritable characteristics of organisms over generations. Heritable characteristics are determined by the alleles of genes present in an individual and can be passed on to the next generation.' }
    },
    {
      id: 'h-natural-selection',
      type: 'heading',
      data: { text: 'Natural Selection', level: 2 }
    },
    {
      id: 'p-ns-intro',
      type: 'paragraph',
      data: { text: 'Natural selection is the process by which organisms that are better adapted to their environment survive, reproduce, and pass on their advantageous alleles, causing these advantageous characteristics to increase in frequency within a population.' }
    },
    {
      id: 'list-ns-stages',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          '**Variation:** Exists between individuals in a population. It results from small differences in DNA base sequences due to random mutation, meiosis, and random fertilisation.',
          '**Selection Pressures:** Environmental factors (like predation, competition for food, disease) act as selection pressures that affect survival chances.',
          '**Survival of the Fittest:** Individuals with characteristics that make them better adapted are more likely to survive into adulthood and reproduce.',
          '**Inheritance:** These well-adapted individuals are more likely to pass on their advantageous alleles to their offspring.',
          '**Frequency Increase:** Over generations, the favourable characteristic becomes the most common of its kind in the population, meaning the population has adapted to its environment.'
        ]
      }
    },
    {
      id: 'callout-evolution-tip',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Examiner Tip: Evolution is not purposeful',
        text: 'Evolution does not occur as a direct, purposeful response to an environment. Avoid stating that evolution happens "so that" an organism can survive. Instead, say it occurs by natural selection acting on randomly occurring variation.'
      }
    },
    {
      id: 'h-rabbit-example',
      type: 'heading',
      data: { text: 'Example: Natural Selection in Rabbits', level: 3 }
    },
    {
      id: 'p-rabbit-example',
      type: 'paragraph',
      data: { text: 'If variation in fur colour (brown vs. white alleles) exists within a rabbit population, predators like foxes act as a selection pressure. Brown rabbits are more likely to survive and reproduce due to better camouflage. Over many generations, the frequency of brown fur alleles increases, while white fur alleles decrease.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'Define evolution.' },
      { id: 'cue-2', prompt: 'Name three sources of genetic variation.' },
      { id: 'cue-3', prompt: 'What is a selection pressure?' },
      { id: 'cue-4', prompt: 'Summarise the five essential stages of natural selection.' }
    ],
    summaryText: 'Evolution is the change in heritable characteristics over generations. Sources of variation: mutation, meiosis, random fertilisation. Selection pressures are environmental factors (e.g. predation) that affect survival. The 5 stages: Variation exists, selection pressures act, best-adapted survive/reproduce, advantageous alleles are passed on, and allele frequency increases.'
  }
};
