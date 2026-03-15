/**
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
                text: 'x² + Bx = (x + B/2)² − (B/2)²\n\nExample: x² − 4x = (x − 2)² − 4\n\nThe added constant is always (half the coefficient of x)², and it must be subtracted to keep the expression equal.'
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
                text: 'Rearrange: (x² − 4x) + (y² + 6y) = 3\n\nComplete the square on x: (x − 2)² − 4\nComplete the square on y: (y + 3)² − 9\n\nSubstitute back:\n  (x − 2)² − 4 + (y + 3)² − 9 = 3\n  (x − 2)² + (y + 3)² = 16\n\nCentre = (2, −3),  Radius = √16 = 4'
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
                text: 'Divide every term by 2 first:\n  x² + y² − 4x + 6y + 1 = 0\n\nRearrange: (x² − 4x) + (y² + 6y) = −1\n\nComplete the square:\n  (x − 2)² − 4 + (y + 3)² − 9 = −1\n  (x − 2)² + (y + 3)² = −1 + 4 + 9 = 12\n\nCentre = (2, −3),  Radius = √12 = 2√3'
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
                text: 'Compare with x² + y² + 2fx + 2gy + c = 0:\n  2f = 10  →  f = 5\n  2g = −2  →  g = −1\n  c = −10\n\nCentre = (−f, −g) = (−5, 1)\nRadius = √(f² + g² − c) = √(25 + 1 + 10) = √36 = 6'
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
