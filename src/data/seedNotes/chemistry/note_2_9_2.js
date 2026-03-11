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
            id: 'p-pressure',
            type: 'paragraph',
            data: { text: 'Increasing the pressure of a reaction involving gases <strong>increases the rate of reaction</strong>. Changing the pressure of a gas is exactly the same concept as changing the concentration of a solution.' },
            terms: []
        },
        {
            id: 'callout-pressure',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Collision Theory Explanation: Pressure',
                text: '1. Higher pressure (achieved by compressing the gas into a smaller volume) means there are <strong>more gas molecules per unit volume</strong>.<br/>2. The gas molecules are closer together.<br/>3. This leads to a <strong>higher frequency of collisions</strong>.<br/>4. This results in a higher frequency of successful collisions, increasing the rate.'
            },
            terms: []
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
            { id: 'c1', blockId: 'callout-concentration', prompt: 'Use collision theory to explain why increasing the concentration of hydrochloric acid increases its rate of reaction with marble chips.' },
            { id: 'c2', blockId: 'callout-pressure', prompt: 'Explain the effect of increasing gas pressure on the rate of reaction.' },
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
