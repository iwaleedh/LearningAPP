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
