export const note_physics_1_2_7 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 2: determination of viscosity of a liquid by Stokes\' Law using a falling ball method.' }, terms: ['core practical', 'viscosity'] },
    { id: 'h-cp2', type: 'heading', data: { text: 'Core Practical 2: Viscosity of a Liquid', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Drop small steel ball into tall cylinder of viscous liquid (e.g. glycerol).\n2. Mark distance bands on the cylinder.\n3. Time the ball between marks once terminal velocity is reached.\n4. At terminal velocity: mg = upthrust + 6\u03c0\u03b7rv\n5. Rearrange to find \u03b7 = 2r\u00b2(\u03c1_s\u2212\u03c1_l)g / 9v' }, terms: [] },
    { id: 'list-errors', type: 'list', data: { style: 'unordered', items: ['Ensure terminal velocity is reached before measuring (ignore first few cm)', 'Use small balls for laminar flow', 'Measure ball diameter with micrometer (repeat at different orientations)', 'Temperature affects viscosity \u2014 keep constant', 'Parallax error when timing past marks'] }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe the falling ball method', checked: false }, { text: 'I can derive the viscosity equation', checked: false }, { text: 'I can identify errors and improvements', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: At terminal velocity, forces balance perfectly. Measuring v_t and knowing other variables lets us calculate viscosity.\n\nApply: A 2 mm radius steel ball reaches v_t = 0.05 m/s in glycerol. Calculate \u03b7. (\u03c1_s=7800, \u03c1_l=1260 kg/m\u00b3)\n\nAnalyze: Why must the ball be far from the cylinder walls? How does wall proximity affect drag?\n\nEvaluate: This method gives viscosity at one temperature. How would you modify it to investigate how viscosity varies with temperature?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Drop ball in viscous liquid. At terminal velocity: W=upthrust+drag. \u03b7=2r\u00b2(\u03c1_s\u2212\u03c1_l)g/9v. Needs laminar flow, small balls, constant temperature.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-key', prompt: 'Describe the method for finding viscosity by falling ball.' },
    { id: 'cue-2', blockId: 'list-errors', prompt: 'Why must terminal velocity be reached before timing?' },
  ], summaryText: 'Falling ball at terminal v. \u03b7=2r\u00b2(\u03c1_s\u2212\u03c1_l)g/9v. Laminar flow, constant T.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP2', detail: 'Viscosity determination', year: '2021', source: 'Pearson Edexcel', tags: ['practical', 'viscosity'] }],
};
