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
        text: 'A nuclide symbol is written as: <sup>A</sup><sub>Z</sub>X<br/><br/>For carbon-12: <sup>12</sup><sub>6</sub>C<br/>• 6 protons (Z = 6)<br/>• 6 neutrons (A − Z = 12 − 6 = 6)<br/>• 6 electrons (neutral atom)<br/><br/>For carbon-13: <sup>13</sup><sub>6</sub>C — still 6 protons but 7 neutrons.'
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
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'table-particles', prompt: 'State the relative mass and relative charge of a proton, a neutron and an electron.' },
      { id: 'c2', blockId: 'table-def', prompt: 'Define atomic number (Z) and mass number (A). How do you calculate the number of neutrons?' },
      { id: 'c3', blockId: 'callout-iso', prompt: 'Define the term isotope. Why do isotopes have identical chemical properties but different physical properties?' },
      { id: 'c4', blockId: 'callout-nuclide', prompt: 'For the nuclide ⁵⁹₂₇Co, state the number of protons, neutrons, and electrons in a neutral atom.' }
    ],
    summaryText: 'Proton (+1, mass 1) and neutron (0, mass 1) are in the nucleus; electrons (−1, negligible mass) surround it. Z = protons = electrons (neutral atom). A = protons + neutrons. Neutrons = A−Z. Isotopes = same Z, different A. Same chemical but different physical properties.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_2_0;