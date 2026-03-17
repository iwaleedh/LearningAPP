export const note_olevel_maths_core_3_3_3 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Use graphs to solve equations by finding x-intercepts of f(x) = 0 or intersection points of f(x) = g(x), and verify solutions algebraically.'
      }
    },
    {
      id: 'h-graphical',
      type: 'heading',
      data: { text: 'Solving Equations Graphically', level: 2 }
    },
    {
      id: 'p-graphical',
      type: 'paragraph',
      data: {
        text: 'Any equation can be thought of as a graph-reading problem. If the graph of y = f(x) is drawn, you can read off the value(s) of x that make f(x) equal to any target value. This is particularly useful for equations that are difficult to solve by algebra alone.'
      }
    },
    {
      id: 'h-zeros',
      type: 'heading',
      data: { text: 'Solving f(x) = 0 — Finding x-Intercepts', level: 2 }
    },
    {
      id: 'p-zeros',
      type: 'paragraph',
      data: {
        text: 'The <strong>solutions</strong> (roots) of f(x) = 0 are the <strong>x-coordinates</strong> where the graph of y = f(x) crosses the x-axis. These are called the <em>zeros</em> or <em>roots</em> of the function.'
      }
    },
    {
      id: 'callout-key-roots',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Roots from a Graph',
        text: 'To solve f(x) = 0 graphically:<br>1. Draw the graph y = f(x)<br>2. Find where the graph <strong>crosses the x-axis</strong> (where y = 0)<br>3. Read the x-coordinates — these are the solutions<br><br>A quadratic graph can have 0, 1, or 2 roots (crosses, touches, or misses the x-axis).'
      }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Solving x² − 3x + 1 = 0 Graphically',
        text: '<strong>Step 1:</strong> Draw y = x² − 3x + 1<br><br>Build a table of values:<br><table style="border-collapse:collapse;margin:4px 0"><tr style="background:#f5f5ff"><td style="padding:3px 8px;border:1px solid #ccc"><em>x</em></td><td style="padding:3px 8px;border:1px solid #ccc">−1</td><td style="padding:3px 8px;border:1px solid #ccc">0</td><td style="padding:3px 8px;border:1px solid #ccc">1</td><td style="padding:3px 8px;border:1px solid #ccc">2</td><td style="padding:3px 8px;border:1px solid #ccc">3</td><td style="padding:3px 8px;border:1px solid #ccc">4</td></tr><tr><td style="padding:3px 8px;border:1px solid #ccc"><em>y</em></td><td style="padding:3px 8px;border:1px solid #ccc">5</td><td style="padding:3px 8px;border:1px solid #ccc">1</td><td style="padding:3px 8px;border:1px solid #ccc">−1</td><td style="padding:3px 8px;border:1px solid #ccc">−1</td><td style="padding:3px 8px;border:1px solid #ccc">1</td><td style="padding:3px 8px;border:1px solid #ccc">5</td></tr></table><br><strong>Step 2:</strong> Plot and draw the parabola.<br><strong>Step 3:</strong> The graph crosses the x-axis at approximately x ≈ <strong>0.38</strong> and x ≈ <strong>2.62</strong>.<br><br>(Exact answer using quadratic formula: x = (3 ± √5)/2 ≈ 0.382 or 2.618)'
      }
    },
    {
      id: 'svg-solve',
      type: 'svg',
      data: {
        caption: 'Graph of y = x² − 3x + 1 crossing the x-axis at approximately x ≈ 0.38 and x ≈ 2.62',
        svg: `<svg viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <defs>
    <marker id="a6" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#555"/>
    </marker>
  </defs>
  <line x1="10" y1="120" x2="230" y2="120" stroke="#555" stroke-width="1.5" marker-end="url(#a6)"/>
  <line x1="50" y1="205" x2="50" y2="10" stroke="#555" stroke-width="1.5" marker-end="url(#a6)"/>
  <text x="232" y="124" fill="#555">x</text>
  <text x="53" y="8" fill="#555">y</text>
  <!-- Grid (light) -->
  <g stroke="#eee" stroke-width="0.7">
    <line x1="10" y1="90" x2="230" y2="90"/>
    <line x1="10" y1="60" x2="230" y2="60"/>
    <line x1="10" y1="30" x2="230" y2="30"/>
    <line x1="10" y1="150" x2="230" y2="150"/>
    <line x1="10" y1="180" x2="230" y2="180"/>
    <line x1="80" y1="10" x2="80" y2="205"/>
    <line x1="110" y1="10" x2="110" y2="205"/>
    <line x1="140" y1="10" x2="140" y2="205"/>
    <line x1="170" y1="10" x2="170" y2="205"/>
    <line x1="200" y1="10" x2="200" y2="205"/>
  </g>
  <!-- Labels -->
  <text x="80" y="133" text-anchor="middle" fill="#888" font-size="9">1</text>
  <text x="110" y="133" text-anchor="middle" fill="#888" font-size="9">2</text>
  <text x="140" y="133" text-anchor="middle" fill="#888" font-size="9">3</text>
  <text x="170" y="133" text-anchor="middle" fill="#888" font-size="9">4</text>
  <text x="46" y="93" text-anchor="end" fill="#888" font-size="9">1</text>
  <text x="46" y="63" text-anchor="end" fill="#888" font-size="9">2</text>
  <text x="46" y="33" text-anchor="end" fill="#888" font-size="9">3</text>
  <text x="46" y="153" text-anchor="end" fill="#888" font-size="9">−1</text>
  <!-- Parabola y=x²-3x+1: scale 30px/unit, origin x=50, y=120
       x=-1→20,y=5→(20,120-150=-30 clipped); x=0→50,y=1→(50,90); x=1→80,y=-1→(80,150);
       x=1.5→95, y=-1.25→(95,157.5); x=2→110,y=-1→(110,150); x=3→140,y=1→(140,90);
       x=4→170,y=5→(170,120-150=-30 clipped) -->
  <path d="M20,30 C30,40 45,80 50,90 C60,110 70,145 80,150 C95,158 110,150 125,140 C130,134 140,90 155,50 C165,25 175,12 185,8" stroke="#6366f1" stroke-width="2.5" fill="none"/>
  <!-- x-intercept markers -->
  <circle cx="61" cy="120" r="5" fill="#ef4444"/>
  <text x="47" y="116" fill="#ef4444" font-size="9" font-weight="bold">0.38</text>
  <circle cx="129" cy="120" r="5" fill="#ef4444"/>
  <text x="121" y="114" fill="#ef4444" font-size="9" font-weight="bold">2.62</text>
  <!-- Equation label -->
  <text x="165" y="35" fill="#6366f1" font-weight="bold" font-size="10">y=x²−3x+1</text>
</svg>`
      }
    },
    {
      id: 'h-intersect',
      type: 'heading',
      data: { text: 'Solving f(x) = g(x) — Finding Intersections', level: 2 }
    },
    {
      id: 'p-intersect',
      type: 'paragraph',
      data: {
        text: 'To solve f(x) = g(x) graphically, draw <em>both</em> graphs on the same axes. The solutions are the <strong>x-coordinates of the intersection points</strong> — where the two curves cross.'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Solving x² = 2x + 3',
        text: 'Rewrite as x² − 2x − 3 = 0, OR draw y = x² and y = 2x + 3 on the same axes.<br><br>Where they intersect, x² = 2x + 3.<br><br>Build tables for both:<br>y = x²: at x=−1: y=1; x=0: y=0; x=3: y=9; x=4: y=16<br>y = 2x+3: at x=−1: y=1; x=0: y=3; x=3: y=9; x=4: y=11<br><br>Both equal 1 when x=−1, and both equal 9 when x=3.<br><br>∴ The intersections are at x = <strong>−1</strong> and x = <strong>3</strong>.<br><br>Verify: at x=−1: x² = 1 and 2x+3 = 1 ✓; at x=3: x²=9 and 2x+3=9 ✓'
      }
    },
    {
      id: 'h-verify',
      type: 'heading',
      data: { text: 'Verifying Solutions', level: 2 }
    },
    {
      id: 'p-verify',
      type: 'paragraph',
      data: {
        text: 'Always check graphical solutions by substituting back into the original equation. Because graphical readings may be approximate (especially for non-integer solutions), state answers to the degree of accuracy required — typically 1 or 2 decimal places.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• If a question says "use your graph to solve", <strong>draw and read from the graph</strong>, don\'t just use algebra.<br>• Draw dashed drop lines from intersection points down to the x-axis and across to the y-axis to show how you read the values.<br>• Write solutions clearly: "x ≈ 0.4" or "x = 3 (from graph)".<br>• If the graph doesn\'t cross the x-axis, the equation has <strong>no real solutions</strong>.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• <strong>Reading x and y the wrong way</strong>: the solution is the x-value at the crossing point, not the y-value.<br>• <strong>Missing a second root</strong>: quadratics can cross the x-axis twice — look at both sides of the parabola.<br>• <strong>Inaccurate drawing</strong>: use a well-sharpened pencil and plot enough points for a smooth curve.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Graphical solutions: f(x)=0 → read x-intercepts; f(x)=g(x) → draw both curves and read x-coordinates of intersections. Always verify by substituting back. State approximate solutions to the required accuracy. Show dashed lines from intersection to axes in exams.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'f(x)=0: find x-intercepts. f(x)=g(x): find x-coordinates of intersections. Verify by substitution. Dashed lines show reading.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-key-roots',
        prompt: 'How do you use a graph to solve the equation f(x) = 0?',
        answer: 'Find where the graph of y = f(x) crosses the x-axis. The x-coordinates of those points are the solutions.'
      },
      {
        id: 'cue-2',
        blockId: 'callout-worked1',
        prompt: 'From the graph of y = x² − 3x + 1, what are the approximate solutions to x² − 3x + 1 = 0?',
        answer: 'x ≈ 0.38 and x ≈ 2.62 (where the parabola crosses the x-axis).'
      },
      {
        id: 'cue-3',
        blockId: 'p-intersect',
        prompt: 'How do you solve f(x) = g(x) using graphs?',
        answer: 'Draw both y = f(x) and y = g(x) on the same axes. The solutions are the x-coordinates of the intersection points.'
      },
      {
        id: 'cue-4',
        blockId: 'callout-worked2',
        prompt: 'Solve x² = 2x + 3 by drawing y = x² and y = 2x + 3 and finding intersections.',
        answer: 'Intersections at x = −1 and x = 3. Verify: (−1)² = 1 = 2(−1)+3 ✓ and 3² = 9 = 2(3)+3 ✓.'
      },
      {
        id: 'cue-5',
        blockId: 'callout-tip',
        prompt: 'What does it mean if the graph of y = f(x) does not cross the x-axis?',
        answer: 'The equation f(x) = 0 has no real solutions — the function never equals zero.'
      }
    ]
  },
  evidence: []
};
