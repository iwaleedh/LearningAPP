/**
 * WMA13 · Topic 6 · Subtopic 3 — Newton-Raphson method
 */
export const note_mathematics_3_6_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply the Newton-Raphson method to find approximate roots of equations and explain when the method may fail.' },
            terms: []
        },
        {
            id: 'h-formula', type: 'heading',
            data: { text: 'Newton-Raphson Formula', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Newton-Raphson Iteration',
                text: 'x_{n+1} = x_n \u2212 f(x_n) / f\u2019(x_n)\n\nStarting from x\u2080, each iteration draws the tangent at (x_n, f(x_n)) and finds where it crosses the x-axis to give x_{n+1}.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Apply Newton-Raphson to f(x) = x\u00b3 \u2212 2 with x\u2080 = 1.2.',
                text: 'f(x) = x\u00b3 \u2212 2, f\u2019(x) = 3x\u00b2\n\nx\u2081 = 1.2 \u2212 (1.2\u00b3 \u2212 2)/(3 \u00b7 1.2\u00b2)\n= 1.2 \u2212 (1.728 \u2212 2)/4.32\n= 1.2 \u2212 (\u22120.272)/4.32\n= 1.2 + 0.0630 = 1.2630\n\nx\u2082 = 1.2630 \u2212 f(1.2630)/f\u2019(1.2630) \u2248 1.2599\n\nActual root: 2^(1/3) = 1.2599...'
            }, terms: []
        },
        {
            id: 'h-fail', type: 'heading',
            data: { text: 'When Newton-Raphson Fails', level: 2 }, terms: []
        },
        {
            id: 'list-fail', type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>f′(x_n) = 0:</strong> Division by zero \u2014 tangent is horizontal and never crosses the x-axis.' },
                    { text: '<strong>Starting near a turning point:</strong> The tangent overshoots, leading to divergence or oscillation.' },
                    { text: '<strong>Multiple roots close together:</strong> The iteration may converge to a different root than intended.' }
                ]
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: 'Newton-Raphson converges very quickly (quadratic convergence). Two or three iterations usually give 4+ significant figures. In exam questions, you often need to show the formula applied once or twice, and verify the root using change of sign.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Newton-Raphson: x_{n+1} = x_n \u2212 f(x_n)/f\u2019(x_n). Fast convergence. Fails when f\u2019(x_n) = 0 or near turning points. Always verify the final answer with a change of sign check.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the Newton-Raphson formula.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Apply Newton-Raphson once to f(x) = x\u00b3 \u2212 2 with x\u2080 = 1.2.' },
            { id: 'c3', blockId: 'list-fail', prompt: 'State two reasons Newton-Raphson might fail.' },
            { id: 'c4', blockId: 'callout-key', prompt: 'What is the geometric interpretation of one Newton-Raphson step?' }
        ],
        summaryText: 'Newton-Raphson: x_{n+1} = x_n \u2212 f(x_n)/f′(x_n). Each step draws the tangent line to find the next approximation. Fails when f′(x_n) = 0.',
        ready: true
    },
    evidence: []
};
