export const note_olevel_chemistry_3_3_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-2-2-linking-moles-mass-and-mr.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use the relationship between moles, mass, and molar mass (Mᵣ) to carry out calculations.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Moles, Mass and Mᵣ Triangle', level: 2 }
    },
    {
      id: 'call-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Key Relationship',
        text: '<strong>moles (n) = mass (m) ÷ molar mass (M)</strong><br/><br/>Rearranged:<br/>• m = n × M<br/>• M = m ÷ n<br/><br/>Units:<br/>• mass = grams (g)<br/>• molar mass = g/mol (same value as Mᵣ)<br/>• moles = mol'
      }
    },
    {
      id: 'svg-mole-triangle',
      type: 'svg',
      data: {
        caption: 'The formula triangle. Cover the one you want to find: side-by-side means multiply, top-and-bottom means divide.',
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(200, 30)">
    <!-- Triangle Base -->
    <polygon points="0,0 -120,160 120,160" fill="#0c4a6e" stroke="var(--color-primary)" stroke-width="4" stroke-linejoin="round"/>
    
    <!-- Divider lines -->
    <line x1="-60" y1="80" x2="60" y2="80" stroke="var(--color-primary)" stroke-width="4"/>
    <line x1="0" y1="80" x2="0" y2="160" stroke="var(--color-primary)" stroke-width="4"/>

    <!-- Labels -->
    <!-- Top: Mass (m) -->
    <text x="0" y="55" font-family="var(--font-sans)" font-size="28" font-weight="bold" fill="var(--color-text)" text-anchor="middle">m</text>
    <text x="0" y="70" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">(g)</text>

    <!-- Bottom Left: moles (n) -->
    <text x="-50" y="130" font-family="var(--font-sans)" font-size="28" font-weight="bold" fill="var(--color-text)" text-anchor="middle">n</text>
    <text x="-50" y="145" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">(mol)</text>

    <!-- Bottom Right: Molar mass (M) -->
    <text x="50" y="130" font-family="var(--font-sans)" font-size="28" font-weight="bold" fill="var(--color-text)" text-anchor="middle">M</text>
    <text x="50" y="145" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">(g/mol)</text>

    <!-- Operators -->
    <text x="0" y="130" font-family="var(--font-sans)" font-size="24" font-weight="bold" fill="var(--color-primary)" text-anchor="middle">×</text>
    <!-- division sign top left -->
    <text x="-30" y="85" font-family="var(--font-sans)" font-size="20" font-weight="bold" fill="var(--color-primary)" text-anchor="middle">÷</text>
    <!-- division sign top right -->
    <text x="30" y="85" font-family="var(--font-sans)" font-size="20" font-weight="bold" fill="var(--color-primary)" text-anchor="middle">÷</text>
  </g>
</svg>`
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Calculate moles from mass',
        text: 'How many moles in 44 g of CO₂? (Aᵣ: C = 12, O = 16)<br/><br/>Mᵣ of CO₂ = 12 + 32 = 44 g/mol<br/>n = m ÷ M = 44 ÷ 44 = <strong>1 mol</strong>'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Calculate mass from moles',
        text: 'What mass of sodium hydroxide (NaOH) is 0.25 mol? (Aᵣ: Na=23, O=16, H=1)<br/><br/>Mᵣ of NaOH = 23 + 16 + 1 = 40 g/mol<br/>m = n × M = 0.25 × 40 = <strong>10 g</strong>'
      }
    },
    {
      id: 'call-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Calculate molar mass from mass and moles',
        text: '4.6 g of a compound contains 0.1 mol. What is its molar mass?<br/><br/>M = m ÷ n = 4.6 ÷ 0.1 = <strong>46 g/mol</strong><br/>This matches ethanol (C₂H₅OH): Mᵣ = 46'
      }
    },
    {
      id: 'tbl-practice',
      type: 'comparisonTable',
      data: {
        caption: 'Practice calculations',
        headers: ['Substance', 'Mᵣ', 'Mass', 'Moles'],
        rows: [
          ['H₂O', '18', '36 g', '2 mol'],
          ['CaCO₃', '100', '25 g', '0.25 mol'],
          ['HCl', '36.5', '3.65 g', '0.1 mol'],
          ['NaCl', '58.5', '5.85 g', '0.1 mol']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always show the formula being used. Write n = m/M and substitute values. If a mass in kg or mg is given, convert to grams first. Remember: Mᵣ and molar mass are numerically identical — just remember that molar mass has units of g/mol.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'n = m/M where n = moles, m = mass in grams, M = molar mass in g/mol. Molar mass numerically equals Mᵣ. Rearrange: m = n × M; M = m/n.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'n = m/M. Molar mass = Mᵣ in g/mol. m = n×M, M = m/n.',
    cues: [
      { id: 'cue-1', blockId: 'call-formula', prompt: 'State the formula linking moles, mass, and molar mass.', answer: 'n = m/M, where n = moles (mol), m = mass (g), M = molar mass (g/mol).' },
      { id: 'cue-2', blockId: 'call-worked1', prompt: 'Calculate the number of moles in 8 g of sulfur (Aᵣ = 32).', answer: 'n = m/M = 8 ÷ 32 = 0.25 mol.' },
      { id: 'cue-3', blockId: 'call-worked2', prompt: 'What mass of CaCO₃ is 0.5 mol? (Mᵣ = 100)', answer: 'm = n × M = 0.5 × 100 = 50 g.' }
    ]
  },
  evidence: [],
  mentions: []
};
