/**
 * Exercise set: A-Level Mathematics · Unit 1 · Topic 5 — Integration
 * Subtopics: Integrating powers of x
 */

export const exercises_mathematics_1_5 = {
    // MCQ: ~30 questions
    mcq: [
        {
            id: 'mcq-t5-1',
            stem: 'What is the result of ∫x³ dx?',
            options: ['x⁴/4 + C', '3x² + C', 'x⁴ + C', 'x² + C'],
            correctAnswer: 0,
            rationale: 'Using the power rule: increase power by 1 (3 → 4) and divide by the new power (4). ∫x³ dx = x⁴/4 + C.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-2',
            stem: 'Integration is the reverse of which process?',
            options: ['Differentiation', 'Factorisation', 'Simplification', 'Expansion'],
            correctAnswer: 0,
            rationale: 'Integration is the inverse (reverse) of differentiation. Differentiating xⁿ gives nxⁿ⁻¹; integrating nxⁿ⁻¹ returns xⁿ.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-3',
            stem: 'What does the +C represent in an indefinite integral?',
            options: ['The constant of integration', 'The coefficient of x', 'The exponent', 'The variable'],
            correctAnswer: 0,
            rationale: 'The +C is the constant of integration, an arbitrary constant because differentiation removes any constant term.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-4',
            stem: 'What is ∫5 dx?',
            options: ['5x + C', 'x⁵ + C', '5 + C', 'x + C'],
            correctAnswer: 0,
            rationale: 'A constant is treated as 5x⁰. Increase power by 1 (0 → 1) and divide by new power: 5x¹/1 = 5x + C.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-5',
            stem: 'What is ∫3x² dx?',
            options: ['x³ + C', 'x⁴/3 + C', '3x³ + C', 'x² + C'],
            correctAnswer: 0,
            rationale: 'Increase power by 1 (2 → 3) and divide by new power: 3x³/3 = x³ + C.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-6',
            stem: 'What is ∫x⁻³ dx?',
            options: ['−(1/2)x⁻² + C', '−3x⁻⁴ + C', 'x⁻²/−2 + C', '−2x⁻² + C'],
            correctAnswer: 0,
            rationale: 'Increase power by 1 (−3 → −2) and divide by new power (−2): x⁻²/−2 = −(1/2)x⁻² + C.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-7',
            stem: 'What restriction applies to the integration power rule ∫xⁿ dx?',
            options: ['n ≠ −1', 'n ≠ 0', 'n ≠ 1', 'n ≠ 2'],
            correctAnswer: 0,
            rationale: 'The power rule fails for n = −1 because ∫x⁻¹ dx = ln|x| + C, which is covered at A2 level.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-8',
            stem: 'What is ∫x^(1/2) dx?',
            options: ['(2/3)x^(3/2) + C', 'x^(3/2)/3 + C', '(3/2)x^(3/2) + C', 'x^(2/3) + C'],
            correctAnswer: 0,
            rationale: 'Increase power by 1 (1/2 → 3/2) and divide by new power (3/2), which is the same as multiplying by 2/3: (2/3)x^(3/2) + C.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-9',
            stem: 'What is ∫(4x³ − 6x + 5) dx?',
            options: ['x⁴ − 3x² + 5x + C', 'x⁴ − 6x² + 5x + C', '4x⁴ − 3x² + 5x + C', 'x⁴ − 3x² + 5 + C'],
            correctAnswer: 0,
            rationale: 'Integrate term by term: 4x⁴/4 = x⁴, −6x²/2 = −3x², 5x¹/1 = 5x. Result: x⁴ − 3x² + 5x + C.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-10',
            stem: 'How do you find the constant of integration C?',
            options: ['Substitute a known point into the integrated expression', 'Set C = 0', 'Integrate the constant term', 'Differentiate the expression'],
            correctAnswer: 0,
            rationale: 'C is found using a known point on the curve. Substitute the given (x, y) coordinates into the integrated expression and solve for C.',
            topic: 'Finding the constant'
        },
        {
            id: 'mcq-t5-11',
            stem: 'Given dy/dx = 3x² − 2 and the curve passes through (2, 5), what is the value of C?',
            options: ['1', '−1', '5', '0'],
            correctAnswer: 0,
            rationale: 'First integrate: y = x³ − 2x + C. Substitute (2, 5): 5 = 8 − 4 + C → C = 1.',
            topic: 'Finding the constant'
        },
        {
            id: 'mcq-t5-12',
            stem: 'What is a definite integral?',
            options: ['An integral with upper and lower limits', 'An integral without limits', 'An integral with only one limit', 'An integral with C'],
            correctAnswer: 0,
            rationale: 'A definite integral has upper and lower limits and gives a numerical value. The constant C cancels out.',
            topic: 'Definite integration'
        },
        {
            id: 'mcq-t5-13',
            stem: 'What does ∫[a to b] f(x) dx represent?',
            options: ['The signed area between the curve and x-axis from a to b', 'The total area between the curve and x-axis', 'The gradient of the curve', 'The tangent to the curve'],
            correctAnswer: 0,
            rationale: 'A definite integral represents the signed area between the curve, the x-axis, and the vertical lines x = a and x = b. Area below the x-axis is negative.',
            topic: 'Definite integration'
        },
        {
            id: 'mcq-t5-14',
            stem: 'What is the formula for a definite integral?',
            options: ['∫[a to b] f(x) dx = F(b) − F(a)', '∫[a to b] f(x) dx = F(a) − F(b)', '∫[a to b] f(x) dx = F(b) + F(a)', '∫[a to b] f(x) dx = F(a) + F(b)'],
            correctAnswer: 0,
            rationale: 'The definite integral is evaluated as [F(x)] from a to b = F(b) − F(a), where F(x) is the antiderivative of f(x).',
            topic: 'Definite integration'
        },
        {
            id: 'mcq-t5-15',
            stem: 'Do you need to include +C in a definite integral?',
            options: ['No, C cancels out', 'Yes, always', 'Only if the integral is negative', 'Only if asked for'],
            correctAnswer: 0,
            rationale: 'In a definite integral, the constant C cancels because we calculate F(b) − F(a), so C − C = 0.',
            topic: 'Definite integration'
        },
        {
            id: 'mcq-t5-16',
            stem: 'What is ∫[1 to 3] (2x + 1) dx?',
            options: ['10', '8', '12', '6'],
            correctAnswer: 0,
            rationale: '[x² + x] from 1 to 3 = (9 + 3) − (1 + 1) = 12 − 2 = 10.',
            topic: 'Definite integration'
        },
        {
            id: 'mcq-t5-17',
            stem: 'What is ∫2x⁴ dx?',
            options: ['(2/5)x⁵ + C', '2x⁵/4 + C', '2x⁵ + C', 'x⁵/2 + C'],
            correctAnswer: 0,
            rationale: 'Increase power by 1 (4 → 5) and divide by new power: 2x⁵/5 = (2/5)x⁵ + C.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-18',
            stem: 'What is ∫(x² + 3x) dx?',
            options: ['x³/3 + (3/2)x² + C', 'x³ + (3/2)x² + C', 'x³/3 + 3x² + C', 'x³ + 3x²/2 + C'],
            correctAnswer: 0,
            rationale: 'Integrate term by term: x³/3 + 3x²/2 + C = x³/3 + (3/2)x² + C.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-19',
            stem: 'What happens to the constant of integration in a definite integral?',
            options: ['It cancels out', 'It is added', 'It is subtracted', 'It is multiplied by the limits'],
            correctAnswer: 0,
            rationale: 'Since we calculate F(b) − F(a), any constant C appears as (F(b) + C) − (F(a) + C) = F(b) − F(a), so C cancels.',
            topic: 'Definite integration'
        },
        {
            id: 'mcq-t5-20',
            stem: 'What is ∫[0 to 2] x dx?',
            options: ['2', '1', '4', '0'],
            correctAnswer: 0,
            rationale: '[x²/2] from 0 to 2 = (4/2) − (0/2) = 2 − 0 = 2.',
            topic: 'Definite integration'
        },
        {
            id: 'mcq-t5-21',
            stem: 'If a curve passes through (1, 3) and dy/dx = 2x, what is the equation of the curve?',
            options: ['y = x² + 2', 'y = x² + 3', 'y = x² + 1', 'y = 2x² + 1'],
            correctAnswer: 0,
            rationale: 'Integrate: y = x² + C. Substitute (1, 3): 3 = 1 + C → C = 2. So y = x² + 2.',
            topic: 'Finding the constant'
        },
        {
            id: 'mcq-t5-22',
            stem: 'What is ∫(x³ + x² + x) dx?',
            options: ['x⁴/4 + x³/3 + x²/2 + C', 'x⁴ + x³ + x² + C', 'x⁴/4 + x³ + x²/2 + C', 'x⁴/3 + x³/4 + x²/5 + C'],
            correctAnswer: 0,
            rationale: 'Integrate each term: x⁴/4 + x³/3 + x²/2 + C.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-23',
            stem: 'What is ∫x⁻² dx?',
            options: ['−x⁻¹ + C', 'x⁻¹/2 + C', '−2x⁻¹ + C', 'x⁻¹ + C'],
            correctAnswer: 0,
            rationale: 'Increase power by 1 (−2 → −1) and divide by new power (−1): x⁻¹/−1 = −x⁻¹ + C.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-24',
            stem: 'What is the relationship between differentiation and integration?',
            options: ['They are inverse operations', 'They are the same operation', 'Integration is faster', 'Differentiation is faster'],
            correctAnswer: 0,
            rationale: 'Differentiation and integration are inverse operations. Integrating a function gives a function whose derivative is the original.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-25',
            stem: 'What is ∫4 dx?',
            options: ['4x + C', '4 + C', 'x⁴ + C', '4x⁴ + C'],
            correctAnswer: 0,
            rationale: 'A constant 4 is 4x⁰. Increase power by 1 (0 → 1) and divide by new power: 4x¹/1 = 4x + C.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-26',
            stem: 'What is ∫[2 to 4] 3 dx?',
            options: ['6', '3', '12', '9'],
            correctAnswer: 0,
            rationale: '[3x] from 2 to 4 = 12 − 6 = 6.',
            topic: 'Definite integration'
        },
        {
            id: 'mcq-t5-27',
            stem: 'What is ∫(5x² − 2x + 1) dx?',
            options: ['(5/3)x³ − x² + x + C', '5x³ − x² + x + C', 'x³ − x² + x + C', '(5/3)x³ − 2x² + x + C'],
            correctAnswer: 0,
            rationale: 'Integrate term by term: 5x³/3 − 2x²/2 + x¹/1 = (5/3)x³ − x² + x + C.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'mcq-t5-28',
            stem: 'If dy/dx = 4x and the curve passes through (0, 5), what is y?',
            options: ['2x² + 5', '2x² + C', '4x² + 5', '4x + 5'],
            correctAnswer: 0,
            rationale: 'Integrate: y = 2x² + C. Substitute (0, 5): 5 = 0 + C → C = 5. So y = 2x² + 5.',
            topic: 'Finding the constant'
        },
        {
            id: 'mcq-t5-29',
            stem: 'What is ∫[−1 to 1] x³ dx?',
            options: ['0', '1', '−1', '2'],
            correctAnswer: 0,
            rationale: '[x⁴/4] from −1 to 1 = (1/4) − (1/4) = 0. The function x³ is odd, so the definite integral over symmetric limits is 0.',
            topic: 'Definite integration'
        },
        {
            id: 'mcq-t5-30',
            stem: 'What does the integration power rule state?',
            options: ['Increase the power by 1, then divide by the new power', 'Increase the power by 1, then multiply by the new power', 'Decrease the power by 1, then divide', 'Decrease the power by 1, then multiply'],
            correctAnswer: 0,
            rationale: 'The integration power rule: increase the power of x by 1, then divide the result by the new power. Always add +C for indefinite integrals.',
            topic: 'Integrating powers of x'
        }
    ],

    // Fill-blank: ~15 questions
    fillblank: [
        {
            id: 'fb-t5-1',
            stem: 'Complete the integration power rule: ∫xⁿ dx = __BLANK__',
            template: '∫xⁿ dx = __BLANK__ / (n + 1) + C',
            blanks: [{ answer: 'xⁿ⁺¹' }],
            rationale: 'The integration power rule states that ∫xⁿ dx = xⁿ⁺¹/(n+1) + C, where n ≠ −1.'
        },
        {
            id: 'fb-t5-2',
            stem: 'What restriction applies to the integration power rule?',
            template: 'The rule fails when n = __BLANK__',
            blanks: [{ answer: '−1' }],
            rationale: 'The power rule ∫xⁿ dx = xⁿ⁺¹/(n+1) + C fails for n = −1 because ∫x⁻¹ dx = ln|x| + C.'
        },
        {
            id: 'fb-t5-3',
            stem: 'Complete the integration: ∫x³ dx = __BLANK__',
            template: '∫x³ dx = __BLANK__ + C',
            blanks: [{ answer: 'x⁴/4' }],
            rationale: 'Increase power by 1 (3 → 4) and divide by 4: x⁴/4 + C.'
        },
        {
            id: 'fb-t5-4',
            stem: 'What is ∫5 dx?',
            template: '∫5 dx = __BLANK__ + C',
            blanks: [{ answer: '5x' }],
            rationale: 'Treat 5 as 5x⁰. Increase power by 1 (0 → 1) and divide by 1: 5x + C.'
        },
        {
            id: 'fb-t5-5',
            stem: 'What do you add to an indefinite integral?',
            template: 'Always add __BLANK__ to an indefinite integral.',
            blanks: [{ answer: '+C' }],
            rationale: 'The constant of integration +C must always be added to an indefinite integral because differentiation removes any constant term.'
        },
        {
            id: 'fb-t5-6',
            stem: 'Complete: ∫3x² dx = __BLANK__',
            template: '∫3x² dx = __BLANK__ + C',
            blanks: [{ answer: 'x³' }],
            rationale: 'Increase power by 1 (2 → 3) and divide by 3: 3x³/3 = x³ + C.'
        },
        {
            id: 'fb-t5-7',
            stem: 'What does a definite integral represent?',
            template: 'A definite integral represents the __BLANK__ area between the curve and the x-axis.',
            blanks: [{ answer: 'signed' }],
            rationale: 'A definite integral gives the signed area — area below the x-axis is counted as negative.'
        },
        {
            id: 'fb-t5-8',
            stem: 'Complete the definite integral formula: ∫[a to b] f(x) dx = __BLANK__',
            template: '∫[a to b] f(x) dx = F(__BLANK__) − F(a)',
            blanks: [{ answer: 'b' }],
            rationale: 'The definite integral is evaluated as F(b) − F(a), where F(x) is the antiderivative of f(x).'
        },
        {
            id: 'fb-t5-9',
            stem: 'Do you need +C in a definite integral?',
            template: 'In a definite integral, C __BLANK__ out.',
            blanks: [{ answer: 'cancels' }],
            rationale: 'The constant C cancels in a definite integral because F(b) − F(a) removes the constant.'
        },
        {
            id: 'fb-t5-10',
            stem: 'What is ∫x⁻³ dx?',
            template: '∫x⁻³ dx = __BLANK__ + C',
            blanks: [{ answer: '−(1/2)x⁻²' }],
            rationale: 'Increase power by 1 (−3 → −2) and divide by −2: x⁻²/−2 = −(1/2)x⁻² + C.'
        },
        {
            id: 'fb-t5-11',
            stem: 'How do you find C given a point?',
            template: 'Substitute the __BLANK__ into the integrated expression.',
            blanks: [{ answer: 'point' }],
            rationale: 'To find C, substitute the given (x, y) coordinates into the integrated expression and solve for C.'
        },
        {
            id: 'fb-t5-12',
            stem: 'Complete: ∫x^(1/2) dx = __BLANK__',
            template: '∫x^(1/2) dx = __BLANK__ + C',
            blanks: [{ answer: '(2/3)x^(3/2)' }],
            rationale: 'Increase power by 1 (1/2 → 3/2) and divide by 3/2 (multiply by 2/3): (2/3)x^(3/2) + C.'
        },
        {
            id: 'fb-t5-13',
            stem: 'What is integration relative to differentiation?',
            template: 'Integration is the __BLANK__ of differentiation.',
            blanks: [{ answer: 'reverse' }],
            rationale: 'Integration is the inverse (reverse) operation of differentiation.'
        },
        {
            id: 'fb-t5-14',
            stem: 'What is ∫2x dx?',
            template: '∫2x dx = __BLANK__ + C',
            blanks: [{ answer: 'x²' }],
            rationale: 'Increase power by 1 (1 → 2) and divide by 2: 2x²/2 = x² + C.'
        },
        {
            id: 'fb-t5-15',
            stem: 'Complete the integration: ∫(4x³ − 6x + 5) dx = __BLANK__',
            template: '∫(4x³ − 6x + 5) dx = __BLANK__ + C',
            blanks: [{ answer: 'x⁴ − 3x² + 5x' }],
            rationale: 'Integrate term by term: 4x⁴/4 = x⁴, −6x²/2 = −3x², 5x¹/1 = 5x.'
        }
    ],

    // Drag-drop: ~10 questions
    dragdrop: [
        {
            id: 'dd-t5-1',
            stem: 'Sort the functions by their indefinite integrals.',
            categories: ['Integrates to x⁴/4 + C', 'Integrates to x³ + C', 'Integrates to 5x + C', 'Integrates to −(1/2)x⁻² + C'],
            items: [
                { text: 'x³', category: 'Integrates to x⁴/4 + C' },
                { text: '3x²', category: 'Integrates to x³ + C' },
                { text: '5', category: 'Integrates to 5x + C' },
                { text: 'x⁻³', category: 'Integrates to −(1/2)x⁻² + C' },
                { text: '2x³', category: 'Integrates to x⁴/2 + C' },
                { text: '6x²', category: 'Integrates to 2x³ + C' },
                { text: '10', category: 'Integrates to 10x + C' },
                { text: '2x⁻³', category: 'Integrates to −x⁻² + C' }
            ]
        },
        {
            id: 'dd-t5-2',
            stem: 'Classify these as either integration or differentiation statements.',
            categories: ['Integration statement', 'Differentiation statement'],
            items: [
                { text: '∫x³ dx = x⁴/4 + C', category: 'Integration statement' },
                { text: 'd/dx(x⁴) = 4x³', category: 'Differentiation statement' },
                { text: '∫3x² dx = x³ + C', category: 'Integration statement' },
                { text: 'd/dx(x³) = 3x²', category: 'Differentiation statement' },
                { text: '∫5 dx = 5x + C', category: 'Integration statement' },
                { text: 'd/dx(5x) = 5', category: 'Differentiation statement' }
            ]
        },
        {
            id: 'dd-t5-3',
            stem: 'Sort the expressions by the value of their definite integral ∫[0 to 2] f(x) dx.',
            categories: ['Result is 0', 'Result is positive', 'Result is negative'],
            items: [
                { text: 'x', category: 'Result is positive' },
                { text: 'x³', category: 'Result is positive' },
                { text: '−x', category: 'Result is negative' },
                { text: 'x²', category: 'Result is positive' },
                { text: '2x', category: 'Result is positive' },
                { text: 'sin(x)', category: 'Result is 0' }
            ]
        },
        {
            id: 'dd-t5-4',
            stem: 'Categorise these by whether the constant C is needed.',
            categories: ['+C is required', '+C is not needed'],
            items: [
                { text: '∫x³ dx', category: '+C is required' },
                { text: '∫[1 to 3] x³ dx', category: '+C is not needed' },
                { text: '∫3x² dx', category: '+C is required' },
                { text: '∫[0 to 2] 3x² dx', category: '+C is not needed' },
                { text: '∫5 dx', category: '+C is required' },
                { text: '∫[−1 to 1] 5 dx', category: '+C is not needed' }
            ]
        },
        {
            id: 'dd-t5-5',
            stem: 'Sort the functions by the power rule applicability.',
            categories: ['Power rule applies (n ≠ −1)', 'Power rule fails (n = −1)'],
            items: [
                { text: 'x³', category: 'Power rule applies (n ≠ −1)' },
                { text: 'x⁻¹', category: 'Power rule fails (n = −1)' },
                { text: 'x²', category: 'Power rule applies (n ≠ −1)' },
                { text: 'x^(1/2)', category: 'Power rule applies (n ≠ −1)' },
                { text: 'x⁻³', category: 'Power rule applies (n ≠ −1)' },
                { text: 'x⁰', category: 'Power rule applies (n ≠ −1)' }
            ]
        },
        {
            id: 'dd-t5-6',
            stem: 'Classify the steps in finding the constant C.',
            categories: ['Step 1: Integrate', 'Step 2: Substitute point', 'Step 3: Solve for C', 'Step 4: Write equation'],
            items: [
                { text: '∫3x² dx = x³ + C', category: 'Step 1: Integrate' },
                { text: 'Substitute (2, 5) into y = x³ − 2x + C', category: 'Step 2: Substitute point' },
                { text: '5 = 8 − 4 + C → C = 1', category: 'Step 3: Solve for C' },
                { text: 'y = x³ − 2x + 1', category: 'Step 4: Write equation' },
                { text: '∫(2x + 1) dx = x² + x + C', category: 'Step 1: Integrate' }
            ]
        },
        {
            id: 'dd-t5-7',
            stem: 'Sort these integrals by the sign of their result.',
            categories: ['Positive result', 'Negative result', 'Zero result'],
            items: [
                { text: '∫[1 to 3] x dx', category: 'Positive result' },
                { text: '∫[−3 to −1] x dx', category: 'Negative result' },
                { text: '∫[−1 to 1] x dx', category: 'Zero result' },
                { text: '∫[0 to 2] x² dx', category: 'Positive result' },
                { text: '∫[−2 to 0] x² dx', category: 'Positive result' }
            ]
        },
        {
            id: 'dd-t5-8',
            stem: 'Categorise the integration rules or formulas.',
            categories: ['Power rule', 'Definite integral formula', 'Constant rule'],
            items: [
                { text: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C', category: 'Power rule' },
                { text: '∫[a to b] f(x) dx = F(b) − F(a)', category: 'Definite integral formula' },
                { text: '∫k dx = kx + C (where k is constant)', category: 'Constant rule' },
                { text: '∫axⁿ dx = axⁿ⁺¹/(n+1) + C', category: 'Power rule' },
                { text: '[F(x)] from a to b = F(b) − F(a)', category: 'Definite integral formula' }
            ]
        },
        {
            id: 'dd-t5-9',
            stem: 'Sort the functions by their indefinite integral type.',
            categories: ['Simple power', 'Fractional power', 'Negative power'],
            items: [
                { text: 'x³', category: 'Simple power' },
                { text: 'x^(1/2)', category: 'Fractional power' },
                { text: 'x⁻³', category: 'Negative power' },
                { text: 'x²', category: 'Simple power' },
                { text: 'x⁻²', category: 'Negative power' },
                { text: 'x^(3/2)', category: 'Fractional power' }
            ]
        },
        {
            id: 'dd-t5-10',
            stem: 'Classify these common mistakes when integrating.',
            categories: ['Forgetting +C', 'Wrong power', 'Wrong division', 'Misinterpreting sign'],
            items: [
                { text: 'Writing ∫x³ dx = x⁴/4', category: 'Forgetting +C' },
                { text: 'Writing ∫x³ dx = x³/3 + C', category: 'Wrong power' },
                { text: 'Writing ∫2x³ dx = 2x⁴/3 + C', category: 'Wrong division' },
                { text: 'Not accounting for negative area below x-axis', category: 'Misinterpreting sign' },
                { text: 'Writing ∫x⁻³ dx = −2x⁻² + C', category: 'Wrong division' }
            ]
        }
    ],

    // Sequence: ~8 questions
    sequence: [
        {
            id: 'seq-t5-1',
            stem: 'Put the steps for using the integration power rule in order:',
            steps: [
                'Identify the power n in the expression axⁿ',
                'Increase the power by 1 to get n + 1',
                'Divide the coefficient a by the new power (n + 1)',
                'Write the result as axⁿ⁺¹/(n + 1) + C',
                'Simplify the expression if possible'
            ]
        },
        {
            id: 'seq-t5-2',
            stem: 'Put the steps for finding the constant of integration in order:',
            steps: [
                'Integrate the derivative to get the general solution',
                'Write the solution with +C: y = F(x) + C',
                'Substitute the given point (x₀, y₀) into the equation',
                'Solve the equation to find the value of C',
                'Write the final particular solution with the value of C'
            ]
        },
        {
            id: 'seq-t5-3',
            stem: 'Put the steps for evaluating a definite integral in order:',
            steps: [
                'Find the antiderivative F(x) of the function f(x)',
                'Write F(x) in square brackets with the limits [a to b]',
                'Substitute the upper limit b into F(x) to get F(b)',
                'Substitute the lower limit a into F(x) to get F(a)',
                'Calculate F(b) − F(a) to get the final value'
            ]
        },
        {
            id: 'seq-t5-4',
            stem: 'Put the steps for integrating a sum of terms in order:',
            steps: [
                'Separate the integral of a sum into individual integrals',
                'Apply the power rule to each term separately',
                'Increase the power and divide by the new power for each term',
                'Add the constant of integration +C once at the end',
                'Combine and simplify the result'
            ]
        },
        {
            id: 'seq-t5-5',
            stem: 'Put the steps for integrating a polynomial in order:',
            steps: [
                'Write out the polynomial in standard form',
                'Apply the power rule to each term: increase power, divide by new power',
                'Handle constant terms: treat as kx⁰, result is kx',
                'Add the constant of integration +C',
                'Combine terms and simplify the expression'
            ]
        },
        {
            id: 'seq-t5-6',
            stem: 'Put the steps for solving a word problem involving integration in order:',
            steps: [
                'Identify what is given (derivative, point) and what is asked',
                'Integrate the given derivative to find the general solution',
                'Use the given point to find the constant C',
                'Write the final particular solution',
                'Verify by differentiating your answer to check it matches the given derivative'
            ]
        },
        {
            id: 'seq-t5-7',
            stem: 'Put the steps for checking an integration result in order:',
            steps: [
                'Differentiate your integrated answer',
                'Check that the derivative matches the original integrand',
                'Verify that +C was included (for indefinite integrals)',
                'For definite integrals, check that limits were applied correctly',
                'Confirm the final answer is simplified'
            ]
        },
        {
            id: 'seq-t5-8',
            stem: 'Put the relationship between differentiation and integration in order:',
            steps: [
                'Differentiation finds the rate of change (gradient) of a function',
                'Integration finds the original function from its rate of change',
                'They are inverse operations of each other',
                '∫f(x) dx = F(x) + C, and d/dx(F(x)) = f(x)',
                'This is why the constant +C is needed in indefinite integrals'
            ]
        }
    ],

    // Keyword: ~12 questions
    keyword: [
        {
            id: 'kw-t5-1',
            stem: 'State the integration power rule. [2 marks]',
            marks: 2,
            keywords: ['increase', 'power', 'divide', 'constant'],
            modelAnswer: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C. Increase the power by 1, then divide by the new power. Always add the constant of integration +C.'
        },
        {
            id: 'kw-t5-2',
            stem: 'Explain why +C is needed in an indefinite integral. [2 marks]',
            marks: 2,
            keywords: ['differentiation', 'constant', 'family', 'functions'],
            modelAnswer: 'When differentiating, any constant term becomes zero. Therefore, when integrating, we must add +C to represent all possible functions that could have produced the given derivative.'
        },
        {
            id: 'kw-t5-3',
            stem: 'What restriction applies to the integration power rule? [1 mark]',
            marks: 1,
            keywords: ['n ≠ −1', 'minus one', 'fails'],
            modelAnswer: 'The rule fails for n = −1 because ∫x⁻¹ dx = ln|x| + C, not x⁰/0.'
        },
        {
            id: 'kw-t5-4',
            stem: 'How do you find the constant of integration C? [2 marks]',
            marks: 2,
            keywords: ['substitute', 'point', 'solve', 'coordinates'],
            modelAnswer: 'Substitute the given point (x, y) coordinates into the integrated expression and solve the resulting equation to find the value of C.'
        },
        {
            id: 'kw-t5-5',
            stem: 'What is a definite integral and what does it represent? [2 marks]',
            marks: 2,
            keywords: ['limits', 'area', 'numerical', 'value'],
            modelAnswer: 'A definite integral has upper and lower limits and gives a numerical value. It represents the signed area between the curve, the x-axis, and the vertical lines at the limits.'
        },
        {
            id: 'kw-t5-6',
            stem: 'Why is +C not needed in a definite integral? [2 marks]',
            marks: 2,
            keywords: ['cancels', 'subtract', 'F(b)', 'F(a)'],
            modelAnswer: 'In a definite integral, we calculate F(b) − F(a). Since both terms include the same constant C, we get (F(b) + C) − (F(a) + C) = F(b) − F(a), so C cancels.'
        },
        {
            id: 'kw-t5-7',
            stem: 'Explain the relationship between differentiation and integration. [2 marks]',
            marks: 2,
            keywords: ['inverse', 'reverse', 'operations'],
            modelAnswer: 'Differentiation and integration are inverse (reverse) operations. Integrating a function gives a function whose derivative is the original function.'
        },
        {
            id: 'kw-t5-8',
            stem: 'What happens to the area below the x-axis in a definite integral? [2 marks]',
            marks: 2,
            keywords: ['negative', 'signed', 'area', 'subtract'],
            modelAnswer: 'Area below the x-axis is counted as negative in a definite integral. The integral gives the signed area, meaning areas above and below are subtracted.'
        },
        {
            id: 'kw-t5-9',
            stem: 'How do you integrate a sum of terms? [2 marks]',
            marks: 2,
            keywords: ['term', 'separately', 'power rule', '+C'],
            modelAnswer: 'Apply the integration power rule to each term separately. Integrate each term, then add the constant of integration +C once at the end.'
        },
        {
            id: 'kw-t5-10',
            stem: 'State the formula for evaluating a definite integral. [2 marks]',
            marks: 2,
            keywords: ['F(b)', 'F(a)', 'subtract', 'antiderivative'],
            modelAnswer: '∫[a to b] f(x) dx = [F(x)] from a to b = F(b) − F(a), where F(x) is the antiderivative of f(x).'
        },
        {
            id: 'kw-t5-11',
            stem: 'How do you integrate a constant term like 5? [2 marks]',
            marks: 2,
            keywords: ['treat', 'x⁰', 'increase', 'power'],
            modelAnswer: 'Treat the constant as 5x⁰. Increase the power by 1 (0 → 1) and divide by the new power (1), giving 5x + C.'
        },
        {
            id: 'kw-t5-12',
            stem: 'What is a common mistake when integrating and how do you avoid it? [2 marks]',
            marks: 2,
            keywords: ['forgetting', '+C', 'check', 'differentiate'],
            modelAnswer: 'A common mistake is forgetting to add +C in an indefinite integral. To avoid this, always add +C and check by differentiating your answer.'
        }
    ],

    // Flashcards: ~25+ questions
    flashcards: [
        {
            id: 'fc-t5-1',
            front: 'State the integration power rule.',
            back: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C, where n ≠ −1. Increase the power by 1, then divide by the new power. Always add +C.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-2',
            front: 'What restriction applies to ∫xⁿ dx?',
            back: 'The rule fails for n = −1. ∫x⁻¹ dx = ln|x| + C, which is covered at A2 level.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-3',
            front: 'What does +C represent in an indefinite integral?',
            back: '+C is the constant of integration. It represents all possible functions that could have produced the given derivative, since differentiation removes any constant term.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-4',
            front: 'What is ∫x³ dx?',
            back: 'x⁴/4 + C',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-5',
            front: 'What is ∫5 dx?',
            back: '5x + C (treat 5 as 5x⁰, increase power to 1, divide by 1)',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-6',
            front: 'What is ∫3x² dx?',
            back: 'x³ + C (increase power 2→3, divide by 3: 3x³/3 = x³)',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-7',
            front: 'What is ∫x⁻³ dx?',
            back: '−(1/2)x⁻² + C (increase power −3→−2, divide by −2)',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-8',
            front: 'What is ∫x^(1/2) dx?',
            back: '(2/3)x^(3/2) + C (increase power 1/2→3/2, divide by 3/2 = × 2/3)',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-9',
            front: 'What is ∫(4x³ − 6x + 5) dx?',
            back: 'x⁴ − 3x² + 5x + C (integrate each term separately)',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-10',
            front: 'How do you find the constant C?',
            back: 'Substitute a known point (x, y) into the integrated expression and solve for C.',
            topic: 'Finding the constant'
        },
        {
            id: 'fc-t5-11',
            front: 'Given dy/dx = 3x² − 2 and the curve passes through (2, 5), find y.',
            back: 'y = x³ − 2x + 1. First integrate: y = x³ − 2x + C. Substitute (2, 5): 5 = 8 − 4 + C → C = 1.',
            topic: 'Finding the constant'
        },
        {
            id: 'fc-t5-12',
            front: 'What is a definite integral?',
            back: 'An integral with upper and lower limits. It gives a numerical value representing the signed area between the curve and the x-axis.',
            topic: 'Definite integration'
        },
        {
            id: 'fc-t5-13',
            front: 'What is the formula for a definite integral?',
            back: '∫[a to b] f(x) dx = [F(x)] from a to b = F(b) − F(a), where F(x) is the antiderivative of f(x).',
            topic: 'Definite integration'
        },
        {
            id: 'fc-t5-14',
            front: 'Do you need +C in a definite integral?',
            back: 'No, C cancels out because we calculate F(b) − F(a).',
            topic: 'Definite integration'
        },
        {
            id: 'fc-t5-15',
            front: 'What is ∫[1 to 3] (2x + 1) dx?',
            back: '10. [x² + x] from 1 to 3 = (9 + 3) − (1 + 1) = 12 − 2 = 10.',
            topic: 'Definite integration'
        },
        {
            id: 'fc-t5-16',
            front: 'What happens to area below the x-axis in a definite integral?',
            back: 'Area below the x-axis is counted as negative. The definite integral gives the signed area.',
            topic: 'Definite integration'
        },
        {
            id: 'fc-t5-17',
            front: 'What is integration?',
            back: 'Integration is the inverse (reverse) operation of differentiation. Integrating a function gives a function whose derivative is the original function.',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-18',
            front: 'What is ∫2x⁴ dx?',
            back: '(2/5)x⁵ + C',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-19',
            front: 'What is ∫(x² + 3x) dx?',
            back: 'x³/3 + (3/2)x² + C',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-20',
            front: 'What is ∫[0 to 2] x dx?',
            back: '2. [x²/2] from 0 to 2 = 2 − 0 = 2.',
            topic: 'Definite integration'
        },
        {
            id: 'fc-t5-21',
            front: 'If dy/dx = 2x and the curve passes through (1, 3), what is the equation?',
            back: 'y = x² + 2. Integrate: y = x² + C. Substitute (1, 3): 3 = 1 + C → C = 2.',
            topic: 'Finding the constant'
        },
        {
            id: 'fc-t5-22',
            front: 'What is ∫x⁻² dx?',
            back: '−x⁻¹ + C',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-23',
            front: 'What is ∫4 dx?',
            back: '4x + C',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-24',
            front: 'What is ∫[2 to 4] 3 dx?',
            back: '6. [3x] from 2 to 4 = 12 − 6 = 6.',
            topic: 'Definite integration'
        },
        {
            id: 'fc-t5-25',
            front: 'What is ∫(5x² − 2x + 1) dx?',
            back: '(5/3)x³ − x² + x + C',
            topic: 'Integrating powers of x'
        },
        {
            id: 'fc-t5-26',
            front: 'If dy/dx = 4x and the curve passes through (0, 5), what is y?',
            back: 'y = 2x² + 5. Integrate: y = 2x² + C. Substitute (0, 5): 5 = 0 + C → C = 5.',
            topic: 'Finding the constant'
        },
        {
            id: 'fc-t5-27',
            front: 'What is ∫[−1 to 1] x³ dx?',
            back: '0. [x⁴/4] from −1 to 1 = 1/4 − 1/4 = 0. The function is odd.',
            topic: 'Definite integration'
        },
        {
            id: 'fc-t5-28',
            front: 'What are the two steps in the integration power rule?',
            back: '1. Increase the power by 1\n2. Divide by the new power\nAlways add +C for indefinite integrals.',
            topic: 'Integrating powers of x'
        }
    ]
};
