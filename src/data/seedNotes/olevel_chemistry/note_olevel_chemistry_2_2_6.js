export const note_olevel_chemistry_2_2_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-2-3-properties-of-ionic-compounds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Recall and explain the physical properties of ionic compounds, relating each property to the giant ionic lattice structure.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Physical Properties of Ionic Compounds', level: 2 }
    },
    {
      id: 'tbl-ionic-props',
      type: 'comparisonTable',
      data: {
        caption: 'Properties of ionic compounds',
        headers: ['Property', 'Value/Observation', 'Structural Explanation'],
        rows: [
          ['Melting and boiling point', 'Very high (e.g. NaCl mp 801°C, MgO mp 2852°C)', 'Strong electrostatic forces in giant lattice require lots of energy to overcome'],
          ['State at room temperature', 'Solid', 'Strong lattice forces keep ions in fixed positions'],
          ['Electrical conductivity (solid)', 'Non-conductor', 'Ions fixed in lattice, cannot move to carry current'],
          ['Electrical conductivity (molten)', 'Good conductor', 'Ions free to move, carry charge to electrodes'],
          ['Electrical conductivity (aq solution)', 'Good conductor', 'Ions separated by water, free to move'],
          ['Brittleness', 'Brittle and hard', 'Slight displacement aligns like charges → repulsion → crystal shatters'],
          ['Solubility in water', 'Many soluble', 'Water molecules hydrate ions, overcoming lattice forces'],
          ['Solubility in organic solvents', 'Generally insoluble', 'Organic molecules cannot overcome strong ionic forces']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Effect of Ion Charge on Melting Point', level: 2 }
    },
    {
      id: 'call-charge',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Higher Ion Charge = Higher Melting Point',
        text: 'The strength of the ionic bond depends on the charges of the ions:<br/><strong>MgO (mp 2852°C)</strong> — has Mg²⁺ and O²⁻ ions (2+ and 2− charges)<br/><strong>NaCl (mp 801°C)</strong> — has Na⁺ and Cl⁻ ions (1+ and 1− charges)<br/><br/>The Mg²⁺/O²⁻ combination has stronger electrostatic attraction (higher charge) → stronger lattice → much higher melting point.<br/><br/>Ion size also matters: smaller ions are closer together → stronger attraction → higher melting point.'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Comparing Melting Points: NaCl vs MgO',
        text: 'Both NaCl and MgO have giant ionic lattice structures.<br/><br/>NaCl: Na⁺ (+1) and Cl⁻ (−1) → electrostatic force relatively weak<br/>MgO: Mg²⁺ (+2) and O²⁻ (−2) → electrostatic force much stronger (4× the product of charges)<br/><br/>Therefore MgO requires far more energy to break its lattice → much higher melting point.'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Explaining Brittleness',
        text: 'Ionic compounds are brittle because when struck, a layer of ions is shifted. Ions of the same charge come into alignment and repel each other strongly, causing the crystal to shatter along cleavage planes. This is different from metals, which are malleable because metal layers can slide over each other without charge repulsion.'
      }
    },
    {
      id: 'svg-brittleness',
      type: 'svg',
      data: {
        caption: 'Why ionic compounds are brittle: striking the crystal shifts layers, causing ions of the same charge to align and repel, breaking the crystal.',
        svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="po" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </radialGradient>
    <radialGradient id="ne" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </radialGradient>
  </defs>

  <!-- Before strike -->
  <g transform="translate(80, 50)">
    <text x="60" y="-30" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-text)">Before Strike</text>
    <text x="60" y="-12" text-anchor="middle" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">Alternating charges attract</text>
    
    <!-- Top Layer -->
    <circle cx="0" cy="0" r="14" fill="url(#po)"/>
    <text x="0" y="4" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="#fff">+</text>
    <circle cx="40" cy="0" r="14" fill="url(#ne)"/>
    <text x="40" y="3" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="#fff">-</text>
    <circle cx="80" cy="0" r="14" fill="url(#po)"/>
    <text x="80" y="4" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="#fff">+</text>
    <circle cx="120" cy="0" r="14" fill="url(#ne)"/>
    <text x="120" y="3" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="#fff">-</text>

    <!-- Bottom Layer -->
    <circle cx="0" cy="40" r="14" fill="url(#ne)"/>
    <text x="0" y="43" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="#fff">-</text>
    <circle cx="40" cy="40" r="14" fill="url(#po)"/>
    <text x="40" y="44" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="#fff">+</text>
    <circle cx="80" cy="40" r="14" fill="url(#ne)"/>
    <text x="80" y="43" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="#fff">-</text>
    <circle cx="120" cy="40" r="14" fill="url(#po)"/>
    <text x="120" y="44" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="#fff">+</text>

    <!-- Force Hammer -->
    <path d="M-60 -10 L-20 -10 L-20 10 L-60 10 Z" fill="#64748b"/>
    <path d="M-40 -20 L-20 -20 L-10 0 L-20 20 L-40 20 Z" fill="#94a3b8"/>
    <text x="-35" y="4" fill="#fff" font-weight="bold" font-family="var(--font-sans)">Hit</text>
    <path d="M-15 0 L-5 0 L-10 -5 M-5 0 L-10 5" stroke="#000" stroke-width="2" fill="none"/>
  </g>

  <!-- Arrow -->
  <path d="M 250 70 L 290 70 L 280 60 M 290 70 L 280 80" stroke="var(--color-text-tertiary)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- After strike -->
  <g transform="translate(380, 50)">
    <text x="60" y="-30" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-text)">After Strike</text>
    <text x="60" y="-12" text-anchor="middle" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">Like charges align, layers repel</text>
    
    <!-- Top Layer (Shifted Right by 40) -->
    <g transform="translate(40, 0)">
      <circle cx="0" cy="0" r="14" fill="url(#po)"/>
      <text x="0" y="4" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="#fff">+</text>
      <circle cx="40" cy="0" r="14" fill="url(#ne)"/>
      <text x="40" y="3" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="#fff">-</text>
      <circle cx="80" cy="0" r="14" fill="url(#po)"/>
      <text x="80" y="4" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="#fff">+</text>
    </g>

    <!-- Bottom Layer (Stays) -->
    <!-- Removed one for alignment visualization -->
    <circle cx="40" cy="50" r="14" fill="url(#po)"/>
    <text x="40" y="54" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="#fff">+</text>
    <circle cx="80" cy="50" r="14" fill="url(#ne)"/>
    <text x="80" y="53" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="#fff">-</text>
    <circle cx="120" cy="50" r="14" fill="url(#po)"/>
    <text x="120" y="54" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="#fff">+</text>

    <!-- Repulsion lines -->
    <path d="M 40 18 L 40 32 M 35 22 L 40 18 L 45 22 M 35 28 L 40 32 L 45 28" stroke="#ef4444" stroke-width="2" fill="none"/>
    <path d="M 80 18 L 80 32 M 75 22 L 80 18 L 85 22 M 75 28 L 80 32 L 85 28" stroke="#ef4444" stroke-width="2" fill="none"/>
    <path d="M 120 18 L 120 32 M 115 22 L 120 18 L 125 22 M 115 28 L 120 32 L 125 28" stroke="#ef4444" stroke-width="2" fill="none"/>

    <!-- Break marker -->
    <path d="M 20 25 L 30 15 L 25 35 L 35 25" stroke="#f59e0b" stroke-width="3" fill="none"/>
  </g>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Ionic compounds are solid with high melting points (strong lattice forces), brittle, and conduct electricity only when molten or dissolved. Higher ion charges mean stronger forces and higher melting points — MgO (2852°C) is much higher than NaCl (801°C).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Ionic compounds: high mp, brittle, conduct only when molten or dissolved; higher ion charges give stronger forces and higher melting points.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-ionic-props', prompt: 'Under what conditions do ionic compounds conduct electricity?', answer: 'When molten or dissolved in water (aqueous solution) — when ions are free to move and carry charge. NOT as a solid.' },
      { id: 'cue-2', blockId: 'call-charge', prompt: 'Why does MgO have a much higher melting point than NaCl?', answer: 'MgO has Mg²⁺ and O²⁻ ions (2+ and 2− charges), giving much stronger electrostatic forces than NaCl with Na⁺ and Cl⁻ (1+ and 1− charges). More energy is needed to overcome the stronger MgO lattice.' },
      { id: 'cue-3', blockId: 'call-tip1', prompt: 'Why are ionic compounds brittle?', answer: 'When struck, layers of ions shift so that like charges (+ and +, or − and −) come into alignment, causing strong repulsion. The crystal splits (shatters) along these cleavage planes.' }
    ]
  },
  evidence: [],
  mentions: []
};
