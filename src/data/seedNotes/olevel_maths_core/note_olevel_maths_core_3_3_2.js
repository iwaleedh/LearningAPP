export const note_olevel_maths_core_3_3_2 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Use a graphical calculator to sketch graphs by entering equations, setting an appropriate viewing window, and identifying key features from the display.'
      }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Why Use a Graphical Calculator?', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'A graphical calculator (or graphing app) can plot complex functions quickly, allowing you to see the shape and key features of a graph without manually calculating many points. In IGCSE exams you may use a scientific calculator and sketch from a table, but understanding how to set up and read a graphical display is a very useful skill.'
      }
    },
    {
      id: 'h-enter',
      type: 'heading',
      data: { text: 'Entering Functions', level: 2 }
    },
    {
      id: 'p-enter',
      type: 'paragraph',
      data: {
        text: 'On most graphical calculators, there is a <strong>Y=</strong> screen (or equivalent) where you type the function formula. Enter the right-hand side of the equation after the Y₁= prompt. Use the <strong>X,T,θ,n</strong> key for the variable x.'
      }
    },
    {
      id: 'list-enter',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Press <strong>Y=</strong> (or the function entry button)' },
          { text: 'Type the expression, e.g. <code>2X^2 - 3X + 1</code>' },
          { text: 'Press <strong>GRAPH</strong> to display the curve' }
        ]
      }
    },
    {
      id: 'h-window',
      type: 'heading',
      data: { text: 'Setting the Viewing Window', level: 2 }
    },
    {
      id: 'p-window',
      type: 'paragraph',
      data: {
        text: 'The <strong>viewing window</strong> controls which part of the coordinate plane you see. If the window is too small or too large, you may miss key features of the graph. Press <strong>WINDOW</strong> to set x-min, x-max, y-min, y-max and the scale of tick marks.'
      }
    },
    {
      id: 'callout-tip-window',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Choosing a Good Window',
        text: '• Start with the <strong>standard window</strong>: x from −10 to 10, y from −10 to 10 (press ZOOM → ZStandard).<br>• If you cannot see the full curve, widen the window.<br>• For a parabola y = x² − 5, you would need y-min of at least −6 to see the vertex at (0, −5).<br>• Use ZOOM → ZFit to automatically fit the window to the curve.'
      }
    },
    {
      id: 'h-features',
      type: 'heading',
      data: { text: 'Identifying Key Features from the Display', level: 2 }
    },
    {
      id: 'table-features',
      type: 'comparisonTable',
      data: {
        caption: 'Key graph features and how to find them using a graphical calculator',
        headers: ['Feature', 'What it is', 'How to find it'],
        rows: [
          ['y-intercept', 'Where graph crosses y-axis', 'Read directly; or substitute x=0 into equation'],
          ['x-intercept (root)', 'Where graph crosses x-axis', 'Use CALC → Zero function; or TRACE to x-axis'],
          ['Turning point (vertex)', 'Maximum or minimum of a curve', 'Use CALC → Maximum or Minimum'],
          ['Intersection', 'Where two graphs cross', 'Plot both, use CALC → Intersect']
        ]
      }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Sketching y = x² − 2x − 3',
        text: '<strong>Step 1: Enter</strong> Y₁ = X² − 2X − 3 in the Y= screen.<br><br><strong>Step 2: Set window</strong> x: −3 to 5, y: −6 to 4 to see the whole parabola.<br><br><strong>Step 3: Press GRAPH.</strong> You should see a ∪-shaped parabola.<br><br><strong>Step 4: Find key features:</strong><br>• y-intercept: at x=0, y = 0 − 0 − 3 = −3, so (0, −3)<br>• x-intercepts: use CALC → Zero → find x = −1 and x = 3<br>• Turning point: use CALC → Minimum → vertex ≈ (1, −4)'
      }
    },
    {
      id: 'h-table-calc',
      type: 'heading',
      data: { text: 'Using the Table of Values on a Calculator', level: 2 }
    },
    {
      id: 'p-table-calc',
      type: 'paragraph',
      data: {
        text: 'Most graphical calculators have a <strong>TABLE</strong> function. After entering Y₁, press <strong>2nd → TABLE</strong> (or equivalent) to see a table of (x, y) values. You can set the starting x-value and increment. This is especially useful when checking points on the graph or finding where the function equals a particular value.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Always Show Your Working!',
        text: 'In IGCSE exams, even if you use a graphical calculator to find the answer, you must <strong>show the mathematical working</strong>. Simply writing "from the calculator" is not acceptable. Write down:<br>• The equation you entered<br>• Key values read from the table or trace<br>• Any algebraic steps used to verify the answer'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• Sketch graphs in your working by hand — label intercepts and turning points with their coordinates.<br>• Double-check calculator values by substituting back into the original equation.<br>• If the question says "draw", you must plot on the provided grid, not just sketch roughly.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Use a graphical calculator by: entering the function in Y=, setting an appropriate window, and pressing GRAPH. Use CALC functions to find zeros (x-intercepts), maximum/minimum (turning points), and intersections. Always verify calculator results algebraically and show working in exams.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Enter in Y=, set window, press GRAPH. Use CALC → Zero/Maximum/Minimum for key features. Always show working in exams.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-window',
        prompt: 'What is the "viewing window" on a graphical calculator?',
        answer: 'The range of x and y values displayed on screen. You set x-min, x-max, y-min, y-max to control which part of the graph is visible.'
      },
      {
        id: 'cue-2',
        blockId: 'table-features',
        prompt: 'How would you find the x-intercepts of a graph using a graphical calculator?',
        answer: 'Use CALC → Zero function, or trace along the curve to where y = 0.'
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked1',
        prompt: 'Using y = x² − 2x − 3: what are the x-intercepts and turning point?',
        answer: 'x-intercepts at x = −1 and x = 3. Turning point (vertex) at (1, −4).'
      },
      {
        id: 'cue-4',
        blockId: 'callout-warning',
        prompt: 'Why must you show working even when using a calculator in an exam?',
        answer: 'Writing "from the calculator" alone earns no marks. You must show the equation, key values, and algebraic verification steps.'
      },
      {
        id: 'cue-5',
        blockId: 'callout-tip-window',
        prompt: 'If you can\'t see the full parabola on screen, what should you do?',
        answer: 'Widen the viewing window by increasing x-max/x-min and y-max/y-min, or use Zoom → ZFit to auto-fit the curve.'
      }
    ]
  },
  evidence: []
};
