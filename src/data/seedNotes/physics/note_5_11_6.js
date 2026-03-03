export const note_physics_5_11_6 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand redshift and Hubble\u2019s law; calculate recession velocity and distance; explain the expanding universe.' }, terms: ['redshift', 'Hubble'] },
    { id: 'h-red', type: 'heading', data: { text: 'Redshift and Hubble\u2019s Law', level: 2 }, terms: [] },
    { id: 'eq-red', type: 'equation', data: { html: 'z = \u0394\u03bb/\u03bb = v/c', caption: 'Redshift (for v << c)' }, terms: [] },
    { id: 'eq-hubble', type: 'equation', data: { html: 'v = H\u2080d', caption: 'Hubble\u2019s law: recession velocity \u221d distance' }, terms: [] },
    { id: 'p-hubble', type: 'paragraph', data: { text: 'Distant galaxies show redshifted spectra: wavelengths stretched. v=H\u2080d where H\u2080\u224870 km/s/Mpc. Further galaxies recede faster: the universe is expanding. The expansion is of space itself, not objects moving through space.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate redshift from wavelength data', checked: false }, { text: 'I can apply Hubble\u2019s law', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Hubble\u2019s law shows a linear relationship: universe is expanding uniformly. Extrapolating backwards gives the Big Bang.\n\nApply: Galaxy has z=0.05. Find recession velocity and distance (H\u2080=70 km/s/Mpc).\n\nAnalyze: Why does Hubble\u2019s law imply the universe had a beginning?\n\nEvaluate: Recent measurements of H\u2080 disagree (67 vs 73). Discuss the \u201cHubble tension\u201d.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'z=\u0394\u03bb/\u03bb=v/c. v=H\u2080d. H\u2080\u224870 km/s/Mpc. Further=faster recession. Universe expanding. Big Bang: extrapolate back.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-hubble', prompt: 'State Hubble\u2019s law.' }], summaryText: 'z=v/c. v=H\u2080d. H\u2080\u224870. Universe expanding.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 11', detail: 'Hubble\u2019s law', year: '2021', source: 'Pearson Edexcel', tags: ['Hubble', 'redshift'] }],
};
