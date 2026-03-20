export const note_olevel_chemistry_4_4_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/4 Electrochemistry/4-1-3-electrolysis-of-aqueous-sodium-chloride-and-dilute-sulfuric-acid.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Predict and explain the products of electrolysis of aqueous sodium chloride and dilute sulfuric acid.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Electrolysis of Aqueous Solutions — Competing Ions', level: 2 }
    },
    {
      id: 'call-water',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Water Ions in Aqueous Solutions',
        text: 'In aqueous solution, water also dissociates slightly:<br/>H₂O ⇌ H⁺ + OH⁻<br/><br/>This means <strong>aqueous solutions always contain H⁺ and OH⁻ ions</strong> in addition to the ions from the dissolved compound.<br/><br/>At each electrode, <strong>competition</strong> occurs between ions. Which ion is discharged depends on:<br/>• Concentration of ions<br/>• Position in the electrochemical series'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Electrolysis of Brine (Aqueous NaCl)', level: 2 }
    },
    {
      id: 'call-brine',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Ions in Brine',
        text: 'Brine (concentrated NaCl solution) contains: Na⁺, Cl⁻, H⁺, OH⁻<br/><br/><strong>Cathode (−):</strong> H⁺ and Na⁺ compete<br/>H⁺ is preferentially discharged (closer to end of electrochemical series; lower position)<br/>→ <strong>Hydrogen gas (H₂)</strong> evolved<br/>Half equation: 2H⁺ + 2e⁻ → H₂<br/><br/><strong>Anode (+):</strong> Cl⁻ and OH⁻ compete<br/>Cl⁻ is preferentially discharged (high concentration)<br/>→ <strong>Chlorine gas (Cl₂)</strong> evolved<br/>Half equation: 2Cl⁻ → Cl₂ + 2e⁻<br/><br/><strong>Remaining solution:</strong> Na⁺ and OH⁻ → forms NaOH (a useful alkali)'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Electrolysis of Dilute Sulfuric Acid (H₂SO₄)', level: 2 }
    },
    {
      id: 'call-h2so4',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Ions in Dilute H₂SO₄',
        text: 'Dilute H₂SO₄ contains: H⁺, SO₄²⁻, OH⁻ (from water)<br/><br/><strong>Cathode (−):</strong> H⁺ is discharged<br/>→ <strong>Hydrogen gas (H₂)</strong><br/>2H⁺ + 2e⁻ → H₂<br/><br/><strong>Anode (+):</strong> OH⁻ is discharged (SO₄²⁻ is very difficult to discharge)<br/>→ <strong>Oxygen gas (O₂)</strong><br/>4OH⁻ → O₂ + 2H₂O + 4e⁻<br/><br/><strong>Ratio of gases:</strong> H₂ : O₂ = 2 : 1 (by volume)<br/>The cathode produces twice as much gas as the anode.'
      }
    },
    {
      id: 'svg-hofmann',
      type: 'svg',
      data: {
        caption: 'Hofmann Voltameter showing the 2:1 volume ratio of Hydrogen to Oxygen when electrolysing dilute H₂SO₄.',
        svg: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Liquid Gradient -->
    <linearGradient id="acid" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#bae6fd" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.6"/>
    </linearGradient>

    <!-- Gas space gradient -->
    <linearGradient id="gas" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#f1f5f9" stop-opacity="0.9"/>
    </linearGradient>
  </defs>

  <!-- Voltameter Glassware -->
  <!-- Middle tube (reservoir) -->
  <path d="M 235 60 L 235 280 A 15 15 0 0 0 250 295 A 15 15 0 0 0 265 280 L 265 60" fill="none" stroke="var(--color-border)" stroke-width="4"/>
  <ellipse cx="250" cy="50" rx="30" ry="10" fill="none" stroke="var(--color-border)" stroke-width="3"/>
  <path d="M 220 50 L 235 60 M 280 50 L 265 60" stroke="var(--color-border)" stroke-width="3"/>

  <!-- Left tube (Cathode - H2) -->
  <path d="M 160 100 L 160 320 A 15 15 0 0 0 175 335 A 15 15 0 0 0 190 320 L 190 100" fill="none" stroke="var(--color-border)" stroke-width="4"/>
  <path d="M 160 100 C 160 85 190 85 190 100 Z" fill="none" stroke="var(--color-border)" stroke-width="3"/> <!-- Tap -->
  <line x1="150" y1="90" x2="200" y2="90" stroke="#475569" stroke-width="4"/>
  <!-- Connecting pipe left to middle -->
  <path d="M 190 280 L 235 280" fill="none" stroke="var(--color-border)" stroke-width="4"/>

  <!-- Right tube (Anode - O2) -->
  <path d="M 310 100 L 310 320 A 15 15 0 0 0 325 335 A 15 15 0 0 0 340 320 L 340 100" fill="none" stroke="var(--color-border)" stroke-width="4"/>
  <path d="M 310 100 C 310 85 340 85 340 100 Z" fill="none" stroke="var(--color-border)" stroke-width="3"/> <!-- Tap -->
  <line x1="300" y1="90" x2="350" y2="90" stroke="#475569" stroke-width="4"/>
  <!-- Connecting pipe middle to right -->
  <path d="M 265 280 L 310 280" fill="none" stroke="var(--color-border)" stroke-width="4"/>

  <!-- Openings in glass connecting points -->
  <rect x="188" y="278" width="4" height="4" fill="var(--color-surface)"/>
  <line x1="190" y1="278" x2="235" y2="278" stroke="var(--color-border)" stroke-width="0"/>
  
  <!-- Fill Liquid (Middle tube higher because gas displaced it) -->
  <!-- Middle tube liquid -->
  <path d="M 237 80 L 237 280 L 263 280 L 263 80 Z" fill="url(#acid)"/>
  <path d="M 237 280 L 190 280 L 190 285 L 265 285 L 265 280 Z" fill="url(#acid)"/>
  <path d="M 265 280 L 310 280 L 310 285 L 265 285 Z" fill="url(#acid)"/>

  <!-- Left tube liquid (Lower level because H2 volume is 2x) -->
  <path d="M 162 200 L 162 333 A 13 13 0 0 0 188 333 L 188 200 Z" fill="url(#acid)"/>
  
  <!-- Right tube liquid (Higher level because O2 volume is 1x) -->
  <path d="M 312 150 L 312 333 A 13 13 0 0 0 338 333 L 338 150 Z" fill="url(#acid)"/>

  <!-- Bubbles (H2) -->
  <circle cx="175" cy="195" r="3" fill="#1e293b" opacity="0.8"/>
  <circle cx="170" cy="210" r="4" fill="#1e293b" opacity="0.8"/>
  <circle cx="180" cy="225" r="3" fill="#1e293b" opacity="0.8"/>
  <circle cx="172" cy="245" r="5" fill="#1e293b" opacity="0.8"/>
  <circle cx="178" cy="265" r="4" fill="#1e293b" opacity="0.8"/>
  <circle cx="175" cy="285" r="5" fill="#1e293b" opacity="0.8"/>

  <!-- Bubbles (O2) -->
  <circle cx="325" cy="155" r="3" fill="#1e293b" opacity="0.8"/>
  <circle cx="320" cy="180" r="4" fill="#1e293b" opacity="0.8"/>
  <circle cx="330" cy="210" r="3" fill="#1e293b" opacity="0.8"/>
  <circle cx="322" cy="240" r="4" fill="#1e293b" opacity="0.8"/>
  <circle cx="328" cy="270" r="5" fill="#1e293b" opacity="0.8"/>

  <!-- Empty Gas spaces -->
  <rect x="162" y="100" width="26" height="100" fill="url(#gas)"/>
  <rect x="312" y="100" width="26" height="50" fill="url(#gas)"/>

  <!-- Volumes annotations -->
  <!-- H2 Volume (2V) -->
  <path d="M 140 100 L 130 100 M 135 100 L 135 200 M 140 200 L 130 200" stroke="var(--color-primary)" stroke-width="2" fill="none"/>
  <text x="120" y="155" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-primary)" text-anchor="end">2 Volumes</text>
  
  <!-- O2 Volume (1V) -->
  <path d="M 360 100 L 370 100 M 365 100 L 365 150 M 360 150 L 370 150" stroke="var(--color-primary)" stroke-width="2" fill="none"/>
  <text x="380" y="130" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-primary)" text-anchor="start">1 Volume</text>

  <!-- Electrodes (Platinum/Carbon) inserted at bottom -->
  <!-- Cathode (-) -->
  <rect x="170" y="280" width="10" height="55" fill="#334155"/>
  <rect x="172" y="335" width="6" height="20" fill="#9ca3af"/> <!-- Seal -->
  <!-- Wire -->
  <path d="M 175 355 L 175 380 L 220 380" stroke="#1e293b" stroke-width="2" fill="none"/>
  
  <!-- Anode (+) -->
  <rect x="320" y="280" width="10" height="55" fill="#334155"/>
  <rect x="322" y="335" width="6" height="20" fill="#9ca3af"/> <!-- Seal -->
  <!-- Wire -->
  <path d="M 325 355 L 325 380 L 280 380" stroke="#1e293b" stroke-width="2" fill="none"/>

  <!-- Battery Source symbol -->
  <text x="250" y="385" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">DC Power</text>

  <!-- Gas labels at top -->
  <text x="175" y="75" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#0369a1" text-anchor="middle">H₂ Gas</text>
  <text x="175" y="55" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="#0ea5e9" text-anchor="middle">Cathode (-)</text>

  <text x="325" y="75" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#be123c" text-anchor="middle">O₂ Gas</text>
  <text x="325" y="55" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="#f43f5e" text-anchor="middle">Anode (+)</text>

  <text x="250" y="15" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Electrolysis of Dilute H₂SO₄</text>

</svg>`
      }
    },
    {
      id: 'tbl-summary',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of products',
        headers: ['Electrolyte', 'Cathode product', 'Anode product', 'Notes'],
        rows: [
          ['Brine (concentrated NaCl)', 'Hydrogen (H₂)', 'Chlorine (Cl₂)', 'NaOH remains in solution'],
          ['Dilute H₂SO₄', 'Hydrogen (H₂)', 'Oxygen (O₂)', 'H₂:O₂ = 2:1 by volume']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Uses of products from brine electrolysis:<br/>• Chlorine → disinfecting water, making bleach and PVC<br/>• Hydrogen → making ammonia (Haber process), fuel<br/>• Sodium hydroxide → making soap, paper, cleaning products<br/><br/>For dilute H₂SO₄: remember the 2:1 volume ratio of H₂ to O₂. If asked why SO₄²⁻ is not discharged: "sulfate ions are very difficult to oxidise; OH⁻ is preferentially discharged."'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Brine: H₂ at cathode, Cl₂ at anode, NaOH remains. Dilute H₂SO₄: H₂ at cathode (2vol), O₂ at anode (1vol). In aqueous solutions, H⁺ and OH⁻ from water compete with other ions.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Brine: H₂ cathode, Cl₂ anode, NaOH remains. H₂SO₄: H₂ cathode, O₂ anode (2:1 volume ratio).',
    cues: [
      { id: 'cue-1', blockId: 'call-brine', prompt: 'State the products of electrolysis of concentrated NaCl solution.', answer: 'Cathode: hydrogen gas. Anode: chlorine gas. Remaining solution: sodium hydroxide (NaOH).' },
      { id: 'cue-2', blockId: 'call-h2so4', prompt: 'In dilute H₂SO₄ electrolysis, what is produced at each electrode and in what ratio?', answer: 'Cathode: hydrogen gas; Anode: oxygen gas. Volume ratio H₂:O₂ = 2:1.' },
      { id: 'cue-3', blockId: 'call-water', prompt: 'Why do aqueous solutions produce different products from molten compounds in electrolysis?', answer: 'Aqueous solutions also contain H⁺ and OH⁻ ions from water, which compete with the other ions for discharge at the electrodes.' }
    ]
  },
  evidence: [],
  mentions: []
};
