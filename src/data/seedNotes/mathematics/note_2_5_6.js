/**
 * Seed note: Mathematics · WMA12 · Topic 5 · Subtopic 6
 * "Further logarithmic equations and applications"
 */

export const note_mathematics_2_5_6 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Solve more complex equations involving logarithms and exponentials, including change of base and simultaneous equations.' },
            terms: []
        },
        {
            id: 'h-change',
            type: 'heading',
            data: { text: 'Change of Base and Harder Equations', level: 2 },
            terms: []
        },
        {
            id: 'callout-cob',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Change of Base',
                text: 'log_a(b) = ln(b) / ln(a)\n\nUseful for: evaluating log₅(17), log₃(2), etc. on a calculator.\nAlso: log_a(b) = 1 / log_b(a)  (reciprocal relationship)'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Using Change of Base', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve log₅(x) = 3.',
                text: 'Method 1 (direct): log₅(x) = 3 → x = 5³ = 125\n\nMethod 2 (change of base): log₅(x) = ln(x)/ln(5) = 3\n  ln(x) = 3·ln(5) = ln(5³) = ln(125)\n  x = 125'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Equation with Two Different Logs', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve 2log₃(x) − log₃(x−2) = 2.',
                text: 'log₃(x²) − log₃(x−2) = 2\nlog₃(x²/(x−2)) = 2\n\nApply inverse: x²/(x−2) = 3² = 9\nx² = 9(x−2) = 9x − 18\nx² − 9x + 18 = 0\n(x−3)(x−6) = 0\nx = 3 or x = 6\n\nCheck domain: x > 0 and x−2 > 0, so x > 2\nx = 3 ✓, x = 6 ✓ — both valid.'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Quadratic in a Log', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve [ln(x)]² − 3ln(x) + 2 = 0.',
                text: 'Let u = ln(x):\n  u² − 3u + 2 = 0\n  (u−1)(u−2) = 0\n  u = 1 or u = 2\n\nso ln(x) = 1 → x = e\n   ln(x) = 2 → x = e²'
            },
            terms: []
        },
        {
            id: 'h-we4',
            type: 'heading',
            data: { text: 'Worked Example 4: Mixing ln and Polynomial', level: 2 },
            terms: []
        },
        {
            id: 'callout-we4',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the x-coordinates where y = e^x and y = 3 − 2e^{−x} intersect.',
                text: 'Set equal: eˣ = 3 − 2e^{−x}\nMultiply through by eˣ: e^{2x} = 3eˣ − 2\ne^{2x} − 3eˣ + 2 = 0\n\nLet u = eˣ:\n  u² − 3u + 2 = 0\n  (u−1)(u−2) = 0\n  u = 1 or u = 2\n\neˣ = 1 → x = 0\neˣ = 2 → x = ln 2'
            },
            terms: []
        },
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'I can apply the change of base formula to evaluate logs in any base', checked: false },
                    { text: 'I can combine log terms before applying the inverse function', checked: false },
                    { text: 'I can identify when to use u = ln(x) substitution (quadratic in log)', checked: false },
                    { text: 'I always check the domain when solving log equations', checked: false }
                ]
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Change of base: log_a(b) = ln b / ln a. Solving log equations: combine logs using laws, apply inverse (e^ or 10^), solve, check domain. Quadratic in log: substitute u = ln x, solve quadratic, back-substitute. Always check domain: arguments of logs must be positive.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-cob', prompt: 'State the change of base formula for log_a(b).' },
            { id: 'c2', blockId: 'callout-we2', prompt: 'Solve 2log₃(x) − log₃(x−2) = 2.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Solve [ln x]² − 3 ln x + 2 = 0.' },
            { id: 'c4', blockId: 'callout-we4', prompt: 'Find where y = eˣ and y = 3 − 2e^{−x} intersect.' }
        ],
        summaryText: 'Change of base: log_a b = ln b / ln a. Complex log equations: combine logs, apply inverse, check domain. Disguised quadratics: u = ln x. Intersections of exponentials: multiply out to get e^{2x} − ... form.',
        ready: true
    },
    evidence: []
};
