export const note_olevel_chemistry_9_9_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-1-1-properties-of-metals.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the physical and chemical properties of metals.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Physical Properties of Metals', level: 2 }
    },
    {
      id: 'tbl-physical',
      type: 'comparisonTable',
      data: {
        caption: 'Physical properties of metals',
        headers: ['Property', 'Description'],
        rows: [
          ['Lustre', 'Shiny surface when freshly cut/polished'],
          ['Malleability', 'Can be hammered into thin sheets without breaking'],
          ['Ductility', 'Can be drawn into thin wires'],
          ['Electrical conductivity', 'Good conductors of electricity (delocalised electrons carry charge)'],
          ['Thermal conductivity', 'Good conductors of heat'],
          ['Melting/boiling point', 'Generally high (metallic bonds are strong); exceptions: mercury (liquid), Na and K (low)'],
          ['Density', 'Generally high; exceptions: Na, K, Li (low density, float on water)'],
          ['Tensile strength', 'Strong — difficult to pull apart']
        ]
      }
    },
    {
      id: 'call-chemical',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Chemical Properties',
        text: '<strong>1. Reaction with oxygen → metal oxide:</strong><br/>2Mg(s) + O₂(g) → 2MgO(s) (bright white flame)<br/>4Fe(s) + 3O₂(g) → 2Fe₂O₃(s) (slow rusting)<br/><br/><strong>2. Reaction with water/steam:</strong><br/>2Na + 2H₂O → 2NaOH + H₂ (cold water, vigorous)<br/>Mg + H₂O → MgO + H₂ (steam only)<br/><br/><strong>3. Reaction with dilute acids → salt + H₂:</strong><br/>Fe + 2HCl → FeCl₂ + H₂<br/>Mg + 2HCl → MgCl₂ + H₂<br/><br/>Note: Cu, Ag, Au do not react with dilute acids (low in reactivity series).'
      }
    },
    {
      id: 'call-structure',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Metals Have These Properties',
        text: '<strong>Metallic bonding</strong>: positive metal ions arranged in layers, surrounded by a "sea" of delocalised electrons.<br/><br/>• High conductivity: delocalised electrons move freely to carry charge/heat.<br/>• Malleability/ductility: layers of ions can slide past each other without breaking bonds (electrons re-form bonds in new positions).<br/>• High melting point: strong electrostatic attraction between positive ions and delocalised electrons requires much energy to break.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Metals: shiny, malleable, ductile, good conductors of heat and electricity, high MP (generally). Metallic bonding: positive ions in sea of delocalised electrons. React with O₂ (oxides), water (hydroxide+H₂), dilute acids (salt+H₂).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Metals: malleable, ductile, conductors. Metallic bond = positive ions + sea of electrons. React with O₂, water, acids. High MP due to strong metallic bonding.',
    cues: [
      { id: 'cue-1', blockId: 'call-structure', prompt: 'Explain why metals are good electrical conductors.', answer: 'Metals have delocalised electrons that are free to move throughout the structure. When a voltage is applied, these electrons move and carry the electric charge.' },
      { id: 'cue-2', blockId: 'call-structure', prompt: 'Explain why metals are malleable.', answer: 'Layers of metal ions can slide past each other when a force is applied. The delocalised electrons maintain the metallic bonding in the new position, so the metal does not crack or break.' },
      { id: 'cue-3', blockId: 'call-chemical', prompt: 'Write the equation for magnesium reacting with steam.', answer: 'Mg(s) + H₂O(g) → MgO(s) + H₂(g)' }
    ]
  },
  evidence: [],
  mentions: []
};
