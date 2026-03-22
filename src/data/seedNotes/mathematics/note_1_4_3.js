/**
 * Seed note: Mathematics · Unit 1 · Topic 4 · Subtopic 3
 * "Gradients, tangents and normals"
 */

export const note_mathematics_1_4_3 = {
    pdfPath: '/notes/mathematics/differentiation/gradients-tangents-normals.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Find the gradient of a curve at a given point by substituting into the derivative; find equations of tangents and normals to curves; identify when a curve is increasing, decreasing, or stationary.' },
            terms: []
        },
        {
            id: 'h-gradient-point',
            type: 'heading',
            data: { text: 'Gradient at a Specific Point', level: 2 },
            terms: []
        },
        {
            id: 'p-gradient-point',
            type: 'paragraph',
            data: { text: 'To find the gradient of y = f(x) at x = a: differentiate to get f\'(x), then substitute x = a. The result f\'(a) is the gradient of the curve (and of the tangent) at that point.' },
            terms: []
        },
        {
            id: 'worked-grad',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Gradient at a Point',
                text: 'Find the gradient of y = x³ − 4x + 1 at the point where x = 2.<br/><br/>dy/dx = 3x² − 4<br/>At x = 2: dy/dx = 3(4) − 4 = 12 − 4 = <strong>8</strong>'
            },
            terms: []
        },
        {
            id: 'h-tangent',
            type: 'heading',
            data: { text: 'Equation of a Tangent', level: 2 },
            terms: []
        },
        {
            id: 'list-tangent',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Differentiate to find dy/dx.' },
                    { text: 'Substitute the x-coordinate of the given point to find the gradient m.' },
                    { text: 'Find the y-coordinate of the point by substituting x into y.' },
                    { text: 'Use point-slope form: y − y₁ = m(x − x₁).' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-tan',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Tangent',
                text: 'Find the equation of the tangent to y = x² + 3x − 2 at x = 1.<br/><br/>dy/dx = 2x + 3<br/>At x = 1: m = 2(1) + 3 = 5<br/>y-value: y = 1 + 3 − 2 = 2, so point is (1, 2)<br/>Tangent: y − 2 = 5(x − 1)<br/><strong>y = 5x − 3</strong>'
            },
            terms: []
        },
        {
            id: 'h-normal',
            type: 'heading',
            data: { text: 'Equation of a Normal', level: 2 },
            terms: []
        },
        {
            id: 'p-normal',
            type: 'paragraph',
            data: { text: 'The <strong>normal</strong> to a curve at a point is perpendicular to the tangent at that point. Since perpendicular lines have gradients whose product is −1, the gradient of the normal is −1/m (the negative reciprocal of the tangent gradient).' },
            terms: []
        },
        {
            id: 'worked-normal',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Normal',
                text: 'Using the previous example (tangent gradient = 5, point (1, 2)):<br/><br/>Normal gradient = −1/5<br/>Normal: y − 2 = (−1/5)(x − 1)<br/>5y − 10 = −x + 1<br/><strong>x + 5y − 11 = 0</strong>'
            },
            terms: []
        },
        {
            id: 'h-increase',
            type: 'heading',
            data: { text: 'Increasing and Decreasing Functions', level: 2 },
            terms: []
        },
        {
            id: 'table-increase',
            type: 'comparisonTable',
            data: {
                headers: ['Condition', 'Meaning', 'Curve behaviour'],
                rows: [
                    ["f'(x) > 0", 'Function increasing', 'Rising left to right'],
                    ["f'(x) = 0", 'Stationary point', 'Horizontal tangent (could be max, min, or inflection)'],
                    ["f'(x) < 0", 'Function decreasing', 'Falling left to right']
                ],
                caption: "Using the sign of f'(x) to describe curve behaviour"
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always find the y-coordinate of the point before applying the tangent/normal formula.<br/>• The normal is perpendicular — if the tangent has gradient 0 (horizontal tangent), the normal is vertical (x = constant).<br/>• Check: if the question asks for the equation in a specific form (e.g. ax + by + c = 0), rearrange at the end.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: "Gradient at x=a: substitute into f'(x). Tangent gradient = f'(a); equation: y−y₁=m(x−x₁). Normal gradient = −1/f'(a). f'>0 increasing, f'<0 decreasing, f'=0 stationary." },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "The normal is perpendicular to the tangent, so use the rule m2 = -1/m1. Make sure to substitute the x-coordinate into the differentiated equation (dy/dx) to find the gradient, not into the original y equation."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'worked-grad', prompt: 'Find the gradient of y = x³ − 4x + 1 at x = 2.' },
            { id: 'cue-2', blockId: 'worked-tan', prompt: 'Find the tangent to y = x² + 3x − 2 at x = 1.' },
            { id: 'cue-3', blockId: 'worked-normal', prompt: 'What is the gradient of the normal if the tangent gradient is 5?' },
            { id: 'cue-4', blockId: 'table-increase', prompt: "What does it mean when f'(x) < 0?" }
        ],
        summaryText: "Differentiate, substitute x to get m. Tangent: y−y₁=m(x−x₁). Normal: −1/m perpendicular gradient. f'>0 increasing, f'=0 stationary, f'<0 decreasing.",
        ready: true
    },
    evidence: []
};
