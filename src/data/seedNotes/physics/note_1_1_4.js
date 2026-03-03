export const note_physics_1_1_4 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: "Draw and interpret free-body diagrams; apply Newton's three laws of motion to solve problems involving forces and acceleration." }, terms: ['Newton laws', 'free-body diagram'] },
    { id: 'h-newton', type: 'heading', data: { text: "Newton's Laws of Motion", level: 2 }, terms: [] },
    { id: 'callout-n1', type: 'callout', data: { style: 'key', title: "Newton's First Law", text: 'An object remains at rest or moves with constant velocity unless acted on by a resultant force. This defines inertia.' }, terms: ['inertia'] },
    { id: 'callout-n2', type: 'callout', data: { style: 'key', title: "Newton's Second Law", text: 'Resultant force = rate of change of momentum: F = \u0394p/\u0394t. For constant mass: F = ma.' }, terms: [] },
    { id: 'callout-n3', type: 'callout', data: { style: 'key', title: "Newton's Third Law", text: 'When A exerts a force on B, B exerts an equal and opposite force on A. Forces act on different objects, are same type, equal magnitude, opposite direction.' }, terms: [] },
    { id: 'eq-n2', type: 'equation', data: { html: 'F = ma', caption: 'Net force = mass \u00d7 acceleration (constant mass)' }, terms: [] },
    { id: 'h-fbd', type: 'heading', data: { text: 'Free-Body Diagrams', level: 2 }, terms: [] },
    { id: 'p-fbd', type: 'paragraph', data: { text: 'A free-body diagram shows ALL forces on a single object. Common forces: weight (W=mg, down), normal reaction (N, perpendicular to surface), tension (T, along string), friction (f, opposing motion), drag.' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example \u2014 Lift', text: 'A 70 kg person in a lift accelerating up at 2 m/s\u00b2.\nN \u2212 W = ma\nN = 70(9.81+2) = 826.7 N' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: "I can state Newton's three laws", checked: false }, { text: 'I can draw free-body diagrams', checked: false }, { text: 'I can apply F=ma', checked: false }, { text: "I can identify Newton's third law pairs", checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: "Understand: N1 defines equilibrium, N2 quantifies force effects, N3 explains interactions.\n\nApply: A 5 kg block on a 30\u00b0 incline with \u03bc=0.2. Draw FBD and find acceleration.\n\nAnalyze: Horse pulls cart, cart pulls back equally (N3). Why does the system accelerate?\n\nEvaluate: Newton's laws fail at relativistic speeds. Discuss their range of validity." }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'N1: no resultant force = constant velocity. N2: F=ma (constant mass). N3: equal opposite on DIFFERENT objects. FBD: all forces on one object.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-n2', prompt: "State Newton's second law." },
    { id: 'cue-2', blockId: 'callout-n3', prompt: "State Newton's third law conditions." },
    { id: 'cue-3', blockId: 'p-fbd', prompt: 'What forces go on a free-body diagram for a book on a table?' },
  ], summaryText: "N1: constant v if no force. N2: F=ma. N3: equal opposite on different objects.", ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 1', detail: "Newton's laws and FBD", year: '2021', source: 'Pearson Edexcel', tags: ['Newton', 'forces'] }],
};
