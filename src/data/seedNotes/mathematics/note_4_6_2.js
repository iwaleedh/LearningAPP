/**
 * WMA14 · Topic 6 · Subtopic 2 — Integration using partial fractions
 */
export const note_mathematics_4_6_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use partial fractions to break down rational integrands, then integrate each term using standard results.' },
            terms: []
        },
        {
            id: 'h-standard', type: 'heading',
            data: { text: 'Key Standard Results', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Standard Integrals',
                text: '\u222b 1/(ax+b) dx = (1/a) ln|ax+b| + C\n\u222b 1/(ax+b)\u00b2 dx = \u2212(1/a(ax+b)) + C\n\u222b 1/(x\u00b2+a\u00b2) dx = (1/a) arctan(x/a) + C'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: '\u222b (4x + 5)/[(x+1)(x+2)] dx',
                text: 'Partial fractions: 4x+5 = A(x+2)+B(x+1)\nAt x=\u22121: 1 = A \u27a2 A=1; at x=\u22122: \u22123=\u2212B \u27a2 B=3\n\n\u222b [1/(x+1) + 3/(x+2)] dx = ln|x+1| + 3 ln|x+2| + C'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: '\u222b 3/[(x+1)(x+1)\u00b2] correction: \u222b 1/[(x\u22121)(x+1)\u00b2] dx',
                text: 'Partial fractions: 1/[(x\u22121)(x+1)\u00b2] = A/(x\u22121) + B/(x+1) + C/(x+1)\u00b2\n\nAt x=1: 1 = A(2)\u00b2 \u27a2 A=1/4\nAt x=\u22121: 1 = C(\u22122) \u27a2 C=\u22121/2\nCompare x\u00b2: 0 = A+B \u27a2 B=\u22121/4\n\n\u222b = (1/4)ln|x\u22121| \u2212 (1/4)ln|x+1| + (1/2)/(x+1) + C\n= (1/4)ln|(x\u22121)/(x+1)| + 1/(2(x+1)) + C'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Modulus and Log Rules',
                text: 'Always write ln|\u2026| with the modulus signs. You may combine logarithms at the end using ln a + ln b = ln(ab) and n ln a = ln(a\u207f).'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Partial fractions + integration: split into A/(ax+b), B/(ax+b)\u00b2, (Cx+D)/(x\u00b2+a\u00b2) etc. Integrate each using standard results: 1/(ax+b) \u2192 (1/a)ln|ax+b|.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State \u222b 1/(ax+b) dx and \u222b 1/(ax+b)\u00b2 dx.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Evaluate \u222b (4x+5)/[(x+1)(x+2)] dx.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'What integral arises from 1/(x+1)\u00b2 as a partial fraction term?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Why is the modulus sign needed in ln|ax+b|?' }
        ],
        summaryText: 'Split into partial fractions, integrate each: A/(ax+b)\u2192(A/a)ln|ax+b|, A/(ax+b)\u00b2\u2192\u2212A/(a(ax+b)).',
        ready: true
    },
    evidence: []
};
