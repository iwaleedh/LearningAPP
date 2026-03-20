export const note_olevel_chemistry_2_2_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-2-2-ionic-bonds-and-lattice-structure.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the giant ionic lattice structure and explain how it accounts for the physical properties of ionic compounds.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Giant Ionic Lattice', level: 2 }
    },
    {
      id: 'call-lattice',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Giant Ionic Lattice Structure',
        text: 'Ionic compounds do not form simple molecules. Instead, they form a <strong>giant ionic lattice</strong> — a regular, three-dimensional arrangement of alternating positive and negative ions.<br/><br/>Each ion is surrounded by ions of the opposite charge. In NaCl, each Na⁺ is surrounded by 6 Cl⁻ ions, and each Cl⁻ is surrounded by 6 Na⁺ ions.<br/><br/>The lattice is held together by strong <strong>electrostatic forces of attraction</strong> between all neighbouring oppositely charged ions — not just pairs of ions.'
      }
    },
    {
      id: 'call-nacl',
      type: 'callout',
      data: {
        style: 'key',
        title: 'NaCl Crystal Structure',
        text: 'In the sodium chloride crystal:<br/>• Na⁺ and Cl⁻ ions alternate in a cubic arrangement<br/>• There are no individual NaCl molecules — the formula NaCl simply gives the ratio of ions (1:1)<br/>• Each Na⁺ has 6 nearest Cl⁻ neighbours and vice versa (coordination number = 6)<br/><br/>The crystal structure extends in all three dimensions, involving millions of ions held together by strong electrostatic attractions.'
      }
    },
    {
      id: 'svg-ionic-lattice',
      type: 'svg',
      data: {
        caption: '2D and 3D representations of the giant ionic lattice in Sodium Chloride (NaCl). Strong electrostatic forces exist between all adjacent oppositely charged ions.',
        svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="grad-na" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#d97706"/>
    </radialGradient>
    <radialGradient id="grad-cl" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#4ade80"/>
      <stop offset="100%" stop-color="#16a34a"/>
    </radialGradient>
  </defs>

  <!-- 2D Cross Section -->
  <g transform="translate(100, 50)">
    <text x="60" y="-20" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-text)">2D Cross Section</text>
    
    <!-- Rows of alternating ions -->
    <!-- Row 1 -->
    <circle cx="0" cy="0" r="16" fill="url(#grad-na)"/>
    <text x="0" y="5" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="12" fill="#1e293b">+</text>
    <circle cx="40" cy="0" r="20" fill="url(#grad-cl)"/>
    <text x="40" y="5" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="16" fill="#1e293b">-</text>
    <circle cx="80" cy="0" r="16" fill="url(#grad-na)"/>
    <text x="80" y="5" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="12" fill="#1e293b">+</text>
    <circle cx="120" cy="0" r="20" fill="url(#grad-cl)"/>
    <text x="120" y="5" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="16" fill="#1e293b">-</text>

    <!-- Row 2 -->
    <circle cx="0" cy="40" r="20" fill="url(#grad-cl)"/>
    <text x="0" y="45" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="16" fill="#1e293b">-</text>
    <circle cx="40" cy="40" r="16" fill="url(#grad-na)"/>
    <text x="40" y="45" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="12" fill="#1e293b">+</text>
    <circle cx="80" cy="40" r="20" fill="url(#grad-cl)"/>
    <text x="80" y="45" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="16" fill="#1e293b">-</text>
    <circle cx="120" cy="40" r="16" fill="url(#grad-na)"/>
    <text x="120" y="45" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="12" fill="#1e293b">+</text>

    <!-- Row 3 -->
    <circle cx="0" cy="80" r="16" fill="url(#grad-na)"/>
    <text x="0" y="85" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="12" fill="#1e293b">+</text>
    <circle cx="40" cy="80" r="20" fill="url(#grad-cl)"/>
    <text x="40" y="85" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="16" fill="#1e293b">-</text>
    <circle cx="80" cy="80" r="16" fill="url(#grad-na)"/>
    <text x="80" y="85" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="12" fill="#1e293b">+</text>
    <circle cx="120" cy="80" r="20" fill="url(#grad-cl)"/>
    <text x="120" y="85" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="16" fill="#1e293b">-</text>

    <!-- Lines to show attraction -->
    <line x1="16" y1="0" x2="20" y2="0" stroke="var(--color-text-secondary)" stroke-width="2"/>
    <line x1="60" y1="0" x2="64" y2="0" stroke="var(--color-text-secondary)" stroke-width="2"/>
    <line x1="96" y1="0" x2="100" y2="0" stroke="var(--color-text-secondary)" stroke-width="2"/>
    
    <line x1="0" y1="16" x2="0" y2="20" stroke="var(--color-text-secondary)" stroke-width="2"/>
    <line x1="40" y1="20" x2="40" y2="24" stroke="var(--color-text-secondary)" stroke-width="2"/>
    
    <!-- Legend inside -->
    <circle cx="0" cy="140" r="12" fill="url(#grad-na)"/>
    <text x="20" y="145" text-anchor="start" font-family="var(--font-sans)" font-size="14" fill="var(--color-text)">Sodium ion (Na⁺)</text>
    <circle cx="0" cy="170" r="14" fill="url(#grad-cl)"/>
    <text x="20" y="175" text-anchor="start" font-family="var(--font-sans)" font-size="14" fill="var(--color-text)">Chloride ion (Cl⁻)</text>
  </g>

  <!-- 3D Lattice Representation (simplified isometric) -->
  <g transform="translate(380, 110)">
    <text x="40" y="-80" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-text)">3D Lattice Structure</text>
    
    <!-- Layer 1 (Back) -->
    <circle cx="20" cy="-30" r="14" fill="url(#grad-cl)" opacity="0.6"/>
    <circle cx="60" cy="-30" r="10" fill="url(#grad-na)" opacity="0.6"/>
    <circle cx="20" cy="10" r="10" fill="url(#grad-na)" opacity="0.6"/>
    <circle cx="60" cy="10" r="14" fill="url(#grad-cl)" opacity="0.6"/>

    <!-- Connections -->
    <line x1="0" y1="0" x2="20" y2="-30" stroke="var(--color-text-secondary)" stroke-width="1.5" opacity="0.6"/>
    <line x1="40" y1="0" x2="60" y2="-30" stroke="var(--color-text-secondary)" stroke-width="1.5" opacity="0.6"/>
    <line x1="80" y1="0" x2="100" y2="-30" stroke="var(--color-text-secondary)" stroke-width="1.5" opacity="0.6"/>
    
    <line x1="0" y1="40" x2="20" y2="10" stroke="var(--color-text-secondary)" stroke-width="1.5" opacity="0.6"/>
    <line x1="40" y1="40" x2="60" y2="10" stroke="var(--color-text-secondary)" stroke-width="1.5" opacity="0.6"/>
    <line x1="80" y1="40" x2="100" y2="10" stroke="var(--color-text-secondary)" stroke-width="1.5" opacity="0.6"/>

    <!-- Layer 2 (Middle) -->
    <circle cx="0" cy="0" r="10" fill="url(#grad-na)"/>
    <circle cx="40" cy="0" r="14" fill="url(#grad-cl)"/>
    <circle cx="80" cy="0" r="10" fill="url(#grad-na)"/>
    
    <circle cx="0" cy="40" r="14" fill="url(#grad-cl)"/>
    <circle cx="40" cy="40" r="10" fill="url(#grad-na)"/>
    <circle cx="80" cy="40" r="14" fill="url(#grad-cl)"/>

    <line x1="0" y1="0" x2="40" y2="0" stroke="var(--color-text)" stroke-width="2"/>
    <line x1="40" y1="0" x2="80" y2="0" stroke="var(--color-text)" stroke-width="2"/>
    <line x1="0" y1="40" x2="40" y2="40" stroke="var(--color-text)" stroke-width="2"/>
    <line x1="40" y1="40" x2="80" y2="40" stroke="var(--color-text)" stroke-width="2"/>
    
    <line x1="0" y1="0" x2="0" y2="40" stroke="var(--color-text)" stroke-width="2"/>
    <line x1="40" y1="0" x2="40" y2="40" stroke="var(--color-text)" stroke-width="2"/>
    <line x1="80" y1="0" x2="80" y2="40" stroke="var(--color-text)" stroke-width="2"/>
  </g>
</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Properties Explained by the Lattice Structure', level: 2 }
    },
    {
      id: 'tbl-properties',
      type: 'comparisonTable',
      data: {
        caption: 'Properties of ionic compounds explained by lattice structure',
        headers: ['Property', 'Observation', 'Explanation (Lattice Structure)'],
        rows: [
          ['Melting point', 'High (NaCl: 801°C)', 'Many strong electrostatic forces throughout the lattice require a lot of energy to overcome'],
          ['Electrical conductivity (solid)', 'Does not conduct', 'Ions are fixed in lattice positions — cannot move to carry charge'],
          ['Electrical conductivity (molten/dissolved)', 'Conducts electricity', 'Ions are free to move and carry charge'],
          ['Brittleness', 'Brittle — shatters when struck', 'A blow shifts a layer of ions so like charges align, causing strong repulsion and the crystal splits'],
          ['Solubility in water', 'Many are soluble', 'Water molecules attract and surround ions, pulling them from the lattice'],
          ['Solubility in organic solvents', 'Insoluble', 'Organic solvents cannot overcome the strong ionic forces']
        ]
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Conduction of Electricity',
        text: 'Ionic compounds conduct electricity when <strong>molten</strong> or in <strong>aqueous solution</strong> but NOT as a solid. The key phrase is "ions are free to move" — in solution the ions separate from the lattice and become mobile charge carriers.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Ionic compounds form giant lattices of alternating oppositely charged ions held by strong electrostatic forces. This gives them high melting points, brittleness, and electrical conduction only when molten or dissolved (when ions can move freely).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Ionic compounds form giant lattices of alternating ions; strong electrostatic forces cause high melting points; ions conduct only when free to move (molten/dissolved).',
    cues: [
      { id: 'cue-1', blockId: 'call-lattice', prompt: 'What is a giant ionic lattice?', answer: 'A regular three-dimensional arrangement of alternating positive and negative ions, held together by strong electrostatic forces of attraction between all neighbouring oppositely charged ions.' },
      { id: 'cue-2', blockId: 'tbl-properties', prompt: 'Why do ionic compounds have high melting points?', answer: 'There are many strong electrostatic forces of attraction throughout the lattice. A large amount of energy is needed to overcome all these forces and separate the ions.' },
      { id: 'cue-3', blockId: 'tbl-properties', prompt: 'Why does solid NaCl not conduct electricity but molten NaCl does?', answer: 'In solid NaCl, ions are fixed in lattice positions and cannot move to carry charge. When molten, the lattice breaks down and ions become free to move, allowing conduction.' }
    ]
  },
  evidence: [],
  mentions: []
};
