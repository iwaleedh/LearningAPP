export const note_olevel_maths_core_8_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Probability/basic-probability.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand the probability scale from 0 to 1. Calculate the probability of an event as a fraction, decimal or percentage. Use complementary and mutually exclusive events to find probabilities.',
      },
    },
    {
      id: 'h-scale',
      type: 'heading',
      data: { text: 'The Probability Scale', level: 2 },
    },
    {
      id: 'p-scale',
      type: 'paragraph',
      data: {
        text: 'Probability measures how likely an event is to happen. It is always a number between <b>0</b> and <b>1</b> (inclusive). A probability of <b>0</b> means the event is <b>impossible</b>. A probability of <b>1</b> means the event is <b>certain</b>. A probability of <b>0.5</b> means the event is equally likely to happen or not.',
      },
    },
    {
      id: 'svg-scale',
      type: 'svg',
      data: {
        caption: 'The probability scale from 0 (impossible) to 1 (certain)',
        svg: `<svg viewBox="0 0 420 80" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif" font-size="13">
  <!-- Main line -->
  <line x1="30" y1="38" x2="390" y2="38" stroke="#6366f1" stroke-width="3" stroke-linecap="round"/>
  <!-- Ticks -->
  <line x1="30" y1="32" x2="30" y2="44" stroke="#6366f1" stroke-width="2"/>
  <line x1="210" y1="32" x2="210" y2="44" stroke="#6366f1" stroke-width="2"/>
  <line x1="390" y1="32" x2="390" y2="44" stroke="#6366f1" stroke-width="2"/>
  <!-- Arrow head -->
  <polygon points="390,38 378,32 378,44" fill="#6366f1"/>
  <!-- Labels -->
  <text x="30" y="22" text-anchor="middle" fill="#ef4444" font-weight="bold">0</text>
  <text x="210" y="22" text-anchor="middle" fill="#f59e0b" font-weight="bold">0.5</text>
  <text x="390" y="22" text-anchor="middle" fill="#10b981" font-weight="bold">1</text>
  <text x="30" y="62" text-anchor="middle" fill="#ef4444" font-size="11">Impossible</text>
  <text x="210" y="62" text-anchor="middle" fill="#f59e0b" font-size="11">Even chance</text>
  <text x="390" y="62" text-anchor="middle" fill="#10b981" font-size="11">Certain</text>
</svg>`,
      },
    },
    {
      id: 'h-formula',
      type: 'heading',
      data: { text: 'Calculating Probability', level: 2 },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Basic Probability Formula',
        text: 'When all outcomes are equally likely:<br>P(event) = number of favourable outcomes ÷ total number of possible outcomes',
      },
    },
    {
      id: 'eq-prob',
      type: 'equation',
      data: {
        html: 'P(A) = <span class="nb-frac"><span class="nb-num">number of favourable outcomes</span><span class="nb-den">total number of possible outcomes</span></span>',
        caption: 'Basic probability formula',
      },
    },
    {
      id: 'p-forms',
      type: 'paragraph',
      data: {
        text: 'Probabilities can be written as <b>fractions</b>, <b>decimals</b>, or <b>percentages</b>. For example, a probability of <sup>1</sup>⁄<sub>4</sub> = 0.25 = 25%. All three are equally acceptable in IGCSE answers unless the question specifies a form.',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Dice',
        text: 'A fair six-sided die is rolled. Find the probability of rolling:<br>(a) a 4 &nbsp; (b) an even number &nbsp; (c) a number greater than 4<br><br><b>Total outcomes:</b> {1, 2, 3, 4, 5, 6} → 6 outcomes<br>(a) Favourable: {4} → 1 outcome. <b>P(4) = 1/6</b><br>(b) Favourable: {2, 4, 6} → 3 outcomes. <b>P(even) = 3/6 = 1/2</b><br>(c) Favourable: {5, 6} → 2 outcomes. <b>P(&gt;4) = 2/6 = 1/3</b>',
      },
    },
    {
      id: 'h-complement',
      type: 'heading',
      data: { text: 'Complementary Events', level: 2 },
    },
    {
      id: 'p-complement',
      type: 'paragraph',
      data: {
        text: 'The <b>complement</b> of event A, written <b>A′</b>, is the event that A does <i>not</i> happen. Since either A happens or it does not, the two probabilities always add up to 1.',
      },
    },
    {
      id: 'eq-complement',
      type: 'equation',
      data: {
        html: 'P(A) + P(A′) = 1 &nbsp;&nbsp;⟹&nbsp;&nbsp; P(A′) = 1 − P(A)',
        caption: 'Complementary probability rule',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Complement',
        text: 'A bag contains 3 red, 4 blue, and 5 green balls. A ball is chosen at random.<br><br>P(red) = 3/12 = 1/4<br><b>P(not red) = 1 − 1/4 = 3/4</b><br><br>Check: P(blue) + P(green) = 4/12 + 5/12 = 9/12 = 3/4 ✓',
      },
    },
    {
      id: 'h-mutex',
      type: 'heading',
      data: { text: 'Mutually Exclusive Events', level: 2 },
    },
    {
      id: 'p-mutex',
      type: 'paragraph',
      data: {
        text: 'Two events are <b>mutually exclusive</b> if they <b>cannot both happen at the same time</b>. For example, rolling a 3 and rolling a 5 on a single die are mutually exclusive — you cannot get both at once.',
      },
    },
    {
      id: 'callout-key2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Addition Rule for Mutually Exclusive Events',
        text: 'If A and B are mutually exclusive:<br>P(A or B) = P(A) + P(B)',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Coloured Balls',
        text: 'A bag contains 2 red, 5 blue, and 3 yellow balls. One ball is taken at random. Find P(red or yellow).<br><br>Red and yellow are mutually exclusive (a ball cannot be both colours).<br>P(red) = 2/10 = 1/5<br>P(yellow) = 3/10<br><b>P(red or yellow) = 1/5 + 3/10 = 2/10 + 3/10 = 5/10 = 1/2</b>',
      },
    },
    {
      id: 'h-listing',
      type: 'heading',
      data: { text: 'Listing All Possible Outcomes', level: 2 },
    },
    {
      id: 'p-listing',
      type: 'paragraph',
      data: {
        text: 'Sometimes it helps to <b>list all possible outcomes</b> systematically. For example, when tossing a coin: {H, T} — there are 2 outcomes. When tossing two coins: {HH, HT, TH, TT} — there are 4 outcomes. Being systematic ensures you do not miss any.',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Two Coins',
        text: 'Two fair coins are tossed. Find P(exactly one head).<br><br>Outcomes: {HH, HT, TH, TT} — 4 equally likely outcomes.<br>Favourable (exactly one H): {HT, TH} → 2 outcomes.<br><b>P(exactly one head) = 2/4 = 1/2</b>',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always write probabilities as fractions in their simplest form unless the question asks for a decimal or percentage. Never write a probability greater than 1 — if you get one, re-check your working.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: '<b>P(event) = favourable ÷ total.</b> Probability is between 0 and 1. P(A′) = 1 − P(A). Mutually exclusive events: P(A or B) = P(A) + P(B). List outcomes systematically to avoid errors.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Probability = favourable ÷ total; complement rule P(A′) = 1 − P(A); mutually exclusive: P(A or B) = P(A) + P(B).',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-prob',
        prompt: 'What is the formula for the probability of an event when all outcomes are equally likely?',
        answer: 'P(A) = number of favourable outcomes ÷ total number of possible outcomes.',
      },
      {
        id: 'cue-2',
        blockId: 'eq-complement',
        prompt: 'A bag has 8 balls. P(blue) = 3/8. What is P(not blue)?',
        answer: 'P(not blue) = 1 − 3/8 = 5/8.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-key2',
        prompt: 'What condition must be met before you can use P(A or B) = P(A) + P(B)?',
        answer: 'A and B must be mutually exclusive — they cannot happen at the same time.',
      },
      {
        id: 'cue-4',
        blockId: 'svg-scale',
        prompt: 'What probability value represents a certain event? What represents an impossible event?',
        answer: 'Certain = 1. Impossible = 0.',
      },
      {
        id: 'cue-5',
        blockId: 'callout-we1',
        prompt: 'A fair die is rolled. What is P(even number)?',
        answer: 'Even numbers are {2, 4, 6}, so P(even) = 3/6 = 1/2.',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
