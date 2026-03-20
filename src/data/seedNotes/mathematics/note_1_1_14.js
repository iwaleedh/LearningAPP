/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 14
 * "Quadratic inequalities"
 */

export const note_mathematics_1_1_14 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/inequalities--quadratic.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Solve quadratic inequalities by finding roots and sketching the parabola; express solutions correctly using inequality notation or set notation.' },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Method for Solving a Quadratic Inequality', level: 2 },
            terms: []
        },
        {
            id: 'p-method',
            type: 'paragraph',
            data: { text: 'Unlike linear inequalities, you cannot simply rearrange and divide. Instead, find the roots of the corresponding quadratic equation, sketch the parabola, and use the sketch to identify which region satisfies the inequality.' },
            terms: []
        },
        {
            id: 'list-steps',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Rearrange so one side is 0: ax² + bx + c ○ 0.' },
                    { text: 'Find the roots x₁ and x₂ (where x₁ < x₂) by solving ax² + bx + c = 0.' },
                    { text: 'Sketch the parabola: ∪ shape if a > 0, ∩ if a < 0.' },
                    { text: 'Identify the region from the sketch: <ul><li>ax²+bx+c &lt; 0 with a&gt;0: parabola is <em>below</em> x-axis → x₁ &lt; x &lt; x₂</li><li>ax²+bx+c &gt; 0 with a&gt;0: parabola is <em>above</em> x-axis → x &lt; x₁ or x &gt; x₂</li></ul>' }
                ]
            },
            terms: []
        },
        {
            id: 'key-results',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Results (a > 0, roots x₁ < x₂)',
                text: '<strong>f(x) < 0  →  x₁ < x < x₂</strong>  (inside the roots, between)<br/><strong>f(x) > 0  →  x < x₁  or  x > x₂</strong>  (outside the roots)<br/><br/>For a < 0: the parabola is ∩-shaped, so reverse the regions above.'
            },
            terms: []
        },
        {
            id: 'worked-below',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Inequality < 0 (inside roots)',
                text: 'Solve  x² − 5x + 6 < 0<br/><br/>Find roots: x² − 5x + 6 = 0 → (x−2)(x−3) = 0 → x = 2 and x = 3<br/>a = 1 > 0 → ∪ shape → parabola is below x-axis between the roots<br/><strong>∴ Solution: 2 < x < 3</strong>'
            },
            terms: []
        },
        {
            id: 'worked-above',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Inequality > 0 (outside roots)',
                text: 'Solve  x² + x − 6 > 0<br/><br/>Find roots: x² + x − 6 = 0 → (x+3)(x−2) = 0 → x = −3 and x = 2<br/>a = 1 > 0 → ∪ shape → parabola is above x-axis outside the roots<br/><strong>∴ Solution: x < −3  or  x > 2</strong>'
            },
            terms: []
        },
        {
            id: 'svg-quad-ineq',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" style="width:100%;max-width:400px;display:block;margin:0 auto;"><defs><marker id="ah14" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l14{font-family:sans-serif;font-size:11px;fill:#374151}.h14{font-family:sans-serif;font-size:11px;fill:#4f46e5;font-weight:600}</style><line x1="15" y1="130" x2="305" y2="130" stroke="#374151" stroke-width="1.5" marker-end="url(#ah14)"/><line x1="160" y1="195" x2="160" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah14)"/><path d="M60,190 Q95,90 130,130 Q160,155 190,130 Q225,90 260,190" fill="#4f46e5" fill-opacity="0.4" stroke="none"/><polyline points="60,190 80,162 100,140 120,130 130,130 140,126 160,125 180,126 190,130 200,138 220,157 240,178 260,190" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><circle cx="130" cy="130" r="4.5" fill="#4f46e5"/><circle cx="190" cy="130" r="4.5" fill="#4f46e5"/><circle cx="160" cy="125" r="4" fill="#10b981"/><text x="116" y="148" class="h14">x\u2081</text><text x="181" y="148" class="h14">x\u2082</text><text x="162" y="120" style="font-family:sans-serif;font-size:10px;fill:#10b981">min</text><text x="64" y="120" style="font-family:sans-serif;font-size:10px;fill:#6b7280">x &lt; x\u2081</text><text x="197" y="120" style="font-family:sans-serif;font-size:10px;fill:#6b7280">x &gt; x\u2082</text><text x="128" y="175" style="font-family:sans-serif;font-size:10px;fill:#4f46e5">x\u2081 &lt; x &lt; x\u2082</text><rect x="127" y="130" width="63" height="40" fill="#4f46e5" fill-opacity="0.07" stroke="none"/><text x="297" y="145" class="l14">x</text><text x="165" y="12" class="l14">y</text></svg>',
                caption: 'For a > 0: f(x) < 0 between the roots (shaded); f(x) > 0 outside the roots'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '• Writing x > x₁ or x > x₂ — this is WRONG. For ">" with a > 0, the two conditions must use "<" and ">" going in <em>opposite</em> directions: x < x₁ <strong>or</strong> x > x₂.<br/>• Combining with "and" instead of "or": x < −3 <strong>and</strong> x > 2 is impossible — always write "or" for the outside region.<br/>• Not rearranging to = 0 first — never divide or "solve" as with a linear inequality.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always sketch the parabola — it is the safest way to identify the correct inequality region.<br/>• For "< 0" with a > 0: the solution is a single interval (between the roots).<br/>• For "> 0" with a > 0: the solution is two disjoint intervals (outside both roots).<br/>• Include = when the question uses ≤ or ≥ (include the roots in the solution).'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'To solve a quadratic inequality: rearrange to ax²+bx+c ○ 0, find roots x₁ and x₂, sketch the parabola. For a>0: f(x)<0 → x₁<x<x₂ (between roots); f(x)>0 → x<x₁ or x>x₂ (outside roots). For a<0: reverse regions. Always sketch — never attempt to solve by algebra alone.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-results', prompt: 'For a > 0 and roots x₁ < x₂: what is the solution when f(x) < 0? When f(x) > 0?' },
            { id: 'cue-2', blockId: 'worked-below', prompt: 'Solve x² − 5x + 6 < 0.' },
            { id: 'cue-3', blockId: 'worked-above', prompt: 'Solve x² + x − 6 > 0.' },
            { id: 'cue-4', blockId: 'list-steps', prompt: 'List the four steps for solving a quadratic inequality.' },
            { id: 'cue-5', blockId: 'callout-warning', prompt: 'Why is it wrong to write "x > x₁ and x > x₂" for a quadratic inequality solution?' }
        ],
        summaryText: 'Quadratic inequality: find roots x₁,x₂ → sketch parabola. a>0: f<0 → x₁<x<x₂; f>0 → x<x₁ or x>x₂. a<0: reverse. Always sketch. Use "or" not "and" for outside-roots region.',
        ready: true
    },
    evidence: []
};
