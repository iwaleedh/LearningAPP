export const note_olevel_maths_extended_9_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/mean-median-and-mode.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the mean, median, and mode from a list of data and understand when each average is most appropriate.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Mean, Median and Mode', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'An <strong>average</strong> is a single value that represents a data set. There are three common averages: the mean, the median, and the mode.' }
    },
    {
      id: 'callout-key-mean',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Mean',
        text: 'Mean = <span class="nb-frac"><span class="nb-num">sum of all values</span><span class="nb-den">number of values</span></span><br><br>The mean uses every data value, so it is affected by outliers.'
      }
    },
    {
      id: 'callout-key-median',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Median',
        text: 'The <strong>median</strong> is the middle value when data is arranged in order.<br>• Odd <em>n</em>: median is the <span class="nb-frac"><span class="nb-num"><em>n</em> + 1</span><span class="nb-den">2</span></span>th value<br>• Even <em>n</em>: median is the average of the two middle values'
      }
    },
    {
      id: 'callout-key-mode',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Mode',
        text: 'The <strong>mode</strong> is the most frequent value. A data set can have no mode, one mode, or more than one mode (bimodal).'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Data: 3, 5, 7, 7, 8, 10, 12<br><br><strong>Mean</strong> = <span class="nb-frac"><span class="nb-num">3+5+7+7+8+10+12</span><span class="nb-den">7</span></span> = <span class="nb-frac"><span class="nb-num">52</span><span class="nb-den">7</span></span> ≈ 7.43<br><strong>Median</strong> = 4th value = <strong>7</strong> (7 values, middle is the 4th)<br><strong>Mode</strong> = <strong>7</strong> (appears twice, most frequent)'
      }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'When to use each average',
        headers: ['Average', 'Best for', 'Weakness'],
        rows: [
          ['Mean', 'Numerical data without outliers', 'Distorted by extreme values'],
          ['Median', 'Data with outliers or skew', 'Ignores actual values above/below'],
          ['Mode', 'Categorical data; popularity', 'May not exist or may not be unique']
        ]
      }
    },
    {
      id: 'callout-tip-order',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always put data in <strong>order</strong> before finding the median. Many marks are lost from forgetting this step.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Mean = sum ÷ count. Median = middle value (order first). Mode = most common value. Choose the average that best represents the data considering outliers and data type.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Mean = total ÷ count; median = middle value in order; mode = most frequent.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-mean', prompt: 'How do you calculate the mean?', answer: 'Sum all values and divide by the number of values.' },
      { id: 'cue-2', blockId: 'callout-key-median', prompt: 'How do you find the median position for n values?', answer: 'The (n+1)/2 th value when data is in order.' },
      { id: 'cue-3', blockId: 'callout-key-mode', prompt: 'What is the mode?', answer: 'The most frequently occurring value.' },
      { id: 'cue-4', blockId: 'table-compare', prompt: 'When is the median more appropriate than the mean?', answer: 'When the data has outliers or is skewed — the median is not affected by extreme values.' }
    ]
  },
  evidence: []
};
