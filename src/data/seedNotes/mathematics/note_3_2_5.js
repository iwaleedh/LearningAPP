/**
 * WMA13 · Topic 2 · Subtopic 5 — Further trig identities
 */
export const note_mathematics_3_2_5 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use Pythagorean identities involving sec, cosec, and cot to simplify expressions and solve equations.' },
            terms: []
        },
        {
            id: 'h-identities', type: 'heading',
            data: { text: 'The Three Pythagorean Identities', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Pythagorean Identities',
                text: '1. sin\u00b2x + cos\u00b2x \u2261 1\n2. 1 + tan\u00b2x \u2261 sec\u00b2x  (divide identity 1 by cos\u00b2x)\n3. 1 + cot\u00b2x \u2261 cosec\u00b2x  (divide identity 1 by sin\u00b2x)'
            }, terms: []
        },
        {
            id: 'h-proofs', type: 'heading',
            data: { text: 'Deriving Identities 2 and 3', level: 2 }, terms: []
        },
        {
            id: 'callout-derive', type: 'callout',
            data: {
                style: 'worked',
                title: 'Derive 1 + tan\u00b2x = sec\u00b2x from sin\u00b2x + cos\u00b2x = 1.',
                text: 'Divide every term by cos\u00b2x:\nsin\u00b2x/cos\u00b2x + 1 = 1/cos\u00b2x\ntan\u00b2x + 1 = sec\u00b2x \u2713'
            }, terms: []
        },
        {
            id: 'h-applications', type: 'heading',
            data: { text: 'Applying Identities to Solve Equations', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve sec\u00b2x \u2212 3 tan x + 1 = 0 for 0 \u2264 x \u2264 2\u03c0.',
                text: 'Replace sec\u00b2x = 1 + tan\u00b2x:\n1 + tan\u00b2x \u2212 3 tan x + 1 = 0\ntan\u00b2x \u2212 3 tan x + 2 = 0\n(tan x \u2212 1)(tan x \u2212 2) = 0\ntan x = 1 \u2192 x = \u03c0/4, 5\u03c0/4\ntan x = 2 \u2192 x = arctan 2 \u2248 1.107, 4.249 rad'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Simplify: (cosec\u00b2x \u2212 1)/cot\u00b2x.',
                text: 'cosec\u00b2x \u2212 1 = cot\u00b2x  (from identity 3)\nSo (cosec\u00b2x \u2212 1)/cot\u00b2x = cot\u00b2x/cot\u00b2x = 1'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Substitution Strategy',
                text: 'When you see sec\u00b2x in an equation, substitute sec\u00b2x = 1 + tan\u00b2x to get a quadratic in tan x. Similarly, cosec\u00b2x = 1 + cot\u00b2x for equations in cot x.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: '1 + tan\u00b2x = sec\u00b2x; 1 + cot\u00b2x = cosec\u00b2x. Both derived from sin\u00b2x + cos\u00b2x = 1. Use to replace sec\u00b2x or cosec\u00b2x in equations to form quadratics in tan x or cot x.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the identity linking sec\u00b2x and tan\u00b2x.' },
            { id: 'c2', blockId: 'callout-derive', prompt: 'How is 1 + tan\u00b2x = sec\u00b2x derived from sin\u00b2x + cos\u00b2x = 1?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Solve sec\u00b2x \u2212 3 tan x + 1 = 0.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What substitution converts sec\u00b2x into a function of tan x?' }
        ],
        summaryText: '1 + tan\u00b2x = sec\u00b2x. 1 + cot\u00b2x = cosec\u00b2x. Both from dividing sin\u00b2+cos\u00b2=1. Use to form quadratics in tan or cot.',
        ready: true
    },
    evidence: []
};
