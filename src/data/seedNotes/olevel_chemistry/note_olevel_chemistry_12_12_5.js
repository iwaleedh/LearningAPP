export const note_olevel_chemistry_12_12_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/12 Experimental Techniques And Chemical Analysis/12-2-3-separation-and-purification-techniques.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe and explain the principles of filtration, crystallisation, simple distillation, fractional distillation and use them to separate appropriate mixtures.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Filtration', level: 2 }
    },
    {
      id: 'call-filter',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Filtration — Separating Insoluble Solid from Liquid',
        text: '<strong>Principle:</strong> An insoluble solid is retained by the filter paper while the liquid passes through as the filtrate.<br/><br/><strong>Apparatus:</strong> filter paper in a funnel, beaker<br/><strong>Product:</strong> residue (insoluble solid on paper) + filtrate (liquid collected below)<br/><br/><strong>Example:</strong> separating sand from sand + saltwater mixture<br/><br/><strong>To purify the solid:</strong> wash the residue with distilled water to remove soluble impurities.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Crystallisation', level: 2 }
    },
    {
      id: 'call-cryst',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Crystallisation — Obtaining Soluble Solid from Solution',
        text: '<strong>Principle:</strong> Dissolve solid in minimum hot solvent → filter to remove insoluble impurities → evaporate to reduce volume → cool slowly → crystals form → filter off crystals → dry<br/><br/><strong>Why cool slowly?</strong> Slow cooling gives larger, purer crystals; rapid cooling gives small impure crystals<br/><br/><strong>Why not evaporate to dryness?</strong> Excessive heating may decompose the product or lead to inclusion of all impurities; evaporating the solution only partially encourages crystal growth on cooling<br/><br/><strong>Examples:</strong> purifying copper(II) sulfate, sodium chloride, potassium nitrate'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Simple Distillation', level: 2 }
    },
    {
      id: 'call-simple-dist',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Simple Distillation — Volatile Liquid from Solution',
        text: '<strong>Principle:</strong> Heating evaporates the solvent; vapour passes through condenser → cooled back to liquid (distillate) collected in receiver. Solid solute (non-volatile) remains in flask.<br/><br/><strong>Apparatus:</strong> round-bottom flask, thermometer (at side arm), Liebig condenser, collection flask<br/><strong>Example:</strong> obtaining pure water from seawater or ink solution<br/><br/><strong>Limitation:</strong> Only works if one component is much more volatile; cannot separate two miscible liquids with similar boiling points.'
      }
    },
    {
      id: 'svg-distillation',
      type: 'svg',
      data: {
        caption: 'Apparatus for simple distillation to separate a solvent from a solution.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350">
    <defs>
        <style>
            .glass { fill: rgba(149, 165, 166, 0.1); stroke: var(--color-text); stroke-width: 2; stroke-linejoin: round; }
            .liquid-blue { fill: rgba(52, 152, 219, 0.6); }
            .liquid-clear { fill: rgba(189, 195, 199, 0.4); }
            .heat { stroke: #e74c3c; stroke-width: 2; fill: none; }
            .thermometer { stroke: #c0392b; stroke-width: 4; stroke-linecap: round; }
            .label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); }
            .pointer { stroke: var(--color-text-secondary); stroke-width: 1.5; marker-start: url(#dot); }
            .vapor { fill: #3498db; opacity: 0.5; }
        </style>
        <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
            <circle cx="5" cy="5" r="5" fill="var(--color-text-secondary)"/>
        </marker>
    </defs>

    <!-- Heat source -->
    <path d="M 80,320 Q 90,290 100,320 Q 110,290 120,320" class="heat"/>
    <text x="100" y="340" class="label" text-anchor="middle" fill="#e74c3c">Heat</text>

    <!-- Round Bottom Flask -->
    <path d="M 100,280 A 50,50 0 1,0 135,195 L 135,110 L 65,110 L 65,195 A 50,50 0 0,0 80,265" class="glass"/>
    
    <!-- Liquid in flask -->
    <path d="M 52,240 Q 100,245 148,240 A 48,48 0 0,1 100,278 A 48,48 0 0,1 52,240" class="liquid-blue"/>
    <text x="100" y="260" class="label" fill="#fff" text-anchor="middle">Solution</text>

    <!-- Bubbles/Vapor -->
    <circle cx="90" cy="230" r="3" class="vapor"/><circle cx="110" cy="220" r="2" class="vapor"/>
    <path d="M 90,200 Q 100,180 110,200 Z" class="vapor" opacity="0.3"/>
    <path d="M 80,180 Q 95,150 110,180 Z" class="vapor" opacity="0.2"/>

    <!-- Thermometer -->
    <line x1="100" y1="140" x2="100" y2="40" class="glass" stroke-width="6"/>
    <line x1="100" y1="135" x2="100" y2="60" class="thermometer"/>
    <circle cx="100" cy="140" r="4" fill="#c0392b"/> <!-- Thermometer bulb exactly at branch -->
    <rect x="80" y="95" width="40" height="15" fill="#34495e"/> <!-- stopper -->

    <!-- Still Head / side arm -->
    <path d="M 135,130 L 170,140 L 170,165 L 135,155 Z" class="glass" fill="#fff"/>

    <!-- Condenser -->
    <!-- Inner tube -->
    <line x1="170" y1="140" x2="350" y2="190" class="glass"/>
    <line x1="170" y1="165" x2="350" y2="215" class="glass"/>
    
    <!-- Outer water jacket -->
    <path d="M 200,135 L 320,165 L 320,235 L 200,205 Z" class="glass" fill="rgba(52, 152, 219, 0.2)"/>
    
    <!-- Water in / out ports -->
    <path d="M 300,230 L 300,260 A 5,5 0 0,0 310,260 L 310,232" class="glass"/>
    <path d="M 210,138 L 210,110 A 5,5 0 0,0 200,110 L 200,135" class="glass"/>

    <path d="M 305,270 L 305,250" stroke="#2980b9" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="315" y="280" class="label" fill="#2980b9" font-size="12">Water IN</text>

    <path d="M 205,90 L 205,110" stroke="#2980b9" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="215" y="85" class="label" fill="#2980b9" font-size="12">Water OUT</text>

    <!-- Collection flask (Beaker) -->
    <path d="M 345,190 Q 370,195 365,220" fill="none" stroke="var(--color-primary)" stroke-width="2" stroke-dasharray="4,2"/>
    <circle cx="360" cy="240" r="3" class="vapor"/><circle cx="360" cy="255" r="4" class="vapor"/>
    <circle cx="360" cy="275" r="5" class="vapor"/>

    <path d="M 330,220 L 330,320 L 390,320 L 390,220" class="glass"/>
    <rect x="332" y="290" width="56" height="28" class="liquid-clear"/>
    <text x="360" y="310" class="label" fill="#2c3e50" text-anchor="middle">Pure Distillate</text>

    <!-- Labels with Pointers -->
    <line x1="80" y1="140" x2="40" y2="100" class="pointer"/>
    <text x="30" y="90" class="label" text-anchor="middle">Thermometer bulb reveals boiling point of vapour</text>
    
    <line x1="260" y1="180" x2="260" y2="100" class="pointer"/>
    <text x="260" y="90" class="label" text-anchor="middle">Liebig Condenser</text>
</svg>`
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Fractional Distillation', level: 2 }
    },
    {
      id: 'call-frac-dist',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Fractional Distillation — Separating Miscible Liquids',
        text: '<strong>Principle:</strong> Two miscible liquids with different boiling points are separated by repeated evaporation and condensation in a fractionating column.<br/><br/><strong>Key difference from simple distillation:</strong> A fractionating column (packed column with large surface area) allows vapour to condense and re-evaporate many times. Lower boiling point liquid reaches the top faster.<br/><br/><strong>Examples:</strong><br/>• Ethanol (b.p. 78 °C) from water (b.p. 100 °C) in fermented solutions<br/>• Crude oil refining — separating petrol (low b.p.) from diesel (high b.p.)'
      }
    },
    {
      id: 'tbl-summary',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of separation techniques',
        headers: ['Technique', 'Separation needed', 'Key principle'],
        rows: [
          ['Filtration', 'Insoluble solid from liquid', 'Size: solid particles too large to pass through filter paper'],
          ['Crystallisation', 'Soluble solid from solution', 'Solubility decreases on cooling — solid crystallises out'],
          ['Simple distillation', 'Volatile liquid from non-volatile solid (or solution)', 'Large difference in boiling points; solvent evaporates then condenses'],
          ['Fractional distillation', 'Two miscible liquids with different boiling points', 'Repeated condensation/evaporation in fractionating column']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Filtration: insoluble solid from liquid. Crystallisation: soluble solid from solution (evaporate → cool slowly). Simple distillation: volatile liquid from solution. Fractional distillation: two miscible liquids with different boiling points (fractionating column). Choose technique based on physical properties of components.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Filtration (insoluble solid), crystallisation (soluble solid), simple distillation (volatile liquid from solution), fractional distillation (miscible liquids with different b.p.).',
    cues: [
      { id: 'cue-1', blockId: 'call-cryst', prompt: 'Describe the crystallisation process for obtaining a pure solid from a solution.', answer: 'Dissolve solid in minimum hot solvent, filter to remove insoluble impurities, evaporate partially to concentrate, cool slowly to form crystals, filter off crystals, wash and dry.' },
      { id: 'cue-2', blockId: 'call-frac-dist', prompt: 'What is the purpose of the fractionating column in fractional distillation?', answer: 'It provides a large surface area where vapour repeatedly condenses and re-evaporates. The component with the lower boiling point rises to the top first, allowing separation of miscible liquids with different boiling points.' },
      { id: 'cue-3', blockId: 'tbl-summary', prompt: 'How would you separate a mixture of salt solution from sand?', answer: 'First filter to remove the insoluble sand (filtration), then crystallise the filtrate to recover the salt (evaporate solution then cool to let crystals form, filter and dry).' }
    ]
  },
  evidence: [],
  mentions: []
};
