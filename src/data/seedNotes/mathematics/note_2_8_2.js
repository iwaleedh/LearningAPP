/**
 * Seed note: Mathematics · WMA12 · Topic 8 · Subtopic 2
 * "Integration by parts"
 */

export const note_mathematics_2_8_2 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Apply integration by parts to evaluate integrals involving products of functions.' },
            terms: []
        },
        {
            id: 'h-formula',
            type: 'heading',
            data: { text: 'The Integration by Parts Formula', level: 2 },
            terms: []
        },
        {
            id: 'eq-ibp',
            type: 'equation',
            data: {
                html: '∫ u <span class="nb-frac"><span class="nb-num">dv</span><span class="nb-den">dx</span></span> dx = uv − ∫ v <span class="nb-frac"><span class="nb-num">du</span><span class="nb-den">dx</span></span> dx',
                caption: 'Integration by parts — the reverse of the product rule'
            },
            terms: []
        },
        {
            id: 'callout-liate',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Choosing u and dv/dx (LIATE Rule)',
                text: 'Choose u from whichever comes first in LIATE:\n  L — Logarithmic functions (ln x, log x)\n  I — Inverse trig (arcsin, arctan…)\n  A — Algebraic (xⁿ, polynomials)\n  T — Trigonometric (sin x, cos x)\n  E — Exponential (eˣ, aˣ)\n\nThe remaining factor is dv/dx.\n\nKey principle: u must become simpler when differentiated; dv/dx must be easy to integrate.'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find ∫ x eˣ dx.',
                text: 'Let u = x  (algebraic — differentiates to simpler),  dv/dx = eˣ\n  du/dx = 1,       v = eˣ\n\n∫ x eˣ dx = x·eˣ − ∫ eˣ·1 dx\n           = x eˣ − eˣ + c\n           = eˣ(x − 1) + c'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Logarithm', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find ∫ x² ln x dx.',
                text: 'Let u = ln x  (logarithm → choice by LIATE),  dv/dx = x²\n  du/dx = 1/x,    v = x³/3\n\n∫ x² ln x dx = (x³/3) ln x − ∫ (x³/3)·(1/x) dx\n             = (x³/3) ln x − (1/3)∫ x² dx\n             = (x³/3) ln x − x³/9 + c\n             = (x³/9)(3 ln x − 1) + c'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Applying Twice', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find ∫ x² sin x dx.',
                text: 'First application: u = x², dv/dx = sin x\n  du/dx = 2x,  v = −cos x\n  ∫ x² sin x dx = −x² cos x + ∫ 2x cos x dx\n\nSecond application: u = 2x, dv/dx = cos x\n  du/dx = 2,  v = sin x\n  ∫ 2x cos x dx = 2x sin x − ∫ 2 sin x dx = 2x sin x + 2 cos x + c\n\nCombining:\n  ∫ x² sin x dx = −x² cos x + 2x sin x + 2 cos x + c'
            },
            terms: []
        },
        {
            id: 'callout-ln',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Integrating ln x alone',
                text: 'Write ∫ ln x dx as ∫ ln x · 1 dx. Then let u = ln x, dv/dx = 1:\n  du/dx = 1/x,  v = x\n\n∫ ln x dx = x ln x − ∫ x·(1/x) dx = x ln x − x + c = x(ln x − 1) + c'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: '∫u dv = uv − ∫v du. Choose u by LIATE: Logarithm > Inverse trig > Algebraic > Trig > Exponential. The remaining factor is dv/dx. May need to apply twice (for x²·trig/exp). ∫ln x dx = x(ln x − 1) + c.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-ibp', prompt: 'State the integration by parts formula.' },
            { id: 'c2', blockId: 'callout-liate', prompt: 'What does LIATE stand for and how is it used?' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find ∫ x² ln x dx.' },
            { id: 'c4', blockId: 'callout-ln', prompt: 'How do you integrate ln x using integration by parts?' }
        ],
        summaryText: '∫u dv/dx dx = uv − ∫v du/dx dx. LIATE for choosing u. Apply twice for xⁿ·trig or xⁿ·eˣ. ∫ln x dx = x(ln x − 1) + c.',
        ready: true
    },
    evidence: []
};
