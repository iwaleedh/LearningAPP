export const note_olevel_maths_core_3_1_3 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Calculate the straight-line distance between two points using the distance formula derived from Pythagoras\' theorem.'
      }
    },
    {
      id: 'h-derive',
      type: 'heading',
      data: { text: 'Deriving the Distance Formula', level: 2 }
    },
    {
      id: 'p-derive',
      type: 'paragraph',
      data: {
        text: 'The distance between two points on a coordinate grid can be found using <strong>Pythagoras\' theorem</strong>. If you draw horizontal and vertical lines from each point, they form a right-angled triangle. The straight-line distance between the points is the <strong>hypotenuse</strong> of this triangle.'
      }
    },
    {
      id: 'svg-pythag',
      type: 'svg',
      data: {
        caption: 'Right triangle formed by points A(1, 1) and B(5, 4) on a coordinate grid',
        svg: `<svg viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <defs>
    <marker id="a2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#555"/>
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="20" y1="180" x2="215" y2="180" stroke="#555" stroke-width="1.5" marker-end="url(#a2)"/>
  <line x1="30" y1="190" x2="30" y2="10" stroke="#555" stroke-width="1.5" marker-end="url(#a2)"/>
  <text x="218" y="184" fill="#555">x</text>
  <text x="33" y="8" fill="#555">y</text>
  <!-- Grid -->
  <g stroke="#eee" stroke-width="0.7">
    <line x1="30" y1="150" x2="215" y2="150"/>
    <line x1="30" y1="120" x2="215" y2="120"/>
    <line x1="30" y1="90" x2="215" y2="90"/>
    <line x1="30" y1="60" x2="215" y2="60"/>
    <line x1="30" y1="30" x2="215" y2="30"/>
    <line x1="60" y1="10" x2="60" y2="190"/>
    <line x1="90" y1="10" x2="90" y2="190"/>
    <line x1="120" y1="10" x2="120" y2="190"/>
    <line x1="150" y1="10" x2="150" y2="190"/>
    <line x1="180" y1="10" x2="180" y2="190"/>
    <line x1="210" y1="10" x2="210" y2="190"/>
  </g>
  <!-- Tick numbers -->
  <text x="60" y="193" text-anchor="middle" fill="#888" font-size="10">1</text>
  <text x="90" y="193" text-anchor="middle" fill="#888" font-size="10">2</text>
  <text x="120" y="193" text-anchor="middle" fill="#888" font-size="10">3</text>
  <text x="150" y="193" text-anchor="middle" fill="#888" font-size="10">4</text>
  <text x="180" y="193" text-anchor="middle" fill="#888" font-size="10">5</text>
  <text x="27" y="153" text-anchor="end" fill="#888" font-size="10">1</text>
  <text x="27" y="123" text-anchor="end" fill="#888" font-size="10">2</text>
  <text x="27" y="93" text-anchor="end" fill="#888" font-size="10">3</text>
  <text x="27" y="63" text-anchor="end" fill="#888" font-size="10">4</text>
  <!-- A(1,1) → (60,150); B(5,4) → (180,60) -->
  <!-- Right-angle triangle: A(60,150), C(180,150), B(180,60) -->
  <line x1="60" y1="150" x2="180" y2="150" stroke="#10b981" stroke-width="2"/>
  <line x1="180" y1="150" x2="180" y2="60" stroke="#10b981" stroke-width="2"/>
  <!-- Hypotenuse AB -->
  <line x1="60" y1="150" x2="180" y2="60" stroke="#3b82f6" stroke-width="2.5"/>
  <!-- Right angle marker -->
  <rect x="170" y="140" width="10" height="10" fill="none" stroke="#10b981" stroke-width="1.2"/>
  <!-- Labels -->
  <text x="120" y="163" text-anchor="middle" fill="#10b981" font-weight="bold">Δx = 4</text>
  <text x="192" y="108" fill="#10b981" font-weight="bold">Δy = 3</text>
  <text x="105" y="93" fill="#3b82f6" font-weight="bold">d = 5</text>
  <!-- Points -->
  <circle cx="60" cy="150" r="4.5" fill="#ef4444"/>
  <text x="36" y="148" fill="#ef4444" font-weight="bold">A(1,1)</text>
  <circle cx="180" cy="60" r="4.5" fill="#ef4444"/>
  <text x="184" y="57" fill="#ef4444" font-weight="bold">B(5,4)</text>
</svg>`
      }
    },
    {
      id: 'p-formula-derive',
      type: 'paragraph',
      data: {
        text: 'The horizontal leg has length |x₂ − x₁| and the vertical leg has length |y₂ − y₁|. By Pythagoras: d² = (x₂ − x₁)² + (y₂ − y₁)², so we take the square root to get the distance.'
      }
    },
    {
      id: 'eq-distance',
      type: 'equation',
      data: {
        html: 'd = √( (x<sub>2</sub> − x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> − y<sub>1</sub>)<sup>2</sup> )',
        caption: 'Distance formula between two coordinate points'
      }
    },
    {
      id: 'callout-key-dist',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Formula',
        text: 'Distance d = √((x<sub>2</sub> − x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> − y<sub>1</sub>)<sup>2</sup>)<br><br>Steps:<br>1. Find the difference in x values (x<sub>2</sub> − x<sub>1</sub>) and square it<br>2. Find the difference in y values (y<sub>2</sub> − y<sub>1</sub>) and square it<br>3. Add the two squares together<br>4. Take the square root'
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
        title: 'Worked Example 1 — Exact Answer',
        text: 'Find the distance between A(2, 1) and B(6, 4).<br><br>d = √((6 − 2)² + (4 − 1)²)<br>d = √(4² + 3²)<br>d = √(16 + 9)<br>d = √25<br>d = <strong>5</strong>'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Decimal Answer',
        text: 'Find the distance between P(−1, 3) and Q(4, −2), giving your answer to 2 decimal places.<br><br>d = √((4 − (−1))² + (−2 − 3)²)<br>d = √(5² + (−5)²)<br>d = √(25 + 25)<br>d = √50<br>d ≈ <strong>7.07</strong> (2 d.p.)'
      }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Leaving Answer as a Surd',
        text: 'Find the exact distance between C(0, 0) and D(3, 7).<br><br>d = √(3² + 7²) = √(9 + 49) = √58<br><br>The exact answer is <strong>√58</strong> (approximately 7.62).'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• <strong>Forgetting to square root</strong> at the end — d = √(sum), not just the sum.<br>• <strong>Squaring negatives</strong>: (−5)² = 25, not −25. Squaring always gives a positive result.<br>• <strong>Order doesn\'t matter</strong>: (x₂−x₁)² = (x₁−x₂)² since you are squaring it.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Exact vs Decimal Answers',
        text: 'If the question says "exact value" or "leave in surd form", give your answer as √(number), e.g. √58. If the question says "to 2 decimal places", use your calculator. Always check what form the answer is required in.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Distance formula: d = √((x₂−x₁)² + (y₂−y₁)²). Derived from Pythagoras — the two coordinate differences form the legs of a right triangle, and the distance is the hypotenuse. Square the differences first, add them, then take the square root.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'd = √((x₂−x₁)² + (y₂−y₁)²). Comes from Pythagoras. Square differences, add, then square root.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-distance',
        prompt: 'Write the distance formula between two points (x₁, y₁) and (x₂, y₂).',
        answer: 'd = √((x₂−x₁)² + (y₂−y₁)²)'
      },
      {
        id: 'cue-2',
        blockId: 'p-derive',
        prompt: 'Which theorem does the distance formula come from?',
        answer: 'Pythagoras\' theorem. The coordinate differences form the two legs of a right triangle, and the distance is the hypotenuse.'
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked1',
        prompt: 'Find the distance between A(2, 1) and B(6, 4).',
        answer: 'd = √((6−2)² + (4−1)²) = √(16+9) = √25 = 5.'
      },
      {
        id: 'cue-4',
        blockId: 'callout-worked2',
        prompt: 'Find the distance between P(−1, 3) and Q(4, −2).',
        answer: 'd = √(5² + (−5)²) = √(25+25) = √50 ≈ 7.07.'
      },
      {
        id: 'cue-5',
        blockId: 'callout-warning',
        prompt: 'When you square a negative difference, such as (−5)², what is the result?',
        answer: '+25 — squaring always produces a positive value, so (−5)² = 25.'
      }
    ]
  },
  evidence: []
};
