/**
 * WMA14 · Topic 7 · Subtopic 5 — Planes: angles and intersections
 */
export const note_mathematics_4_7_5 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Find the angle between two planes, find the intersection of a line and a plane, and find the distance from a point to a plane.' },
            terms: []
        },
        {
            id: 'h-angle', type: 'heading',
            data: { text: 'Angle Between Two Planes', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Angle Between Planes',
                text: 'The angle \u03b8 between planes with normals n\u2081 and n\u2082:\ncos\u03b8 = |n\u2081\u00b7n\u2082| / (|n\u2081| |n\u2082|)\n\n(Use the acute angle by taking the modulus.)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the angle between x+y+z=1 and 2x\u2212y+2z=3.',
                text: 'n\u2081=(1,1,1), n\u2082=(2,\u22121,2)\nn\u2081\u00b7n\u2082 = 2\u22121+2 = 3\n|n\u2081| = \u221a3, |n\u2082| = \u221a(4+1+4) = 3\n\ncos\u03b8 = 3/(3\u221a3) = 1/\u221a3\n\u03b8 = arccos(1/\u221a3) = 54.7\u00b0'
            }, terms: []
        },
        {
            id: 'h-intersect', type: 'heading',
            data: { text: 'Intersection of a Line and a Plane', level: 2 }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find where r=(1,\u22121,2)+\u03bb(2,1,\u22121) meets 3x+y\u22122z=4.',
                text: 'Substitute parametric coordinates into plane equation:\n3(1+2\u03bb) + (\u22121+\u03bb) \u2212 2(2\u2212\u03bb) = 4\n3+6\u03bb \u2212 1+\u03bb \u2212 4+2\u03bb = 4\n9\u03bb \u2212 2 = 4  \u27a2  \u03bb = 6/9 = 2/3\n\nPoint: (1+4/3, \u22121+2/3, 2\u22122/3) = (7/3, \u22121/3, 4/3)'
            }, terms: []
        },
        {
            id: 'h-dist', type: 'heading',
            data: { text: 'Distance from a Point to a Plane', level: 2 }, terms: []
        },
        {
            id: 'callout-key2', type: 'callout',
            data: {
                style: 'key',
                title: 'Point-to-Plane Distance',
                text: 'Distance from point P=(p\u2081,p\u2082,p\u2083) to plane ax+by+cz=d:\n\nd = |ap\u2081 + bp\u2082 + cp\u2083 \u2212 d| / \u221a(a\u00b2+b\u00b2+c\u00b2)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Perpendicular Line Method',
                text: 'Alternatively, find where the perpendicular from the point meets the plane (use direction n as the direction vector of the perpendicular line), then compute the distance between the two points.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Angle between planes: cos\u03b8=|n\u2081\u00b7n\u2082|/(|n\u2081||n\u2082|). Line-plane intersection: substitute parametric form. Distance: |ap+bq+cr\u2212d|/\u221a(a\u00b2+b\u00b2+c\u00b2).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the formula for the angle between two planes.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the angle between x+y+z=1 and 2x\u2212y+2z=3.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Describe how to find where a line meets a plane.' },
            { id: 'c4', blockId: 'callout-key2', prompt: 'State the formula for the distance from a point to a plane.' }
        ],
        summaryText: 'Angle between planes: like angle between normals. Line meets plane: substitute parametric into plane eq. Distance: |n\u00b7p\u2212d|/|n|.',
        ready: true
    },
    evidence: []
};
