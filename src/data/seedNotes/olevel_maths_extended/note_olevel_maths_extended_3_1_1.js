export const note_olevel_maths_extended_3_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/length-of-a-line.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the distance between two points using the distance formula derived from Pythagoras\' theorem.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Length of a Line Segment', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The <strong>length</strong> (or distance) of a line segment joining two points on the coordinate plane can be found using <strong>Pythagoras\' theorem</strong>. The horizontal and vertical distances between the points form the two shorter sides of a right-angled triangle.' }
    },
    {
      id: 'callout-key-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Distance Formula',
        text: 'For two points (<em>x</em>₁, <em>y</em>₁) and (<em>x</em>₂, <em>y</em>₂):<br><br><strong>d = √[(<em>x</em>₂ − <em>x</em>₁)² + (<em>y</em>₂ − <em>y</em>₁)²]</strong><br><br>This comes directly from Pythagoras: <em>c</em>² = <em>a</em>² + <em>b</em>² where <em>a</em> = |<em>x</em>₂ − <em>x</em>₁| and <em>b</em> = |<em>y</em>₂ − <em>y</em>₁|.'
      }
    },
    {
      id: 'eq-distance',
      type: 'equation',
      data: {
        html: '<em>d</em> = √[(<em>x</em>₂ − <em>x</em>₁)² + (<em>y</em>₂ − <em>y</em>₁)²]',
        caption: 'Distance formula'
      }
    },
    {
      id: 'h-steps',
      type: 'heading',
      data: { text: 'Step-by-Step Method', level: 2 }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Label the two points (<em>x</em>₁, <em>y</em>₁) and (<em>x</em>₂, <em>y</em>₂)' },
          { text: 'Find the horizontal difference: <em>x</em>₂ − <em>x</em>₁' },
          { text: 'Find the vertical difference: <em>y</em>₂ − <em>y</em>₁' },
          { text: 'Square both differences' },
          { text: 'Add the squares together' },
          { text: 'Take the square root of the sum' }
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Find the distance between A(2, 3) and B(6, 6).<br><br><em>x</em>₂ − <em>x</em>₁ = 6 − 2 = 4<br><em>y</em>₂ − <em>y</em>₁ = 6 − 3 = 3<br><br>d = √(4² + 3²) = √(16 + 9) = √25 = <strong>5 units</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Negative Coordinates',
        text: 'Find the distance between P(−3, 4) and Q(5, −2).<br><br><em>x</em>₂ − <em>x</em>₁ = 5 − (−3) = 8<br><em>y</em>₂ − <em>y</em>₁ = −2 − 4 = −6<br><br>d = √(8² + (−6)²) = √(64 + 36) = √100 = <strong>10 units</strong>'
      }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Leaving in Surd Form',
        text: 'Find the distance between (1, 2) and (4, 7).<br><br>d = √((4 − 1)² + (7 − 2)²) = √(9 + 25) = √34<br><br><strong>d = √34 ≈ 5.83 units</strong> (3 s.f.)<br><br>Leave as √34 unless told to round.'
      }
    },
    {
      id: 'callout-tip-surd',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If the answer is not a perfect square root, leave it in <strong>surd form</strong> (e.g. √34) unless the question asks you to round. Squaring negatives always gives a positive — the order of subtraction doesn\'t matter.'
      }
    },
    {
      id: 'h-horizontal-vertical',
      type: 'heading',
      data: { text: 'Special Cases: Horizontal and Vertical Lines', level: 2 }
    },
    {
      id: 'p-special',
      type: 'paragraph',
      data: { text: 'For <strong>horizontal</strong> lines (same y-coordinate), the distance is simply |<em>x</em>₂ − <em>x</em>₁|.<br>For <strong>vertical</strong> lines (same x-coordinate), the distance is simply |<em>y</em>₂ − <em>y</em>₁|.' }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Don\'t forget to <strong>square</strong> before adding. A frequent error is writing √(4 + 3) = √7 instead of √(4² + 3²) = √(16 + 9) = √25 = 5.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'The distance between two points is found using d = √[(x₂ − x₁)² + (y₂ − y₁)²], derived from Pythagoras\' theorem. Always square the differences before adding. Leave answers as surds unless told to round.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'The distance formula uses Pythagoras\' theorem to find the length between two coordinate points.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-formula', prompt: 'State the distance formula for two points.', answer: 'd = √[(x₂ − x₁)² + (y₂ − y₁)²]' },
      { id: 'cue-2', blockId: 'p-intro', prompt: 'Which theorem is the distance formula derived from?', answer: 'Pythagoras\' theorem.' },
      { id: 'cue-3', blockId: 'p-special', prompt: 'How do you find the distance for a horizontal line segment?', answer: 'Take the absolute difference of the x-coordinates: |x₂ − x₁|.' },
      { id: 'cue-4', blockId: 'callout-worked-2', prompt: 'Find the distance between (−3, 4) and (5, −2).', answer: '√(8² + 6²) = √100 = 10 units.' },
      { id: 'cue-5', blockId: 'callout-tip-surd', prompt: 'When should you leave the distance in surd form?', answer: 'When the answer is not a perfect square root, unless the question asks you to round.' }
    ]
  },
  evidence: []
};
