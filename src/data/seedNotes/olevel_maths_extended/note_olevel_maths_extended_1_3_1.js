export const note_olevel_maths_extended_1_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/mixed-numbers-and-improper-fractions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Convert between mixed numbers and improper fractions fluently.' }
    },
    {
      id: 'h-mixed',
      type: 'heading',
      data: { text: 'Mixed Numbers', level: 2 }
    },
    {
      id: 'p-mixed',
      type: 'paragraph',
      data: { text: 'A <strong>mixed number</strong> combines a whole number and a proper fraction, for example 3<span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">5</span></span>. This means 3 whole parts plus <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">5</span></span> of another part.' }
    },
    {
      id: 'h-improper',
      type: 'heading',
      data: { text: 'Improper Fractions', level: 2 }
    },
    {
      id: 'p-improper',
      type: 'paragraph',
      data: { text: 'An <strong>improper fraction</strong> has a numerator that is greater than or equal to the denominator, for example <span class="nb-frac"><span class="nb-num">17</span><span class="nb-den">5</span></span>. The value is ≥ 1.' }
    },
    {
      id: 'h-to-improper',
      type: 'heading',
      data: { text: 'Converting Mixed Numbers to Improper Fractions', level: 2 }
    },
    {
      id: 'p-to-improper',
      type: 'paragraph',
      data: { text: 'To convert a mixed number to an improper fraction: <strong>multiply the whole number by the denominator, add the numerator</strong>, and keep the same denominator.' }
    },
    {
      id: 'eq-to-improper',
      type: 'equation',
      data: { html: 'a<span class="nb-frac"><span class="nb-num">b</span><span class="nb-den">c</span></span> = <span class="nb-frac"><span class="nb-num">a × c + b</span><span class="nb-den">c</span></span>', caption: 'Mixed to improper formula' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: 'Convert 4<span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">7</span></span> to an improper fraction.\n\n<strong>Solution:</strong>\nMultiply whole number by denominator: 4 × 7 = 28\nAdd the numerator: 28 + 3 = 31\nKeep the denominator: <span class="nb-frac"><span class="nb-num">31</span><span class="nb-den">7</span></span>' }
    },
    {
      id: 'h-to-mixed',
      type: 'heading',
      data: { text: 'Converting Improper Fractions to Mixed Numbers', level: 2 }
    },
    {
      id: 'p-to-mixed',
      type: 'paragraph',
      data: { text: 'To convert an improper fraction to a mixed number: <strong>divide the numerator by the denominator</strong>. The quotient is the whole number part; the remainder is the new numerator, over the same denominator.' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2', text: 'Convert <span class="nb-frac"><span class="nb-num">23</span><span class="nb-den">4</span></span> to a mixed number.\n\n<strong>Solution:</strong>\n23 ÷ 4 = 5 remainder 3\nSo <span class="nb-frac"><span class="nb-num">23</span><span class="nb-den">4</span></span> = 5<span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">4</span></span>' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'When adding or subtracting mixed numbers, it is often easier to convert to <strong>improper fractions first</strong>, do the calculation, then convert back to a mixed number.' }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: { style: 'warning', title: 'Common Mistake', text: 'When converting to an improper fraction, don\'t forget to <em>add</em> the numerator to the product. 3<span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">5</span></span> = <span class="nb-frac"><span class="nb-num">3×5 + 2</span><span class="nb-den">5</span></span> = <span class="nb-frac"><span class="nb-num">17</span><span class="nb-den">5</span></span>, NOT <span class="nb-frac"><span class="nb-num">15</span><span class="nb-den">5</span></span>.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Mixed &rarr; improper: multiply whole by denominator, add numerator, keep denominator. Improper &rarr; mixed: divide numerator by denominator; quotient = whole, remainder = new numerator. Convert to improper fractions before performing arithmetic.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-to-improper', prompt: 'How do you convert a mixed number to an improper fraction?' },
      { id: 'cue-2', blockId: 'p-to-mixed', prompt: 'How do you convert an improper fraction to a mixed number?' },
      { id: 'cue-3', blockId: 'p-mixed', prompt: 'What is a mixed number?' },
      { id: 'cue-4', blockId: 'callout-tip-1', prompt: 'Why is it useful to convert to improper fractions before doing arithmetic?' }
    ],
    summaryText: 'Convert between mixed numbers and improper fractions using multiplication/addition and division with remainders.',
    ready: true
  },
  evidence: []
};
