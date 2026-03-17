export const note_olevel_maths_extended_6_4_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Pythagoras And Trigonometry/solving-trig-equations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve trigonometric equations for 0° ≤ x ≤ 360° and find all solutions using symmetry properties of trig graphs.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Solving Trigonometric Equations', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Trig equations such as sin x = 0.5 usually have <strong>more than one solution</strong> in the range 0° ≤ x ≤ 360°. You find the first solution using the inverse trig function, then use <strong>symmetry</strong> of the graph to find other solutions.' }
    },
    {
      id: 'h-sin-eq',
      type: 'heading',
      data: { text: 'Solving sin x = k', level: 2 }
    },
    {
      id: 'p-sin-eq',
      type: 'paragraph',
      data: { text: 'If sin x = k where −1 ≤ k ≤ 1:' }
    },
    {
      id: 'list-sin',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Find the first solution: x₁ = sin⁻¹(k) from your calculator.' },
          { text: 'Second solution: x₂ = <strong>180° − x₁</strong> (symmetry of the sin curve about x = 90°).' },
          { text: 'Check both lie in the required range.' }
        ]
      }
    },
    {
      id: 'callout-worked-sin',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — sin x = 0.5',
        text: 'Solve sin x = 0.5 for 0° ≤ x ≤ 360°.<br><br>x₁ = sin⁻¹(0.5) = <strong>30°</strong><br>x₂ = 180° − 30° = <strong>150°</strong><br><br>Solutions: x = 30° and x = 150°.'
      }
    },
    {
      id: 'h-cos-eq',
      type: 'heading',
      data: { text: 'Solving cos x = k', level: 2 }
    },
    {
      id: 'list-cos',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Find the first solution: x₁ = cos⁻¹(k).' },
          { text: 'Second solution: x₂ = <strong>360° − x₁</strong> (symmetry of the cos curve about x = 180°).' }
        ]
      }
    },
    {
      id: 'callout-worked-cos',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — cos x = −0.3',
        text: 'Solve cos x = −0.3 for 0° ≤ x ≤ 360°.<br><br>x₁ = cos⁻¹(−0.3) = <strong>107.5°</strong> (1 d.p.)<br>x₂ = 360° − 107.5° = <strong>252.5°</strong><br><br>Solutions: x = 107.5° and x = 252.5°.'
      }
    },
    {
      id: 'h-tan-eq',
      type: 'heading',
      data: { text: 'Solving tan x = k', level: 2 }
    },
    {
      id: 'list-tan',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Find the first solution: x₁ = tan⁻¹(k).' },
          { text: 'Second solution: x₂ = <strong>x₁ + 180°</strong> (tan repeats every 180°).' },
          { text: 'If x₁ is negative, add 180° to get into range.' }
        ]
      }
    },
    {
      id: 'table-rules',
      type: 'comparisonTable',
      data: {
        caption: 'Finding the second solution',
        headers: ['Equation', 'First Solution', 'Second Solution'],
        rows: [
          ['sin x = k', 'x₁ = sin⁻¹(k)', 'x₂ = 180° − x₁'],
          ['cos x = k', 'x₁ = cos⁻¹(k)', 'x₂ = 360° − x₁'],
          ['tan x = k', 'x₁ = tan⁻¹(k)', 'x₂ = x₁ + 180°']
        ]
      }
    },
    {
      id: 'h-harder',
      type: 'heading',
      data: { text: 'Harder Equations', level: 2 }
    },
    {
      id: 'p-harder',
      type: 'paragraph',
      data: { text: 'For equations like 2 sin x + 1 = 0, first <strong>rearrange to isolate</strong> the trig function: sin x = −0.5, then solve as normal. For equations like sin 2x = 0.5, solve for 2x first, then divide by 2.' }
    },
    {
      id: 'callout-worked-harder',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — 2 sin x + 1 = 0',
        text: 'Solve 2 sin x + 1 = 0 for 0° ≤ x ≤ 360°.<br><br>2 sin x = −1<br>sin x = −0.5<br>Reference angle: sin⁻¹(0.5) = 30°<br>sin is negative in Q3 and Q4:<br>x = 180° + 30° = <strong>210°</strong><br>x = 360° − 30° = <strong>330°</strong>'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — CAST Diagram',
        text: 'Use <strong>CAST</strong> to remember where trig functions are positive:<br>• Q1 (0°–90°): <strong>A</strong>ll positive<br>• Q2 (90°–180°): <strong>S</strong>in positive<br>• Q3 (180°–270°): <strong>T</strong>an positive<br>• Q4 (270°–360°): <strong>C</strong>os positive'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If the question says "solve for 0° ≤ x ≤ 360°", you must give <strong>all</strong> solutions in that range. Using a graph sketch can help verify you haven\'t missed one.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Find the first solution with the inverse function. Second solutions: sin &rarr; 180°−x, cos &rarr; 360°−x, tan &rarr; x+180°. Use CAST to handle negative values. Always give all solutions in the given range.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-rules', prompt: 'If sin x = k and x₁ = sin⁻¹(k), what is the second solution?', answer: 'x₂ = 180° − x₁.' },
      { id: 'cue-2', blockId: 'table-rules', prompt: 'If cos x = k and x₁ = cos⁻¹(k), what is the second solution?', answer: 'x₂ = 360° − x₁.' },
      { id: 'cue-3', blockId: 'list-tan', prompt: 'How do you find the second solution for tan x = k?', answer: 'Add 180° to the first solution: x₂ = x₁ + 180°.' },
      { id: 'cue-4', blockId: 'callout-key', prompt: 'What does CAST stand for and what does it tell you?', answer: 'C-A-S-T: Cos (Q4), All (Q1), Sin (Q2), Tan (Q3). It tells you which trig functions are positive in each quadrant.' },
      { id: 'cue-5', blockId: 'p-harder', prompt: 'How do you solve 2 sin x + 1 = 0?', answer: 'Rearrange to sin x = −0.5, find the reference angle, then use CAST to find solutions in Q3 and Q4.' }
    ],
    summaryText: 'Trig equations: find first solution with inverse, second using symmetry rules (sin&rarr;180°−x, cos&rarr;360°−x, tan&rarr;x+180°). CAST diagram for signs.',
    ready: true
  },
  evidence: []
};
