export const note_mathematics_6_2_2 = {
  blocks: [
    {
      id: 'obj-6-2-2',
      type: 'objective',
      data: { text: 'Calculate and interpret variance, standard deviation, and interquartile range; apply coding rules; identify outliers.' }
    },
    {
      id: 'h-variance',
      type: 'heading',
      data: { text: 'Variance and Standard Deviation', level: 2 }
    },
    {
      id: 'callout-variance-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Variance and Standard Deviation',
        text: '\u03c3\u00b2 = \u03a3fx\u00b2/\u03a3f \u2212 x\u0305\u00b2\n\n\u03c3 = \u221a(\u03a3fx\u00b2/\u03a3f \u2212 x\u0305\u00b2)\n\nAlso useful: S\u2093\u2093 = \u03a3x\u00b2 \u2212 (\u03a3x)\u00b2/n\n\nFor grouped data use midpoints for x.'
      }
    },
    {
      id: 'callout-variance-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Variance',
        text: 'Data: 2, 4, 4, 4, 5, 5, 7, 9   (n = 8)\n\u03a3x = 40,  x\u0305 = 5\n\u03a3x\u00b2 = 4+16+16+16+25+25+49+81 = 232\n\u03c3\u00b2 = 232/8 \u2212 5\u00b2 = 29 \u2212 25 = 4\n\u03c3 = \u221a4 = 2'
      }
    },
    {
      id: 'h-coding',
      type: 'heading',
      data: { text: 'Coding', level: 2 }
    },
    {
      id: 'p-coding',
      type: 'paragraph',
      data: { text: 'Coding simplifies calculations. If y = (x \u2212 a)/b, then:' }
    },
    {
      id: 'callout-coding-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Coding Rules',
        text: 'x\u0305 = b\u0233 + a  (position shifts by a, scales by b)\n\n\u03c3_x = b \u00d7 \u03c3_y  (standard deviation scales by b only; shift has no effect)\n\nvar_x = b\u00b2 \u00d7 var_y'
      }
    },
    {
      id: 'h-iqr',
      type: 'heading',
      data: { text: 'Interquartile Range (IQR)', level: 2 }
    },
    {
      id: 'p-quartiles',
      type: 'paragraph',
      data: { text: 'Quartiles split ordered data into quarters. Q\u2081 is the lower quartile (25th percentile), Q\u2082 is the median (50th), Q\u2083 is the upper quartile (75th).' }
    },
    {
      id: 'callout-iqr',
      type: 'callout',
      data: {
        style: 'key',
        title: 'IQR and Outlier Rule',
        text: 'IQR = Q\u2083 \u2212 Q\u2081\n\nOutlier if: x < Q\u2081 \u2212 1.5 \u00d7 IQR  OR  x > Q\u2083 + 1.5 \u00d7 IQR'
      }
    },
    {
      id: 'callout-iqr-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Outlier Detection',
        text: 'Q\u2081 = 12,  Q\u2083 = 20,  IQR = 8\nLower fence: 12 \u2212 1.5\u00d78 = 12 \u2212 12 = 0\nUpper fence: 20 + 1.5\u00d78 = 20 + 12 = 32\nA value of 35 is an outlier. A value of 3 is not.'
      }
    },
    {
      id: 'h-compare-dispersion',
      type: 'heading',
      data: { text: 'Comparing Measures of Dispersion', level: 2 }
    },
    {
      id: 'table-dispersion',
      type: 'comparisonTable',
      data: {
        headers: ['Measure', 'Based on', 'Affected by outliers?'],
        rows: [
          ['Standard deviation (\u03c3)', 'All data values', 'Yes \u2014 sensitive to extreme values'],
          ['IQR', 'Middle 50% of data', 'No \u2014 robust to outliers'],
          ['Range', 'Max \u2212 min', 'Yes \u2014 very sensitive']
        ],
        caption: 'Measures of dispersion comparison'
      }
    },
    {
      id: 'callout-tip-disp',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Use IQR (with median) when data is skewed or has outliers. Use standard deviation (with mean) for symmetric data. The standard deviation and mean are used together; IQR and median are used together.'
      }
    },
    {
      id: 'sum-6-2-2',
      type: 'summary',
      data: { text: '\u03c3\u00b2 = \u03a3fx\u00b2/\u03a3f \u2212 x\u0305\u00b2. Coding: \u03c3_x = b\u03c3_y. IQR = Q\u2083 \u2212 Q\u2081; outlier if outside Q\u2081\u22121.5\u00d7IQR or Q\u2083+1.5\u00d7IQR. Use IQR+median for skewed data; \u03c3+mean for symmetric data.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-variance-formula', prompt: 'State the formula for variance in terms of \u03a3fx\u00b2, \u03a3f, and x\u0305.' },
      { id: 'cue-2', blockId: 'callout-coding-rules', prompt: 'If y = (x\u2212a)/b, how does the standard deviation of x relate to the standard deviation of y?' },
      { id: 'cue-3', blockId: 'callout-iqr', prompt: 'State the outlier rule using IQR.' },
      { id: 'cue-4', blockId: 'table-dispersion', prompt: 'Why is IQR preferred over standard deviation when data has outliers?' }
    ],
    summaryText: '\u03c3\u00b2 = \u03a3fx\u00b2/\u03a3f \u2212 x\u0305\u00b2. Coding: \u03c3_x = b\u03c3_y. Outlier: outside Q\u2081\u22121.5IQR or Q\u2083+1.5IQR. IQR robust to outliers.',
    ready: true
  },
  evidence: []
};
