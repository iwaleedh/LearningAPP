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
      data: { text: 'Define covalent bonding. Draw dot-and-cross diagrams for covalent molecules including double bonds and dative covalent bonds. Understand lone pairs. Recognise exceptions to the octet rule: BF₃ (electron deficient), PCl₅ (expanded octet), NCl₅ (impossible — no 2d orbitals).' },
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
        text: 'A <strong>dative covalent bond</strong> (also called a co-ordinate bond) is a covalent bond in which <em>both electrons in the shared pair come from the SAME atom</em>. This atom is called the <strong>donor</strong>; the atom accepting the pair is the <strong>acceptor</strong>.<br/><br/>Once formed, a dative bond is chemically identical to an ordinary covalent bond — it has the same length and strength. It is shown with an arrow (→) pointing from donor to acceptor.<br/><br/><strong>Examples:</strong><br/>• <strong>NH₄⁺ (ammonium ion):</strong> the N atom in NH₃ donates its lone pair to H⁺, e.g. NH₃ + HCl → NH₄⁺ + Cl⁻.<br/>• <strong>H₃O⁺ (hydroxonium ion):</strong> the O atom in H₂O donates its lone pair to H⁺, e.g. H₂O + HCl → H₃O⁺ + Cl⁻.<br/>• <strong>NH₃ + BF₃ adduct:</strong> N lone pair donated to empty orbital on B (BF₃ is electron-deficient).<br/>• <strong>Al₂Cl₆ (aluminium chloride dimer):</strong> Cl lone pairs bridge two Al atoms, each donating to an electron-deficient Al.'
      },
      terms: ['Dative covalent bond', 'Co-ordinate bond', 'Donor', 'Acceptor']
    },
    {
      id: 'h-exceptions',
      type: 'heading',
      data: { text: 'Exceptions to the "Noble Gas (8-Electron)" Rule', level: 2 },
      terms: []
    },
    {
      id: 'callout-exceptions',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠️ Not All Covalent Molecules Obey the Octet Rule',
        text: 'At GCSE, atoms were said to bond to achieve a noble gas (8-electron) structure. At A-level this is an <em>oversimplification</em> — there are important exceptions:<br/><br/><strong>1. Electron-deficient molecules (fewer than 8 electrons around the central atom):</strong><br/>• <strong>BF₃:</strong> Boron is in Group 3 — it can only form 3 bonds, leaving just 6 electrons around it. This is not a "problem"; boron simply has no suitable low-energy orbital to form a fourth bond under normal conditions. BF₃ instead readily accepts lone pairs (acts as a Lewis acid).<br/><br/><strong>2. Expanded octets (more than 8 electrons — Period 3+ elements only):</strong><br/>• <strong>PCl₅:</strong> Phosphorus is in Period 3 and has vacant 3d orbitals. One 3s electron is promoted into a 3d orbital, giving 5 unpaired electrons → 5 bonds. The energy released in forming 2 extra bonds outweighs the cost of promotion → energetically profitable.<br/>• <strong>SF₆:</strong> Sulfur forms 6 bonds (12 electrons around S) by using 3d orbitals similarly.<br/><br/><strong>3. Why NCl₅ cannot exist (contrast with PCl₅):</strong><br/>• Nitrogen is in Period 2 — it has <em>no 2d subshell</em>. The next orbital available (3s) is too far above the 2p in energy to be accessible. Therefore nitrogen is permanently limited to 8 electrons and cannot form more than 4 bonds (including dative).<br/><br/><strong>The real A-level rule:</strong> Atoms form as many covalent bonds as is <em>energetically profitable</em>. Bond formation releases energy; the question is whether enough energy is recovered from new bonds to justify the electron promotion cost.'
      },
      terms: ['Expanded octet', 'Electron deficient', 'Octet rule']
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-def', prompt: 'Define a covalent bond. How many electrons are in a single, double and triple bond?' },
      { id: 'c2', blockId: 'list-dot', prompt: 'State two key differences between a dot-and-cross diagram of a covalent molecule and one of an ionic compound.' },
      { id: 'c3', blockId: 'callout-dative', prompt: 'Define a dative covalent bond. Give two examples of molecules/ions that contain one, including H₃O⁺.' },
      { id: 'c4', blockId: 'callout-examples', prompt: 'How many lone pairs does nitrogen have in NH₃, and how many bonding pairs?' },
      { id: 'c5', blockId: 'callout-exceptions', prompt: 'Explain why BF₃ is electron deficient. Why can PCl₅ exist with 5 bonds but NCl₅ cannot?' }
    ],
    summaryText: 'Covalent bond = mutual sharing of electron pairs between two non-metals. Dative bond = both electrons donated by one atom (e.g. NH₄⁺, H₃O⁺, Al₂Cl₆). Exceptions to octet rule: BF₃ has only 6e⁻ (electron deficient); PCl₅ has 10e⁻ (expanded octet using 3d); NCl₅ impossible (N has no 2d orbitals). Atoms form as many bonds as energetically profitable.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_2;