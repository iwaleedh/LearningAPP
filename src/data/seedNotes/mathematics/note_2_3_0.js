/**
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
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 240" width="280" height="240"><defs><marker id="ah52" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><line x1="20" y1="120" x2="265" y2="120" stroke="#374151" stroke-width="1.5" marker-end="url(#ah52)"/><line x1="140" y1="230" x2="140" y2="12" stroke="#374151" stroke-width="1.5" marker-end="url(#ah52)"/><text x="268" y="124" font-size="13" fill="#374151" font-family="serif" font-style="italic">x</text><text x="136" y="10" font-size="13" fill="#374151" font-family="serif" font-style="italic">y</text><circle cx="140" cy="115" r="72" fill="#2d2d72" stroke="#4f46e5" stroke-width="2.5"/><circle cx="140" cy="115" r="4" fill="#4f46e5"/><line x1="140" y1="115" x2="210" y2="92" stroke="#10b981" stroke-width="2" stroke-dasharray="6,3"/><circle cx="210" cy="92" r="4" fill="#10b981"/><text x="148" y="111" font-size="12" fill="#4f46e5" font-family="sans-serif" font-style="italic">(a, b)</text><text x="172" y="97" font-size="13" fill="#10b981" font-family="sans-serif" font-style="italic">r</text><text x="213" y="89" font-size="11" fill="#374151" font-family="sans-serif" font-style="italic">(x, y)</text><text x="50" y="218" font-size="13" fill="#4f46e5" font-family="sans-serif">(x−a)² + (y−b)² = r²</text></svg>',
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
                text: 'Substituting a = 3, b = −2, r = 5 into (x − a)² + (y − b)² = r²:\n\n(x − 3)² + (y − (−2))² = 5²\n(x − 3)² + (y + 2)² = 25\n\nExpanding to general form:\nx² − 6x + 9 + y² + 4y + 4 = 25\nx² + y² − 6x + 4y − 12 = 0'
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
                text: 'Compare with x² + y² + 2fx + 2gy + c = 0:\n  2f = −6  →  f = −3\n  2g = 4   →  g = 2\n  c = −12\n\nCentre = (−f, −g) = (3, −2)\nRadius = √(f² + g² − c) = √(9 + 4 + 12) = √25 = 5'
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
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Remember that the standard circle equation requires (x-a)^2 + (y-b)^2 = r^2 to have coefficients of 1 for the squared terms. If the coefficients of x^2 and y^2 are anything else, you must divide the entire equation by that number first."
            },
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
