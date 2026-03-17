export const note_olevel_maths_extended_6_1_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Pythagoras And Trigonometry/exact-trig-values.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Know and use the exact trigonometric values for 0°, 30°, 45°, 60° and 90°.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Exact Trigonometric Values', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'At IGCSE Extended level you must know the <strong>exact values</strong> of sin, cos and tan for certain key angles <strong>without a calculator</strong>. These values come from special right-angled triangles.' }
    },
    {
      id: 'table-exact',
      type: 'comparisonTable',
      data: {
        caption: 'Exact trigonometric values',
        headers: ['θ', 'sin θ', 'cos θ', 'tan θ'],
        rows: [
          ['0°', '0', '1', '0'],
          ['30°', '½', '√3/2', '1/√3 = √3/3'],
          ['45°', '√2/2', '√2/2', '1'],
          ['60°', '√3/2', '½', '√3'],
          ['90°', '1', '0', 'undefined']
        ]
      }
    },
    {
      id: 'h-special',
      type: 'heading',
      data: { text: 'The Special Triangles', level: 2 }
    },
    {
      id: 'p-45',
      type: 'paragraph',
      data: { text: '<strong>45-45-90 triangle:</strong> An isosceles right-angled triangle with legs 1 and hypotenuse √2. This gives sin 45° = cos 45° = 1/√2 = √2/2.' }
    },
    {
      id: 'p-30-60',
      type: 'paragraph',
      data: { text: '<strong>30-60-90 triangle:</strong> Half of an equilateral triangle with side 2. The sides are 1 (short), √3 (medium), 2 (hypotenuse). This gives sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3.' }
    },
    {
      id: 'callout-key-pattern',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Patterns to Remember',
        text: 'sin and cos are "mirror images": sin 30° = cos 60° = ½, sin 60° = cos 30° = √3/2. The value of tan 45° = 1 because opposite = adjacent.'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Find the exact length of the hypotenuse of a right-angled triangle with one angle 60° and adjacent side 5 cm.<br><br><strong>Solution:</strong><br>cos 60° = A/H<br>½ = 5/H<br>H = 5 ÷ ½ = <strong>10 cm</strong>'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Questions asking for an exact value mean you must leave your answer in surd form (e.g. 5√3), not as a decimal. If you write a decimal, you won\'t get the mark.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Know exact values of sin, cos, tan for 0°, 30°, 45°, 60°, 90°. They come from the 45-45-90 triangle (sides 1, 1, √2) and the 30-60-90 triangle (sides 1, √3, 2). Leave answers in surd form for exact values.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-exact', prompt: 'What are sin 30°, cos 30° and tan 30° exactly?', answer: 'sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3 (or √3/3).' },
      { id: 'cue-2', blockId: 'table-exact', prompt: 'What are sin 45° and cos 45° exactly?', answer: 'Both equal √2/2 (or 1/√2).' },
      { id: 'cue-3', blockId: 'p-30-60', prompt: 'What are the side lengths of a 30-60-90 triangle?', answer: '1, √3, 2 (short leg, long leg, hypotenuse).' },
      { id: 'cue-4', blockId: 'callout-key-pattern', prompt: 'Why is tan 45° = 1?', answer: 'Because opposite = adjacent in a 45-45-90 triangle.' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'What does "exact value" mean in a trig question?', answer: 'Leave the answer in surd form (e.g. √3), not as a decimal.' }
    ],
    summaryText: 'Know exact trig values for 0°, 30°, 45°, 60°, 90° from the special triangles. Leave answers in surd form.',
    ready: true
  },
  evidence: []
};
