export const note_olevel_chemistry_11_11_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-1-1-organic-formulae.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Interpret and write molecular, empirical, structural, and displayed formulae for organic compounds.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Organic Formulae', level: 2 }
    },
    {
      id: 'tbl-forms',
      type: 'comparisonTable',
      data: {
        caption: 'Types of formula for ethanol (C₂H₅OH) and propane (C₃H₈) as examples',
        headers: ['Formula type', 'Definition', 'Ethanol example', 'Propane example'],
        rows: [
          ['Molecular', 'Shows the actual total number of each type of atom', 'C₂H₆O', 'C₃H₈'],
          ['Empirical', 'Simplest whole-number ratio of atoms', 'C₁H₃O (or CH₃O)', 'CH₈/₃ → not used (use molecular)'],
          ['Structural', 'Shows the arrangement of atoms and bonds in a condensed form', 'CH₃CH₂OH', 'CH₃CH₂CH₃'],
          ['Displayed (graphic)', 'Shows ALL bonds as individual lines between atoms', 'Full structural diagram showing H-C-C-O-H with all H bonds', 'Full structural showing all C-H and C-C bonds']
        ]
      }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definitions',
        text: '<strong>Molecular formula:</strong> gives the actual number of each type of atom in one molecule.<br/>E.g. ethane = C₂H₆; ethanoic acid = C₂H₄O₂<br/><br/><strong>Empirical formula:</strong> simplest ratio of atoms. Divide subscripts by their HCF.<br/>E.g. C₂H₆ → CH₃ (empirical); C₂H₄O₂ → CH₂O<br/><br/><strong>Structural formula:</strong> condensed representation showing the grouping of atoms.<br/>E.g. ethane: CH₃CH₃; ethanoic acid: CH₃COOH<br/><br/><strong>Displayed formula:</strong> shows all covalent bonds as lines; carbon = 4 bonds, hydrogen = 1 bond, oxygen = 2 bonds.'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Drawing displayed formulae',
        text: 'For any organic molecule:<br/>• Carbon always has exactly 4 bonds<br/>• Hydrogen always has 1 bond<br/>• Oxygen always has 2 bonds<br/>• Nitrogen has 3 bonds<br/><br/>If you draw a carbon with only 3 bonds, add a hydrogen to fill the 4th bond position.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Molecular formula: actual atom count (C₂H₆). Empirical: simplest ratio (CH₃). Structural: condensed groups (CH₃CH₃). Displayed: all bonds shown as lines. C always has 4 bonds, H has 1, O has 2.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Molecular (actual count), empirical (simplest ratio), structural (condensed groups), displayed (all bonds drawn).',
    cues: [
      { id: 'cue-1', blockId: 'tbl-forms', prompt: 'What is the difference between a molecular formula and an empirical formula?', answer: 'The molecular formula gives the actual number of each atom in the molecule (e.g. C₂H₆). The empirical formula gives the simplest whole-number ratio (e.g. CH₃).' },
      { id: 'cue-2', blockId: 'call-key', prompt: 'Write the structural and molecular formula for ethanoic acid.', answer: 'Molecular: C₂H₄O₂. Structural: CH₃COOH.' },
      { id: 'cue-3', blockId: 'call-tip', prompt: 'How many bonds does a carbon atom always form in organic compounds?', answer: 'Carbon always forms 4 covalent bonds.' }
    ]
  },
  evidence: [],
  mentions: []
};
