/**
 * WMA14 · Topic 7 · Subtopic 6 — Vectors in context: geometry proofs and combined problems
 */
export const note_mathematics_4_7_6 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use vectors to prove geometric properties, find ratios of division, and solve combined problems involving lines and planes.' },
            terms: []
        },
        {
            id: 'h-ratio', type: 'heading',
            data: { text: 'Section Formula (Division of Line Segment)', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Section Formula',
                text: 'If P divides AB in ratio m:n (from A),\nOP = (n \u00b7 OA + m \u00b7 OB) / (m+n)\n\nMidpoint: m=n=1  \u27a2  midpoint = (OA+OB)/2'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A=(2,0,1), B=(8,3,7). Find P that divides AB in ratio 2:1.',
                text: 'OP = (OA + 2\u00b7OB)/3 = [(2,0,1)+2(8,3,7)]/3 = [(2+16, 0+6, 1+14)]/3\n= (18,6,15)/3 = (6,2,5)'
            }, terms: []
        },
        {
            id: 'h-proof', type: 'heading',
            data: { text: 'Vector Geometry Proofs', level: 2 }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Using vectors, prove the midpoint of OB and the midpoint of AC lie on the segment connecting those points.',
                text: 'Let OA=a, OB=b, OC=c.\nMidpoint of OB: M\u2081 = b/2\nMidpoint of AC: M\u2082 = (a+c)/2\n\nM\u2031M\u2082 = M\u2082 \u2212 M\u2081 = (a+c)/2 \u2212 b/2 = (a+c\u2212b)/2\n[Express any collinearity by showing vectors are parallel]'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'OA=a, OB=b. X is on AB with AX:XB = 1:2. Find OX.',
                text: 'OX = OA + (1/3)AB = a + (1/3)(b\u2212a) = a + b/3 \u2212 a/3 = (2a+b)/3'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Strategy for Vector Proofs',
                text: '\u2022 Express all position vectors in terms of two or three base vectors.\n\u2022 To show collinearity: show AB = k \u00b7 AC (parallel and sharing point A).\n\u2022 To show parallel: show their direction vectors are scalar multiples.\n\u2022 Always state your conclusion clearly.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Vector geometry: section formula OP=(nOA+mOB)/(m+n). Midpoint=(OA+OB)/2. Collinearity: AB=kAC. Express positions in terms of base vectors a and b.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the section formula for P dividing AB in ratio m:n.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find P on AB=(2,0,1)\u2192(8,3,7) that divides in ratio 2:1.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Find OX where X divides AB with AX:XB=1:2.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you prove three points are collinear using vectors?' }
        ],
        summaryText: 'Section formula: OP=(nOA+mOB)/(m+n). Midpoint: (a+b)/2. Collinearity: show one vector is a scalar multiple of another.',
        ready: true
    },
    evidence: []
};
