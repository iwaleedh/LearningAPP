export const note_olevel_chemistry_10_10_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/10 Chemistry Of The Environment/10-2-1-air.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State the approximate composition of clean, dry air; describe an experiment to find the percentage of oxygen in air.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Composition of Air', level: 2 }
    },
    {
      id: 'tbl-comp',
      type: 'comparisonTable',
      data: {
        caption: 'Approximate composition of clean, dry air',
        headers: ['Gas', 'Approximate %', 'Notes'],
        rows: [
          ['Nitrogen (N₂)', '~78%', 'Most abundant; relatively unreactive at room temperature'],
          ['Oxygen (O₂)', '~21%', 'Supports combustion and respiration'],
          ['Argon (Ar)', '~1%', 'Noble gas, inert; used in light bulbs'],
          ['Carbon dioxide (CO₂)', '~0.04%', 'Variable; increased by combustion and respiration'],
          ['Water vapour (H₂O)', 'Variable (~1–4%)', 'Removed in "dry air" — varies with weather'],
          ['Other noble gases (Ne, He, Kr, Xe)', 'Trace', 'Also inert']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Experiment to Find the Percentage of Oxygen', level: 2 }
    },
    {
      id: 'call-exp',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Method 1: Copper in a tube experiment',
        text: '<strong>Equipment:</strong> Two gas syringes connected by a tube containing copper metal; Bunsen burner.<br/><br/><strong>Method:</strong><br/>1. Measure initial volume of air in the syringes.<br/>2. Heat the copper whilst passing air over it repeatedly by pushing/pulling syringes.<br/>3. Copper reacts with O₂: 2Cu + O₂ → 2CuO (copper turns black)<br/>4. Continue until no further volume decrease.<br/>5. Cool back to room temperature; measure final volume.<br/><br/><strong>Calculation:</strong><br/>Volume decrease = volume of O₂ in the original air sample.<br/>% O₂ = (volume decrease ÷ original volume) × 100<br/><br/>Expected result: ~21% decrease'
      }
    },
    {
      id: 'svg-oxygen-experiment',
      type: 'svg',
      data: {
        caption: 'Passing a known volume of air over heated copper to determine the percentage of oxygen.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 250">
    <defs>
        <style>
            .glass { fill: rgba(99, 102, 241, 0.05); stroke: var(--color-text); stroke-width: 2; stroke-linejoin: round; }
            .plunger { fill: rgba(149, 165, 166, 0.4); stroke: var(--color-text); stroke-width: 1.5; }
            .rubber { fill: #2c3e50; stroke: #1a252f; }
            .copper { fill: #d35400; stroke: #a04000; stroke-width: 2; }
            .heat { stroke: #e74c3c; stroke-width: 2; fill: none; }
            .label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); text-anchor: middle; }
            .title { font-family: var(--font-sans); font-size: 15px; font-weight: bold; fill: var(--color-text); text-anchor: middle; }
            .arrow { stroke: var(--color-primary); stroke-width: 2; fill: none; }
            .line-mark { stroke: var(--color-text); stroke-width: 1; fill: none; }
        </style>
    </defs>

    <!-- Left Syringe -->
    <g transform="translate(10, 60)">
        <!-- Plunger -->
        <rect x="0" y="10" width="80" height="40" class="plunger"/>
        <line x1="80" y1="10" x2="80" y2="50" stroke="var(--color-text)" stroke-width="2"/>
        <rect x="0" y="0" width="10" height="60" class="plunger"/>
        <!-- Barrel -->
        <path d="M 40 0 L 150 0 L 150 20 L 170 20 L 170 40 L 150 40 L 150 60 L 40 60 Z" class="glass"/>
        <!-- Markings -->
        <line x1="50" y1="0" x2="50" y2="10" class="line-mark"/>
        <line x1="70" y1="0" x2="70" y2="10" class="line-mark"/>
        <line x1="90" y1="0" x2="90" y2="10" class="line-mark"/>
        <line x1="110" y1="0" x2="110" y2="10" class="line-mark"/>
        <line x1="130" y1="0" x2="130" y2="10" class="line-mark"/>
        <text x="130" y="25" class="label" font-size="11">cm³</text>
        
        <text x="75" y="-20" class="title">100 cm³ of Air</text>
        <path d="M 50 30 L 130 30 M 125 25 L 130 30 L 125 35" class="arrow"/> <!-- Push arrow -->
    </g>

    <!-- Hard Glass Tube -->
    <g transform="translate(180, 75)">
        <path d="M 15 5 L 255 5 L 255 25 L 15 25" class="glass"/>
        <!-- Rubber Bungholes -->
        <path d="M -5 0 L 15 5 L 15 25 L -5 30 Z" class="rubber"/>
        <path d="M 275 0 L 255 5 L 255 25 L 275 30 Z" class="rubber"/>
        
        <!-- Copper Turnings -->
        <path d="M 80 10 Q 100 5 120 15 Q 140 20 160 10 Q 180 5 190 15 Q 160 25 120 25 Q 90 20 80 10 Z" class="copper" fill="#d35400"/>
        <circle cx="100" cy="20" r="3" class="copper"/>
        <circle cx="140" cy="12" r="4" class="copper"/>
        <circle cx="170" cy="20" r="3" class="copper"/>

        <!-- Heat source -->
        <path d="M 120 70 Q 130 60 135 70 T 150 70" class="heat"/>
        <path d="M 110 75 Q 125 65 130 75 T 160 75" class="heat"/>
        <text x="135" y="100" class="label" font-weight="bold" fill="#e74c3c">HEAT</text>
        
        <text x="135" y="-20" class="label">Copper turnings</text>
        <line x1="135" y1="-15" x2="135" y2="5" stroke-dasharray="2,2" class="line-mark"/>
    </g>

    <!-- Right Syringe (empty initially) -->
    <g transform="translate(460, 60)">
        <!-- Barrel -->
        <path d="M 140 0 L 30 0 L 30 20 L 10 20 L 10 40 L 30 40 L 30 60 L 140 60 Z" class="glass"/>
        <!-- Markings -->
        <line x1="50" y1="0" x2="50" y2="10" class="line-mark"/>
        <line x1="70" y1="0" x2="70" y2="10" class="line-mark"/>
        <line x1="90" y1="0" x2="90" y2="10" class="line-mark"/>
        <line x1="110" y1="0" x2="110" y2="10" class="line-mark"/>
        <line x1="130" y1="0" x2="130" y2="10" class="line-mark"/>
        <text x="50" y="25" class="label" font-size="11">cm³</text>
        <!-- Plunger (Fully in) -->
        <rect x="135" y="10" width="40" height="40" class="plunger"/>
        <line x1="135" y1="10" x2="135" y2="50" stroke="var(--color-text)" stroke-width="2"/>
        <rect x="175" y="0" width="10" height="60" class="plunger"/>
        
        <text x="90" y="-20" class="title">Empty Syringe</text>
    </g>

    <text x="325" y="210" class="title">Process</text>
    <text x="325" y="230" class="label">Air is passed forwards and backwards over heated copper until volume stops decreasing.</text>
</svg>`
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why cool before measuring the final volume?',
        text: 'If you measure while the apparatus is still hot, the gas is expanded by heat and the volume will appear larger than it actually is. Cooling to room temperature ensures you measure the correct volume of remaining gas.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Clean dry air: ~78% N₂, ~21% O₂, ~1% Ar, ~0.04% CO₂, traces of other noble gases. Percentage O₂ found by reacting copper with air repeatedly (2Cu + O₂ → 2CuO) and measuring volume decrease.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Air: 78% N₂, 21% O₂, 1% Ar, 0.04% CO₂. % O₂ found by reacting Cu with air and measuring volume decrease.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-comp', prompt: 'State the approximate percentages of nitrogen, oxygen, and argon in dry air.', answer: '~78% nitrogen, ~21% oxygen, ~1% argon.' },
      { id: 'cue-2', blockId: 'call-exp', prompt: 'Describe how copper is used to find the percentage of oxygen in air.', answer: 'Air of known volume is passed over heated copper (2Cu + O₂ → 2CuO) repeatedly until the volume stops decreasing. After cooling, the volume decrease equals the oxygen removed. % O₂ = (volume decrease ÷ original volume) × 100.' },
      { id: 'cue-3', blockId: 'call-tip', prompt: 'Why must the apparatus be cooled before taking the final volume reading?', answer: 'Hot gas expands, giving a misleadingly large volume. Cooling to room temperature ensures the volume reading is accurate.' }
    ]
  },
  evidence: [],
  mentions: []
};
