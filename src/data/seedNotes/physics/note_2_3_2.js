export const note_physics_2_3_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand standing (stationary) waves; identify nodes, antinodes and harmonics; compare with progressive waves.' }, terms: ['standing wave', 'nodes', 'harmonics'] },
    { id: 'h-standing', type: 'heading', data: { text: 'Standing Waves', level: 2 }, terms: [] },
    { id: 'p-form', type: 'paragraph', data: { text: 'Standing waves form when two waves of the same frequency, wavelength and amplitude travel in opposite directions and superpose. This occurs with reflection at boundaries (e.g. string fixed at both ends).' }, terms: ['standing wave'] },
    { id: 'list-features', type: 'list', data: { style: 'unordered', items: ['Nodes: points of zero displacement (destructive superposition)', 'Antinodes: points of maximum displacement', 'Distance between adjacent nodes = \u03bb/2', 'All points between two nodes oscillate in phase', 'Points on opposite sides of a node are in antiphase (180\u00b0)'] }, terms: [] },
    { id: 'table-harm', type: 'comparisonTable', data: { headers: ['Harmonic', 'Name', 'String pattern', 'f'], rows: [['1st', 'Fundamental', '1 antinode, 2 nodes', 'f\u2081'], ['2nd', '1st overtone', '2 antinodes, 3 nodes', '2f\u2081'], ['3rd', '2nd overtone', '3 antinodes, 4 nodes', '3f\u2081']], caption: 'Harmonics on a string fixed at both ends' }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Standing vs Progressive Waves', text: 'Standing: no net energy transfer, nodes/antinodes, amplitude varies with position.\nProgressive: energy transferred, all points have same amplitude, continuous phase change.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can explain how standing waves form', checked: false }, { text: 'I can identify nodes and antinodes', checked: false }, { text: 'I can sketch first three harmonics', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Standing waves occur at resonant frequencies where an exact number of half-wavelengths fit the boundary conditions.\n\nApply: A 1.2 m string vibrates in its 3rd harmonic at 450 Hz. Find the wave speed.\n\nAnalyze: Why do open and closed pipes have different harmonic series?\n\nEvaluate: Musical instruments produce standing waves. Discuss how the harmonic content determines timbre.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Standing waves: superposition of two opposite waves. Nodes (zero), antinodes (max). Node spacing=\u03bb/2. No net energy transfer. Harmonics: f_n=nf\u2081.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'list-features', prompt: 'Define nodes and antinodes.' },
    { id: 'cue-2', blockId: 'callout-key', prompt: 'Compare standing and progressive waves.' },
  ], summaryText: 'Standing: two opposite waves superpose. Nodes, antinodes. \u03bb/2 between nodes. f_n=nf\u2081.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 3', detail: 'Standing waves', year: '2021', source: 'Pearson Edexcel', tags: ['standing waves'] }],
};
