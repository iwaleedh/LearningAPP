/**
 * Seed note: Mathematics · WMA12 · Topic 5 · Subtopic 3
 * "Equations involving logarithms and exponentials"
 */

export const note_mathematics_2_5_3 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Solve equations of the form aˣ = b and equations in which the unknown appears in a logarithm.' },
            terms: []
        },
        {
            id: 'h-exp-eq',
            type: 'heading',
            data: { text: 'Solving Exponential Equations', level: 2 },
            terms: []
        },
        {
            id: 'p-exp-eq',
            type: 'paragraph',
            data: { text: 'When the unknown is in the <em>power</em>, take <strong>ln</strong> of both sides and use the power rule ln(aˣ) = x·ln(a) to bring the index down.' },
            terms: []
        },
        {
            id: 'callout-method',
            type: 'callout',
            data: {
                style: 'key',
                title: 'General Strategy',
                text: 'To solve aˣ = b (a, b > 0):\n  Take ln of both sides: ln(aˣ) = ln(b)\n  x · ln(a) = ln(b)\n  x = ln(b) / ln(a)\n\nOr equivalently using change of base: x = log_a(b)'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve 3ˣ = 20, giving your answer to 3 significant figures.',
                text: 'Take ln of both sides:\n  ln(3ˣ) = ln(20)\n  x · ln(3) = ln(20)\n  x = ln(20)/ln(3) = 2.996.../1.099... ≈ 2.73 (3 s.f.)'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve 5^{2x−1} = 8.',
                text: '5^{2x−1} = 8\nTake ln: (2x−1)·ln(5) = ln(8)\n2x−1 = ln(8)/ln(5) = 2.079.../1.609... = 1.292...\n2x = 2.292...\nx = 1.15 (3 s.f.)'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Simultaneous Exponential Equations', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve simultaneously: 2ˣ = 3ʸ and x − 2y = 5.',
                text: 'From 2ˣ = 3ʸ:\n  x·ln(2) = y·ln(3)\n  x = y·ln(3)/ln(2)  … (i)\n\nFrom x − 2y = 5 and (i):\n  y·ln(3)/ln(2) − 2y = 5\n  y(ln(3)/ln(2) − 2) = 5\n  y(1.585 − 2) = 5\n  y(−0.415) = 5\n  y = −12.05...\n  x = 5 + 2(−12.05) = −19.1'
            },
            terms: []
        },
        {
            id: 'h-we4',
            type: 'heading',
            data: { text: 'Worked Example 4: Disguised Quadratic', level: 2 },
            terms: []
        },
        {
            id: 'callout-we4',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve e^{2x} − 5eˣ + 6 = 0.',
                text: 'Let u = eˣ (so u > 0):\n  u² − 5u + 6 = 0\n  (u−2)(u−3) = 0\n  u = 2 or u = 3\n\nSo eˣ = 2 → x = ln(2) ≈ 0.693\n   eˣ = 3 → x = ln(3) ≈ 1.099'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Disguised Quadratic Technique',
                text: 'When you see e^{2x} in an equation, substitute u = eˣ since e^{2x} = (eˣ)² = u². This converts the equation into a quadratic in u, which you can factorise or solve by the formula. Remember u = eˣ > 0 always — reject any solution u ≤ 0.'
            },
            terms: []
        },
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'I can solve aˣ = b by taking ln of both sides', checked: false },
                    { text: 'I can solve e^{kx+c} = d by using x = (ln d − c)/k', checked: false },
                    { text: 'I recognise when to use the substitution u = eˣ for disguised quadratics', checked: false },
                    { text: 'I remember to reject eˣ = negative (impossible)', checked: false }
                ]
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Exponential equations aˣ = b: take ln both sides, bring power down, solve. Disguised quadratic: substitute u = eˣ; solve quadratic; convert back; reject u ≤ 0. Simultaneous: express one variable in terms of the other using ln, then substitute.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-method', prompt: 'How do you solve aˣ = b using logarithms?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Solve 3ˣ = 20, giving your answer to 3 s.f.' },
            { id: 'c3', blockId: 'callout-we4', prompt: 'Solve e^{2x} − 5eˣ + 6 = 0.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What substitution converts e^{2x} − 5eˣ + 6 = 0 into a quadratic?' }
        ],
        summaryText: 'aˣ=b: x=ln b/ln a. Solve by taking ln and using power rule. Disguised quadratic: u=eˣ, solve, back-substitute, reject u≤0. Simultaneous: eliminate one variable using ln relationships.',
        ready: true
    },
    evidence: []
};
