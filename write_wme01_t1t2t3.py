import os
base = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'
notes = {}

# ── WME01 Topics 1, 2, 3 ─────────────────────────────────────────────────────

# ── Topic 1: Mathematical Models in Mechanics ─────────────────────────────────

notes['note_5_1_0.js'] = """\
/**
 * WME01 \u00b7 Topic 1 \u00b7 Subtopic 0 \u2014 Particle and rigid-body assumptions
 */
export const note_mathematics_5_1_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Understand the particle and rigid-body models used in mechanics and know when each assumption is appropriate.' },
            terms: []
        },
        {
            id: 'h-models', type: 'heading',
            data: { text: 'Mechanical Models', level: 2 }, terms: []
        },
        {
            id: 'callout-key1', type: 'callout',
            data: {
                style: 'key',
                title: 'Particle Model',
                text: 'A particle is a body that has mass but no size.\\n\\nJustification: use when the size of the body is negligible compared to distances involved, or when rotation can be ignored.\\n\\nImplication: the weight and any applied forces act at a single point.'
            }, terms: []
        },
        {
            id: 'callout-key2', type: 'callout',
            data: {
                style: 'key',
                title: 'Rigid Body',
                text: 'A rigid body has size and shape that do not change under the forces acting.\\n\\nJustification: use when the size of the object is significant and the position of forces on it matters (e.g. moments problems).\\n\\nNote: the particle model is a special case of the rigid body model.'
            }, terms: []
        },
        {
            id: 'table-compare', type: 'comparisonTable',
            data: {
                headers: ['Model', 'Has size?', 'Can rotate?', 'Typical use'],
                rows: [
                    ['Particle', 'No', 'No', 'Cars, balls, people on slopes'],
                    ['Rigid body', 'Yes', 'Yes', 'Rods, planks, beams, ladders']
                ],
                caption: 'Comparison of mechanical object models'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Language',
                text: 'If the question says "model X as a particle", it means treat it as a point mass with no size. If it says "treat the rod as a uniform rod", mass is evenly distributed and weight acts at the midpoint.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Particle = mass but no size (forces act at a point). Rigid body = extended object with fixed shape (size and position of forces matter). Choose model based on whether size and rotation are relevant.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key1', prompt: 'What is a particle model and when is it appropriate?' },
            { id: 'c2', blockId: 'callout-key2', prompt: 'What is a rigid-body model and when is it used?' },
            { id: 'c3', blockId: 'table-compare', prompt: 'State one key difference between the particle model and the rigid-body model.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What does "model X as a particle" imply about forces?' }
        ],
        summaryText: 'Particle: mass, no size. Rigid body: mass + shape. Use particle when size is negligible; rigid body when moments or size matter.',
        ready: true
    },
    evidence: []
};
"""

notes['note_5_1_1.js'] = """\
/**
 * WME01 \u00b7 Topic 1 \u00b7 Subtopic 1 \u2014 Idealised mechanics modelling terms
 */
export const note_mathematics_5_1_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Know the standard idealised terms used in mechanics problems and state what each assumption implies.' },
            terms: []
        },
        {
            id: 'h-terms', type: 'heading',
            data: { text: 'Modelling Assumptions', level: 2 }, terms: []
        },
        {
            id: 'table-terms', type: 'comparisonTable',
            data: {
                headers: ['Term', 'Meaning', 'Implication'],
                rows: [
                    ['Light', 'Massless (string, rod, pulley)', 'No weight contribution; tension same throughout'],
                    ['Inextensible', 'Cannot stretch (string)', 'Particles in same string have equal acceleration'],
                    ['Smooth', 'Frictionless surface or pulley', 'No friction force; normal reaction only'],
                    ['Rough', 'Surface has friction', 'Friction force F = \\u03bcN may act'],
                    ['Taut', 'String is under tension', 'Tension > 0 along string'],
                    ['Slack', 'String has no tension', 'Tension = 0, string exerts no force'],
                    ['Rigid', 'Does not bend', 'Forces transmitted through rod unchanged'],
                    ['Uniform', 'Mass evenly distributed', 'Centre of mass at midpoint'],
                    ['Laminar flow', 'No air resistance', 'Air resistance neglected']
                ],
                caption: 'Standard idealised terms in WME01'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Questions on Assumptions',
                text: 'Common exam question: "State one modelling assumption made and explain its effect."\\nExample answer: "The string is assumed to be light and inextensible, so the tension throughout the string is the same and the connected particles have the same acceleration."'
            }, terms: []
        },
        {
            id: 'callout-warning', type: 'callout',
            data: {
                style: 'warning',
                title: 'Gravity',
                text: 'Standard value g = 9.8 m s\\u207b\\u00b2 (use unless the question specifies g = 10 m s\\u207b\\u00b2). Weight W = mg acts downward on every object with mass.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Key terms: light (massless), smooth (frictionless), inextensible (uniform acceleration), rough (friction present), uniform (weight at midpoint). g = 9.8 m s\\u207b\\u00b2.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-terms', prompt: 'What does "light" mean for a string in mechanics?' },
            { id: 'c2', blockId: 'table-terms', prompt: 'What does "inextensible" imply about connected particles?' },
            { id: 'c3', blockId: 'table-terms', prompt: 'What is the difference between "smooth" and "rough" surfaces?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How would you answer "state one modelling assumption" in an exam?' }
        ],
        summaryText: 'Light = massless. Inextensible = equal accelerations. Smooth = no friction. Rough = friction F=\\u03bcN. Uniform = weight at midpoint.',
        ready: true
    },
    evidence: []
};
"""

# ── Topic 2: Vectors in Mechanics ─────────────────────────────────────────────

notes['note_5_2_0.js'] = """\
/**
 * WME01 \u00b7 Topic 2 \u00b7 Subtopic 0 \u2014 Vector magnitude and direction
 */
export const note_mathematics_5_2_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Distinguish vectors from scalars, calculate the magnitude of a vector, and find its direction angle.' },
            terms: []
        },
        {
            id: 'h-scalarvec', type: 'heading',
            data: { text: 'Scalars and Vectors', level: 2 }, terms: []
        },
        {
            id: 'table-sv', type: 'comparisonTable',
            data: {
                headers: ['Scalar', 'Vector'],
                rows: [
                    ['Speed', 'Velocity'],
                    ['Distance', 'Displacement'],
                    ['Mass', 'Force / Weight'],
                    ['Time', 'Acceleration'],
                    ['Energy', 'Momentum']
                ],
                caption: 'Scalar vs vector quantities in mechanics'
            }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Magnitude and Direction',
                text: 'Vector v = (v\\u2081, v\\u2082) = v\\u2081i + v\\u2082j\\n\\nMagnitude (speed, if v is velocity):\\n|v| = \\u221a(v\\u2081\\u00b2 + v\\u2082\\u00b2)\\n\\nDirection angle (from positive i-direction):\\n\\u03b8 = arctan(v\\u2082 / v\\u2081)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A particle has velocity v = (3i + 4j) m s\\u207b\\u00b9. Find its speed and direction.',
                text: 'Speed = |v| = \\u221a(3\\u00b2 + 4\\u00b2) = \\u221a(9+16) = \\u221a25 = 5 m s\\u207b\\u00b9\\n\\nDirection: \\u03b8 = arctan(4/3) = 53.1\\u00b0 above the horizontal (i-direction)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Force F = (\\u221212i + 5j) N. Find |F| and the angle it makes with the i-axis.',
                text: '|F| = \\u221a(144+25) = \\u221a169 = 13 N\\n\\n\\u03b8 = arctan(5/12) = 22.6\\u00b0\\n(Note: F\\u2081 < 0, so direction is in the 2nd quadrant: 180\\u00b0 \\u2212 22.6\\u00b0 = 157.4\\u00b0 from positive i-axis)'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Vectors have magnitude AND direction. Speed = |v| = \\u221a(v\\u2081\\u00b2+v\\u2082\\u00b2). Direction \\u03b8 = arctan(v\\u2082/v\\u2081). Velocity, displacement, force, acceleration are vectors.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-sv', prompt: 'Name four scalar quantities and their corresponding vector quantities.' },
            { id: 'c2', blockId: 'callout-key', prompt: 'State the formula for magntiude and direction of a vector v=(v\\u2081,v\\u2082).' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Find the speed and direction of v=(3i+4j) m s\\u207b\\u00b9.' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'Find |F| for F=(\\u221212i+5j) N.' }
        ],
        summaryText: '|v|=\\u221a(v\\u2081\\u00b2+v\\u2082\\u00b2). \\u03b8=arctan(v\\u2082/v\\u2081). Keys: velocity/displacement are vectors; speed/distance are scalars.',
        ready: true
    },
    evidence: []
};
"""

notes['note_5_2_1.js'] = """\
/**
 * WME01 \u00b7 Topic 2 \u00b7 Subtopic 1 \u2014 Resolving vectors into components
 */
export const note_mathematics_5_2_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Resolve a force or vector into horizontal and vertical components and find the resultant of several forces using components.' },
            terms: []
        },
        {
            id: 'h-resolving', type: 'heading',
            data: { text: 'Resolving into Components', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Component Formula',
                text: 'A force F at angle \\u03b8 above the horizontal resolves into:\\n  Horizontal: F cos\\u03b8  (i-direction)\\n  Vertical:   F sin\\u03b8  (j-direction)\\n\\nSo F = F cos\\u03b8 i + F sin\\u03b8 j'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Forces of 6 N (horizontal), 8 N at 30\\u00b0 above horizontal. Find the resultant.',
                text: 'F\\u2081 = 6i + 0j\\nF\\u2082 = 8cos30\\u00b0 i + 8sin30\\u00b0 j = 6.93i + 4j\\n\\nResultant R = (6+6.93)i + (0+4)j = 12.93i + 4j\\n\\n|R| = \\u221a(12.93\\u00b2 + 4\\u00b2) = \\u221a(167.2+16) = \\u221a183.2 \\u2248 13.5 N\\n\\u03b8 = arctan(4/12.93) \\u2248 17.2\\u00b0 above horizontal'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Two-Stage Method',
                text: '1. Resolve ALL forces into i and j components.\\n2. Sum the i-components: R\\u2081 = \\u03a3F\\u1d62\\n3. Sum the j-components: R\\u2082 = \\u03a3F\\u2c7c\\n4. Find resultant: |R| = \\u221a(R\\u2081\\u00b2+R\\u2082\\u00b2), \\u03b8 = arctan(R\\u2082/R\\u2081)'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Resolve: Fccos\\u03b8 horizontal, Fsin\\u03b8 vertical. Add i components, add j components. Resultant = \\u221a(R\\u2081\\u00b2+R\\u2082\\u00b2).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the horizontal and vertical components of a force F at angle \\u03b8.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the resultant of 6 N horizontal and 8 N at 30\\u00b0.' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'Describe the two-stage method for finding a resultant force.' }
        ],
        summaryText: 'Horizontal component: Fcos\\u03b8. Vertical: Fsin\\u03b8. Resultant: add components, then \\u221a(R\\u2081\\u00b2+R\\u2082\\u00b2).',
        ready: true
    },
    evidence: []
};
"""

notes['note_5_2_2.js'] = """\
/**
 * WME01 \u00b7 Topic 2 \u00b7 Subtopic 2 \u2014 Vector displacement and velocity
 */
export const note_mathematics_5_2_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use position vectors and displacement vectors, and relate velocity to displacement via differentiation.' },
            terms: []
        },
        {
            id: 'h-pos', type: 'heading',
            data: { text: 'Position and Displacement', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Definitions',
                text: 'Position vector: r = xi + yj (measured from fixed origin O)\\n\\nDisplacement from A to B: s = r\\u0042 \\u2212 r\\u0041\\n\\nDistance = |s| = |r\\u0042 \\u2212 r\\u0041|\\n\\nVelocity: v = dr/dt = dx/dt i + dy/dt j\\n\\nSpeed = |v|'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A particle starts at r = (2i + j) m with velocity v = (i \\u2212 3j) m s\\u207b\\u00b9. Find its position after 4 s.',
                text: 'r(t) = r\\u2080 + vt = (2i+j) + 4(i\\u22123j)\\n= (2+4)i + (1\\u221212)j\\n= 6i \\u2212 11j  (metres)\\n\\nDistance from O = |6i\\u221211j| = \\u221a(36+121) = \\u221a157 \\u2248 12.5 m'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Particle A at (3i+7j), particle B at (\\u22121i+2j). Find displacement AB and distance.',
                text: 'AB = r\\u0042 \\u2212 r\\u0041 = (\\u22121\\u22123)i + (2\\u22127)j = \\u22124i \\u2212 5j\\n|AB| = \\u221a(16+25) = \\u221a41 \\u2248 6.4 m'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Position r = xi+yj. Displacement = r\\u0042\\u2212r\\u0041. Distance = |displacement|. For constant velocity: r(t)=r\\u2080+vt. Speed=|v|.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'Define position vector, displacement, and velocity in vector form.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'A particle starts at (2i+j) m with v=(i\\u22123j) m/s. Where is it after 4 s?' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find displacement AB and distance between A=(3i+7j) and B=(\\u22121i+2j).' }
        ],
        summaryText: 'r(t)=r\\u2080+vt. Displacement=r\\u0042\\u2212r\\u0041. Distance=|disp|. Speed=|v|.',
        ready: true
    },
    evidence: []
};
"""

notes['note_5_2_3.js'] = """\
/**
 * WME01 \u00b7 Topic 2 \u00b7 Subtopic 3 \u2014 Vector acceleration and force
 */
export const note_mathematics_5_2_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply Newton\\u2019s second law in vector form, find acceleration from forces, and use F = ma in 2D.' },
            terms: []
        },
        {
            id: 'h-f2', type: 'heading',
            data: { text: 'Newton\\u2019s Second Law in Vector Form', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'F = ma (Vector)',
                text: 'Resultant force F = ma  (in 2D)\\n\\nIf F = F\\u2081i + F\\u2082j and mass = m:\\n  a = F/m = (F\\u2081/m)i + (F\\u2082/m)j\\n\\nAcceleration: a = dv/dt = d\\u00b2r/dt\\u00b2'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Forces (3i+2j) N and (\\u22121i+4j) N act on a 2 kg particle. Find acceleration.',
                text: 'Resultant F = (3\\u22121)i + (2+4)j = 2i + 6j  (N)\\n\\na = F/m = (2/2)i + (6/2)j = i + 3j  (m s\\u207b\\u00b2)\\n\\n|a| = \\u221a(1+9) = \\u221a10 \\u2248 3.16 m s\\u207b\\u00b2'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'A particle of mass 5 kg has a = (2i \\u2212 j) m s\\u207b\\u00b2. Forces P and (i+3j) N act on it. Find P.',
                text: 'Total force F = ma = 5(2i\\u2212j) = 10i\\u22125j\\n\\nF = P + (i+3j) = 10i\\u22125j\\nP = (10\\u22121)i + (\\u22125\\u22123)j = 9i \\u2212 8j  (N)'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'F = ma applies component by component. Resultant = sum of all force vectors. a = F/m. Weight W = mg\\u00d7(\\u2212j) acts downward.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State Newton\\u2019s second law in vector form.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Forces (3i+2j) and (\\u22121i+4j) act on 2 kg. Find acceleration.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Mass 5 kg, a=(2i\\u2212j), one force (i+3j). Find force P.' }
        ],
        summaryText: 'Resultant F=\\u03a3forces. a=F/m (component by component). Weight acts in \\u2212j direction.',
        ready: true
    },
    evidence: []
};
"""

# ── Topic 3: Kinematics in a Straight Line ────────────────────────────────────

notes['note_5_3_0.js'] = """\
/**
 * WME01 \u00b7 Topic 3 \u00b7 Subtopic 0 \u2014 Constant-acceleration equations (suvat)
 */
export const note_mathematics_5_3_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply the five constant-acceleration equations (suvat) to motion in a straight line, including vertical motion under gravity.' },
            terms: []
        },
        {
            id: 'h-suvat', type: 'heading',
            data: { text: 'The Suvat Equations', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Five Equations (constant acceleration a only)',
                text: 'Variables: s = displacement, u = initial velocity, v = final velocity, a = acceleration, t = time\\n\\n1. v = u + at\\n2. s = \\u00bd(u+v)t\\n3. s = ut + \\u00bdat\\u00b2\\n4. v\\u00b2 = u\\u00b2 + 2as\\n5. s = vt \\u2212 \\u00bdat\\u00b2'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Choosing the Right Equation',
                text: '1. Write down s, u, v, a, t and identify the THREE known and ONE unknown.\\n2. Pick the equation containing those four.\\n\\nEquation 1 (no s): v=u+at\\nEquation 3 (no v): s=ut+\\u00bdat\\u00b2\\nEquation 4 (no t): v\\u00b2=u\\u00b2+2as'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A car accelerates from 10 m s\\u207b\\u00b9 to 25 m s\\u207b\\u00b9 over 12 s. Find acceleration and distance.',
                text: 'u=10, v=25, t=12, a=?, s=?\\n\\nv = u+at: 25=10+12a  \\u27a2  a = 15/12 = 1.25 m s\\u207b\\u00b2\\ns = \\u00bd(u+v)t = \\u00bd(10+25)(12) = \\u00bd(35)(12) = 210 m'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'A ball is thrown upward at 14.7 m s\\u207b\\u00b9. Find the maximum height and time to return.',
                text: 'Take upward as positive. g = 9.8 m s\\u207b\\u00b2.\\nAt max height: v = 0; u = 14.7; a = \\u22129.8\\n\\nv\\u00b2 = u\\u00b2+2as: 0 = 14.7\\u00b2 + 2(\\u22129.8)s\\n0 = 216.09 \\u2212 19.6s  \\u27a2  s = 11.0 m\\n\\nTime to max height: v=u+at: 0=14.7\\u221299.8t  \\u27a2  t = 1.5 s\\nTime to return = 2\\u00d71.5 = 3.0 s'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Suvat: v=u+at, s=\\u00bd(u+v)t, s=ut+\\u00bdat\\u00b2, v\\u00b2=u\\u00b2+2as. Choose positive direction; g=9.8 m s\\u207b\\u00b2 acts downward.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'Write the five suvat equations from memory.' },
            { id: 'c2', blockId: 'callout-tip', prompt: 'How do you choose which suvat equation to use?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Car: u=10, v=25, t=12. Find a and s.' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'Ball thrown up at 14.7 m/s. Find max height. (g=9.8)' }
        ],
        summaryText: '5 suvat equations. Write s,u,v,a,t; identify 3 known; pick equation. Vertical: a=\\u22129.8 (upward +).',
        ready: true
    },
    evidence: []
};
"""

notes['note_5_3_1.js'] = """\
/**
 * WME01 \u00b7 Topic 3 \u00b7 Subtopic 1 \u2014 Kinematics graphs and interpretation
 */
export const note_mathematics_5_3_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Interpret and sketch displacement-time, velocity-time, and acceleration-time graphs, using areas and gradients to extract kinematic information.' },
            terms: []
        },
        {
            id: 'h-vt', type: 'heading',
            data: { text: 'Velocity-Time Graph', level: 2 }, terms: []
        },
        {
            id: 'callout-key1', type: 'callout',
            data: {
                style: 'key',
                title: 'v-t Graph',
                text: 'Gradient of v-t graph = acceleration\\n\\nArea under v-t graph = displacement\\n  (area below axis = negative displacement)\\n\\nHorizontal line (v = constant) \\u27a2 a = 0\\nStraight line with slope \\u27a2 uniform acceleration'
            }, terms: []
        },
        {
            id: 'h-st', type: 'heading',
            data: { text: 'Displacement-Time Graph', level: 2 }, terms: []
        },
        {
            id: 'callout-key2', type: 'callout',
            data: {
                style: 'key',
                title: 's-t Graph',
                text: 'Gradient of s-t graph = velocity\\n\\nHorizontal line \\u27a2 v = 0 (stationary)\\nCurve concave up \\u27a2 acceleration\\nNegative gradient \\u27a2 moving in negative direction'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Total Distance vs Displacement',
                text: 'Displacement = net area (areas below axis are negative).\\nTotal distance = sum of |areas| (all areas added regardless of sign).\\nIf particle changes direction, split the v-t graph at v=0.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Trapezium on a v-t graph: v goes from 0 to 6 m s\\u207b\\u00b9 uniformly over 4 s, stays at 6 for 3 s, then decreases to 0 in 2 s. Find total displacement.',
                text: 'Area of triangle (0 to 4 s): \\u00bd \\u00d7 4 \\u00d7 6 = 12 m\\nArea of rectangle (4 to 7 s): 3 \\u00d7 6 = 18 m\\nArea of triangle (7 to 9 s): \\u00bd \\u00d7 2 \\u00d7 6 = 6 m\\n\\nTotal displacement = 12+18+6 = 36 m'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'v-t graph: gradient=a, area=displacement. s-t graph: gradient=v. Total distance=sum of |areas|. Particle reverses when v=0 on v-t graph.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key1', prompt: 'State two facts about a v-t graph (gradient and area).' },
            { id: 'c2', blockId: 'callout-key2', prompt: 'What does the gradient of a s-t graph represent?' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'How do you find total distance (not displacement) from a v-t graph?' },
            { id: 'c4', blockId: 'callout-we1', prompt: 'Find the total displacement for a trapezoidal v-t profile (0\\u21926 over 4s, 6 for 3s, 6\\u21920 over 2s).' }
        ],
        summaryText: 'v-t: gradient=a, area=s. s-t: gradient=v. Distance=\\u03a3|areas|. Split at v=0 for direction change.',
        ready: true
    },
    evidence: []
};
"""

# Write all files
for filename, content in notes.items():
    path = os.path.join(base, filename)
    with open(path, 'w') as f:
        f.write(content)
    print(f'Written: {filename}')

print('WME01 Topics 1-3 complete.')
