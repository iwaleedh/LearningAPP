export const note_olevel_chemistry_10_10_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/10 Chemistry Of The Environment/10-1-2-substances-in-water-from-natural-sources.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the substances dissolved in water from natural sources and explain hard and soft water.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Substances in Natural Water', level: 2 }
    },
    {
      id: 'tbl-sub',
      type: 'comparisonTable',
      data: {
        caption: 'Dissolved substances in natural water and their effects',
        headers: ['Substance', 'Source', 'Effect'],
        rows: [
          ['Ca²⁺ / Mg²⁺ ions', 'Limestone (CaCO₃) / dolomite (MgCO₃) dissolved by slightly acidic rain', 'Cause hardness of water'],
          ['Dissolved O₂', 'Diffusion from air; photosynthesis by aquatic plants', 'Supports aquatic life; essential for fish'],
          ['CO₂', 'Diffusion from air; decomposition; respiration of organisms', 'Makes water slightly acidic (carbonic acid); dissolves limestone'],
          ['Microorganisms (bacteria)', 'Sewage, surface run-off', 'Can cause disease — must be removed in treatment'],
          ['Nitrates / phosphates', 'Fertiliser run-off', 'Cause eutrophication'],
          ['Silt / clay particles', 'Erosion, run-off from land', 'Makes water turbid (cloudy)']
        ]
      }
    },
    {
      id: 'call-hard',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Hard and Soft Water',
        text: '<strong>Soft water:</strong> does not contain Ca²⁺ or Mg²⁺ ions → lathers easily with soap.<br/><br/><strong>Hard water:</strong> contains dissolved Ca²⁺ and/or Mg²⁺ ions → these react with soap to form an insoluble scum (rather than lather):<br/>Ca²⁺ + soap → insoluble calcium soap (scum)<br/><br/><strong>Two types of hardness:</strong><br/>• <strong>Temporary hardness</strong> — caused by dissolved Ca(HCO₃)₂ (calcium hydrogencarbonate); removed by boiling:<br/>Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂ (forms limescale)<br/><br/>• <strong>Permanent hardness</strong> — caused by dissolved CaSO₄ or MgSO₄; NOT removed by boiling; removed by ion exchange resin or adding Na₂CO₃/washing soda'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Natural water contains dissolved Ca²⁺/Mg²⁺ (hardness), O₂, CO₂, microorganisms, nitrates, and silt. Hard water contains Ca²⁺/Mg²⁺ — forms scum with soap. Temporary hardness (Ca(HCO₃)₂) removed by boiling; permanent hardness (CaSO₄) removed by ion exchange.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Hard water: Ca²⁺/Mg²⁺ ions form scum with soap. Temporary hardness removed by boiling (forms limescale). Permanent hardness needs ion exchange or Na₂CO₃.',
    cues: [
      { id: 'cue-1', blockId: 'call-hard', prompt: 'Explain the difference between temporary and permanent water hardness.', answer: 'Temporary hardness is caused by dissolved Ca(HCO₃)₂ and can be removed by boiling. Permanent hardness is caused by dissolved CaSO₄ or MgSO₄ and cannot be removed by boiling; requires ion exchange or washing soda.' },
      { id: 'cue-2', blockId: 'tbl-sub', prompt: 'Name two ions that cause hardness in water and state their source.', answer: 'Ca²⁺ and Mg²⁺ ions; they come from dissolving limestone (CaCO₃) or dolomite (MgCO₃) in slightly acidic rainwater.' },
      { id: 'cue-3', blockId: 'call-hard', prompt: 'What happens when water containing calcium hydrogencarbonate is boiled?', answer: 'Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂. Insoluble CaCO₃ (limescale) precipitates out, removing the hardness.' }
    ]
  },
  evidence: [],
  mentions: []
};
