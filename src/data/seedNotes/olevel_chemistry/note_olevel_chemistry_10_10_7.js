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
      id: 'svg-carbon-cycle',
      type: 'svg',
      data: {
        caption: 'The Carbon Cycle, showing how photosynthesis removes CO₂ while respiration, combustion, and decomposition add it back.',
        svg: `<svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Atmosphere -->
  <rect x="200" y="20" width="200" height="60" rx="30" fill="#bae6fd" stroke="#3b82f6" stroke-width="2"/>
  <text x="300" y="47" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#1d4ed8" text-anchor="middle">CO₂ in Atmosphere</text>

  <!-- Plants Box -->
  <rect x="50" y="160" width="140" height="50" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
  <text x="120" y="185" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">Carbon in Plants</text>
  <text x="120" y="200" font-family="var(--font-sans)" font-size="10" fill="#166534" text-anchor="middle">(Glucose & tissues)</text>

  <!-- Animals Box -->
  <rect x="250" y="160" width="140" height="50" rx="8" fill="#ffedd5" stroke="#f97316" stroke-width="2"/>
  <text x="320" y="190" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#c2410c" text-anchor="middle">Carbon in Animals</text>

  <!-- Fossil Fuels Box -->
  <rect x="420" y="260" width="140" height="50" rx="8" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
  <text x="490" y="285" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Fossil Fuels</text>
  <text x="490" y="300" font-family="var(--font-sans)" font-size="10" fill="#1e293b" text-anchor="middle">(Coal, Oil, Gas)</text>

  <!-- Dead Matter Box -->
  <rect x="150" y="260" width="140" height="50" rx="8" fill="#f3f4f6" stroke="#9ca3af" stroke-width="2"/>
  <text x="220" y="290" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#4b5563" text-anchor="middle">Dead Matter & Waste</text>

  <!-- ARROWS -->
  <!-- Photosynthesis (Removes CO2) -->
  <path d="M 230 80 Q 120 100, 120 155" fill="none" stroke="#22c55e" stroke-width="3" marker-end="url(#arrow-green)"/>
  <text x="140" y="120" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#166534">Photosynthesis</text>
  <text x="140" y="132" font-family="var(--font-sans)" font-size="10" fill="#166534">(Reduces CO₂)</text>

  <!-- Plant Respiration -->
  <path d="M 140 160 Q 180 120, 240 80" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)"/>
  <text x="190" y="145" font-family="var(--font-sans)" font-size="10" fill="#dc2626">Respiration</text>

  <!-- Feeding -->
  <path d="M 190 185 L 245 185" fill="none" stroke="#f97316" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <text x="217" y="180" font-family="var(--font-sans)" font-size="10" fill="#c2410c" text-anchor="middle">Feeding</text>

  <!-- Animal Respiration -->
  <path d="M 320 160 L 320 85" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)"/>
  <text x="330" y="125" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#dc2626">Respiration</text>

  <!-- Death / Waste -->
  <path d="M 90 210 Q 90 285, 145 285" fill="none" stroke="#9ca3af" stroke-width="2" marker-end="url(#arrow-grey)"/>
  <path d="M 320 210 Q 320 285, 295 285" fill="none" stroke="#9ca3af" stroke-width="2" marker-end="url(#arrow-grey)"/>
  <text x="110" y="240" font-family="var(--font-sans)" font-size="10" fill="#4b5563">Death / Excretion</text>

  <!-- Decomposition -->
  <path d="M 220 260 Q 240 220, 260 85" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrow-red)"/>
  <text x="250" y="235" font-family="var(--font-sans)" font-size="10" fill="#dc2626">Decomposition</text>
  <text x="250" y="245" font-family="var(--font-sans)" font-size="10" fill="#dc2626">(Bacteria)</text>

  <!-- Fossilization -->
  <path d="M 195 310 Q 195 340, 310 340 T 490 315" fill="none" stroke="#9ca3af" stroke-width="2" marker-end="url(#arrow-grey)"/>
  <text x="340" y="335" font-family="var(--font-sans)" font-size="10" fill="#4b5563">High pressure, millions of years</text>

  <!-- Combustion -->
  <path d="M 490 260 Q 490 120, 405 60" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)"/>
  <rect x="460" y="150" width="80" height="20" fill="rgba(255,255,255,0.8)" />
  <text x="500" y="164" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">Combustion</text>

  <defs>
    <marker id="arrow-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#22c55e"/>
    </marker>
    <marker id="arrow-red" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#ef4444"/>
    </marker>
    <marker id="arrow-orange" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#f97316"/>
    </marker>
    <marker id="arrow-grey" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#9ca3af"/>
    </marker>
  </defs>
</svg>`
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
