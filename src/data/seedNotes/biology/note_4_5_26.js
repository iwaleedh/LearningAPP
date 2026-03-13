export const note_biology_4_5_26 = {
  blocks: [
    {
      id: 'obj-26',
      type: 'objective',
      data: { text: 'Understand how sustainable conservation and alternative energy resources can combat climate change.' }
    },
    {
      id: 'h-sustainability',
      type: 'heading',
      data: { text: 'Sustainability', level: 2 }
    },
    {
      id: 'p-sustainability',
      type: 'paragraph',
      data: { text: 'Sustainability is about making use of the world\'s resources in ways that do not damage the environment and that can be maintained for future generations. To limit global warming, it is essential to act quickly to reduce carbon emissions and increase the rate at which carbon is removed from the atmosphere.' }
    },
    {
      id: 'h-reducing-emissions',
      type: 'heading',
      data: { text: 'Reducing Carbon Emissions', level: 2 }
    },
    {
      id: 'p-reducing',
      type: 'paragraph',
      data: { text: 'Limiting fossil fuel combustion is challenging because modern transport, electricity generation, and food production heavily depend on it. Two main ways to reduce fossil fuel use are biofuels and other renewable energy resources.' }
    },
    {
      id: 'h-biofuels',
      type: 'heading',
      data: { text: 'Biofuels', level: 3 }
    },
    {
      id: 'p-biofuels',
      type: 'paragraph',
      data: { text: 'Biofuels are made from recently living plant biomass (e.g. sugar cane). They burn like fossil fuels and release CO₂.' }
    },
    {
      id: 'list-biofuels-pros',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Pros:** Often cheaper than oil; renewable (they can be regrown quickly); argued to be "carbon neutral" because they only release carbon that was recently removed from the atmosphere, not ancient stored carbon.'
        ]
      }
    },
    {
      id: 'list-biofuels-cons',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Cons:** They still release CO₂ into the atmosphere; require vast amounts of land that could be used for food production; clearing land (e.g. rainforests) for biofuel crops destroys habitats and reduces overall photosynthesis capacity.'
        ]
      }
    },
    {
      id: 'h-renewables',
      type: 'heading',
      data: { text: 'Other Renewable Sources', level: 3 }
    },
    {
      id: 'list-renewables',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Wind, Solar, Geothermal, and Tidal.**',
          '**Pros:** Technologies are advancing quickly, becoming cheaper and more efficient. They release no CO₂ when generating electricity.',
          '**Cons:** Geothermal requires volcanic activity; solar depends on sunshine hours; wind depends on wind speeds, has a visual impact, and turbines can harm birds and bats; tidal works only near coasts.'
        ]
      }
    },
    {
      id: 'h-increasing-removal',
      type: 'heading',
      data: { text: 'Increasing Carbon Removal', level: 2 }
    },
    {
      id: 'p-removal',
      type: 'paragraph',
      data: { text: 'While new carbon capture technologies are exciting, they are not yet capable of removing vast quantities of carbon reliably. We must rely on existing methods, primarily photosynthesis.' }
    },
    {
      id: 'list-removal-strategies',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Stopping Deforestation:** Preventing the destruction of forests preserves their carbon storage and photosynthetic capacity.',
          '**Reforestation:** Planting trees allows them to grow to maturity and store huge amounts of carbon in their biomass. This requires significant government support and benefits for landowners (e.g. Costa Rica plants seven times more trees than it cuts down).'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'Define sustainability.' },
      { id: 'cue-2', prompt: 'Why are biofuels often considered "carbon neutral"?' },
      { id: 'cue-3', prompt: 'What are two disadvantages of growing crops for biofuels?' },
      { id: 'cue-4', prompt: 'Identify one disadvantage for wind energy and one for geothermal energy.' },
      { id: 'cue-5', prompt: 'What is currently the most reliable mechanism for removing large amounts of carbon from the atmosphere?' }
    ],
    summaryText: 'Sustainability means using resources without damaging the environment or limiting future generations. Biofuels are "carbon neutral" because they only release recently absorbed CO₂. Disadvantages: they take up agricultural land and can lead to deforestation/habitat loss. Wind energy fluctuates and affects wildlife; geothermal requires volcanic geography. Photosynthesis (via reforestation and halting deforestation) remains the best carbon removal method.'
  }
};
