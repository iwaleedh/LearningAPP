export const note_biology_4_5_24 = {
  blocks: [
    {
      id: 'obj-24',
      type: 'objective',
      data: { text: 'Understand how reproductive isolation leads to speciation (allopatric and sympatric).' }
    },
    {
      id: 'h-speciation-def',
      type: 'heading',
      data: { text: 'Speciation', level: 2 }
    },
    {
      id: 'p-speciation-def',
      type: 'paragraph',
      data: { text: 'Speciation is the development of a new species over time. It occurs when a single population becomes reproductively isolated, meaning that two populations can no longer interbreed and exchange genes (gene flow is restricted).' }
    },
    {
      id: 'list-speciation-process',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Two populations become isolated from each other.',
          'They experience different selection pressures in their respective environments or genetic drift.',
          'Different alleles become advantageous and increase in frequency due to natural selection.',
          'Over time, their DNA base sequences become so different that they can no longer interbreed to produce fertile offspring, making them two distinct species.'
        ]
      }
    },
    {
      id: 'h-allopatric',
      type: 'heading',
      data: { text: 'Allopatric Speciation', level: 3 }
    },
    {
      id: 'p-allopatric',
      type: 'paragraph',
      data: { text: 'Allopatric speciation occurs as a result of geographical isolation. It is the most common type of speciation.' }
    },
    {
      id: 'list-allopatric-factors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'A physical barrier (e.g. a new mountain range, a river, or sea level change) separates a population into two.',
          'The environments on either side of the barrier may have different climates, food sources, or predators (different selection pressures).',
          'Natural selection acts differently on each population, leading to divergent evolution.'
        ]
      }
    },
    {
      id: 'h-sympatric',
      type: 'heading',
      data: { text: 'Sympatric Speciation', level: 3 }
    },
    {
      id: 'p-sympatric',
      type: 'paragraph',
      data: { text: 'Sympatric speciation occurs without a geographical barrier. Two populations in the same habitat become reproductively isolated due to other mechanisms, often triggered by random mutations:' }
    },
    {
      id: 'list-sympatric-mechanisms',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Ecological isolation:** Sub-populations occupy different niches (e.g. feeding on different plants) within the same habitat.',
          '**Behavioural isolation:** Changes in courtship rituals or mating displays prevent successful mating.',
          '**Temporal isolation:** Sub-populations reproduce at different times of the year, or are active at different times of the day.',
          '**Physical isolation:** Mutations cause incompatible reproductive organs.'
        ]
      }
    },
    {
      id: 'callout-speciation-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Mnemonic: Allopatric vs Sympatric',
        text: '**A**llopatric = **A**part (geographical barrier)\n**S**ympatric = **S**ame space (no geographical barrier)'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'What is the definition of speciation?' },
      { id: 'cue-2', prompt: 'What is the primary cause of allopatric speciation?' },
      { id: 'cue-3', prompt: 'Name three mechanisms of sympatric speciation.' },
      { id: 'cue-4', prompt: 'How do we know when two populations have finally become different species?' }
    ],
    summaryText: 'Speciation is the evolution of a new species when gene flow between two populations stops due to reproductive isolation. Allopatric is caused by geographical barriers. Sympatric mechanisms include ecological, behavioural, temporal, and physical isolation. They become different species when they can no longer interbreed to produce fertile offspring.'
  }
};
