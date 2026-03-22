/**
 * WMA14 · Topic 7 · Subtopic 0 — 3D vectors: notation, magnitude, unit vectors
 */
export const note_mathematics_4_7_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use vectors in 3D: write column vectors, find magnitude, and compute unit vectors. Use position vectors and displacement.' },
            terms: []
        },
        {
            id: 'h-notation', type: 'heading',
            data: { text: '3D Vector Notation', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Notation and Definitions',
                text: 'Column: \u0332a = (a\u2081, a\u2082, a\u2083) or a\u2081i + a\u2082j + a\u2083k\n\nMagnitude: |a| = \u221a(a\u2081\u00b2 + a\u2082\u00b2 + a\u2083\u00b2)\n\nUnit vector: \u00e2 = a/|a|  (magnitude 1)\n\nPosition vector of A: OA\u20d7 = a; of B: OB\u20d7 = b\nDisplacement AB\u20d7 = b \u2212 a'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'a = (2, \u22121, 3). Find |a| and the unit vector in the direction of a.',
                text: '|a| = \u221a(4+1+9) = \u221a14\nUnit vector: \u00e2 = (1/\u221a14)(2, \u22121, 3) = (2/\u221a14, \u22121/\u221a14, 3/\u221a14)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'A=(1,2,3), B=(4,0,\u22121). Find AB\u20d7 and its length.',
                text: 'AB\u20d7 = OB \u2212 OA = (4\u22121, 0\u22122, \u22121\u22123) = (3, \u22122, \u22124)\n|AB| = \u221a(9+4+16) = \u221a29'
            }, terms: []
        },
        {
            id: 'h-ops', type: 'heading',
            data: { text: 'Vector Operations', level: 2 }, terms: []
        },
        {
            id: 'list-ops', type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Addition: (a\u2081,a\u2082,a\u2083)+(b\u2081,b\u2082,b\u2083)= (a\u2081+b\u2081, a\u2082+b\u2082, a\u2083+b\u2083)' },
                    { text: 'Scalar multiple: k(a\u2081,a\u2082,a\u2083) = (ka\u2081, ka\u2082, ka\u2083)' },
                    { text: 'Parallel vectors: a = kb for some scalar k' },
                    { text: 'Zero vector: (0,0,0)' }
                ]
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Parallel and Equal Vectors',
                text: 'a and b are parallel if a = kb.\na and b are equal if they have the same magnitude AND direction.\nA position vector points from the origin O to a point. A free vector only specifies direction and magnitude.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: '3D vectors: column form, |a|=\u221a(a\u2081\u00b2+a\u2082\u00b2+a\u2083\u00b2), unit vector = a/|a|. Displacement AB=b\u2212a. Addition and scalar multiplication component-wise.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When calculating the magnitude of a vector with negative components, ensure you bracket the negative values when squaring them (e.g., (-3)^2 = 9). A common calculator error is writing -3^2, which evaluates to -9."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the formula for the magnitude of a 3D vector and the definition of a unit vector.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find |a| and the unit vector for a=(2,\u22121,3).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find the displacement AB and its length given A=(1,2,3), B=(4,0,\u22121).' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What condition makes two vectors parallel?' }
        ],
        summaryText: '|a|=\u221a(a\u2081\u00b2+a\u2082\u00b2+a\u2083\u00b2). Unit vector: a/|a|. AB=OB\u2212OA. Parallel: a=kb.',
        ready: true
    },
    evidence: []
};
