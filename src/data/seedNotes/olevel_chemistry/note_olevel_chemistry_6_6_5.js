export const note_olevel_chemistry_6_6_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-1-6-interpreting-data.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Interpret rate of reaction graphs: calculate rates from gradients and compare the effect of different conditions.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Interpreting Rate Graphs', level: 2 }
    },
    {
      id: 'call-shape',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Shape of a Rate Graph (Volume or Mass vs Time)',
        text: 'A typical reaction gives an <strong>S-shaped / curve</strong> that flattens out:<br/><br/>• <strong>Steep gradient at start</strong> → highest rate (maximum concentration of reactants)<br/>• <strong>Decreasing gradient</strong> → rate slows as reactants are used up<br/>• <strong>Flat/horizontal plateau</strong> → reaction is complete (one reactant exhausted)<br/><br/>The <strong>gradient at any point = the rate at that moment</strong>.<br/>To find gradient: draw a tangent to the curve at that point, then calculate rise/run.'
      }
    },
    {
      id: 'call-comparing',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Comparing Curves for Different Conditions',
        text: 'When comparing two experiments that differ in one factor:<br/><br/>• <strong>Higher rate</strong> = steeper initial gradient<br/>• <strong>Same amount of product</strong> (same limiting reactant) = same plateau height<br/>• Different concentration or catalyst → steeper curve but same final volume<br/><br/>Common trap: <strong>If the same mass of reactant is used</strong>, the total amount of product is the same regardless of conditions — so all curves must reach the <strong>same final value</strong>.<br/><br/>If more reactant is used → higher plateau.'
      }
    },
    {
      id: 'svg-comparing-curves',
      type: 'svg',
      data: {
        caption: 'Comparing Reaction Rate Curves. Left: Same amount of limiting reactant but different temperatures/catalyst. Right: Changing the amount of limiting reactant changes the final volume.',
        svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />
  
  <line x1="300" y1="20" x2="300" y2="220" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="8,8" />

  <!-- LEFT GRAPH: Rate Change Only -->
  <!-- Axes -->
  <line x1="40" y1="200" x2="260" y2="200" stroke="var(--color-text)" stroke-width="2"/>
  <line x1="40" y1="200" x2="40" y2="40" stroke="var(--color-text)" stroke-width="2"/>
  <text x="150" y="230" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">Time</text>
  <text x="15" y="120" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle" transform="rotate(-90 15 120)">Volume</text>
  
  <text x="150" y="20" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Different Rate, Same Amount</text>

  <!-- Max Volume Line -->
  <line x1="40" y1="60" x2="260" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Curve A: Fast -->
  <path d="M 40 200 Q 60 80 120 60 L 260 60" fill="none" stroke="#ef4444" stroke-width="2.5"/>
  <text x="100" y="50" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#ef4444" text-anchor="middle">Higher Temp / Catalyst</text>

  <!-- Curve B: Slow -->
  <path d="M 40 200 Q 120 160 180 80 Q 210 60 260 60" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
  <text x="210" y="120" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#3b82f6" text-anchor="middle">Lower Temp</text>


  <!-- RIGHT GRAPH: Amount Change -->
  <!-- Axes -->
  <line x1="340" y1="200" x2="560" y2="200" stroke="var(--color-text)" stroke-width="2"/>
  <line x1="340" y1="200" x2="340" y2="40" stroke="var(--color-text)" stroke-width="2"/>
  <text x="450" y="230" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">Time</text>
  <text x="315" y="120" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle" transform="rotate(-90 315 120)">Volume</text>
  
  <text x="450" y="20" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Different Amounts of Reactant</text>

  <!-- Curve A: Double amount -->
  <line x1="340" y1="60" x2="560" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <path d="M 340 200 Q 380 90 450 60 L 560 60" fill="none" stroke="#10b981" stroke-width="2.5"/>
  <text x="480" y="50" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#10b981" text-anchor="middle">Double moles</text>

  <!-- Curve B: Normal amount (same rate initial slope!) -->
  <line x1="340" y1="130" x2="560" y2="130" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <!-- The initial gradient should match but it flattens early -->
  <path d="M 340 200 Q 360 145 420 130 L 560 130" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="480" y="120" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#f59e0b" text-anchor="middle">Original amount</text>
</svg>`
      }
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: Sketching Curves',
        text: 'Experiment A: 2 g CaCO₃ lumps + 50 cm³ of 1 mol/dm³ HCl<br/>Experiment B: 2 g CaCO₃ powder + 50 cm³ of 1 mol/dm³ HCl<br/><br/>Sketch prediction:<br/>• Both curves reach the <strong>same plateau</strong> (same mass of CaCO₃ → same moles of CO₂)<br/>• Curve B is <strong>steeper at the start</strong> (powder = greater SA → faster rate)<br/>• Curve B levels off <strong>sooner</strong> than Curve A<br/><br/>If instead Experiment C uses 4 g CaCO₃ powder (double mass):<br/>• Curve C is steeper AND reaches a <strong>higher plateau</strong> (more CO₂ produced overall)'
      }
    },
    {
      id: 'svg-rate-comparisons',
      type: 'svg',
      data: {
        caption: 'Rate of reaction graphs comparing surface area (A vs B) and mass (B vs C).',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300">
    <defs>
        <style>
            .axis { stroke: var(--color-text); stroke-width: 2; fill: none; stroke-linecap: round; }
            .curveA { stroke: var(--color-primary); stroke-width: 3; fill: none; stroke-linecap: round; }
            .curveB { stroke: var(--color-success); stroke-width: 3; fill: none; stroke-linecap: round; }
            .curveC { stroke: #ef4444; stroke-width: 3; fill: none; stroke-linecap: round; }
            .dash { stroke: var(--color-text-secondary); stroke-width: 1.5; stroke-dasharray: 5,5; fill: none; }
            .text { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); }
            .text-bold { font-family: var(--font-sans); font-size: 14px; font-weight: bold; fill: var(--color-text); }
            .text-sm { font-family: var(--font-sans); font-size: 12px; fill: var(--color-text-secondary); }
        </style>
    </defs>
    
    <g transform="translate(60, 20)">
        <!-- Axes -->
        <line x1="0" y1="230" x2="420" y2="230" class="axis"/>
        <line x1="0" y1="0" x2="0" y2="230" class="axis"/>
        
        <text x="210" y="270" class="text" text-anchor="middle">Time</text>
        <text x="-115" y="-35" class="text" transform="rotate(-90)" text-anchor="middle">Volume of gas produced</text>
        
        <!-- Plateaus -->
        <line x1="0" y1="120" x2="400" y2="120" class="dash"/>
        <text x="-10" y="125" class="text-sm" text-anchor="end">V₁</text>
        
        <line x1="0" y1="30" x2="400" y2="30" class="dash"/>
        <text x="-10" y="35" class="text-sm" text-anchor="end">V₂</text>
        
        <!-- Curve A (2g lumps) -->
        <path d="M 0 230 C 100 230, 150 140, 260 120 L 400 120" class="curveA"/>
        
        <!-- Curve B (2g powder) -->
        <path d="M 0 230 C 50 230, 80 125, 140 120 L 400 120" class="curveB"/>
        
        <!-- Curve C (4g powder) -->
        <path d="M 0 230 C 60 230, 100 40, 180 30 L 400 30" class="curveC"/>
        
        <!-- Legend inside graph area -->
        <rect x="230" y="140" width="160" height="80" fill="var(--color-surface)" stroke="var(--color-border)" rx="4"/>
        
        <line x1="240" y1="155" x2="260" y2="155" class="curveA"/>
        <text x="270" y="160" class="text">A: 2g lumps</text>
        
        <line x1="240" y1="180" x2="260" y2="180" class="curveB"/>
        <text x="270" y="185" class="text">B: 2g powder</text>
        
        <line x1="240" y1="205" x2="260" y2="205" class="curveC"/>
        <text x="270" y="210" class="text">C: 4g powder</text>
    </g>
</svg>`
      }
    },
    {
      id: 'call-rate-calc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Calculating Rate from a Graph',
        text: '<strong>For a straight-line section</strong>: rate = Δy ÷ Δx (change in volume ÷ change in time)<br/><br/><strong>For a curve</strong>: draw a tangent at the required point, then rate = gradient of the tangent.<br/><br/>Units of rate of reaction:<br/>• Volume/time → cm³/s or cm³/min<br/>• Mass/time → g/s or g/min<br/><br/>Rate ∝ 1/time for the cross (turbidity) method: rate = 1/t'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Rate graphs show steep start → decreasing gradient → plateau. Steeper gradient = faster rate. Same mass of limiting reactant = same plateau height. Rate = gradient at any point (tangent for curves). Rate ∝ 1/t for precipitation reactions.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Steep start → decreasing gradient → plateau. Same mass = same plateau. Gradient = rate. Powder gives same plateau as lumps but steeper curve.',
    cues: [
      { id: 'cue-1', blockId: 'call-shape', prompt: 'Explain why the gradient of a rate graph decreases over time.', answer: 'As the reaction proceeds, reactants are used up so their concentration decreases, leading to fewer collisions per unit time and therefore a slower rate.' },
      { id: 'cue-2', blockId: 'call-comparing', prompt: 'Two experiments use 2 g CaCO₃: one as lumps, one as powder, with the same HCl. How do their rate curves differ?', answer: 'The powder experiment has a steeper initial gradient (faster rate due to greater surface area) but reaches the same plateau height (same mass of CaCO₃ → same moles of CO₂ produced). The powder curve flattens sooner.' },
      { id: 'cue-3', blockId: 'call-rate-calc', prompt: 'How do you find the rate of reaction at a specific time from a curved graph?', answer: 'Draw a tangent to the curve at that specific time, then calculate the gradient of the tangent as rise ÷ run.' }
    ]
  },
  evidence: [],
  mentions: []
};
