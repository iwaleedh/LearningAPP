/**
 * Seed note: Chemistry · Unit 2 · Topic 6 · Subtopic 0
 * "Enthalpy change and sign convention"
 * Source: Pearson Edexcel IAL Chemistry — Section 6A
 */
export const note_chemistry_2_6_0 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand that enthalpy change (ΔH) is the heat energy change measured under conditions of constant pressure, and interpret the sign convention for exothermic and endothermic reactions.' },
            terms: []
        },
        {
            id: 'h-enthalpy',
            type: 'heading',
            data: { text: 'What is Enthalpy?', level: 2 },
            terms: []
        },
        {
            id: 'p-enthalpy-def',
            type: 'paragraph',
            data: { text: '<strong>Chemical energy</strong> is made up of two parts: <strong>kinetic energy</strong> (motion of particles) and <strong>potential energy</strong> (how strongly particles interact). Heat energy contributes to both and dictates the substance\'s temperature.<br/><br/><strong>Enthalpy (H)</strong> is a measure of the total heat energy contained in a thermodynamic system. However, it is impossible to measure the absolute enthalpy of a substance. Instead, chemists measure the <strong>enthalpy change (ΔH)</strong> that occurs during a chemical reaction.' },
            terms: ['Chemical energy', 'Enthalpy', 'Enthalpy change']
        },
        {
            id: 'callout-def',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Definition: Enthalpy Change (ΔH)',
                text: 'Enthalpy change is the heat energy exchange with the surroundings during a chemical reaction, measured at <strong>constant pressure</strong>. The standard unit is kilojoules per mole (kJ mol⁻¹).'
            },
            terms: ['Enthalpy change']
        },
        {
            id: 'h-system',
            type: 'heading',
            data: { text: 'System vs Surroundings', level: 2 },
            terms: []
        },
        {
            id: 'list-system',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>System:</strong> The actual chemical reactants and products involved in the reaction.',
                    '<strong>Surroundings:</strong> Everything else, including the solvent (like water in an aqueous reaction), the reaction vessel, the thermometer, and the air around it.'
                ]
            },
            terms: []
        },
        {
            id: 'h-exoendo',
            type: 'heading',
            data: { text: 'Exothermic and Endothermic Reactions', level: 2 },
            terms: []
        },
        {
            id: 'table-exoendo',
            type: 'comparisonTable',
            data: {
                caption: 'Comparing exothermic and endothermic reactions',
                headers: ['Feature', 'Exothermic', 'Endothermic'],
                rows: [
                    ['Heat transfer', 'Released from system to surroundings', 'Absorbed by system from surroundings'],
                    ['Temperature of surroundings', '<strong>Increases</strong> (feels hot)', '<strong>Decreases</strong> (feels cold)'],
                    ['Enthalpy of products vs reactants', 'Products have <strong>less</strong> energy than reactants', 'Products have <strong>more</strong> energy than reactants'],
                    ['Sign of ΔH', '<strong>Negative (–)</strong>', '<strong>Positive (+)</strong>'],
                    ['Examples', 'Combustion, neutralization, respiration', 'Photosynthesis, thermal decomposition']
                ]
            },
            terms: ['Exothermic', 'Endothermic']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-def', prompt: 'Define enthalpy change (ΔH). State the required condition.' },
            { id: 'c2', blockId: 'list-system', prompt: 'In a chemical reaction occurring in a beaker of water, what constitutes the system and the surroundings?' },
            { id: 'c3', blockId: 'table-exoendo', prompt: 'Compare exothermic and endothermic reactions in terms of: heat transfer, temperature change of surroundings, and the sign of ΔH.' }
        ],
        summaryText: 'Enthalpy change (ΔH) = heat energy change at constant pressure. System = reactants/products; Surroundings = solvent, vessel, air. Exothermic: heat released, surroundings get hotter, products have less energy, ΔH is negative (–). Endothermic: heat absorbed, surroundings get cooler, products have more energy, ΔH is positive (+).',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_6_0;
