/**
 * Seed note: Mathematics · WMA12 · Topic 8 · Subtopic 3
 * "Integration using partial fractions"
 */

export const note_mathematics_2_8_3 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Decompose rational functions into partial fractions and integrate each term.' },
            terms: []
        },
        {
            id: 'h-pf',
            type: 'heading',
            data: { text: 'Partial Fractions Recap', level: 2 },
            terms: []
        },
        {
            id: 'callout-pf-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Standard Partial Fraction Forms',
                text: 'Two distinct linear factors:\n  f(x)/[(ax+b)(cx+d)] = A/(ax+b) + B/(cx+d)\n\nRepeated linear factor:\n  f(x)/(ax+b)² = A/(ax+b) + B/(ax+b)²\n\nIrreducible quadratic factor:\n  f(x)/[(ax+b)(cx²+d)] = A/(ax+b) + (Bx+C)/(cx²+d)\n\nFind A, B, C by multiplying through by the denominator and substituting convenient values of x, or equating coefficients.'
            },
            terms: []
        },
        {
            id: 'h-int-pf',
            type: 'heading',
            data: { text: 'Integrating Partial Fractions', level: 2 },
            terms: []
        },
        {
            id: 'callout-int-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'This is Why Partial Fractions are Useful',
                text: 'Each term after decomposition has the form A/(ax + b), which integrates to:\n\n  ∫ A/(ax+b) dx = (A/a) ln|ax+b| + c\n\nOr A/(ax+b)ⁿ (n ≥ 2), which integrates using the power rule:\n\n  ∫ A/(ax+b)² dx = −A/[a(ax+b)] + c'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find ∫ (5x − 3)/[(x+1)(x−2)] dx.',
                text: '(5x − 3)/[(x+1)(x−2)] = A/(x+1) + B/(x−2)\n\nMultiply through: 5x − 3 = A(x−2) + B(x+1)\n\nLet x = 2: 7 = 3B  →  B = 7/3\nLet x = −1: −8 = −3A  →  A = 8/3\n\n∫ [(8/3)/(x+1) + (7/3)/(x−2)] dx\n= (8/3)ln|x+1| + (7/3)ln|x−2| + c'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Definite Integral', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Evaluate ∫₁³ 4/[(x)(x+2)] dx.',
                text: '4/[x(x+2)] = A/x + B/(x+2)\n4 = A(x+2) + Bx\n\nLet x = 0: A = 2\nLet x = −2: B = −2\n\n∫₁³ [2/x − 2/(x+2)] dx\n= [2 ln|x| − 2 ln|x+2|]₁³\n= [2 ln(3/5)] − [2 ln(1/3)]\n= 2 ln(3/5) − 2 ln(1/3)\n= 2 ln(9/5)'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Improper Fractions',
                text: 'If the degree of the numerator ≥ degree of the denominator, perform polynomial long division FIRST.\n\nExample: ∫ (x²+1)/(x+1) dx — divide x²+1 by x+1 first to get a mixed expression, then integrate.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Decompose into partial fractions: A/(ax+b) + B/(cx+d) etc. Each A/(ax+b) integrates to (A/a)ln|ax+b|+c. For repeated factors A/(ax+b)², use the power rule giving −A/[a(ax+b)]+c. If degree(top) ≥ degree(bottom): long-divide first.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Always check if an algebraic fraction is 'top heavy' (improper) before attempting to find partial fractions. If the highest power on top is equal to or greater than the bottom, you must use algebraic long division first."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-int-key', prompt: 'What does A/(ax+b) integrate to?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find ∫ (5x−3)/[(x+1)(x−2)] dx.' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'What must you do before using partial fractions if the fraction is improper?' },
            { id: 'c4', blockId: 'callout-pf-key', prompt: 'State the partial fraction forms for two distinct linear factors and for a repeated linear factor.' }
        ],
        summaryText: 'Partial fractions: split into A/(ax+b)+B/(cx+d). Integrate: A/(ax+b)→(A/a)ln|ax+b|+c. Repeated: A/(ax+b)²→−A/[a(ax+b)]+c. If improper fraction: long divide first.',
        ready: true
    },
    evidence: []
};
