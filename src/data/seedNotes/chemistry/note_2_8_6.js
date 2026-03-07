/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 6
 * "Group 7 Trends and Displacement Reactions"
 * Source: Pearson Edexcel IAL Chemistry — Sections 8C.1, 8C.2
 */
export const note_chemistry_2_8_6 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the trends in boiling point, electronegativity, and reactivity down Group 7 (halogens), and describe their displacement reactions.' },
            terms: []
        },
        {
            id: 'h-trends',
            type: 'heading',
            data: { text: 'Trends Down Group 7 (Halogens)', level: 2 },
            terms: []
        },
        {
            id: 'list-trends',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Physical State:</strong> F₂ (pale yellow gas), Cl₂ (green gas), Br₂ (red-brown liquid), I₂ (grey solid / purple vapour).',
                    '<strong>Boiling points INCREASE:</strong> Molecules get larger with more electrons, so London forces between molecules become stronger and require more energy to break.',
                    '<strong>Electronegativity DECREASES:</strong> Atoms get larger and electron shielding increases down the group. The outer electrons (and the pair of electrons in a covalent bond) are further from the nucleus, so the nuclear attraction is weaker.',
                    '<strong>Reactivity DECREASES:</strong> Halogens react by gaining an electron (forming X⁻). Due to increased atomic radius and shielding, the nucleus is less able to attract and capture an incoming electron into its outer shell.'
                ]
            },
            terms: ['Halogens', 'Electronegativity']
        },
        {
            id: 'h-displacement',
            type: 'heading',
            data: { text: 'Displacement Reactions of Halogens', level: 2 },
            terms: []
        },
        {
            id: 'callout-displacement',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Halogen Displacement',
                text: 'A more reactive halogen (higher up the group) will displace a less reactive halide ion from an aqueous solution.<br/><br/><strong>Example:</strong> Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq)<br/>Here, Cl₂ is a stronger oxidising agent than Br₂. It takes electrons from Br⁻, oxidising it to Br₂, while Cl₂ is reduced to Cl⁻. The solution turns orange-brown.'
            },
            terms: ['Displacement reaction', 'Oxidising power']
        },
        {
            id: 'table-colours',
            type: 'comparisonTable',
            data: {
                caption: 'Identifying Halogens in Solution',
                headers: ['Halogen present', 'Colour in Water', 'Colour in Hexane (Organic Solvent)'],
                rows: [
                    ['Chlorine (Cl₂)', 'Pale green / Colourless', 'Pale green'],
                    ['Bromine (Br₂)', 'Orange / Yellow', 'Orange / Red'],
                    ['Iodine (I₂)', 'Brown', 'Violet / Purple']
                ]
            },
            terms: ['Hexane']
        },
        {
            id: 'p-solvent',
            type: 'paragraph',
            data: { text: 'Adding an organic solvent like cyclohexane and shaking the tube helps clearly distinguish between bromine and iodine. The halogens dissolve much better in the organic layer (which floats on top). Bromine goes orange/red in the top layer, while iodine goes a vivid purple/pink.' },
            terms: ['Cyclohexane']
        },
        {
            id: 'h-disproportionation',
            type: 'heading',
            data: { text: 'Disproportionation of Chlorine', level: 2 },
            terms: []
        },
        {
            id: 'p-disproportionation',
            type: 'paragraph',
            data: { text: 'Disproportionation is a redox reaction where the <strong>same element</strong> is simultaneously oxidised and reduced. Chlorine uniquely undergoes several important disproportionation reactions:' },
            terms: ['Disproportionation']
        },
        {
            id: 'callout-water',
            type: 'callout',
            data: {
                style: 'worked',
                title: '1. Reaction with Water (Purifying Water)',
                text: 'Cl₂(g) + H₂O(l) ⇌ HCl(aq) + HClO(aq)<br/><br/>Chlorine (0) goes to -1 in hydrochloric acid (HCl), so it is <strong>reduced</strong>.<br/>Chlorine (0) also goes to +1 in chloric(I) acid (HClO), so it is <strong>oxidised</strong>.<br/>This forms a mixture of acids used to kill bacteria in water.'
            },
            terms: ['Chloric(I) acid']
        },
        {
            id: 'callout-cold-alkali',
            type: 'callout',
            data: {
                style: 'worked',
                title: '2. Reaction with Cold, Dilute Alkali (Bleach)',
                text: 'Cl₂(g) + 2NaOH(aq) → NaCl(aq) + NaClO(aq) + H₂O(l)<br/><br/>Chlorine (0) goes to -1 in sodium chloride (NaCl).<br/>Chlorine (0) goes to +1 in sodium chlorate(I) (NaClO).<br/>Sodium chlorate(I) is the active ingredient in household bleach and acts as a disinfectant.'
            },
            terms: ['Sodium chlorate(I)', 'Bleach']
        },
        {
            id: 'callout-hot-alkali',
            type: 'callout',
            data: {
                style: 'worked',
                title: '3. Reaction with Hot, Concentrated Alkali',
                text: '3Cl₂(g) + 6NaOH(aq) → 5NaCl(aq) + NaClO₃(aq) + 3H₂O(l)<br/><br/>Chlorine (0) goes to -1 in NaCl.<br/>Chlorine (0) goes to <strong>+5</strong> in sodium chlorate(V) (NaClO₃).<br/>Sodium chlorate(V) is often used as a weed killer.'
            },
            terms: ['Sodium chlorate(V)']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-trends', prompt: 'Explain the trend in boiling points down Group 7 from Chlorine to Iodine.' },
            { id: 'c2', blockId: 'list-trends', prompt: 'Explain why electronegativity decreases down Group 7.' },
            { id: 'c3', blockId: 'callout-displacement', prompt: 'Write the ionic equation for the reaction when chlorine water is added to a solution of potassium iodide.' },
            { id: 'c4', blockId: 'table-colours', prompt: 'A displacement reaction results in a dark brown aqueous solution. An organic solvent is added, shaken, and the top layer turns purple. Identify the halogen formed.' },
            { id: 'c5', blockId: 'p-disproportionation', prompt: 'Define disproportionation.' },
            { id: 'c6', blockId: 'callout-cold-alkali', prompt: 'Write the equation for the reaction of chlorine gas with cold, dilute aqueous sodium hydroxide, and state the oxidation numbers of chlorine in the products.' },
            { id: 'c7', blockId: 'callout-hot-alkali', prompt: 'What visually distinguishes the product formula when chlorine reacts with HOT, conc. NaOH instead of cold, dilute NaOH?' }
        ],
        summaryText: 'Group 7 (halogens) exist as diatomic molecules. Down the group: atomic radius and shielding increase. This increases London forces (higher boiling points) but decreases electronegativity and reactivity. Hexane/cyclohexane distinguishes halogens: Cl₂ (pale green), Br₂ (orange), I₂ (purple). Chlorine undergoes disproportionation (simultaneous oxidation and reduction). With cold NaOH, it forms bleach (NaClO, Cl is +1). With hot NaOH, it forms weedkiller (NaClO₃, Cl is +5).',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_6;
