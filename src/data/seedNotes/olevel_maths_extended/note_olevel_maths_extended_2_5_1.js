export const note_olevel_maths_extended_2_5_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/the-quadratic-formula.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use the quadratic formula to solve equations that cannot be easily factorised; interpret the discriminant.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'The Quadratic Formula', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Not every quadratic factorises neatly. The <strong>quadratic formula</strong> gives exact solutions to any quadratic equation <em>ax</em>² + <em>bx</em> + <em>c</em> = 0, provided <em>a</em> ≠ 0.' }
    },
    {
      id: 'eq-formula',
      type: 'equation',
      data: {
        html: '<em>x</em> = <span class="nb-frac"><span class="nb-num">−<em>b</em> ± √(<em>b</em>² − 4<em>a</em><em>c</em>)</span><span class="nb-den">2<em>a</em></span></span>',
        caption: 'The quadratic formula — given in the exam formula sheet'
      }
    },
    {
      id: 'callout-key-identify',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Identifying a, b, and c',
        text: 'For <em>ax</em>² + <em>bx</em> + <em>c</em> = 0:<br>• <em>a</em> is the coefficient of <em>x</em>²<br>• <em>b</em> is the coefficient of <em>x</em><br>• <em>c</em> is the constant term<br><br>The equation MUST be in the form "= 0" first. Don\'t forget negative signs belong to the coefficients.'
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Using the Formula', level: 2 }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Write the equation in the form <em>ax</em>² + <em>bx</em> + <em>c</em> = 0' },
          { text: 'Identify the values of <em>a</em>, <em>b</em>, and <em>c</em>' },
          { text: 'Substitute into the formula' },
          { text: 'Evaluate the discriminant <em>b</em>² − 4<em>ac</em>' },
          { text: 'Calculate both solutions using + and − in the ±' }
        ]
      }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Solve 2<em>x</em>² − 7<em>x</em> + 3 = 0, giving answers to 2 d.p.<br><br><em>a</em> = 2, <em>b</em> = −7, <em>c</em> = 3<br><br><em>x</em> = <span class="nb-frac"><span class="nb-num">−(−7) ± √((−7)² − 4(2)(3))</span><span class="nb-den">2(2)</span></span><br><br><em>x</em> = <span class="nb-frac"><span class="nb-num">7 ± √(49 − 24)</span><span class="nb-den">4</span></span> = <span class="nb-frac"><span class="nb-num">7 ± √25</span><span class="nb-den">4</span></span> = <span class="nb-frac"><span class="nb-num">7 ± 5</span><span class="nb-den">4</span></span><br><br><em>x</em> = <span class="nb-frac"><span class="nb-num">12</span><span class="nb-den">4</span></span> = 3 &nbsp;or&nbsp; <em>x</em> = <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">4</span></span> = 0.5'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Irrational Solutions',
        text: 'Solve <em>x</em>² + 3<em>x</em> − 1 = 0, giving answers to 3 s.f.<br><br><em>a</em> = 1, <em>b</em> = 3, <em>c</em> = −1<br><br><em>x</em> = <span class="nb-frac"><span class="nb-num">−3 ± √(9 − 4(1)(−1))</span><span class="nb-den">2</span></span> = <span class="nb-frac"><span class="nb-num">−3 ± √13</span><span class="nb-den">2</span></span><br><br><em>x</em> = <span class="nb-frac"><span class="nb-num">−3 + 3.606…</span><span class="nb-den">2</span></span> = 0.303 &nbsp;or&nbsp; <em>x</em> = <span class="nb-frac"><span class="nb-num">−3 − 3.606…</span><span class="nb-den">2</span></span> = −3.30'
      }
    },
    {
      id: 'h-discriminant',
      type: 'heading',
      data: { text: 'The Discriminant', level: 2 }
    },
    {
      id: 'p-discriminant',
      type: 'paragraph',
      data: { text: 'The expression under the square root, <em>b</em>² − 4<em>ac</em>, is called the <strong>discriminant</strong>. It tells you how many solutions the equation has.' }
    },
    {
      id: 'table-disc',
      type: 'comparisonTable',
      data: {
        caption: 'What the discriminant tells us',
        headers: ['Discriminant', 'Number of Solutions', 'Type'],
        rows: [
          ['b² − 4ac > 0', 'Two distinct solutions', 'Two real roots'],
          ['b² − 4ac = 0', 'One repeated solution', 'Equal roots'],
          ['b² − 4ac < 0', 'No real solutions', 'No real roots (the curve doesn\'t cross the x-axis)']
        ]
      }
    },
    {
      id: 'callout-warning-neg',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Watch for Negative b',
        text: 'If <em>b</em> is negative, be careful: −(−<em>b</em>) = +<em>b</em> and (−<em>b</em>)² = <em>b</em>² (positive). Always use brackets when substituting negative values.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The formula is given on the exam – but practise using it until substitution is automatic. Show your substitution clearly for method marks.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'The quadratic formula x = (−b ± √(b² − 4ac)) / 2a solves any quadratic ax² + bx + c = 0. The discriminant b² − 4ac determines the number of solutions: positive &rarr; two, zero &rarr; one repeated, negative &rarr; none.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'The quadratic formula is x = (−b ± √(b² − 4ac)) / 2a. The discriminant determines the number of real solutions.',
    cues: [
      { id: 'cue-1', blockId: 'eq-formula', prompt: 'State the quadratic formula.', answer: 'x = (−b ± √(b² − 4ac)) / 2a, for ax² + bx + c = 0.' },
      { id: 'cue-2', blockId: 'table-disc', prompt: 'How many solutions does a quadratic have if b² − 4ac < 0?', answer: 'No real solutions — the parabola doesn\'t cross the x-axis.' },
      { id: 'cue-3', blockId: 'callout-key-identify', prompt: 'For 3x² − 2x + 5 = 0, what are a, b, and c?', answer: 'a = 3, b = −2, c = 5.' },
      { id: 'cue-4', blockId: 'callout-worked2', prompt: 'Solve x² + 3x − 1 = 0 to 3 s.f.', answer: 'x = 0.303 or x = −3.30.' },
      { id: 'cue-5', blockId: 'table-disc', prompt: 'What does "discriminant equal to zero" mean?', answer: 'One repeated (equal) root — the parabola touches the x-axis at exactly one point.' }
    ]
  },
  evidence: []
};
