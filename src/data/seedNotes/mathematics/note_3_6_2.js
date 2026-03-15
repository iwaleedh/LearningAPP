/**
 * WMA13 · Topic 6 · Subtopic 2 — Fixed-point iteration x = g(x)
 */
export const note_mathematics_3_6_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use fixed-point iteration to find approximate solutions to equations, and determine convergence or divergence of an iterative sequence.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Fixed-Point Iteration', level: 2 }, terms: []
        },
        {
            id: 'p-method', type: 'paragraph',
            data: { text: 'To solve f(x) = 0, rearrange into the form x = g(x). Then use the iteration x_{n+1} = g(x_{n}) starting from an initial estimate x\u2080. If the sequence converges, the limit is a solution of f(x) = 0.' },
            terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Convergence Condition',
                text: 'The iteration x_{n+1} = g(x_{n}) converges if |g\u2019(x)| < 1 near the root.\nIf |g\u2019(x)| > 1, the iteration diverges (terms move away from the root).'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve x\u00b3 = x + 3 using x_{n+1} = (x_n + 3)^(1/3), starting x\u2080 = 1.5.',
                text: 'x\u2081 = (1.5 + 3)^(1/3) = (4.5)^(1/3) \u2248 1.651\nx\u2082 = (1.651 + 3)^(1/3) = (4.651)^(1/3) \u2248 1.669\nx\u2083 \u2248 1.671\nx\u2084 \u2248 1.672 (convergence to 1.672)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Show that x = 1.6717 is a root of x\u00b3 \u2212 x \u2212 3 = 0 to 4 d.p.',
                text: 'f(1.67165) = 1.67165\u00b3 \u2212 1.67165 \u2212 3 = 4.671... \u2212 1.671... \u2212 3 < 0\nf(1.67175) > 0\nSign change in (1.67165, 1.67175)  \u2714\nRoot = 1.6717 to 4 d.p.'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Showing Convergence / Divergence',
                text: 'To show a particular rearrangement works, differentiate g(x) and evaluate |g\u2019(x)| near the root. If it is less than 1, the iteration converges. If greater than 1, it diverges and you should try a different rearrangement.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Fixed-point iteration: x_{n+1} = g(x_n) converges when |g′(x)| < 1 near the root. To verify a root to n d.p., use change of sign in the interval [x \u2212 0.5\u00d710^{\u2212n}, x + 0.5\u00d710^{\u2212n}].' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-method', prompt: 'Describe the fixed-point iteration process.' },
            { id: 'c2', blockId: 'callout-key', prompt: 'State the condition for fixed-point iteration to converge.' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Apply x_{n+1}=(x_n+3)^(1/3) twice, starting at x\u2080=1.5.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you show that multiplying a particular rearrangement converges?' }
        ],
        summaryText: 'x_{n+1}=g(x_n) converges when |g′(x)|<1 near root. Verify root to n d.p. by change of sign in interval around the rounded value.',
        ready: true
    },
    evidence: []
};
