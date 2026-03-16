export const note_olevel_chemistry_4_4_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/4 Electrochemistry/4-2-2-hydrogen-fuel-cells.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the operation of a hydrogen-oxygen fuel cell and evaluate its advantages and disadvantages.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Hydrogen Fuel Cell', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is a Fuel Cell?',
        text: 'A <strong>hydrogen fuel cell</strong> converts chemical energy from a reaction between hydrogen and oxygen into electrical energy continuously, as long as fuel is supplied.<br/><br/>Overall reaction: 2H₂ + O₂ → 2H₂O<br/><br/>Unlike a battery, a fuel cell does not "run flat" — it produces electricity as long as H₂ and O₂ are supplied.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'How the Fuel Cell Works', level: 2 }
    },
    {
      id: 'call-process',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Operation of an H₂-O₂ Fuel Cell',
        text: '<strong>Anode (−):</strong> hydrogen gas is fed in<br/>H₂ → 2H⁺ + 2e⁻ (oxidation)<br/><br/><strong>Cathode (+):</strong> oxygen gas is fed in<br/>O₂ + 4H⁺ + 4e⁻ → 2H₂O (reduction)<br/><br/><strong>Electrolyte:</strong> a proton-exchange membrane (PEM) — allows H⁺ ions to pass through<br/><br/>Electrons flow through the external circuit (from anode to cathode), producing electricity.<br/><br/>Only product: <strong>water (H₂O)</strong>'
      }
    },
    {
      id: 'svg-fuel-cell',
      type: 'svg',
      data: {
        caption: 'Diagram of a hydrogen-oxygen fuel cell. Hydrogen is oxidised at the anode, and oxygen is reduced at the cathode, forming water.',
        svg: `<svg viewBox="0 0 550 350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- PEM Gradient -->
    <linearGradient id="pem" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fdba74"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>

    <!-- Gas Gradients -->
    <linearGradient id="gas-h2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e0f2fe" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#bae6fd" stop-opacity="0.8"/>
    </linearGradient>
    <linearGradient id="gas-o2" x1="100%" y1="0%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#fee2e2" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#fecaca" stop-opacity="0.8"/>
    </linearGradient>

    <marker id="arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="#64748b"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="var(--color-surface)"/>

  <!-- Fuel Cell Body -->
  <!-- Left Side (H2 input/output) -->
  <path d="M 50 100 L 50 250 L 150 250 L 150 100 Z" fill="url(#gas-h2)" stroke="var(--color-border)" stroke-width="2"/>
  <!-- H2 Inlet -->
  <path d="M 20 120 L 50 120 M 20 140 L 50 140 M 20 120 L 20 140" fill="none" stroke="var(--color-border)" stroke-width="2"/>
  <text x="35" y="110" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#0284c7" text-anchor="middle">H₂ in</text>
  <path d="M 10 130 L 40 130" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)"/>
  
  <!-- Unused H2 Outlet -->
  <path d="M 20 210 L 50 210 M 20 230 L 50 230 M 20 210 L 20 230" fill="none" stroke="var(--color-border)" stroke-width="2"/>
  <text x="35" y="245" font-family="var(--font-sans)" font-size="10" fill="#0284c7" text-anchor="middle">Unused H₂</text>
  <path d="M 50 220 L 20 220" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Right Side (O2 input/output) -->
  <path d="M 400 100 L 400 250 L 300 250 L 300 100 Z" fill="url(#gas-o2)" stroke="var(--color-border)" stroke-width="2"/>
  <!-- O2 Inlet -->
  <path d="M 400 120 L 430 120 M 400 140 L 430 140 M 430 120 L 430 140" fill="none" stroke="var(--color-border)" stroke-width="2"/>
  <text x="415" y="110" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">O₂ in</text>
  <path d="M 440 130 L 410 130" stroke="#b91c1c" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Water & Unused O2 Outlet -->
  <path d="M 400 210 L 430 210 M 400 230 L 430 230 M 430 210 L 430 230" fill="none" stroke="var(--color-border)" stroke-width="2"/>
  <text x="415" y="245" font-family="var(--font-sans)" font-size="10" fill="#1d4ed8" text-anchor="middle">H₂O + unused O₂</text>
  <path d="M 400 220 L 430 220" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Electrodes -->
  <!-- Anode (Left) -->
  <rect x="150" y="90" width="30" height="170" fill="#94a3b8" stroke="var(--color-border)" stroke-width="2"/>
  <text x="165" y="80" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#64748b" text-anchor="middle">Anode</text>
  <text x="165" y="275" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">-</text>

  <!-- Cathode (Right) -->
  <rect x="270" y="90" width="30" height="170" fill="#94a3b8" stroke="var(--color-border)" stroke-width="2"/>
  <text x="285" y="80" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#64748b" text-anchor="middle">Cathode</text>
  <text x="285" y="275" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">+</text>

  <!-- PEM Membrane -->
  <rect x="180" y="90" width="90" height="170" fill="url(#pem)" stroke="var(--color-border)" stroke-width="2"/>
  <text x="225" y="110" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">Electrolyte</text>
  <text x="225" y="125" font-family="var(--font-sans)" font-size="10" fill="#b45309" text-anchor="middle">(PEM)</text>

  <!-- Ion movement H+ -->
  <circle cx="225" cy="180" r="10" fill="#3b82f6"/>
  <text x="225" y="184" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">H⁺</text>
  
  <circle cx="225" cy="220" r="10" fill="#3b82f6"/>
  <text x="225" y="224" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">H⁺</text>

  <path d="M 195 180 L 255 180" stroke="#000" stroke-width="1.5" stroke-dasharray="2,2" marker-end="url(#arrow)"/>
  <path d="M 195 220 L 255 220" stroke="#000" stroke-width="1.5" stroke-dasharray="2,2" marker-end="url(#arrow)"/>

  <!-- External Circuit -->
  <path d="M 165 90 L 165 50 L 210 50" stroke="#1e293b" stroke-width="2" fill="none"/>
  <path d="M 285 90 L 285 50 L 240 50" stroke="#1e293b" stroke-width="2" fill="none"/>
  
  <!-- Load (Bulb) -->
  <circle cx="225" cy="50" r="15" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
  <!-- Bulb filament -->
  <path d="M 215 50 Q 225 35 235 50" fill="none" stroke="#b45309" stroke-width="2"/>
  <!-- e- flow -->
  <text x="180" y="40" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">e⁻</text>
  <path d="M 175 45 L 195 45" stroke="#b45309" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Reactions Text inside sides -->
  <text x="100" y="180" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Oxidation</text>
  <text x="100" y="195" font-family="var(--font-sans)" font-size="10" fill="#0369a1" text-anchor="middle">H₂ → 2H⁺ + 2e⁻</text>

  <text x="350" y="180" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">Reduction</text>
  <text x="350" y="195" font-family="var(--font-sans)" font-size="10" fill="#b91c1c" text-anchor="middle">O₂ + 4H⁺ + 4e⁻ → 2H₂O</text>

</svg>`
      }
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Advantages and disadvantages of hydrogen fuel cells',
        headers: ['Advantages', 'Disadvantages'],
        rows: [
          ['Only product is water — no CO₂ or pollutants', 'Hydrogen is flammable and explosive — storage is difficult'],
          ['Quiet, efficient — no moving parts', 'Hydrogen is currently produced mainly from fossil fuels (not truly "green")'],
          ['Continuous electricity as long as H₂ supplied', 'Technology is expensive'],
          ['High energy efficiency (>60%)', 'Requires pure hydrogen — impurities damage the cell'],
          ['Lighter than batteries for same energy output', 'Infrastructure for H₂ distribution is not yet widespread']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The key advantage of a hydrogen fuel cell is that the only product is water — making it a clean energy source at point of use. However, the production of hydrogen still requires energy (often from fossil fuels). Examiners may ask you to evaluate both sides — always include environmental AND practical aspects.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Hydrogen fuel cell: H₂ + O₂ → H₂O, producing electricity. Anode: H₂ oxidised; Cathode: O₂ reduced to water. Advantages: clean product (water), efficient. Disadvantages: H₂ storage, production cost, flammability.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Fuel cell: 2H₂ + O₂ → 2H₂O + electricity. Clean product only water. H₂ storage and production are challenges.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'What is the overall reaction in a hydrogen fuel cell?', answer: '2H₂ + O₂ → 2H₂O. Chemical energy converted to electrical energy; only product is water.' },
      { id: 'cue-2', blockId: 'call-process', prompt: 'What happens at the anode and cathode of a hydrogen fuel cell?', answer: 'Anode: H₂ → 2H⁺ + 2e⁻ (oxidation). Cathode: O₂ + 4H⁺ + 4e⁻ → 2H₂O (reduction).' },
      { id: 'cue-3', blockId: 'tbl-compare', prompt: 'Give one advantage and one disadvantage of hydrogen fuel cells.', answer: 'Advantage: only product is water — no pollutants/CO₂. Disadvantage: hydrogen is flammable and difficult to store safely (or: H₂ production still uses fossil fuels).' }
    ]
  },
  evidence: [],
  mentions: []
};
