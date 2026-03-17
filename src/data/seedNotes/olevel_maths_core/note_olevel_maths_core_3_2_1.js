export const note_olevel_maths_core_3_2_1 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Identify the gradient and y-intercept from y = mx + c, write equations of straight lines, and recognise horizontal and vertical lines.'
      }
    },
    {
      id: 'h-ymxc',
      type: 'heading',
      data: { text: 'The Equation y = mx + c', level: 2 }
    },
    {
      id: 'p-ymxc',
      type: 'paragraph',
      data: {
        text: 'Every straight line has an equation that can be written in the form <strong>y = mx + c</strong>. This is called the <strong>slope-intercept form</strong>. The two key numbers, m and c, completely determine the line\'s slope and position.'
      }
    },
    {
      id: 'callout-key-mc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'y = mx + c — What m and c Mean',
        text: '<strong>m = gradient</strong> — controls how steep the line is and which direction it slopes<br><strong>c = y-intercept</strong> — the y-value where the line crosses the y-axis (i.e. at x = 0)<br><br>Example: y = 3x − 2<br>• m = 3 (gradient is 3, line rises steeply)<br>• c = −2 (line crosses y-axis at (0, −2))'
      }
    },
    {
      id: 'table-identify',
      type: 'comparisonTable',
      data: {
        caption: 'Identifying gradient and y-intercept from equation',
        headers: ['Equation', 'Gradient (m)', 'y-intercept (c)', 'Crosses y-axis at'],
        rows: [
          ['y = 2x + 5', '2', '5', '(0, 5)'],
          ['y = −3x + 1', '−3', '1', '(0, 1)'],
          ['y = x', '1', '0', '(0, 0)'],
          ['y = −½x − 4', '−½', '−4', '(0, −4)'],
          ['y = 7', '0', '7', '(0, 7)']
        ]
      }
    },
    {
      id: 'h-write-eq',
      type: 'heading',
      data: { text: 'Writing the Equation of a Line', level: 2 }
    },
    {
      id: 'p-write-eq',
      type: 'paragraph',
      data: {
        text: 'To write the equation of a line, you need to find <strong>m</strong> (gradient) and <strong>c</strong> (y-intercept), then substitute into y = mx + c.'
      }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — From Gradient and Y-intercept',
        text: 'Write the equation of the line with gradient 4 and y-intercept (0, −3).<br><br>m = 4, c = −3<br><br>Equation: <strong>y = 4x − 3</strong>'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — From Two Points',
        text: 'Find the equation of the line through (1, 5) and (3, 11).<br><br><strong>Step 1: Find gradient</strong><br>m = (11 − 5) ÷ (3 − 1) = 6 ÷ 2 = 3<br><br><strong>Step 2: Substitute one point to find c</strong><br>Using (1, 5): 5 = 3(1) + c → 5 = 3 + c → c = 2<br><br><strong>Equation: y = 3x + 2</strong><br><br>Check with second point: y = 3(3) + 2 = 11 ✓'
      }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — From a Graph',
        text: 'A line crosses the y-axis at (0, 4) and passes through (2, 0).<br><br><strong>c = 4</strong> (read directly from y-intercept)<br><br><strong>m</strong> = (0 − 4) ÷ (2 − 0) = −4 ÷ 2 = −2<br><br><strong>Equation: y = −2x + 4</strong>'
      }
    },
    {
      id: 'h-special',
      type: 'heading',
      data: { text: 'Horizontal and Vertical Lines', level: 2 }
    },
    {
      id: 'p-special',
      type: 'paragraph',
      data: {
        text: 'Two special cases have simple equations that do not follow the y = mx + c pattern:'
      }
    },
    {
      id: 'list-special',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Horizontal lines</strong>: All points have the same y-value. Equation: <strong>y = k</strong> (e.g. y = 3 means a horizontal line 3 units above the x-axis). Gradient = 0.' },
          { text: '<strong>Vertical lines</strong>: All points have the same x-value. Equation: <strong>x = k</strong> (e.g. x = −2 means a vertical line 2 units left of the y-axis). Gradient = undefined.' }
        ]
      }
    },
    {
      id: 'svg-hv',
      type: 'svg',
      data: {
        caption: 'Horizontal line y = 3 and vertical line x = −2 on a coordinate grid',
        svg: `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <defs>
    <marker id="a4" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#555"/>
    </marker>
  </defs>
  <line x1="10" y1="90" x2="195" y2="90" stroke="#555" stroke-width="1.5" marker-end="url(#a4)"/>
  <line x1="100" y1="170" x2="100" y2="5" stroke="#555" stroke-width="1.5" marker-end="url(#a4)"/>
  <text x="197" y="94" fill="#555">x</text>
  <text x="103" y="4" fill="#555">y</text>
  <!-- Grid -->
  <g stroke="#eee" stroke-width="0.7">
    <line x1="10" y1="60" x2="195" y2="60"/>
    <line x1="10" y1="30" x2="195" y2="30"/>
    <line x1="10" y1="120" x2="195" y2="120"/>
    <line x1="10" y1="150" x2="195" y2="150"/>
    <line x1="70" y1="5" x2="70" y2="170"/>
    <line x1="130" y1="5" x2="130" y2="170"/>
    <line x1="160" y1="5" x2="160" y2="170"/>
    <line x1="40" y1="5" x2="40" y2="170"/>
  </g>
  <!-- Tick labels -->
  <text x="40" y="103" text-anchor="middle" fill="#888" font-size="10">−2</text>
  <text x="130" y="103" text-anchor="middle" fill="#888" font-size="10">1</text>
  <text x="97" y="63" text-anchor="end" fill="#888" font-size="10">3</text>
  <text x="97" y="33" text-anchor="end" fill="#888" font-size="10">4</text>
  <!-- Horizontal line y=3 → y pixel = 90 - 3*30 = 0? scale: 30px/unit, origin (100,90)
       y=3 → 90-3*30=0 ... let's use 20px/unit: y=3 → 90-3*20=30 -->
  <line x1="10" y1="30" x2="195" y2="30" stroke="#6366f1" stroke-width="2.5"/>
  <text x="145" y="25" fill="#6366f1" font-weight="bold">y = 3</text>
  <!-- Vertical line x=-2, pixel = 100-2*30=40 -->
  <line x1="40" y1="5" x2="40" y2="170" stroke="#ef4444" stroke-width="2.5"/>
  <text x="22" y="20" fill="#ef4444" font-weight="bold">x = −2</text>
</svg>`
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Rearranging Equations',
        text: 'If an equation is not in y = mx + c form, rearrange it first.<br><br>E.g. 2y = 6x − 4 → divide everything by 2 → y = 3x − 2 (m=3, c=−2)<br>E.g. y + 4 = 2x → y = 2x − 4 (m=2, c=−4)'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'In y = mx + c: m is the gradient (steepness), c is the y-intercept (where line crosses y-axis). To write an equation: find m from two points, substitute one point to find c. Horizontal lines are y = k (gradient 0); vertical lines are x = k (undefined gradient).'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'y = mx + c: m = gradient, c = y-intercept. Find m from two points, substitute to get c. Horizontal: y = k. Vertical: x = k.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-key-mc',
        prompt: 'In the equation y = mx + c, what do m and c represent?',
        answer: 'm = gradient (steepness). c = y-intercept (where the line crosses the y-axis).'
      },
      {
        id: 'cue-2',
        blockId: 'table-identify',
        prompt: 'What are the gradient and y-intercept of the line y = −3x + 1?',
        answer: 'Gradient m = −3, y-intercept c = 1, crossing the y-axis at (0, 1).'
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked2',
        prompt: 'What are the steps for finding the equation of a line through two points?',
        answer: 'Step 1: Find gradient m using (y₂−y₁)÷(x₂−x₁). Step 2: Substitute one point into y=mx+c to solve for c. Step 3: Write the equation.'
      },
      {
        id: 'cue-4',
        blockId: 'list-special',
        prompt: 'What is the equation of a horizontal line passing through (0, −5)?',
        answer: 'y = −5. All horizontal lines have the form y = k, where k is the y-value.'
      },
      {
        id: 'cue-5',
        blockId: 'callout-worked2',
        prompt: 'Find the equation of the line through (1, 5) and (3, 11).',
        answer: 'm = (11−5)÷(3−1) = 3. Using (1,5): c = 5−3 = 2. Equation: y = 3x + 2.'
      }
    ]
  },
  evidence: []
};
