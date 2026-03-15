/**
 * WME01 · Topic 3 · Subtopic 0 — Constant-acceleration equations (suvat)
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
                text: 'Variables: s = displacement, u = initial velocity, v = final velocity, a = acceleration, t = time\n\n1. v = u + at\n2. s = \u00bd(u+v)t\n3. s = ut + \u00bdat\u00b2\n4. v\u00b2 = u\u00b2 + 2as\n5. s = vt \u2212 \u00bdat\u00b2'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Choosing the Right Equation',
                text: '1. Write down s, u, v, a, t and identify the THREE known and ONE unknown.\n2. Pick the equation containing those four.\n\nEquation 1 (no s): v=u+at\nEquation 3 (no v): s=ut+\u00bdat\u00b2\nEquation 4 (no t): v\u00b2=u\u00b2+2as'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A car accelerates from 10 m s\u207b\u00b9 to 25 m s\u207b\u00b9 over 12 s. Find acceleration and distance.',
                text: 'u=10, v=25, t=12, a=?, s=?\n\nv = u+at: 25=10+12a  \u27a2  a = 15/12 = 1.25 m s\u207b\u00b2\ns = \u00bd(u+v)t = \u00bd(10+25)(12) = \u00bd(35)(12) = 210 m'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'A ball is thrown upward at 14.7 m s\u207b\u00b9. Find the maximum height and time to return.',
                text: 'Take upward as positive. g = 9.8 m s\u207b\u00b2.\nAt max height: v = 0; u = 14.7; a = \u22129.8\n\nv\u00b2 = u\u00b2+2as: 0 = 14.7\u00b2 + 2(\u22129.8)s\n0 = 216.09 \u2212 19.6s  \u27a2  s = 11.0 m\n\nTime to max height: v=u+at: 0=14.7\u221299.8t  \u27a2  t = 1.5 s\nTime to return = 2\u00d71.5 = 3.0 s'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Suvat: v=u+at, s=\u00bd(u+v)t, s=ut+\u00bdat\u00b2, v\u00b2=u\u00b2+2as. Choose positive direction; g=9.8 m s\u207b\u00b2 acts downward.' },
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
        summaryText: '5 suvat equations. Write s,u,v,a,t; identify 3 known; pick equation. Vertical: a=\u22129.8 (upward +).',
        ready: true
    },
    evidence: []
};
