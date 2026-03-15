/**
 * WMA13 · Topic 5 · Subtopic 3 — Integration using trig identities
 */
export const note_mathematics_3_5_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use trigonometric identities to rewrite integrands into integrable forms.' },
            terms: []
        },
        {
            id: 'h-ids', type: 'heading',
            data: { text: 'Useful Identities for Integration', level: 2 }, terms: []
        },
        {
            id: 'callout-ids', type: 'callout',
            data: {
                style: 'key',
                title: 'Key Identities',
                text: 'cos 2x = 2cos\u00b2x \u2212 1  \u27a2  cos\u00b2x = (1 + cos 2x)/2\ncos 2x = 1 \u2212 2sin\u00b2x  \u27a2  sin\u00b2x = (1 \u2212 cos 2x)/2\n\nsin 2x = 2 sin x cos x  \u27a2  sin x cos x = (1/2)sin 2x\n\n1 + tan\u00b2x = sec\u00b2x  \u27a2  tan\u00b2x = sec\u00b2x \u2212 1'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \u222b cos\u00b2x dx.',
                text: 'Use cos\u00b2x = (1 + cos 2x)/2\n\u222b cos\u00b2x dx = \u222b (1 + cos 2x)/2 dx\n= x/2 + (sin 2x)/4 + c'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \u222b sin\u00b2(3x) dx.',
                text: 'Use sin\u00b2(3x) = (1 \u2212 cos 6x)/2\n\u222b sin\u00b2(3x) dx = \u222b (1 \u2212 cos 6x)/2 dx\n= x/2 \u2212 (sin 6x)/12 + c'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \u222b tan\u00b2x dx.',
                text: 'Use tan\u00b2x = sec\u00b2x \u2212 1\n\u222b tan\u00b2x dx = \u222b (sec\u00b2x \u2212 1) dx = tan x \u2212 x + c'
            }, terms: []
        },
        {
            id: 'callout-we4', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \u222b sin x cos x dx.',
                text: 'Method 1: Use sin x cos x = (1/2) sin 2x\n\u222b sin x cos x dx = \u222b (1/2) sin 2x dx = \u2212(cos 2x)/4 + c\n\nMethod 2: Substitution u = sin x gives u\u00b2/2 + c = sin\u00b2x/2 + c (equivalent)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Strategy',
                text: 'When you see sin\u00b2x or cos\u00b2x, immediately use the cos 2x identity. When you see tan\u00b2x, replace with sec\u00b2x \u2212 1. Look for sin x cos x combinations; use the sin 2x identity.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Trig identity integration: cos\u00b2x \u2192 (1+cos2x)/2; sin\u00b2x \u2192 (1\u2212cos2x)/2; tan\u00b2x \u2192 sec\u00b2x\u22121; sin x cos x \u2192 (1/2)sin 2x. Then integrate directly.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-ids', prompt: 'Write cos\u00b2x and sin\u00b2x as expressions involving cos 2x.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Integrate cos\u00b2x using a trig identity.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Integrate tan\u00b2x.' },
            { id: 'c4', blockId: 'callout-we4', prompt: 'Integrate sin x cos x in two different ways.' }
        ],
        summaryText: 'Replace powers: cos\u00b2x=(1+cos2x)/2; sin\u00b2x=(1\u2212cos2x)/2; tan\u00b2x=sec\u00b2x\u22121. Then integrate directly.',
        ready: true
    },
    evidence: []
};
