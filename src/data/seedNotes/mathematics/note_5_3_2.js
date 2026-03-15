export const note_mathematics_5_3_2 = {
  pdfPath: '/notes/mathematics/kinematics/kinematics.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and apply the concept of acceleration due to gravity in vertical motion problems.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is acceleration due to gravity?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'If motion is vertical and no other forces are acting on a particle, its acceleration is due to gravity. This is denoted by the letter g. For calculations, take g = 9.8 m s⁻² unless told otherwise.' }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Look for phrases like "falling freely", "projected", "thrown", or "dropped".' },
          { text: 'Gravity always acts downwards towards the Earth.' },
          { text: 'If upwards is the positive direction, a = −g.' },
          { text: 'If downwards is the positive direction, a = g.' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Maximum Height',
        text: 'When a particle moves upwards, it will reach a maximum height. At the maximum height, its vertical velocity is instantaneously zero, so v = 0.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Vertical displacement vs vertical distance', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: 'In vertical motion, particles usually travel both up and down. This makes the distinction between distance and displacement very important:' }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Displacement (s)</b> is a vector. It measures the position relative to the starting point. If a particle returns to its starting point, s = 0.' },
          { text: '<b>Distance</b> is a scalar. It could mean the total distance travelled, or the magnitude of the displacement, depending on the question.' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'A common mistake is thinking the speed of an object when it hits the ground is zero. It is the impact that causes speed to become zero. Use suvat to find the velocity at the instant just before it hits the ground!'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Vertical motion under gravity uses suvat with a = ±9.8 m s⁻². At maximum height, velocity is zero. Displacement is 0 when an object returns to its start.',
    cues: [
      { id: 'cue-1', blockId: 'para-1', prompt: 'What value is usually taken for acceleration due to gravity, g?', answer: '9.8 m s⁻²' },
      { id: 'cue-2', blockId: 'call-1', prompt: 'What is the velocity of a particle at its maximum vertical height?', answer: '0 m s⁻¹ (instantaneously zero)' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'If the upwards direction is taken as positive, what is the acceleration due to gravity?', answer: 'a = −g (or −9.8 m s⁻²)' },
      { id: 'cue-4', blockId: 'list-2', prompt: 'If a particle is thrown upwards and returns to its starting position, what is its vertical displacement?', answer: 's = 0' }
    ]
  },
  evidence: [],
  mentions: []
};