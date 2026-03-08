/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 3
 * "Metallic bonding and properties of metals"
 * Source: Pearson Edexcel IAL Chemistry — Section 3A.3
 */
export const note_chemistry_1_3_3 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Describe metallic bonding as the attraction between a lattice of positive metal ions and a sea of delocalised electrons. Explain the physical properties of metals in terms of this structure.' },
      terms: []
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'Metallic Bonding', level: 2 },
      terms: []
    },
    {
      id: 'callout-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Metallic Bonding',
        text: 'In a metal, the atoms release their outer electrons to form a <strong>"sea" of delocalised electrons</strong>. These electrons are no longer associated with any one atom. The metal atoms become positive ions (cations) and arrange in a giant metallic lattice.<br/><br/><strong>Metallic bonding</strong> is the strong electrostatic attraction between the regular lattice of positive metal ions and the surrounding sea of mobile, delocalised electrons.'
      },
      terms: ['Metallic bonding', 'Delocalised electrons', 'Giant metallic lattice']
    },
    {
      id: 'h-props',
      type: 'heading',
      data: { text: 'Physical Properties of Metals', level: 2 },
      terms: []
    },
    {
      id: 'table-props',
      type: 'comparisonTable',
      data: {
        caption: 'Properties of metals explained by metallic bonding',
        headers: ['Property', 'Explanation (linking to metallic bonding)'],
        rows: [
          ['<strong>High melting/boiling points</strong>', 'Large amounts of energy needed to overcome many strong electrostatic attractions between the positive ion lattice and the delocalised electrons.'],
          ['<strong>Good conductors of electricity</strong>', 'The delocalised electrons are free to move through the lattice and carry charge when a potential difference is applied.'],
          ['<strong>Good conductors of heat</strong>', 'Mobile delocalised electrons can transfer kinetic energy rapidly through the structure.'],
          ['<strong>Malleable and ductile</strong>', 'Layers of positive ions can slide over one another without breaking the bonding, since the sea of electrons rearranges to maintain attraction throughout.'],
          ['<strong>High density</strong>', 'Metal atoms pack closely together in a lattice, resulting in a high mass per unit volume.']
        ]
      },
      terms: ['Malleable', 'Ductile']
    },
    {
      id: 'callout-strength',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Factors Affecting Metallic Bond Strength',
        text: 'Metallic bond strength (and therefore melting/boiling point) increases with:<br/>• <strong>More delocalised electrons per atom:</strong> e.g. Mg²⁺ (2 delocalised e⁻ per atom) has stronger metallic bonding than Na⁺ (1 delocalised e⁻). Al has 3 → even higher still.<br/>• <strong>Smaller ionic radius:</strong> ions sit closer to the electron sea → stronger electrostatic attraction. Mg²⁺ is smaller than Na⁺, contributing further to Mg\'s higher melting point.<br/>• <strong>More nearest neighbours:</strong> Na has 8 nearest neighbours; Mg has 12 (different packing). More interactions per atom → more energy needed to disrupt.<br/><br/><strong>Melting point trend (approximate):</strong> Na 98°C → Mg 650°C → Al 660°C — reflecting increasing delocalisable electrons and stronger lattice.'
      },
      terms: []
    },
    {
      id: 'callout-transition-metals',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Transition Metals: Extra Strong Metallic Bonding',
        text: 'Transition metals (e.g. Fe, Cu, Ti, W) have particularly strong metallic bonding because they delocalise <strong>both their 4s electrons AND some of their 3d electrons</strong> into the sea. This gives a much larger "sea" of electrons per atom.<br/><br/>Results:<br/>• Very high melting and boiling points (e.g. tungsten melts at 3422°C)<br/>• Very high tensile strength and hardness<br/><br/><strong>Boiling point vs melting point:</strong> Boiling point is a better indicator of the <em>true</em> strength of metallic bonding than melting point. When a metal melts, the bonding is <em>weakened</em> but not fully broken (liquid metals still have partial metallic bonding). Boiling completely separates the atoms, fully overcoming metallic attraction.'
      },
      terms: ['Transition metals', 'Delocalised electrons']
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-def', prompt: 'Define metallic bonding.' },
      { id: 'c2', blockId: 'table-props', prompt: 'Explain why metals are good conductors of electricity.' },
      { id: 'c3', blockId: 'table-props', prompt: 'Explain why metals are malleable but ionic crystals are brittle.' },
      { id: 'c4', blockId: 'callout-strength', prompt: 'Why does Mg have a higher melting point than Na? Explain in terms of metallic bonding (give at least two reasons).' },
      { id: 'c5', blockId: 'callout-transition-metals', prompt: 'Explain why transition metals tend to have higher melting points than s-block metals with similar periods.' }
    ],
    summaryText: 'Metallic bonding = electrostatic attraction between lattice of +ve metal ions and a sea of delocalised electrons. Conducts (mobile e⁻). Malleable (layers slide, sea rearranges). High mp/bp (strong attraction). Stronger with: more delocalised e⁻ (Na < Mg < Al), smaller ionic radius, more nearest neighbours. Transition metals delocalise 3d + 4s electrons → extra strong metallic bonds → very high mp. Boiling point is a better measure of metallic bond strength than melting point.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_3;