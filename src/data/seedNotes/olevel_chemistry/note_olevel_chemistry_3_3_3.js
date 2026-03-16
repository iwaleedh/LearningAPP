export const note_olevel_chemistry_3_3_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-1-4-ar-and-mr.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define relative atomic mass (Aᵣ) and relative molecular (or formula) mass (Mᵣ), and calculate Mᵣ from a formula.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Relative Atomic Mass (Aᵣ)', level: 2 }
    },
    {
      id: 'call-ar',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Relative Atomic Mass',
        text: '<strong>Relative atomic mass (Aᵣ)</strong> is the average mass of one atom of an element relative to 1/12 the mass of one atom of carbon-12.<br/><br/>It is a <strong>weighted average</strong> of all naturally occurring isotopes of that element.<br/><br/>Aᵣ has <strong>no units</strong> (it is a ratio).<br/><br/>Examples: H = 1, C = 12, O = 16, Na = 23, Cl = 35.5, Fe = 56, Pb = 207'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Relative Molecular Mass / Formula Mass (Mᵣ)', level: 2 }
    },
    {
      id: 'svg-mr-calc',
      type: 'svg',
      data: {
        caption: 'Calculating Mᵣ for water (H₂O)',
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto">
  <rect width="400" height="200" fill="var(--color-surface)" rx="8"/>
  <text x="200" y="50" font-family="sans-serif" font-size="24" font-weight="bold" fill="var(--color-primary)" text-anchor="middle">H₂O</text>
  
  <text x="130" y="90" font-family="sans-serif" font-size="16" fill="var(--color-text)" text-anchor="middle">2 × Hydrogen</text>
  <text x="270" y="90" font-family="sans-serif" font-size="16" fill="var(--color-text)" text-anchor="middle">1 × Oxygen</text>
  
  <path d="M 180 60 L 140 75" stroke="var(--color-border)" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M 220 60 L 260 75" stroke="var(--color-border)" stroke-width="2" marker-end="url(#arrow)"/>

  <text x="130" y="120" font-family="sans-serif" font-size="14" fill="var(--color-text-secondary)" text-anchor="middle">2 × 1.0 = 2.0</text>
  <text x="270" y="120" font-family="sans-serif" font-size="14" fill="var(--color-text-secondary)" text-anchor="middle">1 × 16.0 = 16.0</text>
  
  <text x="200" y="160" font-family="sans-serif" font-size="20" font-weight="bold" fill="var(--color-success)" text-anchor="middle">Mᵣ = 2.0 + 16.0 = 18.0</text>
  
  <defs>
    <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="var(--color-border)"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-mr',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Relative Molecular (Formula) Mass',
        text: '<strong>Relative molecular mass (Mᵣ)</strong> = sum of Aᵣ values of all atoms in the formula.<br/><br/>For ionic compounds, we call it the <strong>relative formula mass</strong> (since they do not form molecules).<br/><br/>No units.<br/><br/>Formula: Mᵣ = Σ (Aᵣ × number of atoms of each element)'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Mᵣ of H₂O',
        text: 'H₂O: 2 H and 1 O<br/>Aᵣ: H = 1, O = 16<br/>Mᵣ = (2 × 1) + (1 × 16) = 2 + 16 = <strong>18</strong>'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Mᵣ of Al₂(SO₄)₃',
        text: 'Al₂(SO₄)₃: 2Al + 3S + 12O  (the bracket ×3 means 3 sulfates = 3S + 12O)<br/>Aᵣ: Al = 27, S = 32, O = 16<br/>Mᵣ = (2 × 27) + (3 × 32) + (12 × 16)<br/> = 54 + 96 + 192 = <strong>342</strong>'
      }
    },
    {
      id: 'call-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Mᵣ of Ca(OH)₂',
        text: 'Ca(OH)₂: 1Ca + 2O + 2H<br/>Aᵣ: Ca = 40, O = 16, H = 1<br/>Mᵣ = 40 + (2 × 16) + (2 × 1) = 40 + 32 + 2 = <strong>74</strong>'
      }
    },
    {
      id: 'tbl-common',
      type: 'comparisonTable',
      data: {
        caption: 'Common substances and their Mᵣ values',
        headers: ['Substance', 'Formula', 'Mᵣ'],
        rows: [
          ['Water', 'H₂O', '18'],
          ['Carbon dioxide', 'CO₂', '44'],
          ['Sulfuric acid', 'H₂SO₄', '98'],
          ['Sodium chloride', 'NaCl', '58.5'],
          ['Calcium carbonate', 'CaCO₃', '100'],
          ['Sodium hydroxide', 'NaOH', '40'],
          ['Ammonia', 'NH₃', '17']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For compounds with brackets, expand them first before calculating Mᵣ. e.g. Ca(OH)₂ has 1Ca, 2O, 2H. Aᵣ values are given in the Data Booklet in exams — make sure you use the correct values. Mᵣ has no units.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Aᵣ = average mass of one atom relative to 1/12 of carbon-12 (no units). Mᵣ = sum of all Aᵣ values in the formula. For brackets, multiply the Aᵣ values by the subscript outside.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Aᵣ = relative atomic mass (no units, weighted average). Mᵣ = sum of Aᵣ × number of each atom in the formula.',
    cues: [
      { id: 'cue-1', blockId: 'call-ar', prompt: 'Define relative atomic mass.', answer: 'The average mass of one atom of an element relative to 1/12 the mass of one atom of carbon-12. It is a weighted average of all naturally occurring isotopes and has no units.' },
      { id: 'cue-2', blockId: 'call-mr', prompt: 'How do you calculate relative molecular mass?', answer: 'Sum of the Aᵣ values of all atoms in the formula. Mᵣ = Σ(Aᵣ × number of that atom).' },
      { id: 'cue-3', blockId: 'call-worked2', prompt: 'Calculate the Mᵣ of H₂SO₄. (Aᵣ: H=1, S=32, O=16)', answer: 'H₂SO₄: 2H + 1S + 4O. Mᵣ = (2×1) + 32 + (4×16) = 2 + 32 + 64 = 98.' }
    ]
  },
  evidence: [],
  mentions: []
};
