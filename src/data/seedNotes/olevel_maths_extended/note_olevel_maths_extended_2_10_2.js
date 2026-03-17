export const note_olevel_maths_extended_2_10_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/composite-functions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Form and evaluate composite functions fg(x) and understand the order of operations.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Composite Functions', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>composite function</strong> applies one function, then applies another to the result. It\'s like a chain of machines — the output of the first becomes the input of the second.' }
    },
    {
      id: 'callout-key-notation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Notation',
        text: '<strong>fg(<em>x</em>)</strong> means "apply g first, then apply f to the result".<br><br>fg(<em>x</em>) = f(g(<em>x</em>)) — read right to left!<br><br>Think: g acts on <em>x</em> first &rarr; f acts on the answer.'
      }
    },
    {
      id: 'h-evaluating',
      type: 'heading',
      data: { text: 'Evaluating Composite Functions', level: 2 }
    },
    {
      id: 'callout-worked-eval',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Evaluating fg(x)',
        text: 'Given f(<em>x</em>) = 2<em>x</em> + 1 and g(<em>x</em>) = <em>x</em>², find fg(3).<br><br><strong>Step 1:</strong> Apply g first: g(3) = 3² = 9<br><strong>Step 2:</strong> Apply f to the result: f(9) = 2(9) + 1 = 19<br><br><strong>fg(3) = 19</strong>'
      }
    },
    {
      id: 'h-expressions',
      type: 'heading',
      data: { text: 'Finding Composite Expressions', level: 2 }
    },
    {
      id: 'p-expressions',
      type: 'paragraph',
      data: { text: 'To find fg(<em>x</em>) as an expression, replace every <em>x</em> in f with the <strong>entire expression</strong> for g(<em>x</em>).' }
    },
    {
      id: 'callout-worked-expr',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Composite Expressions',
        text: 'Given f(<em>x</em>) = 2<em>x</em> + 1 and g(<em>x</em>) = <em>x</em>², find:<br><br>(a) fg(<em>x</em>) = f(g(<em>x</em>)) = f(<em>x</em>²) = 2(<em>x</em>²) + 1 = <strong>2<em>x</em>² + 1</strong><br><br>(b) gf(<em>x</em>) = g(f(<em>x</em>)) = g(2<em>x</em> + 1) = (2<em>x</em> + 1)² = <strong>4<em>x</em>² + 4<em>x</em> + 1</strong><br><br>Notice: fg(<em>x</em>) ≠ gf(<em>x</em>) — <strong>order matters!</strong>'
      }
    },
    {
      id: 'h-ff',
      type: 'heading',
      data: { text: 'Repeated Functions: ff(x)', level: 2 }
    },
    {
      id: 'callout-worked-ff',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — ff(x)',
        text: 'Given f(<em>x</em>) = 3<em>x</em> − 2, find ff(<em>x</em>).<br><br>ff(<em>x</em>) = f(f(<em>x</em>)) = f(3<em>x</em> − 2) = 3(3<em>x</em> − 2) − 2 = 9<em>x</em> − 6 − 2 = <strong>9<em>x</em> − 8</strong>'
      }
    },
    {
      id: 'h-solving',
      type: 'heading',
      data: { text: 'Solving Composite Equations', level: 2 }
    },
    {
      id: 'callout-worked-solve',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Solving fg(x) = k',
        text: 'f(<em>x</em>) = 2<em>x</em> + 1, g(<em>x</em>) = <em>x</em>². Solve fg(<em>x</em>) = 51.<br><br>fg(<em>x</em>) = 2<em>x</em>² + 1 = 51<br>2<em>x</em>² = 50<br><em>x</em>² = 25<br><em>x</em> = ±5'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Getting the order wrong — fg means g first, then f<br>• Assuming fg(<em>x</em>) = gf(<em>x</em>) — the order MATTERS<br>• Forgetting to replace EVERY <em>x</em> in f when composing'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If you\'re unsure about the order, test with a number first. Calculate g(2) then f(answer) — this confirms you have the right order for fg(2).'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Composite functions: fg(x) means apply g first, then f. Replace x in the outer function with the entire inner function. Order matters — fg(x) ≠ gf(x) in general. ff(x) means apply f twice.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'fg(x) = f(g(x)). Apply g first, then f. Order matters. Replace x in f with the whole g(x) expression.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-notation', prompt: 'In fg(x), which function is applied first?', answer: 'g is applied first, then f acts on the result.' },
      { id: 'cue-2', blockId: 'callout-worked-expr', prompt: 'If f(x) = 2x+1 and g(x) = x², is fg(x) = gf(x)?', answer: 'No. fg(x) = 2x²+1 but gf(x) = (2x+1)² = 4x²+4x+1.' },
      { id: 'cue-3', blockId: 'callout-worked-ff', prompt: 'If f(x) = 3x − 2, find ff(x).', answer: 'ff(x) = f(3x−2) = 3(3x−2) − 2 = 9x − 8.' },
      { id: 'cue-4', blockId: 'callout-worked-eval', prompt: 'If f(x)=2x+1 and g(x)=x², find fg(3).', answer: 'g(3)=9, f(9)=19. So fg(3)=19.' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'How can you check your order is correct?', answer: 'Test with a number: compute g(2) then f(answer) for fg(2).' }
    ]
  },
  evidence: []
};
