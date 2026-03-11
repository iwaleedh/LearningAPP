/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 0
 * "Introduction to organic chemistry"
 * Source: Pearson Edexcel IAL Chemistry — Section 4A.1–4A.3
 */
export const note_chemistry_1_4_0 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Understand the scope of organic chemistry. Know the terms: organic molecule, hydrocarbon, saturated, unsaturated, functional group, homologous series.' },
      terms: []
    },
    {
      id: 'h-org',
      type: 'heading',
      data: { text: 'What is Organic Chemistry?', level: 2 },
      terms: []
    },
    {
      id: 'p-org',
      type: 'paragraph',
      data: { text: '<strong>Organic chemistry</strong> is the chemistry of carbon-containing compounds. Carbon is uniquely able to form long chains and rings because it can form four covalent bonds and bond with itself repeatedly (catenation). This gives rise to millions of organic compounds.' },
      terms: ['Organic chemistry', 'Catenation']
    },
    {
      id: 'table-terms',
      type: 'comparisonTable',
      data: {
        caption: 'Key organic chemistry terms',
        headers: ['Term', 'Definition', 'Example'],
        rows: [
          ['<strong>Hydrocarbon</strong>', 'A compound containing only carbon and hydrogen atoms.', 'CH₄ (methane), C₆H₆ (benzene)'],
          ['<strong>Saturated</strong>', 'Contains only single C–C bonds; no C=C double bonds.', 'Alkanes (e.g. ethane, C₂H₆)'],
          ['<strong>Unsaturated</strong>', 'Contains one or more C=C or C≡C bonds.', 'Alkenes (e.g. ethene, C₂H₄)'],
          ['<strong>Functional group</strong>', 'An atom or group of atoms that determines the characteristic reactions of a molecule.', 'C=C (alkene); –OH (alcohol); –Br (halogenoalkane)'],
          ['<strong>Homologous series</strong>', 'A family of organic compounds with the same functional group and general formula, where each member differs by –CH₂–.', 'Alkanes: CₙH₂ₙ₊₂']
        ]
      },
      terms: ['Hydrocarbon', 'Saturated', 'Unsaturated', 'Functional group', 'Homologous series']
    },
    {
      id: 'callout-homologous',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Properties of a Homologous Series',
        text: 'Members of the same homologous series:<br/>• Have the same <strong>functional group</strong> → similar chemical properties<br/>• Differ by one CH₂ unit → gradually changing physical properties (boiling point, solubility etc.)<br/>• Share the same <strong>general formula</strong><br/>• Can be named using the same systematic rules'
      },
      terms: []
    },
    {
      id: 'table-series',
      type: 'comparisonTable',
      data: {
        caption: 'Common homologous series',
        headers: ['Series', 'Functional Group', 'General Formula'],
        rows: [
          ['Alkanes', 'None (C–H and C–C only)', 'CₙH₂ₙ₊₂'],
          ['Alkenes', 'C=C (double bond)', 'CₙH₂ₙ'],
          ['Alkynes', 'C≡C (triple bond)', 'CₙH₂ₙ₋₂'],
          ['Alcohols', '–OH (hydroxyl)', 'CₙH₂ₙ₊₁OH'],
          ['Halogenoalkanes', 'C–X (X = F, Cl, Br, I)', 'CₙH₂ₙ₊₁X'],
          ['Carboxylic acids', '–COOH', 'CₙH₂ₙ₊₁COOH'],
          ['Cycloalkanes', 'Ring of CH₂ groups', 'CₙH₂ₙ']
        ]
      },
      terms: []
    },
    {
      id: 'h-formula-types',
      type: 'heading',
      data: { text: 'Types of Formula', level: 2 },
      terms: []
    },
    {
      id: 'table-formula',
      type: 'comparisonTable',
      data: {
        caption: 'Five ways to represent organic molecules',
        headers: ['Type', 'Definition', 'Example (Butane)'],
        rows: [
          ['<strong>Empirical</strong>', 'Simplest whole-number ratio of atoms in the molecule.', 'C₂H₅'],
          ['<strong>Molecular</strong>', 'Actual number of atoms of each element in the molecule.', 'C₄H₁₀'],
          ['<strong>Structural</strong>', 'Shows how atoms are grouped together without showing all bonds.', 'CH₃CH₂CH₂CH₃'],
          ['<strong>Displayed</strong>', 'Shows every single atom and every single covalent bond.', 'Full drawn structure with 13 bonds'],
          ['<strong>Skeletal</strong>', 'Shows only the carbon skeleton as lines. C atoms are at vertices/ends. H atoms on C are not shown.', 'Zig-zag line']
        ]
      },
      terms: ['Empirical formula', 'Molecular formula', 'Structural formula', 'Displayed formula', 'Skeletal formula']
    },
    {
      id: 'callout-displayed-limits',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Limitations of Displayed Formulae',
        text: 'A displayed formula is drawn flat with 90° bond angles on paper, which bears no resemblance to the actual 3D shape of the molecule (e.g. tetrahedral with 109.5° angles). This can be misleading: drawing a CH₃ branch pointing "up", "down", or at the "end" might look like different isomers on paper, but they are often exactly the same molecule just rotated.'
      },
      terms: []
    },
    {
      id: 'p-structural-convention',
      type: 'paragraph',
      data: { text: 'To avoid confusion when drawing <strong>structural formulae</strong>, the convention is to always find the longest continuous chain of carbon atoms and draw it horizontally. Any side-groups or branches are then written "hanging off" this main carbon chain.' },
      terms: []
    },
    {
      id: 'p-3d',
      type: 'paragraph',
      data: { text: '<strong>Drawing 3D Structures:</strong> When the exact 3D stereochemical arrangement around a carbon atom is important, conventional symbols are used to show bonds entering or leaving the 2D plane of the paper:' },
      terms: []
    },
    {
      id: 'list-3d',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Straight line:</strong> A bond in the plane of the paper/screen.',
          '<strong>Solid wedge:</strong> A bond coming out of the paper towards you.',
          '<strong>Hashed (dotted) wedge:</strong> A bond going into the paper away from you.'
        ]
      },
      terms: []
    },
    {
      id: 'svg-formula',
      type: 'svg',
      data: {
        caption: 'Figure: Displayed, structural and skeletal formulas for butane and chloroethane',
        svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <!-- Butane -->
  <text x="150" y="20" text-anchor="middle" font-weight="bold" fill="#1e40af">Butane (C₄H₁₀)</text>
  
  <text x="80" y="60" text-anchor="end" fill="#64748b">Displayed:</text>
  <!-- Displayed Butane -->
  <text x="100" y="60" font-family="monospace">
    <tspan x="100" dy="0">  H   H   H   H</tspan>
    <tspan x="100" dy="15">  |   |   |   |</tspan>
    <tspan x="100" dy="15">H-C---C---C---C-H</tspan>
    <tspan x="100" dy="15">  |   |   |   |</tspan>
    <tspan x="100" dy="15">  H   H   H   H</tspan>
  </text>
  
  <text x="80" y="150" text-anchor="end" fill="#64748b">Structural:</text>
  <text x="100" y="150" font-family="monospace">CH₃CH₂CH₂CH₃</text>
  
  <text x="80" y="190" text-anchor="end" fill="#64748b">Skeletal:</text>
  <polyline points="100,200 130,180 160,200 190,180" fill="none" stroke="#334155" stroke-width="2"/>
  
  <!-- Chloroethane -->
  <text x="400" y="20" text-anchor="middle" font-weight="bold" fill="#15803d">Chloroethane (C₂H₅Cl)</text>
  
  <!-- Displayed Chloroethane -->
  <text x="350" y="60" font-family="monospace">
    <tspan x="350" dy="0">  H   H</tspan>
    <tspan x="350" dy="15">  |   |</tspan>
    <tspan x="350" dy="15">H-C---C-Cl</tspan>
    <tspan x="350" dy="15">  |   |</tspan>
    <tspan x="350" dy="15">  H   H</tspan>
  </text>
  
  <text x="350" y="150" font-family="monospace">CH₃CH₂Cl</text>
  
  <polyline points="350,200 380,180 410,200" fill="none" stroke="#334155" stroke-width="2"/>
  <text x="415" y="205" font-family="monospace" fill="#15803d" font-weight="bold">Cl</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'h-reactions',
      type: 'heading',
      data: { text: 'Reaction Types & Bond Breaking', level: 2 },
      terms: []
    },
    {
      id: 'table-rxn',
      type: 'comparisonTable',
      data: {
        caption: 'Common organic reaction classifications',
        headers: ['Reaction Type', 'Description'],
        rows: [
          ['<strong>Addition</strong>', 'Two reactants join to form a single product. (e.g. alkene + H₂ → alkane)'],
          ['<strong>Substitution</strong>', 'An atom or group is replaced by a different atom or group. (e.g. alkane + halogen → halogenoalkane + hydrogen halide)'],
          ['<strong>Oxidation</strong>', 'Addition of oxygen or removal of hydrogen. (e.g. alcohol → aldehyde)'],
          ['<strong>Reduction</strong>', 'Addition of hydrogen or removal of oxygen. (e.g. alkene + H₂ → alkane)'],
          ['<strong>Polymerisation</strong>', 'Many small molecules (monomers) join together to form a very large chain molecule (polymer).']
        ]
      },
      terms: ['Addition reaction', 'Substitution reaction', 'Oxidation', 'Reduction', 'Polymerisation']
    },
    {
      id: 'callout-breaking',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Covalent Bond Breaking (Fission)',
        text: 'When a covalent bond breaks, it can do so in two ways:<br/><br/><strong>Homolytic Fission:</strong> The bond breaks evenly. Each atom takes one electron from the shared pair, forming two highly reactive <strong>free radicals</strong>. (A free radical is an atom or group with an unpaired electron, represented by •).<br/><br/><strong>Heterolytic Fission:</strong> The bond breaks unevenly. One atom takes both electrons from the shared covalent bond, forming a positive ion (cation) and a negative ion (anion). The more electronegative atom takes the electrons.'
      },
      terms: ['Homolytic fission', 'Heterolytic fission', 'Free radical']
    },
    {
      id: 'list-curlies',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Curly Arrows:</strong> Used to show the movement of electrons during organic reaction mechanisms.',
          '<strong>Full-headed arrows:</strong> Show the movement of an <strong>electron pair</strong>. The arrow must start from a lone pair or a covalent bond and point to exactly where the electron pair is moving.',
          '<strong>Half-headed (fish-hook) arrows:</strong> Show the movement of a <strong>single electron</strong>. They are used in radical mechanisms (like homolytic fission).'
        ]
      },
      terms: ['Curly arrow', 'Fish-hook arrow']
    },
    {
      id: 'callout-electrophile',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is an Electrophile?',
        text: 'An <strong>electrophile</strong> ("electron-loving") is a species that is attracted to an electron-rich centre or area of high electron density (like a C=C double bond), where it accepts a pair of electrons to form a new covalent bond. Electrophiles are usually positive ions or molecules with a partial positive charge (δ+).'
      },
      terms: ['Electrophile']
    },
    {
      id: 'h-hazards',
      type: 'heading',
      data: { text: 'Hazards and Risk Assessments', level: 2 },
      terms: []
    },
    {
      id: 'callout-risk',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Hazard vs. Risk',
        text: 'A <strong>hazard</strong> is an intrinsic property of a substance or procedure that has the potential to cause harm (e.g. toxic, flammable, corrosive).<br/><br/>A <strong>risk</strong> is the probability or chance that the hazard will actually cause harm in a particular scenario.<br/><br/><strong>Risk Assessments</strong> evaluate both the hazard and the risk, to determine necessary <strong>control measures</strong>. Examples of control measures include:<br/>• Using a fume cupboard for toxic gases<br/>• Wearing gloves and safety goggles for corrosive liquids<br/>• Keeping flammable liquids away from naked flames (using a water bath instead of a bunsen burner)<br/>• Using a lower and safer concentration or a smaller amount of a hazardous chemical'
      },
      terms: ['Hazard', 'Risk', 'Risk assessment', 'Control measure']
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'table-terms', prompt: 'Define the terms: saturated, unsaturated, functional group, and homologous series.' },
      { id: 'c2', blockId: 'callout-homologous', prompt: 'State four characteristics that all members of the same homologous series share.' },
      { id: 'c3', blockId: 'table-formula', prompt: 'Explain the difference between molecular, structural, displayed, and skeletal formulas.' },
      { id: 'c6', blockId: 'list-3d', prompt: 'How are 3D stereochemical bond arrangements drawn on paper?' },
      { id: 'c4', blockId: 'callout-breaking', prompt: 'Distinguish between homolytic and heterolytic fission. What is formed in each case?' },
      { id: 'c5', blockId: 'callout-risk', prompt: 'Explain the difference between a hazard and a risk, and give two examples of control measures.' }
    ],
    summaryText: 'Organic chemistry = chemistry of C-containing compounds. Homologous series = same functional group, same general formula. Formula types: empirical, molecular, structural, displayed, skeletal. Reactions: addition, substitution, oxidation, reduction, polymerisation. Fission: homolytic (forms radicals) vs heterolytic (forms ions). Hazard = potential to harm; risk = likelihood of harm occurring.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_4_0;