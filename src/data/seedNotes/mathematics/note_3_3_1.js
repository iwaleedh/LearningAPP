/**
 * WMA13 · Topic 3 · Subtopic 1 — Logarithmic graphs and exponential equations
 */
export const note_mathematics_3_3_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Sketch and use logarithmic graphs, solve exponential equations using logarithms, and linearise exponential data.' },
            terms: []
        },
        {
            id: 'h-graph', type: 'heading',
            data: { text: 'Graph of y = ln x', level: 2 }, terms: []
        },
        {
            id: 'p-graph', type: 'paragraph',
            data: { text: 'y = ln x passes through (1, 0) and (e, 1). It has a vertical asymptote at x = 0. The graph increases for all x > 0, but does so more and more slowly. It is the reflection of y = e\u02e3 in the line y = x.' },
            terms: []
        },
        {
            id: 'table-points', type: 'comparisonTable',
            data: {
                headers: ['x', '1/e', '1', 'e', 'e\u00b2'],
                rows: [['ln x', '\u22121', '0', '1', '2']],
                caption: 'Key points on y = ln x'
            }, terms: []
        },
        {
            id: 'h-solve', type: 'heading',
            data: { text: 'Solving Exponential Equations', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve 3e^(2x) \u2212 7 = 0, giving x to 3 significant figures.',
                text: '3e^(2x) = 7\ne^(2x) = 7/3\n2x = ln(7/3)\nx = ln(7/3)/2 = 0.424 (3 s.f.)'
            }, terms: []
        },
        {
            id: 'h-linear', type: 'heading',
            data: { text: 'Linearising Exponential Relationships', level: 2 }, terms: []
        },
        {
            id: 'p-linear', type: 'paragraph',
            data: { text: 'If y = ab\u02e3, take natural log: ln y = ln a + x ln b. Plotting ln y against x gives a <strong>straight line</strong> with gradient ln b and y-intercept ln a. This lets you find a and b from data.' },
            terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Data follows y = ab\u02e3. Plotting ln y vs x gives gradient 0.693 and intercept 1.386. Find a and b.',
                text: 'Gradient = ln b = 0.693  \u2192  b = e^0.693 = 2\nIntercept = ln a = 1.386  \u2192  a = e^1.386 = 4\nSo y = 4 \u00b7 2\u02e3'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'If the relationship is y = ax^n (power law), take logs differently:\nln y = ln a + n ln x\nPlot ln y against ln x for a straight line with gradient n and intercept ln a.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'y = ln x: passes through (1,0), asymptote at x = 0, reflection of e\u02e3 in y = x. To linearise y = ab\u02e3: plot ln y vs x \u2014 gradient = ln b, intercept = ln a.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When linearising data of the form y = ax^n or y = ab^x, clearly state what your Y and X axes represent before plotting or finding the gradient. A common mistake is muddling log(y) against x with log(y) against log(x)."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-graph', prompt: 'Describe the key features of the graph y = ln x.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Solve 3e^(2x) = 7.' },
            { id: 'c3', blockId: 'p-linear', prompt: 'How do you linearise y = ab\u02e3? What do you plot?' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'If a ln y vs x graph has gradient 0.693 and intercept 1.386, find a and b.' }
        ],
        summaryText: 'ln x: through (1,0), asymptote x=0. Solve e\u02e3 equations by taking ln. Linearise y=ab\u02e3: plot ln y vs x, gradient=ln b, intercept=ln a.',
        ready: true
    },
    evidence: []
};
