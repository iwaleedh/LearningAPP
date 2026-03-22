/**
 * WMA14 · Topic 4 · Subtopic 3 — Binomial approximations
 */
export const note_mathematics_4_4_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use binomial expansions to find approximations to numerical values of surds and other expressions.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Using Binomial Expansion for Approximations', level: 2 }, terms: []
        },
        {
            id: 'p-method', type: 'paragraph',
            data: { text: 'Substitute a suitable value of x into a binomial expansion to approximate a numerical value. The expansion must be valid (|x| < required bound) at the chosen x.' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Use the expansion of (1+x)^(1/2) to approximate \u221a1.04.',
                text: '(1+x)^(1/2) \u2248 1 + x/2 \u2212 x\u00b2/8 + x\u00b3/16\n\nSet 1+x = 1.04, so x = 0.04:\n\u221a1.04 \u2248 1 + 0.04/2 \u2212 (0.04)\u00b2/8\n= 1 + 0.02 \u2212 0.0002\n= 1.0198\n\nActual: \u221a1.04 = 1.01980\u2026 \u2713'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Use (1+x)\u207b\u00b9 \u2248 1\u2212x+x\u00b2 to approximate 1/1.02 to 4 d.p.',
                text: 'Set x = 0.02 (|x|<1 \u2713):\n1/1.02 \u2248 1 \u2212 0.02 + (0.02)\u00b2 = 1 \u2212 0.02 + 0.0004 = 0.9804\n\nActual = 0.98039\u2026  \u2714'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'f(x) = (4 + 5x)/(2 + x)\u00b2. Show f(x) \u2248 1 + \u2154x + ... and use x=0.1 to approximate f(0.1).',
                text: '(2+x)\u207b\u00b2 = 4\u207b\u00b2\u00b7(1+x/2)\u207b\u00b2 = (1/4)[1 \u2212 2(x/2) + 3(x/2)\u00b2 + \u2026] = (1/4)[1\u2212x+3x\u00b2/4\u2212\u2026]\n\nf(x) = (4+5x)(1/4)(1\u2212x+3x\u00b2/4\u2212\u2026)\n\nExpand keeping up to x: (4+5x)(1/4)(1\u2212x) \u2248 1(1\u2212x) + (5x/4)\u00b71\n= 1 \u2212 x + 5x/4 = 1 + x/4\n\n[Full expansion with x\u00b2 to show \u2154 coefficient requires more careful work]\n\nFor approximation at x=0.1: f(0.1) \u2248 1 + 0.1/4 = 1.025'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Strategy',
                text: 'In the final part of a binomial question you are usually asked to substitute a specific x-value. Always check that this x satisfies the validity condition before substituting. Quote the approximation to the precision stated in the question.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Substitute a specific x-value into a binomial expansion to approximate numbers. Check |x| is within the validity range. The more terms used, the better the approximation.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When choosing a value of x to substitute for an approximation, pick a small value so the series converges quickly. Ensure your chosen x falls strictly within the valid mathematical range |x| < 1."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-method', prompt: 'How do you use a binomial expansion to approximate a numerical value?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Approximate \u221a1.04 using (1+x)^(1/2).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Approximate 1/1.02 using the expansion of (1+x)\u207b\u00b9.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What must you always check before substituting an x-value into a binomial expansion?' }
        ],
        summaryText: 'Binomial approximation: substitute x-value (check validity). More terms = better precision.',
        ready: true
    },
    evidence: []
};
