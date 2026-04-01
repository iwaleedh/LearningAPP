/**
 * Seed note: Mathematics · WMA12 · Topic 5 · Subtopic 4
 * "Exponential growth and decay"
 */

export const note_mathematics_2_5_4 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Recognise and work with models of the form y = Aeᵏˣ to describe growth and decay.' },
            terms: []
        },
        {
            id: 'h-models',
            type: 'heading',
            data: { text: 'Exponential Growth and Decay Models', level: 2 },
            terms: []
        },
        {
            id: 'p-models',
            type: 'paragraph',
            data: { text: 'Many real-world quantities increase or decrease at a rate proportional to their current value. This gives the model y = Ae^{kx}, where A and k are constants.' },
            terms: []
        },
        {
            id: 'callout-model',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The Model y = Ae^{kt}',
                text: 'y = A · e^{kt}\n\n• A = value when t = 0 (initial value / y-intercept)\n• k > 0: GROWTH (y increases over time)\n• k < 0: DECAY (y decreases over time)\n• |k| controls the rate: larger |k| means faster change\n• The model has a horizontal asymptote y = 0'
            },
            terms: []
        },
        {
            id: 'svg-growth-decay',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="320" height="200"><defs><marker id="ah64" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><line x1="20" y1="10" x2="20" y2="180" stroke="#374151" stroke-width="1.5" marker-end="url(#ah64)"/><line x1="10" y1="165" x2="305" y2="165" stroke="#374151" stroke-width="1.5" marker-end="url(#ah64)"/><text x="300" y="178" font-size="11" fill="#374151" font-family="sans-serif">t</text><text x="28" y="15" font-size="11" fill="#374151" font-family="sans-serif">y</text><path d="M20,145 Q 60,140 100,125 Q 140,108 170,85 Q 200,60 220,38 Q 235,22 245,14" stroke="#2563eb" stroke-width="2.5" fill="none"/><text x="248" y="14" font-size="12" fill="#2563eb" font-family="sans-serif">growth (k&gt;0)</text><path d="M20,40 Q 60,55 100,80 Q 140,110 170,132 Q 200,148 250,158 Q 270,162 295,163" stroke="#10b981" stroke-width="2.5" fill="none"/><text x="248" y="130" font-size="12" fill="#10b981" font-family="sans-serif">decay (k&lt;0)</text><circle cx="20" cy="145" r="4" fill="#2563eb"/><text x="24" y="142" font-size="11" fill="#2563eb" font-family="sans-serif">A</text><circle cx="20" cy="40" r="4" fill="#10b981"/><text x="24" y="38" font-size="11" fill="#10b981" font-family="sans-serif">A</text></svg>',
                caption: 'Exponential growth (k>0) and decay (k<0); both start at y = A when t = 0'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Population Growth', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'A population P (in thousands) at time t years is given by P = 5e^{0.02t}. Find: (a) initial population; (b) P when t = 10; (c) when P = 8.',
                text: '(a) t=0: P = 5e⁰ = 5 thousand\n\n(b) t=10: P = 5e^{0.2} = 5×1.2214... ≈ 6.107 thousand\n\n(c) 5e^{0.02t} = 8\n    e^{0.02t} = 1.6\n    0.02t = ln(1.6) = 0.4700...\n    t = 0.4700.../0.02 = 23.5 years'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Half-Life (Radioactive Decay)', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'The mass of a radioactive sample at time t hours is M = 100e^{kt}. After 3 hours, M = 75 g. Find k and the half-life.',
                text: 'Finding k:\n  75 = 100e^{3k}\n  e^{3k} = 0.75\n  3k = ln(0.75) = −0.2877...\n  k = −0.0959... ≈ −0.0959\n\nHalf-life: find t when M = 50 g\n  50 = 100e^{kt}\n  e^{kt} = 0.5\n  kt = ln(0.5) = −0.6931...\n  t = −0.6931/(−0.0959) = 7.22 hours'
            },
            terms: []
        },
        {
            id: 'h-lin',
            type: 'heading',
            data: { text: 'Making the Model Linear: Using ln', level: 2 },
            terms: []
        },
        {
            id: 'p-lin',
            type: 'paragraph',
            data: { text: 'If y = Ae^{kx}, taking ln of both sides gives a linear relationship between ln(y) and x.' },
            terms: []
        },
        {
            id: 'eq-lin',
            type: 'equation',
            data: {
                html: 'ln(y) = ln(A) + kx',
                caption: 'Linear form — plotting ln(y) against x gives gradient k and y-intercept ln(A)'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip: Using ln to Find A and k',
                text: 'In experiments, data from y = Ae^{kx} is "linearised" by plotting ln(y) against x:\n• gradient = k\n• y-intercept = ln A, so A = e^{y-intercept}\n\nThis is tested in sketching/interpreting graphs questions.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Growth/decay model: y = Ae^{kt}. A = initial value. k > 0 growth; k < 0 decay. To find k: substitute known point, take ln, solve. To find when y = value: set equation, take ln. Linearising: ln y = ln A + kx gives gradient k and y-intercept ln A.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "A frequent error is writing ln(A + B) as ln A + ln B. Apply the laws of logarithms carefully: ln(AB) = ln A + ln B and ln(A/B) = ln A - ln B. Always simplify terms fully before solving the equation."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-model', prompt: 'State the general exponential model and explain what A and k represent.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'P = 5e^{0.02t}. When does P = 8?' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'M = 100e^{kt}, M = 75 when t = 3. Find k and the half-life.' },
            { id: 'c4', blockId: 'eq-lin', prompt: 'How do you linearise y = Ae^{kx}? What does the gradient represent?' }
        ],
        summaryText: 'y = Ae^{kt}: A = initial value; k>0 growth, k<0 decay. Find k by substituting known point and taking ln. Half-life: set y = A/2 and solve. Linearise: ln y = ln A + kx has gradient k, y-int ln A.',
        ready: true
    },
    evidence: []
};
