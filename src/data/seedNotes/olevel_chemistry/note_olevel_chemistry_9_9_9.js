export const note_olevel_chemistry_9_9_9 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-3-3-extraction-of-aluminium-from-bauxite.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the extraction of aluminium from bauxite by electrolysis, including the role of cryolite and why the graphite anodes need replacing.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Extraction of Aluminium from Bauxite', level: 2 }
    },
    {
      id: 'call-ore',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Raw Material Processing',
        text: '<strong>Ore:</strong> Bauxite (mainly Al₂O₃ · xH₂O — hydrated aluminium oxide, with impurities)<br/><br/><strong>Purification:</strong> Bauxite is purified to give pure <strong>aluminium oxide (Al₂O₃)</strong> — also called corundum or alumina.<br/><br/><strong>Problem:</strong> Pure Al₂O₃ has a very high melting point (~2072°C) — too expensive to melt directly.<br/><br/><strong>Solution:</strong> Al₂O₃ is dissolved in molten <strong>cryolite (Na₃AlF₆)</strong>, which lowers the melting point to ~950°C, making the process economically viable. Ions can then move freely.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Electrolysis Cell', level: 2 }
    },
    {
      id: 'call-cell',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Reactions in the electrolysis cell',
        text: '<strong>Electrolyte:</strong> Molten Al₂O₃ dissolved in cryolite<br/><strong>Cathode (negative):</strong> Carbon/graphite lining of the cell<br/><strong>Anode (positive):</strong> Carbon/graphite rods<br/><br/><strong>At the cathode:</strong><br/>Al³⁺ + 3e⁻ → Al<br/>Molten aluminium sinks to the bottom and is tapped off.<br/><br/><strong>At the anode:</strong><br/>2O²⁻ → O₂ + 4e⁻<br/>Oxygen gas is produced at the anode.<br/><br/><strong>Why anodes need replacing:</strong> The oxygen produced at the anode reacts with the carbon graphite electrodes:<br/>C + O₂ → CO₂<br/>This oxidises the anodes, which gradually burn away and must be periodically replaced.'
      }
    },
    {
      id: 'svg-al-electrolysis',
      type: 'svg',
      data: {
        caption: 'Electrolysis of molten aluminium oxide dissolved in cryolite.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350">
    <defs>
        <style>
            .steel { fill: rgba(149, 165, 166, 0.4); stroke: var(--color-text); stroke-width: 2; }
            .carbon { fill: #2c3e50; stroke: #1a252f; stroke-width: 2; }
            .electrolyte { fill: #e67e22; opacity: 0.6; stroke: #d35400; }
            .molten-al { fill: #95a5a6; stroke: #7f8c8d; stroke-width: 1; }
            .bubble { fill: #ecf0f1; opacity: 0.8; stroke: #bdc3c7; stroke-width: 1; }
            .label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); }
            .bold { font-weight: bold; }
            .line { stroke: var(--color-text); stroke-width: 1.5; fill: none; }
            .plus { font-family: var(--font-mono); font-size: 16px; fill: #e74c3c; font-weight: bold; }
            .minus { font-family: var(--font-mono); font-size: 16px; fill: #3498db; font-weight: bold; }
        </style>
    </defs>

    <!-- Steel Case -->
    <path d="M 60 80 L 60 300 L 460 300 L 460 160 L 510 160 L 510 140 L 460 140 L 460 80 L 440 80 L 440 280 L 80 280 L 80 80 Z" class="steel"/>

    <!-- Carbon Lining (Cathode) -->
    <path d="M 80 120 L 80 280 L 440 280 L 440 120 L 425 120 L 425 265 L 95 265 L 95 120 Z" class="carbon"/>
    <text x="35" y="200" class="label" text-anchor="end">Negative</text>
    <text x="35" y="220" class="label" text-anchor="end">Cathode</text>
    <line x1="80" y1="210" x2="40" y2="210" class="line"/>

    <!-- Molten Aluminium -->
    <path d="M 95 240 L 95 265 L 425 265 L 425 240 C 370 235, 200 230, 95 240 Z" class="molten-al"/>
    
    <!-- Tap for molten Al -->
    <path d="M 440 250 L 520 250 M 440 265 L 520 265" class="line"/>
    <path d="M 460 251 L 510 251 L 510 264 L 460 264 Z" fill="#95a5a6"/>
    <text x="535" y="253" class="label">Molten</text>
    <text x="535" y="268" class="label">aluminium</text>

    <!-- Electrolyte (Al2O3 in Cryolite) -->
    <path d="M 95 170 L 95 240 C 200 230, 370 235, 425 240 L 425 170 Z" class="electrolyte"/>
    <text x="120" y="220" class="label bold">Molten electrolyte</text>
    <text x="120" y="235" class="label">(Al₂O₃ + cryolite)</text>

    <!-- Carbon Anodes (+) -->
    <rect x="150" y="90" width="40" height="90" class="carbon"/>
    <rect x="240" y="90" width="40" height="90" class="carbon"/>
    <rect x="330" y="90" width="40" height="90" class="carbon"/>
    
    <!-- Power Bar -->
    <rect x="120" y="55" width="280" height="15" fill="#7f8c8d"/>
    <rect x="165" y="70" width="10" height="20" fill="#7f8c8d"/>
    <rect x="255" y="70" width="10" height="20" fill="#7f8c8d"/>
    <rect x="345" y="70" width="10" height="20" fill="#7f8c8d"/>
    
    <text x="260" y="45" class="label bold" text-anchor="middle">Positive Anodes (+)</text>
    <text x="260" y="125" class="label" text-anchor="middle" fill="#fff">Carbon</text>
    
    <!-- Gas Outlet (O2 / CO2) -->
    <text x="535" y="100" class="label">Waste gases</text>
    <text x="535" y="115" class="label">(CO₂ and O₂)</text>
    <path d="M 440 90 L 520 90 M 440 120 L 520 120" class="line"/>

    <!-- Bubbles -->
    <circle cx="170" cy="175" r="4" class="bubble"/>
    <circle cx="180" cy="170" r="3" class="bubble"/>
    <circle cx="260" cy="175" r="5" class="bubble"/>
    <circle cx="270" cy="168" r="3" class="bubble"/>
    <circle cx="350" cy="172" r="4" class="bubble"/>

    <!-- Reaction Callouts -->
    <text x="100" y="315" class="label bold">Cathode (lining):</text>
    <text x="100" y="330" class="label">Al³⁺ + 3e⁻ → Al(l)</text>
    
    <text x="330" y="315" class="label bold">Anodes:</text>
    <text x="330" y="330" class="label">2O²⁻ → O₂(g) + 4e⁻</text>

    <!-- Wire markings -->
    <text x="100" y="65" class="plus">+</text>
    <text x="65" y="275" class="minus">−</text>
</svg>`
      }
    },
    {
      id: 'call-cost',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'High Energy Cost',
        text: 'Aluminium extraction is very expensive because:<br/>1. Large amounts of electrical energy are required for electrolysis.<br/>2. The cell must be kept at ~950°C continuously — high heat energy needed.<br/>3. Graphite anodes must be regularly replaced.<br/><br/>This is why <strong>recycling aluminium</strong> is economical — recycling uses only ~5% of the energy of primary extraction.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Al extracted from bauxite (Al₂O₃). Al₂O₃ dissolved in cryolite (lowers m.p. to ~950°C). Electrolysis: cathode → Al³⁺ + 3e⁻ → Al; anode → 2O²⁻ → O₂ + 4e⁻. Carbon anodes burn in O₂ and must be replaced. Very energy intensive.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Bauxite purified to Al₂O₃, dissolved in cryolite (lowers m.p.). Electrolysis: Al deposited at cathode; O₂ at anode burns electrodes → replaced regularly.',
    cues: [
      { id: 'cue-1', blockId: 'call-ore', prompt: 'What is the role of cryolite in the extraction of aluminium?', answer: 'Cryolite lowers the melting point of aluminium oxide from ~2072°C to ~950°C, making the process economically viable and allowing ions to move freely for electrolysis.' },
      { id: 'cue-2', blockId: 'call-cell', prompt: 'Write the electrode equations for the electrolysis of aluminium oxide.', answer: 'Cathode: Al³⁺ + 3e⁻ → Al. Anode: 2O²⁻ → O₂ + 4e⁻' },
      { id: 'cue-3', blockId: 'call-cell', prompt: 'Why do the graphite anodes need to be replaced regularly?', answer: 'Oxygen produced at the anodes reacts with the carbon graphite (C + O₂ → CO₂), burning the anodes away. They must be periodically replaced.' }
    ]
  },
  evidence: [],
  mentions: []
};
