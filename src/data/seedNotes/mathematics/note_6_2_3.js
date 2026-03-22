export const note_mathematics_6_2_3 = {
  blocks: [
    {
      id: 'obj-probability-formulae',
      type: 'objective',
      data: {
        text: 'Understand and apply probability formulae including the addition rule, the multiplication rule, and conditional probability.'
      }
    },
    {
      id: 'h-conditional',
      type: 'heading',
      data: {
        text: 'Conditional Probability',
        level: 2
      }
    },
    {
      id: 'p-conditional',
      type: 'paragraph',
      data: {
        text: 'The conditional probability of event A occurring, given that event B has already occurred, is denoted by P(A | B). It can be calculated using the conditional probability formula.'
      }
    },
    {
      id: 'eq-conditional',
      type: 'equation',
      data: {
        html: 'P(A | B) = <span class="nb-frac"><span class="nb-num">P(A ∩ B)</span><span class="nb-den">P(B)</span></span>',
        caption: 'Conditional Probability Formula'
      }
    },
    {
      id: 'h-independent',
      type: 'heading',
      data: {
        text: 'Independent Events',
        level: 2
      }
    },
    {
      id: 'p-independent',
      type: 'paragraph',
      data: {
        text: 'Two events A and B are independent if the occurrence of one does not affect the probability of the other. For independent events:'
      }
    },
    {
      id: 'eq-independent',
      type: 'equation',
      data: {
        html: 'P(A ∩ B) = P(A) × P(B)',
        caption: 'Multiplication Rule for Independent Events'
      }
    },
    {
      id: 'callout-independent',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Checking for Independence',
        text: 'Always test if P(A ∩ B) = P(A) × P(B) to verify if two events are independent. If they are not equal, the events are dependent.'
      }
    },
    {
      id: 'h-mutually-exclusive',
      type: 'heading',
      data: {
        text: 'Mutually Exclusive Events',
        level: 2
      }
    },
    {
      id: 'p-exclusive',
      type: 'paragraph',
      data: {
        text: 'Two events are mutually exclusive if they cannot happen at the same time. If A and B are mutually exclusive, then P(A ∩ B) = 0.'
      }
    },
    {
      id: 'eq-exclusive',
      type: 'equation',
      data: {
        html: 'P(A ∪ B) = P(A) + P(B)',
        caption: 'Addition Rule for Mutually Exclusive Events'
      }
    },
    {
      id: 'h-addition-rule',
      type: 'heading',
      data: {
        text: 'General Addition Rule',
        level: 2
      }
    },
    {
      id: 'p-addition',
      type: 'paragraph',
      data: {
        text: 'For any two events A and B (mutually exclusive or not), the probability of either A or B occurring is given by the general addition rule.'
      }
    },
    {
      id: 'eq-addition',
      type: 'equation',
      data: {
        html: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',
        caption: 'General Addition Formula'
      }
    },
    {
      id: 'summary-probability-formulae',
      type: 'summary',
      data: {
        text: 'Master the rules for conditional probability, independent events (multiplication rule), and mutually exclusive events (addition rule).'
      }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Whenever you are given a complex word problem involving conditional probability, draw a Venn diagram or tree diagram. Examiners look for correctly labeled diagrams and they naturally prevent calculation errors for union and intersection."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    summaryText: 'Probability formulae include conditional probability, P(A ∪ B) = P(A) + P(B) − P(A ∩ B), and rules for independent/mutually exclusive events.',
    cues: [
      {
        id: 'cue-cond-prob',
        blockId: 'eq-conditional',
        prompt: 'What is the formula for conditional probability P(A | B)?',
        answer: 'P(A | B) = P(A ∩ B) / P(B)'
      },
      {
        id: 'cue-independent',
        blockId: 'eq-independent',
        prompt: 'What is the condition for two events A and B to be independent?',
        answer: 'P(A ∩ B) = P(A) × P(B)'
      },
      {
        id: 'cue-exclusive',
        blockId: 'p-exclusive',
        prompt: 'What does it mean for two events to be mutually exclusive?',
        answer: 'They cannot happen at the same time, so P(A ∩ B) = 0.'
      },
      {
        id: 'cue-addition',
        blockId: 'eq-addition',
        prompt: 'State the general addition rule for any two events A and B.',
        answer: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)'
      }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
