/**
 * WMA13 · Topic 5 · Subtopic 2 — Integrating f′(x)/f(x)
 */
export const note_mathematics_3_5_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Recognise and integrate expressions of the form f\u2019(x)/f(x) to give ln|f(x)| + c.' },
            terms: []
        },
        {
            id: 'h-rule', type: 'heading',
            data: { text: 'The Key Result', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Integrating f′(x)/f(x)',
                text: '\u222b f\u2019(x)/f(x) dx = ln|f(x)| + c\n\nThis follows because d/dx[ln f(x)] = f\u2019(x)/f(x).\nThe numerator must be (or be a multiple of) the derivative of the denominator.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \u222b 2x/(x\u00b2 + 3) dx.',
                text: 'Numerator 2x = d/dx(x\u00b2 + 3)  \u2714\n\u222b 2x/(x\u00b2+3) dx = ln|x\u00b2+3| + c'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \u222b 3x\u00b2/(x\u00b3 \u2212 1) dx.',
                text: 'Numerator 3x\u00b2 = d/dx(x\u00b3 \u2212 1)  \u2714\n\u222b 3x\u00b2/(x\u00b3\u22121) dx = ln|x\u00b3\u22121| + c'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \u222b x/(x\u00b2 + 5) dx.',
                text: 'The numerator x is (1/2) of d/dx(x\u00b2+5) = 2x.\nSo multiply and divide by 2:\n\u222b x/(x\u00b2+5) dx = (1/2) \u222b 2x/(x\u00b2+5) dx = (1/2) ln|x\u00b2+5| + c'
            }, terms: []
        },
        {
            id: 'callout-we4', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \u222b tan x dx.',
                text: 'tan x = sin x/cos x.  Numerator sin x = \u2212d/dx(cos x).\n\u222b tan x dx = \u2212 \u222b (\u2212sin x/cos x) dx = \u2212ln|cos x| + c\n(or equivalently ln|sec x| + c)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Spotting the Pattern',
                text: 'Check if the numerator is the derivative of the denominator. If it is a constant multiple, adjust accordingly. This pattern also appears in definite integrals \u2014 evaluate ln|f(x)| at the limits.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: '\u222bf\u2019(x)/f(x) dx = ln|f(x)| + c. Check numerator is a (multiple of the) derivative of denominator. Adjust by multiplying and dividing by the necessary constant.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the result of \u222b f\u2019(x)/f(x) dx.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find \u222b 2x/(x\u00b2+3) dx.' },
            { id: 'c3', blockId: 'callout-we4', prompt: 'Integrate tan x using the f\u2019(x)/f(x) pattern.' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'Find \u222b x/(x\u00b2+5) dx.' }
        ],
        summaryText: '\u222bf\u2019(x)/f(x)dx = ln|f(x)|+c. Spot if numerator is derivative of denominator; adjust constants as needed.',
        ready: true
    },
    evidence: []
};
