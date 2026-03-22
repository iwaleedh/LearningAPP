/**
 * WMA14 · Topic 7 · Subtopic 3 — Lines: intersection, skew lines, angle between lines
 */
export const note_mathematics_4_7_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Determine whether two lines intersect, are parallel, or are skew; find the point of intersection; and calculate the angle between two lines.' },
            terms: []
        },
        {
            id: 'h-classify', type: 'heading',
            data: { text: 'Classification of Two Lines', level: 2 }, terms: []
        },
        {
            id: 'table-types', type: 'comparisonTable',
            data: {
                headers: ['Type', 'Condition', 'Description'],
                rows: [
                    ['Parallel', 'b\u2081 = kb\u2082', 'Same direction; never meet'],
                    ['Intersecting', 'Consistent equations', 'Meet at exactly one point'],
                    ['Skew', 'Not parallel, no solution', '3D only; no meeting point']
                ],
                caption: 'Classification of line pairs in 3D'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Test if L\u2081: r=(1,1,0)+\u03bb(1,\u22121,1) and L\u2082: r=(2,0,1)+\u03bc(2,1,\u22121) intersect.',
                text: 'Set equal: (1+\u03bb, 1\u2212\u03bb, \u03bb) = (2+2\u03bc, \u03bc, 1\u2212\u03bc)\n\nFrom z: \u03bb = 1\u2212\u03bc  \u27a2  \u03bc = 1\u2212\u03bb\nFrom y: 1\u2212\u03bb = \u03bc = 1\u2212\u03bb  \u2714 (consistent)\nFrom x: 1+\u03bb = 2+2\u03bc = 2+2(1\u2212\u03bb) = 4\u22122\u03bb\n3\u03bb = 3  \u27a2  \u03bb=1,  \u03bc=0\n\nCheck: L\u2081 at \u03bb=1: (2,0,1); L\u2082 at \u03bc=0: (2,0,1). \u2714 Intersection at (2,0,1).'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Angle between L\u2081 with direction b\u2081=(1,\u22121,1) and L\u2082 with direction b\u2082=(2,1,\u22121).',
                text: 'cos\u03b8 = |b\u2081\u00b7b\u2082| / (|b\u2081| |b\u2082|)\nb\u2081\u00b7b\u2082 = 2\u22121\u22121 = 0\n\n\u03b8 = 90\u00b0 (the lines are perpendicular)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Skew vs Intersecting',
                text: 'To show skew: set up the three equations from x, y, z components. Solve two to find \u03bb and \u03bc, then substitute into the third. If the third equation is NOT satisfied, the lines are skew.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Lines: parallel if directions are scalar multiples. Intersect if equations are consistent. Skew if not parallel and equations are inconsistent. Angle: cos\u03b8=|b\u2081\u00b7b\u2082|/(|b\u2081||b\u2082|) (use |\u2026| for acute angle).' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When showing two lines intersect, equate their components to find the parameters using two of the equations. You must then explicitly substitute these parameter values into the third equation to verify they give the same result."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-types', prompt: 'State the three possible relationships between two lines in 3D and when each occurs.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'How do you test whether two lines intersect?' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find the angle between lines with directions (1,\u22121,1) and (2,1,\u22121).' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you show that two lines are skew?' }
        ],
        summaryText: 'Parallel: b\u2081=kb\u2082. Intersect: set equal, solve. Skew: no solution. Angle: cos\u03b8=|b\u2081\u00b7b\u2082|/(|b\u2081||b\u2082|).',
        ready: true
    },
    evidence: []
};
