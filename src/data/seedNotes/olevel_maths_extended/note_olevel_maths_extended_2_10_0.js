export const note_olevel_maths_extended_2_10_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/introduction-to-functions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand function notation, evaluate functions for given inputs, and interpret the concept of a function as a mapping.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Introduction to Functions', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>function</strong> is a rule that maps each input to <strong>exactly one output</strong>. It is essentially a mathematical machine: you put a number in, the function does something to it, and a single number comes out.' }
    },
    {
      id: 'callout-key-notation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Function Notation',
        text: 'If <em>f</em> is a function, we write <strong>f(<em>x</em>)</strong> or <strong>f : <em>x</em> &rarr; 2<em>x</em> + 3</strong><br><br>• f(<em>x</em>) = 2<em>x</em> + 3 means "the function f applied to <em>x</em> gives 2<em>x</em> + 3"<br>• f(5) means "substitute <em>x</em> = 5": f(5) = 2(5) + 3 = 13<br>• The input value is called the <strong>argument</strong><br>• f(<em>x</em>) is read "f of <em>x</em>"'
      }
    },
    {
      id: 'h-evaluating',
      type: 'heading',
      data: { text: 'Evaluating Functions', level: 2 }
    },
    {
      id: 'p-evaluating',
      type: 'paragraph',
      data: { text: 'To evaluate a function at a particular value, <strong>replace every <em>x</em></strong> with that value and calculate.' }
    },
    {
      id: 'callout-worked-eval',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Evaluating',
        text: 'Given f(<em>x</em>) = 3<em>x</em>² − 2<em>x</em> + 1, find:<br><br>(a) f(4) = 3(16) − 2(4) + 1 = 48 − 8 + 1 = <strong>41</strong><br><br>(b) f(−2) = 3(4) − 2(−2) + 1 = 12 + 4 + 1 = <strong>17</strong><br><br>(c) f(0) = 3(0) − 0 + 1 = <strong>1</strong>'
      }
    },
    {
      id: 'h-solving',
      type: 'heading',
      data: { text: 'Solving f(x) = k', level: 2 }
    },
    {
      id: 'p-solving',
      type: 'paragraph',
      data: { text: 'When asked "find <em>x</em> when f(<em>x</em>) = k", set the function expression equal to k and solve the resulting equation.' }
    },
    {
      id: 'callout-worked-solve',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Solving',
        text: 'Given f(<em>x</em>) = 5<em>x</em> − 7, find <em>x</em> when f(<em>x</em>) = 18.<br><br>5<em>x</em> − 7 = 18<br>5<em>x</em> = 25<br><em>x</em> = 5<br><br><strong><em>x</em> = 5</strong>'
      }
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Types of Functions', level: 2 }
    },
    {
      id: 'table-types',
      type: 'comparisonTable',
      data: {
        caption: 'Common function types at IGCSE Extended',
        headers: ['Type', 'Example', 'Graph Shape'],
        rows: [
          ['Linear', 'f(<em>x</em>) = 2<em>x</em> + 3', 'Straight line'],
          ['Quadratic', 'f(<em>x</em>) = <em>x</em>² − 4<em>x</em>', 'Parabola (U-shape)'],
          ['Cubic', 'f(<em>x</em>) = <em>x</em>³ + 1', 'S-curve'],
          ['Reciprocal', 'f(<em>x</em>) = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den"><em>x</em></span></span>', 'Hyperbola'],
          ['Exponential', 'f(<em>x</em>) = 2<sup><em>x</em></sup>', 'Growth/decay curve']
        ]
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Important Note',
        text: 'f(<em>x</em>) does NOT mean "f multiplied by <em>x</em>". The brackets indicate the <strong>input</strong> to the function, not multiplication.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When evaluating f(−2), use brackets: f(−2) = 3(−2)² − 2(−2). The brackets prevent sign errors, especially with squared terms.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'A function maps each input to exactly one output. Use f(x) notation. Evaluate by substituting the input value. Solve f(x) = k by setting the expression equal to k. Common types: linear, quadratic, cubic, reciprocal, exponential.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'A function is a rule giving exactly one output per input. f(x) notation. Evaluate by substituting. Solve by setting f(x) = k.',
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What is the key property that makes a rule a function?', answer: 'Each input maps to exactly one output.' },
      { id: 'cue-2', blockId: 'callout-worked-eval', prompt: 'If f(x) = 3x² − 2x + 1, find f(−2).', answer: 'f(−2) = 3(4) + 4 + 1 = 17.' },
      { id: 'cue-3', blockId: 'callout-key-notation', prompt: 'What does f : x &rarr; 2x + 3 mean?', answer: 'The function f maps x to 2x + 3.' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'What common error do students make with f(x) notation?', answer: 'Thinking f(x) means f × x — the brackets denote the input, not multiplication.' }
    ]
  },
  evidence: []
};
