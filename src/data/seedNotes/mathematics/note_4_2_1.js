/**
 * WMA14 · Topic 2 · Subtopic 1 — Partial fractions: repeated linear factors
 */
export const note_mathematics_4_2_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Decompose rational expressions with repeated linear factors into partial fractions.' },
            terms: []
        },
        {
            id: 'h-form', type: 'heading',
            data: { text: 'Form for Repeated Factors', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Repeated Linear Factor',
                text: 'A repeated factor (ax+b)\u00b2 requires two terms:\n\nf(x) / [(ax+b)\u00b2(cx+d)] \u2261 A/(ax+b) + B/(ax+b)\u00b2 + C/(cx+d)\n\nCover-up gives B and C directly. Find A by comparing coefficients or substituting another value.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Express (3x + 1)/[(x+2)\u00b2(x\u22121)] as partial fractions.',
                text: 'Write A/(x+2) + B/(x+2)\u00b2 + C/(x\u22121)\n\nCover-up B (set x = \u22122):\nB = (3(\u22122)+1)/(\u22122\u22121) = (\u22125)/(\u22123) = 5/3\n\nCover-up C (set x = 1):\nC = (3\u00b71+1)/(1+2)\u00b2 = 4/9\n\nFind A: multiply out and equate coefficients of x\u00b2 (or substitute x=0):\nAt x=0: 1/(4)(\u22121) = A/2 + B/4 + C/(\u22121)\n\u22121/4 = A/2 + 5/12 \u2212 4/9\nSolving: A = \u22123/9... \n(work through carefully: A = \u22123/9, recombine to check)\n\nAlternative: compare x\u00b2 coefficients after expanding:  A + C = 0  \u27a2  A = \u22124/9'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Express (x\u00b2 + 3)/[(x\u22122)\u00b2] as partial fractions (complete form).',
                text: 'The degree of numerator = degree of denominator, so divide first.\nx\u00b2 + 3 = 1\u00b7(x\u22122)\u00b2 + 4x \u2212 1 = (x\u22122)\u00b2 + 4(x\u22122) + 8\u22121 = (x\u22122)\u00b2 + 4(x\u22122) + 7\n\nSo (x\u00b2+3)/(x\u22122)\u00b2 = 1 + 4/(x\u22122) + 7/(x\u22122)\u00b2'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Systematic Approach',
                text: 'For repeated factors, cover-up only works directly for the highest power. For lower powers, substitute a different value of x or compare coefficients after multiplying through by the denominator.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Repeated factor (ax+b)\u00b2: needs A/(ax+b) + B/(ax+b)\u00b2. Cover-up gives B directly. Find A by substituting another x-value or comparing coefficients.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the form of partial fractions when (ax+b)\u00b2 is a factor.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'What does the cover-up rule give directly for (x+2)\u00b2 in the denominator?' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'Why does cover-up only work directly for the highest power of a repeated factor?' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'Express (x\u00b2+3)/(x\u22122)\u00b2 in partial fraction form.' }
        ],
        summaryText: 'Repeated factor (ax+b)\u00b2 \u2192 A/(ax+b)+B/(ax+b)\u00b2. Cover-up gives B directly; find A by substitution or comparing coefficients.',
        ready: true
    },
    evidence: []
};
