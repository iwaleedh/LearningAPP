export const note_olevel_maths_extended_3_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/reciprocal-graphs.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Recognise, plot and interpret reciprocal graphs of the form y = a/x.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Reciprocal Graphs', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>reciprocal function</strong> has the form <em>y</em> = <span class="nb-frac"><span class="nb-num"><em>a</em></span><span class="nb-den"><em>x</em></span></span> where <em>a</em> is a constant and <em>x</em> ≠ 0. The graph consists of <strong>two separate curves</strong> called a <strong>hyperbola</strong>.' }
    },
    {
      id: 'callout-key-shape',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Shape of Reciprocal Graphs',
        text: '• If <strong><em>a</em> > 0</strong>: curves appear in the <strong>1st and 3rd quadrants</strong><br>• If <strong><em>a</em> < 0</strong>: curves appear in the <strong>2nd and 4th quadrants</strong><br><br>The curves <strong>never touch or cross</strong> either axis — the x-axis and y-axis are <strong>asymptotes</strong>.'
      }
    },
    {
      id: 'h-asymptotes',
      type: 'heading',
      data: { text: 'Asymptotes', level: 2 }
    },
    {
      id: 'p-asymptotes',
      type: 'paragraph',
      data: { text: 'An <strong>asymptote</strong> is a line that a curve approaches but never reaches.<br>For <em>y</em> = <span class="nb-frac"><span class="nb-num"><em>a</em></span><span class="nb-den"><em>x</em></span></span>:<br>• The <strong>x-axis</strong> (<em>y</em> = 0) is a horizontal asymptote — as <em>x</em> &rarr; ±∞, <em>y</em> &rarr; 0<br>• The <strong>y-axis</strong> (<em>x</em> = 0) is a vertical asymptote — <em>y</em> is undefined when <em>x</em> = 0' }
    },
    {
      id: 'h-table',
      type: 'heading',
      data: { text: 'Example: y = 6/x', level: 2 }
    },
    {
      id: 'table-reciprocal',
      type: 'comparisonTable',
      data: {
        caption: 'Table of values for y = 6/x',
        headers: ['x', '−6', '−3', '−2', '−1', '1', '2', '3', '6'],
        rows: [
          ['y', '−1', '−2', '−3', '−6', '6', '3', '2', '1']
        ]
      }
    },
    {
      id: 'p-table-note',
      type: 'paragraph',
      data: { text: 'Notice: you <strong>cannot</strong> include <em>x</em> = 0 in the table. As <em>x</em> gets closer to 0, |<em>y</em>| gets very large. The two branches of the curve are mirror images of each other in the origin.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Plotting y = −4/x',
        text: '<table style="border-collapse:collapse;text-align:center"><tr><td style="padding:4px 10px;border:1px solid #999"><em>x</em></td><td style="padding:4px 10px;border:1px solid #999">−4</td><td style="padding:4px 10px;border:1px solid #999">−2</td><td style="padding:4px 10px;border:1px solid #999">−1</td><td style="padding:4px 10px;border:1px solid #999">1</td><td style="padding:4px 10px;border:1px solid #999">2</td><td style="padding:4px 10px;border:1px solid #999">4</td></tr><tr><td style="padding:4px 10px;border:1px solid #999"><em>y</em></td><td style="padding:4px 10px;border:1px solid #999">1</td><td style="padding:4px 10px;border:1px solid #999">2</td><td style="padding:4px 10px;border:1px solid #999">4</td><td style="padding:4px 10px;border:1px solid #999">−4</td><td style="padding:4px 10px;border:1px solid #999">−2</td><td style="padding:4px 10px;border:1px solid #999">−1</td></tr></table><br>Since <em>a</em> = −4 < 0, the branches are in the <strong>2nd and 4th quadrants</strong>.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When sketching reciprocal graphs:<br>• Draw dashed lines for the asymptotes (the axes)<br>• The curve should get <strong>very close</strong> to the axes but never touch them<br>• Mark a few key points for accuracy'
      }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Never draw the two branches connected through the origin — there is a <strong>gap</strong> at <em>x</em> = 0. The function is undefined there.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Reciprocal graphs y = a/x form a hyperbola with two separate branches. The x-axis and y-axis are asymptotes. If a > 0, branches are in quadrants 1 and 3; if a < 0, in quadrants 2 and 4. The curve never touches or crosses either axis.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Reciprocal graphs y = a/x form hyperbolas with asymptotes at both axes.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-shape', prompt: 'In which quadrants does y = a/x appear when a > 0?', answer: '1st and 3rd quadrants.' },
      { id: 'cue-2', blockId: 'p-asymptotes', prompt: 'What are the asymptotes of y = a/x?', answer: 'The x-axis (y = 0) and the y-axis (x = 0).' },
      { id: 'cue-3', blockId: 'p-asymptotes', prompt: 'What is an asymptote?', answer: 'A line that a curve approaches but never reaches or crosses.' },
      { id: 'cue-4', blockId: 'callout-warning-1', prompt: 'Why is there a gap at x = 0 in a reciprocal graph?', answer: 'Because division by zero is undefined — the function has no value at x = 0.' }
    ]
  },
  evidence: []
};
