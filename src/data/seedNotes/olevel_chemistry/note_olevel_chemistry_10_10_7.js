export const note_olevel_chemistry_10_10_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/10 Chemistry Of The Environment/10-2-4-photosynthesis.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Write the equation for photosynthesis, explain its role in the carbon cycle, and describe the impact of deforestation on CO₂ levels.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Photosynthesis and the Carbon Cycle', level: 2 }
    },
    {
      id: 'call-eq',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Photosynthesis Equation',
        text: 'Photosynthesis is the process by which green plants use light energy to convert CO₂ and water into glucose and oxygen:<br/><br/><strong>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</strong><br/><br/>• Requires light energy (absorbed by chlorophyll)<br/>• Occurs in the chloroplasts of green plant cells<br/>• Absorbs CO₂ from the atmosphere → removes carbon dioxide<br/>• Releases O₂ into the atmosphere'
      }
    },
    {
      id: 'call-cycle',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Role in the Carbon Cycle',
        text: 'Photosynthesis is a key process in the carbon cycle that <strong>removes CO₂</strong> from the atmosphere:<br/><br/>• Combustion (burning), respiration, and decomposition all <strong>release CO₂</strong> into the atmosphere.<br/>• Photosynthesis <strong>absorbs CO₂</strong> → locks carbon into organic molecules in plants.<br/>• When plants are eaten, carbon is transferred to animals; when they die the carbon is released again by decomposition.<br/><br/>Forests act as <strong>carbon sinks</strong> — absorbing and storing large amounts of CO₂.'
      }
    },
    {
      id: 'call-deforest',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Deforestation and Rising CO₂',
        text: 'When forests are cleared:<br/>1. <strong>Fewer trees</strong> → less CO₂ absorbed by photosynthesis<br/>2. <strong>Burning trees</strong> releases CO₂ stored in wood: C + O₂ → CO₂<br/>3. <strong>Decomposition</strong> of remaining vegetation releases more CO₂<br/><br/>Both effects increase atmospheric CO₂ concentration → contribute to enhanced greenhouse effect → global warming.<br/><br/>Deforestation is therefore a <strong>double effect</strong>: more CO₂ produced AND less CO₂ removed.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Forests are carbon sinks — they absorb CO₂. Deforestation reduces CO₂ absorption (fewer trees) AND increases CO₂ release (burning/decomposing wood) → worsens greenhouse effect.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Forests absorb CO₂. Deforestation = less CO₂ absorbed + more CO₂ released.',
    cues: [
      { id: 'cue-1', blockId: 'call-eq', prompt: 'Write the balanced equation for photosynthesis.', answer: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂' },
      { id: 'cue-2', blockId: 'call-deforest', prompt: 'Explain why deforestation has a double effect on atmospheric CO₂ levels.', answer: 'First, fewer trees means less CO₂ is absorbed by photosynthesis. Second, burning trees releases the CO₂ stored in them. Both effects increase atmospheric CO₂.' },
      { id: 'cue-3', blockId: 'call-cycle', prompt: 'Explain why forests are described as carbon sinks.', answer: 'Forests absorb CO₂ from the atmosphere through photosynthesis and lock the carbon into plant biomass (wood, leaves, roots). This removes CO₂ from the atmosphere and stores it as organic carbon.' }
    ]
  },
  evidence: [],
  mentions: []
};
