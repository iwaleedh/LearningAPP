/**
 * Seed note: Chemistry · Unit 2 · Topic 9 · Subtopic 1
 * "Collision theory and activation energy"
 * Source: Pearson Edexcel IAL Chemistry — Section 9A.1
 */
export const note_chemistry_2_9_1 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the core concepts of collision theory, steric hindrance, and activation energy.' },
            terms: []
        },
        {
            id: 'h-collision',
            type: 'heading',
            data: { text: 'Collision Theory', level: 2 },
            terms: []
        },
        {
            id: 'callout-collision',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The two requirements for a successful collision',
                text: 'For a chemical reaction to occur between two particles, they must collide. However, most collisions do not lead to a reaction. For a collision to be <strong>successful</strong>, two conditions must be met:<br/>1. The particles must collide with energy greater than or equal to the <strong>activation energy</strong>.<br/>2. The particles must collide with the correct <strong>collision geometry</strong> (orientation).'
            },
            terms: ['Collision theory', 'Successful collision']
        },
        {
            id: 'h-activation',
            type: 'heading',
            data: { text: 'Activation Energy', level: 2 },
            terms: []
        },
        {
            id: 'list-activation',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Activation energy (E_a)</strong> is the minimum energy that colliding particles must possess for a chemical reaction to occur.',
                    'Chemical reactions involve two sequential steps:',
                    '1. Breaking initial bonds in the reactants (this requires an input of energy).',
                    '2. Making new bonds to form the products (this releases energy).',
                    'The activation energy provides the initial push to start breaking the existing bonds.',
                    'If particles collide with less energy than E_a, it is a "gentle" collision and they simply bounce off each other unchanged.'
                ]
            },
            terms: ['Activation energy']
        },
        {
            id: 'p-energy-exchange',
            type: 'paragraph',
            data: { text: '<strong>Energy Exchanging:</strong> Even if most particles initially lack sufficient energy, particles constantly exchange energy through standard collisions (speeding up and slowing down). Eventually, particles will enter the required energy state and react.' },
            terms: []
        },
        {
            id: 'svg-energy-profile',
            type: 'svg',
            data: {
                caption: 'Energy Profile Diagram Showing Activation Energy',
                svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="260" x2="380" y2="260" stroke="#333" stroke-width="2" />
  <line x1="40" y1="260" x2="40" y2="20" stroke="#333" stroke-width="2" />
  <text x="20" y="150" font-family="Arial" font-size="14" transform="rotate(-90 20,150)" fill="#777">Energy</text>
  <text x="180" y="280" font-family="Arial" font-size="14" fill="#777">Progress of Reaction</text>
  
  <line x1="60" y1="180" x2="140" y2="180" stroke="var(--color-primary)" stroke-width="3" />
  <text x="70" y="170" font-family="Arial" font-size="14" fill="var(--color-text)">Reactants</text>
  
  <line x1="260" y1="220" x2="340" y2="220" stroke="var(--color-primary)" stroke-width="3" />
  <text x="275" y="240" font-family="Arial" font-size="14" fill="var(--color-text)">Products</text>
  
  <path d="M 140 180 Q 200 40 260 220" stroke="var(--color-text)" stroke-width="2" fill="none" />
  
  <line x1="140" y1="180" x2="200" y2="180" stroke="#999" stroke-dasharray="4" />
  <line x1="200" y1="220" x2="200" y2="85" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow-ae)" marker-start="url(#arrow-start-ae)" />
  
  <text x="210" y="140" font-family="Arial" font-size="14" fill="var(--color-text)">Activation Energy (Ea)</text>
  
  <defs>
    <marker id="arrow-ae" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="var(--color-text)" />
    </marker>
    <marker id="arrow-start-ae" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M9,0 L9,6 L0,3 z" fill="var(--color-text)" />
    </marker>
  </defs>
</svg>`
            },
            terms: []
        },
        {
            id: 'h-steric',
            type: 'heading',
            data: { text: 'Steric Factor and Collision Geometry', level: 2 },
            terms: []
        },
        {
            id: 'list-steric',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Even if colliding particles have energy ≥ E_a, they may simply bounce apart if they collide in the wrong orientation.',
                    'The reactive parts of the molecules must come into direct contact and collide exactly the "right way around".',
                    'For example, in the addition reaction of ethene with hydrogen chloride:',
                    '• <strong>Correct Approach:</strong> The hydrogen end of HCl approaches the electron-rich carbon-carbon double bond. Reaction occurs.',
                    '• <strong>Incorrect Approach:</strong> The chlorine end approaches the double bond, or they collide sideways. Molecules bounce off.'
                ]
            },
            terms: ['Collision orientation']
        },
        {
            id: 'svg-collision-geometry',
            type: 'svg',
            data: {
                caption: 'Collision Orientation: Ethene and Hydrogen Chloride',
                svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Ethene molecule -->
  <g transform="translate(100, 100)">
    <line x1="-30" y1="-20" x2="0" y2="0" stroke="var(--color-text)" stroke-width="3" />
    <line x1="-30" y1="20" x2="0" y2="0" stroke="var(--color-text)" stroke-width="3" />
    <line x1="0" y1="-5" x2="60" y2="-5" stroke="var(--color-text)" stroke-width="3" />
    <line x1="0" y1="5" x2="60" y2="5" stroke="var(--color-text)" stroke-width="3" />
    <line x1="90" y1="-20" x2="60" y2="0" stroke="var(--color-text)" stroke-width="3" />
    <line x1="90" y1="20" x2="60" y2="0" stroke="var(--color-text)" stroke-width="3" />
    <circle cx="0" cy="0" r="12" fill="#555" />
    <circle cx="60" cy="0" r="12" fill="#555" />
    <circle cx="-35" cy="-25" r="8" fill="#aaa" />
    <circle cx="-35" cy="25" r="8" fill="#aaa" />
    <circle cx="95" cy="-25" r="8" fill="#aaa" />
    <circle cx="95" cy="25" r="8" fill="#aaa" />
  </g>

  <!-- Correct orientation HCl -->
  <g transform="translate(250, 40)">
    <line x1="0" y1="0" x2="0" y2="30" stroke="var(--color-text)" stroke-width="3" />
    <circle cx="0" cy="0" r="12" fill="#88b564" />
    <circle cx="0" cy="30" r="8" fill="#aaa" />
    <text x="20" y="20" font-family="Arial" font-size="14" fill="#88b564" font-weight="bold">Correct orientation</text>
    <path d="M 0 45 L 0 65" stroke="#88b564" stroke-width="2" marker-end="url(#arrow-correct)" />
  </g>

  <!-- Incorrect orientation HCl -->
  <g transform="translate(400, 100)">
    <line x1="0" y1="0" x2="-30" y2="0" stroke="var(--color-text)" stroke-width="3" />
    <circle cx="0" cy="0" r="8" fill="#aaa" />
    <circle cx="-30" cy="0" r="12" fill="#88b564" />
    <text x="-40" y="-20" font-family="Arial" font-size="14" fill="#d9534f" font-weight="bold">Incorrect orientation</text>
    <path d="M -45 0 L -65 0" stroke="#d9534f" stroke-width="2" marker-end="url(#arrow-incorrect)" />
  </g>
  
  <defs>
    <marker id="arrow-correct" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#88b564" />
    </marker>
    <marker id="arrow-incorrect" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#d9534f" />
    </marker>
  </defs>
</svg>`
            },
            terms: []
        },
        {
            id: 'p-steric-hindrance',
            type: 'paragraph',
            data: { text: 'Similarly, bulky groups (like large alkyl groups) around the reactive site can physically block the incoming particle. This blocking effect is called <strong>steric hindrance</strong>.' },
            terms: ['Steric hindrance', 'Collision geometry']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-collision', prompt: 'State the two conditions required for a collision between reactant particles to result in a chemical reaction.' },
            { id: 'c2', blockId: 'list-activation', prompt: 'Define the term "activation energy" and explain its role in bond breaking and making.' },
            { id: 'c3', blockId: 'p-steric-hindrance', prompt: 'What is "steric hindrance" and how does it relate to collision theory?' }
        ],
        summaryText: 'Collision theory states reactions only happen when particles collide successfully. Conditions must be met: (1) Collision energy ≥ Activation energy (min energy to break initial bonds), and (2) Correct collision geometry (e.g. hydrogen end of HCl must hit ethene double bond). Particles also constantly exchange energy through random collisions. Steric hindrance occurs when bulky molecular groups block the reactive site, increasing the proportion of unsuccessful collisions.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_9_1;
