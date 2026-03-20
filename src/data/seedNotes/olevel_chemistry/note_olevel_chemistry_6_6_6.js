export const note_olevel_chemistry_6_6_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-2-1-reversible-reactions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define a reversible reaction and describe examples including ammonium chloride and hydrated salts.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Reversible Reactions', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition',
        text: 'A <strong>reversible reaction</strong> is one that can proceed in both the forward <strong>and</strong> the backward direction.<br/><br/>Shown using the <strong>⇌ symbol</strong> (double half-arrows).<br/><br/>General form: A + B ⇌ C + D<br/>• Forward reaction: A + B → C + D<br/>• Reverse reaction: C + D → A + B'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Key Examples', level: 2 }
    },
    {
      id: 'svg-ammonium-chloride',
      type: 'svg',
      data: {
        caption: 'Reversible Reaction of Ammonium Chloride: On heating (forward), solid breaks into ammonia and hydrogen chloride gases. On cooling near the mouth (reverse), gases recombine into solid.',
        svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Test tube -->
  <path d="M 230 20 L 230 160 A 20 20 0 0 0 270 160 L 270 20" fill="none" stroke="var(--color-text)" stroke-width="3" />
  <ellipse cx="250" cy="20" rx="20" ry="5" fill="none" stroke="var(--color-text)" stroke-width="3" />

  <!-- Solid bottom (NH4Cl) -->
  <path d="M 233 150 Q 250 145 267 150 L 267 160 A 17 20 0 0 1 233 160 Z" fill="#1e293b" stroke="#94a3b8" stroke-width="1"/>
  <text x="250" y="157" font-family="var(--font-sans)" font-size="10" fill="#475569" text-anchor="middle">NH₄Cl</text>

  <!-- Heat -->
  <path d="M 245 190 Q 250 180 255 190 T 260 185 T 250 175 T 240 185 T 245 190 Z" fill="#ef4444"/>
  <text x="250" y="198" font-family="var(--font-sans)" font-size="10" fill="#ef4444" text-anchor="middle">Heat</text>

  <!-- Gas rising -->
  <path d="M 240 140 Q 245 120 240 100" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="3,3" marker-end="url(#arrow-up)"/>
  <path d="M 260 140 Q 255 120 260 100" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,3" marker-end="url(#arrow-up)"/>
  
  <!-- Solid top (NH4Cl) forming on cool walls -->
  <rect x="230" y="50" width="4" height="30" fill="#1e293b"/>
  <rect x="266" y="50" width="4" height="30" fill="#1e293b"/>
  <text x="285" y="65" font-family="var(--font-sans)" font-size="10" fill="#475569" text-anchor="start">White deposit</text>
  <text x="285" y="77" font-family="var(--font-sans)" font-size="10" fill="#475569" text-anchor="start">of NH₄Cl forms</text>
  <path d="M 280 65 L 272 65" fill="none" stroke="#475569" stroke-width="1"/>

  <text x="110" y="60" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">Reverse (Cooling)</text>
  <text x="110" y="75" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">NH₃(g) + HCl(g) → NH₄Cl(s)</text>
  
  <text x="110" y="145" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">Forward (Heating)</text>
  <text x="110" y="160" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">NH₄Cl(s) → NH₃(g) + HCl(g)</text>

  <!-- Markers -->
  <defs>
    <marker id="arrow-up" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#64748b"/>
    </marker>
  </defs>

  <circle cx="215" cy="110" r="3" fill="#22c55e" />
  <text x="195" y="113" font-family="var(--font-sans)" font-size="10" fill="#22c55e" text-anchor="end">NH₃</text>
  <circle cx="285" cy="110" r="3" fill="#3b82f6" />
  <text x="305" y="113" font-family="var(--font-sans)" font-size="10" fill="#3b82f6" text-anchor="start">HCl</text>

  <rect x="350" y="40" width="130" height="60" rx="5" fill="var(--color-bg-secondary)" stroke="var(--color-border)"/>
  <text x="360" y="55" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="start">Equations:</text>
  <text x="360" y="70" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="start">Heat: solid → gas</text>
  <text x="360" y="85" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="start">Cool: gas → solid</text>

</svg>`
      }
    },
    {
      id: 'tbl-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Examples of reversible reactions',
        headers: ['Example', 'Forward', 'Reverse', 'Observation'],
        rows: [
          ['Ammonium chloride', 'NH₄Cl(s) → NH₃(g) + HCl(g) on heating', 'NH₃(g) + HCl(g) → NH₄Cl(s) on cooling', 'White ring forms higher up the tube; white solid re-forms on cooling'],
          ['Hydrated copper(II) sulfate', 'CuSO₄·5H₂O(s) → CuSO₄(s) + 5H₂O(g) on heating', 'CuSO₄(s) + 5H₂O → CuSO₄·5H₂O on adding water', 'Blue crystals → white powder; add water → blue again'],
          ['Cobalt(II) chloride / water', 'CoCl₂·6H₂O(pink) ⇌ CoCl₂(blue) + 6H₂O with heat/drying', 'Blue CoCl₂ → pink on absorbing water', 'Pink/blue colour change; used as humidity indicator'],
          ['Bicarbonate decomposition', '2NaHCO₃(s) ⇌ Na₂CO₃(s) + H₂O(g) + CO₂(g) on heating', 'Reverse on cooling', 'Decomposes then reforms']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Key Point',
        text: 'When a reversible reaction takes place in a <strong>closed system</strong> (nothing can escape), dynamic equilibrium is eventually reached.<br/><br/>In an <strong>open system</strong> (products escape), the reaction may go to completion in the forward direction.<br/><br/>E.g. Heating NH₄Cl in an open tube: gases escape → no equilibrium → all solid decomposes eventually.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'A reversible reaction uses ⇌ and can go in both directions. Key examples: NH₄Cl(s) ⇌ NH₃(g) + HCl(g); CuSO₄·5H₂O ⇌ CuSO₄ + 5H₂O; CoCl₂·6H₂O ⇌ CoCl₂ + 6H₂O. In a closed system, this leads to equilibrium.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Reversible reaction: ⇌ in both directions. NH₄Cl, CuSO₄·5H₂O, CoCl₂·6H₂O are classic examples.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'What symbol is used to represent a reversible reaction, and what does it mean?', answer: 'The ⇌ symbol (double half-arrows), meaning the reaction can proceed in both the forward and the reverse direction.' },
      { id: 'cue-2', blockId: 'tbl-examples', prompt: 'Describe what you observe when blue hydrated copper(II) sulfate is heated and then water is added to the product.', answer: 'On heating, the blue crystals (CuSO₄·5H₂O) lose water and turn into a white powder (anhydrous CuSO₄). On adding water, the white powder turns blue again as the hydrated salt re-forms.' },
      { id: 'cue-3', blockId: 'tbl-examples', prompt: 'Write the reversible equation for the thermal decomposition of ammonium chloride.', answer: 'NH₄Cl(s) ⇌ NH₃(g) + HCl(g)' }
    ]
  },
  evidence: [],
  mentions: []
};
