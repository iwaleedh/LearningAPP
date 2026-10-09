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
        text: "Use x = 3, 4, 5, 6, 7 and y = 4, 4, 6, 8, 8.\nn = 5; Σx = 25; Σy = 30; Σxy = 162; Σx² = 135; Σy² = 196.\n\nSₓᵧ = 162 − (25 × 30)/5 = 12.\nSₓₓ = 135 − 625/5 = 10.\nSᵧᵧ = 196 − 900/5 = 16.\nr = 12 / √(10 × 16) = 12 / √160 = 0.949 (3 s.f.).\nThis indicates strong positive linear correlation. Keep the full calculator value until the final rounding."
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
          { text: 'For a two-tailed test, reject H₀ if |r| reaches the appropriate critical value. For a positive one-tailed test use r ≥ c; for a negative one-tailed test use r ≤ −c. The sample correlation must be in the direction specified by H₁.' }
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
                text: "When calculating the PMCC (r), use the summary statistics given in the question and show the substitution into the formula clearly. If the calculated 'r' falls outside the bounds of -1 to 1, check both your calculation and the supplied summary statistics: a valid PMCC cannot lie outside this range."
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
