/**
 * Seed note: Mathematics · Unit 1 · Topic 2 · Subtopic 1
 * "Equation of a straight line"
 */

export const note_mathematics_1_2_1 = {
    pdfPath: '/notes/mathematics/coordinate-geometry/equation-of-a-straight-line.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Write the equation of a straight line in the forms y = mx + c and y − y₁ = m(x − x₁); convert between forms; find the equation of a line from given information.' },
            terms: []
        },
        {
            id: 'h-forms',
            type: 'heading',
            data: { text: 'Forms of a Straight Line Equation', level: 2 },
            terms: []
        },
        {
            id: 'table-forms',
            type: 'comparisonTable',
            data: {
                headers: ['Form', 'Equation', 'When to use'],
                rows: [
                    ['Slope-intercept', 'y = mx + c', 'When m and y-intercept c are known'],
                    ['Point-slope', 'y − y₁ = m(x − x₁)', 'When gradient m and a point (x₁, y₁) are known'],
                    ['General', 'ax + by + c = 0', 'To present answer with integer coefficients']
                ],
                caption: 'Three equivalent forms of the straight line equation'
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Finding the Equation of a Line', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: '<strong>Find the gradient m</strong>: use m = (y₂−y₁)/(x₂−x₁) if given two points.' },
                    { text: '<strong>Use point-slope form</strong>: substitute m and one known point into y − y₁ = m(x − x₁).' },
                    { text: '<strong>Rearrange</strong> into the required form (y = mx + c or ax + by + c = 0).' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — From Two Points',
                text: 'Find the equation of the line through (2, 1) and (5, 7).<br/><br/>m = (7−1)/(5−2) = 6/3 = 2<br/>y − 1 = 2(x − 2)<br/>y − 1 = 2x − 4<br/><strong>y = 2x − 3</strong>'
            },
            terms: []
        },
        {
            id: 'worked-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — General Form',
                text: 'Express the line through (3, −1) with gradient 1/2 in the form ax + by + c = 0 with integer coefficients.<br/><br/>y − (−1) = (1/2)(x − 3)<br/>y + 1 = (1/2)x − 3/2<br/>Multiply by 2: 2y + 2 = x − 3<br/><strong>x − 2y − 5 = 0</strong>'
            },
            terms: []
        },
        {
            id: 'h-special',
            type: 'heading',
            data: { text: 'Special Cases', level: 2 },
            terms: []
        },
        {
            id: 'table-special',
            type: 'comparisonTable',
            data: {
                headers: ['Line type', 'Equation', 'Gradient'],
                rows: [
                    ['Horizontal', 'y = k (constant)', 'm = 0'],
                    ['Vertical', 'x = k (constant)', 'undefined'],
                    ['Through origin', 'y = mx', 'c = 0']
                ],
                caption: 'Special straight line cases'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• When given two points, <em>always</em> calculate gradient first, then use point-slope form.<br/>• "Find the equation" often just means rearranging into y = mx + c — show your working clearly.<br/>• A sketch will help you check whether your gradient sign is correct.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Straight line equations: y = mx + c (slope-intercept) or y − y₁ = m(x − x₁) (point-slope). To find the equation: calculate gradient → apply point-slope → rearrange. Vertical lines: x = k; horizontal lines: y = k.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When asked for the equation in the form ax + by + c = 0, ensure a, b, and c are integers. Leaving fractions in your final answer will cost you the final accuracy mark."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'table-forms', prompt: 'State three forms of a straight line equation and when to use each.' },
            { id: 'cue-2', blockId: 'worked-1', prompt: 'Find the equation of the line through (2, 1) and (5, 7).' },
            { id: 'cue-3', blockId: 'worked-2', prompt: 'Write the line through (3, −1) with gradient 1/2 in the form ax + by + c = 0.' },
            { id: 'cue-4', blockId: 'table-special', prompt: 'What is the equation of a vertical line through x = 4?' }
        ],
        summaryText: 'y=mx+c (when c known); y−y₁=m(x−x₁) (when a point known). Calculate m first, then substitute. ax+by+c=0 needs integer coefficients.',
        ready: true
    },
    evidence: []
};
