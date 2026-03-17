export const note_olevel_maths_core_1_1_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/reciprocals.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define and find the reciprocal of integers, decimals, and fractions; understand that the product of a number and its reciprocal equals 1.' }
    },
    {
      id: 'h-definition',
      type: 'heading',
      data: { text: 'What is a Reciprocal?', level: 2 }
    },
    {
      id: 'p-definition',
      type: 'paragraph',
      data: { text: 'The <strong>reciprocal</strong> of a number is 1 divided by that number. When you multiply any number by its reciprocal, the answer is always <strong>1</strong>.' }
    },
    {
      id: 'callout-key-recip',
      type: 'callout',
      data: { style: 'key', title: 'Reciprocal Formula', text: 'Reciprocal of x = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">x</span></span> &nbsp;(where x ≠ 0)<br><br>x × <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">x</span></span> = 1 &nbsp; always' }
    },
    {
      id: 'h-integers',
      type: 'heading',
      data: { text: 'Reciprocals of Integers', level: 2 }
    },
    {
      id: 'p-integers',
      type: 'paragraph',
      data: { text: 'To find the reciprocal of a whole number, write 1 over it (make it the denominator of a fraction).' }
    },
    {
      id: 'list-int-recip',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Reciprocal of 4 = <sup>1</sup>/<sub>4</sub> = 0.25' },
          { text: 'Reciprocal of 10 = <sup>1</sup>/<sub>10</sub> = 0.1' },
          { text: 'Reciprocal of −3 = −<sup>1</sup>/<sub>3</sub>' }
        ]
      }
    },
    {
      id: 'h-fractions',
      type: 'heading',
      data: { text: 'Reciprocals of Fractions', level: 2 }
    },
    {
      id: 'p-fractions',
      type: 'paragraph',
      data: { text: 'To find the reciprocal of a fraction, simply swap (flip) the numerator and denominator. The reciprocal of <sup>a</sup>/<sub>b</sub> is <sup>b</sup>/<sub>a</sub>.' }
    },
    {
      id: 'list-frac-recip',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Reciprocal of <sup>3</sup>/<sub>4</sub> = <sup>4</sup>/<sub>3</sub>' },
          { text: 'Reciprocal of <sup>2</sup>/<sub>7</sub> = <sup>7</sup>/<sub>2</sub> = 3.5' },
          { text: 'Reciprocal of <sup>5</sup>/<sub>1</sub> (= 5) = <sup>1</sup>/<sub>5</sub>' }
        ]
      }
    },
    {
      id: 'h-decimals',
      type: 'heading',
      data: { text: 'Reciprocals of Decimals', level: 2 }
    },
    {
      id: 'p-decimals',
      type: 'paragraph',
      data: { text: 'To find the reciprocal of a decimal, divide 1 by the decimal. It is often easier to convert to a fraction first, then flip.' }
    },
    {
      id: 'callout-worked-recip',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Finding Reciprocals',
        text: '<strong>a)</strong> Find the reciprocal of 8<br>→ <sup>1</sup>/<sub>8</sub> = 0.125 &nbsp; Check: 8 × 0.125 = 1 ✓<br><br><strong>b)</strong> Find the reciprocal of <sup>3</sup>/<sub>5</sub><br>→ Flip: <sup>5</sup>/<sub>3</sub> ≈ 1.667 &nbsp; Check: <sup>3</sup>/<sub>5</sub> × <sup>5</sup>/<sub>3</sub> = 1 ✓<br><br><strong>c)</strong> Find the reciprocal of 0.4<br>→ 0.4 = <sup>2</sup>/<sub>5</sub> → reciprocal = <sup>5</sup>/<sub>2</sub> = 2.5<br>Check: 0.4 × 2.5 = 1 ✓'
      }
    },
    {
      id: 'callout-tip-zero',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Zero Has No Reciprocal', text: 'The number <strong>0</strong> has no reciprocal because <sup>1</sup>/<sub>0</sub> is undefined. Division by zero is impossible.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The reciprocal of x is 1/x (flip the fraction). Any number multiplied by its reciprocal = 1. Reciprocal of an integer: write 1 over it. Reciprocal of a fraction: swap numerator and denominator. Zero has no reciprocal.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-definition', prompt: 'What is the reciprocal of a number? What does multiplying by the reciprocal always give?' },
      { id: 'cue-2', blockId: 'h-integers', prompt: 'What is the reciprocal of 5? Of −2?' },
      { id: 'cue-3', blockId: 'h-fractions', prompt: 'What is the reciprocal of 3/8? How do you find it?' },
      { id: 'cue-4', blockId: 'h-decimals', prompt: 'What is the reciprocal of 0.2? Show your working.' },
      { id: 'cue-5', blockId: 'callout-tip-zero', prompt: 'Why does 0 have no reciprocal?' }
    ],
    summaryText: 'Reciprocal of x = 1/x; for a fraction a/b, flip to b/a; any number × its reciprocal = 1.',
    ready: true
  },
  evidence: []
};
