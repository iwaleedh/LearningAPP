/**
 * Seed note: Mathematics · Unit 1 · Topic 5 · Subtopic 0
 * "Integrating powers of x"
 */

export const note_mathematics_1_5_0 = {
    pdfPath: '/notes/mathematics/integration/integrating-powers-of-x.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Integrate powers of x using the reverse power rule; include the constant of integration +C; find the constant using a given point; evaluate definite integrals to find areas.' },
            terms: []
        },
        {
            id: 'h-concept',
            type: 'heading',
            data: { text: 'Integration as Reverse Differentiation', level: 2 },
            terms: []
        },
        {
            id: 'p-concept',
            type: 'paragraph',
            data: { text: 'Integration is the <strong>inverse (reverse) of differentiation</strong>. Differentiating xⁿ gives nxⁿ⁻¹; integrating nxⁿ⁻¹ returns xⁿ. The indefinite integral of f(x) is the family of functions whose derivative is f(x). It always includes an <strong>arbitrary constant +C</strong>.' },
            terms: []
        },
        {
            id: 'h-power-rule',
            type: 'heading',
            data: { text: 'The Integration Power Rule', level: 2 },
            terms: []
        },
        {
            id: 'key-power',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Integration Power Rule',
                text: '∫xⁿ dx = xⁿ⁺¹ / (n + 1) + C &nbsp;&nbsp;&nbsp;(n ≠ −1)<br/><br/>∫axⁿ dx = axⁿ⁺¹ / (n + 1) + C<br/><br/>Rule: <strong>increase the power by 1</strong>, then <strong>divide by the new power</strong>. Always add +C for indefinite integrals.'
            },
            terms: []
        },
        {
            id: 'table-examples',
            type: 'comparisonTable',
            data: {
                headers: ['f(x)', '∫f(x)dx', 'Notes'],
                rows: [
                    ['x⁴', 'x⁵/5 + C', 'Power 4 → 5, divide by 5'],
                    ['3x²', 'x³ + C', '3 × x³/3 = x³'],
                    ['5', '5x + C', 'Constant: treat as 5x⁰'],
                    ['x⁻³', '−(1/2)x⁻² + C', 'Power −3 → −2, divide by −2'],
                    ['x^(1/2)', '(2/3)x^(3/2) + C', 'Power 1/2 → 3/2, divide by 3/2 = × 2/3']
                ],
                caption: 'Integration power rule applied to a range of terms'
            },
            terms: []
        },
        {
            id: 'worked-integral',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Integrate a Sum',
                text: 'Find ∫(4x³ − 6x + 5) dx.<br/><br/>= 4x⁴/4 − 6x²/2 + 5x + C<br/><br/>= <strong>x⁴ − 3x² + 5x + C</strong>'
            },
            terms: []
        },
        {
            id: 'h-constant',
            type: 'heading',
            data: { text: 'Finding the Constant of Integration', level: 2 },
            terms: []
        },
        {
            id: 'p-constant',
            type: 'paragraph',
            data: { text: 'C is found using a known point on the curve. Substitute the given (x, y) coordinates into the integrated expression and solve for C.' },
            terms: []
        },
        {
            id: 'worked-const',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Find C',
                text: 'Given dy/dx = 3x² − 2 and the curve passes through (2, 5).<br/><br/>y = ∫(3x² − 2) dx = x³ − 2x + C<br/><br/>Substitute (2, 5): 5 = 8 − 4 + C → C = 1<br/><br/><strong>y = x³ − 2x + 1</strong>'
            },
            terms: []
        },
        {
            id: 'h-definite',
            type: 'heading',
            data: { text: 'Definite Integration', level: 2 },
            terms: []
        },
        {
            id: 'p-definite',
            type: 'paragraph',
            data: { text: 'A <strong>definite integral</strong> has upper and lower limits. The constant C cancels. The result is a number representing the <strong>signed area</strong> between the curve, the x-axis, and the vertical lines x = a and x = b.' },
            terms: []
        },
        {
            id: 'key-definite',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Definite Integral',
                text: '∫[a to b] f(x) dx = [F(x)] from a to b = F(b) − F(a)<br/><br/>where F(x) is the antiderivative of f(x). C is not needed for definite integrals.'
            },
            terms: []
        },
        {
            id: 'worked-def',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Definite Integral',
                text: 'Evaluate ∫[1 to 3] (2x + 1) dx.<br/><br/>= [x² + x] from 1 to 3<br/>= (9 + 3) − (1 + 1)<br/>= 12 − 2 = <strong>10</strong>'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '• Forgetting +C in an indefinite integral loses marks immediately.<br/>• The rule fails for n = −1: ∫x⁻¹ dx = ln|x| + C (covered at A2 level).<br/>• Area below the x-axis gives a negative definite integral — use |value| or split the integral at x-axis crossings.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: '∫axⁿ dx = axⁿ⁺¹/(n+1) + C. Add +C for indefinite integrals. Find C by substituting a known point. Definite integral = F(b) − F(a) (no C needed). Area below x-axis is negative.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-power', prompt: 'State the integration power rule. What restriction applies?' },
            { id: 'cue-2', blockId: 'worked-integral', prompt: 'Integrate 4x³ − 6x + 5.' },
            { id: 'cue-3', blockId: 'worked-const', prompt: 'Given dy/dx = 3x² − 2 and the curve passes through (2, 5), find y.' },
            { id: 'cue-4', blockId: 'worked-def', prompt: 'Evaluate ∫[1 to 3] (2x + 1) dx.' },
            { id: 'cue-5', blockId: 'callout-warning', prompt: 'Why does the integration power rule fail for n = −1?' }
        ],
        summaryText: '∫axⁿ dx = axⁿ⁺¹/(n+1)+C (n≠−1). Integrate term-by-term. Add C. Find C from a known point. Definite integral = F(b)−F(a).',
        ready: true
    },
    evidence: []
};
