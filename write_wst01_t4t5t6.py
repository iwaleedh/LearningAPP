import os

base = 'src/data/seedNotes/mathematics'
os.makedirs(base, exist_ok=True)

files = {}

# ── note_6_4_0.js ── Scatter diagrams and correlation
files['note_6_4_0.js'] = r"""export const note_mathematics_6_4_0 = {
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
"""

# ── note_6_4_1.js ── Product moment correlation coefficient
files['note_6_4_1.js'] = r"""export const note_mathematics_6_4_1 = {
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
"""

# ── note_6_4_2.js ── Regression lines and predictions
files['note_6_4_2.js'] = r"""export const note_mathematics_6_4_2 = {
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
"""

# ── note_6_5_0.js ── Probability distributions
files['note_6_5_0.js'] = r"""export const note_mathematics_6_5_0 = {
  blocks: [
    {
      id: 'obj-6-5-0',
      type: 'objective',
      data: { text: 'Define a discrete random variable; construct a probability distribution table; find and use the cumulative distribution function.' }
    },
    {
      id: 'h-drv',
      type: 'heading',
      data: { text: 'Discrete Random Variables', level: 2 }
    },
    {
      id: 'p-drv',
      type: 'paragraph',
      data: { text: 'A discrete random variable (DRV) X takes specific numerical values with defined probabilities. It is "random" because the outcome is determined by chance, and "discrete" because it takes exact values (often integers).' }
    },
    {
      id: 'callout-drv-axioms',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Probability Distribution Conditions',
        text: 'For a valid probability distribution:\n\u2022 P(X = x) \u2265 0 for all x\n\u2022 \u03a3P(X = x) = 1 (all probabilities sum to 1)'
      }
    },
    {
      id: 'callout-drv-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Finding a Missing Probability',
        text: 'X can take values 1, 2, 3, 4.\nP(X=1)=0.1, P(X=2)=0.3, P(X=3)=k, P(X=4)=0.2\n\n\u03a3P = 1:  0.1+0.3+k+0.2 = 1  \u21d2  k = 0.4'
      }
    },
    {
      id: 'h-cdf',
      type: 'heading',
      data: { text: 'Cumulative Distribution Function (CDF)', level: 2 }
    },
    {
      id: 'callout-cdf',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Cumulative Distribution Function',
        text: 'F(x) = P(X \u2264 x) = \u03a3 P(X = k) for all k \u2264 x\n\nProperties:\n\u2022 F(x) is non-decreasing\n\u2022 0 \u2264 F(x) \u2264 1\n\u2022 F(maximum value) = 1'
      }
    },
    {
      id: 'callout-cdf-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Using the CDF',
        text: 'P(X=1)=0.1, P(X=2)=0.3, P(X=3)=0.4, P(X=4)=0.2\n\nF(1)=0.1, F(2)=0.4, F(3)=0.8, F(4)=1.0\n\nP(X > 2) = 1 \u2212 F(2) = 1 \u2212 0.4 = 0.6\nP(2 \u2264 X \u2264 3) = F(3) \u2212 F(1) = 0.8 \u2212 0.1 = 0.7\nP(2 < X \u2264 3) = F(3) \u2212 F(2) = 0.8 \u2212 0.4 = 0.4'
      }
    },
    {
      id: 'callout-tip-drv',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Be careful with strict vs non-strict inequalities for discrete variables:\nP(X > 2) = 1 \u2212 P(X \u2264 2) = 1 \u2212 F(2)\nP(X \u2265 2) = 1 \u2212 P(X \u2264 1) = 1 \u2212 F(1)'
      }
    },
    {
      id: 'sum-6-5-0',
      type: 'summary',
      data: { text: 'DRV: P(X=x)\u22650, \u03a3P=1. CDF: F(x)=P(X\u2264x). P(X>a)=1\u2212F(a). P(a\u2264X\u2264b)=F(b)\u2212F(a\u22121) for discrete. Be careful with strict vs non-strict inequalities.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-drv-axioms', prompt: 'State the two conditions for a valid probability distribution.' },
      { id: 'cue-2', blockId: 'callout-cdf', prompt: 'Define F(x) and state three properties of the CDF.' },
      { id: 'cue-3', blockId: 'callout-tip-drv', prompt: 'Explain the difference between P(X>2) and P(X\u22652) in terms of the CDF.' }
    ],
    summaryText: '\u03a3P(X=x)=1. F(x)=P(X\u2264x). P(X>a)=1\u2212F(a). P(X\u2265a)=1\u2212F(a\u22121).',
    ready: true
  },
  evidence: []
};
"""

# ── note_6_5_1.js ── Expected value and variance
files['note_6_5_1.js'] = r"""export const note_mathematics_6_5_1 = {
  blocks: [
    {
      id: 'obj-6-5-1',
      type: 'objective',
      data: { text: 'Calculate the expected value E(X) and variance Var(X) of a discrete random variable; apply the E(aX+b) and Var(aX+b) rules.' }
    },
    {
      id: 'h-expectation',
      type: 'heading',
      data: { text: 'Expected Value E(X)', level: 2 }
    },
    {
      id: 'callout-ex-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Expected Value',
        text: 'E(X) = \u03a3 x \u00b7 P(X = x)\n\nE(X) is the mean (long-run average) of X. It is the weighted average of all possible values, weighted by their probabilities.'
      }
    },
    {
      id: 'callout-ex-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: E(X)',
        text: 'P(X=1)=0.1, P(X=2)=0.3, P(X=3)=0.4, P(X=4)=0.2\n\nE(X) = 1\u00d70.1 + 2\u00d70.3 + 3\u00d70.4 + 4\u00d70.2\n     = 0.1 + 0.6 + 1.2 + 0.8 = 2.7'
      }
    },
    {
      id: 'h-variance',
      type: 'heading',
      data: { text: 'Variance Var(X)', level: 2 }
    },
    {
      id: 'callout-var-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Variance',
        text: 'Var(X) = E(X\u00b2) \u2212 [E(X)]\u00b2\n\nwhere E(X\u00b2) = \u03a3 x\u00b2 \u00b7 P(X = x)'
      }
    },
    {
      id: 'callout-var-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Var(X)',
        text: 'Using the same distribution as above (E(X) = 2.7):\n\nE(X\u00b2) = 1\u00b2\u00d70.1 + 2\u00b2\u00d70.3 + 3\u00b2\u00d70.4 + 4\u00b2\u00d70.2\n       = 0.1 + 1.2 + 3.6 + 3.2 = 8.1\n\nVar(X) = 8.1 \u2212 (2.7)\u00b2 = 8.1 \u2212 7.29 = 0.81\n\nSD(X) = \u221a0.81 = 0.9'
      }
    },
    {
      id: 'h-linear-transform',
      type: 'heading',
      data: { text: 'Linear Transformations', level: 2 }
    },
    {
      id: 'callout-linear',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Linear Transformation Rules',
        text: 'E(aX + b) = a\u00b7E(X) + b\n\nVar(aX + b) = a\u00b2\u00b7Var(X)\n\nNote: adding a constant b shifts the distribution but does NOT change the spread (variance).\nMultiplying by a scales the spread by a\u00b2.'
      }
    },
    {
      id: 'callout-linear-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: E(2X+3) and Var(2X+3)',
        text: 'E(X) = 2.7, Var(X) = 0.81\n\nE(2X+3) = 2\u00d72.7+3 = 5.4+3 = 8.4\nVar(2X+3) = 2\u00b2\u00d70.81 = 4\u00d70.81 = 3.24\nSD(2X+3) = \u221a3.24 = 1.8'
      }
    },
    {
      id: 'sum-6-5-1',
      type: 'summary',
      data: { text: 'E(X) = \u03a3x\u00b7P(X=x). Var(X) = E(X\u00b2)\u2212[E(X)]\u00b2. E(aX+b)=aE(X)+b. Var(aX+b)=a\u00b2Var(X). Adding b does not change variance.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-ex-formula', prompt: 'Write down the formula for E(X) and explain what it represents.' },
      { id: 'cue-2', blockId: 'callout-var-formula', prompt: 'State the formula for Var(X) in terms of E(X\u00b2) and E(X).' },
      { id: 'cue-3', blockId: 'callout-linear', prompt: 'State the formulas for E(aX+b) and Var(aX+b). Why does adding b not affect the variance?' }
    ],
    summaryText: 'E(X)=\u03a3xP(X=x); Var(X)=E(X\u00b2)\u2212[E(X)]\u00b2; E(aX+b)=aE(X)+b; Var(aX+b)=a\u00b2Var(X).',
    ready: true
  },
  evidence: []
};
"""

# ── note_6_6_0.js ── Properties of the normal distribution
files['note_6_6_0.js'] = r"""export const note_mathematics_6_6_0 = {
  blocks: [
    {
      id: 'obj-6-6-0',
      type: 'objective',
      data: { text: 'Understand and describe the properties of the normal distribution; standardise to Z ~ N(0,1); use the 68-95-99.7 rule.' }
    },
    {
      id: 'h-normal-intro',
      type: 'heading',
      data: { text: 'The Normal Distribution', level: 2 }
    },
    {
      id: 'callout-normal-notation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Notation',
        text: 'X ~ N(\u03bc, \u03c3\u00b2)\n\n\u03bc = mean (population), \u03c3\u00b2 = variance\n\nNote: the second parameter is the VARIANCE (\u03c3\u00b2), not the standard deviation \u03c3.'
      }
    },
    {
      id: 'h-properties',
      type: 'heading',
      data: { text: 'Properties', level: 2 }
    },
    {
      id: 'list-normal-props',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Bell-shaped and symmetric about the mean \u03bc.' },
          { text: 'Mean = median = mode = \u03bc.' },
          { text: 'Total area under the curve = 1.' },
          { text: 'Asymptotic: the curve approaches but never reaches the x-axis.' },
          { text: 'Completely defined by \u03bc (position) and \u03c3\u00b2 (spread).' }
        ]
      }
    },
    {
      id: 'h-empirical-rule',
      type: 'heading',
      data: { text: '68\u201395\u201399.7 Rule', level: 2 }
    },
    {
      id: 'callout-empirical',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Empirical Rule',
        text: 'P(\u03bc \u2212 \u03c3 < X < \u03bc + \u03c3) \u2248 0.68 (68%)\nP(\u03bc \u2212 2\u03c3 < X < \u03bc + 2\u03c3) \u2248 0.95 (95%)\nP(\u03bc \u2212 3\u03c3 < X < \u03bc + 3\u03c3) \u2248 0.997 (99.7%)'
      }
    },
    {
      id: 'h-standardise',
      type: 'heading',
      data: { text: 'Standardising', level: 2 }
    },
    {
      id: 'callout-standardise',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Standardising to Z',
        text: 'If X ~ N(\u03bc, \u03c3\u00b2), then:\n\nZ = (X \u2212 \u03bc) / \u03c3  ~  N(0, 1)\n\nZ is called the standard normal variable. The standard normal has mean 0 and variance 1.'
      }
    },
    {
      id: 'callout-standardise-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Standardising',
        text: 'X ~ N(50, 16)  so \u03bc=50, \u03c3\u00b2=16, \u03c3=4\n\nP(X < 55) = P(Z < (55\u221250)/4) = P(Z < 1.25)\n\n(Use Z-tables or calculator to find P(Z < 1.25) \u2248 0.8944)'
      }
    },
    {
      id: 'callout-tip-normal',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: 'Write the notation correctly: X ~ N(\u03bc, \u03c3\u00b2). The second parameter is variance.\nAlways standardise before using Z-tables.\nFor P(X > a), use 1 \u2212 P(X < a) by symmetry or complement.'
      }
    },
    {
      id: 'sum-6-6-0',
      type: 'summary',
      data: { text: 'X ~ N(\u03bc, \u03c3\u00b2): bell-shaped, symmetric, mean=median=mode=\u03bc. 68-95-99.7 rule. Standardise: Z=(X\u2212\u03bc)/\u03c3; Z~N(0,1). Second parameter is variance, not SD.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-normal-props', prompt: 'State five properties of the normal distribution.' },
      { id: 'cue-2', blockId: 'callout-empirical', prompt: 'What percentage of data lies within 2 standard deviations of the mean for a normal distribution?' },
      { id: 'cue-3', blockId: 'callout-standardise', prompt: 'State the formula to standardise X ~ N(\u03bc,\u03c3\u00b2) to Z ~ N(0,1).' }
    ],
    summaryText: 'X~N(\u03bc,\u03c3\u00b2); symmetric; mean=median=mode. 68/95/99.7 rule. Z=(X\u2212\u03bc)/\u03c3.',
    ready: true
  },
  evidence: []
};
"""

# ── note_6_6_1.js ── Standard normal distribution calculations
files['note_6_6_1.js'] = r"""export const note_mathematics_6_6_1 = {
  blocks: [
    {
      id: 'obj-6-6-1',
      type: 'objective',
      data: { text: 'Use Z-tables to find probabilities from the normal distribution; find unknown mean or variance given a probability.' }
    },
    {
      id: 'h-z-tables',
      type: 'heading',
      data: { text: 'Using Z-tables', level: 2 }
    },
    {
      id: 'p-z-tables',
      type: 'paragraph',
      data: { text: 'The standard normal table gives \u03a6(z) = P(Z \u2264 z) for Z ~ N(0,1). Use standardisation then the table to find any normal probability.' }
    },
    {
      id: 'callout-z-cases',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Common Probability Cases',
        text: 'P(Z < a) = \u03a6(a)  [read directly from table]\n\nP(Z > a) = 1 \u2212 \u03a6(a)  [complement]\n\nP(a < Z < b) = \u03a6(b) \u2212 \u03a6(a)\n\nP(Z < \u2212a) = 1 \u2212 \u03a6(a)  [symmetry of N(0,1)]'
      }
    },
    {
      id: 'callout-z-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Normal Probabilities',
        text: 'X ~ N(70, 25), so \u03bc=70, \u03c3=5.\n\n(a) P(X < 78) = P(Z < (78\u221270)/5) = P(Z < 1.6) = \u03a6(1.6) = 0.9452\n\n(b) P(X > 65) = P(Z > (65\u221270)/5) = P(Z > \u22121.0) = 1 \u2212 \u03a6(\u22121.0)\n    = 1 \u2212 (1\u2212\u03a6(1.0)) = \u03a6(1.0) = 0.8413\n\n(c) P(68 < X < 75) = P((68\u221270)/5 < Z < (75\u221270)/5)\n    = P(\u22120.4 < Z < 1.0) = \u03a6(1.0) \u2212 \u03a6(\u22120.4)\n    = 0.8413 \u2212 (1\u22120.6554) = 0.8413 \u2212 0.3446 = 0.4967'
      }
    },
    {
      id: 'h-inverse',
      type: 'heading',
      data: { text: 'Finding Unknown \u03bc or \u03c3', level: 2 }
    },
    {
      id: 'callout-inverse',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Inverse Normal Method',
        text: 'Given P(X < a) = p, find \u03bc or \u03c3:\n\n1. Standardise: z = (a \u2212 \u03bc)/\u03c3 where z = \u03a6\u207b\u00b9(p) from tables.\n2. Form an equation and solve for the unknown.'
      }
    },
    {
      id: 'callout-inverse-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Find \u03bc',
        text: 'X ~ N(\u03bc, 9). P(X < 20) = 0.9772.\n\n\u03a6\u207b\u00b9(0.9772) = 2.00\n\n(20 \u2212 \u03bc)/3 = 2.00\n20 \u2212 \u03bc = 6\n\u03bc = 14'
      }
    },
    {
      id: 'callout-two-eq-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Find \u03bc and \u03c3 (Two Equations)',
        text: 'X ~ N(\u03bc, \u03c3\u00b2). P(X < 30) = 0.8413, P(X < 20) = 0.1587.\n\n\u03a6\u207b\u00b9(0.8413) = 1.0  \u21d2 (30\u2212\u03bc)/\u03c3 = 1.0  ... (1)\n\u03a6\u207b\u00b9(0.1587) = \u22121.0  \u21d2 (20\u2212\u03bc)/\u03c3 = \u22121.0  ... (2)\n\nFrom (1): 30 \u2212 \u03bc = \u03c3\nFrom (2): 20 \u2212 \u03bc = \u2212\u03c3\n\nAdding: 50 \u2212 2\u03bc = 0  \u21d2  \u03bc = 25, \u03c3 = 5'
      }
    },
    {
      id: 'checklist-normal',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can standardise X ~ N(\u03bc, \u03c3\u00b2) to Z ~ N(0,1)', checked: false },
          { text: 'I can use Z-tables for P(Z<a), P(Z>a), P(a<Z<b)', checked: false },
          { text: 'I can apply the symmetry property P(Z<\u2212a)=1\u2212\u03a6(a)', checked: false },
          { text: 'I can set up and solve inverse normal problems to find \u03bc or \u03c3', checked: false },
          { text: 'I can solve simultaneous equations when both \u03bc and \u03c3 are unknown', checked: false }
        ]
      }
    },
    {
      id: 'sum-6-6-1',
      type: 'summary',
      data: { text: 'P(Z<a)=\u03a6(a); P(Z>a)=1\u2212\u03a6(a); P(Z<\u2212a)=1\u2212\u03a6(a). Inverse normal: from p find z=\u03a6\u207b\u00b9(p) then solve (a\u2212\u03bc)/\u03c3=z. Two unknowns: set up two equations.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-z-cases', prompt: 'State the four cases for reading normal probabilities from Z-tables.' },
      { id: 'cue-2', blockId: 'callout-inverse', prompt: 'Describe the inverse normal method for finding an unknown mean \u03bc.' },
      { id: 'cue-3', blockId: 'callout-two-eq-worked', prompt: 'How do you find both \u03bc and \u03c3 when two probabilities are given?' }
    ],
    summaryText: 'P(Z>a)=1\u2212\u03a6(a). Inverse: z=\u03a6\u207b\u00b9(p), then (a\u2212\u03bc)/\u03c3=z. Two unknowns: solve simultaneous equations.',
    ready: true
  },
  evidence: []
};
"""

# Write all files
for filename, content in files.items():
    path = os.path.join(base, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Written: {path}')

print('Done. 6 files written for WST01 Topics 4-6.')
