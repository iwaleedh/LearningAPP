export const note_olevel_chemistry_3_3_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-2-3-reacting-masses.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use mole ratios from balanced equations to calculate reacting masses and masses of products.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Mole Ratios from Balanced Equations', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Stoichiometric Ratios',
        text: 'The <strong>coefficients</strong> in a balanced equation give the <strong>mole ratio</strong> in which substances react.<br/><br/>Example: 2H₂ + O₂ → 2H₂O<br/>• 2 mol H₂ reacts with 1 mol O₂ to produce 2 mol H₂O<br/>• Ratio H₂ : O₂ : H₂O = 2 : 1 : 2<br/><br/>These ratios are used to calculate reacting masses.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Steps for Reacting Mass Calculations', level: 2 }
    },
    {
      id: 'call-steps',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Method',
        text: '1. Write a balanced equation<br/>2. Write the mole ratio of the substances involved<br/>3. Convert given mass to moles: n = m ÷ M<br/>4. Use mole ratio to find moles of required substance<br/>5. Convert back to mass: m = n × M'
      }
    },
    {
      id: 'svg-stoichiometry-map',
      type: 'svg',
      data: {
        caption: 'The stoichiometry map: Mass A → Moles A → Moles B → Mass B',
        svg: `<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-primary)"/>
    </marker>
  </defs>

  <g transform="translate(50, 60)">
    <!-- Box 1: Mass of A -->
    <rect x="0" y="0" width="100" height="60" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="2"/>
    <text x="50" y="25" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Mass of A</text>
    <text x="50" y="45" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">(grams)</text>

    <!-- Arrow 1 -->
    <path d="M100 30 L160 30" stroke="var(--color-primary)" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
    <text x="130" y="20" font-family="var(--font-sans)" font-size="12" fill="var(--color-primary)" text-anchor="middle">÷ Mᵣ(A)</text>

    <!-- Box 2: Moles of A -->
    <rect x="170" y="0" width="100" height="60" rx="8" fill="#0c4a6e" stroke="var(--color-primary)" stroke-width="2"/>
    <text x="220" y="25" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Moles of A</text>
    <text x="220" y="45" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">(mol)</text>

    <!-- Arrow 2 -->
    <path d="M270 30 L330 30" stroke="var(--color-primary)" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
    <text x="300" y="10" font-family="var(--font-sans)" font-size="12" fill="var(--color-primary)" text-anchor="middle">× ratio</text>
    <text x="300" y="25" font-family="var(--font-sans)" font-size="10" fill="var(--color-text-secondary)" text-anchor="middle">(from Eq.)</text>

    <!-- Box 3: Moles of B -->
    <rect x="340" y="0" width="100" height="60" rx="8" fill="#4a1040" stroke="#0284c7" stroke-width="2"/>
    <text x="390" y="25" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Moles of B</text>
    <text x="390" y="45" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">(mol)</text>

    <!-- Arrow 3 -->
    <path d="M440 30 L500 30" stroke="var(--color-primary)" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
    <text x="470" y="20" font-family="var(--font-sans)" font-size="12" fill="var(--color-primary)" text-anchor="middle">× Mᵣ(B)</text>

    <!-- Box 4: Mass of B -->
    <rect x="510" y="0" width="100" height="60" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="2"/>
    <text x="560" y="25" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Mass of B</text>
    <text x="560" y="45" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">(grams)</text>
  </g>
</svg>`
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Mass of product',
        text: 'What mass of MgO is formed when 6 g of Mg burns in air?<br/>(Aᵣ: Mg=24, O=16)<br/><br/>Balanced equation: 2Mg + O₂ → 2MgO<br/>Mole ratio: Mg : MgO = 2 : 2 = 1 : 1<br/><br/>Moles of Mg = 6 ÷ 24 = 0.25 mol<br/>Moles of MgO = 0.25 mol (1:1 ratio)<br/>Mass of MgO = 0.25 × 40 = <strong>10 g</strong>'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Mass of reactant needed',
        text: 'What mass of CaCO₃ is needed to produce 11 g of CO₂?<br/>(Mᵣ: CaCO₃=100, CO₂=44)<br/><br/>CaCO₃ → CaO + CO₂<br/>Ratio CaCO₃ : CO₂ = 1 : 1<br/><br/>Moles of CO₂ = 11 ÷ 44 = 0.25 mol<br/>Moles of CaCO₃ = 0.25 mol<br/>Mass of CaCO₃ = 0.25 × 100 = <strong>25 g</strong>'
      }
    },
    {
      id: 'call-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Different mole ratios',
        text: 'What mass of Al₂O₃ forms from 27 g of Al?<br/>(Aᵣ: Al=27, O=16; Mᵣ Al₂O₃=102)<br/><br/>4Al + 3O₂ → 2Al₂O₃<br/>Ratio Al : Al₂O₃ = 4 : 2 = 2 : 1<br/><br/>Moles of Al = 27 ÷ 27 = 1 mol<br/>Moles of Al₂O₃ = 1 ÷ 2 = 0.5 mol<br/>Mass of Al₂O₃ = 0.5 × 102 = <strong>51 g</strong>'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always write out the balanced equation and the mole ratio clearly before calculating. Show all your working. The most common error is using the wrong mole ratio — always read it directly from the balanced equation, not assumed as 1:1.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Use balanced equation → mole ratios → convert masses to moles → scale using ratio → convert back to mass. Always show the balanced equation and mole ratio.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Reacting masses: balanced equation gives mole ratios. Convert mass→moles, scale by ratio, convert back to mass.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'What is the significance of coefficients in a balanced equation for calculations?', answer: 'They give the mole ratio in which substances react and are formed.' },
      { id: 'cue-2', blockId: 'call-steps', prompt: 'State the steps for a reacting masses calculation.', answer: '1. Balanced equation. 2. Mole ratio. 3. Mass → moles (n = m/M). 4. Scale by ratio. 5. Moles → mass (m = n×M).' },
      { id: 'cue-3', blockId: 'call-worked1', prompt: 'What mass of CO₂ is produced from 50 g of CaCO₃? (CaCO₃→CaO+CO₂, Mᵣ: CaCO₃=100, CO₂=44)', answer: 'Moles CaCO₃ = 50/100 = 0.5 mol; ratio 1:1; moles CO₂ = 0.5; mass CO₂ = 0.5 × 44 = 22 g.' }
    ]
  },
  evidence: [],
  mentions: []
};
