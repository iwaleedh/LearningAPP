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
            id: 'svg-profiles',
            type: 'svg',
            data: {
                svg: '<svg viewBox="0 0 520 215" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><!-- LEFT PANEL: EXOTHERMIC --><text x="130" y="13" text-anchor="middle" fill="#374151" font-weight="bold" font-size="12">Exothermic (ΔH negative)</text><line x1="28" y1="18" x2="28" y2="185" stroke="#374151" stroke-width="1.5"/><line x1="28" y1="185" x2="248" y2="185" stroke="#374151" stroke-width="1.5"/><text x="10" y="102" transform="rotate(-90,10,102)" text-anchor="middle" fill="#6b7280" font-size="10">Enthalpy H</text><text x="138" y="200" text-anchor="middle" fill="#6b7280" font-size="10">Reaction progress</text><line x1="38" y1="65" x2="100" y2="65" stroke="#dc2626" stroke-width="2.5"/><text x="69" y="57" text-anchor="middle" fill="#dc2626" font-size="10" font-weight="bold">Reactants</text><line x1="175" y1="145" x2="242" y2="145" stroke="#15803d" stroke-width="2.5"/><text x="208" y="160" text-anchor="middle" fill="#15803d" font-size="10" font-weight="bold">Products</text><path d="M100,65 Q128,32 144,28 Q160,24 175,145" fill="none" stroke="#6366f1" stroke-width="2"/><circle cx="144" cy="28" r="3" fill="#7c3aed"/><text x="153" y="24" fill="#7c3aed" font-size="9">Transition state</text><line x1="62" y1="67" x2="62" y2="143" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,3"/><polygon points="57,71 67,71 62,65" fill="#1d4ed8"/><polygon points="57,139 67,139 62,147" fill="#1d4ed8"/><text x="68" y="104" fill="#1d4ed8" font-size="11" font-weight="bold">ΔH</text><text x="68" y="117" fill="#1d4ed8" font-size="10">(neg)</text><line x1="83" y1="63" x2="83" y2="30" stroke="#d97706" stroke-width="1.5" stroke-dasharray="3,2"/><polygon points="78,34 88,34 83,26" fill="#d97706"/><text x="90" y="50" fill="#d97706" font-size="10">Eₐ</text><!-- DIVIDER --><line x1="258" y1="12" x2="258" y2="192" stroke="#e5e7eb" stroke-width="1"/><!-- RIGHT PANEL: ENDOTHERMIC --><text x="390" y="13" text-anchor="middle" fill="#374151" font-weight="bold" font-size="12">Endothermic (ΔH positive)</text><line x1="272" y1="18" x2="272" y2="185" stroke="#374151" stroke-width="1.5"/><line x1="272" y1="185" x2="510" y2="185" stroke="#374151" stroke-width="1.5"/><text x="390" y="200" text-anchor="middle" fill="#6b7280" font-size="10">Reaction progress</text><line x1="282" y1="145" x2="344" y2="145" stroke="#dc2626" stroke-width="2.5"/><text x="313" y="160" text-anchor="middle" fill="#dc2626" font-size="10" font-weight="bold">Reactants</text><line x1="428" y1="70" x2="505" y2="70" stroke="#15803d" stroke-width="2.5"/><text x="466" y="62" text-anchor="middle" fill="#15803d" font-size="10" font-weight="bold">Products</text><path d="M344,145 Q370,140 384,22 Q398,8 410,18 Q422,32 428,70" fill="none" stroke="#6366f1" stroke-width="2"/><circle cx="396" cy="12" r="3" fill="#7c3aed"/><text x="396" y="8" text-anchor="middle" fill="#7c3aed" font-size="9">Transition state</text><line x1="302" y1="143" x2="302" y2="72" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,3"/><polygon points="297,78 307,78 302,70" fill="#1d4ed8"/><polygon points="297,137 307,137 302,145" fill="#1d4ed8"/><text x="310" y="108" fill="#1d4ed8" font-size="11" font-weight="bold">ΔH</text><text x="310" y="121" fill="#1d4ed8" font-size="10">(pos)</text><line x1="320" y1="144" x2="320" y2="18" stroke="#d97706" stroke-width="1.5" stroke-dasharray="3,2"/><polygon points="315,22 325,22 320,14" fill="#d97706"/><text x="278" y="82" fill="#d97706" font-size="10">Eₐ</text><text x="278" y="95" fill="#d97706" font-size="9">(usually</text><text x="278" y="108" fill="#d97706" font-size="9">larger)</text></svg>',
                caption: 'Reaction profiles for exothermic (left) and endothermic (right) reactions. Reactants are always higher than products in exothermic; products are higher in endothermic. The Eₐ arrow always points upward from the reactant level to the transition state peak.'
            },
            terms: []
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
