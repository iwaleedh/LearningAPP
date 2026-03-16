export const note_olevel_chemistry_5_5_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/5 Chemical Energetics/5-1-3-bond-breaking-and-bond-forming.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use bond energies to calculate the enthalpy change of a reaction and explain why reactions are exothermic or endothermic in terms of bond breaking and bond forming.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Bond Breaking and Bond Forming', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Energy Changes in Bonds',
        text: '<strong>Bond breaking</strong> requires energy → endothermic<br/><strong>Bond forming</strong> releases energy → exothermic<br/><br/>Overall ΔH depends on which is greater:<br/>• If energy released (forming) > energy absorbed (breaking) → <strong>exothermic reaction (ΔH negative)</strong><br/>• If energy absorbed (breaking) > energy released (forming) → <strong>endothermic reaction (ΔH positive)</strong>'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Calculating ΔH from Bond Energies', level: 2 }
    },
    {
      id: 'call-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Bond Energy Formula',
        text: '<strong>ΔH = Σ(bond energies broken) − Σ(bond energies formed)</strong><br/><br/>Bond energy (kJ/mol) = energy to break 1 mole of a specific covalent bond in the gas phase.<br/><br/>Steps:<br/>1. Draw structural formulae showing all bonds<br/>2. List all bonds broken in reactants and sum their energies<br/>3. List all bonds formed in products and sum their energies<br/>4. ΔH = total broken − total formed'
      }
    },
    {
      id: 'tbl-bonds',
      type: 'comparisonTable',
      data: {
        caption: 'Common bond energies (approximate)',
        headers: ['Bond', 'Energy (kJ/mol)'],
        rows: [
          ['H–H', '436'],
          ['O=O', '498'],
          ['O–H', '463'],
          ['C–H', '412'],
          ['C=C', '612'],
          ['C–C', '348'],
          ['C=O (CO₂)', '805'],
          ['N≡N', '945'],
          ['N–H', '391'],
          ['Cl–Cl', '242'],
          ['H–Cl', '432']
        ]
      }
    },
    {
      id: 'svg-bond-energy',
      type: 'svg',
      data: {
        caption: 'Visualisation of H₂ + Cl₂ → 2HCl in terms of bond breaking (endothermic) and bond forming (exothermic).',
        svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="grad-h" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fdba74" />
      <stop offset="100%" stop-color="#ea580c" />
    </radialGradient>
    <radialGradient id="grad-cl" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#86efac" />
      <stop offset="100%" stop-color="#16a34a" />
    </radialGradient>
    <marker id="arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="var(--color-primary)"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Step 1: Reactants -->
  <!-- H2 Molecule -->
  <circle cx="80" cy="80" r="14" fill="url(#grad-h)"/>
  <circle cx="106" cy="80" r="14" fill="url(#grad-h)"/>
  <line x1="80" y1="80" x2="106" y2="80" stroke="#000" stroke-width="2"/>
  <text x="93" y="115" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">H₂ (436 kJ)</text>

  <!-- Plus -->
  <text x="140" y="86" font-family="var(--font-sans)" font-size="20" font-weight="bold" fill="var(--color-text)" text-anchor="middle">+</text>

  <!-- Cl2 Molecule -->
  <circle cx="170" cy="80" r="18" fill="url(#grad-cl)"/>
  <circle cx="204" cy="80" r="18" fill="url(#grad-cl)"/>
  <line x1="170" y1="80" x2="204" y2="80" stroke="#000" stroke-width="2"/>
  <text x="187" y="115" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Cl₂ (242 kJ)</text>

  <!-- Breaking Energy Arrow -->
  <path d="M 140 140 C 140 170, 260 170, 260 140" stroke="#ef4444" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
  <text x="200" y="180" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">+ 678 kJ (Absorbed)</text>

  <!-- Step 2: Separate Atoms (Intermediate) -->
  <circle cx="290" cy="60" r="14" fill="url(#grad-h)"/>
  <circle cx="290" cy="100" r="14" fill="url(#grad-h)"/>
  <circle cx="330" cy="50" r="18" fill="url(#grad-cl)"/>
  <circle cx="330" cy="110" r="18" fill="url(#grad-cl)"/>
  
  <text x="310" y="145" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#64748b" text-anchor="middle">Isolated Atoms</text>

  <!-- Forming Energy Arrow -->
  <path d="M 360 140 C 360 170, 480 170, 480 140" stroke="#0ea5e9" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
  <text x="420" y="180" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#0ea5e9" text-anchor="middle">- 864 kJ (Released)</text>

  <!-- Step 3: Products (HCl) -->
  <!-- HCl 1 -->
  <circle cx="480" cy="60" r="14" fill="url(#grad-h)"/>
  <circle cx="510" cy="60" r="18" fill="url(#grad-cl)"/>
  <line x1="480" y1="60" x2="510" y2="60" stroke="#000" stroke-width="2"/>
  
  <!-- HCl 2 -->
  <circle cx="480" cy="100" r="14" fill="url(#grad-h)"/>
  <circle cx="510" cy="100" r="18" fill="url(#grad-cl)"/>
  <line x1="480" y1="100" x2="510" y2="100" stroke="#000" stroke-width="2"/>

  <text x="495" y="145" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">2 x HCl (432 kJ each)</text>
  
  <!-- Top Overall delta H -->
  <path d="M 140 30 C 140 5, 480 5, 480 30" stroke="#8b5cf6" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
  <text x="310" y="15" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#8b5cf6" text-anchor="middle">Net ΔH = -186 kJ (Exothermic)</text>

</svg>`
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: H₂ + Cl₂ → 2HCl',
        text: 'Bonds broken: H–H (436) + Cl–Cl (242) = 678 kJ<br/>Bonds formed: 2 × H–Cl (432) = 864 kJ<br/><br/>ΔH = 678 − 864 = <strong>−186 kJ/mol</strong><br/>Negative → exothermic ✓ (more energy released forming bonds than absorbed breaking them)'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: H₂ + O₂ → H₂O (H₂ + ½O₂ → H₂O)',
        text: 'For: 2H₂ + O₂ → 2H₂O<br/>Bonds broken: 2×(H–H) + O=O = 2×436 + 498 = 1370 kJ<br/>Bonds formed: 4×(O–H) = 4×463 = 1852 kJ<br/><br/>ΔH = 1370 − 1852 = <strong>−482 kJ/mol</strong> (exothermic)'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Bond energies are given in the Data Booklet. Make sure you correctly count every bond — draw out the full structural formula. Remember: ΔH = BROKEN − FORMED (not formed minus broken). A negative answer = exothermic.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Bond breaking = endothermic; bond forming = exothermic. ΔH = Σ(bonds broken) − Σ(bonds formed). Negative ΔH = exothermic (more energy released forming bonds).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Bond breaking needs energy; bond forming releases energy. ΔH = Σbroken − Σformed. Negative = exothermic.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'Is bond breaking exothermic or endothermic? Is bond forming exothermic or endothermic?', answer: 'Bond breaking is endothermic (energy required to break bonds). Bond forming is exothermic (energy released when bonds form).' },
      { id: 'cue-2', blockId: 'call-formula', prompt: 'State the formula for calculating ΔH from bond energies.', answer: 'ΔH = Σ(bond energies broken) − Σ(bond energies formed).' },
      { id: 'cue-3', blockId: 'call-worked1', prompt: 'If Σ(bonds broken)=500 kJ and Σ(bonds formed)=700 kJ, is the reaction exothermic or endothermic?', answer: 'ΔH = 500 − 700 = −200 kJ. Negative → exothermic. More energy released forming bonds than required to break them.' }
    ]
  },
  evidence: [],
  mentions: []
};
