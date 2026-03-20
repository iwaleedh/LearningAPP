export const note_olevel_chemistry_10_10_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/10 Chemistry Of The Environment/10-2-3-reducing-the-effects-of-environmental-issues.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe acid rain, its causes, effects, and methods of reducing its impact, including catalytic converters and industrial solutions.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Acid Rain', level: 2 }
    },
    {
      id: 'svg-acid-rain',
      type: 'svg',
      data: {
        caption: 'Formation and effects of acid rain on the environment.',
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Factories / Cars -->
  <rect x="50" y="200" width="60" height="40" fill="#94a3b8" />
  <rect x="70" y="150" width="10" height="50" fill="#64748b" /> <!-- chimney -->
  <rect x="90" y="160" width="10" height="40" fill="#64748b" /> <!-- chimney -->

  <path d="M 120 220 L 160 220 L 150 200 L 130 200 Z" fill="#ef4444" /> <!-- car -->
  <circle cx="130" cy="230" r="10" fill="#1e293b" />
  <circle cx="150" cy="230" r="10" fill="#1e293b" />
  
  <text x="100" y="255" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Fossil Fuels &</text>
  <text x="100" y="270" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Vehicle Exhausts</text>

  <!-- Emissions -->
  <path d="M 75 140 Q 90 90, 150 80" fill="none" stroke="#64748b" stroke-width="3" stroke-dasharray="4,2" marker-end="url(#arrow-gas)"/>
  <path d="M 165 215 Q 200 180, 200 120" fill="none" stroke="#64748b" stroke-width="3" stroke-dasharray="4,2" marker-end="url(#arrow-gas)"/>
  <text x="160" y="90" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#334155">SO₂, NOₓ</text>

  <!-- Cloud -->
  <path d="M 200 80 Q 220 50, 260 60 Q 300 30, 340 50 Q 380 40, 400 70 Q 430 90, 400 110 Q 370 140, 310 120 Q 240 130, 200 100 Z" fill="#9ca3af" />
  <text x="300" y="90" font-family="var(--font-sans)" font-size="12" fill="#1e293b" text-anchor="middle">React with H₂O & O₂</text>
  <text x="300" y="105" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">H₂SO₄ & HNO₃</text>

  <!-- Rain -->
  <g stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,4">
    <line x1="240" y1="120" x2="220" y2="160" />
    <line x1="280" y1="125" x2="260" y2="165" />
    <line x1="320" y1="120" x2="300" y2="160" />
    <line x1="360" y1="110" x2="340" y2="150" />
  </g>
  <text x="250" y="150" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#2563eb" transform="rotate(-63 250,150)">Acid Rain (pH < 5)</text>

  <!-- Effects: Trees -->
  <path d="M 240 240 L 250 180 L 260 240 Z" fill="#84cc16" opacity="0.4"/> <!-- dead/dying tree -->
  <path d="M 230 200 L 250 180 L 270 200" fill="none" stroke="#65a30d" stroke-width="3"/>
  <text x="250" y="260" font-family="var(--font-sans)" font-size="10" fill="#65a30d" text-anchor="middle">Damages</text>
  <text x="250" y="272" font-family="var(--font-sans)" font-size="10" fill="#65a30d" text-anchor="middle">trees & soil</text>

  <!-- Effects: Lakes -->
  <path d="M 300 240 Q 340 250, 380 240 L 380 280 L 300 280 Z" fill="#1250a0" opacity="0.6"/>
  <!-- Dead Fish -->
  <path d="M 330 255 C 340 250, 350 250, 360 255 L 370 250 L 370 260 Z" fill="#9ca3af" transform="scale(1, -1) translate(0, -510)"/>
  <text x="345" y="255" font-family="var(--font-sans)" font-size="8" font-weight="bold" fill="#111827">XX</text>
  <text x="340" y="295" font-family="var(--font-sans)" font-size="10" fill="#1d4ed8" text-anchor="middle">Kills aquatic life</text>

  <!-- Effects: Limestone -->
  <rect x="420" y="160" width="40" height="80" fill="#44370a" stroke="#ca8a04" stroke-width="3" stroke-dasharray="4,2"/>
  <path d="M 400 160 L 440 120 L 480 160 Z" fill="#44370a" stroke="#ca8a04" stroke-width="3"/>
  <text x="440" y="260" font-family="var(--font-sans)" font-size="10" fill="#ca8a04" text-anchor="middle">Corrodes limestone,</text>
  <text x="440" y="272" font-family="var(--font-sans)" font-size="10" fill="#ca8a04" text-anchor="middle">marble (CaCO₃)</text>

  <!-- Soil line -->
  <line x1="0" y1="240" x2="600" y2="240" stroke="#65a30d" stroke-width="2" />

  <defs>
    <marker id="arrow-gas" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#64748b"/>
    </marker>
  </defs>

</svg>`
      }
    },
    {
      id: 'call-causes',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Causes of Acid Rain',
        text: 'Normal rain is slightly acidic (pH ~5.6) due to dissolved CO₂ forming carbonic acid (H₂CO₃).<br/><br/><strong>Acid rain</strong> (pH < 5.6, sometimes as low as 3) is caused by:<br/><br/><strong>Sulfur dioxide (SO₂)</strong> from:<br/>• Burning fossil fuels containing sulfur impurities (especially coal)<br/>• Volcanic eruptions<br/>• Equation: SO₂ + H₂O → H₂SO₃ (sulfurous acid); oxidised further to H₂SO₄ (sulfuric acid)<br/><br/><strong>Nitrogen oxides (NOₓ)</strong> from:<br/>• High-temperature combustion in car engines (N₂ + O₂ → 2NO; 2NO + O₂ → 2NO₂)<br/>• NO₂ dissolves: 4NO₂ + O₂ + 2H₂O → 4HNO₃ (nitric acid)'
      }
    },
    {
      id: 'call-effects',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Effects of Acid Rain',
        text: '• Kills fish and aquatic life (lowers pH of lakes and rivers)<br/>• Damages and kills trees (acidifies soil, leaches nutrients)<br/>• Corrodes limestone and marble buildings and statues — CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂<br/>• Corrodes metal structures (bridges, etc.)<br/>• Can affect human respiratory health'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Solutions', level: 2 }
    },
    {
      id: 'call-solutions',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Reducing acid rain',
        text: '<strong>Catalytic converters</strong> (vehicles):<br/>Remove CO, NO, and unburnt hydrocarbons from exhaust gases:<br/>2CO + 2NO → 2CO₂ + N₂ (platinum/rhodium catalyst)<br/><br/><strong>Desulfurisation of flue gases</strong> (power stations):<br/>SO₂ scrubbed out by reacting with calcium oxide or calcium carbonate:<br/>CaO + SO₂ → CaSO₃; or CaCO₃ + SO₂ → CaSO₃ + CO₂<br/>(Flue gas desulfurisation — FGD)<br/><br/><strong>Low-sulfur fuels:</strong> Use natural gas or remove sulfur from fuel before burning.<br/><br/><strong>Liming lakes:</strong> Adding CaCO₃ to affected lakes raises pH (neutralises acid), short-term fix.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Acid rain caused by SO₂ (fossil fuel sulfur → H₂SO₄) and NOₓ (combustion → HNO₃). Effects: kills aquatic life, corrodes limestone buildings, damages forests. Solutions: catalytic converters, flue gas desulfurisation, low-sulfur fuels, liming lakes.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Acid rain: SO₂ → H₂SO₄; NOₓ → HNO₃. Kills fish/trees, corrodes limestone. Solutions: catalytic converters, flue gas desulfurisation.',
    cues: [
      { id: 'cue-1', blockId: 'call-causes', prompt: 'State two gases that cause acid rain, their sources, and the acids they form.', answer: 'SO₂ (burning sulfur-containing fossil fuels) → H₂SO₄ (sulfuric acid). NO₂ (high-temperature combustion in engines) → HNO₃ (nitric acid).' },
      { id: 'cue-2', blockId: 'call-effects', prompt: 'Describe how acid rain damages limestone buildings, with an equation.', answer: 'Acid rain (containing H₂SO₄) reacts with calcium carbonate in limestone/marble: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂. The stone dissolves and erodes.' },
      { id: 'cue-3', blockId: 'call-solutions', prompt: 'Explain how a catalytic converter reduces acid rain pollution.', answer: 'The catalytic converter (Pt/Rh catalyst) converts nitrogen monoxide and carbon monoxide to nitrogen and carbon dioxide: 2CO + 2NO → 2CO₂ + N₂. This removes NOₓ before it can form acid rain.' }
    ]
  },
  evidence: [],
  mentions: []
};
