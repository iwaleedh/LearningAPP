export const note_olevel_chemistry_2_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-1-2-atomic-structure.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the structure of an atom, state the relative charges and masses of subatomic particles, and use atomic number and mass number to describe atomic composition.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Subatomic Particles', level: 2 }
    },
    {
      id: 'tbl-particles',
      type: 'comparisonTable',
      data: {
        caption: 'Properties of subatomic particles',
        headers: ['Particle', 'Symbol', 'Relative Charge', 'Relative Mass', 'Location'],
        rows: [
          ['Proton', 'p', '+1', '1', 'Nucleus'],
          ['Neutron', 'n', '0 (neutral)', '1', 'Nucleus'],
          ['Electron', 'e⁻', '−1', '1/1840 (≈ 0)', 'Shells around nucleus']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Atomic Number and Mass Number', level: 2 }
    },
    {
      id: 'call-numbers',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Atomic Number (Z) and Mass Number (A)',
        text: '<strong>Atomic number (Z)</strong> = number of protons in the nucleus. This defines which element it is — every atom of the same element has the same atomic number.<br/><br/><strong>Mass number (A)</strong> = total number of protons + neutrons in the nucleus. (Electrons have negligible mass so are not counted.)<br/><br/><strong>Number of neutrons</strong> = A − Z<br/><br/>In a <strong>neutral atom</strong>: number of electrons = number of protons = Z'
      }
    },
    {
      id: 'call-notation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Nuclide Notation',
        text: 'Atoms are represented as: <sup>A</sup><sub>Z</sub>X<br/><br/>Example: <sup>23</sup><sub>11</sub>Na (sodium)<br/>• A = 23 (mass number): 11 protons + 12 neutrons<br/>• Z = 11 (atomic number): 11 protons, 11 electrons<br/>• Neutrons = 23 − 11 = 12'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Determining Particle Numbers',
        text: 'For <sup>40</sup><sub>20</sub>Ca (calcium):<br/>• Atomic number Z = 20 → 20 protons<br/>• Mass number A = 40 → protons + neutrons = 40<br/>• Neutrons = 40 − 20 = 20<br/>• Electrons = 20 (neutral atom)<br/><br/>For the Ca²⁺ ion:<br/>• Electrons = 20 − 2 = 18 (lost 2 electrons)'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Ions and Electron Count',
        text: 'For ions: if a positive ion (cation) has charge +n, subtract n electrons from the neutral atom count. If a negative ion (anion) has charge −n, add n electrons. The number of protons NEVER changes in a chemical reaction.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Atoms contain protons (+1, mass 1) and neutrons (0, mass 1) in the nucleus, with electrons (−1, negligible mass) in shells. Atomic number Z = proton count; mass number A = protons + neutrons; neutrons = A − Z. In a neutral atom, electrons = protons.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Atoms have protons and neutrons in the nucleus with electrons in shells; Z = protons, A = protons + neutrons.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-particles', prompt: 'State the relative charge and mass of a proton, neutron and electron.', answer: 'Proton: charge +1, mass 1. Neutron: charge 0, mass 1. Electron: charge −1, mass ≈ 0 (1/1840).' },
      { id: 'cue-2', blockId: 'call-numbers', prompt: 'Define atomic number and mass number.', answer: 'Atomic number (Z) = number of protons; defines the element. Mass number (A) = number of protons + neutrons. Number of neutrons = A − Z.' },
      { id: 'cue-3', blockId: 'call-worked1', prompt: 'For ⁴⁰₂₀Ca, state the number of protons, neutrons and electrons.', answer: '20 protons, 20 neutrons (40−20), 20 electrons (neutral atom).' }
    ]
  },
  evidence: [],
  mentions: []
};
