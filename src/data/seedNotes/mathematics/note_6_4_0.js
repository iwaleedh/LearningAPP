export const note_mathematics_6_4_0 = {
  blocks: [
    {
      id: 'obj-6-4-0',
      type: 'objective',
      data: { text: 'Interpret scatter diagrams; identify types of correlation; understand why correlation does not imply causation; distinguish interpolation from extrapolation.' }
    },
    {
      id: 'h-scatter',
      type: 'heading',
      data: { text: 'Scatter Diagrams', level: 2 }
    },
    {
      id: 'p-scatter',
      type: 'paragraph',
      data: { text: 'A scatter diagram plots paired (x, y) data values. One variable is the explanatory (independent) variable (x-axis) and the other is the response (dependent) variable (y-axis).' }
    },
    {
      id: 'h-corr-types',
      type: 'heading',
      data: { text: 'Types of Correlation', level: 2 }
    },
    {
      id: 'table-correlation',
      type: 'comparisonTable',
      data: {
        headers: ['Type', 'Pattern', 'Description'],
        rows: [
          ['Strong positive', 'Points tightly around upward line', 'As x increases, y increases closely'],
          ['Weak positive', 'Scattered loosely upward', 'As x increases, y tends to increase'],
          ['Strong negative', 'Points tightly around downward line', 'As x increases, y decreases closely'],
          ['Weak negative', 'Scattered loosely downward', 'As x increases, y tends to decrease'],
          ['Zero (no correlation)', 'No clear pattern', 'x and y show no linear relationship']
        ],
        caption: 'Types of correlation'
      }
    },
    {
      id: 'h-causation',
      type: 'heading',
      data: { text: 'Correlation vs Causation', level: 2 }
    },
    {
      id: 'callout-causation',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Correlation \u2260 Causation',
        text: 'A strong correlation between x and y does not mean x causes y. There may be a lurking (confounding) variable, or the correlation may be coincidental.\n\nExample: Ice cream sales and drowning rates are positively correlated, but ice cream does not cause drowning \u2014 hot weather causes both.'
      }
    },
    {
      id: 'h-interp-extrap',
      type: 'heading',
      data: { text: 'Interpolation vs Extrapolation', level: 2 }
    },
    {
      id: 'table-interp',
      type: 'comparisonTable',
      data: {
        headers: ['Type', 'Definition', 'Reliability'],
        rows: [
          ['Interpolation', 'Predicting y for an x value within the range of the data', 'More reliable; the model is supported by data in this region'],
          ['Extrapolation', 'Predicting y for an x value outside the range of the data', 'Less reliable; the pattern may not continue']
        ],
        caption: 'Interpolation vs extrapolation'
      }
    },
    {
      id: 'callout-tip-scatter',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When asked to "comment on the use of the regression line to predict", state whether it is interpolation or extrapolation, and whether the prediction is reliable. Always identify which variable is explanatory and which is response.'
      }
    },
    {
      id: 'sum-6-4-0',
      type: 'summary',
      data: { text: 'Scatter diagrams show relationship between paired data. Correlation can be positive, negative, or zero; strong or weak. Correlation \u2260 causation. Interpolation (within data range) is more reliable than extrapolation (outside range).' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When interpreting a scatter diagram, always describe the correlation in context. Instead of just writing 'positive correlation', write 'positive correlation, so as temperature increases, the reaction rate increases'. Remember that extrapolation is unreliable because the trend may not continue outside the observed data range."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-causation', prompt: 'Explain why strong correlation between two variables does not necessarily mean one causes the other.' },
      { id: 'cue-2', blockId: 'table-interp', prompt: 'Define interpolation and extrapolation. Which is more reliable and why?' },
      { id: 'cue-3', blockId: 'table-correlation', prompt: 'Describe the scatter diagram pattern for strong negative correlation.' }
    ],
    summaryText: 'Correlation types: positive/negative, strong/weak. Correlation \u2260 causation. Interpolation (reliable) vs extrapolation (unreliable).',
    ready: true
  },
  evidence: []
};
