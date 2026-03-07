/**
 * Seed note: Chemistry · Unit 2 · Topic 7 · Subtopic 3
 * "Melting and boiling trends in organic substances"
 * Source: Pearson Edexcel IAL Chemistry — Section 7B
 */
export const note_chemistry_2_7_3 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand, in terms of intermolecular interactions, the significance of intermolecular forces in explaining the melting and boiling temperatures of molecular substances (alkanes, alcohols, hydrogen halides, etc.).' },
            terms: []
        },
        {
            id: 'callout-vap',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Enthalpy of Vaporisation',
                text: 'The <strong>Enthalpy of Vaporisation</strong> is the amount of energy required to completely separate one mole of a liquid and convert it into a gas. It is a <strong>direct measure of the strength of the intermolecular forces</strong> present in the substance.'
            },
            terms: ['Enthalpy of vaporisation']
        },
        {
            id: 'h-alkanes',
            type: 'heading',
            data: { text: 'Alkanes: Effect of Chain Length', level: 2 },
            terms: []
        },
        {
            id: 'p-alkanes',
            type: 'paragraph',
            data: { text: 'Alkanes are non-polar molecules, so the <strong>only</strong> intermolecular forces present are London forces. As the carbon chain gets longer, the number of electrons increases. This makes the electron cloud more easily polarisable, resulting in stronger London forces. Therefore, boiling temperature increases as chain length increases.' },
            terms: ['Chain length', 'Polarisability']
        },
        {
            id: 'h-branching',
            type: 'heading',
            data: { text: 'Alkanes: Effect of Branching', level: 2 },
            terms: []
        },
        {
            id: 'callout-branching',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Branched vs Straight-Chain Alkanes',
                text: 'Isomers have the same number of electrons, but branched isomers have <strong>lower boiling points</strong> than straight-chain isomers.<br/><br/><strong>Reason:</strong> Branching makes the molecule more spherical. This decreases the surface area of contact between adjacent molecules, making the London forces weaker. Straight-chain molecules can pack closer together over a larger surface area.'
            },
            terms: ['Isomer', 'Surface area']
        },
        {
            id: 'h-functional',
            type: 'heading',
            data: { text: 'Comparing Different Functional Groups', level: 2 },
            terms: []
        },
        {
            id: 'table-groups',
            type: 'comparisonTable',
            data: {
                caption: 'Comparing boiling points of molecules with similar molar mass',
                headers: ['Molecule Type', 'Example (Mr ~60)', 'Main Intermolecular Force', 'Boiling Point'],
                rows: [
                    ['Alkane', 'Butane (Mr 58.1)', 'London forces only', 'Lowest (–0.5°C)'],
                    ['Aldehyde / Ketone', 'Propanal (Mr 58.1)', 'Permanent dipole-dipole & London forces', 'Medium (49°C)'],
                    ['Alcohol', 'Propan-1-ol (Mr 60.1)', 'Hydrogen bonding & London forces', 'High (97°C)'],
                    ['Carboxylic Acid', 'Ethanoic acid (Mr 60.1)', 'Extensive Hydrogen bonding (forms dimers)', 'Highest (118°C)']
                ]
            },
            terms: ['Functional group']
        },
        {
            id: 'h-halides',
            type: 'heading',
            data: { text: 'Hydrogen Halides Trend', level: 2 },
            terms: []
        },
        {
            id: 'callout-halides',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Boiling Point Trend: HF, HCl, HBr, HI',
                text: '<strong>1. HF has an anomalously high boiling point:</strong> It is the only hydrogen halide capable of forming strong hydrogen bonds.<br/><strong>2. HCl to HI:</strong> The boiling point drops sharply from HF to HCl (which only has permanent dipoles/London forces), but then <strong>steadily increases</strong> from HCl → HBr → HI.<br/><br/><strong>Reason for increase:</strong> As the halogen gets larger down the group, the number of electrons increases significantly. The increasing strength of the London forces outweighs the decreasing permanent dipole-dipole interactions.'
            },
            terms: ['Hydrogen halide']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-vap', prompt: 'Define enthalpy of vaporisation and explain what it provides a direct measure of.' },
            { id: 'c2', blockId: 'p-alkanes', prompt: 'Explain why the boiling point of alkanes increases as the carbon chain gets longer.' },
            { id: 'c3', blockId: 'callout-branching', prompt: 'Which has a higher boiling point: pentane or 2,2-dimethylpropane? Explain your answer.' },
            { id: 'c4', blockId: 'table-groups', prompt: 'Place the following in order of increasing boiling point (assuming similar molar mass): an alkane, a carboxylic acid, an alcohol, a ketone. Give reasons.' },
            { id: 'c5', blockId: 'callout-halides', prompt: 'Explain the trend in boiling points of the hydrogen halides from HCl to HI.' }
        ],
        summaryText: 'Enthalpy of vaporisation directly measures IM force strength. Alkanes: longer chain = more electrons = stronger London forces = higher BP. Branching lowers BP due to less surface area contact. Functional groups: Alkane < Ketone < Alcohol < Carboxylic acid. Hydrogen halides: HF is highest (H-bonds), then BP drops for HCl but steadily increases to HI because increasing London forces (more electrons) outweigh decreasing permanent dipoles.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_7_3;
