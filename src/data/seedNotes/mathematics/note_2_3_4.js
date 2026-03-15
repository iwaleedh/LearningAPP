/**
 * Seed note: Mathematics · WMA12 · Topic 3 · Subtopic 4
 * "Radius and tangent"
 */

export const note_mathematics_2_3_4 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Find the equation of a tangent to a circle at a given point, using the perpendicularity of radius and tangent.' },
            terms: []
        },
        {
            id: 'h-rel',
            type: 'heading',
            data: { text: 'The Relationship between Radius and Tangent', level: 2 },
            terms: []
        },
        {
            id: 'callout-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Theorem: Tangent ⊥ Radius',
                text: 'A tangent to a circle is perpendicular to the radius at the point of contact.\n\nIf the circle has centre O and the tangent touches at point P, then OP ⊥ (tangent at P).\n\nThis means: gradient of radius OP × gradient of tangent = −1.'
            },
            terms: []
        },
        {
            id: 'svg-tangent',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 230" width="300" height="230"><circle cx="120" cy="115" r="75" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><circle cx="120" cy="115" r="4" fill="#10b981"/><circle cx="195" cy="115" r="5" fill="#4f46e5"/><line x1="120" y1="115" x2="195" y2="115" stroke="#10b981" stroke-width="2" stroke-dasharray="5,3"/><line x1="195" y1="40" x2="195" y2="190" stroke="#e11d48" stroke-width="2.5"/><path d="M185,115 L185,105 L195,105" stroke="#374151" stroke-width="1.5" fill="none"/><text x="122" y="111" font-size="12" fill="#10b981" font-family="sans-serif">O</text><text x="199" y="112" font-size="13" fill="#4f46e5" font-family="sans-serif" font-weight="bold">P</text><text x="200" y="55" font-size="12" fill="#e11d48" font-family="sans-serif">tangent</text><text x="126" y="142" font-size="11" fill="#10b981" font-family="sans-serif">radius r</text><text x="30" y="200" font-size="12" fill="#374151" font-family="sans-serif">Tangent ⊥ radius at point P</text></svg>',
                caption: 'The tangent at P is perpendicular to the radius OP'
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Finding the Equation of a Tangent', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Identify the centre O of the circle and the point of tangency P' },
                    { text: 'Find the gradient of the radius OP: m_r = (y_P − y_O)/(x_P − x_O)' },
                    { text: 'The tangent gradient is the negative reciprocal: m_t = −1/m_r' },
                    { text: 'Write the tangent equation using point P: y − y_P = m_t(x − x_P)' }
                ]
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Tangent at a Given Point', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Circle: (x − 3)² + (y + 1)² = 25. Find the tangent at point P(7, 2).',
                text: 'Centre O = (3, −1).\n\nGradient of radius OP = (2 − (−1))/(7 − 3) = 3/4\n\nGradient of tangent = −1/(3/4) = −4/3\n\nTangent equation through P(7, 2):\n  y − 2 = −(4/3)(x − 7)\n  3(y − 2) = −4(x − 7)\n  3y − 6 = −4x + 28\n  4x + 3y − 34 = 0'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Verify a Point is on the Circle First', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Circle: x² + y² − 4x + 2y − 20 = 0. Find the tangent at Q(6, 2).',
                text: 'First verify Q is on the circle:\n  6² + 2² − 4(6) + 2(2) − 20 = 36 + 4 − 24 + 4 − 20 = 0  ✓\n\nFind centre by completing the square:\n  (x−2)² − 4 + (y+1)² − 1 − 20 = 0  →  (x−2)² + (y+1)² = 25\n  Centre = (2, −1)\n\nGradient of radius OQ = (2−(−1))/(6−2) = 3/4\n\nTangent gradient = −4/3\n\nTangent at Q(6, 2):\n  y − 2 = −(4/3)(x − 6)\n  4x + 3y − 30 = 0'
            },
            terms: []
        },
        {
            id: 'h-normal',
            type: 'heading',
            data: { text: 'The Normal to a Circle', level: 2 },
            terms: []
        },
        {
            id: 'p-normal',
            type: 'paragraph',
            data: { text: 'The <strong>normal</strong> at a point on a circle is the line perpendicular to the tangent at that point. Since the tangent is perpendicular to the radius, the normal at P is simply the <strong>line through the centre O and P</strong> (i.e. the radius itself, extended if needed).' },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Special Cases',
                text: 'If the radius is horizontal (gradient = 0), the tangent is vertical: equation x = x_P.\nIf the radius is vertical (gradient undefined), the tangent is horizontal: equation y = y_P.\nAlways check the point is on the circle before finding the tangent — the exam question may include this as a first step.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Tangent to a circle at P: perpendicular to radius OP. Steps: (1) find gradient of radius OP, (2) take negative reciprocal for tangent gradient, (3) use point P to write the tangent equation. Normal at P = line through centre O and P (the radius line).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the relationship between the tangent and radius at the point of contact.' },
            { id: 'c2', blockId: 'list-method', prompt: 'What are the 4 steps to find the equation of a tangent to a circle at a given point?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'For circle (x−3)²+(y+1)²=25, find the tangent at P(7, 2).' },
            { id: 'c4', blockId: 'p-normal', prompt: 'What is the normal to a circle at point P, and how is it related to the radius?' }
        ],
        summaryText: 'Tangent ⊥ radius at point of contact. To find tangent: get radius gradient, negate and reciprocate, write line through P. Normal at P = line through the centre O (the radius extended). Special: horizontal radius → vertical tangent.',
        ready: true
    },
    evidence: []
};
