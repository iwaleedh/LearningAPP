/**
 * Seed note: Mathematics · Unit 1 · Topic 4 · Subtopic 0
 * "Definition of gradient"
 */

export const note_mathematics_1_4_0 = {
    pdfPath: '/notes/mathematics/differentiation/definition-of-gradient.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the gradient of a curve as the gradient of a tangent at a specific point; distinguish tangents from secants; appreciate that the gradient of a curve changes at every point.' },
            terms: []
        },
        {
            id: 'h-gradient-curve',
            type: 'heading',
            data: { text: 'Gradient of a Curve', level: 2 },
            terms: []
        },
        {
            id: 'p-gradient-curve',
            type: 'paragraph',
            data: { text: 'Unlike a straight line (which has a single, fixed gradient), a curve has a <strong>different gradient at every point</strong>. The gradient at any particular point P is defined as the gradient of the <strong>tangent</strong> to the curve at P.' },
            terms: []
        },
        {
            id: 'key-gradient',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Gradient of a Curve at a Point',
                text: 'Gradient of curve at P = gradient of the tangent to the curve at P<br/><br/>There is exactly one tangent at each smooth point of a curve.'
            },
            terms: []
        },
        {
            id: 'h-tangent',
            type: 'heading',
            data: { text: 'Tangent vs Secant', level: 2 },
            terms: []
        },
        {
            id: 'p-tangent',
            type: 'paragraph',
            data: { text: 'A <strong>secant</strong> is a straight line through two points on a curve. As the two points get closer and closer together, the secant rotates until it becomes the <strong>tangent</strong> at the limiting point. This idea — "approaching the limit" — is the foundation of differentiation from first principles.' },
            terms: []
        },
        {
            id: 'svg-tangent',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 180" style="width:100%;max-width:320px;display:block;margin:0 auto;"><defs><marker id="ah40a" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#374151"/></marker></defs><style>.la{font-family:sans-serif;font-size:10px;fill:#374151}.lp{font-family:sans-serif;font-size:10px;fill:#4f46e5;font-weight:600}</style><line x1="15" y1="90" x2="250" y2="90" stroke="#374151" stroke-width="1" marker-end="url(#ah40a)"/><line x1="40" y1="170" x2="40" y2="10" stroke="#374151" stroke-width="1" marker-end="url(#ah40a)"/><path d="M50,165 C80,165 100,130 130,80 C160,30 185,15 230,10" fill="none" stroke="#374151" stroke-width="2"/><line x1="80" y1="150" x2="210" y2="20" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="60" y1="155" x2="195" y2="30" stroke="#4f46e5" stroke-width="2"/><circle cx="130" cy="80" r="4" fill="#4f46e5"/><text x="134" y="76" class="lp">P</text><text x="135" y="30" class="la">tangent at P</text><text x="155" y="52" class="la" style="fill:#10b981">secant</text><text x="243" y="95" class="la">x</text><text x="44" y="12" class="la">y</text></svg>',
                caption: 'The secant (green) approaches the tangent (indigo) as the two points converge to P'
            },
            terms: []
        },
        {
            id: 'h-positive-negative',
            type: 'heading',
            data: { text: 'Positive, Negative and Zero Gradient', level: 2 },
            terms: []
        },
        {
            id: 'table-gradient',
            type: 'comparisonTable',
            data: {
                headers: ['Gradient', 'Curve behaviour', 'Tangent slope'],
                rows: [
                    ['m > 0', 'Rising (increasing)', 'Upward left to right'],
                    ['m = 0', 'Stationary point (max or min)', 'Horizontal'],
                    ['m < 0', 'Falling (decreasing)', 'Downward left to right']
                ],
                caption: 'Interpretation of the gradient at a point on a curve'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• A tangent exists only at <em>smooth</em> points of a curve. Corners (e.g. |x|) have no tangent.<br/>• The gradient at a stationary point is zero — this is how we find turning points using calculus.<br/>• The normal at a point is perpendicular to the tangent: gradient of normal = −1/m.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Gradient of a curve at P = gradient of tangent at P. Tangents arise as the limit of secants. m > 0: rising; m = 0: stationary; m < 0: falling. The gradient function (derivative) gives a formula for m at any x.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Remember that the gradient of a curve at a point is exactly equal to the gradient of the tangent drawn at that same point. If you are asked to find the gradient of a curve, you need to differentiate."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-gradient', prompt: 'How is the gradient of a curve at a point defined?' },
            { id: 'cue-2', blockId: 'p-tangent', prompt: 'Explain how a secant becomes a tangent using the concept of a limit.' },
            { id: 'cue-3', blockId: 'table-gradient', prompt: 'What does a gradient of zero at a point on a curve indicate?' }
        ],
        summaryText: 'Gradient of curve = gradient of tangent at that point. Tangent is the limiting position of the secant. m=0 at stationary points.',
        ready: true
    },
    evidence: []
};
