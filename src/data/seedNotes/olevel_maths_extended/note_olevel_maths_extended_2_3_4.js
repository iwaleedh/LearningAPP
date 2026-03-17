export const note_olevel_maths_extended_2_3_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/factorising-simple-quadratics.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Factorise quadratic expressions of the form x² + bx + c into two brackets (x + p)(x + q) by finding factor pairs of c that sum to b.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Factorising Simple Quadratics', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>simple quadratic</strong> has the form <em>x</em>² + <em>bx</em> + <em>c</em> (where the coefficient of <em>x</em>² is 1). To factorise, we reverse the FOIL process and find two numbers that multiply to give <em>c</em> and add to give <em>b</em>.' }
    },
    {
      id: 'callout-key-method',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Factorising x² + bx + c',
        text: 'Find two numbers <em>p</em> and <em>q</em> such that:<br><br>• <em>p</em> × <em>q</em> = <em>c</em> &nbsp;(product = constant term)<br>• <em>p</em> + <em>q</em> = <em>b</em> &nbsp;(sum = coefficient of <em>x</em>)<br><br>Then: <em>x</em>² + <em>bx</em> + <em>c</em> = (<em>x</em> + <em>p</em>)(<em>x</em> + <em>q</em>)'
      }
    },
    {
      id: 'h-positive',
      type: 'heading',
      data: { text: 'When c is Positive', level: 2 }
    },
    {
      id: 'callout-worked-pos',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Factorise <em>x</em>² + 7<em>x</em> + 12<br><br>Need: <em>p</em> × <em>q</em> = 12 and <em>p</em> + <em>q</em> = 7<br><br>Factor pairs of 12: (1,12), (2,6), (3,4)<br>Which pair sums to 7? &rarr; <strong>3 and 4</strong><br><br>= <strong>(<em>x</em> + 3)(<em>x</em> + 4)</strong>'
      }
    },
    {
      id: 'callout-worked-neg-b',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Factorise <em>x</em>² − 9<em>x</em> + 20<br><br>Need: <em>p</em> × <em>q</em> = 20 and <em>p</em> + <em>q</em> = −9<br><br>Since product is positive but sum is negative, both numbers must be <strong>negative</strong>.<br><br>Try: (−4) × (−5) = 20 ✓ and (−4) + (−5) = −9 ✓<br><br>= <strong>(<em>x</em> − 4)(<em>x</em> − 5)</strong>'
      }
    },
    {
      id: 'h-negative-c',
      type: 'heading',
      data: { text: 'When c is Negative', level: 2 }
    },
    {
      id: 'p-neg-c',
      type: 'paragraph',
      data: { text: 'When <em>c</em> is negative, one of the numbers must be positive and the other negative (since positive × negative = negative).' }
    },
    {
      id: 'callout-worked-neg-c',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Factorise <em>x</em>² + 2<em>x</em> − 15<br><br>Need: <em>p</em> × <em>q</em> = −15 and <em>p</em> + <em>q</em> = 2<br><br>Factor pairs of −15: (1,−15), (−1,15), (3,−5), (−3,5)<br>Which pair sums to 2? &rarr; <strong>−3 and 5</strong><br><br>= <strong>(<em>x</em> − 3)(<em>x</em> + 5)</strong>'
      }
    },
    {
      id: 'table-signs',
      type: 'comparisonTable',
      data: {
        caption: 'Sign rules for factorising x² + bx + c',
        headers: ['Signs of b and c', 'Signs of p and q', 'Example'],
        rows: [
          ['b > 0, c > 0', 'Both positive', 'x² + 7x + 12 = (x + 3)(x + 4)'],
          ['b < 0, c > 0', 'Both negative', 'x² − 9x + 20 = (x − 4)(x − 5)'],
          ['b > 0, c < 0', 'One +, one − (bigger is +)', 'x² + 2x − 15 = (x − 3)(x + 5)'],
          ['b < 0, c < 0', 'One +, one − (bigger is −)', 'x² − 2x − 15 = (x + 3)(x − 5)']
        ]
      }
    },
    {
      id: 'callout-tip-check',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Always Check',
        text: 'After factorising, expand your answer to verify. Check the constant term (L in FOIL) and the middle term (O + I in FOIL) match the original.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To factorise x² + bx + c: find two numbers that <strong>multiply to c</strong> and <strong>add to b</strong>. The signs of b and c tell you the signs of the two numbers. Always expand to check.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Factorise x² + bx + c by finding two numbers that multiply to c and add to b.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-method', prompt: 'How do you factorise x² + bx + c?', answer: 'Find p and q where p × q = c and p + q = b, then write (x + p)(x + q).' },
      { id: 'cue-2', blockId: 'callout-worked-pos', prompt: 'Factorise x² + 7x + 12.', answer: '(x + 3)(x + 4)' },
      { id: 'cue-3', blockId: 'table-signs', prompt: 'If c is positive and b is negative, what signs do p and q have?', answer: 'Both negative (negative × negative = positive; negative + negative = negative).' },
      { id: 'cue-4', blockId: 'callout-worked-neg-c', prompt: 'Factorise x² + 2x − 15.', answer: '(x − 3)(x + 5)' }
    ]
  },
  evidence: []
};
