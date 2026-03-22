/**
 * WMA13 · Topic 1 · Subtopic 4 — Modulus functions: sketching graphs
 */
export const note_mathematics_3_1_4 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Sketch y = |f(x)| and y = f(|x|) by applying modulus transformations.' },
            terms: []
        },
        {
            id: 'h-def', type: 'heading',
            data: { text: 'The Modulus Function', level: 2 }, terms: []
        },
        {
            id: 'p-def', type: 'paragraph',
            data: { text: '|x| gives the non-negative magnitude of x. Definition: |x| = x if x \u2265 0; |x| = \u2212x if x < 0. The graph of y = |x| is a V-shape with vertex at the origin.' },
            terms: []
        },
        {
            id: 'h-yfx', type: 'heading',
            data: { text: 'Graph of y = |f(x)|', level: 2 }, terms: []
        },
        {
            id: 'p-yfx', type: 'paragraph',
            data: { text: 'Start with y = f(x). Any part of the graph <strong>below the x-axis</strong> is reflected <strong>upward</strong> (in the x-axis). Parts above remain unchanged. The result has no negative y-values.' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Sketch y = |2x \u2212 4|.',
                text: 'Sketch y = 2x \u2212 4 first: x-intercept at x = 2, slope 2\nFor x < 2: line is below x-axis \u2192 reflect upward\nFor x \u2265 2: y = 2x \u2212 4   For x < 2: y = \u2212(2x\u22124) = 4 \u2212 2x\nResult: V-shape, vertex at (2, 0)'
            }, terms: []
        },
        {
            id: 'h-fmodx', type: 'heading',
            data: { text: 'Graph of y = f(|x|)', level: 2 }, terms: []
        },
        {
            id: 'p-fmodx', type: 'paragraph',
            data: { text: 'Sketch y = f(x) for x \u2265 0, then <strong>reflect this in the y-axis</strong> to create the left-hand side. The result is always symmetric about the y-axis (an even function).' },
            terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Sketch y = f(|x|) where f(x) = 2x \u2212 4.',
                text: 'For x \u2265 0: y = 2x \u2212 4 (standard line)\nFor x < 0: y = 2|x| \u2212 4 = \u22122x \u2212 4 (reflect right half in y-axis)\nResult: V-shape opening upward, vertex at (0, \u22124)'
            }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Key Difference',
                text: 'y = |f(x)|: reflect parts BELOW x-axis UPWARD \u2014 no negative y-values\ny = f(|x|): reflect right half in y-AXIS \u2014 even function, symmetric about y-axis'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: '|f(x)|: draw f(x) then reflect any y < 0 parts upward. f(|x|): draw f(x) for x \u2265 0 then reflect in the y-axis. Remember which axis you are reflecting in!' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When sketching y = f(|x|), a very common error is to reflect the entire graph. You must completely delete the portion of the curve on the left of the y-axis, and then reflect the right-hand side across the y-axis."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-def', prompt: 'What does |\u22125| equal?' },
            { id: 'c2', blockId: 'p-yfx', prompt: 'For y = |f(x)|, what happens to the parts of f(x) below the x-axis?' },
            { id: 'c3', blockId: 'p-fmodx', prompt: 'What symmetry does y = f(|x|) always have?' },
            { id: 'c4', blockId: 'callout-key', prompt: 'State the key difference between y = |f(x)| and y = f(|x|).' }
        ],
        summaryText: '|f(x)|: reflect y < 0 upward. f(|x|): reflect x > 0 part in y-axis (even). Know which axis you reflect in.',
        ready: true
    },
    evidence: []
};
