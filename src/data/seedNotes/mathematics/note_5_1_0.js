export const note_mathematics_5_1_0 = {
  pdfPath: '/notes/mathematics/quantities-and-units-in-mechanics/modelling-assumptions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand what modelling is in mechanics and know common modelling assumptions'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Modelling in Mechanics', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Mechanics uses modelling to solve problems in real-life situations. We use assumptions to simplify real problems in order to turn them into equations or graphs that can be solved. Sometimes we need to criticise or refine our assumptions to improve the model.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Modelling Assumptions', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Particle:</strong> Has negligible dimensions, therefore forces will all act on a particle at the same point.' },
          { text: '<strong>Rod or beam:</strong> Treated as a long, rigid particle.' },
          { text: '<strong>Uniform object:</strong> Mass is distributed evenly.' },
          { text: '<strong>Light object:</strong> Has zero mass.' },
          { text: '<strong>Inextensible object:</strong> Cannot be stretched.' },
          { text: '<strong>Smooth surface:</strong> Has no friction.' },
          { text: '<strong>Rough surface:</strong> Has a frictional force between the surface and any object that makes contact with it.' },
          { text: '<strong>Gravity:</strong> Is constant and acts vertically downwards.' },
          { text: '<strong>Air resistance:</strong> Is usually modelled as negligible and can be ignored.' }
        ]
      }
    },
    {
      id: 'callout-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definitions',
        text: 'Make sure you fully understand the definitions of all the words in this section so that you can be clear about what your exam question is asking of you.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Modelling assumptions simplify real-life problems. Common terms include particle, uniform, light, inextensible, smooth, and rough.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Modelling assumptions are used to simplify mechanics problems. Remember terms like particle, light, inextensible, smooth, and rough.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'What does it mean if an object is described as a "particle"?', answer: 'It has negligible dimensions, so all forces act on it at the same point.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What is meant by a "light" object?', answer: 'It is modelled as having zero mass.' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'What assumption is made for an "inextensible" object?', answer: 'It cannot be stretched.' },
      { id: 'cue-4', blockId: 'list-1', prompt: 'What is the difference between a "smooth" and a "rough" surface?', answer: 'A smooth surface has no friction, while a rough surface exerts a frictional force.' }
    ]
  },
  evidence: [],
  mentions: []
};
