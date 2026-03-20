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
      id: 'svg-distillation',
      type: 'svg',
      data: {
        caption: 'Fractional Distillation of Crude Oil',
        svg: `<svg viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Furnace & Pipe -->
  <rect x="20" y="320" width="80" height="80" fill="#1e293b" stroke="#475569" stroke-width="3" rx="4"/>
  <text x="60" y="350" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Furnace</text>
  <text x="60" y="370" font-family="var(--font-sans)" font-size="12" fill="#dc2626" text-anchor="middle">~350°C</text>
  <path d="M 100 360 L 160 360" fill="none" stroke="#475569" stroke-width="8"/>
  <path d="M 130 360 L 140 360" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)"/>

  <!-- Column Outline -->
  <path d="M 160 50 L 160 400 L 260 400 L 260 50 L 210 20 Z" fill="#0f172a" stroke="#475569" stroke-width="3"/>
  <text x="210" y="420" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Fractionating Column</text>

  <!-- Temperature Gradient -->
  <text x="130" y="390" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#dc2626" transform="rotate(-90 130 390)">Hotter (350°C)</text>
  <text x="130" y="100" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#2563eb" transform="rotate(-90 130 100)">Cooler (25°C)</text>
  <path d="M 140 330 L 140 60" fill="none" stroke="url(#temp-grad)" stroke-width="4" marker-end="url(#arrow-blue)"/>

  <!-- Trays & Outlets -->
  <g fill="#1e293b" stroke="#64748b" stroke-width="2">
    <!-- Refinery Gas -->
    <path d="M 210 20 L 210 10 L 350 10 L 350 20" fill="none" stroke="#64748b" stroke-width="4"/>
    <text x="400" y="25" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1d4ed8">Refinery Gas (1-4C)</text>
    
    <!-- Petrol / Gasoline -->
    <path d="M 160 80 L 230 80" /> <path d="M 260 70 L 350 70" stroke-width="4" fill="none" />
    <text x="400" y="75" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#047857">Petrol (5-10C)</text>

    <!-- Naphtha -->
    <path d="M 160 130 L 230 130" /> <path d="M 260 120 L 350 120" stroke-width="4" fill="none" />
    <text x="400" y="125" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#047857">Naphtha (6-10C)</text>

    <!-- Kerosene -->
    <path d="M 160 180 L 230 180" /> <path d="M 260 170 L 350 170" stroke-width="4" fill="none" />
    <text x="400" y="175" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#b45309">Kerosene (10-16C)</text>

    <!-- Diesel -->
    <path d="M 160 230 L 230 230" /> <path d="M 260 220 L 350 220" stroke-width="4" fill="none" />
    <text x="400" y="225" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#b45309">Diesel (14-20C)</text>

    <!-- Lubricating Oil -->
    <path d="M 160 280 L 230 280" /> <path d="M 260 270 L 350 270" stroke-width="4" fill="none" />
    <text x="400" y="275" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#be123c">Lubricating Oil (20-50C)</text>

    <!-- Bitumen -->
    <path d="M 160 330 L 230 330" /> <path d="M 260 380 L 350 380" stroke-width="4" fill="none" />
    <text x="400" y="385" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b">Bitumen (50+C)</text>
  </g>

  <!-- Gas/Liquid Icons Inside Column -->
  <!-- Gas vapor rising -->
  <circle cx="240" cy="330" r="3" fill="#ef4444" />
  <circle cx="245" cy="310" r="3" fill="#ef4444" />
  <circle cx="235" cy="290" r="3" fill="#f97316" />
  <circle cx="245" cy="270" r="3" fill="#f97316" />
  <circle cx="235" cy="240" r="3" fill="#eab308" />
  <circle cx="245" cy="210" r="3" fill="#eab308" />
  <circle cx="235" cy="180" r="3" fill="#84cc16" />
  <circle cx="245" cy="150" r="3" fill="#22c55e" />
  <circle cx="235" cy="120" r="3" fill="#10b981" />
  <circle cx="245" cy="90" r="3" fill="#06b6d4" />
  <circle cx="235" cy="60" r="3" fill="#3b82f6" />
  <circle cx="245" cy="40" r="3" fill="#6366f1" />

  <!-- Annotations Right Side -->
  <text x="400" y="40" font-family="var(--font-sans)" font-size="10" fill="#475569">Small molecules: low boiling point, very volatile,</text>
  <text x="400" y="52" font-family="var(--font-sans)" font-size="10" fill="#475569">flows easily, ignites easily</text>

  <text x="400" y="410" font-family="var(--font-sans)" font-size="10" fill="#475569">Large molecules: high boiling point, not very volatile,</text>
  <text x="400" y="422" font-family="var(--font-sans)" font-size="10" fill="#475569">does not flow easily, does not ignite easily</text>

  <!-- Definitions -->
  <defs>
    <linearGradient id="temp-grad" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="50%" stop-color="#eab308" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
    <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#3b82f6"/>
    </marker>
    <marker id="arrow-red" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#ef4444"/>
    </marker>
  </defs>
</svg>`
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
