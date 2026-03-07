/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 2
 * "Covalent bonding and dot-and-cross diagrams"
 * Source: Pearson Edexcel IAL Chemistry — Section 3B.1
 */
export const note_chemistry_1_3_2 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Define covalent bonding. Draw dot-and-cross diagrams for covalent molecules including double bonds and dative covalent bonds. Understand lone pairs.' },
      terms: []
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'Covalent Bonding', level: 2 },
      terms: []
    },
    {
      id: 'callout-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Covalent Bond',
        text: 'A <strong>covalent bond</strong> is formed by the <strong>mutual sharing</strong> of one or more pairs of electrons between two non-metal atoms. The shared pair(s) are attracted to both nuclei simultaneously, holding the atoms together.<br/><br/>A <strong>single bond</strong> = one shared pair (2 electrons).<br/>A <strong>double bond</strong> = two shared pairs (4 electrons).<br/>A <strong>triple bond</strong> = three shared pairs (6 electrons).'
      },
      terms: ['Covalent bond', 'Lone pair', 'Bonding pair', 'Single bond', 'Double bond', 'Triple bond']
    },
    {
      id: 'h-dot-rules',
      type: 'heading',
      data: { text: 'Drawing Dot-and-Cross Diagrams for Covalent Molecules', level: 2 },
      terms: []
    },
    {
      id: 'list-dot',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Show <strong>only outer shell</strong> electrons (inner shells are usually omitted).',
          'Use different symbols (dots and crosses) for electrons from different atoms.',
          'Shared pairs (bonding pairs) go between the two atomic symbols.',
          'Non-shared pairs (<strong>lone pairs</strong>) remain on the atom they belong to.',
          'No square brackets needed (these are neutral molecules).'
        ]
      },
      terms: []
    },
    {
      id: 'callout-examples',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Examples from the textbook',
        text: '<strong>H₂O:</strong> O has 6 outer electrons (2 bonding pairs with H, 2 lone pairs).<br/><strong>NH₃:</strong> N has 5 outer electrons (3 bonding pairs with H, 1 lone pair).<br/><strong>CO₂:</strong> C has 4 outer electrons; each O has 6. C forms 2 double bonds with each O.<br/><strong>N₂:</strong> N has 5 outer electrons; the two Ns share a triple bond (3 shared pairs + 1 lone pair each).'
      },
      terms: []
    },
    {
      id: 'h-dative',
      type: 'heading',
      data: { text: 'Dative Covalent Bond (Co-ordinate Bond)', level: 2 },
      terms: []
    },
    {
      id: 'callout-dative',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Dative Covalent Bond',
        text: 'A <strong>dative covalent bond</strong> (also called a co-ordinate bond) is a covalent bond in which <em>both electrons in the shared pair come from the SAME atom</em>. This atom is called the <strong>donor</strong>; the atom accepting the pair is the <strong>acceptor</strong>.<br/><br/>Once formed, a dative bond is chemically identical to an ordinary covalent bond. It is shown with an arrow (→) pointing from donor to acceptor.<br/><br/><strong>Examples:</strong><br/>• NH₄⁺: the N atom in NH₃ donates its lone pair to H⁺ forming the ammonium ion.<br/>• SO₃ → H₂SO₄: the S atom can donate a lone pair.<br/>• Al₂Cl₆ (aluminium chloride dimer): Al accepts a lone pair from Cl.'
      },
      terms: ['Dative covalent bond', 'Co-ordinate bond', 'Donor', 'Acceptor']
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-def', prompt: 'Define a covalent bond. How many electrons are in a single, double and triple bond?' },
      { id: 'c2', blockId: 'list-dot', prompt: 'State two key differences between a dot-and-cross diagram of a covalent molecule and one of an ionic compound.' },
      { id: 'c3', blockId: 'callout-dative', prompt: 'Define a dative covalent bond. Give one example of a molecule/ion that contains one.' },
      { id: 'c4', blockId: 'callout-examples', prompt: 'How many lone pairs does nitrogen have in NH₃, and how many bonding pairs?' }
    ],
    summaryText: 'Covalent bond = mutual sharing of electron pair(s) between two non-metals. Shown in dot-and-cross diagrams (outer shell only, no brackets). Lone pairs are non-bonding electrons on an atom. Dative bond = both shared electrons from one atom (donor) to another (acceptor). Shown as arrow →.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_2;