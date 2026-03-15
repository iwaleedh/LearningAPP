import os
base = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'
notes = {}

# ── Topic 7: Vectors ──────────────────────────────────────────────────────────

notes['note_4_7_0.js'] = """\
/**
 * WMA14 \u00b7 Topic 7 \u00b7 Subtopic 0 \u2014 3D vectors: notation, magnitude, unit vectors
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
                text: 'Column: \\u0332a = (a\\u2081, a\\u2082, a\\u2083) or a\\u2081i + a\\u2082j + a\\u2083k\\n\\nMagnitude: |a| = \\u221a(a\\u2081\\u00b2 + a\\u2082\\u00b2 + a\\u2083\\u00b2)\\n\\nUnit vector: \\u00e2 = a/|a|  (magnitude 1)\\n\\nPosition vector of A: OA\\u20d7 = a; of B: OB\\u20d7 = b\\nDisplacement AB\\u20d7 = b \\u2212 a'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'a = (2, \\u22121, 3). Find |a| and the unit vector in the direction of a.',
                text: '|a| = \\u221a(4+1+9) = \\u221a14\\nUnit vector: \\u00e2 = (1/\\u221a14)(2, \\u22121, 3) = (2/\\u221a14, \\u22121/\\u221a14, 3/\\u221a14)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'A=(1,2,3), B=(4,0,\\u22121). Find AB\\u20d7 and its length.',
                text: 'AB\\u20d7 = OB \\u2212 OA = (4\\u22121, 0\\u22122, \\u22121\\u22123) = (3, \\u22122, \\u22124)\\n|AB| = \\u221a(9+4+16) = \\u221a29'
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
                    { text: 'Addition: (a\\u2081,a\\u2082,a\\u2083)+(b\\u2081,b\\u2082,b\\u2083)= (a\\u2081+b\\u2081, a\\u2082+b\\u2082, a\\u2083+b\\u2083)' },
                    { text: 'Scalar multiple: k(a\\u2081,a\\u2082,a\\u2083) = (ka\\u2081, ka\\u2082, ka\\u2083)' },
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
                text: 'a and b are parallel if a = kb.\\na and b are equal if they have the same magnitude AND direction.\\nA position vector points from the origin O to a point. A free vector only specifies direction and magnitude.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: '3D vectors: column form, |a|=\\u221a(a\\u2081\\u00b2+a\\u2082\\u00b2+a\\u2083\\u00b2), unit vector = a/|a|. Displacement AB=b\\u2212a. Addition and scalar multiplication component-wise.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the formula for the magnitude of a 3D vector and the definition of a unit vector.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find |a| and the unit vector for a=(2,\\u22121,3).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find the displacement AB and its length given A=(1,2,3), B=(4,0,\\u22121).' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What condition makes two vectors parallel?' }
        ],
        summaryText: '|a|=\\u221a(a\\u2081\\u00b2+a\\u2082\\u00b2+a\\u2083\\u00b2). Unit vector: a/|a|. AB=OB\\u2212OA. Parallel: a=kb.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_7_1.js'] = """\
/**
 * WMA14 \u00b7 Topic 7 \u00b7 Subtopic 1 \u2014 Scalar (dot) product
 */
export const note_mathematics_4_7_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Calculate the scalar product of two vectors, use it to find the angle between them, and determine when vectors are perpendicular.' },
            terms: []
        },
        {
            id: 'h-defn', type: 'heading',
            data: { text: 'Definition', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Scalar Product',
                text: 'a \\u00b7 b = |a||b| cos\\u03b8  (geometric definition)\\n\\na \\u00b7 b = a\\u2081b\\u2081 + a\\u2082b\\u2082 + a\\u2083b\\u2083  (component form)\\n\\nAngle: cos\\u03b8 = (a \\u00b7 b) / (|a||b|)\\n\\nPerpendicular: a \\u00b7 b = 0  (\\u21d0\\u21d2 \\u03b8 = 90\\u00b0)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the angle between a=(1,2,3) and b=(\\u22121,0,2).',
                text: 'a\\u00b7b = (1)(\\u22121)+(2)(0)+(3)(2) = \\u22121+0+6 = 5\\n|a| = \\u221a(1+4+9) = \\u221a14\\n|b| = \\u221a(1+0+4) = \\u221a5\\n\\ncos\\u03b8 = 5/(\\u221a14 \\u00b7 \\u221a5) = 5/\\u221a70\\n\\u03b8 = arccos(5/\\u221a70) \\u2248 53.3\\u00b0'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find k if a=(3, k, \\u22121) and b=(2, 1, k) are perpendicular.',
                text: 'a\\u00b7b = 0:\\n3(2) + k(1) + (\\u22121)(k) = 0\\n6 + k \\u2212 k = 0\\n6 = 0  \\u2014  contradiction!\\n\\nCheck: 6 + k \\u2212 k = 6 \\u2260 0 for any k.\\n\\nSo a and b are never perpendicular for this choice. (This shows not every pair can be made perpendicular.)'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find k if a=(2,k,1) and b=(k,1,\\u22123) are perpendicular.',
                text: 'a\\u00b7b = 2k + k + (\\u22123) = 3k \\u2212 3 = 0\\nk = 1'
            }, terms: []
        },
        {
            id: 'h-props', type: 'heading',
            data: { text: 'Properties of Dot Product', level: 2 }, terms: []
        },
        {
            id: 'list-props', type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Commutative: a\\u00b7b = b\\u00b7a' },
                    { text: 'Distributive: a\\u00b7(b+c) = a\\u00b7b + a\\u00b7c' },
                    { text: 'a\\u00b7a = |a|\\u00b2' },
                    { text: 'i\\u00b7i = j\\u00b7j = k\\u00b7k = 1; i\\u00b7j = i\\u00b7k = j\\u00b7k = 0' }
                ]
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Dot product: a\\u00b7b = a\\u2081b\\u2081+a\\u2082b\\u2082+a\\u2083b\\u2083 = |a||b|cos\\u03b8. Perpendicular: a\\u00b7b=0. Angle formula: cos\\u03b8=(a\\u00b7b)/(|a||b|).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State both forms of the scalar product formula and the perpendicularity condition.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the angle between a=(1,2,3) and b=(\\u22121,0,2).' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Find k so that (2,k,1)\\u00b7(k,1,\\u22123)=0.' },
            { id: 'c4', blockId: 'list-props', prompt: 'State the value of a\\u00b7a.' }
        ],
        summaryText: 'a\\u00b7b = a\\u2081b\\u2081+a\\u2082b\\u2082+a\\u2083b\\u2083 = |a||b|cos\\u03b8. Perpendicular \\u21d4 a\\u00b7b=0.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_7_2.js'] = """\
/**
 * WMA14 \u00b7 Topic 7 \u00b7 Subtopic 2 \u2014 Vector equation of a line
 */
export const note_mathematics_4_7_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Write the vector equation of a line in the form r = a + \\u03bbb, find points on the line, and convert to Cartesian form.' },
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
                text: 'Vector form: r = a + \\u03bbb\\n  (a = position vector of a known point; b = direction vector; \\u03bb = scalar parameter)\\n\\nCartesian form:\\n(x\\u2212a\\u2081)/b\\u2081 = (y\\u2212a\\u2082)/b\\u2082 = (z\\u2212a\\u2083)/b\\u2083'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Write the vector equation of the line through A=(2,1,\\u22121) in direction d=(1,\\u22123,2).',
                text: 'r = (2,1,\\u22121) + \\u03bb(1,\\u22123,2)\\n\\nIn component form:\\nx = 2+\\u03bb, y = 1\\u22123\\u03bb, z = \\u22121+2\\u03bb\\n\\nCartesian: (x\\u22122)/1 = (y\\u22121)/(\\u22123) = (z+1)/2'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Write the line through A=(1,0,3) and B=(0,2,1) in vector form.',
                text: 'Direction b = AB = B\\u2212A = (\\u22121,2,\\u22122)\\n\\nr = (1,0,3) + \\u03bb(\\u22121,2,\\u22122)\\nor using B: r = (0,2,1) + \\u03bc(\\u22121,2,\\u22122)\\n\\n(Both are correct; the line is the same)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Parametric Coordinates',
                text: 'From r = a + \\u03bbb, the coordinates of a general point on the line are:\\nx = a\\u2081+\\u03bbb\\u2081, y = a\\u2082+\\u03bbb\\u2082, z = a\\u2083+\\u03bbb\\u2083\\n\\nTo check if a point P is on the line: solve for \\u03bb from one component, then verify the others give the same \\u03bb.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Line: r = a + \\u03bbb (point + \\u03bb\\u00d7direction). Direction = any vector along the line (e.g. AB). Cartesian: (x\\u2212a\\u2081)/b\\u2081=(y\\u2212a\\u2082)/b\\u2082=(z\\u2212a\\u2083)/b\\u2083.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the vector and Cartesian forms of the equation of a line.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Write the equation of the line through (2,1,\\u22121), direction (1,\\u22123,2).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find the vector equation of the line through A=(1,0,3) and B=(0,2,1).' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you check if a point lies on a line given in vector form?' }
        ],
        summaryText: 'r = a + \\u03bbb. Direction b = difference of two points. Cartesian: quotients of (x\\u2212a), (y\\u2212b), (z\\u2212c) all equal.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_7_3.js'] = """\
/**
 * WMA14 \u00b7 Topic 7 \u00b7 Subtopic 3 \u2014 Lines: intersection, skew lines, angle between lines
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
                    ['Parallel', 'b\\u2081 = kb\\u2082', 'Same direction; never meet'],
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
                title: 'Test if L\\u2081: r=(1,1,0)+\\u03bb(1,\\u22121,1) and L\\u2082: r=(2,0,1)+\\u03bc(2,1,\\u22121) intersect.',
                text: 'Set equal: (1+\\u03bb, 1\\u2212\\u03bb, \\u03bb) = (2+2\\u03bc, \\u03bc, 1\\u2212\\u03bc)\\n\\nFrom z: \\u03bb = 1\\u2212\\u03bc  \\u27a2  \\u03bc = 1\\u2212\\u03bb\\nFrom y: 1\\u2212\\u03bb = \\u03bc = 1\\u2212\\u03bb  \\u2714 (consistent)\\nFrom x: 1+\\u03bb = 2+2\\u03bc = 2+2(1\\u2212\\u03bb) = 4\\u22122\\u03bb\\n3\\u03bb = 3  \\u27a2  \\u03bb=1,  \\u03bc=0\\n\\nCheck: L\\u2081 at \\u03bb=1: (2,0,1); L\\u2082 at \\u03bc=0: (2,0,1). \\u2714 Intersection at (2,0,1).'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Angle between L\\u2081 with direction b\\u2081=(1,\\u22121,1) and L\\u2082 with direction b\\u2082=(2,1,\\u22121).',
                text: 'cos\\u03b8 = |b\\u2081\\u00b7b\\u2082| / (|b\\u2081| |b\\u2082|)\\nb\\u2081\\u00b7b\\u2082 = 2\\u22121\\u22121 = 0\\n\\n\\u03b8 = 90\\u00b0 (the lines are perpendicular)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Skew vs Intersecting',
                text: 'To show skew: set up the three equations from x, y, z components. Solve two to find \\u03bb and \\u03bc, then substitute into the third. If the third equation is NOT satisfied, the lines are skew.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Lines: parallel if directions are scalar multiples. Intersect if equations are consistent. Skew if not parallel and equations are inconsistent. Angle: cos\\u03b8=|b\\u2081\\u00b7b\\u2082|/(|b\\u2081||b\\u2082|) (use |\\u2026| for acute angle).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-types', prompt: 'State the three possible relationships between two lines in 3D and when each occurs.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'How do you test whether two lines intersect?' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find the angle between lines with directions (1,\\u22121,1) and (2,1,\\u22121).' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you show that two lines are skew?' }
        ],
        summaryText: 'Parallel: b\\u2081=kb\\u2082. Intersect: set equal, solve. Skew: no solution. Angle: cos\\u03b8=|b\\u2081\\u00b7b\\u2082|/(|b\\u2081||b\\u2082|).',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_7_4.js'] = """\
/**
 * WMA14 \u00b7 Topic 7 \u00b7 Subtopic 4 \u2014 Vector equation of a plane
 */
export const note_mathematics_4_7_4 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Write the equation of a plane in vector form r\\u00b7n = d and Cartesian form ax+by+cz=d, given a normal vector and a point.' },
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
                text: 'Vector form: r \\u00b7 n = a \\u00b7 n = d\\n  (n = normal vector; a = position of any point on the plane)\\n\\nCartesian (Scalar) form: n\\u2081x + n\\u2082y + n\\u2083z = d\\n  where d = n \\u00b7 a'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the equation of the plane with normal n=(2,\\u22121,3) passing through A=(1,0,2).',
                text: 'd = n\\u00b7a = 2(1)+(\\u22121)(0)+3(2) = 2+0+6 = 8\\n\\nVector form: r\\u00b7(2,\\u22121,3) = 8\\nCartesian: 2x \\u2212 y + 3z = 8'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the plane through A=(1,0,1), B=(2,1,0), C=(0,1,2).',
                text: 'AB = (1,1,\\u22121), AC = (\\u22121,1,1)\\n\\nNormal n = AB \\u00d7 AC (cross product):\\nn = |i  j  k |\\n    |1  1  \\u22121|\\n    |\\u22121 1  1 |\\n= i(1\\u00b71\\u2212(\\u22121)\\u00b71) \\u2212 j(1\\u00b71\\u2212(\\u22121)\\u00b7(\\u22121)) + k(1\\u00b71\\u22121\\u00b7(\\u22121))\\n= i(1+1) \\u2212 j(1\\u22121) + k(1+1)\\n= (2, 0, 2)\\n\\nd = (2,0,2)\\u00b7(1,0,1) = 2+0+2 = 4\\nPlane: 2x + 2z = 4, or x + z = 2'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'The Normal Vector',
                text: 'The normal vector is perpendicular to every vector in the plane. If you have two vectors in the plane, their cross product gives the normal. For the Edexcel WMA14 exam, cross product is usually not required separately \\u2014 normals are typically given or derived from the perpendicularity of lines.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Plane: r\\u00b7n=d where d=n\\u00b7a. Cartesian: n\\u2081x+n\\u2082y+n\\u2083z=d. Normal n is perpendicular to all vectors lying in the plane.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the vector and Cartesian forms of the equation of a plane.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Write the plane through (1,0,2) with normal n=(2,\\u22121,3).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'How do you find the normal vector to a plane through three points A, B, C?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What property defines the normal vector to a plane?' }
        ],
        summaryText: 'Plane: r\\u00b7n=d=n\\u00b7a. n = normal (perp. to plane). Cartesian: n\\u2081x+n\\u2082y+n\\u2083z=d.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_7_5.js'] = """\
/**
 * WMA14 \u00b7 Topic 7 \u00b7 Subtopic 5 \u2014 Planes: angles and intersections
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
                text: 'The angle \\u03b8 between planes with normals n\\u2081 and n\\u2082:\\ncos\\u03b8 = |n\\u2081\\u00b7n\\u2082| / (|n\\u2081| |n\\u2082|)\\n\\n(Use the acute angle by taking the modulus.)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the angle between x+y+z=1 and 2x\\u2212y+2z=3.',
                text: 'n\\u2081=(1,1,1), n\\u2082=(2,\\u22121,2)\\nn\\u2081\\u00b7n\\u2082 = 2\\u22121+2 = 3\\n|n\\u2081| = \\u221a3, |n\\u2082| = \\u221a(4+1+4) = 3\\n\\ncos\\u03b8 = 3/(3\\u221a3) = 1/\\u221a3\\n\\u03b8 = arccos(1/\\u221a3) = 54.7\\u00b0'
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
                title: 'Find where r=(1,\\u22121,2)+\\u03bb(2,1,\\u22121) meets 3x+y\\u22122z=4.',
                text: 'Substitute parametric coordinates into plane equation:\\n3(1+2\\u03bb) + (\\u22121+\\u03bb) \\u2212 2(2\\u2212\\u03bb) = 4\\n3+6\\u03bb \\u2212 1+\\u03bb \\u2212 4+2\\u03bb = 4\\n9\\u03bb \\u2212 2 = 4  \\u27a2  \\u03bb = 6/9 = 2/3\\n\\nPoint: (1+4/3, \\u22121+2/3, 2\\u22122/3) = (7/3, \\u22121/3, 4/3)'
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
                text: 'Distance from point P=(p\\u2081,p\\u2082,p\\u2083) to plane ax+by+cz=d:\\n\\nd = |ap\\u2081 + bp\\u2082 + cp\\u2083 \\u2212 d| / \\u221a(a\\u00b2+b\\u00b2+c\\u00b2)'
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
            data: { text: 'Angle between planes: cos\\u03b8=|n\\u2081\\u00b7n\\u2082|/(|n\\u2081||n\\u2082|). Line-plane intersection: substitute parametric form. Distance: |ap+bq+cr\\u2212d|/\\u221a(a\\u00b2+b\\u00b2+c\\u00b2).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the formula for the angle between two planes.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the angle between x+y+z=1 and 2x\\u2212y+2z=3.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Describe how to find where a line meets a plane.' },
            { id: 'c4', blockId: 'callout-key2', prompt: 'State the formula for the distance from a point to a plane.' }
        ],
        summaryText: 'Angle between planes: like angle between normals. Line meets plane: substitute parametric into plane eq. Distance: |n\\u00b7p\\u2212d|/|n|.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_7_6.js'] = """\
/**
 * WMA14 \u00b7 Topic 7 \u00b7 Subtopic 6 \u2014 Vectors in context: geometry proofs and combined problems
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
                text: 'If P divides AB in ratio m:n (from A),\\nOP = (n \\u00b7 OA + m \\u00b7 OB) / (m+n)\\n\\nMidpoint: m=n=1  \\u27a2  midpoint = (OA+OB)/2'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A=(2,0,1), B=(8,3,7). Find P that divides AB in ratio 2:1.',
                text: 'OP = (OA + 2\\u00b7OB)/3 = [(2,0,1)+2(8,3,7)]/3 = [(2+16, 0+6, 1+14)]/3\\n= (18,6,15)/3 = (6,2,5)'
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
                text: 'Let OA=a, OB=b, OC=c.\\nMidpoint of OB: M\\u2081 = b/2\\nMidpoint of AC: M\\u2082 = (a+c)/2\\n\\nM\\u2031M\\u2082 = M\\u2082 \\u2212 M\\u2081 = (a+c)/2 \\u2212 b/2 = (a+c\\u2212b)/2\\n[Express any collinearity by showing vectors are parallel]'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'OA=a, OB=b. X is on AB with AX:XB = 1:2. Find OX.',
                text: 'OX = OA + (1/3)AB = a + (1/3)(b\\u2212a) = a + b/3 \\u2212 a/3 = (2a+b)/3'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Strategy for Vector Proofs',
                text: '\\u2022 Express all position vectors in terms of two or three base vectors.\\n\\u2022 To show collinearity: show AB = k \\u00b7 AC (parallel and sharing point A).\\n\\u2022 To show parallel: show their direction vectors are scalar multiples.\\n\\u2022 Always state your conclusion clearly.'
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
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find P on AB=(2,0,1)\\u2192(8,3,7) that divides in ratio 2:1.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Find OX where X divides AB with AX:XB=1:2.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you prove three points are collinear using vectors?' }
        ],
        summaryText: 'Section formula: OP=(nOA+mOB)/(m+n). Midpoint: (a+b)/2. Collinearity: show one vector is a scalar multiple of another.',
        ready: true
    },
    evidence: []
};
"""

for filename, content in notes.items():
    path = os.path.join(base, filename)
    with open(path, 'w') as f:
        f.write(content)
    print(f'Written: {filename}')

print('Topic 7 complete.')
