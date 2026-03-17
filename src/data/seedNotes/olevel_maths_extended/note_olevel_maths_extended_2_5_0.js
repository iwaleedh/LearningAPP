export const note_olevel_maths_extended_2_5_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/solving-quadratics-by-factorising.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve quadratic equations by factorising; apply the zero-product property to find solutions.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Solving Quadratics by Factorising', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>quadratic equation</strong> has the form <em>ax</em>² + <em>bx</em> + <em>c</em> = 0. When a quadratic can be factorised, we can solve it using the <strong>zero-product property</strong>.' }
    },
    {
      id: 'callout-key-zero',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Zero-Product Property',
        text: 'If <em>A</em> × <em>B</em> = 0, then <em>A</em> = 0 or <em>B</em> = 0 (or both).<br><br>So if (<em>x</em> + <em>p</em>)(<em>x</em> + <em>q</em>) = 0, then:<br>• <em>x</em> + <em>p</em> = 0 &rarr; <em>x</em> = −<em>p</em><br>• <em>x</em> + <em>q</em> = 0 &rarr; <em>x</em> = −<em>q</em>'
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Method', level: 2 }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Rearrange the equation so one side equals <strong>zero</strong>' },
          { text: '<strong>Factorise</strong> the quadratic expression' },
          { text: 'Set each bracket equal to zero' },
          { text: 'Solve each linear equation' }
        ]
      }
    },
    {
      id: 'callout-worked-simple',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Solve <em>x</em>² + 5<em>x</em> + 6 = 0<br><br>Factorise: (<em>x</em> + 2)(<em>x</em> + 3) = 0<br><br><em>x</em> + 2 = 0 &rarr; <em>x</em> = −2<br><em>x</em> + 3 = 0 &rarr; <em>x</em> = −3<br><br>Solutions: <strong><em>x</em> = −2 or <em>x</em> = −3</strong>'
      }
    },
    {
      id: 'callout-worked-rearrange',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Rearranging First',
        text: 'Solve <em>x</em>² = 3<em>x</em> + 10<br><br>Rearrange: <em>x</em>² − 3<em>x</em> − 10 = 0<br>Factorise: (<em>x</em> − 5)(<em>x</em> + 2) = 0<br><br><em>x</em> = 5 or <em>x</em> = −2'
      }
    },
    {
      id: 'h-harder',
      type: 'heading',
      data: { text: 'When a ≠ 1', level: 2 }
    },
    {
      id: 'callout-worked-harder',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Solve 2<em>x</em>² + 5<em>x</em> − 3 = 0<br><br>ac = 2 × (−3) = −6. Numbers: 6 and −1 (product −6, sum 5)<br>Split: 2<em>x</em>² + 6<em>x</em> − <em>x</em> − 3 = 0<br>Group: 2<em>x</em>(<em>x</em> + 3) − 1(<em>x</em> + 3) = 0<br>(2<em>x</em> − 1)(<em>x</em> + 3) = 0<br><br>2<em>x</em> − 1 = 0 &rarr; <em>x</em> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span><br><em>x</em> + 3 = 0 &rarr; <em>x</em> = −3<br><br>Solutions: <strong><em>x</em> = ½ or <em>x</em> = −3</strong>'
      }
    },
    {
      id: 'callout-warning-zero',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Must Equal Zero',
        text: 'The equation <strong>must</strong> equal zero before factorising. You cannot use the zero-product property if the right side is not zero.<br><br>✘ (<em>x</em> + 2)(<em>x</em> + 3) = 6 does NOT mean <em>x</em> + 2 = 6 or <em>x</em> + 3 = 6.<br>Expand, rearrange to = 0, then factorise.'
      }
    },
    {
      id: 'callout-tip-solutions',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'A quadratic equation has <strong>at most two solutions</strong>. Always give both solutions and write them clearly as <em>x</em> = … or <em>x</em> = …'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To solve quadratics by factorising: rearrange to = 0, factorise into two brackets, use the zero-product property (if AB = 0, then A = 0 or B = 0) to find the solutions. The equation MUST equal zero first.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Rearrange to = 0, factorise, set each bracket to zero and solve. Always two solutions (at most).',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-zero', prompt: 'State the zero-product property.', answer: 'If A × B = 0, then A = 0 or B = 0.' },
      { id: 'cue-2', blockId: 'callout-worked-simple', prompt: 'Solve x² + 5x + 6 = 0.', answer: '(x + 2)(x + 3) = 0, so x = −2 or x = −3.' },
      { id: 'cue-3', blockId: 'callout-warning-zero', prompt: 'Why must the equation equal zero before factorising?', answer: 'The zero-product property only works when the product equals zero.' },
      { id: 'cue-4', blockId: 'callout-worked-harder', prompt: 'Solve 2x² + 5x − 3 = 0.', answer: '(2x − 1)(x + 3) = 0, so x = ½ or x = −3.' }
    ]
  },
  evidence: []
};
