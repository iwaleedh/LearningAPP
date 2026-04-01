/**
 * Seed note: Mathematics · Unit 1 · Topic 3 · Subtopic 5
 * "Graphs of trigonometric functions"
 */

export const note_mathematics_1_3_5 = {
    pdfPath: '/notes/mathematics/trigonometry/graphs-of-trig-functions.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Sketch and describe the graphs of y = sin x, y = cos x, and y = tan x; identify their period, amplitude, and key features; use graphs to find all solutions of a trig equation in a given interval.' },
            terms: []
        },
        {
            id: 'h-properties',
            type: 'heading',
            data: { text: 'Key Properties of the Three Graphs', level: 2 },
            terms: []
        },
        {
            id: 'table-props',
            type: 'comparisonTable',
            data: {
                headers: ['Property', 'y = sin x', 'y = cos x', 'y = tan x'],
                rows: [
                    ['Period', '360° (2π)', '360° (2π)', '180° (π)'],
                    ['Amplitude', '1', '1', 'None (unbounded)'],
                    ['Range', '−1 ≤ y ≤ 1', '−1 ≤ y ≤ 1', 'y ∈ ℝ'],
                    ['y-intercept', '0', '1', '0'],
                    ['Zeros', '0°, 180°, 360°, …', '90°, 270°, …', '0°, 180°, 360°, …'],
                    ['Max (+1)', '90°, 450°, …', '0°, 360°, …', 'N/A'],
                    ['Asymptotes', 'None', 'None', '90°, 270°, …']
                ],
                caption: 'Summary of key features for y = sin x, cos x, tan x (0° to 360°)'
            },
            terms: []
        },
        {
            id: 'svg-sincos',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 160" style="width:100%;max-width:420px;display:block;margin:0 auto;"><defs><marker id="ah32a" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#374151"/></marker></defs><style>.lg{font-family:sans-serif;font-size:9px;fill:#374151}.ls{font-family:sans-serif;font-size:9px;fill:#2563eb}.lc{font-family:sans-serif;font-size:9px;fill:#10b981}</style><line x1="10" y1="80" x2="330" y2="80" stroke="#374151" stroke-width="1" marker-end="url(#ah32a)"/><line x1="30" y1="155" x2="30" y2="10" stroke="#374151" stroke-width="1" marker-end="url(#ah32a)"/><text x="332" y="84" class="lg">x</text><text x="33" y="10" class="lg">y</text><text x="22" y="74" class="lg">1</text><text x="22" y="92" class="lg">0</text><text x="18" y="108" class="lg">−1</text><path d="M30,80 C45,80 50,20 70,20 C90,20 95,80 110,80 C125,80 130,140 150,140 C170,140 175,80 190,80 C205,80 210,20 230,20 C250,20 255,80 270,80 C285,80 290,140 310,140" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M30,20 C50,20 55,80 70,80 C85,80 90,140 110,140 C130,140 135,80 150,80 C165,80 170,20 190,20 C210,20 215,80 230,80 C245,80 250,140 270,140 C285,140 295,80 310,80" fill="none" stroke="#10b981" stroke-width="2"/><text x="190" y="15" class="ls">y = sin x</text><text x="190" y="130" class="lc">y = cos x</text><text x="55" y="75" class="lg">90°</text><text x="95" y="75" class="lg">180°</text><text x="135" y="75" class="lg">270°</text><text x="178" y="75" class="lg">360°</text></svg>',
                caption: 'y = sin x (indigo) and y = cos x (green): same shape, cos is sin shifted 90° left'
            },
            terms: []
        },
        {
            id: 'h-solving',
            type: 'heading',
            data: { text: 'Finding All Solutions in a Given Interval', level: 2 },
            terms: []
        },
        {
            id: 'p-solving',
            type: 'paragraph',
            data: { text: 'Your calculator gives only the <strong>principal value</strong> — the first solution it finds (usually in Q1 or Q4). To find all solutions in a given range, use the symmetry and periodicity of the graph.' },
            terms: []
        },
        {
            id: 'list-solving',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Find the principal value α using your calculator.' },
                    { text: 'Use CAST or the graph to identify other solutions in the period.' },
                    { text: 'Add or subtract the full period (360° or 2π) repeatedly to get all solutions in range.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-solving',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Solve sin x = 0.5 for 0° ≤ x ≤ 360°',
                text: 'Principal value: sin⁻¹ 0.5 = 30°<br/>sin is positive in Q1 and Q2 (CAST).<br/>Q1 solution: x = 30°<br/>Q2 solution: x = 180° − 30° = 150°<br/><strong>x = 30° or x = 150°</strong>'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always sketch the graph before solving — it shows how many solutions to expect.<br/>• For cos x = k: Q1 solution α, Q4 solution 360° − α.<br/>• For tan x = k: period is 180°, so second solution is α + 180°.<br/>• Check all solutions lie within the required interval.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'y=sin x and y=cos x have period 360°, amplitude 1, range [−1,1]. y=tan x has period 180°, no amplitude, vertical asymptotes at 90°, 270°. Use CAST + periodicity to find all solutions in a given range.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Pay close attention to the requested interval (e.g. 0 to 360 degrees vs -180 to 180 degrees) when listing all solutions to a trigonometric equation; missing a solution or providing one outside the range loses marks."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'table-props', prompt: 'State the period, range, and y-intercept for y = sin x, y = cos x, and y = tan x.' },
            { id: 'cue-2', blockId: 'worked-solving', prompt: 'Solve sin x = 0.5 for 0° ≤ x ≤ 360°. Show all steps.' },
            { id: 'cue-3', blockId: 'callout-tip', prompt: 'How do you find the second solution for cos x = k in the range 0° to 360°?' },
            { id: 'cue-4', blockId: 'p-solving', prompt: 'Why does a calculator give only the principal value, and how do you find others?' }
        ],
        summaryText: 'sin/cos: period 360°, range [−1,1]. tan: period 180°, unbounded. CAST gives secondary solutions. Add period to get more solutions.',
        ready: true
    },
    evidence: []
};
