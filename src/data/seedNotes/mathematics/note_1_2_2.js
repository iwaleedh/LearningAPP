/**
 * Seed note: Mathematics · Unit 1 · Topic 2 · Subtopic 2
 * "Parallel and perpendicular gradients"
 */

export const note_mathematics_1_2_2 = {
    pdfPath: '/notes/mathematics/coordinate-geometry/parallel-and-perpendicular-gradients.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Identify parallel and perpendicular lines from their gradients; use the perpendicular gradient rule to find equations of perpendicular lines; understand collinear points.' },
            terms: []
        },
        {
            id: 'h-parallel',
            type: 'heading',
            data: { text: 'Parallel Lines', level: 2 },
            terms: []
        },
        {
            id: 'p-parallel',
            type: 'paragraph',
            data: { text: 'Two lines are <strong>parallel</strong> if and only if they have the <strong>same gradient</strong>. Parallel lines never intersect. Distinct parallel lines have different y-intercepts.' },
            terms: []
        },
        {
            id: 'key-parallel',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Parallel Lines Rule',
                text: 'Lines ℓ₁ and ℓ₂ are parallel ↔ m₁ = m₂ (and they are distinct lines)'
            },
            terms: []
        },
        {
            id: 'h-perp',
            type: 'heading',
            data: { text: 'Perpendicular Lines', level: 2 },
            terms: []
        },
        {
            id: 'p-perp',
            type: 'paragraph',
            data: { text: 'Two lines are <strong>perpendicular</strong> (meet at 90°) if the product of their gradients is −1. The perpendicular gradient is the <strong>negative reciprocal</strong>: if the original gradient is m, the perpendicular gradient is −1/m.' },
            terms: []
        },
        {
            id: 'key-perp',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Perpendicular Lines Rule',
                text: 'Lines ℓ₁ and ℓ₂ are perpendicular ↔ m₁ × m₂ = −1<br/>i.e.  m₂ = −1/m₁  (negative reciprocal)'
            },
            terms: []
        },
        {
            id: 'worked-perp',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Perpendicular Line',
                text: 'Find the equation of the line perpendicular to y = 3x − 2 that passes through (6, 1).<br/><br/>Gradient of given line: m₁ = 3.<br/>Perpendicular gradient: m₂ = −1/3.<br/>y − 1 = (−1/3)(x − 6)<br/>y − 1 = −x/3 + 2<br/><strong>y = −x/3 + 3</strong>  or  x + 3y − 9 = 0'
            },
            terms: []
        },
        {
            id: 'h-collinear',
            type: 'heading',
            data: { text: 'Collinear Points', level: 2 },
            terms: []
        },
        {
            id: 'p-collinear',
            type: 'paragraph',
            data: { text: 'Three or more points are <strong>collinear</strong> if they all lie on the same straight line. To test: calculate the gradient between two pairs of points. If the gradients are equal and the points share a common coordinate, they are collinear.' },
            terms: []
        },
        {
            id: 'worked-collinear',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Collinear Check',
                text: 'Are A = (1, 2), B = (3, 6), C = (5, 10) collinear?<br/><br/>Gradient AB = (6−2)/(3−1) = 4/2 = 2<br/>Gradient BC = (10−6)/(5−3) = 4/2 = 2<br/>Equal gradients and B is shared → <strong>yes, collinear</strong>.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• To find the perpendicular gradient: <em>flip and negate</em>. Gradient 2/3 → perpendicular −3/2.<br/>• A common error: forgetting the negative sign. Product m₁m₂ = −1, not +1.<br/>• For horizontal lines (m = 0), the perpendicular is a vertical line with undefined gradient.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Parallel: m₁ = m₂. Perpendicular: m₁ × m₂ = −1 (i.e. m₂ = −1/m₁, the negative reciprocal). Collinear points lie on the same line — verify by checking equal gradients between pairs. Flip and negate for perpendicular gradient.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-parallel', prompt: 'State the condition for two lines to be parallel.' },
            { id: 'cue-2', blockId: 'key-perp', prompt: 'State the product condition for perpendicular lines and the perpendicular gradient formula.' },
            { id: 'cue-3', blockId: 'worked-perp', prompt: 'Find the equation of the line through (6, 1) perpendicular to y = 3x − 2.' },
            { id: 'cue-4', blockId: 'worked-collinear', prompt: 'Show that A=(1,2), B=(3,6), C=(5,10) are collinear.' }
        ],
        summaryText: 'Parallel: same gradient. Perpendicular: m₁m₂=−1, so m₂=−1/m₁. Collinear: equal gradients between all pairs of points.',
        ready: true
    },
    evidence: []
};
