/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 1
 * "IUPAC nomenclature of alkanes and branched-chain compounds"
 * Source: Pearson Edexcel IAL Chemistry — Section 4A.4
 */
export const note_chemistry_1_4_1 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Apply IUPAC nomenclature rules to name straight-chain and branched-chain alkanes, halogenoalkanes, and alcohols. Identify the longest carbon chain and correctly number substituents.' },
      terms: []
    },
    {
      id: 'h-prefix',
      type: 'heading',
      data: { text: 'Carbon Chain Prefixes (must be memorised)', level: 2 },
      terms: []
    },
    {
      id: 'table-prefix',
      type: 'comparisonTable',
      data: {
        caption: 'IUPAC number prefixes for carbon count',
        headers: ['No. of C atoms', 'Prefix', 'Alkane name', 'Formula'],
        rows: [
          ['1', 'meth-', 'methane', 'CH₄'],
          ['2', 'eth-', 'ethane', 'C₂H₆'],
          ['3', 'prop-', 'propane', 'C₃H₈'],
          ['4', 'but-', 'butane', 'C₄H₁₀'],
          ['5', 'pent-', 'pentane', 'C₅H₁₂'],
          ['6', 'hex-', 'hexane', 'C₆H₁₄'],
          ['7', 'hept-', 'heptane', 'C₇H₁₆'],
          ['8', 'oct-', 'octane', 'C₈H₁₈']
        ]
      },
      terms: []
    },
    {
      id: 'h-rules',
      type: 'heading',
      data: { text: 'IUPAC Naming Rules', level: 2 },
      terms: []
    },
    {
      id: 'list-rules',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          '<strong>Find the longest continuous carbon chain</strong> — this gives the parent name (e.g. pentane for 5 carbons).',
          '<strong>Number the chain</strong> from the end closest to a branch or substituent, to give the substituents the <em>lowest possible numbers</em>.',
          '<strong>Name substituents</strong> using alkyl groups: methyl (–CH₃), ethyl (–C₂H₅), propyl (–C₃H₇), etc. Halogen substituents: fluoro-, chloro-, bromo-, iodo-.',
          '<strong>Use multipliers</strong> if the same substituent appears more than once: di-, tri-, tetra-.',
          '<strong>Write in alphabetical order</strong> (ignoring di-, tri- etc.) then end with the base alkane name.'
        ]
      },
      terms: ['IUPAC nomenclature', 'Alkyl group', 'Substituent']
    },
    {
      id: 'callout-examples',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples & Past Paper Names',
        text: '<strong>CH₃CH(CH₃)CH₂CH₃:</strong><br/>Longest chain = 4 C (butane). Branch = methyl on C-2.<br/>Name: <strong>2-methylbutane</strong><br/><br/><strong>CH₃CH(CH₃)CH(CH₃)CH₃:</strong><br/>Longest chain = 4 C (butane). Two methyl groups on C-2 and C-3.<br/>Name: <strong>2,3-dimethylbutane</strong><br/><br/><strong>CH₃CH(Br)CH₂CH₃:</strong><br/>Longest chain = 4 C (butane). Bromo on C-2.<br/>Name: <strong>2-bromobutane</strong><br/><br/><strong>Past Paper Trick Examples:</strong><br/>• A butane chain with a Cl on C-2 and a methyl on C-3 is <strong>2-chloro-3-methylbutane</strong> (alphabetical: chloro before methyl).<br/>• <strong>2,2,4-trimethylhexane:</strong> The longest chain is 6 carbons. Numbering from the end that gives lower location numbers (2,2,4, NOT 3,5,5).'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'table-prefix', prompt: 'State the IUPAC prefix for chains of 1, 2, 3, 4, 5, and 6 carbon atoms.' },
      { id: 'c2', blockId: 'list-rules', prompt: 'Explain how you decide from which end to number the carbon chain.' },
      { id: 'c3', blockId: 'callout-examples', prompt: 'Name the following compound: CH₃CH(CH₃)CH(CH₃)CH₂CH₃' }
    ],
    summaryText: 'Prefixes: meth(1), eth(2), prop(3), but(4), pent(5), hex(6). Number from end closest to branch. Name substituents: methyl, ethyl, chloro, bromo etc. Use di/tri for multiples. Alphabetical order. Suffix: -ane (alkane), -ene (alkene), -ol (alcohol).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_4_1;