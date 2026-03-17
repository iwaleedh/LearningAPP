export const note_olevel_maths_extended_3_5_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/finding-inequalities-from-regions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Determine the inequalities that define a given shaded region on a coordinate grid.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Finding Inequalities from Regions', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Given a shaded region on a graph, you need to identify the <strong>equations of the boundary lines</strong> and determine the correct <strong>inequality sign</strong> for each. This is the reverse of representing inequalities as regions.' }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Step-by-Step Method', level: 2 }
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Identify each boundary line</strong> — find its equation (using gradient and y-intercept, or intercepts)' },
          { text: '<strong>Check the line type:</strong> solid = ≤ or ≥; dashed = < or >' },
          { text: '<strong>Determine the inequality direction:</strong> pick a test point in the shaded region and check which inequality sign makes it true' },
          { text: '<strong>Write all inequalities</strong> for the complete region' }
        ]
      }
    },
    {
      id: 'h-finding-equations',
      type: 'heading',
      data: { text: 'Finding the Equation of a Boundary Line', level: 2 }
    },
    {
      id: 'list-line-types',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Vertical line:</strong> <em>x</em> = <em>a</em> (read the x-intercept)' },
          { text: '<strong>Horizontal line:</strong> <em>y</em> = <em>b</em> (read the y-intercept)' },
          { text: '<strong>Diagonal line:</strong> find the gradient and y-intercept &rarr; <em>y</em> = <em>mx</em> + <em>c</em>' }
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'A region is bounded by:<br>• A solid horizontal line at <em>y</em> = 1 (region is above)<br>• A solid vertical line at <em>x</em> = 2 (region is to the left)<br>• A dashed line through (0, 6) and (6, 0) (region is below)<br><br><strong>Step 1:</strong> Equations are <em>y</em> = 1, <em>x</em> = 2, and <em>y</em> = −<em>x</em> + 6<br><br><strong>Step 2:</strong> Solid lines &rarr; ≤ or ≥; dashed &rarr; < or ><br><br><strong>Step 3:</strong> Test point (1, 3) is in the region:<br>• <em>y</em> ≥ 1 &rarr; 3 ≥ 1 ✓<br>• <em>x</em> ≤ 2 &rarr; 1 ≤ 2 ✓<br>• <em>y</em> < −<em>x</em> + 6 &rarr; 3 < 5 ✓<br><br><strong>Inequalities: <em>y</em> ≥ 1, <em>x</em> ≤ 2, <em>y</em> < −<em>x</em> + 6</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Finding the Gradient',
        text: 'A diagonal boundary line passes through (0, −1) and (2, 3). Find its equation.<br><br>Gradient: <em>m</em> = <span class="nb-frac"><span class="nb-num">3 − (−1)</span><span class="nb-den">2 − 0</span></span> = <span class="nb-frac"><span class="nb-num">4</span><span class="nb-den">2</span></span> = 2<br><br>y-intercept: <em>c</em> = −1<br><br>Equation: <em>y</em> = 2<em>x</em> − 1<br><br>If the shaded region is above this solid line: <strong><em>y</em> ≥ 2<em>x</em> − 1</strong>'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• Always <strong>test your answer</strong> by substituting a point clearly inside the shaded region.<br>• If the shading convention is "shade the unwanted region", the required region is the <strong>unshaded</strong> part.<br>• Double-check solid vs dashed lines — this determines ≤/≥ vs </>'
      }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Getting the inequality direction wrong for vertical lines: for <em>x</em> = 3, the region to the <strong>right</strong> is <em>x</em> > 3 (or ≥ 3), and the region to the <strong>left</strong> is <em>x</em> < 3 (or ≤ 3).'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To find inequalities from a region: identify each boundary line equation, note whether lines are solid (≤/≥) or dashed (</>), and use a test point in the shaded region to determine the direction of each inequality. Test your final answer by checking a point inside the region.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Finding inequalities from regions reverses the graphing process — identify lines, check solid/dashed, test a point.',
    cues: [
      { id: 'cue-1', blockId: 'list-method', prompt: 'What are the steps to find inequalities from a shaded region?', answer: 'Identify boundary line equations, check solid/dashed, use a test point to determine inequality direction, write all inequalities.' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'How do you decide between ≤ and < for a boundary?', answer: 'Solid line means ≤ or ≥ (boundary included). Dashed line means < or > (boundary excluded).' },
      { id: 'cue-3', blockId: 'list-line-types', prompt: 'What is the equation of a horizontal boundary line at height 4?', answer: 'y = 4' },
      { id: 'cue-4', blockId: 'callout-tip-1', prompt: 'How do you verify your inequalities are correct?', answer: 'Substitute a point clearly inside the shaded/required region — all inequalities should be satisfied.' }
    ]
  },
  evidence: []
};
