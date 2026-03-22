/**
 * WMA13 · Topic 1 · Subtopic 2 — Inverse functions
 */
export const note_mathematics_3_1_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Find inverse functions, describe the domain/range swap, and sketch inverse function graphs.' },
            terms: []
        },
        {
            id: 'h-def', type: 'heading',
            data: { text: 'Inverse Functions', level: 2 }, terms: []
        },
        {
            id: 'p-def', type: 'paragraph',
            data: { text: 'The <strong>inverse function</strong> f\u207b\u00b9(x) undoes f(x). An inverse exists only when f is <strong>one-to-one</strong>. For many-to-one functions, restrict the domain first.' },
            terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Properties of Inverse Functions',
                text: '\u2022 ff\u207b\u00b9(x) = f\u207b\u00b9f(x) = x\n\u2022 Domain of f\u207b\u00b9 = Range of f\n\u2022 Range of f\u207b\u00b9 = Domain of f\n\u2022 Graph of f\u207b\u00b9 is the reflection of f in the line y = x'
            }, terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Finding f\u207b\u00b9(x): Method', level: 2 }, terms: []
        },
        {
            id: 'list-method', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    'Write y = f(x)',
                    'Swap x and y: x = f(y)',
                    'Rearrange to make y the subject',
                    'Write as f\u207b\u00b9(x) = ...',
                    'State the domain of f\u207b\u00b9 (equals the range of f)'
                ]
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find f\u207b\u00b9(x) for f(x) = 3x \u2212 2, x \u2208 \u211d.',
                text: 'y = 3x \u2212 2  \u2192  swap: x = 3y \u2212 2\nRearrange: 3y = x + 2  \u2192  y = (x + 2)/3\nf\u207b\u00b9(x) = (x + 2)/3,  domain: x \u2208 \u211d\n\nCheck: f(f\u207b\u00b9(x)) = 3\u00b7(x+2)/3 \u2212 2 = x \u2713'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'f(x) = x\u00b2 + 1 for x \u2265 0. Find f\u207b\u00b9(x).',
                text: 'y = x\u00b2 + 1  \u2192  x = y\u00b2 + 1  \u2192  y\u00b2 = x \u2212 1\ny = \u221a(x \u2212 1)  (take positive root since original domain x \u2265 0)\nf\u207b\u00b9(x) = \u221a(x \u2212 1),  domain: x \u2265 1 (= range of f)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Graph Tip',
                text: 'Draw y = x as a mirror line and reflect the graph of f. Any point where f crosses y = x is also on f\u207b\u00b9 (self-inverse point).'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'f\u207b\u00b9 undoes f. Only one-to-one functions have inverses (restrict domain if needed). Method: swap x and y, rearrange. Domain of f\u207b\u00b9 = range of f. Graph: reflection of f in y = x.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When asked for the domain of an inverse function f\u207b\u00b9, never try to evaluate it algebraically. Always find the range of the original function f first, because the domain of f\u207b\u00b9 is exactly equal to the range of f."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-def', prompt: 'Why must a function be one-to-one to have an inverse?' },
            { id: 'c2', blockId: 'callout-key', prompt: 'What is the domain of f\u207b\u00b9 in terms of f?' },
            { id: 'c3', blockId: 'list-method', prompt: 'List the 5 steps to find an inverse function.' },
            { id: 'c4', blockId: 'callout-we1', prompt: 'Find f\u207b\u00b9(x) for f(x) = 3x \u2212 2.' },
            { id: 'c5', blockId: 'callout-tip', prompt: 'How are the graphs of f and f\u207b\u00b9 geometrically related?' }
        ],
        summaryText: 'Inverse function f\u207b\u00b9 undoes f. One-to-one functions only. Domain of f\u207b\u00b9 = range of f. Graph: reflection in y = x.',
        ready: true
    },
    evidence: []
};
