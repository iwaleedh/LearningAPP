export const note_mathematics_6_5_0 = {
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
