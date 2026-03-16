export const note_olevel_chemistry_2_2_12 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-4-3-metallic-bonding.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe metallic bonding in terms of a lattice of positive ions surrounded by a sea of delocalised electrons, and use this model to explain the properties of metals.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Metallic Bonding', level: 2 }
    },
    {
      id: 'call-model',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Metallic Bonding Model',
        text: 'In a metal, each atom loses its outer (valence) electrons to form a <strong>positive metal ion</strong>.<br/><br/>These positive ions are arranged in a regular <strong>giant metallic lattice</strong>.<br/><br/>The lost electrons become <strong>delocalised</strong> — they are no longer associated with any single atom and can move freely throughout the whole structure, forming a "sea of delocalised electrons".<br/><br/><strong>Metallic bond</strong> = the strong electrostatic attraction between the lattice of positive ions and the sea of delocalised electrons.'
      }
    },
    {
      id: 'svg-metallic-bonding',
      type: 'svg',
      data: {
        caption: 'The metallic lattice: A regular arrangement of positive ions surrounded by a sea of delocalised electrons.',
        svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Positive Ion Gradient -->
    <radialGradient id="metal-ion" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </radialGradient>
    <!-- Delocalised Electron -->
    <radialGradient id="deloc-e" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fcd34d" />
      <stop offset="100%" stop-color="#d97706" />
    </radialGradient>
  </defs>

  <!-- Left: Metallic Lattice structure -->
  <g transform="translate(100, 40)">
    <text x="60" y="-20" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-text)">Sea of Delocalised Electrons</text>
    
    <!-- Background glow representing the "sea" -->
    <rect x="-30" y="-10" width="180" height="140" fill="#e0f2fe" rx="10"/>

    <!-- Ions Row 1 -->
    <circle cx="0" cy="18" r="16" fill="url(#metal-ion)"/>
    <text x="0" y="23" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
    
    <circle cx="40" cy="18" r="16" fill="url(#metal-ion)"/>
    <text x="40" y="23" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
    
    <circle cx="80" cy="18" r="16" fill="url(#metal-ion)"/>
    <text x="80" y="23" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
    
    <circle cx="120" cy="18" r="16" fill="url(#metal-ion)"/>
    <text x="120" y="23" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>

    <!-- Ions Row 2 -->
    <circle cx="0" cy="60" r="16" fill="url(#metal-ion)"/>
    <text x="0" y="65" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
    
    <circle cx="40" cy="60" r="16" fill="url(#metal-ion)"/>
    <text x="40" y="65" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
    
    <circle cx="80" cy="60" r="16" fill="url(#metal-ion)"/>
    <text x="80" y="65" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
    
    <circle cx="120" cy="60" r="16" fill="url(#metal-ion)"/>
    <text x="120" y="65" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>

    <!-- Ions Row 3 -->
    <circle cx="0" cy="102" r="16" fill="url(#metal-ion)"/>
    <text x="0" y="107" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
    
    <circle cx="40" cy="102" r="16" fill="url(#metal-ion)"/>
    <text x="40" y="107" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
    
    <circle cx="80" cy="102" r="16" fill="url(#metal-ion)"/>
    <text x="80" y="107" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
    
    <circle cx="120" cy="102" r="16" fill="url(#metal-ion)"/>
    <text x="120" y="107" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>

    <!-- Delocalised Electrons -->
    <circle cx="-15" cy="40" r="4" fill="url(#deloc-e)"/>
    <circle cx="20" cy="0" r="4" fill="url(#deloc-e)"/>
    <circle cx="20" cy="40" r="4" fill="url(#deloc-e)"/>
    <circle cx="60" cy="40" r="4" fill="url(#deloc-e)"/>
    <circle cx="100" cy="40" r="4" fill="url(#deloc-e)"/>
    <circle cx="135" cy="40" r="4" fill="url(#deloc-e)"/>
    
    <circle cx="-15" cy="80" r="4" fill="url(#deloc-e)"/>
    <circle cx="20" cy="80" r="4" fill="url(#deloc-e)"/>
    <circle cx="60" cy="80" r="4" fill="url(#deloc-e)"/>
    <circle cx="100" cy="80" r="4" fill="url(#deloc-e)"/>
    <circle cx="135" cy="80" r="4" fill="url(#deloc-e)"/>

    <circle cx="60" cy="120" r="4" fill="url(#deloc-e)"/>
    <circle cx="20" cy="120" r="4" fill="url(#deloc-e)"/>

    <!-- Legends labels -->
    <circle cx="-40" cy="155" r="8" fill="url(#metal-ion)"/>
    <text x="-25" y="160" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)">Metal cation</text>
    <circle cx="60" cy="155" r="4" fill="url(#deloc-e)"/>
    <text x="70" y="160" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)">e⁻ (delocalised)</text>
  </g>

  <!-- Right: Malleability -->
  <g transform="translate(400, 40)">
    <text x="60" y="-20" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-text)">Malleability</text>
    <text x="60" y="-5" text-anchor="middle" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">Layers slide, bonds remain</text>
    
    <rect x="-30" y="5" width="180" height="110" fill="#e0f2fe" rx="10"/>

    <!-- Top layer pushed right -->
    <path d="M-50 20 L-20 20 L-30 10 M-20 20 L-30 30" stroke="#f59e0b" stroke-width="3" fill="none" stroke-linecap="round"/>
    
    <g transform="translate(20, 0)">
      <circle cx="0" cy="25" r="16" fill="url(#metal-ion)"/>
      <text x="0" y="30" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
      
      <circle cx="40" cy="25" r="16" fill="url(#metal-ion)"/>
      <text x="40" y="30" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
      
      <circle cx="80" cy="25" r="16" fill="url(#metal-ion)"/>
      <text x="80" y="30" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
      
      <circle cx="120" cy="25" r="16" fill="url(#metal-ion)"/>
      <text x="120" y="30" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
    </g>

    <!-- Bottom two layers stay put -->
    <circle cx="0" cy="65" r="16" fill="url(#metal-ion)"/>
    <text x="0" y="70" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
    <circle cx="40" cy="65" r="16" fill="url(#metal-ion)"/>
    <text x="40" y="70" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
    <circle cx="80" cy="65" r="16" fill="url(#metal-ion)"/>
    <text x="80" y="70" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>
    <circle cx="120" cy="65" r="16" fill="url(#metal-ion)"/>
    <text x="120" y="70" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#fff">+</text>

    <!-- Random electrons shifting to adapt -->
    <circle cx="10" cy="45" r="4" fill="url(#deloc-e)"/>
    <circle cx="50" cy="45" r="4" fill="url(#deloc-e)"/>
    <circle cx="90" cy="45" r="4" fill="url(#deloc-e)"/>
    <circle cx="130" cy="45" r="4" fill="url(#deloc-e)"/>
  </g>
</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Properties of Metals Explained', level: 2 }
    },
    {
      id: 'tbl-props',
      type: 'comparisonTable',
      data: {
        caption: 'Metallic bonding explains metal properties',
        headers: ['Property', 'Observation', 'Explanation (using metallic bonding)'],
        rows: [
          ['Electrical conductivity', 'Good conductor (solid and liquid)', 'Delocalised electrons can move freely throughout the lattice, carrying charge'],
          ['Thermal conductivity', 'Good conductor of heat', 'Delocalised electrons can transfer kinetic energy rapidly through the lattice'],
          ['Malleability / Ductility', 'Can be bent, hammered into sheets, drawn into wire', 'Layers of positive ions can slide past each other; delocalised electrons re-arrange, maintaining the bond'],
          ['High melting/boiling point', 'Generally high (e.g. Fe 1538°C)', 'Strong electrostatic attraction between many positive ions and delocalised electrons requires much energy to overcome'],
          ['Lustre (shiny)', 'Shiny surface', 'Delocalised electrons can absorb and re-emit light']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Comparing Bond Types', level: 2 }
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Summary comparison of bonding types',
        headers: ['Feature', 'Ionic', 'Simple Covalent', 'Giant Covalent', 'Metallic'],
        rows: [
          ['Particles', 'Ions in lattice', 'Molecules', 'Atoms in lattice', 'Positive ions + e⁻ sea'],
          ['Melting point', 'High', 'Low', 'Very high', 'High (generally)'],
          ['Conducts (solid)', 'No', 'No', 'No (except graphite)', 'Yes'],
          ['Conducts (molten/dissolved)', 'Yes', 'No', 'No', 'Yes'],
          ['Malleability', 'Brittle', 'N/A', 'Hard/brittle', 'Yes']
        ]
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When explaining electrical conductivity in metals, always state: "delocalised electrons are free to move and carry charge." For malleability, always say "layers of positive ions can slide over each other" — do not say "atoms slide."<br/><br/>Mercury is a liquid metal at room temperature — it still has metallic bonding, just weaker attractions between Hg²⁺ ions and delocalised electrons.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Metallic bonding: lattice of positive metal ions surrounded by a sea of delocalised electrons. The strong electrostatic attraction is responsible for high melting points. Delocalised electrons explain electrical and thermal conductivity. Sliding ion layers explain malleability and ductility.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Metallic bonding = lattice of positive ions in a sea of delocalised electrons. Explains conductivity, malleability, and high melting points.',
    cues: [
      { id: 'cue-1', blockId: 'call-model', prompt: 'Describe metallic bonding.', answer: 'A lattice of positive metal ions surrounded by a sea of delocalised (free-moving) electrons. The metallic bond is the strong electrostatic attraction between the lattice and the electron sea.' },
      { id: 'cue-2', blockId: 'tbl-props', prompt: 'Why can metals conduct electricity?', answer: 'Delocalised electrons are free to move throughout the lattice and can carry electrical charge.' },
      { id: 'cue-3', blockId: 'tbl-props', prompt: 'Why are metals malleable?', answer: 'Layers of positive ions can slide past each other without breaking the bond, because the delocalised electrons re-arrange to maintain the electrostatic attraction.' },
      { id: 'cue-4', blockId: 'tbl-props', prompt: 'Why do metals generally have high melting points?', answer: 'Strong electrostatic attraction between many positive ions and the delocalised electron sea requires a large amount of energy to overcome.' }
    ]
  },
  evidence: [],
  mentions: []
};
