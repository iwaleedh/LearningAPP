export const note_olevel_chemistry_2_2_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-3-2-molecules-and-compounds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between molecular formula, empirical formula, structural formula and displayed formula.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Types of Chemical Formula', level: 2 }
    },
    {
      id: 'tbl-formulae',
      type: 'comparisonTable',
      data: {
        caption: 'Types of chemical formula compared',
        headers: ['Formula type', 'Definition', 'Example (ethane)'],
        rows: [
          ['Molecular formula', 'Actual number of each type of atom in one molecule', 'C₂H₆'],
          ['Empirical formula', 'Simplest whole-number ratio of atoms in a compound', 'CH₃'],
          ['Structural formula', 'Shows the arrangement of atoms and bonds in a simplified linear form', 'CH₃CH₃'],
          ['Displayed formula', 'Shows all atoms and all bonds drawn out fully', 'H₃C—CH₃ (all bonds shown)']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Molecular vs Empirical Formula', level: 2 }
    },
    {
      id: 'call-compare',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Molecular vs Empirical Formula Examples',
        text: '<strong>Glucose:</strong> Molecular = C₆H₁₂O₆ | Empirical = CH₂O<br/><strong>Ethene:</strong> Molecular = C₂H₄ | Empirical = CH₂<br/><strong>Water:</strong> Molecular = H₂O | Empirical = H₂O (same!)<br/><strong>Hydrogen peroxide:</strong> Molecular = H₂O₂ | Empirical = HO<br/><br/>The empirical formula is found by dividing all subscripts by their highest common factor.'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Naming Compounds',
        text: 'For binary compounds (two elements):<br/>• Metal + non-metal: name the metal first, then the non-metal with -ide ending. E.g. NaCl = sodium chloride; MgO = magnesium oxide.<br/>• Two non-metals: use prefixes (di-, tri-, tetra-). E.g. CO₂ = carbon dioxide; PCl₃ = phosphorus trichloride.<br/>• Acids: named by anion (HCl = hydrochloric acid; H₂SO₄ = sulfuric acid; HNO₃ = nitric acid).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Molecular formula shows actual atom counts; empirical formula shows simplest ratios; structural formula shows bonding arrangement; displayed formula shows all atoms and bonds. The empirical formula is found by simplifying the molecular formula to lowest whole numbers.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Molecular formula = actual atoms; empirical formula = simplest ratio; structural = bonding arrangement; displayed = all bonds drawn.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-formulae', prompt: 'What is the difference between a molecular formula and an empirical formula?', answer: 'Molecular formula shows the actual number of each atom in one molecule. Empirical formula shows the simplest whole-number ratio of atoms.' },
      { id: 'cue-2', blockId: 'call-compare', prompt: 'What is the empirical formula of glucose (C₆H₁₂O₆)?', answer: 'CH₂O — divide all subscripts by 6 (highest common factor): C₆÷6, H₁₂÷6, O₆÷6.' },
      { id: 'cue-3', blockId: 'call-compare', prompt: 'What is the empirical formula of hydrogen peroxide (H₂O₂)?', answer: 'HO — divide both subscripts by 2.' }
    ]
  },
  evidence: [],
  mentions: []
};
