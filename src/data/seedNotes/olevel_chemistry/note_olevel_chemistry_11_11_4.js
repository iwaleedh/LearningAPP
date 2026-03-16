export const note_olevel_chemistry_11_11_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-2-1-fossil-fuels.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe crude oil as a mixture of hydrocarbons, explain fractional distillation, identify main fractions and their uses, and explain cracking of alkanes.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Crude Oil and Fractional Distillation', level: 2 }
    },
    {
      id: 'call-crude',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Crude Oil',
        text: 'Crude oil is a <strong>mixture</strong> of hydrocarbons (mainly alkanes of various chain lengths) formed over millions of years from ancient marine organisms under heat and pressure — a <strong>fossil fuel</strong>.<br/><br/>It is separated into useful fractions by <strong>fractional distillation</strong>:<br/>• The mixture is heated in a furnace (to ~350°C) — most of it vaporises.<br/>• Vapour enters the fractionating column, which is hot at the bottom and cool at the top.<br/>• Different fractions condense at different levels based on their boiling points.<br/>• Fractions with longer chains (higher Mᵣ) condense lower down (higher boiling point).<br/>• Fractions with shorter chains (lower Mᵣ) rise higher up (lower boiling point).'
      }
    },
    {
      id: 'tbl-fractions',
      type: 'comparisonTable',
      data: {
        caption: 'Main fractions from crude oil (from top to bottom of column)',
        headers: ['Fraction', 'Carbon chain', 'Boiling point', 'Uses'],
        rows: [
          ['Refinery gas', 'C₁–C₄', '< 25°C', 'LPG fuel (cooking, heating)'],
          ['Petrol (gasoline)', 'C₅–C₁₀', '25–75°C', 'Fuel for cars'],
          ['Naphtha', 'C₆–C₁₀', '75–150°C', 'Petrochemical feedstock; making plastics'],
          ['Kerosene (paraffin)', 'C₁₀–C₁₆', '150–250°C', 'Jet fuel; domestic fuel'],
          ['Diesel (gas oil)', 'C₁₄–C₂₀', '250–350°C', 'Fuel for lorries, trains'],
          ['Lubricating oil', 'C₂₀–C₅₀', '> 350°C', 'Engine lubricants, waxes, polishes'],
          ['Bitumen (residue)', 'C₅₀+', 'Does not distil', 'Road surfacing, roofing']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Cracking', level: 2 }
    },
    {
      id: 'call-crack',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Cracking of Alkanes',
        text: 'There is more demand for petrol and naphtha (short chain) than for heavy oil fractions (long chain).<br/><br/><strong>Cracking</strong> = breaking down large, heavy alkane molecules into smaller, more useful ones by heating with a catalyst.<br/><br/><strong>Products:</strong> shorter-chain alkanes + alkenes (e.g. ethene)<br/>Example: C₁₀H₂₂ → C₈H₁₈ + C₂H₄<br/><br/><strong>Conditions:</strong> High temperature (~500°C) + aluminium oxide / silica catalyst (or extremely high temperature in thermal cracking).<br/><br/>Alkenes produced are particularly valuable as monomers for making polymers (polymerisation).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Crude oil = mixture of hydrocarbons. Separated by fractional distillation (shorter chains → lower b.p. → rise higher in column). Fractions: refinery gas, petrol, naphtha, kerosene, diesel, lubricating oil, bitumen. Cracking breaks large alkanes → smaller alkanes + alkenes.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Fractional distillation separates crude oil by boiling point. Cracking: large alkanes → smaller alkanes + alkenes (catalyst, 500°C).',
    cues: [
      { id: 'cue-1', blockId: 'call-crude', prompt: 'Explain how fractional distillation separates crude oil into fractions.', answer: 'Crude oil is heated, vapourises, and rises up the fractionating column. As temperature decreases up the column, fractions with higher boiling points condense lower down (long chains) and fractions with lower boiling points condense higher up (short chains).' },
      { id: 'cue-2', blockId: 'tbl-fractions', prompt: 'State two fractions from crude oil and give a use for each.', answer: 'E.g. kerosene (jet fuel); petrol (car fuel); bitumen (road surfacing) — any two with uses.' },
      { id: 'cue-3', blockId: 'call-crack', prompt: 'Explain why cracking is important in the petrochemical industry.', answer: 'Cracking converts excess long-chain alkanes (low demand) into shorter-chain alkanes (petrol — high demand) and alkenes (used as monomers for polymer/plastics production).' }
    ]
  },
  evidence: [],
  mentions: []
};
