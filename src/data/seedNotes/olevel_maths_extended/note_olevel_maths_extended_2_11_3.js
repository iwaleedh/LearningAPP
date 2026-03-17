export const note_olevel_maths_extended_2_11_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/other-sequences.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Recognise and work with geometric, Fibonacci-type, and other special sequences.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Other Sequences', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Beyond arithmetic and quadratic sequences, IGCSE Extended requires you to recognise and work with <strong>geometric sequences</strong>, <strong>Fibonacci-type sequences</strong>, and other special patterns.' }
    },
    {
      id: 'h-geometric',
      type: 'heading',
      data: { text: 'Geometric Sequences', level: 2 }
    },
    {
      id: 'p-geometric',
      type: 'paragraph',
      data: { text: 'A <strong>geometric sequence</strong> has a constant <strong>common ratio</strong> (<em>r</em>) between consecutive terms. Each term is obtained by multiplying the previous term by <em>r</em>.' }
    },
    {
      id: 'callout-key-geo',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Geometric Sequence Formula',
        text: '<strong><em>T</em><sub><em>n</em></sub> = <em>a</em> × <em>r</em><sup><em>n</em>−1</sup></strong><br><br>where <em>a</em> = first term, <em>r</em> = common ratio<br><br>Common ratio: <em>r</em> = <span class="nb-frac"><span class="nb-num"><em>T</em><sub>2</sub></span><span class="nb-den"><em>T</em><sub>1</sub></span></span> = <span class="nb-frac"><span class="nb-num"><em>T</em><sub>3</sub></span><span class="nb-den"><em>T</em><sub>2</sub></span></span> = …'
      }
    },
    {
      id: 'callout-worked-geo',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Geometric',
        text: 'Find the nth term and the 8th term of: 3, 6, 12, 24, …<br><br><em>r</em> = 6 ÷ 3 = 2, &nbsp; <em>a</em> = 3<br><br><em>T</em><sub><em>n</em></sub> = 3 × 2<sup><em>n</em>−1</sup><br><br><em>T</em>₈ = 3 × 2⁷ = 3 × 128 = <strong>384</strong>'
      }
    },
    {
      id: 'h-fibonacci',
      type: 'heading',
      data: { text: 'Fibonacci-Type Sequences', level: 2 }
    },
    {
      id: 'p-fib',
      type: 'paragraph',
      data: { text: 'In a Fibonacci-type sequence, each term is the <strong>sum of the two preceding terms</strong>. The classic Fibonacci sequence is 1, 1, 2, 3, 5, 8, 13, … but any starting pair works.' }
    },
    {
      id: 'callout-worked-fib',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Fibonacci-Type',
        text: 'A sequence starts 2, 5, …<br>Each term = sum of previous two.<br><br>2, 5, 7, 12, 19, 31, 50, …<br><br>The rule is: <em>T</em><sub><em>n</em></sub> = <em>T</em><sub><em>n</em>−1</sub> + <em>T</em><sub><em>n</em>−2</sub>'
      }
    },
    {
      id: 'h-special',
      type: 'heading',
      data: { text: 'Other Special Sequences', level: 2 }
    },
    {
      id: 'table-special',
      type: 'comparisonTable',
      data: {
        caption: 'Special sequences you should recognise',
        headers: ['Sequence', 'Terms', 'nth Term'],
        rows: [
          ['Square numbers', '1, 4, 9, 16, 25, …', '<em>n</em>²'],
          ['Cube numbers', '1, 8, 27, 64, 125, …', '<em>n</em>³'],
          ['Triangular numbers', '1, 3, 6, 10, 15, …', '<span class="nb-frac"><span class="nb-num"><em>n</em>(<em>n</em>+1)</span><span class="nb-den">2</span></span>'],
          ['Powers of 2', '2, 4, 8, 16, 32, …', '2<sup><em>n</em></sup>'],
          ['Powers of 10', '10, 100, 1000, …', '10<sup><em>n</em></sup>']
        ]
      }
    },
    {
      id: 'h-mixed',
      type: 'heading',
      data: { text: 'Recognising the Type', level: 2 }
    },
    {
      id: 'list-recognise',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Constant 1st differences &rarr; <strong>arithmetic</strong> (linear)' },
          { text: 'Constant 2nd differences &rarr; <strong>quadratic</strong>' },
          { text: 'Constant ratio between terms &rarr; <strong>geometric</strong>' },
          { text: 'Each term = sum of two before &rarr; <strong>Fibonacci-type</strong>' },
          { text: 'Matches known pattern &rarr; <strong>special</strong> (squares, cubes, triangular, etc.)' }
        ]
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Using <em>r</em><sup><em>n</em></sup> instead of <em>r</em><sup><em>n</em>−1</sup> in the geometric formula<br>• Not checking whether a sequence is arithmetic or geometric — find both differences AND ratios<br>• Assuming all non-linear sequences are quadratic'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If asked to describe the rule for a Fibonacci-type sequence, write: "add the previous two terms". There is no simple nth term formula for these.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Geometric sequences have Tₙ = arⁿ⁻¹ (constant ratio). Fibonacci-type: each term = sum of previous two. Know special sequences: squares, cubes, triangular numbers, powers of 2. Identify by checking differences, ratios, or patterns.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Geometric: multiply by r each time, Tₙ = arⁿ⁻¹. Fibonacci: sum of two previous. Know squares, cubes, triangular numbers.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-geo', prompt: 'What is the nth term formula for a geometric sequence?', answer: 'Tₙ = a × rⁿ⁻¹ where a = first term, r = common ratio.' },
      { id: 'cue-2', blockId: 'callout-worked-geo', prompt: 'Find the 8th term of 3, 6, 12, 24, …', answer: 'r = 2, T₈ = 3 × 2⁷ = 384.' },
      { id: 'cue-3', blockId: 'table-special', prompt: 'What is the nth term for triangular numbers?', answer: 'n(n+1)/2.' },
      { id: 'cue-4', blockId: 'list-recognise', prompt: 'How do you tell an arithmetic from a geometric sequence?', answer: 'Arithmetic: constant differences. Geometric: constant ratio between consecutive terms.' },
      { id: 'cue-5', blockId: 'p-fib', prompt: 'What is the rule for a Fibonacci-type sequence?', answer: 'Each term = sum of the two preceding terms.' }
    ]
  },
  evidence: []
};
