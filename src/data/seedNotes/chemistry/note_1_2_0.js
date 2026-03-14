/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 0
 * "Protons, neutrons, electrons — structure of the atom"
 * Source: Pearson Edexcel IAL Chemistry — Section 2A.1
 */
export const note_chemistry_1_2_0 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Know the relative masses and charges of protons, neutrons and electrons. Know the terms atomic number, mass number and isotope. Calculate the number of each subatomic particle from a nuclide symbol.' },
      terms: []
    },
    {
      id: 'h-particles',
      type: 'heading',
      data: { text: 'Subatomic Particles', level: 2 },
      terms: []
    },
    {
      id: 'table-particles',
      type: 'comparisonTable',
      data: {
        caption: 'Relative masses and charges of subatomic particles (Section 2A.1)',
        headers: ['Particle', 'Location', 'Relative Mass', 'Relative Charge'],
        rows: [
          ['<strong>Proton</strong>', 'Nucleus', '1', '+1'],
          ['<strong>Neutron</strong>', 'Nucleus', '1', '0'],
          ['<strong>Electron</strong>', 'Shells (orbitals) outside the nucleus', '1/1836 ≈ 0.0005 (negligible)', '−1']
        ]
      },
      terms: ['Proton', 'Neutron', 'Electron']
    },
    {
      id: 'list-particles-detail',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Nucleon</strong> is the collective term for protons and neutrons; the <strong>nucleon number</strong> equals the mass number (A).',
          'In a neutral atom, the number of electrons equals the number of protons — the net charge is zero.',
          'The nucleus is positively charged (due to protons); electrons are negatively charged and occupy shells (energy levels) outside the nucleus.',
          'Neutrons carry no charge — they do not affect chemical behaviour but they do contribute to mass.',
          'Almost all the mass of an atom is concentrated in the nucleus because electrons have negligible mass (≈ 1/1836 of a proton\'s mass).',
          'The strong nuclear force holds protons and neutrons together in the nucleus, overcoming the electrostatic repulsion between protons.'
        ]
      },
      terms: ['Nucleon']
    },
    {
      id: 'h-numbers',
      type: 'heading',
      data: { text: 'Atomic Number, Mass Number and Nuclide Symbols', level: 2 },
      terms: []
    },
    {
      id: 'table-def',
      type: 'comparisonTable',
      data: {
        caption: 'Key nuclear definitions',
        headers: ['Term', 'Symbol', 'Definition'],
        rows: [
          ['<strong>Atomic Number</strong>', 'Z', 'Number of protons in the nucleus. Determines the element. Also equals the number of electrons in a neutral atom.'],
          ['<strong>Mass Number</strong>', 'A', 'Total number of protons + neutrons in the nucleus.'],
          ['<strong>Number of neutrons</strong>', 'A − Z', 'Mass number minus atomic number.']
        ]
      },
      terms: ['Atomic number', 'Mass number', 'Nucleon number']
    },
    {
      id: 'callout-nuclide',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reading a nuclide symbol',
        text: 'A nuclide symbol is written as: <sup>A</sup><sub>Z</sub>X<br/><br/>For carbon-12: <sup>12</sup><sub>6</sub>C<br/>• 6 protons (Z = 6)<br/>• 6 neutrons (A − Z = 12 − 6 = 6)<br/>• 6 electrons (neutral atom)<br/><br/>For carbon-13: <sup>13</sup><sub>6</sub>C — still 6 protons but 7 neutrons.<br/><br/><strong>Rule:</strong> number of neutrons = A − Z. For cobalt-59 (<sup>59</sup><sub>27</sub>Co): 27 protons, 59 − 27 = 32 neutrons, 27 electrons.'
      },
      terms: []
    },
    {
      id: 'h-scale',
      type: 'heading',
      data: { text: 'Size and Scale of the Atom', level: 2 },
      terms: []
    },
    {
      id: 'list-scale',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The diameter of an atom is approximately <strong>10⁻¹⁰ m</strong> (0.1 nm or 1 Ångström).',
          'The diameter of a nucleus is approximately <strong>10⁻¹⁵ m</strong> (1 femtometre, fm).',
          'The nucleus is about <strong>1/100,000</strong> the diameter of the whole atom — the vast majority of an atom is empty space.',
          'Despite its tiny size, the nucleus contains almost all the atom\'s mass (protons and neutrons have relative mass 1, electrons are negligible).',
          'Electrons occupy the empty space outside the nucleus in shells (energy levels) at increasing distances from the nucleus.',
          'Analogy: if an atom were expanded to the size of a football stadium, the nucleus would be roughly the size of a marble at the centre.'
        ]
      },
      terms: []
    },
    {
      id: 'svg-atom',
      type: 'svg',
      data: {
        caption: 'Electron shell diagram for sodium (²³Na): 2, 8, 1 configuration',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 425" font-family="sans-serif" font-size="13">
  <!-- Title -->
  <text x="195" y="20" text-anchor="middle" font-weight="bold" font-size="14" fill="#1565c0">Sodium atom (&#xB2;&#xB3;Na): Z = 11, A = 23</text>
  <!-- Shell 3 (outermost), r=148 -->
  <circle cx="195" cy="215" r="148" fill="none" stroke="#bbdefb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Shell 2, r=95 -->
  <circle cx="195" cy="215" r="95" fill="none" stroke="#90caf9" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Shell 1, r=50 -->
  <circle cx="195" cy="215" r="50" fill="none" stroke="#64b5f6" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Nucleus -->
  <circle cx="195" cy="215" r="25" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
  <text x="195" y="211" text-anchor="middle" fill="white" font-size="11" font-weight="bold">11p&#x207A;</text>
  <text x="195" y="225" text-anchor="middle" fill="white" font-size="11">12n&#xB0;</text>
  <!-- Shell 1: 2 electrons at 270° (top) and 90° (bottom), r=50 -->
  <circle cx="195" cy="165" r="7" fill="#1565c0"/>
  <circle cx="195" cy="265" r="7" fill="#1565c0"/>
  <!-- Shell 2: 8 electrons at 45° intervals, r=95 -->
  <!-- 0°: (290,215) 45°: (262,282) 90°: (195,310) 135°: (128,282) -->
  <!-- 180°: (100,215) 225°: (128,148) 270°: (195,120) 315°: (262,148) -->
  <circle cx="290" cy="215" r="7" fill="#1565c0"/>
  <circle cx="262" cy="282" r="7" fill="#1565c0"/>
  <circle cx="195" cy="310" r="7" fill="#1565c0"/>
  <circle cx="128" cy="282" r="7" fill="#1565c0"/>
  <circle cx="100" cy="215" r="7" fill="#1565c0"/>
  <circle cx="128" cy="148" r="7" fill="#1565c0"/>
  <circle cx="195" cy="120" r="7" fill="#1565c0"/>
  <circle cx="262" cy="148" r="7" fill="#1565c0"/>
  <!-- Shell 3: 1 electron at 270° (top), r=148 -->
  <circle cx="195" cy="67" r="7" fill="#1565c0"/>
  <!-- Leader lines and labels -->
  <line x1="238" y1="190" x2="358" y2="158" stroke="#90caf9" stroke-width="1"/>
  <text x="360" y="156" fill="#1565c0" font-size="12" font-weight="bold">Shell 1</text>
  <text x="360" y="171" fill="#546e7a" font-size="11">2 electrons (max: 2)</text>
  <line x1="298" y1="215" x2="358" y2="248" stroke="#90caf9" stroke-width="1"/>
  <text x="360" y="246" fill="#1565c0" font-size="12" font-weight="bold">Shell 2</text>
  <text x="360" y="261" fill="#546e7a" font-size="11">8 electrons (max: 8)</text>
  <line x1="343" y1="215" x2="358" y2="303" stroke="#90caf9" stroke-width="1"/>
  <text x="360" y="301" fill="#1565c0" font-size="12" font-weight="bold">Shell 3</text>
  <text x="360" y="316" fill="#546e7a" font-size="11">1 electron</text>
  <!-- Configuration label -->
  <text x="195" y="413" text-anchor="middle" fill="#546e7a" font-size="12">Electronic configuration: 2, 8, 1</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'h-iso',
      type: 'heading',
      data: { text: 'Isotopes', level: 2 },
      terms: []
    },
    {
      id: 'callout-iso',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Isotopes',
        text: '<strong>Isotopes</strong> are atoms of the same element that have the same number of protons but different numbers of neutrons. Therefore, they have the same atomic number but different mass numbers.<br/><br/>Isotopes have <strong>identical chemical properties</strong> (same electron configuration) but different physical properties (different mass → different density, boiling point, etc.).'
      },
      terms: ['Isotope']
    },
    {
      id: 'table-iso',
      type: 'comparisonTable',
      data: {
        caption: 'Isotopes of chlorine',
        headers: ['Isotope', 'Protons', 'Neutrons', 'Electrons'],
        rows: [
          ['³⁵Cl (chlorine-35)', '17', '18', '17'],
          ['³⁷Cl (chlorine-37)', '17', '20', '17']
        ]
      },
      terms: []
    },
    {
      id: 'list-iso-detail',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The hydrogen isotopes are the most well-known: ¹H (protium — no neutrons), ²H (deuterium — 1 neutron), ³H (tritium — 2 neutrons, radioactive).',
          'All isotopes of an element have the <strong>same electron configuration</strong> → identical chemical properties (same reactions, same compounds formed).',
          '<strong>Physical properties differ</strong> because of different masses: different density, different melting/boiling points, and different rates of diffusion (heavier isotopes diffuse more slowly, as rate ∝ 1/√M).',
          'Isotopes are detected by <strong>mass spectrometry</strong> — each isotope produces a separate peak at a different m/z value with an intensity proportional to its abundance.',
          'Radioactive isotopes (radioisotopes) have unstable nuclei that decay by emitting α, β or γ radiation — used in medicine (radiotherapy, imaging) and in carbon-14 dating of organic material.'
        ]
      },
      terms: []
    },
    {
      id: 'h-ions',
      type: 'heading',
      data: { text: 'Ions and Electron Count', level: 2 },
      terms: []
    },
    {
      id: 'list-ions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'An <strong>ion</strong> is an atom (or group of atoms) that has gained or lost one or more electrons, giving it a net electrical charge.',
          '<strong>Cation (positive ion):</strong> formed when an atom <em>loses</em> electrons → fewer electrons than protons. Number of electrons = Z − charge (e.g. Na⁺: 11 − 1 = 10 electrons).',
          '<strong>Anion (negative ion):</strong> formed when an atom <em>gains</em> electrons → more electrons than protons. Number of electrons = Z + |charge| (e.g. Cl⁻: 17 + 1 = 18 electrons).',
          'The <strong>number of protons never changes</strong> when an ion forms — only electrons are gained or lost.',
          'The charge on an ion equals the number of protons minus the number of electrons: charge = p − e.',
          'Transition metals can form ions with different charges (e.g. Fe²⁺ and Fe³⁺) by losing different numbers of 3d electrons — this is explored in more detail in later topics.'
        ]
      },
      terms: ['Ion', 'Cation', 'Anion']
    },
    {
      id: 'callout-ion-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Electron Counts of Common Ions',
        text: '<strong>Na⁺</strong> (Z = 11, loses 1e⁻): 11 − 1 = <strong>10 electrons</strong><br/><strong>Mg²⁺</strong> (Z = 12, loses 2e⁻): 12 − 2 = <strong>10 electrons</strong><br/><strong>Al³⁺</strong> (Z = 13, loses 3e⁻): 13 − 3 = <strong>10 electrons</strong><br/><strong>O²⁻</strong> (Z = 8, gains 2e⁻): 8 + 2 = <strong>10 electrons</strong><br/><strong>F⁻</strong> (Z = 9, gains 1e⁻): 9 + 1 = <strong>10 electrons</strong><br/><strong>Cl⁻</strong> (Z = 17, gains 1e⁻): 17 + 1 = <strong>18 electrons</strong><br/><strong>Fe²⁺</strong> (Z = 26, loses 2e⁻): 26 − 2 = <strong>24 electrons</strong><br/><strong>Fe³⁺</strong> (Z = 26, loses 3e⁻): 26 − 3 = <strong>23 electrons</strong><br/><br/><em>Note: Na⁺, Mg²⁺, Al³⁺, O²⁻ and F⁻ all have 10 electrons — they are <strong>isoelectronic</strong> with neon.</em>'
      },
      terms: ['Isoelectronic']
    },
    {
      id: 'checklist-1-2-0',
      type: 'checklist',
      data: {
        items: [
          { text: 'State the relative mass and relative charge of protons, neutrons and electrons', checked: false },
          { text: 'Define atomic number (Z), mass number (A), and nucleon number; calculate the number of each subatomic particle from a nuclide symbol ᴬ_ZX', checked: false },
          { text: 'State the approximate diameter of an atom (~10⁻¹⁰ m) and a nucleus (~10⁻¹⁵ m); explain why the atom is mostly empty space', checked: false },
          { text: 'Define isotopes; explain why isotopes have identical chemical properties but different physical properties', checked: false },
          { text: 'Calculate the number of electrons in a cation or anion: cation = Z − charge; anion = Z + |charge|', checked: false },
          { text: 'Give examples of isoelectronic species (e.g. Na⁺, Mg²⁺, Al³⁺, O²⁻, F⁻ all have 10 electrons like Ne)', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'An atom has a tiny, dense, positively charged nucleus (protons + neutrons) surrounded by electrons in shells. Proton: mass 1, charge +1; Neutron: mass 1, charge 0; Electron: negligible mass, charge −1. Nucleon = proton or neutron; nucleon number = mass number A. Z = protons = electrons (neutral atom); neutrons = A − Z. Atom ~10⁻¹⁰ m, nucleus ~10⁻¹⁵ m — mostly empty space. Isotopes: same Z, different A — same chemical but different physical properties. Ions: cation loses electrons (electrons = Z − charge); anion gains electrons (electrons = Z + |charge|). Proton number never changes. Isoelectronic species share the same electron count (e.g. Na⁺, Mg²⁺, Al³⁺, O²⁻, F⁻ all have 10e⁻).' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'table-particles', prompt: 'State the relative mass and relative charge of a proton, a neutron and an electron.' },
      { id: 'c2', blockId: 'table-def', prompt: 'Define atomic number (Z) and mass number (A). How do you calculate the number of neutrons?' },
      { id: 'c3', blockId: 'callout-iso', prompt: 'Define the term isotope. Why do isotopes have identical chemical properties but different physical properties?' },
      { id: 'c4', blockId: 'callout-nuclide', prompt: 'For the nuclide ⁵⁹₂₇Co, state the number of protons, neutrons, and electrons in a neutral atom.' },
      { id: 'c5', blockId: 'list-scale', prompt: 'State the approximate diameter of an atom and of a nucleus. What is the ratio of nuclear diameter to atomic diameter?' },
      { id: 'c6', blockId: 'callout-ion-worked', prompt: 'How many electrons are in Na⁺, Cl⁻, Fe²⁺ and O²⁻? Show the calculation for each, and name a noble gas that shares the same electron count as Na⁺.' }
    ],
    summaryText: 'Proton: mass 1, charge +1; Neutron: mass 1, charge 0; Electron: negligible mass, charge −1. Nucleon = proton or neutron; nucleon number = mass number A. Z = protons = electrons (neutral atom); neutrons = A − Z. Atom ~10⁻¹⁰ m diameter; nucleus ~10⁻¹⁵ m — mostly empty space. Isotopes: same Z, different A — identical chemical but different physical properties. Ions: cation loses electrons (electrons = Z − charge); anion gains electrons (electrons = Z + |charge|); proton count never changes. Na⁺/Mg²⁺/Al³⁺/O²⁻/F⁻ are isoelectronic with Ne (10 electrons).',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_2_0;