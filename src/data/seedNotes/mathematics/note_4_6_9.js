/**
 * WMA14 · Topic 6 · Subtopic 9 — Differential equations: separable variables
 */
export const note_mathematics_4_6_9 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Form and solve first-order differential equations by separating the variables, finding general and particular solutions.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Separating Variables', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Method',
                text: 'For dy/dx = f(x) g(y):\n\nSeparate: (1/g(y)) dy = f(x) dx\nIntegrate both sides: \u222b (1/g(y)) dy = \u222b f(x) dx\nAdd a single constant of integration (+C).\n\nGeneral solution: explicit (y=\u2026) or implicit (F(y)=G(x)+C).\nParticular solution: use an initial condition to find C.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve dy/dx = 3x\u00b2y, given y=2 when x=1.',
                text: 'Separate: (1/y) dy = 3x\u00b2 dx\n\u222b (1/y) dy = \u222b 3x\u00b2 dx\nln|y| = x\u00b3 + C\n\nGeneral solution: y = Ae^(x\u00b3) (where A = e^C)\n\nParticular: y=2 when x=1: 2=Ae\u00b9 \u27a2 A=2/e\ny = 2e^(x\u00b3\u22121)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve dy/dx = (x+1)/(y(y+1)).',
                text: 'y(y+1) dy = (x+1) dx\n\u222b (y\u00b2+y) dy = \u222b (x+1) dx\ny\u00b3/3 + y\u00b2/2 = x\u00b2/2 + x + C\n\nGeneral solution (implicit):\ny\u00b3/3 + y\u00b2/2 = x\u00b2/2 + x + C'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Key Points',
                text: '\u2022 You need only one arbitrary constant C (not C\u2081 and C\u2082).\n\u2022 After integrating both sides, write +C on just one side.\n\u2022 ln|y| arises when integrating 1/y; write as |y| or consider the sign context.\n\u2022 For partial solutions, work with y > 0 if the context requires it.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Separable DE: rearrange to (1/g(y))dy = f(x)dx, integrate both sides, add one constant C. Use IC to find particular solution.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Ensure you place all 'y' terms with 'dy' and all 'x' terms with 'dx' before integrating. Never forget to add the constant of integration '+ c' immediately after integrating both sides, rather than right at the end of your algebraic manipulation."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the method for solving separable differential equations.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Solve dy/dx = 3x\u00b2y, y=2 when x=1.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Solve dy/dx = (x+1)/(y(y+1)) giving an implicit solution.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How many constants of integration are needed when solving a first-order DE?' }
        ],
        summaryText: 'Separate: 1/g(y) dy = f(x) dx \u2192 integrate \u2192 +C \u2192 apply IC for particular solution.',
        ready: true
    },
    evidence: []
};
