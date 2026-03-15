/**
 * WMA14 · Topic 2 · Subtopic 3 — Partial fractions: quadratic factors
 */
export const note_mathematics_4_2_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Decompose rational expressions with irreducible quadratic factors in the denominator into partial fractions of the form (Ax+B)/(x\u00b2+c).' },
            terms: []
        },
        {
            id: 'h-form', type: 'heading',
            data: { text: 'Form for Irreducible Quadratic Factor', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Quadratic Denominator',
                text: 'An irreducible quadratic factor (x\u00b2 + a) gives a numerator (Bx + C):\n\nf(x) / [(x+k)(x\u00b2+a)] \u2261 A/(x+k) + (Bx+C)/(x\u00b2+a)\n\nCover-up still works for A (the linear factor). Find B and C by comparing coefficients.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Express (5x\u00b2 + x + 4)/[(x\u22121)(x\u00b2+4)] as partial fractions.',
                text: 'Write A/(x\u22121) + (Bx+C)/(x\u00b2+4)\n\nCover-up A (x=1):\nA = (5+1+4)/[(1+4)] = 10/5 = 2\n\nMultiply through by (x\u22121)(x\u00b2+4):\n5x\u00b2+x+4 = 2(x\u00b2+4) + (Bx+C)(x\u22121)\n= 2x\u00b2+8 + Bx\u00b2+(C\u2212B)x\u2212C\n\nCompare x\u00b2: 5 = 2+B  \u27a2  B = 3\nCompare constants: 4 = 8\u2212C  \u27a2  C = 4\nCheck x: 1 = C\u2212B = 4\u22123 = 1  \u2714\n\nAnswer: 2/(x\u22121) + (3x+4)/(x\u00b2+4)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Identify Irreducible Quadratics',
                text: 'x\u00b2 + a (with a > 0) cannot be factorised over the reals. Do not split it into linear factors. When it appears in the denominator, the corresponding numerator must be Bx+C (linear).'
            }, terms: []
        },
        {
            id: 'callout-warn', type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistake',
                text: 'Do not write C/(x\u00b2+4) for a quadratic factor. The numerator must be linear: (Bx+C)/(x\u00b2+4). A constant numerator would not have enough freedom to match all coefficients.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Irreducible quadratic factor x\u00b2+a \u2192 numerator (Bx+C). Cover-up for the linear factor, then compare coefficients for B and C. Check all three coefficient equations.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the partial fraction form when the denominator contains x\u00b2+a.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the partial fractions of (5x\u00b2+x+4)/[(x\u22121)(x\u00b2+4)].' },
            { id: 'c3', blockId: 'callout-warn', prompt: 'Why must the numerator over x\u00b2+a be linear (Bx+C) and not just a constant?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'When is a quadratic irreducible over the reals?' }
        ],
        summaryText: 'Quadratic factor x\u00b2+a \u2192 numerator Bx+C. Cover-up for linear factor; compare coefficients for B and C.',
        ready: true
    },
    evidence: []
};
