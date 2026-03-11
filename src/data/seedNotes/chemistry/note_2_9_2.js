/**
 * Seed note: Chemistry · Unit 2 · Topic 9 · Subtopic 2
 * "Effect of concentration and pressure"
 * Source: Pearson Edexcel IAL Chemistry — Section 9A.2
 */
export const note_chemistry_2_9_2 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand, in terms of collision theory, the effect of changes in solution concentration, gas pressure, and solid surface area on the rate of a reaction.' },
            terms: []
        },
        {
            id: 'h-concentration',
            type: 'heading',
            data: { text: 'Effect of Concentration (Solutions)', level: 2 },
            terms: []
        },
        {
            id: 'list-concentration-theory',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'For most reactions involving solutions or gases, increasing concentration <strong>increases the rate of reaction</strong>.',
                    'Higher concentration means there are <strong>more particles per unit volume</strong>.',
                    'The particles are crowded closer together, leading to a <strong>higher frequency of collisions</strong>.',
                    'If more collisions occur per second, there is a higher frequency of <em>successful</em> collisions.',
                    'Important: Changing concentration <strong>does not</strong> change the activation energy or particle energies.'
                ]
            },
            terms: ['Frequency of collisions']
        },
        {
            id: 'svg-concentration',
            type: 'svg',
            data: {
                svg: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="gradLow" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#4f46e5" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </radialGradient>
    <radialGradient id="gradHigh" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#e11d48" />
      <stop offset="100%" stop-color="#881337" />
    </radialGradient>
  </defs>

  <!-- Low Concentration Box -->
  <rect x="50" y="30" width="200" height="180" rx="4" fill="none" stroke="currentColor" stroke-width="2" />
  <text x="150" y="240" font-family="-apple-system, sans-serif" font-size="16" fill="currentColor" text-anchor="middle">Low Concentration</text>
  <text x="150" y="20" font-family="-apple-system, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Fewer particles per unit volume</text>

  <!-- Particles in Low Concentration -->
  <circle cx="90" cy="70" r="8" fill="url(#gradLow)" />
  <circle cx="160" cy="90" r="8" fill="url(#gradLow)" />
  <circle cx="120" cy="150" r="8" fill="url(#gradLow)" />
  <circle cx="210" cy="130" r="8" fill="url(#gradLow)" />
  <circle cx="80" cy="170" r="8" fill="url(#gradLow)" />

  <path d="M 100 70 L 145 85" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4" />

  <!-- High Concentration Box -->
  <rect x="350" y="30" width="200" height="180" rx="4" fill="none" stroke="currentColor" stroke-width="2" />
  <text x="450" y="240" font-family="-apple-system, sans-serif" font-size="16" fill="currentColor" text-anchor="middle">High Concentration</text>
  <text x="450" y="20" font-family="-apple-system, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">More particles per unit volume</text>

  <!-- Particles in High Concentration -->
  <circle cx="380" cy="60" r="8" fill="url(#gradHigh)" />
  <circle cx="420" cy="50" r="8" fill="url(#gradHigh)" />
  <circle cx="480" cy="70" r="8" fill="url(#gradHigh)" />
  <circle cx="510" cy="100" r="8" fill="url(#gradHigh)" />
  <circle cx="390" cy="110" r="8" fill="url(#gradHigh)" />
  <circle cx="440" cy="130" r="8" fill="url(#gradHigh)" />
  <circle cx="490" cy="150" r="8" fill="url(#gradHigh)" />
  <circle cx="530" cy="170" r="8" fill="url(#gradHigh)" />
  <circle cx="380" cy="180" r="8" fill="url(#gradHigh)" />
  <circle cx="430" cy="190" r="8" fill="url(#gradHigh)" />

  <path d="M 395 110 L 425 125" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4" />
  <path d="M 480 70 L 500 95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4" />
</svg>`,
                caption: 'Higher concentration crowds particles together, drastically increasing collision frequency.'
            },
            terms: []
        },
        {
            id: 'callout-conc-exceptions',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Exceptions: When Concentration Does not Increase Rate",
                text: '<strong>1. Zero Order Reactants in Multi-Step Reactions:</strong> If a reaction happens in multiple steps, the overall rate is governed by the slow <em>Rate-Determining Step (RDS)</em>. Increasing the concentration of a reactant that is only involved in a subsequent <em>fast</em> step will have practically zero effect on the overall rate.<br/><br/><strong>2. Catalyst Saturation:</strong> If a solid catalyst surface is already entirely saturated with reactant molecules, adding more reactant (higher concentration) cannot speed up the reaction further because the catalyst is already working at its maximum theoretical capacity.'
            },
            terms: []
        },
        {
            id: 'h-pressure',
            type: 'heading',
            data: { text: 'Effect of Pressure (Gases)', level: 2 },
            terms: []
        },
        {
            id: 'list-pressure-theory',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Increasing the pressure of a reaction involving gases <strong>increases the rate of reaction</strong>.',
                    'For reactions involving only solids or liquids, changing pressure has virtually <strong>no effect</strong> on the rate.',
                    'Changing the pressure of a gas operates identically to changing concentration. Higher pressure is achieved by compressing a gas into a <strong>smaller volume</strong>.',
                    'This compresses the same mass of gas, resulting in <strong>more gas molecules per unit volume</strong>.',
                    'Because they are more densely packed, the <strong>frequency of collisions</strong> increases.',
                    'A higher frequency of collisions means a higher frequency of <em>successful</em> collisions, increasing the overall reaction rate.'
                ]
            },
            terms: ['Frequency of collisions']
        },
        {
            id: 'svg-pressure',
            type: 'svg',
            data: {
                svg: `<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Piston gradient -->
    <linearGradient id="gradPiston" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#94a3b8" />
      <stop offset="100%" stop-color="#475569" />
    </linearGradient>
    
    <!-- Gas particle gradient -->
    <radialGradient id="gradGas" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#14b8a6" />
      <stop offset="100%" stop-color="#042f2e" />
    </radialGradient>
  </defs>

  <!-- Title texts -->
  <text x="200" y="30" font-family="-apple-system, sans-serif" font-size="18" fill="currentColor" text-anchor="middle" font-weight="bold">Low Pressure</text>
  <text x="200" y="50" font-family="-apple-system, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Large volume, wide spacing</text>
  
  <text x="500" y="30" font-family="-apple-system, sans-serif" font-size="18" fill="currentColor" text-anchor="middle" font-weight="bold">High Pressure</text>
  <text x="500" y="50" font-family="-apple-system, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Small volume, packed closely</text>

  <!-- ================= LOW PRESSURE (LEFT) ================= -->
  
  <!-- Cylinder -->
  <rect x="120" y="100" width="160" height="150" fill="none" stroke="#94a3b8" stroke-width="3" />
  
  <!-- Piston -->
  <rect x="115" y="80" width="170" height="20" fill="url(#gradPiston)" stroke="#334155" stroke-width="2" rx="4" />
  <!-- Piston Rod -->
  <rect x="195" y="60" width="10" height="20" fill="#94a3b8" stroke="#334155" stroke-width="2" />
  
  <!-- Gas Particles (Low Density) -->
  <circle cx="150" cy="130" r="10" fill="url(#gradGas)" />
  <circle cx="230" cy="140" r="10" fill="url(#gradGas)" />
  <circle cx="180" cy="180" r="10" fill="url(#gradGas)" />
  <circle cx="140" cy="220" r="10" fill="url(#gradGas)" />
  <circle cx="250" cy="200" r="10" fill="url(#gradGas)" />
  <circle cx="210" cy="230" r="10" fill="url(#gradGas)" />
  
  <!-- Movement traces -->
  <path d="M 160 135 L 195 145" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />
  <path d="M 240 205 L 265 190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />

  <!-- ================= HIGH PRESSURE (RIGHT) ================= -->
  
  <!-- Cylinder -->
  <rect x="420" y="100" width="160" height="150" fill="none" stroke="#94a3b8" stroke-width="3" />
  
  <!-- Piston (Pushed deep down) -->
  <rect x="415" y="150" width="170" height="20" fill="url(#gradPiston)" stroke="#334155" stroke-width="2" rx="4" />
  <!-- Piston Rod -->
  <rect x="495" y="60" width="10" height="90" fill="#94a3b8" stroke="#334155" stroke-width="2" />
  
  <!-- Big downward arrow to show high force -->
  <path d="M 500 130 L 500 70" stroke="#ef4444" stroke-width="5" fill="none" />
  <polygon points="492,130 508,130 500,145" fill="#ef4444" />
  
  <!-- Gas Particles (High Density, confined to bottom area) -->
  <circle cx="450" cy="190" r="10" fill="url(#gradGas)" />
  <circle cx="490" cy="180" r="10" fill="url(#gradGas)" />
  <circle cx="540" cy="200" r="10" fill="url(#gradGas)" />
  <circle cx="440" cy="225" r="10" fill="url(#gradGas)" />
  <circle cx="480" cy="220" r="10" fill="url(#gradGas)" />
  <circle cx="520" cy="230" r="10" fill="url(#gradGas)" />
  
  <!-- Collision sparks -->
  <path d="M 465 185 L 475 185" stroke="#eab308" stroke-width="2" />
  <path d="M 470 180 L 470 190" stroke="#eab308" stroke-width="2" />

  <path d="M 455 215 L 465 220" stroke="#eab308" stroke-width="2" />
  <path d="M 465 215 L 455 220" stroke="#eab308" stroke-width="2" />
  
</svg>`,
                caption: 'Pushing the piston down increases pressure, crowding the same number of molecules into a smaller volume.'
            },
            terms: []
        },
        {
            id: 'equation-ideal-gas-derivation',
            type: 'equation',
            data: {
                html: 'pV = nRT &nbsp;&nbsp;&rArr;&nbsp;&nbsp; p = <span class="nb-frac"><span class="nb-num">n</span><span class="nb-den">V</span></span>RT &nbsp;&nbsp;&rArr;&nbsp;&nbsp; p = cRT',
                caption: 'Rearranging the ideal gas equation. Since concentration (c) is moles/volume (n/V), it shows pressure is directly proportional to concentration.'
            },
            terms: ['Ideal gas equation']
        },
        {
            id: 'callout-pressure-example',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Real-world example: Haber Process',
                text: 'In the manufacture of ammonia (N₂ + 3H₂ ⇌ 2NH₃), extremely high pressures (e.g., 200 atm) are used. While the primary reason is to shift the equilibrium position to the right (to favour product formation), the useful secondary effect is that the high pressure drastically increases the <strong>rate of reaction</strong> between the hydrogen and nitrogen gases.'
            },
            terms: ['Haber process']
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'What remains unchanged?',
                text: 'Changing the concentration or pressure <strong>does not</strong> change the Activation Energy (E_a) or the energy of the particles. It ONLY changes the density of particles in space, thereby affecting the <em>frequency</em> of collisions.'
            },
            terms: []
        },
        {
            id: 'h-surface',
            type: 'heading',
            data: { text: 'Effect of Surface Area (Solids)', level: 2 },
            terms: []
        },
        {
            id: 'list-surface-theory',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Reactions involving solids (as reactants or catalysts) can only occur at the <strong>surface</strong>.',
                    'Particles deep inside a large lump cannot react until the outer layers are removed.',
                    'Breaking a solid into smaller pieces (e.g., into powder) exposes massively increased <strong>total surface area</strong>.',
                    'More solid particles are immediately available to collide with gas or liquid reactants.',
                    'This leads to a <strong>higher frequency of successful collisions</strong> per second, effectively increasing the reaction rate.'
                ]
            },
            terms: ['Surface area']
        },
        {
            id: 'svg-surface-area',
            type: 'svg',
            data: {
                caption: 'Increased Surface Area upon Division exposes more particles to collisions',
                svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Large Lump -->
  <g transform="translate(60, 40)">
    <text x="10" y="-15" font-family="Arial" font-size="14" fill="var(--color-text)">Single Solid Lump</text>
    <rect x="0" y="0" width="100" height="100" fill="#9CA3AF" stroke="var(--color-text)" stroke-width="2" />
    
    <!-- Outer particles hitting -->
    <path d="M -25 30 L -5 30" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-sa)" />
    <circle cx="-3" cy="30" r="5" fill="#ef4444" />
    
    <path d="M -25 70 L -5 70" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-sa)" />
    <circle cx="-3" cy="70" r="5" fill="#ef4444" />
    
    <path d="M 30 -25 L 30 -5" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-sa)" />
    <circle cx="30" cy="-3" r="5" fill="#ef4444" />
    
    <path d="M 70 -25 L 70 -5" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-sa)" />
    <circle cx="70" cy="-3" r="5" fill="#ef4444" />
    
    <path d="M 125 30 L 105 30" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-sa)" />
    <circle cx="103" cy="30" r="5" fill="#ef4444" />
    
    <path d="M 125 70 L 105 70" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-sa)" />
    <circle cx="103" cy="70" r="5" fill="#ef4444" />
  </g>
  
  <text x="230" y="95" font-family="Arial" font-size="30" fill="var(--color-text)" font-weight="bold">→</text>

  <!-- Smaller Pieces -->
  <g transform="translate(320, 40)">
    <text x="10" y="-15" font-family="Arial" font-size="14" fill="var(--color-text)">Finely Divided (Powder)</text>
    <rect x="0" y="0" width="40" height="40" fill="#9CA3AF" stroke="var(--color-text)" stroke-width="2" />
    <rect x="60" y="0" width="40" height="40" fill="#9CA3AF" stroke="var(--color-text)" stroke-width="2" />
    <rect x="0" y="60" width="40" height="40" fill="#9CA3AF" stroke="var(--color-text)" stroke-width="2" />
    <rect x="60" y="60" width="40" height="40" fill="#9CA3AF" stroke="var(--color-text)" stroke-width="2" />
    
    <!-- Inside vertical gap -->
    <path d="M 50 -15 L 50 3" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-sa)" />
    <circle cx="50" cy="5" r="5" fill="#ef4444" />
    
    <path d="M 50 115 L 50 97" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-sa)" />
    <circle cx="50" cy="95" r="5" fill="#ef4444" />
    
    <!-- Inside horizontal gap -->
    <path d="M -15 50 L 3 50" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-sa)" />
    <circle cx="5" cy="50" r="5" fill="#ef4444" />
    
    <path d="M 115 50 L 97 50" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-sa)" />
    <circle cx="95" cy="50" r="5" fill="#ef4444" />
    
    <!-- Outer hits -->
    <path d="M -25 20 L -5 20" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-sa)" />
    <circle cx="-3" cy="20" r="5" fill="#ef4444" />
    
    <path d="M 20 -25 L 20 -5" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-sa)" />
    <circle cx="20" cy="-3" r="5" fill="#ef4444" />
    
    <path d="M 125 80 L 105 80" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-sa)" />
    <circle cx="103" cy="80" r="5" fill="#ef4444" />
  </g>

  <defs>
    <marker id="arrow-sa" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
    </marker>
  </defs>
</svg>`
            },
            terms: []
        },
        {
            id: 'list-surface-examples',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Practical Examples of Surface Area Effects',
                text: '• <strong>Calcium Carbonate & HCl:</strong> Powdered CaCO₃ reacts significantly faster with dilute hydrochloric acid than solid marble chips of the exact same mass.\n• <strong>Hydrogen Peroxide Decomposition:</strong> Using solid manganese(IV) oxide (MnO₂) as a catalyst in powder form produces oxygen drastically faster than using coarse granules.\n• <strong>Catalytic Converters:</strong> To ensure exhaust gases (CO, NOx) react almost instantaneously before exiting the vehicle, expensive catalytic metals (Pt, Pd, Rh) are coated as a micro-thin layer onto a ceramic honeycomb structure. This maximizes surface area while minimizing material cost.'
            },
            terms: []
        },
        {
            id: 'callout-surface-heap-exception',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Exception: The "Heap" Effect',
                text: 'If a very fine powder (e.g., magnesium powder) is piled densely into a heap, reactant fluids or gases might struggle to penetrate the center. In such cases, the <em>effective</em> surface area can actually be <strong>smaller</strong> than that of a flat, solid ribbon, causing the heap to react more slowly.'
            },
            terms: []
        },
        {
            id: 'h-solvent',
            type: 'heading',
            data: { text: 'Solvent Cages (Solutions)', level: 2 },
            terms: []
        },
        {
            id: 'p-solvent',
            type: 'paragraph',
            data: { text: 'In a solution, solute molecules are often tightly surrounded by solvent molecules, forming a <strong>solvent cage</strong>. For a reaction between two different solute particles to occur, they must first diffuse through the solvent until they become trapped within the <em>same</em> solvent cage. Only then are they close enough to collide and potentially react.' },
            terms: ['Solvent cage']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-concentration-theory', prompt: 'Use collision theory to explain why increasing the concentration of hydrochloric acid increases its rate of reaction with marble chips.' },
            { id: 'c2', blockId: 'list-pressure-theory', prompt: 'Explain the effect of increasing gas pressure on the rate of reaction.' },
            { id: 'c3', blockId: 'callout-warning', prompt: 'Does increasing the concentration increase the proportion of particles with energy greater than the activation energy? Explain.' },
            { id: 'c4', blockId: 'list-surface-theory', prompt: 'Explain why powdered zinc reacts much faster with acid than a single large lump of zinc of the same mass.' },
            { id: 'c4b', blockId: 'callout-surface-heap-exception', prompt: 'Why might a dense heap of magnesium powder burn slower than a thin strip of magnesium ribbon?' },
            { id: 'c5', blockId: 'p-solvent', prompt: 'What is a "solvent cage" and why must two solute molecules enter the same one to react?' }
        ],
        summaryText: 'Higher concentration (solutions), higher pressure (gases), or larger surface area (powders vs lumps) all increase the rate of reaction. Explanation: They provide more reactant particles available to collide per unit volume/area, which leads to a higher frequency of successful collisions. Changing these conditions does not change particle energy or activation energy. In solutions, reactants must diffuse into the same "solvent cage" before they can collide.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_9_2;
