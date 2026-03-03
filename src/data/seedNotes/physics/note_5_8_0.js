export const note_physics_5_8_0 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define specific heat capacity and specific latent heat; apply Q=mc\u0394\u03b8 and Q=mL to solve thermal energy problems.' }, terms: ['specific heat capacity', 'latent heat'] },
    { id: 'h-shc', type: 'heading', data: { text: 'Specific Heat and Latent Heat', level: 2 }, terms: [] },
    { id: 'eq-shc', type: 'equation', data: { html: 'Q = mc\u0394\u03b8', caption: 'Energy = mass \u00d7 specific heat capacity \u00d7 temperature change' }, terms: [] },
    { id: 'eq-lh', type: 'equation', data: { html: 'Q = mL', caption: 'Energy for phase change (no temperature change)' }, terms: [] },
    { id: 'p-shc', type: 'paragraph', data: { text: 'Specific heat capacity c: energy to raise 1 kg by 1 K (J/(kg K)). Specific latent heat L: energy to change state of 1 kg at constant temperature. L_fusion (solid\u2194liquid) < L_vaporisation (liquid\u2194gas).' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can apply Q=mc\u0394\u03b8 and Q=mL', checked: false }, { text: 'I can interpret heating/cooling curves', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: During a phase change, energy breaks/forms intermolecular bonds without raising temperature.\n\nApply: How much energy to heat 2 kg of water from 20\u00b0C to 100\u00b0C and boil it all? (c=4200, L=2.26\u00d710\u2076)\n\nAnalyze: Why is L_vap >> L_fus? Relate to bond breaking.\n\nEvaluate: Steam burns are worse than water burns at the same temperature. Use latent heat to explain.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Q=mc\u0394\u03b8 (heating). Q=mL (phase change). c: energy per kg per K. L: energy per kg for state change. L_vap > L_fus.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-shc', prompt: 'Define specific heat capacity and state Q=mc\u0394\u03b8.' }], summaryText: 'Q=mc\u0394\u03b8. Q=mL. c=J/(kgK). L_vap>L_fus.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 8', detail: 'Thermal energy', year: '2021', source: 'Pearson Edexcel', tags: ['heat'] }],
};
