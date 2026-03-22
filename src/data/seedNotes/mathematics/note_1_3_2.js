/**
 * Seed note: Mathematics · Unit 1 · Topic 3 · Subtopic 2
 * "Trigonometric exact values"
 */

export const note_mathematics_1_3_2 = {
    pdfPath: '/notes/mathematics/trigonometry/trigonometry-exact-values.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Recall exact values of sin, cos, and tan for 0°, 30°, 45°, 60°, 90°, and 180°; derive them from special triangles; express angles in both degrees and radians.' },
            terms: []
        },
        {
            id: 'h-why',
            type: 'heading',
            data: { text: 'Why Exact Values?', level: 2 },
            terms: []
        },
        {
            id: 'p-why',
            type: 'paragraph',
            data: { text: 'At A-level, many trigonometry questions require exact answers (e.g. "√3/2" rather than "0.866"). These arise from special right-angled triangles. The exact values must be recalled or quickly derived — they are NOT given in the formula booklet.' },
            terms: []
        },
        {
            id: 'h-derivation',
            type: 'heading',
            data: { text: 'Deriving Exact Values from Special Triangles', level: 2 },
            terms: []
        },
        {
            id: 'p-equilateral',
            type: 'paragraph',
            data: { text: '<strong>30°–60°–90° triangle</strong>: Start with an equilateral triangle of side 2. Split it in half to get a right triangle with hypotenuse 2, base 1, and height √3. This gives the 30° and 60° exact values.' },
            terms: []
        },
        {
            id: 'p-isosceles',
            type: 'paragraph',
            data: { text: '<strong>45°–45°–90° triangle</strong>: A right isosceles triangle with legs of length 1 has hypotenuse √2. Each acute angle is 45°. This gives the 45° exact values.' },
            terms: []
        },
        {
            id: 'table-exact',
            type: 'comparisonTable',
            data: {
                headers: ['θ (degrees)', 'θ (radians)', 'sin θ', 'cos θ', 'tan θ'],
                rows: [
                    ['0°', '0', '0', '1', '0'],
                    ['30°', 'π/6', '1/2', '√3/2', '1/√3 = √3/3'],
                    ['45°', 'π/4', '√2/2', '√2/2', '1'],
                    ['60°', 'π/3', '√3/2', '1/2', '√3'],
                    ['90°', 'π/2', '1', '0', 'undefined'],
                    ['180°', 'π', '0', '−1', '0']
                ],
                caption: 'Exact trig values — must be known without a calculator'
            },
            terms: []
        },
        {
            id: 'h-memory',
            type: 'heading',
            data: { text: 'Memory Aid — The Sine Staircase', level: 2 },
            terms: []
        },
        {
            id: 'p-memory',
            type: 'paragraph',
            data: { text: 'sin 0° = √0/2 = 0, sin 30° = √1/2 = 1/2, sin 45° = √2/2, sin 60° = √3/2, sin 90° = √4/2 = 1. Reading from numerator: √0, √1, √2, √3, √4 — the "staircase" pattern. Cosine goes in reverse order.' },
            terms: []
        },
        {
            id: 'worked-exact',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Exact value calculation',
                text: 'Find the exact value of sin 60° × cos 30° − sin 30° × cos 60°.<br/><br/>= (√3/2)(√3/2) − (1/2)(1/2)<br/>= 3/4 − 1/4<br/>= <strong>1/2</strong><br/><em>This is sin(60° − 30°) = sin 30° — the compound angle formula at work.</em>'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Draw the two special triangles at the top of your exam paper for quick reference.<br/>• Notice: sin 30° = cos 60° and sin 60° = cos 30° — "complementary angles".<br/>• A question asking for an "exact value" is a signal to use these values, not a decimal.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Exact values come from the 30-60-90 and 45-45-90 triangles. Key values: sin 30°=1/2, cos 60°=1/2, sin 45°=cos 45°=√2/2, tan 60°=√3, tan 45°=1. Recall the "staircase" pattern: sin 0°,30°,45°,60°,90° = √0/2 through √4/2.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Memorise the exact values using the special triangles rather than just relying on your calculator, as some problem-solving questions specifically require you to show your working to prove an exact value result."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'table-exact', prompt: 'State the exact values of sin, cos, and tan for 30°, 45° and 60°.' },
            { id: 'cue-2', blockId: 'p-memory', prompt: 'Explain the "staircase" memory device for sin values.' },
            { id: 'cue-3', blockId: 'worked-exact', prompt: 'Calculate the exact value of sin 60° · cos 30° − sin 30° · cos 60°.' },
            { id: 'cue-4', blockId: 'p-equilateral', prompt: 'Describe how to derive the 30° and 60° exact values from an equilateral triangle.' }
        ],
        summaryText: '30-60-90 triangle (from equilateral): sin30=1/2, cos30=√3/2, tan30=1/√3. 45-45-90 (from isosceles): sin45=cos45=√2/2, tan45=1. sin↑, cos↓ as θ goes 0→90°.',
        ready: true
    },
    evidence: []
};
