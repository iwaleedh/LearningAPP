/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 0
 * "Alkenes — structure, bonding and naming"
 * Source: Pearson Edexcel IAL Chemistry — Section 5A.1
 */
export const note_chemistry_1_5_0 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Know the structure of alkenes. Describe the C=C double bond in terms of σ and π bonds. Name alkenes using IUPAC rules. Know the general formula of alkenes.' },
      terms: []
    },
    {
      id: 'h-structure',
      type: 'heading',
      data: { text: 'Structure of Alkenes', level: 2 },
      terms: []
    },
    {
      id: 'callout-structure',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Alkene Key Facts',
        text: '• General formula: <strong>CₙH₂ₙ</strong><br/>• Contain one C=C double bond (the functional group)<br/>• Classified as <strong>unsaturated</strong> hydrocarbons<br/>• Named with the suffix <strong>-ene</strong><br/>• The C=C double bond consists of one <strong>σ (sigma) bond</strong> and one <strong>π (pi) bond</strong>'
      },
      terms: ['Alkene', 'Double bond', 'σ bond', 'π bond']
    },
    {
      id: 'h-pi',
      type: 'heading',
      data: { text: 'σ and π Bonds in C=C', level: 2 },
      terms: []
    },
    {
      id: 'table-bonds',
      type: 'comparisonTable',
      data: {
        caption: 'Sigma vs Pi bonds in alkenes',
        headers: ['Bond type', 'How formed', 'Where electron density is', 'Can rotate?'],
        rows: [
          ['<strong>σ bond</strong>', 'Head-on (end-to-end) overlap of orbitals.', 'Directly between the two nuclei (on the bond axis).', 'Yes — rotation possible around a σ bond alone.'],
          ['<strong>π bond</strong>', 'Sideways (lateral) overlap of p orbitals above and below the σ bond.', 'Above and below the plane of the molecule (the π electron cloud).', 'No — rotation is prevented because it would break the sideways p orbital overlap.']
        ]
      },
      terms: []
    },
    {
      id: 'callout-rigidity',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rigidity around C=C — The Key Consequence',
        text: 'Because the π bond prevents rotation around the C=C axis, the four atoms directly attached to the C=C are locked in the <strong>same plane</strong> (planar arrangement). Bond angles around each sp² carbon = <strong>120°</strong>.<br/><br/>This rigidity is the reason <strong>geometric (E/Z) isomerism</strong> is possible in alkenes.'
      },
      terms: []
    },
    {
      id: 'h-naming',
      type: 'heading',
      data: { text: 'Naming Alkenes (IUPAC)', level: 2 },
      terms: []
    },
    {
      id: 'list-naming',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          'Find the longest carbon chain containing the C=C double bond.',
          'Number the chain from the end nearest to the C=C to give it the lowest locant.',
          'The suffix is <strong>-ene</strong>. For 4+ carbons, state the position: <strong>but-1-ene</strong>, <strong>but-2-ene</strong>.',
          'For molecules with more than one double bond: <strong>diene</strong> (-1,3-diene etc.).'
        ]
      },
      terms: []
    },
    {
      id: 'table-examples',
      type: 'comparisonTable',
      data: {
        caption: 'First alkenes — names and formulae',
        headers: ['Name', 'Formula', 'Structural formula'],
        rows: [
          ['Ethene', 'C₂H₄', 'CH₂=CH₂'],
          ['Propene', 'C₃H₆', 'CH₂=CHCH₃'],
          ['But-1-ene', 'C₄H₈', 'CH₂=CHCH₂CH₃'],
          ['But-2-ene', 'C₄H₈', 'CH₃CH=CHCH₃'],
          ['4-methylhex-1-ene', 'C₇H₁₄', 'Branched alkene naming example'],
          ['3,3-dimethylbut-1-ene', 'C₆H₁₂', 'Branched alkene naming example']
        ]
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-structure', prompt: 'State the general formula of alkenes and name the functional group they contain.' },
      { id: 'c2', blockId: 'table-bonds', prompt: 'Describe how a π bond forms. Why does it prevent rotation around the C=C bond?' },
      { id: 'c3', blockId: 'callout-rigidity', prompt: 'What bond angle exists around each carbon in a C=C double bond, and why?' },
      { id: 'c4', blockId: 'table-examples', prompt: 'Draw and name the two structural isomers of butene that involve a C=C double bond in different positions.' }
    ],
    summaryText: 'Alkenes: CₙH₂ₙ, contain C=C double bond, unsaturated. C=C = 1 σ (head-on) + 1 π (sideways p orbital overlap). π bond prevents rotation → rigid planar arrangement, 120° bond angles. Named with -ene suffix and lowest-number locant for the double bond.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_5_0;