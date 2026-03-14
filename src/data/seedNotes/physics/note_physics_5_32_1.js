export const note_physics_5_32_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Equations for Simple Harmonic Motion" } },
    { id: 'head-1', type: 'heading', data: { text: "Equations for Simple Harmonic Motion", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Equations for Simple Harmonic Motion Equations for Simple Harmonic Motion Acceleration and SHM Acceleration a and displacement x can be represented by the defining equation of SHM:" } },
    { id: 'para-3', type: 'paragraph', data: { text: "a ∝ −x The acceleration of an object oscillating in simple harmonic motion is: a = −⍵x Where:" } },
    { id: 'para-4', type: 'paragraph', data: { text: "a = acceleration (m s ) ⍵ = angular frequency (rad s) x = displacement (m) This is used to find the acceleration of an object with a particular angular frequency ⍵ at a" } },
    { id: 'para-5', type: 'paragraph', data: { text: "specific displacement x The equation demonstrates: The acceleration reaches its maximum value when the displacement is at a maximum i.e.. x = A (amplitude)" } },
    { id: 'para-6', type: 'paragraph', data: { text: "The minus sign shows that when the object is displaced to the right, the direction of the acceleration is to the left and vice versa (a and x are always in opposite directions to each other) Displacement and SHM" } },
    { id: 'para-7', type: 'paragraph', data: { text: "The graph of acceleration against displacement is a straight line through the origin sloping downwards (similar to y = −x)2 -2 -1" } },
    { id: 'para-8', type: 'paragraph', data: { text: "The acceleration of an object in SHM is directly proportional to the negative displacement The key features of the graph are: The gradient is equal to − ⍵ The maximum and minimum displacement x values are the amplitudes −A and +A" } },
    { id: 'para-9', type: 'paragraph', data: { text: "A solution to the SHM acceleration equation is the displacement equation: x = A cos (⍵t) Where: A = amplitude (m)" } },
    { id: 'para-10', type: 'paragraph', data: { text: "t = time (s) This occurs when: An object is oscillating from its amplitude position (x = A or x = −A at t = 0) The displacement will be at its maximum when cos( ⍵ t) equals 1 or −1, when x = A" } },
    { id: 'para-11', type: 'paragraph', data: { text: "This equation can be used to find the position of an object in SHM with a particular angular frequency and amplitude at a moment in time If an object is oscillating from its equilibrium position (x = 0at t = 0) then the displacement equation will be:" } },
    {
      "id": "svg-shm-graphs",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><path d=\"M 50 100 Q 100 50 150 100 T 250 100 T 350 100\" stroke=\"#3B82F6\" fill=\"none\" stroke-width=\"2\"/><text x=\"360\" y=\"100\" fill=\"#3B82F6\">x</text><path d=\"M 50 100 Q 100 150 150 100 T 250 100 T 350 100\" stroke=\"#10B981\" fill=\"none\" stroke-width=\"2\"/><text x=\"360\" y=\"150\" fill=\"#10B981\">v</text><path d=\"M 50 150 Q 100 200 150 150 T 250 150 T 350 150\" stroke=\"#EF4444\" fill=\"none\" stroke-width=\"2\"/><text x=\"360\" y=\"200\" fill=\"#EF4444\">a</text></svg>",
        "caption": "SHM Graph Relations"
      }
    },
    {
      "id": "svg-circular-shm",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><circle cx=\"100\" cy=\"100\" r=\"60\" fill=\"none\" stroke=\"#94A3B8\"/><circle cx=\"142\" cy=\"58\" r=\"5\" fill=\"#3B82F6\"/><line x1=\"100\" y1=\"100\" x2=\"142\" y2=\"58\" stroke=\"#64748B\"/><line x1=\"142\" y1=\"58\" x2=\"250\" y2=\"58\" stroke=\"#94A3B8\" stroke-dasharray=\"2,2\"/><line x1=\"250\" y1=\"40\" x2=\"250\" y2=\"160\" stroke=\"#334155\"/><circle cx=\"250\" cy=\"58\" r=\"5\" fill=\"#EF4444\"/></svg>",
        "caption": "Circular Motion to SHM"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Equations for Simple Harmonic Motion' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
