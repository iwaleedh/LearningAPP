export const note_olevel_chemistry_7_7_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/7 Acids Bases And Salts/7-2-2-preparing-insoluble-salts.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe how to prepare an insoluble salt by precipitation and write ionic equations for precipitation reactions.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Preparing Insoluble Salts by Precipitation', level: 2 }
    },
    {
      id: 'call-principle',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Precipitation Method',
        text: 'An <strong>insoluble salt</strong> is prepared by mixing two soluble salt solutions — the insoluble product forms immediately as a <strong>precipitate</strong>.<br/><br/>General approach:<br/>• Choose two solutions, each containing one of the required ions for the insoluble salt.<br/>• Mix them — the insoluble salt precipitates out.<br/>• Filter off the precipitate.<br/>• Wash with distilled water to remove solube impurities.<br/>• Dry the solid (e.g. in an oven or between filter papers).'
      }
    },
    {
      id: 'call-examples',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples',
        text: '<strong>Preparing barium sulfate (BaSO₄):</strong><br/>BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) ↓ + 2NaCl(aq)<br/>Ionic equation: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)↓<br/><br/><strong>Preparing lead(II) iodide (PbI₂):</strong><br/>Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s)↓ + 2KNO₃(aq)<br/>Ionic equation: Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s)↓<br/><br/><strong>Preparing silver chloride (AgCl):</strong><br/>AgNO₃(aq) + HCl(aq) → AgCl(s)↓ + HNO₃(aq)<br/>Ionic equation: Ag⁺(aq) + Cl⁻(aq) → AgCl(s)↓'
      }
    },
    {
      id: 'call-steps',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Practical Steps',
        text: '1. Mix the two aqueous solutions in a beaker → precipitate forms immediately.<br/>2. Set up a filter funnel with filter paper in a conical flask.<br/>3. Pour the mixture through the filter — solid stays on paper, filtrate (solution of soluble ions) passes through.<br/>4. Wash precipitate with distilled water (two or three times) to remove soluble impurities.<br/>5. Dry in an oven or allow to air-dry.<br/><br/>Note: The filtrate contains the spectator ions (e.g. Na⁺ and Cl⁻ in the BaSO₄ example) and is discarded.'
      }
    },
    {
      id: 'svg-precipitation',
      type: 'svg',
      data: {
        caption: 'Steps to prepare an insoluble salt: Mix solutions, Filter to collect precipitate, then Wash and Dry.',
        svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Step 1: Mix -->
  <text x="100" y="20" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">1. Mix</text>
  
  <path d="M 70 70 L 70 140 A 10 10 0 0 0 80 150 L 120 150 A 10 10 0 0 0 130 140 L 130 70" fill="none" stroke="var(--color-text)" stroke-width="2"/>
  <ellipse cx="100" cy="70" rx="30" ry="8" fill="none" stroke="var(--color-text)" stroke-width="2"/>
  
  <!-- Liquid + precipitate -->
  <path d="M 71 110 Q 100 115 129 110 L 129 140 A 8 8 0 0 1 120 148 L 80 148 A 8 8 0 0 1 71 140 Z" fill="#e0f2fe"/>
  <!-- Powdery solid at bottom -->
  <path d="M 75 140 Q 100 135 125 140 L 125 145 A 5 5 0 0 1 120 148 L 80 148 A 5 5 0 0 1 75 145 Z" fill="#94a3b8"/>
  <circle cx="100" cy="142" r="1.5" fill="#f8fafc"/>
  <circle cx="90" cy="145" r="1.5" fill="#f8fafc"/>
  <circle cx="110" cy="143" r="1.5" fill="#f8fafc"/>
  <circle cx="95" cy="138" r="1.5" fill="#f8fafc"/>

  <!-- Pouring -->
  <path d="M 40 40 L 60 70" fill="none" stroke="#60a5fa" stroke-width="3" stroke-dasharray="4,2"/>
  <text x="35" y="30" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)">Soluble Salt A</text>
  <path d="M 160 40 L 140 70" fill="none" stroke="#60a5fa" stroke-width="3" stroke-dasharray="4,2"/>
  <text x="165" y="30" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)">Soluble Salt B</text>

  <text x="100" y="170" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">Insoluble salt precipitates</text>

  <!-- Arrow -->
  <path d="M 180 100 L 220 100" fill="none" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow-head)" />

  <!-- Step 2: Filter -->
  <text x="300" y="20" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">2. Filter</text>

  <!-- Flask -->
  <path d="M 285 100 L 285 120 L 260 160 A 10 10 0 0 0 270 170 L 330 170 A 10 10 0 0 0 340 160 L 315 120 L 315 100" fill="none" stroke="var(--color-text)" stroke-width="2"/>
  <ellipse cx="300" cy="100" rx="15" ry="4" fill="none" stroke="var(--color-text)" stroke-width="2"/>
  <path d="M 270 145 L 330 145 L 338 160 A 8 8 0 0 1 330 168 L 270 168 A 8 8 0 0 1 262 160 Z" fill="#e0f2fe"/>
  
  <!-- Funnel -->
  <path d="M 270 60 L 330 60 L 305 95 L 305 110 L 295 110 L 295 95 Z" fill="#f8fafc" stroke="var(--color-text)" stroke-width="1.5"/>
  <!-- Filter Paper -->
  <path d="M 275 60 L 300 90 L 325 60 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1"/>
  <!-- Solid in paper -->
  <path d="M 290 80 L 300 90 L 310 80 Z" fill="#94a3b8"/>

  <text x="350" y="70" font-family="var(--font-sans)" font-size="10" fill="#64748b">Solid matches paper</text>
  <text x="350" y="160" font-family="var(--font-sans)" font-size="10" fill="#64748b">Filtrate (discard)</text>

  <!-- Arrow -->
  <path d="M 380 100 L 420 100" fill="none" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow-head)" />

  <!-- Step 3: Wash & Dry -->
  <text x="500" y="20" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">3. Wash &amp; Dry</text>

  <!-- Filter paper open -->
  <ellipse cx="500" cy="100" rx="40" ry="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  
  <!-- Solid lumps -->
  <circle cx="490" cy="95" r="4" fill="#94a3b8"/>
  <circle cx="500" cy="98" r="5" fill="#94a3b8"/>
  <circle cx="510" cy="94" r="3" fill="#94a3b8"/>
  <circle cx="495" cy="102" r="3" fill="#94a3b8"/>

  <text x="500" y="140" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">Wash with distilled water</text>
  <text x="500" y="155" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">Dry in oven or air</text>

  <defs>
    <marker id="arrow-head" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="var(--color-text)"/>
    </marker>
  </defs>

</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Insoluble salts are prepared by precipitation: mix two aqueous solutions containing the required ions. The insoluble salt precipitates immediately. Filter, wash, dry. Ionic equation shows only the precipitating ions → solid product.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Precipitation: mix two soluble solutions → insoluble salt precipitates → filter → wash → dry. Ionic eq: Ba²⁺ + SO₄²⁻ → BaSO₄↓',
    cues: [
      { id: 'cue-1', blockId: 'call-principle', prompt: 'Describe the steps in preparing an insoluble salt from two aqueous solutions.', answer: 'Mix the two solutions containing the required ions → solid precipitate forms. Filter, wash the precipitate with distilled water, and dry.' },
      { id: 'cue-2', blockId: 'call-examples', prompt: 'Write the ionic equation for the formation of barium sulfate from barium chloride and sodium sulfate solutions.', answer: 'Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)↓' },
      { id: 'cue-3', blockId: 'call-examples', prompt: 'Write the ionic equation for the formation of silver chloride.', answer: 'Ag⁺(aq) + Cl⁻(aq) → AgCl(s)↓' }
    ]
  },
  evidence: [],
  mentions: []
};
