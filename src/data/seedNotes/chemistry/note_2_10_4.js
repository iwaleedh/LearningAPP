/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 4
 * "Alcohols: Classification and reactions"
 * Source: Pearson Edexcel IAL Chemistry — Section 10C.1
 */
export const note_chemistry_2_10_4 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Classify alcohols as primary, secondary, or tertiary, and understand their combustion and halogenation reactions.' },
            terms: []
        },
        {
            id: 'h-classification',
            type: 'heading',
            data: { text: 'Classification of Alcohols', level: 2 },
            terms: []
        },
        {
            id: 'list-classification',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Primary (1°):</strong> The -OH group is on a carbon attached to 0 or 1 alkyl groups (e.g. ethanol, propan-1-ol).',
                    '<strong>Secondary (2°):</strong> The -OH group is on a carbon attached to 2 alkyl groups (e.g. propan-2-ol).',
                    '<strong>Tertiary (3°):</strong> The -OH group is on a carbon attached to 3 alkyl groups (e.g. 2-methylpropan-2-ol).'
                ]
            },
            terms: ['Primary alcohol', 'Secondary alcohol', 'Tertiary alcohol']
        },
        {
            id: 'h-combustion',
            type: 'heading',
            data: { text: 'Combustion', level: 2 },
            terms: []
        },
        {
            id: 'p-combustion',
            type: 'paragraph',
            data: { text: 'Alcohols combust completely in plenty of oxygen to produce carbon dioxide and water. They are highly flammable and often used as fuels or fuel additives. Example: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.' },
            terms: ['Combustion']
        },
        {
            id: 'h-halogenation',
            type: 'heading',
            data: { text: 'Halogenation (Conversion to Halogenoalkanes)', level: 2 },
            terms: []
        },
        {
            id: 'table-halogenation',
            type: 'comparisonTable',
            data: {
                caption: 'Reagents for making Halogenoalkanes from Alcohols',
                headers: ['Desired Product', 'Reagents Needed', 'Equation / Notes'],
                rows: [
                    ['Chloroalkane', 'PCl₅ (Phosphorus(V) chloride)', 'ROH + PCl₅ → RCl + POCl₃ + <strong>HCl</strong><br/>The steamy fumes of HCl gas prove the presence of an -OH group.'],
                    ['Bromoalkane', '50% conc. H₂SO₄ and Potassium Bromide (KBr)', 'Forms HBr <em>in situ</em> which then reacts with the alcohol.<br/>ROH + HBr → RBr + H₂O'],
                    ['Iodoalkane', 'Red phosphorus and Iodine (PI₃ generated <em>in situ</em>)', 'Heated under reflux.<br/>3ROH + PI₃ → 3RI + H₃PO₃']
                ]
            },
            terms: ['PCl5 test', 'In situ']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-classification', prompt: 'Classify butan-2-ol as primary, secondary, or tertiary.' },
            { id: 'c2', blockId: 'table-halogenation', prompt: 'What reagent is used to convert an alcohol into a chloroalkane, and what observation is made during this reaction?' },
            { id: 'c3', blockId: 'table-halogenation', prompt: 'Why is it usually necessary to prepare the reagent "in situ" when converting an alcohol into an iodoalkane?' },
            { id: 'c4', blockId: 'table-halogenation', prompt: 'State the reagents used to produce a bromoalkane from an alcohol.' }
        ],
        summaryText: 'Alcohols are classified (1°, 2°, 3°) based on how many carbon atoms are attached to the C-OH carbon. They combust cleanly as fuels. They can be turned into halogenoalkanes: For chloroalkanes use solid PCl₅ (releases steamy HCl fumes - the chemical test for -OH groups). For bromoalkanes use 50% H₂SO₄ + KBr to make HBr in situ. For iodoalkanes use red phosphorus + iodine to make PI₃ in situ.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_4;
