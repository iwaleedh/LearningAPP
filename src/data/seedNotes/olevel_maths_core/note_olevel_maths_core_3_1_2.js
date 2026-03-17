export const note_olevel_maths_core_3_1_2 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Find the midpoint of a line segment using the midpoint formula, and find a missing endpoint when the midpoint is known.'
      }
    },
    {
      id: 'h-midpoint',
      type: 'heading',
      data: { text: 'The Midpoint of a Line Segment', level: 2 }
    },
    {
      id: 'p-midpoint',
      type: 'paragraph',
      data: {
        text: 'The <strong>midpoint</strong> of a line segment is the exact middle point between two endpoints. It is found by averaging the x-coordinates and averaging the y-coordinates of the two endpoints.'
      }
    },
    {
      id: 'eq-midpoint',
      type: 'equation',
      data: {
        html: 'M = <span style="font-size:1.05em">(</span><span class="nb-frac"><span class="nb-num">x<sub>1</sub> + x<sub>2</sub></span><span class="nb-den">2</span></span>, <span class="nb-frac"><span class="nb-num">y<sub>1</sub> + y<sub>2</sub></span><span class="nb-den">2</span></span><span style="font-size:1.05em">)</span>',
        caption: 'Midpoint formula for endpoints (x₁, y₁) and (x₂, y₂)'
      }
    },
    {
      id: 'callout-key-mid',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Idea',
        text: 'The midpoint formula simply finds the <strong>average</strong> of each coordinate:<br>• Add the two x-values and divide by 2<br>• Add the two y-values and divide by 2<br><br>This gives the point exactly halfway between the two endpoints.'
      }
    },
    {
      id: 'svg-midpoint',
      type: 'svg',
      data: {
        caption: 'Midpoint M is exactly halfway between A(1, 1) and B(5, 5)',
        svg: `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <defs>
    <marker id="arr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#555"/>
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="20" y1="170" x2="200" y2="170" stroke="#555" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="30" y1="180" x2="30" y2="10" stroke="#555" stroke-width="1.5" marker-end="url(#arr)"/>
  <text x="202" y="174" fill="#555">x</text>
  <text x="33" y="8" fill="#555">y</text>
  <text x="23" y="183" fill="#888">O</text>
  <!-- Grid (light) -->
  <g stroke="#eee" stroke-width="0.7">
    <line x1="30" y1="140" x2="200" y2="140"/>
    <line x1="30" y1="110" x2="200" y2="110"/>
    <line x1="30" y1="80" x2="200" y2="80"/>
    <line x1="30" y1="50" x2="200" y2="50"/>
    <line x1="30" y1="20" x2="200" y2="20"/>
    <line x1="60" y1="10" x2="60" y2="180"/>
    <line x1="90" y1="10" x2="90" y2="180"/>
    <line x1="120" y1="10" x2="120" y2="180"/>
    <line x1="150" y1="10" x2="150" y2="180"/>
    <line x1="180" y1="10" x2="180" y2="180"/>
  </g>
  <!-- Tick labels -->
  <text x="60" y="183" text-anchor="middle" fill="#888" font-size="10">1</text>
  <text x="90" y="183" text-anchor="middle" fill="#888" font-size="10">2</text>
  <text x="120" y="183" text-anchor="middle" fill="#888" font-size="10">3</text>
  <text x="150" y="183" text-anchor="middle" fill="#888" font-size="10">4</text>
  <text x="180" y="183" text-anchor="middle" fill="#888" font-size="10">5</text>
  <text x="27" y="143" text-anchor="end" fill="#888" font-size="10">1</text>
  <text x="27" y="113" text-anchor="end" fill="#888" font-size="10">2</text>
  <text x="27" y="83" text-anchor="end" fill="#888" font-size="10">3</text>
  <text x="27" y="53" text-anchor="end" fill="#888" font-size="10">4</text>
  <text x="27" y="23" text-anchor="end" fill="#888" font-size="10">5</text>
  <!-- Line AB: A(1,1)→(60,140), B(5,5)→(180,20) -->
  <line x1="60" y1="140" x2="180" y2="20" stroke="#6366f1" stroke-width="2" stroke-dasharray="4,2"/>
  <!-- Midpoint M(3,3)→(120,80) -->
  <circle cx="120" cy="80" r="5" fill="#f59e0b"/>
  <text x="126" y="78" fill="#f59e0b" font-weight="bold">M(3,3)</text>
  <!-- Point A -->
  <circle cx="60" cy="140" r="5" fill="#6366f1"/>
  <text x="38" y="138" fill="#6366f1" font-weight="bold">A(1,1)</text>
  <!-- Point B -->
  <circle cx="180" cy="20" r="5" fill="#ef4444"/>
  <text x="184" y="19" fill="#ef4444" font-weight="bold">B(5,5)</text>
  <!-- Dashed helper lines showing average -->
  <line x1="60" y1="80" x2="180" y2="80" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="3,3"/>
  <line x1="120" y1="140" x2="120" y2="20" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="3,3"/>
</svg>`
      }
    },
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Worked Examples', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Finding the Midpoint',
        text: 'Find the midpoint of the line segment joining A(2, 6) and B(8, 4).<br><br>x<sub>mid</sub> = (2 + 8) ÷ 2 = 10 ÷ 2 = <strong>5</strong><br>y<sub>mid</sub> = (6 + 4) ÷ 2 = 10 ÷ 2 = <strong>5</strong><br><br>Midpoint M = <strong>(5, 5)</strong>'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Midpoint with Negative Coordinates',
        text: 'Find the midpoint of the line segment joining P(−3, 1) and Q(5, −7).<br><br>x<sub>mid</sub> = (−3 + 5) ÷ 2 = 2 ÷ 2 = <strong>1</strong><br>y<sub>mid</sub> = (1 + (−7)) ÷ 2 = −6 ÷ 2 = <strong>−3</strong><br><br>Midpoint M = <strong>(1, −3)</strong>'
      }
    },
    {
      id: 'h-reverse',
      type: 'heading',
      data: { text: 'Finding an Endpoint Given the Midpoint', level: 2 }
    },
    {
      id: 'p-reverse',
      type: 'paragraph',
      data: {
        text: 'If you know one endpoint and the midpoint, you can find the other endpoint by rearranging the formula. The midpoint is the average, so if you double the midpoint and subtract the known endpoint, you get the unknown endpoint.'
      }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Finding a Missing Endpoint',
        text: 'M(4, 1) is the midpoint of AB. A has coordinates (2, −3). Find the coordinates of B.<br><br>For x: 4 = (2 + x<sub>B</sub>) ÷ 2 → 8 = 2 + x<sub>B</sub> → x<sub>B</sub> = <strong>6</strong><br>For y: 1 = (−3 + y<sub>B</sub>) ÷ 2 → 2 = −3 + y<sub>B</sub> → y<sub>B</sub> = <strong>5</strong><br><br>B = <strong>(6, 5)</strong>'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Reverse Midpoint',
        text: 'Quick method: x<sub>B</sub> = 2 × x<sub>mid</sub> − x<sub>A</sub> and y<sub>B</sub> = 2 × y<sub>mid</sub> − y<sub>A</sub>.<br><br>Using the example above: x<sub>B</sub> = 2(4) − 2 = 6;  y<sub>B</sub> = 2(1) − (−3) = 5. ✓'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Midpoint M = ((x₁+x₂)/2, (y₁+y₂)/2) — average the x-coordinates and average the y-coordinates. To find a missing endpoint: double the midpoint coordinate and subtract the known endpoint coordinate.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Midpoint = average of x-coordinates, average of y-coordinates. To reverse: double the midpoint, subtract the known endpoint.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-midpoint',
        prompt: 'What is the midpoint formula for two points (x₁, y₁) and (x₂, y₂)?',
        answer: 'M = ((x₁+x₂)/2, (y₁+y₂)/2) — add each coordinate and divide by 2.'
      },
      {
        id: 'cue-2',
        blockId: 'callout-worked1',
        prompt: 'Find the midpoint of A(2, 6) and B(8, 4).',
        answer: 'x = (2+8)/2 = 5, y = (6+4)/2 = 5. Midpoint = (5, 5).'
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked2',
        prompt: 'Find the midpoint of P(−3, 1) and Q(5, −7).',
        answer: 'x = (−3+5)/2 = 1, y = (1+(−7))/2 = −3. Midpoint = (1, −3).'
      },
      {
        id: 'cue-4',
        blockId: 'callout-worked3',
        prompt: 'M(4, 1) is the midpoint of AB, and A is (2, −3). How do you find B?',
        answer: 'Double each midpoint coordinate and subtract A: x_B = 2(4)−2 = 6, y_B = 2(1)−(−3) = 5. So B = (6, 5).'
      },
      {
        id: 'cue-5',
        blockId: 'callout-key-mid',
        prompt: 'In simple terms, what does the midpoint formula calculate?',
        answer: 'It finds the average (mean) of the x-coordinates and the average of the y-coordinates of the two endpoints.'
      }
    ]
  },
  evidence: []
};
