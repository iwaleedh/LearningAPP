export const note_olevel_physics_5_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/5 Nuclear Physics/5-2-2-properties-of-radiation.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Compare the nature, charge, mass, range, penetrating power, and ionising ability of alpha, beta, and gamma radiation.' } },
    { id: 'h-alpha', type: 'heading', data: { text: 'Alpha (α) Radiation', level: 2 } },
    { id: 'para-alpha', type: 'paragraph', data: { text: 'An alpha particle is a <strong>helium-4 nucleus</strong> (2 protons + 2 neutrons). Because it carries a +2 charge and has a relatively large mass, it interacts very strongly with matter and causes heavy ionisation. This also means it is quickly stopped after travelling only a short distance.' } },
    { id: 'list-alpha', type: 'list', data: { style: 'bullet', items: [
      { text: '<strong>Charge:</strong> +2' },
      { text: '<strong>Mass:</strong> 4 u (heaviest of the three)' },
      { text: '<strong>Range in air:</strong> ≈ 5 cm' },
      { text: '<strong>Stopped by:</strong> a sheet of paper, or a few cm of air' },
      { text: '<strong>Ionisation:</strong> highly ionising (strongest ioniser)' },
    ]}},
    { id: 'h-beta', type: 'heading', data: { text: 'Beta-Minus (β⁻) Radiation', level: 2 } },
    { id: 'para-beta', type: 'paragraph', data: { text: 'A beta-minus particle is a <strong>fast-moving electron</strong> ejected from the nucleus. It has −1 charge and very small mass, so it ionises air less strongly than alpha and travels further.' } },
    { id: 'list-beta', type: 'list', data: { style: 'bullet', items: [
      { text: '<strong>Charge:</strong> −1' },
      { text: '<strong>Mass:</strong> negligible (≈ 1/1840 u)' },
      { text: '<strong>Range in air:</strong> up to ~1 m' },
      { text: '<strong>Stopped by:</strong> ~3 mm of aluminium, or a few metres of air' },
      { text: '<strong>Ionisation:</strong> moderately ionising' },
    ]}},
    { id: 'h-gamma', type: 'heading', data: { text: 'Gamma (γ) Radiation', level: 2 } },
    { id: 'para-gamma', type: 'paragraph', data: { text: 'Gamma rays are <strong>high-energy electromagnetic radiation</strong> (photons). They have no charge and no mass, interact weakly with matter, and can penetrate thick materials. Thick lead or several metres of concrete reduce (but do not completely stop) gamma radiation.' } },
    { id: 'list-gamma', type: 'list', data: { style: 'bullet', items: [
      { text: '<strong>Charge:</strong> 0' },
      { text: '<strong>Mass:</strong> 0' },
      { text: '<strong>Range in air:</strong> effectively unlimited (intensity decreases with distance)' },
      { text: '<strong>Stopped by:</strong> several cm of lead or thick concrete (not completely stopped, only reduced)' },
      { text: '<strong>Ionisation:</strong> weakly ionising' },
    ]}},
    { id: 'tbl-compare', type: 'comparisonTable', data: { caption: 'Comparison of α, β and γ radiation', headers: ['Property', 'Alpha (α)', 'Beta (β⁻)', 'Gamma (γ)'], rows: [
      ['Nature', 'Helium-4 nucleus', 'Fast electron', 'EM radiation (photon)'],
      ['Charge', '+2', '−1', '0'],
      ['Mass (u)', '4', '≈ 0', '0'],
      ['Range in air', '≈ 5 cm', '≈ 1 m', 'unlimited'],
      ['Stopped by', 'Paper / skin', '3 mm aluminium', 'Several cm lead'],
      ['Ionising ability', 'High', 'Moderate', 'Low'],
    ]}},
    { id: 'svg-penetration', type: 'svg', data: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 240" width="480" height="240">
  <rect width="480" height="240" fill="#0f172a" rx="8"/>
  <text x="240" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Penetrating Power of α, β and γ Radiation</text>
  <!-- Source -->
  <rect x="20" y="60" width="50" height="120" rx="6" fill="#475569"/>
  <text x="45" y="118" text-anchor="middle" font-size="10" fill="#1e293b">Source</text>
  <!-- Alpha arrow -->
  <line x1="70" y1="80" x2="120" y2="80" stroke="#ef4444" stroke-width="2.5" marker-end="url(#a1)"/>
  <text x="95" y="72" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="bold">α</text>
  <!-- Beta arrow -->
  <line x1="70" y1="120" x2="230" y2="120" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#a2)"/>
  <text x="155" y="112" text-anchor="middle" font-size="10" fill="#3b82f6" font-weight="bold">β</text>
  <!-- Gamma arrow -->
  <line x1="70" y1="160" x2="390" y2="160" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#a3)"/>
  <text x="235" y="152" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="bold">γ</text>
  <!-- Paper barrier -->
  <rect x="120" y="55" width="10" height="130" fill="#78350f" stroke="#d97706" stroke-width="1.5"/>
  <text x="125" y="200" text-anchor="middle" font-size="8" fill="#d97706">paper</text>
  <!-- Alpha blocked here by paper - X mark -->
  <text x="140" y="85" font-size="12" fill="#ef4444">✕</text>
  <!-- Aluminium barrier -->
  <rect x="230" y="55" width="14" height="130" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
  <text x="237" y="200" text-anchor="middle" font-size="8" fill="#64748b">3mm Al</text>
  <!-- Beta blocked by aluminium -->
  <text x="255" y="125" font-size="12" fill="#3b82f6">✕</text>
  <!-- Lead barrier -->
  <rect x="360" y="55" width="20" height="130" fill="#334155" stroke="#1e293b" stroke-width="1.5"/>
  <text x="370" y="200" text-anchor="middle" font-size="8" fill="#334155">lead</text>
  <!-- Gamma reduced by lead -->
  <line x1="380" y1="160" x2="420" y2="160" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4" marker-end="url(#a4)"/>
  <text x="420" y="152" font-size="8" fill="#7c3aed">reduced</text>
  <defs>
    <marker id="a1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ef4444"/></marker>
    <marker id="a2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/></marker>
    <marker id="a3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#7c3aed"/></marker>
    <marker id="a4" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#7c3aed"/></marker>
  </defs>
</svg>`, caption: 'Penetrating power: α stopped by paper; β stopped by 3 mm aluminium; γ only reduced by thick lead.' } },
    { id: 'call-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Remember: the most ionising (α) is the least penetrating, and the least ionising (γ) is the most penetrating. Ionisation uses up the particle\'s energy, so heavily ionising particles stop sooner.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Alpha: +2 charge, mass 4 u; stopped by paper; highly ionising. Beta: −1 charge, negligible mass; stopped by 3 mm Al; moderately ionising. Gamma: no charge/mass; reduced by thick lead; weakly ionising.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'α: +2, 4u, stopped by paper, highly ionising. β: −1, negligible, 3mm Al. γ: no charge/mass, reduced by lead.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-compare', prompt: 'What is the charge and mass of an alpha particle?', answer: 'Charge +2; mass 4 u (equivalent to a helium-4 nucleus).' },
      { id: 'cue-2', blockId: 'list-beta', prompt: 'What material stops beta radiation and how thick must it be?', answer: 'About 3 mm of aluminium.' },
      { id: 'cue-3', blockId: 'svg-penetration', prompt: 'Can any material completely stop gamma radiation?', answer: 'No. Gamma is only reduced, not completely stopped, even by thick lead or concrete.' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'Why is alpha radiation the most ionising but least penetrating?', answer: 'Alpha particles interact very strongly with matter, causing dense ionisation. Each interaction uses energy, so they stop quickly.' },
      { id: 'cue-5', blockId: 'para-alpha', prompt: 'What is the physical nature of an alpha particle?', answer: 'A helium-4 nucleus: 2 protons and 2 neutrons, charge +2, mass 4 u.' },
    ],
  },
  evidence: [], mentions: [],
};
