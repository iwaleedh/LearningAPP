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
        },
        {
            id: 'callout-sign-rule',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Always include the sign!',
                text: 'When writing any enthalpy change value, you <strong>must always</strong> include a plus or minus sign — even for positive (endothermic) values.<br/><br/>Example: write <strong>+178 kJ mol⁻¹</strong>, never just 178 kJ mol⁻¹ — omitting the + sign risks losing marks in an exam.'
            },
            terms: []
        },
        {
            id: 'h-bond-basis',
            type: 'heading',
            data: { text: 'Why Reactions Involve Enthalpy Changes', level: 2 },
            terms: []
        },
        {
            id: 'list-bond-basis',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Every chemical reaction involves <strong>breaking bonds</strong> in the reactants and <strong>forming bonds</strong> in the products',
                    'Breaking bonds always requires energy input → this step is endothermic',
                    'Making bonds always releases energy → this step is exothermic',
                    'The net ΔH = (energy to break bonds) − (energy released making bonds)',
                    'If more energy is released forming bonds than needed to break them → overall exothermic (ΔH negative)',
                    'If more energy is needed to break bonds than released → overall endothermic (ΔH positive)'
                ]
            },
            terms: []
        },
        {
            id: 'h-stability',
            type: 'heading',
            data: { text: 'Energetic Stability vs Kinetic Stability', level: 2 },
            terms: []
        },
        {
            id: 'table-stability',
            type: 'comparisonTable',
            data: {
                caption: 'Energetic stability vs kinetic stability — two completely different concepts',
                headers: ['Type', 'Definition', 'Shown by', 'Example'],
                rows: [
                    ['<strong>Energetically stable</strong>', 'Has lower enthalpy than possible products; sits lower on an energy diagram', 'Products lower than reactants on enthalpy diagram', 'CO₂ and H₂O are energetically stable'],
                    ['<strong>Energetically unstable</strong>', 'Has higher enthalpy than possible products; could release energy by reacting', 'Reactants higher than products on enthalpy diagram', 'Petrol + O₂ at room temperature'],
                    ['<strong>Kinetically stable</strong>', 'Does not react at a noticeable rate at room temperature, even if energetically unstable', 'High activation energy barrier (Eₐ) on enthalpy diagram', 'Petrol/air mixture — no reaction without a spark']
                ]
            },
            terms: []
        },
        {
            id: 'svg-energetic-stability',
            type: 'svg',
            data: {
                svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><defs><marker id="st-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,1 8,4 0,7" fill="#1d4ed8"/></marker></defs><line x1="38" y1="18" x2="38" y2="182" stroke="#374151" stroke-width="1.5"/><line x1="38" y1="182" x2="392" y2="182" stroke="#374151" stroke-width="1.5"/><text x="14" y="102" transform="rotate(-90,14,102)" text-anchor="middle" fill="#6b7280" font-size="10">Enthalpy (H)</text><text x="215" y="197" text-anchor="middle" fill="#6b7280" font-size="10">Reaction Progress</text><line x1="48" y1="58" x2="118" y2="58" stroke="#dc2626" stroke-width="2.5"/><text x="83" y="50" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="10">Petrol + O₂</text><text x="83" y="40" text-anchor="middle" fill="#dc2626" font-size="9">(energetically unstable)</text><line x1="282" y1="138" x2="385" y2="138" stroke="#15803d" stroke-width="2.5"/><text x="334" y="130" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="10">CO₂ + H₂O</text><text x="334" y="120" text-anchor="middle" fill="#15803d" font-size="9">(energetically stable)</text><path d="M118,58 C148,58 158,12 176,8 C194,4 208,18 218,58 C228,95 268,138 282,138" fill="none" stroke="#6366f1" stroke-width="2.5"/><circle cx="176" cy="8" r="3" fill="#7c3aed"/><text x="176" y="24" text-anchor="middle" fill="#7c3aed" font-size="9">Transition state</text><line x1="95" y1="57" x2="95" y2="11" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4,3"/><polygon points="90,15 100,15 95,7" fill="#d97706"/><text x="104" y="30" fill="#d97706" font-size="10" font-weight="bold">Eₐ</text><text x="104" y="43" fill="#d97706" font-size="9">(very high!)</text><line x1="64" y1="60" x2="64" y2="136" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#st-arr)"/><polygon points="59,66 69,66 64,58" fill="#1d4ed8"/><text x="70" y="100" fill="#1d4ed8" font-size="10" font-weight="bold">ΔH</text><text x="70" y="112" fill="#1d4ed8" font-size="10">(−ve)</text></svg>',
                caption: 'Petrol + O₂ is energetically unstable (large negative ΔH if it reacts) but kinetically stable at room temperature — the very high activation energy Eₐ prevents spontaneous reaction. A spark provides enough energy to start the process.'
            },
            terms: []
        },
        {
            id: 'callout-stable-warn',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Be careful with the word "stable"!',
                text: 'In chemistry, "stable" has two distinct meanings:<br/>• <strong>Energetically stable</strong> — low enthalpy relative to products; lower on an energy diagram<br/>• <strong>Kinetically stable</strong> — high activation energy prevents rapid reaction at room temperature<br/><br/>A substance can be energetically unstable yet kinetically stable (e.g. petrol/air mixture). Always specify which type of stability you mean when discussing reaction feasibility.'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-def', prompt: 'Define enthalpy change (ΔH). State the required condition.' },
            { id: 'c2', blockId: 'list-system', prompt: 'In a chemical reaction occurring in a beaker of water, what constitutes the system and the surroundings?' },
            { id: 'c3', blockId: 'table-exoendo', prompt: 'Compare exothermic and endothermic reactions in terms of: heat transfer, temperature change of surroundings, and the sign of ΔH.' },
            { id: 'c4', blockId: 'list-bond-basis', prompt: 'Why do chemical reactions involve an enthalpy change? Explain in terms of bond breaking and bond making.' },
            { id: 'c5', blockId: 'table-stability', prompt: 'Distinguish between energetic stability and kinetic stability. Give an example of a substance that is energetically unstable but kinetically stable.' }
        ],
        summaryText: 'Enthalpy change (ΔH) = heat energy at constant pressure. System = reactants/products; Surroundings = everything else. Exothermic: ΔH negative, products have less energy, surroundings warm up. Endothermic: ΔH positive, products have more energy, surroundings cool down. Always include ± sign with ΔH values. ΔH arises because bond-breaking energy ≠ bond-making energy. Energetic stability = lower enthalpy (lower on diagram). Kinetic stability = high Eₐ barrier prevents rapid reaction at RT.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_6_0;
