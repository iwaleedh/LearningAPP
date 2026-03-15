import os
base = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'
notes = {}

# ── WME01 Topics 4, 5, 6 ─────────────────────────────────────────────────────

# ── Topic 4: Dynamics ─────────────────────────────────────────────────────────

notes['note_5_4_0.js'] = """\
/**
 * WME01 \u00b7 Topic 4 \u00b7 Subtopic 0 \u2014 Newton\u2019s laws and equations of motion
 */
export const note_mathematics_5_4_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'State Newton\\u2019s three laws of motion and apply F = ma to find acceleration or forces on particles moving in a straight line.' },
            terms: []
        },
        {
            id: 'h-laws', type: 'heading',
            data: { text: 'Newton\\u2019s Three Laws', level: 2 }, terms: []
        },
        {
            id: 'list-laws', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'A body remains at rest or moves at constant velocity unless acted on by a resultant force.' },
                    { text: 'The resultant force on a body equals its mass times its acceleration: F = ma.' },
                    { text: 'For every action there is an equal and opposite reaction.' }
                ]
            }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Equation of Motion',
                text: 'Resultant force F = ma\\n\\nW = mg acts downward (W = weight, m = mass, g = 9.8 m s\\u207b\\u00b2)\\n\\nNormal reaction N acts perpendicular to the surface.\\n\\nFor horizontal motion with applied force P and friction F:\\nP \\u2212 F = ma  (along direction of motion)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A 4 kg particle is pushed along a smooth horizontal surface by a 12 N force. Find acceleration.',
                text: 'Smooth \\u27a2 no friction.\\nResultant force = 12 N (horizontal)\\n\\nF = ma: 12 = 4a\\na = 3 m s\\u207b\\u00b2'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'A 5 kg particle descends vertically. Air resistance is 8 N. Find acceleration.',
                text: 'Weight W = 5 \\u00d7 9.8 = 49 N (downward)\\nResultant F = 49 \\u2212 8 = 41 N (downward)\\n\\nF = ma: 41 = 5a\\na = 8.2 m s\\u207b\\u00b2 (downward)'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'F=ma (resultant force). W=mg downward. Normal reaction N perpendicular to surface. Set up equation of motion along direction of travel.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-laws', prompt: 'State Newton\\u2019s three laws of motion.' },
            { id: 'c2', blockId: 'callout-key', prompt: 'Write the equation of motion for a particle on a horizontal surface.' },
            { id: 'c3', blockId: 'callout-we1', prompt: '4 kg, smooth surface, 12 N force. Find acceleration.' },
            { id: 'c4', blockId: 'callout-we2', prompt: '5 kg descending, 8 N air resistance. Find acceleration.' }
        ],
        summaryText: 'F=ma (N\\u00b2L). W=mg. Resultant = net force. Smooth \\u27a2 no friction. Set up F=ma along motion.',
        ready: true
    },
    evidence: []
};
"""

notes['note_5_4_1.js'] = """\
/**
 * WME01 \u00b7 Topic 4 \u00b7 Subtopic 1 \u2014 Friction and inclined planes
 */
export const note_mathematics_5_4_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply the friction law F \\u2264 \\u03bcN, resolve forces on inclined planes, and write equations of motion parallel and perpendicular to the slope.' },
            terms: []
        },
        {
            id: 'h-friction', type: 'heading',
            data: { text: 'Friction', level: 2 }, terms: []
        },
        {
            id: 'callout-key1', type: 'callout',
            data: {
                style: 'key',
                title: 'Friction Law',
                text: 'F \\u2264 \\u03bcN  (general)\\nF = \\u03bcN  (at limiting equilibrium or when sliding)\\n\\n\\u03bc = coefficient of friction (dimensionless)\\nN = normal reaction\\n\\nFriction acts opposite to direction of motion (or tendency to move).'
            }, terms: []
        },
        {
            id: 'h-incline', type: 'heading',
            data: { text: 'Inclined Planes', level: 2 }, terms: []
        },
        {
            id: 'callout-key2', type: 'callout',
            data: {
                style: 'key',
                title: 'Resolving on a slope of angle \\u03b1',
                text: 'Perpendicular to slope:\\n  N = mg cos\\u03b1\\n\\nParallel to slope (particle sliding down):\\n  ma = mg sin\\u03b1 \\u2212 F = mg sin\\u03b1 \\u2212 \\u03bcN\\n     = mg sin\\u03b1 \\u2212 \\u03bcmg cos\\u03b1\\n  a = g(sin\\u03b1 \\u2212 \\u03bc cos\\u03b1)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A 3 kg block slides down a rough slope of 30\\u00b0 with \\u03bc = 0.2. Find acceleration.',
                text: 'N = 3\\u00d79.8\\u00d7cos30\\u00b0 = 29.4\\u00d70.866 = 25.46 N\\nF = \\u03bcN = 0.2\\u00d725.46 = 5.09 N (up the slope)\\nComponent of weight along slope = 3\\u00d79.8\\u00d7sin30\\u00b0 = 14.7 N (down)\\n\\nResultant along slope = 14.7\\u22125.09 = 9.61 N\\na = F/m = 9.61/3 = 3.20 m s\\u207b\\u00b2 (down the slope)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Inclined Plane Method',
                text: 'Always resolve PERPENDICULAR to slope first to find N. Then resolve PARALLEL to find equation of motion. Choose positive direction (e.g. up or down the slope). Label N, W, friction, and any other forces on a clear force diagram.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Friction: F=\\u03bcN (limiting/sliding), F<\\u03bcN (static). Incline: resolve \\u22a5(N=mgcos\\u03b1) then \\u2225(ma=mgsin\\u03b1\\u2212\\u03bcN).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key1', prompt: 'State the friction inequality and when equality holds.' },
            { id: 'c2', blockId: 'callout-key2', prompt: 'State N and the equation of motion for a particle on slope angle \\u03b1.' },
            { id: 'c3', blockId: 'callout-we1', prompt: '3 kg, slope 30\\u00b0, \\u03bc=0.2. Find acceleration.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Describe the method for solving inclined plane problems.' }
        ],
        summaryText: 'F\\u2264\\u03bcN; =\\u03bcN when limiting. Slope: N=mgcos\\u03b1. Equation along slope: ma=mgsin\\u03b1\\u2212F.',
        ready: true
    },
    evidence: []
};
"""

notes['note_5_4_2.js'] = """\
/**
 * WME01 \u00b7 Topic 4 \u00b7 Subtopic 2 \u2014 Connected particles and pulleys
 */
export const note_mathematics_5_4_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Set up and solve equations of motion for connected particles on tables and over pulleys, finding common acceleration and tension in the string.' },
            terms: []
        },
        {
            id: 'h-system', type: 'heading',
            data: { text: 'Connected Particle Method', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Key Principles',
                text: 'Light inextensible string \\u27a2 both particles have the same acceleration a and same tension T.\\n\\nFor each particle, write F = ma (choosing positive in direction of motion).\\nAdd equations (system method) or solve separately (individual method).'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Atwood\\u2019s machine: masses m\\u2081=3 kg and m\\u2082=5 kg over a smooth pulley. Find a and T.',
                text: 'Take m\\u2082 moving down as positive.\\n\\nFor m\\u2082 (down positive): m\\u2082g \\u2212 T = m\\u2082a  \\u27a2  49 \\u2212 T = 5a  ... (1)\\nFor m\\u2081 (up positive): T \\u2212 m\\u2081g = m\\u2081a  \\u27a2  T \\u2212 29.4 = 3a  ... (2)\\n\\nAdd (1)+(2): 49\\u221229.4 = 8a  \\u27a2  a = 19.6/8 = 2.45 m s\\u207b\\u00b2\\nFrom (2): T = 29.4 + 3(2.45) = 36.75 N'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Particle A (4 kg) on smooth table, connected via pulley to particle B (2 kg) hanging vertically.',
                text: 'B hangs \\u27a2 B moves down, A moves along table.\\n\\nFor B (down +): 2g \\u2212 T = 2a  \\u27a2  19.6\\u2212T = 2a  ... (1)\\nFor A (right +, smooth table, normal N=mg): T = 4a  ... (2)\\n\\nSubstitute (2) into (1): 19.6 \\u2212 4a = 2a  \\u27a2  6a = 19.6  \\u27a2  a = 3.27 m s\\u207b\\u00b2\\nT = 4\\u00d73.27 = 13.1 N'
            }, terms: []
        },
        {
            id: 'callout-warning', type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistake',
                text: 'The tension T is NOT equal to the weight of the hanging mass. T is always less than the weight (since the system accelerates). Only T = mg when the system is in equilibrium (a=0).'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Light inextensible string: same a and T throughout. For each particle: F=ma (one equation each). Add to find a; substitute to find T.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'What two quantities are the same for both particles connected by a light inextensible string?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Atwood: masses 3 kg and 5 kg. Find a and T.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'A=4 kg on smooth table, B=2 kg hanging. Find a and T.' },
            { id: 'c4', blockId: 'callout-warning', prompt: 'Why is the tension T not equal to the weight of the hanging mass?' }
        ],
        summaryText: 'Connected particles: same a and T. Write F=ma for each. Add equations for a; back-sub for T.',
        ready: true
    },
    evidence: []
};
"""

# ── Topic 5: Statics ──────────────────────────────────────────────────────────

notes['note_5_5_0.js'] = """\
/**
 * WME01 \u00b7 Topic 5 \u00b7 Subtopic 0 \u2014 Forces in equilibrium
 */
export const note_mathematics_5_5_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Resolve forces and apply equilibrium conditions (\\u03a3H=0, \\u03a3V=0) to find unknown forces on particles at rest.' },
            terms: []
        },
        {
            id: 'h-equil', type: 'heading',
            data: { text: 'Conditions for Equilibrium', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Equilibrium: Resultant = 0',
                text: 'For a particle in equilibrium:\\n  \\u03a3Horizontal forces = 0\\n  \\u03a3Vertical forces = 0\\n\\n(Equivalently: sum of all force vectors = zero vector)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Three forces act on a particle: 5 N (horizontal right), 12 N (vertical up), and F at angle \\u03b8 below horizontal. If in equilibrium, find F and \\u03b8.',
                text: 'Horizontal: 5 \\u2212 Fcos\\u03b8 = 0  \\u27a2  Fcos\\u03b8 = 5  ... (1)\\nVertical: 12 \\u2212 Fsin\\u03b8 = 0  \\u27a2  Fsin\\u03b8 = 12  ... (2)\\n\\n(2)/(1): tan\\u03b8 = 12/5 = 2.4  \\u27a2  \\u03b8 = 67.4\\u00b0\\nF = \\u221a(5\\u00b2+12\\u00b2) = \\u221a169 = 13 N'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'A 6 kg particle hangs in equilibrium from two strings making 40\\u00b0 and 50\\u00b0 with the horizontal. Find the tensions T\\u2081 and T\\u2082.',
                text: 'Weight W = 6\\u00d79.8 = 58.8 N (downward)\\n\\nHorizontal: T\\u2081cos40\\u00b0 \\u2212 T\\u2082cos50\\u00b0 = 0  ... (1)\\nVertical: T\\u2081sin40\\u00b0 + T\\u2082sin50\\u00b0 \\u2212 58.8 = 0  ... (2)\\n\\nFrom (1): T\\u2081cos40\\u00b0 = T\\u2082cos50\\u00b0  \\u27a2  T\\u2081 = T\\u2082(cos50\\u00b0/cos40\\u00b0) = 0.839T\\u2082\\nSubstitute into (2):\\n0.839T\\u2082 \\u00d7 sin40\\u00b0 + T\\u2082sin50\\u00b0 = 58.8\\nT\\u2082(0.539 + 0.766) = 58.8  \\u27a2  T\\u2082 = 45.1 N\\nT\\u2081 = 0.839 \\u00d7 45.1 = 37.8 N'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Equilibrium: \\u03a3H=0, \\u03a3V=0. Resolve all forces. Two equations for two unknowns (magnitude and angle, or two tensions).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the two conditions for a particle to be in equilibrium.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Forces 5N horizontal and 12N vertical and F at angle. F=? if in equilibrium.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Describe how to find two tensions in a two-string equilibrium problem.' }
        ],
        summaryText: '\\u03a3H=0, \\u03a3V=0. Resolve all forces into components. Two equations give two unknowns.',
        ready: true
    },
    evidence: []
};
"""

notes['note_5_5_1.js'] = """\
/**
 * WME01 \u00b7 Topic 5 \u00b7 Subtopic 1 \u2014 Limiting equilibrium and friction
 */
export const note_mathematics_5_5_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Identify limiting equilibrium, apply F = \\u03bcN, and use equilibrium equations with friction on slopes.' },
            terms: []
        },
        {
            id: 'h-le', type: 'heading',
            data: { text: 'Limiting Equilibrium', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Limiting Equilibrium',
                text: 'A particle is in limiting equilibrium when it is on the point of moving.\\n\\nAt this moment: F = \\u03bcN  (friction is at its maximum value)\\n\\nFor a rough slope of angle \\u03b1:\\n  Equilibrium requires \\u03bc \\u2265 tan\\u03b1\\n  Limiting equilibrium (about to slide): \\u03bc = tan\\u03b1'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A 10 kg particle rests on rough horizontal ground. A horizontal force of 35 N is needed to start sliding it. Find \\u03bc.',
                text: 'At limiting equilibrium: F = \\u03bcN\\nN = W = 10\\u00d79.8 = 98 N  (horizontal surface)\\n35 = \\u03bc \\u00d7 98\\n\\u03bc = 35/98 = 5/14 \\u2248 0.357'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'A particle on a rough slope of 25\\u00b0 is about to slide. Find \\u03bc.',
                text: 'Resolve perpendicular: N = mgcos25\\u00b0\\nResolve parallel (about to slide): F = mgsin25\\u00b0\\nAt limiting equilibrium: F = \\u03bcN\\nmgsin25\\u00b0 = \\u03bc \\u00d7 mgcos25\\u00b0\\n\\u03bc = tan25\\u00b0 \\u2248 0.466'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Direction of Friction',
                text: 'Friction always opposes the direction the particle is about to move or is moving. On a slope where the particle tends to slide DOWN, friction acts UP the slope.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Limiting equilibrium: particle about to move, F=\\u03bcN. On slope: \\u03bc=tan\\u03b1. Friction opposes tendency of motion.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'What is limiting equilibrium and what friction condition applies?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Particle on flat surface, about to slide with 35 N force, mass 10 kg. Find \\u03bc.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Rough slope 25\\u00b0, particle about to slide. Find \\u03bc.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'In which direction does friction act on a slope?' }
        ],
        summaryText: 'Limiting: F=\\u03bcN. \\u03bc=tan\\u03b1 on slope about to slide. Friction opposes motion.',
        ready: true
    },
    evidence: []
};
"""

# ── Topic 6: Moments ──────────────────────────────────────────────────────────

notes['note_5_6_0.js'] = """\
/**
 * WME01 \u00b7 Topic 6 \u00b7 Subtopic 0 \u2014 Moments and taking moments
 */
export const note_mathematics_5_6_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Calculate the moment of a force about a point and apply the principle of moments to find unknown forces on objects in equilibrium.' },
            terms: []
        },
        {
            id: 'h-defn', type: 'heading',
            data: { text: 'Definition of a Moment', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Moment of a Force',
                text: 'Moment = Force \\u00d7 perpendicular distance from pivot\\nM = F \\u00d7 d\\n\\nUnits: N m (newton metres)\\n\\nClockwise (CW) and anticlockwise (ACW) moments have opposite signs.\\n\\nPrinciple of Moments:\\n  \\u03a3CW moments = \\u03a3ACW moments  (for equilibrium)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A uniform rod AB, length 4 m, mass 6 kg, rests on a pivot 1.5 m from A. Force of 20 N acts upward at A. Find the reaction at the pivot.',
                text: 'Weight W = 6\\u00d79.8 = 58.8 N acts at midpoint (2 m from A).\\n\\nTake moments about pivot (1.5 m from A):\\nDistances: A is 1.5 m from pivot; midpoint is 0.5 m from pivot; B is 2.5 m from pivot.\\n\\nACW: 20 \\u00d7 1.5 = 30 N m (force at A, 1.5 m from pivot)\\nCW: 58.8 \\u00d7 0.5 = 29.4 N m (weight at midpoint, 0.5 m from pivot)\\n\\n30 \\u2260 29.4 \\u27a2 not in equilibrium as stated.\\n\\n(Vertical equilibrium: R + 20 = 58.8  \\u27a2  R = 38.8 N)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Rod AB length 5 m, weight 40 N at centre. Supported at A and at point C, 1 m from B. Find reaction at C.',
                text: 'Supports at A (x=0) and C (x=4). Weight at midpoint (x=2.5).\\n\\nTake moments about A (eliminates R\\u0041):\\nACW: R\\u1d04 \\u00d7 4\\nCW: 40 \\u00d7 2.5 = 100 N m\\n\\nR\\u1d04 \\u00d7 4 = 100  \\u27a2  R\\u1d04 = 25 N\\nR\\u0041 = 40 \\u2212 25 = 15 N  (vertical equilibrium)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Taking Moments Strategy',
                text: 'Take moments about a point where an UNKNOWN force acts. That unknown then has a perpendicular distance of zero and disappears from the equation, giving a simpler calculation.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Moment = F\\u00d7d (N m). Principle of moments: \\u03a3CW=\\u03a3ACW. Take moments about a point to eliminate an unknown. Then use \\u03a3F=0 for the other.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'Define moment of a force and state the principle of moments.' },
            { id: 'c2', blockId: 'callout-we2', prompt: 'Rod AB 5 m, weight 40 N at centre, supports at A and 1 m from B. Find reaction at C.' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'Why should you take moments about a point where an unknown force acts?' }
        ],
        summaryText: 'M=Fd. \\u03a3CW=\\u03a3ACW for equilibrium. Take moments about support to eliminate unknown. Then \\u03a3F=0.',
        ready: true
    },
    evidence: []
};
"""

notes['note_5_6_1.js'] = """\
/**
 * WME01 \u00b7 Topic 6 \u00b7 Subtopic 1 \u2014 Rigid rods and uniform rods
 */
export const note_mathematics_5_6_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply the principle of moments to uniform and non-uniform rods, beams on supports, and rods with distributed or concentrated loads.' },
            terms: []
        },
        {
            id: 'h-uniform', type: 'heading',
            data: { text: 'Uniform and Non-Uniform Rods', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Weight Position',
                text: 'Uniform rod: weight acts at the midpoint (centre of mass).\\nNon-uniform rod: weight acts at a stated point (given in the problem).\\n\\nFor a rod of length L with density varying: the centre of mass position is found from given information or must be left as an unknown and solved from equilibrium.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A non-uniform rod AB, length 6 m, weight 90 N, rests in equilibrium on two supports at A and at 4 m from A. The reaction at the 4 m support is twice that at A. Find the position of the centre of mass.',
                text: 'Let R\\u0041 = R. Then R\\u1342 = 2R.\\nVertical equilibrium: R + 2R = 90  \\u27a2  R = 30 N, R\\u1342 = 60 N\\n\\nLet centre of mass be x m from A.\\nTake moments about A:\\n90x = 60 \\u00d7 4 = 240\\nx = 240/90 = 8/3 \\u2248 2.67 m from A'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Uniform plank AB, 8 m, weight 200 N, rests on supports at C (2 m from A) and D (1 m from B). Find reactions at C and D.',
                text: 'Weight at midpoint: 4 m from A.\\nC is at 2 m from A; D is at 7 m from A.\\n\\nTake moments about C:\\n200 \\u00d7 (4\\u22122) = R\\u0044 \\u00d7 (7\\u22122)\\n200 \\u00d7 2 = R\\u0044 \\u00d7 5\\nR\\u0044 = 400/5 = 80 N\\n\\nVertical equilibrium: R\\u1d04 + R\\u0044 = 200  \\u27a2  R\\u1d04 = 120 N'
            }, terms: []
        },
        {
            id: 'checklist', type: 'checklist',
            data: {
                items: [
                    { text: 'Draw a diagram labelling all forces and distances', checked: false },
                    { text: 'Identify whether rod is uniform (weight at midpoint) or non-uniform', checked: false },
                    { text: 'Apply vertical equilibrium: \\u03a3upward forces = \\u03a3downward forces', checked: false },
                    { text: 'Take moments about one support to find the other reaction', checked: false },
                    { text: 'Verify with the second moments equation or equilibrium', checked: false }
                ]
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Uniform rod: weight at midpoint. Non-uniform: weight at given point. Take moments about one support to find the other. Use \\u03a3F=0 to find the remaining reaction.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'Where does the weight of a uniform rod act? What about a non-uniform rod?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Describe how to find the centre of mass of a non-uniform rod using moments.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Uniform plank 8 m, 200 N, supports 2 m and 7 m from A. Find both reactions.' },
            { id: 'c4', blockId: 'checklist', prompt: 'List the steps for solving a rod on two supports problem.' }
        ],
        summaryText: 'Uniform: weight at midpoint. Take moments about one support \\u27a2 other reaction. Then \\u03a3F=0 \\u27a2 first reaction.',
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

print('WME01 Topics 4-6 complete.')
