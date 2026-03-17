export const note_olevel_maths_extended_1_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/powers-and-roots.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and use powers (indices), square roots, and cube roots. Apply the laws of indices to simplify expressions.' }
    },
    {
      id: 'h-powers',
      type: 'heading',
      data: { text: 'Powers (Indices)', level: 2 }
    },
    {
      id: 'p-powers',
      type: 'paragraph',
      data: { text: 'A <strong>power</strong> (or index) tells you how many times to multiply a number by itself. In the expression a<sup>n</sup>, <em>a</em> is the <strong>base</strong> and <em>n</em> is the <strong>index</strong> (or exponent). For example, 2<sup>5</sup> = 2 × 2 × 2 × 2 × 2 = 32.' }
    },
    {
      id: 'callout-key-laws',
      type: 'callout',
      data: { style: 'key', title: 'Laws of Indices', text: '<strong>Law 1 (Multiplication):</strong> a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>\n<strong>Law 2 (Division):</strong> a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>\n<strong>Law 3 (Power of a power):</strong> (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>\n<strong>Law 4 (Zero index):</strong> a<sup>0</sup> = 1 (for a ≠ 0)\n<strong>Law 5 (Negative index):</strong> a<sup>−n</sup> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">a<sup>n</sup></span></span>\n<strong>Law 6 (Fractional index):</strong> a<sup>1/n</sup> = ⁿ√a' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: 'Simplify 2<sup>3</sup> × 2<sup>4</sup>.\n\n<strong>Solution:</strong>\nUsing Law 1: 2<sup>3</sup> × 2<sup>4</sup> = 2<sup>3+4</sup> = 2<sup>7</sup> = <strong>128</strong>' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2', text: 'Simplify <span class="nb-frac"><span class="nb-num">6<sup>5</sup></span><span class="nb-den">6<sup>2</sup></span></span>.\n\n<strong>Solution:</strong>\nUsing Law 2: 6<sup>5</sup> ÷ 6<sup>2</sup> = 6<sup>5−2</sup> = 6<sup>3</sup> = <strong>216</strong>' }
    },
    {
      id: 'h-roots',
      type: 'heading',
      data: { text: 'Square Roots and Cube Roots', level: 2 }
    },
    {
      id: 'p-roots',
      type: 'paragraph',
      data: { text: 'The <strong>square root</strong> of a number <em>n</em> is the value that, when multiplied by itself, gives <em>n</em>. Written √n or n<sup>1/2</sup>. The <strong>cube root</strong> of <em>n</em> is the value that, when cubed, gives <em>n</em>. Written ³√n or n<sup>1/3</sup>.' }
    },
    {
      id: 'eq-roots',
      type: 'equation',
      data: { html: '√49 = 7 &nbsp; because &nbsp; 7² = 49', caption: 'Square root example' }
    },
    {
      id: 'eq-cube-root',
      type: 'equation',
      data: { html: '³√125 = 5 &nbsp; because &nbsp; 5³ = 125', caption: 'Cube root example' }
    },
    {
      id: 'h-negative',
      type: 'heading',
      data: { text: 'Negative and Fractional Indices', level: 2 }
    },
    {
      id: 'p-negative',
      type: 'paragraph',
      data: { text: 'A <strong>negative index</strong> means "take the reciprocal". So 5<sup>−2</sup> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">5²</span></span> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">25</span></span>.' }
    },
    {
      id: 'p-fractional',
      type: 'paragraph',
      data: { text: 'A <strong>fractional index</strong> combines a root and a power. a<sup><span class="nb-frac"><span class="nb-num">m</span><span class="nb-den">n</span></span></sup> = (ⁿ√a)<sup>m</sup>. For example, 8<sup>2/3</sup> = (³√8)² = 2² = 4.' }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 3', text: 'Evaluate 27<sup>−2/3</sup>.\n\n<strong>Solution:</strong>\nStep 1: Deal with the fraction — cube root of 27 = 3.\nStep 2: Apply the power — 3² = 9.\nStep 3: Deal with the negative — take reciprocal.\n27<sup>−2/3</sup> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">9</span></span>' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'For fractional indices, always find the <strong>root first</strong>, then raise to the power. This keeps the numbers small and manageable.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Powers tell you how many times to multiply a base by itself. The six laws of indices allow you to simplify expressions. Negative indices mean reciprocals; fractional indices mean roots. Always find the root before applying the power.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-laws', prompt: 'State the six laws of indices.' },
      { id: 'cue-2', blockId: 'p-negative', prompt: 'What does a negative index mean? Give an example.' },
      { id: 'cue-3', blockId: 'p-fractional', prompt: 'How do you evaluate a fractional index like 8^(2/3)?' },
      { id: 'cue-4', blockId: 'p-roots', prompt: 'What is the difference between a square root and a cube root?' },
      { id: 'cue-5', blockId: 'p-powers', prompt: 'What do the base and index represent in a power expression?' }
    ],
    summaryText: 'Use the laws of indices to simplify powers; negative indices give reciprocals and fractional indices give roots.',
    ready: true
  },
  evidence: []
};
