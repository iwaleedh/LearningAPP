/**
 * WMA14 · Topic 2 · Subtopic 0 — Partial fractions: distinct linear denominators
 */
export const note_mathematics_4_2_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Decompose a rational expression with distinct linear factors in the denominator into partial fractions.' },
            terms: []
        },
        {
            id: 'h-form', type: 'heading',
            data: { text: 'Form of Partial Fractions', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Distinct Linear Factors',
                text: 'If the denominator factorises into distinct linear factors:\n\n(px + q) / [(ax+b)(cx+d)] \u2261 A/(ax+b) + B/(cx+d)\n\nFind A and B by the cover-up rule or by comparing coefficients.'
            }, terms: []
        },
        {
            id: 'h-cover', type: 'heading',
            data: { text: 'Cover-Up Rule', level: 2 }, terms: []
        },
        {
            id: 'p-cover', type: 'paragraph',
            data: { text: 'To find A in A/(ax+b): cover the factor (ax+b) in the original fraction and evaluate the rest at ax+b=0 (i.e. x = \u2212b/a).' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Express (5x + 1)/[(x+1)(2x\u22121)] as partial fractions.',
                text: '(5x+1)/[(x+1)(2x\u22121)] \u2261 A/(x+1) + B/(2x\u22121)\n\nCover-up for A (set x = \u22121):\nA = (5(\u22121)+1) / (2(\u22121)\u22121) = (\u22124)/(\u22123) = 4/3\n\nCover-up for B (set x = 1/2):\nB = (5(1/2)+1) / (1/2+1) = (7/2)/(3/2) = 7/3\n\nAnswer: (4/3)/(x+1) + (7/3)/(2x\u22121)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Express (3x + 2)/[x(x+2)(x\u22121)] as partial fractions.',
                text: 'Write A/x + B/(x+2) + C/(x\u22121)\n\nA = (3\u00b70+2)/[(0+2)(0\u22121)] = 2/(\u22122) = \u22121\nB = (3(\u22122)+2)/[(\u22122)(\u22122\u22121)] = (\u22124)/(6) = \u22122/3\nC = (3\u00b71+2)/[(1)(1+2)] = 5/3\n\nAnswer: \u22121/x + (\u22122/3)/(x+2) + (5/3)/(x\u22121)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Checking Your Answer',
                text: 'Recombine over a common denominator to verify. Alternatively, substitute a convenient value of x (e.g. x=0) and check both sides are equal.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Distinct linear denominators: write A/(ax+b) + B/(cx+d). Find constants by cover-up rule (substitute each root) or compare coefficients. Always verify by recombining.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When using the substitution method to find constants, remember to show your working. Examiners need to see the values you substitute, not just the final constants, to reliably award method marks."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the partial fraction form for distinct linear factors.' },
            { id: 'c2', blockId: 'p-cover', prompt: 'Explain the cover-up rule.' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Find the partial fractions of (5x+1)/[(x+1)(2x\u22121)].' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you verify partial fraction decomposition?' }
        ],
        summaryText: 'Distinct linear factors: A/(ax+b)+B/(cx+d). Cover-up rule: cover factor, evaluate at its root. Verify by recombining.',
        ready: true
    },
    evidence: []
};
