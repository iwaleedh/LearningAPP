export const note_biology_4_5_18 = {
  blocks: [
    {
      id: 'obj-18',
      type: 'objective',
      data: { text: 'Understand how models predict future climate change and describe its effects on various species.' }
    },
    {
      id: 'h-predicting',
      type: 'heading',
      data: { text: 'Models for Predicting Climate Change', level: 2 }
    },
    {
      id: 'p-extrapolating',
      type: 'paragraph',
      data: { text: 'Scientists use existing data relating to global warming to make predictions about future global temperatures. Using data in this way is known as extrapolating from data. Extrapolated data is used to produce models showing how the climate may change in the future under different human activity scenarios.' }
    },
    {
      id: 'list-purposes',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Planning for the future:** Building flood defences, funding scientific research for climate technologies.',
          '**Encouraging change:** Reducing the burning of fossil fuels, increasing renewable energy (solar, wind), and reducing meat consumption.'
        ]
      }
    },
    {
      id: 'h-limitations',
      type: 'heading',
      data: { text: 'Limitations of Climate Change Models', level: 3 }
    },
    {
      id: 'p-limitations',
      type: 'paragraph',
      data: { text: 'There are several limitations to models based on extrapolated data:' }
    },
    {
      id: 'list-limitations',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'We do not know which emissions scenario is most likely or how successful humans will be at cutting greenhouse gas emissions.',
          'Future technologies for removing greenhouse gases (e.g. carbon capture) may or may not be effective.',
          'Global climate patterns are inherently complex, making predictions difficult.',
          'A tipping point could lead to a sudden acceleration in global warming (e.g. permafrost melting releasing trapped methane).',
          'Other uncontrollable natural factors (e.g. volcanic eruptions increasing atmospheric ash and cooling the earth) cannot be accurately predicted.'
        ]
      }
    },
    {
      id: 'h-species-effects',
      type: 'heading',
      data: { text: 'How Climate Change Affects Species', level: 2 }
    },
    {
      id: 'p-species-effects',
      type: 'paragraph',
      data: { text: 'Increased atmospheric warming has multiple impacts on climate patterns, which in turn strongly affect plant and animal species:' }
    },
    {
      id: 'list-species-effects',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Changing Distribution:** Warming climates cause animals to move towards the poles or higher altitudes. Species might out-compete existing species or fail to adapt fast enough, leading to decreased biodiversity and potential extinction.',
          '**Water Availability:** Changing rainfall patterns can be devastating for species relying on seasonal rains (e.g. desert plants). Lack of rainfall forces migration or causes extinction.',
          '**Altered Seasonal Cycles:** Plant species may produce flowers earlier, and animals may produce young earlier. This causes desynchronization (e.g. bird migratory patterns no longer line up with the availability of their usual invertebrate food sources).',
          '**Habitat Loss:** Retreating polar ice and glaciers threaten Arctic species. Rising sea levels (from expanding warmer water and melting ice) lead to the flooding of coastal habitats.'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'What does "extrapolating from data" mean in climate science?' },
      { id: 'cue-2', prompt: 'Identify three limitations of climate prediction models.' },
      { id: 'cue-3', prompt: 'How does climate change alter seasonal cycles, and why is this a problem?' },
      { id: 'cue-4', prompt: 'Why might a species moving to a higher altitude decrease biodiversity?' }
    ],
    summaryText: 'Extrapolating is using existing data to predict future trends. Models are limited by unknown future human actions, complex climate mechanics, potential tipping points, and unpredictable natural factors. Altered seasonal cycles cause desynchronization (e.g. birds migrating before food is available). Moving species may out-compete native species or fail to survive.'
  }
};
