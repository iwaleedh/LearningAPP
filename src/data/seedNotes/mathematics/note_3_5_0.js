/**
 * WMA13 · Topic 5 · Subtopic 0 — Integrating standard functions
 */
export const note_mathematics_3_5_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Integrate standard functions including e\u02e3, 1/x, sin x, cos x, and sec\u00b2x.' },
            terms: []
        },
        {
            id: 'h-table', type: 'heading',
            data: { text: 'Standard Integrals', level: 2 }, terms: []
        },
        {
            id: 'table-integrals', type: 'comparisonTable',
            data: {
                headers: ['f(x)', '\u222bf(x) dx', 'Notes'],
                rows: [
                    ['e\u02e3', 'e\u02e3 + c', ''],
                    ['e^(ax)', '(1/a)e^(ax) + c', 'Divide by the coefficient of x'],
                    ['1/x', 'ln|x| + c', 'Modulus signs required for x < 0'],
                    ['sin x', '\u2212cos x + c', ''],
                    ['cos x', 'sin x + c', ''],
                    ['sec\u00b2 x', 'tan x + c', 'Reversing d/dx(tan x) = sec\u00b2x'],
                    ['cosec\u00b2 x', '\u2212cot x + c', ''],
                    ['sec x tan x', 'sec x + c', ''],
                    ['cosec x cot x', '\u2212cosec x + c', '']
                ],
                caption: 'Standard integrals \u2014 all must be known'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \u222b (3e^(2x) + 4/x + sec\u00b2x) dx.',
                text: '= 3\u00b7(1/2)e^(2x) + 4 ln|x| + tan x + c\n= (3/2)e^(2x) + 4 ln|x| + tan x + c'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Evaluate \u222b\u2081\u00b3 (e\u02e3 + 1/x) dx.',
                text: '= [e\u02e3 + ln x]\u2081\u00b3\n= (e\u00b3 + ln 3) \u2212 (e\u00b9 + ln 1)\n= (e\u00b3 + ln 3) \u2212 (e + 0)\n= e\u00b3 \u2212 e + ln 3'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Modulus in ln|x|',
                text: 'When integrating 1/x, write ln|x| + c not ln x + c. In definite integrals with both limits positive, the modulus signs are not needed. But in indefinite integrals or when x might be negative, keep them.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Standard integrals: \u222be\u02e3dx = e\u02e3+c; \u222b(1/x)dx = ln|x|+c; \u222bsin x dx = \u2212cos x+c; \u222bcos x dx = sin x+c; \u222bsec\u00b2x dx = tan x+c.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-integrals', prompt: 'State \u222bsec\u00b2x dx and \u222b(1/x) dx.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Integrate 3e^(2x) + 4/x + sec\u00b2x.' },
            { id: 'c3', blockId: 'table-integrals', prompt: 'State \u222bcos x dx and \u222bsin x dx.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Why do we write ln|x| rather than ln x when integrating 1/x?' }
        ],
        summaryText: '\u222be\u02e3dx=e\u02e3+c; \u222b(1/x)dx=ln|x|+c; \u222bsin x dx=\u2212cos x+c; \u222bcos x dx=sin x+c; \u222bsec\u00b2x dx=tan x+c.',
        ready: true
    },
    evidence: []
};
