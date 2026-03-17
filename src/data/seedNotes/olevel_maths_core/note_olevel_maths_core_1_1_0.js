export const note_olevel_maths_core_1_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/types-of-numbers.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify and classify different types of numbers including integers, natural numbers, rational numbers, irrational numbers, and real numbers.' }
    },
    {
      id: 'h-integers',
      type: 'heading',
      data: { text: 'Integers', level: 2 }
    },
    {
      id: 'p-integers',
      type: 'paragraph',
      data: { text: 'An <strong>integer</strong> is any whole number — positive, negative, or zero. Integers do <em>not</em> include fractions or decimals.' }
    },
    {
      id: 'callout-key-int',
      type: 'callout',
      data: { style: 'key', title: 'Definition: Integer', text: 'Integers: ..., −3, −2, −1, 0, 1, 2, 3, ...<br>They are whole numbers with no fractional or decimal part.' }
    },
    {
      id: 'h-natural',
      type: 'heading',
      data: { text: 'Natural Numbers', level: 2 }
    },
    {
      id: 'p-natural',
      type: 'paragraph',
      data: { text: '<strong>Natural numbers</strong> are the positive counting numbers: 1, 2, 3, 4, 5, ... For IGCSE purposes, natural numbers are positive integers (zero is not included unless stated).' }
    },
    {
      id: 'h-rational',
      type: 'heading',
      data: { text: 'Rational Numbers', level: 2 }
    },
    {
      id: 'p-rational',
      type: 'paragraph',
      data: { text: 'A <strong>rational number</strong> is any number that can be written as a fraction <sup>p</sup>/<sub>q</sub>, where p and q are integers and q ≠ 0. This includes all integers, all terminating decimals, and all recurring (repeating) decimals.' }
    },
    {
      id: 'list-rational',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'All integers: e.g. 5 = <sup>5</sup>/<sub>1</sub>' },
          { text: 'Fractions: <sup>3</sup>/<sub>4</sub>, <sup>−7</sup>/<sub>2</sub>' },
          { text: 'Terminating decimals: 0.75 = <sup>3</sup>/<sub>4</sub>' },
          { text: 'Recurring decimals: 0.333... = <sup>1</sup>/<sub>3</sub>' }
        ]
      }
    },
    {
      id: 'h-irrational',
      type: 'heading',
      data: { text: 'Irrational Numbers', level: 2 }
    },
    {
      id: 'p-irrational',
      type: 'paragraph',
      data: { text: 'An <strong>irrational number</strong> <em>cannot</em> be written as a fraction of two integers. Its decimal expansion is infinite and non-repeating.' }
    },
    {
      id: 'list-irrational',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'π ≈ 3.14159265...' },
          { text: '√2 ≈ 1.41421356...' },
          { text: '√3 ≈ 1.73205080...' },
          { text: '√5 ≈ 2.23606797...' }
        ]
      }
    },
    {
      id: 'callout-tip-sqrt',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Square Roots', text: 'A square root is <strong>rational</strong> only if it simplifies to a whole number.<br>√4 = 2 ✓ (rational) &nbsp;|&nbsp; √9 = 3 ✓ (rational)<br>√5 ✗ (irrational) &nbsp;|&nbsp; √7 ✗ (irrational)' }
    },
    {
      id: 'h-real',
      type: 'heading',
      data: { text: 'Real Numbers', level: 2 }
    },
    {
      id: 'p-real',
      type: 'paragraph',
      data: { text: 'The set of <strong>real numbers</strong> includes ALL rational and irrational numbers. Every point on a number line represents a real number.' }
    },
    {
      id: 'tbl-types',
      type: 'comparisonTable',
      data: {
        caption: 'Classification of Number Types',
        headers: ['Type', 'Definition', 'Examples', 'Non-examples'],
        rows: [
          ['Natural', 'Positive whole numbers', '1, 2, 100', '0, −3, ½'],
          ['Integer', 'All whole numbers', '−5, 0, 3', '0.5, ¾'],
          ['Rational', 'Can be written as p/q', '½, 0.75, −3', 'π, √2'],
          ['Irrational', 'Cannot be written as p/q', 'π, √2, √5', '4, ½, 0.6']
        ]
      }
    },
    {
      id: 'callout-worked-classify',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Classify Each Number',
        text: 'Classify −7, 0.6, √9, √5, and 0.333... as integer, rational, or irrational:<br><br><strong>−7:</strong> Integer ✓ &nbsp;(also rational, since −7 = −7/1)<br><strong>0.6:</strong> Rational ✓ &nbsp;(= 3/5)<br><strong>√9:</strong> Integer ✓ &nbsp;(√9 = 3, also rational)<br><strong>√5:</strong> Irrational ✓ &nbsp;(cannot simplify to fraction)<br><strong>0.333...:</strong> Rational ✓ &nbsp;(= 1/3)'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Natural numbers (1, 2, 3, ...) are a subset of integers. All integers are rational. Numbers like π and √2 are irrational. Real numbers include <em>all</em> rational and irrational numbers.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-integers', prompt: 'What is an integer? Is −4 an integer? Is 0.5 an integer?' },
      { id: 'cue-2', blockId: 'h-rational', prompt: 'Define a rational number. Give three examples.' },
      { id: 'cue-3', blockId: 'h-irrational', prompt: 'Why is √2 irrational but √4 rational?' },
      { id: 'cue-4', blockId: 'h-real', prompt: 'What does the set of real numbers include?' },
      { id: 'cue-5', blockId: 'tbl-types', prompt: 'Classify: (a) −3, (b) 0.75, (c) √7, (d) π. State the type of each.' }
    ],
    summaryText: 'Numbers classify as natural, integer, rational, or irrational; all together form the real numbers.',
    ready: true
  },
  evidence: []
};
