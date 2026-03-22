/**
 * Seed note: Mathematics · WMA12 · Topic 3 · Subtopic 3
 * "Bisection of chords"
 */

export const note_mathematics_2_3_3 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Find the perpendicular bisector of a chord and use the bisection property to locate the centre of a circle.' },
            terms: []
        },
        {
            id: 'h-prop',
            type: 'heading',
            data: { text: 'The Chord Bisection Property', level: 2 },
            terms: []
        },
        {
            id: 'callout-prop',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Theorem: The Centre Bisects Every Chord Perpendicularly',
                text: 'The perpendicular from the centre of a circle to any chord bisects the chord.\n\nEquivalently: the perpendicular bisector of any chord passes through the centre of the circle.\n\nThis gives a method for finding the centre: draw two chords, find the perpendicular bisector of each — they intersect at the centre.'
            },
            terms: []
        },
        {
            id: 'svg-chord',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="300" height="250"><circle cx="150" cy="125" r="85" fill="#2d2d72" stroke="#4f46e5" stroke-width="2"/><line x1="68" y1="155" x2="232" y2="95" stroke="#374151" stroke-width="2.5"/><circle cx="150" cy="125" r="5" fill="#10b981"/><circle cx="68" cy="155" r="4" fill="#374151"/><circle cx="232" cy="95" r="4" fill="#374151"/><circle cx="150" cy="125" r="3" fill="#4f46e5"/><line x1="150" y1="125" x2="150" y2="125" stroke="none"/><line x1="130" y1="78" x2="170" y2="172" stroke="#e11d48" stroke-width="1.8" stroke-dasharray="6,3"/><circle cx="150" cy="125" r="3.5" fill="#10b981"/><path d="M144,125 L144,119 L150,119" stroke="#374151" stroke-width="1.5" fill="none"/><text x="55" y="170" font-size="13" fill="#374151" font-family="sans-serif" font-weight="bold">A</text><text x="234" y="92" font-size="13" fill="#374151" font-family="sans-serif" font-weight="bold">B</text><text x="154" y="122" font-size="12" fill="#10b981" font-family="sans-serif">O</text><text x="155" y="145" font-size="11" fill="#e11d48" font-family="sans-serif">perp. bisector</text><text x="60" y="220" font-size="11" fill="#374151" font-family="sans-serif">Midpoint M of chord AB</text><text x="60" y="234" font-size="11" fill="#374151" font-family="sans-serif">OM ⊥ AB and OM passes through centre</text></svg>',
                caption: 'Perpendicular from centre O meets chord AB at its midpoint'
            },
            terms: []
        },
        {
            id: 'h-perp-bisect',
            type: 'heading',
            data: { text: 'Finding the Perpendicular Bisector of a Line Segment', level: 2 },
            terms: []
        },
        {
            id: 'list-pb',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Find the <strong>midpoint</strong> M of the chord: M = ((x₁+x₂)/2, (y₁+y₂)/2)' },
                    { text: 'Find the gradient of the chord: m = (y₂−y₁)/(x₂−x₁)' },
                    { text: 'The perpendicular bisector has gradient <strong>−1/m</strong> (negative reciprocal)' },
                    { text: 'Use point-slope form: y − y_M = (−1/m)(x − x_M) to write the perpendicular bisector equation' }
                ]
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Find the Perpendicular Bisector', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the perpendicular bisector of chord with endpoints A(2, 6) and B(8, 2)',
                text: 'Step 1: Midpoint M = ((2+8)/2, (6+2)/2) = (5, 4)\n\nStep 2: Gradient of AB = (2−6)/(8−2) = −4/6 = −2/3\n\nStep 3: Gradient of perpendicular bisector = −1/(−2/3) = 3/2\n\nStep 4: Equation through (5, 4) with gradient 3/2:\n  y − 4 = (3/2)(x − 5)\n  2y − 8 = 3x − 15\n  3x − 2y − 7 = 0\n\nThe perpendicular bisector of AB is 3x − 2y − 7 = 0.'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Find the Centre Using Two Chords', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'A circle passes through P(0, 3), Q(4, 7) and R(8, 3). Find the centre.',
                text: 'The centre lies on the perp. bisector of PQ and on the perp. bisector of QR.\n\nPerp. bisector of PQ:\n  Midpoint = (2, 5), gradient of PQ = (7−3)/(4−0) = 1\n  Perp. gradient = −1\n  Line: y − 5 = −1(x − 2)  →  y = −x + 7  … (1)\n\nPerp. bisector of QR:\n  Midpoint = (6, 5), gradient of QR = (3−7)/(8−4) = −1\n  Perp. gradient = 1\n  Line: y − 5 = 1(x − 6)  →  y = x − 1  … (2)\n\nSolve simultaneously: −x + 7 = x − 1  →  2x = 8  →  x = 4\ny = 4 − 1 = 3.\n\nCentre = (4, 3).\nRadius = distance from (4,3) to P(0,3) = 4.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'When finding the centre from three points, always use TWO pairs (giving two perpendicular bisectors) and solve simultaneously. You can then verify using the third point. The perpendicular bisector of a chord is its axis of symmetry — it always passes through the centre.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'The perpendicular bisector of any chord passes through the centre. To find it: (1) find midpoint of chord, (2) find gradient of chord, (3) negate-and-flip the gradient, (4) write line equation through midpoint. To find the circle centre from three points: find two perpendicular bisectors and solve them simultaneously.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Examiners often test your understanding that the perpendicular bisector of any chord passes through the centre. You may need to set up simultaneous equations of two such bisectors to find the intersecting centre coordinates."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-prop', prompt: 'State the chord bisection theorem. What geometry does the perpendicular bisector of a chord pass through?' },
            { id: 'c2', blockId: 'list-pb', prompt: 'What are the four steps to find the perpendicular bisector of a segment?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Find the perpendicular bisector of the chord joining A(2,6) and B(8,2).' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'How do you find the centre of a circle that passes through three given points?' }
        ],
        summaryText: 'Perpendicular bisector of any chord passes through the centre. Steps: midpoint, chord gradient, neg-reciprocal gradient, line equation. To find centre from 3 points: two perpendicular bisectors, solve simultaneously.',
        ready: true
    },
    evidence: []
};
