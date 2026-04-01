/**
 * Seed note: Mathematics · WMA12 · Topic 7 · Subtopic 6
 * "Stationary points and the second derivative"
 */

export const note_mathematics_2_7_6 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Find and classify stationary points using the second derivative test, and use calculus to solve optimisation problems.' },
            terms: []
        },
        {
            id: 'h-stat',
            type: 'heading',
            data: { text: 'Stationary Points', level: 2 },
            terms: []
        },
        {
            id: 'callout-key-stat',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Finding and Classifying Stationary Points',
                text: 'A stationary point occurs where dy/dx = 0.\n\nTo classify using the second derivative:\n  • d²y/dx² < 0 → local maximum (curve concave down)\n  • d²y/dx² > 0 → local minimum (curve concave up)\n  • d²y/dx² = 0 → inconclusive — use the sign-of-gradient method\n\nSign-of-gradient method: check the sign of dy/dx just before and just after the point:\n  neg → 0 → pos:  minimum\n  pos → 0 → neg:  maximum\n  no sign change:  point of inflection'
            },
            terms: []
        },
        {
            id: 'svg-stationary',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 160" width="340" height="160"><defs><marker id="ah66" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#374151"/></marker></defs><line x1="20" y1="130" x2="320" y2="130" stroke="#374151" stroke-width="1.2" marker-end="url(#ah66)"/><line x1="30" y1="10" x2="30" y2="135" stroke="#374151" stroke-width="1.2" marker-end="url(#ah66)"/><path d="M40,110 C70,110 90,20 120,20 C150,20 160,95 190,95 C220,95 240,15 270,15 C290,15 300,40 310,60" stroke="#2563eb" stroke-width="2" fill="none"/><circle cx="120" cy="20" r="4" fill="#10b981"/><circle cx="190" cy="95" r="4" fill="#ef4444"/><text x="110" y="14" font-size="11" fill="#10b981" font-family="sans-serif">max</text><text x="180" y="110" font-size="11" fill="#ef4444" font-family="sans-serif">min</text><text x="252" y="11" font-size="11" fill="#10b981" font-family="sans-serif">max</text><circle cx="270" cy="15" r="4" fill="#10b981"/><text x="35" y="12" font-size="11" fill="#374151" font-family="sans-serif">y</text><text x="315" y="142" font-size="11" fill="#374151" font-family="sans-serif">x</text><text x="100" y="148" font-size="10" fill="#2563eb" font-family="sans-serif">dy/dx = 0 at each circled point</text></svg>',
                caption: 'Local maxima (green) and minima (red) — stationary points where dy/dx = 0'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Finding Stationary Points', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find and classify the stationary points of y = 2x³ − 9x² + 12x − 4.',
                text: 'dy/dx = 6x² − 18x + 12 = 6(x² − 3x + 2) = 6(x−1)(x−2)\n\nSet dy/dx = 0: x = 1 or x = 2\n\nd²y/dx² = 12x − 18\n\nAt x = 1: d²y/dx² = 12 − 18 = −6 < 0  → local maximum\n  y = 2 − 9 + 12 − 4 = 1.  Maximum at (1, 1).\n\nAt x = 2: d²y/dx² = 24 − 18 = 6 > 0  → local minimum\n  y = 16 − 36 + 24 − 4 = 0.  Minimum at (2, 0).'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Optimisation', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'A rectangle has perimeter 40 cm. Find the dimensions that maximise its area.',
                text: 'Let length = x, width = (20 − x)  [since 2x + 2w = 40]\nArea A = x(20 − x) = 20x − x²\n\ndA/dx = 20 − 2x = 0  →  x = 10\nd²A/dx² = −2 < 0  → maximum  ✓\n\nWidth = 20 − 10 = 10 cm.  Square with side 10 cm has maximum area 100 cm².'
            },
            terms: []
        },
        {
            id: 'callout-inflection',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Points of Inflection',
                text: 'A point of inflection is where the curve changes concavity (from concave up to concave down or vice versa).\n\nNecessary condition: d²y/dx² = 0\nBut this is NOT sufficient — also need d²y/dx² to change sign through the point.\n\nA stationary point of inflection additionally has dy/dx = 0.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Optimisation Strategy',
                text: '1. Define variables and write the objective function (what you are maximising/minimising).\n2. Use any constraint to express in terms of one variable.\n3. Differentiate and set equal to zero.\n4. Verify it is a max/min using the second derivative.\n5. Answer the question fully — state the value of x and the quantity you were asked to maximise/minimise.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Stationary points: dy/dx = 0. Classify: d²y/dx² < 0 → max; d²y/dx² > 0 → min; d²y/dx² = 0 → check sign change of dy/dx. Point of inflection: d²y/dx² = 0 and sign changes. Optimisation: form the function, differentiate, solve, verify nature.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "In kinematics rates of change problems, pay close attention to units (e.g., cm/s vs m/s). Use the chain rule effectively to link related rates, such as dy/dt = (dy/dx) * (dx/dt), and clearly state your final conclusion in context."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key-stat', prompt: 'How do you use the second derivative to classify a stationary point?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find and classify the stationary points of y = 2x³ − 9x² + 12x − 4.' },
            { id: 'c3', blockId: 'callout-inflection', prompt: 'What is a point of inflection and when does it occur?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'State the 5-step strategy for optimisation problems.' }
        ],
        summaryText: 'dy/dx=0 at stationary points. d²y/dx²<0→max; >0→min; =0→inconclusive→sign test. Point of inflection: d²y/dx²=0 AND sign of d²y/dx² changes. Optimisation: one variable, differentiate, solve, verify.',
        ready: true
    },
    evidence: []
};
