export const note_olevel_maths_extended_1_1_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/mathematical-symbols.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and use standard mathematical symbols and notation including equality, inequality, set notation, and other key symbols.' }
    },
    {
      id: 'h-equality',
      type: 'heading',
      data: { text: 'Equality and Inequality Symbols', level: 2 }
    },
    {
      id: 'table-symbols',
      type: 'comparisonTable',
      data: {
        caption: 'Key mathematical symbols',
        headers: ['Symbol', 'Meaning', 'Example'],
        rows: [
          ['=', 'is equal to', '3 + 4 = 7'],
          ['≠', 'is not equal to', '5 ≠ 3'],
          ['<', 'is less than', '2 < 5'],
          ['>', 'is greater than', '8 > 3'],
          ['≤', 'is less than or equal to', 'x ≤ 10'],
          ['≥', 'is greater than or equal to', 'y ≥ 0'],
          ['≈', 'is approximately equal to', 'π ≈ 3.14'],
          ['∝', 'is proportional to', 'y ∝ x']
        ]
      }
    },
    {
      id: 'h-set',
      type: 'heading',
      data: { text: 'Set and Number Notation', level: 2 }
    },
    {
      id: 'table-sets',
      type: 'comparisonTable',
      data: {
        caption: 'Number set symbols',
        headers: ['Symbol', 'Name', 'Description'],
        rows: [
          ['ℕ', 'Natural numbers', 'Positive integers: 1, 2, 3, …'],
          ['ℤ', 'Integers', 'Whole numbers: …, −2, −1, 0, 1, 2, …'],
          ['ℚ', 'Rational numbers', 'Numbers expressible as a/b'],
          ['ℝ', 'Real numbers', 'All rational and irrational numbers'],
          ['∈', 'is an element of', '3 ∈ ℤ (3 is an integer)'],
          ['∉', 'is not an element of', '√2 ∉ ℚ']
        ]
      }
    },
    {
      id: 'h-other',
      type: 'heading',
      data: { text: 'Other Important Symbols', level: 2 }
    },
    {
      id: 'list-other',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>∴</strong> — therefore (used to introduce a conclusion)' },
          { text: '<strong>∵</strong> — because (used to give a reason)' },
          { text: '<strong>&rArr;</strong> — implies (if this, then that)' },
          { text: '<strong>⇔</strong> — if and only if (both directions)' },
          { text: '<strong>∞</strong> — infinity' },
          { text: '<strong>Σ</strong> — sum of (add up all terms)' },
          { text: '<strong>|x|</strong> — absolute value / modulus of x' }
        ]
      }
    },
    {
      id: 'callout-key-modulus',
      type: 'callout',
      data: { style: 'key', title: 'Absolute Value (Modulus)', text: 'The <strong>absolute value</strong> |x| gives the distance of x from zero, ignoring the sign.\n|5| = 5 and |−5| = 5.\nIt is always non-negative: |x| ≥ 0 for all real numbers x.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example', text: 'Insert <, > or = to make each statement true:\n(a) −3 ___ −7 &nbsp;&nbsp; (b) |−4| ___ |3|\n\n<strong>Solution:</strong>\n(a) −3 is to the right of −7 on the number line, so −3 <strong>></strong> −7.\n(b) |−4| = 4 and |3| = 3, so |−4| <strong>></strong> |3|.' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'The "alligator mouth" of < and > always opens towards the <strong>bigger</strong> number. Think: the hungry alligator always eats the larger value!' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Mathematical symbols provide a concise way to express relationships. Inequality symbols (<, >, ≤, ≥) compare values. Set notation (ℕ, ℤ, ℚ, ℝ) classifies numbers. The absolute value |x| gives the distance from zero.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-symbols', prompt: 'What do the symbols ≤ and ≥ mean?' },
      { id: 'cue-2', blockId: 'table-sets', prompt: 'What do ℕ, ℤ, ℚ, and ℝ represent?' },
      { id: 'cue-3', blockId: 'callout-key-modulus', prompt: 'What is the absolute value of a number? What is |−8|?' },
      { id: 'cue-4', blockId: 'list-other', prompt: 'What do the symbols ∴ and ∵ mean?' }
    ],
    summaryText: 'Know the standard mathematical symbols for equality, inequality, set membership, and special notation.',
    ready: true
  },
  evidence: []
};
