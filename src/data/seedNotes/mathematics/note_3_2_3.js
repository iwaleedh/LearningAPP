/**
 * WMA13 · Topic 2 · Subtopic 3 — Compound angle formulae
 */
export const note_mathematics_3_2_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use the compound angle formulae for sin(A\u00b1B), cos(A\u00b1B), and tan(A\u00b1B) to find exact values and simplify expressions.' },
            terms: []
        },
        {
            id: 'h-formulae', type: 'heading',
            data: { text: 'Compound Angle Formulae', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Formulae (given in the formula booklet)',
                text: 'sin(A + B) = sin A cos B + cos A sin B\nsin(A \u2212 B) = sin A cos B \u2212 cos A sin B\n\ncos(A + B) = cos A cos B \u2212 sin A sin B\ncos(A \u2212 B) = cos A cos B + sin A sin B\n\ntan(A + B) = (tan A + tan B)/(1 \u2212 tan A tan B)\ntan(A \u2212 B) = (tan A \u2212 tan B)/(1 + tan A tan B)'
            }, terms: []
        },
        {
            id: 'h-exact', type: 'heading',
            data: { text: 'Using Formulae for Exact Values', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the exact value of sin 75\u00b0.',
                text: 'sin 75\u00b0 = sin(45\u00b0 + 30\u00b0)\n= sin 45\u00b0 cos 30\u00b0 + cos 45\u00b0 sin 30\u00b0\n= (\u221a2/2)(\u221a3/2) + (\u221a2/2)(1/2)\n= \u221a6/4 + \u221a2/4\n= (\u221a6 + \u221a2)/4'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the exact value of tan 15\u00b0.',
                text: 'tan 15\u00b0 = tan(45\u00b0 \u2212 30\u00b0)\n= (tan 45\u00b0 \u2212 tan 30\u00b0)/(1 + tan 45\u00b0 tan 30\u00b0)\n= (1 \u2212 1/\u221a3)/(1 + 1/\u221a3)\n= (\u221a3 \u2212 1)/(\u221a3 + 1)\nRationalise: = (\u221a3 \u2212 1)\u00b2/((\u221a3)\u00b2 \u2212 1\u00b2) = (4 \u2212 2\u221a3)/2 = 2 \u2212 \u221a3'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Strategy',
                text: 'Choose pairs A, B from {30\u00b0, 45\u00b0, 60\u00b0, 90\u00b0} whose sum or difference gives the target angle. For example: 75\u00b0 = 45\u00b0 + 30\u00b0; 15\u00b0 = 45\u00b0 \u2212 30\u00b0; 105\u00b0 = 60\u00b0 + 45\u00b0.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Compound angle formulae expand sin(A\u00b1B), cos(A\u00b1B), tan(A\u00b1B). Key pattern: sin uses mixed sin/cos; cos uses matching functions with sign change. Use to find exact values at non-standard angles.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Watch your signs carefully when applying compound angle identities, especially cos(A+B) = cosA cosB - sinA sinB. The sign flips for cosine, but stays the same for sine\u2014examiners see this mistake constantly."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the formula for sin(A + B).' },
            { id: 'c2', blockId: 'callout-key', prompt: 'State the formula for cos(A \u2212 B).' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Find the exact value of sin 75\u00b0 using compound angle formulae.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What angle pairs can you use to find sin 15\u00b0 exactly?' }
        ],
        summaryText: 'sin(A+B) = sinA cosB + cosA sinB. cos(A+B) = cosA cosB \u2212 sinA sinB. Use to find exact values at non-standard angles.',
        ready: true
    },
    evidence: []
};
