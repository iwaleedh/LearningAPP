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
