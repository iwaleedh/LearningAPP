/**
 * WMA13 · Topic 4 · Subtopic 0 — Differentiating trig and other functions
 */
export const note_mathematics_3_4_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Recall and apply derivatives of sin x, cos x, tan x, sec x, cosec x, cot x, e\u02e3, and ln x.' },
            terms: []
        },
        {
            id: 'h-table', type: 'heading',
            data: { text: 'Standard Derivatives', level: 2 }, terms: []
        },
        {
            id: 'table-derivs', type: 'comparisonTable',
            data: {
                headers: ['f(x)', 'f′(x)'],
                rows: [
                    ['sin x', 'cos x'],
                    ['cos x', '\u2212sin x'],
                    ['tan x', 'sec\u00b2 x'],
                    ['sec x', 'sec x tan x'],
                    ['cosec x', '\u2212cosec x cot x'],
                    ['cot x', '\u2212cosec\u00b2 x'],
                    ['e\u02e3', 'e\u02e3'],
                    ['ln x', '1/x'],
                    ['a\u02e3', 'a\u02e3 ln a']
                ],
                caption: 'Standard derivatives for WMA13 \u2014 must be known'
            }, terms: []
        },
        {
            id: 'h-chain', type: 'heading',
            data: { text: 'Chain Rule Extensions', level: 2 }, terms: []
        },
        {
            id: 'callout-chain', type: 'callout',
            data: {
                style: 'key',
                title: 'Chain Rule Applied to Trig',
                text: 'd/dx[sin f(x)] = f\u2019(x) cos f(x)\nd/dx[cos f(x)] = \u2212f\u2019(x) sin f(x)\nd/dx[tan f(x)] = f\u2019(x) sec\u00b2 f(x)\nd/dx[e^f(x)] = f\u2019(x) e^f(x)\nd/dx[ln f(x)] = f\u2019(x) / f(x)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate: (a) y = sin(3x\u00b2), (b) y = e^(cos x), (c) y = ln(tan x).',
                text: '(a) dy/dx = 6x cos(3x\u00b2)\n(b) dy/dx = \u2212sin x \u00b7 e^(cos x)\n(c) dy/dx = sec\u00b2x / tan x = 1/(sin x cos x) = 2/sin 2x'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Memory Aid for Reciprocal Trig Derivatives',
                text: 'sec x \u2192 sec x tan x  (both "s" functions together)\ncosec x \u2192 \u2212cosec x cot x  (both "c" functions together, with minus)\ncot x \u2192 \u2212cosec\u00b2 x  (like tan \u2192 sec\u00b2 but with negatives and "co")'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Must know: d/dx(tan x) = sec\u00b2x; d/dx(sec x) = sec x tan x; d/dx(cosec x) = \u2212cosec x cot x; d/dx(cot x) = \u2212cosec\u00b2x. Combine with chain rule for composite forms.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-derivs', prompt: 'State the derivatives of tan x, sec x, and cot x.' },
            { id: 'c2', blockId: 'callout-chain', prompt: 'State the chain rule result for d/dx[sin f(x)].' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Differentiate y = sin(3x\u00b2).' },
            { id: 'c4', blockId: 'table-derivs', prompt: 'What is the derivative of cosec x?' }
        ],
        summaryText: 'd/dx(tan x)=sec\u00b2x; d/dx(sec x)=sec x tan x; d/dx(cosec x)=\u2212cosec x cot x; d/dx(cot x)=\u2212cosec\u00b2x. Chain rule extends all of these.',
        ready: true
    },
    evidence: []
};
