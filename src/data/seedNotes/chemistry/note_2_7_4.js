/**
 * Seed note: Chemistry · Unit 2 · Topic 7 · Subtopic 4
 * "Solubility patterns"
 * Source: Pearson Edexcel IAL Chemistry — Section 7C
 */
export const note_chemistry_2_7_4 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand, in terms of intermolecular interactions, the significance of intermolecular forces in explaining the solubility of organic and inorganic substances in polar and non-polar solvents.' },
            terms: []
        },
        {
            id: 'callout-rule',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The golden rule of solubility: "Like dissolves like"',
                text: '• <strong>Polar</strong> substances (and ionic compounds) tend to dissolve in <strong>polar</strong> solvents (like water).<br/>• <strong>Non-polar</strong> substances tend to dissolve in <strong>non-polar</strong> solvents (like hexane or cyclohexane).'
            },
            terms: ['Solubility']
        },
        {
            id: 'h-polar',
            type: 'heading',
            data: { text: 'Dissolving in Water (Polar Solvent)', level: 2 },
            terms: []
        },
        {
            id: 'table-water',
            type: 'comparisonTable',
            data: {
                caption: 'Solubility of different substances in water',
                headers: ['Substance Type', 'Soluble in water?', 'Reason why'],
                rows: [
                    ['Ionic compounds (e.g. NaCl)', 'Usually YES', 'The δ+ hydrogens of water attract the anions, and the δ– oxygen attracts the cations (hydration).'],
                    ['Simple alcohols (e.g. ethanol)', 'YES', 'The –OH group can form hydrogen bonds with water molecules.'],
                    ['Halogenoalkanes (e.g. chloroethane)', 'NO', 'Although they have a polar C-X bond, they cannot form H-bonds with water, and their dipole-dipole forces aren\'t strong enough to disrupt water\'s H-bond network.'],
                    ['Alkanes (e.g. hexane)', 'NO', 'They are purely non-polar. They can only form weak London forces with water, which isn\'t enough energy to break the strong H-bonds between water molecules.']
                ]
            },
            terms: ['Hydration']
        },
        {
            id: 'h-chain',
            type: 'heading',
            data: { text: 'The effect of chain length on solubility', level: 2 },
            terms: []
        },
        {
            id: 'p-chain',
            type: 'paragraph',
            data: { text: 'As the non-polar hydrocarbon chain of an alcohol increases in length (e.g. moving from methanol to hexanol), its solubility in water <strong>decreases</strong>. The long hydrocarbon "tail" is hydrophobic (water-fearing) and gets in the way of water molecules trying to hydrogen bond with each other. Hexanol is practically insoluble in water.' },
            terms: ['Hydrophobic']
        },
        {
            id: 'h-nonpolar',
            type: 'heading',
            data: { text: 'Dissolving in Non-Polar Solvents', level: 2 },
            terms: []
        },
        {
            id: 'p-nonpolar',
            type: 'paragraph',
            data: { text: 'Non-polar substances, such as iodine (I₂) or alkanes, dissolve well in non-polar solvents like hexane. This is because the London forces that form between the solute and the solvent are of similar strength to the London forces broken in the pure solute and pure solvent.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-rule', prompt: 'State the general rule for determining if a substance will dissolve in a given solvent.' },
            { id: 'c2', blockId: 'table-water', prompt: 'Explain why ethanol is highly soluble in water, but chloroethane is insoluble, even though both have polar bonds.' },
            { id: 'c3', blockId: 'table-water', prompt: 'Explain in terms of intermolecular forces why alkanes do not dissolve in water.' },
            { id: 'c4', blockId: 'p-chain', prompt: 'Describe and explain the trend in solubility of straight-chain alcohols in water as the carbon chain gets longer.' }
        ],
        summaryText: '"Like dissolves like". Water is highly polar and forms H-bonds. To dissolve in water, a solute must either be ionic (hydration) or capable of forming H-bonds (like the –OH in alcohols). Adding a long non-polar hydrocarbon chain to an alcohol reduces its solubility by disrupting water\'s H-bond network. Non-polar substances (alkanes, halogens) dissolve in non-polar solvents via London forces.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_7_4;
