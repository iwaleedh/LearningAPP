export const note_mathematics_6_1_1 = {
  pdfPath: '/notes/mathematics/data-presentation-and-interpretation/basic-statistical-measures.pdf',
  blocks: [
    {
      id: 'o-1',
      type: 'objective',
      data: {
        text: 'Understand how to calculate and interpret basic statistical measures like mean, median, mode and use frequency tables.'
      }
    },
    {
      id: 'h-measures',
      type: 'heading',
      data: { text: 'Measures of Central Tendency', level: 2 }
    },
    {
      id: 'p-mean',
      type: 'paragraph',
      data: { text: 'The mean, also known as the average, is calculated by summing all data points and dividing by the total number of observations. For data given in a frequency table, the mean is calculated using <span class="nb-frac"><span class="nb-num">∑fx</span><span class="nb-den">∑f</span></span>.' }
    },
    {
      id: 'p-median',
      type: 'paragraph',
      data: { text: 'The median is the middle value of an ordered dataset. If the total frequency is <em>n</em>, the median is the <span class="nb-frac"><span class="nb-num">n + 1</span><span class="nb-den">2</span></span>th value for discrete data. For continuous data, use linear interpolation.' }
    },
    {
      id: 'p-mode',
      type: 'paragraph',
      data: { text: 'The mode is the value that occurs most frequently. In grouped data, the group with the highest frequency is the modal class.' }
    },
    {
      id: 'h-quartiles',
      type: 'heading',
      data: { text: 'Quartiles and Range', level: 2 }
    },
    {
      id: 'list-quartiles',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Lower Quartile (Q₁):</strong> The value at the 25% mark.' },
          { text: '<strong>Upper Quartile (Q₃):</strong> The value at the 75% mark.' },
          { text: '<strong>Interquartile Range (IQR):</strong> Q₃ − Q₁, which measures the spread of the middle 50% of the data.' }
        ]
      }
    },
    {
      id: 'call-freq',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Grouped Frequency Tables',
        text: 'For grouped data, we use the midpoint of each class interval as <em>x</em> to estimate the mean. Interpolation is used to find the exact median and quartiles.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Central tendency measures are mean, median, and mode. Spread is measured using range and interquartile range. Grouped data requires midpoints for the mean and interpolation for the median and quartiles.' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "For grouped frequency tables, remember to use class midpoints to estimate the mean. A very common error is dividing by the number of classes instead of the total frequency 'n'."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Summary for basic statistics measures.',
    cues: [
      { id: 'cue-1', blockId: 'p-mean', prompt: 'How do you calculate the mean for data in a frequency table?' },
      { id: 'cue-2', blockId: 'p-median', prompt: 'Where is the median found for discrete data of size n?' },
      { id: 'cue-3', blockId: 'list-quartiles', prompt: 'What is the formula for the Interquartile Range?' },
      { id: 'cue-4', blockId: 'call-freq', prompt: 'What value is used for x when estimating the mean from grouped data?' }
    ]
  },
  evidence: [],
  mentions: []
};
