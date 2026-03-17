export const note_olevel_maths_extended_9_3_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/linear-regression-lines.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the equation of a regression line, calculate the equation y = a + bx using given means or a calculator, and use it to make predictions.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Linear Regression Lines', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A <strong>regression line</strong> (line of best fit calculated algebraically) has the equation <strong>y = a + bx</strong>, where <em>b</em> is the <strong>gradient</strong> (rate of change) and <em>a</em> is the <strong>y-intercept</strong>.' }
    },
    {
      id: 'callout-key-meaning',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Interpreting the Equation',
        text: 'In y = a + bx:<br>• <strong><em>b</em></strong> (gradient) — for each unit increase in x, y changes by b units<br>• <strong><em>a</em></strong> (intercept) — the value of y when x = 0 (may not have practical meaning)'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'The regression line for temperature (°C) against ice cream sales (£) is: Sales = 50 + 12 × Temperature.<br><br><strong>Interpret:</strong><br>• For each 1°C rise in temperature, sales increase by £12<br>• At 0°C, sales would be £50 (baseline)<br><br><strong>Predict sales at 25°C:</strong><br>Sales = 50 + 12(25) = 50 + 300 = <strong>£350</strong>'
      }
    },
    {
      id: 'callout-key-pass-mean',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Property',
        text: 'The regression line always passes through the point (x̄, ȳ) — the mean of x and the mean of y.'
      }
    },
    {
      id: 'callout-warning-extrap',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Extrapolation Warning',
        text: 'Only use the regression equation for values within (or close to) the range of the original data. Predictions far outside this range are unreliable.'
      }
    },
    {
      id: 'callout-tip-calc',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Using Your Calculator',
        text: 'In statistics mode, enter (x, y) data pairs. The calculator gives <em>a</em> and <em>b</em> for the regression line y = a + bx. On Casio: STAT &rarr; REG &rarr; Lin.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'The regression line y = a + bx gives the calculated line of best fit. b is the rate of change per unit of x. The line passes through (x̄, ȳ). Only interpolate — don\'t extrapolate beyond the data range.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Regression line y = a + bx. b = gradient (rate of change), a = y-intercept. Passes through (x̄, ȳ).',
    cues: [
      { id: 'cue-1', blockId: 'p-def', prompt: 'What is the equation form of a regression line?', answer: 'y = a + bx, where b is the gradient and a is the y-intercept.' },
      { id: 'cue-2', blockId: 'callout-key-meaning', prompt: 'What does the gradient b represent?', answer: 'For each unit increase in x, y changes by b units.' },
      { id: 'cue-3', blockId: 'callout-key-pass-mean', prompt: 'What special point does a regression line pass through?', answer: 'The mean point (x̄, ȳ).' },
      { id: 'cue-4', blockId: 'callout-warning-extrap', prompt: 'Should you use the regression equation far outside the data range?', answer: 'No — extrapolation beyond the data range is unreliable.' }
    ]
  },
  evidence: []
};
