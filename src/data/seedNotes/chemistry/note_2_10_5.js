/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 5
 * "Oxidation of alcohols"
 * Source: Pearson Edexcel IAL Chemistry — Section 10C.2
 */
export const note_chemistry_2_10_5 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the oxidation reactions of primary, secondary, and tertiary alcohols using acidified potassium dichromate(VI), and use the triiodomethane (iodoform) reaction to identify the CH₃CH(OH)– group.' },
            terms: []
        },
        {
            id: 'h-reagent',
            type: 'heading',
            data: { text: 'The Oxidising Agent', level: 2 },
            terms: []
        },
        {
            id: 'callout-reagent',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Acidified Potassium Dichromate(VI)',
                text: 'The standard oxidising agent for alcohols is <strong>acidified potassium dichromate(VI)</strong> (K₂Cr₂O₇ + dilute H₂SO₄).<br/>When it oxidises an alcohol, the dichromate(VI) ion (Cr₂O₇²⁻) is reduced to the chromium(III) ion (Cr³⁺).<br/><br/><strong>Colour change:</strong> ORANGE to GREEN.'
            },
            terms: ['Potassium dichromate(VI)']
        },
        {
            id: 'callout-cp7',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Core Practical 7: Oxidation of Propan-1-ol',
                text: '<strong>To produce Propanal (Aldehyde):</strong> Gently heat propan-1-ol with acidified K₂Cr₂O₇ using <strong>simple distillation</strong> apparatus. The propanal boils off as soon as it forms, preventing further oxidation.<br/><strong>To produce Propanoic Acid (Carboxylic Acid):</strong> Heat propan-1-ol with excess acidified K₂Cr₂O₇ under <strong>reflux</strong> for a prolonged period, then distil the product.<br/><br/>In both cases, the orange Cr(VI) ions are reduced to green Cr³⁺ ions as the alcohol is oxidised.'
            },
            terms: []
        },
        {
            id: 'h-oxidation',
            type: 'heading',
            data: { text: 'Oxidation Products', level: 2 },
            terms: []
        },
        {
            id: 'table-oxidation',
            type: 'comparisonTable',
            data: {
                caption: 'Products of Alcohol Oxidation',
                headers: ['Alcohol Type', 'Reaction Conditions', 'Product', 'Observation'],
                rows: [
                    ['Primary (1°)', 'Gentle heating with DISTILLATION equipment', '<strong>Aldehyde</strong>', 'Orange to Green'],
                    ['Primary (1°)', 'Heating strongly under REFLUX with excess oxidant', '<strong>Carboxylic Acid</strong>', 'Orange to Green'],
                    ['Secondary (2°)', 'Heating under REFLUX', '<strong>Ketone</strong>', 'Orange to Green'],
                    ['Tertiary (3°)', 'Any conditions', 'NO REACTION', 'Reaction mixture stays ORANGE (they cannot be oxidised because there is no C-H bond to break on the alpha-carbon)']
                ]
            },
            terms: ['Aldehyde', 'Ketone', 'Carboxylic acid']
        },
        {
            id: 'callout-benedicts',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Testing between Aldehydes and Ketones',
                text: 'Only <strong>aldehydes</strong> can be further oxidised to carboxylic acids. Ketones cannot. Two distinct chemical tests exploit this:<br/>1. <strong>Benedict\'s/Fehling\'s Solution:</strong> Add and heat. Aldehydes turn the blue solution into a <strong>brick-red precipitate</strong>. Ketones remain blue.<br/>2. <strong>Tollens\' Reagent:</strong> Add and warm. Aldehydes create a <strong>silver mirror</strong> on the wall of the test tube. Ketones do nothing.'
            },
            terms: ['Benedict\'s solution', 'Fehling\'s solution', 'Tollens\' reagent']
        },
        {
            id: 'h-iodoform',
            type: 'heading',
            data: { text: 'The Triiodomethane (Iodoform) Reaction', level: 2 },
            terms: []
        },
        {
            id: 'callout-iodoform',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Testing for the CH₃CH(OH)– Group',
                text: 'The triiodomethane (or iodoform) reaction is a specific test used to identify the presence of a <strong>CH₃CH(OH)–</strong> group in an alcohol.<br/><br/><strong>Reagents:</strong> Iodine (I₂) and sodium hydroxide (NaOH), warmed gently.<br/><strong>Positive Result:</strong> A <strong>pale yellow precipitate</strong> of triiodomethane (CHI₃), which has a distinct "medical" or antiseptic smell.'
            },
            terms: ['Triiodomethane', 'Iodoform']
        },
        {
            id: 'list-iodoform-alcohols',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Primary alcohols:</strong> Only <strong>ethanol</strong> (CH₃CH₂OH) gives a positive result.',
                    '<strong>Secondary alcohols:</strong> Any secondary alcohol where the -OH group is on the second carbon gives a positive result (e.g., propan-2-ol, butan-2-ol).',
                    '<strong>Tertiary alcohols:</strong> <strong>No</strong> tertiary alcohols give a positive result.',
                    '<strong>The Mechanism:</strong> The iodine and sodium hydroxide first act as an oxidising agent, converting the alcohol into a methyl ketone CH₃CO– (or ethanal). This carbonyl then reacts further to form CHI₃.'
                ]
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-reagent', prompt: 'State the reagent used to oxidise alcohols, and the expected colour change if oxidation is successful.' },
            { id: 'c-cp7', blockId: 'callout-cp7', prompt: 'In Core Practical 7, what apparatus setup is used to oxidise propan-1-ol to propanal, and why?' },
            { id: 'c-cp7-2', blockId: 'callout-cp7', prompt: 'In Core Practical 7, what apparatus setup is used to oxidise propan-1-ol fully to propanoic acid?' },
            { id: 'c2', blockId: 'table-oxidation', prompt: 'If you want to produce an aldehyde from a primary alcohol, what specific experimental conditions must you use, and why?' },
            { id: 'c3', blockId: 'table-oxidation', prompt: 'What is the product when a secondary alcohol is heated under reflux with acidified potassium dichromate(VI)?' },
            { id: 'c4', blockId: 'table-oxidation', prompt: 'Explain structurally why tertiary alcohols cannot be oxidised by acidified potassium dichromate(VI).' },
            { id: 'c5', blockId: 'callout-benedicts', prompt: 'Describe a chemical test to distinguish between propanal (an aldehyde) and propanone (a ketone), stating the reagent and observations.' },
            { id: 'c-iodoform-1', blockId: 'callout-iodoform', prompt: 'What specific functional group does the triiodomethane (iodoform) reaction test for in alcohols? State the reagents and positive observation.' },
            { id: 'c-iodoform-2', blockId: 'list-iodoform-alcohols', prompt: 'Ethanol is the only primary alcohol to give a positive iodoform test. Which tyoe of secondary alcohols give a positive result?' }
        ],
        summaryText: "Core Practical 7: Oxidation of propan-1-ol. Alcohols are oxidised using acidified potassium dichromate(VI), changing colour from ORANGE (Cr VI) to GREEN (Cr III). Primary alcohols oxidise to aldehydes (using distillation to boil it off immediately) or to carboxylic acids (heating under reflux with excess). Secondary alcohols oxidise to ketones (under reflux). Tertiary alcohols do NOT oxidise. Aldehydes can be distinguished from ketones using Benedict's (blue to brick-red ppt) or Tollens' reagent (silver mirror). The triiodomethane (iodoform) reaction (I₂ + NaOH) produces a pale yellow ppt of CHI₃ with ethanol and secondary alcohols with a methyl group.",
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_5;
