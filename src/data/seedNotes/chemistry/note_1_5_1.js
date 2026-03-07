/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 1
 * "Geometric (E/Z) isomerism"
 * Source: Pearson Edexcel IAL Chemistry — Section 5A.2
 */
export const note_chemistry_1_5_1 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Understand geometric (cis/trans and E/Z) isomerism. Use the CIP priority rules to assign E or Z configuration. Identify whether a molecule can exhibit geometric isomerism.' },
      terms: []
    },
    {
      id: 'h-cause',
      type: 'heading',
      data: { text: 'Cause of Geometric Isomerism', level: 2 },
      terms: []
    },
    {
      id: 'callout-cause',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why geometric isomers exist',
        text: 'Geometric isomers arise because the <strong>π bond locks the C=C</strong> — no rotation is possible. If <strong>each carbon in the C=C has two DIFFERENT groups attached</strong>, the molecule can exist in two arrangements that cannot interconvert without breaking the π bond.<br/><br/>Condition: For geometric isomerism, each carbon of the C=C must have <strong>two different substituents</strong>.'
      },
      terms: ['Geometric isomerism', 'E/Z isomerism', 'cis/trans isomerism']
    },
    {
      id: 'h-cis-trans',
      type: 'heading',
      data: { text: 'cis/trans Isomerism', level: 2 },
      terms: []
    },
    {
      id: 'table-cistrans',
      type: 'comparisonTable',
      data: {
        caption: 'cis and trans isomers of but-2-ene',
        headers: ['Name', 'Description', 'Arrangement'],
        rows: [
          ['cis-but-2-ene', 'CH₃ groups on the SAME side of the double bond', 'CH₃ | H on left carbon; CH₃ | H on right carbon → both CH₃ same side'],
          ['trans-but-2-ene', 'CH₃ groups on OPPOSITE sides of the double bond', 'Higher bp; different physical properties despite same molecular formula']
        ]
      },
      terms: ['cis isomer', 'trans isomer']
    },
    {
      id: 'h-ez',
      type: 'heading',
      data: { text: 'E/Z Naming — CIP Priority Rules', level: 2 },
      terms: []
    },
    {
      id: 'p-ez',
      type: 'paragraph',
      data: { text: 'The cis/trans system only works when each carbon has a hydrogen. For compounds with <strong>three or four different groups</strong> attached to the C=C bond, we use the <strong>E/Z nomenclature</strong> based on the <strong>Cahn–Ingold–Prelog (CIP) priority rules</strong>.' },
      terms: ['Cahn-Ingold-Prelog rules']
    },
    {
      id: 'callout-cip',
      type: 'callout',
      data: {
        style: 'key',
        title: 'CIP Priority Rules',
        text: 'Assign priorities to the two groups on each C of the double bond based on <strong>atomic number</strong>:<br/>• Higher atomic number → higher priority (e.g. Br > Cl > O > N > C > H)<br/>• If first atoms are the same, compare the next atom in the chain.<br/><br/>• <strong>Z</strong> (from German <em>zusammen</em> = "together"): higher priority groups on <strong>same side</strong> of the double bond.<br/>• <strong>E</strong> (from German <em>entgegen</em> = "opposite"): higher priority groups on <strong>opposite sides</strong>.'
      },
      terms: ['E isomer', 'Z isomer', 'CIP rules', 'Priority']
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: Assign E/Z to CHBr=CClF',
        text: 'Left carbon (CHBr=): H and Br. Br > H (higher at. no.) → Br has priority.<br/>Right carbon (=CClF): Cl and F. Cl > F (at. no. 17 > 9) → Cl has priority.<br/><br/>If Br and Cl are on the SAME side → <strong>Z</strong>-CHBr=CClF<br/>If Br and Cl are on OPPOSITE sides → <strong>E</strong>-CHBr=CClF'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-cause', prompt: 'State the two conditions required for a molecule to exhibit geometric isomerism.' },
      { id: 'c2', blockId: 'table-cistrans', prompt: 'Describe the difference between cis-but-2-ene and trans-but-2-ene.' },
      { id: 'c3', blockId: 'callout-cip', prompt: 'Explain the CIP priority rules. What do E and Z mean?' },
      { id: 'c4', blockId: 'callout-worked', prompt: 'Assign E or Z to the following: (CHCl=CBrCH₃) where the Cl and Br are on the same side.' }
    ],
    summaryText: 'Geometric isomers: exist because C=C π bond prevents rotation. Condition: each C must have two different groups. cis = same-side; trans = opposite-side (for simple cases with H). E/Z uses CIP priority rules (higher atomic number = higher priority). Z = together (higher priority groups same side). E = entgegen (opposite sides).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_5_1;