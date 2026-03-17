export const note_olevel_maths_extended_1_8_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/rationalising-denominators.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Rationalise denominators of fractions involving surds, including expressions of the form a + b√c.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Rationalising Denominators', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'A fraction with a surd in the denominator is not in its simplest form. <b>Rationalising the denominator</b> means removing the surd from the bottom of the fraction by multiplying top and bottom by a suitable expression.' } },

    { id: 'h-simple', type: 'heading', data: { text: 'Simple Denominators', level: 2 } },
    { id: 'p-simple', type: 'paragraph', data: { text: 'When the denominator is a single surd (e.g. √n), multiply top and bottom by √n. This works because √n × √n = n.' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'Rationalise <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">√3</span></span>\n\nMultiply top and bottom by √3:\n\n= <span class="nb-frac"><span class="nb-num">5 × √3</span><span class="nb-den">√3 × √3</span></span> = <span class="nb-frac"><span class="nb-num">5√3</span><span class="nb-den">3</span></span>\n\n<b>Answer:</b> <span class="nb-frac"><span class="nb-num">5√3</span><span class="nb-den">3</span></span>' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'Rationalise <span class="nb-frac"><span class="nb-num">6</span><span class="nb-den">3√2</span></span>\n\nMultiply top and bottom by √2:\n\n= <span class="nb-frac"><span class="nb-num">6√2</span><span class="nb-den">3 × 2</span></span> = <span class="nb-frac"><span class="nb-num">6√2</span><span class="nb-den">6</span></span> = √2\n\n<b>Answer:</b> √2' } },

    { id: 'h-conjugate', type: 'heading', data: { text: 'Using the Conjugate', level: 2 } },
    { id: 'p-conjugate', type: 'paragraph', data: { text: 'When the denominator is of the form <b>a + b√c</b> or <b>a − b√c</b>, multiply by the <b>conjugate</b>. The conjugate swaps the sign between the two terms. This uses the difference of two squares: (a + b)(a − b) = a² − b².' } },

    { id: 'callout-key-1', type: 'callout', data: { style: 'key', title: 'Conjugate Pairs', text: 'The conjugate of (a + √b) is (a − √b)\nThe conjugate of (a − √b) is (a + √b)\n\nMultiplying conjugates: (a + √b)(a − √b) = a² − b\nThis eliminates the surd from the denominator.' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: 'Rationalise <span class="nb-frac"><span class="nb-num">4</span><span class="nb-den">3 + √5</span></span>\n\nMultiply top and bottom by the conjugate (3 − √5):\n\n= <span class="nb-frac"><span class="nb-num">4(3 − √5)</span><span class="nb-den">(3 + √5)(3 − √5)</span></span>\n\n= <span class="nb-frac"><span class="nb-num">12 − 4√5</span><span class="nb-den">9 − 5</span></span>\n\n= <span class="nb-frac"><span class="nb-num">12 − 4√5</span><span class="nb-den">4</span></span> = 3 − √5\n\n<b>Answer:</b> 3 − √5' } },

    { id: 'callout-worked-4', type: 'callout', data: { style: 'worked', title: 'Worked Example 4', text: 'Express <span class="nb-frac"><span class="nb-num">2 + √3</span><span class="nb-den">√3 − 1</span></span> in the form a + b√3\n\nMultiply by conjugate (√3 + 1)/(√3 + 1):\n\nNumerator: (2 + √3)(√3 + 1) = 2√3 + 2 + 3 + √3 = 5 + 3√3\nDenominator: (√3 − 1)(√3 + 1) = 3 − 1 = 2\n\n= <span class="nb-frac"><span class="nb-num">5 + 3√3</span><span class="nb-den">2</span></span> = <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">2</span></span> + <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">2</span></span>√3\n\n<b>Answer:</b> <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">2</span></span> + <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">2</span></span>√3' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'When the question says "give your answer in the form a + b√c", it is asking you to rationalise the denominator. Always simplify fully — cancel common factors at the end.' } },

    { id: 'callout-warning-1', type: 'callout', data: { style: 'warning', title: 'Common Mistake', text: 'When multiplying out the numerator, don\'t forget to multiply every term. With (2 + √3)(√3 + 1) you must expand all four products using FOIL.' } },

    { id: 'sum-1', type: 'summary', data: { text: 'To rationalise a single surd denominator, multiply top and bottom by that surd. For denominators like a ± √b, multiply by the conjugate (a ∓ √b) to create a difference of two squares. Always simplify the final answer.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What does rationalising the denominator mean?' },
      { id: 'cue-2', blockId: 'p-simple', prompt: 'How do you rationalise a fraction with √n in the denominator?' },
      { id: 'cue-3', blockId: 'callout-key-1', prompt: 'What is the conjugate of (a + √b)?' },
      { id: 'cue-4', blockId: 'callout-key-1', prompt: 'What identity makes the conjugate method work?' },
      { id: 'cue-5', blockId: 'callout-worked-3', prompt: 'How do you rationalise 4/(3 + √5)?' }
    ],
    summaryText: 'Rationalise single surd denominators by multiplying by the surd. For (a ± √b) denominators, use the conjugate and difference of two squares.',
    ready: true
  },
  evidence: []
};
