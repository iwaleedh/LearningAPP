export const note_olevel_maths_core_1_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/mathematical-symbols.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Recognise and correctly use mathematical symbols including equality, inequality, and approximation signs.' }
    },
    {
      id: 'h-core',
      type: 'heading',
      data: { text: 'Core Mathematical Symbols', level: 2 }
    },
    {
      id: 'tbl-symbols',
      type: 'comparisonTable',
      data: {
        caption: 'Common Mathematical Symbols',
        headers: ['Symbol', 'Meaning', 'Example'],
        rows: [
          ['=', 'Is equal to', '3 + 4 = 7'],
          ['≠', 'Is not equal to', '5 ≠ 8'],
          ['<', 'Is less than', '2 < 9'],
          ['>', 'Is greater than', '10 > 6'],
          ['≤', 'Is less than or equal to', 'x ≤ 5'],
          ['≥', 'Is greater than or equal to', 'y ≥ −2'],
          ['≈', 'Is approximately equal to', 'π ≈ 3.14'],
          ['∞', 'Infinity', 'There are ∞ primes']
        ]
      }
    },
    {
      id: 'h-equality',
      type: 'heading',
      data: { text: 'Equality and Inequality', level: 2 }
    },
    {
      id: 'p-equality',
      type: 'paragraph',
      data: { text: 'The <strong>equals sign (=)</strong> means both sides have exactly the same value. The <strong>not equals sign (≠)</strong> means the two values are different. Both sides of an equation must be balanced.' }
    },
    {
      id: 'h-inequalities',
      type: 'heading',
      data: { text: 'Strict and Non-strict Inequalities', level: 2 }
    },
    {
      id: 'p-inequalities',
      type: 'paragraph',
      data: { text: '<strong>Strict inequalities</strong> use < or > (the boundary value is NOT included). <strong>Non-strict inequalities</strong> use ≤ or ≥ (the boundary value IS included). This matters when writing solution sets.' }
    },
    {
      id: 'callout-key-ineq',
      type: 'callout',
      data: { style: 'key', title: 'Inequality Examples', text: 'x < 3: x can be 2.9, 0, −5, but NOT 3<br>x ≤ 3: x can be 2.9, 0, −5, or exactly 3<br>x > −1: x can be 0, 1.5, 100, but NOT −1<br>x ≥ −1: x can be 0, 1.5, 100, or exactly −1' }
    },
    {
      id: 'h-approx',
      type: 'heading',
      data: { text: 'Approximation Sign (≈)', level: 2 }
    },
    {
      id: 'p-approx',
      type: 'paragraph',
      data: { text: 'The <strong>approximately equal to sign (≈)</strong> is used when a value is rounded or estimated. It means the value is close to, but not exactly equal to, the given value.' }
    },
    {
      id: 'callout-worked-sym',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Using Symbols',
        text: 'Insert the correct symbol (=, ≠, <, >, ≤, ≥, ≈) between each pair:<br><br><strong>a)</strong> 3 + 4 __ 8 − 1 → 7 = 7 → symbol: <strong>=</strong><br><strong>b)</strong> 5 __ 8 → 5 < 8 → symbol: <strong><</strong><br><strong>c)</strong> √2 __ 1.41 → symbol: <strong>≈</strong> (√2 ≈ 1.41421...)<br><strong>d)</strong> −3 __ 0 → −3 < 0 → symbol: <strong><</strong><br><strong>e)</strong> 4<sup>2</sup> __ 15 → 16 ≠ 15 → symbol: <strong>≠</strong>'
      }
    },
    {
      id: 'callout-tip-sym',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'When a question says "write using inequality notation", check whether the boundary is included (≤/≥) or excluded (</>). Read the question carefully for words like "at least", "no more than", "fewer than".<br><br>"At least 5" → x ≥ 5<br>"More than 5" → x > 5<br>"No more than 5" → x ≤ 5' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '= (equal), ≠ (not equal), < (less than), > (greater than), ≤ (less than or equal), ≥ (greater than or equal), ≈ (approximately equal), ∞ (infinity). ≤ and ≥ include the boundary; < and > do not.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'tbl-symbols', prompt: 'What do these symbols mean: ≠, ≤, ≈?' },
      { id: 'cue-2', blockId: 'h-inequalities', prompt: 'What is the difference between x < 5 and x ≤ 5? Give an example.' },
      { id: 'cue-3', blockId: 'h-approx', prompt: 'When do you use ≈ instead of =? Give an example.' },
      { id: 'cue-4', blockId: 'callout-worked-sym', prompt: 'What symbol goes between 4² and 16? Between 4² and 15?' },
      { id: 'cue-5', blockId: 'callout-tip-sym', prompt: 'How do you write "at least 10" and "fewer than 10" using symbols?' }
    ],
    summaryText: 'Mathematical symbols express exact equality (=, ≠) or relative size (<, >, ≤, ≥) or approximation (≈).',
    ready: true
  },
  evidence: []
};
