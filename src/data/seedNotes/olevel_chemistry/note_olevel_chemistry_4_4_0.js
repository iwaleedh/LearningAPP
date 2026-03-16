export const note_olevel_chemistry_4_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/4 Electrochemistry/4-1-1-electrolysis-principles.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe electrolysis as the decomposition of an ionic compound by passing electricity through it when molten or in aqueous solution.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Electrolysis — Key Terms', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definitions',
        text: '<strong>Electrolysis:</strong> decomposition of an ionic compound (electrolyte) by passing direct current (DC) through it when molten or in aqueous solution<br/><br/><strong>Electrolyte:</strong> ionic compound that conducts electricity when molten or dissolved in water<br/><br/><strong>Electrode:</strong> conductor through which electricity enters/leaves the electrolyte<br/><strong>• Anode:</strong> positive electrode (+) — anions are attracted here; oxidation occurs<br/><strong>• Cathode:</strong> negative electrode (−) — cations are attracted here; reduction occurs'
      }
    },
    {
      id: 'call-mnemonic',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Mnemonic: OIL RIG at the electrodes',
        text: '<strong>Oxidation Is Loss (of electrons) → occurs at Anode</strong><br/><strong>Reduction Is Gain (of electrons) → occurs at Cathode</strong><br/><br/>Anions (−) → attracted to Anode (+) → lose electrons (oxidised)<br/>Cations (+) → attracted to Cathode (−) → gain electrons (reduced)<br/><br/>Memory: <strong>AN OX, RED CAT</strong> (Anode Oxidation, Reduction Cathode)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'How Electrolysis Works', level: 2 }
    },
    {
      id: 'call-how',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Electrolysis Process',
        text: '1. Ions are free to move when compound is <strong>molten</strong> or <strong>dissolved</strong><br/>2. DC current applied — anode (+) and cathode (−) connected to battery<br/>3. <strong>Cations</strong> (+ ions) migrate to the <strong>cathode</strong> (−), gain electrons → reduced<br/>4. <strong>Anions</strong> (− ions) migrate to the <strong>anode</strong> (+), lose electrons → oxidised<br/><br/>Products are deposited at or given off at the electrodes.'
      }
    },
    {
      id: 'svg-electrolysis-cell',
      type: 'svg',
      data: {
        caption: 'A basic electrolytic cell showing ion migration: Opposites attract.',
        svg: `<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Battery / DC Source -->
    <linearGradient id="battery" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#475569" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    
    <!-- Cation / Anion -->
    <radialGradient id="cation" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </radialGradient>
    <radialGradient id="anion" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fca5a5" />
      <stop offset="100%" stop-color="#ef4444" />
    </radialGradient>
    
    <!-- Liquid -->
    <linearGradient id="liquid" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#e0f2fe" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#bae6fd" stop-opacity="0.8"/>
    </linearGradient>
    
    <!-- Wires -->
    <linearGradient id="wire" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9ca3af" />
      <stop offset="100%" stop-color="#6b7280" />
    </linearGradient>
    
    <marker id="arrow-blue" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="#0284c7"/>
    </marker>
    <marker id="arrow-red" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="#ef4444"/>
    </marker>
  </defs>

  <!-- Title -->
  <text x="250" y="20" font-family="var(--font-sans)" font-size="18" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Electrolysis Setup</text>

  <!-- Battery -->
  <rect x="200" y="40" width="100" height="40" rx="4" fill="url(#battery)"/>
  <text x="250" y="65" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">DC Source</text>
  
  <text x="215" y="32" font-family="var(--font-sans)" font-size="18" font-weight="bold" fill="#ef4444" text-anchor="middle">+</text>
  <text x="285" y="32" font-family="var(--font-sans)" font-size="24" font-weight="bold" fill="#38bdf8" text-anchor="middle">-</text>

  <!-- Wires -->
  <path d="M 215 40 L 215 30 L 120 30 L 120 120" stroke="url(#wire)" stroke-width="4" fill="none"/>
  <path d="M 285 40 L 285 30 L 380 30 L 380 120" stroke="url(#wire)" stroke-width="4" fill="none"/>

  <!-- Beaker -->
  <path d="M 70 120 L 70 300 A 20 20 0 0 0 90 320 L 410 320 A 20 20 0 0 0 430 300 L 430 120" fill="none" stroke="var(--color-border)" stroke-width="4"/>
  
  <!-- Liquid Electrolyte -->
  <path d="M 72 160 L 72 300 A 18 18 0 0 0 90 318 L 410 318 A 18 18 0 0 0 428 300 L 428 160 Z" fill="url(#liquid)"/>
  <text x="250" y="305" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text-secondary)" text-anchor="middle">Molten or Aqueous Electrolyte</text>

  <!-- Electrodes -->
  <!-- Anode (+) -->
  <rect x="100" y="100" width="40" height="180" rx="4" fill="#475569"/>
  <text x="120" y="90" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">Anode (+)</text>
  <text x="120" y="270" font-family="var(--font-sans)" font-size="20" font-weight="bold" fill="#fca5a5" text-anchor="middle">+</text>

  <!-- Cathode (-) -->
  <rect x="360" y="100" width="40" height="180" rx="4" fill="#475569"/>
  <text x="380" y="90" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#38bdf8" text-anchor="middle">Cathode (-)</text>
  <text x="380" y="270" font-family="var(--font-sans)" font-size="24" font-weight="bold" fill="#bae6fd" text-anchor="middle">-</text>

  <!-- Ions migrating -->
  <!-- Anion moving left to Anode -->
  <circle cx="230" cy="200" r="16" fill="url(#anion)"/>
  <text x="230" y="205" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">-</text>
  <path d="M 205 200 L 155 200" stroke="#ef4444" stroke-width="2" fill="none" marker-end="url(#arrow-red)" stroke-dasharray="4,4">
    <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite"/>
  </path>
  <text x="230" y="235" font-family="var(--font-sans)" font-size="12" fill="#ef4444" text-anchor="middle">Anions (-)</text>

  <!-- Cation moving right to Cathode -->
  <circle cx="270" cy="150" r="16" fill="url(#cation)"/>
  <text x="270" y="155" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">+</text>
  <path d="M 295 150 L 345 150" stroke="#0284c7" stroke-width="2" fill="none" marker-end="url(#arrow-blue)" stroke-dasharray="4,4">
    <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite"/>
  </path>
  <text x="270" y="185" font-family="var(--font-sans)" font-size="12" fill="#0284c7" text-anchor="middle">Cations (+)</text>

  <!-- Oil Rig notes near electrodes -->
  <!-- Left Side: Anode -->
  <rect x="25" y="140" width="60" height="40" rx="4" fill="#fee2e2" stroke="#f87171" stroke-width="1"/>
  <text x="55" y="158" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">Loses e⁻</text>
  <text x="55" y="172" font-family="var(--font-sans)" font-size="10" fill="#b91c1c" text-anchor="middle">(Oxidation)</text>

  <!-- Right Side: Cathode -->
  <rect x="415" y="140" width="60" height="40" rx="4" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1"/>
  <text x="445" y="158" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Gains e⁻</text>
  <text x="445" y="172" font-family="var(--font-sans)" font-size="10" fill="#0369a1" text-anchor="middle">(Reduction)</text>

</svg>`
      }
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of electrode processes',
        headers: ['Electrode', 'Charge', 'Ion attracted', 'Process', 'Reaction type'],
        rows: [
          ['Cathode', 'Negative (−)', 'Cations (+)', 'Gain electrons', 'Reduction'],
          ['Anode', 'Positive (+)', 'Anions (−)', 'Lose electrons', 'Oxidation']
        ]
      }
    },
    {
      id: 'call-conditions',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Conditions Required for Electrolysis',
        text: 'The electrolyte must be in a state where ions can move freely:<br/>• <strong>Molten</strong> ionic compound (solid → heated until liquid)<br/>• <strong>Aqueous solution</strong> (dissolved in water)<br/><br/><strong>Solid ionic compounds CANNOT be electrolysed</strong> — ions are fixed in the lattice and cannot move.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Electrolysis uses DC to decompose an electrolyte (molten or aqueous). Cations → cathode (gain e⁻, reduced). Anions → anode (lose e⁻, oxidised). AN OX, RED CAT.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Electrolysis decomposes ionic compounds with DC. Cathode: cations gain electrons (reduction). Anode: anions lose electrons (oxidation). AN OX, RED CAT.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'Define electrolysis.', answer: 'Decomposition of an ionic compound (electrolyte) by passing direct current (DC) through it when molten or in aqueous solution.' },
      { id: 'cue-2', blockId: 'call-def', prompt: 'What is an electrolyte?', answer: 'An ionic compound that conducts electricity when molten or dissolved in water (because it has free-moving ions).' },
      { id: 'cue-3', blockId: 'tbl-compare', prompt: 'What process occurs at the cathode and anode during electrolysis?', answer: 'Cathode (−): cations gain electrons — reduction. Anode (+): anions lose electrons — oxidation. AN OX RED CAT.' },
      { id: 'cue-4', blockId: 'call-conditions', prompt: 'Why can\'t a solid ionic compound be electrolysed?', answer: 'In the solid state, ions are fixed in the lattice and cannot move — so they cannot carry charge to the electrodes.' }
    ]
  },
  evidence: [],
  mentions: []
};
