export const note_olevel_chemistry_11_11_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-1-2-homologous-series.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define a homologous series and state its characteristics. Identify alkanes, alkenes, and alcohols as examples.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Homologous Series', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition and Characteristics',
        text: 'A <strong>homologous series</strong> is a family of organic compounds that:<br/><br/>1. <strong>Share the same general formula</strong> (e.g. CₙH₂ₙ₊₂ for alkanes)<br/>2. <strong>Differ by CH₂</strong> between consecutive members<br/>3. Have <strong>similar chemical properties</strong> (same functional group, same types of reactions)<br/>4. Show a <strong>gradual change in physical properties</strong> (e.g. boiling point, viscosity, flammability increase with increasing chain length/relative molecular mass)'
      }
    },
    {
      id: 'svg-homologous',
      type: 'svg',
      data: {
        caption: 'Successive members of the alkane homologous series differ by a CH₂ unit.',
        svg: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Methane -->
  <g transform="translate(60, 50)">
    <circle cx="20" cy="20" r="12" fill="#1e293b" />
    <circle cx="20" cy="-5" r="8" fill="#0f172a" stroke="#94a3b8" />
    <circle cx="20" cy="45" r="8" fill="#0f172a" stroke="#94a3b8" />
    <circle cx="-5" cy="20" r="8" fill="#0f172a" stroke="#94a3b8" />
    <circle cx="45" cy="20" r="8" fill="#0f172a" stroke="#94a3b8" />
    <text x="20" y="80" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Methane</text>
    <text x="20" y="95" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">CH₄</text>
  </g>

  <!-- Plus CH2 -->
  <path d="M 140 70 L 190 70" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
  <text x="165" y="60" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">+ CH₂</text>

  <!-- Ethane -->
  <g transform="translate(210, 50)">
    <circle cx="20" cy="20" r="12" fill="#1e293b" />
    <circle cx="45" cy="20" r="12" fill="#1e293b" />
    
    <circle cx="20" cy="-5" r="8" fill="#0f172a" stroke="#94a3b8" />
    <circle cx="20" cy="45" r="8" fill="#0f172a" stroke="#94a3b8" />
    <circle cx="-5" cy="20" r="8" fill="#0f172a" stroke="#94a3b8" />

    <circle cx="45" cy="-5" r="8" fill="#0f172a" stroke="#94a3b8" />
    <circle cx="45" cy="45" r="8" fill="#0f172a" stroke="#94a3b8" />
    <circle cx="70" cy="20" r="8" fill="#0f172a" stroke="#94a3b8" />

    <text x="32" y="80" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Ethane</text>
    <text x="32" y="95" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">C₂H₆</text>
  </g>

  <!-- Plus CH2 -->
  <path d="M 310 70 L 360 70" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
  <text x="335" y="60" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">+ CH₂</text>

  <!-- Propane -->
  <g transform="translate(380, 50)">
    <circle cx="10" cy="20" r="12" fill="#1e293b" />
    <circle cx="35" cy="20" r="12" fill="#1e293b" />
    <circle cx="60" cy="20" r="12" fill="#1e293b" />
    
    <circle cx="10" cy="-5" r="8" fill="#0f172a" stroke="#94a3b8" />
    <circle cx="10" cy="45" r="8" fill="#0f172a" stroke="#94a3b8" />
    <circle cx="-15" cy="20" r="8" fill="#0f172a" stroke="#94a3b8" />

    <circle cx="35" cy="-5" r="8" fill="#0f172a" stroke="#94a3b8" />
    <circle cx="35" cy="45" r="8" fill="#0f172a" stroke="#94a3b8" />

    <circle cx="60" cy="-5" r="8" fill="#0f172a" stroke="#94a3b8" />
    <circle cx="60" cy="45" r="8" fill="#0f172a" stroke="#94a3b8" />
    <circle cx="85" cy="20" r="8" fill="#0f172a" stroke="#94a3b8" />

    <text x="35" y="80" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Propane</text>
    <text x="35" y="95" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">C₃H₈</text>
  </g>

  <defs>
    <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#2563eb"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'tbl-series',
      type: 'comparisonTable',
      data: {
        caption: 'Three important homologous series',
        headers: ['Series', 'General formula', 'Functional group', 'Example'],
        rows: [
          ['Alkanes', 'CₙH₂ₙ₊₂', 'None (C–C and C–H bonds only; saturated)', 'Methane CH₄, Ethane C₂H₆'],
          ['Alkenes', 'CₙH₂ₙ', 'C=C (carbon–carbon double bond; unsaturated)', 'Ethene C₂H₄, Propene C₃H₆'],
          ['Alcohols', 'CₙH₂ₙ₊₁OH', '–OH (hydroxyl group)', 'Methanol CH₃OH, Ethanol C₂H₅OH']
        ]
      }
    },
    {
      id: 'call-trend',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Trend in Physical Properties',
        text: 'As the number of carbon atoms increases in a homologous series:<br/>• <strong>Boiling point increases</strong> (molecules larger → stronger London/van der Waals forces)<br/>• <strong>Viscosity increases</strong> (liquids become thicker)<br/>• <strong>Flammability decreases</strong> slightly<br/>• <strong>Volatility decreases</strong><br/><br/>Methane and ethane are gases; butane and pentane are liquids; larger alkanes are increasingly viscous liquids or waxes.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Homologous series: same general formula; differ by CH₂; similar chemical properties; gradual change in physical properties. Alkanes (CₙH₂ₙ₊₂), alkenes (CₙH₂ₙ), alcohols (CₙH₂ₙ₊₁OH).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Homologous series: same formula pattern, differ by CH₂, similar reactions, gradual physical property change.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'State four characteristics of a homologous series.', answer: '1. Same general formula. 2. Differ by CH₂ between consecutive members. 3. Similar chemical properties. 4. Gradual change in physical properties (e.g. increasing boiling point).' },
      { id: 'cue-2', blockId: 'tbl-series', prompt: 'State the general formulae for alkanes, alkenes, and alcohols.', answer: 'Alkanes: CₙH₂ₙ₊₂. Alkenes: CₙH₂ₙ. Alcohols: CₙH₂ₙ₊₁OH.' },
      { id: 'cue-3', blockId: 'call-trend', prompt: 'Why does boiling point increase as the chain length increases in a homologous series?', answer: 'Larger molecules have stronger London (van der Waals) dispersion forces, requiring more energy to overcome. Therefore the boiling point increases.' }
    ]
  },
  evidence: [],
  mentions: []
};
