export const note_olevel_maths_extended_3_6_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/using-calculators-to-sketch-graphs.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use a graphing calculator or software to sketch and explore graphs of various functions.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Using Calculators to Sketch Graphs', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Graphing calculators (e.g. Casio fx-CG50, TI-84) and software (e.g. Desmos, GeoGebra) allow you to quickly plot and explore functions. While these tools are powerful, you must still understand the underlying mathematics.' }
    },
    {
      id: 'h-entering',
      type: 'heading',
      data: { text: 'Entering Functions', level: 2 }
    },
    {
      id: 'list-entering',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Access the graph/function mode on your calculator' },
          { text: 'Enter the function using the correct syntax (e.g. <code>x^2 - 3x + 2</code>)' },
          { text: 'Use the <strong>×</strong> button for multiplication — the calculator may not infer it' },
          { text: 'Use brackets carefully, especially for fractions and negative powers' },
          { text: 'Press <strong>Graph</strong> or <strong>Draw</strong> to display' }
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
      data: { text: 'The <strong>viewing window</strong> determines which part of the graph you see. You need to set appropriate ranges for <em>x</em> and <em>y</em> so that all important features (intercepts, turning points, asymptotes) are visible.' }
    },
    {
      id: 'table-window',
      type: 'comparisonTable',
      data: {
        caption: 'Typical window settings',
        headers: ['Setting', 'Meaning', 'Default suggestion'],
        rows: [
          ['Xmin, Xmax', 'Horizontal range', '−10 to 10'],
          ['Ymin, Ymax', 'Vertical range', '−10 to 10'],
          ['Xscl', 'x-axis tick spacing', '1 or 2'],
          ['Yscl', 'y-axis tick spacing', '1 or 2']
        ]
      }
    },
    {
      id: 'callout-tip-window',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Choosing a Good Window',
        text: '• If the graph looks flat or you can\'t see key features, <strong>zoom out</strong> by increasing the range.<br>• If the graph is too small, <strong>zoom in</strong> by decreasing the range.<br>• For reciprocal or exponential graphs, you may need an <strong>asymmetric</strong> window.<br>• Most calculators have a "Zoom to fit" or "Auto" option.'
      }
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Types of Graphs to Sketch', level: 2 }
    },
    {
      id: 'table-types',
      type: 'comparisonTable',
      data: {
        caption: 'Functions to practise plotting',
        headers: ['Type', 'Example', 'Key features to look for'],
        rows: [
          ['Linear', 'y = 2x + 3', 'Gradient, y-intercept'],
          ['Quadratic', 'y = x² − 4x + 3', 'Turning point, roots, symmetry'],
          ['Cubic', 'y = x³ − 3x', 'Turning points, inflection, roots'],
          ['Reciprocal', 'y = 6/x', 'Asymptotes, branches'],
          ['Exponential', 'y = 2ˣ', 'Asymptote, growth/decay']
        ]
      }
    },
    {
      id: 'h-features',
      type: 'heading',
      data: { text: 'Using Calculator Features', level: 2 }
    },
    {
      id: 'list-features',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Trace:</strong> move along the curve and read coordinates at each point' },
          { text: '<strong>Table:</strong> view a table of x- and y-values for the function' },
          { text: '<strong>Zoom:</strong> zoom in/out to see more or less detail' },
          { text: '<strong>Multiple graphs:</strong> plot two or more functions on the same axes to compare' }
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Use a calculator to sketch <em>y</em> = <em>x</em>² − 5<em>x</em> + 6.<br><br>1. Enter: <code>x^2 - 5x + 6</code><br>2. Set window: Xmin = −1, Xmax = 6, Ymin = −2, Ymax = 8<br>3. Graph shows a ∪-shaped parabola<br>4. Use Trace to identify: roots at <em>x</em> = 2 and <em>x</em> = 3, turning point at (2.5, −0.25), y-intercept at (0, 6)'
      }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Important Note',
        text: 'In exams, you may be asked to <strong>sketch by hand</strong> after exploring on a calculator. Make sure you can draw smooth curves, label key features, and show your working — a calculator graph alone won\'t earn full marks.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Graphing calculators let you quickly sketch and explore functions. Enter the equation, set an appropriate viewing window, and use features like Trace and Table to identify key features. Always set the window so all important features are visible. Be ready to sketch by hand in exams.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Graphing calculators help visualise functions and identify key features quickly.',
    cues: [
      { id: 'cue-1', blockId: 'p-window', prompt: 'What is the "viewing window" on a graphing calculator?', answer: 'The range of x and y values displayed on screen — it determines which part of the graph you see.' },
      { id: 'cue-2', blockId: 'list-features', prompt: 'What does the Trace feature do?', answer: 'It lets you move along the curve and read the coordinates at each point.' },
      { id: 'cue-3', blockId: 'callout-tip-window', prompt: 'What should you do if the graph looks too flat or features are missing?', answer: 'Zoom out by increasing the viewing range.' },
      { id: 'cue-4', blockId: 'callout-warning-1', prompt: 'Can you just show a calculator graph in an exam?', answer: 'No — you must sketch by hand, label key features, and show working for full marks.' }
    ]
  },
  evidence: []
};
