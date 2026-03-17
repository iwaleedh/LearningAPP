export const note_olevel_maths_core_3_2_2 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Recognise parallel lines from their equations, write equations of lines parallel to a given line, and understand the perpendicular condition m₁ × m₂ = −1.'
      }
    },
    {
      id: 'h-parallel',
      type: 'heading',
      data: { text: 'Parallel Lines', level: 2 }
    },
    {
      id: 'p-parallel',
      type: 'paragraph',
      data: {
        text: '<strong>Parallel lines</strong> never meet. They run in exactly the same direction — which means they have the <strong>same gradient</strong>. If two lines have different gradients, they will always intersect at some point.'
      }
    },
    {
      id: 'callout-key-para',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Parallel Lines — Key Rule',
        text: 'Two lines are parallel if and only if their gradients are equal:<br><br><strong>m₁ = m₂</strong><br><br>They can have different y-intercepts — that just means they are in different positions. For example:<br>y = 2x + 1 and y = 2x − 5 are parallel (both have m = 2).'
      }
    },
    {
      id: 'svg-parallel',
      type: 'svg',
      data: {
        caption: 'Parallel lines y = 2x + 4 and y = 2x − 1 — same slope, different y-intercepts',
        svg: `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <defs>
    <marker id="a5" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#555"/>
    </marker>
  </defs>
  <line x1="10" y1="110" x2="210" y2="110" stroke="#555" stroke-width="1.5" marker-end="url(#a5)"/>
  <line x1="110" y1="195" x2="110" y2="5" stroke="#555" stroke-width="1.5" marker-end="url(#a5)"/>
  <text x="212" y="114" fill="#555">x</text>
  <text x="113" y="4" fill="#555">y</text>
  <!-- Grid -->
  <g stroke="#eee" stroke-width="0.7">
    <line x1="10" y1="85" x2="210" y2="85"/>
    <line x1="10" y1="60" x2="210" y2="60"/>
    <line x1="10" y1="35" x2="210" y2="35"/>
    <line x1="10" y1="135" x2="210" y2="135"/>
    <line x1="10" y1="160" x2="210" y2="160"/>
    <line x1="10" y1="185" x2="210" y2="185"/>
    <line x1="85" y1="5" x2="85" y2="195"/>
    <line x1="60" y1="5" x2="60" y2="195"/>
    <line x1="35" y1="5" x2="35" y2="195"/>
    <line x1="135" y1="5" x2="135" y2="195"/>
    <line x1="160" y1="5" x2="160" y2="195"/>
    <line x1="185" y1="5" x2="185" y2="195"/>
  </g>
  <!-- Tick labels -->
  <text x="85" y="122" text-anchor="middle" fill="#888" font-size="10">−1</text>
  <text x="60" y="122" text-anchor="middle" fill="#888" font-size="10">−2</text>
  <text x="135" y="122" text-anchor="middle" fill="#888" font-size="10">1</text>
  <text x="160" y="122" text-anchor="middle" fill="#888" font-size="10">2</text>
  <text x="107" y="63" text-anchor="end" fill="#888" font-size="10">2</text>
  <text x="107" y="138" text-anchor="end" fill="#888" font-size="10">−1</text>
  <!-- y = 2x + 4: scale 25px/unit, origin (110,110)
       at x=-2: y=0 → (60,110); at x=1: y=6 → (135,35) -->
  <line x1="35" y1="135" x2="165" y2="5" stroke="#6366f1" stroke-width="2.5"/>
  <text x="148" y="12" fill="#6366f1" font-weight="bold" font-size="10">y=2x+4</text>
  <!-- y = 2x - 1: at x=-1: y=-3→(85,185); at x=2: y=3 → (160,35) -->
  <line x1="60" y1="185" x2="190" y2="55" stroke="#ef4444" stroke-width="2.5"/>
  <text x="168" y="70" fill="#ef4444" font-weight="bold" font-size="10">y=2x−1</text>
  <!-- Gradient arrows showing same slope -->
  <line x1="55" y1="160" x2="80" y2="160" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="80" y1="160" x2="80" y2="110" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="62" y="170" fill="#10b981" font-size="9">run</text>
  <text x="83" y="138" fill="#10b981" font-size="9">rise</text>
</svg>`
      }
    },
    {
      id: 'h-identify',
      type: 'heading',
      data: { text: 'Identifying Parallel Lines', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Are These Lines Parallel?',
        text: 'Are the lines y = 3x + 2 and y = 3x − 7 parallel?<br><br>Line 1: m = 3. Line 2: m = 3.<br>Since m₁ = m₂ = 3, the lines are <strong>parallel</strong>.'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Line Parallel Through a Point',
        text: 'Find the equation of the line parallel to y = 4x − 1 that passes through (2, 7).<br><br><strong>Step 1:</strong> A parallel line has the same gradient → m = 4<br><strong>Step 2:</strong> Substitute (2, 7) into y = 4x + c:<br>7 = 4(2) + c → 7 = 8 + c → c = −1<br><br><strong>Equation: y = 4x − 1</strong><br><br>Wait — that\'s the same as the original! Let\'s check: the original line passes through x=2: y = 4(2)−1 = 7. So (2,7) actually lies ON the original line. In a real exam question the point would not be on the original line. Let\'s redo with a point: through (3, 2).<br><br>7 → 2 = 4(3) + c → 2 = 12 + c → c = −10<br><strong>Equation: y = 4x − 10</strong>'
      }
    },
    {
      id: 'h-perp',
      type: 'heading',
      data: { text: 'Perpendicular Lines (Higher Awareness)', level: 2 }
    },
    {
      id: 'p-perp',
      type: 'paragraph',
      data: {
        text: 'Two lines that meet at a <strong>right angle (90°)</strong> are <strong>perpendicular</strong>. Their gradients satisfy a special relationship: the product of the two gradients equals −1.'
      }
    },
    {
      id: 'eq-perp',
      type: 'equation',
      data: {
        html: 'm<sub>1</sub> × m<sub>2</sub> = −1',
        caption: 'Condition for perpendicular lines'
      }
    },
    {
      id: 'p-perp2',
      type: 'paragraph',
      data: {
        text: 'This means the gradient of a perpendicular line is the <strong>negative reciprocal</strong> of the original. To find it: flip the fraction and change the sign. For example, if m = 3 (i.e. 3/1), the perpendicular gradient is −1/3.'
      }
    },
    {
      id: 'table-perp',
      type: 'comparisonTable',
      data: {
        caption: 'Original gradients and their perpendicular counterparts',
        headers: ['Original gradient m₁', 'Perpendicular gradient m₂', 'Check: m₁ × m₂'],
        rows: [
          ['2', '−½', '2 × (−½) = −1 ✓'],
          ['−3', '⅓', '−3 × ⅓ = −1 ✓'],
          ['½', '−2', '½ × (−2) = −1 ✓'],
          ['1', '−1', '1 × (−1) = −1 ✓']
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• To check if lines are parallel, rearrange each to y = mx + c form first, then compare gradients.<br>• For IGCSE Core, you mainly need to identify parallel lines and write equations of parallel lines.<br>• Remember: parallel lines have the <em>same</em> gradient but a <em>different</em> y-intercept (otherwise they would be the same line).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Parallel lines have identical gradients (m₁ = m₂). To find a parallel line through a given point: use the same gradient and substitute the point to find c. Perpendicular lines have gradients that multiply to −1 (m₁ × m₂ = −1) — the gradient is the negative reciprocal.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Parallel: m₁ = m₂ (same gradient, different c). Perpendicular: m₁ × m₂ = −1 (negative reciprocal gradient).',
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-key-para',
        prompt: 'What condition must hold for two straight lines to be parallel?',
        answer: 'They must have equal gradients: m₁ = m₂.'
      },
      {
        id: 'cue-2',
        blockId: 'callout-worked1',
        prompt: 'Are the lines y = 3x + 2 and y = 3x − 7 parallel? Why?',
        answer: 'Yes — both have gradient m = 3, so m₁ = m₂.'
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked2',
        prompt: 'What gradient does a line parallel to y = 4x − 1 have?',
        answer: 'Gradient 4 — parallel lines share the same gradient.'
      },
      {
        id: 'cue-4',
        blockId: 'eq-perp',
        prompt: 'What is the condition for two lines to be perpendicular?',
        answer: 'm₁ × m₂ = −1. The gradients multiply to −1.'
      },
      {
        id: 'cue-5',
        blockId: 'table-perp',
        prompt: 'A line has gradient 2. What is the gradient of a perpendicular line?',
        answer: '−½ (the negative reciprocal). Check: 2 × (−½) = −1 ✓'
      }
    ]
  },
  evidence: []
};
