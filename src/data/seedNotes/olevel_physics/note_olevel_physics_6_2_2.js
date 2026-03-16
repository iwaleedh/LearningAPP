export const note_olevel_physics_6_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/6 Space Physics/6-2-3-evidence-for-big-bang.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Describe and explain the three main pieces of evidence for the Big Bang: galaxy redshift, Cosmic Microwave Background Radiation (CMBR), and hydrogen/helium abundance.' } },
    { id: 'h-overview', type: 'heading', data: { text: 'Three Key Lines of Evidence', level: 2 } },
    { id: 'para-overview', type: 'paragraph', data: { text: 'The Big Bang theory is supported by three independent and complementary pieces of observational evidence. Each piece was obtained differently, yet all three point consistently to the same conclusion: the universe began in an extremely hot, dense state approximately 13.8 billion years ago.' } },
    { id: 'h-redshift', type: 'heading', data: { text: '1. Galaxy Redshift and the Expanding Universe', level: 2 } },
    { id: 'para-rs', type: 'paragraph', data: { text: "Observations of the spectra of distant galaxies show <strong>redshift</strong> — absorption lines shifted toward longer wavelengths. This is explained by the Doppler effect: galaxies are moving away from us. The systematic observation that all distant galaxies are receding (Hubble, 1929) directly implies that the universe is expanding." } },
    { id: 'list-redshift-points', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>What it tells us:</strong> Space is expanding — distances between galaxies are increasing." },
      { text: "<strong>Big Bang implication:</strong> Extrapolating the expansion backwards leads to a point where all matter was concentrated together — the Big Bang origin." },
      { text: "<strong>Hubble's law:</strong> v = H₀d confirms speed of recession proportional to distance." },
    ]}},
    { id: 'h-cmbr', type: 'heading', data: { text: '2. Cosmic Microwave Background Radiation (CMBR)', level: 2 } },
    { id: 'para-cmbr', type: 'paragraph', data: { text: 'The <strong>CMBR</strong> was accidentally discovered by Arno Penzias and Robert Wilson in 1965. They detected a uniform microwave "hiss" coming equally from all directions in the sky. This signal corresponds to a temperature of about 2.73 K.' } },
    { id: 'list-cmbr', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>What it is:</strong> The thermal radiation left over from about 380,000 years after the Big Bang, when the universe cooled enough for neutral atoms to form. At that moment, photons were released and have been travelling freely ever since." },
      { text: "<strong>Why it's microwave:</strong> The original hot radiation has been redshifted by the expansion of the universe over 13.8 billion years — from visible/UV to today's microwave wavelengths." },
      { text: "<strong>Big Bang implication:</strong> The existence of this nearly uniform background radiation, filling all space, is exactly what the Big Bang model predicted before its discovery. No competing theory predicted it." },
    ]}},
    { id: 'call-cmbr', type: 'callout', data: { style: 'key', title: 'Why the CMBR is so Compelling', text: 'The CMBR is extraordinarily uniform (same temperature in all directions to 1 part in 100,000), consistent with a hot early universe that expanded and cooled uniformly. Tiny fluctuations (seeds of structure) match predictions for galaxy formation. The Planck satellite has mapped the CMBR in exquisite detail, confirming the Big Bang model.' } },
    { id: 'h-abundance', type: 'heading', data: { text: '3. Hydrogen and Helium Abundance', level: 2 } },
    { id: 'para-abund', type: 'paragraph', data: { text: "In the first three minutes after the Big Bang, temperatures and densities were high enough for nuclear fusion of hydrogen into helium and lithium. This process is called <strong>Big Bang nucleosynthesis</strong>. The Big Bang model predicts that by mass, ~75% of all ordinary matter should be hydrogen and ~25% should be helium, with only tiny traces of heavier elements." } },
    { id: 'list-abund', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>Prediction:</strong> ~75% hydrogen, ~25% helium by mass from the Big Bang." },
      { text: "<strong>Observation:</strong> Spectroscopic analysis of the oldest stars, interstellar gas, and intergalactic medium confirms this ratio remarkably well." },
      { text: "<strong>Big Bang implication:</strong> Alternative theories (e.g. Steady State) cannot naturally explain why the universe has so much helium. The Big Bang's first-three-minute nucleosynthesis is the only compelling explanation." },
    ]}},
    { id: 'tbl-summary', type: 'comparisonTable', data: { caption: 'Summary of evidence for the Big Bang', headers: ['Evidence', 'Observation', 'Implication'], rows: [
      ['Galaxy redshift', 'All distant galaxies show redshifted spectra; recession speed ∝ distance', 'Universe is expanding; extrapolating backward → Big Bang origin'],
      ['CMBR', 'Uniform 2.73 K microwave radiation from all directions', 'Predicted afterglow of hot early universe, now redshifted to microwave range'],
      ['H/He abundance', '~75% H, ~25% He across universe (by mass)', 'Consistent only with fusion in first 3 minutes of Big Bang'],
    ]}},
    { id: 'call-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'For each piece of evidence, be ready to give: (a) the observation, (b) what it means, and (c) why it supports the Big Bang. The CMBR question often asks why it is in the microwave range — always mention redshift due to expansion of the universe.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Three evidence pillars for the Big Bang: (1) Galaxy redshift → expanding universe; (2) CMBR — uniform 2.73 K microwave radiation, the redshifted afterglow of the hot early universe; (3) ~75% H and ~25% He abundance, consistent with Big Bang nucleosynthesis in the first 3 minutes.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Big Bang evidence: redshift (expanding universe), CMBR (2.73 K microwave afterglow), H:He = 75:25 (nucleosynthesis).',
    cues: [
      { id: 'cue-1', blockId: 'list-redshift-points', prompt: 'How does galaxy redshift support the Big Bang?', answer: "All distant galaxies are receding (shown by redshift). Running the expansion backwards in time leads to all matter concentrated in one point — the Big Bang origin." },
      { id: 'cue-2', blockId: 'para-cmbr', prompt: 'What is the CMBR and when was it discovered?', answer: 'A uniform 2.73 K microwave radiation background filling the sky in all directions, discovered accidentally by Penzias and Wilson in 1965.' },
      { id: 'cue-3', blockId: 'list-cmbr', prompt: 'Why is the CMBR in the microwave range rather than visible light?', answer: 'The radiation was originally hot visible/UV light, but has been redshifted by the expansion of the universe over 13.8 billion years to the microwave range.' },
      { id: 'cue-4', blockId: 'para-abund', prompt: 'What ratio of hydrogen to helium does the Big Bang predict, and does observation agree?', answer: 'The Big Bang predicts ~75% hydrogen and ~25% helium. Observation of stars and intergalactic gas confirms this ratio remarkably accurately.' },
      { id: 'cue-5', blockId: 'tbl-summary', prompt: 'Which of the three pieces of evidence was predicted BEFORE it was discovered?', answer: 'The CMBR — its existence as a remnant radiation from the hot early universe was predicted theoretically, then discovered accidentally in 1965, strongly validating the Big Bang model.' },
    ],
  },
  evidence: [], mentions: [],
};
