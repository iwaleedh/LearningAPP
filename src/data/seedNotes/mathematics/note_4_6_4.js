/**
 * WMA14 · Topic 6 · Subtopic 4 — Integration by substitution (further cases)
 */
export const note_mathematics_4_6_4 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use substitution (including reverse chain rule and trig substitutions) to evaluate more complex integrals, including definite integrals with changed limits.' },
            terms: []
        },
        {
            id: 'h-review', type: 'heading',
            data: { text: 'Reverse Chain Rule Recall', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Reverse Chain Rule',
                text: '\u222b f\u2032(g(x)) \u2022 g\u2032(x) dx = f(g(x)) + C\n\nExample: \u222b 2x e^(x\u00b2) dx = e^(x\u00b2) + C (u=x\u00b2)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: '\u222b x\u221a(x\u00b2+1) dx using substitution u = x\u00b2+1.',
                text: 'u = x\u00b2+1  \u27a2  du = 2x dx  \u27a2  x dx = du/2\n\n\u222b x\u221a(x\u00b2+1) dx = \u222b \u221au \u00b7 du/2 = (1/2) \u222b u^(1/2) du\n= (1/2) \u00b7 (2/3) u^(3/2) + C = (1/3)(x\u00b2+1)^(3/2) + C'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: '\u222b\u2080\u00b9 x/(x\u00b2+1)\u00b2 dx (definite, change limits).',
                text: 'u = x\u00b2+1  \u27a2  du = 2x dx\nLimits: x=0 \u27a2 u=1; x=1 \u27a2 u=2\n\n\u222b\u2080\u00b9 x/(x\u00b2+1)\u00b2 dx = (1/2) \u222b\u2081\u00b2 u\u207b\u00b2 du = (1/2)[\u2212u\u207b\u00b9]\u2081\u00b2 = (1/2)(\u22121/2+1) = 1/4'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: '\u222b sin\u00b3 x cos x dx using u = sin x.',
                text: 'u = sin x  \u27a2  du = cos x dx\n\n\u222b sin\u00b3 x cos x dx = \u222b u\u00b3 du = u\u2074/4 + C = sin\u2074 x/4 + C'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Choosing a Substitution',
                text: '\u2022 If f\u2032(g(x)) appears, try u = g(x).\n\u2022 For \u221a(a\u00b2\u2212x\u00b2), try x = a sin\u03b8.\n\u2022 For 1/(a\u00b2+x\u00b2), try x = a tan\u03b8.\n\u2022 For definite integrals, always change the limits to avoid back-substitution.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Substitution: u = g(x), convert du, change limits for definite integrals. Key patterns: chain rule reversal, \u222b u\u207f du, trig forms.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the reverse chain rule integral formula.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Evaluate \u222b x\u221a(x\u00b2+1) dx.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Evaluate \u222b\u2080\u00b9 x/(x\u00b2+1)\u00b2 dx, changing limits.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you handle limits when using substitution in a definite integral?' }
        ],
        summaryText: 'Substitution u=g(x): rewrite in u, du; change limits for definite. Chain rule reversal for simple cases.',
        ready: true
    },
    evidence: []
};
