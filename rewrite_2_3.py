import os

BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'

# ─── note_2_3_0: Equation of a circle ────────────────────────────────────────
note_2_3_0 = """/**
 * Seed note: Mathematics · WMA12 · Topic 3 · Subtopic 0
 * "Equation of a circle"
 */

export const note_mathematics_2_3_0 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Write and use the equation of a circle in both standard form and general form.' },
            terms: []
        },
        {
            id: 'h-std',
            type: 'heading',
            data: { text: 'Standard Form of the Equation of a Circle', level: 2 },
            terms: []
        },
        {
            id: 'p-std',
            type: 'paragraph',
            data: { text: 'A circle with centre <strong>(a, b)</strong> and radius <strong>r</strong> consists of all points (x, y) at distance r from the centre. By the distance formula, this gives the equation:' },
            terms: []
        },
        {
            id: 'eq-std',
            type: 'equation',
            data: {
                html: '(x − a)² + (y − b)² = r²',
                caption: 'Standard (centre–radius) form — centre (a, b), radius r'
            },
            terms: []
        },
        {
            id: 'svg-circle',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 240" width="280" height="240"><defs><marker id="ah52" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><line x1="20" y1="120" x2="265" y2="120" stroke="#374151" stroke-width="1.5" marker-end="url(#ah52)"/><line x1="140" y1="230" x2="140" y2="12" stroke="#374151" stroke-width="1.5" marker-end="url(#ah52)"/><text x="268" y="124" font-size="13" fill="#374151" font-family="serif" font-style="italic">x</text><text x="136" y="10" font-size="13" fill="#374151" font-family="serif" font-style="italic">y</text><circle cx="140" cy="115" r="72" fill="#eef2ff" stroke="#4f46e5" stroke-width="2.5"/><circle cx="140" cy="115" r="4" fill="#4f46e5"/><line x1="140" y1="115" x2="210" y2="92" stroke="#10b981" stroke-width="2" stroke-dasharray="6,3"/><circle cx="210" cy="92" r="4" fill="#10b981"/><text x="148" y="111" font-size="12" fill="#4f46e5" font-family="sans-serif" font-style="italic">(a, b)</text><text x="172" y="97" font-size="13" fill="#10b981" font-family="sans-serif" font-style="italic">r</text><text x="213" y="89" font-size="11" fill="#374151" font-family="sans-serif" font-style="italic">(x, y)</text><text x="50" y="218" font-size="13" fill="#4f46e5" font-family="sans-serif">(x−a)² + (y−b)² = r²</text></svg>',
                caption: 'Circle with centre (a, b) and radius r'
            },
            terms: []
        },
        {
            id: 'h-key',
            type: 'heading',
            data: { text: 'Key Features', level: 2 },
            terms: []
        },
        {
            id: 'list-key',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Centre <strong>(a, b)</strong>: the point equidistant from all points on the circle' },
                    { text: 'Radius <strong>r</strong>: the common distance from the centre to any point on the circle (r > 0)' },
                    { text: 'The equation gives r² (not r) on the right-hand side — take the square root to find the radius' },
                    { text: 'Special case: centre at origin (0, 0) gives x² + y² = r²' }
                ]
            },
            terms: []
        },
        {
            id: 'h-general',
            type: 'heading',
            data: { text: 'General Form', level: 2 },
            terms: []
        },
        {
            id: 'p-general',
            type: 'paragraph',
            data: { text: 'Expanding the standard form and rearranging gives the <strong>general form</strong>:' },
            terms: []
        },
        {
            id: 'eq-general',
            type: 'equation',
            data: {
                html: 'x² + y² + 2fx + 2gy + c = 0',
                caption: 'General form (expand standard form and collect terms)'
            },
            terms: []
        },
        {
            id: 'p-general2',
            type: 'paragraph',
            data: { text: 'In the general form, the centre is <strong>(−f, −g)</strong> and the radius is <strong>r = √(f² + g² − c)</strong>, provided f² + g² − c > 0. If f² + g² − c = 0 the "circle" is a single point; if negative, no real circle exists.' },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Write the Equation of a Circle', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Write the equation of a circle with centre (3, −2) and radius 5',
                text: 'Substituting a = 3, b = −2, r = 5 into (x − a)² + (y − b)² = r²:\\n\\n(x − 3)² + (y − (−2))² = 5²\\n(x − 3)² + (y + 2)² = 25\\n\\nExpanding to general form:\\nx² − 6x + 9 + y² + 4y + 4 = 25\\nx² + y² − 6x + 4y − 12 = 0'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: From General Form to Standard Form', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Identify the centre and radius of x² + y² − 6x + 4y − 12 = 0',
                text: 'Compare with x² + y² + 2fx + 2gy + c = 0:\\n  2f = −6  →  f = −3\\n  2g = 4   →  g = 2\\n  c = −12\\n\\nCentre = (−f, −g) = (3, −2)\\nRadius = √(f² + g² − c) = √(9 + 4 + 12) = √25 = 5'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip: Coefficient of x² and y²',
                text: 'The standard form requires the coefficients of x² and y² to both be 1. If the equation has 2x² + 2y² + … then DIVIDE every term by 2 first before extracting the centre and radius.'
            },
            terms: []
        },
        {
            id: 'h-check',
            type: 'heading',
            data: { text: 'Checking if a Point is on the Circle', level: 2 },
            terms: []
        },
        {
            id: 'p-check',
            type: 'paragraph',
            data: { text: 'To check whether point (p, q) is on the circle (x−a)² + (y−b)² = r², substitute x = p and y = q. If the LHS equals r², the point lies on the circle. If LHS < r², the point is inside; if LHS > r², the point is outside.' },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Equation of a circle: (x−a)² + (y−b)² = r² (standard form), centre (a,b), radius r. General form: x² + y² + 2fx + 2gy + c = 0, centre (−f, −g), r = √(f²+g²−c). Always check coefficient of x² and y² is 1. Test points: substitute into LHS and compare to r².' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-std', prompt: 'State the equation of a circle with centre (a, b) and radius r.' },
            { id: 'c2', blockId: 'eq-general', prompt: 'What is the general form of a circle equation? What are the centre and radius in terms of f, g, c?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Write the equation of a circle with centre (3, −2) and radius 5.' },
            { id: 'c4', blockId: 'p-check', prompt: 'If point (p, q) gives LHS < r² when substituted, is the point inside, outside or on the circle?' },
            { id: 'c5', blockId: 'callout-tip', prompt: 'What must you do first if the circle equation has coefficients 2 on the x² and y² terms?' }
        ],
        summaryText: 'Circle equation: (x−a)²+(y−b)²=r², centre (a,b), radius r. General form: x²+y²+2fx+2gy+c=0, centre (−f,−g), r=√(f²+g²−c). Test if point is on/inside/outside by substituting into LHS and comparing with r².',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_3_1: Finding centre and radius ────────────────────────────────────
note_2_3_1 = """/**
 * Seed note: Mathematics · WMA12 · Topic 3 · Subtopic 1
 * "Finding the centre and radius"
 */

export const note_mathematics_2_3_1 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Use completing the square to find the centre and radius of a circle given in general form.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'The General Form and How to Rearrange it', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'The general form of a circle equation is x² + y² + 2fx + 2gy + c = 0. To find the centre and radius, rearrange it into the standard form (x − a)² + (y − b)² = r² by <strong>completing the square</strong> on the x terms and the y terms separately.' },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Method: Completing the Square for a Circle', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Group the x terms together and the y terms together: (x² + Bx) + (y² + Dy) = −c' },
                    { text: 'Complete the square on x: x² + Bx = (x + B/2)² − (B/2)²' },
                    { text: 'Complete the square on y: y² + Dy = (y + D/2)² − (D/2)²' },
                    { text: 'Rearrange so the completed squares are on the left and the constant is on the right' },
                    { text: 'Read off: centre = (−B/2, −D/2) and r² = constant on the RHS' }
                ]
            },
            terms: []
        },
        {
            id: 'callout-cts',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Completing the Square Reminder',
                text: 'x² + Bx = (x + B/2)² − (B/2)²\\n\\nExample: x² − 4x = (x − 2)² − 4\\n\\nThe added constant is always (half the coefficient of x)², and it must be subtracted to keep the expression equal.'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Standard Case', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the centre and radius of x² + y² − 4x + 6y − 3 = 0',
                text: 'Rearrange: (x² − 4x) + (y² + 6y) = 3\\n\\nComplete the square on x: (x − 2)² − 4\\nComplete the square on y: (y + 3)² − 9\\n\\nSubstitute back:\\n  (x − 2)² − 4 + (y + 3)² − 9 = 3\\n  (x − 2)² + (y + 3)² = 16\\n\\nCentre = (2, −3),  Radius = √16 = 4'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Non-unit Leading Coefficient', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the centre and radius of 2x² + 2y² − 8x + 12y + 2 = 0',
                text: 'Divide every term by 2 first:\\n  x² + y² − 4x + 6y + 1 = 0\\n\\nRearrange: (x² − 4x) + (y² + 6y) = −1\\n\\nComplete the square:\\n  (x − 2)² − 4 + (y + 3)² − 9 = −1\\n  (x − 2)² + (y + 3)² = −1 + 4 + 9 = 12\\n\\nCentre = (2, −3),  Radius = √12 = 2√3'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Using the General Form Formula', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the centre and radius of x² + y² + 10x − 2y − 10 = 0 (using f, g, c)',
                text: 'Compare with x² + y² + 2fx + 2gy + c = 0:\\n  2f = 10  →  f = 5\\n  2g = −2  →  g = −1\\n  c = −10\\n\\nCentre = (−f, −g) = (−5, 1)\\nRadius = √(f² + g² − c) = √(25 + 1 + 10) = √36 = 6'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Signs to Watch Out For',
                text: 'Be extra careful with signs when reading the centre. In (x − a)² = (x − 3)², the centre x-coordinate is +3. In (x + 2)², which equals (x − (−2))², the centre x-coordinate is −2. The centre coordinates have OPPOSITE signs to the numbers inside the brackets.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'To find centre and radius from general form: (1) ensure coefficients of x² and y² are both 1 (divide through if needed), (2) complete the square on both x and y terms, (3) rearrange to (x−a)²+(y−b)²=r² form, (4) read off centre (a,b) and r=√(RHS). Alternatively use the formula: centre=(−f,−g), r=√(f²+g²−c).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-method', prompt: 'List the steps for converting a general-form circle equation to standard form.' },
            { id: 'c2', blockId: 'callout-cts', prompt: 'How do you complete the square on x² + Bx? What constant do you add and subtract?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Find the centre and radius of x² + y² − 4x + 6y − 3 = 0.' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'What must you do first if the equation is 2x² + 2y² − 8x + 12y + 2 = 0?' },
            { id: 'c5', blockId: 'callout-tip', prompt: 'The equation gives (x + 2)². What is the x-coordinate of the centre?' }
        ],
        summaryText: 'Complete the square on x and y separately to reach (x−a)²+(y−b)²=r². Half the coefficient of x gives the shift: x²+Bx=(x+B/2)²−(B/2)². Divide through by the leading coefficient first if it is not 1. Centre signs are OPPOSITE to those in the brackets.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_3_2: Angle in a semicircle ───────────────────────────────────────
note_2_3_2 = """/**
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
                text: 'If PQ is a diameter of a circle and R is any other point on the circle, then angle PRQ = 90°.\\n\\nEquivalently: if a triangle is inscribed in a circle with one side as the diameter, then the angle opposite the diameter is a right angle.'
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
                text: 'Find gradients of PR and QR:\\n\\nGradient of PR = (6 − 2)/(1 − (−3)) = 4/4 = 1\\nGradient of QR = (6 − 2)/(1 − 5) = 4/(−4) = −1\\n\\nProduct of gradients = 1 × (−1) = −1  ✓\\n\\nSince the gradients multiply to −1, PR ⊥ QR, so angle PRQ = 90°.\\n\\nThis confirms R lies on the circle with diameter PQ. □'
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
                text: 'Centre = midpoint of AB = ((1+7)/2, (3+(−1))/2) = (4, 1)\\n\\nRadius = distance from centre to A:\\n  r = √((4−1)² + (1−3)²) = √(9 + 4) = √13\\n\\nEquation: (x − 4)² + (y − 1)² = 13'
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
"""

# ─── note_2_3_3: Bisection of chords ─────────────────────────────────────────
note_2_3_3 = """/**
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
                text: 'The perpendicular from the centre of a circle to any chord bisects the chord.\\n\\nEquivalently: the perpendicular bisector of any chord passes through the centre of the circle.\\n\\nThis gives a method for finding the centre: draw two chords, find the perpendicular bisector of each — they intersect at the centre.'
            },
            terms: []
        },
        {
            id: 'svg-chord',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="300" height="250"><circle cx="150" cy="125" r="85" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><line x1="68" y1="155" x2="232" y2="95" stroke="#374151" stroke-width="2.5"/><circle cx="150" cy="125" r="5" fill="#10b981"/><circle cx="68" cy="155" r="4" fill="#374151"/><circle cx="232" cy="95" r="4" fill="#374151"/><circle cx="150" cy="125" r="3" fill="#4f46e5"/><line x1="150" y1="125" x2="150" y2="125" stroke="none"/><line x1="130" y1="78" x2="170" y2="172" stroke="#e11d48" stroke-width="1.8" stroke-dasharray="6,3"/><circle cx="150" cy="125" r="3.5" fill="#10b981"/><path d="M144,125 L144,119 L150,119" stroke="#374151" stroke-width="1.5" fill="none"/><text x="55" y="170" font-size="13" fill="#374151" font-family="sans-serif" font-weight="bold">A</text><text x="234" y="92" font-size="13" fill="#374151" font-family="sans-serif" font-weight="bold">B</text><text x="154" y="122" font-size="12" fill="#10b981" font-family="sans-serif">O</text><text x="155" y="145" font-size="11" fill="#e11d48" font-family="sans-serif">perp. bisector</text><text x="60" y="220" font-size="11" fill="#374151" font-family="sans-serif">Midpoint M of chord AB</text><text x="60" y="234" font-size="11" fill="#374151" font-family="sans-serif">OM ⊥ AB and OM passes through centre</text></svg>',
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
                text: 'Step 1: Midpoint M = ((2+8)/2, (6+2)/2) = (5, 4)\\n\\nStep 2: Gradient of AB = (2−6)/(8−2) = −4/6 = −2/3\\n\\nStep 3: Gradient of perpendicular bisector = −1/(−2/3) = 3/2\\n\\nStep 4: Equation through (5, 4) with gradient 3/2:\\n  y − 4 = (3/2)(x − 5)\\n  2y − 8 = 3x − 15\\n  3x − 2y − 7 = 0\\n\\nThe perpendicular bisector of AB is 3x − 2y − 7 = 0.'
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
                text: 'The centre lies on the perp. bisector of PQ and on the perp. bisector of QR.\\n\\nPerp. bisector of PQ:\\n  Midpoint = (2, 5), gradient of PQ = (7−3)/(4−0) = 1\\n  Perp. gradient = −1\\n  Line: y − 5 = −1(x − 2)  →  y = −x + 7  … (1)\\n\\nPerp. bisector of QR:\\n  Midpoint = (6, 5), gradient of QR = (3−7)/(8−4) = −1\\n  Perp. gradient = 1\\n  Line: y − 5 = 1(x − 6)  →  y = x − 1  … (2)\\n\\nSolve simultaneously: −x + 7 = x − 1  →  2x = 8  →  x = 4\\ny = 4 − 1 = 3.\\n\\nCentre = (4, 3).\\nRadius = distance from (4,3) to P(0,3) = 4.'
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
"""

# ─── note_2_3_4: Radius and tangent ──────────────────────────────────────────
note_2_3_4 = """/**
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
                text: 'A tangent to a circle is perpendicular to the radius at the point of contact.\\n\\nIf the circle has centre O and the tangent touches at point P, then OP ⊥ (tangent at P).\\n\\nThis means: gradient of radius OP × gradient of tangent = −1.'
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
                text: 'Centre O = (3, −1).\\n\\nGradient of radius OP = (2 − (−1))/(7 − 3) = 3/4\\n\\nGradient of tangent = −1/(3/4) = −4/3\\n\\nTangent equation through P(7, 2):\\n  y − 2 = −(4/3)(x − 7)\\n  3(y − 2) = −4(x − 7)\\n  3y − 6 = −4x + 28\\n  4x + 3y − 34 = 0'
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
                text: 'First verify Q is on the circle:\\n  6² + 2² − 4(6) + 2(2) − 20 = 36 + 4 − 24 + 4 − 20 = 0  ✓\\n\\nFind centre by completing the square:\\n  (x−2)² − 4 + (y+1)² − 1 − 20 = 0  →  (x−2)² + (y+1)² = 25\\n  Centre = (2, −1)\\n\\nGradient of radius OQ = (2−(−1))/(6−2) = 3/4\\n\\nTangent gradient = −4/3\\n\\nTangent at Q(6, 2):\\n  y − 2 = −(4/3)(x − 6)\\n  4x + 3y − 30 = 0'
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
                text: 'If the radius is horizontal (gradient = 0), the tangent is vertical: equation x = x_P.\\nIf the radius is vertical (gradient undefined), the tangent is horizontal: equation y = y_P.\\nAlways check the point is on the circle before finding the tangent — the exam question may include this as a first step.'
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
"""

files = {
    'note_2_3_0.js': note_2_3_0,
    'note_2_3_1.js': note_2_3_1,
    'note_2_3_2.js': note_2_3_2,
    'note_2_3_3.js': note_2_3_3,
    'note_2_3_4.js': note_2_3_4,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w') as f:
        f.write(content.lstrip('\n'))
    print(f'Written: {filename}')

print('Topic 3 (Coordinate Geometry) — all 5 notes done.')
