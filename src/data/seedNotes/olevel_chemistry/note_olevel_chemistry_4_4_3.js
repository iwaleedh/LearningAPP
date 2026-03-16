export const note_olevel_chemistry_4_4_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/4 Electrochemistry/4-1-4-electrolysis-of-aqueous-solutions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Predict the products of electrolysis of aqueous solutions using the rules for selective discharge.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Selective Discharge of Ions', level: 2 }
    },
    {
      id: 'call-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rules for Selective Discharge',
        text: '<strong>At the cathode (−):</strong><br/>If a metal lower than hydrogen in the reactivity series is present → that metal is deposited<br/>e.g. Cu²⁺, Ag⁺, Pb²⁺ → metal deposited<br/><br/>If only metals above hydrogen (Na, Mg, Al, Zn, Fe, etc.) → H₂ gas formed instead<br/>H⁺/H₂O + 2e⁻ → H₂<br/><br/><strong>At the anode (+):</strong><br/>If halide ions (Cl⁻, Br⁻, I⁻) are present in <strong>high concentration</strong> → halogen gas formed<br/>2Cl⁻ → Cl₂ + 2e⁻<br/><br/>If no halide ions (or dilute) → OH⁻ from water is discharged<br/>4OH⁻ → O₂ + 2H₂O + 4e⁻'
      }
    },
    {
      id: 'tbl-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Products of electrolysis of common aqueous solutions',
        headers: ['Solution', 'Cathode product', 'Anode product'],
        rows: [
          ['CuSO₄ (copper sulfate)', 'Copper metal (Cu)', 'Oxygen (O₂)'],
          ['CuCl₂ (copper chloride, conc.)', 'Copper metal (Cu)', 'Chlorine (Cl₂)'],
          ['Dilute NaCl', 'Hydrogen (H₂)', 'Oxygen (O₂)'],
          ['Concentrated NaCl (brine)', 'Hydrogen (H₂)', 'Chlorine (Cl₂)'],
          ['AgNO₃ (silver nitrate)', 'Silver metal (Ag)', 'Oxygen (O₂)'],
          ['H₂SO₄ (dilute)', 'Hydrogen (H₂)', 'Oxygen (O₂)'],
          ['ZnSO₄', 'Hydrogen (H₂)', 'Oxygen (O₂)']
        ]
      }
    },
    {
      id: 'call-CuSO4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: CuSO₄ solution',
        text: 'Electrolysis of copper(II) sulfate solution (CuSO₄)<br/>Ions: Cu²⁺, SO₄²⁻, H⁺, OH⁻<br/><br/><strong>Cathode:</strong> Cu²⁺ or H⁺? Cu²⁺ is below H in reactivity → copper deposited<br/>Cu²⁺ + 2e⁻ → Cu (pink/orange copper coating)<br/><br/><strong>Anode:</strong> SO₄²⁻ or OH⁻? No halide ion, SO₄²⁻ hard to oxidise → OH⁻ discharged<br/>4OH⁻ → O₂ + 2H₂O + 4e⁻ (oxygen gas given off)<br/><br/>The solution becomes more acidic as OH⁻ is used up.'
      }
    },
    {
      id: 'svg-cuso4-inert',
      type: 'svg',
      data: {
        caption: 'Electrolysis of aqueous CuSO₄ with inert (graphite) electrodes. Copper metal coats the cathode, and oxygen gas is evolved at the anode.',
        svg: `<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Liquid Gradient (Blue for CuSO4) -->
    <linearGradient id="cuso4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.8"/>
    </linearGradient>

    <!-- Copper coating gradient -->
    <linearGradient id="copper" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ca8a04" />
      <stop offset="50%" stop-color="#ea580c" />
      <stop offset="100%" stop-color="#b45309" />
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="var(--color-surface)"/>

  <!-- Battery & Circuit -->
  <rect x="210" y="40" width="80" height="30" rx="4" fill="#1e293b" />
  <text x="250" y="60" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">Power Supply</text>
  <text x="220" y="34" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">+</text>
  <text x="280" y="34" font-family="var(--font-sans)" font-size="18" font-weight="bold" fill="#38bdf8" text-anchor="middle">-</text>

  <path d="M 210 55 L 160 55 L 160 120" stroke="var(--color-border)" stroke-width="3" fill="none" />
  <path d="M 290 55 L 340 55 L 340 120" stroke="var(--color-border)" stroke-width="3" fill="none" />

  <!-- Beaker -->
  <path d="M 100 150 L 100 300 A 20 20 0 0 0 120 320 L 380 320 A 20 20 0 0 0 400 300 L 400 150" fill="none" stroke="var(--color-border)" stroke-width="4"/>
  
  <!-- CuSO4 Solution -->
  <path d="M 103 180 L 103 298 A 18 18 0 0 0 120 317 L 380 317 A 18 18 0 0 0 397 298 L 397 180 Z" fill="url(#cuso4)"/>
  <text x="250" y="300" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#0c4a6e" text-anchor="middle">Aqueous CuSO₄ (blue)</text>

  <!-- Graphite Electrodes -->
  <!-- Anode (Left) -->
  <rect x="150" y="120" width="20" height="150" fill="#334155"/>
  <text x="110" y="110" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">Anode (+)</text>

  <!-- Cathode (Right) -->
  <rect x="330" y="120" width="20" height="150" fill="#334155"/>
  <!-- Copper coating on cathode -->
  <path d="M 326 210 L 326 270 C 326 274 354 274 354 270 L 354 210 M 326 215 C 315 220 315 265 326 268 M 354 215 C 365 220 365 265 354 268" fill="url(#copper)" stroke="#9a3412" stroke-width="1.5" stroke-linejoin="round"/>
  
  <text x="390" y="110" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">Cathode (-)</text>

  <!-- Observations -->
  <!-- Oxygen Bubbles at Anode -->
  <circle cx="160" cy="250" r="4" fill="#fff" opacity="0.8"/>
  <circle cx="152" cy="235" r="5" fill="#fff" opacity="0.8"/>
  <circle cx="168" cy="220" r="4" fill="#fff" opacity="0.8"/>
  <circle cx="156" cy="205" r="6" fill="#fff" opacity="0.8"/>
  <circle cx="162" cy="190" r="5" fill="#fff" opacity="0.8"/>
  <circle cx="150" cy="175" r="7" fill="#fff" opacity="0.8"/>

  <line x1="80" y1="200" x2="140" y2="200" stroke="var(--color-text-secondary)" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="75" y="195" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="end">Oxygen gas (O₂)</text>
  <text x="75" y="210" font-family="var(--font-sans)" font-size="10" fill="var(--color-text-secondary)" text-anchor="end">4OH⁻ → O₂ + 2H₂O + 4e⁻</text>

  <!-- Copper deposit at Cathode -->
  <line x1="360" y1="240" x2="420" y2="240" stroke="var(--color-text-secondary)" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="425" y="235" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#b45309" text-anchor="start">Pink/orange copper</text>
  <text x="425" y="250" font-family="var(--font-sans)" font-size="10" fill="var(--color-text-secondary)" text-anchor="start">Cu²⁺ + 2e⁻ → Cu</text>

</svg>`
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Summary of discharge rules',
        text: '<strong>Cathode:</strong> metals below H in reactivity series → deposited first; others → H₂ produced<br/><strong>Anode (concentrated halide):</strong> halogen gas<br/><strong>Anode (no/dilute halide):</strong> O₂ from OH⁻<br/><br/>Reactivity series (bottom = least reactive, discharged first):<br/>K Na Ca Mg Al Zn Fe Pb H Cu Ag Au → H and below deposited at cathode'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Cathode: metals below H in reactivity deposited; otherwise H₂. Anode: concentrated halide → halogen gas; otherwise O₂. CuSO₄: Cu at cathode, O₂ at anode.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Cathode: metals below H deposited; otherwise H₂. Anode: concentrated halide → halogen; otherwise O₂.',
    cues: [
      { id: 'cue-1', blockId: 'call-rules', prompt: 'What is produced at the cathode in electrolysis of CuSO₄ solution?', answer: 'Copper metal — Cu²⁺ is below hydrogen in the reactivity series so it is preferentially reduced. Cu²⁺ + 2e⁻ → Cu.' },
      { id: 'cue-2', blockId: 'call-rules', prompt: 'What is produced at the anode when there are no halide ions in solution?', answer: 'Oxygen gas — OH⁻ ions from water are discharged: 4OH⁻ → O₂ + 2H₂O + 4e⁻.' },
      { id: 'cue-3', blockId: 'tbl-examples', prompt: 'What are the products of electrolysis of concentrated ZnCl₂ solution?', answer: 'Cathode: hydrogen gas (Zn is above H in reactivity). Anode: chlorine gas (concentrated halide ion).' }
    ]
  },
  evidence: [],
  mentions: []
};
