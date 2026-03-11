/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 8
 * "Preparation of alkenes in the lab"
 */
export const note_chemistry_1_5_8 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand methods for the laboratory preparation of alkenes via the dehydration of alcohols.' },
            terms: []
        },
        {
            id: 'h-dehydration-overview',
            type: 'heading',
            data: { text: 'Dehydration of Alcohols', level: 2 },
            terms: []
        },
        {
            id: 'p-dehydration',
            type: 'paragraph',
            data: { text: 'Alkenes can be synthesised in the laboratory by the <strong>dehydration</strong> (removal of a water molecule) of alcohols. This is an elimination reaction.' },
            terms: ['Dehydration', 'Elimination']
        },
        {
            id: 'h-al2o3',
            type: 'heading',
            data: { text: 'Method 1: Using Aluminium Oxide', level: 2 },
            terms: []
        },
        {
            id: 'callout-al2o3',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Aluminium Oxide Catalyst',
                text: 'Ethanol vapour can be passed over heated <strong>aluminium oxide ($Al_2O_3$)</strong> powder. The alcohol is essentially cracked to produce ethene gas and water vapour.<br/><br/>$CH_3CH_2OH \rightarrow CH_2=CH_2 + H_2O$'
            },
            terms: ['Aluminium oxide']
        },
        {
            id: 'h-acid',
            type: 'heading',
            data: { text: 'Method 2: Using an Acid Catalyst', level: 2 },
            terms: []
        },
        {
            id: 'table-acid',
            type: 'comparisonTable',
            data: {
                caption: 'Concentrated Acid Catalysts',
                headers: ['Catalyst', 'Conditions', 'Drawbacks / Benefits'],
                rows: [
                    ['<strong>Conc. $H_2SO_4$</strong>', 'Excess acid, heat to 170 °C', '<strong>Messy:</strong> Sulphuric acid is a strong oxidising agent. It oxidises some alcohol to $CO_2$ and is reduced to $SO_2$. These acidic gases must be washed out by bubbling through $NaOH(aq)$. It also carbonises the organic matter into a solid black mass of carbon.'],
                    ['<strong>Conc. $H_3PO_4$</strong> (Phosphoric(V) acid)', 'Heat', '<strong>Preferred:</strong> Safer and produces a significantly cleaner, less messy reaction because it is not a strong oxidising agent. Often used to dehydrate cyclohexanol to cyclohexene.']
                ]
            },
            terms: ['Sulphuric acid', 'Phosphoric acid']
        },
        {
            id: 'callout-isomers',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Multiple Alkene Isomers',
                text: 'When dehydrating more complex or unsymmetrical alcohols (like butan-2-ol), the double bond can form on either side of the carbon that originally held the -OH group. This often leads to a mixture of products, including both structural isomers and geometric (E/Z) isomers.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Alkenes can be prepared in the laboratory by dehydrating alcohols. This is achieved either by passing the alcohol vapour over heated aluminium oxide ($Al_2O_3$), or by heating with a concentrated acid catalyst. Concentrated phosphoric(V) acid is preferred over concentrated sulphuric acid because it does not oxidise the reagents into unwanted side products (like $CO_2$, $SO_2$, and carbon).' }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-al2o3', prompt: 'Name the solid catalyst that ethanol vapour can be passed over to prepare ethene.' },
            { id: 'cue-2', blockId: 'table-acid', prompt: 'Why is concentrated phosphoric(V) acid often preferred over concentrated sulphuric acid for dehydrating alcohols?' },
            { id: 'cue-3', blockId: 'table-acid', prompt: 'If concentrated sulphuric acid is used to dehydrate ethanol, what two acidic byproduct gases are produced and how are they removed?' },
            { id: 'cue-4', blockId: 'callout-isomers', prompt: 'Why might the dehydration of an unsymmetrical alcohol like butan-2-ol produce a mixture of several different products?' }
        ],
        summaryText: 'Alkenes are made by dehydrating alcohols via elimination. Methods: 1. Pass vapour over heated aluminium oxide ($Al_2O_3$). 2. Heat with conc. acid. Conc. $H_3PO_4$ is safer and cleaner. Conc. $H_2SO_4$ is messy as it oxidises alcohols to $CO_2$, reduces itself to $SO_2$, and leaves solid carbon. Side gases are removed with $NaOH(aq)$. Unsymmetrical alcohols yield a mixture of isomeric alkenes.',
        ready: false
    },
    evidence: []
};
