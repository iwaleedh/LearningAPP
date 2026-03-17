export const note_olevel_maths_extended_2_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/expanding-double-brackets.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Expand the product of two linear expressions using the FOIL method or grid method; simplify the result by collecting like terms.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Expanding Double Brackets', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'To expand two brackets multiplied together, every term in the first bracket must be multiplied by every term in the second bracket. This produces four terms (from two binomials), which are then simplified.' }
    },
    {
      id: 'callout-key-foil',
      type: 'callout',
      data: {
        style: 'key',
        title: 'FOIL Method',
        text: 'For (<em>a</em> + <em>b</em>)(<em>c</em> + <em>d</em>):<br><br><strong>F</strong>irst: <em>a</em> × <em>c</em><br><strong>O</strong>uter: <em>a</em> × <em>d</em><br><strong>I</strong>nner: <em>b</em> × <em>c</em><br><strong>L</strong>ast: <em>b</em> × <em>d</em><br><br>Result: <em>ac</em> + <em>ad</em> + <em>bc</em> + <em>bd</em>'
      }
    },
    {
      id: 'callout-worked-basic',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Expand and simplify (<em>x</em> + 3)(<em>x</em> + 5)<br><br>F: <em>x</em> × <em>x</em> = <em>x</em>²<br>O: <em>x</em> × 5 = 5<em>x</em><br>I: 3 × <em>x</em> = 3<em>x</em><br>L: 3 × 5 = 15<br><br>= <em>x</em>² + 5<em>x</em> + 3<em>x</em> + 15<br>= <strong><em>x</em>² + 8<em>x</em> + 15</strong>'
      }
    },
    {
      id: 'h-negative',
      type: 'heading',
      data: { text: 'Double Brackets with Negative Terms', level: 2 }
    },
    {
      id: 'callout-worked-neg',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Expand and simplify (<em>x</em> − 4)(<em>x</em> + 7)<br><br>F: <em>x</em> × <em>x</em> = <em>x</em>²<br>O: <em>x</em> × 7 = 7<em>x</em><br>I: (−4) × <em>x</em> = −4<em>x</em><br>L: (−4) × 7 = −28<br><br>= <em>x</em>² + 7<em>x</em> − 4<em>x</em> − 28<br>= <strong><em>x</em>² + 3<em>x</em> − 28</strong>'
      }
    },
    {
      id: 'callout-worked-both-neg',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Expand and simplify (<em>x</em> − 3)(<em>x</em> − 5)<br><br>F: <em>x</em>²<br>O: −5<em>x</em><br>I: −3<em>x</em><br>L: (−3)(−5) = +15<br><br>= <em>x</em>² − 5<em>x</em> − 3<em>x</em> + 15<br>= <strong><em>x</em>² − 8<em>x</em> + 15</strong>'
      }
    },
    {
      id: 'h-grid',
      type: 'heading',
      data: { text: 'The Grid Method', level: 2 }
    },
    {
      id: 'p-grid',
      type: 'paragraph',
      data: { text: 'An alternative to FOIL is the <strong>grid method</strong>. Set up a 2×2 grid with one bracket along the top and one down the side, then multiply each pair.' }
    },
    {
      id: 'table-grid',
      type: 'comparisonTable',
      data: {
        caption: 'Grid method for (x + 3)(x + 5)',
        headers: ['×', 'x', '+5'],
        rows: [
          ['x', 'x²', '5x'],
          ['+3', '3x', '15']
        ]
      }
    },
    {
      id: 'p-grid-result',
      type: 'paragraph',
      data: { text: 'Add all four cells: <em>x</em>² + 5<em>x</em> + 3<em>x</em> + 15 = <em>x</em>² + 8<em>x</em> + 15 ✓' }
    },
    {
      id: 'h-special',
      type: 'heading',
      data: { text: 'Squaring a Bracket', level: 2 }
    },
    {
      id: 'callout-warning-square',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Squaring',
        text: '(<em>x</em> + 3)² does NOT equal <em>x</em>² + 9!<br><br>(<em>x</em> + 3)² = (<em>x</em> + 3)(<em>x</em> + 3) = <em>x</em>² + 3<em>x</em> + 3<em>x</em> + 9 = <strong><em>x</em>² + 6<em>x</em> + 9</strong><br><br>Don\'t forget the middle term!'
      }
    },
    {
      id: 'callout-tip-pattern',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Perfect Square Pattern',
        text: '(<em>x</em> + <em>a</em>)² = <em>x</em>² + 2<em>ax</em> + <em>a</em>²<br>(<em>x</em> − <em>a</em>)² = <em>x</em>² − 2<em>ax</em> + <em>a</em>²<br><br>The middle term is always <strong>twice</strong> the product of the two terms in the bracket.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Expand double brackets using FOIL (First, Outer, Inner, Last) or the grid method. Multiply every term in the first bracket by every term in the second. Collect like terms to simplify. Remember: (x + a)² = x² + 2ax + a², not x² + a².' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Use FOIL or grid method to expand double brackets. Always collect like terms afterwards.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-foil', prompt: 'What does FOIL stand for?', answer: 'First, Outer, Inner, Last — the four products when multiplying two brackets.' },
      { id: 'cue-2', blockId: 'callout-worked-basic', prompt: 'Expand (x + 3)(x + 5).', answer: 'x² + 5x + 3x + 15 = x² + 8x + 15' },
      { id: 'cue-3', blockId: 'callout-warning-square', prompt: 'Why is (x + 3)² ≠ x² + 9?', answer: 'Because (x + 3)² = (x + 3)(x + 3) = x² + 6x + 9. The middle term (6x) is missing if you just square each part.' },
      { id: 'cue-4', blockId: 'callout-tip-pattern', prompt: 'State the perfect square expansion (x + a)².', answer: '(x + a)² = x² + 2ax + a²' }
    ]
  },
  evidence: []
};
