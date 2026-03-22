/**
 * WMA13 · Topic 6 · Subtopic 4 — Numerical methods in context
 */
export const note_mathematics_3_6_4 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply numerical methods (change of sign, iteration, Newton-Raphson) in context and critically compare their advantages and limitations.' },
            terms: []
        },
        {
            id: 'h-compare', type: 'heading',
            data: { text: 'Comparing Numerical Methods', level: 2 }, terms: []
        },
        {
            id: 'table-compare', type: 'comparisonTable',
            data: {
                headers: ['Method', 'Advantages', 'Limitations'],
                rows: [
                    ['Change of sign', 'Simple to use; no calculus needed; guaranteed to find a root if one exists in (a, b)', 'Slow; fails for repeated roots, discontinuities, or even numbers of roots'],
                    ['Fixed-point x=g(x)', 'Easy to implement; works well when |g\u2019(x)| \u226a 1', 'May diverge if |g\u2019(x)| > 1; choice of rearrangement matters'],
                    ['Newton-Raphson', 'Very fast (quadratic) convergence; few iterations needed', 'Requires f\u2019(x); fails if f\u2019(x_n) = 0; may converge to wrong root']
                ],
                caption: 'Summary comparison of numerical methods'
            }, terms: []
        },
        {
            id: 'h-context', type: 'heading',
            data: { text: 'Application in Context', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A curve y = e^x \u2212 3x is modelled. Find the x-coordinates of intersections with y = 0 to 3 d.p.',
                text: 'f(x) = e\u02e3 \u2212 3x, f\u2019(x) = e\u02e3 \u2212 3\n\nSketch or evaluate: roots near x \u2248 0.6 and x \u2248 1.5 (approximately).\n\nNewton-Raphson from x\u2080 = 0.6:\nx\u2081 = 0.6 \u2212 (e^0.6 \u2212 1.8)/(e^0.6 \u2212 3)\n= 0.6 \u2212 (1.822 \u2212 1.8)/(1.822 \u2212 3)\n= 0.6 \u2212 (0.022)/(\u22121.178) \u2248 0.619\nContinue to get x \u2248 0.619'
            }, terms: []
        },
        {
            id: 'callout-check', type: 'callout',
            data: {
                style: 'key',
                title: 'Verifying a Root to n Decimal Places',
                text: 'For a root \u03b1 to n d.p., show a sign change in [\u03b1 \u2212 0.5\u00d710^{\u2212n}, \u03b1 + 0.5\u00d710^{\u2212n}].\n\nExample: verify \u03b1 = 1.532 to 3 d.p.:\nShow f(1.5315) < 0 and f(1.5325) > 0 (or vice versa).'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Strategy',
                text: 'In context questions:\n1. Read what the model represents (population, volume, etc.)\n2. Identify f(x) = 0 clearly\n3. Apply the specified method step by step\n4. Verify the answer using change of sign\n5. Interpret the answer in context'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Numerical methods: change of sign is simple but slow; iteration x=g(x) requires |g′| < 1; Newton-Raphson is fast but needs f′(x). Always verify roots using change of sign in the relevant interval.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When comparing numerical methods, be precise: Newton-Raphson converges very quickly but requires you to be able to differentiate the function, whereas interval bisection is slower but guaranteed to work for any continuous function with a sign change."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-compare', prompt: 'What are the main limitations of the Newton-Raphson method compared to change of sign?' },
            { id: 'c2', blockId: 'callout-check', prompt: 'How do you verify a root \u03b1 = 1.532 to 3 d.p.?' },
            { id: 'c3', blockId: 'table-compare', prompt: 'When does fixed-point iteration x_{n+1}=g(x_n) diverge?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'List the 5 steps for answering a numerical methods in context question.' }
        ],
        summaryText: "Numerical methods: change of sign (simple, slow), fixed-point iteration (needs |g′|<1), Newton-Raphson (fast, needs f′). Verify all roots with a change of sign check.",
        ready: true
    },
    evidence: []
};
