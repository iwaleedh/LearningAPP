export const note_olevel_maths_extended_1_8_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/simplifying-surds.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand what surds are and simplify expressions involving surds, including products and quotients.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Simplifying Surds', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'A <b>surd</b> is a root that cannot be simplified to a whole number or fraction. For example, √2, √3, and √5 are surds, but √4 = 2 and √9 = 3 are not surds. Surds are <b>irrational numbers</b> — their decimal forms never terminate or repeat.' } },

    { id: 'callout-key-1', type: 'callout', data: { style: 'key', title: 'Key Property', text: '√(a × b) = √a × √b  and  √(<span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">b</span></span>) = <span class="nb-frac"><span class="nb-num">√a</span><span class="nb-den">√b</span></span>\n\nThese rules let us break surds into simpler parts.' } },

    { id: 'h-simplify', type: 'heading', data: { text: 'Simplifying a Single Surd', level: 2 } },
    { id: 'p-simplify', type: 'paragraph', data: { text: 'To simplify a surd like √n, find the <b>largest perfect square factor</b> of n, then split the root.' } },
    { id: 'list-steps', type: 'list', data: { style: 'numbered', items: [
      { text: 'Find the largest square number that divides into the number under the root.' },
      { text: 'Split: √n = √(square × remainder).' },
      { text: 'Simplify: √(square) × √(remainder).' }
    ] } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'Simplify √72\n\n<b>Step 1:</b> Largest square factor of 72 is 36 (since 72 = 36 × 2)\n<b>Step 2:</b> √72 = √(36 × 2) = √36 × √2\n<b>Step 3:</b> = 6√2\n\n<b>Answer:</b> 6√2' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'Simplify √200\n\n72 = 100 × 2, so √200 = √100 × √2 = 10√2\n\n<b>Answer:</b> 10√2' } },

    { id: 'h-add', type: 'heading', data: { text: 'Adding and Subtracting Surds', level: 2 } },
    { id: 'p-add', type: 'paragraph', data: { text: 'You can only add or subtract surds with the <b>same root part</b> (like terms). Simplify each surd first, then combine.' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: 'Simplify √12 + √27\n\n<b>Step 1:</b> √12 = √(4 × 3) = 2√3\n<b>Step 2:</b> √27 = √(9 × 3) = 3√3\n<b>Step 3:</b> 2√3 + 3√3 = 5√3\n\n<b>Answer:</b> 5√3' } },

    { id: 'h-multiply', type: 'heading', data: { text: 'Multiplying Surds', level: 2 } },
    { id: 'p-multiply', type: 'paragraph', data: { text: 'Use the rule √a × √b = √(ab). Remember that √a × √a = a.' } },

    { id: 'callout-worked-4', type: 'callout', data: { style: 'worked', title: 'Worked Example 4', text: 'Expand and simplify (2 + √3)(5 − √3)\n\nUse FOIL:\n= 2 × 5 + 2 × (−√3) + √3 × 5 + √3 × (−√3)\n= 10 − 2√3 + 5√3 − 3\n= 7 + 3√3\n\n<b>Answer:</b> 7 + 3√3' } },

    { id: 'callout-worked-5', type: 'callout', data: { style: 'worked', title: 'Worked Example 5', text: 'Expand and simplify (3 + √5)²\n\n= (3 + √5)(3 + √5)\n= 9 + 3√5 + 3√5 + 5\n= 14 + 6√5\n\n<b>Answer:</b> 14 + 6√5' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'If a question says "give your answer in the form a + b√c", you must simplify all surds fully and collect like terms. Never mix surds with different root parts.' } },

    { id: 'callout-warning-1', type: 'callout', data: { style: 'warning', title: 'Common Mistake', text: '√(a + b) ≠ √a + √b. For example, √(9 + 16) = √25 = 5, but √9 + √16 = 3 + 4 = 7. The splitting rule only works for multiplication and division, NOT addition.' } },

    { id: 'sum-1', type: 'summary', data: { text: 'Surds are irrational roots that cannot be simplified to whole numbers. Simplify by extracting the largest square factor. Only add/subtract like surds. Use √a × √b = √(ab) for multiplication. Always simplify fully in exam answers.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What is a surd? Give an example.' },
      { id: 'cue-2', blockId: 'list-steps', prompt: 'What are the steps to simplify a single surd?' },
      { id: 'cue-3', blockId: 'p-add', prompt: 'When can you add or subtract surds?' },
      { id: 'cue-4', blockId: 'p-multiply', prompt: 'What is √a × √a equal to?' },
      { id: 'cue-5', blockId: 'callout-warning-1', prompt: 'Why is √(a + b) ≠ √a + √b?' }
    ],
    summaryText: 'Surds are irrational roots. Simplify by finding the largest square factor. Only combine like surds. Multiplication: √a × √b = √(ab).',
    ready: true
  },
  evidence: []
};
