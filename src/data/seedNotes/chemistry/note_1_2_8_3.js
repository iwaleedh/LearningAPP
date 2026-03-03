/**
 * WCH12 | Topic 8: Redox & Groups 1, 2, 7 | Subtopic 3
 * Group 1 trends and reactions
 */

export const note_chemistry_1_2_8_3 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: {
                text: 'Describe and explain trends in Group 1 (alkali metals): atomic radius, ionisation energy, reactivity and reactions with water and oxygen. Explain trends in terms of electron shielding and nuclear charge.',
            },
        },
        {
            id: 'h-group1',
            type: 'heading',
            data: { text: 'Group 1 — The Alkali Metals', level: 2 },
            terms: ['Group 1'],
        },
        {
            id: 'callout-trends-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Group 1 Trends Down the Group (Li → Cs)',
                text: 'Atomic radius: INCREASES\n  → more electron shells added\n\nIonisation energy (1st): DECREASES\n  → outer electron further from nucleus; more shielded by inner electrons; easier to remove\n\nReactivity: INCREASES\n  → easier to lose the outer s¹ electron as you go down\n\nMelting/boiling point: DECREASES\n  → larger atoms; weaker metallic bonding (delocalised electrons further from nuclei)',
            },
            terms: ['Group 1'],
        },
        {
            id: 'table-group1',
            type: 'comparisonTable',
            data: {
                caption: 'Group 1 properties — trends down the group',
                headers: ['Element', 'Electronic config', 'Atomic radius (pm)', '1st IE (kJ mol⁻¹)', 'Reactivity with H₂O'],
                rows: [
                    ['Li', '[He] 2s¹', '152', '520', 'Slow; fizzes gently'],
                    ['Na', '[Ne] 3s¹', '186', '496', 'Vigorous fizzing; moves on surface'],
                    ['K', '[Ar] 4s¹', '227', '419', 'Very vigorous; lilac flame'],
                    ['Rb', '[Kr] 5s¹', '248', '403', 'Ignites spontaneously'],
                    ['Cs', '[Xe] 6s¹', '265', '376', 'Explosive'],
                ],
            },
            terms: ['Group 1'],
        },
        {
            id: 'h-reactions',
            type: 'heading',
            data: { text: 'Reactions of Group 1 Metals', level: 2 },
            terms: ['Group 1'],
        },
        {
            id: 'callout-water-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Reaction with Water',
                text: '2M(s) + 2H₂O(l) → 2MOH(aq) + H₂(g)\n\nwhere M = Li, Na, K, Rb or Cs\n\nObservations:\n  Li — floats, fizzes steadily, dissolves\n  Na — floats, fizzes vigorously, melts into ball, moves around\n  K — floats, fizzes very vigorously, lilac/violet flame from H₂ burning\n  Rb/Cs — react explosively\n\nProduct MOH is a strong alkali → solution is strongly alkaline (pH > 12)',
            },
            terms: ['Group 1'],
        },
        {
            id: 'callout-oxygen-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Reactions with Oxygen',
                text: 'Li burns in O₂: 4Li + O₂ → 2Li₂O  (lithium oxide — normal oxide)\nNa burns in O₂: 2Na + O₂ → Na₂O₂  (sodium peroxide — peroxide)\nK, Rb, Cs burn: form superoxides (e.g. KO₂)\n\nNote: Na also forms Na₂O but Na₂O₂ is the main product\nAll Group 1 oxides dissolve in water to form strongly alkaline solutions:\n  Na₂O(s) + H₂O(l) → 2NaOH(aq)',
            },
            terms: ['Group 1'],
        },
        {
            id: 'callout-tip-explain',
            type: 'callout',
            data: {
                style: 'tip',
                title: '💬 Exam Tip — Explaining Reactivity Trend',
                text: 'When asked to explain why Group 1 reactivity increases down the group:\n  "Going down the group, the atomic radius increases. The outer electron is in a higher energy shell, further from the nucleus and more shielded by inner electrons. The nuclear attraction for the outer electron is therefore weaker, making it easier to remove (lower ionisation energy). The metal therefore loses its electron more readily and is more reactive."',
            },
        },
        {
            id: 'h-checklist',
            type: 'heading',
            data: { text: 'Exam Checklist', level: 2 },
        },
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Group 1 reactivity increases down: larger radius, more shielding, lower IE', checked: false },
                    { text: '2M + 2H₂O → 2MOH + H₂ — products are a strong alkali and hydrogen gas', checked: false },
                    { text: 'Li → Li₂O; Na → Na₂O₂; K → KO₂ when burned in O₂', checked: false },
                    { text: 'Melting point decreases down Group 1 — weaker metallic bonding', checked: false },
                    { text: 'K burns with lilac flame; Cs reacts explosively with water', checked: false },
                ],
            },
        },
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: 'Group 1 metals become more reactive down the group as atomic radius increases, shielding increases and ionisation energy decreases — the outer electron is easier to lose. All react with water to give MOH + H₂. Li forms Li₂O, Na forms Na₂O₂, K forms KO₂ in oxygen. Melting points decrease down the group.',
            },
        },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-trends-key', prompt: 'State the trend in reactivity, ionisation energy and atomic radius going down Group 1. Explain the reactivity trend.' },
            { id: 'cue-2', blockId: 'callout-water-key', prompt: 'Write the equation for sodium reacting with water. Describe the observations.' },
            { id: 'cue-3', blockId: 'callout-oxygen-key', prompt: 'What product forms when Li, Na and K each burn in O₂? Write equations for Li and Na.' },
        ],
        summaryText: 'Group 1 trends, reactions with water and oxygen, reactivity explanation.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 8: Group 1', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Group 1', 'Alkali metals'] }],
};
