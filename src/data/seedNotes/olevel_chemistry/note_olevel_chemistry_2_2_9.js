export const note_olevel_chemistry_2_2_9 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-3-3-properties-of-simple-molecular-compounds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe and explain the physical properties of simple molecular covalent compounds in terms of intermolecular forces.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Properties of Simple Molecular Substances', level: 2 }
    },
    {
      id: 'tbl-props',
      type: 'comparisonTable',
      data: {
        caption: 'Physical properties of simple molecular substances',
        headers: ['Property', 'Observation', 'Explanation'],
        rows: [
          ['Melting/boiling point', 'Low (often gases or liquids at room temperature)', 'Weak intermolecular forces between molecules require little energy to overcome'],
          ['State at room temperature', 'Gas, liquid or low-melting solid', 'Weak forces between molecules'],
          ['Electrical conductivity', 'Non-conductors (do not conduct electricity)', 'No free ions or electrons to carry charge'],
          ['Solubility in water', 'Varies — polar molecules often dissolve; non-polar often do not', 'Depends on polarity — like dissolves like'],
          ['Solubility in organic solvents', 'Often soluble (especially non-polar molecules)', 'Non-polar solvents can interact with non-polar molecules'],
          ['Volatility', 'Highly volatile (evaporate easily)', 'Weak intermolecular forces easily overcome at low temperatures']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Intramolecular vs Intermolecular Forces', level: 2 }
    },
    {
      id: 'call-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Distinction: Covalent Bonds vs Intermolecular Forces',
        text: '<strong>Intramolecular bonds (covalent bonds):</strong> Strong bonds WITHIN molecules, holding atoms together. These bonds are NOT broken when a molecular substance melts or boils.<br/><br/><strong>Intermolecular forces:</strong> Weak attractions BETWEEN molecules. These ARE broken when a molecular substance melts or boils.<br/><br/>This is why simple molecular substances have low melting/boiling points — it is the <strong>intermolecular forces</strong> (not covalent bonds) that are overcome.'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Common Exam Mistake',
        text: 'Do NOT say "covalent bonds are broken when a molecular substance melts." The covalent bonds within molecules remain intact during melting and boiling. Only the weak <strong>intermolecular forces</strong> between molecules are overcome.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Simple molecular substances have low melting/boiling points (weak intermolecular forces between molecules), do not conduct electricity (no free ions/electrons), and are volatile. During melting, covalent bonds within molecules are NOT broken — only weak intermolecular forces are overcome.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Simple molecular substances: low mp/bp (weak intermolecular forces), non-conductors, volatile; covalent bonds within molecules are NOT broken during melting.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-props', prompt: 'Why do simple molecular covalent substances have low melting and boiling points?', answer: 'They have weak intermolecular forces between molecules that require little energy to overcome. (NOT because covalent bonds are weak.)' },
      { id: 'cue-2', blockId: 'call-key1', prompt: 'What is the difference between intramolecular bonds and intermolecular forces?', answer: 'Intramolecular bonds (covalent bonds) are strong bonds WITHIN molecules, not broken during changes of state. Intermolecular forces are weak attractions BETWEEN molecules, broken during melting and boiling.' },
      { id: 'cue-3', blockId: 'tbl-props', prompt: 'Why do simple molecular covalent substances not conduct electricity?', answer: 'There are no free ions or free electrons to carry electrical charge.' }
    ]
  },
  evidence: [],
  mentions: []
};
