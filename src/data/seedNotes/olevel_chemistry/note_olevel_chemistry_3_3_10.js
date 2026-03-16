export const note_olevel_chemistry_3_3_10 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-2-7-percentage-yield-and-purity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate percentage yield and percentage purity for chemical reactions and samples.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Percentage Yield', level: 2 }
    },
    {
      id: 'call-yield',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Percentage Yield',
        text: '<strong>% yield = (actual yield ÷ theoretical yield) × 100</strong><br/><br/><strong>Actual yield:</strong> the mass of product actually obtained in the experiment<br/><br/><strong>Theoretical yield:</strong> the maximum possible mass of product calculated from the mole ratio and the limiting reagent<br/><br/>% yield is always between 0% and 100%'
      }
    },
    {
      id: 'call-reasons',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reasons why % yield is less than 100%',
        text: '• The reaction may be reversible (equilibrium not fully to the right)<br/>• Competing side reactions produce unwanted products<br/>• Some product is lost during transfer/filtration/evaporation<br/>• Some reactant may be impure<br/>• The reaction may be incomplete'
      }
    },
    {
      id: 'svg-percent-yield',
      type: 'svg',
      data: {
        caption: 'Visualising Percentage Yield: Comparing what you actually got with the theoretical maximum.',
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="actual" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <pattern id="lost" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="10" stroke="#fca5a5" stroke-width="2"/>
    </pattern>
  </defs>

  <g transform="translate(100, 20)">
    <!-- Container representing 100% Theoretical Yield -->
    <rect x="0" y="0" width="100" height="150" fill="none" stroke="var(--color-primary)" stroke-width="3" rx="4"/>
    
    <!-- Actual Yield Fill (e.g., 80%) -->
    <rect x="0" y="30" width="100" height="120" fill="url(#actual)" rx="4"/>
    
    <!-- Lost product Fill -->
    <rect x="0" y="0" width="100" height="30" fill="url(#lost)" fill-opacity="0.4" rx="4"/>
    
    <!-- Labels -->
    <text x="-10" y="15" font-family="var(--font-sans)" font-size="12" fill="#ef4444" text-anchor="end">Lost</text>
    <path d="M-5,10 L0,10" stroke="#ef4444" stroke-width="1"/>
    
    <text x="-10" y="90" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#3b82f6" text-anchor="end">Actual Yield</text>
    <path d="M-5,85 L0,85" stroke="#3b82f6" stroke-width="1"/>
    
    <text x="50" y="95" font-family="var(--font-sans)" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">80%</text>

    <!-- Overall label right side -->
    <path d="M105,0 L115,0 M110,0 L110,150 M115,150 L105,150" stroke="var(--color-text-secondary)" stroke-width="2" fill="none"/>
    <text x="125" y="70" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)">Theoretical Yield</text>
    <text x="125" y="85" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">(Maximum possible = 100%)</text>
  </g>
</svg>`
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: % yield',
        text: '2.4 g of Mg reacts with excess O₂. 3.3 g of MgO is obtained.<br/>(Aᵣ: Mg=24, O=16; Mᵣ MgO=40)<br/>Equation: 2Mg + O₂ → 2MgO (ratio 1:1)<br/><br/>Moles Mg = 2.4/24 = 0.1 mol<br/>Theoretical moles MgO = 0.1 mol<br/>Theoretical mass MgO = 0.1 × 40 = 4 g<br/><br/>% yield = (3.3/4) × 100 = <strong>82.5%</strong>'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Percentage Purity', level: 2 }
    },
    {
      id: 'call-purity',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Percentage Purity',
        text: '<strong>% purity = (mass of pure substance ÷ total mass of sample) × 100</strong><br/><br/>A sample may contain impurities (other substances) that do not react.<br/>% purity tells us what fraction of the sample is the desired substance.'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: % purity',
        text: 'A 5 g sample of NaCl contains 4.5 g of pure NaCl.<br/><br/>% purity = (4.5/5) × 100 = <strong>90%</strong>'
      }
    },
    {
      id: 'call-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Combined purity + yield',
        text: '10 g of 90% pure CaCO₃ is heated. 3.4 g of CO₂ collected.<br/>(Mᵣ: CaCO₃=100, CO₂=44; CaCO₃→CaO+CO₂)<br/><br/>Mass pure CaCO₃ = 10 × 0.90 = 9 g<br/>Moles CaCO₃ = 9/100 = 0.09 mol<br/>Theoretical CO₂ = 0.09 × 44 = 3.96 g<br/>% yield = (3.4/3.96) × 100 = <strong>85.9%</strong>'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: '% yield and % purity are both calculated using (part/whole) × 100. The key difference: % yield compares actual vs theoretical product; % purity compares mass of pure substance vs total sample mass. If given an impure sample, always find the mass of pure reactant first before calculating theoretical yield.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '% yield = (actual/theoretical) × 100. % purity = (pure mass/total mass) × 100. Yield is less than 100% due to reversible reactions, side reactions, product loss, or incomplete reactions.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: '% yield = (actual/theoretical) × 100. % purity = (pure/total) × 100. Yield < 100% due to reversible reactions, side reactions, product loss.',
    cues: [
      { id: 'cue-1', blockId: 'call-yield', prompt: 'State the formula for percentage yield.', answer: '% yield = (actual yield ÷ theoretical yield) × 100.' },
      { id: 'cue-2', blockId: 'call-reasons', prompt: 'Give three reasons why percentage yield is less than 100%.', answer: 'Reversible reaction not complete; side reactions; product lost during transfer/filtration/evaporation.' },
      { id: 'cue-3', blockId: 'call-purity', prompt: 'State the formula for percentage purity.', answer: '% purity = (mass of pure substance ÷ total mass of sample) × 100.' }
    ]
  },
  evidence: [],
  mentions: []
};
