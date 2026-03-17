export const note_olevel_maths_extended_1_1_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/irrational-numbers.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the difference between rational and irrational numbers. Identify and work with surds.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Rational vs Irrational Numbers', level: 2 }
    },
    {
      id: 'p-rational-def',
      type: 'paragraph',
      data: { text: 'A <strong>rational number</strong> can be written as <span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">b</span></span> where <em>a</em> and <em>b</em> are integers and b ≠ 0. Rational numbers include all integers, terminating decimals (e.g. 0.75), and recurring decimals (e.g. 0.333…).' }
    },
    {
      id: 'callout-key-irrational',
      type: 'callout',
      data: { style: 'key', title: 'Key Definition', text: 'An <strong>irrational number</strong> is a number that <em>cannot</em> be written as a fraction of two integers. Its decimal expansion goes on forever without repeating. Examples: √2, √3, √5, π, e.' }
    },
    {
      id: 'h-surds',
      type: 'heading',
      data: { text: 'Surds', level: 2 }
    },
    {
      id: 'p-surds',
      type: 'paragraph',
      data: { text: 'A <strong>surd</strong> is a root that cannot be simplified to a rational number. For example, √4 = 2 is NOT a surd (since it simplifies to an integer), but √5 IS a surd because it cannot be simplified to a whole number or fraction.' }
    },
    {
      id: 'callout-key-surd-rules',
      type: 'callout',
      data: { style: 'key', title: 'Surd Rules', text: '<strong>Rule 1:</strong> √(a × b) = √a × √b\n<strong>Rule 2:</strong> √(<span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">b</span></span>) = <span class="nb-frac"><span class="nb-num">√a</span><span class="nb-den">√b</span></span>\n<strong>Rule 3:</strong> √a × √a = a\n<strong>Rule 4:</strong> a√n + b√n = (a + b)√n' }
    },
    {
      id: 'h-simplify',
      type: 'heading',
      data: { text: 'Simplifying Surds', level: 2 }
    },
    {
      id: 'p-simplify',
      type: 'paragraph',
      data: { text: 'To simplify a surd, find the largest square factor of the number under the root. For example, √48 = √(16 × 3) = √16 × √3 = 4√3.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: 'Simplify √72.\n\n<strong>Solution:</strong>\nFind the largest square factor of 72: 72 = 36 × 2.\n√72 = √(36 × 2) = √36 × √2 = <strong>6√2</strong>' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2', text: 'Simplify 3√12 + 2√27.\n\n<strong>Solution:</strong>\n3√12 = 3√(4 × 3) = 3 × 2√3 = 6√3\n2√27 = 2√(9 × 3) = 2 × 3√3 = 6√3\nSo 3√12 + 2√27 = 6√3 + 6√3 = <strong>12√3</strong>' }
    },
    {
      id: 'h-rationalise',
      type: 'heading',
      data: { text: 'Rationalising the Denominator', level: 2 }
    },
    {
      id: 'p-rationalise',
      type: 'paragraph',
      data: { text: 'To <strong>rationalise the denominator</strong>, multiply the top and bottom of the fraction by the surd in the denominator. This removes the surd from the bottom of the fraction.' }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 3', text: 'Rationalise <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">√3</span></span>.\n\n<strong>Solution:</strong>\nMultiply top and bottom by √3:\n<span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">√3</span></span> × <span class="nb-frac"><span class="nb-num">√3</span><span class="nb-den">√3</span></span> = <span class="nb-frac"><span class="nb-num">5√3</span><span class="nb-den">3</span></span>' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'If the question says "give an exact answer", leave your answer in surd form. Do NOT use a calculator to find a decimal approximation.' }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: { style: 'warning', title: 'Common Mistake', text: '√9 = 3 (not a surd). Not every root is irrational — check if the number under the root is a perfect square.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Irrational numbers cannot be expressed as fractions — their decimals never terminate or repeat. Surds are irrational roots. Simplify surds by extracting the largest square factor. Rationalise denominators by multiplying top and bottom by the surd.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-irrational', prompt: 'What is an irrational number? Give three examples.' },
      { id: 'cue-2', blockId: 'callout-key-surd-rules', prompt: 'State the four key surd rules.' },
      { id: 'cue-3', blockId: 'p-simplify', prompt: 'How do you simplify a surd like √48?' },
      { id: 'cue-4', blockId: 'p-rationalise', prompt: 'What does it mean to rationalise the denominator?' },
      { id: 'cue-5', blockId: 'p-surds', prompt: 'What is the difference between a surd and a rational root?' }
    ],
    summaryText: 'Irrational numbers have non-repeating, non-terminating decimals; surds can be simplified and rationalised.',
    ready: true
  },
  evidence: []
};
