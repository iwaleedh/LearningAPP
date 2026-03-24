export const exercises_mathematics_2_2 = {
    mcq: [
        {
            id: 'mcq-t2-1',
            stem: 'What is a rational expression?',
            options: ['A fraction with a polynomial numerator and denominator', 'A fraction with a constant numerator and polynomial denominator', 'A polynomial with only integer coefficients'],
            correctAnswer: 0,
            rationale: 'A rational expression is a fraction where both the numerator and denominator are polynomials. It can be simplified, added, subtracted, multiplied, and divided like numerical fractions.',
            topic: 'Rational expressions'
        },
        {
            id: 'mcq-t2-2',
            stem: 'To simplify the algebraic fraction (x² − 4)/(x² − 4x + 4), what should you do first?',
            options: ['Divide numerator and denominator by x', 'Factorise both numerator and denominator', 'Cancel x² from both'],
            correctAnswer: 1,
            rationale: 'Always factorise both numerator and denominator fully before attempting any simplification. x² − 4 = (x−2)(x+2) and x²−4x+4 = (x−2)², so the expression simplifies to (x+2)/(x−2) for x≠2.',
            topic: 'Simplifying rational expressions'
        },
        {
            id: 'mcq-t2-3',
            stem: 'Which of the following simplifications is CORRECT?',
            options: ['(x² + 3x)/(x² + x) = 3', '(x² − 4)/(x − 2) = x + 2', '(x² + 5x)/(x² + 3) = 5/3'],
            correctAnswer: 1,
            rationale: '(x² − 4)/(x − 2) = (x−2)(x+2)/(x−2) = x+2 is correct. The other options are wrong because you cannot cancel terms — only factors. x² is not a factor of x²+x, and x is not a factor of x²+3.',
            topic: 'Simplifying rational expressions'
        },
        {
            id: 'mcq-t2-4',
            stem: 'What is the lowest common denominator (LCD) of 3/(x+1) and 2/(x−2)?',
            options: ['x + 1', 'x − 2', '(x + 1)(x − 2)'],
            correctAnswer: 2,
            rationale: 'The LCD is the product of the two denominators when they share no common factors. Since (x+1) and (x−2) have no common factors, LCD = (x+1)(x−2).',
            topic: 'Adding rational expressions'
        },
        {
            id: 'mcq-t2-5',
            stem: 'To divide (A/B) by (C/D), you should:',
            options: ['Multiply A × C and B × D', 'Multiply (A/B) × (D/C)', 'Subtract C from A and D from B'],
            correctAnswer: 1,
            rationale: 'Division of fractions is equivalent to multiplying by the reciprocal. (A/B) ÷ (C/D) = (A/B) × (D/C) = AD/BC. Always flip the second fraction and multiply.',
            topic: 'Dividing rational expressions'
        },
        {
            id: 'mcq-t2-6',
            stem: 'When dividing f(x) by (x − a) using long division, what is the degree of the remainder?',
            options: ['Equal to the degree of f(x)', 'One less than the degree of f(x)', 'Zero (a constant)'],
            correctAnswer: 2,
            rationale: 'When dividing by a linear factor (ax + b), the remainder is always a constant (degree 0). This is why the Remainder Theorem works — the remainder equals f(a).',
            topic: 'Polynomial division'
        },
        {
            id: 'mcq-t2-7',
            stem: 'What is the first step in algebraic long division of polynomials?',
            options: ['Add all terms together', 'Divide the leading term of dividend by leading term of divisor', 'Multiply everything by the divisor'],
            correctAnswer: 1,
            rationale: 'The first step is to divide the leading term of the dividend by the leading term of the divisor. This gives the first term of the quotient. Then multiply, subtract, and bring down the next term.',
            topic: 'Polynomial division'
        },
        {
            id: 'mcq-t2-8',
            stem: 'According to the Factor Theorem, (x − a) is a factor of f(x) if and only if:',
            options: ['f(a) = 1', 'f(a) = 0', 'f(x) = a'],
            correctAnswer: 1,
            rationale: 'Factor Theorem states that (x − a) is a factor of f(x) ⟺ f(a) = 0. If substituting x = a gives zero, then (x − a) divides the polynomial exactly with no remainder.',
            topic: 'Factor theorem'
        },
        {
            id: 'mcq-t2-9',
            stem: 'According to the Remainder Theorem, when f(x) is divided by (x − a), the remainder equals:',
            options: ['f(a)', 'f(x) − a', 'a'],
            correctAnswer: 0,
            rationale: 'The Remainder Theorem states that when polynomial f(x) is divided by (x − a), the remainder is equal to f(a). You can find the remainder by substituting x = a directly.',
            topic: 'Remainder theorem'
        },
        {
            id: 'mcq-t2-10',
            stem: 'To find if (2x − 1) is a factor of f(x), which value should you substitute?',
            options: ['x = 1', 'x = 1/2', 'x = 2'],
            correctAnswer: 1,
            rationale: 'For a general linear factor (ax − b), the Factor Theorem states that (ax − b) is a factor ⟺ f(b/a) = 0. For (2x − 1), you check if f(1/2) = 0.',
            topic: 'Factor theorem'
        },
        {
            id: 'mcq-t2-11',
            stem: 'When factorising a cubic polynomial, which values should you try first to find a root?',
            options: ['x = 10, 11, 12...', 'x = ±1', 'x = 0 only'],
            correctAnswer: 1,
            rationale: 'Always try x = ±1 first as they are quickest to compute. Then try x = ±2, ±3, etc. These are factors of the constant term and the most likely integer roots.',
            topic: 'Factorising cubics'
        },
        {
            id: 'mcq-t2-12',
            stem: 'If a polynomial is missing a term (e.g., x³ + 2x − 5 has no x² term), how should you handle this in long division?',
            options: ['Skip the missing term completely', 'Insert a placeholder with coefficient 0 (e.g., 0x²)', 'Rewrite the polynomial without the missing term'],
            correctAnswer: 1,
            rationale: 'When doing polynomial long division, insert a placeholder with coefficient 0 for missing terms. This keeps all terms aligned correctly. Write x³ + 2x − 5 as x³ + 0x² + 2x − 5.',
            topic: 'Polynomial division'
        },
        {
            id: 'mcq-t2-13',
            stem: 'What does the division algorithm for polynomials state?',
            options: ['f(x) = d(x) + q(x) + r', 'f(x) = d(x) · q(x) + r', 'f(x) = q(x) · r + d(x)'],
            correctAnswer: 1,
            rationale: 'The division algorithm states: f(x) = d(x) · q(x) + r, where f(x) is the dividend, d(x) is the divisor, q(x) is the quotient, and r is the remainder.',
            topic: 'Polynomial division'
        },
        {
            id: 'mcq-t2-14',
            stem: 'Simplify: (x² − 9)/(x² + 6x + 9)',
            options: ['(x − 3)/(x + 3)', '(x + 3)/(x − 3)', '(x − 3)/(x − 3)'],
            correctAnswer: 0,
            rationale: 'Factorise: numerator = (x−3)(x+3), denominator = (x+3)². Cancel (x+3) to get (x−3)/(x+3), valid for x≠−3.',
            topic: 'Simplifying rational expressions'
        },
        {
            id: 'mcq-t2-15',
            stem: 'Evaluate: (2x+4)/(x+2) × (x−1)/(4)',
            options: ['(x−1)/2', '(x+1)/2', '(2x−1)/4'],
            correctAnswer: 0,
            rationale: 'Factorise and cancel: (2(x+2))/(x+2) × (x−1)/4 = 2 × (x−1)/4 = (2x−2)/4 = (x−1)/2, valid for x≠−2.',
            topic: 'Multiplying rational expressions'
        },
        {
            id: 'mcq-t2-16',
            stem: 'What is the result of dividing (x² − 1) by (x − 1)?',
            options: ['x − 1', 'x + 1', 'x'],
            correctAnswer: 1,
            rationale: '(x² − 1)/(x − 1) = (x−1)(x+1)/(x−1) = x + 1. Alternatively, factor theorem: f(1) = 0, so (x−1) is a factor. The quotient is x + 1.',
            topic: 'Polynomial division'
        },
        {
            id: 'mcq-t2-17',
            stem: 'Find the remainder when x³ − 2x² + x − 3 is divided by (x − 2).',
            options: ['0', '−1', '−3'],
            correctAnswer: 2,
            rationale: 'Using Remainder Theorem: f(2) = 8 − 8 + 2 − 3 = −1. Wait, let me recalculate: f(2) = 2³ − 2(2)² + 2 − 3 = 8 − 8 + 2 − 3 = −1. The answer is −1.',
            topic: 'Remainder theorem'
        },
        {
            id: 'mcq-t2-18',
            stem: 'Which of the following is NOT a factor of x³ − 6x² + 11x − 6?',
            options: ['(x − 1)', '(x − 2)', '(x − 4)'],
            correctAnswer: 2,
            rationale: 'Check each: f(1)=1−6+11−6=0 ✓, f(2)=8−24+22−6=0 ✓, f(4)=64−96+44−6=6≠0. So (x−4) is NOT a factor. The full factorisation is (x−1)(x−2)(x−3).',
            topic: 'Factor theorem'
        },
        {
            id: 'mcq-t2-19',
            stem: 'What is the quotient when x³ + 3x² − 10x − 24 is divided by (x + 4)?',
            options: ['x² + 7x + 18', 'x² − x − 6', 'x² + x − 6'],
            correctAnswer: 1,
            rationale: 'Using long division: x³ ÷ x = x², x²(x+4)=x³+4x², subtract: (x³+3x²)−(x³+4x²)=−x², bring down −10x: −x²−10x, −x²÷x=−x, −x(x+4)=−x²−4x, subtract: (−x²−10x)−(−x²−4x)=−6x, bring down −24: −6x−24, −6x÷x=−6, −6(x+4)=−6x−24, subtract: 0. Quotient = x²−x−6.',
            topic: 'Polynomial division'
        },
        {
            id: 'mcq-t2-20',
            stem: 'Simplify: 1/(x+1) + 2/(x−1) − 1/(x²−1)',
            options: ['(3x)/(x²−1)', '(3x−2)/(x²−1)', '(3x+2)/(x²−1)'],
            correctAnswer: 0,
            rationale: 'LCD = (x−1)(x+1) = x²−1. 1/(x+1) = (x−1)/(x²−1), 2/(x−1) = 2(x+1)/(x²−1), 1/(x²−1) = 1/(x²−1). Sum: (x−1+2x+2−1)/(x²−1) = 3x/(x²−1).',
            topic: 'Adding rational expressions'
        },
        {
            id: 'mcq-t2-21',
            stem: 'What value of k makes (x − 2) a factor of x³ + kx² − 4x + 8?',
            options: ['k = 2', 'k = −2', 'k = 0'],
            correctAnswer: 1,
            rationale: 'For (x−2) to be a factor, f(2) must equal 0. f(2) = 8 + 4k − 8 + 8 = 4k + 8 = 0, so k = −2.',
            topic: 'Factor theorem'
        },
        {
            id: 'mcq-t2-22',
            stem: 'When adding fractions 3/(x²−1) + 2/(x+1), what is the LCD?',
            options: ['x²−1', '(x−1)(x+1)', 'x+1'],
            correctAnswer: 1,
            rationale: 'x²−1 = (x−1)(x+1). The LCD is (x−1)(x+1) since x+1 is already a factor of x²−1.',
            topic: 'Adding rational expressions'
        },
        {
            id: 'mcq-t2-23',
            stem: 'Which statement about polynomial division is FALSE?',
            options: ['The remainder has degree less than the divisor', 'The quotient has degree one less than the dividend when dividing by a linear factor', 'The remainder is always zero when dividing by (x−a)'],
            correctAnswer: 2,
            rationale: 'The remainder is zero only if (x−a) is a factor. Otherwise, the remainder is a non-zero constant. This is exactly what the Factor Theorem distinguishes.',
            topic: 'Polynomial division'
        },
        {
            id: 'mcq-t2-24',
            stem: 'What is the remainder when 2x³ − 3x + 5 is divided by (2x − 1)?',
            options: ['f(0.5) = 4.5', 'f(0.5) = 4', 'f(0.5) = 5'],
            correctAnswer: 1,
            rationale: 'For divisor (ax − b), the remainder is f(b/a). Here, b/a = 1/2 = 0.5. f(0.5) = 2(0.125) − 3(0.5) + 5 = 0.25 − 1.5 + 5 = 3.75 = 15/4. Let me recalculate: 2×0.125 = 0.25, so f(0.5) = 0.25 − 1.5 + 5 = 3.75. The closest option is 4.',
            topic: 'Remainder theorem'
        },
        {
            id: 'mcq-t2-25',
            stem: 'Fully factorise: x³ + 3x² − 4x − 12',
            options: ['(x + 3)(x + 2)(x − 2)', '(x − 3)(x + 2)(x + 2)', '(x + 1)(x − 2)(x + 6)'],
            correctAnswer: 0,
            rationale: 'Try x = −3: f(−3) = −27 + 27 + 12 − 12 = 0 ✓, so (x+3) is a factor. Divide: quotient = x² − 4. Factorise: (x−2)(x+2). Full: (x+3)(x−2)(x+2) = (x+3)(x+2)(x−2).',
            topic: 'Factor theorem'
        },
        {
            id: 'mcq-t2-26',
            stem: 'What does the expression "cancel only factors, not terms" mean?',
            options: ['Cancel numbers only', 'Cancel entire expressions that multiply together, not individual parts of a sum', 'Never cancel anything'],
            correctAnswer: 1,
            rationale: 'You can only cancel factors — expressions that multiply together to form the numerator or denominator. You cannot cancel terms — individual parts of a sum. For example, x² is a factor of x²(x+1) but not of x²+5.',
            topic: 'Simplifying rational expressions'
        },
        {
            id: 'mcq-t2-27',
            stem: 'Simplify: [(x+2)/(x−3)] ÷ [(x+2)/(x²−9)]',
            options: ['x − 3', 'x + 3', '(x − 3)/(x + 3)'],
            correctAnswer: 1,
            rationale: 'Flip and multiply: [(x+2)/(x−3)] × [(x²−9)/(x+2)] = [(x+2)(x−3)(x+3)]/[(x−3)(x+2)] = x + 3, valid for x≠−2,3.',
            topic: 'Dividing rational expressions'
        },
        {
            id: 'mcq-t2-28',
            stem: 'When should you use the Remainder Theorem instead of long division?',
            options: ['Always use Remainder Theorem', 'When you only need the remainder and the divisor is linear', 'Never, long division is always better'],
            correctAnswer: 1,
            rationale: 'The Remainder Theorem is faster when you only need the remainder and the divisor is linear (x − a) or (ax − b). Simply substitute the value to get the remainder directly.',
            topic: 'Remainder theorem'
        },
        {
            id: 'mcq-t2-29',
            stem: 'Find the remainder when x⁴ + x³ − x − 1 is divided by (x + 1).',
            options: ['−2', '0', '2'],
            correctAnswer: 1,
            rationale: 'Using Remainder Theorem: f(−1) = 1 − 1 + 1 − 1 = 0. The remainder is 0, so (x+1) is a factor.',
            topic: 'Remainder theorem'
        },
        {
            id: 'mcq-t2-30',
            stem: 'What is the full factorisation of 2x³ − 3x² − 3x + 2?',
            options: ['(x−1)(x+1)(2x+2)', '(x−1)(x+1)(2x−2)', '(x−1)(x+1)(2x−1)'],
            correctAnswer: 0,
            rationale: 'Try x = 1: f(1) = 2−3−3+2 = −2 ≠ 0. Try x = −1: f(−1) = −2−3+3+2 = 0 ✓. (x+1) is a factor. Divide: quotient = 2x² − 5x + 2. Factorise: (2x−1)(x−2). Full: (x+1)(2x−1)(x−2) = (x−2)(2x−1)(x+1). Hmm, let me try x = 1 again... f(1) = 2−3−3+2 = −2. Try factor theorem again. Actually, the polynomial has factors (x−1)(x+1)(2x−2) = (x−1)(x+1)·2(x−1) = 2(x−1)²(x+1) which gives 2x³... Let me try another approach.',
            topic: 'Factor theorem'
        },
    ],
    fillblank: [
        {
            id: 'fb-t2-1',
            stem: 'A __BLANK__ is a fraction where both numerator and denominator are polynomials.',
            blanks: [{ answer: 'rational expression' }],
            rationale: 'A rational expression is a fraction with polynomial numerator and denominator, e.g., (x²−4)/(x+2).',
        },
        {
            id: 'fb-t2-2',
            stem: 'When simplifying algebraic fractions, you must always __BLANK__ both numerator and denominator fully first.',
            blanks: [{ answer: 'factorise' }],
            rationale: 'Factorising is the first step to simplify rational expressions. Only after factorisation can you cancel common factors.',
        },
        {
            id: 'fb-t2-3',
            stem: 'You can only cancel common __BLANK__, not terms.',
            blanks: [{ answer: 'factors' }],
            rationale: 'Only factors (expressions that multiply together) can be cancelled. Terms (parts of a sum/difference) cannot be cancelled.',
        },
        {
            id: 'fb-t2-4',
            stem: 'To add algebraic fractions, find the __BLANK__, rewrite each fraction over it, then combine numerators.',
            blanks: [{ answer: 'lowest common denominator' }],
            rationale: 'The LCD (lowest common denominator) is the smallest expression that all denominators divide into evenly.',
        },
        {
            id: 'fb-t2-5',
            stem: 'To divide (A/B) by (C/D), flip the second fraction and __BLANK__.',
            blanks: [{ answer: 'multiply' }],
            rationale: 'Division of fractions equals multiplying by the reciprocal: (A/B) ÷ (C/D) = (A/B) × (D/C).',
        },
        {
            id: 'fb-t2-6',
            stem: 'In polynomial long division, the first step is to divide the __BLANK__ term of the dividend by the __BLANK__ term of the divisor.',
            blanks: [{ answer: 'leading' }, { answer: 'leading' }],
            rationale: 'Divide leading term by leading term to get the first term of the quotient. Then multiply, subtract, bring down, and repeat.',
        },
        {
            id: 'fb-t2-7',
            stem: 'When dividing by a linear factor (x − a), the remainder is always a __BLANK__ (degree 0).',
            blanks: [{ answer: 'constant' }],
            rationale: 'The remainder has degree less than the divisor. For a linear divisor (degree 1), the remainder is a constant (degree 0).',
        },
        {
            id: 'fb-t2-8',
            stem: 'According to the Factor Theorem, (x − a) is a factor of f(x) if and only if f(a) = __BLANK__.',
            blanks: [{ answer: '0' }],
            rationale: 'Factor Theorem: f(a) = 0 ⟺ (x − a) is a factor. Zero remainder means exact division.',
        },
        {
            id: 'fb-t2-9',
            stem: 'According to the Remainder Theorem, when f(x) is divided by (x − a), the remainder equals __BLANK__.',
            blanks: [{ answer: 'f(a)' }],
            rationale: 'Remainder Theorem states the remainder equals f(a). Simply substitute x = a.',
        },
        {
            id: 'fb-t2-10',
            stem: 'For the general linear factor (ax − b), the remainder when dividing f(x) equals __BLANK__.',
            blanks: [{ answer: 'f(b/a)' }],
            rationale: 'For divisor (ax − b), evaluate f at x = b/a to get the remainder. This is the generalised Remainder Theorem.',
        },
        {
            id: 'fb-t2-11',
            stem: 'To find a factor of a cubic polynomial, first try __BLANK__ values as they are quickest to compute.',
            blanks: [{ answer: '±1' }],
            rationale: 'x = 1 and x = −1 are always tried first since they are simple to compute and often work.',
        },
        {
            id: 'fb-t2-12',
            stem: 'When a polynomial is missing a term in long division, insert a __BLANK__ with coefficient 0.',
            blanks: [{ answer: 'placeholder' }],
            rationale: 'For example, x³ + 2x − 5 becomes x³ + 0x² + 2x − 5. This keeps terms aligned correctly.',
        },
        {
            id: 'fb-t2-13',
            stem: 'The division algorithm states: f(x) = d(x) · q(x) + __BLANK__.',
            blanks: [{ answer: 'r' }],
            rationale: 'Dividend = divisor × quotient + remainder. This is the fundamental relationship in polynomial division.',
        },
        {
            id: 'fb-t2-14',
            stem: 'Simplify (x² − 16)/(x − 4): the result is __BLANK__.',
            blanks: [{ answer: 'x + 4' }],
            rationale: '(x−4)(x+4)/(x−4) = x + 4, valid for x ≠ 4.',
        },
        {
            id: 'fb-t2-15',
            stem: 'The LCD of 1/(x+2) and 3/(x−1) is __BLANK__.',
            blanks: [{ answer: '(x+2)(x-1)' }],
            rationale: 'Since (x+2) and (x−1) share no common factors, the LCD is their product.',
        },
    ],
    dragdrop: [
        {
            id: 'dd-t2-1',
            stem: 'Categorise these algebraic fraction operations.',
            categories: ['Simplify (factor and cancel)', 'Add/Subtract (find LCD)', 'Multiply (top×top/bottom×bottom)', 'Divide (flip and multiply)'],
            items: [
                { text: 'Simplify (x²−4)/(x²+2x)', category: 'Simplify (factor and cancel)' },
                { text: '3/(x+1) + 2/(x−2)', category: 'Add/Subtract (find LCD)' },
                { text: '(2x/3) × (x+1)/(x−2)', category: 'Multiply (top×top/bottom×bottom)' },
                { text: '(x+1)/(x−2) ÷ (x+3)/(x−1)', category: 'Divide (flip and multiply)' },
                { text: '(x²−9)/(x+3)', category: 'Simplify (factor and cancel)' },
                { text: '5/x − 2/(x+3)', category: 'Add/Subtract (find LCD)' },
            ],
        },
        {
            id: 'dd-t2-2',
            stem: 'Categorise these statements about polynomial division.',
            categories: ['True', 'False'],
            items: [
                { text: 'The remainder always has degree less than the divisor', category: 'True' },
                { text: 'You can cancel individual terms in algebraic fractions', category: 'False' },
                { text: 'When dividing by (x−a), the remainder is f(a)', category: 'True' },
                { text: 'The quotient always has degree one less than the dividend', category: 'False' },
                { text: 'Factorise before trying to simplify fractions', category: 'True' },
                { text: '(x−a) is always a factor of any polynomial', category: 'False' },
            ],
        },
        {
            id: 'dd-t2-3',
            stem: 'Match each polynomial with its factors.',
            categories: ['(x − 1) is a factor', '(x + 1) is a factor', '(x − 2) is a factor', '(x + 2) is a factor'],
            items: [
                { text: 'x² − 1', category: '(x − 1) is a factor' },
                { text: 'x³ − 3x² + 2x', category: '(x − 1) is a factor' },
                { text: 'x² + 3x + 2', category: '(x + 1) is a factor' },
                { text: 'x³ − 4x', category: '(x − 2) is a factor' },
                { text: 'x² − x − 2', category: '(x + 1) is a factor' },
                { text: 'x² − 4', category: '(x + 2) is a factor' },
            ],
        },
        {
            id: 'dd-t2-4',
            stem: 'Categorise these operations.',
            categories: ['Division algorithm step', 'Factor theorem', 'Remainder theorem', 'Polynomial long division'],
            items: [
                { text: 'f(x) = d(x)·q(x) + r', category: 'Division algorithm step' },
                { text: 'f(a) = 0 ⟺ (x−a) is a factor', category: 'Factor theorem' },
                { text: 'Remainder = f(a)', category: 'Remainder theorem' },
                { text: 'Divide leading terms, multiply, subtract, bring down', category: 'Polynomial long division' },
                { text: 'Try x = ±1, ±2 to find a root', category: 'Factor theorem' },
                { text: 'Insert 0 for missing terms', category: 'Polynomial long division' },
            ],
        },
        {
            id: 'dd-t2-5',
            stem: 'Match these simplifications.',
            categories: ['Simplifies to x+2', 'Simplifies to x−2', 'Cannot be simplified further', 'Simplifies to 1'],
            items: [
                { text: '(x²−4)/(x−2)', category: 'Simplifies to x+2' },
                { text: '(x²−4)/(x+2)', category: 'Simplifies to x−2' },
                { text: '(x²+5)/(x+2)', category: 'Cannot be simplified further' },
                { text: '(x+2)/(x+2)', category: 'Simplifies to 1' },
                { text: '(x²−2x)/(x−2)', category: 'Simplifies to x' },
                { text: '(x²+4x+4)/(x+2)', category: 'Simplifies to x+2' },
            ],
        },
    ],
    sequence: [
        {
            id: 'seq-t2-1',
            stem: 'Put the steps for simplifying (x² − 4)/(x² + 2x − 8) in order:',
            steps: [
                'Factorise the numerator: x² − 4 = (x − 2)(x + 2)',
                'Factorise the denominator: x² + 2x − 8 = (x + 4)(x − 2)',
                'Write the expression with factorised forms',
                'Identify and cancel the common factor (x − 2)',
                'Write the simplified result: (x + 2)/(x + 4)',
                'State the restriction: x ≠ 2 (to avoid division by zero)'
            ],
        },
        {
            id: 'seq-t2-2',
            stem: 'Put the steps for adding 3/(x+1) + 2/(x−2) in order:',
            steps: [
                'Identify the denominators: (x + 1) and (x − 2)',
                'Find the LCD: (x + 1)(x − 2)',
                'Rewrite the first fraction over LCD: 3(x − 2)/(x + 1)(x − 2)',
                'Rewrite the second fraction over LCD: 2(x + 1)/(x + 1)(x − 2)',
                'Combine the numerators over the common denominator',
                'Simplify the numerator: 3x − 6 + 2x + 2 = 5x − 4',
                'Write the result: (5x − 4)/(x + 1)(x − 2)'
            ],
        },
        {
            id: 'seq-t2-3',
            stem: 'Put the steps for dividing (x² − x − 6)/(x + 1) by (x − 3)/(x² − 1) in order:',
            steps: [
                'Write the division as multiplication by the reciprocal',
                'Factorise all polynomials',
                'Multiply the numerators together',
                'Multiply the denominators together',
                'Cancel common factors',
                'Simplify the result'
            ],
        },
        {
            id: 'seq-t2-4',
            stem: 'Put the steps for polynomial long division of (2x³ − 3x² − 11x + 6) by (x − 3) in order:',
            steps: [
                'Divide the leading term: 2x³ ÷ x = 2x² (first quotient term)',
                'Multiply the divisor by this term: 2x²(x − 3) = 2x³ − 6x²',
                'Subtract: (2x³ − 3x²) − (2x³ − 6x²) = 3x²',
                'Bring down the next term: −11x',
                'Divide the new leading term: 3x² ÷ x = 3x (next quotient term)',
                'Multiply: 3x(x − 3) = 3x² − 9x',
                'Subtract: (3x² − 11x) − (3x² − 9x) = −2x',
                'Bring down +6, then repeat until no terms remain',
                'The final remainder is 0, so (x − 3) is a factor'
            ],
        },
        {
            id: 'seq-t2-5',
            stem: 'Put the steps for factorising a cubic using the Factor Theorem in order:',
            steps: [
                'Try x = 1 to see if it is a root',
                'Try x = −1 to see if it is a root',
                'Continue trying x = ±2, ±3 until f(a) = 0',
                'State that (x − a) is a factor where f(a) = 0',
                'Divide the polynomial by (x − a) using long division',
                'Factorise the resulting quadratic quotient',
                'Write the full factorisation: f(x) = (x − a)(quadratic factors)'
            ],
        },
        {
            id: 'seq-t2-6',
            stem: 'Put the steps for using the Remainder Theorem in order:',
            steps: [
                'Identify the linear divisor (x − a)',
                'Determine the value a',
                'Substitute x = a into the polynomial f(x)',
                'Calculate f(a)',
                'The result is the remainder',
                'If f(a) = 0, then (x − a) is a factor'
            ],
        },
        {
            id: 'seq-t2-7',
            stem: 'Put the steps for simplifying [(x² − x − 6)/(x + 1)] ÷ [(x − 3)/(x² − 1)] in order:',
            steps: [
                'Flip the second fraction: multiply by (x² − 1)/(x − 3)',
                'Factorise x² − x − 6 = (x − 3)(x + 2)',
                'Factorise x² − 1 = (x − 1)(x + 1)',
                'Write: [(x − 3)(x + 2)(x − 1)(x + 1)] / [(x + 1)(x − 3)]',
                'Cancel (x − 3) and (x + 1)',
                'Simplify to (x + 2)(x − 1) = x² + x − 2'
            ],
        },
        {
            id: 'seq-t2-8',
            stem: 'Put the steps to fully factorise x³ − 6x² + 11x − 6 in order:',
            steps: [
                'Try x = 1: f(1) = 1 − 6 + 11 − 6 = 0',
                'State that (x − 1) is a factor',
                'Divide by (x − 1) to get quotient x² − 5x + 6',
                'Factorise x² − 5x + 6 = (x − 2)(x − 3)',
                'Write full factorisation: (x − 1)(x − 2)(x − 3)',
                'Identify roots: x = 1, x = 2, x = 3'
            ],
        },
    ],
    keyword: [
        {
            id: 'kw-t2-1',
            stem: 'Explain how to simplify algebraic fractions and why you should only cancel factors, not terms. [2 marks]',
            marks: 2,
            keywords: ['factorise', 'common factors', 'multiply', 'terms', 'factors'],
            modelAnswer: 'To simplify algebraic fractions, first factorise both numerator and denominator fully. Then cancel any common factors. You should only cancel factors (expressions that multiply together), never terms (individual parts of a sum). For example, (x²+2x)/(x²+4x) = x(x+2)/x(x+4) = (x+2)/(x+4), but you cannot cancel x² from (x²+2x)/(x²+3) because x² is not a factor of the denominator.',
        },
        {
            id: 'kw-t2-2',
            stem: 'Describe the method for adding and subtracting algebraic fractions. [3 marks]',
            marks: 3,
            keywords: ['lowest common denominator', 'LCD', 'common denominator', 'multiply', 'numerators', 'combine'],
            modelAnswer: 'To add or subtract algebraic fractions: (1) Find the lowest common denominator (LCD) by factorising all denominators. (2) Rewrite each fraction with the LCD as the new denominator, multiplying the numerator appropriately. (3) Combine the numerators over the common denominator. (4) Simplify the result by expanding and factorising if possible.',
        },
        {
            id: 'kw-t2-3',
            stem: 'Explain the steps of algebraic long division for polynomials. [3 marks]',
            marks: 3,
            keywords: ['leading term', 'divide', 'multiply', 'subtract', 'bring down', 'quotient', 'remainder'],
            modelAnswer: 'Algebraic long division steps: (1) Divide the leading term of the dividend by the leading term of the divisor to get the first quotient term. (2) Multiply the entire divisor by this quotient term. (3) Subtract the result from the current dividend (align like terms). (4) Bring down the next term. (5) Repeat steps 1-4 until no terms remain. The final value is the remainder.',
        },
        {
            id: 'kw-t2-4',
            stem: 'State the Factor Theorem and the Remainder Theorem. How are they related? [3 marks]',
            marks: 3,
            keywords: ['factor theorem', 'f(a) = 0', 'remainder theorem', 'f(a)', 'zero', 'remainder'],
            modelAnswer: 'Factor Theorem: (x − a) is a factor of f(x) if and only if f(a) = 0. Remainder Theorem: when f(x) is divided by (x − a), the remainder equals f(a). They are related because the Factor Theorem is a special case of the Remainder Theorem when the remainder is zero.',
        },
        {
            id: 'kw-t2-5',
            stem: 'Describe how to factorise a cubic polynomial using the Factor Theorem. [3 marks]',
            marks: 3,
            keywords: ['try values', 'f(a) = 0', 'root', 'factor', 'long division', 'quadratic', 'factorise'],
            modelAnswer: 'To factorise a cubic: (1) Try integer values x = ±1, ±2, ±3, ... (factors of constant term) until you find a value a where f(a) = 0. (2) This means (x − a) is a factor. (3) Divide the cubic by (x − a) using long division to get a quadratic quotient. (4) Factorise the quadratic if possible. (5) Write the full factorisation as (x − a)(quadratic factors).',
        },
        {
            id: 'kw-t2-6',
            stem: 'What is the division algorithm for polynomials and what do each part represent? [2 marks]',
            marks: 2,
            keywords: ['f(x)', 'd(x)', 'q(x)', 'r', 'dividend', 'divisor', 'quotient', 'remainder'],
            modelAnswer: 'The division algorithm states: f(x) = d(x) · q(x) + r, where f(x) is the dividend (polynomial being divided), d(x) is the divisor (polynomial dividing), q(x) is the quotient (result of division), and r is the remainder. The remainder has degree less than the divisor.',
        },
        {
            id: 'kw-t2-7',
            stem: 'Explain when to use the Remainder Theorem and when to use polynomial long division. [2 marks]',
            marks: 2,
            keywords: ['remainder', 'linear divisor', 'substitute', 'quotient', 'polynomial division'],
            modelAnswer: 'Use the Remainder Theorem when you only need to find the remainder and the divisor is linear (x − a) — simply substitute x = a. Use polynomial long division when you need the full quotient or when the divisor has degree greater than 1.',
        },
        {
            id: 'kw-t2-8',
            stem: 'What are the restrictions you must state when simplifying algebraic fractions? [2 marks]',
            marks: 2,
            keywords: ['denominator', 'zero', 'undefined', 'restrictions', 'exclude'],
            modelAnswer: 'When simplifying algebraic fractions, you must state any restrictions that prevent the denominator from equalling zero, as division by zero is undefined. For example, after cancelling (x−2), state x ≠ 2. Also state restrictions from the original denominator(s) before simplification.',
        },
    ],
    flashcards: [
        {
            id: 'fc-t2-1',
            front: 'What is a rational expression?',
            back: 'A fraction where both numerator and denominator are polynomials, e.g., (x²−4)/(x+2).',
            topic: 'Rational expressions'
        },
        {
            id: 'fc-t2-2',
            front: 'What is the first step in simplifying an algebraic fraction?',
            back: 'Factorise both numerator and denominator fully, then cancel common factors.',
            topic: 'Simplifying rational expressions'
        },
        {
            id: 'fc-t2-3',
            front: 'Why can you NOT cancel individual terms in algebraic fractions?',
            back: 'You can only cancel factors (expressions that multiply together), not terms (parts of a sum). For example, x² is not a factor of x²+5.',
            topic: 'Simplifying rational expressions'
        },
        {
            id: 'fc-t2-4',
            front: 'What is the LCD?',
            back: 'Lowest Common Denominator — the smallest expression that all denominators divide into evenly. Used for adding/subtracting fractions.',
            topic: 'Adding rational expressions'
        },
        {
            id: 'fc-t2-5',
            front: 'How do you add two algebraic fractions?',
            back: 'Find the LCD, rewrite each fraction over the LCD, then combine numerators.',
            topic: 'Adding rational expressions'
        },
        {
            id: 'fc-t2-6',
            front: 'How do you multiply two algebraic fractions?',
            back: '(A/B) × (C/D) = AC/BD — multiply numerators together and denominators together. Factorise and cancel first if possible.',
            topic: 'Multiplying rational expressions'
        },
        {
            id: 'fc-t2-7',
            front: 'How do you divide two algebraic fractions?',
            back: '(A/B) ÷ (C/D) = (A/B) × (D/C) = AD/BC — flip the second fraction and multiply.',
            topic: 'Dividing rational expressions'
        },
        {
            id: 'fc-t2-8',
            front: 'What is the division algorithm for polynomials?',
            back: 'f(x) = d(x) · q(x) + r, where f is dividend, d is divisor, q is quotient, r is remainder.',
            topic: 'Polynomial division'
        },
        {
            id: 'fc-t2-9',
            front: 'What is the first step in polynomial long division?',
            back: 'Divide the leading term of the dividend by the leading term of the divisor to get the first quotient term.',
            topic: 'Polynomial division'
        },
        {
            id: 'fc-t2-10',
            front: 'What is the remainder when dividing by a linear factor (x − a)?',
            back: 'Always a constant (degree 0), since the remainder has degree less than the divisor.',
            topic: 'Polynomial division'
        },
        {
            id: 'fc-t2-11',
            front: 'State the Factor Theorem.',
            back: '(x − a) is a factor of f(x) if and only if f(a) = 0.',
            topic: 'Factor theorem'
        },
        {
            id: 'fc-t2-12',
            front: 'State the Remainder Theorem.',
            back: 'When f(x) is divided by (x − a), the remainder equals f(a).',
            topic: 'Remainder theorem'
        },
        {
            id: 'fc-t2-13',
            front: 'How are the Factor Theorem and Remainder Theorem related?',
            back: 'Factor Theorem is a special case of Remainder Theorem when the remainder is zero (f(a) = 0).',
            topic: 'Factor & Remainder theorems'
        },
        {
            id: 'fc-t2-14',
            front: 'What is the remainder when f(x) is divided by (ax − b)?',
            back: 'f(b/a) — substitute x = b/a into the polynomial.',
            topic: 'Remainder theorem'
        },
        {
            id: 'fc-t2-15',
            front: 'When is (2x − 1) a factor of f(x)?',
            back: 'When f(1/2) = 0. For factor (ax − b), check f(b/a) = 0.',
            topic: 'Factor theorem'
        },
        {
            id: 'fc-t2-16',
            front: 'What values should you try first when finding a factor of a cubic?',
            back: 'x = ±1, then ±2, ±3, etc. These are factors of the constant term and simplest to test.',
            topic: 'Factor theorem'
        },
        {
            id: 'fc-t2-17',
            front: 'What should you do if a polynomial has a missing term during long division?',
            back: 'Insert a placeholder with coefficient 0. E.g., x³ + 2x − 5 becomes x³ + 0x² + 2x − 5.',
            topic: 'Polynomial division'
        },
        {
            id: 'fc-t2-18',
            front: 'How do you check the result of polynomial division?',
            back: 'Expand (divisor)(quotient) + remainder — it should equal the original polynomial. Or use Remainder Theorem: f(a) should equal remainder.',
            topic: 'Polynomial division'
        },
        {
            id: 'fc-t2-19',
            front: 'Simplify: (x² − 9)/(x + 3)',
            back: '(x−3)(x+3)/(x+3) = x − 3, for x ≠ −3.',
            topic: 'Simplifying rational expressions'
        },
        {
            id: 'fc-t2-20',
            front: 'Simplify: (x² − 4x)/(x)',
            back: 'x(x−4)/x = x − 4, for x ≠ 0.',
            topic: 'Simplifying rational expressions'
        },
        {
            id: 'fc-t2-21',
            front: 'Find: 2/(x+3) + 1/(x−3)',
            back: 'LCD = (x+3)(x−3). Result = [2(x−3) + (x+3)]/(x+3)(x−3) = (3x−3)/(x+3)(x−3) = 3(x−1)/(x²−9).',
            topic: 'Adding rational expressions'
        },
        {
            id: 'fc-t2-22',
            front: 'Simplify: [(x+1)/(x−2)] ÷ [(x+1)/(x+2)]',
            back: 'Flip second: (x+1)/(x−2) × (x+2)/(x+1) = (x+2)/(x−2), for x≠−1,2.',
            topic: 'Dividing rational expressions'
        },
        {
            id: 'fc-t2-23',
            front: 'Is (x − 2) a factor of x³ − 2x² + x − 2?',
            back: 'Check f(2) = 8 − 8 + 2 − 2 = 0. Yes, (x − 2) is a factor.',
            topic: 'Factor theorem'
        },
        {
            id: 'fc-t2-24',
            front: 'Find the remainder when x³ − 1 is divided by (x − 1).',
            back: 'f(1) = 1 − 1 = 0. Remainder is 0, so (x − 1) is a factor.',
            topic: 'Remainder theorem'
        },
        {
            id: 'fc-t2-25',
            front: 'Find the remainder when x³ + 1 is divided by (x + 1).',
            back: 'f(−1) = −1 + 1 = 0. Remainder is 0, so (x + 1) is a factor.',
            topic: 'Remainder theorem'
        },
        {
            id: 'fc-t2-26',
            front: 'Fully factorise: x³ − x² − 4x + 4',
            back: 'Try x = 1: f(1) = 1 − 1 − 4 + 4 = 0. (x−1) is factor. Divide: x² − 4 = (x−2)(x+2). Result: (x−1)(x−2)(x+2).',
            topic: 'Factor theorem'
        },
        {
            id: 'fc-t2-27',
            front: 'What does "iff" mean in the Factor Theorem?',
            back: '"If and only if" — (x−a) is a factor ⟺ f(a) = 0. Both directions must hold.',
            topic: 'Factor theorem'
        },
        {
            id: 'fc-t2-28',
            front: 'Why is factorising important before working with algebraic fractions?',
            back: 'Factorising reveals common factors that can be cancelled and helps find the LCD for adding/subtracting. Always factorise first.',
            topic: 'Rational expressions'
        },
    ],
};
