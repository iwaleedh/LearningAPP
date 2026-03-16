export const note_olevel_physics_5_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/5 Nuclear Physics/5-1-1-nuclear-model.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand the nuclear model of the atom and the evidence from the Rutherford alpha-scattering experiment; compare the nuclear model with the plum-pudding model.' } },
    { id: 'h-plum', type: 'heading', data: { text: "Thomson's Plum-Pudding Model", level: 2 } },
    { id: 'para-plum', type: 'paragraph', data: { text: "Before Rutherford, the accepted model was J.J. Thomson's <strong>plum-pudding model</strong> (1904). It proposed a diffuse ball of positive charge with electrons (the 'plums') embedded throughout — like plums in a pudding. This model predicted that alpha particles would pass through with only very small deflections." } },
    { id: 'h-experiment', type: 'heading', data: { text: 'The Rutherford–Geiger–Marsden Experiment (1909)', level: 2 } },
    { id: 'para-setup', type: 'paragraph', data: { text: 'Hans Geiger and Ernest Marsden, directed by Rutherford, fired a beam of <strong>alpha particles</strong> from a radioactive source at a very thin sheet of gold foil (only a few atoms thick). A zinc-sulphide detector screen surrounding the foil flashed when struck by an alpha particle, recording where each particle landed.' } },
    { id: 'svg-rutherford', type: 'svg', data: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 300" width="520" height="300">
  <rect width="520" height="300" fill="#f8f9ff" rx="8"/>
  <text x="260" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Rutherford Alpha-Scattering Experiment</text>
  <!-- Source box -->
  <rect x="20" y="130" width="55" height="40" rx="6" fill="#7c3aed" stroke="#5b21b6" stroke-width="2"/>
  <text x="47" y="147" text-anchor="middle" font-size="9" fill="white" font-weight="bold">α source</text>
  <text x="47" y="161" text-anchor="middle" font-size="9" fill="white">(radium)</text>
  <!-- Lead collimator -->
  <rect x="80" y="118" width="18" height="64" fill="#475569"/>
  <rect x="80" y="147" width="18" height="6" fill="#f8f9ff"/>
  <text x="89" y="198" text-anchor="middle" font-size="9" fill="#64748b">lead</text>
  <!-- Gold foil -->
  <rect x="238" y="88" width="7" height="124" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
  <text x="241" y="82" text-anchor="middle" font-size="9" fill="#d97706" font-weight="bold">gold foil</text>
  <!-- Nucleus -->
  <circle cx="241" cy="150" r="5" fill="#ef4444"/>
  <text x="259" y="175" font-size="9" fill="#ef4444" font-weight="bold">nucleus</text>
  <!-- Straight-through particles (most) -->
  <line x1="98" y1="150" x2="490" y2="150" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5"/>
  <polygon points="320,146 330,150 320,154" fill="#7c3aed"/>
  <!-- Slight deflection -->
  <line x1="98" y1="148" x2="246" y2="145" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4"/>
  <line x1="246" y1="145" x2="420" y2="105" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4"/>
  <!-- Large deflection -->
  <line x1="98" y1="152" x2="245" y2="155" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4"/>
  <line x1="245" y1="155" x2="310" y2="230" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4"/>
  <!-- Backscatter -->
  <line x1="98" y1="150" x2="237" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="4"/>
  <line x1="237" y1="150" x2="150" y2="120" stroke="#dc2626" stroke-width="2" stroke-dasharray="4"/>
  <!-- Detector ring -->
  <ellipse cx="360" cy="150" rx="15" ry="110" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="6"/>
  <text x="485" y="154" text-anchor="middle" font-size="9" fill="#10b981">detector</text>
  <!-- Labels -->
  <text x="480" y="145" font-size="8" fill="#7c3aed">most: straight</text>
  <text x="430" y="100" font-size="8" fill="#3b82f6">few: small deflection</text>
  <text x="312" y="245" font-size="8" fill="#f97316">fewer: large deflection</text>
  <text x="100" y="112" font-size="8" fill="#dc2626">rare: backscatter</text>
</svg>`, caption: 'Rutherford scattering: most α particles pass through (empty space); some deflect; very few bounce back (hit tiny nucleus).' } },
    { id: 'h-results', type: 'heading', data: { text: 'Observations and Conclusions', level: 2 } },
    { id: 'list-results', type: 'list', data: { style: 'numbered', items: [
      { text: '<strong>Most α particles passed straight through</strong> → the atom is mostly empty space.' },
      { text: '<strong>Some were deflected at small angles</strong> → a concentrated positive charge exists, causing electrostatic repulsion.' },
      { text: '<strong>Very few (≈1 in 8000) bounced almost straight back</strong> → the positive charge is concentrated in an extremely small, dense region: the <em>nucleus</em>.' },
    ]}},
    { id: 'call-key-nuclear', type: 'callout', data: { style: 'key', title: 'Nuclear Model of the Atom', text: "An atom contains a tiny, dense, positively charged nucleus at its centre containing almost all the atom's mass. Electrons orbit the nucleus at comparatively large distances. The atom is mostly empty space." } },
    { id: 'h-compare', type: 'heading', data: { text: 'Comparing the Two Models', level: 2 } },
    { id: 'tbl-compare', type: 'comparisonTable', data: { caption: 'Plum-pudding model vs nuclear model', headers: ['Feature', 'Plum-Pudding (Thomson)', 'Nuclear Model (Rutherford)'], rows: [
      ['Positive charge', 'Spread throughout atom', 'Concentrated in tiny nucleus'],
      ['Electrons', "Embedded in positive 'dough'", 'Orbit the nucleus at distance'],
      ['Atom interior', 'Solid (no empty space)', 'Mostly empty space'],
      ['Expected α scattering', 'Small deflections only', 'Large deflections + backscatter'],
    ]}},
    { id: 'call-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: "Link each observation to its conclusion: e.g., 'Very few bounced back → the nucleus is tiny and dense and positively charged.' Examiners reward this cause–effect reasoning explicitly." } },
    { id: 'sum-1', type: 'summary', data: { text: "Rutherford's gold-foil experiment proved atoms have a tiny, dense, positively charged nucleus surrounded by mostly empty space where electrons orbit. This replaced Thomson's plum-pudding model." } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Nuclear model: tiny positive nucleus, mostly empty space, electrons orbit. Proven by Rutherford alpha-scattering.',
    cues: [
      { id: 'cue-1', blockId: 'para-setup', prompt: 'Describe the setup of the Rutherford alpha-scattering experiment.', answer: 'Alpha particles fired at a thin gold foil; zinc-sulphide detector screen surrounds the foil to record where particles strike.' },
      { id: 'cue-2', blockId: 'list-results', prompt: 'What does it mean that most alpha particles pass straight through?', answer: 'The atom is mostly empty space — particles pass through without hitting anything.' },
      { id: 'cue-3', blockId: 'list-results', prompt: 'Why did a few alpha particles bounce almost straight back?', answer: 'They collided with or passed very close to the tiny, dense, positively charged nucleus and were strongly repelled by electrostatic (Coulomb) repulsion.' },
      { id: 'cue-4', blockId: 'call-key-nuclear', prompt: 'State the key features of the nuclear model of the atom.', answer: 'Tiny, dense, positively charged nucleus at the centre; electrons orbiting at large distances; atom is mostly empty space.' },
      { id: 'cue-5', blockId: 'tbl-compare', prompt: "Why does the plum-pudding model fail to explain Rutherford's results?", answer: 'It predicted only small deflections (because the positive charge is spread out); it cannot explain large deflections or backscattering.' },
    ],
  },
  evidence: [], mentions: [],
};
