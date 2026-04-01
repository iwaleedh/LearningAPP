/**
 * Seed note: Mathematics · WMA12 · Topic 8 · Subtopic 4
 * "Definite integration and areas"
 */

export const note_mathematics_2_8_4 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Use definite integration to find areas under and between curves, handling regions below the x-axis carefully.' },
            terms: []
        },
        {
            id: 'h-ftc',
            type: 'heading',
            data: { text: 'The Fundamental Theorem of Calculus', level: 2 },
            terms: []
        },
        {
            id: 'eq-ftc',
            type: 'equation',
            data: {
                html: '∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a)   where F\'(x) = f(x)',
                caption: 'The definite integral gives the signed area between the curve and the x-axis'
            },
            terms: []
        },
        {
            id: 'svg-area',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="320" height="180"><defs><marker id="ah67" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#374151"/></marker></defs><line x1="30" y1="155" x2="300" y2="155" stroke="#374151" stroke-width="1.5" marker-end="url(#ah67)"/><line x1="40" y1="15" x2="40" y2="160" stroke="#374151" stroke-width="1.5" marker-end="url(#ah67)"/><path d="M 50,135 C 80,120 100,60 140,50 C 180,40 200,90 240,100 C 260,105 270,100 280,90" stroke="#2563eb" stroke-width="2" fill="none"/><path d="M 100,155 L 100,87 C 120,72 140,50 160,50 C 180,50 200,90 210,100 L 210,155 Z" fill="#2563eb" fill-opacity="0.18" stroke="none"/><line x1="100" y1="145" x2="100" y2="165" stroke="#374151" stroke-width="1.2"/><line x1="210" y1="145" x2="210" y2="165" stroke="#374151" stroke-width="1.2"/><text x="96" y="174" font-size="12" fill="#374151" font-family="sans-serif">a</text><text x="206" y="174" font-size="12" fill="#374151" font-family="sans-serif">b</text><text x="290" y="158" font-size="12" fill="#374151" font-family="sans-serif">x</text><text x="44" y="14" font-size="12" fill="#374151" font-family="sans-serif">y</text><text x="140" y="120" font-size="12" fill="#2563eb" font-family="sans-serif">A = ∫ f(x)dx</text></svg>',
                caption: 'Shaded area A = ∫ₐᵇ f(x) dx when f(x) ≥ 0 throughout [a, b]'
            },
            terms: []
        },
        {
            id: 'h-below',
            type: 'heading',
            data: { text: 'Area Below the x-axis', level: 2 },
            terms: []
        },
        {
            id: 'callout-below',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Negative Integrals',
                text: 'When f(x) < 0 in an interval, ∫ f(x) dx gives a NEGATIVE result.\n\nTo find the area (always positive):\n  Area = |∫ f(x) dx|\n\nFor a region partly above and partly below the x-axis:\n  1. Find the x-value(s) where f(x) = 0 (the x-intercepts).\n  2. Integrate each segment separately.\n  3. Take the absolute value of each integral.\n  4. ADD the absolute values.'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Simple Area', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the area enclosed by y = x² − 4 and the x-axis.',
                text: 'Curve crosses x-axis: x² = 4  →  x = ±2\n\nArea = |∫₋₂² (x² − 4) dx| (integrand is ≤ 0 in this region)\n\n∫₋₂² (x² − 4) dx = [x³/3 − 4x]₋₂²\n= (8/3 − 8) − (−8/3 + 8)\n= (8/3 − 8) − (−8/3 + 8)\n= 8/3 − 8 + 8/3 − 8 = 16/3 − 16 = −32/3\n\nArea = 32/3'
            },
            terms: []
        },
        {
            id: 'h-between',
            type: 'heading',
            data: { text: 'Area Between Two Curves', level: 2 },
            terms: []
        },
        {
            id: 'callout-between',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Formula for Area Between Curves',
                text: 'If f(x) ≥ g(x) on [a, b]:\n\n  Area = ∫ₐᵇ [f(x) − g(x)] dx\n\nFind a and b by solving f(x) = g(x) to get the intersection points.\nAlways check which curve is on top before integrating.'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Between Curves', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the area between y = x + 2 and y = x² for 0 ≤ x ≤ 2.',
                text: 'Check intersection in [0,2]: x² = x + 2 → x²−x−2=0 → x=2 (in range), x=−1 (out)\n\nFor 0 ≤ x ≤ 2: y = x + 2 is above y = x² (check x=1: 3 > 1 ✓)\n\nArea = ∫₀² [(x+2) − x²] dx = ∫₀² (x + 2 − x²) dx\n= [x²/2 + 2x − x³/3]₀²\n= (2 + 4 − 8/3) − 0\n= 6 − 8/3 = 10/3'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Area = ∫ₐᵇ f(x) dx when f(x) ≥ 0. If f(x) < 0: area = |∫ f(x) dx|. Mixed sign: split at zeros, integrate each part separately, sum absolutes. Between curves: ∫[top − bottom] dx, limits at intersections.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When finding the area bounded by a curve that crosses the x-axis, you must evaluate the sections above and below the axis using separate definite integrals, taking the absolute value of the negative area before adding them."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-below', prompt: 'What happens to ∫ f(x) dx when f(x) < 0? How do you find the actual area?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the area between y = x² − 4 and the x-axis.' },
            { id: 'c3', blockId: 'callout-between', prompt: 'State the formula for the area between two curves f(x) ≥ g(x) on [a, b].' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'Find the area between y = x + 2 and y = x² for 0 ≤ x ≤ 2.' }
        ],
        summaryText: 'Definite integral gives signed area. Negative below x-axis → take absolute value. Mixed: split at zeros. Between curves: ∫(top−bottom)dx, limits at intersections.',
        ready: true
    },
    evidence: []
};
