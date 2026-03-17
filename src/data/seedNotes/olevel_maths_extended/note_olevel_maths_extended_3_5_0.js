export const note_olevel_maths_extended_3_5_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/representing-inequalities-as-regions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Represent linear inequalities graphically by shading the required region on a coordinate grid.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Representing Inequalities as Regions', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A linear inequality such as <em>y</em> < 2<em>x</em> + 1 defines a <strong>region</strong> on the coordinate plane. Instead of a single line, the solution set covers an entire area on one side of the boundary line.' }
    },
    {
      id: 'h-boundary',
      type: 'heading',
      data: { text: 'Step 1: Draw the Boundary Line', level: 2 }
    },
    {
      id: 'callout-key-lines',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Solid vs Dashed Lines',
        text: '• <strong>Solid line</strong>: use for ≤ or ≥ (the line is <strong>included</strong> in the region)<br>• <strong>Dashed line</strong>: use for < or > (the line is <strong>not included</strong> — strict inequality)<br><br>Draw the line by treating the inequality as an equation (e.g. <em>y</em> = 2<em>x</em> + 1).'
      }
    },
    {
      id: 'h-shading',
      type: 'heading',
      data: { text: 'Step 2: Shade the Correct Region', level: 2 }
    },
    {
      id: 'list-shading',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Pick a <strong>test point</strong> not on the line (use (0, 0) if possible)' },
          { text: 'Substitute the test point into the inequality' },
          { text: 'If the inequality is <strong>true</strong>: shade the side <strong>containing</strong> the test point' },
          { text: 'If the inequality is <strong>false</strong>: shade the <strong>opposite</strong> side' }
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Show the region satisfying <em>y</em> ≤ 2<em>x</em> + 1 on a graph.<br><br><strong>Step 1:</strong> Draw the line <em>y</em> = 2<em>x</em> + 1 as a <strong>solid line</strong> (≤ includes the boundary).<br><br><strong>Step 2:</strong> Test (0, 0): Is 0 ≤ 2(0) + 1? &rarr; 0 ≤ 1 ✓ TRUE<br><br>So shade the region <strong>containing (0, 0)</strong> — the region below the line.'
      }
    },
    {
      id: 'h-multiple',
      type: 'heading',
      data: { text: 'Multiple Inequalities', level: 2 }
    },
    {
      id: 'p-multiple',
      type: 'paragraph',
      data: { text: 'When given several inequalities, the <strong>feasible region</strong> is where all regions <strong>overlap</strong>. Draw each boundary line, determine which side to shade for each, and identify the common area.' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Multiple Inequalities',
        text: 'Shade the region satisfying all three:<br>• <em>x</em> ≥ 1<br>• <em>y</em> ≥ 0<br>• <em>x</em> + <em>y</em> ≤ 5<br><br>Draw: <em>x</em> = 1 (solid vertical), <em>y</em> = 0 (x-axis, solid), <em>x</em> + <em>y</em> = 5 (solid diagonal).<br><br>The feasible region is the triangle with vertices (1, 0), (5, 0), and (1, 4).'
      }
    },
    {
      id: 'table-common',
      type: 'comparisonTable',
      data: {
        caption: 'Common inequality regions',
        headers: ['Inequality', 'Region'],
        rows: [
          ['y > mx + c', 'Above the line'],
          ['y < mx + c', 'Below the line'],
          ['x > a', 'Right of the vertical line x = a'],
          ['x < a', 'Left of the vertical line x = a']
        ]
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Shading Convention',
        text: 'Some exam papers ask you to shade the <strong>unwanted</strong> region (leaving the wanted region clear). Read the question carefully! CIE papers typically say "shade the unwanted region" — the feasible region is the <strong>unshaded</strong> part.'
      }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Don\'t forget to use a <strong>dashed line</strong> for strict inequalities (< or >). A solid line when the question uses < or > will cost you marks.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To represent inequalities graphically: draw the boundary line (solid for ≤/≥, dashed for </>) and shade the correct region using a test point. For multiple inequalities, the feasible region is the overlap. Always check whether to shade wanted or unwanted regions.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Inequalities are shown as shaded regions bounded by solid or dashed lines.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-lines', prompt: 'When do you use a dashed boundary line?', answer: 'For strict inequalities (< or >) where the line itself is NOT included.' },
      { id: 'cue-2', blockId: 'list-shading', prompt: 'How do you determine which side of the line to shade?', answer: 'Use a test point (e.g. (0,0)): if it satisfies the inequality, shade that side.' },
      { id: 'cue-3', blockId: 'table-common', prompt: 'Which region does y > mx + c represent?', answer: 'The region above the line.' },
      { id: 'cue-4', blockId: 'callout-tip-1', prompt: 'What shading convention do CIE papers typically use?', answer: 'Shade the unwanted region, leaving the feasible region clear/unshaded.' },
      { id: 'cue-5', blockId: 'p-multiple', prompt: 'What is the "feasible region" when given multiple inequalities?', answer: 'The area where all individual inequality regions overlap.' }
    ]
  },
  evidence: []
};
