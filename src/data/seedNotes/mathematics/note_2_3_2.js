/**
 * Seed note: Mathematics · WMA12 · Topic 3 · Subtopic 2
 * "Angle in a semicircle"
 */

export const note_mathematics_2_3_2 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Apply the angle-in-a-semicircle theorem to solve coordinate geometry problems.' },
            terms: []
        },
        {
            id: 'h-thm',
            type: 'heading',
            data: { text: 'The Angle in a Semicircle Theorem', level: 2 },
            terms: []
        },
        {
            id: 'callout-thm',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Theorem: Angle in a Semicircle = 90°',
                text: 'If PQ is a diameter of a circle and R is any other point on the circle, then angle PRQ = 90°.\n\nEquivalently: if a triangle is inscribed in a circle with one side as the diameter, then the angle opposite the diameter is a right angle.'
            },
            terms: []
        },
        {
            id: 'svg-semicircle',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 230" width="300" height="230"><circle cx="150" cy="130" r="85" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><line x1="65" y1="130" x2="235" y2="130" stroke="#374151" stroke-width="2.5"/><line x1="65" y1="130" x2="150" y2="48" stroke="#4f46e5" stroke-width="2"/><line x1="235" y1="130" x2="150" y2="48" stroke="#4f46e5" stroke-width="2"/><path d="M141,55 L148,62 L155,55" stroke="#e11d48" stroke-width="1.8" fill="none"/><circle cx="65" cy="130" r="5" fill="#374151"/><circle cx="235" cy="130" r="5" fill="#374151"/><circle cx="150" cy="48" r="5" fill="#4f46e5"/><circle cx="150" cy="130" r="4" fill="#10b981"/><text x="50" y="150" font-size="14" fill="#374151" font-family="sans-serif" font-weight="bold">P</text><text x="238" y="150" font-size="14" fill="#374151" font-family="sans-serif" font-weight="bold">Q</text><text x="155" y="44" font-size="14" fill="#4f46e5" font-family="sans-serif" font-weight="bold">R</text><text x="153" y="143" font-size="10" fill="#10b981" font-family="sans-serif">O</text><text x="100" y="178" font-size="12" fill="#e11d48" font-family="sans-serif">∠PRQ = 90°</text><text x="80" y="196" font-size="11" fill="#374151" font-family="sans-serif">PQ is a diameter</text></svg>',
                caption: 'Angle PRQ = 90° whenever PQ is the diameter and R lies on the circle'
            },
            terms: []
        },
        {
            id: 'h-proof',
            type: 'heading',
            data: { text: 'Why is the Angle 90°? (Proof Outline)', level: 2 },
            terms: []
        },
        {
            id: 'p-proof',
            type: 'paragraph',
            data: { text: 'Let the circle have centre O (midpoint of diameter PQ) and R be any point on the circle. Since OP = OR = OQ = r (all radii), triangles OPR and OQR are both isosceles. Using angle properties of isosceles triangles and the angle sum in triangle PRQ, we can show that angle PRQ = 90°. (Full vector proof: let O be origin, then <strong>RP · RQ = 0</strong> implies perpendicularity.)' },
            terms: []
        },
        {
            id: 'h-use',
            type: 'heading',
            data: { text: 'Using the Theorem in Coordinate Problems', level: 2 },
            terms: []
        },
        {
            id: 'p-use',
            type: 'paragraph',
            data: { text: 'To show that angle PRQ = 90° (i.e. that P, R, Q lie on a circle with PQ as diameter), show that <strong>RP ⊥ RQ</strong> — i.e. the dot product of vectors RP̄ and RQ̄ is zero, or equivalently that the gradient of RP × gradient of RQ = −1.' },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Verify a Point Lies on a Semicircle', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'P = (−3, 2), Q = (5, 2), R = (1, 6). Show angle PRQ = 90°.',
                text: 'Find gradients of PR and QR:\n\nGradient of PR = (6 − 2)/(1 − (−3)) = 4/4 = 1\nGradient of QR = (6 − 2)/(1 − 5) = 4/(−4) = −1\n\nProduct of gradients = 1 × (−1) = −1  ✓\n\nSince the gradients multiply to −1, PR ⊥ QR, so angle PRQ = 90°.\n\nThis confirms R lies on the circle with diameter PQ. □'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Find the Circle Equation from a Diameter', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'The endpoints of a diameter are A(1, 3) and B(7, −1). Find the circle equation.',
                text: 'Centre = midpoint of AB = ((1+7)/2, (3+(−1))/2) = (4, 1)\n\nRadius = distance from centre to A:\n  r = √((4−1)² + (1−3)²) = √(9 + 4) = √13\n\nEquation: (x − 4)² + (y − 1)² = 13'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Strategy',
                text: 'In exam questions: if you are told a diameter has endpoints, the centre is the MIDPOINT. If asked to show a triangle inscribed in a circle is right-angled, show the hypotenuse equals the diameter, or show the two shorter sides are perpendicular at the vertex opposite the hypotenuse.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Angle in a semicircle = 90°: if PQ is a diameter and R is on the circle, angle PRQ = 90°. To verify: show RP ⊥ RQ (product of gradients = −1, or dot product = 0). To find circle from diameter endpoints: use midpoint for centre, half-length of diameter for radius.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-thm', prompt: 'State the angle-in-a-semicircle theorem.' },
            { id: 'c2', blockId: 'p-use', prompt: 'How do you show that angle PRQ = 90° using coordinate geometry?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Show that P=(−3,2), Q=(5,2), R=(1,6) form a right angle at R.' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'If A(1,3) and B(7,−1) are endpoints of a diameter, what is the circle equation?' }
        ],
        summaryText: 'Angle in a semicircle = 90°: if PQ is diameter and R is on circle, angle PRQ = 90°. Verify by checking gradient(PR) × gradient(QR) = −1. Find circle: centre = midpoint of diameter, r = half the diameter length.',
        ready: true
    },
    evidence: []
};
