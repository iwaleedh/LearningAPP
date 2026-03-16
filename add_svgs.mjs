import fs from 'fs';

const filePath = 'src/data/seedNotes/olevel_chemistry/note_olevel_chemistry_2_2_0.js';
let content = fs.readFileSync(filePath, 'utf8');

const svgs = `
    {
      id: 'svg-filtration',
      type: 'svg',
      data: {
        caption: 'Filtration — separating an insoluble solid from a liquid',
        svg: \`<svg viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg">
  <style>
    .glass { fill: #eef7ffff; stroke: var(--color-border); stroke-width: 2; opacity: 0.8; }
    .liquid { fill: var(--color-primary); opacity: 0.3; }
    .solid { fill: var(--color-error); }
    .label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); }
    .line { stroke: var(--color-text-secondary); stroke-width: 1; }
  </style>
  
  <!-- Funnel -->
  <path d="M 130 50 L 270 50 L 210 150 L 210 220 L 190 220 L 190 150 Z" class="glass" />
  
  <!-- Filter Paper -->
  <path d="M 140 60 L 260 60 L 200 145 Z" fill="#fff" stroke="var(--color-border)" stroke-width="1.5" stroke-dasharray="4" />
  
  <!-- Mixture (pouring in) -->
  <path d="M 160 80 L 240 80 L 200 140 Z" class="liquid" />
  <circle cx="180" cy="110" r="3" class="solid" />
  <circle cx="190" cy="130" r="4" class="solid" />
  <circle cx="210" cy="120" r="3.5" class="solid" />
  <circle cx="220" cy="95" r="3" class="solid" />
  <circle cx="200" cy="138" r="4" class="solid" />
  
  <!-- Beaker -->
  <path d="M 160 200 L 160 320 Q 160 330 170 330 L 230 330 Q 240 330 240 320 L 240 200" fill="none" stroke="var(--color-border)" stroke-width="2" />
  
  <!-- Filtrate -->
  <path d="M 162 250 L 238 250 L 238 320 Q 238 328 230 328 L 170 328 Q 162 328 162 320 Z" class="liquid" />
  
  <!-- Drops -->
  <circle cx="200" cy="235" r="3" class="liquid" />
  
  <!-- Labels -->
  <text x="50" y="110" class="label">Residue</text>
  <text x="50" y="130" class="label" style="font-size: 12px; fill: var(--color-text-secondary);">(Insoluble solid)</text>
  <line x1="110" y1="115" x2="175" y2="115" class="line" />

  <text x="290" y="80" class="label">Filter paper</text>
  <line x1="285" y1="75" x2="240" y2="100" class="line" />
  
  <text x="290" y="150" class="label">Filter funnel</text>
  <line x1="285" y1="145" x2="230" y2="160" class="line" />

  <text x="50" y="280" class="label">Filtrate</text>
  <text x="50" y="300" class="label" style="font-size: 12px; fill: var(--color-text-secondary);">(Liquid/Solution)</text>
  <line x1="105" y1="275" x2="175" y2="275" class="line" />
</svg>\`
      }
    },
    {
      id: 'svg-evaporation',
      type: 'svg',
      data: {
        caption: 'Evaporation — separating a dissolved solid by evaporating the solvent',
        svg: \`<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <style>
    .glass { fill: #eef7ffff; stroke: var(--color-border); stroke-width: 2; opacity: 0.8; }
    .liquid { fill: var(--color-primary); opacity: 0.3; }
    .solid { fill: var(--color-error); }
    .flame { fill: #ff9800; opacity: 0.8; }
    .flame-inner { fill: #ffeb3b; }
    .metal { fill: #9e9e9e; stroke: var(--color-border); stroke-width: 1.5; }
    .label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); }
    .line { stroke: var(--color-text-secondary); stroke-width: 1; }
    .vapor { fill: none; stroke: var(--color-primary); stroke-width: 1.5; stroke-linecap: round; opacity: 0.5; stroke-dasharray: 4; }
  </style>

  <!-- Tripod & Gauze -->
  <path d="M 120 130 L 280 130 L 280 135 L 120 135 Z" class="metal" />
  <path d="M 140 135 L 130 250 L 140 250 L 150 135 Z" class="metal" />
  <path d="M 260 135 L 270 250 L 260 250 L 250 135 Z" class="metal" />
  
  <!-- Bunsen Burner -->
  <rect x="185" y="190" width="30" height="60" class="metal" />
  <rect x="175" y="250" width="50" height="10" class="metal" />
  
  <!-- Flame -->
  <path d="M 185 190 Q 200 130 215 190 Z" class="flame" />
  <path d="M 195 190 Q 200 150 205 190 Z" class="flame-inner" />

  <!-- Evaporating Basin -->
  <path d="M 150 100 Q 200 140 250 100" fill="none" stroke="var(--color-border)" stroke-width="3" />
  
  <!-- Solution / Crystals -->
  <path d="M 160 105 Q 200 135 240 105 Z" class="liquid" />
  <circle cx="180" cy="115" r="3" class="solid" />
  <circle cx="195" cy="120" r="3" class="solid" />
  <circle cx="210" cy="118" r="3" class="solid" />
  <circle cx="225" cy="112" r="3" class="solid" />

  <!-- Vapor/Steam -->
  <path d="M 170 90 Q 175 70 170 50" class="vapor" />
  <path d="M 190 95 Q 195 65 190 35" class="vapor" />
  <path d="M 210 95 Q 215 65 210 40" class="vapor" />
  <path d="M 230 90 Q 235 70 230 50" class="vapor" />

  <!-- Labels -->
  <text x="260" y="50" class="label">Solvent evaporates</text>
  <text x="260" y="65" class="label" style="font-size: 12px; fill: var(--color-text-secondary);">(Vapour)</text>

  <text x="30" y="110" class="label">Evaporating basin</text>
  <line x1="155" y1="105" x2="145" y2="105" class="line" />

  <text x="280" y="120" class="label">Solid solute remains</text>
  <line x1="275" y1="115" x2="235" y2="115" class="line" />
  
  <text x="30" y="180" class="label">Heat</text>
  <line x1="68" y1="175" x2="185" y2="175" class="line" />
</svg>\`
      }
    },
    {
      id: 'svg-crystallisation',
      type: 'svg',
      data: {
        caption: 'Crystallisation — forming pure crystals from a saturated solution',
        svg: \`<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
  <style>
    .glass { fill: none; stroke: var(--color-border); stroke-width: 2; }
    .liquid { fill: var(--color-primary); opacity: 0.3; }
    .solid { fill: var(--color-error); }
    .flame { fill: #ff9800; opacity: 0.8; }
    .flame-inner { fill: #ffeb3b; }
    .metal { fill: #9e9e9e; stroke: var(--color-border); stroke-width: 1.5; }
    .label { font-family: var(--font-sans); font-size: 14px; font-weight: 600; fill: var(--color-text); text-anchor: middle; }
    .subtext { font-family: var(--font-sans); font-size: 12px; fill: var(--color-text-secondary); text-anchor: middle; }
    .arrow { stroke: var(--color-text); stroke-width: 2; marker-end: url(#arrowhead); }
    .vapor { fill: none; stroke: var(--color-primary); stroke-width: 1.5; opacity: 0.5; stroke-dasharray: 3; }
  </style>
  <defs>
    <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="var(--color-text)" />
    </marker>
  </defs>

  <!-- Step 1: Heat -->
  <g transform="translate(50, 40)">
    <text x="60" y="-10" class="label">1. Heat</text>
    <text x="60" y="5" class="subtext">Evaporate some solvent</text>
    <text x="60" y="20" class="subtext">until saturated</text>
    
    <!-- Basin & Liquid -->
    <path d="M 20 80 Q 60 120 100 80" class="glass" />
    <path d="M 30 85 Q 60 115 90 85 Z" class="liquid" />
    
    <!-- Vapor -->
    <path d="M 40 70 Q 45 50 40 30" class="vapor" />
    <path d="M 60 70 Q 65 50 60 30" class="vapor" />
    <path d="M 80 70 Q 85 50 80 30" class="vapor" />
    
    <!-- Heat -->
    <path d="M 50 160 Q 60 110 70 160 Z" class="flame" />
    <path d="M 55 160 Q 60 130 65 160 Z" class="flame-inner" />
  </g>

  <line x1="170" y1="130" x2="210" y2="130" class="arrow" />

  <!-- Step 2: Cool -->
  <g transform="translate(240, 40)">
    <text x="60" y="-10" class="label">2. Cool</text>
    <text x="60" y="5" class="subtext">Solubility decreases,</text>
    <text x="60" y="20" class="subtext">crystals form</text>
    
    <path d="M 20 80 Q 60 120 100 80" class="glass" />
    <path d="M 30 85 Q 60 115 90 85 Z" class="liquid" />
    
    <!-- Crystals -->
    <rect x="50" y="100" width="8" height="8" class="solid" transform="rotate(15 54 104)" />
    <rect x="62" y="102" width="10" height="10" class="solid" transform="rotate(45 67 107)" />
    <rect x="70" y="95" width="7" height="7" class="solid" transform="rotate(30 73 98)" />
    <rect x="45" y="90" width="6" height="6" class="solid" transform="rotate(60 48 93)" />
  </g>

  <line x1="360" y1="130" x2="400" y2="130" class="arrow" />

  <!-- Step 3: Filter & Dry -->
  <g transform="translate(430, 40)">
    <text x="60" y="-10" class="label">3. Filter &amp; Dry</text>
    <text x="60" y="5" class="subtext">Filter to collect crystals,</text>
    <text x="60" y="20" class="subtext">dry with filter paper</text>
    
    <!-- Funnel -->
    <path d="M 30 50 L 90 50 L 65 100 L 65 130 L 55 130 L 55 100 Z" class="glass" />
    <path d="M 35 55 L 85 55 L 60 96 Z" fill="#fff" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="2" />
    
    <!-- Crystals -->
    <rect x="52" y="80" width="8" height="8" class="solid" transform="rotate(15 56 84)" />
    <rect x="62" y="82" width="10" height="10" class="solid" transform="rotate(45 67 87)" />
    <rect x="60" y="72" width="7" height="7" class="solid" transform="rotate(30 63 75)" />
    
    <!-- Beaker -->
    <path d="M 40 120 L 40 170 Q 40 175 45 175 L 75 175 Q 80 175 80 170 L 80 120" class="glass" />
    <path d="M 42 150 L 78 150 L 78 170 Q 78 173 75 173 L 45 173 Q 42 173 42 170 Z" class="liquid" />
  </g>
</svg>\`
      }
    },
    {
      id: 'svg-simple-distillation',
      type: 'svg',
      data: {
        caption: 'Simple Distillation — extracting a pure solvent from a solution',
        svg: \`<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <style>
    .glass { fill: #eef7ffff; stroke: var(--color-border); stroke-width: 2; opacity: 0.8; }
    .liquid { fill: var(--color-primary); opacity: 0.3; }
    .solid { fill: var(--color-error); }
    .flame { fill: #ff9800; opacity: 0.8; }
    .water-jacket { fill: #4fc3f7; opacity: 0.3; stroke: var(--color-border); stroke-width: 1; }
    .metal { fill: #9e9e9e; stroke: var(--color-border); stroke-width: 1.5; }
    .label { font-family: var(--font-sans); font-size: 12px; fill: var(--color-text); }
    .line { stroke: var(--color-text-secondary); stroke-width: 1; }
    .vapor { fill: none; stroke: var(--color-primary); stroke-width: 1; opacity: 0.5; stroke-dasharray: 2; }
    .arrow { stroke: var(--color-text-secondary); stroke-width: 1.5; fill: none; marker-end: url(#arrowhead2); }
  </style>
  <defs>
    <marker id="arrowhead2" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="var(--color-text-secondary)" />
    </marker>
  </defs>

  <!-- Heat -->
  <path d="M 85 240 Q 95 190 105 240 Z" class="flame" />

  <!-- Condenser -->
  <!-- Outer jacket -->
  <path d="M 160 120 L 350 200 L 340 220 L 150 140 Z" class="water-jacket" />
  <!-- Water In/Out pipes -->
  <rect x="325" y="200" width="10" height="30" class="glass" transform="rotate(22 330 215)" />
  <rect x="165" y="110" width="10" height="30" class="glass" transform="rotate(22 170 125)" />
  
  <!-- Inner tube -->
  <path d="M 140 140 L 360 230" stroke="var(--color-border)" stroke-width="8" fill="none" class="glass" />
  
  <!-- Round bottom flask & neck -->
  <circle cx="95" cy="160" r="40" class="glass" />
  <!-- Flask opening/neck -->
  <path d="M 85 125 L 85 60 L 105 60 L 105 125" fill="#eef7ffff" stroke="var(--color-border)" stroke-width="2" />
  <!-- Side arm connector -->
  <path d="M 105 90 L 145 105 L 140 120 L 105 105" fill="#eef7ffff" stroke="var(--color-border)" stroke-width="2" />
  
  <!-- Thermometer -->
  <rect x="92" y="30" width="6" height="60" fill="#fff" stroke="var(--color-border)" stroke-width="1" />
  <circle cx="95" cy="85" r="5" fill="#f44336" />
  <line x1="95" y1="85" x2="95" y2="50" stroke="#f44336" stroke-width="2" />
  <path d="M 85 60 L 105 60 L 105 50 L 85 50 Z" class="metal" /> <!-- Stopper -->
  
  <!-- Solution inside flask -->
  <path d="M 60 180 A 40 40 0 0 0 130 180 Z" class="liquid" />
  <!-- Bubbles/vapor -->
  <circle cx="85" cy="185" r="2" fill="#fff" />
  <circle cx="100" cy="190" r="3" fill="#fff" />
  <circle cx="110" cy="182" r="2" fill="#fff" />
  <!-- Vapor lines -->
  <path d="M 90 150 Q 85 130 90 110" class="vapor" />
  <path d="M 100 150 Q 105 110 115 95" class="vapor" />

  <!-- Beaker for collecting -->
  <path d="M 330 250 L 330 320 Q 330 325 335 325 L 385 325 Q 390 325 390 320 L 390 250" fill="none" stroke="var(--color-border)" stroke-width="2" />
  <!-- Distillate -->
  <path d="M 332 290 L 388 290 L 388 320 Q 388 323 385 323 L 335 323 Q 332 323 332 320 Z" class="liquid" />
  
  <!-- Vapor to liquid drops -->
  <circle cx="365" cy="240" r="3" class="liquid" />

  <!-- Labels -->
  <text x="10" y="40" class="label">Thermometer</text>
  <line x1="85" y1="40" x2="92" y2="40" class="line" />

  <text x="10" y="165" class="label">Solution</text>
  <line x1="60" y1="160" x2="75" y2="170" class="line" />

  <text x="10" y="235" class="label">Heat</text>

  <text x="230" y="100" class="label">Liebig Condenser</text>
  <line x1="250" y1="105" x2="250" y2="140" class="line" />

  <text x="350" y="150" class="label">Water out</text>
  <path d="M 360 160 L 350 180" class="arrow" />

  <text x="420" y="250" class="label">Water in</text>
  <path d="M 400 245 L 355 225" class="arrow" />

  <text x="400" y="310" class="label">Distillate</text>
  <line x1="395" y1="305" x2="380" y2="305" class="line" />

  <text x="400" y="325" class="label">(Pure solvent)</text>
</svg>\`
      }
    },
    {
      id: 'svg-fractional-distillation',
      type: 'svg',
      data: {
        caption: 'Fractional Distillation — separating miscible liquids with different boiling points',
        svg: \`<svg viewBox="0 0 500 370" xmlns="http://www.w3.org/2000/svg">
  <style>
    .glass { fill: #eef7ffff; stroke: var(--color-border); stroke-width: 2; opacity: 0.8; }
    .liquid { fill: var(--color-primary); opacity: 0.3; }
    .liquid2 { fill: var(--color-success); opacity: 0.4; }
    .flame { fill: #ff9800; opacity: 0.8; }
    .water-jacket { fill: #4fc3f7; opacity: 0.3; stroke: var(--color-border); stroke-width: 1; }
    .metal { fill: #9e9e9e; stroke: var(--color-border); stroke-width: 1.5; }
    .bead { fill: none; stroke: var(--color-text-secondary); stroke-width: 1; }
    .label { font-family: var(--font-sans); font-size: 12px; fill: var(--color-text); }
    .line { stroke: var(--color-text-secondary); stroke-width: 1; }
    .arrow { stroke: var(--color-text-secondary); stroke-width: 1.5; fill: none; marker-end: url(#arrowhead3); }
  </style>
  <defs>
    <marker id="arrowhead3" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="var(--color-text-secondary)" />
    </marker>
  </defs>

  <!-- Heat -->
  <path d="M 85 300 Q 95 250 105 300 Z" class="flame" />

  <!-- Flask -->
  <circle cx="95" cy="220" r="40" class="glass" />
  <path d="M 85 185 L 85 160 L 105 160 L 105 185" fill="#eef7ffff" stroke="var(--color-border)" stroke-width="2" />
  <path d="M 60 240 A 40 40 0 0 0 130 240 Z" class="liquid" />
  <path d="M 60 240 A 40 40 0 0 0 130 240 Z" class="liquid2" />
  <!-- Bubbles -->
  <circle cx="85" cy="245" r="2" fill="#fff" />
  <circle cx="100" cy="250" r="3" fill="#fff" />

  <!-- Fractionating Column -->
  <rect x="85" y="80" width="20" height="80" class="glass" />
  <!-- Glass Beads inside column -->
  <circle cx="90" cy="155" r="4" class="bead" />
  <circle cx="98" cy="153" r="4" class="bead" />
  <circle cx="92" cy="147" r="4" class="bead" />
  <circle cx="100" cy="145" r="4" class="bead" />
  <circle cx="89" cy="139" r="4" class="bead" />
  <circle cx="97" cy="137" r="4" class="bead" />
  <circle cx="91" cy="132" r="4" class="bead" />
  <circle cx="99" cy="130" r="4" class="bead" />
  <circle cx="92" cy="124" r="4" class="bead" />
  <circle cx="98" cy="122" r="4" class="bead" />
  <circle cx="89" cy="116" r="4" class="bead" />
  <circle cx="98" cy="114" r="4" class="bead" />
  <circle cx="92" cy="108" r="4" class="bead" />
  <circle cx="100" cy="106" r="4" class="bead" />
  <circle cx="90" cy="100" r="4" class="bead" />
  <circle cx="98" cy="98" r="4" class="bead" />
  <circle cx="92" cy="92" r="4" class="bead" />
  <circle cx="100" cy="90" r="4" class="bead" />
  <circle cx="93" cy="85" r="4" class="bead" />
  
  <!-- Connector to Condenser -->
  <path d="M 105 90 L 145 105 L 140 120 L 105 105" fill="#eef7ffff" stroke="var(--color-border)" stroke-width="2" />
  
  <!-- Thermometer (Moved up to column T-junction) -->
  <rect x="92" y="30" width="6" height="60" fill="#fff" stroke="var(--color-border)" stroke-width="1" />
  <circle cx="95" cy="85" r="5" fill="#f44336" />
  <line x1="95" y1="85" x2="95" y2="50" stroke="#f44336" stroke-width="2" />
  <path d="M 85 70 L 105 70 L 105 60 L 85 60 Z" class="metal" />

  <!-- Condenser -->
  <path d="M 160 120 L 350 200 L 340 220 L 150 140 Z" class="water-jacket" />
  <rect x="325" y="200" width="10" height="30" class="glass" transform="rotate(22 330 215)" />
  <rect x="165" y="110" width="10" height="30" class="glass" transform="rotate(22 170 125)" />
  <path d="M 140 140 L 360 230" stroke="var(--color-border)" stroke-width="8" fill="none" class="glass" />

  <!-- Collecting beaker -->
  <path d="M 330 250 L 330 320 Q 330 325 335 325 L 385 325 Q 390 325 390 320 L 390 250" fill="none" stroke="var(--color-border)" stroke-width="2" />
  <path d="M 332 290 L 388 290 L 388 320 Q 388 323 385 323 L 335 323 Q 332 323 332 320 Z" class="liquid2" />
  <circle cx="365" cy="240" r="3" class="liquid2" />

  <!-- Labels -->
  <text x="10" y="40" class="label">Thermometer</text>
  <line x1="85" y1="40" x2="92" y2="40" class="line" />

  <text x="10" y="120" class="label">Fractionating</text>
  <text x="10" y="135" class="label">column</text>
  <line x1="70" y1="125" x2="85" y2="125" class="line" />

  <text x="10" y="240" class="label">Liquid</text>
  <text x="10" y="255" class="label">mixture</text>

  <text x="350" y="150" class="label">Water out</text>
  <path d="M 360 160 L 350 180" class="arrow" />

  <text x="420" y="250" class="label">Water in</text>
  <path d="M 400 245 L 355 225" class="arrow" />

  <text x="400" y="310" class="label">Distillate</text>
  <text x="400" y="325" class="label">(Lower b.p. liquid)</text>
</svg>\`
      }
    },
    {
      id: 'svg-chromatography',
      type: 'svg',
      data: {
        caption: 'Chromatography — separating dissolved substances by their different solubilities',
        svg: \`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
  <style>
    .beaker { fill: none; stroke: var(--color-border); stroke-width: 2; }
    .solvent { fill: #b3e5fc; opacity: 0.4; }
    .paper { fill: #fcfcfc; stroke: #ccc; stroke-width: 1; }
    .pencil-line { stroke: #999; stroke-width: 1.5; stroke-dasharray: 4; }
    .wood { fill: #d7ccc8; stroke: #a1887f; stroke-width: 2; }
    .spot-ink { fill: #000; }
    .spot-a { fill: var(--color-primary); }
    .spot-b { fill: var(--color-error); }
    .spot-c { fill: var(--color-success); }
    .label { font-family: var(--font-sans); font-size: 14px; font-weight: 600; fill: var(--color-text); text-anchor: middle; }
    .subtext { font-family: var(--font-sans); font-size: 12px; fill: var(--color-text-secondary); text-anchor: middle; }
    .arrow { stroke: var(--color-text); stroke-width: 2; marker-end: url(#arrowhead4); }
  </style>
  <defs>
    <marker id="arrowhead4" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="var(--color-text)" />
    </marker>
  </defs>

  <!-- Step 1: Start -->
  <g transform="translate(40, 40)">
    <text x="60" y="-15" class="label">1. Setup</text>
    <text x="60" y="0" class="subtext">Solvent must be below</text>
    <text x="60" y="15" class="subtext">baseline</text>
    
    <!-- Beaker -->
    <path d="M 20 60 L 20 180 Q 20 185 25 185 L 95 185 Q 100 185 100 180 L 100 60" class="beaker" />
    
    <!-- Solvent -->
    <path d="M 22 150 L 98 150 L 98 180 Q 98 183 95 183 L 25 183 Q 22 183 22 180 Z" class="solvent" />
    
    <!-- Paper -->
    <rect x="40" y="50" width="40" height="120" class="paper" />
    <line x1="40" y1="140" x2="80" y2="140" class="pencil-line" /> <!-- Baseline -->
    
    <!-- Spot -->
    <circle cx="60" cy="140" r="4" class="spot-ink" />
    
    <!-- Split pin / Stick -->
    <rect x="10" y="45" width="100" height="8" class="wood" />

    <!-- Mini-label -->
    <text x="-15" y="145" class="subtext" style="text-anchor: start;">Baseline</text>
    <text x="-15" y="165" class="subtext" style="text-anchor: start;">Solvent</text>
  </g>

  <line x1="170" y1="140" x2="220" y2="140" class="arrow" />

  <!-- Step 2: Running -->
  <g transform="translate(250, 40)">
    <text x="60" y="-15" class="label">2. Running</text>
    <text x="60" y="0" class="subtext">Solvent moves up paper,</text>
    <text x="60" y="15" class="subtext">carrying dyes</text>

    <!-- Beaker -->
    <path d="M 20 60 L 20 180 Q 20 185 25 185 L 95 185 Q 100 185 100 180 L 100 60" class="beaker" />
    
    <path d="M 22 150 L 98 150 L 98 180 Q 98 183 95 183 L 25 183 Q 22 183 22 180 Z" class="solvent" />
    
    <rect x="40" y="50" width="40" height="120" class="paper" />
    <line x1="40" y1="140" x2="80" y2="140" class="pencil-line" />
    
    <!-- Solvent front -->
    <path d="M 40 90 Q 60 85 80 90 L 80 150 L 40 150 Z" class="solvent" />

    <!-- Separating Spots -->
    <circle cx="60" cy="130" r="3.5" class="spot-c" />
    <circle cx="60" cy="110" r="3.5" class="spot-b" />
    <circle cx="60" cy="95" r="3.5" class="spot-a" />
    <path d="M 60 140 L 60 95" stroke="#ccc" stroke-dasharray="2" fill="none" />
    
    <rect x="10" y="45" width="100" height="8" class="wood" />
  </g>

  <line x1="380" y1="140" x2="430" y2="140" class="arrow" />

  <!-- Step 3: Result -->
  <g transform="translate(460, 40)">
    <text x="60" y="-15" class="label">3. Chromatogram</text>
    <text x="60" y="0" class="subtext">Calculate Rf values</text>
    <text x="60" y="15" class="subtext">to identify</text>

    <!-- Paper standalone -->
    <rect x="35" y="50" width="50" height="130" class="paper" />
    <line x1="35" y1="160" x2="85" y2="160" class="pencil-line" />
    
    <!-- Solvent front line -->
    <line x1="35" y1="70" x2="85" y2="70" stroke="var(--color-primary)" stroke-width="1.5" stroke-dasharray="3" />

    <!-- Final Spots -->
    <circle cx="60" cy="140" r="4" class="spot-c" />
    <circle cx="60" cy="110" r="4" class="spot-b" />
    <circle cx="60" cy="80" r="4" class="spot-a" />

    <!-- Mini-label -->
    <text x="95" y="75" class="subtext" style="text-anchor: start;">Solvent front</text>
    <line x1="70" y1="140" x2="90" y2="140" stroke="#ccc" stroke-width="1" />
  </g>
</svg>\`
      }
    },
`;

const indexOfTips = content.indexOf("id: 'call-tip1'");
if (indexOfTips !== -1) {
    const startOfBlock = content.lastIndexOf("    {", indexOfTips);
    if (startOfBlock !== -1) {
        // Only run it if it hasn't been added yet
        if (!content.includes('id: \'svg-filtration\'')) {
            const newContent = content.substring(0, startOfBlock) + svgs + content.substring(startOfBlock);
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Successfully added SVGs before call-tip1');
        } else {
            console.log('SVGs have already been added!');
        }
    } else {
        console.log('Could not find start of call-tip1 block.');
    }
} else {
    console.log('Could not find call-tip1 block.');
}