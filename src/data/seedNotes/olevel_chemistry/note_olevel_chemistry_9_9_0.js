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
      id: 'svg-metallic',
      type: 'svg',
      data: {
        caption: 'Metallic bonding: The lattice of positive ions can slide (malleability) while the sea of electrons maintains the bonds.',
        svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Metallic Lattice -->
  <text x="150" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Metallic Lattice</text>
  
  <rect x="70" y="60" width="160" height="140" fill="#f1f5f9" rx="8"/>
  
  <!-- Row 1 -->
  <circle cx="95" cy="85" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="95" y="89" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="135" cy="85" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="135" y="89" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="175" cy="85" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="175" y="89" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="215" cy="85" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="215" y="89" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>

  <!-- Row 2 -->
  <circle cx="85" cy="130" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="85" y="134" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="125" cy="130" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="125" y="134" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="165" cy="130" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="165" y="134" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="205" cy="130" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="205" y="134" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>

  <!-- Row 3 -->
  <circle cx="95" cy="175" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="95" y="179" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="135" cy="175" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="135" y="179" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="175" cy="175" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="175" y="179" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="215" cy="175" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="215" y="179" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>

  <!-- Electrons -->
  <circle cx="80" cy="105" r="3" fill="#3b82f6"/>
  <circle cx="110" cy="115" r="3" fill="#3b82f6"/>
  <circle cx="150" cy="105" r="3" fill="#3b82f6"/>
  <circle cx="180" cy="115" r="3" fill="#3b82f6"/>
  <circle cx="210" cy="105" r="3" fill="#3b82f6"/>
  <circle cx="120" cy="65" r="3" fill="#3b82f6"/>
  <circle cx="155" cy="65" r="3" fill="#3b82f6"/>
  <circle cx="195" cy="65" r="3" fill="#3b82f6"/>
  
  <text x="150" y="215" font-family="var(--font-sans)" font-size="12" fill="#3b82f6" text-anchor="middle">"Sea" of delocalised electrons</text>

  <!-- Malleability (Sliding layers) -->
  <text x="450" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Malleability</text>
  
  <!-- Force Arrow -->
  <path d="M 330 85 L 360 85" fill="none" stroke="var(--color-text)" stroke-width="3" marker-end="url(#arrow-head)"/>
  <text x="345" y="75" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Force</text>

  <!-- Shifted Row 1 -->
  <circle cx="415" cy="85" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="415" y="89" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="455" cy="85" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="455" y="89" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="495" cy="85" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="495" y="89" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="535" cy="85" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="535" y="89" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>

  <!-- Row 2 -->
  <circle cx="385" cy="130" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="385" y="134" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="425" cy="130" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="425" y="134" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="465" cy="130" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="465" y="134" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="505" cy="130" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="505" y="134" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>

  <!-- Row 3 -->
  <circle cx="395" cy="175" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="395" y="179" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="435" cy="175" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="435" y="179" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="475" cy="175" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="475" y="179" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>
  <circle cx="515" cy="175" r="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
  <text x="515" y="179" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">+</text>

  <text x="450" y="215" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">Layers slide; bonds do not break</text>

  <defs>
    <marker id="arrow-head" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="var(--color-text)"/>
    </marker>
  </defs>
</svg>`
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
