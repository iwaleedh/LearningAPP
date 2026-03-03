export const note_physics_5_10_3 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand resonance; explain natural frequency, forced oscillations and resonance curves.' }, terms: ['resonance', 'natural frequency'] },
    { id: 'h-res', type: 'heading', data: { text: 'Resonance', level: 2 }, terms: [] },
    { id: 'p-res', type: 'paragraph', data: { text: 'Every oscillating system has a natural frequency f\u2080. When a driving force has frequency = f\u2080, resonance occurs: amplitude is maximum and energy transfer is most efficient. The amplitude peak is sharper with less damping.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can define natural frequency and resonance', checked: false }, { text: 'I can sketch resonance curves', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Resonance = driving frequency matches natural frequency. Energy input per cycle is maximised.\n\nApply: Soldiers break step on bridges. Explain why using resonance.\n\nAnalyze: How does damping affect the resonance curve (peak height. width, frequency)?\n\nEvaluate: Resonance is useful (MRI, radio tuning) but dangerous (Tacoma Narrows bridge). Compare examples.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Resonance: driving f = natural f\u2080. Max amplitude. Less damping = sharper peak. Can be useful or destructive.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'p-res', prompt: 'Define resonance and explain when it occurs.' }], summaryText: 'Resonance: f_drive=f\u2080. Max amplitude. Damping broadens peak.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 10', detail: 'Resonance', year: '2021', source: 'Pearson Edexcel', tags: ['resonance'] }],
};
