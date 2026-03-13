export const note_biology_4_5_21 = {
  blocks: [
    {
      id: 'obj-21',
      type: 'objective',
      data: { text: 'Understand the effect of temperature on enzyme reactions and how this impacts living organisms in a changing climate.' }
    },
    {
      id: 'h-temperature-effects',
      type: 'heading',
      data: { text: 'The Effect of Temperature on Enzymes', level: 2 }
    },
    {
      id: 'p-kinetics-intro',
      type: 'paragraph',
      data: { text: 'Changing air temperature has a significant impact on the metabolism of living organisms because it directly affects enzyme activity. Every enzyme has a specific optimum temperature at which it catalyses a reaction at the maximum rate.' }
    },
    {
      id: 'list-temp-kinetics',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Lower Temperatures:** Molecules have less kinetic energy and move slowly. This results in a lower frequency of successful collisions between substrates and enzyme active sites, leading to fewer enzyme-substrate complexes forming.',
          '**Higher Temperatures:** Molecules have more kinetic energy and move quickly. This results in a higher frequency of successful collisions and more frequent enzyme-substrate complex formation, meaning reactions speed up.'
        ]
      }
    },
    {
      id: 'h-denaturation',
      type: 'heading',
      data: { text: 'Denaturation', level: 3 }
    },
    {
      id: 'p-denaturation',
      type: 'paragraph',
      data: { text: 'If temperatures increase past a certain point, the reaction rate drops sharply as the enzyme begins to denature:' }
    },
    {
      id: 'list-denaturation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Increased kinetic energy and vibration put strain on the enzyme\'s bonds.',
          'Weaker hydrogen and ionic bonds that hold the precise 3D shape start to break.',
          'The breaking of bonds causes the tertiary structure of the enzyme to change.',
          'The active site permanently loses its specific shape and is no longer complementary to the substrate.',
          'The substrate can no longer bind (denaturation has occurred).'
        ]
      }
    },
    {
      id: 'h-q10',
      type: 'heading',
      data: { text: 'Calculating the Temperature Coefficient ($Q_{10}$)', level: 2 }
    },
    {
      id: 'p-q10',
      type: 'paragraph',
      data: { text: 'The temperature coefficient, represented by $Q_{10}$, calculates the increase in the rate of reaction when the temperature is increased by $10^\circ C$.' }
    },
    {
      id: 'eq-q10',
      type: 'equation',
      data: {
        html: 'Q<sub>10</sub> = <span class="nb-frac"><span class="nb-num">rate at higher temperature</span><span class="nb-den">rate at lower temperature (10°C lower)</span></span>',
        caption: 'Equation for $Q_{10}$'
      }
    },
    {
      id: 'callout-q10',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Interpreting Q10',
        text: 'A $Q_{10}$ value of 2 indicates that the reaction rate doubles with an increase in temperature of $10^\circ C$. A value of 3 indicates that it trebles.'
      }
    },
    {
      id: 'callout-worked-q10',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Calculating Q10',
        text: 'At $30^\circ C$, the rate is $3.5 \text{ cm}^3 \text{ s}^{-1}$. At $40^\circ C$, the rate is $6.8 \text{ cm}^3 \text{ s}^{-1}$.\n\n$\text{Step 1: } Q_{10} = 6.8 \div 3.5$\n$\text{Step 2: } Q_{10} = 1.94$\n\nThis value is close to 2, indicating the rate has almost doubled.'
      }
    },
    {
      id: 'h-organism-impacts',
      type: 'heading',
      data: { text: 'Enzyme Activity and Living Organisms', level: 2 }
    },
    {
      id: 'p-organism-impacts',
      type: 'paragraph',
      data: { text: 'Global temperature changes directly affect living organisms by altering their enzymatic reaction rates:' }
    },
    {
      id: 'list-impacts',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Accelerated Reactions:** E.g. Cyanobacteria photosynthesise faster in warmer water, leading to harmful algal blooms.',
          '**Slowed Reactions:** At very high temperatures, plants may perform photorespiration at higher rates (using the enzyme RuBisCO) instead of photosynthesis. This slows down plant growth and reduces crop yields.',
          '**Development Issues:** Some fish eggs develop more slowly at elevated temperatures, and extreme fluctuations can reduce hatching rates in invertebrates.',
          '**Sex Ratios:** In some species (like alligators), the sex of the offspring is determined by incubation temperature, so changing climates can severely alter population sex ratios.'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'Why do enzyme reaction rates increase as temperature rises towards the optimum?' },
      { id: 'cue-2', prompt: 'What happens to an enzyme if the temperature increases past its optimum?' },
      { id: 'cue-3', prompt: 'What does a $Q_{10}$ value of 2 indicate?' },
      { id: 'cue-4', prompt: 'Give two examples of how rising temperatures can negatively affect species.' }
    ],
    summaryText: 'Reactions speed up due to increased kinetic energy and more frequent successful collisions. Past the optimum, bonds break and enzymes denature. A $Q_{10}$ of 2 means the rate doubles for every $10^\circ C$ rise. Negative impacts include skewed sex ratios in alligators, reduced crop yields due to photorespiration, and harmful algal blooms.'
  }
};
