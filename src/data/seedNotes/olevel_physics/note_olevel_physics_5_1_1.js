export const note_olevel_physics_5_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/5 Nuclear Physics/5-1-2-atomic-structure.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Describe the structure of an atom; state the charge and relative mass of protons, neutrons and electrons; use nuclide notation to calculate particle counts.' } },
    { id: 'h-particles', type: 'heading', data: { text: 'Sub-atomic Particles', level: 2 } },
    { id: 'tbl-particles', type: 'comparisonTable', data: { caption: 'Properties of sub-atomic particles', headers: ['Particle', 'Symbol', 'Location', 'Charge', 'Relative mass'], rows: [
      ['Proton', 'p', 'Nucleus', '+1', '1 u'],
      ['Neutron', 'n', 'Nucleus', '0', '1 u'],
      ['Electron', 'e', 'Orbits nucleus', '−1', 'negligible (≈ 1/1840)'],
    ]}},
    { id: 'para-nucleus', type: 'paragraph', data: { text: 'The <strong>nucleus</strong> is at the centre of the atom. It contains protons and neutrons (together called <em>nucleons</em>). It is extremely small (diameter ≈ 10⁻¹⁵ m) compared to the whole atom (≈ 10⁻¹⁰ m), yet contains almost all the atom\'s mass. Electrons occupy the space around the nucleus.' } },
    { id: 'h-numbers', type: 'heading', data: { text: 'Proton Number and Mass Number', level: 2 } },
    { id: 'list-numbers', type: 'list', data: { style: 'bullet', items: [
      { text: '<strong>Atomic number (proton number) Z</strong> = number of protons. Defines the element.' },
      { text: '<strong>Mass number (nucleon number) A</strong> = protons + neutrons.' },
      { text: '<strong>Number of neutrons N</strong> = A − Z.' },
      { text: 'In a <em>neutral</em> atom: electrons = protons = Z.' },
      { text: 'In an <em>ion</em>: electrons ≠ protons (gained or lost electrons).' },
    ]}},
    { id: 'h-nuclide', type: 'heading', data: { text: 'Nuclide Notation', level: 2 } },
    { id: 'para-nuclide', type: 'paragraph', data: { text: 'Every atom (nuclide) is uniquely specified by writing the mass number at the top-left and the proton number at the bottom-left of the chemical symbol:' } },
    { id: 'eq-nuclide', type: 'equation', data: { html: '<span style="font-size:1.5em; line-height:1.8"><sup>A</sup><sub style="margin-left:-0.5em">Z</sub>&thinsp;X</span>', caption: 'Nuclide notation: A (mass number, top) and Z (proton number, bottom) of element symbol X' } },
    { id: 'para-examples', type: 'paragraph', data: { text: '<strong>Examples:</strong> Carbon-12 → <sup>12</sup><sub>6</sub>C: 6 protons, 6 neutrons, 6 electrons. Sodium-23 → <sup>23</sup><sub>11</sub>Na: 11 protons, 12 neutrons, 11 electrons. Uranium-238 → <sup>238</sup><sub>92</sub>U: 92 protons, 146 neutrons, 92 electrons.' } },
    { id: 'svg-atom', type: 'svg', data: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 300" width="420" height="300">
  <rect width="420" height="300" fill="#1c3a64" rx="8"/>
  <text x="210" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Carbon-12 Atom Structure</text>
  <!-- Electron orbits -->
  <ellipse cx="210" cy="165" rx="130" ry="42" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="5"/>
  <ellipse cx="210" cy="165" rx="88" ry="28" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="5" transform="rotate(-50,210,165)"/>
  <ellipse cx="210" cy="165" rx="88" ry="28" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="5" transform="rotate(50,210,165)"/>
  <!-- Nucleus background -->
  <circle cx="210" cy="165" r="26" fill="#3d1212" stroke="#fca5a5" stroke-width="1.5"/>
  <!-- Protons -->
  <circle cx="200" cy="157" r="9" fill="#ef4444" stroke="#dc2626" stroke-width="1.5"/>
  <text x="200" y="161" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">p⁺</text>
  <circle cx="219" cy="157" r="9" fill="#ef4444" stroke="#dc2626" stroke-width="1.5"/>
  <text x="219" y="161" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">p⁺</text>
  <!-- Neutrons -->
  <circle cx="200" cy="175" r="9" fill="#64748b" stroke="#475569" stroke-width="1.5"/>
  <text x="200" y="179" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">n</text>
  <circle cx="219" cy="175" r="9" fill="#64748b" stroke="#475569" stroke-width="1.5"/>
  <text x="219" y="179" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">n</text>
  <!-- Electrons -->
  <circle cx="340" cy="165" r="7" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="340" y="169" text-anchor="middle" font-size="8" fill="#1e293b">e⁻</text>
  <circle cx="80" cy="165" r="7" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="80" y="169" text-anchor="middle" font-size="8" fill="#1e293b">e⁻</text>
  <circle cx="163" cy="125" r="7" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="163" y="129" text-anchor="middle" font-size="8" fill="#1e293b">e⁻</text>
  <!-- Labels -->
  <text x="258" y="155" font-size="10" fill="#ef4444" font-weight="bold">Nucleus</text>
  <text x="258" y="168" font-size="9" fill="#64748b">6 protons (red)</text>
  <text x="258" y="181" font-size="9" fill="#64748b">6 neutrons (grey)</text>
  <line x1="255" y1="160" x2="240" y2="162" stroke="#ef4444" stroke-width="1"/>
  <text x="355" y="148" font-size="10" fill="#3b82f6">Electrons</text>
  <text x="355" y="161" font-size="9" fill="#3b82f6">(6 orbiting)</text>
  <!-- Label box -->
  <rect x="20" y="38" width="90" height="60" rx="6" fill="#1e293b" stroke="#e2e8f0" stroke-width="1"/>
  <text x="65" y="56" text-anchor="middle" font-size="18" fill="#1e293b" font-weight="bold">¹²C</text>
  <text x="42" y="72" text-anchor="middle" font-size="11" fill="#64748b">₆</text>
  <text x="65" y="88" text-anchor="middle" font-size="9" fill="#64748b">Z=6, A=12, N=6</text>
</svg>`, caption: 'Carbon-12: 6 protons and 6 neutrons in the nucleus (Z=6, A=12), 6 electrons orbiting.' } },
    { id: 'h-worked', type: 'heading', data: { text: 'Worked Example', level: 2 } },
    { id: 'call-worked', type: 'callout', data: { style: 'worked', title: 'Finding Particle Counts from Nuclide Notation', text: 'Given: ⁵⁶₂₆Fe (Iron-56)\n\n• Protons (Z) = 26\n• Mass number (A) = 56\n• Neutrons = A − Z = 56 − 26 = 30\n• Electrons (neutral atom) = Z = 26\n\nGiven: ²³⁸₉₂U (Uranium-238)\n• Protons = 92, Neutrons = 238 − 92 = 146, Electrons = 92' } },
    { id: 'call-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Neutrons = A − Z (never A alone). In a neutral atom, electrons = protons. If the question says it is an ion (e.g. Fe²⁺), electrons = protons − charge = 26 − 2 = 24.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Atoms have a tiny, dense nucleus (protons + neutrons) orbited by electrons. Z = proton number (defines the element); A = protons + neutrons; N = A − Z. Nuclide notation: ᴬ_ZX.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Z = protons (defines element); A = p + n; N = A − Z; electrons = Z (neutral atom).',
    cues: [
      { id: 'cue-1', blockId: 'tbl-particles', prompt: 'State the charge and relative mass of a proton, neutron, and electron.', answer: 'Proton: +1, 1 u. Neutron: 0, 1 u. Electron: −1, negligible.' },
      { id: 'cue-2', blockId: 'list-numbers', prompt: 'How many neutrons does ⁵⁶₂₆Fe have?', answer: 'N = A − Z = 56 − 26 = 30 neutrons.' },
      { id: 'cue-3', blockId: 'eq-nuclide', prompt: 'In nuclide notation ᴬ_ZX, what do A and Z represent?', answer: 'A is the mass number (total nucleons = p + n); Z is the proton/atomic number.' },
      { id: 'cue-4', blockId: 'call-worked', prompt: 'How many protons, neutrons, and electrons does ²³⁸₉₂U have?', answer: 'Protons = 92; neutrons = 238 − 92 = 146; electrons = 92.' },
      { id: 'cue-5', blockId: 'para-nucleus', prompt: 'How does the size of the nucleus compare to that of the whole atom?', answer: 'Nucleus ≈ 10⁻¹⁵ m; atom ≈ 10⁻¹⁰ m. The nucleus is about 100,000 times smaller.' },
    ],
  },
  evidence: [], mentions: [],
};
