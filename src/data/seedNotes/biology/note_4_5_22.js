export const note_biology_4_5_22 = {
  blocks: [
    {
      id: 'obj-22',
      type: 'objective',
      data: { text: 'Understand Core Practical 12: Investigate the effect of temperature on the development of organisms (e.g. seedling growth rate and brine shrimp hatching).' }
    },
    {
      id: 'h-cp12-intro',
      type: 'heading',
      data: { text: 'Effect of Temperature on Development', level: 2 }
    },
    {
      id: 'p-cp12-intro',
      type: 'paragraph',
      data: { text: 'Evidence from the natural world indicates that global warming affects the development of living organisms. We can investigate this in a laboratory by isolating temperature while controlling other variables (like light intensity or food availability). Two common investigations are seedling growth rate and the hatching rate of brine shrimps.' }
    },
    {
      id: 'h-seedling-growth',
      type: 'heading',
      data: { text: 'Experiment 1: Seedling Growth Rate', level: 3 }
    },
    {
      id: 'list-seedling-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Plant seeds of the same variety in several pots or trays of compost, keeping initial conditions identical.',
          'Allow the seeds to germinate and produce some initial growth.',
          'Measure the initial height of every seedling.',
          'Place each pot into an incubator at a different temperature for the same amount of time (e.g. 5 days). Ensure other factors (soil moisture, pH, light intensity) are controlled.',
          'Remove the seedlings and record the final height of each seedling.',
          'Calculate the average growth rate: $\text{average change in height} \div \text{days of incubation}$.'
        ]
      }
    },
    {
      id: 'callout-seedling-result',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Expected Outcome',
        text: 'Seedling growth rate increases as temperature increases up to an optimum (e.g. $25^\circ C$), after which the growth rate decreases due to the denaturation of cellular enzymes at high temperatures.'
      }
    },
    {
      id: 'h-brine-shrimp',
      type: 'heading',
      data: { text: 'Experiment 2: Brine Shrimp Hatching', level: 3 }
    },
    {
      id: 'list-shrimp-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Place an equal number (e.g. 40) of brine shrimp eggs into a series of water baths at different temperatures. Use non-chlorinated water with $2\text{ g}$ of salt per $100\text{ cm}^3$.',
          'Ensure control variables are kept constant (age of eggs, water pH, water volume, dissolved oxygen).',
          'Observe and record the number of hatched brine shrimps at set time intervals (e.g. every 12 hours) using a bright lamp to illuminate the water bath momentarily.',
          'Calculate the hatching rate per hour: $\text{number of hatched eggs} \div \text{hours in water bath}$.'
        ]
      }
    },
    {
      id: 'callout-shrimp-welfare',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Ethical and Welfare Considerations',
        text: 'Brine shrimps are living organisms. To ensure ethical treatment:\n1. Return hatched shrimps to a suitable natural-like environment.\n2. Handled them gently and quickly.\n3. Do not use dangerously high temperatures.\n4. Switch off bright observation lamps when not in use.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'Why are these temperature experiments conducted in a laboratory rather than in the wild?' },
      { id: 'cue-2', prompt: 'Identify three controlled variables in the seedling growth experiment.' },
      { id: 'cue-3', prompt: 'How do you calculate the hatching rate of brine shrimps?' },
      { id: 'cue-4', prompt: 'What are two ethical considerations when working with brine shrimps?' }
    ],
    summaryText: 'Laboratories allow the control of other variables. Controlled variables for seedlings include soil moisture, pH, and light intensity. Hatching rate = (hatched eggs) ÷ (hours). Ethical considerations include returning them to a suitable habitat, avoiding extreme heat, and gentle handling.'
  }
};
