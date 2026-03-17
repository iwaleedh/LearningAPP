export const note_olevel_maths_extended_1_7_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/converting-to-and-from-standard-form.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Express numbers in standard form (scientific notation) and convert between standard form and ordinary numbers.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What Is Standard Form?', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Standard form</strong> (also called scientific notation) is a way of writing very large or very small numbers concisely. It is written as:' }
    },
    {
      id: 'eq-form',
      type: 'equation',
      data: { html: 'a × 10<sup>n</sup>', caption: 'where 1 ≤ a < 10 and n is an integer' }
    },
    {
      id: 'callout-key-rules',
      type: 'callout',
      data: { style: 'key', title: 'Key Rules', text: '• <strong>a</strong> must be at least 1 but less than 10 (one non-zero digit before the decimal point)\n• <strong>n</strong> is a positive integer for large numbers and a negative integer for small numbers\n• Examples: 3.2 × 10⁴ ✓ &nbsp;&nbsp; 32 × 10³ ✗ (32 is not between 1 and 10)' }
    },
    {
      id: 'h-large',
      type: 'heading',
      data: { text: 'Converting Large Numbers', level: 2 }
    },
    {
      id: 'p-large',
      type: 'paragraph',
      data: { text: 'Move the decimal point <strong>left</strong> until you have a number between 1 and 10. Count how many places you moved — this is the <strong>positive</strong> power of 10.' }
    },
    {
      id: 'callout-worked-large',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example — Large Numbers', text: 'Write 4 560 000 in standard form.\n\n4 560 000 &rarr; 4.56 (moved decimal 6 places left)\n= <strong>4.56 × 10⁶</strong>\n\nWrite 93 000 000 in standard form.\n93 000 000 &rarr; 9.3 (moved 7 places left)\n= <strong>9.3 × 10⁷</strong>' }
    },
    {
      id: 'h-small',
      type: 'heading',
      data: { text: 'Converting Small Numbers', level: 2 }
    },
    {
      id: 'p-small',
      type: 'paragraph',
      data: { text: 'Move the decimal point <strong>right</strong> until you have a number between 1 and 10. Count how many places you moved — this gives a <strong>negative</strong> power of 10.' }
    },
    {
      id: 'callout-worked-small',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example — Small Numbers', text: 'Write 0.000 072 in standard form.\n\n0.000 072 &rarr; 7.2 (moved decimal 5 places right)\n= <strong>7.2 × 10⁻⁵</strong>\n\nWrite 0.0041 in standard form.\n0.0041 &rarr; 4.1 (moved 3 places right)\n= <strong>4.1 × 10⁻³</strong>' }
    },
    {
      id: 'h-back',
      type: 'heading',
      data: { text: 'Converting Back to Ordinary Numbers', level: 2 }
    },
    {
      id: 'list-back',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Positive power:</strong> Move decimal point right &rarr; number gets larger' },
          { text: '<strong>Negative power:</strong> Move decimal point left &rarr; number gets smaller' },
          { text: '<strong>Fill empty places with zeros</strong>' }
        ]
      }
    },
    {
      id: 'callout-worked-back',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example — Converting Back', text: '(a) 6.03 × 10⁴ &rarr; move decimal 4 right &rarr; <strong>60 300</strong>\n(b) 8.5 × 10⁻³ &rarr; move decimal 3 left &rarr; <strong>0.0085</strong>' }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: { style: 'warning', title: 'Common Mistake', text: 'Writing 45 × 10³ or 0.6 × 10⁵ — these are NOT standard form because the first part must satisfy 1 ≤ a < 10. Correct versions: 4.5 × 10⁴ and 6 × 10⁴.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Standard form is a × 10ⁿ where 1 ≤ a < 10. Large numbers have positive n; small numbers have negative n. Move the decimal point and count the places to convert.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-form', prompt: 'What is the general form of standard form and what constraints apply to a and n?' },
      { id: 'cue-2', blockId: 'p-large', prompt: 'Describe how to convert a large number into standard form.' },
      { id: 'cue-3', blockId: 'p-small', prompt: 'Describe how to convert a small number into standard form.' },
      { id: 'cue-4', blockId: 'callout-warning-1', prompt: 'Why is 45 × 10³ not valid standard form?' }
    ],
    summaryText: 'Standard form writes numbers as a × 10ⁿ (1 ≤ a < 10). Positive n for large, negative n for small numbers.',
    ready: true
  },
  evidence: []
};
