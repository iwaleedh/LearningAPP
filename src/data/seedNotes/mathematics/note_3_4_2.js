/**
 * WMA13 · Topic 4 · Subtopic 2 — Chain rule (further applications)
 */
export const note_mathematics_3_4_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply the chain rule to differentiate composite functions involving trig, exponential, and logarithmic functions.' },
            terms: []
        },
        {
            id: 'h-rule', type: 'heading',
            data: { text: 'The Chain Rule', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Chain Rule',
                text: 'If y = f(u) where u = g(x), then:\ndy/dx = (dy/du) \u00b7 (du/dx)\n\nEquivalently: d/dx[f(g(x))] = f\u2019(g(x)) \u00b7 g\u2019(x)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = sin\u00b3(2x).',
                text: 'Write y = u\u00b3 where u = sin(2x)\ndy/du = 3u\u00b2,  du/dx = 2 cos(2x)\ndy/dx = 3 sin\u00b2(2x) \u00b7 2 cos(2x) = 6 sin\u00b2(2x) cos(2x)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = ln(sec x).',
                text: 'u = sec x,  y = ln u\ndu/dx = sec x tan x,  dy/du = 1/u = 1/sec x\ndy/dx = (1/sec x) \u00b7 sec x tan x = tan x'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = e^(sin x).',
                text: 'dy/dx = cos x \u00b7 e^(sin x)  (chain rule: multiply by derivative of exponent)'
            }, terms: []
        },
        {
            id: 'callout-we4', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = (3 + 2sin x)\u2075.',
                text: 'dy/dx = 5(3 + 2sin x)\u2074 \u00b7 2 cos x = 10 cos x (3 + 2sin x)\u2074'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Repeated Chain Rule',
                text: 'For nested composites, apply the chain rule repeatedly. Each layer contributes a multiplying factor. Work from the outermost function inward, multiplying by each inner derivative.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Chain rule: dy/dx = (dy/du)(du/dx). Outer derivative \u00d7 inner derivative. Works for trig, exp, log composites \u2014 multiply through from outermost to innermost layer.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the chain rule.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Differentiate y = sin\u00b3(2x).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Differentiate y = ln(sec x).' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'Differentiate y = e^(sin x).' }
        ],
        summaryText: 'Chain rule: dy/dx = f\u2019(g(x)) \u00b7 g\u2019(x). Outer \u00d7 inner. Apply to trig, exp, log composites.',
        ready: true
    },
    evidence: []
};
