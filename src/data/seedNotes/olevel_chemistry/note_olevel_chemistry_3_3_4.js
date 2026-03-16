export const note_olevel_chemistry_3_3_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-2-1-the-mole.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the concept of the mole and Avogadro\'s constant, and use moles to count particles.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Mole', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition of the Mole',
        text: 'A <strong>mole (mol)</strong> is the amount of substance that contains the same number of particles as there are atoms in exactly 12 g of carbon-12.<br/><br/><strong>Avogadro\'s constant (Nₐ) = 6.02 × 10²³ mol⁻¹</strong><br/><br/>This means:<br/>• 1 mole of any substance contains 6.02 × 10²³ particles<br/>• Particles can be atoms, molecules, ions, electrons, etc.<br/><br/>Examples:<br/>• 1 mol H₂O = 6.02 × 10²³ water molecules<br/>• 1 mol Na⁺ = 6.02 × 10²³ sodium ions'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Molar Mass', level: 2 }
    },
    {
      id: 'call-molar',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Molar Mass',
        text: '<strong>Molar mass (M)</strong> is the mass of one mole of a substance, in g/mol.<br/><br/>Numerically equal to the relative atomic/molecular mass (Aᵣ or Mᵣ), but with units of g/mol.<br/><br/>Examples:<br/>• Molar mass of C = 12 g/mol<br/>• Molar mass of H₂O = 18 g/mol<br/>• Molar mass of NaCl = 58.5 g/mol'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Number of Particles and Moles', level: 2 }
    },
    {
      id: 'call-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key formulae',
        text: '<strong>Number of particles = moles × Nₐ</strong><br/>Number of particles = n × 6.02 × 10²³<br/><br/><strong>Moles = number of particles ÷ Nₐ</strong><br/>n = N ÷ 6.02 × 10²³'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Particles from moles',
        text: 'How many molecules are in 3 mol of CO₂?<br/><br/>Number of molecules = 3 × 6.02 × 10²³<br/> = <strong>1.81 × 10²⁴ molecules</strong>'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Moles from particles',
        text: 'How many moles are in 3.01 × 10²³ atoms of iron?<br/><br/>n = 3.01 × 10²³ ÷ 6.02 × 10²³<br/> = <strong>0.5 mol</strong>'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Be precise about what the "particles" are. For molecules like H₂O, count molecules. For ionic compounds like NaCl, you might be asked for the number of Na⁺ or Cl⁻ ions — in 1 mol NaCl, there are 6.02 × 10²³ Na⁺ AND 6.02 × 10²³ Cl⁻ ions.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '1 mole contains 6.02 × 10²³ particles (Avogadro\'s constant). Molar mass = Mᵣ in g/mol. Number of particles = moles × 6.02 × 10²³.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: '1 mol = 6.02 × 10²³ particles. Molar mass = Mᵣ in g/mol. Particles = n × Nₐ.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'State the value of Avogadro\'s constant.', answer: '6.02 × 10²³ mol⁻¹ — the number of particles in one mole of any substance.' },
      { id: 'cue-2', blockId: 'call-molar', prompt: 'What is molar mass and what are its units?', answer: 'Molar mass is the mass of one mole of a substance. Units are g/mol. Numerically equal to Mᵣ.' },
      { id: 'cue-3', blockId: 'call-formula', prompt: 'How many atoms are in 2 mol of copper?', answer: '2 × 6.02 × 10²³ = 1.204 × 10²⁴ atoms.' }
    ]
  },
  evidence: [],
  mentions: []
};
