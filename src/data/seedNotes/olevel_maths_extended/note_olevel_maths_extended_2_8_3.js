export const note_olevel_maths_extended_2_8_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/solving-equations-with-algebraic-fractions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve equations containing algebraic fractions by clearing denominators.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Solving Equations with Algebraic Fractions', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When an equation contains algebraic fractions, the strategy is to <strong>eliminate the fractions</strong> by multiplying every term by the lowest common denominator (LCD), then solve the resulting equation.' }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Identify all denominators' },
          { text: 'Find the LCD of all denominators' },
          { text: 'Multiply <strong>every term</strong> on both sides by the LCD' },
          { text: 'Expand and simplify' },
          { text: 'Solve the resulting equation (linear or quadratic)' },
          { text: 'Check your answer — reject any value that makes a denominator zero' }
        ]
      }
    },
    {
      id: 'h-linear',
      type: 'heading',
      data: { text: 'Equations Leading to Linear', level: 2 }
    },
    {
      id: 'callout-worked-lin',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Linear Result',
        text: 'Solve <span class="nb-frac"><span class="nb-num">2<em>x</em> + 1</span><span class="nb-den">3</span></span> − <span class="nb-frac"><span class="nb-num"><em>x</em> − 4</span><span class="nb-den">5</span></span> = 1<br><br>LCD = 15. Multiply every term by 15:<br>5(2<em>x</em> + 1) − 3(<em>x</em> − 4) = 15<br><br>10<em>x</em> + 5 − 3<em>x</em> + 12 = 15<br>7<em>x</em> + 17 = 15<br>7<em>x</em> = −2<br><br><em>x</em> = <span class="nb-frac"><span class="nb-num">−2</span><span class="nb-den">7</span></span>'
      }
    },
    {
      id: 'h-quadratic',
      type: 'heading',
      data: { text: 'Equations Leading to Quadratics', level: 2 }
    },
    {
      id: 'p-quad',
      type: 'paragraph',
      data: { text: 'When the variable appears in the <strong>denominator</strong>, multiplying through by the LCD often produces a quadratic equation.' }
    },
    {
      id: 'callout-worked-quad',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Quadratic Result',
        text: 'Solve <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den"><em>x</em></span></span> + <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den"><em>x</em> − 1</span></span> = 1<br><br>LCD = <em>x</em>(<em>x</em> − 1). Multiply every term:<br>3(<em>x</em> − 1) + 2<em>x</em> = <em>x</em>(<em>x</em> − 1)<br><br>3<em>x</em> − 3 + 2<em>x</em> = <em>x</em>² − <em>x</em><br>5<em>x</em> − 3 = <em>x</em>² − <em>x</em><br>0 = <em>x</em>² − 6<em>x</em> + 3<br><br>Using the quadratic formula: <em>x</em> = <span class="nb-frac"><span class="nb-num">6 ± √24</span><span class="nb-den">2</span></span> = 3 ± √6<br><br><em>x</em> ≈ 5.45 or <em>x</em> ≈ 0.551'
      }
    },
    {
      id: 'callout-key-reject',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rejecting Invalid Solutions',
        text: 'Any solution that makes a <strong>denominator equal to zero</strong> must be rejected. Always check by substituting back into the original denominators.'
      }
    },
    {
      id: 'callout-worked-reject',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Rejecting a Solution',
        text: 'Solve <span class="nb-frac"><span class="nb-num">4</span><span class="nb-den"><em>x</em> + 2</span></span> = <span class="nb-frac"><span class="nb-num"><em>x</em></span><span class="nb-den"><em>x</em> + 2</span></span> + 1<br><br>LCD = (<em>x</em> + 2). Multiply through:<br>4 = <em>x</em> + (<em>x</em> + 2)<br>4 = 2<em>x</em> + 2<br><em>x</em> = 1<br><br>Check: <em>x</em> + 2 = 3 ≠ 0 ✓ &nbsp; So <em>x</em> = 1 is valid.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Not multiplying <strong>every</strong> term by the LCD (especially the right-hand side!)<br>• Sign errors when expanding brackets after multiplying<br>• Forgetting to check the solution doesn\'t make a denominator zero'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If the equation leads to a quadratic, rearrange to standard form (<em>ax</em>² + <em>bx</em> + <em>c</em> = 0) before applying the formula or factorising. Show your LCD step clearly for method marks.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To solve equations with algebraic fractions: find the LCD, multiply every term by it to clear fractions, solve the resulting linear or quadratic equation, and reject any solution that makes a denominator zero.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Clear fractions by multiplying through by the LCD. Solve the resulting equation. Reject solutions that make any denominator zero.',
    cues: [
      { id: 'cue-1', blockId: 'list-steps', prompt: 'What is the first step when solving an equation with algebraic fractions?', answer: 'Identify all denominators and find the LCD.' },
      { id: 'cue-2', blockId: 'callout-key-reject', prompt: 'When must you reject a solution to a fractional equation?', answer: 'When the solution makes any denominator equal to zero.' },
      { id: 'cue-3', blockId: 'callout-worked-quad', prompt: 'What type of equation often results when x appears in the denominator?', answer: 'A quadratic equation, because multiplying by x(x−1) etc. introduces x² terms.' },
      { id: 'cue-4', blockId: 'callout-worked-lin', prompt: 'Solve (2x+1)/3 − (x−4)/5 = 1.', answer: 'LCD=15: 5(2x+1) − 3(x−4) = 15 &rarr; 7x = −2 &rarr; x = −2/7.' }
    ]
  },
  evidence: []
};
