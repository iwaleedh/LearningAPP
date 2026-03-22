/**
 * WMA13 · Topic 1 · Subtopic 5 — Modulus functions: solving equations
 */
export const note_mathematics_3_1_5 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Solve equations of the form |f(x)| = k and |f(x)| = |g(x)| algebraically and graphically.' },
            terms: []
        },
        {
            id: 'h-method1', type: 'heading',
            data: { text: 'Solving |f(x)| = k', level: 2 }, terms: []
        },
        {
            id: 'p-method1', type: 'paragraph',
            data: { text: 'If |f(x)| = k where k \u2265 0, remove the modulus by splitting into two cases: f(x) = k <strong>and</strong> f(x) = \u2212k. Solve each separately and always check solutions in the original equation.' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve |3x \u2212 6| = 9.',
                text: 'Case 1: 3x \u2212 6 = 9  \u2192  3x = 15  \u2192  x = 5\nCase 2: 3x \u2212 6 = \u22129  \u2192  3x = \u22123  \u2192  x = \u22121\nBoth solutions check out. Solutions: x = 5 or x = \u22121'
            }, terms: []
        },
        {
            id: 'h-method2', type: 'heading',
            data: { text: 'Solving |f(x)| = |g(x)|', level: 2 }, terms: []
        },
        {
            id: 'p-method2', type: 'paragraph',
            data: { text: 'Split into two cases: f(x) = g(x) or f(x) = \u2212g(x). Alternatively, square both sides: (f(x))\u00b2 = (g(x))\u00b2. Always check for extraneous solutions introduced by squaring.' },
            terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve |x + 2| = |2x \u2212 1|.',
                text: 'Case 1: x + 2 = 2x \u2212 1  \u2192  x = 3\nCase 2: x + 2 = \u2212(2x \u2212 1)  \u2192  x + 2 = \u22122x + 1  \u2192  3x = \u22121  \u2192  x = \u22121/3\nCheck: x=3: |5|=|5|=5 \u2713   x=\u22121/3: |5/3|=|\u22125/3| \u2713\nSolutions: x = 3 or x = \u22121/3'
            }, terms: []
        },
        {
            id: 'h-graphical', type: 'heading',
            data: { text: 'Graphical Interpretation', level: 2 }, terms: []
        },
        {
            id: 'p-graphical', type: 'paragraph',
            data: { text: 'Sketch y = |f(x)| and y = k on the same axes. The number of intersections equals the number of solutions. Use this to verify your algebraic answer.' },
            terms: []
        },
        {
            id: 'callout-warning', type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '\u2022 Only setting up one case (forgetting the negative case)\n\u2022 Not checking solutions after squaring (can give false solutions)\n\u2022 |f(x)| = k has no solution if k < 0 (modulus is always \u2265 0)'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: '|f(x)| = k: solve f(x) = k and f(x) = \u2212k. |f(x)| = |g(x)|: solve f = g and f = \u2212g. Always check solutions. Use a sketch to confirm the number of solutions.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "If you solve modulus equations by squaring both sides, you often introduce 'phantom' solutions. Always substitute your final x-values back into the original un-squared equation to verify which solutions are actually valid."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-method1', prompt: 'How many equations do you form when solving |f(x)| = k?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Solve |3x \u2212 6| = 9.' },
            { id: 'c3', blockId: 'p-method2', prompt: 'State both cases when solving |f(x)| = |g(x)|.' },
            { id: 'c4', blockId: 'callout-warning', prompt: 'Why must you check solutions after solving a modulus equation?' }
        ],
        summaryText: '|f(x)| = k \u2192 two cases: f(x) = k and f(x) = \u2212k. |f(x)| = |g(x)| \u2192 f = g and f = \u2212g. Check all solutions.',
        ready: true
    },
    evidence: []
};
