export const note_olevel_chemistry_2_2_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-3-2-molecules-and-compounds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between molecular formula, empirical formula, structural formula and displayed formula.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Types of Chemical Formula', level: 2 }
    },
    {
      id: 'tbl-formulae',
      type: 'comparisonTable',
      data: {
        caption: 'Types of chemical formula compared',
        headers: ['Formula type', 'Definition', 'Example (ethane)'],
        rows: [
          ['Molecular formula', 'Actual number of each type of atom in one molecule', 'C₂H₆'],
          ['Empirical formula', 'Simplest whole-number ratio of atoms in a compound', 'CH₃'],
          ['Structural formula', 'Shows the arrangement of atoms and bonds in a simplified linear form', 'CH₃CH₃'],
          ['Displayed formula', 'Shows all atoms and all bonds drawn out fully', 'H₃C—CH₃ (all bonds shown)']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Molecular vs Empirical Formula', level: 2 }
    },
    {
      id: 'svg-ethane-formulas',
      type: 'svg',
      data: {
        caption: 'Visualizing formula types using Ethane',
        svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .title { font-family: var(--font-sans); font-weight: bold; font-size: 14px; fill: var(--color-text-secondary); text-anchor: middle; }
      .val { font-family: 'Courier New', monospace; font-weight: bold; font-size: 20px; fill: var(--color-text); text-anchor: middle; }
      .atom-c { font-family: var(--font-sans); font-weight: bold; font-size: 16px; fill: #475569; text-anchor: middle; dominant-baseline: central; }
      .atom-h { font-family: var(--font-sans); font-weight: bold; font-size: 14px; fill: #0ea5e9; text-anchor: middle; dominant-baseline: central; }
      .bond { stroke: var(--color-text-tertiary); stroke-width: 2; }
    </style>
  </defs>

  <!-- Empirical -->
  <g transform="translate(100, 100)">
    <text x="0" y="-60" class="title">Empirical</text>
    <text x="0" y="-40" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-tertiary)" text-anchor="middle">Simplest ratio</text>
    <text x="0" y="10" class="val">CH<tspan dy="6" font-size="14">3</tspan></text>
  </g>

  <!-- Molecular -->
  <g transform="translate(250, 100)">
    <text x="0" y="-60" class="title">Molecular</text>
    <text x="0" y="-40" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-tertiary)" text-anchor="middle">Actual counts</text>
    <text x="0" y="10" class="val">C<tspan dy="6" font-size="14">2</tspan><tspan dy="-6">H</tspan><tspan dy="6" font-size="14">6</tspan></text>
  </g>

  <!-- Structural -->
  <g transform="translate(400, 100)">
    <text x="0" y="-60" class="title">Structural</text>
    <text x="0" y="-40" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-tertiary)" text-anchor="middle">Simplified bonding</text>
    <text x="0" y="10" class="val">CH<tspan dy="6" font-size="14">3</tspan><tspan dy="-6">CH</tspan><tspan dy="6" font-size="14">3</tspan></text>
  </g>

  <!-- Displayed -->
  <g transform="translate(530, 100)">
    <text x="0" y="-60" class="title">Displayed</text>
    <text x="0" y="-40" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-tertiary)" text-anchor="middle">All atoms &amp; bonds</text>
    
    <g transform="scale(0.8)">
      <!-- Bonds -->
      <line x1="-20" y1="0" x2="20" y2="0" class="bond" />
      <line x1="-20" y1="0" x2="-20" y2="-30" class="bond" />
      <line x1="-20" y1="0" x2="-20" y2="30" class="bond" />
      <line x1="-20" y1="0" x2="-50" y2="0" class="bond" />
      
      <line x1="20" y1="0" x2="20" y2="-30" class="bond" />
      <line x1="20" y1="0" x2="20" y2="30" class="bond" />
      <line x1="20" y1="0" x2="50" y2="0" class="bond" />

      <!-- Atoms with backgrounds to cover bonds -->
      <circle cx="-20" cy="0" r="10" fill="var(--color-surface)"/>
      <text x="-20" y="0" class="atom-c">C</text>
      
      <circle cx="20" cy="0" r="10" fill="var(--color-surface)"/>
      <text x="20" y="0" class="atom-c">C</text>
      
      <circle cx="-20" cy="-30" r="8" fill="var(--color-surface)"/>
      <text x="-20" y="-30" class="atom-h">H</text>
      
      <circle cx="-20" cy="30" r="8" fill="var(--color-surface)"/>
      <text x="-20" y="30" class="atom-h">H</text>
      
      <circle cx="-50" cy="0" r="8" fill="var(--color-surface)"/>
      <text x="-50" y="0" class="atom-h">H</text>
      
      <circle cx="20" cy="-30" r="8" fill="var(--color-surface)"/>
      <text x="20" y="-30" class="atom-h">H</text>
      
      <circle cx="20" cy="30" r="8" fill="var(--color-surface)"/>
      <text x="20" y="30" class="atom-h">H</text>
      
      <circle cx="50" cy="0" r="8" fill="var(--color-surface)"/>
      <text x="50" y="0" class="atom-h">H</text>
    </g>
  </g>
</svg>`
      }
    },
    {
      id: 'call-compare',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Molecular vs Empirical Formula Examples',
        text: '<strong>Glucose:</strong> Molecular = C₆H₁₂O₆ | Empirical = CH₂O<br/><strong>Ethene:</strong> Molecular = C₂H₄ | Empirical = CH₂<br/><strong>Water:</strong> Molecular = H₂O | Empirical = H₂O (same!)<br/><strong>Hydrogen peroxide:</strong> Molecular = H₂O₂ | Empirical = HO<br/><br/>The empirical formula is found by dividing all subscripts by their highest common factor.'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Naming Compounds',
        text: 'For binary compounds (two elements):<br/>• Metal + non-metal: name the metal first, then the non-metal with -ide ending. E.g. NaCl = sodium chloride; MgO = magnesium oxide.<br/>• Two non-metals: use prefixes (di-, tri-, tetra-). E.g. CO₂ = carbon dioxide; PCl₃ = phosphorus trichloride.<br/>• Acids: named by anion (HCl = hydrochloric acid; H₂SO₄ = sulfuric acid; HNO₃ = nitric acid).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Molecular formula shows actual atom counts; empirical formula shows simplest ratios; structural formula shows bonding arrangement; displayed formula shows all atoms and bonds. The empirical formula is found by simplifying the molecular formula to lowest whole numbers.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Molecular formula = actual atoms; empirical formula = simplest ratio; structural = bonding arrangement; displayed = all bonds drawn.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-formulae', prompt: 'What is the difference between a molecular formula and an empirical formula?', answer: 'Molecular formula shows the actual number of each atom in one molecule. Empirical formula shows the simplest whole-number ratio of atoms.' },
      { id: 'cue-2', blockId: 'call-compare', prompt: 'What is the empirical formula of glucose (C₆H₁₂O₆)?', answer: 'CH₂O — divide all subscripts by 6 (highest common factor): C₆÷6, H₁₂÷6, O₆÷6.' },
      { id: 'cue-3', blockId: 'call-compare', prompt: 'What is the empirical formula of hydrogen peroxide (H₂O₂)?', answer: 'HO — divide both subscripts by 2.' }
    ]
  },
  evidence: [],
  mentions: []
};
