export const note_physics_2_3_9 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Explain the photoelectric effect; understand photon energy, work function, threshold frequency and stopping potential.' }, terms: ['photoelectric effect', 'photon', 'work function'] },
    { id: 'h-pe', type: 'heading', data: { text: 'Photoelectric Effect and Photons', level: 2 }, terms: [] },
    { id: 'eq-photon', type: 'equation', data: { html: 'E = hf = hc/\u03bb', caption: 'Photon energy (h = 6.63\u00d710\u207b\u00b3\u2074 J s)' }, terms: [] },
    { id: 'eq-pe', type: 'equation', data: { html: 'hf = \u03c6 + E<sub>k(max)</sub>', caption: 'Einstein\'s photoelectric equation' }, terms: [] },
    { id: 'list-obs', type: 'list', data: { style: 'unordered', items: ['Below threshold frequency f\u2080: no electrons emitted regardless of intensity', 'Above f\u2080: emission is instantaneous', 'Increasing intensity increases number of electrons, not max KE', 'Max KE depends on frequency only (not intensity)', 'Work function \u03c6 = hf\u2080 = minimum energy to free an electron'] }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Wave-Particle Duality', text: 'Light behaves as waves (interference, diffraction) AND particles (photoelectric effect). Each photon carries energy E=hf. de Broglie wavelength: \u03bb=h/p=h/mv.' }, terms: ['wave-particle duality'] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can explain photoelectric observations', checked: false }, { text: 'I can apply E=hf and hf=\u03c6+Ek', checked: false }, { text: 'I understand wave-particle duality', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: The photoelectric effect cannot be explained by wave theory \u2014 it requires quantised photons. One photon interacts with one electron.\n\nApply: UV light (f=1.2\u00d710\u00b9\u2075 Hz) hits metal with \u03c6=4.5 eV. Find max KE of photoelectrons.\n\nAnalyze: Why does increasing intensity increase current but NOT max KE?\n\nEvaluate: Einstein won the Nobel Prize for explaining this, not relativity. Discuss the significance of the photoelectric effect in physics.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'E=hf=hc/\u03bb. hf=\u03c6+Ek(max). Below f\u2080: no emission. Intensity\u2192more electrons, not more KE. Wave-particle duality. \u03bb=h/p.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-pe', prompt: 'State Einstein\'s photoelectric equation.' },
    { id: 'cue-2', blockId: 'list-obs', prompt: 'List three observations of the photoelectric effect that wave theory can\'t explain.' },
  ], summaryText: 'E=hf. hf=\u03c6+Ek(max). f<f\u2080: no emission. \u03bb=h/p.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 3', detail: 'Photoelectric effect', year: '2021', source: 'Pearson Edexcel', tags: ['photoelectric', 'photons'] }],
};
