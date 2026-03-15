/**
 * WMA14 · Topic 6 · Subtopic 10 — Differential equations in context
 */
export const note_mathematics_4_6_10 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Formulate, solve, and interpret differential equations in real-world contexts such as growth, decay, and rate-of-change models.' },
            terms: []
        },
        {
            id: 'h-models', type: 'heading',
            data: { text: 'Common DE Models', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Modelling Statements',
                text: '"Rate of change of P is proportional to P" \u2192 dP/dt = kP\n"Rate of change decreases as N increases" \u2192 dN/dt = k(A \u2212 N)\n"Rate is proportional to x\u00b2" \u2192 dy/dx = kx\u00b2\n\nSolve the DE, apply initial condition, interpret the particular solution.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A population P grows at rate proportional to P. Initially P=100; after 5 years P=200. Find P at t=10.',
                text: 'dP/dt = kP\n\u222b dP/P = \u222b k dt  \u27a2  ln P = kt + C  \u27a2  P = Ae^(kt)\n\nAt t=0: 100=A; at t=5: 200 = 100e^(5k) \u27a2 e^(5k)=2 \u27a2 k = (ln2)/5\n\nP = 100 \u00b7 2^(t/5)\nAt t=10: P = 100 \u00b7 2\u00b2 = 400'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Newton\u2019s law of cooling: dT/dt = \u2212k(T\u221220). At t=0, T=80; at t=5, T=60. Find T when t=10.',
                text: 'dT/(T\u221220) = \u2212k dt\nln|T\u221220| = \u2212kt + C\nT\u221220 = Ae^(\u2212kt)\n\nAt t=0: 80\u221220 = A \u27a2 A=60\nAt t=5: 60\u221220 = 60e^(\u22125k) \u27a2 e^(\u22125k) = 2/3 \u27a2 k = (1/5)ln(3/2)\n\nT = 20 + 60(2/3)^(t/5)\nAt t=10: T = 20 + 60(2/3)\u00b2 = 20 + 60(4/9) = 20 + 80/3 \u2248 46.7\u00b0'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Interpreting Solutions',
                text: '\u2022 State the long-term behaviour: as t \u2192 \u221e, what does the solution approach?\n\u2022 Comment on the model\u2019s limitations (e.g. exponential growth cannot continue indefinitely in practice).\n\u2022 Always define your variables and constants at the start.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'DE in context: translate verbal description into dy/dx = f(x,y), solve, apply initial condition. Interpret the solution (long-term behaviour, limitations).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'Write the DE for "rate of change of P is proportional to P".' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Solve the exponential growth model for population doubling in 5 years.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Set up and solve Newton\u2019s law of cooling: dT/dt = \u2212k(T\u221220).' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What should you always comment on when interpreting a DE model?' }
        ],
        summaryText: 'DE context: write dP/dt=kP (or similar), separate, integrate, apply IC. Interpret long-term behaviour.',
        ready: true
    },
    evidence: []
};
