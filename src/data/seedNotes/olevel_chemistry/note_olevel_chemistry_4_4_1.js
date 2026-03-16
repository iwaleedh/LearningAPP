export const note_olevel_chemistry_4_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/4 Electrochemistry/4-1-2-electrolysis-of-molten-compounds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Predict and explain the products of electrolysis of molten ionic compounds.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Electrolysis of Molten Compounds', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Predicting Products: Molten Compounds',
        text: 'When a <strong>pure molten</strong> ionic compound is electrolysed, only the ions from that compound are present — so there is no competition for discharge.<br/><br/><strong>At the cathode (−):</strong> the metal cation is reduced to form the metal<br/><strong>At the anode (+):</strong> the non-metal anion is oxidised to form the non-metal element'
      }
    },
    {
      id: 'tbl-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Products of electrolysis of molten compounds',
        headers: ['Compound', 'Ions present', 'Cathode product', 'Anode product'],
        rows: [
          ['Lead(II) bromide (PbBr₂)', 'Pb²⁺, Br⁻', 'Lead metal (Pb)', 'Bromine gas (Br₂)'],
          ['Sodium chloride (NaCl)', 'Na⁺, Cl⁻', 'Sodium metal (Na)', 'Chlorine gas (Cl₂)'],
          ['Aluminium oxide (Al₂O₃)', 'Al³⁺, O²⁻', 'Aluminium metal (Al)', 'Oxygen gas (O₂)'],
          ['Calcium chloride (CaCl₂)', 'Ca²⁺, Cl⁻', 'Calcium metal (Ca)', 'Chlorine gas (Cl₂)'],
          ['Copper(II) chloride (CuCl₂)', 'Cu²⁺, Cl⁻', 'Copper metal (Cu)', 'Chlorine gas (Cl₂)']
        ]
      }
    },
    {
      id: 'svg-molten-pbbr2',
      type: 'svg',
      data: {
        caption: 'Electrolysis of molten Lead(II) bromide (PbBr₂). Heating is required to keep it molten.',
        svg: `<svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Liquid Gradient -->
    <linearGradient id="molten" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#facc15" stop-opacity="0.9"/>
    </linearGradient>
    
    <!-- Bromine Gas Gradient -->
    <radialGradient id="br-gas" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ea580c" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#9a3412" stop-opacity="0.0"/>
    </radialGradient>

    <!-- Flame Gradient -->
    <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="50%" stop-color="#f97316" />
      <stop offset="100%" stop-color="#fcd34d" />
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Heat source (Bunsen Burner) -->
  <rect x="235" y="320" width="30" height="40" fill="#64748b" />
  <path d="M 230 320 C 250 280 270 320 270 320 Z" fill="url(#flameGrad)" />
  <text x="250" y="375" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">HEAT</text>

  <!-- Crucible / Beaker -->
  <path d="M 120 180 L 140 300 C 150 320 350 320 360 300 L 380 180 Z" fill="none" stroke="var(--color-border)" stroke-width="4" />
  <path d="M 130 220 L 142 298 C 150 316 350 316 358 298 L 370 220 Z" fill="url(#molten)" />
  <text x="250" y="270" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#854d0e" text-anchor="middle">Molten PbBr₂ (Pb²⁺ and Br⁻)</text>

  <!-- Circuit (Battery and Wires) -->
  <rect x="210" y="50" width="80" height="30" rx="4" fill="#1e293b" />
  <text x="250" y="70" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">Battery</text>
  <text x="220" y="44" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">+</text>
  <text x="280" y="44" font-family="var(--font-sans)" font-size="18" font-weight="bold" fill="#38bdf8" text-anchor="middle">-</text>
  
  <path d="M 210 65 L 160 65 L 160 140" stroke="var(--color-border)" stroke-width="3" fill="none" />
  <path d="M 290 65 L 340 65 L 340 140" stroke="var(--color-border)" stroke-width="3" fill="none" />

  <!-- Electrodes (Graphite) -->
  <rect x="150" y="140" width="20" height="150" fill="#334155" />
  <rect x="330" y="140" width="20" height="150" fill="#334155" />
  
  <!-- Labels -->
  <text x="100" y="130" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">Anode (+)</text>
  <text x="400" y="130" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">Cathode (-)</text>

  <!-- Observations at Anode (+) -->
  <!-- Bromine Gas bubbles -->
  <circle cx="160" cy="220" r="15" fill="url(#br-gas)" />
  <circle cx="150" cy="200" r="20" fill="url(#br-gas)" />
  <circle cx="170" cy="180" r="18" fill="url(#br-gas)" />
  <circle cx="155" cy="160" r="25" fill="url(#br-gas)" />
  <circle cx="160" cy="140" r="30" fill="url(#br-gas)" />
  
  <line x1="80" y1="180" x2="140" y2="180" stroke="var(--color-text-secondary)" stroke-width="1" stroke-dasharray="2,2" />
  <text x="75" y="176" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#c2410c" text-anchor="end">Brown Br₂</text>
  <text x="75" y="192" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#c2410c" text-anchor="end">gas bubbles</text>
  <text x="75" y="210" font-family="var(--font-sans)" font-size="10" fill="var(--color-text-secondary)" text-anchor="end">2Br⁻ → Br₂ + 2e⁻</text>

  <!-- Observations at Cathode (-) -->
  <!-- Lead metal puddle / bead -->
  <ellipse cx="340" cy="295" rx="15" ry="6" fill="#94a3b8" stroke="#475569" stroke-width="2" />
  
  <line x1="420" y1="295" x2="360" y2="295" stroke="var(--color-text-secondary)" stroke-width="1" stroke-dasharray="2,2" />
  <text x="425" y="285" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#475569" text-anchor="start">Molten silvery</text>
  <text x="425" y="301" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#475569" text-anchor="start">lead metal (Pb)</text>
  <text x="425" y="319" font-family="var(--font-sans)" font-size="10" fill="var(--color-text-secondary)" text-anchor="start">Pb²⁺ + 2e⁻ → Pb</text>

  <!-- Title / Helper -->
  <rect x="150" y="5" width="200" height="24" rx="4" fill="var(--color-primary-50)" />
  <text x="250" y="22" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-primary)" text-anchor="middle">Electrolysis of Molten PbBr₂</text>

</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Half Equations at Each Electrode', level: 2 }
    },
    {
      id: 'call-half',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Writing Half Equations',
        text: '<strong>At the cathode (reduction):</strong><br/>Pb²⁺ + 2e⁻ → Pb<br/>Na⁺ + e⁻ → Na<br/>Al³⁺ + 3e⁻ → Al<br/><br/><strong>At the anode (oxidation):</strong><br/>2Br⁻ → Br₂ + 2e⁻<br/>2Cl⁻ → Cl₂ + 2e⁻<br/>2O²⁻ → O₂ + 4e⁻'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Electrolysis of molten PbBr₂',
        text: 'Molten lead(II) bromide (PbBr₂) is electrolysed.<br/><br/>Ions present: Pb²⁺ and Br⁻<br/><br/>Cathode: Pb²⁺ + 2e⁻ → Pb (liquid lead metal deposits)<br/>Anode: 2Br⁻ → Br₂ + 2e⁻ (brown bromine gas evolved)'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For molten compounds, name the products clearly: at the cathode you get the metal; at the anode you get the non-metal element (as a gas if diatomic). If asked to observe: cathode — metal deposited; anode — gas bubbles. Don\'t confuse "molten" with "aqueous" — different products result!'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Molten ionic compound → cathode produces the metal; anode produces the non-metal element. Write half equations showing electron transfer: cations gain e⁻ at cathode, anions lose e⁻ at anode.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Molten compound: cathode → metal (Pb²⁺+2e⁻→Pb); anode → non-metal gas (2Cl⁻→Cl₂+2e⁻).',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'What products form at each electrode when molten lead(II) bromide is electrolysed?', answer: 'Cathode: lead metal (Pb²⁺ + 2e⁻ → Pb). Anode: bromine gas (2Br⁻ → Br₂ + 2e⁻).' },
      { id: 'cue-2', blockId: 'call-half', prompt: 'Write the half equation for the reduction of Al³⁺ at the cathode.', answer: 'Al³⁺ + 3e⁻ → Al' },
      { id: 'cue-3', blockId: 'call-half', prompt: 'Write the half equation for the oxidation of chloride ions at the anode.', answer: '2Cl⁻ → Cl₂ + 2e⁻' }
    ]
  },
  evidence: [],
  mentions: []
};
