export const note_physics_2_4_4 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'State and apply Kirchhoff\'s first and second laws to solve circuit problems.' }, terms: ['Kirchhoff'] },
    { id: 'h-kirch', type: 'heading', data: { text: 'Kirchhoff\'s Laws', level: 2 }, terms: [] },
    { id: 'callout-k1', type: 'callout', data: { style: 'key', title: 'Kirchhoff\'s First Law (KCL)', text: 'The sum of currents entering a junction = sum of currents leaving. This is conservation of charge. \u2211I_in = \u2211I_out.' }, terms: [] },
    { id: 'callout-k2', type: 'callout', data: { style: 'key', title: 'Kirchhoff\'s Second Law (KVL)', text: 'In any closed loop, the sum of EMFs = sum of PDs. This is conservation of energy. \u2211\u03b5 = \u2211IR.' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'A 12V battery with 2\u03a9 internal resistance drives a 4\u03a9 and 6\u03a9 resistor in series.\n\u03b5 = I(R+r): 12 = I(4+6+2) = 12I \u2192 I = 1A\nPD across 4\u03a9: V = 1\u00d74 = 4V\nPD across 6\u03a9: V = 1\u00d76 = 6V\nLost volts: Ir = 1\u00d72 = 2V. Check: 4+6+2 = 12V \u2713' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can state both Kirchhoff\'s laws', checked: false }, { text: 'I can apply them to solve circuit problems', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: KCL = charge conservation; KVL = energy conservation. Together they solve any circuit.\n\nApply: Two batteries (6V with 1\u03a9 and 4V with 0.5\u03a9) connected in opposition. Find the current.\n\nAnalyze: Why does KVL work for any closed loop, even one that doesn\'t follow the actual current path?\n\nEvaluate: Complex circuits may have multiple loops. Is there a simpler alternative to Kirchhoff\'s laws for these?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'KCL: \u2211I_in = \u2211I_out (charge conserved). KVL: \u2211\u03b5 = \u2211IR (energy conserved). Apply to junctions and closed loops.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-k1', prompt: 'State Kirchhoff\'s first law and the conservation principle.' },
    { id: 'cue-2', blockId: 'callout-k2', prompt: 'State Kirchhoff\'s second law.' },
  ], summaryText: 'KCL: \u2211I_in=\u2211I_out. KVL: \u2211\u03b5=\u2211IR.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 4', detail: 'Kirchhoff\'s laws', year: '2021', source: 'Pearson Edexcel', tags: ['Kirchhoff'] }],
};
