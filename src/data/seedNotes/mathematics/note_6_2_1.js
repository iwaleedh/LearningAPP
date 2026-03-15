export const note_mathematics_6_2_1 = {
  blocks: [
    {
      id: 'obj-6-2-1',
      type: 'objective',
      data: { text: 'Calculate the mean, median, and mode for grouped and ungrouped data, and choose the appropriate measure of location.' }
    },
    {
      id: 'h-mean',
      type: 'heading',
      data: { text: 'Mean', level: 2 }
    },
    {
      id: 'callout-mean-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Mean Formulas',
        text: 'Ungrouped: x\u0305 = \u03a3x / n\n\nGrouped (use midpoints): x\u0305 = \u03a3fx / \u03a3f\n\nCoded mean: if y = (x \u2212 a)/b, then x\u0305 = b\u0233 + a'
      }
    },
    {
      id: 'callout-mean-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Grouped Mean',
        text: 'Classes: 0\u20134 (f=2, mid=2), 5\u20139 (f=5, mid=7), 10\u201314 (f=3, mid=12)\n\u03a3fx = 2\u00d72 + 5\u00d77 + 3\u00d712 = 4 + 35 + 36 = 75\n\u03a3f = 10\nMean = 75/10 = 7.5'
      }
    },
    {
      id: 'h-median',
      type: 'heading',
      data: { text: 'Median', level: 2 }
    },
    {
      id: 'p-median',
      type: 'paragraph',
      data: { text: 'The median is the middle value when data are ordered. For n values, it is the \u00bd(n+1)th value. For grouped data, use linear interpolation.' }
    },
    {
      id: 'callout-median-interp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Median by Interpolation',
        text: 'Median = L + [(n/2 \u2212 F) / f] \u00d7 h\n\nwhere L = lower class boundary, F = cumulative frequency before the median class, f = frequency of median class, h = class width'
      }
    },
    {
      id: 'callout-median-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Median Interpolation',
        text: 'n = 40, so median is at position 20.\nCumulative frequencies: 0\u201310: 8, 10\u201320: 18, 20\u201330: 30 \u2190 median class\nL=20, F=18, f=12, h=10\nMedian = 20 + [(20\u221218)/12]\u00d710 = 20 + (2/12)\u00d710 = 20 + 1.67 = 21.7'
      }
    },
    {
      id: 'h-mode',
      type: 'heading',
      data: { text: 'Mode', level: 2 }
    },
    {
      id: 'p-mode',
      type: 'paragraph',
      data: { text: 'The mode is the value (or class) with the highest frequency. For grouped continuous data, the modal class is the class with the highest frequency density.' }
    },
    {
      id: 'h-comparison',
      type: 'heading',
      data: { text: 'Choosing the Right Measure', level: 2 }
    },
    {
      id: 'table-location',
      type: 'comparisonTable',
      data: {
        headers: ['Measure', 'Best used when\u2026', 'Affected by outliers?'],
        rows: [
          ['Mean', 'Data is roughly symmetric; all values matter', 'Yes \u2014 pulled towards extreme values'],
          ['Median', 'Data is skewed; outliers present', 'No \u2014 depends only on the middle value(s)'],
          ['Mode', 'Categorical data; most common value needed', 'No']
        ],
        caption: 'When to use each measure of location'
      }
    },
    {
      id: 'callout-skew-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Skewness and Average',
        text: 'Positive skew (tail to right): mean > median > mode\nNegative skew (tail to left): mean < median < mode\nSymmetric (normal): mean = median = mode'
      }
    },
    {
      id: 'sum-6-2-1',
      type: 'summary',
      data: { text: 'Mean = \u03a3fx/\u03a3f (use midpoints for grouped data). Median by interpolation: L + [(n/2 \u2212 F)/f]\u00d7h. Use median when data is skewed or has outliers. Positive skew: mean > median > mode.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-median-interp', prompt: 'Write down the formula for median by interpolation and define each variable.' },
      { id: 'cue-2', blockId: 'table-location', prompt: 'When should the median be preferred over the mean? Why?' },
      { id: 'cue-3', blockId: 'callout-skew-tip', prompt: 'For a positively skewed distribution, state the ordering of mean, median, and mode.' },
      { id: 'cue-4', blockId: 'callout-mean-formula', prompt: 'State the grouped mean formula. What values are used for x?' }
    ],
    summaryText: 'x\u0305 = \u03a3fx/\u03a3f. Median interpolation: L+[(n/2\u2212F)/f]\u00d7h. Positive skew: mean>median>mode. Use median for skewed/outlier data.',
    ready: true
  },
  evidence: []
};
