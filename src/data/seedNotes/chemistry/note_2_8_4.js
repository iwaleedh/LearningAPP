/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 4
 * "Group 2 Oxides, Hydroxides, and Thermal Stability"
 * Source: Pearson Edexcel IAL Chemistry — Sections 8B.4, 8B.5
 */
export const note_chemistry_2_8_4 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the trends in solubility of Group 2 hydroxides and sulfates, and explain the trend in thermal stability of Group 1 and 2 carbonates and nitrates.' },
            terms: []
        },
        {
            id: 'h-basicity',
            type: 'heading',
            data: { text: 'Basic Oxides and Hydroxides', level: 2 },
            terms: []
        },
        {
            id: 'p-basicity',
            type: 'paragraph',
            data: { text: 'Group 1 and 2 oxides are <strong>basic oxides</strong>. When they react with water, they form colourless alkaline hydroxide solutions (pH > 7). All these oxides and hydroxides can neutralise acids forming a salt and water.' },
            terms: []
        },
        {
            id: 'callout-alkalis',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Key Applications',
                text: '• <strong>Calcium Hydroxide (Limewater):</strong> Used as the chemical test for carbon dioxide (turns cloudy by precipitating calcium carbonate). Also used in agriculture to neutralise acidic soil.<br/>• <strong>Magnesium Hydroxide ("Milk of Magnesia"):</strong> Very slightly soluble, forms a suspension. Used as an indigestion remedy to neutralise excess stomach acid.'
            },
            terms: ['Limewater', 'Milk of magnesia']
        },
        {
            id: 'h-solubility',
            type: 'heading',
            data: { text: 'Solubility Trends of Group 2 Compounds', level: 2 },
            terms: []
        },
        {
            id: 'table-solubility',
            type: 'comparisonTable',
            data: {
                caption: 'Solubility of Group 2 Hydroxides and Sulfates',
                headers: ['Compound Type', 'Trend Down Group 2', 'Examples (Top vs Bottom)'],
                rows: [
                    ['Hydroxides (M(OH)₂)', 'Solubility INCREASES', 'Mg(OH)₂ is sparingly soluble.<br/>Ba(OH)₂ is fully soluble (strongly alkaline).'],
                    ['Sulfates (MSO₄)', 'Solubility DECREASES', 'MgSO₄ is fully soluble.<br/>BaSO₄ is completely insoluble.']
                ]
            },
            terms: ['Solubility']
        },
        {
            id: 'callout-barium',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Test for Sulfate ions',
                text: 'The insolubility of barium sulfate is used to test for sulfate ions (SO₄²⁻). You add acidified barium chloride solution to the mystery sample. If a <strong>thick white precipitate</strong> of BaSO₄ forms, sulfate ions are present.'
            },
            terms: ['Barium sulfate', 'Sulfate test']
        },
        {
            id: 'h-thermal',
            type: 'heading',
            data: { text: 'Thermal Stability of Carbonates and Nitrates', level: 2 },
            terms: []
        },
        {
            id: 'p-thermal',
            type: 'paragraph',
            data: { text: 'As you go down Group 1 or Group 2, the carbonates and nitrates become <strong>more thermally stable</strong> (meaning they require much higher temperatures to decompose).' },
            terms: ['Thermal stability']
        },
        {
            id: 'callout-polarising',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Explaining Thermal Stability Trend',
                text: 'Comparing thermal stability relies heavily on <strong>cation size and charge</strong>. Nitrates (NO₃⁻) and carbonates (CO₃²⁻) are large, complex anions.<br/><br/>1. Smaller cations with higher charges (like Mg²⁺) have a <strong>high charge density</strong>.<br/>2. This gives them strong <strong>polarising power</strong>, deeply distorting the electron cloud of the nearby complex anion.<br/>3. This distortion heavily <strong>weakens the internal bonds</strong> inside the anion (like C-O or N-O), allowing it to break apart and decompose at lower temperatures.<br/>4. As you go down the group, the cation radius increases entirely, so polarising power drops. The anion is less distorted, thus more thermally stable.'
            },
            terms: ['Polarising power', 'Charge density', 'Distortion']
        },
        {
            id: 'list-equations',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Group 2 Carbonates:</strong> All decompose to form a metal oxide and carbon dioxide.<br/>MCO₃(s) → MO(s) + CO₂(g)',
                    '<strong>Group 2 Nitrates:</strong> All undergo <i>greater</i> decomposition to form a metal oxide, nitrogen dioxide (brown gas), and oxygen.<br/>2M(NO₃)₂(s) → 2MO(s) + 4NO₂(g) + O₂(g)',
                    '<strong>Group 1:</strong> Generally very stable. Their carbonates don\'t decompose at standard Bunsen temperatures (except Li₂CO₃). Their nitrates undergo <i>lesser</i> decomposition, yielding the nitrite + oxygen (e.g. 2NaNO₃ → 2NaNO₂ + O₂), EXCEPT for lithium nitrate which acts like Group 2 and releases the brown NO₂ gas.'
                ]
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-alkalis', prompt: 'Why is Magnesium Hydroxide used as an indigestion remedy?' },
            { id: 'c2', blockId: 'table-solubility', prompt: 'State the trend in solubility of Group 2 hydroxides down the group.' },
            { id: 'c3', blockId: 'callout-barium', prompt: 'Describe the chemical test for sulfate ions, including the reagent used and the observation.' },
            { id: 'c4', blockId: 'p-thermal', prompt: 'State the trend in thermal stability of Group 2 carbonates down the group.' },
            { id: 'c5', blockId: 'callout-polarising', prompt: 'Explain, in terms of ions and polarising power, why calcium carbonate requires a higher temperature to decompose than magnesium carbonate.' },
            { id: 'c6', blockId: 'list-equations', prompt: 'What visually distinguishes the thermal decomposition of a Group 2 nitrate from that of a Group 1 nitrate (except Lithium)?' }
        ],
        summaryText: 'Group 1 and 2 oxides are basic. Group 2 Hydroxide solubility INCREASES down the group. Group 2 Sulfate solubility DECREASES down the group (BaSO₄ is an insoluble white ppt, used to test for sulfate). Thermal stability of Carbonates/Nitrates INCREASES down the group. Smaller cations at the top of the group have high charge density and strongly polarise the large anions, distorting their electron cloud and weakening their bonds. Down the group, cations get larger, polarising power drops, so it\'s harder to decompose the compound.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_4;
