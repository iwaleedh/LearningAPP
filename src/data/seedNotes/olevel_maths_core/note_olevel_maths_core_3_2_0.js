export const note_olevel_maths_core_3_2_0 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Draw straight line graphs by constructing a table of values, plotting points accurately, and connecting them with a ruled line. Identify x- and y-intercepts.'
      }
    },
    {
      id: 'h-table',
      type: 'heading',
      data: { text: 'Using a Table of Values', level: 2 }
    },
    {
      id: 'p-table',
      type: 'paragraph',
      data: {
        text: 'To draw any straight-line graph, the method is: <strong>(1) Choose x-values → (2) Calculate y-values → (3) Plot points → (4) Draw the line</strong>. A table of values organises this process clearly. You only need <em>two</em> points to define a straight line, but plotting three helps you spot mistakes.'
      }
    },
    {
      id: 'h-intercepts',
      type: 'heading',
      data: { text: 'X-intercept and Y-intercept', level: 2 }
    },
    {
      id: 'list-intercepts',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>y-intercept</strong>: where the line crosses the y-axis. Set x = 0 and solve for y.' },
          { text: '<strong>x-intercept</strong>: where the line crosses the x-axis. Set y = 0 and solve for x.' }
        ]
      }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Drawing y = 2x + 1',
        text: '<strong>Step 1: Choose x-values</strong><br>Pick a range, e.g. x = −2, −1, 0, 1, 2<br><br><strong>Step 2: Calculate y for each x</strong><br>When x = −2: y = 2(−2) + 1 = −3<br>When x = −1: y = 2(−1) + 1 = −1<br>When x = 0: y = 2(0) + 1 = 1<br>When x = 1: y = 2(1) + 1 = 3<br>When x = 2: y = 2(2) + 1 = 5<br><br><strong>Step 3: Table of values</strong><br><table style="border-collapse:collapse;margin:4px 0"><tr style="background:#f0f0f8"><td style="padding:3px 8px;border:1px solid #ccc"><em>x</em></td><td style="padding:3px 8px;border:1px solid #ccc">−2</td><td style="padding:3px 8px;border:1px solid #ccc">−1</td><td style="padding:3px 8px;border:1px solid #ccc">0</td><td style="padding:3px 8px;border:1px solid #ccc">1</td><td style="padding:3px 8px;border:1px solid #ccc">2</td></tr><tr><td style="padding:3px 8px;border:1px solid #ccc"><em>y</em></td><td style="padding:3px 8px;border:1px solid #ccc">−3</td><td style="padding:3px 8px;border:1px solid #ccc">−1</td><td style="padding:3px 8px;border:1px solid #ccc">1</td><td style="padding:3px 8px;border:1px solid #ccc">3</td><td style="padding:3px 8px;border:1px solid #ccc">5</td></tr></table><br><strong>Step 4: Plot points and draw line</strong><br>Plot (−2,−3), (−1,−1), (0,1), (1,3), (2,5). Draw a straight line through all points using a ruler.'
      }
    },
    {
      id: 'svg-line1',
      type: 'svg',
      data: {
        caption: 'Graph of y = 2x + 1, showing intercepts and plotted points',
        svg: `<svg viewBox="0 0 220 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <defs>
    <marker id="a3" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#555"/>
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="15" y1="120" x2="210" y2="120" stroke="#555" stroke-width="1.5" marker-end="url(#a3)"/>
  <line x1="110" y1="215" x2="110" y2="10" stroke="#555" stroke-width="1.5" marker-end="url(#a3)"/>
  <text x="212" y="124" fill="#555">x</text>
  <text x="113" y="8" fill="#555">y</text>
  <!-- Grid -->
  <g stroke="#eee" stroke-width="0.7">
    <line x1="15" y1="80" x2="210" y2="80"/>
    <line x1="15" y1="40" x2="210" y2="40"/>
    <line x1="15" y1="160" x2="210" y2="160"/>
    <line x1="15" y1="200" x2="210" y2="200"/>
    <line x1="70" y1="10" x2="70" y2="215"/>
    <line x1="150" y1="10" x2="150" y2="215"/>
    <line x1="190" y1="10" x2="190" y2="215"/>
    <line x1="30" y1="10" x2="30" y2="215"/>
  </g>
  <!-- Axis ticks and numbers -->
  <text x="70" y="133" text-anchor="middle" fill="#888" font-size="10">−2</text>
  <text x="30" y="133" text-anchor="middle" fill="#888" font-size="10">−3</text>
  <text x="150" y="133" text-anchor="middle" fill="#888" font-size="10">1</text>
  <text x="190" y="133" text-anchor="middle" fill="#888" font-size="10">2</text>
  <text x="107" y="83" text-anchor="end" fill="#888" font-size="10">2</text>
  <text x="107" y="43" text-anchor="end" fill="#888" font-size="10">4</text>
  <text x="107" y="163" text-anchor="end" fill="#888" font-size="10">−2</text>
  <text x="107" y="203" text-anchor="end" fill="#888" font-size="10">−4</text>
  <!-- y = 2x + 1: scale: 40px/unit, origin at (110, 120)
       x=-3 → (110-120,120-(2*-3+1)*20) = (-10, 220) clipped
       x=-2 → (30, 200)   y=−3
       x=-1 → (70, 160)   y=−1
       x=0  → (110, 100)  y=1
       x=1  → (150, 60)   y=3
       x=2  → (190, 20)   y=5 -->
  <line x1="30" y1="200" x2="195" y2="8" stroke="#3b82f6" stroke-width="2.5"/>
  <!-- Plotted points -->
  <circle cx="30" cy="200" r="4" fill="#3b82f6"/>
  <circle cx="70" cy="160" r="4" fill="#3b82f6"/>
  <circle cx="110" cy="100" r="4" fill="#3b82f6"/>
  <circle cx="150" cy="60" r="4" fill="#3b82f6"/>
  <!-- y-intercept label -->
  <text x="115" y="98" fill="#ef4444" font-size="10">(0,1)</text>
  <!-- x-intercept: y=0 → 0=2x+1 → x=-0.5 → pixel: 110-0.5*40=90, y=120 -->
  <circle cx="90" cy="120" r="4" fill="#10b981"/>
  <text x="85" y="134" fill="#10b981" font-size="10">(−½, 0)</text>
  <!-- Equation label -->
  <text x="155" y="48" fill="#3b82f6" font-weight="bold">y = 2x+1</text>
</svg>`
      }
    },
    {
      id: 'h-ex2',
      type: 'heading',
      data: { text: 'A Second Example', level: 2 }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Drawing y = −x + 3',
        text: '<strong>Table of values:</strong><br><table style="border-collapse:collapse;margin:4px 0"><tr style="background:#f0fff4"><td style="padding:3px 8px;border:1px solid #ccc"><em>x</em></td><td style="padding:3px 8px;border:1px solid #ccc">−1</td><td style="padding:3px 8px;border:1px solid #ccc">0</td><td style="padding:3px 8px;border:1px solid #ccc">1</td><td style="padding:3px 8px;border:1px solid #ccc">2</td><td style="padding:3px 8px;border:1px solid #ccc">3</td></tr><tr><td style="padding:3px 8px;border:1px solid #ccc"><em>y</em></td><td style="padding:3px 8px;border:1px solid #ccc">4</td><td style="padding:3px 8px;border:1px solid #ccc">3</td><td style="padding:3px 8px;border:1px solid #ccc">2</td><td style="padding:3px 8px;border:1px solid #ccc">1</td><td style="padding:3px 8px;border:1px solid #ccc">0</td></tr></table><br>y-intercept: (0, 3). x-intercept: set y = 0 → 0 = −x + 3 → x = 3, so (3, 0).<br>Gradient is −1, so the line falls from left to right.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips — Drawing Lines',
        text: '• Use a <strong>ruler</strong> and sharp pencil — lines must be straight.<br>• If one point looks out of place when plotting, <strong>recheck its calculation</strong> before drawing the line.<br>• Extend your line to the edges of the grid (unless the question limits the domain).<br>• Always <strong>label the line</strong> with its equation.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Calculating y values incorrectly — show each substitution step.<br>• Plotting (y, x) instead of (x, y) — remember x is horizontal.<br>• Drawing a curve instead of a straight line for a linear equation.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Draw straight-line graphs by: choosing x-values, substituting into the equation to find y-values, plotting (x, y) points, and joining them with a ruled straight line. The y-intercept is found by setting x = 0; the x-intercept by setting y = 0.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Table of values → plot points → ruled straight line. y-intercept: set x=0. x-intercept: set y=0.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-table',
        prompt: 'What are the four steps for drawing a straight-line graph?',
        answer: '(1) Choose x-values, (2) calculate y-values, (3) plot (x,y) points, (4) draw a straight line through them with a ruler.'
      },
      {
        id: 'cue-2',
        blockId: 'list-intercepts',
        prompt: 'How do you find the x-intercept of a straight-line graph?',
        answer: 'Set y = 0 in the equation and solve for x.'
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked1',
        prompt: 'Complete the table of values for y = 2x + 1 when x = 0 and x = 2.',
        answer: 'At x = 0: y = 1. At x = 2: y = 5.'
      },
      {
        id: 'cue-4',
        blockId: 'callout-worked2',
        prompt: 'What is the y-intercept of y = −x + 3?',
        answer: '(0, 3) — substitute x = 0 to get y = 3.'
      },
      {
        id: 'cue-5',
        blockId: 'callout-tip',
        prompt: 'How many points do you technically need to draw a straight line? Why plot more?',
        answer: 'Two points technically define a straight line. Plot three to check — if the third point does not lie on your line, one calculation has an error.'
      }
    ]
  },
  evidence: []
};
