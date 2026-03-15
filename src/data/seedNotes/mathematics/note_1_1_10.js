/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 10
 * "Simultaneous equations (quadratic)"
 */

export const note_mathematics_1_1_10 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/simultaneous-equations--quadratic.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Solve simultaneous equations where one equation is quadratic and one is linear, using the substitution method; interpret solutions geometrically.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'Quadratic Simultaneous Equations', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'A pair of simultaneous equations is quadratic when at least one of the equations contains terms of degree 2. At A-level, you will typically have <strong>one linear equation</strong> and <strong>one quadratic equation</strong>. The solution pairs (x, y) represent the points where the straight line and the curve intersect. There are usually two solution pairs, but there can be one (tangent) or none.' },
            terms: []
        },
        {
            id: 'key-method',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Principle',
                text: 'You must use <strong>substitution</strong> to solve quadratic simultaneous equations. The elimination method only works when both equations are linear. Rearrange the linear equation first, then substitute into the quadratic.'
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Method: Substitution into the Quadratic', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Label the equations ① (linear) and ② (quadratic).' },
                    { text: 'Rearrange equation ① to make one variable the subject (e.g. y = … or x = …).' },
                    { text: 'Substitute the expression into equation ②. This creates a single quadratic in one variable.' },
                    { text: 'Solve the quadratic (factorisation or formula).' },
                    { text: 'Substitute each solution back into the rearranged linear equation to find the paired value.' },
                    { text: 'Check both pairs in the original quadratic equation.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example',
                text: 'Solve simultaneously:  y = 2x − 1  ①  and  y = x² − 3  ②<br/><br/>From ①, y = 2x − 1. Substitute into ②:<br/>2x − 1 = x² − 3<br/>x² − 2x − 2 = 0<br/><br/>Quadratic formula: x = (2 ± √(4+8))/2 = (2 ± √12)/2 = 1 ± √3<br/><br/>x₁ = 1 + √3 → y₁ = 2(1+√3) − 1 = 1 + 2√3<br/>x₂ = 1 − √3 → y₂ = 2(1−√3) − 1 = 1 − 2√3<br/><br/><strong>Solutions: (1+√3,  1+2√3) and (1−√3,  1−2√3)</strong>'
            },
            terms: []
        },
        {
            id: 'svg-intersect',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220" style="width:100%;max-width:360px;display:block;margin:0 auto;"><defs><marker id="ah10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l10{font-family:sans-serif;font-size:11px;fill:#374151}.h10{font-family:sans-serif;font-size:11px;fill:#4f46e5;font-weight:600}.g10{font-family:sans-serif;font-size:11px;fill:#10b981;font-weight:600}</style><line x1="15" y1="140" x2="285" y2="140" stroke="#374151" stroke-width="1.5" marker-end="url(#ah10)"/><line x1="150" y1="215" x2="150" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah10)"/><polyline points="40,175 70,160 100,140 130,115 160,86 190,53 220,20" fill="none" stroke="#10b981" stroke-width="2" stroke-linejoin="round"/><polyline points="60,200 80,175 100,155 120,140 140,132 160,130 180,134 200,145 220,162 240,185" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><circle cx="90" cy="148" r="5" fill="#ef4444"/><circle cx="175" cy="93" r="5" fill="#ef4444"/><text x="55" y="140" class="h10">(x\u2081, y\u2081)</text><text x="180" y="86" class="h10">(x\u2082, y\u2082)</text><text x="222" y="25" class="g10">y = 2x\u22121</text><text x="242" y="190" class="l10" style="fill:#4f46e5">y = x\u00b2\u22123</text><text x="278" y="155" class="l10">x</text><text x="155" y="12" class="l10">y</text><text x="153" y="154" class="l10">O</text></svg>',
                caption: 'Geometric interpretation: solution pairs are the intersection points of the line y = 2x−1 and the parabola y = x²−3'
            },
            terms: []
        },
        {
            id: 'h-disc',
            type: 'heading',
            data: { text: 'Using the Discriminant', level: 2 },
            terms: []
        },
        {
            id: 'p-disc',
            type: 'paragraph',
            data: { text: 'After substituting the linear equation into the quadratic, you get a new quadratic equation. The discriminant of this quadratic tells you the number of intersection points: Δ > 0 means two points; Δ = 0 means one point (line is tangent); Δ < 0 means no intersection.' },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always use substitution — elimination does not work here.<br/>• Pair up your answers: match each x with its corresponding y from the linear equation.<br/>• State solutions clearly as coordinate pairs (x, y).<br/>• If asked "how many intersections?", check the discriminant instead of solving fully.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Quadratic simultaneous equations (one linear, one quadratic) are solved by substitution: rearrange the linear equation for one variable, substitute into the quadratic, solve the resulting quadratic, then substitute each root back. Solutions are intersection points of the line and curve. The discriminant of the resulting quadratic gives the number of solutions.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-method', prompt: 'Why must you use substitution to solve quadratic simultaneous equations?' },
            { id: 'cue-2', blockId: 'list-method', prompt: 'List the six steps for solving a linear + quadratic simultaneous pair.' },
            { id: 'cue-3', blockId: 'worked-1', prompt: 'Solve y = 2x − 1 and y = x² − 3 simultaneously.' },
            { id: 'cue-4', blockId: 'p-disc', prompt: 'What does the discriminant of the resulting quadratic tell you geometrically?' },
            { id: 'cue-5', blockId: 'svg-intersect', prompt: 'How many intersection points can a line and a parabola have? Give all cases.' }
        ],
        summaryText: 'Solve by substitution: rearrange linear → substitute into quadratic → solve quadratic → find y pairs. Δ>0: two points; Δ=0: tangent; Δ<0: no intersection.',
        ready: true
    },
    evidence: []
};
