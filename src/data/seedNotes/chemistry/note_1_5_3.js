/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 3
 * "Electrophilic addition mechanism and curly arrows"
 * Source: Pearson Edexcel IAL Chemistry — Section 5B.2
 */
export const note_chemistry_1_5_3 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Draw the electrophilic addition mechanism for alkenes using curly arrows. Show formation of the carbocation intermediate and the final product.' },
      terms: []
    },
    {
      id: 'h-what-is-eladd',
      type: 'heading',
      data: { text: 'Understanding Electrophilic Addition', level: 2 },
      terms: []
    },
    {
      id: 'p-add-reaction-def',
      type: 'paragraph',
      data: { text: 'An <strong>addition reaction</strong> occurs when two molecules join together to make a larger one. In an alkene addition reaction, the double bond converts to a single bond as new atoms are added. Nothing is lost in the process.' },
      terms: ['Addition reaction']
    },
    {
      id: 'callout-pi-bond',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Exposed π Bond',
        text: 'The carbon-carbon double bond consists of a normal <strong>sigma (σ) bond</strong> and a <strong>pi (π) bond</strong>. The π bond is formed by sideways overlap of p-orbitals, which means its electron pair is held in molecular orbitals <em>above and below</em> the plane of the molecule. Because these electrons lie exposed, they create a region of extremely high electron density, making them highly attractive targets for positively charged species.'
      },
      terms: ['Sigma bond', 'Pi bond']
    },
    {
      id: 'callout-electrophile-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is an Electrophile?',
        text: 'An <strong>electrophile</strong> ("electron-lover") is an atom or group of atoms that is attracted to electron-rich regions. Because it is attracted to negative areas, it must be an electron-pair acceptor—generally carrying either a full positive charge (like a carbocation) or a slight partial positive charge (δ+), such as the slightly positive hydrogen atom in a polar H–Br bond.'
      },
      terms: ['Electrophile']
    },
    {
      id: 'h-curly',
      type: 'heading',
      data: { text: 'Curly Arrows', level: 2 },
      terms: []
    },
    {
      id: 'callout-curly',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Curly Arrow Rules',
        text: 'A <strong>curly arrow</strong> represents the movement of an electron pair.<br/>• The arrow starts where electrons <em>are</em> (a bond or lone pair) and points to where they <em>go</em>.<br/>• A full curly arrow (← with full head) = movement of a pair (2 electrons).<br/>• A half-arrow (fishhook, ⇀) = movement of a single electron (used in radical mechanisms).'
      },
      terms: ['Curly arrow', 'Carbocation', 'Electrophilic addition']
    },
    {
      id: 'h-mechanism',
      type: 'heading',
      data: { text: 'Mechanism: Addition of HBr to Ethene', level: 2 },
      terms: []
    },
    {
      id: 'callout-mech1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Step 1: Electrophile approaches π bond',
        text: 'The π electron cloud of the C=C <strong>attacks the partially positive H</strong> in H–Br (HBr is a polar molecule: H<sup>δ+</sup>–Br<sup>δ−</sup>).<br/><br/>Arrow 1: from C=C π bond → to the H of HBr.<br/>Arrow 2: from the H–Br bond → to the Br atom.<br/><br/>This breaks the C=C π bond and also breaks the H–Br bond. Result: <strong>carbocation</strong> CH₃CH₂⁺ + Br⁻ (heterolytic fission of H–Br).'
      },
      terms: ['Heterolytic fission', 'Carbocation']
    },
    {
      id: 'callout-mech2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Step 2: Nucleophile attacks carbocation',
        text: 'The bromide ion (Br⁻) acts as a <strong>nucleophile</strong> and donates a lone pair to the positively charged carbon.<br/><br/>Arrow 3: from lone pair on Br⁻ → to the C⁺.<br/><br/>Result: C–Br bond forms → <strong>product</strong> CH₃CH₂Br (bromoethane).'
      },
      terms: ['Nucleophile']
    },
    {
      id: 'callout-hx-reactivity',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reactivity of Hydrogen Halides',
        text: 'The mechanism is exactly the same for all hydrogen halides (HF, HCl, HBr, HI). However, the rate of reaction increases down the group: <strong>HF &lt; HCl &lt; HBr &lt; HI (fastest)</strong>.<br/><br/>This is because the H–X bond strength decreases as the halogen gets larger (e.g., H–F is 568 kJ mol⁻¹ while H–I is 298 kJ mol⁻¹). A weaker bond breaks more readily in the first step of the mechanism, leading to a faster reaction.'
      },
      terms: ['Bond strength', 'Rate of reaction']
    },
    {
      id: 'h-bromine',
      type: 'heading',
      data: { text: 'Mechanism: Addition of Halogens (Br₂)', level: 2 },
      terms: []
    },
    {
      id: 'p-halogens-context',
      type: 'paragraph',
      data: { text: 'Alkenes react in the cold with pure liquid bromine, or with a solution of bromine in an organic solvent (like tetrachloromethane). The double bond breaks and a bromine atom is added to each carbon. For example, ethene yields 1,2-dibromoethane. A cyclic alkene like cyclohexene reacts identically to form 1,2-dibromocyclohexane.<br/><br/><em>Note:</em> Chlorine (Cl₂) reacts in exactly the same way to form dichlorides. Fluorine is too explosive, and iodine is generally too unreactive.' },
      terms: []
    },
    {
      id: 'callout-br2-mech1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Step 1: Induced Dipole',
        text: 'Bromine (Br₂) is a non-polar molecule, but as it approaches the electron-rich π bond, an <strong>induced dipole</strong> is created (Br<sup>δ+</sup>–Br<sup>δ−</sup>).<br/><br/>The π electrons attack the Br<sup>δ+</sup> atom. The Br–Br bond breaks by heterolytic fission (both electrons go to the Br<sup>δ−</sup> atom).<br/><br/>This forms a <strong>carbocation</strong> (CH₂BrCH₂⁺) and a bromide ion (Br⁻).'
      },
      terms: ['Induced dipole', 'Heterolytic fission']
    },
    {
      id: 'callout-br2-mech2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Step 2: Nucleophilic Attack',
        text: 'The bromide ion (Br⁻) uses a lone pair to attack the positive carbon of the carbocation.<br/><br/>Result: forms 1,2-dibromoethane (CH₂BrCH₂Br).<br/><br/><em>Note:</em> In university chemistry, a cyclic bromonium ion intermediate is often used instead, but the simple carbocation mechanism is widely accepted for A-Level exams.'
      },
      terms: []
    },
    {
      id: 'h-h2so4',
      type: 'heading',
      data: { text: 'Mechanism: Addition of Concentrated Sulphuric Acid', level: 2 },
      terms: []
    },
    {
      id: 'callout-h2so4-mech',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Mechanism Steps for H₂SO₄',
        text: 'When alkenes react with <strong>cold concentrated sulphuric acid</strong>, the acid acts as an electrophile. The H₂SO₄ molecule features an H–O bond where the hydrogen is δ+ and oxygen is δ−.<br/><br/><strong>Step 1:</strong> The π bond attacks the δ+ hydrogen atom on H₂SO₄. The H–O bond breaks, sending both electrons to the oxygen (heterolytic fission). This forms a carbocation (CH₃CH₂⁺ for ethene) and a hydrogensulphate ion (HSO₄⁻, specifically ⁻OSO₃H).<br/><br/><strong>Step 2:</strong> A lone pair on the negative oxygen of the hydrogensulphate ion attacks the positive carbon.<br/><br/><strong>Product:</strong> An alkyl hydrogensulphate. Ethene yields <strong>ethyl hydrogensulphate</strong> (CH₃CH₂OSO₃H). Cyclohexene yields cyclohexyl hydrogensulphate, following the exact same mechanism rules.'
      },
      terms: ['Sulphuric acid', 'Ethyl hydrogensulphate']
    },
    {
      id: 'h-heterolytic',
      type: 'heading',
      data: { text: 'Heterolytic vs Homolytic Fission', level: 2 },
      terms: []
    },
    {
      id: 'table-fission',
      type: 'comparisonTable',
      data: {
        caption: 'Bond fission types',
        headers: ['Fission type', 'How electrons are distributed', 'Ions/Radicals formed', 'Where it occurs'],
        rows: [
          ['<strong>Homolytic</strong>', 'One electron to each atom (both get one).', 'Free radicals (unpaired electrons, •)', 'FRS of alkanes; initiation step; Cl₂ + UV'],
          ['<strong>Heterolytic</strong>', 'BOTH electrons go to ONE atom.', 'Ions (cation + anion)', 'Electrophilic addition; nucleophilic substitution']
        ]
      },
      terms: ['Homolytic fission', 'Heterolytic fission']
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c0', blockId: 'callout-electrophile-def', prompt: 'Define what an electrophile is, and explain why the structure of the C=C double bond is highly susceptible to electrophilic attack.' },
      { id: 'c1', blockId: 'callout-curly', prompt: 'What does a curly arrow represent in a mechanism, and where does it start and end?' },
      { id: 'c2', blockId: 'callout-mech1', prompt: 'Describe step 1 of the electrophilic addition of HBr to ethene. What intermediate forms?' },
      { id: 'c2_5', blockId: 'callout-hx-reactivity', prompt: 'Explain the trend in the rate of reaction of different hydrogen halides (HF to HI) with alkenes.' },
      { id: 'c2_8', blockId: 'p-halogens-context', prompt: 'What conditions are typically used for adding bromine to an alkene to study the pure addition mechanism, and what is the product with cyclohexene?' },
      { id: 'c3', blockId: 'callout-br2-mech1', prompt: 'How does bromine (a non-polar molecule) act as an electrophile towards alkenes?' },
      { id: 'c4', blockId: 'callout-h2so4-mech', prompt: 'What is the product formed when ethene reacts with concentrated sulphuric acid, and which part acts as the electrophile?' },
      { id: 'c5', blockId: 'table-fission', prompt: 'Distinguish between homolytic and heterolytic fission. What types of intermediate does each produce?' }
    ],
    summaryText: 'Electrophilic addition mechanisms: 1) HBr: addition across C=C involves attack on δ+ H, forming carbocation, then nucleophilic attack by Br⁻. 2) Br₂: π electrons induce a dipole in Br₂, attacking Brδ+, forming carbocation + Br⁻. 3) H₂SO₄: attack on δ+ H forms carbocation, then HSO₄⁻ attacks forming alkyl hydrogensulphate.',
    ready: true
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Electrophilic Addition Mechanism with Br2 and H2SO4',
      detail: 'Bromine acts as an electrophile via an induced dipole from the electron-rich π bond. Sulphuric acid acts via the δ+ hydrogen on its H–O bond, creating an alkyl hydrogensulphate.',
      source: 'https://www.chemguide.co.uk/mechanisms/eladdmenu.html'
    }
  ]
};
export default note_chemistry_1_5_3;