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
          ['<strong>HBr (hydrogen bromide)</strong>', 'Room temperature, pure gas (to avoid water side-reactions)', 'Bromoalkane', 'CH₂=CH₂ + HBr → CH₃CH₂Br (bromoethane)'],
          ['<strong>HCl (hydrogen chloride)</strong>', 'Room temperature, pure gas', 'Chloroalkane', 'CH₂=CH₂ + HCl → CH₃CH₂Cl (chloroethane)'],
          ['<strong>H₂SO₄ (conc. sulfuric acid)</strong>', 'Room temperature, liquid H₂SO₄', 'Alkyl hydrogensulfate (then hydrolysis to alcohol)', 'CH₂=CH₂ + H₂SO₄ → CH₃CH₂OSO₃H'],
          ['<strong>H₂O (steam)</strong>', '300°C, 60 atm, H₃PO₄ catalyst (hydration)', 'Alcohol', 'CH₂=CH₂ + H₂O → CH₃CH₂OH (ethanol)'],
          ['<strong>[O] + H₂O (Oxidation)</strong>', 'Acidified potassium manganate(VII) solution (KMnO₄/H⁺)', 'Diol (two –OH groups)', 'CH₂=CH₂ + [O] + H₂O → CH₂OH–CH₂OH (ethane-1,2-diol)']
        ]
      },
      terms: ['Addition reaction', 'Hydrogenation', 'Hydration', 'Oxidation', 'Diol']
    },
{
      id: 'h-hydrogenation-marg',
      type: 'heading',
      data: { text: 'Hydrogenation & Margarine Manufacture', level: 2 },
      terms: []
    },
    {
      id: 'p-fats',
      type: 'paragraph',
      data: { text: 'Hydrogenation of alkenes involves reacting the C=C double bond with H₂ in the presence of a finely divided <strong>nickel catalyst</strong> at approx <strong>150°C</strong>. This reaction is heavily used in the food industry to manufacture <strong>margarine</strong>.' },
      terms: []
    },
    {
      id: 'callout-fats-structure',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Saturated vs Unsaturated Fats',
        text: 'Animal and vegetable fats/oils are similar molecules. Their melting points are determined by the number of C=C double bonds:<br/>• <strong>Saturated:</strong> No C=C double bonds (usually solid at room temp, e.g. animal fats).<br/>• <strong>Mono-unsaturated:</strong> One C=C double bond per hydrocarbon chain (usually oils).<br/>• <strong>Polyunsaturated:</strong> Multiple C=C double bonds.<br/>More double bonds = lower melting point.'
      },
      terms: ['Saturated', 'Polyunsaturated', 'Mono-unsaturated']
    },
    {
      id: 'callout-margarine',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Hardening of Oils into Margarine',
        text: 'Vegetable oils are often liquids at room temp due to high poly/mono-unsaturation, making them messy as spreads. They are <strong>hardened</strong> by passing H₂ through them in the presence of a <strong>Nickel catalyst</strong>.<br/><br/>Conditions are controlled to achieve <strong>partial hydrogenation</strong> — you want enough saturated bonds for a solid spreadable texture, but keep some unsaturated bonds for health benefits.'
      },
      terms: ['Partial hydrogenation', 'Hardening']
    },
    {
      id: 'callout-trans-fats',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'The Downside: Trans Fats',
        text: 'Naturally occurring unsaturated fats generally have a <strong>cis</strong> arrangement around the C=C bonds.<br/><br/>The relatively high temperatures in hydrogenation can cause some double bonds to flip into the <strong>trans</strong> form. Consumption of these <strong>trans fats</strong> raises LDL cholesterol levels, increasing the risk of heart disease.'
      },
      terms: ['Trans fats', 'LDL cholesterol']
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
      id: 'callout-bromine-water-chem',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'The Chemistry of the Bromine Water Test',
        text: 'When an alkene is shaken with bromine water, the major product is NOT the dibromoalkane. Because water is present in a much higher concentration, water molecules act as nucleophiles in the second step of the mechanism.<br/><br/>The major product formed is a <strong>bromoalcohol</strong> (e.g. reacting ethene with bromine water gives <strong>2-bromoethanol</strong>).<br/><br/>A small amount of 1,2-dibromoethane is still formed, but the simplified equation (Alkene + Br₂ → Dibromoalkane) is often accepted at this level unless the bromoalcohol or bromine water specifically is mentioned.'
      },
      terms: ['Bromoalcohol', 'Nucleophile']
    },

    {
      id: 'h-hydrogen-halides',
      type: 'heading',
      data: { text: 'Addition of Hydrogen Halides (HX)', level: 2 },
      terms: []
    },
    {
      id: 'callout-hhal-reactivity',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reactivity of Hydrogen Halides',
        text: 'The reaction rate with alkenes increases in the order: <strong>HF &lt; HCl &lt; HBr &lt; HI</strong>.<br/><br/>This is because the H–X bond strength decreases as the halogen atom gets larger (from F to I). The weaker the H–X bond (like in H–I), the easier it breaks, leading to a faster reaction. HF reacts very slowly and is often ignored.'
      },
      terms: ['Hydrogen halide']
    },
    {
      id: 'callout-hhal-aqueous',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Gaseous vs Aqueous HX',
        text: 'To form the halogenoalkane effectively, it is best to react the alkene with <strong>pure gaseous hydrogen halide</strong> at room temperature.<br/><br/>If aqueous solutions (like hydrochloric or hydrobromic acid) are used, the water gets involved in the reaction. Water molecules act as nucleophiles, producing an alcohol (a mixture of products) instead of purely the halogenoalkane.'
      },
      terms: []
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
    },
    {
      id: 'h-epoxyethane',
      type: 'heading',
      data: { text: 'Manufacture and Reactivity of Epoxyethane', level: 2 },
      terms: []
    },
    {
      id: 'callout-epoxyethane-manufacture',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Manufacture of Epoxyethane',
        text: 'Ethene is reacted with oxygen to produce epoxyethane.<br/><br/><strong>Conditions:</strong><br/>• Temperature: 250 - 300°C<br/>• Pressure: ~15 atmospheres<br/>• Catalyst: Solid Silver (Ag)<br/><br/><strong>Hazards & Problems:</strong> The reaction is exothermic, so temperature must be strictly controlled to avoid ethene burning to CO₂ and H₂O. Epoxyethane is poisonous, carcinogenic, and explosive in air.'
      },
      terms: ['Epoxyethane']
    },
    {
      id: 'callout-epoxy-strain',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Reactivity: Ring Strain',
        text: 'Epoxyethane is uniquely reactive because of severe <strong>ring strain</strong>. The bond angles in the 3-membered ring are forced to about 60° (instead of the normal 109.5° for single bonds). This poor orbital overlap and high electron pair repulsion make the molecule unstable. It reacts by breaking a C–O bond, opening the ring to become more stable.'
      },
      terms: ['Ring strain']
    },
    {
      id: 'table-epoxy-uses',
      type: 'comparisonTable',
      data: {
        caption: 'Reactions and Uses of Epoxyethane',
        headers: ['Reactant', 'Conditions', 'Product', 'Uses of Product'],
        rows: [
          ['Water (H₂O)', 'Very dilute H₂SO₄ catalyst, 60°C, large excess of water', 'Ethane-1,2-diol (ethylene glycol)', 'Antifreeze in car engines, manufacture of polyesters (e.g., PET / Terylene)'],
          ['Alcohols (R-OH)', 'Similar conditions (extension of water reaction)', 'Longer chain alcohols / ethers', 'Solvents, plasticisers (to make PVC flexible), non-ionic surfactants (detergents)']
        ]
      },
      terms: ['Ethane-1,2-diol', 'Antifreeze', 'Plasticiser', 'Surfactant']
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'p-reactive', prompt: 'Why do alkenes undergo addition reactions whereas alkanes do not?' },
      { id: 'c2', blockId: 'table-addition', prompt: 'Write the equation and state the conditions for the reaction of ethene with: (a) H₂, (b) HBr, (c) steam, (d) acidified KMnO₄.' },
      { id: 'c3', blockId: 'callout-bromine-test', prompt: 'Describe the bromine water test for unsaturation. What is the observation for an alkene and an alkane?' },
      { id: 'c4', blockId: 'callout-oxidation-test', prompt: 'Describe the reaction of an alkene with acidified potassium manganate(VII). What is the product and what is the colour change observations?' },

      { id: 'c5', blockId: 'callout-margarine', prompt: 'Describe the process of hardening vegetable oils to make margarine, including the catalyst used.' },
      { id: 'c6', blockId: 'callout-trans-fats', prompt: 'Why is the formation of trans fats a concern during the partial hydrogenation of oils?' },

      { id: 'c7', blockId: 'callout-bromine-water-chem', prompt: 'When ethene reacts with bromine water, what is the major organic product and why does it form instead of 1,2-dibromoethane?' },

      { id: 'c8', blockId: 'callout-hhal-reactivity', prompt: 'State the trend in reactivity of hydrogen halides with alkenes and explain the reason for this trend.' },
      { id: 'c9', blockId: 'callout-hhal-aqueous', prompt: 'Why is it better to react alkenes with pure gaseous hydrogen halides rather than aqueous solutions (like concentrated hydrochloric acid)?' },
      { id: 'c10', blockId: 'callout-epoxyethane-manufacture', prompt: 'State the conditions and catalyst for the manufacture of epoxyethane from ethene, and mention one hazard of the process.' },
      { id: 'c11', blockId: 'callout-epoxy-strain', prompt: 'Explain why epoxyethane is highly reactive in terms of its molecular structure.' },
      { id: 'c12', blockId: 'table-epoxy-uses', prompt: 'Give the conditions and product for the reaction of epoxyethane with water, and state one use of the product.' }
    ],
    summaryText: 'Alkenes are reactive due to electron-rich π bond. Undergo addition reactions: + H₂ → alkane (Ni, 150°C); + Br₂ → dibromoalkane; + HX → halogenoalkane; + H₂O (steam) → alcohol (H₃PO₄, 300°C, 60 atm); + H₂SO₄ → alkyl hydrogensulfate. + [O]/H₂O (acidified KMnO₄) → diol (purple → colourless). Br₂ water test: decolorised (orange → colourless) by alkenes. Hydrogenation is used to harden polyunsaturated vegetable oils into solid margarine (Ni catalyst). High temp partial hydrogenation can produce harmful trans fats which raise LDL cholesterol. In the bromine water test, the major product is a bromoalcohol (e.g., 2-bromoethanol) rather than a dibromoalkane, due to water acting as a nucleophile. HX addition rate increases HF < HCl < HBr < HI due to decreasing bond strength. Pure gaseous HX is preferred over aqueous acids to prevent water acting as a nucleophile. Epoxyethane is manufactured from ethene + O₂ (Ag catalyst, 250-300°C). It is highly reactive due to ring strain (60° angles) and reacts with water (H₂SO₄ cat, 60°C) to form ethane-1,2-diol, used as antifreeze and in polyesters.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_5_2;