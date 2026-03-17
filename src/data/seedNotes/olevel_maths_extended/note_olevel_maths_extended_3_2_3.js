export const note_olevel_maths_extended_3_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/parallel-lines.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand that parallel lines have equal gradients and use this to find equations of parallel lines.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Parallel Lines', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Parallel lines</strong> never meet — they are always the same distance apart. On a coordinate grid, parallel lines travel in the same direction, which means they have the <strong>same gradient</strong>.' }
    },
    {
      id: 'callout-key-rule',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Parallel Lines Rule',
        text: 'Two lines are <strong>parallel</strong> if and only if they have the <strong>same gradient</strong>.<br><br>If line 1 has gradient <em>m</em>₁ and line 2 has gradient <em>m</em>₂, then:<br><strong><em>m</em>₁ = <em>m</em>₂ ⇔ lines are parallel</strong><br><br>They will have <strong>different</strong> y-intercepts (otherwise they would be the same line).'
      }
    },
    {
      id: 'h-identifying',
      type: 'heading',
      data: { text: 'Identifying Parallel Lines', level: 2 }
    },
    {
      id: 'table-parallel',
      type: 'comparisonTable',
      data: {
        caption: 'Which lines are parallel?',
        headers: ['Line A', 'Line B', 'Parallel?'],
        rows: [
          ['y = 3x + 1', 'y = 3x − 5', '✓ Same gradient (3)'],
          ['y = 2x + 4', 'y = −2x + 4', '✗ Different gradients (2 ≠ −2)'],
          ['y = ½x + 3', '2y = x − 1 &rarr; y = ½x − ½', '✓ Same gradient (½)'],
          ['y = 5', 'y = −2', '✓ Both horizontal (m = 0)']
        ]
      }
    },
    {
      id: 'h-finding',
      type: 'heading',
      data: { text: 'Finding the Equation of a Parallel Line', level: 2 }
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Identify the gradient of the original line (<em>m</em>)' },
          { text: 'The parallel line has the <strong>same gradient</strong> <em>m</em>' },
          { text: 'Use <em>y</em> = <em>mx</em> + <em>c</em> and substitute the given point to find <em>c</em>' }
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Find the equation of the line parallel to <em>y</em> = 4<em>x</em> + 3 that passes through (2, 5).<br><br>Gradient of original line: <em>m</em> = 4<br>Parallel line also has <em>m</em> = 4<br><br><em>y</em> = 4<em>x</em> + <em>c</em><br>5 = 4(2) + <em>c</em><br>5 = 8 + <em>c</em><br><em>c</em> = −3<br><br><strong><em>y</em> = 4<em>x</em> − 3</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Rearranging First',
        text: 'Find the equation of the line parallel to 2<em>x</em> + 3<em>y</em> = 9 passing through (6, 1).<br><br>Rearrange: 3<em>y</em> = −2<em>x</em> + 9 &rarr; <em>y</em> = −<span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span><em>x</em> + 3<br><br>Gradient <em>m</em> = −<span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span><br><br><em>y</em> = −<span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span><em>x</em> + <em>c</em><br>1 = −<span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span>(6) + <em>c</em><br>1 = −4 + <em>c</em><br><em>c</em> = 5<br><br><strong><em>y</em> = −<span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span><em>x</em> + 5</strong>'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If the question says "parallel to <em>y</em> = 3<em>x</em> + 7", you only need the gradient (3). The "+7" doesn\'t matter for the new line — you\'ll find your own y-intercept.'
      }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Don\'t forget to <strong>rearrange</strong> to <em>y</em> = <em>mx</em> + <em>c</em> first if the equation is given in a different form (e.g. <em>ax</em> + <em>by</em> = <em>c</em>).'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Parallel lines have the same gradient but different y-intercepts. To find the equation of a parallel line: use the same m, then substitute the given point into y = mx + c to find c. Always rearrange to y = mx + c first if needed.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Parallel lines share the same gradient.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-rule', prompt: 'What condition makes two lines parallel?', answer: 'They have the same gradient (m₁ = m₂).' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'Find the equation of the line parallel to y = 4x + 3 through (2, 5).', answer: 'y = 4x − 3' },
      { id: 'cue-3', blockId: 'table-parallel', prompt: 'Are y = 2x + 4 and y = −2x + 4 parallel?', answer: 'No — their gradients are different (2 and −2).' },
      { id: 'cue-4', blockId: 'callout-key-rule', prompt: 'Can parallel lines have the same y-intercept?', answer: 'No — if they had the same gradient AND the same y-intercept, they would be the same line.' }
    ]
  },
  evidence: []
};
