export const note_mathematics_6_4_1 = {
  blocks: [
    {
      id: 'obj-6-4-1',
      type: 'objective',
      data: { text: 'Calculate the product moment correlation coefficient (pmcc); interpret its value; conduct a hypothesis test for correlation.' }
    },
    {
      id: 'h-pmcc',
      type: 'heading',
      data: { text: 'Product Moment Correlation Coefficient', level: 2 }
    },
    {
      id: 'callout-pmcc-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'PMCC Formula',
        text: 'r = S\u2093\u1da7 / \u221a(S\u2093\u2093 \u00d7 S\u1da7\u1da7)\n\nwhere:\nS\u2093\u1da7 = \u03a3xy \u2212 (\u03a3x)(\u03a3y)/n\nS\u2093\u2093 = \u03a3x\u00b2 \u2212 (\u03a3x)\u00b2/n\nS\u1da7\u1da7 = \u03a3y\u00b2 \u2212 (\u03a3y)\u00b2/n\n\nRange: \u22121 \u2264 r \u2264 1'
      }
    },
    {
      id: 'h-interpret',
      type: 'heading',
      data: { text: 'Interpreting r', level: 2 }
    },
    {
      id: 'table-r-values',
      type: 'comparisonTable',
      data: {
        headers: ['Value of r', 'Interpretation'],
        rows: [
          ['r = 1', 'Perfect positive linear correlation'],
          ['0 < r < 1', 'Positive correlation (stronger as r \u2192 1)'],
          ['r = 0', 'No linear correlation'],
          ['\u22121 < r < 0', 'Negative correlation (stronger as r \u2192 \u22121)'],
          ['r = \u22121', 'Perfect negative linear correlation']
        ],
        caption: 'Interpreting the PMCC value'
      }
    },
    {
      id: 'callout-pmcc-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: PMCC',
        text: 'n=5, \u03a3x=25, \u03a3y=30, \u03a3xy=162, \u03a3x\u00b2=135, \u03a3y\u00b2=194\n\nS\u2093\u1da7 = 162 \u2212 (25\u00d730)/5 = 162 \u2212 150 = 12\nS\u2093\u2093 = 135 \u2212 625/5 = 135 \u2212 125 = 10\nS\u1da7\u1da7 = 194 \u2212 900/5 = 194 \u2212 180 = 14\nr = 12 / \u221a(10 \u00d7 14) = 12 / \u221a140 = 12/11.83 = 0.985 (3 s.f.)'
      }
    },
    {
      id: 'h-hyp-test',
      type: 'heading',
      data: { text: 'Hypothesis Testing for Correlation', level: 2 }
    },
    {
      id: 'list-hyp-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'H\u2080: \u03c1 = 0 (no linear correlation in the population)' },
          { text: 'H\u2081: \u03c1 > 0 (positive), \u03c1 < 0 (negative), or \u03c1 \u2260 0 (two-tailed)' },
          { text: 'Calculate r from the sample data.' },
          { text: 'Compare r to the critical value from tables (depends on n and significance level).' },
          { text: 'If |r| > critical value, reject H\u2080. Conclude there is significant linear correlation.' }
        ]
      }
    },
    {
      id: 'callout-hyp-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'In your conclusion, always refer to the context: e.g. "There is evidence of a positive linear correlation between height and mass at the 5% significance level."\n\nFor a two-tailed test at 5%, use the 2.5% column in the critical values table.'
      }
    },
    {
      id: 'sum-6-4-1',
      type: 'summary',
      data: { text: 'r = S\u2093\u1da7/\u221a(S\u2093\u2093 S\u1da7\u1da7); \u22121 \u2264 r \u2264 1. r close to \u00b11 = strong linear; r = 0 = no linear. Hypothesis test: H\u2080:\u03c1=0; compare |r| to critical value.' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When calculating the PMCC (r), use the summary statistics given in the question and show the substitution into the formula clearly. If the calculated 'r' falls outside the bounds of -1 to 1, you have definitely made an arithmetic error."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-pmcc-formula', prompt: 'State the formula for r and the formulas for S\u2093\u1da7, S\u2093\u2093, and S\u1da7\u1da7.' },
      { id: 'cue-2', blockId: 'table-r-values', prompt: 'What does r = \u22120.95 tell you about the correlation? What about r = 0.2?' },
      { id: 'cue-3', blockId: 'list-hyp-steps', prompt: 'Outline the hypothesis testing procedure for correlation using r.' }
    ],
    summaryText: 'r = S\u2093\u1da7/\u221a(S\u2093\u2093S\u1da7\u1da7); \u22121\u2264r\u22641. Test H\u2080:\u03c1=0 by comparing |r| to critical value.',
    ready: true
  },
  evidence: []
};
