export const note_olevel_maths_extended_3_6_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/using-calculators-to-solve-inequalities.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use graphing calculators to solve inequalities by identifying the regions where conditions are satisfied.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Using Calculators to Solve Inequalities', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Graphing calculators can solve inequalities by showing you <strong>where a graph is above or below the x-axis</strong>, or where one graph is above or below another. This visual approach helps you find the solution set.' }
    },
    {
      id: 'h-single',
      type: 'heading',
      data: { text: 'Solving f(x) > 0 or f(x) < 0', level: 2 }
    },
    {
      id: 'p-single',
      type: 'paragraph',
      data: { text: 'To solve an inequality like f(<em>x</em>) > 0:<br>1. Plot <em>y</em> = f(<em>x</em>)<br>2. Find the <strong>roots</strong> (where the graph crosses the x-axis)<br>3. Read which sections of the graph are <strong>above</strong> the x-axis (where <em>y</em> > 0)' }
    },
    {
      id: 'callout-key-reading',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reading Solutions from the Graph',
        text: '• <strong>f(<em>x</em>) > 0</strong>: the graph is <strong>above</strong> the x-axis<br>• <strong>f(<em>x</em>) < 0</strong>: the graph is <strong>below</strong> the x-axis<br>• <strong>f(<em>x</em>) ≥ 0</strong>: above or on the x-axis (include the roots)<br>• <strong>f(<em>x</em>) ≤ 0</strong>: below or on the x-axis (include the roots)'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Quadratic Inequality',
        text: 'Solve <em>x</em>² − 5<em>x</em> + 6 < 0 using a calculator.<br><br>1. Plot <em>y</em> = <em>x</em>² − 5<em>x</em> + 6<br>2. Find roots: <em>x</em> = 2 and <em>x</em> = 3 (calculator Root function)<br>3. The parabola opens upward (<em>a</em> > 0)<br>4. The graph is <strong>below</strong> the x-axis between the roots<br><br><strong>Solution: 2 < <em>x</em> < 3</strong>'
      }
    },
    {
      id: 'h-two-functions',
      type: 'heading',
      data: { text: 'Solving f(x) > g(x)', level: 2 }
    },
    {
      id: 'p-two-functions',
      type: 'paragraph',
      data: { text: 'To solve f(<em>x</em>) > g(<em>x</em>):<br>1. Plot both <em>y</em> = f(<em>x</em>) and <em>y</em> = g(<em>x</em>)<br>2. Find the <strong>intersection points</strong><br>3. Identify where the graph of f(<em>x</em>) is <strong>above</strong> the graph of g(<em>x</em>)' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Two Functions',
        text: 'Solve <em>x</em>² > 2<em>x</em> + 3 using a calculator.<br><br>1. Plot Y₁ = <em>x</em>² and Y₂ = 2<em>x</em> + 3<br>2. Intersections at <em>x</em> = −1 and <em>x</em> = 3<br>3. The parabola is <strong>above</strong> the line when <em>x</em> < −1 or <em>x</em> > 3<br><br><strong>Solution: <em>x</em> < −1 or <em>x</em> > 3</strong>'
      }
    },
    {
      id: 'h-interpreting',
      type: 'heading',
      data: { text: 'Interpreting the Solution', level: 2 }
    },
    {
      id: 'table-notation',
      type: 'comparisonTable',
      data: {
        caption: 'Ways to write inequality solutions',
        headers: ['Type', 'Example', 'Meaning'],
        rows: [
          ['Single interval', '2 < x < 5', 'x is between 2 and 5 (exclusive)'],
          ['Two intervals', 'x < −1 or x > 3', 'x is in either range'],
          ['With endpoints', '2 ≤ x ≤ 5', 'x is between 2 and 5 (inclusive)'],
          ['Set notation', '{x : 2 < x < 5}', 'The set of all x between 2 and 5']
        ]
      }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Negative Quadratic',
        text: 'Solve −<em>x</em>² + 4<em>x</em> − 3 ≥ 0 using a calculator.<br><br>1. Plot <em>y</em> = −<em>x</em>² + 4<em>x</em> − 3<br>2. Roots at <em>x</em> = 1 and <em>x</em> = 3<br>3. Parabola opens downward (<em>a</em> < 0), so it\'s above the x-axis <strong>between</strong> the roots<br><br><strong>Solution: 1 ≤ <em>x</em> ≤ 3</strong> (include endpoints since ≥)'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• For <strong>quadratics that open upward</strong> (∪): the graph is below the x-axis <strong>between</strong> the roots, and above it <strong>outside</strong> the roots.<br>• For <strong>quadratics that open downward</strong> (∩): it\'s the opposite — above between roots, below outside.<br>• Use a <strong>number line</strong> to help organise your solution intervals.'
      }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'For two-part solutions like <em>x</em> < −1 or <em>x</em> > 3, do NOT write −1 > <em>x</em> > 3 — this implies <em>x</em> is simultaneously less than −1 and greater than 3, which is impossible. Write them as <strong>two separate inequalities joined by "or"</strong>.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To solve inequalities with a calculator: plot the function(s), find roots/intersections, and identify where the graph is above or below the x-axis (or the other graph). For f(x) > 0, look where the graph is above the x-axis. Write solutions using correct interval notation — use "or" for disjoint intervals.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Inequalities are solved graphically by identifying where graphs are above or below axes or each other.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-reading', prompt: 'How do you solve f(x) > 0 from a graph?', answer: 'Find the x-values where the graph is above the x-axis.' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'Solve x² − 5x + 6 < 0.', answer: '2 < x < 3 (the parabola is below the x-axis between roots 2 and 3).' },
      { id: 'cue-3', blockId: 'callout-tip-1', prompt: 'For an upward-opening parabola, where is the graph below the x-axis?', answer: 'Between the two roots.' },
      { id: 'cue-4', blockId: 'callout-warning-1', prompt: 'Why can\'t you write x < −1 or x > 3 as −1 > x > 3?', answer: 'Because that implies x is simultaneously less than −1 and greater than 3, which is impossible. Use "or" to separate.' },
      { id: 'cue-5', blockId: 'p-two-functions', prompt: 'How do you solve f(x) > g(x) graphically?', answer: 'Plot both functions and find x-values where the graph of f(x) is above the graph of g(x).' }
    ]
  },
  evidence: []
};
