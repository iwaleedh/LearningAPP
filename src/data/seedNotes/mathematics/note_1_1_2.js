/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 2
 * "Rationalising the denominator"
 */

export const note_mathematics_1_1_2 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/rationalising-the-denominator.pdf',
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Rationalise denominators containing surds across three forms: simple surd \u221aa, conjugate form a \u00b1 \u221ab, and double-surd form \u221aa \u00b1 \u221ab.' }
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is Rationalising the Denominator?', level: 2 }
        },
        {
            id: 'list-what',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Rationalising the denominator rewrites a fraction so that the denominator is a rational number \u2014 containing no surds.' },
                    { text: 'Any surds are moved into the numerator instead; the value of the fraction does not change.' },
                    { text: 'Required when a question asks for an exact simplified form, or when a surd denominator complicates further work.' },
                    { text: 'There are three cases: (1) denominator is \u221aa; (2) denominator is a \u00b1 \u221ab; (3) denominator is \u221aa \u00b1 \u221ab.' }
                ]
            }
        },
        {
            id: 'h-dots',
            type: 'heading',
            data: { text: 'Key Identity: Difference of Two Squares', level: 2 }
        },
        {
            id: 'callout-dots',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Difference of Two Squares (DOTS)',
                text: '(a + \u221ab)(a \u2212 \u221ab) = a\u00b2 \u2212 b\n\n(\u221aa + \u221ab)(\u221aa \u2212 \u221ab) = a \u2212 b\n\nMultiplying a surd expression by its conjugate always produces a rational number. This is the foundation of Cases 2 and 3.'
            }
        },
        {
            id: 'svg-dots',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" style="width:100%;max-width:400px;display:block;margin:0 auto;"><defs><marker id="ah2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#ef4444"/></marker></defs><style>.t2{font-family:sans-serif;font-size:16px;fill:#374151;font-weight:700}.l2{font-family:sans-serif;font-size:12px;fill:#6b7280}</style><text x="160" y="35" text-anchor="middle" class="t2">(a + √b)(a − √b) = a² <tspan fill="#ef4444">− a√b + a√b</tspan> − b</text><path d="M 210" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah2)"/><text x="160" y="80" text-anchor="middle" class="t2" fill="#4f46e5">Result: a² − b (No surds)</text><line x1="175" y1="30" x2="245" y2="30" stroke="#ef4444" stroke-width="2"/></svg>',
                caption: 'How difference of two squares strictly eliminates any surd middle terms'
            }
        },
        {
            id: 'h-case1',
            type: 'heading',
            data: { text: 'Case 1: Simple Surd Denominator (\u221aa)', level: 2 }
        },
        {
            id: 'list-case1',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'The denominator is a single surd, e.g. \u221a5 or 3\u221a2.' },
                    { text: 'Multiply the numerator and denominator by the same surd \u221aa.' },
                    { text: 'Key result used: \u221aa \u00d7 \u221aa = a, so the denominator becomes the rational number a.' },
                    { text: 'If the denominator is k\u221aa (a surd with a coefficient), multiply only by \u221aa, not by k\u221aa.' }
                ]
            }
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example \u2014 Case 1',
                text: 'Rationalise 6 \u2215 (3\u221a2).\n\nMultiply numerator and denominator by \u221a2:\n= 6\u221a2 \u2215 (3 \u00d7 2)\n= 6\u221a2 \u2215 6\n= \u221a2'
            }
        },
        {
            id: 'h-case2',
            type: 'heading',
            data: { text: 'Case 2: Denominator of the Form a \u00b1 \u221ab', level: 2 }
        },
        {
            id: 'list-case2',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'The conjugate of (a + \u221ab) is (a \u2212 \u221ab), and vice versa.' },
                    { text: 'Multiply the numerator and denominator by the conjugate of the denominator.' },
                    { text: 'The denominator becomes (a + \u221ab)(a \u2212 \u221ab) = a\u00b2 \u2212 b, which is rational.' },
                    { text: 'Expand the numerator in full, then collect like terms and simplify.' }
                ]
            }
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example \u2014 Case 2',
                text: 'Rationalise 5 \u2215 (3 + \u221a2).\n\nConjugate of (3 + \u221a2) is (3 \u2212 \u221a2).\n\n= 5(3 \u2212 \u221a2) \u2215 [(3 + \u221a2)(3 \u2212 \u221a2)]\n= 5(3 \u2212 \u221a2) \u2215 (9 \u2212 2)\n= (15 \u2212 5\u221a2) \u2215 7'
            }
        },
        {
            id: 'h-case3',
            type: 'heading',
            data: { text: 'Case 3: Denominator of the Form \u221aa \u00b1 \u221ab', level: 2 }
        },
        {
            id: 'list-case3',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'The conjugate of (\u221aa + \u221ab) is (\u221aa \u2212 \u221ab), and vice versa.' },
                    { text: 'Multiply the numerator and denominator by the conjugate of the denominator.' },
                    { text: 'The denominator becomes (\u221aa)\u00b2 \u2212 (\u221ab)\u00b2 = a \u2212 b, which is rational provided a \u2260 b.' },
                    { text: 'Expand the numerator fully; simplify any resulting surds by collecting like surd terms.' }
                ]
            }
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example \u2014 Case 3',
                text: 'Rationalise (\u221a3 + 1) \u2215 (\u221a3 \u2212 \u221a2).\n\nConjugate of (\u221a3 \u2212 \u221a2) is (\u221a3 + \u221a2).\n\n= (\u221a3 + 1)(\u221a3 + \u221a2) \u2215 [(\u221a3 \u2212 \u221a2)(\u221a3 + \u221a2)]\n= (3 + \u221a6 + \u221a3 + \u221a2) \u2215 (3 \u2212 2)\n= 3 + \u221a6 + \u221a3 + \u221a2'
            }
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '\u2022 If an answer is required in the form p + q\u221an, remember p and q can be fractions \u2014 they do not have to be integers or positive numbers.\n\u2022 For Case 1, multiply only by the surd part: for 1 \u2215 (3\u221a5), multiply by \u221a5\u2215\u221a5, not by 3\u221a5 \u2215 3\u221a5.\n\u2022 Always expand the numerator fully after multiplying by the conjugate before simplifying.\n\u2022 Verify your answer: once rationalised, the denominator must contain no surds.'
            }
        },
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'I can identify which of the three cases applies to a given fraction', checked: false },
                    { text: 'I can rationalise a simple surd denominator by multiplying by \u221aa \u2215 \u221aa', checked: false },
                    { text: 'I can find the conjugate of (a \u00b1 \u221ab) and apply DOTS to rationalise the denominator', checked: false },
                    { text: 'I can use the conjugate of (\u221aa \u00b1 \u221ab) and apply DOTS to rationalise the denominator', checked: false },
                    { text: 'I can express the final answer in the required form, e.g. p + q\u221an where p and q are rational', checked: false }
                ]
            }
        },
        {
            id: 'sum',
            type: 'summary',
            data: { text: 'Case 1: \u221aa denominator \u2192 multiply by \u221aa\u2215\u221aa; denominator becomes a. Case 2: (a \u00b1 \u221ab) denominator \u2192 multiply by conjugate; denominator becomes a\u00b2 \u2212 b. Case 3: (\u221aa \u00b1 \u221ab) denominator \u2192 multiply by conjugate; denominator becomes a \u2212 b. All three use the DOTS identity.' }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-what', prompt: 'What does rationalising the denominator mean? State the three cases.' },
            { id: 'c2', blockId: 'callout-dots', prompt: 'State the DOTS identity for (a + \u221ab)(a \u2212 \u221ab) and for (\u221aa + \u221ab)(\u221aa \u2212 \u221ab).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Rationalise 4 \u2215 (1 + \u221a3). Show all steps.' },
            { id: 'c4', blockId: 'list-case3', prompt: 'What is the conjugate of (\u221a5 \u2212 \u221a3)? What does (\u221a5 \u2212 \u221a3)(\u221a5 + \u221a3) equal?' }
        ],
        summaryText: 'Case 1: \u00d7\u221aa\u2215\u221aa. Case 2: \u00d7conjugate, (a+\u221ab)(a\u2212\u221ab)=a\u00b2\u2212b. Case 3: \u00d7conjugate, (\u221aa+\u221ab)(\u221aa\u2212\u221ab)=a\u2212b.',
        ready: true
    },
    evidence: []
};
