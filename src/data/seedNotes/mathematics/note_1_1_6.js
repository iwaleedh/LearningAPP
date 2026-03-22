/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 6
 * "Discriminants"
 */

export const note_mathematics_1_1_6 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/discriminants.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Use the discriminant b² − 4ac to determine the number and nature of roots of a quadratic equation, and solve problems involving the discriminant.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is the Discriminant?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'The discriminant is the expression under the square root sign in the quadratic formula. It is denoted by the Greek letter <strong>Δ (delta)</strong>. The sign of Δ tells you exactly how many real roots the quadratic has, without needing to solve it.' },
            terms: []
        },
        {
            id: 'eq-disc',
            type: 'equation',
            data: {
                html: '\u0394 = b\u00b2 \u2212 4ac',
                caption: 'Discriminant of ax² + bx + c = 0'
            },
            terms: []
        },
        {
            id: 'h-cases',
            type: 'heading',
            data: { text: 'The Three Cases', level: 2 },
            terms: []
        },
        {
            id: 'table-cases',
            type: 'comparisonTable',
            data: {
                headers: ['Discriminant', 'Number of Roots', 'Graph behaviour'],
                rows: [
                    ['\u0394 = b\u00b2 \u2212 4ac > 0', 'Two distinct real roots', 'Parabola crosses x-axis at two points'],
                    ['\u0394 = b\u00b2 \u2212 4ac = 0', 'One repeated (equal) real root', 'Parabola touches x-axis at one point (vertex)'],
                    ['\u0394 = b\u00b2 \u2212 4ac < 0', 'No real roots', 'Parabola does not cross the x-axis']
                ],
                caption: 'Summary of the three discriminant cases'
            },
            terms: []
        },
        {
            id: 'svg-disc',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 200" style="width:100%;max-width:460px;display:block;margin:0 auto;"><style>.d-lbl{font-family:sans-serif;font-size:10px;fill:#374151}.d-hl{font-family:sans-serif;font-size:10px;fill:#4f46e5;font-weight:700}.d-sub{font-family:sans-serif;font-size:9px;fill:#6b7280}</style><line x1="0" y1="155" x2="120" y2="155" stroke="#e5e7eb" stroke-width="1"/><line x1="120" y1="155" x2="240" y2="155" stroke="#e5e7eb" stroke-width="1"/><line x1="240" y1="155" x2="360" y2="155" stroke="#e5e7eb" stroke-width="1"/><line x1="120" y1="10" x2="120" y2="195" stroke="#d1d5db" stroke-width="1" stroke-dasharray="3,3"/><line x1="240" y1="10" x2="240" y2="195" stroke="#d1d5db" stroke-width="1" stroke-dasharray="3,3"/><polyline points="10,130 25,155 40,165 60,165 75,155 90,130" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><circle cx="25" cy="155" r="4" fill="#4f46e5"/><circle cx="75" cy="155" r="4" fill="#4f46e5"/><text x="60" y="15" text-anchor="middle" class="d-hl">\u0394 &gt; 0</text><text x="60" y="26" text-anchor="middle" class="d-sub">Two distinct roots</text><polyline points="130,155 150,165 170,175 180,178 190,175 210,165 230,155" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><circle cx="180" cy="178" r="4" fill="#10b981"/><text x="180" y="15" text-anchor="middle" class="d-hl">\u0394 = 0</text><text x="180" y="26" text-anchor="middle" class="d-sub">One repeated root</text><polyline points="250,100 265,125 275,140 290,145 305,140 315,125 330,100" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><text x="300" y="15" text-anchor="middle" class="d-hl">\u0394 &lt; 0</text><text x="300" y="26" text-anchor="middle" class="d-sub">No real roots</text><line x1="10" y1="155" x2="110" y2="155" stroke="#374151" stroke-width="1.5"/><line x1="130" y1="155" x2="230" y2="155" stroke="#374151" stroke-width="1.5"/><line x1="250" y1="155" x2="350" y2="155" stroke="#374151" stroke-width="1.5"/></svg>',
                caption: 'Three cases of the discriminant — the parabola relative to the x-axis'
            },
            terms: []
        },
        {
            id: 'h-using',
            type: 'heading',
            data: { text: 'Using the Discriminant to Solve Problems', level: 2 },
            terms: []
        },
        {
            id: 'p-using',
            type: 'paragraph',
            data: { text: 'Exam questions often ask you to find the value(s) of a parameter (e.g. k) such that a quadratic has a certain number of roots. Set up the discriminant condition, solve the resulting equation or inequality, then sketch the discriminant quadratic to decide which region satisfies the condition.' },
            terms: []
        },
        {
            id: 'worked-disc',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Finding k for Equal Roots',
                text: 'Find the value of k for which kx² + 4x + 1 = 0 has equal roots.<br/><br/>For equal roots: Δ = 0<br/>b² − 4ac = 0, where a = k, b = 4, c = 1<br/>16 − 4k = 0<br/>4k = 16<br/><strong>k = 4</strong><br/><br/>Check: 4x² + 4x + 1 = (2x + 1)² = 0 → x = −½ (repeated root ✓)'
            },
            terms: []
        },
        {
            id: 'worked-ineq',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Finding k for Two Distinct Real Roots',
                text: 'Find the values of k for which x² − 5x + k = 0 has two distinct real roots.<br/><br/>For two distinct roots: Δ > 0<br/>b² − 4ac > 0, where a = 1, b = −5, c = k<br/>25 − 4k > 0<br/>4k < 25<br/><strong>k < 25/4 = 6.25</strong>'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• "Real roots" means Δ ≥ 0 (distinct OR repeated).<br/>• "Two distinct real roots" means Δ > 0 strictly.<br/>• "Equal roots" or "repeated roots" means Δ = 0.<br/>• "No real roots" means Δ < 0.<br/>• Always sketch the discriminant quadratic when solving inequalities involving k.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'The discriminant Δ = b² − 4ac determines the nature of roots: Δ > 0 gives two distinct real roots (parabola cuts x-axis twice); Δ = 0 gives one repeated root (parabola touches x-axis); Δ < 0 gives no real roots (parabola does not cross x-axis). Use Δ conditions to form and solve equations or inequalities involving unknown parameters.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "",
                text: ""
            },
            terms: []
        },
        {
            id: 'callout-tip-2',
            type: 'callout',
            data: {
                style: 'warning',
                title: "",
                text: ""
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'eq-disc', prompt: 'State the discriminant formula and the symbol used to denote it.' },
            { id: 'cue-2', blockId: 'table-cases', prompt: 'What are the three cases for the discriminant and what does each tell you about the graph?' },
            { id: 'cue-3', blockId: 'worked-disc', prompt: "Find the value of k for which kx² + 4x + 1 = 0 has equal roots." },
            { id: 'cue-4', blockId: 'p-using', prompt: 'What condition must Δ satisfy if a quadratic has no real roots?' },
            { id: 'cue-5', blockId: 'callout-tip', prompt: 'What is the discriminant condition for a quadratic to have at least one real root?' }
        ],
        summaryText: 'Discriminant Δ = b²−4ac: Δ>0 → two distinct real roots; Δ=0 → one repeated root; Δ<0 → no real roots. Use to find unknown parameters by setting up and solving discriminant equations/inequalities.',
        ready: true
    },
    evidence: []
};
