export const note_olevel_maths_extended_3_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/equations-of-straight-lines-y-equals-mx-and-c.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and use the equation of a straight line in the form y = mx + c, identifying gradient and y-intercept.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Equation of a Straight Line: y = mx + c', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Every straight line can be written in the form <strong><em>y</em> = <em>mx</em> + <em>c</em></strong>, where <em>m</em> is the <strong>gradient</strong> and <em>c</em> is the <strong>y-intercept</strong> (the value of <em>y</em> where the line crosses the y-axis).' }
    },
    {
      id: 'callout-key-parts',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Components',
        text: '<strong><em>y</em> = <em>mx</em> + <em>c</em></strong><br><br>• <strong><em>m</em></strong> = gradient (slope) — how steep the line is<br>• <strong><em>c</em></strong> = y-intercept — where the line crosses the y-axis (the point (0, <em>c</em>))<br><br>Example: <em>y</em> = 3<em>x</em> − 2 has gradient 3 and y-intercept −2.'
      }
    },
    {
      id: 'h-reading',
      type: 'heading',
      data: { text: 'Reading m and c from an Equation', level: 2 }
    },
    {
      id: 'table-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Identifying m and c',
        headers: ['Equation', 'Gradient (m)', 'y-intercept (c)'],
        rows: [
          ['y = 4x + 7', '4', '7'],
          ['y = −2x + 5', '−2', '5'],
          ['y = ½x − 3', '½', '−3'],
          ['y = x', '1', '0'],
          ['y = −x + 1', '−1', '1'],
          ['y = 6', '0', '6']
        ]
      }
    },
    {
      id: 'h-rearrange',
      type: 'heading',
      data: { text: 'Rearranging to y = mx + c', level: 2 }
    },
    {
      id: 'p-rearrange',
      type: 'paragraph',
      data: { text: 'If an equation is not in the form <em>y</em> = <em>mx</em> + <em>c</em>, rearrange it by making <em>y</em> the subject.' }
    },
    {
      id: 'callout-worked-rearrange',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Rearranging',
        text: 'Find the gradient and y-intercept of 3<em>x</em> + 2<em>y</em> = 10.<br><br>2<em>y</em> = −3<em>x</em> + 10<br><em>y</em> = −<span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">2</span></span><em>x</em> + 5<br><br>Gradient <em>m</em> = −<span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">2</span></span> = −1.5<br>y-intercept <em>c</em> = 5'
      }
    },
    {
      id: 'h-finding',
      type: 'heading',
      data: { text: 'Finding the Equation of a Line', level: 2 }
    },
    {
      id: 'p-finding',
      type: 'paragraph',
      data: { text: 'Given the gradient <em>m</em> and a point (<em>x</em>₁, <em>y</em>₁), substitute into <em>y</em> = <em>mx</em> + <em>c</em> to find <em>c</em>.' }
    },
    {
      id: 'callout-worked-find',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding the Equation',
        text: 'A line has gradient 2 and passes through the point (3, 7). Find its equation.<br><br><em>y</em> = <em>mx</em> + <em>c</em><br>7 = 2(3) + <em>c</em><br>7 = 6 + <em>c</em><br><em>c</em> = 1<br><br><strong><em>y</em> = 2<em>x</em> + 1</strong>'
      }
    },
    {
      id: 'callout-worked-two-points',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — From Two Points',
        text: 'Find the equation of the line through A(1, 4) and B(5, 12).<br><br>Step 1 — Find <em>m</em>:<br><em>m</em> = <span class="nb-frac"><span class="nb-num">12 − 4</span><span class="nb-den">5 − 1</span></span> = <span class="nb-frac"><span class="nb-num">8</span><span class="nb-den">4</span></span> = 2<br><br>Step 2 — Find <em>c</em> using point (1, 4):<br>4 = 2(1) + <em>c</em> &rarr; <em>c</em> = 2<br><br><strong><em>y</em> = 2<em>x</em> + 2</strong>'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If <em>y</em> = <em>x</em>, the gradient is 1 (not 0). If <em>y</em> = −<em>x</em>, gradient is −1. A "missing" coefficient in front of <em>x</em> means 1.'
      }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Students sometimes read the coefficient of <em>x</em> as the y-intercept. In <em>y</em> = 3<em>x</em> + 5, the gradient is 3 and the y-intercept is 5 — don\'t swap them!'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'In y = mx + c, m is the gradient and c is the y-intercept. If the equation isn\'t in this form, rearrange to make y the subject. To find the equation: calculate m first (from two points or given), then substitute a known point to find c.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'y = mx + c gives the gradient m and y-intercept c directly.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-parts', prompt: 'In y = mx + c, what do m and c represent?', answer: 'm is the gradient (slope), c is the y-intercept (where the line crosses the y-axis).' },
      { id: 'cue-2', blockId: 'table-examples', prompt: 'What is the gradient and y-intercept of y = −2x + 5?', answer: 'Gradient = −2, y-intercept = 5.' },
      { id: 'cue-3', blockId: 'callout-worked-rearrange', prompt: 'How do you find m and c from the equation 3x + 2y = 10?', answer: 'Rearrange to y = −(3/2)x + 5. So m = −3/2 and c = 5.' },
      { id: 'cue-4', blockId: 'callout-worked-find', prompt: 'How do you find the equation of a line given its gradient and a point?', answer: 'Substitute the gradient and the point into y = mx + c to find c.' },
      { id: 'cue-5', blockId: 'table-examples', prompt: 'What is the gradient of y = x?', answer: '1 (the coefficient of x is 1).' }
    ]
  },
  evidence: []
};
