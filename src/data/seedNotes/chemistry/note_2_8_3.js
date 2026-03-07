/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 3
 * "Group 1 and 2 Trends and Reactions"
 * Source: Pearson Edexcel IAL Chemistry — Sections 8B.1, 8B.2
 */
export const note_chemistry_2_8_3 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the trends in ionization energy and reactivity for Groups 1 and 2, and their reactions with oxygen, water, and chlorine.' },
            terms: []
        },
        {
            id: 'h-trends',
            type: 'heading',
            data: { text: 'Trends Down Groups 1 and 2', level: 2 },
            terms: []
        },
        {
            id: 'p-trends',
            type: 'paragraph',
            data: { text: 'As you go down Group 1 (alkali metals) or Group 2 (alkaline earth metals):<br/>1. <strong>Atomic radius increases</strong> due to extra electron shells.<br/>2. <strong>First ionisation energy decreases:</strong> The outer electrons are further from the nucleus (higher energy orbital) and experience more shielding by inner shells. These two factors outweigh the increased nuclear charge, meaning the electron is easier to remove.<br/>3. <strong>Reactivity increases:</strong> Since they react by losing their outer electrons, and it becomes easier to lose electrons down the group, reactivity increases.' },
            terms: ['Ionisation energy', 'Shielding effect']
        },
        {
            id: 'h-reactions',
            type: 'heading',
            data: { text: 'Reactions of Group 1 and 2 Elements', level: 2 },
            terms: []
        },
        {
            id: 'table-reactions',
            type: 'comparisonTable',
            data: {
                caption: 'Reactions with Oxygen, Chlorine, and Water',
                headers: ['Reactant', 'General Reaction', 'Observations'],
                rows: [
                    ['Oxygen (O₂)', '2M(s) + O₂(g) → 2MO(s) (Gr 2)<br/>4M(s) + O₂(g) → 2M₂O(s) (Gr 1)', 'When exposed to air, the metals rapidly <strong>tarnish</strong> forming a dull oxide layer. When heated, they successfully combust forming solid white oxides.'],
                    ['Chlorine (Cl₂)', 'M(s) + Cl₂(g) → MCl₂(s) (Gr 2)<br/>2M(s) + Cl₂(g) → 2MCl(s) (Gr 1)', 'Metals burn vigorously in chlorine gas to form white solid metal chloride salts.'],
                    ['Water (H₂O)', 'M(s) + 2H₂O(l) → M(OH)₂(aq) + H₂(g) (Gr 2)<br/>2M(s) + 2H₂O(l) → 2MOH(aq) + H₂(g) (Gr 1)', 'Fizzing (H₂ gas), metal dissolves, forms an alkaline solution. Reactions get more violent down the group. <strong>Na melts into a ball</strong> (highly exothermic) and <strong>K ignites</strong> with a lilac flame.']
                ]
            },
            terms: []
        },
        {
            id: 'callout-magnesium',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Exception: Magnesium and Water',
                text: 'Magnesium reacts very slowly with cold liquid water to form Mg(OH)₂.<br/><br/>However, it reacts vigorously with <strong>steam</strong> (H₂O(g)) to form <strong>magnesium oxide</strong> and hydrogen gas:<br/>Mg(s) + H₂O(g) → MgO(s) + H₂(g)'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-trends', prompt: 'Explain why the first ionisation energy of Group 2 metals decreases as you go down the group.' },
            { id: 'c2', blockId: 'p-trends', prompt: 'Why is barium more reactive than calcium?' },
            { id: 'c3', blockId: 'table-reactions', prompt: 'Write the general equation for a Group 2 metal (M) reacting with liquid water.' },
            { id: 'c4', blockId: 'table-reactions', prompt: 'How does the observation differ when sodium is dropped into water versus potassium?' },
            { id: 'c5', blockId: 'callout-magnesium', prompt: 'How does the reaction of magnesium with steam differ from its reaction with cold water?' }
        ],
        summaryText: 'Group 1 and 2 metals react by losing their outer electrons. Down the group, atomic radius and shielding increase, so ionisation energy decreases, making them more reactive. They tarnish in air to form oxides, react with chlorine to form white chlorides, and with liquid water to form an alkaline metal hydroxide + hydrogen gas (Na melts into a ball, K ignites). Mg only reacts vigorously with steam to form MgO.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_3;
