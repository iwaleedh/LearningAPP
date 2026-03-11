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
            data: { text: 'Classify halogenoalkanes as primary, secondary, or tertiary, and understand their physical properties (boiling point, solubility), reactivity trends, and hydrolysis reaction with aqueous alkali or silver nitrate.' },
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
            id: 'h-physical-properties',
            type: 'heading',
            data: { text: 'Physical Properties', level: 2 },
            terms: []
        },
        {
            id: 'h-boiling-points',
            type: 'heading',
            data: { text: 'Boiling Points', level: 3 },
            terms: []
        },
        {
            id: 'p-boiling-points',
            type: 'paragraph',
            data: { text: 'Halogenoalkanes have higher boiling points than the corresponding alkanes because they contain polar bonds and have more electrons, leading to stronger <strong>van der Waals dispersion forces</strong> and dipole-dipole interactions. Their boiling points follow two main trends:<br/><br/>• <strong>Chain length:</strong> Boiling point increases as the carbon chain gets longer due to an increase in the number of electrons and increased surface area for stronger dispersion forces.<br/>• <strong>Halogen atom:</strong> For a given alkyl group, boiling points increase in the order <strong>fluoroalkane < chloroalkane < bromoalkane < iodoalkane</strong>. This is because the increasing size and number of electrons of the halogen atoms leads to stronger London dispersion forces.' },
            terms: ['Van der Waals forces', 'Dipole-dipole interactions', 'London dispersion forces']
        },
        {
            id: 'h-solubility',
            type: 'heading',
            data: { text: 'Solubility', level: 3 },
            terms: []
        },
        {
            id: 'p-solubility',
            type: 'paragraph',
            data: { text: 'Halogenoalkanes are <strong>insoluble in water</strong>. Although their molecules are polar, the energy required to break the strong hydrogen bonds between water molecules is much greater than the energy released when new interactions are formed between the halogenoalkane and water. They do, however, dissolve in organic solvents.' },
            terms: ['Solubility', 'Hydrogen bonds']
        },
        {
            id: 'h-reactivity-intro',
            type: 'heading',
            data: { text: 'Reactivity of the Carbon-Halogen Bond', level: 2 },
            terms: []
        },
        {
            id: 'p-reactivity',
            type: 'paragraph',
            data: { text: 'The reactivity of a halogenoalkane is primarily determined by <strong>bond enthalpy</strong> rather than bond polarity. Although the C-F bond is the most polar (which would attract nucleophiles most strongly), it is also the <strong>strongest</strong> bond, meaning it requires the most energy to break. <br/><br/>Conversely, the C-I bond is the least polar but the <strong>weakest</strong>. As a result, iodoalkanes react the fastest, and fluoroalkanes react the slowest. The order of reactivity is: <strong>iodo- > bromo- > chloro- > fluoro-</strong>.' },
            terms: ['Bond enthalpy', 'Bond polarity', 'Relative reactivity']
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
            { id: 'c-bg1', blockId: 'p-boiling-points', prompt: 'Explain why 1-iodopropane has a higher boiling point than 1-chloropropane.' },
            { id: 'c-bg2', blockId: 'p-solubility', prompt: 'Why are halogenoalkanes insoluble in water despite having polar bonds?' },
            { id: 'c-bg3', blockId: 'p-reactivity', prompt: 'Which factor is more important in determining the reactivity of a halogenoalkane: bond polarity or bond enthalpy? Which reacts faster: a chloroalkane or an iodoalkane?' },
            { id: 'c2', blockId: 'callout-hydrolysis', prompt: 'State the reagent and conditions required to hydrolyse a halogenoalkane to produce an alcohol.' },
            { id: 'c3', blockId: 'callout-hydrolysis', prompt: 'Write the general ionic equation for the hydrolysis of a brominated alkane (R-Br) with an alkali.' },
            { id: 'cue-solvent', blockId: 'callout-hydroxide-solvent', prompt: 'In the hydrolysis of halogenoalkanes with hydroxide ions, why is a 50/50 mixture of ethanol and water used as the solvent rather than pure water?' },
            { id: 'c4', blockId: 'p-water', prompt: 'Why is the hydrolysis of a halogenoalkane much faster when using aqueous NaOH rather than pure water?' }
        ],
        summaryText: 'Halogenoalkanes are classified by how many carbon atoms are attached to the carbon bearing the halogen (1°, 2°, or 3°). They react with aqueous alkalis (like KOH(aq)) when heated under reflux to form alcohols. The OH⁻ ion acts as a nucleophile, replacing the halogen in a nucleophilic substitution reaction.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_1;
