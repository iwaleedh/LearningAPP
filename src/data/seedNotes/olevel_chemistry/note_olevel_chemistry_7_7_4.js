export const note_olevel_chemistry_7_7_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/7 Acids Bases And Salts/7-2-1-preparing-soluble-salts.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe methods for preparing soluble salts by reacting acids with metals, metal oxides, hydroxides, and carbonates.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Preparing Soluble Salts', level: 2 }
    },
    {
      id: 'tbl-methods',
      type: 'comparisonTable',
      data: {
        caption: 'Methods for preparing soluble salts',
        headers: ['Reactant with acid', 'Reaction type', 'Products', 'Example'],
        rows: [
          ['Metal (must react with dilute acid)', 'Acid + metal', 'Salt + H₂(g)', 'Mg + 2HCl → MgCl₂ + H₂'],
          ['Metal oxide (insoluble base)', 'Acid + base', 'Salt + H₂O', 'CuO + 2HCl → CuCl₂ + H₂O'],
          ['Metal hydroxide (base)', 'Acid + base (neutralisation)', 'Salt + H₂O', 'Zn(OH)₂ + H₂SO₄ → ZnSO₄ + 2H₂O'],
          ['Metal carbonate', 'Acid + carbonate', 'Salt + H₂O + CO₂(g)', 'ZnCO₃ + 2HCl → ZnCl₂ + H₂O + CO₂'],
          ['Alkali (soluble base)', 'Acid + alkali (titration)', 'Salt + H₂O', 'NaOH + HCl → NaCl + H₂O']
        ]
      }
    },
    {
      id: 'call-method-excess',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Method: Using an Insoluble Base or Carbonate',
        text: '(Example: making copper(II) sulfate from CuO + dilute H₂SO₄)<br/><br/>1. Warm dilute H₂SO₄ in a beaker.<br/>2. Add excess CuO powder — ensures all acid is used up; blue solution forms.<br/>3. Filter to remove excess CuO.<br/>4. Evaporate the filtrate to concentrate.<br/>5. Leave to crystallise (cool slowly).<br/>6. Filter off crystals; dry between filter papers.<br/><br/>Using <strong>excess solid</strong> base/carbonate ensures no acid remains. The excess is removed by filtration.'
      }
    },
    {
      id: 'svg-salt-prep-excess',
      type: 'svg',
      data: {
        caption: 'Steps for making a soluble salt from an insoluble base: add excess base, filter, and crystallise.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250">
    <defs>
        <style>
            .glass { fill: rgba(99, 102, 241, 0.05); stroke: var(--color-text); stroke-width: 2; stroke-linejoin: round; }
            .liquid-clear { fill: rgba(149, 165, 166, 0.2); }
            .liquid-blue { fill: rgba(52, 152, 219, 0.5); }
            .solid-black { fill: #2c3e50; }
            .label { font-family: var(--font-sans); font-size: 13px; fill: var(--color-text); }
            .step-title { font-family: var(--font-sans); font-size: 14px; font-weight: bold; fill: var(--color-primary); }
            .arrow { stroke: var(--color-primary); stroke-width: 2; fill: none; }
            .heat { stroke: #e74c3c; stroke-width: 2; fill: none; }
        </style>
    </defs>

    <!-- Step 1: Add excess -->
    <g transform="translate(0, 0)">
        <text x="70" y="20" class="step-title" text-anchor="middle">1. Add &amp; Heat</text>
        
        <!-- Beaker -->
        <g transform="translate(30, 100)">
            <path d="M 0 0 L 0 60 C 0 65, 5 70, 10 70 L 70 70 C 75 70, 80 65, 80 60 L 80 0" class="glass"/>
            <path d="M 0 20 L 0 60 C 0 65, 5 70, 10 70 L 70 70 C 75 70, 80 65, 80 60 L 80 20 Z" class="liquid-blue"/>
            
            <!-- Excess pure powder block -->
            <path d="M 20 65 L 60 65 L 50 50 L 30 50 Z" class="solid-black"/>
        </g>
        
        <!-- Heat -->
        <path d="M 60 180 Q 65 170 70 180 T 80 180" class="heat"/>
        <path d="M 50 185 Q 65 175 70 185 T 90 185" class="heat"/>
        <text x="70" y="205" class="label" fill="#e74c3c" text-anchor="middle">Warm</text>
        
        <text x="70" y="60" class="label" text-anchor="middle">Add excess CuO</text>
        <text x="70" y="75" class="label" text-anchor="middle">to H₂SO₄</text>
    </g>

    <!-- Arrow 1 -->
    <path d="M 140 135 L 170 135 M 165 130 L 170 135 L 165 140" class="arrow"/>

    <!-- Step 2: Filter -->
    <g transform="translate(190, 0)">
        <text x="70" y="20" class="step-title" text-anchor="middle">2. Filter</text>
        
        <!-- Filter funnel and paper -->
        <g transform="translate(45, 60)">
            <path d="M -15 0 L 25 40 L 25 60 L 35 60 L 35 40 L 75 0" class="glass"/>
            <!-- Filter paper -->
            <path d="M -5 5 L 30 35 L 65 5" fill="none" stroke="var(--color-primary)" stroke-dasharray="2,2"/>
            <!-- Solid residue -->
            <path d="M 10 20 L 30 35 L 50 20 Z" class="solid-black"/>
            <!-- Dripping liquid -->
            <circle cx="30" cy="70" r="2" class="liquid-blue"/>
            <circle cx="30" cy="80" r="2" class="liquid-blue"/>
        </g>
        
        <!-- Conical Flask -->
        <g transform="translate(50, 120)">
            <path d="M 15 0 L 35 0 L 35 20 L 50 60 C 53 65, 48 70, 40 70 L 10 70 C 2 70, -3 65, 0 60 L 15 20 Z" class="glass"/>
            <path d="M 5 45 L 45 45 L 50 60 C 53 65, 48 70, 40 70 L 10 70 C 2 70, -3 65, 0 60 Z" class="liquid-blue"/>
        </g>
        
        <text x="140" y="80" class="label">Residue</text>
        <text x="140" y="95" class="label">(Excess CuO)</text>
        
        <text x="140" y="170" class="label">Filtrate</text>
        <text x="140" y="185" class="label">(CuSO₄(aq))</text>
    </g>

    <!-- Arrow 2 -->
    <path d="M 360 135 L 390 135 M 385 130 L 390 135 L 385 140" class="arrow"/>

    <!-- Step 3: Evaporate -->
    <g transform="translate(410, 0)">
        <text x="50" y="20" class="step-title" text-anchor="middle">3. Evaporate</text>
        
        <!-- Evaporating Basin -->
        <g transform="translate(10, 130)">
            <path d="M 0 0 C 10 30, 70 30, 80 0 Z" class="glass"/>
            <path d="M 5 5 C 10 25, 70 25, 75 5 Z" class="liquid-blue"/>
        </g>
        
        <!-- Steam -->
        <path d="M 30 120 Q 35 110 30 100" class="glass" fill="none" stroke-dasharray="2,2"/>
        <path d="M 50 125 Q 55 115 50 105" class="glass" fill="none" stroke-dasharray="2,2"/>
        
        <!-- Heat -->
        <path d="M 40 155 Q 45 145 50 155 T 60 155" class="heat"/>
        
        <text x="50" y="185" class="label" text-anchor="middle">Heat to</text>
        <text x="50" y="200" class="label" text-anchor="middle">crystallisation point</text>
    </g>

    <!-- Arrow 3 -->
    <path d="M 520 135 L 550 135 M 545 130 L 550 135 L 545 140" class="arrow"/>

    <!-- Step 4: Crystallise -->
    <g transform="translate(570, 0)">
        <text x="50" y="20" class="step-title" text-anchor="middle">4. Crystallise</text>
        
        <!-- Watch Glass / Basin -->
        <g transform="translate(10, 130)">
            <path d="M 0 0 C 10 30, 70 30, 80 0 Z" class="glass"/>
            <!-- Crystals -->
            <path d="M 20 15 L 30 10 L 40 15 L 30 20 Z" class="liquid-blue" stroke="var(--color-primary)"/>
            <path d="M 35 20 L 45 12 L 60 18 L 50 25 Z" class="liquid-blue" stroke="var(--color-primary)"/>
            <path d="M 10 10 L 20 5 L 25 10 L 15 15 Z" class="liquid-blue" stroke="var(--color-primary)"/>
        </g>

        <text x="50" y="185" class="label" text-anchor="middle">Allow to cool &amp;</text>
        <text x="50" y="200" class="label" text-anchor="middle">dry the crystals</text>
    </g>
</svg>`
      }
    },
    {
      id: 'call-titration',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Method: Using a Soluble Base (Titration) — e.g. NaCl from NaOH + HCl',
        text: '1. Use a burette to add acid to alkali in a conical flask with indicator.<br/>2. Record exact volume of acid needed to neutralise the alkali.<br/>3. Repeat the titration without indicator using the exact measured volumes.<br/>4. Evaporate the salt solution to dryness (or crystallise).<br/><br/>Cannot use excess acid/alkali (both dissolve), so titration is essential to know when neutralisation is complete.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Soluble salts: acid + metal/oxide/carbonate (use excess solid then filter). Acid + alkali: use titration (indicator → repeat without indicator → evaporate). Crystallise or evaporate to obtain pure dry salt.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Acid + excess insoluble solid (oxide/carbonate) → filter excess → evaporate → crystallise. Acid + alkali → titration → evaporate.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-methods', prompt: 'Name four types of substance that can react with an acid to form a soluble salt.', answer: 'A metal, a metal oxide, a metal hydroxide, and a metal carbonate.' },
      { id: 'cue-2', blockId: 'call-method-excess', prompt: 'Describe how you would prepare copper(II) sulfate crystals from copper(II) oxide and dilute sulfuric acid.', answer: 'Add excess CuO to warm H₂SO₄; stir until no more dissolves (blue solution, black solid excess visible). Filter to remove excess CuO. Evaporate filtrate to concentrate. Allow to cool and crystallise. Filter crystals and dry.' },
      { id: 'cue-3', blockId: 'call-titration', prompt: 'Explain why titration must be used when preparing sodium chloride from NaOH and HCl.', answer: 'Both NaOH and HCl are soluble (cannot use excess and filter off). Titration identifies the exact volume of acid needed to neutralise the alkali, so neither is in excess. The titration is repeated without indicator to obtain a pure salt solution.' }
    ]
  },
  evidence: [],
  mentions: []
};
