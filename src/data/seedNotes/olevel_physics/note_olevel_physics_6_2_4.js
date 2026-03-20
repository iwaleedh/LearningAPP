export const note_olevel_physics_6_2_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/6 Space Physics/6-2-5-dark-energy.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Explain dark energy as the cause of the universe's accelerating expansion; describe the composition of the universe; outline possible fates of the universe." } },
    { id: 'h-discovery', type: 'heading', data: { text: 'The Discovery: Accelerating Expansion', level: 2 } },
    { id: 'para-disc', type: 'paragraph', data: { text: "Following the Big Bang, scientists expected the universe's expansion to be <strong>slowing down</strong> due to gravity — all matter attracting all other matter. In 1998, two independent teams studying Type Ia supernovae (which are used as 'standard candles' for measuring distance) found a shocking result: the expansion of the universe is actually <strong>speeding up</strong>." } },
    { id: 'para-disc2', type: 'paragraph', data: { text: "This accelerating expansion implies that something is counteracting gravity on the largest scales — pushing space apart. This unknown 'something' was named <strong>dark energy</strong>. It won Saul Perlmutter, Brian Schmidt, and Adam Riess the Nobel Prize in Physics in 2011." } },
    { id: 'call-def', type: 'callout', data: { style: 'key', title: 'Dark Energy', text: 'Dark energy is a hypothetical form of energy pervading all of space that is responsible for the observed accelerating expansion of the universe. It acts against gravity, driving galaxies apart faster and faster over time. Its nature is completely unknown.' } },
    { id: 'h-composition', type: 'heading', data: { text: 'Composition of the Universe', level: 2 } },
    { id: 'para-comp', type: 'paragraph', data: { text: "Based on all current observations (CMB anisotropy, galaxy surveys, supernova data), the universe's total energy–mass content is divided as follows:" } },
    { id: 'svg-pie', type: 'svg', data: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 260" width="380" height="260">
  <rect width="380" height="260" fill="#0f172a" rx="8"/>
  <text x="190" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#78350f">Composition of the Universe</text>
  <!-- Pie chart: Dark energy 68%, Dark matter 27%, Ordinary matter 5% -->
  <!-- Dark energy slice: 68% = 244.8 degrees from 270° to 154.8° (going clockwise from top) -->
  <!-- Using: centre 130,145 radius 90 -->
  <!-- Dark energy: 68% from 270° clockwise to 514.8° (= 154.8°) — nearly 2/3 -->
  <path d="M 130 145 L 130 55 A 90 90 0 1 1 56.4 198.8 Z" fill="#4338ca" opacity="0.85"/>
  <!-- Dark matter: 27% = 97.2 degrees from 154.8° to 252° -->
  <path d="M 130 145 L 56.4 198.8 A 90 90 0 0 1 130 235 Z" fill="#7c3aed" opacity="0.7"/>
  <!-- Ordinary matter: 5% = 18 degrees from 252° to 270° -->
  <path d="M 130 145 L 130 235 A 90 90 0 0 1 130 55 Z" fill="#78350f" opacity="0.85"/>
  <!-- Labels with lines -->
  <!-- Dark energy label -->
  <line x1="175" y1="90" x2="215" y2="75" stroke="#4338ca" stroke-width="1.5"/>
  <text x="218" y="73" font-size="12" fill="#2d2d72" font-weight="bold">Dark Energy</text>
  <text x="218" y="87" font-size="11" fill="#2d2d72">68%</text>
  <text x="218" y="100" font-size="9" fill="#94a3b8">unknown nature;</text>
  <text x="218" y="112" font-size="9" fill="#94a3b8">drives acceleration</text>
  <!-- Dark matter label -->
  <line x1="82" y1="215" x2="60" y2="240" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="18" y="240" font-size="12" fill="#2d1b69" font-weight="bold">Dark Matter</text>
  <text x="22" y="253" font-size="11" fill="#2d1b69">27%</text>
  <!-- Ordinary matter -->
  <line x1="138" y1="235" x2="210" y2="250" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="213" y="247" font-size="12" fill="#78350f" font-weight="bold">Ordinary Matter</text>
  <text x="265" y="260" font-size="11" fill="#44370a">5%</text>
  <text x="213" y="260" font-size="9" fill="#94a3b8">(all atoms, stars, gas)</text>
</svg>`, caption: 'The universe is composed of ~68% dark energy, ~27% dark matter, and only ~5% ordinary (baryonic) matter.' } },
    { id: 'tbl-comp', type: 'comparisonTable', data: { caption: 'Components of the universe', headers: ['Component', 'Fraction', 'Description'], rows: [
      ['Dark energy', '~68%', 'Unknown form of energy; causes accelerating expansion; uniformly distributed in space'],
      ['Dark matter', '~27%', 'Unknown form of matter; gravitates but does not emit light; in halos around galaxies'],
      ['Ordinary matter', '~5%', 'Everything made of atoms: stars, planets, gas, dust, humans — everything we can see or touch'],
    ]}},
    { id: 'h-fate', type: 'heading', data: { text: 'Possible Fates of the Universe', level: 2 } },
    { id: 'list-fate', type: 'list', data: { style: 'bullet', items: [
      { text: '<strong>Big Freeze: </strong>If dark energy continues at its current strength, expansion continues forever. All stars burn out; the universe cools to near absolute zero — a cold, dark, empty end.' },
      { text: '<strong>Big Rip:</strong> If dark energy grows stronger over time, the accelerating expansion eventually tears apart galaxies, then stars, then planets, atoms, and finally space itself.' },
      { text: '<strong>Big Crunch:</strong> If gravity eventually wins (dark energy weakens), expansion slows, stops, and reverses — everything collapses back in a reverse Big Bang. (Currently disfavoured by observations.)' },
    ]}},
    { id: 'call-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Dark energy ≠ dark matter. Dark energy is a property of space itself that causes acceleration of expansion. Dark matter has mass and affects gravity around galaxies. Only ~5% of the universe is ordinary (visible) matter.' } },
    { id: 'sum-1', type: 'summary', data: { text: "Dark energy (~68% of the universe) is the unknown cause of the universe's accelerating expansion, discovered in 1998 via supernova observations. Dark matter (~27%) has gravitational effects only. Only ~5% of the universe is ordinary matter. The universe's fate depends on dark energy's behaviour over time." } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Dark energy: ~68%, causes accelerating expansion. Dark matter: ~27%, gravitational only. Ordinary matter: ~5%. Expansion is speeding up.',
    cues: [
      { id: 'cue-1', blockId: 'para-disc', prompt: "What surprising discovery was made about the universe's expansion in 1998?", answer: "The expansion of the universe is accelerating, not slowing down as gravity would imply. Discovered via Type Ia supernova observations." },
      { id: 'cue-2', blockId: 'call-def', prompt: 'What is dark energy?', answer: "A hypothetical form of energy pervading all of space, responsible for the accelerating expansion of the universe. Its nature is completely unknown." },
      { id: 'cue-3', blockId: 'tbl-comp', prompt: 'What are the three components of the universe and their approximate percentages?', answer: 'Dark energy ~68%, dark matter ~27%, ordinary (baryonic) matter ~5%.' },
      { id: 'cue-4', blockId: 'list-fate', prompt: "Describe two possible fates of the universe under dark energy.", answer: 'Big Freeze: expansion continues forever, universe cools to absolute zero. Big Rip: dark energy grows, eventually tearing apart all structure.' },
      { id: 'cue-5', blockId: 'call-tip', prompt: 'What is the key difference between dark energy and dark matter?', answer: 'Dark energy causes the acceleration of expansion (a property of space). Dark matter has mass and produces gravitational effects on galaxies. They are entirely different phenomena.' },
    ],
  },
  evidence: [], mentions: [],
};
