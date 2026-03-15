/**
 * WMA13 · Topic 3 · Subtopic 0 — Derivatives of exponential functions
 */
export const note_mathematics_3_3_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Differentiate e\u02e3, a\u02e3, ln x, and composite forms using the chain rule.' },
            terms: []
        },
        {
            id: 'h-key', type: 'heading',
            data: { text: 'Standard Derivatives', level: 2 }, terms: []
        },
        {
            id: 'table-derivs', type: 'comparisonTable',
            data: {
                headers: ['f(x)', "f′(x)", 'Notes'],
                rows: [
                    ['e\u02e3', 'e\u02e3', 'Unique: derivative = itself'],
                    ['e^(ax+b)', 'ae^(ax+b)', 'Chain rule; multiply by derivative of exponent'],
                    ['a\u02e3', 'a\u02e3 ln a', 'For constant base a > 0, a \u2260 1'],
                    ['ln x', '1/x', 'Domain: x > 0'],
                    ['ln(ax + b)', 'a/(ax + b)', 'Chain rule; multiply by derivative of argument']
                ],
                caption: 'Key derivatives of exponential and logarithmic functions'
            }, terms: []
        },
        {
            id: 'h-we1', type: 'heading',
            data: { text: 'Worked Examples', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = e^(3x\u00b2) and y = ln(5x \u2212 2).',
                text: 'y = e^(3x\u00b2): let u = 3x\u00b2, dy/dx = 6x \u00b7 e^(3x\u00b2)\ny = ln(5x \u2212 2): dy/dx = 5/(5x \u2212 2)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = 2\u02e3.',
                text: 'y = 2\u02e3  \u2192  dy/dx = 2\u02e3 ln 2\n\nAlternatively, write y = e^(x ln 2) and differentiate: dy/dx = ln 2 \u00b7 e^(x ln 2) = 2\u02e3 ln 2  \u2713'
            }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Chain Rule Pattern for Ln',
                text: 'd/dx[ln(f(x))] = f\u2019(x) / f(x)\n\nThis is particularly useful in integration too:\n\u222b f\u2019(x)/f(x) dx = ln|f(x)| + c'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Useful Technique: Logarithmic Differentiation',
                text: 'For complicated products like y = x\u00b3 sin x ln x, take ln of both sides:\nln y = 3 ln x + ln(sin x) + ln(ln x)\nDifferentiate implicitly: (1/y)(dy/dx) = 3/x + cos x/sin x + 1/(x ln x)\nThen multiply by y.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Key results: d/dx(e\u02e3) = e\u02e3; d/dx(ln x) = 1/x; d/dx(a\u02e3) = a\u02e3 ln a. Chain rule: d/dx(e^f(x)) = f\u2019(x)e^f(x); d/dx(ln f(x)) = f\u2019(x)/f(x).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-derivs', prompt: 'State the derivative of a\u02e3 for constant a.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Differentiate y = e^(3x\u00b2) using the chain rule.' },
            { id: 'c3', blockId: 'callout-key', prompt: 'State the chain rule result for d/dx[ln f(x)].' },
            { id: 'c4', blockId: 'table-derivs', prompt: 'What is the derivative of ln(5x \u2212 2)?' }
        ],
        summaryText: 'd/dx(e\u02e3)=e\u02e3; d/dx(ln x)=1/x; d/dx(a\u02e3)=a\u02e3 ln a. Chain rule: d/dx(e^f)=f\u2019e^f; d/dx(ln f)=f\u2019/f.',
        ready: true
    },
    evidence: []
};
