import os

BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'

# ─── note_2_2_0: Rational expressions ────────────────────────────────────────
note_2_2_0 = """/**
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
                text: 'Factorise the numerator: x² − 4 = (x − 2)(x + 2)  [difference of two squares]\\nFactorise the denominator: x² + 2x − 8 = (x + 4)(x − 2)  [find two numbers: +4 and −2]\\n\\nSo the expression becomes:\\n\\n  (x − 2)(x + 2)         (x + 2)\\n  ──────────────  =  ───────────\\n  (x + 4)(x − 2)         (x + 4)\\n\\n(The factor (x − 2) cancels, valid for x ≠ 2.)\\n\\nAnswer: (x + 2) / (x + 4)'
            },
            terms: []
        },
        {
            id: 'callout-warn',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistake: Cancelling Terms, not Factors',
                text: 'WRONG: (x² + 3x) / (x² + 5) ≠ (3x/5) — you cannot cancel x² from numerator and denominator because x² is not a FACTOR of (x² + 5).\\n\\nRIGHT: (x² + 3x) / (x² + 5) cannot be simplified further since x² + 5 does not factorise over the integers.\\n\\nOnly cancel factors that multiply the WHOLE numerator or WHOLE denominator.'
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
                text: 'LCD = (x + 1)(x − 2)\\n\\nRewrite each fraction:\\n  3/(x + 1)  =  3(x − 2) / (x + 1)(x − 2)\\n  2/(x − 2)  =  2(x + 1) / (x + 1)(x − 2)\\n\\nAdd numerators:\\n  [3(x − 2) + 2(x + 1)] / (x + 1)(x − 2)\\n  = [3x − 6 + 2x + 2] / (x + 1)(x − 2)\\n  = (5x − 4) / (x + 1)(x − 2)'
            },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find: (2x)/(x² − 1) − 1/(x + 1)',
                text: 'Factorise: x² − 1 = (x − 1)(x + 1)\\nSo LCD = (x − 1)(x + 1)\\n\\n  (2x)/[(x−1)(x+1)]  −  (x−1)/[(x−1)(x+1)]\\n  = [2x − (x − 1)] / (x − 1)(x + 1)\\n  = (2x − x + 1) / (x − 1)(x + 1)\\n  = (x + 1) / (x − 1)(x + 1)\\n  = 1 / (x − 1)     [cancel (x + 1), valid for x ≠ −1]'
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
                text: 'Flip and multiply:\\n  = [(x² − x − 6)/(x + 1)] × [(x² − 1)/(x − 3)]\\n\\nFactorise:\\n  x² − x − 6 = (x − 3)(x + 2)\\n  x² − 1 = (x − 1)(x + 1)\\n\\nSubstitute:\\n  = [(x − 3)(x + 2) × (x − 1)(x + 1)] / [(x + 1)(x − 3)]\\n\\nCancel (x − 3) and (x + 1):\\n  = (x + 2)(x − 1)\\n  = x² + x − 2'
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
"""

# ─── note_2_2_1: Polynomial division ─────────────────────────────────────────
note_2_2_1 = """/**
 * Seed note: Mathematics · WMA12 · Topic 2 · Subtopic 1
 * "Polynomial division"
 */

export const note_mathematics_2_2_1 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Divide a polynomial by a linear factor using algebraic long division, expressing the result as quotient + remainder.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is Polynomial Division?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'When you divide polynomial f(x) by divisor d(x), you obtain a <strong>quotient</strong> q(x) and a <strong>remainder</strong> r, so that:' },
            terms: []
        },
        {
            id: 'eq-div',
            type: 'equation',
            data: {
                html: 'f(x) = d(x) · q(x) + r',
                caption: 'Division algorithm for polynomials (r is a constant if d(x) is linear)'
            },
            terms: []
        },
        {
            id: 'p-note',
            type: 'paragraph',
            data: { text: 'When dividing by a <strong>linear factor</strong> (ax + b), the remainder r is always a constant (degree 0). The degree of the quotient is one less than the degree of f(x).' },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Method: Algebraic Long Division', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Divide the <strong>leading term</strong> of the dividend by the leading term of the divisor → first term of quotient' },
                    { text: '<strong>Multiply</strong> that quotient term by the entire divisor' },
                    { text: '<strong>Subtract</strong> the result from the current dividend (align like terms)' },
                    { text: '<strong>Bring down</strong> the next term; repeat steps 1–3 until no terms remain' },
                    { text: 'The final value after all subtractions is the <strong>remainder</strong>' }
                ]
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Divide by (x − 3)', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Divide (2x³ − 3x² − 11x + 6) by (x − 3)',
                text: 'Set up: 2x³ − 3x² − 11x + 6 ÷ (x − 3)\\n\\nStep 1: 2x³ ÷ x = 2x²  →  multiply: 2x²(x − 3) = 2x³ − 6x²\\n        Subtract: (2x³ − 3x²) − (2x³ − 6x²) = 3x²\\n\\nStep 2: Bring down −11x → 3x² − 11x\\n        3x² ÷ x = 3x  →  multiply: 3x(x − 3) = 3x² − 9x\\n        Subtract: (3x² − 11x) − (3x² − 9x) = −2x\\n\\nStep 3: Bring down +6 → −2x + 6\\n        −2x ÷ x = −2  →  multiply: −2(x − 3) = −2x + 6\\n        Subtract: (−2x + 6) − (−2x + 6) = 0  ← remainder = 0\\n\\nResult: 2x³ − 3x² − 11x + 6 = (x − 3)(2x² + 3x − 2)\\nVerify: (x−3)(2x²+3x−2) = (x−3)(2x−1)(x+2) ✓'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Division with Remainder', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Divide (x³ + 2x² − x + 5) by (x + 3)',
                text: 'Step 1: x³ ÷ x = x²  →  x²(x + 3) = x³ + 3x²\\n        Subtract: (x³ + 2x²) − (x³ + 3x²) = −x²\\n\\nStep 2: Bring down −x → −x² − x\\n        −x² ÷ x = −x  →  −x(x + 3) = −x² − 3x\\n        Subtract: (−x² − x) − (−x² − 3x) = 2x\\n\\nStep 3: Bring down +5 → 2x + 5\\n        2x ÷ x = 2  →  2(x + 3) = 2x + 6\\n        Subtract: (2x + 5) − (2x + 6) = −1  ← remainder = −1\\n\\nResult: x³ + 2x² − x + 5 = (x + 3)(x² − x + 2) − 1\\n\\nCheck with Remainder Theorem: f(−3) = (−3)³ + 2(−3)² − (−3) + 5 = −27 + 18 + 3 + 5 = −1 ✓'
            },
            terms: []
        },
        {
            id: 'h-missing',
            type: 'heading',
            data: { text: 'Missing Terms', level: 2 },
            terms: []
        },
        {
            id: 'p-missing',
            type: 'paragraph',
            data: { text: 'If the polynomial is missing a term (e.g. no x² term), insert a placeholder with coefficient 0. For example, x³ + 2x − 5 should be written as x³ + 0x² + 2x − 5 during long division.' },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Checking Your Answer',
                text: 'Always verify: expand (divisor)(quotient) + remainder and confirm it equals the original polynomial. For a linear divisor (x − a), also use the Remainder Theorem: substitute x = a into f(x) — this should equal your remainder r.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Polynomial division: f(x) = d(x)·q(x) + r. Long division: divide leading terms, multiply, subtract, bring down — repeat. Remainder is a constant when dividing by (x − a). Insert 0 for missing terms. Check: (divisor)(quotient) + remainder = original polynomial.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-div', prompt: 'Write the division algorithm equation: what does f(x) equal when divided by d(x)?' },
            { id: 'c2', blockId: 'list-method', prompt: 'What are the 5 steps of algebraic long division?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Divide 2x³ − 3x² − 11x + 6 by (x − 3). What is the quotient?' },
            { id: 'c4', blockId: 'p-missing', prompt: 'How should you handle a missing term (e.g. no x² term) when doing long division?' },
            { id: 'c5', blockId: 'callout-tip', prompt: 'How do you check the result of a polynomial division?' }
        ],
        summaryText: 'Polynomial division: f(x) = d(x)·q(x) + r. Long division steps: divide leading terms → multiply → subtract → bring down → repeat. Remainder = constant for linear divisor. Insert 0x for missing terms. Verify with Remainder Theorem: f(a) = remainder when dividing by (x − a).',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_2_2: Factor theorem ───────────────────────────────────────────────
note_2_2_2 = """/**
 * Seed note: Mathematics · WMA12 · Topic 2 · Subtopic 2
 * "Factor theorem"
 */

export const note_mathematics_2_2_2 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Apply the factor theorem and remainder theorem to factorise polynomials, including cubics.' },
            terms: []
        },
        {
            id: 'h-remain',
            type: 'heading',
            data: { text: 'The Remainder Theorem', level: 2 },
            terms: []
        },
        {
            id: 'p-remain',
            type: 'paragraph',
            data: { text: 'When polynomial f(x) is divided by the linear factor (x − a), the remainder equals <strong>f(a)</strong>. You can find the remainder by substituting x = a directly — no long division required.' },
            terms: []
        },
        {
            id: 'callout-remain',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Remainder Theorem',
                text: 'When f(x) is divided by (x − a), the remainder = f(a).\\n\\nMore generally: when f(x) is divided by (ax − b), the remainder = f(b/a).'
            },
            terms: []
        },
        {
            id: 'h-factor',
            type: 'heading',
            data: { text: 'The Factor Theorem', level: 2 },
            terms: []
        },
        {
            id: 'p-factor',
            type: 'paragraph',
            data: { text: 'The factor theorem is a special case of the remainder theorem:' },
            terms: []
        },
        {
            id: 'callout-factor',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Factor Theorem',
                text: '(x − a) is a factor of f(x)  ⟺  f(a) = 0\\n\\nIn other words: if substituting x = a into f(x) gives zero, then (x − a) is a factor. Conversely, if (x − a) is a factor, then f(a) must equal zero.'
            },
            terms: []
        },
        {
            id: 'h-factorcubic',
            type: 'heading',
            data: { text: 'Factorising a Cubic Using the Factor Theorem', level: 2 },
            terms: []
        },
        {
            id: 'list-steps',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Try values x = ±1, ±2, ±3, … (factors of the constant term) until f(a) = 0' },
                    { text: 'Once f(a) = 0, state that (x − a) is a factor' },
                    { text: 'Divide f(x) by (x − a) using long division (or inspection) to find the quadratic quotient' },
                    { text: 'Factorise the quadratic quotient (if possible)' },
                    { text: 'Write the full factorisation: f(x) = (x − a)(quadratic)' }
                ]
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Fully Factorise a Cubic', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Fully factorise f(x) = x³ − 6x² + 11x − 6',
                text: 'Step 1: Try x = 1:\\n  f(1) = 1 − 6 + 11 − 6 = 0  ✓\\n  ∴ (x − 1) is a factor.\\n\\nStep 2: Divide x³ − 6x² + 11x − 6 by (x − 1):\\n  x³ − 6x² + 11x − 6 = (x − 1)(x² − 5x + 6)\\n  (using long division or inspection)\\n\\nStep 3: Factorise x² − 5x + 6:\\n  Need two numbers multiplying to +6 and adding to −5: (−2) and (−3)\\n  x² − 5x + 6 = (x − 2)(x − 3)\\n\\nResult: f(x) = (x − 1)(x − 2)(x − 3)\\n\\nRoots: x = 1, x = 2, x = 3.'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Finding Unknown Coefficients', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Given f(x) = x³ + ax² − x + b, with (x − 2) a factor and remainder 3 when divided by (x + 1)',
                text: 'Since (x − 2) is a factor: f(2) = 0\\n  8 + 4a − 2 + b = 0\\n  4a + b = −6  … (1)\\n\\nRemainder theorem for (x + 1): f(−1) = 3\\n  −1 + a + 1 + b = 3\\n  a + b = 3  … (2)\\n\\nSolve simultaneously: (1) − (2):\\n  3a = −9  →  a = −3\\n  b = 3 − a = 3 + 3 = 6\\n\\nSo f(x) = x³ − 3x² − x + 6.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Which Values to Try First',
                text: 'Always try x = ±1 first as they are the quickest to compute. Then try x = ±2, ±3, and small fractions (±1/2, ±1/3) if the leading coefficient is not 1. The possible rational roots are always ±(factors of constant term) / (factors of leading coefficient).'
            },
            terms: []
        },
        {
            id: 'h-generalis',
            type: 'heading',
            data: { text: 'Factor Theorem for (ax − b)', level: 2 },
            terms: []
        },
        {
            id: 'p-generalis',
            type: 'paragraph',
            data: { text: 'For a non-monic factor (ax − b): <strong>(ax − b) is a factor of f(x) ⟺ f(b/a) = 0</strong>. For example, (2x − 1) is a factor of f(x) if and only if f(1/2) = 0.' },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Factor Theorem: (x − a) is a factor of f(x) ⟺ f(a) = 0. Remainder Theorem: f(x) ÷ (x − a) has remainder f(a). To factorise a cubic: find a root by inspection, divide out the linear factor, then factorise the remaining quadratic. Try x = ±1, ±2, ±3 first.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-factor', prompt: 'State the Factor Theorem. What must be true for (x − a) to be a factor of f(x)?' },
            { id: 'c2', blockId: 'callout-remain', prompt: 'State the Remainder Theorem. What is the remainder when f(x) is divided by (x − a)?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Fully factorise f(x) = x³ − 6x² + 11x − 6 using the factor theorem.' },
            { id: 'c4', blockId: 'list-steps', prompt: 'What are the steps for factorising a cubic using the factor theorem?' },
            { id: 'c5', blockId: 'p-generalis', prompt: 'When is (2x − 1) a factor of f(x), according to the factor theorem?' }
        ],
        summaryText: 'Factor theorem: f(a) = 0 ⟺ (x − a) is a factor. Remainder theorem: f(a) = remainder when dividing by (x − a). To factorise cubics: test f(±1), f(±2), etc. until zero found, state factor, divide out, then factorise the quadratic. For (ax − b): check f(b/a) = 0.',
        ready: true
    },
    evidence: []
};
"""

files = {
    'note_2_2_0.js': note_2_2_0,
    'note_2_2_1.js': note_2_2_1,
    'note_2_2_2.js': note_2_2_2,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w') as f:
        f.write(content.lstrip('\n'))
    print(f'Written: {filename}')

print('Topic 2 (Algebra & Functions) — all 3 notes done.')
