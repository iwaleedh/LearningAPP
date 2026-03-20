export const note_olevel_chemistry_6_6_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-2-3-the-haber-process.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the Haber process for the manufacture of ammonia, including the conditions used and the reasons for choosing them.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Haber Process', level: 2 }
    },
    {
      id: 'call-eq',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Equation',
        text: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)   ΔH = −92 kJ mol⁻¹<br/><br/>• Forward reaction is <strong>exothermic</strong><br/>• Reactants: nitrogen (from fractional distillation of liquid air) + hydrogen (from natural gas / cracking of hydrocarbons)<br/>• 4 moles of gas on reactant side; 2 moles on product side → <strong>fewer moles of gas on right</strong>'
      }
    },
    {
      id: 'tbl-conditions',
      type: 'comparisonTable',
      data: {
        caption: 'Conditions used in the Haber process and reasons',
        headers: ['Condition', 'Value', 'Reason'],
        rows: [
          ['Temperature', '~450 °C', 'Compromise: lower T → higher yield but too slow; 450 °C balances acceptable yield with acceptable rate; note: higher T shifts equilibrium left (towards reactants) as forward is exothermic'],
          ['Pressure', '~200 atm (20 MPa)', 'High pressure favours the side with fewer moles of gas (right, product side) → higher yield; very high pressure is expensive and dangerous so 200 atm is a compromise'],
          ['Catalyst', 'Iron (Fe), with promoters K₂O/Al₂O₃', 'Increases rate without changing equilibrium position; finely divided iron maximises surface area'],
          ['Recycling', 'Unreacted N₂ and H₂ recycled', 'Increases overall yield and reduces waste']
        ]
      }
    },
    {
      id: 'call-route',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Industrial Route',
        text: '1. Purify N₂ and H₂; mix in 1:3 ratio.<br/>2. Pass over heated iron catalyst at 450 °C and 200 atm.<br/>3. ~15–20% conversion per pass (equilibrium not reached in short contact time, plus compromise temperature).<br/>4. Gas mixture cooled → NH₃ liquefies and is removed (boiling point −33 °C).<br/>5. Unreacted N₂ and H₂ are recycled back into the reactor.<br/>6. Overall yield: ~98% with recycling.'
      }
    },
    {
      id: 'svg-haber-process',
      type: 'svg',
      data: {
        caption: 'Simplified flow diagram of the Haber Process.',
        svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Input Gases -->
  <path d="M 20 80 L 80 80" fill="none" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow-head)" />
  <text x="10" y="70" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="start">N₂ + 3H₂</text>

  <!-- Compressor -->
  <rect x="90" y="50" width="80" height="60" rx="4" fill="var(--color-bg-secondary)" stroke="var(--color-border)" stroke-width="2"/>
  <text x="130" y="85" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Compressor</text>
  
  <path d="M 170 80 L 230 80" fill="none" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow-head)" />
  <text x="200" y="70" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">200 atm</text>

  <!-- Reactor (Catalyst Beds) -->
  <rect x="240" y="30" width="100" height="140" rx="20" fill="var(--color-bg-secondary)" stroke="var(--color-border)" stroke-width="2"/>
  <text x="290" y="20" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Reactor</text>
  <text x="290" y="160" font-family="var(--font-sans)" font-size="10" fill="#ef4444" text-anchor="middle">450°C</text>
  
  <!-- Catalyst layers -->
  <rect x="250" y="50" width="80" height="15" fill="#94a3b8" />
  <rect x="250" y="80" width="80" height="15" fill="#94a3b8" />
  <rect x="250" y="110" width="80" height="15" fill="#94a3b8" />
  <text x="290" y="100" font-family="var(--font-sans)" font-size="10" fill="#0f172a" text-anchor="middle">Iron Catalyst</text>

  <path d="M 340 120 L 400 120" fill="none" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow-head)" />
  <text x="370" y="110" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">N₂, H₂, NH₃</text>

  <!-- Condenser / cooler -->
  <rect x="410" y="80" width="80" height="100" rx="4" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="450" y="135" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Cooling</text>

  <!-- Liquid ammonia out -->
  <path d="M 450 180 L 450 230" fill="none" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrow-head-blue)" />
  <text x="460" y="215" font-family="var(--font-sans)" font-size="12" fill="#0284c7" text-anchor="start">Liquid NH₃</text>
  <circle cx="450" cy="200" r="3" fill="#0ea5e9"/>
  <circle cx="450" cy="210" r="3" fill="#0ea5e9"/>

  <!-- Unreacted gas recycle -->
  <path d="M 450 80 L 450 40 L 130 40 L 130 50" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow-head-orange)" />
  <text x="290" y="32" font-family="var(--font-sans)" font-size="10" fill="#d97706" text-anchor="middle">Unreacted N₂ and H₂ recycled</text>


  <!-- Markers -->
  <defs>
    <marker id="arrow-head" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 1 1 L 7 4 L 1 7 Z" fill="var(--color-text)"/>
    </marker>
    <marker id="arrow-head-blue" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 1 1 L 7 4 L 1 7 Z" fill="#0ea5e9"/>
    </marker>
    <marker id="arrow-head-orange" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 1 1 L 7 4 L 1 7 Z" fill="#f59e0b"/>
    </marker>
  </defs>

</svg>`
      }
    },
    {
      id: 'call-use',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Uses of Ammonia',
        text: 'Main use: manufacture of <strong>fertilisers</strong> (ammonium nitrate, ammonium sulfate, urea).<br/><br/>Also: explosives (nitric acid → TNT); cleaning products; refrigerants; manufacture of nylon.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Haber process: N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ mol⁻¹. Conditions: 450 °C (compromise), 200 atm (high pressure → more product, fewer moles gas on right), Fe catalyst. Unreacted gases recycled. Main use: fertiliser manufacture.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'N₂+3H₂⇌2NH₃, exothermic. 450°C compromise: fast rate + acceptable yield. 200 atm: fewer gas moles on right. Fe catalyst. Unreacted gases recycled.',
    cues: [
      { id: 'cue-1', blockId: 'call-eq', prompt: 'Write the equation for the Haber process and give the sign of ΔH.', answer: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92 kJ mol⁻¹ (exothermic).' },
      { id: 'cue-2', blockId: 'tbl-conditions', prompt: 'Explain why a temperature of 450 °C is used in the Haber process rather than a lower temperature.', answer: 'Lower temperatures would give a higher yield of ammonia (Le Chatelier: shifting towards exothermic product side) but the rate would be too slow to be economically viable. 450 °C is a compromise giving an acceptable rate and an acceptable yield.' },
      { id: 'cue-3', blockId: 'tbl-conditions', prompt: 'Use Le Chatelier\'s principle to explain why high pressure is used in the Haber process.', answer: 'There are 4 moles of gas on the left and 2 on the right. High pressure shifts the equilibrium to the side with fewer moles of gas (the right), producing more ammonia.' }
    ]
  },
  evidence: [],
  mentions: []
};
