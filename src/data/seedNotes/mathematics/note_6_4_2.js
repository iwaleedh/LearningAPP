export const note_mathematics_6_4_2 = {
  blocks: [
    {
      id: 'obj-6-4-2',
      type: 'objective',
      data: { text: 'Find the equation of the least squares regression line; interpret the coefficients; use the line to make predictions.' }
    },
    {
      id: 'h-regression-intro',
      type: 'heading',
      data: { text: 'The Least Squares Regression Line', level: 2 }
    },
    {
      id: 'p-regression-intro',
      type: 'paragraph',
      data: { text: 'The regression line of y on x is the straight line that minimises the sum of squared vertical distances from the data points to the line. It is written as \u0177 = a + bx.' }
    },
    {
      id: 'callout-regression-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Regression Line Formulas',
        text: '\u0177 = a + bx\n\nb = S\u2093\u1da7 / S\u2093\u2093\n\na = \u0233 \u2212 b x\u0305\n\nwhere x\u0305 = mean of x, \u0233 = mean of y'
      }
    },
    {
      id: 'callout-regression-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Regression Line',
        text: 'n=5, \u03a3x=25, \u03a3y=30, x\u0305=5, \u0233=6\nS\u2093\u1da7=12, S\u2093\u2093=10\n\nb = 12/10 = 1.2\na = 6 \u2212 1.2\u00d75 = 6\u22126 = 0\n\nRegression line: \u0177 = 0 + 1.2x = 1.2x\n\nPrediction at x=7: \u0177 = 1.2\u00d77 = 8.4'
      }
    },
    {
      id: 'h-interpretation',
      type: 'heading',
      data: { text: 'Interpreting the Coefficients', level: 2 }
    },
    {
      id: 'table-coefficients',
      type: 'comparisonTable',
      data: {
        headers: ['Coefficient', 'Meaning'],
        rows: [
          ['b (gradient)', 'For every 1-unit increase in x, y increases/decreases by b units on average'],
          ['a (intercept)', 'The predicted value of y when x = 0 (may not always be meaningful)']
        ],
        caption: 'Interpreting regression coefficients'
      }
    },
    {
      id: 'h-explanatory',
      type: 'heading',
      data: { text: 'Explanatory and Response Variables', level: 2 }
    },
    {
      id: 'p-explanatory',
      type: 'paragraph',
      data: { text: 'The explanatory (independent) variable x is used to predict the response (dependent) variable y. The regression line of y on x is used to predict y from a given x value, not the other way around. If you need to predict x from y, you need the regression line of x on y (different line).' }
    },
    {
      id: 'callout-tip-regression',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: 'Always check whether a prediction involves interpolation or extrapolation and comment on reliability.\nThe regression line always passes through (\u0305x, \u0233).\nB = S\u2093\u1da7/S\u2093\u2093 is in the formula booklet; a = \u0233 \u2212 b\u0305x must be calculated.'
      }
    },
    {
      id: 'sum-6-4-2',
      type: 'summary',
      data: { text: '\u0177 = a + bx where b = S\u2093\u1da7/S\u2093\u2093 and a = \u0233 \u2212 b\u0305x. Gradient b: change in y per unit x. Always passes through (\u0305x, \u0233). Interpolation \u2192 reliable; extrapolation \u2192 unreliable.' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "The coefficient 'b' in the regression line y = a + bx represents the rate of change. Examiners frequently ask you to interpret 'b': ensure you state 'the expected increase in y for every 1 unit increase in x'. Only use the regression line of y on x to predict y given x, never the other way around."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-regression-formula', prompt: 'State the formulas for b and a in the regression line \u0177 = a + bx.' },
      { id: 'cue-2', blockId: 'table-coefficients', prompt: 'Interpret the gradient (b = 2.5) in the context where x is age (years) and y is salary (\u00a3000).' },
      { id: 'cue-3', blockId: 'p-explanatory', prompt: 'Why must the regression line of y on x not be used to predict x from y?' }
    ],
    summaryText: '\u0177=a+bx; b=S\u2093\u1da7/S\u2093\u2093; a=\u0233\u2212b\u0305x. Line passes through (\u0305x,\u0233). b = change in y per unit x. Interpolation: reliable.',
    ready: true
  },
  evidence: []
};
