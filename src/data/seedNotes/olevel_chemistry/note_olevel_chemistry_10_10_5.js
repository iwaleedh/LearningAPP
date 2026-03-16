export const note_olevel_chemistry_10_10_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/10 Chemistry Of The Environment/10-2-2-effects-of-greenhouse-gases.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the greenhouse effect and explain how increasing concentrations of greenhouse gases cause enhanced greenhouse effect and climate change.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Greenhouse Effect', level: 2 }
    },
    {
      id: 'call-natural',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Natural Greenhouse Effect',
        text: 'The <strong>natural greenhouse effect</strong> is essential for life on Earth:<br/><br/>1. Short-wave radiation (visible/UV) from the Sun passes through the atmosphere and warms the Earth\'s surface.<br/>2. The Earth\'s surface re-emits longer-wave <strong>infrared (heat) radiation</strong> upwards.<br/>3. Greenhouse gases in the atmosphere <strong>absorb</strong> this infrared radiation and re-emit it in all directions — including back towards Earth.<br/>4. This keeps the Earth ~33°C warmer than it would otherwise be.<br/><br/><strong>Main greenhouse gases:</strong><br/>• Water vapour (H₂O) — largest natural contribution<br/>• Carbon dioxide (CO₂)<br/>• Methane (CH₄)<br/>• Nitrous oxide (N₂O)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Enhanced Greenhouse Effect', level: 2 }
    },
    {
      id: 'call-enhanced',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Human Activities Increasing Greenhouse Gases',
        text: '<strong>Carbon dioxide (CO₂):</strong><br/>• Burning fossil fuels (coal, oil, gas) in power stations and vehicles<br/>• Deforestation — fewer trees to absorb CO₂<br/><br/><strong>Methane (CH₄):</strong><br/>• Livestock farming (cattle produce CH₄ by digestion/fermentation)<br/>• Rice paddy fields (anaerobic decomposition)<br/>• Landfill sites<br/>• Leakage from natural gas pipelines<br/><br/>Increased concentrations of greenhouse gases → more infrared absorbed and trapped → <strong>enhanced greenhouse effect</strong> → global average temperatures rise (<strong>global warming</strong>).'
      }
    },
    {
      id: 'call-effects',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Consequences of Climate Change',
        text: '• Rising sea levels (glaciers and polar ice caps melt → flooding of coastal areas)<br/>• More frequent and intense extreme weather events (storms, floods, droughts)<br/>• Disruption to agriculture and food supply<br/>• Loss of habitats and biodiversity<br/>• Displacement of human populations'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Greenhouse gases (CO₂, CH₄, H₂O vapour, N₂O) trap infrared radiation — natural greenhouse effect warms Earth. Human activities (fossil fuels, deforestation, livestock) increase CO₂ and CH₄ → enhanced greenhouse effect → global warming → climate change (rising sea levels, extreme weather).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Greenhouse gases trap IR radiation. Human activities increase CO₂ (fossil fuels) and CH₄ (livestock/landfill) → enhanced greenhouse effect → global warming.',
    cues: [
      { id: 'cue-1', blockId: 'call-natural', prompt: 'Name three greenhouse gases and describe the natural greenhouse effect.', answer: 'CO₂, CH₄, and H₂O vapour. Short-wave radiation from the Sun warms the Earth; the Earth emits infrared which greenhouse gases absorb and re-emit back towards Earth, keeping the planet warm.' },
      { id: 'cue-2', blockId: 'call-enhanced', prompt: 'State two human activities that increase CO₂ levels in the atmosphere.', answer: 'Burning fossil fuels (coal, oil, gas) and deforestation (fewer trees to absorb CO₂).' },
      { id: 'cue-3', blockId: 'call-effects', prompt: 'State two consequences of global warming caused by the enhanced greenhouse effect.', answer: 'Any two of: rising sea levels, melting polar ice, more extreme weather events, disruption of agriculture, loss of habitats.' }
    ]
  },
  evidence: [],
  mentions: []
};
