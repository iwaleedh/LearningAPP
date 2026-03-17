export const note_olevel_maths_core_1_4_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/mixed-numbers-and-improper-fractions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Convert between mixed numbers and improper fractions; understand when each form is useful.' }
    },
    {
      id: 'h-definitions',
      type: 'heading',
      data: { text: 'Mixed Numbers and Improper Fractions', level: 2 }
    },
    {
      id: 'callout-key-def',
      type: 'callout',
      data: { style: 'key', title: 'Definitions', text: '<strong>Mixed number:</strong> a whole number + a proper fraction &nbsp; e.g. 2<sup>3</sup>/<sub>4</sub><br><strong>Improper fraction:</strong> numerator ≥ denominator &nbsp; e.g. <sup>11</sup>/<sub>4</sub><br><br>Both represent the same value and can be converted between each other.' }
    },
    {
      id: 'h-to-improper',
      type: 'heading',
      data: { text: 'Mixed Number → Improper Fraction', level: 2 }
    },
    {
      id: 'p-to-improper',
      type: 'paragraph',
      data: { text: 'To convert a mixed number to an improper fraction: multiply the whole number by the denominator, add the numerator, and place the result over the original denominator.' }
    },
    {
      id: 'equation-to-improper',
      type: 'equation',
      data: { html: 'a <span class="nb-frac"><span class="nb-num">b</span><span class="nb-den">c</span></span> = <span class="nb-frac"><span class="nb-num">(a × c) + b</span><span class="nb-den">c</span></span>', caption: 'Converting mixed number to improper fraction' }
    },
    {
      id: 'callout-worked-mixed',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: 3²⁄₅ → Improper Fraction',
        text: 'Whole number = 3, numerator = 2, denominator = 5<br><br>Step 1: 3 × 5 = 15<br>Step 2: 15 + 2 = 17<br>Step 3: Place over 5 → <strong>17/5</strong><br><br>Check: 17/5 = 3.4 and 3²⁄₅ = 3 + 0.4 = 3.4 ✓'
      }
    },
    {
      id: 'h-to-mixed',
      type: 'heading',
      data: { text: 'Improper Fraction → Mixed Number', level: 2 }
    },
    {
      id: 'p-to-mixed',
      type: 'paragraph',
      data: { text: 'To convert an improper fraction to a mixed number: divide the numerator by the denominator. The quotient is the whole number; the remainder becomes the new numerator over the original denominator.' }
    },
    {
      id: 'callout-worked-improper',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: 29/6 → Mixed Number',
        text: 'Divide: 29 ÷ 6 = 4 remainder 5<br><br>Whole number = 4, remainder = 5, denominator = 6<br><br>Answer: <strong>4 and 5/6</strong> = 4⁵⁄₆<br><br>Check: 4 × 6 = 24, 24 + 5 = 29 → 29/6 ✓'
      }
    },
    {
      id: 'callout-tip-use',
      type: 'callout',
      data: { style: 'tip', title: 'When to Use Each Form', text: 'Use <strong>improper fractions</strong> for calculations (adding, subtracting, multiplying, dividing).<br>Use <strong>mixed numbers</strong> for final answers or communicating real-life quantities.<br><em>e.g. "I need 2½ litres" makes more sense than "5/2 litres"</em>' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Mixed → improper: (whole × denominator + numerator) / denominator. Improper → mixed: divide top by bottom, use remainder. Use improper fractions for arithmetic; mixed numbers for final answers.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-definitions', prompt: 'What is the difference between a mixed number and an improper fraction?' },
      { id: 'cue-2', blockId: 'h-to-improper', prompt: 'Convert 4 3/7 into an improper fraction. Show your working.' },
      { id: 'cue-3', blockId: 'h-to-mixed', prompt: 'Convert 25/6 into a mixed number. Show your working.' },
      { id: 'cue-4', blockId: 'callout-tip-use', prompt: 'Why is it better to use improper fractions when calculating?' },
      { id: 'cue-5', blockId: 'callout-worked-improper', prompt: 'Convert 41/8 to a mixed number.' }
    ],
    summaryText: 'Mixed → improper: (whole × denom + num)/denom. Improper → mixed: divide and use remainder as new numerator.',
    ready: true
  },
  evidence: []
};
