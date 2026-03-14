export const note_physics_5_31_0 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Gravitational Fields" } },
    { id: 'head-1', type: 'heading', data: { text: "Gravitational Fields", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Gravitational Fields Gravitational Fields Generally, a force field is a region of space in which an object will experience a force A gravitational field, therefore, is a region of space in which any object with mass" } },
    { id: 'para-3', type: 'paragraph', data: { text: "experiences a gravitational force The Sun, for example, creates a gravitational field around it The Earth, which has mass, experiences the gravitational force due to the Sun This gravitational force keeps the Earth in orbit around the Sun" } },
    { id: 'para-4', type: 'paragraph', data: { text: "Additional effects of the Moon and Sun's gravitational fields can be seen on Earth, such as the cause of tides Direction of a Gravitational Field The direction of a gravitational field can be represented as a vector, the direction of" } },
    { id: 'para-5', type: 'paragraph', data: { text: "which must be determined by inspection The direction of the vector shows the direction of the gravitational force that would be exerted on a mass if it was placed at that position in the field These vectors are known as field lines (or 'lines of force'), which are represented by" } },
    { id: 'para-6', type: 'paragraph', data: { text: "arrows Therefore, gravitational field lines also show the direction of acceleration of a mass placed in the field Gravitational field lines are therefore directed toward the centre of mass of a body" } },
    { id: 'para-7', type: 'paragraph', data: { text: "This is because the gravitational force is attractive Therefore, masses always attract each other via the gravitational force The gravitational field around a point mass will be radial in shape and the field lines will The direction of the gravitational field is shown by the vector field lines" } },
    {
      "id": "svg-grav-field-lines",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 300\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><circle cx=\"150\" cy=\"150\" r=\"30\" fill=\"#64748B\"/><path d=\"M 150 50 L 150 110\" stroke=\"#94A3B8\" marker-end=\"url(#arrow)\"/><path d=\"M 150 250 L 150 190\" stroke=\"#94A3B8\" marker-end=\"url(#arrow)\"/><path d=\"M 50 150 L 110 150\" stroke=\"#94A3B8\" marker-end=\"url(#arrow)\"/><path d=\"M 250 150 L 190 150\" stroke=\"#94A3B8\" marker-end=\"url(#arrow)\"/></svg>",
        "caption": "Radial Gravitational Field"
      }
    },
    {
      "id": "svg-uniform-grav-field",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><line x1=\"50\" y1=\"150\" x2=\"250\" y2=\"150\" stroke=\"#334155\" stroke-width=\"4\"/><path d=\"M 100 50 L 100 130\" stroke=\"#94A3B8\" marker-end=\"url(#arrow)\"/><path d=\"M 150 50 L 150 130\" stroke=\"#94A3B8\" marker-end=\"url(#arrow)\"/><path d=\"M 200 50 L 200 130\" stroke=\"#94A3B8\" marker-end=\"url(#arrow)\"/></svg>",
        "caption": "Uniform Gravitational Field"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Gravitational Fields' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
