export const note_biology_4_5_17 = {
  blocks: [
    {
      id: 'obj-17',
      type: 'objective',
      data: { text: 'Understand the evidence for climate change and the anthropogenic causes behind it.' }
    },
    {
      id: 'h-evidence-of-cc',
      type: 'heading',
      data: { text: 'Evidence for Climate Change', level: 2 }
    },
    {
      id: 'p-cc-def',
      type: 'paragraph',
      data: { text: 'Climate refers to weather conditions over a long period (e.g. several decades). Climate change occurs when these conditions change significantly. Today, this term is commonly used to describe global warming resulting from human activities.' }
    },
    {
      id: 'h-evidence-types',
      type: 'heading',
      data: { text: 'Types of Evidence', level: 3 }
    },
    {
      id: 'p-evidence-list-intro',
      type: 'paragraph',
      data: { text: 'Scientists hypothesise that global warming is currently taking place, driven by human activities that increase atmospheric greenhouse gases. This is supported by several types of evidence:' }
    },
    {
      id: 'list-evidence',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Records of atmospheric carbon dioxide levels.',
          'Records of average global temperatures.',
          'Records of changing plant communities (pollen grains in peat).',
          'Records of tree growth using tree rings (dendrochronology).'
        ]
      }
    },
    {
      id: 'h-co2-evidence',
      type: 'heading',
      data: { text: 'Atmospheric Carbon Dioxide', level: 3 }
    },
    {
      id: 'p-co2',
      type: 'paragraph',
      data: { text: 'Carbon dioxide levels have naturally fluctuated due to volcanic eruptions and rock weathering. These historical levels are established by analysing gas bubbles in ancient ice cores. However, since the industrial revolution, CO₂ concentrations have risen to their highest point (above 400 ppm), driven primarily by the combustion of fossil fuels and large-scale deforestation.' }
    },
    {
      id: 'h-temperature-evidence',
      type: 'heading',
      data: { text: 'Average Global Temperatures', level: 3 }
    },
    {
      id: 'p-temp',
      type: 'paragraph',
      data: { text: 'Continuous thermometer records exist since the 1850s, showing a clear warming trend that closely matches the increase in carbon dioxide levels. This positive correlation suggests that rising CO₂ causes rising global temperatures.' }
    },
    {
      id: 'h-pollen-evidence',
      type: 'heading',
      data: { text: 'Pollen in Peat Bogs', level: 3 }
    },
    {
      id: 'p-pollen',
      type: 'paragraph',
      data: { text: 'Peat bogs accumulate slowly over thousands of years as dead plant matter fails to fully decompose in anaerobic, acidic conditions. Pollen grains are preserved in peat:' }
    },
    {
      id: 'list-pollen',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Plants produce pollen in vast quantities, protected by detailed, tough outer layers.',
          'Pollen species can be identified from their unique shapes.',
          'Deeper peat layers are older; carbon-14 dating can establish the exact age.',
          'Comparing pollen species in peat layers reveals changes in plant communities, which in turn indicates changes in the climate (e.g. shifts to warmer or wetter conditions).'
        ]
      }
    },
    {
      id: 'h-dendro-evidence',
      type: 'heading',
      data: { text: 'Dendrochronology (Tree Rings)', level: 3 }
    },
    {
      id: 'p-dendro',
      type: 'paragraph',
      data: { text: 'Trees grow thicker trunks as they produce new xylem vessels each year. This creates visible rings. Ring thickness depends on the climate: wider rings form in warmer, wetter years where growth is faster. Core samples or tree trimmings can be used to count rings and trace climate patterns spanning up to 3000 years.' }
    },
    {
      id: 'h-anthropogenic',
      type: 'heading',
      data: { text: 'Anthropogenic Climate Change', level: 2 }
    },
    {
      id: 'p-anthro-intro',
      type: 'paragraph',
      data: { text: 'While greenhouse gases have natural sources, human activities since the industrial revolution have rapidly shifted the atmospheric balance. Anthropogenic means arising from human activity.' }
    },
    {
      id: 'h-greenhouse-effect',
      type: 'heading',
      data: { text: 'The Greenhouse Effect', level: 3 }
    },
    {
      id: 'list-greenhouse',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Short-wave solar radiation (UV and visible light) strikes the Earth and warms the surface.',
          'The Earth radiates this energy back into space as long-wave infrared heating.',
          'Greenhouse gases (CO₂, methane, water vapour) absorb this outgoing long-wave radiation.',
          'These gases re-radiate the heat in all directions, trapping it in the atmosphere.'
        ]
      }
    },
    {
      id: 'callout-greenhouse',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Essential but Dangerous',
        text: 'The greenhouse effect is essential; without it, Earth would be too cold for life. However, an enhanced greenhouse effect due to anthropogenic gases leads to global warming, ice melt, and sea-level rise.'
      }
    },
    {
      id: 'h-co2-methane',
      type: 'heading',
      data: { text: 'Carbon Dioxide and Methane', level: 3 }
    },
    {
      id: 'list-gas-sources',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Carbon Dioxide ($CO_2$):** Risen from 300 ppm to 400+ ppm due to fossil fuel combustion and deforestation. It remains in the atmosphere for a long time.',
          '**Methane ($CH_4$):** Absorbs more infrared radiation than $CO_2$. Released by agriculture (rice paddies, cattle farming), anaerobic decay in wetlands, and landfill sites.'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'What are the four main types of evidence for climate change?' },
      { id: 'cue-2', prompt: 'How does dendrochronology provide evidence of past climates?' },
      { id: 'cue-3', prompt: 'Why is pollen well-preserved in peat bogs?' },
      { id: 'cue-4', prompt: 'Describe the sequence of the greenhouse effect.' }
    ],
    summaryText: 'Evidence includes $CO_2$ levels, global temperatures, pollen in peat, and tree rings (dendrochronology). The greenhouse effect traps long-wave radiation via gases like $CO_2$ and methane, leading to anthropogenic warming.'
  }
};
