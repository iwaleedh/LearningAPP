export const note_mathematics_6_6_0 = {
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
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "A normal distribution curve is completely defined by its mean and variance, but the standardisation formula requires the standard deviation. A frequent student error is dividing by the variance instead of taking the square root to find sigma."
            },
            terms: []
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
