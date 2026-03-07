/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 1
 * "Halogenoalkanes Intro and Hydrolysis"
 * Source: Pearson Edexcel IAL Chemistry — Section 10B.1
 */
export const note_chemistry_2_10_1 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Classify halogenoalkanes as primary, secondary, or tertiary, and understand their hydrolysis reaction with aqueous alkali or silver nitrate.' },
            terms: []
        },
        {
            id: 'h-classification',
            type: 'heading',
            data: { text: 'Classification of Halogenoalkanes', level: 2 },
            terms: []
        },
        {
            id: 'list-classification',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Primary (1°):</strong> The halogen atom is attached to a carbon atom that is bonded to only ONE other carbon atom (an alkyl group).',
                    '<strong>Secondary (2°):</strong> The halogen atom is attached to a carbon atom bonded to TWO other carbon atoms.',
                    '<strong>Tertiary (3°):</strong> The halogen atom is attached to a carbon atom bonded to THREE other carbon atoms.'
                ]
            },
            terms: ['Primary halogenoalkane', 'Secondary halogenoalkane', 'Tertiary halogenoalkane']
        },
        {
            id: 'h-hydrolysis',
            type: 'heading',
            data: { text: 'Hydrolysis Reactions', level: 2 },
            terms: []
        },
        {
            id: 'callout-hydrolysis',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Hydrolysis of Halogenoalkanes',
                text: 'Halogenoalkanes undergo hydrolysis to form <strong>alcohols</strong>. The halogen atom is substituted by a hydroxyl (OH) group.<br/><br/><strong>Reagent:</strong> Aqueous potassium hydroxide (KOH(aq)) or sodium hydroxide (NaOH(aq)).<br/><strong>Conditions:</strong> Heat under reflux.<br/><strong>Equation:</strong> R-X + OH⁻ → R-OH + X⁻<br/><br/>This is an example of <em>Nucleophilic Substitution</em>.'
            },
            terms: ['Hydrolysis', 'Nucleophilic substitution']
        },
        {
            id: 'p-water',
            type: 'paragraph',
            data: { text: 'Water itself can also act as the nucleophile to hydrolyse halogenoalkanes, but the reaction is much slower because water is a poor nucleophile compared to the fully negative OH⁻ ion. Aqueous silver nitrate (AgNO₃) is often added to the reaction with water so that the rate of hydrolysis can be timed and compared easily.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-classification', prompt: 'Classify 2-chloro-2-methylpropane as primary, secondary, or tertiary. Explain why.' },
            { id: 'c2', blockId: 'callout-hydrolysis', prompt: 'State the reagent and conditions required to hydrolyse a halogenoalkane to produce an alcohol.' },
            { id: 'c3', blockId: 'callout-hydrolysis', prompt: 'Write the general ionic equation for the hydrolysis of a brominated alkane (R-Br) with an alkali.' },
            { id: 'c4', blockId: 'p-water', prompt: 'Why is the hydrolysis of a halogenoalkane much faster when using aqueous NaOH rather than pure water?' }
        ],
        summaryText: 'Halogenoalkanes are classified by how many carbon atoms are attached to the carbon bearing the halogen (1°, 2°, or 3°). They react with aqueous alkalis (like KOH(aq)) when heated under reflux to form alcohols. The OH⁻ ion acts as a nucleophile, replacing the halogen in a nucleophilic substitution reaction.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_1;
