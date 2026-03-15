/**
 * WMA14 · Topic 4 · Subtopic 1 — Binomial expansion: range of validity and (a+bx)^n form
 */
export const note_mathematics_4_4_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'State the range of values of x for which a binomial expansion is valid, and expand expressions of the form (a + bx)^n.' },
            terms: []
        },
        {
            id: 'h-validity', type: 'heading',
            data: { text: 'Validity of the Expansion', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Range of Validity',
                text: '(1 + x)\u207f is valid for |x| < 1\n\n(1 + bx)\u207f is valid for |bx| < 1, i.e. |x| < 1/|b|\n\n(a + bx)\u207f = a\u207f(1 + bx/a)\u207f is valid for |bx/a| < 1, i.e. |x| < |a/b|'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Expand (2 + x)\u207b\u00b3 in ascending powers of x up to x\u00b2. State the validity.',
                text: '(2+x)\u207b\u00b3 = 2\u207b\u00b3(1 + x/2)\u207b\u00b3 = (1/8)(1 + x/2)\u207b\u00b3\n\n(1+u)\u207b\u00b3 = 1 + (\u22123)u + [(\u22123)(\u22124)/2]u\u00b2 + \u2026  where u = x/2\n= 1 \u2212 3(x/2) + 6(x/2)\u00b2 + \u2026\n= 1 \u2212 3x/2 + 6x\u00b2/4 + \u2026\n= 1 \u2212 3x/2 + 3x\u00b2/2 + \u2026\n\nMultiply by 1/8: (1/8) \u2212 (3/16)x + (3/16)x\u00b2 + \u2026\n\nValid for |x/2| < 1, i.e. |x| < 2'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Expand (1 \u2212 3x)^(1/2) up to x\u00b2. State the validity.',
                text: '(1\u22123x)^(1/2): n = 1/2, u = \u22123x\n= 1 + (1/2)(\u22123x) + [(1/2)(\u22121/2)/2](\u22123x)\u00b2 + \u2026\n= 1 \u2212 3x/2 + (1/2)(\u22121/2)/2 \u00b79x\u00b2 + \u2026\n= 1 \u2212 3x/2 \u2212(1/8)(9x\u00b2) + \u2026\n= 1 \u2212 3x/2 \u2212 9x\u00b2/8 + \u2026\n\nValid for |\u22123x| < 1, i.e. |x| < 1/3'
            }, terms: []
        },
        {
            id: 'callout-warn', type: 'callout',
            data: {
                style: 'warning',
                title: 'Always factorise out a first',
                text: 'For (a+bx)\u207f, you must write a\u207f(1+bx/a)\u207f first. Do not try to apply the formula directly to (a+bx). Forgetting to factor out a\u207f is the most common error.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: '(a+bx)\u207f = a\u207f(1+bx/a)\u207f. Valid for |bx/a| < 1. Always factor out a\u207f first. State the range of validity in every answer.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the validity range for (1+bx)\u207f and for (a+bx)\u207f.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Expand (2+x)\u207b\u00b3 to x\u00b2 and state the validity.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Expand (1\u22123x)^(1/2) to x\u00b2. What is the range of validity?' },
            { id: 'c4', blockId: 'callout-warn', prompt: 'What is the critical first step when expanding (a+bx)\u207f?' }
        ],
        summaryText: '(a+bx)\u207f: factor out a\u207f, expand (1+bx/a)\u207f, valid |x|<|a/b|. Always state validity.',
        ready: true
    },
    evidence: []
};
