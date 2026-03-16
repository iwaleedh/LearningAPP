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
      id: 'svg-greenhouse',
      type: 'svg',
      data: {
        caption: 'The greenhouse effect: short-wave solar radiation warms the Earth, which emits long-wave infrared radiation. Greenhouse gases trap some of this heat.',
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Earth & Atmosphere -->
  <path d="M 0 320 Q 300 180, 600 320 Z" fill="#22c55e" opacity="0.3" />
  <path d="M 0 320 Q 300 200, 600 320 Z" fill="#22c55e" opacity="0.5" />
  
  <path d="M 0 300 Q 300 -100, 600 300 Z" fill="none" stroke="#93c5fd" stroke-width="40" opacity="0.2" />
  <text x="50" y="220" font-family="var(--font-sans)" font-size="14" fill="#3b82f6" opacity="0.8" font-weight="bold">Atmosphere</text>
  <text x="50" y="240" font-family="var(--font-sans)" font-size="12" fill="#3b82f6" opacity="0.8">(Greenhouse Gases: CO₂, CH₄)</text>

  <!-- Sun -->
  <circle cx="50" cy="50" r="30" fill="#fde047" />
  <path d="M 50 10 L 50 90 M 10 50 L 90 50 M 20 20 L 80 80 M 20 80 L 80 20" stroke="#facc15" stroke-width="3"/>

  <!-- Incoming Solar Radiation -->
  <path d="M 70 70 L 250 250" stroke="#eab308" stroke-width="4" stroke-dasharray="8,4" marker-end="url(#arrow-sun)"/>
  <text x="180" y="110" font-family="var(--font-sans)" font-size="12" fill="#ca8a04" font-weight="bold" transform="rotate(45 180,110)">Short-wave</text>
  <text x="180" y="125" font-family="var(--font-sans)" font-size="12" fill="#ca8a04" transform="rotate(45 180,125)">radiation from Sun</text>
  <text x="180" y="140" font-family="var(--font-sans)" font-size="12" fill="#ca8a04" transform="rotate(45 180,140)">passes through</text>

  <!-- Ground Heating -->
  <circle cx="260" cy="260" r="10" fill="#ef4444" opacity="0.5" />

  <!-- Outgoing Infrared Radiation -->
  <path d="M 280 250 L 400 130" stroke="#ef4444" stroke-width="4" stroke-dasharray="12,6" marker-end="url(#arrow-ir)"/>
  <text x="360" y="160" font-family="var(--font-sans)" font-size="12" fill="#dc2626" font-weight="bold" transform="rotate(-45 360,160)">Long-wave</text>
  <text x="360" y="175" font-family="var(--font-sans)" font-size="12" fill="#dc2626" transform="rotate(-45 360,175)">infrared emitted</text>

  <!-- Reflected Infrared -->
  <path d="M 390 120 C 430 90, 480 90, 450 160" fill="none" stroke="#ef4444" stroke-width="4" stroke-dasharray="12,6" marker-end="url(#arrow-ir)"/>
  <circle cx="430" cy="110" r="15" fill="#bae6fd" stroke="#3b82f6" stroke-width="2"/>
  <text x="430" y="114" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#1d4ed8" text-anchor="middle">CO₂</text>

  <text x="490" y="120" font-family="var(--font-sans)" font-size="12" fill="#dc2626" font-weight="bold">Absorbed & re-emitted</text>
  <text x="490" y="135" font-family="var(--font-sans)" font-size="12" fill="#dc2626">back to Earth</text>
  <text x="490" y="150" font-family="var(--font-sans)" font-size="12" fill="#dc2626">(traps heat)</text>

  <!-- Escaping Infrared -->
  <path d="M 400 120 L 500 20" stroke="#fca5a5" stroke-width="3" stroke-dasharray="4,4" marker-end="url(#arrow-escape)"/>
  <text x="450" y="50" font-family="var(--font-sans)" font-size="10" fill="#fca5a5" transform="rotate(-45 450,50)">Some escapes</text>

  <defs>
    <marker id="arrow-sun" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#eab308"/>
    </marker>
    <marker id="arrow-ir" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#ef4444"/>
    </marker>
    <marker id="arrow-escape" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#fca5a5"/>
    </marker>
  </defs>
</svg>`
      }
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
