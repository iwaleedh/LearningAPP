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
      { id: 'c1', blockId: 'callout-curly', prompt: 'What does a curly arrow represent in a mechanism, and where does it start and end?' },
      { id: 'c2', blockId: 'callout-mech1', prompt: 'Describe step 1 of the electrophilic addition of HBr to ethene. What intermediate forms?' },
      { id: 'c3', blockId: 'callout-mech2', prompt: 'Describe step 2 of the electrophilic addition of HBr to ethene. What is the species that attacks the carbocation?' },
      { id: 'c4', blockId: 'table-fission', prompt: 'Distinguish between homolytic and heterolytic fission. What types of intermediate does each produce?' }
    ],
    summaryText: 'Curly arrow = movement of electron pair (from → to). Electrophilic addition mechanism (HBr + alkene): Step 1 = π electrons attack H of HBr → carbocation + Br⁻ (heterolytic fission). Step 2 = Br⁻ lone pair attacks C⁺ → product. Heterolytic fission (both e⁻ to one atom) → ions. Homolytic (one each) → radicals.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_5_3;