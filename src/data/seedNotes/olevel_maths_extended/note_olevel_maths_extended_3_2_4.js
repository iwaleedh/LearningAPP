export const note_olevel_maths_extended_3_2_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/perpendicular-lines.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the relationship between gradients of perpendicular lines and find equations of perpendicular lines.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Perpendicular Lines', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Perpendicular lines</strong> meet at right angles (90°). Their gradients have a special relationship — they are <strong>negative reciprocals</strong> of each other.' }
    },
    {
      id: 'callout-key-rule',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Perpendicular Lines Rule',
        text: 'If two lines are perpendicular with gradients <em>m</em>₁ and <em>m</em>₂, then:<br><br><strong><em>m</em>₁ × <em>m</em>₂ = −1</strong><br><br>Equivalently: <em>m</em>₂ = −<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den"><em>m</em>₁</span></span><br><br>To find the perpendicular gradient: <strong>flip the fraction and change the sign</strong>.'
      }
    },
    {
      id: 'eq-perp',
      type: 'equation',
      data: {
        html: '<em>m</em>₁ × <em>m</em>₂ = −1 &nbsp;&nbsp;⟹&nbsp;&nbsp; <em>m</em>₂ = −<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den"><em>m</em>₁</span></span>',
        caption: 'Perpendicular gradient relationship'
      }
    },
    {
      id: 'h-examples',
      type: 'heading',
      data: { text: 'Finding Perpendicular Gradients', level: 2 }
    },
    {
      id: 'table-perp',
      type: 'comparisonTable',
      data: {
        caption: 'Gradient and its perpendicular',
        headers: ['Original gradient', 'Perpendicular gradient', 'Check: m₁ × m₂'],
        rows: [
          ['2', '−½', '2 × (−½) = −1 ✓'],
          ['−3', '⅓', '−3 × ⅓ = −1 ✓'],
          ['¾', '−⁴⁄₃', '¾ × (−⁴⁄₃) = −1 ✓'],
          ['1', '−1', '1 × (−1) = −1 ✓'],
          ['−⅖', '⁵⁄₂', '−⅖ × ⁵⁄₂ = −1 ✓']
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Find the equation of the line perpendicular to <em>y</em> = 3<em>x</em> + 1 that passes through (6, 2).<br><br>Original gradient: <em>m</em> = 3<br>Perpendicular gradient: <em>m</em>⊥ = −<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span><br><br><em>y</em> = −<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span><em>x</em> + <em>c</em><br>2 = −<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span>(6) + <em>c</em><br>2 = −2 + <em>c</em><br><em>c</em> = 4<br><br><strong><em>y</em> = −<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span><em>x</em> + 4</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — From Two Points',
        text: 'Line L passes through A(1, 2) and B(3, 8). Find the equation of the line perpendicular to L passing through the midpoint of AB.<br><br>Gradient of L: <em>m</em> = <span class="nb-frac"><span class="nb-num">8 − 2</span><span class="nb-den">3 − 1</span></span> = <span class="nb-frac"><span class="nb-num">6</span><span class="nb-den">2</span></span> = 3<br><br>Perpendicular gradient: <em>m</em>⊥ = −<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span><br><br>Midpoint of AB: (<span class="nb-frac"><span class="nb-num">1+3</span><span class="nb-den">2</span></span>, <span class="nb-frac"><span class="nb-num">2+8</span><span class="nb-den">2</span></span>) = (2, 5)<br><br><em>y</em> = −<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span><em>x</em> + <em>c</em><br>5 = −<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span>(2) + <em>c</em><br>5 = −<span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span> + <em>c</em><br><em>c</em> = 5<span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span> = <span class="nb-frac"><span class="nb-num">17</span><span class="nb-den">3</span></span><br><br><strong><em>y</em> = −<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span><em>x</em> + <span class="nb-frac"><span class="nb-num">17</span><span class="nb-den">3</span></span></strong>'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — "Perpendicular Bisector"',
        text: 'A <strong>perpendicular bisector</strong> of a line segment passes through the <strong>midpoint</strong> at right angles. You need two things: the perpendicular gradient and the midpoint. This is a very common exam question!'
      }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Students often just change the sign without flipping: the perpendicular gradient of 3 is NOT −3, it\'s −⅓. Remember: <strong>flip AND change sign</strong>.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Perpendicular lines have gradients that multiply to −1: m₁ × m₂ = −1. To find the perpendicular gradient, flip the fraction and change the sign (negative reciprocal). A perpendicular bisector passes through the midpoint at 90°.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Perpendicular gradients multiply to −1 (negative reciprocals).',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-rule', prompt: 'What is the relationship between perpendicular gradients?', answer: 'm₁ × m₂ = −1 (negative reciprocals).' },
      { id: 'cue-2', blockId: 'table-perp', prompt: 'What is the perpendicular gradient to m = 2?', answer: '−½' },
      { id: 'cue-3', blockId: 'table-perp', prompt: 'What is the perpendicular gradient to m = −¾?', answer: '⁴⁄₃' },
      { id: 'cue-4', blockId: 'callout-tip-1', prompt: 'What is a perpendicular bisector?', answer: 'A line that passes through the midpoint of a segment and is perpendicular to it.' },
      { id: 'cue-5', blockId: 'callout-warning-1', prompt: 'What common mistake is made when finding perpendicular gradients?', answer: 'Only changing the sign without flipping the fraction (e.g. writing −3 instead of −⅓).' }
    ]
  },
  evidence: []
};
