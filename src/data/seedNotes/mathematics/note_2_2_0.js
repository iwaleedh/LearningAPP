/**
 * Seed note: Mathematics · WMA12 · Topic 2 · Subtopic 0
 * "Rational expressions"
 */

export const note_mathematics_2_2_0 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Simplify, add, subtract, multiply and divide algebraic fractions (rational expressions).' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What are Rational Expressions?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'A <strong>rational expression</strong> is a fraction where the numerator and denominator are both polynomials, such as <em>(x² − 4) / (x² + 2x − 8)</em>. They are manipulated using the same rules as numerical fractions, but you must first factorise to simplify or find common denominators.' },
            terms: []
        },
        {
            id: 'h-simplify',
            type: 'heading',
            data: { text: 'Simplifying Algebraic Fractions', level: 2 },
            terms: []
        },
        {
            id: 'p-simplify',
            type: 'paragraph',
            data: { text: 'To simplify, <strong>factorise both numerator and denominator fully</strong>, then cancel any common factors. You can only cancel entire factors — never individual terms.' },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Simplify: (x² − 4) / (x² + 2x − 8)',
                text: 'Factorise the numerator: x² − 4 = (x − 2)(x + 2)  [difference of two squares]\nFactorise the denominator: x² + 2x − 8 = (x + 4)(x − 2)  [find two numbers: +4 and −2]\n\nSo the expression becomes:\n\n  (x − 2)(x + 2)         (x + 2)\n  ──────────────  =  ───────────\n  (x + 4)(x − 2)         (x + 4)\n\n(The factor (x − 2) cancels, valid for x ≠ 2.)\n\nAnswer: (x + 2) / (x + 4)'
            },
            terms: []
        },
        {
            id: 'callout-warn',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistake: Cancelling Terms, not Factors',
                text: 'WRONG: (x² + 3x) / (x² + 5) ≠ (3x/5) — you cannot cancel x² from numerator and denominator because x² is not a FACTOR of (x² + 5).\n\nRIGHT: (x² + 3x) / (x² + 5) cannot be simplified further since x² + 5 does not factorise over the integers.\n\nOnly cancel factors that multiply the WHOLE numerator or WHOLE denominator.'
            },
            terms: []
        },
        {
            id: 'h-add',
            type: 'heading',
            data: { text: 'Adding and Subtracting Algebraic Fractions', level: 2 },
            terms: []
        },
        {
            id: 'p-add',
            type: 'paragraph',
            data: { text: 'To add or subtract fractions: find the <strong>lowest common denominator (LCD)</strong>, rewrite each fraction over the LCD, then combine the numerators.' },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find: 3/(x + 1) + 2/(x − 2)',
                text: 'LCD = (x + 1)(x − 2)\n\nRewrite each fraction:\n  3/(x + 1)  =  3(x − 2) / (x + 1)(x − 2)\n  2/(x − 2)  =  2(x + 1) / (x + 1)(x − 2)\n\nAdd numerators:\n  [3(x − 2) + 2(x + 1)] / (x + 1)(x − 2)\n  = [3x − 6 + 2x + 2] / (x + 1)(x − 2)\n  = (5x − 4) / (x + 1)(x − 2)'
            },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find: (2x)/(x² − 1) − 1/(x + 1)',
                text: 'Factorise: x² − 1 = (x − 1)(x + 1)\nSo LCD = (x − 1)(x + 1)\n\n  (2x)/[(x−1)(x+1)]  −  (x−1)/[(x−1)(x+1)]\n  = [2x − (x − 1)] / (x − 1)(x + 1)\n  = (2x − x + 1) / (x − 1)(x + 1)\n  = (x + 1) / (x − 1)(x + 1)\n  = 1 / (x − 1)     [cancel (x + 1), valid for x ≠ −1]'
            },
            terms: []
        },
        {
            id: 'h-mult',
            type: 'heading',
            data: { text: 'Multiplying and Dividing Algebraic Fractions', level: 2 },
            terms: []
        },
        {
            id: 'list-mult',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Multiply:</strong> (A/B) × (C/D) = AC / BD — factorise first, then cancel common factors' },
                    { text: '<strong>Divide:</strong> (A/B) ÷ (C/D) = (A/B) × (D/C) = AD / BC — flip the second fraction and multiply' }
                ]
            },
            terms: []
        },
        {
            id: 'callout-we4',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Simplify: [(x² − x − 6)/(x + 1)] ÷ [(x − 3)/(x² − 1)]',
                text: 'Flip and multiply:\n  = [(x² − x − 6)/(x + 1)] × [(x² − 1)/(x − 3)]\n\nFactorise:\n  x² − x − 6 = (x − 3)(x + 2)\n  x² − 1 = (x − 1)(x + 1)\n\nSubstitute:\n  = [(x − 3)(x + 2) × (x − 1)(x + 1)] / [(x + 1)(x − 3)]\n\nCancel (x − 3) and (x + 1):\n  = (x + 2)(x − 1)\n  = x² + x − 2'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Key Strategy',
                text: 'ALWAYS factorise everything before attempting any cancellation or combining. Trying to work with unexpanded expressions leads to errors. Check your answer by substituting a numerical value (e.g. x = 2) into the original and simplified forms — they should match.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Rational expressions: algebraic fractions with polynomial numerator and denominator. Simplify by factorising fully and cancelling common FACTORS (not terms). Add/subtract: find LCD, rewrite over LCD, combine numerators. Multiply: multiply top × top, bottom × bottom (factorise and cancel first). Divide: flip second fraction and multiply.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-we1', prompt: 'Simplify (x² − 4) / (x² + 2x − 8). What is the first step?' },
            { id: 'c2', blockId: 'callout-warn', prompt: 'Why can you NOT simplify (x² + 3x)/(x² + 5) by cancelling x²?' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'How do you add 3/(x+1) + 2/(x−2)? State the LCD and the result.' },
            { id: 'c4', blockId: 'list-mult', prompt: 'How do you divide two algebraic fractions?' },
            { id: 'c5', blockId: 'callout-tip', prompt: 'What should you always do before trying to simplify or combine algebraic fractions?' }
        ],
        summaryText: 'Rational expressions: always factorise first. Simplify by cancelling common factors. Add/subtract: LCD, rewrite, combine numerators. Multiply: top × top / bottom × bottom. Divide: flip second fraction, multiply. Never cancel terms — only factors.',
        ready: true
    },
    evidence: []
};
