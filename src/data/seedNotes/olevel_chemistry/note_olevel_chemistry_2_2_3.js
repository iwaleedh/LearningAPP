export const note_olevel_chemistry_2_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-1-4-isotopes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define isotopes, describe examples of isotopes, and calculate relative atomic mass as a weighted average from isotope data.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What are Isotopes?', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition of Isotopes',
        text: '<strong>Isotopes</strong> are atoms of the <strong>same element</strong> that have the <strong>same atomic number (Z)</strong> but <strong>different mass numbers (A)</strong>.<br/><br/>This means they have:<br/>• The <strong>same number of protons</strong> (same element)<br/>• The <strong>same number of electrons</strong> (same chemical properties)<br/>• <strong>Different numbers of neutrons</strong> (different mass numbers)<br/><br/>Isotopes have <strong>identical chemical properties</strong> (same electron configuration) but slightly different <strong>physical properties</strong> (different densities, slightly different boiling points).'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Examples of Isotopes', level: 2 }
    },
    {
      id: 'tbl-isotopes',
      type: 'comparisonTable',
      data: {
        caption: 'Isotopes of common elements',
        headers: ['Element', 'Isotope', 'Protons', 'Neutrons', 'Electrons', 'Natural Abundance'],
        rows: [
          ['Chlorine', 'Cl-35 (³⁵₁₇Cl)', '17', '18', '17', '75%'],
          ['Chlorine', 'Cl-37 (³⁷₁₇Cl)', '17', '20', '17', '25%'],
          ['Carbon', 'C-12 (¹²₆C)', '6', '6', '6', '98.9%'],
          ['Carbon', 'C-14 (¹⁴₆C)', '6', '8', '6', '~0.01% (radioactive)'],
          ['Hydrogen', 'H-1 (protium)', '1', '0', '1', '99.98%'],
          ['Hydrogen', 'H-2 (deuterium)', '1', '1', '1', '0.02%']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Calculating Relative Atomic Mass (Ar)', level: 2 }
    },
    {
      id: 'call-ar',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Relative Atomic Mass Formula',
        text: 'The relative atomic mass (Ar) is the <strong>weighted average</strong> of the masses of all naturally occurring isotopes, taking into account their relative abundance:<br/><br/>Ar = Σ (mass of isotope × % abundance) ÷ 100'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Ar of Chlorine',
        text: 'Chlorine has two isotopes:<br/>• Cl-35: 75% abundance, mass 35<br/>• Cl-37: 25% abundance, mass 37<br/><br/>Ar = (35 × 75 + 37 × 25) ÷ 100<br/>Ar = (2625 + 925) ÷ 100<br/>Ar = 3550 ÷ 100<br/>Ar = <strong>35.5</strong><br/><br/>This explains why chlorine\'s Ar is 35.5 (not a whole number).'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Why Ar is Not Always a Whole Number',
        text: 'Relative atomic mass values that are not whole numbers (e.g. Cl = 35.5, Cu = 63.5) are due to the existence of isotopes. The Ar is a weighted average, not the mass of a single atom.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Isotopes are atoms of the same element with the same proton number but different neutron numbers. They have identical chemical properties but different physical properties. Relative atomic mass is the weighted average of isotope masses based on their natural abundances.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Isotopes: same protons, different neutrons; same chemical properties. Ar = weighted average of isotope masses × abundances / 100.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'Define isotopes and state what is the same and different between them.', answer: 'Isotopes are atoms of the same element with the same atomic number (Z) but different mass numbers (A). Same protons, same electrons → same chemical properties. Different neutrons → different physical properties.' },
      { id: 'cue-2', blockId: 'tbl-isotopes', prompt: 'How many neutrons do Cl-35 and Cl-37 each have?', answer: 'Cl-35: 35−17 = 18 neutrons. Cl-37: 37−17 = 20 neutrons.' },
      { id: 'cue-3', blockId: 'call-worked1', prompt: 'Calculate the Ar of chlorine given Cl-35 (75%) and Cl-37 (25%).', answer: 'Ar = (35×75 + 37×25) ÷ 100 = (2625 + 925) ÷ 100 = 3550 ÷ 100 = 35.5' }
    ]
  },
  evidence: [],
  mentions: []
};
