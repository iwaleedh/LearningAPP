export const note_olevel_chemistry_3_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-1-1-formulae.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Deduce the formula of a simple compound from its constituent atoms and understand the meaning of chemical formulae.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Chemical Formulae', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What a Chemical Formula Shows',
        text: 'A <strong>chemical formula</strong> shows the <strong>ratio of atoms</strong> of each element present in a compound.<br/><br/><strong>Subscript numbers</strong> show how many atoms of each element are present. If there is no subscript, there is one atom of that element.<br/>e.g. H₂O = 2 hydrogen atoms + 1 oxygen atom<br/>e.g. H₂SO₄ = 2H + 1S + 4O<br/><br/><strong>Brackets</strong> indicate groups of atoms: Ca(OH)₂ = Ca + 2O + 2H (the "2" outside multiplies everything inside)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Writing Formulae from Valencies', level: 2 }
    },
    {
      id: 'call-valency',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Valency and Combining Ratios',
        text: 'The <strong>valency</strong> (combining power) determines how atoms bond. For ionic compounds, use the ionic charges to work out the formula.<br/><br/><strong>Rule:</strong> the compound must be electrically neutral — charges must balance.<br/><br/><strong>Cross-over method:</strong><br/>1. Write symbols and charges<br/>2. Cross the charges to give subscript numbers<br/>3. Cancel if needed<br/><br/>Example: Mg²⁺ + O²⁻ → MgO (1:1, charges balance)<br/>Example: Al³⁺ + O²⁻ → Al₂O₃ (cross 3 and 2 → Al₂O₃)'
      }
    },
    {
      id: 'svg-crossover',
      type: 'svg',
      data: {
        caption: 'The cross-over method for writing chemical formulae.',
        svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(150, 40)">
    <!-- Text Labels -->
    <text x="-40" y="0" font-family="var(--font-sans)" font-size="24" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Al</text>
    <text x="-15" y="-10" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="var(--color-primary)" text-anchor="middle">3+</text>
    
    <text x="140" y="0" font-family="var(--font-sans)" font-size="24" font-weight="bold" fill="var(--color-text)" text-anchor="middle">O</text>
    <text x="165" y="-10" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="var(--color-error)" text-anchor="middle">2-</text>

    <!-- Cross arrows -->
    <!-- From Al 3+ to O subscript -->
    <path d="M-15,10 Q60,60 160,80" stroke="var(--color-primary)" stroke-width="3" fill="none" stroke-dasharray="6,4">
      <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite"/>
    </path>
    <polygon points="160,80 150,75 155,85" fill="var(--color-primary)"/>

    <!-- From O 2- to Al subscript -->
    <path d="M165,10 Q60,60 -15,80" stroke="var(--color-error)" stroke-width="3" fill="none" stroke-dasharray="6,4">
      <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite"/>
    </path>
    <polygon points="-15,80 -5,85 -10,75" fill="var(--color-error)"/>

    <!-- Result -->
    <text x="-40" y="110" font-family="var(--font-sans)" font-size="28" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Al</text>
    <text x="-20" y="120" font-family="var(--font-sans)" font-size="20" font-weight="bold" fill="var(--color-error)" text-anchor="middle">2</text>
    
    <text x="140" y="110" font-family="var(--font-sans)" font-size="28" font-weight="bold" fill="var(--color-text)" text-anchor="middle">O</text>
    <text x="165" y="120" font-family="var(--font-sans)" font-size="20" font-weight="bold" fill="var(--color-primary)" text-anchor="middle">3</text>
    
    <!-- Title -->
    <text x="50" y="160" font-family="var(--font-sans)" font-size="16" fill="var(--color-text-secondary)" text-anchor="middle">Cross the numerical values of the charges</text>
  </g>
</svg>`
      }
    },
    {
      id: 'tbl-common',
      type: 'comparisonTable',
      data: {
        caption: 'Common valencies of elements and ions',
        headers: ['Element/Ion', 'Valency/Charge', 'Example formula'],
        rows: [
          ['Hydrogen (H)', '+1', 'H₂O'],
          ['Oxygen (O)', '−2', 'CO₂'],
          ['Sodium (Na)', '+1', 'NaCl'],
          ['Magnesium (Mg)', '+2', 'MgO'],
          ['Aluminium (Al)', '+3', 'Al₂O₃'],
          ['Chlorine (Cl)', '−1', 'NaCl'],
          ['Sulfate (SO₄)', '−2', 'Na₂SO₄'],
          ['Nitrate (NO₃)', '−1', 'NaNO₃'],
          ['Ammonium (NH₄)', '+1', 'NH₄Cl'],
          ['Hydroxide (OH)', '−1', 'NaOH']
        ]
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Formula of aluminium sulfate',
        text: 'Al³⁺ and SO₄²⁻<br/>Cross the charges: Al₂(SO₄)₃<br/>Check: 2 × (+3) = +6; 3 × (−2) = −6 ✓<br/>Formula: <strong>Al₂(SO₄)₃</strong>'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always check that the total positive charge equals the total negative charge. For polyatomic ions (like SO₄²⁻, OH⁻, NO₃⁻), use brackets if there is more than one of them: Ca(OH)₂ not CaOH₂.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Chemical formulae show the ratio of atoms in a compound. For ionic compounds, use the cross-over method with ionic charges; the compound must be electrically neutral. Subscripts show atom numbers; brackets group polyatomic ions.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Formulae show atom ratios. Cross-over method: cross the charges to find subscripts. Compound must be electrically neutral.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'What does a chemical formula show?', answer: 'The ratio of atoms of each element present in the compound. Subscript numbers show how many atoms of each element; no subscript means one atom.' },
      { id: 'cue-2', blockId: 'call-valency', prompt: 'Write the formula of aluminium oxide using the cross-over method.', answer: 'Al³⁺ and O²⁻ → Al₂O₃ (cross 3 and 2 to give subscripts 2 and 3).' },
      { id: 'cue-3', blockId: 'tbl-common', prompt: 'What is the formula of calcium sulfate?', answer: 'Ca²⁺ and SO₄²⁻ → CaSO₄ (1:1, both charges are 2).' }
    ]
  },
  evidence: [],
  mentions: []
};
