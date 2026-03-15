/**
 * WMA14 · Topic 7 · Subtopic 4 — Vector equation of a plane
 */
export const note_mathematics_4_7_4 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Write the equation of a plane in vector form r\u00b7n = d and Cartesian form ax+by+cz=d, given a normal vector and a point.' },
            terms: []
        },
        {
            id: 'h-forms', type: 'heading',
            data: { text: 'Equations of a Plane', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Plane Equations',
                text: 'Vector form: r \u00b7 n = a \u00b7 n = d\n  (n = normal vector; a = position of any point on the plane)\n\nCartesian (Scalar) form: n\u2081x + n\u2082y + n\u2083z = d\n  where d = n \u00b7 a'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the equation of the plane with normal n=(2,\u22121,3) passing through A=(1,0,2).',
                text: 'd = n\u00b7a = 2(1)+(\u22121)(0)+3(2) = 2+0+6 = 8\n\nVector form: r\u00b7(2,\u22121,3) = 8\nCartesian: 2x \u2212 y + 3z = 8'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the plane through A=(1,0,1), B=(2,1,0), C=(0,1,2).',
                text: 'AB = (1,1,\u22121), AC = (\u22121,1,1)\n\nNormal n = AB \u00d7 AC (cross product):\nn = |i  j  k |\n    |1  1  \u22121|\n    |\u22121 1  1 |\n= i(1\u00b71\u2212(\u22121)\u00b71) \u2212 j(1\u00b71\u2212(\u22121)\u00b7(\u22121)) + k(1\u00b71\u22121\u00b7(\u22121))\n= i(1+1) \u2212 j(1\u22121) + k(1+1)\n= (2, 0, 2)\n\nd = (2,0,2)\u00b7(1,0,1) = 2+0+2 = 4\nPlane: 2x + 2z = 4, or x + z = 2'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'The Normal Vector',
                text: 'The normal vector is perpendicular to every vector in the plane. If you have two vectors in the plane, their cross product gives the normal. For the Edexcel WMA14 exam, cross product is usually not required separately \u2014 normals are typically given or derived from the perpendicularity of lines.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Plane: r\u00b7n=d where d=n\u00b7a. Cartesian: n\u2081x+n\u2082y+n\u2083z=d. Normal n is perpendicular to all vectors lying in the plane.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the vector and Cartesian forms of the equation of a plane.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Write the plane through (1,0,2) with normal n=(2,\u22121,3).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'How do you find the normal vector to a plane through three points A, B, C?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What property defines the normal vector to a plane?' }
        ],
        summaryText: 'Plane: r\u00b7n=d=n\u00b7a. n = normal (perp. to plane). Cartesian: n\u2081x+n\u2082y+n\u2083z=d.',
        ready: true
    },
    evidence: []
};
