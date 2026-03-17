export const note_olevel_maths_extended_3_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/drawing-straight-line-graphs.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Plot straight-line graphs from their equations by constructing a table of values and drawing the line.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Drawing Straight-Line Graphs', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>linear equation</strong> in two variables (e.g. <em>y</em> = 2<em>x</em> + 1 or 3<em>x</em> + 2<em>y</em> = 12) produces a <strong>straight line</strong> when plotted. To draw the graph, you need at least <strong>two points</strong>, though plotting three or more helps confirm accuracy.' }
    },
    {
      id: 'h-table',
      type: 'heading',
      data: { text: 'Method 1: Table of Values', level: 2 }
    },
    {
      id: 'list-table-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Choose at least 3 values of <em>x</em> (including negative, zero, and positive)' },
          { text: 'Substitute each into the equation to calculate <em>y</em>' },
          { text: 'Plot the points on a coordinate grid' },
          { text: 'Draw a straight line through all the points using a ruler' },
          { text: 'Label the line with its equation' }
        ]
      }
    },
    {
      id: 'callout-worked-table',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Table of Values',
        text: 'Draw the graph of <em>y</em> = 2<em>x</em> − 1 for −2 ≤ <em>x</em> ≤ 3.<br><br><table style="border-collapse:collapse;text-align:center"><tr><td style="padding:4px 12px;border:1px solid #999"><em>x</em></td><td style="padding:4px 12px;border:1px solid #999">−2</td><td style="padding:4px 12px;border:1px solid #999">−1</td><td style="padding:4px 12px;border:1px solid #999">0</td><td style="padding:4px 12px;border:1px solid #999">1</td><td style="padding:4px 12px;border:1px solid #999">2</td><td style="padding:4px 12px;border:1px solid #999">3</td></tr><tr><td style="padding:4px 12px;border:1px solid #999"><em>y</em></td><td style="padding:4px 12px;border:1px solid #999">−5</td><td style="padding:4px 12px;border:1px solid #999">−3</td><td style="padding:4px 12px;border:1px solid #999">−1</td><td style="padding:4px 12px;border:1px solid #999">1</td><td style="padding:4px 12px;border:1px solid #999">3</td><td style="padding:4px 12px;border:1px solid #999">5</td></tr></table><br>Plot these six points and join with a straight line.'
      }
    },
    {
      id: 'h-intercept',
      type: 'heading',
      data: { text: 'Method 2: Using Intercepts', level: 2 }
    },
    {
      id: 'p-intercept',
      type: 'paragraph',
      data: { text: 'For equations like <em>ax</em> + <em>by</em> = <em>c</em>, find where the line crosses each axis:<br>• Set <em>x</em> = 0 to find the <strong>y-intercept</strong><br>• Set <em>y</em> = 0 to find the <strong>x-intercept</strong><br>Plot both intercepts and draw the line through them.' }
    },
    {
      id: 'callout-worked-intercept',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Using Intercepts',
        text: 'Draw the graph of 2<em>x</em> + 3<em>y</em> = 12.<br><br>When <em>x</em> = 0: 3<em>y</em> = 12 &rarr; <em>y</em> = 4 &rarr; point (0, 4)<br>When <em>y</em> = 0: 2<em>x</em> = 12 &rarr; <em>x</em> = 6 &rarr; point (6, 0)<br><br>Plot (0, 4) and (6, 0), then draw a straight line through them.'
      }
    },
    {
      id: 'h-special',
      type: 'heading',
      data: { text: 'Special Lines', level: 2 }
    },
    {
      id: 'table-special',
      type: 'comparisonTable',
      data: {
        caption: 'Special straight lines',
        headers: ['Equation', 'Type', 'Description'],
        rows: [
          ['y = c', 'Horizontal', 'A line parallel to the x-axis at height c'],
          ['x = c', 'Vertical', 'A line parallel to the y-axis at position c'],
          ['y = x', 'Diagonal', 'Passes through origin at 45°'],
          ['y = −x', 'Diagonal', 'Passes through origin at 135°']
        ]
      }
    },
    {
      id: 'callout-tip-ruler',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• Always use a <strong>ruler</strong> to draw straight lines.<br>• Extend the line <strong>beyond</strong> the plotted points to fill the given range.<br>• If your points don\'t line up, check your calculations — one is probably wrong.<br>• Label the line with its equation.'
      }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'When substituting negative values, be careful with signs. For <em>y</em> = 2<em>x</em> − 1 with <em>x</em> = −2:<br><em>y</em> = 2(−2) − 1 = −4 − 1 = −5, <strong>not</strong> −3.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To draw a straight-line graph: construct a table of values or find the x- and y-intercepts, plot the points, and join with a ruler. Special lines include y = c (horizontal), x = c (vertical), and y = x (diagonal). Always use at least two points and check they lie in a straight line.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Straight lines are plotted using a table of values or by finding intercepts.',
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'How many points do you need at minimum to draw a straight line?', answer: 'Two points, though three is recommended for checking.' },
      { id: 'cue-2', blockId: 'p-intercept', prompt: 'How do you find the y-intercept?', answer: 'Set x = 0 in the equation and solve for y.' },
      { id: 'cue-3', blockId: 'table-special', prompt: 'What does the equation x = 5 represent?', answer: 'A vertical line passing through x = 5, parallel to the y-axis.' },
      { id: 'cue-4', blockId: 'list-table-method', prompt: 'List the steps for drawing a graph using a table of values.', answer: 'Choose x-values, substitute to find y, plot points, draw line with ruler, label.' }
    ]
  },
  evidence: []
};
