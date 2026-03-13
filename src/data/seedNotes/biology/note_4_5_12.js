export const note_biology_4_5_12 = {
  noteId: 'biology:4:5:12',
  blocks: [
    {
      type: 'objective',
      id: 'obj-eco-key',
      data: {
        text: 'Understand the key ecological terms: habitat, population, community, ecosystem, and niche, and explain how organisms interact within an ecosystem.',
      },
    },
    {
      type: 'heading',
      id: 'h-eco-terms',
      data: { text: 'Ecology: Key Terms', level: 2 },
    },
    {
      type: 'list',
      id: 'list-terms',
      data: {
        style: 'bullet',
        items: [
          '**Habitat**: The specific place where an organism lives (e.g. a desert or an individual tree). Some species are habitat specialists, while generalists can survive in multiple environments.',
          '**Population**: All of the individuals of one species living in a habitat. Its size is the abundance, and its location is its distribution.',
          '**Community**: Multiple populations of different species living and interacting in the same area (e.g. all the frogs, fish, snails, and pondweed in a pond).',
          '**Ecosystem**: The interaction of living communities with the non-living (abiotic) components of their habitat. Energy flows and nutrients cycle within an ecosystem.'
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-niche',
      data: { text: 'The Concept of Ecological Niche', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-niche',
      data: {
        text: 'An ecological niche is the role that a species plays within its ecosystem over its lifetime. It encompasses where the organism lives (its spatial habitat), how it obtains energy (feeding relationships), and how it interacts with both other species and the abiotic environment.',
      },
    },
    {
      type: 'callout',
      id: 'callout-niche-overlap',
      data: {
        style: 'warning',
        title: 'Competitive Exclusion Principle',
        text: 'Two different species cannot occupy exactly the same niche in the same ecosystem for long. One will inevitably outcompete the other, leading to the competitive exclusion of the weaker species.',
      },
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-terms', prompt: 'Define the terms population and community.' },
      { id: 'cue-2', blockId: 'p-niche', prompt: 'What is meant by an ecological niche?' }
    ],
    summaryText: 'A population is all individuals of one species in a habitat; a community is multiple interacting populations. An ecosystem includes the community and abiotic factors. A niche is a species\' specific role in the ecosystem.',
    ready: true,
  },
  evidence: [],
  mentions: [],
};
