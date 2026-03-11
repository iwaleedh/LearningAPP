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
      id: 'callout-hybridisation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'sp² Hybridisation in Alkenes',
        text: 'In ethene, each carbon is only bonded to three other atoms (two H and one C). To do this, the carbon atom promotes a 2s electron to an empty 2p orbital, but only hybridises <strong>three</strong> of these orbitals (the 2s and two 2p orbitals).<br/><br/>This forms three <strong>sp² hybrid orbitals</strong> which arrange themselves in a 120° trigonal planar geometry to mutually repel as far apart as possible. The remaining <strong>unhybridised p orbital</strong> is left at right angles (perpendicular) to this plane.'
      },
      terms: ['sp² hybridisation', 'Trigonal planar']
    },
    {
      id: 'table-bonds',
      type: 'comparisonTable',
      data: {
        caption: 'Sigma vs Pi bonds in alkenes',
        headers: ['Bond type', 'How formed', 'Where electron density is', 'Can rotate?', 'Relative Strength'],
        rows: [
          ['<strong>σ (sigma) bond</strong>', 'Head-on (end-to-end) overlap of two sp² hybrid orbitals.', 'Directly between the two carbon nuclei (on the bond axis).', 'Yes — rotation possible around a σ bond alone.', 'Stronger'],
          ['<strong>π (pi) bond</strong>', 'Sideways (lateral) overlap of parallel unhybridised p orbitals.', 'Above and below the plane of the molecule.', 'No — rotation is prevented because twisting would break the sideways p-orbital overlap.', 'Weaker (further from nuclei control)']
        ]
      },
      terms: []
    },
    {
      id: 'callout-rigidity',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Rigidity around C=C — The Key Consequence',
        text: 'Because the π bond prevents rotation around the C=C axis, the four atoms directly attached to the sp² carbons are locked in the <strong>same plane</strong> (planar arrangement). Bond angles around each carbon are approximately <strong>120°</strong>.<br/><br/>This rigidity is the reason <strong>geometric (E/Z) isomerism</strong> occurs in alkenes. Furthermore, the exposed π electron cloud above and below the plane is a very negative region of space, making alkenes vulnerable to electrophilic attack.'
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
  ,

    {
      id: 'h-isomerism',
      type: 'heading',
      data: { text: 'Structural Isomerism in Alkenes', level: 2 },
      terms: []
    },
    {
      id: 'p-isomerism',
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          'Alkenes with 4 or more carbon atoms display structural isomerism.',
          '<strong>Position isomerism</strong>: The location of the C=C double bond changes (e.g. but-1-ene vs but-2-ene).',
          '<strong>Chain isomerism</strong>: The carbon skeleton branches (e.g. but-1-ene vs 2-methylpropene).'
        ]
      },
      terms: []
    },
    {
      id: 'h-phys-props',
      type: 'heading',
      data: { text: 'Physical Properties of Alkenes', level: 2 },
      terms: []
    },
    {
      id: 'table-phys-props',
      type: 'comparisonTable',
      data: {
        caption: 'Boiling Points and Solubility',
        headers: ['Property', 'Description', 'Reason/Comparison'],
        rows: [
          ['Boiling Point', 'Very similar to corresponding alkanes; increases with chain length. Ethene, propene, and butenes are gases at room temp.', 'Alkenes rely on London (dispersion) forces. They have a slightly <strong>lower</strong> boiling point than the alkane with the same number of carbons because they have 2 fewer electrons, leading to slightly weaker London forces.'],
          ['Solubility', 'Virtually insoluble in water, but soluble in organic solvents.', 'They are non-polar (or very weakly polar) hydrocarbons, so they cannot form hydrogen bonds with water.']
        ]
      },
      terms: []
    },],
  recall: {
    enabled: true,
    cues: [
      

      { id: 'c-phys1', blockId: 'table-phys-props', prompt: 'Why do alkenes generally have slightly lower boiling points than alkanes with the same number of carbon atoms?' },
      { id: 'c-iso1', blockId: 'p-isomerism', prompt: 'From which carbon number onwards do alkenes exhibit structural isomerism? Give two types of structural isomerism they show.' },{ id: 'c1', blockId: 'callout-structure', prompt: 'State the general formula of alkenes and name the functional group they contain.' },
      { id: 'c-hybrid', blockId: 'callout-hybridisation', prompt: 'What type of hybridisation is found in the carbon atoms of a C=C double bond? What geometry does this produce?' },
      { id: 'c2', blockId: 'table-bonds', prompt: 'Describe how a π bond forms. Why does it prevent rotation around the C=C bond?' },
      { id: 'c2b', blockId: 'table-bonds', prompt: 'Is a π bond stronger or weaker than a σ bond? Explain your answer.' },
      { id: 'c3', blockId: 'callout-rigidity', prompt: 'What bond angle exists around each carbon in a C=C double bond, and why?' },
      { id: 'c4', blockId: 'table-examples', prompt: 'Draw and name the two structural isomers of butene that involve a C=C double bond in different positions.' }
    ],
    summaryText: 'Alkenes: CₙH₂ₙ, contain C=C double bond. Carbons are sp² hybridised (120° trigonal planar). C=C consists of 1 σ bond (head-on overlap of sp² orbitals, stronger) + 1 π bond (sideways overlap of unhybridised p-orbitals, weaker). The π bond prevents rotation → rigid planar arrangement causing E/Z isomerism. The exposed π electron cloud makes alkenes vulnerable to electrophilic attack.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_5_0;