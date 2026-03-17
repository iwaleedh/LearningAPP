export const note_olevel_maths_core_1_8_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/converting-to-and-from-standard-form.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Write numbers in standard form (A × 10ⁿ where 1 ≤ A < 10) and convert standard form back to ordinary numbers.' }
    },
    {
      id: 'h-what-is-sf',
      type: 'heading',
      data: { text: 'What is Standard Form?', level: 2 }
    },
    {
      id: 'p-what-is-sf',
      type: 'paragraph',
      data: { text: '<strong>Standard form</strong> (also called scientific notation) expresses numbers as A × 10ⁿ, where <strong>A</strong> is a number between 1 and 10 (1 ≤ A &lt; 10) and <strong>n</strong> is an integer (positive, negative, or zero).' }
    },
    {
      id: 'callout-key-sf',
      type: 'callout',
      data: { style: 'key', title: 'Standard Form: A × 10ⁿ', text: '• A must satisfy: 1 ≤ A &lt; 10<br>• n is a positive or negative integer<br>• Large numbers: n is positive; small decimals: n is negative' }
    },
    {
      id: 'h-to-sf',
      type: 'heading',
      data: { text: 'Converting Ordinary Numbers to Standard Form', level: 2 }
    },
    {
      id: 'list-to-sf-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Write A by placing the decimal point after the first significant digit.' },
          { text: 'Count how many places you moved the decimal point to get from the original to A.' },
          { text: 'Moving left (large numbers): n is positive. Moving right (small numbers): n is negative.' }
        ]
      }
    },
    {
      id: 'callout-worked-to-sf',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Numbers → Standard Form',
        text: '56 000 → 5.6 × 10<sup>4</sup> (decimal moved 4 left)<br>3 820 000 → 3.82 × 10<sup>6</sup><br>0.0074 → 7.4 × 10<sup>−3</sup> (decimal moved 3 right)<br>0.000 056 → 5.6 × 10<sup>−5</sup>'
      }
    },
    {
      id: 'h-from-sf',
      type: 'heading',
      data: { text: 'Converting Standard Form to Ordinary Numbers', level: 2 }
    },
    {
      id: 'list-from-sf-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Positive n: move the decimal point n places to the right (giving a large number).' },
          { text: 'Negative n: move the decimal point |n| places to the left (giving a small decimal).' }
        ]
      }
    },
    {
      id: 'callout-worked-from-sf',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Standard Form → Ordinary Numbers',
        text: '4.7 × 10<sup>5</sup> = 470 000<br>2.03 × 10<sup>3</sup> = 2 030<br>6.8 × 10<sup>−4</sup> = 0.000 68<br>1.5 × 10<sup>−2</sup> = 0.015'
      }
    },
    {
      id: 'callout-tip-sf',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Check: is your A value between 1 and 10? If A = 15, you have NOT written standard form. Rewrite: 15 × 10³ = 1.5 × 10⁴.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Standard form: A × 10ⁿ with 1 ≤ A < 10. Large numbers: positive n (decimal moves left). Small decimals: negative n (decimal moves right). Always check A is in range.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-sf', prompt: 'State the two conditions for standard form A × 10ⁿ.' },
      { id: 'cue-2', blockId: 'callout-worked-to-sf', prompt: 'Write 56 000 and 0.0074 in standard form.' },
      { id: 'cue-3', blockId: 'callout-worked-from-sf', prompt: 'Convert 4.7 × 10⁵ and 6.8 × 10⁻⁴ to ordinary numbers.' },
      { id: 'cue-4', blockId: 'callout-tip-sf', prompt: 'Is 15 × 10³ standard form? If not, how do you correct it?' },
      { id: 'cue-5', blockId: 'h-to-sf', prompt: 'Explain how to determine whether n should be positive or negative.' }
    ],
    summaryText: 'Standard form: 1 ≤ A < 10, multiplied by a power of 10. Positive n for large numbers, negative n for small decimals.',
    ready: true
  },
  evidence: []
};
