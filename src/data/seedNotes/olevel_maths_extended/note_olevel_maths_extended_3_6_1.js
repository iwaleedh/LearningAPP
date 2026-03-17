export const note_olevel_maths_extended_3_6_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/using-calculators-to-solve-equations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use graphing calculators to solve equations by finding intersection points and roots graphically.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Using Calculators to Solve Equations', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Graphing calculators can solve equations by finding where graphs <strong>cross the x-axis</strong> (roots) or where <strong>two graphs intersect</strong>. This graphical approach is especially useful for equations that are difficult to solve algebraically.' }
    },
    {
      id: 'h-roots',
      type: 'heading',
      data: { text: 'Finding Roots (x-intercepts)', level: 2 }
    },
    {
      id: 'p-roots',
      type: 'paragraph',
      data: { text: 'To solve f(<em>x</em>) = 0, plot <em>y</em> = f(<em>x</em>) and find where the graph crosses the <strong>x-axis</strong>. The x-coordinates at these crossing points are the <strong>roots</strong> (solutions).' }
    },
    {
      id: 'list-roots-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Enter the function <em>y</em> = f(<em>x</em>)' },
          { text: 'Graph it with an appropriate window' },
          { text: 'Use the <strong>Root</strong> / <strong>Zero</strong> / <strong>x-intercept</strong> function' },
          { text: 'Move the cursor near each root and press Enter/Solve' },
          { text: 'Read the x-value — this is the solution' }
        ]
      }
    },
    {
      id: 'callout-worked-roots',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding Roots',
        text: 'Solve <em>x</em>² − 5<em>x</em> + 4 = 0 using a graphing calculator.<br><br>1. Enter <em>y</em> = <em>x</em>² − 5<em>x</em> + 4<br>2. Graph it (parabola crossing x-axis at two points)<br>3. Use the Root/Zero function:<br>&nbsp;&nbsp;• First root: <em>x</em> = 1<br>&nbsp;&nbsp;• Second root: <em>x</em> = 4<br><br><strong>Solutions: <em>x</em> = 1 and <em>x</em> = 4</strong>'
      }
    },
    {
      id: 'h-intersection',
      type: 'heading',
      data: { text: 'Finding Intersection Points', level: 2 }
    },
    {
      id: 'p-intersection',
      type: 'paragraph',
      data: { text: 'To solve f(<em>x</em>) = g(<em>x</em>), plot both <em>y</em> = f(<em>x</em>) and <em>y</em> = g(<em>x</em>) on the same axes and find where they <strong>intersect</strong>. The x-coordinates at the crossing points are the solutions.' }
    },
    {
      id: 'callout-worked-intersection',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Intersection',
        text: 'Solve <em>x</em>² = 3<em>x</em> + 4 using a graphing calculator.<br><br>1. Enter Y₁ = <em>x</em>² and Y₂ = 3<em>x</em> + 4<br>2. Graph both functions<br>3. Use the <strong>Intersect</strong> function<br>4. Intersections at <em>x</em> = −1 and <em>x</em> = 4<br><br><strong>Solutions: <em>x</em> = −1 and <em>x</em> = 4</strong><br><br>Check: (−1)² = 1, 3(−1) + 4 = 1 ✓ &nbsp; 4² = 16, 3(4) + 4 = 16 ✓'
      }
    },
    {
      id: 'h-rearranging',
      type: 'heading',
      data: { text: 'Rearranging to Use an Existing Graph', level: 2 }
    },
    {
      id: 'p-rearranging',
      type: 'paragraph',
      data: { text: 'Sometimes you have already drawn a graph of <em>y</em> = f(<em>x</em>) and need to solve a different equation. You can rearrange the equation into the form f(<em>x</em>) = g(<em>x</em>) and draw <em>y</em> = g(<em>x</em>) on the same axes.' }
    },
    {
      id: 'callout-worked-rearrange',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Using an Existing Graph',
        text: 'You have drawn <em>y</em> = <em>x</em>² − 2<em>x</em>. Use it to solve <em>x</em>² − 3<em>x</em> + 1 = 0.<br><br>Rearrange: <em>x</em>² − 2<em>x</em> = <em>x</em> − 1<br><br>So draw <em>y</em> = <em>x</em> − 1 on the same axes as <em>y</em> = <em>x</em>² − 2<em>x</em>.<br>The x-coordinates of the intersection points give the solutions to <em>x</em>² − 3<em>x</em> + 1 = 0.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: '• Give answers to the required degree of accuracy (usually 1 d.p. for graphical solutions).<br>• If the curve only <strong>touches</strong> the x-axis (doesn\'t cross), there is a <strong>repeated root</strong>.<br>• If the curve doesn\'t reach the x-axis, the equation has <strong>no real solutions</strong>.'
      }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Make sure your viewing window shows <strong>all</strong> the intersection points. If two curves intersect at <em>x</em> = −5 and <em>x</em> = 8 but your window only goes from −3 to 6, you\'ll miss both solutions!'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Calculators solve equations graphically: for f(x) = 0, find x-intercepts; for f(x) = g(x), find intersection points. Use Root/Zero and Intersect functions. You can rearrange equations to reuse an existing graph. Always check the viewing window shows all solutions.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Equations are solved graphically by finding roots (x-intercepts) or intersection points.',
    cues: [
      { id: 'cue-1', blockId: 'p-roots', prompt: 'How do you solve f(x) = 0 on a graphing calculator?', answer: 'Plot y = f(x) and find where the graph crosses the x-axis (the roots).' },
      { id: 'cue-2', blockId: 'p-intersection', prompt: 'How do you solve f(x) = g(x) graphically?', answer: 'Plot both functions and find the x-coordinates of their intersection points.' },
      { id: 'cue-3', blockId: 'callout-tip-1', prompt: 'What does it mean if a curve touches the x-axis but doesn\'t cross it?', answer: 'There is a repeated root at that point.' },
      { id: 'cue-4', blockId: 'p-rearranging', prompt: 'How can you reuse an existing graph to solve a different equation?', answer: 'Rearrange the new equation into f(x) = g(x) form and draw y = g(x) on the same axes.' }
    ]
  },
  evidence: []
};
