/**
 * Seed note: Chemistry · Unit 2 · Topic 7 · Subtopic 0
 * "Intermolecular Forces: London forces and permanent dipoles"
 * Source: Pearson Edexcel IAL Chemistry — Section 7A
 */
export const note_chemistry_2_7_0 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the nature of intermolecular forces resulting from London forces and permanent dipoles, and how they arise.' },
            terms: []
        },
        {
            id: 'h-intro',
            type: 'heading',
            data: { text: 'Intermolecular vs Intramolecular Forces', level: 2 },
            terms: []
        },
        {
            id: 'table-forces',
            type: 'comparisonTable',
            data: {
                caption: 'Types of forces in covalent substances',
                headers: ['Force type', 'Location', 'Strength', 'Broken during...'],
                rows: [
                    ['Intramolecular (covalent bonds)', 'Inside the molecule (between atoms)', 'Very strong', 'Chemical reactions'],
                    ['Intermolecular forces', 'Between different molecules', 'Weak', 'Melting and boiling']
                ]
            },
            terms: ['Intermolecular force', 'Intramolecular force']
        },
        {
            id: 'h-london',
            type: 'heading',
            data: { text: '1. London Forces (Instantaneous dipole - induced dipole)', level: 2 },
            terms: []
        },
        {
            id: 'callout-london',
            type: 'callout',
            data: {
                style: 'key',
                title: 'How London forces arise',
                text: '1. Electrons in an atom/molecule are constantly moving.<br/>2. At any instant, the electron distribution may become asymmetrical, creating an <strong>instantaneous dipole</strong>.<br/>3. This temporary dipole repels/attracts electrons in a neighbouring molecule, creating an <strong>induced dipole</strong>.<br/>4. The two dipoles attract each other. This is a <strong>London force</strong>.'
            },
            terms: ['London forces', 'Instantaneous dipole', 'Induced dipole']
        },
        {
            id: 'svg-london-formation',
            type: 'svg',
            data: {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 200" width="100%" height="auto" font-family="Inter,Arial,sans-serif">
    <!-- Panel 1: Symmetrical -->
    <g transform="translate(10, 20)">
        <rect x="0" y="0" width="180" height="150" rx="8" fill="#f8fafc" stroke="#e5e7eb" stroke-width="2"/>
        <text x="90" y="30" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">1. Symmetrical Atom</text>
        <circle cx="90" cy="90" r="40" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/>
        <!-- Nucleus -->
        <circle cx="90" cy="90" r="8" fill="#dc2626"/>
        <!-- Electrons evenly distributed -->
        <circle cx="65" cy="70" r="3" fill="#1e40af"/>
        <circle cx="115" cy="70" r="3" fill="#1e40af"/>
        <circle cx="65" cy="110" r="3" fill="#1e40af"/>
        <circle cx="115" cy="110" r="3" fill="#1e40af"/>
        <circle cx="90" cy="60" r="3" fill="#1e40af"/>
        <circle cx="90" cy="120" r="3" fill="#1e40af"/>
        <text x="90" y="145" font-size="12" fill="#64748b" text-anchor="middle">Even electron cloud</text>
    </g>

    <!-- Arrow 1 to 2 -->
    <path d="M 200 95 L 220 95" stroke="#9ca3af" stroke-width="3" stroke-linecap="round"/>
    <path d="M 215 90 L 225 95 L 215 100" fill="#9ca3af"/>

    <!-- Panel 2: Instantaneous -->
    <g transform="translate(230, 20)">
        <rect x="0" y="0" width="180" height="150" rx="8" fill="#fdf4ff" stroke="#e5e7eb" stroke-width="2"/>
        <text x="90" y="30" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">2. Instantaneous Dipole</text>
        
        <!-- Distorted cloud -->
        <ellipse cx="95" cy="90" rx="45" ry="38" fill="#fae8ff" stroke="#d946ef" stroke-width="2"/>
        <circle cx="80" cy="90" r="8" fill="#dc2626"/>
        <!-- Electrons shifted right -->
        <circle cx="115" cy="75" r="3" fill="#1e40af"/>
        <circle cx="125" cy="95" r="3" fill="#1e40af"/>
        <circle cx="110" cy="105" r="3" fill="#1e40af"/>
        <circle cx="130" cy="85" r="3" fill="#1e40af"/>
        <circle cx="120" cy="110" r="3" fill="#1e40af"/>
        <circle cx="100" cy="70" r="3" fill="#1e40af"/>
        
        <text x="45" y="94" font-size="16" font-weight="bold" fill="#b91c1c">δ+</text>
        <text x="145" y="94" font-size="16" font-weight="bold" fill="#1d4ed8">δ-</text>
        
        <text x="90" y="145" font-size="12" fill="#64748b" text-anchor="middle">Electrons shift randomly</text>
    </g>

    <!-- Arrow 2 to 3 -->
    <path d="M 420 95 L 440 95" stroke="#9ca3af" stroke-width="3" stroke-linecap="round"/>
    <path d="M 435 90 L 445 95 L 435 100" fill="#9ca3af"/>

    <!-- Panel 3: Induced -->
    <g transform="translate(450, 20)">
        <rect x="0" y="0" width="240" height="150" rx="8" fill="#f0fdf4" stroke="#e5e7eb" stroke-width="2"/>
        <text x="120" y="30" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">3. Induced Dipole + Attraction</text>
        
        <!-- Atom 1 (instantaneous) -->
        <ellipse cx="65" cy="90" rx="35" ry="30" fill="#fae8ff" stroke="#d946ef" stroke-width="2"/>
        <circle cx="55" cy="90" r="6" fill="#dc2626"/>
        <text x="35" y="94" font-size="12" font-weight="bold" fill="#b91c1c">δ+</text>
        <text x="100" y="94" font-size="12" font-weight="bold" fill="#1d4ed8">δ-</text>
        
        <!-- Atom 2 (induced) -->
        <ellipse cx="175" cy="90" rx="35" ry="30" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/>
        <circle cx="165" cy="90" r="6" fill="#dc2626"/>
        <text x="145" y="94" font-size="12" font-weight="bold" fill="#b91c1c">δ+</text>
        <text x="210" y="94" font-size="12" font-weight="bold" fill="#1d4ed8">δ-</text>
        
        <!-- Attraction lines -->
        <line x1="105" y1="85" x2="140" y2="85" stroke="#10b981" stroke-width="2" stroke-dasharray="4,3"/>
        <line x1="105" y1="95" x2="140" y2="95" stroke="#10b981" stroke-width="2" stroke-dasharray="4,3"/>
        
        <text x="120" y="75" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">London Force</text>
        <text x="120" y="145" font-size="12" fill="#64748b" text-anchor="middle">Neighbour's electrons repelled</text>
    </g>
</svg>`,
                caption: 'The 3-step process of how instantaneous and induced dipoles create London forces.'
            }
        },
        {
            id: 'p-london-strength',
            type: 'paragraph',
            data: { text: '<strong>Strength of London forces:</strong> London forces exist between ALL molecules (polar and non-polar). Their strength increases as the number of electrons in the molecule increases (which generally correlates with increasing molar mass), because larger electron clouds are more easily polarisable.' },
            terms: ['Polarisability']
        },
        {
            id: 'callout-london-shape',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Effect of Molecular Shape',
                text: 'The size and shape of a molecule also affect London forces. Long, straight-chain molecules (like butane or pentane) have more <strong>points of contact</strong> between neighboring molecules than spherical/branched isomers. More points of contact = stronger overall London forces = higher boiling point.'
            },
            terms: ['Points of contact', 'Branched chain']
        },
        {
            id: 'svg-london-shape',
            type: 'svg',
            data: {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 280" width="100%" height="auto" font-family="Inter,Arial,sans-serif">
    <!-- Left: Straight chain -->
    <g transform="translate(20, 20)">
        <rect x="0" y="0" width="310" height="240" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
        <text x="155" y="30" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Straight-Chain Molecules</text>
        <text x="155" y="48" font-size="13" fill="#475569" text-anchor="middle">(e.g., pentane)</text>
        
        <!-- Molecule 1 -->
        <path d="M 50 100 L 90 80 L 130 100 L 170 80 L 210 100 L 250 80" fill="none" stroke="#2563eb" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Molecule 2 -->
        <path d="M 50 160 L 90 140 L 130 160 L 170 140 L 210 160 L 250 140" fill="none" stroke="#2563eb" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
        
        <!-- Interaction lines -->
        <g stroke="#10b981" stroke-width="2" stroke-dasharray="4,4">
            <line x1="60" y1="105" x2="60" y2="150" />
            <line x1="100" y1="88" x2="100" y2="135" />
            <line x1="140" y1="105" x2="140" y2="150" />
            <line x1="180" y1="88" x2="180" y2="135" />
            <line x1="220" y1="105" x2="220" y2="150" />
            <line x1="240" y1="88" x2="240" y2="135" />
        </g>
        
        <rect x="30" y="185" width="250" height="40" rx="4" fill="#ecfdf5"/>
        <text x="155" y="202" font-size="12" font-weight="bold" fill="#065f46" text-anchor="middle">Large surface area of contact</text>
        <text x="155" y="217" font-size="12" fill="#065f46" text-anchor="middle">Stronger forces ➔ Higher boiling point</text>
    </g>

    <!-- Right: Branched chain -->
    <g transform="translate(360, 20)">
        <rect x="0" y="0" width="310" height="240" rx="8" fill="#fdf4ff" stroke="#cbd5e1" stroke-width="2"/>
        <text x="155" y="30" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Branched-Chain Molecules</text>
        <text x="155" y="48" font-size="13" fill="#475569" text-anchor="middle">(e.g., 2,2-dimethylpropane)</text>
        
        <!-- Molecule 1 (Spherical representation) -->
        <circle cx="155" cy="85" r="25" fill="#d946ef" opacity="0.8"/>
        <path d="M 155 60 L 155 110 M 130 85 L 180 85" stroke="#fdf4ff" stroke-width="6" stroke-linecap="round"/>
        <circle cx="155" cy="85" r="30" fill="none" stroke="#d946ef" stroke-width="2" stroke-dasharray="4,2"/>
        
        <!-- Molecule 2 -->
        <circle cx="155" cy="155" r="25" fill="#d946ef" opacity="0.8"/>
        <path d="M 155 130 L 155 180 M 130 155 L 180 155" stroke="#fdf4ff" stroke-width="6" stroke-linecap="round"/>
        <circle cx="155" cy="155" r="30" fill="none" stroke="#d946ef" stroke-width="2" stroke-dasharray="4,2"/>
        
        <!-- Interaction lines -->
        <g stroke="#10b981" stroke-width="2" stroke-dasharray="4,4">
            <line x1="145" y1="115" x2="145" y2="125" />
            <line x1="165" y1="115" x2="165" y2="125" />
        </g>
        
        <rect x="30" y="185" width="250" height="40" rx="4" fill="#fef2f2"/>
        <text x="155" y="202" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">Small surface area of contact</text>
        <text x="155" y="217" font-size="12" fill="#991b1b" text-anchor="middle">Weaker forces ➔ Lower boiling point</text>
    </g>
</svg>`,
                caption: 'Comparison of surface area contact points between straight and branched isomers.'
            }
        },
        {
            id: 'h-pdd',
            type: 'heading',
            data: { text: '2. Permanent Dipole-Dipole Interactions', level: 2 },
            terms: []
        },
        {
            id: 'callout-pdd',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Permanent dipoles',
                text: 'Some molecules have a permanent unequal distribution of charge because they contain polar bonds and are not symmetrical (e.g. HCl). The δ+ end of one molecule is favorably attracted to the δ– end of another. These forces act <strong>in addition to</strong> London forces.<br/><br/>However, molecules are constantly moving. If they align incorrectly (δ+ near another δ+), they will <strong>repel</strong>. Because of these occasional repulsions, permanent dipole-dipole interactions are sometimes less significant than London forces when averaged out.'
            },
            terms: ['Permanent dipole', 'Repulsion']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-forces', prompt: 'Which type of force is broken when water boils: intramolecular covalent bonds or intermolecular forces?' },
            { id: 'c2', blockId: 'callout-london', prompt: 'Describe the 4 steps of how London forces arise between two non-polar molecules.' },
            { id: 'c3', blockId: 'p-london-strength', prompt: 'Explain why the boiling point of noble gases increases down the group in terms of intermolecular forces.' },
            { id: 'c4', blockId: 'callout-london-shape', prompt: 'Why do straight-chain alkanes have higher boiling points than their branched isomers despite having the same molar mass?' },
            { id: 'c5', blockId: 'callout-pdd', prompt: 'Do permanent dipole-dipole interactions exist in non-polar molecules like Cl₂? Explain why.' },
            { id: 'c6', blockId: 'callout-pdd', prompt: 'Why are permanent dipole-dipole interactions sometimes less significant overall than London forces?' }
        ],
        summaryText: 'Intramolecular forces = strong covalent bonds. Intermolecular = weak attractions between molecules. London forces: exist in all molecules, instantaneous dipoles inducing dipoles. Strength increases with more electrons and more points of contact (straight chains > branched). Permanent dipoles: in polar molecules, δ+ attracted to δ–, but incorrect alignment can cause repulsion.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_7_0;
