/**
 * WMA13 · Topic 6 · Subtopic 0 — Change of sign method
 */
export const note_mathematics_3_6_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use the change of sign method to locate and narrow down an interval containing a root of f(x) = 0.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Change of Sign Principle', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Change of Sign Theorem',
                text: 'If f is continuous on [a, b] and f(a) and f(b) have opposite signs (one positive, one negative), then f has at least one root in the interval (a, b).'
            }, terms: []
        },
        {
            id: 'p-decimal', type: 'paragraph',
            data: { text: 'Finding a root to a required number of decimal places uses decimal search (bisection). Evaluate f at the midpoint of the interval; the sign change tells you which half contains the root. Repeat until the interval is narrow enough.' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Show that f(x) = x\u00b3 \u2212 3x + 1 has a root in (1, 2). Find it to 2 d.p.',
                text: 'f(1) = 1 \u2212 3 + 1 = \u22121 < 0\nf(2) = 8 \u2212 6 + 1 = 3 > 0  \u2714 Sign change\n\nDecimal search:\nf(1.5) = 3.375 \u2212 4.5 + 1 = \u22120.125 < 0  \u2192 root in (1.5, 2)\nf(1.6) = 4.096 \u2212 4.8 + 1 = 0.296 > 0  \u2192 root in (1.5, 1.6)\nf(1.53) \u2248 \u22120.023 < 0  \u2192 root in (1.53, 1.6)\nf(1.53) and f(1.54): sign changes \u2192 root \u2248 1.53 (to 2 d.p.)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Showing a Root Exists',
                text: 'For exam questions that say "Show there is a root in [a, b]":\n1. Evaluate f(a) and f(b)\n2. State their signs (positive/negative) explicitly\n3. State that there is a sign change\n4. Conclude (by continuity) there is a root in the interval'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Change of sign: if f(a) < 0 and f(b) > 0 (or vice versa) for continuous f, there is a root in (a, b). Decimal search: evaluate at midpoint and repeat to narrow the interval.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "For the change of sign method, you must explicitly state that the function is continuous. Merely showing f(a) < 0 and f(b) > 0 is not enough for full marks; write 'f(x) is continuous over the interval [a,b]'."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the change of sign theorem.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'How do you show f(x) = x\u00b3 \u2212 3x + 1 has a root in (1, 2)?' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'List the 4 steps to show a root exists in an interval.' },
            { id: 'c4', blockId: 'p-decimal', prompt: 'Describe the decimal search (bisection) process.' }
        ],
        summaryText: 'Change of sign: f(a) and f(b) opposite signs, continuous f \u21d2 root in (a, b). Decimal search: evaluate midpoint, repeat.',
        ready: true
    },
    evidence: []
};
