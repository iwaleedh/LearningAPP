/**
 * Seed note: Mathematics · WMA12 · Topic 7 · Subtopic 5
 * "Connected rates of change"
 */

export const note_mathematics_2_7_5 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Use the chain rule to relate rates of change of different quantities.' },
            terms: []
        },
        {
            id: 'h-idea',
            type: 'heading',
            data: { text: 'The Idea', level: 2 },
            terms: []
        },
        {
            id: 'eq-chain',
            type: 'equation',
            data: {
                html: '<span class="nb-frac"><span class="nb-num">dy</span><span class="nb-den">dt</span></span> = <span class="nb-frac"><span class="nb-num">dy</span><span class="nb-den">dx</span></span> · <span class="nb-frac"><span class="nb-num">dx</span><span class="nb-den">dt</span></span>',
                caption: 'Chain rule connecting rates of change with respect to time'
            },
            terms: []
        },
        {
            id: 'callout-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Strategy for Connected Rates of Change',
                text: '1. Write down what you know: dV/dt = ..., dA/dt = ..., dr/dt = ...\n2. Write down what you want to find.\n3. Find the relationship between the quantities (e.g. V and r).\n4. Differentiate to get the required derivative (e.g. dV/dr).\n5. Apply the chain rule to connect the rates.\n6. Substitute known values to find the answer.'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Expanding Sphere', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'A spherical balloon is inflated so that its volume increases at 20 cm³ s⁻¹. Find the rate of increase of radius when r = 5 cm.',
                text: 'Given: dV/dt = 20 cm³ s⁻¹. Find: dr/dt when r = 5.\n\nV = (4/3)πr³\ndV/dr = 4πr²\n\nChain rule: dr/dt = (dr/dV) · (dV/dt) = (1/(dV/dr)) · (dV/dt)\n           = (1/(4πr²)) · 20\n\nAt r = 5: dr/dt = 20/(4π·25) = 20/(100π) = 1/(5π) cm s⁻¹'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Area and Radius', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'The area of a circle is increasing at 6 cm² s⁻¹. Find dr/dt when r = 4 cm.',
                text: 'Given: dA/dt = 6. Find: dr/dt when r = 4.\n\nA = πr²\ndA/dr = 2πr\n\ndr/dt = dA/dt × dr/dA = dA/dt × 1/(dA/dr)\n      = 6 × 1/(2π·4)\n      = 6/(8π) = 3/(4π) cm s⁻¹'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Two Connected Variables', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Given y = 3x² − x and dx/dt = 4, find dy/dt when x = 2.',
                text: 'dy/dx = 6x − 1\n\ndy/dt = dy/dx · dx/dt = (6x − 1) · 4\n\nAt x = 2: dy/dt = (12 − 1) · 4 = 11 · 4 = 44'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Units and Sign',
                text: 'Always include units in your final answer — rates have units!\n\nA negative rate of change means the quantity is decreasing (e.g. a deflating balloon would have dV/dt < 0).'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Use the chain rule: dy/dt = (dy/dx)·(dx/dt). Identify the quantities, find the geometric relationship, differentiate, then chain-link to the known rate. Don\'t forget units.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When verifying the nature of a stationary point, explicitly substitute the x-value into the second derivative and state whether the result is > 0 (minimum) or < 0 (maximum). Do not just write 'minimum' without showing the evaluation."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the 6-step strategy for connected rates of change problems.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'A sphere inflates at 20 cm³ s⁻¹. Find dr/dt when r = 5 cm.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'If y = 3x² − x and dx/dt = 4, find dy/dt at x = 2.' },
            { id: 'c4', blockId: 'callout-warning', prompt: 'What does a negative rate of change mean in context?' }
        ],
        summaryText: 'Connected rates: dy/dt = (dy/dx)·(dx/dt). Find the geometric formula (V, A, etc.), differentiate to get d(quantity)/d(variable), apply chain rule, substitute known values. Always include units.',
        ready: true
    },
    evidence: []
};
