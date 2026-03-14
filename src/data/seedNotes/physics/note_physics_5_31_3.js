export const note_physics_5_31_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Gravitational Field due to a Point Mass" } },
    { id: 'head-1', type: 'heading', data: { text: "Gravitational Field due to a Point Mass", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Gravitational Field due to a Point Mass Gravitational Field due to a Point Mass The gravitational field strength at a point describes how much gravitational force is experienced by a test mass at that point" } },
    { id: 'para-3', type: 'paragraph', data: { text: "The strength of a gravitational field caused by a point mass can be derived using Newton's Law of Universal Gravitation For calculations involving gravitational forces, a spherical mass can be treated as a point mass at the centre of the sphere" } },
    { id: 'para-4', type: 'paragraph', data: { text: "Newton's Law of Universal Gravitation states that the magnitude of the attractive gravitational force F between two masses M and m with separation r is equal to: The gravitational field strength at a point is defined as the force F per unit mass m Substituting the force F with the gravitational force F leads to:" } },
    { id: 'para-5', type: 'paragraph', data: { text: "Cancelling mass m, the equation becomes: Where: g = gravitational field strength due to a point mass M (N kg ) G = Newton's Gravitational Constant (N m  kg )" } },
    { id: 'para-6', type: 'paragraph', data: { text: "M = mass of the body producing the gravitational field (kg) r = distance from the centre of mass M  to a chosen point in the field (m) G –1" } },
    { id: 'para-7', type: 'paragraph', data: { text: "Worked Example The Earth's gravitational field strength at its surface is 9.81 N kg ." } },
    { id: 'para-8', type: 'paragraph', data: { text: "Calculate the Earth's gravitational field strength 1 million km away from its surface." } },
    { id: 'para-9', type: 'paragraph', data: { text: "Use the following data: Mass of Earth = 6.0 × 10  kg Radius of Earth = 6400 km Answer:" } },
    { id: 'para-10', type: 'paragraph', data: { text: "Step 1: Write the known quantities Mass of Earth = 6.0 × 10  kg Radius of Earth = 6400 km = 6400 × 10 m Newton's Universal Gravitation Constant G = 6.67 × 10  N m  kg" } },
    { id: 'para-11', type: 'paragraph', data: { text: "Distance from the Earth's surface = 1 million km = (1 × 10) × 10 m = 1 × 10 m Step 2: Write the equation for gravitational field strength The gravitational field strength g at some distance r due to a mass M is given by the equation:" } },
    {
      "id": "svg-grav-potential",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><line x1=\"50\" y1=\"100\" x2=\"280\" y2=\"100\" stroke=\"#64748B\"/><line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"180\" stroke=\"#64748B\"/><path d=\"M 60 180 Q 100 110 250 105\" stroke=\"#10B981\" fill=\"none\" stroke-width=\"3\"/><text x=\"150\" y=\"115\" fill=\"#64748B\">Distance (r)</text><text x=\"40\" y=\"150\" fill=\"#64748B\" transform=\"rotate(-90 40,150)\">Potential (V)</text></svg>",
        "caption": "Gravitational Potential"
      }
    },
    {
      "id": "svg-equipotentials",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 300\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><circle cx=\"150\" cy=\"150\" r=\"20\" fill=\"#475569\"/><circle cx=\"150\" cy=\"150\" r=\"60\" fill=\"none\" stroke=\"#10B981\" stroke-dasharray=\"4,4\"/><circle cx=\"150\" cy=\"150\" r=\"100\" fill=\"none\" stroke=\"#10B981\" stroke-dasharray=\"4,4\"/><text x=\"220\" y=\"150\" fill=\"#10B981\" font-size=\"12\">V₁</text><text x=\"260\" y=\"150\" fill=\"#10B981\" font-size=\"12\">V₂</text></svg>",
        "caption": "Equipotential Surfaces"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Gravitational Field due to a Point Mass' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
