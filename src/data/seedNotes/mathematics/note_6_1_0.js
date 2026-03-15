export const note_mathematics_6_1_0 = {
  pdfPath: '/notes/mathematics/statistical-sampling/sampling-and-data-collection.pdf',
  blocks: [
    {
      id: 'o-1',
      type: 'objective',
      data: {
        text: 'Understand the different types of data, terminology related to sampling and how to carry out different sampling techniques.'
      }
    },
    {
      id: 'h-data-types',
      type: 'heading',
      data: { text: 'Types of Data', level: 2 }
    },
    {
      id: 'p-data',
      type: 'paragraph',
      data: { text: 'Data can be categorised into different types based on how it is collected and its properties.' }
    },
    {
      id: 'list-data',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Qualitative data:</strong> Data that is usually given in words, not numbers, to describe something (e.g. car colours).' },
          { text: '<strong>Quantitative data:</strong> Data that is given using numbers, expressing counts or measures.' },
          { text: '<strong>Discrete data:</strong> Quantitative data that takes specific values from a set (e.g. number of heads when flipping a coin). This is typically counted.' },
          { text: '<strong>Continuous data:</strong> Quantitative data that needs to be measured and can take any value within a range of infinite values (e.g. height, weight).' }
        ]
      }
    },
    {
      id: 'h-sampling-words',
      type: 'heading',
      data: { text: 'Other Key Words', level: 2 }
    },
    {
      id: 'list-words',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Population:</strong> The whole set of items that are of interest.' },
          { text: '<strong>Sample:</strong> A subset of the population used to collect data.' },
          { text: '<strong>Sampling frame:</strong> A list of all members of the population.' },
          { text: '<strong>Population parameter:</strong> A numerical value which describes a characteristic of the population.' },
          { text: '<strong>Sample statistic:</strong> A value computed using data from the sample, often used to estimate population parameters.' }
        ]
      }
    },
    {
      id: 'h-sampling-tech',
      type: 'heading',
      data: { text: 'Sampling Techniques', level: 2 }
    },
    {
      id: 'p-census',
      type: 'paragraph',
      data: { text: 'A census collects data about all the members of a population. It gives a completely accurate result, but is time-consuming, expensive, and cannot be used when the testing process destroys the item. Alternatively, sampling is used to collect data from a subset of the population. It is cheaper and quicker, but might not represent the population accurately and could introduce bias.' }
    },
    {
      id: 'h-methods',
      type: 'heading',
      data: { text: 'Sampling Methods', level: 3 }
    },
    {
      id: 'list-methods',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Simple random sampling:</strong> Every group of size <em>n</em> has an equal probability of being selected. Usually done using random number generators or lottery.' },
          { text: '<strong>Systematic sampling:</strong> Items are chosen at regular intervals from an ordered list. The interval size is calculated using <span class="nb-frac"><span class="nb-num">Population Size (N)</span><span class="nb-den">Sample Size (n)</span></span>.' },
          { text: '<strong>Stratified sampling:</strong> The population is divided into mutually exclusive strata and a random sample is taken from each. The proportion in the sample from each stratum must match the population proportion.' },
          { text: '<strong>Quota sampling:</strong> The population is divided into groups and an interviewer selects members to fill a quota per group. It is non-random.' },
          { text: '<strong>Opportunity (convenience) sampling:</strong> A sample taken from people who are available at the time the study is carried out and who fit the criteria.' }
        ]
      }
    },
    {
      id: 'call-sample-critique',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Bias in Sampling',
        text: 'Most sampling techniques can be improved by taking a larger sample. Sampling can introduce bias, which can be minimised by ensuring the sample is truly random.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Data can be qualitative or quantitative (discrete/continuous). Data can be taken from a census (entire population) or a sample (subset). Key sampling types include simple random, systematic, stratified, quota, and opportunity sampling.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Summary for sampling and types of data.',
    cues: [
      { id: 'cue-1', blockId: 'list-data', prompt: 'What is the difference between discrete and continuous data?' },
      { id: 'cue-2', blockId: 'list-words', prompt: 'Define a sampling frame.' },
      { id: 'cue-3', blockId: 'list-methods', prompt: 'How is systematic sampling carried out?' },
      { id: 'cue-4', blockId: 'p-census', prompt: 'Give one advantage and one disadvantage of a census.' }
    ]
  },
  evidence: [],
  mentions: []
};
