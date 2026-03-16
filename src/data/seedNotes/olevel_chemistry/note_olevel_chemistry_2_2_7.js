export const note_olevel_chemistry_2_2_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-3-1-covalent-bonds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe covalent bonding as the sharing of electron pairs, and draw dot-and-cross diagrams for simple covalent molecules including H₂, Cl₂, HCl, H₂O, NH₃, CH₄, CO₂ and N₂.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Covalent Bonding', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition of Covalent Bond',
        text: 'A <strong>covalent bond</strong> is formed by the <strong>sharing of a pair of electrons</strong> between two atoms. Each atom contributes one electron to the shared pair.<br/><br/>Covalent bonds form between <strong>non-metal atoms</strong>. The shared electron pair is attracted to both nuclei simultaneously, creating the bond.<br/><br/>• <strong>Single bond</strong> = 1 shared pair of electrons<br/>• <strong>Double bond</strong> = 2 shared pairs of electrons<br/>• <strong>Triple bond</strong> = 3 shared pairs of electrons'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Common Covalent Molecules', level: 2 }
    },
    {
      id: 'tbl-molecules',
      type: 'comparisonTable',
      data: {
        caption: 'Dot-and-cross information for common covalent molecules',
        headers: ['Molecule', 'Formula', 'Bond type', 'Bonds per molecule', 'Shape'],
        rows: [
          ['Hydrogen', 'H₂', 'Single (H–H)', '1', 'Linear'],
          ['Chlorine', 'Cl₂', 'Single (Cl–Cl)', '1', 'Linear'],
          ['Hydrogen chloride', 'HCl', 'Single (H–Cl)', '1', 'Linear'],
          ['Water', 'H₂O', '2 single (O–H)', '2', 'Bent (angular)'],
          ['Ammonia', 'NH₃', '3 single (N–H)', '3', 'Pyramidal'],
          ['Methane', 'CH₄', '4 single (C–H)', '4', 'Tetrahedral'],
          ['Carbon dioxide', 'CO₂', '2 double (C=O)', '2 double bonds', 'Linear'],
          ['Nitrogen', 'N₂', 'Triple (N≡N)', '1 triple bond', 'Linear']
        ]
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Dot-and-Cross: Water (H₂O)',
        text: 'Oxygen (2,6) needs 2 more electrons to fill its outer shell. Each hydrogen (1) needs 1 more electron.<br/><br/>O shares 1 electron with each H:<br/>• Each H gets a full shell (2 electrons)<br/>• O gets a full outer shell (8 electrons)<br/>• 2 bonding pairs + 2 lone pairs on O<br/><br/>Structure: H—O—H with 2 lone pairs on O<br/>In the diagram: draw O in the centre with 2 pairs of dots (lone pairs) and one × from each H, sharing one dot from O.'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Dot-and-Cross: Carbon Dioxide (CO₂)',
        text: 'Carbon (2,4) needs 4 more electrons. Oxygen (2,6) needs 2 more electrons.<br/><br/>C shares 2 electrons with each O atom → <strong>double bond</strong> (C=O) on each side.<br/><br/>O=C=O<br/>• C: 4 shared pairs → full outer shell (8 electrons)<br/>• Each O: 2 shared pairs + 2 lone pairs → full outer shell (8 electrons)'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Drawing Dot-and-Cross Diagrams',
        text: '1. Count outer electrons for each atom using group numbers (e.g. N = Group 15 → 5 outer electrons).<br/>2. Calculate how many bonds each atom needs (atoms need to reach 8 outer electrons, H needs 2).<br/>3. Draw shared pairs between atoms and lone pairs on each atom.<br/>4. Check each atom has a full outer shell in the final diagram.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Covalent bonds form by sharing electron pairs between non-metal atoms. Single bonds share 1 pair; double bonds share 2 pairs; triple bonds share 3 pairs. Each atom achieves a full outer shell through sharing.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Covalent bonds = shared electron pairs between non-metals; single (1 pair), double (2 pairs), triple (3 pairs); each achieves full outer shells via sharing.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'Define a covalent bond.', answer: 'A covalent bond is formed by the sharing of a pair of electrons between two non-metal atoms. Each atom contributes one electron to the shared pair.' },
      { id: 'cue-2', blockId: 'tbl-molecules', prompt: 'What type of bond is present in N₂ and CO₂?', answer: 'N₂ has a triple bond (N≡N, 3 shared pairs). CO₂ has two double bonds (O=C=O, 2 shared pairs each).' },
      { id: 'cue-3', blockId: 'call-worked1', prompt: 'How many bonding pairs and lone pairs does oxygen have in a water molecule?', answer: '2 bonding pairs (one to each H) and 2 lone pairs on the oxygen atom.' }
    ]
  },
  evidence: [],
  mentions: []
};
