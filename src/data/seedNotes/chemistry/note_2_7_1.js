/**
 * Seed note: Chemistry · Unit 2 · Topic 7 · Subtopic 1
 * "Hydrogen bonding"
 * Source: Pearson Edexcel IAL Chemistry — Section 7A
 */
export const note_chemistry_2_7_1 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the nature of hydrogen bonding resulting from interactions between a hydrogen atom bonded to an electronegative atom (N, O, F) and a lone pair on another electronegative atom.' },
            terms: []
        },
        {
            id: 'h-hbond',
            type: 'heading',
            data: { text: 'Hydrogen Bonding', level: 2 },
            terms: []
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: { text: 'Hydrogen bonding is the strongest type of intermolecular force (though still much weaker than a covalent bond, about 10% the strength). It is a special, extreme case of permanent dipole-dipole attraction.' },
            terms: ['Hydrogen bond']
        },
        {
            id: 'callout-conditions',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Two strict requirements for Hydrogen Bonding',
                text: 'For a hydrogen bond to form between two molecules, you MUST have:<br/>1. A hydrogen atom covalently bonded to a very highly electronegative atom (specifically <strong>Nitrogen, Oxygen, or Fluorine</strong>). This makes the H severely electron-deficient (δ+).<br/>2. A <strong>lone pair of electrons</strong> on an N, O, or F atom in the neighboring molecule.'
            },
            terms: ['Electronegativity', 'Lone pair']
        },
        {
            id: 'h-drawing',
            type: 'heading',
            data: { text: 'Drawing Hydrogen Bonds', level: 2 },
            terms: []
        },
        {
            id: 'list-drawing',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Show the relevant dipoles (δ+ on H, δ– on N/O/F).',
                    'Show the lone pair(s) on the electronegative atom.',
                    'Draw a <strong>dashed line</strong> (— — —) representing the hydrogen bond.',
                    'The bond angle around the hydrogen atom involved in the H-bond is typically <strong>180°</strong>.'
                ]
            },
            terms: []
        },
        {
            id: 'callout-examples',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Common examples of molecules that hydrogen bond',
                text: '• <strong>Water (H₂O)</strong>: O is bonded to H, and O has two lone pairs. Each water molecule can form up to 4 hydrogen bonds.<br/>• <strong>Ammonia (NH₃)</strong>: N is bonded to H, and N has one lone pair.<br/>• <strong>Hydrogen fluoride (HF)</strong>: F is bonded to H, and F has three lone pairs. <em>Note: HF is the ONLY fluorine compound that forms hydrogen bonds, because F only needs one bond to complete its octet.</em><br/>• <strong>Alcohols (R-OH)</strong> and <strong>Carboxylic acids (R-COOH)</strong> also form hydrogen bonds.'
            },
            terms: []
        },
        {
            id: 'callout-glucose',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Example: Identifying Forces in Glucose',
                text: 'A common exam skill is identifying ALL intermolecular forces between complex molecules like glucose:<br/>1. <strong>London forces</strong>: Present between ALL molecules because they contain electrons.<br/>2. <strong>Permanent dipole-dipole</strong>: Present between the polar C-O or polar O-H bonds.<br/>3. <strong>Hydrogen bonding</strong>: Present between the hydrogen of the -OH group and a lone pair on the oxygen of another -OH group.'
            },
            terms: ['Intermolecular force']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-conditions', prompt: 'State the two requirements for a hydrogen bond to form.' },
            { id: 'c2', blockId: 'callout-conditions', prompt: 'Which three specific elements can participate in hydrogen bonding when bonded to hydrogen?' },
            { id: 'c3', blockId: 'list-drawing', prompt: 'List 3 essential features that must be included when drawing a diagram of hydrogen bonding between two molecules.' },
            { id: 'c4', blockId: 'callout-examples', prompt: 'Explain why hydrogen sulfide (H₂S) does not form hydrogen bonds, whereas water (H₂O) does.' },
            { id: 'c5', blockId: 'callout-examples', prompt: 'Name the only fluorine-containing compound capable of forming hydrogen bonds. Why are there no others?' },
            { id: 'c6', blockId: 'callout-glucose', prompt: 'Identify the three types of intermolecular forces that exist between glucose molecules, explaining what parts of the molecule are responsible for each.' }
        ],
        summaryText: 'Hydrogen bonding requires H covalently bonded to N, O, or F, and a lone pair on N, O, or F on a neighbour. When drawing: show δ+/δ–, lone pairs, dashed line, and 180° angle around H. Examples include water, ammonia, alcohols, and HF (the only fluorine compound to do so). Large molecules like glucose have all three types of IM forces acting simultaneously.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_7_1;
