export const note_mathematics_5_1_2 = {
  pdfPath: '/notes/mathematics/quantities-and-units-in-mechanics/types-of-force.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand what a force is and familiarise yourself with the common types of force used in mechanics models.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is a Force?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'A force is a push or a pull on an object. It is a vector quantity, meaning it has both magnitude and direction, and it is measured in Newtons (N). In A Level mathematical models, forces typically act at a single point on a "particle", which occupies a single point in space.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Types of Force', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Weight:</strong> The effect of mass and gravity. It always acts vertically downwards.' },
          { text: '<strong>Tension:</strong> A pulling force. It always acts away from an object (e.g. along a string or cable).' },
          { text: '<strong>Thrust:</strong> A pushing force. It always acts towards an object.' },
          { text: '<strong>Friction / Resistive force:</strong> A force that acts to oppose the motion of an object (e.g. air resistance).' },
          { text: '<strong>Normal Reaction:</strong> Every surface produces a reaction force on an object resting on it. It always acts perpendicular (normal) to the surface.' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Mass, Gravity, and Weight', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'These terms are closely related but represent distinct physical quantities:'
      }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Mass:</strong> A measure of the amount of matter in an object. It is a scalar quantity, measured in kilograms (kg). Mass is universal and does not change based on your location in the universe.' },
          { text: '<strong>Gravity:</strong> The force by which a body (usually a planet or star) pulls objects towards its centre. Acceleration due to gravity is denoted by <em>g</em> (measured in m s<sup>-2</sup>). On Earth, <em>g</em> is approximately 9.8 m s<sup>-2</sup>.' },
          { text: '<strong>Weight:</strong> The product of mass and gravity (W = mg). It is a force measured in Newtons (N). It is a vector quantity that always acts vertically downwards and changes based on location due to varying gravity.' }
        ]
      }
    },
    {
      id: 'callout-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Drawing Force Diagrams',
        text: 'Always sketch a diagram and mark all forces acting on your objects clearly. Add more things to the diagram as you progress through the question. Words like "braking" suggest thrust, and "air resistance" implies friction.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Forces (weight, tension, thrust, friction, reaction) are vectors measured in Newtons. Remember the difference between mass (scalar, kg, constant) and weight (vector, N, depends on gravity W=mg).'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Forces are pushes/pulls measured in Newtons (vectors). Common types are Weight (downwards), Tension (pulling away), Thrust (pushing towards), Friction (opposing motion), and Reaction (perpendicular to surface). Weight = mass × gravity.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'In what direction does the normal reaction force always act?', answer: 'It always acts perpendicular to the surface it is resting on.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What is the distinction between tension and thrust?', answer: 'Tension is a pulling force acting away from an object, while thrust is a pushing force acting towards an object.' },
      { id: 'cue-3', blockId: 'list-2', prompt: 'What is the difference between mass and weight?', answer: 'Mass is a scalar measure of matter (kg) and remains constant everywhere. Weight is a vector force (N) that depends on gravity and varies with location.' },
      { id: 'cue-4', blockId: 'list-2', prompt: 'What equation relates weight, mass, and gravity?', answer: 'Weight = mass × gravity (W = mg)' }
    ]
  },
  evidence: [],
  mentions: []
};
