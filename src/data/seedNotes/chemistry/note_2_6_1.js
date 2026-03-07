/**
 * Seed note: Chemistry · Unit 2 · Topic 6 · Subtopic 1
 * "Standard conditions and standard states"
 * Source: Pearson Edexcel IAL Chemistry — Section 6A
 */
export const note_chemistry_2_6_1 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Know standard conditions (100 kPa and a specified temperature, usually 298 K) and define standard state. Understand why defining standard conditions is necessary for comparing enthalpy changes.' },
            terms: []
        },
        {
            id: 'h-standard',
            type: 'heading',
            data: { text: 'Standard Conditions', level: 2 },
            terms: []
        },
        {
            id: 'p-why',
            type: 'paragraph',
            data: { text: 'The enthalpy change of a reaction depends on the conditions under which the reaction occurs (e.g. pressure and temperature). To allow chemists to compare enthalpy changes fairly, they are usually stated under <strong>standard conditions</strong>.' },
            terms: []
        },
        {
            id: 'callout-standard',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Standard conditions (⦵)',
                text: 'Standard conditions are denoted by the plimsoll symbol (⦵), e.g. ΔH⦵.<br/>They are defined as:<br/>• A pressure of <strong>100 kPa</strong> (approx 1 atmosphere).<br/>• A stated temperature, usually <strong>298 K</strong> (25°C).<br/>• A concentration of <strong>1.0 mol dm⁻³</strong> for all solutions.'
            },
            terms: ['Standard conditions']
        },
        {
            id: 'h-state',
            type: 'heading',
            data: { text: 'Standard State', level: 2 },
            terms: []
        },
        {
            id: 'callout-state',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Definition: Standard State',
                text: 'The <strong>standard state</strong> of a substance is its physical state (solid, liquid, or gas) under standard conditions (100 kPa and 298 K).<br/><br/>If a substance can exist as different allotropes (like carbon), its standard state is its most thermodynamically stable allotrope at these conditions.'
            },
            terms: ['Standard state']
        },
        {
            id: 'table-states',
            type: 'comparisonTable',
            data: {
                caption: 'Standard states of common elements',
                headers: ['Element', 'Most stable allotrope / form', 'Standard state (298 K, 100 kPa)'],
                rows: [
                    ['Oxygen', 'O₂', 'Gas (g)'],
                    ['Bromine', 'Br₂', 'Liquid (l)'],
                    ['Iodine', 'I₂', 'Solid (s)'],
                    ['Carbon', 'Graphite (not diamond)', 'Solid (s)'],
                    ['Water', 'H₂O', 'Liquid (l)']
                ]
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-standard', prompt: 'State the three standard conditions (including concentration) used when measuring enthalpy changes.' },
            { id: 'c2', blockId: 'callout-state', prompt: 'Define the term "standard state". What symbol is used to indicate standard conditions?' },
            { id: 'c3', blockId: 'table-states', prompt: 'State the standard states of: (a) Bromine, (b) Carbon, (c) Water.' }
        ],
        summaryText: 'Standard conditions (⦵) ensure fair comparison: 100 kPa pressure, stated temp (usually 298 K), and 1.0 mol dm⁻³ for solutions. Standard state = physical state at these conditions (e.g. C is solid graphite, Br₂ is liquid, H₂O is liquid).',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_6_1;
