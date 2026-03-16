export const note_olevel_chemistry_9_9_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-3-2-extraction-of-iron-from-hematite.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the extraction of iron from haematite using the blast furnace, including the raw materials, reactions at each zone, and the role of limestone.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Blast Furnace', level: 2 }
    },
    {
      id: 'call-raw',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Raw Materials (fed in at the top)',
        text: '1. <strong>Haematite</strong> (Fe₂O₃) — the iron ore, source of iron<br/>2. <strong>Coke</strong> (impure carbon, C) — fuel and reducing agent<br/>3. <strong>Limestone</strong> (CaCO₃) — removes acidic silica impurities as slag<br/>4. <strong>Hot air</strong> (blast of air) — reacts with coke, provides oxygen<br/><br/>Products:<br/>• <strong>Molten iron</strong> — sinks to bottom and is tapped off<br/>• <strong>Molten slag</strong> (CaSiO₃) — floats above iron, tapped off separately<br/>• <strong>Waste gas</strong> (CO, CO₂, N₂) exhausts from top'
      }
    },
    {
      id: 'svg-blast-furnace',
      type: 'svg',
      data: {
        caption: 'Diagram of a blast furnace for the extraction of iron from haematite.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 400">
    <defs>
        <style>
            .furnace-wall { fill: #95a5a6; stroke: var(--color-text); stroke-width: 3; stroke-linejoin: round; }
            .hot-air { fill: rgba(231, 76, 60, 0.4); stroke: #c0392b; stroke-width: 2; }
            .raw-materials { fill: #34495e; }
            .slag { fill: #f1c40f; stroke: #f39c12; stroke-width: 1; }
            .molten-iron { fill: #d35400; stroke: #c0392b; stroke-width: 1; }
            .label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); }
            .bold { font-weight: bold; }
            .line { stroke: var(--color-text); stroke-width: 1.5; fill: none; }
            .dashed { stroke-dasharray: 4,4; fill: none; stroke: var(--color-text); stroke-width: 1; }
            .temp { font-family: var(--font-mono); font-size: 13px; fill: #e74c3c; text-anchor: end; }
            .gas { fill: #ecf0f1; stroke: #bdc3c7; }
        </style>
    </defs>

    <!-- Furnace Outline -->
    <!-- Left Wall -->
    <path d="M 220 50 L 160 200 L 160 300 L 130 300 L 130 330 L 160 330 L 160 380" class="furnace-wall"/>
    <!-- Right Wall -->
    <path d="M 280 50 L 340 200 L 340 300 L 370 300 L 370 330 L 340 330 L 340 380" class="furnace-wall"/>
    <!-- Bottom Base -->
    <path d="M 160 380 L 340 380" class="furnace-wall"/>
    <!-- Top Hopper Opening -->
    <path d="M 210 20 L 230 50 L 270 50 L 290 20" class="furnace-wall"/>

    <!-- Tap lines / Levels inside (visually) -->
    <!-- We'll just draw the content boxes matching these -->

    <!-- Interior color gradient based on temp -->
    <path d="M 230 50 L 160 200 L 160 330 L 340 330 L 340 200 L 270 50 Z" fill="url(#fire)"/>
    <defs>
        <linearGradient id="fire" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f39c12" stop-opacity="0.1"/>
            <stop offset="100%" stop-color="#e74c3c" stop-opacity="0.4"/>
        </linearGradient>
    </defs>

    <!-- Hot Air Blasts -->
    <polygon points="100,305 130,305 140,315 130,325 100,325" class="hot-air"/>
    <polygon points="400,305 370,305 360,315 370,325 400,325" class="hot-air"/>
    
    <!-- Waste Gas Outlets -->
    <path d="M 220 50 L 180 70 L 180 90 L 205 75 Z" class="gas"/>
    <path d="M 280 50 L 320 70 L 320 90 L 295 75 Z" class="gas"/>

    <!-- Fill contents -->
    <!-- Molten Iron -->
    <rect x="162" y="365" width="176" height="13" class="molten-iron"/>
    <!-- Slag -->
    <rect x="162" y="340" width="176" height="25" class="slag"/>
    <!-- Falling raw materials -->
    <circle cx="250" cy="80" r="5" class="raw-materials"/>
    <circle cx="235" cy="110" r="6" class="raw-materials"/>
    <circle cx="270" cy="100" r="4" class="raw-materials"/>
    <circle cx="255" cy="130" r="5" class="raw-materials"/>
    <circle cx="220" cy="140" r="6" class="raw-materials"/>

    <!-- Labels & Arrows -->
    <!-- Raw Materials Input -->
    <text x="250" y="10" class="label bold" text-anchor="middle">Ore, Coke, Limestone</text>
    <line x1="250" y1="15" x2="250" y2="35" class="line"/>
    <polygon points="247,30 253,30 250,38" fill="var(--color-text)"/>

    <!-- Waste Gases -->
    <text x="80" y="60" class="label">Waste gases</text>
    <text x="90" y="75" class="label">(CO, CO₂, N₂)</text>
    <line x1="180" y1="80" x2="160" y2="80" class="line"/>

    <!-- Zones & Temperatures -->
    <text x="140" y="150" class="temp">~ 600 °C</text>
    <text x="140" y="240" class="temp">~ 1000 °C</text>
    <text x="140" y="300" class="temp" font-weight="bold">~ 1800 °C</text>
    <text x="140" y="330" class="temp" font-weight="bold">~ 1500 °C</text>

    <!-- Hot Air Label -->
    <text x="40" y="320" class="label bold" fill="#e74c3c">Hot Air</text>
    <text x="415" y="320" class="label bold" fill="#e74c3c">Hot Air</text>

    <!-- Slag tap -->
    <text x="400" y="355" class="label">Molten Slag</text>
    <path d="M 338 350 L 380 350" class="dashed"/>

    <!-- Iron tap -->
    <text x="400" y="375" class="label bold" fill="#d35400">Molten Iron</text>
    <path d="M 338 370 L 380 370" class="dashed"/>

    <!-- Main Reaction Pointers -->
    <!-- C + O2 -->
    <text x="250" y="315" class="label" text-anchor="middle">C + O₂ → CO₂</text>
    <!-- CO2 + C -->
    <text x="250" y="260" class="label" text-anchor="middle">CO₂ + C → 2CO</text>
    <!-- Fe2O3 reduced -->
    <text x="250" y="180" class="label" text-anchor="middle">Fe₂O₃ + 3CO → 2Fe + 3CO₂</text>
    <text x="250" y="195" class="label" text-anchor="middle">CaCO₃ → CaO + CO₂</text>
</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Reactions in the Blast Furnace', level: 2 }
    },
    {
      id: 'call-rxns',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Step-by-step reactions',
        text: '<strong>Step 1 — Coke burns (near bottom, hottest zone):</strong><br/>C + O₂ → CO₂<br/><br/><strong>Step 2 — CO₂ reduced to CO (above step 1):</strong><br/>CO₂ + C → 2CO<br/>(carbon monoxide is the main reducing agent)<br/><br/><strong>Step 3 — Iron ore reduced by CO:</strong><br/>Fe₂O₃ + 3CO → 2Fe + 3CO₂<br/>(iron oxide → molten iron; CO → CO₂)<br/><br/><strong>Step 4 — Limestone decomposes:</strong><br/>CaCO₃ → CaO + CO₂ (thermal decomposition)<br/><br/><strong>Step 5 — Slag forms:</strong><br/>CaO + SiO₂ → CaSiO₃ (slag)<br/>(CaO is basic; SiO₂ is acidic impurity from ore → acid-base reaction → slag floats on iron)'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Key exam points',
        text: '• CO is the <strong>reducing agent</strong>, not C directly at the iron-ore stage.<br/>• Limestone is not a fuel — its role is to <strong>remove the acidic silica (SiO₂)</strong> impurity by forming slag (CaSiO₃).<br/>• Iron produced is <strong>pig iron / cast iron</strong> (~4% carbon); it is brittle. Further refining (basic oxygen process) removes excess C to produce steel.<br/>• Slag is used in road-building and cement manufacture.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Blast furnace: haematite + coke + limestone + hot air → molten iron + slag. Key reactions: C + O₂ → CO₂; CO₂ + C → 2CO; Fe₂O₃ + 3CO → 2Fe + 3CO₂; CaCO₃ → CaO + CO₂; CaO + SiO₂ → CaSiO₃ (slag).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Blast furnace: Fe₂O₃ + 3CO → 2Fe + 3CO₂ (main reaction). Limestone removes silica as slag: CaO + SiO₂ → CaSiO₃.',
    cues: [
      { id: 'cue-1', blockId: 'call-rxns', prompt: 'Write the equation for the reduction of iron oxide in the blast furnace.', answer: 'Fe₂O₃ + 3CO → 2Fe + 3CO₂' },
      { id: 'cue-2', blockId: 'call-raw', prompt: 'What is the role of limestone in the blast furnace?', answer: 'Limestone decomposes to form CaO, which reacts with the acidic silica impurity (SiO₂) to form slag (CaSiO₃). This removes the impurity and the slag floats on top of the molten iron.' },
      { id: 'cue-3', blockId: 'call-rxns', prompt: 'How is carbon monoxide (CO) produced in the blast furnace?', answer: 'First, coke burns in the hot air blast: C + O₂ → CO₂. Then CO₂ reacts with more coke in a hotter zone: CO₂ + C → 2CO.' }
    ]
  },
  evidence: [],
  mentions: []
};
