/**
 * WMA14 · Topic 4 · Subtopic 2 — Partial fractions combined with binomial expansion
 */
export const note_mathematics_4_4_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply binomial expansion after first expressing a fraction in partial fraction form.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Strategy: Partial Fractions then Binomial', level: 2 }, terms: []
        },
        {
            id: 'list-steps', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Decompose the given expression into partial fractions.' },
                    { text: 'Expand each partial fraction separately using the general binomial series.' },
                    { text: 'Add the expansions together.' },
                    { text: 'State the range of validity (the intersection of both ranges).' }
                ]
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the expansion of 5/[(1+2x)(1\u2212x)] up to x\u00b2.',
                text: 'Partial fractions: 5/[(1+2x)(1\u2212x)] = A/(1+2x) + B/(1\u2212x)\nCover-up: A = 5/(1+2\u00b70) |at x=\u22121/2... A=5/(1\u00b7(3/2))...\nActual: multiply: 5 = A(1\u2212x) + B(1+2x)\nx=1/2: A = 5/(3/2) = 10/3; wait let me redo:\nx=\u22121/2: 5 = A(1\u22121/2+1/2)... \n\nActually: A/(1+2x) + B/(1\u2212x). Multiply by denominator:\n5 = A(1\u2212x) + B(1+2x)\nx=1: 5 = 3B \u27a2 B = 5/3\nx=\u22121/2: 5 = A(3/2) \u27a2 A = 10/3\n\nExpand A/(1+2x): (10/3)(1+2x)\u207b\u00b9 = (10/3)[1\u22122x+4x\u00b2\u2212\u2026]\n= 10/3 \u2212 20x/3 + 40x\u00b2/3 + \u2026  valid |x| < 1/2\n\nExpand B/(1\u2212x): (5/3)(1\u2212x)\u207b\u00b9 = (5/3)[1+x+x\u00b2+\u2026]\n= 5/3 + 5x/3 + 5x\u00b2/3 + \u2026  valid |x| < 1\n\nSum: (10/3+5/3) + (\u221220/3+5/3)x + (40/3+5/3)x\u00b2 + \u2026\n= 5 \u2212 5x + 15x\u00b2 + \u2026\n\nValid for |x| < 1/2 (most restrictive)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Validity of Combined Expansion',
                text: 'Each partial fraction has its own validity range. The combined expansion is only valid where ALL ranges hold simultaneously: take the intersection (most restrictive condition).'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Partial fractions + binomial: decompose first, expand each term separately, add results. Validity = intersection of all individual validity ranges.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "It is much safer to write (A/(1-x)) + (B/(1+2x)) as A(1-x)^-1 + B(1+2x)^-1 and expand each bracket separately before adding them together. Be extra careful with minus signs in the (1+2x)^-1 expansion."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-steps', prompt: 'List the 4 steps to expand a rational function using partial fractions + binomial.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Expand 5/[(1+2x)(1\u2212x)] to x\u00b2 term.' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'How do you determine the validity of a combined binomial expansion?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'If one partial fraction is valid |x|<1/2 and another |x|<1, state the combined validity.' }
        ],
        summaryText: 'Partial fractions + binomial: split, expand each, combine. Validity = most restrictive individual range.',
        ready: true
    },
    evidence: []
};
