export const note_physics_1_1_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Resolve vectors into perpendicular components; add vectors graphically and by calculation; understand scalar vs vector quantities.' }, terms: ['vectors', 'scalars', 'resolution'] },
    { id: 'h-vec', type: 'heading', data: { text: 'Vectors and Scalars', level: 2 }, terms: [] },
    { id: 'list-sv', type: 'list', data: { style: 'unordered', items: ['Scalars have magnitude only: mass, speed, energy, temperature, distance, time', 'Vectors have magnitude AND direction: displacement, velocity, acceleration, force, momentum'] }, terms: [] },
    { id: 'h-resolve', type: 'heading', data: { text: 'Resolving Vectors', level: 2 }, terms: [] },
    { id: 'eq-res', type: 'equation', data: { html: 'F<sub>x</sub> = F cos \u03b8 &nbsp;&nbsp; F<sub>y</sub> = F sin \u03b8', caption: 'Resolving a vector into horizontal and vertical components' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'A 50 N force at 30\u00b0 to horizontal.\nFx = 50 cos 30\u00b0 = 43.3 N\nFy = 50 sin 30\u00b0 = 25.0 N\nCheck: \u221a(43.3\u00b2 + 25.0\u00b2) = 50.0 N \u2713' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can distinguish scalars from vectors', checked: false }, { text: 'I can resolve a vector into components', checked: false }, { text: 'I can find resultant magnitude and direction', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Resolution replaces one vector with two perpendicular components, simplifying 2D problems into two 1D problems.\n\nApply: An aircraft flies at 200 m/s at 40\u00b0 north of east. Find northward and eastward components.\n\nAnalyze: When two forces act at 90\u00b0, why is the resultant always less than the arithmetic sum?\n\nEvaluate: A student adds two 10 N forces and gets 20 N. When is this correct? When wrong?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Vectors: magnitude + direction. Scalars: magnitude only. Resolve: Fx=Fcos\u03b8, Fy=Fsin\u03b8. Resultant: F=\u221a(Fx\u00b2+Fy\u00b2), \u03b8=tan\u207b\u00b9(Fy/Fx).' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'list-sv', prompt: 'Give three scalars and three vectors.' },
    { id: 'cue-2', blockId: 'eq-res', prompt: 'How do you resolve a vector into components?' },
  ], summaryText: 'Resolve: Fx=Fcos\u03b8, Fy=Fsin\u03b8. Resultant: \u221a(Fx\u00b2+Fy\u00b2).', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 1', detail: 'Vectors and resolution', year: '2021', source: 'Pearson Edexcel', tags: ['vectors'] }],
};
