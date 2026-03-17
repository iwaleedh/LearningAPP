export const note_olevel_maths_extended_2_3_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/difference-of-two-squares.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Recognise and factorise expressions in the form a² − b² using the difference of two squares identity.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Difference of Two Squares', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The <strong>difference of two squares</strong> is a special factorisation pattern. It applies when you subtract one perfect square from another.' }
    },
    {
      id: 'callout-key-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Difference of Two Squares Identity',
        text: '<em>a</em>² − <em>b</em>² = (<em>a</em> + <em>b</em>)(<em>a</em> − <em>b</em>)<br><br>This works because:<br>(<em>a</em> + <em>b</em>)(<em>a</em> − <em>b</em>) = <em>a</em>² − <em>ab</em> + <em>ab</em> − <em>b</em>² = <em>a</em>² − <em>b</em>²<br><br>The middle terms always cancel.'
      }
    },
    {
      id: 'h-simple',
      type: 'heading',
      data: { text: 'Simple Examples', level: 2 }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Factorise <em>x</em>² − 25<br><br>Recognise: <em>x</em>² is a perfect square, 25 = 5²<br><em>a</em> = <em>x</em>, <em>b</em> = 5<br><br>= <strong>(<em>x</em> + 5)(<em>x</em> − 5)</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Factorise 9<em>x</em>² − 16<br><br>9<em>x</em>² = (3<em>x</em>)², 16 = 4²<br><em>a</em> = 3<em>x</em>, <em>b</em> = 4<br><br>= <strong>(3<em>x</em> + 4)(3<em>x</em> − 4)</strong>'
      }
    },
    {
      id: 'h-harder',
      type: 'heading',
      data: { text: 'Harder Examples', level: 2 }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Factorise 4<em>x</em>² − 49<em>y</em>²<br><br>4<em>x</em>² = (2<em>x</em>)², 49<em>y</em>² = (7<em>y</em>)²<br><br>= <strong>(2<em>x</em> + 7<em>y</em>)(2<em>x</em> − 7<em>y</em>)</strong>'
      }
    },
    {
      id: 'callout-worked-4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — With Common Factor First',
        text: 'Factorise 2<em>x</em>² − 50<br><br>First take out common factor of 2:<br>= 2(<em>x</em>² − 25)<br><br>Now apply difference of two squares:<br>= <strong>2(<em>x</em> + 5)(<em>x</em> − 5)</strong>'
      }
    },
    {
      id: 'h-numerical',
      type: 'heading',
      data: { text: 'Numerical Application', level: 2 }
    },
    {
      id: 'callout-worked-num',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 5 — Mental Arithmetic',
        text: 'Calculate 47² − 53² without a calculator.<br><br>Using <em>a</em>² − <em>b</em>² = (<em>a</em> + <em>b</em>)(<em>a</em> − <em>b</em>):<br><br>= (47 + 53)(47 − 53)<br>= 100 × (−6)<br>= <strong>−600</strong>'
      }
    },
    {
      id: 'callout-warning-sum',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Sum of Squares',
        text: 'The <strong>sum</strong> of two squares <em>a</em>² + <em>b</em>² <strong>cannot</strong> be factorised (over real numbers).<br><br><em>x</em>² + 9 cannot be factorised. Only the <em>difference</em> works.'
      }
    },
    {
      id: 'callout-tip-spot',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Spotting the Pattern',
        text: 'Check: are there exactly <strong>two terms</strong> with a <strong>minus</strong> between them, and is each term a <strong>perfect square</strong>? If yes &rarr; difference of two squares.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'The difference of two squares: <strong>a² − b² = (a + b)(a − b)</strong>. Both terms must be perfect squares separated by subtraction. The sum of two squares (a² + b²) cannot be factorised. Always check for common factors first.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'a² − b² = (a + b)(a − b). Only works for subtraction of perfect squares, never addition.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-formula', prompt: 'State the difference of two squares formula.', answer: 'a² − b² = (a + b)(a − b)' },
      { id: 'cue-2', blockId: 'callout-worked-2', prompt: 'Factorise 9x² − 16.', answer: '(3x + 4)(3x − 4)' },
      { id: 'cue-3', blockId: 'callout-warning-sum', prompt: 'Can you factorise x² + 9?', answer: 'No — the sum of two squares cannot be factorised over real numbers.' },
      { id: 'cue-4', blockId: 'callout-worked-4', prompt: 'Factorise 2x² − 50.', answer: '2(x² − 25) = 2(x + 5)(x − 5). Take out common factor first.' }
    ]
  },
  evidence: []
};
