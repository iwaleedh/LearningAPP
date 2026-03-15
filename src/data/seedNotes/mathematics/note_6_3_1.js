export const note_mathematics_6_3_1 = {
  blocks: [
    {
      id: 'obj-6-3-1',
      type: 'objective',
      data: { text: 'Apply the conditional probability formula, identify independent events, and use the multiplication rule.' }
    },
    {
      id: 'h-conditional',
      type: 'heading',
      data: { text: 'Conditional Probability', level: 2 }
    },
    {
      id: 'callout-cond-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Conditional Probability Formula',
        text: 'P(A|B) = P(A \u2229 B) / P(B)\n\n"The probability of A given B has occurred."\n\nRearranged: P(A \u2229 B) = P(B) \u00d7 P(A|B)'
      }
    },
    {
      id: 'callout-cond-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Conditional Probability',
        text: 'P(A) = 0.5, P(B) = 0.4, P(A \u2229 B) = 0.2\n\nP(A|B) = 0.2/0.4 = 0.5\nP(B|A) = 0.2/0.5 = 0.4\n\nNote: P(A|B) = P(A) here, which means A and B are independent.'
      }
    },
    {
      id: 'h-independence',
      type: 'heading',
      data: { text: 'Independent Events', level: 2 }
    },
    {
      id: 'callout-independence',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Independence Conditions',
        text: 'A and B are independent if any of the following hold (they are equivalent):\n\nP(A \u2229 B) = P(A) \u00d7 P(B)\nP(A|B) = P(A)\nP(B|A) = P(B)'
      }
    },
    {
      id: 'p-independence-note',
      type: 'paragraph',
      data: { text: 'Independent events do not affect each other. Knowing B occurred gives no information about whether A will occur. This is different from mutually exclusive events where knowing B occurred means A cannot occur.' }
    },
    {
      id: 'h-mult-rule',
      type: 'heading',
      data: { text: 'Multiplication Rule', level: 2 }
    },
    {
      id: 'callout-mult-rule',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Multiplication Rule',
        text: 'General: P(A \u2229 B) = P(A) \u00d7 P(B|A)\n\nFor independent events: P(A \u2229 B) = P(A) \u00d7 P(B)'
      }
    },
    {
      id: 'callout-mult-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Multiplication Rule',
        text: 'A bag has 4 red and 6 blue balls. Two drawn without replacement.\nP(1st red) = 4/10\nP(2nd red | 1st red) = 3/9\nP(both red) = (4/10) \u00d7 (3/9) = 12/90 = 2/15'
      }
    },
    {
      id: 'callout-tip-indep',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'To show independence: calculate P(A)\u00d7P(B) and P(A\u2229B) separately. If equal, they are independent. With replacement \u2192 often independent. Without replacement \u2192 often dependent.'
      }
    },
    {
      id: 'sum-6-3-1',
      type: 'summary',
      data: { text: 'P(A|B) = P(A\u2229B)/P(B). Independent: P(A\u2229B)=P(A)\u00d7P(B). Multiplication rule: P(A\u2229B)=P(A)\u00d7P(B|A). With replacement \u2192 independent; without replacement \u2192 dependent.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-cond-formula', prompt: 'State the formula for P(A|B) and rearrange it to find P(A\u2229B).' },
      { id: 'cue-2', blockId: 'callout-independence', prompt: 'State the three equivalent conditions for A and B to be independent.' },
      { id: 'cue-3', blockId: 'callout-mult-worked', prompt: 'Two cards drawn without replacement from a standard deck. Are draws independent? Why?' }
    ],
    summaryText: 'P(A|B)=P(A\u2229B)/P(B). Independence: P(A\u2229B)=P(A)\u00d7P(B). Without replacement \u2192 dependent.',
    ready: true
  },
  evidence: []
};
