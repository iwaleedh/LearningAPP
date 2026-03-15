/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 11
 * "Elimination"
 */

export const note_mathematics_1_1_11 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/elimination.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Solve pairs of linear simultaneous equations using the elimination method; interpret solutions as intersection points of straight lines.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What are Linear Simultaneous Equations?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'Two (or more) equations that must all be true at the same time are called <strong>simultaneous equations</strong>. An equation is <em>linear</em> if no unknown is raised to a power other than 1. Graphically, each linear equation in two unknowns produces a straight line, and the solution is the point where the lines intersect.' },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'The Elimination Method', level: 2 },
            terms: []
        },
        {
            id: 'p-method',
            type: 'paragraph',
            data: { text: 'The elimination method removes one variable by adding or subtracting the two equations. This only works once the coefficients of one variable are <strong>equal in size</strong>. Multiply one (or both) equations by suitable constants to match the coefficient you want to eliminate.' },
            terms: []
        },
        {
            id: 'list-steps',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: '<strong>Label</strong> the equations ① and ②.' },
                    { text: '<strong>Match coefficients:</strong> multiply ① and/or ② by constants so a chosen variable has equal coefficients in both equations.' },
                    { text: '<strong>Same sign → subtract; different signs → add</strong> the equations to eliminate that variable.' },
                    { text: '<strong>Solve</strong> the resulting single-variable equation.' },
                    { text: '<strong>Back-substitute</strong> into the simpler original equation to find the other variable.' },
                    { text: '<strong>Check</strong> both values in the equation not used in step 5.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-elim',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example',
                text: 'Solve:  3x + 2y = 11  ①   and   2x − y = 1  ②<br/><br/>Multiply ② by 2:  4x − 2y = 2  ③<br/>(This matches the coefficient of y: +2 in ① and −2 in ③, different signs → add)<br/><br/>① + ③:  7x = 13  →  <strong>x = 13/7</strong>... Let\'s use simpler numbers:<br/><br/>New example:  3x + 2y = 11  ①   and   x + y = 4  ②<br/>Multiply ② by 2:  2x + 2y = 8  ③<br/>Same sign → ① − ③:  x = 3<br/>Into ②:  3 + y = 4  →  <strong>y = 1</strong><br/><strong>∴ Solution: x = 3, y = 1</strong><br/>Check in ①: 9 + 2 = 11 ✓'
            },
            terms: []
        },
        {
            id: 'h-geo',
            type: 'heading',
            data: { text: 'Geometric Interpretation', level: 2 },
            terms: []
        },
        {
            id: 'p-geo',
            type: 'paragraph',
            data: { text: 'Each linear equation represents a straight line. The solution to the simultaneous pair is the coordinates of the point of intersection. If the lines are parallel (same gradient, different intercepts) there is no solution. If the equations represent the same line, there are infinitely many solutions.' },
            terms: []
        },
        {
            id: 'svg-lines',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" style="width:100%;max-width:340px;display:block;margin:0 auto;"><defs><marker id="ah11" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l11{font-family:sans-serif;font-size:11px;fill:#374151}.h11{font-family:sans-serif;font-size:11px;fill:#4f46e5;font-weight:600}</style><line x1="15" y1="130" x2="265" y2="130" stroke="#374151" stroke-width="1.5" marker-end="url(#ah11)"/><line x1="130" y1="190" x2="130" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah11)"/><line x1="20" y1="50" x2="260" y2="170" stroke="#4f46e5" stroke-width="2"/><line x1="20" y1="170" x2="260" y2="60" stroke="#10b981" stroke-width="2"/><circle cx="148" cy="103" r="5.5" fill="#ef4444"/><text x="152" y="98" class="h11">(x, y)</text><text x="22" y="45" style="font-family:sans-serif;font-size:10px;fill:#4f46e5">Line ①</text><text x="22" y="185" style="font-family:sans-serif;font-size:10px;fill:#10b981">Line ②</text><text x="258" y="145" class="l11">x</text><text x="135" y="12" class="l11">y</text></svg>',
                caption: 'Two straight lines intersect at exactly one point — the unique solution (x, y)'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '• Forgetting to multiply the <em>entire</em> equation (including the right-hand side) when balancing coefficients.<br/>• Subtracting when you should add (and vice versa): if same sign → subtract; different sign → add.<br/>• Writing the final answer as x = _, y = _ but not checking in the unused equation.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always label your equations ① and ② and show which multiple you use.<br/>• After finding one variable, substitute into the <em>simpler</em> equation for the other.<br/>• The final check step only takes seconds and guarantees full marks.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'To eliminate: match coefficients of one variable by multiplying equations, then add (different signs) or subtract (same signs) to remove that variable. Solve for one variable, substitute back for the other, and check in the unused equation. Geometrically the solution is the intersection point of the two lines.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'list-steps', prompt: 'List the six steps for solving simultaneous linear equations by elimination.' },
            { id: 'cue-2', blockId: 'p-method', prompt: 'When do you add the equations? When do you subtract them?' },
            { id: 'cue-3', blockId: 'worked-elim', prompt: 'Solve 3x + 2y = 11 and x + y = 4 by elimination.' },
            { id: 'cue-4', blockId: 'p-geo', prompt: 'What does it mean geometrically if two simultaneous equations have no solution?' },
            { id: 'cue-5', blockId: 'callout-warning', prompt: 'What is the most common error students make in the elimination method?' }
        ],
        summaryText: 'Elimination: match one coefficient → same sign subtract / different sign add → solve one variable → back-substitute → check. Solution = intersection of the two lines.',
        ready: true
    },
    evidence: []
};
