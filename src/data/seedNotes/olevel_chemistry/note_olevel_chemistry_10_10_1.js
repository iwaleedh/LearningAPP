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
      id: 'svg-hard-water',
      type: 'svg',
      data: {
        caption: 'The effect of adding soap to soft water versus hard water.',
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Soft Water Flask -->
  <path d="M 100 40 L 100 80 L 70 160 L 130 160 Z" fill="none" stroke="#64748b" stroke-width="2"/>
  <!-- Liquid -->
  <path d="M 85 120 L 115 120 L 128 158 L 72 158 Z" fill="#e0f2fe"/>
  <!-- Lather (Bubbles) -->
  <circle cx="100" cy="110" r="10" fill="#fff" stroke="#93c5fd" />
  <circle cx="85" cy="115" r="8" fill="#fff" stroke="#93c5fd" />
  <circle cx="115" cy="115" r="8" fill="#fff" stroke="#93c5fd" />
  <circle cx="95" cy="100" r="7" fill="#fff" stroke="#93c5fd" />
  <circle cx="105" cy="100" r="7" fill="#fff" stroke="#93c5fd" />
  
  <text x="100" y="180" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Soft Water</text>
  <text x="100" y="195" font-family="var(--font-sans)" font-size="12" fill="#059669" text-anchor="middle">Produces rich lather</text>

  <!-- Hard Water Flask -->
  <path d="M 300 40 L 300 80 L 270 160 L 330 160 Z" fill="none" stroke="#64748b" stroke-width="2"/>
  <!-- Liquid -->
  <path d="M 285 120 L 315 120 L 328 158 L 272 158 Z" fill="#e0f2fe"/>
  <!-- Scum -->
  <path d="M 285 120 Q 295 115 300 120 T 315 120 L 315 125 L 285 125 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
  <circle cx="280" cy="135" r="3" fill="#fef08a" />
  <circle cx="310" cy="140" r="2" fill="#fef08a" />
  <circle cx="295" cy="150" r="4" fill="#fef08a" />

  <text x="300" y="180" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Hard Water</text>
  <text x="300" y="195" font-family="var(--font-sans)" font-size="12" fill="#ef4444" text-anchor="middle">Produces scum, no lather</text>

  <!-- Adding Soap Indicator -->
  <path d="M 200 60 A 30 30 0 0 1 120 60" fill="none" stroke="var(--color-text-secondary)" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrow-head-grey)"/>
  <path d="M 200 60 A 30 30 0 0 0 280 60" fill="none" stroke="var(--color-text-secondary)" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrow-head-grey)"/>
  <rect x="175" y="45" width="50" height="25" rx="4" fill="#fb923c" />
  <text x="200" y="62" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">Soap</text>

  <defs>
    <marker id="arrow-head-grey" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="var(--color-text-secondary)"/>
    </marker>
  </defs>
</svg>`
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
