export const note_mathematics_6_6_1 = {
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
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When finding an unknown mean or standard deviation, always draw a quick sketch of the bell curve. If the required probability area is less than 0.5, your required Z-value must be negative. Missing the negative sign on a Z-value is the leading cause of lost marks in inverse normal calculations."
            },
            terms: []
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
