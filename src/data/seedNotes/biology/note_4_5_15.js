export const note_biology_4_5_15 = {
  blocks: [
    {
      id: 'obj-15',
      type: 'objective',
      data: { text: 'Understand the carbon cycle and its role in environmental management.' }
    },
    {
      id: 'h-carbon-cycle',
      type: 'heading',
      data: { text: 'The Carbon Cycle', level: 2 }
    },
    {
      id: 'p-carbon-cycle-intro',
      type: 'paragraph',
      data: { text: 'The atmospheric carbon dioxide that contributes to the greenhouse effect is part of the global carbon cycle. The carbon cycle refers to the many processes by which carbon is transferred and stored:' }
    },
    {
      id: 'list-carbon-stores',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Carbon is found in the biomass of living organisms (e.g. in carbohydrates and proteins).',
          'Carbon is transferred when one organism consumes and digests another.',
          'Carbon is found in the atmosphere as carbon dioxide ($CO_2$) and in oceans as dissolved ions (e.g. hydrogen carbonate ions).'
        ]
      }
    },
    {
      id: 'h-carbon-events',
      type: 'heading',
      data: { text: 'Events in the Carbon Cycle', level: 3 }
    },
    {
      id: 'list-carbon-events',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Photosynthesis:** Carbon dioxide is removed from the atmosphere by producers. Producers incorporate carbon into their biomass as carbohydrates and other biological molecules.',
          '**Feeding:** Carbon is transferred to and between consumers along food chains.',
          '**Respiration:** Carbon is released back into the atmosphere by plants, animals, and decomposers as a product of aerobic respiration.',
          '**Ocean Dissolution:** Carbon dioxide dissolves in oceans. Marine plants use it for photosynthesis, while other marine organisms use it to build calcium carbonate exoskeletons.',
          '**Decomposition:** Broken down tissues release carbon dioxide back into the atmosphere when decomposers (bacteria and fungi) respire.',
          '**Fossilisation:** Living tissue that is not fully decomposed can form peat or fossil fuels (coal, oil, gas) over millions of years, acting as long-term carbon sinks.',
          '**Combustion:** Burning of peat, fossil fuels, or biomass (wood) releases stored carbon back into the atmosphere as $CO_2$.'
        ]
      }
    },
    {
      id: 'callout-carbon-pools',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Carbon Pools and Fluxes',
        text: 'The carbon cycle consists of **carbon pools** (locations where carbon is stored, like oceans and fossil fuels) and **carbon fluxes** (processes by which it is transferred, like photosynthesis and combustion).'
      }
    },
    {
      id: 'h-environment-mgmt',
      type: 'heading',
      data: { text: 'Environmental Management', level: 2 }
    },
    {
      id: 'p-env-mgmt-intro',
      type: 'paragraph',
      data: { text: 'A good understanding of the carbon cycle is essential in the fight against global warming. By identifying points where carbon enters or leaves the atmosphere, we can intervene to prevent further increases in atmospheric $CO_2$.' }
    },
    {
      id: 'list-env-mgmt',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Reducing emissions:** Decrease combustion of fossil fuels, limit burning of biomass, and prevent disturbance of carbon pools like soils and peat bogs.',
          '**Increasing removal:** Enhance transfers that remove carbon (e.g. increasing rates of photosynthesis by planting trees and reforestation).'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'What biological process removes carbon dioxide from the atmosphere?' },
      { id: 'cue-2', prompt: 'How is carbon transferred between living organisms?' },
      { id: 'cue-3', prompt: 'Name three ways carbon is returned to the atmosphere.' },
      { id: 'cue-4', prompt: 'How can understanding the carbon cycle inform environmental management?' }
    ],
    summaryText: 'Photosynthesis removes $CO_2$, feeding transfers carbon, and respiration, decomposition, and combustion return it. Management involves reducing emissions (e.g. burning fossil fuels) and increasing removal (e.g. planting trees).'
  }
};
