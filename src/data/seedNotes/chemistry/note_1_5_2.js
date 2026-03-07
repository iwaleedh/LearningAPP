/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 2
 * "Electrophilic addition reactions of alkenes"
 * Source: Pearson Edexcel IAL Chemistry — Section 5B.1–5B.2
 */
export const note_chemistry_1_5_2 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Know the reactions of alkenes with H₂, Br₂, HBr, HCl, H₂SO₄, and steam. Write equations for all addition reactions. Understand why alkenes are more reactive than alkanes.' },
      terms: []
    },
    {
      id: 'h-why-reactive',
      type: 'heading',
      data: { text: 'Why Alkenes Are More Reactive Than Alkanes', level: 2 },
      terms: []
    },
    {
      id: 'p-reactive',
      type: 'paragraph',
      data: { text: 'The C=C double bond contains a <strong>π bond</strong> whose electron cloud is exposed above and below the molecular plane. This is a region of <strong>high electron density</strong> that is easily attacked by <strong>electrophiles</strong> (electron-deficient species seeking electrons). The π bond is also weaker than a σ bond (easier to break).' },
      terms: ['Electrophile']
    },
    {
      id: 'h-table',
      type: 'heading',
      data: { text: 'Summary of Addition Reactions', level: 2 },
      terms: []
    },
    {
      id: 'table-addition',
      type: 'comparisonTable',
      data: {
        caption: 'Addition reactions of alkenes (using ethene as example)',
        headers: ['Reagent', 'Conditions', 'Product(s)', 'Equation'],
        rows: [
          ['<strong>H₂ (hydrogen)</strong>', 'Ni catalyst, 150°C (hydrogenation)', 'Alkane (ethane)', 'CH₂=CH₂ + H₂ → CH₃CH₃'],
          ['<strong>Br₂ (bromine)</strong>', 'Room temperature, in solution or gas (no catalyst)', 'Dibromoalkane', 'CH₂=CH₂ + Br₂ → CH₂BrCH₂Br (1,2-dibromoethane)'],
          ['<strong>HBr (hydrogen bromide)</strong>', 'Room temperature, gas or HBr in solution', 'Bromoalkane', 'CH₂=CH₂ + HBr → CH₃CH₂Br (bromoethane)'],
          ['<strong>HCl (hydrogen chloride)</strong>', 'Room temperature, gas', 'Chloroalkane', 'CH₂=CH₂ + HCl → CH₃CH₂Cl (chloroethane)'],
          ['<strong>H₂SO₄ (conc. sulfuric acid)</strong>', 'Room temperature, liquid H₂SO₄', 'Alkyl hydrogensulfate (then hydrolysis to alcohol)', 'CH₂=CH₂ + H₂SO₄ → CH₃CH₂OSO₃H'],
          ['<strong>H₂O (steam)</strong>', '300°C, 60 atm, H₃PO₄ catalyst (hydration)', 'Alcohol', 'CH₂=CH₂ + H₂O → CH₃CH₂OH (ethanol)'],
          ['<strong>[O] + H₂O (Oxidation)</strong>', 'Acidified potassium manganate(VII) solution (KMnO₄/H⁺)', 'Diol (two –OH groups)', 'CH₂=CH₂ + [O] + H₂O → CH₂OH–CH₂OH (ethane-1,2-diol)']
        ]
      },
      terms: ['Addition reaction', 'Hydrogenation', 'Hydration', 'Oxidation', 'Diol']
    },
    {
      id: 'callout-bromine-test',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Bromine Water Test for Unsaturation',
        text: '<strong>Test:</strong> shake the compound with bromine water (orange/brown).<br/><strong>Alkene:</strong> bromine water is decolorised (turns colourless) because Br₂ adds across the C=C.<br/><strong>Alkane:</strong> bromine water remains orange/brown (no reaction without UV).<br/><br/>This is a quick test to distinguish saturated (alkanes) from unsaturated (alkenes) compounds.'
      },
      terms: ['Bromine water test']
    },
    {
      id: 'callout-oxidation-test',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'A Second Test for Alkenes: Oxidation to a Diol',
        text: 'Adding acidified potassium manganate(VII) to an alkene results in an addition AND oxidation reaction. The double bond breaks and two –OH groups are added across it to form a <strong>diol</strong>.<br/><br/><strong>Observation:</strong> The <strong>purple</strong> potassium manganate(VII) solution turns <strong>colourless</strong>. Alkanes do not react, so this can also be used as a test for a C=C double bond.'
      },
      terms: ['Potassium manganate(VII)']
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'p-reactive', prompt: 'Why do alkenes undergo addition reactions whereas alkanes do not?' },
      { id: 'c2', blockId: 'table-addition', prompt: 'Write the equation and state the conditions for the reaction of ethene with: (a) H₂, (b) HBr, (c) steam, (d) acidified KMnO₄.' },
      { id: 'c3', blockId: 'callout-bromine-test', prompt: 'Describe the bromine water test for unsaturation. What is the observation for an alkene and an alkane?' },
      { id: 'c4', blockId: 'callout-oxidation-test', prompt: 'Describe the reaction of an alkene with acidified potassium manganate(VII). What is the product and what is the colour change observations?' }
    ],
    summaryText: 'Alkenes are reactive due to electron-rich π bond. Undergo addition reactions: + H₂ → alkane (Ni, 150°C); + Br₂ → dibromoalkane; + HX → halogenoalkane; + H₂O (steam) → alcohol (H₃PO₄, 300°C, 60 atm); + H₂SO₄ → alkyl hydrogensulfate. + [O]/H₂O (acidified KMnO₄) → diol (purple → colourless). Br₂ water test: decolorised (orange → colourless) by alkenes.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_5_2;