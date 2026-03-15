/**
 * WMA13 · Topic 2 · Subtopic 8 — Trigonometric proof
 */
export const note_mathematics_3_2_8 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Prove trigonometric identities by working from one side to the other, using known identities.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Method for Trig Proofs', level: 2 }, terms: []
        },
        {
            id: 'list-method', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    'Start from ONE side only (usually the more complex side)',
                    'Work step-by-step using valid identities and algebra',
                    'Aim to reach the other side exactly',
                    'Do NOT start from both sides simultaneously',
                    'Do NOT assume what you are trying to prove is true'
                ]
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove: (sin x + cos x)\u00b2 \u2261 1 + sin 2x.',
                text: 'LHS = (sin x + cos x)\u00b2\n= sin\u00b2x + 2 sin x cos x + cos\u00b2x\n= (sin\u00b2x + cos\u00b2x) + 2 sin x cos x\n= 1 + sin 2x  =  RHS  \u2713  (used sin 2x = 2 sin x cos x)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove: cos 2\u03b8/(1 + sin 2\u03b8) \u2261 (cos \u03b8 \u2212 sin \u03b8)/(cos \u03b8 + sin \u03b8).',
                text: 'LHS = cos 2\u03b8/(1 + sin 2\u03b8)\n= (cos\u00b2\u03b8 \u2212 sin\u00b2\u03b8)/(1 + 2 sin\u03b8 cos\u03b8)\n= (cos \u03b8 + sin \u03b8)(cos \u03b8 \u2212 sin \u03b8) / (cos\u00b2\u03b8 + 2 sin\u03b8 cos\u03b8 + sin\u00b2\u03b8)\n= (cos \u03b8 + sin \u03b8)(cos \u03b8 \u2212 sin \u03b8) / (cos \u03b8 + sin \u03b8)\u00b2\n= (cos \u03b8 \u2212 sin \u03b8)/(cos \u03b8 + sin \u03b8)  =  RHS  \u2713'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Useful Techniques',
                text: '\u2022 Convert to sin and cos if stuck\n\u2022 Try factorising numerators/denominators\n\u2022 Use sin\u00b2x + cos\u00b2x = 1 to substitute\n\u2022 Use double angle formulae to match the required form\n\u2022 If the RHS has a fraction, try putting the LHS over a common denominator'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Trig proofs: start from the more complex side, apply known identities step-by-step, reach the other side. Never work from both sides. Never assume the result.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-method', prompt: 'Which side should you start from in a trig proof, and why?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Prove (sin x + cos x)\u00b2 \u2261 1 + sin 2x.' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'Name three useful techniques when stuck on a trig proof.' }
        ],
        summaryText: 'Work from one side. Use known identities step by step. Never assume the answer. Convert to sin/cos if stuck; factorise; use Pythagorean identities.',
        ready: true
    },
    evidence: []
};
