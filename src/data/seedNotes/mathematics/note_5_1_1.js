export const note_mathematics_5_1_1 = {
  pdfPath: '/notes/mathematics/quantities-and-units-in-mechanics/fundamental-units.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand the difference between fundamental (S.I.) units and derived units, and know how to convert between them.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Fundamental Units', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Fundamental units (or S.I. units) are the international standardised units used around the world. The three main units used in mechanics are length, time, and mass.'
      }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Length (or displacement):</strong> measured in metres (m).' },
          { text: '<strong>Time:</strong> measured in seconds (s).' },
          { text: '<strong>Mass:</strong> measured in kilograms (kg).' }
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Derived Units', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Derived units describe quantities such as velocity, acceleration, and force. They are created by combining fundamental S.I. units.'
      }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Speed or Velocity:</strong> Distance ÷ time = m/s or m s<sup>-1</sup>. (Velocity is just speed with directon).' },
          { text: '<strong>Acceleration:</strong> Velocity ÷ time = m s<sup>-1</sup> ÷ s = m s<sup>-2</sup>.' },
          { text: '<strong>Weight or Force:</strong> Mass × acceleration = kg m s<sup>-2</sup> or N (Newtons).' }
        ]
      }
    },
    {
      id: 'callout-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: 'Remember that mass (measured in kg) is not the same as weight (a force measured in Newtons). Watch out for exam questions that use non-S.I. units such as feet and inches or miles per hour, as you will need to convert these to S.I. units.'
      }
    },
    {
      id: 'callout-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Formula Check',
        text: 'If you ever forget a formula, use the units it is measured in to figure it out. E.g. m/s = metres ÷ seconds = distance ÷ time = velocity.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Fundamental units are m, s, and kg. Derived units are combinations of these, such as m s⁻¹ for velocity, m s⁻² for acceleration, and N for force.'
      }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Always check your units before substituting into equations. A classic pitfall is being given mass in grams or distance in kilometres. S.I. units (kg, m, s) must be used consistently unless explicitly asked otherwise."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Fundamental units: Length (m), Time (s), Mass (kg). Derived units include velocity (m s⁻¹), acceleration (m s⁻²), and force/weight (N). Mass is in kg, weight is in N.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'What are the three main fundamental S.I. units used in mechanics?', answer: 'Metres (m) for length, seconds (s) for time, and kilograms (kg) for mass.' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'What is the derived unit for acceleration?', answer: 'm s⁻² (m/s²)' },
      { id: 'cue-3', blockId: 'list-2', prompt: 'What derived unit is used for weight or force?', answer: 'Newtons (N), which is equivalent to kg m s⁻².' },
      { id: 'cue-4', blockId: 'callout-1', prompt: 'What is the main difference between mass and weight?', answer: 'Mass is a scalar quantity measured in kg, while weight is a force measured in Newtons (N).' }
    ]
  },
  evidence: [],
  mentions: []
};
