export const note_olevel_maths_extended_8_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Probability/basic-probability.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate simple probabilities from equally likely outcomes, understand the probability scale, and find probabilities of events not happening.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Basic Probability', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'Probability measures how likely an event is to happen. It is always a number between 0 and 1 inclusive. A probability of 0 means the event is <strong>impossible</strong>; a probability of 1 means it is <strong>certain</strong>.' }
    },
    {
      id: 'callout-key-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Probability Formula',
        text: 'For equally likely outcomes:<br><br>P(event) = <span class="nb-frac"><span class="nb-num">number of favourable outcomes</span><span class="nb-den">total number of possible outcomes</span></span>'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'A bag contains 3 red, 5 blue and 2 green balls. A ball is picked at random. Find P(blue).<br><br><strong>Solution:</strong><br>Total = 3 + 5 + 2 = 10<br>P(blue) = <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">10</span></span> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>'
      }
    },
    {
      id: 'h-complement',
      type: 'heading',
      data: { text: 'Complementary Events', level: 2 }
    },
    {
      id: 'p-complement',
      type: 'paragraph',
      data: { text: 'The <strong>complement</strong> of event A is the event "A does not happen", written A\'. The probabilities of an event and its complement always add up to 1.' }
    },
    {
      id: 'eq-comp',
      type: 'equation',
      data: {
        html: 'P(A\') = 1 − P(A)',
        caption: 'Complementary probability'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'The probability that it rains tomorrow is 0.3. Find the probability that it does not rain.<br><br><strong>Solution:</strong><br>P(no rain) = 1 − 0.3 = <strong>0.7</strong>'
      }
    },
    {
      id: 'callout-tip-fractions',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Give probabilities as fractions, decimals, or percentages — but <strong>fractions</strong> are usually safest as they avoid rounding errors. Never write probability as a ratio (e.g. "1:5").'
      }
    },
    {
      id: 'callout-warning-range',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'A probability can never be negative or greater than 1. If your answer comes out as 1.2 or −0.3, you have made an error.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Probability = favourable outcomes ÷ total outcomes. It ranges from 0 (impossible) to 1 (certain). The probability of an event not happening = 1 minus the probability of it happening.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'P(event) = favourable/total outcomes. P(not A) = 1 − P(A). Probabilities range from 0 to 1.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-formula', prompt: 'State the formula for probability with equally likely outcomes.', answer: 'P(event) = number of favourable outcomes ÷ total number of possible outcomes.' },
      { id: 'cue-2', blockId: 'eq-comp', prompt: 'How do you find the probability of an event NOT happening?', answer: 'P(A\') = 1 − P(A).' },
      { id: 'cue-3', blockId: 'p-def', prompt: 'What values can a probability take?', answer: 'Between 0 and 1 inclusive (0 = impossible, 1 = certain).' },
      { id: 'cue-4', blockId: 'callout-worked-1', prompt: 'A bag has 3 red, 5 blue, 2 green balls. What is P(blue)?', answer: '5/10 = 1/2.' }
    ]
  },
  evidence: []
};
