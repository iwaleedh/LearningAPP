/**
 * WMA14 · Topic 7 · Subtopic 2 — Vector equation of a line
 */
export const note_mathematics_4_7_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Write the vector equation of a line in the form r = a + \u03bbb, find points on the line, and convert to Cartesian form.' },
            terms: []
        },
        {
            id: 'h-form', type: 'heading',
            data: { text: 'Vector Equation of a Line', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Forms',
                text: 'Vector form: r = a + \u03bbb\n  (a = position vector of a known point; b = direction vector; \u03bb = scalar parameter)\n\nCartesian form:\n(x\u2212a\u2081)/b\u2081 = (y\u2212a\u2082)/b\u2082 = (z\u2212a\u2083)/b\u2083'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Write the vector equation of the line through A=(2,1,\u22121) in direction d=(1,\u22123,2).',
                text: 'r = (2,1,\u22121) + \u03bb(1,\u22123,2)\n\nIn component form:\nx = 2+\u03bb, y = 1\u22123\u03bb, z = \u22121+2\u03bb\n\nCartesian: (x\u22122)/1 = (y\u22121)/(\u22123) = (z+1)/2'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Write the line through A=(1,0,3) and B=(0,2,1) in vector form.',
                text: 'Direction b = AB = B\u2212A = (\u22121,2,\u22122)\n\nr = (1,0,3) + \u03bb(\u22121,2,\u22122)\nor using B: r = (0,2,1) + \u03bc(\u22121,2,\u22122)\n\n(Both are correct; the line is the same)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Parametric Coordinates',
                text: 'From r = a + \u03bbb, the coordinates of a general point on the line are:\nx = a\u2081+\u03bbb\u2081, y = a\u2082+\u03bbb\u2082, z = a\u2083+\u03bbb\u2083\n\nTo check if a point P is on the line: solve for \u03bb from one component, then verify the others give the same \u03bb.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Line: r = a + \u03bbb (point + \u03bb\u00d7direction). Direction = any vector along the line (e.g. AB). Cartesian: (x\u2212a\u2081)/b\u2081=(y\u2212a\u2082)/b\u2082=(z\u2212a\u2083)/b\u2083.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "The equation of a line r = a + tb requires 'a' to be a specific position vector on the line and 'b' to be a direction vector. Never confuse these two; 'b' shows which way the line points, while 'a' anchors it to the origin."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the vector and Cartesian forms of the equation of a line.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Write the equation of the line through (2,1,\u22121), direction (1,\u22123,2).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find the vector equation of the line through A=(1,0,3) and B=(0,2,1).' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you check if a point lies on a line given in vector form?' }
        ],
        summaryText: 'r = a + \u03bbb. Direction b = difference of two points. Cartesian: quotients of (x\u2212a), (y\u2212b), (z\u2212c) all equal.',
        ready: true
    },
    evidence: []
};
