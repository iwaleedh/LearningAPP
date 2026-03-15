/**
 * WMA13 · Topic 4 · Subtopic 1 — Differentiation from first principles: trig
 */
export const note_mathematics_3_4_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Derive d/dx(sin x) = cos x from first principles using the definition of the derivative and small angle approximations.' },
            terms: []
        },
        {
            id: 'h-def', type: 'heading',
            data: { text: 'The Derivative from First Principles', level: 2 }, terms: []
        },
        {
            id: 'callout-def', type: 'callout',
            data: {
                style: 'key',
                title: 'Definition',
                text: 'f\u2019(x) = lim_{h \u2192 0} [f(x + h) \u2212 f(x)] / h'
            }, terms: []
        },
        {
            id: 'h-proof', type: 'heading',
            data: { text: 'Proof: d/dx(sin x) = cos x', level: 2 }, terms: []
        },
        {
            id: 'callout-proof', type: 'callout',
            data: {
                style: 'worked',
                title: 'Derive d/dx(sin x) from first principles.',
                text: 'f(x) = sin x, so f(x+h) = sin(x+h)\n\nApply compound angle formula:\nsin(x + h) = sin x cos h + cos x sin h\n\nTherefore:\n[sin(x+h) \u2212 sin x]/h = [sin x cos h + cos x sin h \u2212 sin x]/h\n= sin x(cos h \u2212 1)/h + cos x \u00b7 sin h/h\n\nAs h \u2192 0, use small angle approximations:\nsin h/h \u2192 1  and  (cos h \u2212 1)/h \u2192 0\n\n\u2234 f\u2019(x) = sin x \u00b7 0 + cos x \u00b7 1 = cos x  \u2713'
            }, terms: []
        },
        {
            id: 'h-limits', type: 'heading',
            data: { text: 'Two Key Limits Used', level: 2 }, terms: []
        },
        {
            id: 'callout-limits', type: 'callout',
            data: {
                style: 'key',
                title: 'Fundamental Trig Limits',
                text: 'lim_{h \u2192 0} (sin h / h) = 1\nlim_{h \u2192 0} (cos h \u2212 1) / h = 0\n\nThese follow from the small angle approximations: sin h \u2248 h and cos h \u2248 1 for h \u2192 0.'
            }, terms: []
        },
        {
            id: 'callout-cosx', type: 'callout',
            data: {
                style: 'worked',
                title: 'Sketch of proof for d/dx(cos x) = \u2212sin x.',
                text: 'cos(x + h) = cos x cos h \u2212 sin x sin h\n\n[cos(x+h) \u2212 cos x]/h = cos x(cos h \u2212 1)/h \u2212 sin x \u00b7 sin h/h\nAs h \u2192 0: \u2192 cos x \u00b7 0 \u2212 sin x \u00b7 1 = \u2212sin x  \u2713'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Note',
                text: 'In an exam, you must show each step clearly: write the definition, apply the compound angle formula, substitute the limits. Do not skip steps in a "show that" question.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'd/dx(sin x) = cos x from first principles: apply the compound angle formula for sin(x+h), then use lim(sin h/h) = 1 and lim((cos h \u2212 1)/h) = 0.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-def', prompt: 'Write the first principles definition of the derivative.' },
            { id: 'c2', blockId: 'callout-limits', prompt: 'State the two fundamental trig limits used in the proof.' },
            { id: 'c3', blockId: 'callout-proof', prompt: 'Outline the key steps to prove d/dx(sin x) = cos x from first principles.' },
            { id: 'c4', blockId: 'callout-cosx', prompt: 'Which compound angle formula is used to prove d/dx(cos x) = \u2212sin x?' }
        ],
        summaryText: 'First principles proof of d/dx(sin x) = cos x: use sin(x+h) compound angle formula, then limits sin h/h \u2192 1 and (cos h \u2212 1)/h \u2192 0.',
        ready: true
    },
    evidence: []
};
