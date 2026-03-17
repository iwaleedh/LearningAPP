export const note_olevel_maths_core_8_2_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Probability/combined-probability.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Apply the multiplication rule for independent and dependent events. Apply the addition rule for mutually exclusive and non-mutually exclusive events. Select the correct probability rule for each situation.',
      },
    },
    {
      id: 'h-overview',
      type: 'heading',
      data: { text: 'The Four Key Rules', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'When combining probabilities for two events A and B, the correct rule depends on whether events are <b>independent / dependent</b> (for AND) or <b>mutually exclusive / non-mutually exclusive</b> (for OR). Using the wrong rule is a very common exam mistake.',
      },
    },
    {
      id: 'tbl-rules',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of combined probability rules',
        headers: ['Situation', 'Rule', 'Formula'],
        rows: [
          ['A and B: independent', 'Multiply', 'P(A∩B) = P(A) × P(B)'],
          ['A and B: dependent', 'Multiply (conditional)', 'P(A then B) = P(A) × P(B|A)'],
          ['A or B: mutually exclusive', 'Add', 'P(A∪B) = P(A) + P(B)'],
          ['A or B: not mutually exclusive', 'Add then subtract', 'P(A∪B) = P(A) + P(B) − P(A∩B)'],
        ],
      },
    },
    {
      id: 'h-independent',
      type: 'heading',
      data: { text: 'AND Rule — Independent Events', level: 2 },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Independent Events: P(A and B)',
        text: 'Two events are independent if one does not affect the other (e.g. rolling two dice; picking a card, replacing it, then picking again).<br>P(A∩B) = P(A) × P(B)',
      },
    },
    {
      id: 'eq-independent',
      type: 'equation',
      data: {
        html: 'P(A ∩ B) = P(A) × P(B) &nbsp;&nbsp; <small>[independent events]</small>',
        caption: 'Multiplication rule for independent events',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Independent Events',
        text: 'A fair coin is tossed and a fair die is rolled. Find P(Head and 6).<br><br>These events are independent (one does not affect the other).<br>P(H) = 1/2 &nbsp; P(6) = 1/6<br><b>P(H and 6) = 1/2 × 1/6 = 1/12</b>',
      },
    },
    {
      id: 'h-dependent',
      type: 'heading',
      data: { text: 'AND Rule — Dependent Events', level: 2 },
    },
    {
      id: 'callout-key2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Dependent Events: P(A then B)',
        text: 'When the second event depends on the result of the first (e.g. selecting cards without replacement).<br>P(A then B) = P(A) × P(B | A)<br>where P(B | A) is the probability of B given A has already happened.',
      },
    },
    {
      id: 'eq-dependent',
      type: 'equation',
      data: {
        html: 'P(A ∩ B) = P(A) × P(B | A) &nbsp;&nbsp; <small>[dependent events]</small>',
        caption: 'Multiplication rule for dependent events',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Dependent Events (No Replacement)',
        text: 'A bag has 4 red and 6 blue balls. Two balls are taken without replacement. Find P(both red).<br><br>P(1st red) = 4/10<br>P(2nd red | 1st was red) = 3/9 (only 3 red left from 9 remaining)<br><b>P(both red) = 4/10 × 3/9 = 12/90 = 2/15</b>',
      },
    },
    {
      id: 'h-or-rules',
      type: 'heading',
      data: { text: 'OR Rule', level: 2 },
    },
    {
      id: 'callout-key3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'OR Rule — Two Cases',
        text: '<b>Mutually exclusive</b> (cannot both happen): P(A∪B) = P(A) + P(B)<br><b>Not mutually exclusive</b> (can both happen): P(A∪B) = P(A) + P(B) − P(A∩B)',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — OR with Non-Mutually Exclusive Events',
        text: 'A card is drawn from a standard deck of 52. Find P(King or Heart).<br><br>P(King) = 4/52. &nbsp; P(Heart) = 13/52. &nbsp; P(King of Hearts) = 1/52.<br>A card can be both a King and a Heart → not mutually exclusive.<br><br>P(King or Heart) = 4/52 + 13/52 − 1/52 = <b>16/52 = 4/13</b>',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Choosing the Right Rule',
        text: 'A bag has 5 red, 3 green, 2 yellow balls. One ball is drawn.<br>(a) P(red or green) — mutually exclusive:<br>P = 5/10 + 3/10 = 8/10 = <b>4/5</b><br><br>Two balls are drawn without replacement.<br>(b) P(1st red and 2nd green) — dependent (AND):<br>P = 5/10 × 3/9 = 15/90 = <b>1/6</b>',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Choosing the Right Rule — Decision Guide',
        text: '• Question says "and both happen" → use Multiply (× )<br>• Question says "or" and events cannot overlap → use Add (+ )<br>• Question says "or" and events <i>can</i> overlap → Add then Subtract (+ − )<br>• "Without replacement" + "and" → dependent multiplication',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Do Not Mix Up Rules',
        text: 'Do not add probabilities for AND events — that is wrong. Do not multiply probabilities for OR events — that is also wrong (unless explicitly deriving it from AND). Use the table of rules above to decide.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: '<b>Independent AND:</b> P(A∩B) = P(A) × P(B). <b>Dependent AND:</b> P(A∩B) = P(A) × P(B|A). <b>Mutually exclusive OR:</b> P(A∪B) = P(A) + P(B). <b>Non-mutually exclusive OR:</b> P(A∪B) = P(A) + P(B) − P(A∩B). Choose the rule that fits the situation.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'AND → multiply (P(A)×P(B) if independent, P(A)×P(B|A) if dependent). OR → add (subtract overlap if not mutually exclusive).',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-independent',
        prompt: 'What is the multiplication rule for two independent events A and B?',
        answer: 'P(A∩B) = P(A) × P(B).',
      },
      {
        id: 'cue-2',
        blockId: 'eq-dependent',
        prompt: 'A bag has 5 red balls out of 10. Two are drawn without replacement. What is P(both red)?',
        answer: 'P(1st red) = 5/10; P(2nd red | 1st red) = 4/9. P(both) = 5/10 × 4/9 = 20/90 = 2/9.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-key3',
        prompt: 'When must you subtract P(A∩B) from P(A) + P(B)?',
        answer: 'When A and B are not mutually exclusive — they can both happen at the same time, so the overlap is counted twice.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-we3',
        prompt: 'A card is drawn at random. P(King) = 4/52, P(Heart) = 13/52, P(King of Hearts) = 1/52. What is P(King or Heart)?',
        answer: 'P(King or Heart) = 4/52 + 13/52 − 1/52 = 16/52 = 4/13.',
      },
      {
        id: 'cue-5',
        blockId: 'tbl-rules',
        prompt: 'State the four combined probability rules (one for each situation).',
        answer: '1. Independent AND: P(A)×P(B). 2. Dependent AND: P(A)×P(B|A). 3. Mutually exclusive OR: P(A)+P(B). 4. Non-mutually exclusive OR: P(A)+P(B)−P(A∩B).',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
