export const note_biology_4_5_19 = {
  noteId: 'biology:4:5:19',
  blocks: [
    {
      type: 'objective',
      id: 'obj-pop-dynamics',
      data: {
        text: 'Understand the biotic and abiotic factors that affect population size and distribution, and interpret predator-prey cycles.',
      },
    },
    {
      type: 'heading',
      id: 'h-pop-factors',
      data: { text: 'Factors Affecting Populations', level: 2 },
    },
    {
      type: 'list',
      id: 'list-abiotic',
      data: {
        style: 'bullet',
        items: [
          '**Abiotic Factors**: Non-living environmental conditions. Examples include light intensity, temperature, water availability, soil pH, and oxygen concentration.',
          '**Tolerance Limits**: Species have an optimal range for each abiotic factor. Extreme fluctuations cause physiological stress or death, restricting distribution.'
        ],
      },
    },
    {
      type: 'list',
      id: 'list-biotic',
      data: {
        style: 'bullet',
        items: [
          '**Biotic Factors**: Living interactions affecting populations.',
          '**Interspecific Competition**: Competition between different species for the same resources (food, light, space).',
          '**Intraspecific Competition**: Competition between individuals of the same species. Often density-dependent (intense when population is high).',
          '**Predation**: Predators limit prey populations, and prey numbers limit predator populations, often producing oscillating cycles.'
        ],
      },
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-abiotic', prompt: 'Give three examples of abiotic factors.' },
      { id: 'cue-2', blockId: 'list-biotic', prompt: 'What is the difference between interspecific and intraspecific competition?' }
    ],
    summaryText: 'Populations are regulated by both abiotic factors (like temperature and light) and biotic factors (like competition, predation, and disease).',
    ready: true,
  },
  evidence: [],
  mentions: [],
};
