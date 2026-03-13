export const note_biology_4_5_13 = {
  noteId: 'biology:4:5:13',
  blocks: [
    {
      type: 'objective',
      id: 'obj-energy',
      data: {
        text: 'Understand how energy is transferred through ecosystems via food chains and webs, and calculate the efficiency of energy transfer between trophic levels.',
      },
    },
    {
      type: 'heading',
      id: 'h-energy-transfer',
      data: { text: 'Energy and Biomass Transfers', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-energy-diagram',
      data: {
        text: 'Energy enters most ecosystems as sunlight, which is captured by producers in photosynthesis and converted to chemical energy. It is transferred along food chains, but only roughly 10% of the chemical energy is passed from one trophic level to the consumer\'s biomass in the next.',
      },
    },
    {
      type: 'list',
      id: 'list-energy-losses',
      data: {
        style: 'bullet',
        items: [
          'Not all parts of the organism are eaten (e.g. roots, bones).',
          'Some consumed food cannot be digested (e.g. cellulose) and is lost as faeces (egestion).',
          'Energy is lost as heat to the environment during respiration, which powers life functions.',
          'Metabolic waste products are lost in excretion (e.g. urea in urine).'
        ],
      },
    },
    {
      type: 'equation',
      id: 'eq-efficiency',
      data: {
        html: 'Energy efficiency = (Net productivity &divide; Energy received) &times; 100',
        caption: 'Efficiency of energy transfer (%)',
      },
    },
    {
      type: 'callout',
      id: 'callout-biomass',
      data: {
        style: 'key',
        title: 'Measuring Dry Biomass',
        text: 'Biomass is measured as dry mass because water content fluctuates. A sample is dried in an oven at low heat and weighed at regular intervals until the mass becomes constant (indicating all water has evaporated).',
      },
    },
    {
      type: 'callout',
      id: 'callout-worked-eff',
      data: {
        style: 'worked',
        title: 'Calculating Energy Efficiency',
        text: 'A predator ingests 10,000 kJ. It loses 7,000 kJ via respiration and 2,000 kJ in faeces/urine.\nNet productivity = 10,000 - 9,000 = 1,000 kJ.\nEfficiency = (1,000 / 10,000) &times; 100 = 10%.',
      },
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-energy-losses', prompt: 'List 4 ways energy is lost between trophic levels.' },
      { id: 'cue-2', blockId: 'callout-biomass', prompt: 'How is dry biomass accurately measured?' },
      { id: 'cue-3', blockId: 'eq-efficiency', prompt: 'How do you calculate energy transfer efficiency?' }
    ],
    summaryText: 'Energy transfer is inefficient due to heat loss (respiration), egestion, excretion, and uneaten parts. Biomass is measured dry by heating until mass is constant.',
    ready: true,
  },
  evidence: [],
  mentions: [],
};
