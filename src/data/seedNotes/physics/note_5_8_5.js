export const note_physics_5_8_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 13: determination of specific latent heat of a substance.' }, terms: ['core practical', 'latent heat'] },
    { id: 'h-cp13', type: 'heading', data: { text: 'Core Practical 13: Latent Heat', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Use electrical heater to melt/boil substance.\n2. Measure mass change \u0394m during phase change.\n3. Energy supplied E = Pt = VIt.\n4. L = E/\u0394m.\n5. Account for heat losses.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe the method', checked: false }, { text: 'I can calculate L from data', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: L = E/\u0394m. Heat losses make measured L too high. A second run at different power helps correct.\n\nApply: Heater: P=50W, runs for 300s, melts 0.03 kg ice. Calculate L_fus.\n\nAnalyze: Why is the measured value typically higher than the accepted value?\n\nEvaluate: How would you modify this experiment to reduce heat losses?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'L=E/\u0394m=Pt/\u0394m. Heater supplies E=VIt. Heat losses \u2192 overestimate. Insulation helps.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'callout-key', prompt: 'Describe the latent heat practical.' }], summaryText: 'L=E/\u0394m. E=VIt. Heat losses overestimate L.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP13', detail: 'Latent heat', year: '2021', source: 'Pearson Edexcel', tags: ['practical'] }],
};
