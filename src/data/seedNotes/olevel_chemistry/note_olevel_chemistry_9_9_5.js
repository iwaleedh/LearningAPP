export const note_olevel_chemistry_9_9_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-2-3-rusting-of-iron.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe rusting as requiring both water and oxygen, and explain experiments that demonstrate this.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Rusting of Iron', level: 2 }
    },
    {
      id: 'call-rust',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Conditions for Rusting',
        text: 'Rusting is the corrosion of iron/steel to form <strong>hydrated iron(III) oxide</strong> (Fe₂O₃·xH₂O).<br/><br/>Both conditions are <strong>essential</strong>:<br/>• Water (H₂O)<br/>• Oxygen (O₂)<br/><br/>In the absence of <strong>either</strong> condition, rusting does not occur.<br/><br/>Overall word equation:<br/>iron + oxygen + water → hydrated iron(III) oxide (rust)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Experiment to Show Both O₂ and H₂O Are Needed', level: 2 }
    },
    {
      id: 'call-exp',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Three-tube experiment',
        text: '<strong>Tube A:</strong> Air + water (normal tap water and iron nail)<br/>Result: nail rusts ✓<br/><br/><strong>Tube B:</strong> Air only (nail in tube sealed with anhydrous calcium chloride to absorb moisture; also boil water and seal with oil)<br/>Result: nail does NOT rust ✗<br/><br/><strong>Tube C:</strong> Water only, no air (nail in boiled water; tube sealed with oil layer on surface to exclude O₂)<br/>Result: nail does NOT rust ✗<br/><br/>Conclusion: Both O₂ AND H₂O are needed for rusting.'
      }
    },
    {
      id: 'svg-rusting-tubes',
      type: 'svg',
      data: {
        caption: 'The three-tube experiment to investigate the conditions for rusting.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250">
    <defs>
        <style>
            .glass { fill: rgba(99, 102, 241, 0.05); stroke: var(--color-text); stroke-width: 2; stroke-linejoin: round; }
            .water { fill: rgba(52, 152, 219, 0.3); }
            .oil { fill: rgba(241, 196, 15, 0.5); }
            .nail { fill: #7f8c8d; stroke: #2c3e50; stroke-width: 1.5; }
            .rust { fill: #e67e22; stroke: #d35400; stroke-width: 1; }
            .stopper { fill: #e67e22; }
            .desiccant { fill: #bdc3c7; }
            .label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); }
            .title { font-family: var(--font-sans); font-size: 16px; font-weight: bold; fill: var(--color-text); text-anchor: middle; }
            .line { stroke: var(--color-text); stroke-width: 1; fill: none; stroke-dasharray: 2,2; }
        </style>
    </defs>

    <!-- Tube A: Air & Water (Rusting) -->
    <g transform="translate(50, 20)">
        <text x="35" y="-5" class="title">Tube A</text>
        <!-- Test Tube -->
        <path d="M 15 0 L 15 150 C 15 165, 55 165, 55 150 L 55 0 M 10 0 L 60 0" class="glass"/>
        <!-- Water -->
        <path d="M 15 80 L 15 150 C 15 165, 55 165, 55 150 L 55 80 Z" class="water"/>
        <!-- Nail with Rust -->
        <rect x="32" y="50" width="6" height="80" rx="3" class="nail"/>
        <path d="M 31 52 L 39 52 L 35 45 Z" class="nail"/> <!-- head -->
        <!-- Rust patches -->
        <circle cx="32" cy="90" r="3" class="rust"/>
        <circle cx="38" cy="110" r="4" class="rust"/>
        <circle cx="35" cy="125" r="3" class="rust"/>
        
        <text x="35" y="195" class="label" text-anchor="middle">Air + Water</text>
        <text x="35" y="215" class="label" text-anchor="middle" fill="#e74c3c" font-weight="bold">RUSTS ✓</text>
    </g>
    
    <line x1="85" y1="120" x2="35" y2="120" class="line"/>
    <text x="10" y="115" class="label" text-anchor="middle">Water</text>

    <!-- Tube B: Air, No Water (Dry) -->
    <g transform="translate(250, 20)">
        <text x="35" y="-5" class="title">Tube B</text>
        <!-- Stopper -->
        <path d="M 10 -15 L 60 -15 L 55 5 L 15 5 Z" class="stopper"/>
        <!-- Test Tube -->
        <path d="M 15 0 L 15 150 C 15 165, 55 165, 55 150 L 55 0 M 10 0 L 60 0" class="glass"/>
        
        <!-- Calcium Chloride Beads -->
        <circle cx="25" cy="140" r="4" class="desiccant"/>
        <circle cx="35" cy="145" r="5" class="desiccant"/>
        <circle cx="45" cy="138" r="4" class="desiccant"/>
        <circle cx="30" cy="150" r="4" class="desiccant"/>
        <circle cx="40" cy="152" r="4" class="desiccant"/>
        <circle cx="25" cy="155" r="3" class="desiccant"/>
        <circle cx="45" cy="155" r="3" class="desiccant"/>
        
        <!-- Cotton Wool layer -->
        <path d="M 15 130 Q 35 120 55 130 Q 35 140 15 130 Z" fill="#1e293b" stroke="#bdc3c7" stroke-width="1"/>
        
        <!-- CLEAN Nail -->
        <rect x="32" y="40" width="6" height="80" rx="3" class="nail"/>
        <path d="M 31 42 L 39 42 L 35 35 Z" class="nail"/> <!-- head -->
        
        <text x="35" y="195" class="label" text-anchor="middle">Air only (Dry)</text>
        <text x="35" y="215" class="label" text-anchor="middle">No rust ✗</text>
    </g>
    
    <line x1="315" y1="165" x2="335" y2="165" class="line"/>
    <text x="340" y="160" class="label">Anhydrous</text>
    <text x="340" y="175" class="label">calcium choride</text>
    <text x="340" y="190" class="label">(drying agent)</text>

    <!-- Tube C: Water, No Air (Boiled) -->
    <g transform="translate(450, 20)">
        <text x="35" y="-5" class="title">Tube C</text>
        <!-- Stopper -->
        <path d="M 10 -15 L 60 -15 L 55 5 L 15 5 Z" class="stopper"/>
        <!-- Test Tube -->
        <path d="M 15 0 L 15 150 C 15 165, 55 165, 55 150 L 55 0 M 10 0 L 60 0" class="glass"/>
        
        <!-- Boiled Water -->
        <path d="M 15 60 L 15 150 C 15 165, 55 165, 55 150 L 55 60 Z" class="water"/>
        
        <!-- Oil Layer -->
        <path d="M 15 50 L 15 60 L 55 60 L 55 50 Z" class="oil"/>
        
        <!-- CLEAN Nail -->
        <rect x="32" y="65" width="6" height="80" rx="3" class="nail"/>
        <path d="M 31 67 L 39 67 L 35 60 Z" class="nail"/> <!-- head -->
        
        <text x="35" y="195" class="label" text-anchor="middle">Water only</text>
        <text x="35" y="215" class="label" text-anchor="middle">No rust ✗</text>
    </g>
    
    <line x1="515" y1="75" x2="535" y2="75" class="line"/>
    <text x="540" y="70" class="label">Layer</text>
    <text x="540" y="85" class="label">of oil</text>
    
    <line x1="515" y1="120" x2="535" y2="120" class="line"/>
    <text x="540" y="115" class="label">Boiled</text>
    <text x="540" y="130" class="label">water</text>
</svg>`
      }
    },
    {
      id: 'call-ferroxyl',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Ferroxyl Indicator Test',
        text: 'Ferroxyl indicator detects:<br/>• <strong>Fe²⁺ ions</strong> → turns <strong>blue</strong> (forms Prussian blue / turnbull\'s blue complex)<br/>• <strong>OH⁻ ions</strong> → turns <strong>pink/violet</strong><br/><br/>In the rusting process, Fe²⁺ forms first at the anode (iron loses electrons) and OH⁻ forms at the cathode (O₂ + H₂O gains electrons). These observations confirm the electrochemical nature of rusting.'
      }
    },
    {
      id: 'call-rate',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Factors that speed up rusting',
        text: '• <strong>Salt water</strong> speeds rusting — salt acts as an electrolyte, improving conductivity between anode and cathode regions on the iron surface.<br/>• <strong>Acid</strong> speeds rusting.<br/>• <strong>Contact with a less reactive metal</strong> (e.g. tin) speeds rusting if the coating is broken (tin only protects as a barrier; iron underneath rusts faster via galvanic corrosion).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Rusting requires both water AND oxygen — remove either and rusting stops. Rust is hydrated iron(III) oxide (Fe₂O₃·xH₂O). Ferroxyl indicator turns blue with Fe²⁺ and pink with OH⁻. Salt water accelerates rusting by acting as an electrolyte.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Rusting needs both O₂ and H₂O together. Remove either → no rusting. Ferroxyl indicator: Fe²⁺ → blue, OH⁻ → pink.',
    cues: [
      { id: 'cue-1', blockId: 'call-rust', prompt: 'State the two conditions necessary for iron to rust.', answer: 'Both water (H₂O) and oxygen (O₂) must be present together for iron to rust.' },
      { id: 'cue-2', blockId: 'call-exp', prompt: 'Describe how the three-tube experiment shows that both O₂ and H₂O are needed for rusting.', answer: 'Tube A (air + water) rusts. Tube B (air only — water removed) does not rust. Tube C (water only — O₂ excluded with oil) does not rust. Only when both are present does rusting occur.' },
      { id: 'cue-3', blockId: 'call-ferroxyl', prompt: 'What colour does ferroxyl indicator turn with Fe²⁺ ions, and why is this significant?', answer: 'Fe²⁺ turns ferroxyl indicator blue. This shows where iron is losing electrons (the anode region), confirming the electrochemical nature of rusting.' }
    ]
  },
  evidence: [],
  mentions: []
};
