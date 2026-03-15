/**
 * WMA13 · Topic 2 · Subtopic 0 — Reciprocal trig functions definitions
 */
export const note_mathematics_3_2_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Define and use the reciprocal trigonometric functions: sec\u00a0x, cosec\u00a0x, and cot\u00a0x.' },
            terms: []
        },
        {
            id: 'h-defs', type: 'heading',
            data: { text: 'Definitions', level: 2 }, terms: []
        },
        {
            id: 'table-defs', type: 'comparisonTable',
            data: {
                headers: ['Function', 'Definition', 'Undefined when'],
                rows: [
                    ['sec x', '1/cos x', 'cos x = 0, i.e. x = 90\u00b0, 270\u00b0, ...'],
                    ['cosec x', '1/sin x', 'sin x = 0, i.e. x = 0\u00b0, 180\u00b0, 360\u00b0, ...'],
                    ['cot x', 'cos x / sin x = 1/tan x', 'sin x = 0, i.e. x = 0\u00b0, 180\u00b0, ...']
                ],
                caption: 'Reciprocal trig functions and their excluded values'
            }, terms: []
        },
        {
            id: 'h-values', type: 'heading',
            data: { text: 'Key Values', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the exact values of sec 60\u00b0, cosec 30\u00b0 and cot 45\u00b0.',
                text: 'sec 60\u00b0 = 1/cos 60\u00b0 = 1/(1/2) = 2\ncosec 30\u00b0 = 1/sin 30\u00b0 = 1/(1/2) = 2\ncot 45\u00b0 = cos 45\u00b0/sin 45\u00b0 = (\u221a2/2)/(\u221a2/2) = 1'
            }, terms: []
        },
        {
            id: 'h-identities', type: 'heading',
            data: { text: 'Pythagorean Identities (Reciprocal Form)', level: 2 }, terms: []
        },
        {
            id: 'callout-identities', type: 'callout',
            data: {
                style: 'key',
                title: 'Three Pythagorean Identities',
                text: '1 + tan\u00b2 x \u2261 sec\u00b2 x\n1 + cot\u00b2 x \u2261 cosec\u00b2 x\nsin\u00b2 x + cos\u00b2 x \u2261 1  (standard form)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Simplify: sec\u00b2 x \u2212 1.',
                text: 'Using 1 + tan\u00b2 x = sec\u00b2 x:\nsec\u00b2 x \u2212 1 = tan\u00b2 x'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Memory Aid',
                text: '"co-" functions are reciprocals of each other:\ncosec = 1/sin,  sec = 1/cos,  cot = 1/tan\nRemember: cosec and sec are the WRONG WAY round from what you might expect!'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'sec x = 1/cos x; cosec x = 1/sin x; cot x = cos x/sin x. Key identities: 1 + tan\u00b2x = sec\u00b2x and 1 + cot\u00b2x = cosec\u00b2x. Each is undefined at certain values.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-defs', prompt: 'Write the definitions of sec x, cosec x, and cot x.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the exact value of sec 60\u00b0.' },
            { id: 'c3', blockId: 'callout-identities', prompt: 'State the identity linking tan\u00b2x and sec\u00b2x.' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'Simplify sec\u00b2x \u2212 1.' }
        ],
        summaryText: 'sec = 1/cos, cosec = 1/sin, cot = cos/sin. Identities: 1 + tan\u00b2x = sec\u00b2x; 1 + cot\u00b2x = cosec\u00b2x.',
        ready: true
    },
    evidence: []
};
