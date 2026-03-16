export const note_olevel_chemistry_10_10_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/10 Chemistry Of The Environment/10-2-1-air.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State the approximate composition of clean, dry air; describe an experiment to find the percentage of oxygen in air.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Composition of Air', level: 2 }
    },
    {
      id: 'tbl-comp',
      type: 'comparisonTable',
      data: {
        caption: 'Approximate composition of clean, dry air',
        headers: ['Gas', 'Approximate %', 'Notes'],
        rows: [
          ['Nitrogen (N₂)', '~78%', 'Most abundant; relatively unreactive at room temperature'],
          ['Oxygen (O₂)', '~21%', 'Supports combustion and respiration'],
          ['Argon (Ar)', '~1%', 'Noble gas, inert; used in light bulbs'],
          ['Carbon dioxide (CO₂)', '~0.04%', 'Variable; increased by combustion and respiration'],
          ['Water vapour (H₂O)', 'Variable (~1–4%)', 'Removed in "dry air" — varies with weather'],
          ['Other noble gases (Ne, He, Kr, Xe)', 'Trace', 'Also inert']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Experiment to Find the Percentage of Oxygen', level: 2 }
    },
    {
      id: 'call-exp',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Method 1: Copper in a tube experiment',
        text: '<strong>Equipment:</strong> Two gas syringes connected by a tube containing copper metal; Bunsen burner.<br/><br/><strong>Method:</strong><br/>1. Measure initial volume of air in the syringes.<br/>2. Heat the copper whilst passing air over it repeatedly by pushing/pulling syringes.<br/>3. Copper reacts with O₂: 2Cu + O₂ → 2CuO (copper turns black)<br/>4. Continue until no further volume decrease.<br/>5. Cool back to room temperature; measure final volume.<br/><br/><strong>Calculation:</strong><br/>Volume decrease = volume of O₂ in the original air sample.<br/>% O₂ = (volume decrease ÷ original volume) × 100<br/><br/>Expected result: ~21% decrease'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why cool before measuring the final volume?',
        text: 'If you measure while the apparatus is still hot, the gas is expanded by heat and the volume will appear larger than it actually is. Cooling to room temperature ensures you measure the correct volume of remaining gas.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Clean dry air: ~78% N₂, ~21% O₂, ~1% Ar, ~0.04% CO₂, traces of other noble gases. Percentage O₂ found by reacting copper with air repeatedly (2Cu + O₂ → 2CuO) and measuring volume decrease.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Air: 78% N₂, 21% O₂, 1% Ar, 0.04% CO₂. % O₂ found by reacting Cu with air and measuring volume decrease.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-comp', prompt: 'State the approximate percentages of nitrogen, oxygen, and argon in dry air.', answer: '~78% nitrogen, ~21% oxygen, ~1% argon.' },
      { id: 'cue-2', blockId: 'call-exp', prompt: 'Describe how copper is used to find the percentage of oxygen in air.', answer: 'Air of known volume is passed over heated copper (2Cu + O₂ → 2CuO) repeatedly until the volume stops decreasing. After cooling, the volume decrease equals the oxygen removed. % O₂ = (volume decrease ÷ original volume) × 100.' },
      { id: 'cue-3', blockId: 'call-tip', prompt: 'Why must the apparatus be cooled before taking the final volume reading?', answer: 'Hot gas expands, giving a misleadingly large volume. Cooling to room temperature ensures the volume reading is accurate.' }
    ]
  },
  evidence: [],
  mentions: []
};
