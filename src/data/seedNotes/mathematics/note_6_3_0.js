export const note_mathematics_6_3_0 = {
  blocks: [
    {
      id: 'obj-6-3-0',
      type: 'objective',
      data: { text: 'Use Venn diagrams to find probabilities; apply the addition rule and identify mutually exclusive events.' }
    },
    {
      id: 'h-basic-prob',
      type: 'heading',
      data: { text: 'Basic Probability', level: 2 }
    },
    {
      id: 'callout-basic-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Probability Axioms',
        text: '0 \u2264 P(A) \u2264 1 for any event A\n\nP(sample space) = 1\n\nP(A\u2019) = 1 \u2212 P(A)  [complement rule]'
      }
    },
    {
      id: 'h-addition',
      type: 'heading',
      data: { text: 'Addition Rule', level: 2 }
    },
    {
      id: 'callout-addition',
      type: 'callout',
      data: {
        style: 'key',
        title: 'General Addition Rule',
        text: 'P(A \u222a B) = P(A) + P(B) \u2212 P(A \u2229 B)\n\nFor mutually exclusive events (A \u2229 B = \u2205):\nP(A \u222a B) = P(A) + P(B)'
      }
    },
    {
      id: 'callout-addition-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Addition Rule',
        text: 'P(A) = 0.4,  P(B) = 0.3,  P(A \u2229 B) = 0.1\nP(A \u222a B) = 0.4 + 0.3 \u2212 0.1 = 0.6\nP(A\u2019 \u2229 B\u2019) = 1 \u2212 P(A \u222a B) = 1 \u2212 0.6 = 0.4'
      }
    },
    {
      id: 'h-mutual-excl',
      type: 'heading',
      data: { text: 'Mutually Exclusive Events', level: 2 }
    },
    {
      id: 'p-mutual',
      type: 'paragraph',
      data: { text: 'Two events are mutually exclusive if they cannot both occur at the same time: P(A \u2229 B) = 0. On a Venn diagram, the circles do not overlap.' }
    },
    {
      id: 'callout-mutual-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Mutually exclusive \u2260 independent. Mutually exclusive events (P(A\u2229B)=0) cannot both happen, so knowing A occurred makes B impossible \u2014 this means they are dependent, not independent!'
      }
    },
    {
      id: 'h-venn',
      type: 'heading',
      data: { text: 'Venn Diagram Strategy', level: 2 }
    },
    {
      id: 'list-venn-strategy',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Start with P(A \u2229 B) and fill in the intersection first.' },
          { text: 'Use P(A only) = P(A) \u2212 P(A \u2229 B).' },
          { text: 'Use P(B only) = P(B) \u2212 P(A \u2229 B).' },
          { text: 'Find the outside region: P(neither) = 1 \u2212 P(A \u222a B).' }
        ]
      }
    },
    {
      id: 'callout-venn-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Venn Diagram',
        text: 'In a class of 30: 15 study Maths (M), 12 study Physics (P), 5 study both.\nP(M only) = 15\u22125 = 10\nP(P only) = 12\u22125 = 7\nP(neither) = 30\u221210\u22125\u22127 = 8\nP(M|P) = 5/12 (conditional \u2014 covered in next note)'
      }
    },
    {
      id: 'sum-6-3-0',
      type: 'summary',
      data: { text: 'P(A \u222a B) = P(A)+P(B)\u2212P(A\u2229B). Mutually exclusive: P(A\u2229B)=0. P(A\u2019)=1\u2212P(A). Venn diagram: fill intersection first, then individual regions, then outside.' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Always check the borders of the circles in a Venn diagram. If you are given P(A) total, make sure you subtract the intersection before placing the value in the 'A only' region. Remember that mutually exclusive events have an intersection of exactly zero."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-addition', prompt: 'State the general addition rule. Under what condition does it simplify?' },
      { id: 'cue-2', blockId: 'callout-mutual-warning', prompt: 'Explain why mutually exclusive events are NOT independent.' },
      { id: 'cue-3', blockId: 'list-venn-strategy', prompt: 'Describe the 4-step strategy for filling in a Venn diagram.' }
    ],
    summaryText: 'P(A\u222aB)=P(A)+P(B)\u2212P(A\u2229B). ME: P(A\u2229B)=0. Venn: intersection first. ME \u2260 independent.',
    ready: true
  },
  evidence: []
};
