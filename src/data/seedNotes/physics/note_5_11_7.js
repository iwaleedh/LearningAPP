export const note_physics_5_11_7 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Estimate the age of the universe from Hubble constant; discuss evidence for the Big Bang and the fate of the universe.' }, terms: ['Big Bang', 'universe age'] },
    { id: 'h-age', type: 'heading', data: { text: 'Universe Age and Fate', level: 2 }, terms: [] },
    { id: 'eq-age', type: 'equation', data: { html: 't \u2248 1/H\u2080', caption: 'Age of universe \u2248 1/Hubble constant' }, terms: [] },
    { id: 'list-evidence', type: 'list', data: { style: 'unordered', items: ['CMB radiation: uniform 2.7 K background \u2014 relic of hot early universe', 'Redshift of galaxies: universe is expanding (Hubble)', 'Abundance of light elements (H, He): matches Big Bang nucleosynthesis predictions', 'Age \u2248 1/H\u2080 \u2248 14 billion years'] }, terms: [] },
    { id: 'p-fate', type: 'paragraph', data: { text: 'The fate depends on density: open (expand forever), flat (expand at decreasing rate), closed (re-collapse). Current evidence: accelerating expansion (dark energy).' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can estimate universe age from H\u2080', checked: false }, { text: 'I can list Big Bang evidence', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: 1/H\u2080 gives age assuming constant expansion rate. CMB is the strongest evidence for the Big Bang.\n\nApply: H\u2080=70 km/s/Mpc. Convert to SI and calculate t=1/H\u2080 in years.\n\nAnalyze: Why does the CMB have a black-body spectrum peaked at 2.7 K?\n\nEvaluate: Dark energy causes accelerating expansion. If confirmed, what does this mean for the ultimate fate?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 't\u22481/H\u2080\u224814 Gyr. Evidence: CMB (2.7K), redshift, element abundances. Fate: depends on density and dark energy. Currently accelerating.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'list-evidence', prompt: 'List evidence for the Big Bang.' }], summaryText: 't\u22481/H\u2080\u224814Gyr. CMB, redshift, He abundance. Accelerating expansion.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 11', detail: 'Universe age and fate', year: '2021', source: 'Pearson Edexcel', tags: ['Big Bang', 'cosmology'] }],
};
