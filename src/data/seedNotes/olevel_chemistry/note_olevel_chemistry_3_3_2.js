export const note_olevel_chemistry_3_3_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-1-3-writing-equations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Write and balance chemical equations (word equations and symbol equations) and use state symbols (s), (l), (g), (aq).' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Word Equations and Symbol Equations', level: 2 }
    },
    {
      id: 'call-types',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Types of Chemical Equations',
        text: '<strong>Word equation:</strong> names of reactants and products separated by arrow<br/>e.g. magnesium + oxygen → magnesium oxide<br/><br/><strong>Symbol equation:</strong> chemical formulae used instead of names<br/>e.g. 2Mg + O₂ → 2MgO<br/><br/><strong>Ionic equation:</strong> shows only the ions that actually change (covered separately)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'State Symbols', level: 2 }
    },
    {
      id: 'tbl-state',
      type: 'comparisonTable',
      data: {
        caption: 'State symbols used in chemical equations',
        headers: ['Symbol', 'Meaning', 'Example'],
        rows: [
          ['(s)', 'Solid', 'MgO(s)'],
          ['(l)', 'Liquid', 'H₂O(l)'],
          ['(g)', 'Gas', 'CO₂(g)'],
          ['(aq)', 'Aqueous — dissolved in water', 'HCl(aq)']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Balancing Chemical Equations', level: 2 }
    },
    {
      id: 'call-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rules for Balancing',
        text: '<strong>Conservation of mass:</strong> atoms cannot be created or destroyed. The number of each type of atom must be equal on both sides.<br/><br/><strong>Steps:</strong><br/>1. Write the unbalanced equation with correct formulae<br/>2. Count atoms on each side<br/>3. Add balancing numbers (coefficients) in front of formulae — do NOT change subscripts<br/>4. Re-count to check'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Balance Fe + O₂ → Fe₂O₃',
        text: 'Unbalanced: Fe + O₂ → Fe₂O₃<br/><br/>Left: 1 Fe, 2 O<br/>Right: 2 Fe, 3 O<br/><br/>Balance Fe: 4Fe + O₂ → 2Fe₂O₃<br/>Balance O: 4Fe + 3O₂ → 2Fe₂O₃<br/><br/>Check: Left: 4Fe, 6O   Right: 4Fe, 6O ✓<br/><strong>4Fe + 3O₂ → 2Fe₂O₃</strong>'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Balance H₂ + O₂ → H₂O',
        text: 'Unbalanced: H₂ + O₂ → H₂O<br/><br/>Left: 2H, 2O   Right: 2H, 1O<br/><br/>Double the water: H₂ + O₂ → 2H₂O<br/>Fix H: 2H₂ + O₂ → 2H₂O<br/><br/>Check: Left: 4H, 2O   Right: 4H, 2O ✓<br/><strong>2H₂ + O₂ → 2H₂O</strong>'
      }
    },
    {
      id: 'svg-balancing-scale',
      type: 'svg',
      data: {
        caption: 'Visualising a balanced equation: Conservation of mass means the number of atoms of each element is equal on both sides.',
        svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradients for molecules -->
    <radialGradient id="h-atom" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#cbd5e1" />
      <stop offset="100%" stop-color="#94a3b8" />
    </radialGradient>
    <radialGradient id="o-atom" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fca5a5" />
      <stop offset="100%" stop-color="#ef4444" />
    </radialGradient>
  </defs>

  <!-- Left Side: Reactants -->
  <g transform="translate(100, 100)">
    <!-- 2H2 -->
    <g transform="translate(-50, -20)">
      <circle cx="-10" cy="0" r="10" fill="url(#h-atom)"/>
      <circle cx="10" cy="0" r="10" fill="url(#h-atom)"/>
      <text x="0" y="25" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">H₂</text>
    </g>
    <g transform="translate(-10, -50)">
      <circle cx="-10" cy="0" r="10" fill="url(#h-atom)"/>
      <circle cx="10" cy="0" r="10" fill="url(#h-atom)"/>
      <text x="0" y="25" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">H₂</text>
    </g>
    
    <!-- Plus sign -->
    <text x="40" y="-10" font-family="var(--font-sans)" font-size="24" font-weight="bold" fill="var(--color-text)" text-anchor="middle">+</text>

    <!-- O2 -->
    <g transform="translate(90, -30)">
      <circle cx="-12" cy="0" r="14" fill="url(#o-atom)"/>
      <circle cx="12" cy="0" r="14" fill="url(#o-atom)"/>
      <text x="0" y="30" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">O₂</text>
    </g>
  </g>

  <!-- Yield Arrow -->
  <path d="M 280 80 L 320 80" stroke="var(--color-text)" stroke-width="4"/>
  <polygon points="320,70 335,80 320,90" fill="var(--color-text)"/>

  <!-- Right Side: Products -->
  <g transform="translate(420, 100)">
    <!-- 2 H2O -->
    <g transform="translate(-40, -40)">
      <circle cx="0" cy="0" r="14" fill="url(#o-atom)"/>
      <circle cx="-12" cy="10" r="10" fill="url(#h-atom)"/>
      <circle cx="12" cy="10" r="10" fill="url(#h-atom)"/>
      <text x="0" y="35" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">H₂O</text>
    </g>
    <g transform="translate(40, -10)">
      <circle cx="0" cy="0" r="14" fill="url(#o-atom)"/>
      <circle cx="-12" cy="10" r="10" fill="url(#h-atom)"/>
      <circle cx="12" cy="10" r="10" fill="url(#h-atom)"/>
      <text x="0" y="35" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">H₂O</text>
    </g>
  </g>

  <!-- Scale/Balance (visual indicator) -->
  <line x1="50" y1="160" x2="550" y2="160" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
  <polygon points="300,160 290,180 310,180" fill="#f59e0b"/>
  
  <text x="150" y="190" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Reactants: 4 H, 2 O</text>
  <text x="450" y="190" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Products: 4 H, 2 O</text>
</svg>`
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Never change the subscripts in a formula to balance an equation — this would change the substance itself! Only change the large numbers (coefficients) in front of each formula. Start balancing with the most complex formula, and leave single-element substances (like O₂, H₂) until last.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Balanced equations obey conservation of mass — same number of each atom on both sides. Use coefficients (large numbers in front) to balance; never change subscripts. State symbols (s), (l), (g), (aq) show the state of each substance.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Balance equations using coefficients only (never change subscripts). Same atoms on each side. State symbols: (s)(l)(g)(aq).',
    cues: [
      { id: 'cue-1', blockId: 'tbl-state', prompt: 'What does (aq) mean in a chemical equation?', answer: 'Aqueous — the substance is dissolved in water.' },
      { id: 'cue-2', blockId: 'call-rules', prompt: 'What must be equal on both sides of a balanced equation?', answer: 'The number of atoms of each element must be the same on both sides (conservation of mass).' },
      { id: 'cue-3', blockId: 'call-worked1', prompt: 'Balance: Mg + O₂ → MgO', answer: '2Mg + O₂ → 2MgO (2Mg on each side, 2O on each side).' }
    ]
  },
  evidence: [],
  mentions: []
};
