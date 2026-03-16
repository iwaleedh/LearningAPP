export const note_olevel_chemistry_12_12_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/12 Experimental Techniques And Chemical Analysis/12-1-2-solutions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define solute, solvent and solution; calculate and use concentration in g/dm³ and mol/dm³; perform dilution calculations.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Solutions — Key Terms', level: 2 }
    },
    {
      id: 'call-terms',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Solute, Solvent and Solution',
        text: '<strong>Solute:</strong> substance that dissolves (could be solid, liquid, or gas)<br/><strong>Solvent:</strong> liquid that does the dissolving (often water)<br/><strong>Solution:</strong> homogeneous mixture of solute dissolved in solvent<br/><strong>Aqueous solution:</strong> solvent is water; state symbol (aq)<br/><br/><strong>Saturated solution:</strong> no more solute can dissolve at that temperature'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Concentration', level: 2 }
    },
    {
      id: 'call-conc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Concentration Formulae',
        text: '<strong>Concentration in g/dm³:</strong><br/>concentration (g/dm³) = mass of solute (g) ÷ volume of solution (dm³)<br/><br/><strong>Concentration in mol/dm³:</strong><br/>concentration (mol/dm³) = moles of solute (mol) ÷ volume of solution (dm³)<br/><br/><strong>Converting between units:</strong><br/>concentration (g/dm³) = concentration (mol/dm³) × molar mass (g/mol)<br/><br/><strong>Useful rearrangement:</strong><br/>n = c × V (moles = concentration × volume in dm³)<br/>Remember: volume in cm³ ÷ 1000 = volume in dm³'
      }
    },
    {
      id: 'call-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Calculate concentration',
        text: 'A solution contains 5.85 g of sodium chloride (NaCl) dissolved in 250 cm³ of solution.<br/>Calculate: (a) concentration in g/dm³; (b) concentration in mol/dm³ (M<sub>r</sub>(NaCl) = 58.5)<br/><br/>(a) Volume = 250 cm³ = 0.250 dm³<br/>    Concentration = 5.85 ÷ 0.250 = <strong>23.4 g/dm³</strong><br/><br/>(b) Moles of NaCl = 5.85 ÷ 58.5 = 0.100 mol<br/>    Concentration = 0.100 ÷ 0.250 = <strong>0.400 mol/dm³</strong>'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Dilution', level: 2 }
    },
    {
      id: 'call-dilution',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Dilution Principle',
        text: 'When a solution is diluted, the <strong>number of moles of solute stays the same</strong> — only the volume increases.<br/><br/><strong>Dilution equation:</strong> C₁V₁ = C₂V₂<br/>where C₁ and C₂ are concentrations and V₁ and V₂ are volumes (same units).<br/><br/>Dilution factor = V₂ ÷ V₁ (how many times more dilute)<br/><br/><strong>Common procedure:</strong> take a measured volume (V₁) and make up to a larger volume (V₂) in a volumetric flask; the concentration decreases proportionally.'
      }
    },
    {
      id: 'call-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Dilution calculation',
        text: '25.0 cm³ of 2.00 mol/dm³ HCl is diluted to 500 cm³. Find the new concentration.<br/><br/>C₁V₁ = C₂V₂<br/>2.00 × 25.0 = C₂ × 500<br/>C₂ = 50.0 ÷ 500 = <strong>0.100 mol/dm³</strong>'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Solution = solute dissolved in solvent. Concentration = moles ÷ volume(dm³) [mol/dm³] or mass ÷ volume(dm³) [g/dm³]. n = cV. Dilution: C₁V₁ = C₂V₂ — moles unchanged, volume increases.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Concentration (mol/dm³) = n ÷ V. n = cV. Dilution: C₁V₁ = C₂V₂. Volume must be in dm³ (÷1000 from cm³).',
    cues: [
      { id: 'cue-1', blockId: 'call-conc', prompt: 'State the formula linking moles, concentration, and volume.', answer: 'n = c × V, where n is moles (mol), c is concentration (mol/dm³), and V is volume (dm³).' },
      { id: 'cue-2', blockId: 'call-we1', prompt: 'How do you convert concentration from mol/dm³ to g/dm³?', answer: 'Multiply the concentration in mol/dm³ by the molar mass (g/mol) of the solute: concentration (g/dm³) = concentration (mol/dm³) × Mᵣ.' },
      { id: 'cue-3', blockId: 'call-dilution', prompt: 'What remains constant when a solution is diluted, and what formula expresses this?', answer: 'The number of moles of solute remains constant. This gives the dilution equation C₁V₁ = C₂V₂.' }
    ]
  },
  evidence: [],
  mentions: []
};
