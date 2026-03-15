/**
 * WMA13 · Topic 6 · Subtopic 1 — Failure of change of sign method
 */
export const note_mathematics_3_6_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Identify and explain situations where the change of sign method fails to locate a root or gives a misleading result.' },
            terms: []
        },
        {
            id: 'h-fail', type: 'heading',
            data: { text: 'When the Change of Sign Method Fails', level: 2 }, terms: []
        },
        {
            id: 'list-fail', type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Repeated root (touching root):</strong> f(x) touches the x-axis but does not cross it. f(a) and f(b) have the same sign, so no sign change is detected even though a root exists.' },
                    { text: '<strong>Discontinuity:</strong> If f is discontinuous (e.g. division by zero) in [a, b], a sign change may be detected but there may be no root \u2014 just an asymptote.' },
                    { text: '<strong>More than one root:</strong> If the interval [a, b] contains an even number of roots, f(a) and f(b) may have the same sign, concealing the roots.' },
                    { text: '<strong>Roots very close together:</strong> Two roots close together may both be missed if the initial interval is too coarse.' }
                ]
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Explain why change of sign fails for f(x) = (x \u2212 2)\u00b2 on [1, 3].',
                text: 'f(1) = (1\u22122)\u00b2 = 1 > 0\nf(3) = (3\u22122)\u00b2 = 1 > 0\nNo sign change, even though x = 2 is a root.\nReason: repeated root \u2014 the graph only touches, does not cross, the x-axis.'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Explain a false sign change for f(x) = 1/(x \u2212 1) on [0.5, 1.5].',
                text: 'f(0.5) = 1/(0.5\u22121) = \u22122 < 0\nf(1.5) = 1/(1.5\u22121) = 2 > 0\nSign change detected, but there is NO root \u2014 the function has a vertical asymptote at x = 1.'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'How to Avoid Errors',
                text: 'Before applying change of sign:\n- Check the function is continuous on [a, b]: look for denominators that could be zero\n- Sketch a rough graph or check if a repeated root is possible\n- If you detect a sign change, verify it is a root (not a discontinuity) by zooming in'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Change of sign fails for: repeated roots (no crossing), discontinuities (false sign change), even numbers of roots in the interval. Always check continuity before applying.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-fail', prompt: 'List three situations where the change of sign method fails.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Why does change of sign fail for f(x) = (x\u22122)\u00b2 on [1, 3]?' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Why might a sign change occur with no actual root for 1/(x\u22121)?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What checks should you do before applying the change of sign method?' }
        ],
        summaryText: 'Change of sign fails: repeated roots, discontinuities, even number of roots in interval. Always check for continuity first.',
        ready: true
    },
    evidence: []
};
