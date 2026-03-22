/**
 * Seed note: Mathematics · Unit 1 · Topic 3 · Subtopic 6
 * "Transformations of trigonometric functions"
 */

export const note_mathematics_1_3_6 = {
    pdfPath: '/notes/mathematics/trigonometry/transformations-of-trig-functions.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Apply translations, stretches, and reflections to trig graphs; identify amplitude, period, and phase shift from the equation y = a sin(bx + c) + d; sketch transformed trig graphs.' },
            terms: []
        },
        {
            id: 'h-general',
            type: 'heading',
            data: { text: 'General Form', level: 2 },
            terms: []
        },
        {
            id: 'key-general',
            type: 'callout',
            data: {
                style: 'key',
                title: 'y = a sin(bx + c) + d',
                text: '<strong>a</strong> → amplitude (vertical stretch by factor |a|; reflection if a < 0)<br/><strong>b</strong> → period = 360°/|b| (horizontal stretch; larger b means faster oscillation)<br/><strong>c</strong> → phase shift (horizontal translation by −c/b)<br/><strong>d</strong> → vertical translation (shift up/down by d)'
            },
            terms: []
        },
        {
            id: 'table-trans',
            type: 'comparisonTable',
            data: {
                headers: ['Transformation', 'Equation', 'Effect on graph'],
                rows: [
                    ['Vertical stretch', 'y = a sin x', 'Amplitude changes to |a|; range [−a, a]'],
                    ['Horizontal stretch', 'y = sin(bx)', 'Period = 360°/b'],
                    ['Vertical translation', 'y = sin x + d', 'Graph shifts up by d; midline y = d'],
                    ['Horizontal translation', 'y = sin(x + c)', 'Graph shifts left by c (if c > 0)'],
                    ['Reflection in x-axis', 'y = −sin x', 'Graph flipped vertically'],
                    ['Reflection in y-axis', 'y = sin(−x)', 'Equivalent to −sin x for sin; cos(−x) = cos x']
                ],
                caption: 'Transformations applied to y = sin x (same rules apply to cos x and tan x)'
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Identify Features',
                text: 'State the amplitude, period, and vertical shift for y = 3 cos(2x) − 1.<br/><br/>a = 3 → amplitude = 3<br/>b = 2 → period = 360°/2 = <strong>180°</strong><br/>d = −1 → vertical shift: graph moves <strong>down 1</strong><br/>Range: [3(−1)−1, 3(1)−1] = [−4, 2]'
            },
            terms: []
        },
        {
            id: 'worked-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Sketch by Transformation',
                text: 'Sketch y = 2 sin(x − 30°) for 0° ≤ x ≤ 360°.<br/><br/>Start with y = sin x. Apply: vertical stretch ×2 (amplitude → 2), then horizontal translation +30° to the right.<br/>Key points move: (0°,0) → (30°,0); (90°,1) → (120°,2); (180°,0) → (210°,0); (270°,−1) → (300°,−2); (360°,0) → (390°,0 — outside range).<br/>Sketch through these transformed coordinates.'
            },
            terms: []
        },
        {
            id: 'h-solving',
            type: 'heading',
            data: { text: 'Solving Equations with Transformed Functions', level: 2 },
            terms: []
        },
        {
            id: 'p-solving',
            type: 'paragraph',
            data: { text: 'When solving equations like 2 sin(3x) = √3, first isolate the trig function, then solve the inner equation for the full range. If the period is shorter, more solutions fit in 0° ≤ x ≤ 360°. The number of solutions equals 360°/period.' },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• When sketching, always label: the new max/min (amplitude), the new period, any shifted intercepts.<br/>• Phase shift: y = sin(x − 30°) shifts RIGHT by 30°, y = sin(x + 30°) shifts LEFT by 30°.<br/>• When solving 2sin(3x)=1 in 0°≤x≤360°, set u = 3x and solve for u in 0°≤u≤1080° — then divide by 3.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'y = a sin(bx + c) + d: amplitude |a|, period 360°/b, phase shift −c/b, vertical shift d. Negative a reflects in x-axis. To sketch: transform key points (0,0), (90,1), (180,0), (270,−1), (360,0) for sin x.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When sketching transformed graphs, always clearly label the coordinates of the maximum points, minimum points, and axis intersections. Sketching lightly in pencil first can help get the shape and proportions right."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-general', prompt: 'In y = a sin(bx + c) + d, what does each of a, b, c, and d affect?' },
            { id: 'cue-2', blockId: 'worked-1', prompt: 'State the amplitude, period, and range of y = 3 cos(2x) − 1.' },
            { id: 'cue-3', blockId: 'worked-2', prompt: 'Describe how to sketch y = 2 sin(x − 30°) from y = sin x.' },
            { id: 'cue-4', blockId: 'callout-tip', prompt: 'How do you solve 2 sin(3x) = 1 for 0° ≤ x ≤ 360°? How many solutions are there?' }
        ],
        summaryText: 'a=amplitude, 360/b=period, −c/b=phase shift, d=vertical shift. Transform key points. Expand range before solving (0 to b·360°).',
        ready: true
    },
    evidence: []
};
