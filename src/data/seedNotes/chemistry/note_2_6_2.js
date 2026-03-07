/**
 * Seed note: Chemistry · Unit 2 · Topic 6 · Subtopic 2
 * "Enthalpy level diagrams"
 * Source: Pearson Edexcel IAL Chemistry — Section 6A.3
 */
export const note_chemistry_2_6_2 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Construct and interpret enthalpy level diagrams (reaction profiles) showing clearly the relative energy levels of reactants and products, the activation energy, and the enthalpy change.' },
            terms: []
        },
        {
            id: 'h-diagrams',
            type: 'heading',
            data: { text: 'Enthalpy Level Diagrams (Reaction Profiles)', level: 2 },
            terms: []
        },
        {
            id: 'p-diagrams',
            type: 'paragraph',
            data: { text: 'An enthalpy level diagram shows how the enthalpy of the system changes as the reaction progresses. They compare the total enthalpy of the reactants with the total enthalpy of the products.' },
            terms: ['Enthalpy level diagram', 'Reaction profile']
        },
        {
            id: 'table-diagrams',
            type: 'comparisonTable',
            data: {
                caption: 'Comparing Reaction Profiles',
                headers: ['Feature', 'Exothermic Profile', 'Endothermic Profile'],
                rows: [
                    ['Energy levels', 'Reactants are <strong>higher</strong> than products', 'Reactants are <strong>lower</strong> than products'],
                    ['ΔH arrow direction', 'Points <strong>DOWNWARDS</strong> (loss of energy)', 'Points <strong>UPWARDS</strong> (gain of energy)'],
                    ['ΔH sign', 'Negative (–)', 'Positive (+)'],
                    ['Activation Energy (Ea)', 'Arrow points up from reactants to the peak', 'Arrow points up from reactants to the peak (usually much larger)']
                ]
            },
            terms: ['Activation energy']
        },
        {
            id: 'callout-ea',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Activation Energy (Ea)',
                text: '<strong>Definition:</strong> The minimum amount of energy required to start a chemical reaction (by breaking the initial bonds in the reactants).<br/><br/>On an enthalpy level diagram, it is always shown as an arrow pointing <strong>upwards</strong> from the reactant level to the highest peak of the curve. Ea is always a positive value.'
            },
            terms: ['Activation energy']
        },
        {
            id: 'callout-drawing',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'How to draw an enthalpy profile',
                text: '1. Draw the y-axis and label it "Enthalpy, H". (X-axis is "Reaction pathway/progress").<br/>2. Draw a horizontal line for the reactants.<br/>3. Draw a horizontal line for the products (lower for exothermic, higher for endothermic).<br/>4. Draw a curve connecting them, rising to a peak (the transition state) before dropping to the products.<br/>5. Label ΔH (arrow pointing from reactants to products).<br/>6. Label Ea (arrow pointing UP from reactants to the peak).'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-diagrams', prompt: 'Describe the relative heights of reactants and products on an enthalpy level diagram for an exothermic reaction. Which way does the ΔH arrow point?' },
            { id: 'c2', blockId: 'callout-ea', prompt: 'Define activation energy (Ea) and describe how it is shown on an enthalpy level diagram.' },
            { id: 'c3', blockId: 'callout-drawing', prompt: 'Draw an enthalpy profile for an endothermic reaction, clearly labelling the axes, reactants, products, ΔH, and Ea.' }
        ],
        summaryText: 'Enthalpy diagram shows energy vs reaction progress. Exothermic: reactants higher than products, ΔH arrow points down (–). Endothermic: reactants lower than products, ΔH arrow points up (+). Activation Energy (Ea) = minimum energy to start reaction, shown as upward arrow from reactants to peak curve.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_6_2;
