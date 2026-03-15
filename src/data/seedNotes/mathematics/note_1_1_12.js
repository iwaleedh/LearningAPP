/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 12
 * "Substitution"
 */

export const note_mathematics_1_1_12 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/substitution.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Solve pairs of linear simultaneous equations using the substitution method, and know when substitution is preferable to elimination.' },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'The Substitution Method', level: 2 },
            terms: []
        },
        {
            id: 'p-method',
            type: 'paragraph',
            data: { text: 'The substitution method involves expressing one variable in terms of the other using one equation, then substituting this into the second equation. This is especially efficient when one equation is already in the form y = … or x = …, or when dealing with quadratic simultaneous equations (where substitution is the <em>only</em> valid method).' },
            terms: []
        },
        {
            id: 'list-steps',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: '<strong>Label</strong> the equations ① and ②.' },
                    { text: '<strong>Choose one equation</strong> and rearrange it to make one variable (x or y) the subject.' },
                    { text: '<strong>Substitute</strong> this expression into the other equation, creating a single-variable equation.' },
                    { text: '<strong>Solve</strong> the resulting equation.' },
                    { text: '<strong>Back-substitute</strong> the found value into the rearranged equation from step 2 to find the other variable.' },
                    { text: '<strong>Check</strong> both values in the equation not used in step 5.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-sub',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Linear Substitution',
                text: 'Solve:  2x + 3y = 12  ①   and   y = x − 1  ②<br/><br/>② is already in the form y = …, so substitute directly into ①:<br/>2x + 3(x − 1) = 12<br/>2x + 3x − 3 = 12<br/>5x = 15<br/><strong>x = 3</strong><br/><br/>Substitute into ②: y = 3 − 1 = <strong>2</strong><br/><strong>∴ Solution: x = 3, y = 2</strong><br/>Check in ①: 2(3) + 3(2) = 6 + 6 = 12 ✓'
            },
            terms: []
        },
        {
            id: 'svg-intersection',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" style="width:100%;max-width:320px;display:block;margin:0 auto;"><defs><marker id="ah12" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.t12{font-family:sans-serif;font-size:12px;fill:#374151;font-weight:600}.l12{font-family:sans-serif;font-size:10px;fill:#6b7280}</style><line x1="20" y1="140" x2="260" y2="140" stroke="#374151" stroke-width="1.5" marker-end="url(#ah12)"/><line x1="60" y1="160" x2="60" y2="20" stroke="#374151" stroke-width="1.5" marker-end="url(#ah12)"/><text x="250" y="155" class="t12">x</text><text x="45" y="30" class="t12">y</text><polyline points="30,160 140,50" fill="none" stroke="#4f46e5" stroke-width="2"/><text x="145" y="45" class="t12" fill="#4f46e5">y = x − 1</text><polyline points="180,20 80,170" fill="none" stroke="#10b981" stroke-width="2"/><text x="185" y="25" class="t12" fill="#10b981">2x + 3y = 12</text><circle cx="120" cy="80" r="4" fill="#374151"/><line x1="120" y1="80" x2="120" y2="140" stroke="#374151" stroke-width="1" stroke-dasharray="3,3"/><line x1="120" y1="80" x2="60" y2="80" stroke="#374151" stroke-width="1" stroke-dasharray="3,3"/><text x="117" y="155" class="t12">3</text><text x="45" y="84" class="t12">2</text><text x="70" y="70" class="t12">Solution: (3, 2)</text></svg>',
                caption: 'Geometric meaning of simultaneous equations: finding the point of intersection'
            },
            terms: []
        },
        {
            id: 'h-compare',
            type: 'heading',
            data: { text: 'Substitution vs Elimination — When to Use Each', level: 2 },
            terms: []
        },
        {
            id: 'table-compare',
            type: 'comparisonTable',
            data: {
                headers: ['Situation', 'Preferred Method'],
                rows: [
                    ['One equation is already in the form x = … or y = …', 'Substitution (no rearranging needed)'],
                    ['Both equations are in ax + by = c form with no easy rearrangement', 'Elimination'],
                    ['One of the equations is quadratic', 'Substitution (must use this)'],
                    ['Coefficients share a common factor making elimination convenient', 'Elimination']
                ],
                caption: 'Choosing between substitution and elimination'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• If one equation is y = f(x), use substitution immediately — it is faster.<br/>• For quadratic simultaneous equations, <em>always</em> use substitution.<br/>• When expanding after substitution, be careful with signs (especially double negatives).<br/>• Both methods give the same answers — use whichever is faster for the given pair.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Substitution: rearrange one equation to make x or y the subject → substitute the expression into the other equation → solve for one variable → back-substitute → check. Prefer substitution when one equation starts as y = … or x = …, and when one equation is quadratic (mandatory).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'list-steps', prompt: 'List the six steps for the substitution method.' },
            { id: 'cue-2', blockId: 'worked-sub', prompt: 'Solve 2x + 3y = 12 and y = x − 1 by substitution.' },
            { id: 'cue-3', blockId: 'table-compare', prompt: 'When must you use substitution rather than elimination?' },
            { id: 'cue-4', blockId: 'h-compare', prompt: 'When is elimination more convenient than substitution for linear equations?' }
        ],
        summaryText: 'Substitution: rearrange one equation → substitute into the other → solve → back-substitute → check. Must use substitution for quadratic simultaneous equations.',
        ready: true
    },
    evidence: []
};
