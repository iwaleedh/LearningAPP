export const note_mathematics_6_5_1 = {
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
