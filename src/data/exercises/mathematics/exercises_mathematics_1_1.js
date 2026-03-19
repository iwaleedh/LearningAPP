export const exercises_mathematics_1_1 = {
    mcq: [
        // Laws of indices
        {
            id: 'mcq-1',
            stem: 'What is the result of simplifying x³ × x⁴ using the laws of indices?',
            options: ['x⁷', 'x¹²', 'x', 'x¹'],
            correctAnswer: 0,
            rationale: 'When multiplying terms with the same base, add the exponents: x³ × x⁴ = x^(3+4) = x⁷.',
            topic: 'Laws of indices'
        },
        {
            id: 'mcq-2',
            stem: 'Simplify: (y⁵)²',
            options: ['y⁷', 'y¹⁰', 'y²⁵', 'y³'],
            correctAnswer: 1,
            rationale: 'Using the bracket law: (aᵐ)ⁿ = a^(m×n). So (y⁵)² = y^(5×2) = y¹⁰.',
            topic: 'Laws of indices'
        },
        {
            id: 'mcq-3',
            stem: 'What is the value of 7⁰?',
            options: ['0', '1', '7', 'Undefined'],
            correctAnswer: 1,
            rationale: 'Any non-zero number raised to the power of 0 equals 1. So 7⁰ = 1.',
            topic: 'Laws of indices'
        },
        {
            id: 'mcq-4',
            stem: 'Simplify: a⁸ ÷ a³',
            options: ['a⁵', 'a²⁴', 'a¹¹', 'a⁴'],
            correctAnswer: 0,
            rationale: 'When dividing terms with the same base, subtract the exponents: a⁸ ÷ a³ = a^(8-3) = a⁵.',
            topic: 'Laws of indices'
        },
        {
            id: 'mcq-5',
            stem: 'What is 2⁻³ equal to?',
            options: ['-8', '1/8', '-1/8', '6'],
            correctAnswer: 1,
            rationale: 'A negative index means the reciprocal of the positive power: a⁻ᵐ = 1/aᵐ. So 2⁻³ = 1/2³ = 1/8.',
            topic: 'Laws of indices'
        },
        {
            id: 'mcq-6',
            stem: 'Which expression represents ∛27 as an index?',
            options: ['27³', '27^(1/3)', '27⁻³', '27³'],
            correctAnswer: 1,
            rationale: 'A fractional index a^(1/n) means the nth root of a. So ∛27 = 27^(1/3) = 3.',
            topic: 'Laws of indices'
        },
        {
            id: 'mcq-7',
            stem: 'Simplify: 9⁴ ÷ 3⁷',
            options: ['3', '9', '27', '3¹'],
            correctAnswer: 0,
            rationale: 'Change base 9 to 3²: (3²)⁴ ÷ 3⁷ = 3⁸ ÷ 3⁷ = 3^(8-7) = 3¹ = 3.',
            topic: 'Laws of indices'
        },
        // Manipulating surds
        {
            id: 'mcq-8',
            stem: 'Which of the following is NOT a surd?',
            options: ['√2', '∛4', '√9', '√17'],
            correctAnswer: 2,
            rationale: '√9 = 3, which is a rational number. A surd is an irrational root of a rational number. ∛4 = √2 (irrational), √2 and √17 are irrational.',
            topic: 'Manipulating surds'
        },
        {
            id: 'mcq-9',
            stem: 'Simplify √12 to its simplest surd form.',
            options: ['2√3', '3√2', '4√3', '6√2'],
            correctAnswer: 0,
            rationale: '√12 = √(4×3) = √4 × √3 = 2√3. Look for the largest perfect square factor (4).',
            topic: 'Manipulating surds'
        },
        {
            id: 'mcq-10',
            stem: 'What is √18 × √2 simplified?',
            options: ['6', '3√2', '2√3', '√36'],
            correctAnswer: 1,
            rationale: '√18 × √2 = √(18×2) = √36 = 6. Alternatively: 3√2 × √2 = 3√4 = 3×2 = 6.',
            topic: 'Manipulating surds'
        },
        {
            id: 'mcq-11',
            stem: 'Which expression is equivalent to √50?',
            options: ['5√2', '2√5', '10√5', '5'],
            correctAnswer: 0,
            rationale: '√50 = √(25×2) = √25 × √2 = 5√2.',
            topic: 'Manipulating surds'
        },
        {
            id: 'mcq-12',
            stem: 'What is √2 + 3√2?',
            options: ['4', '4√2', '√8', '6√2'],
            correctAnswer: 1,
            rationale: '√2 + 3√2 = (1+3)√2 = 4√2. These are "like surds" with the same radicand, so add the coefficients.',
            topic: 'Manipulating surds'
        },
        {
            id: 'mcq-13',
            stem: 'Rationalise 1/√3.',
            options: ['√3/3', '3/√3', '1', '3'],
            correctAnswer: 0,
            rationale: 'Multiply numerator and denominator by √3: (1×√3)/(√3×√3) = √3/3.',
            topic: 'Rationalising the denominator'
        },
        {
            id: 'mcq-14',
            stem: 'What is 2/(1+√2) with rationalised denominator?',
            options: ['2(1-√2)', '2(1+√2)', '2-√2', '2√2'],
            correctAnswer: 0,
            rationale: 'Multiply by conjugate (1-√2): 2(1-√2)/((1+√2)(1-√2)) = 2(1-√2)/(1-2) = 2(1-√2)/(-1) = -2(1-√2) = 2(√2-1). Answer 2(1-√2) is acceptable.',
            topic: 'Rationalising the denominator'
        },
        // Expanding brackets
        {
            id: 'mcq-15',
            stem: 'Expand (x + 3)(x + 4).',
            options: ['x² + 7x + 12', 'x² + 12x + 12', 'x² + x + 12', '2x + 7'],
            correctAnswer: 0,
            rationale: '(x+3)(x+4) = x×x + x×4 + 3×x + 3×4 = x² + 4x + 3x + 12 = x² + 7x + 12.',
            topic: 'Expanding brackets'
        },
        {
            id: 'mcq-16',
            stem: 'Expand (2x - 1)(3x + 2).',
            options: ['6x² + x - 2', '6x² + x + 2', '5x² - 2', '6x² + 7x - 2'],
            correctAnswer: 0,
            rationale: '(2x-1)(3x+2) = 6x² + 4x - 3x - 2 = 6x² + x - 2. Be careful with signs.',
            topic: 'Expanding brackets'
        },
        {
            id: 'mcq-17',
            stem: 'What is (x + 5)² expanded?',
            options: ['x² + 25', 'x² + 10x + 25', 'x² + 5x + 25', '2x + 10'],
            correctAnswer: 1,
            rationale: '(x+5)² = (x+5)(x+5) = x² + 5x + 5x + 25 = x² + 10x + 25.',
            topic: 'Expanding brackets'
        },
        {
            id: 'mcq-18',
            stem: 'Expand (x - 3)(x + 3).',
            options: ['x² - 9', 'x² + 9', 'x² - 6x + 9', 'x² + 6x - 9'],
            correctAnswer: 0,
            rationale: '(x-3)(x+3) = x² + 3x - 3x - 9 = x² - 9. This is a difference of two squares: x² - 3² = x² - 9.',
            topic: 'Expanding brackets'
        },
        // Factorisation
        {
            id: 'mcq-19',
            stem: 'Factorise x² - 9.',
            options: ['(x + 3)(x + 3)', '(x - 3)(x - 3)', '(x - 3)(x + 3)', '(x + 3)(x - 3)'],
            correctAnswer: 1,
            rationale: 'x² - 9 = x² - 3² = (x - 3)(x + 3) by difference of two squares. Note: (x-3)(x-3) gives x²-6x+9.',
            topic: 'Factorisation'
        },
        {
            id: 'mcq-20',
            stem: 'Factorise x² + 5x + 6.',
            options: ['(x + 1)(x + 6)', '(x + 2)(x + 3)', '(x + 3)(x + 2)', '(x + 6)(x + 1)'],
            correctAnswer: 1,
            rationale: 'Find two numbers that multiply to 6 and add to 5: 2 and 3. So x² + 5x + 6 = (x + 2)(x + 3).',
            topic: 'Factorisation'
        },
        {
            id: 'mcq-21',
            stem: 'Factorise 2x² - 8x.',
            options: ['2x(x - 4)', '2x(x + 4)', 'x(2x - 8)', '(2x - 1)(x - 8)'],
            correctAnswer: 0,
            rationale: 'Factor out the common factor 2x: 2x² - 8x = 2x(x - 4).',
            topic: 'Factorisation'
        },
        {
            id: 'mcq-22',
            stem: 'Factorise x² - 7x + 12.',
            options: ['(x + 3)(x + 4)', '(x - 3)(x - 4)', '(x - 3)(x - 4)', '(x + 3)(x + 4)'],
            correctAnswer: 2,
            rationale: 'Find two numbers that multiply to 12 and add to -7: -3 and -4. So x² - 7x + 12 = (x - 3)(x - 4).',
            topic: 'Factorisation'
        },
        // Solving quadratic equations
        {
            id: 'mcq-23',
            stem: 'What are the solutions to x² - 4 = 0?',
            options: ['x = ±2', 'x = 4', 'x = ±4', 'x = 2'],
            correctAnswer: 0,
            rationale: 'x² - 4 = 0 means x² = 4, so x = ±√4 = ±2.',
            topic: 'Solving quadratic equations'
        },
        {
            id: 'mcq-24',
            stem: 'Solve x² - 5x + 6 = 0.',
            options: ['x = 2 or x = 3', 'x = -2 or x = -3', 'x = 1 or x = 6', 'x = -1 or x = -6'],
            correctAnswer: 0,
            rationale: 'Factorise: (x - 2)(x - 3) = 0. So x - 2 = 0 or x - 3 = 0, giving x = 2 or x = 3.',
            topic: 'Solving quadratic equations'
        },
        {
            id: 'mcq-25',
            stem: 'How many solutions does x² + 9 = 0 have?',
            options: ['0', '1', '2', 'Infinite'],
            correctAnswer: 1,
            rationale: 'x² + 9 = 0 gives x² = -9, which has no real solutions. The discriminant b² - 4ac = 0² - 4(1)(9) = -36 < 0.',
            topic: 'Solving quadratic equations'
        },
        {
            id: 'mcq-26',
            stem: 'Using the quadratic formula, solve 2x² - 3x - 5 = 0.',
            options: ['x = 2.5 or x = -1', 'x = (3 ± √49)/4', 'x = (3 ± √7)/4', 'x = (3 ± √49)/2'],
            correctAnswer: 1,
            rationale: 'For ax²+bx+c=0, x = (-b ± √(b²-4ac))/2a. Here a=2, b=-3, c=-5. b²-4ac = 9-4(2)(-5) = 49. x = (3 ± 7)/4.',
            topic: 'Solving quadratic equations'
        },
        // Discriminants
        {
            id: 'mcq-27',
            stem: 'What is the discriminant of 2x² - 4x + 3 = 0?',
            options: ['Δ = -8', 'Δ = 8', 'Δ = 40', 'Δ = 0'],
            correctAnswer: 0,
            rationale: 'The discriminant is Δ = b² - 4ac. Here a=2, b=-4, c=3. So Δ = (-4)² - 4(2)(3) = 16 - 24 = -8.',
            topic: 'Discriminants'
        },
        {
            id: 'mcq-28',
            stem: 'If Δ < 0 for a quadratic equation, what does this tell you about the graph?',
            options: ['The parabola touches the x-axis once', 'The parabola crosses the x-axis twice', 'The parabola does not cross the x-axis', 'The parabola is a straight line'],
            correctAnswer: 2,
            rationale: 'Δ < 0 means no real roots, so the parabola (U-shaped or n-shaped) is either entirely above or below the x-axis without touching it.',
            topic: 'Discriminants'
        },
        {
            id: 'mcq-29',
            stem: 'What value of k makes kx² - 4x + 1 = 0 have equal roots?',
            options: ['k = 1', 'k = 2', 'k = 4', 'k = 8'],
            correctAnswer: 2,
            rationale: 'For equal roots, Δ = 0: b² - 4ac = 0. Here (-4)² - 4(k)(1) = 0, so 16 - 4k = 0, giving k = 4.',
            topic: 'Discriminants'
        },
    ],
    fillblank: [
        {
            id: 'fb-1',
            stem: 'Complete the law of indices: aᵐ × aⁿ = __BLANK__',
            blanks: [{ answer: 'a^(m+n)' }],
            rationale: 'When multiplying terms with the same base, add the exponents.'
        },
        {
            id: 'fb-2',
            stem: 'Complete the law of indices: aᵐ ÷ aⁿ = __BLANK__',
            blanks: [{ answer: 'a^(m-n)' }],
            rationale: 'When dividing terms with the same base, subtract the exponents.'
        },
        {
            id: 'fb-3',
            stem: 'Complete: (aᵐ)ⁿ = __BLANK__',
            blanks: [{ answer: 'a^(mn)' }],
            rationale: 'When raising a power to another power, multiply the exponents.'
        },
        {
            id: 'fb-4',
            stem: 'Any non-zero number raised to the power of 0 equals __BLANK__.',
            blanks: [{ answer: '1' }],
            rationale: 'The zero index rule: a⁰ = 1 for any a ≠ 0.'
        },
        {
            id: 'fb-5',
            stem: 'The expression 2⁻³ is equal to __BLANK__.',
            blanks: [{ answer: '1/8' }],
            rationale: 'A negative index means the reciprocal: a⁻ᵐ = 1/aᵐ.'
        },
        {
            id: 'fb-6',
            stem: '√27 written as a fractional index is __BLANK__.',
            blanks: [{ answer: '27^(1/3)' }],
            rationale: 'The nth root is equivalent to the power 1/n: ⁿ√a = a^(1/n).'
        },
        {
            id: 'fb-7',
            stem: 'The expression √12 simplifies to __BLANK__.',
            blanks: [{ answer: '2√3' }],
            rationale: '√12 = √(4×3) = √4 × √3 = 2√3.'
        },
        {
            id: 'fb-8',
            stem: '√50 × √2 = __BLANK__.',
            blanks: [{ answer: '6' }],
            rationale: '√50 × √2 = √100 = 10, or √(25×2) × √2 = 5√2 × √2 = 5√4 = 10.'
        },
        {
            id: 'fb-9',
            stem: 'To rationalise 1/√5, multiply top and bottom by __BLANK__.',
            blanks: [{ answer: '√5' }],
            rationale: 'Multiply by the same surd to make the denominator rational.'
        },
        {
            id: 'fb-10',
            stem: '(x + 2)(x + 5) expands to __BLANK__.',
            blanks: [{ answer: 'x² + 7x + 10' }],
            rationale: '(x+2)(x+5) = x² + 5x + 2x + 10 = x² + 7x + 10.'
        },
        {
            id: 'fb-11',
            stem: '(x - 4)² expands to x² - 8x + __BLANK__.',
            blanks: [{ answer: '16' }],
            rationale: '(x-4)² = x² - 4x - 4x + 16 = x² - 8x + 16.'
        },
        {
            id: 'fb-12',
            stem: 'x² - 16 factorises as (x - 4)(__BLANK__).',
            blanks: [{ answer: 'x + 4' }],
            rationale: 'Difference of two squares: x² - 4² = (x - 4)(x + 4).'
        },
        {
            id: 'fb-13',
            stem: 'The discriminant of ax² + bx + c = 0 is __BLANK__.',
            blanks: [{ answer: 'b² - 4ac' }],
            rationale: 'The discriminant Δ = b² - 4ac determines the nature of the roots.'
        },
        {
            id: 'fb-14',
            stem: 'If Δ > 0, the quadratic has __BLANK__ distinct real roots.',
            blanks: [{ answer: 'two' }],
            rationale: 'A positive discriminant means the parabola crosses the x-axis at two different points.'
        },
        {
            id: 'fb-15',
            stem: 'If Δ = 0, the quadratic has __BLANK__ repeated root.',
            blanks: [{ answer: 'one' }],
            rationale: 'A zero discriminant means the parabola touches the x-axis at exactly one point (the vertex).'
        },
    ],
    dragdrop: [
        {
            id: 'dd-1',
            stem: 'Sort the following expressions by whether they are rational or irrational (surds).',
            categories: ['Rational Numbers', 'Irrational Numbers (Surds)'],
            items: [
                { text: '√2', category: 'Irrational Numbers (Surds)' },
                { text: '√9', category: 'Rational Numbers' },
                { text: '∛8', category: 'Irrational Numbers (Surds)' },
                { text: '√16', category: 'Rational Numbers' },
                { text: '√5', category: 'Irrational Numbers (Surds)' },
                { text: '3', category: 'Rational Numbers' },
                { text: '√3', category: 'Irrational Numbers (Surds)' },
                { text: '√25', category: 'Rational Numbers' },
            ],
        },
        {
            id: 'dd-2',
            stem: 'Categorise the following quadratic expressions by their factorisation type.',
            categories: ['Difference of Two Squares', 'Common Factor', 'Trinomial (Three Terms)', 'Perfect Square'],
            items: [
                { text: 'x² - 9', category: 'Difference of Two Squares' },
                { text: '2x² - 4x', category: 'Common Factor' },
                { text: 'x² + 6x + 9', category: 'Trinomial (Three Terms)' },
                { text: 'x² + 4x + 4', category: 'Perfect Square' },
                { text: '3x² - 27', category: 'Common Factor' },
                { text: 'x² - 16', category: 'Difference of Two Squares' },
                { text: 'x² - 10x + 25', category: 'Perfect Square' },
                { text: 'x² + 7x + 12', category: 'Trinomial (Three Terms)' },
            ],
        },
        {
            id: 'dd-3',
            stem: 'Sort these quadratics by the number of real roots they have.',
            categories: ['Two Distinct Roots (Δ > 0)', 'One Repeated Root (Δ = 0)', 'No Real Roots (Δ < 0)'],
            items: [
                { text: 'x² - 5x + 6 = 0', category: 'Two Distinct Roots (Δ > 0)' },
                { text: 'x² - 6x + 9 = 0', category: 'One Repeated Root (Δ = 0)' },
                { text: 'x² + 4 = 0', category: 'No Real Roots (Δ < 0)' },
                { text: 'x² - 4 = 0', category: 'Two Distinct Roots (Δ > 0)' },
                { text: 'x² + 2x + 1 = 0', category: 'One Repeated Root (Δ = 0)' },
                { text: 'x² + x + 3 = 0', category: 'No Real Roots (Δ < 0)' },
            ],
        },
        {
            id: 'dd-4',
            stem: 'Categorise these index operations by the correct rule to apply.',
            categories: ['Add Powers', 'Subtract Powers', 'Multiply Powers', 'Negative Index = Reciprocal'],
            items: [
                { text: 'x³ × x⁴', category: 'Add Powers' },
                { text: 'a⁸ ÷ a³', category: 'Subtract Powers' },
                { text: '(y⁵)²', category: 'Multiply Powers' },
                { text: '2⁻³', category: 'Negative Index = Reciprocal' },
                { text: 'b⁷ × b²', category: 'Add Powers' },
                { text: 'c⁶ ÷ c²', category: 'Subtract Powers' },
                { text: '3⁻²', category: 'Negative Index = Reciprocal' },
            ],
        },
        {
            id: 'dd-5',
            stem: 'Sort these algebraic expressions by their type.',
            categories: ['Index/Power Expression', 'Surd Expression', 'Expanded Quadratic', 'Factorised Quadratic'],
            items: [
                { text: 'x² + 7x + 12', category: 'Expanded Quadratic' },
                { text: '3√2', category: 'Surd Expression' },
                { text: '2⁻³', category: 'Index/Power Expression' },
                { text: '(x - 3)(x + 4)', category: 'Factorised Quadratic' },
                { text: '√18', category: 'Surd Expression' },
                { text: 'x⁵', category: 'Index/Power Expression' },
                { text: 'x(x + 5)', category: 'Factorised Quadratic' },
                { text: '5²', category: 'Index/Power Expression' },
            ],
        },
        {
            id: 'dd-6',
            stem: 'Categorise these by whether the quadratic graph opens upward (∪) or downward (∩).',
            categories: ['Opens Upward (Minimum, a > 0)', 'Opens Downward (Maximum, a < 0)'],
            items: [
                { text: 'y = x² + 3x + 2', category: 'Opens Upward (Minimum, a > 0)' },
                { text: 'y = -x² + 4x + 1', category: 'Opens Downward (Maximum, a < 0)' },
                { text: 'y = 2x² - 5', category: 'Opens Upward (Minimum, a > 0)' },
                { text: 'y = -3x² + 2x - 4', category: 'Opens Downward (Maximum, a < 0)' },
                { text: 'y = x² - 6x + 9', category: 'Opens Upward (Minimum, a > 0)' },
                { text: 'y = -x² - 1', category: 'Opens Downward (Maximum, a < 0)' },
            ],
        },
        {
            id: 'dd-7',
            stem: 'Sort these index values from smallest to largest (drag to arrange in order).',
            categories: ['Order of Magnitude'],
            items: [
                { text: '2⁻²', category: 'Order of Magnitude' },
                { text: '2⁰', category: 'Order of Magnitude' },
                { text: '2¹', category: 'Order of Magnitude' },
                { text: '2²', category: 'Order of Magnitude' },
                { text: '2³', category: 'Order of Magnitude' },
                { text: '2⁴', category: 'Order of Magnitude' },
            ],
        },
        {
            id: 'dd-8',
            stem: 'Categorise these expressions as "Simplifies to Rational" or "Remains as Surd".',
            categories: ['Simplifies to Rational', 'Remains as Surd'],
            items: [
                { text: '√9', category: 'Simplifies to Rational' },
                { text: '√12', category: 'Remains as Surd' },
                { text: '√25', category: 'Simplifies to Rational' },
                { text: '√8', category: 'Remains as Surd' },
                { text: '√36', category: 'Simplifies to Rational' },
                { text: '√20', category: 'Remains as Surd' },
            ],
        },
    ],
    sequence: [
        {
            id: 'seq-1',
            stem: 'Put the steps for simplifying √12 in the correct order:',
            steps: [
                'Identify the largest perfect square factor of 12 (which is 4)',
                'Write √12 as √(4 × 3)',
                'Separate the surd: √4 × √3',
                'Simplify √4 to 2, giving the final answer 2√3'
            ],
        },
        {
            id: 'seq-2',
            stem: 'Put the steps for solving x² - 5x + 6 = 0 by factorisation in order:',
            steps: [
                'Identify two numbers that multiply to 6 and add to -5',
                'These numbers are -2 and -3',
                'Write the factorised form: (x - 2)(x - 3) = 0',
                'Set each factor to zero: x - 2 = 0 or x - 3 = 0',
                'State the solutions: x = 2 or x = 3'
            ],
        },
        {
            id: 'seq-3',
            stem: 'Put the steps for rationalising 1/√3 in order:',
            steps: [
                'Identify the surd in the denominator (√3)',
                'Multiply both numerator and denominator by √3',
                'Numerator becomes 1 × √3 = √3',
                'Denominator becomes √3 × √3 = 3',
                'Write the rationalised result: √3/3'
            ],
        },
        {
            id: 'seq-4',
            stem: 'Put the steps for expanding (x + 3)(x + 4) in order:',
            steps: [
                'Multiply first terms: x × x = x²',
                'Multiply outer terms: x × 4 = 4x',
                'Multiply inner terms: 3 × x = 3x',
                'Multiply last terms: 3 × 4 = 12',
                'Combine like terms: x² + 7x + 12'
            ],
        },
        {
            id: 'seq-5',
            stem: 'Put the steps for using the discriminant to determine root nature in order:',
            steps: [
                'Write down the discriminant: Δ = b² - 4ac',
                'Calculate the value of Δ using a, b, c from the equation',
                'If Δ > 0: two distinct real roots',
                'If Δ = 0: one repeated (equal) root',
                'If Δ < 0: no real roots'
            ],
        },
        {
            id: 'seq-6',
            stem: 'Put the steps for simplifying 9⁴ ÷ 3⁷ in order:',
            steps: [
                'Express 9 as a power of 3: 9 = 3²',
                'Rewrite 9⁴ as (3²)⁴ = 3⁸',
                'Apply division rule: 3⁸ ÷ 3⁷ = 3^(8-7)',
                'Simplify: 3¹ = 3'
            ],
        },
        {
            id: 'seq-7',
            stem: 'Put the steps for completing the square of x² + 6x + 5 in order:',
            steps: [
                'Take half of the x-coefficient: 6/2 = 3',
                'Square this value: 3² = 9',
                'Write: x² + 6x + 9 - 9 + 5',
                'Form the perfect square: (x + 3)² - 4'
            ],
        },
        {
            id: 'seq-8',
            stem: 'Put the steps for solving a quadratic inequality x² - 4x + 3 < 0 in order:',
            steps: [
                'Find roots of x² - 4x + 3 = 0',
                'The roots are x = 1 and x = 3',
                'Since a = 1 > 0, parabola opens upward (∪)',
                'For f(x) < 0, the solution is between the roots',
                'Write the answer: 1 < x < 3'
            ],
        },
    ],
    keyword: [
        {
            id: 'kw-1',
            stem: 'Define what is meant by the discriminant of a quadratic equation. [2 marks]',
            marks: 2,
            keywords: ['b² - 4ac', 'under square root', 'nature of roots', 'delta'],
            modelAnswer: 'The discriminant is the expression b² - 4ac, which appears under the square root in the quadratic formula. Its value (positive, zero, or negative) determines the number and nature of the real roots of the quadratic equation ax² + bx + c = 0.'
        },
        {
            id: 'kw-2',
            stem: 'Explain how you would simplify √18. [2 marks]',
            marks: 2,
            keywords: ['perfect square', 'factor', 'surd', 'simplify'],
            modelAnswer: 'To simplify √18, first identify the largest perfect square factor, which is 9. Write √18 as √(9 × 2) = √9 × √2 = 3√2. This is the simplified surd form.'
        },
        {
            id: 'kw-3',
            stem: 'Describe the three cases of the discriminant and what each tells you about the graph of y = ax² + bx + c. [3 marks]',
            marks: 3,
            keywords: ['Δ > 0', 'Δ = 0', 'Δ < 0', 'two roots', 'one root', 'no roots', 'parabola', 'x-axis'],
            modelAnswer: 'If Δ = b² - 4ac > 0, the quadratic has two distinct real roots and the parabola crosses the x-axis at two different points. If Δ = 0, there is one repeated (equal) real root and the parabola touches the x-axis at the vertex. If Δ < 0, there are no real roots and the parabola does not intersect the x-axis at all.'
        },
        {
            id: 'kw-4',
            stem: 'Explain what is meant by rationalising the denominator and give an example. [3 marks]',
            marks: 3,
            keywords: ['multiply', 'conjugate', 'surd', 'rational', 'denominator'],
            modelAnswer: 'Rationalising the denominator means removing surds from the denominator of a fraction. For example, to rationalise 1/√2, multiply both numerator and denominator by √2 to get √2/2, which has a rational denominator. If the denominator is of the form a + √b, multiply by its conjugate a - √b.'
        },
        {
            id: 'kw-5',
            stem: 'Explain the method for solving quadratic simultaneous equations where one is linear and one is quadratic. [3 marks]',
            marks: 3,
            keywords: ['substitution', 'rearrange', 'linear', 'quadratic', 'intersection'],
            modelAnswer: 'To solve linear-quadratic simultaneous equations, first rearrange the linear equation to make one variable the subject (e.g. y = ...). Substitute this expression into the quadratic equation, creating a single quadratic in one variable. Solve this quadratic using factorisation or the formula, then substitute each x-value back into the linear equation to find the corresponding y-values. The solutions represent intersection points of the line and curve.'
        },
        {
            id: 'kw-6',
            stem: 'Describe how you would determine the nature of roots for the equation kx² + 4x + 1 = 0 in terms of k. [3 marks]',
            marks: 3,
            keywords: ['discriminant', 'Δ = b² - 4ac', 'set equal to zero', 'solve', 'k', 'inequality'],
            modelAnswer: 'The discriminant is Δ = 4² - 4(k)(1) = 16 - 4k. For two distinct real roots, Δ > 0 giving k < 4. For one repeated root, Δ = 0 giving k = 4. For no real roots, Δ < 0 giving k > 4.'
        },
        {
            id: 'kw-7',
            stem: 'Explain how to solve a quadratic inequality such as x² - 4x + 3 < 0. [4 marks]',
            marks: 4,
            keywords: ['roots', 'sketch', 'parabola', 'region', 'inequality', 'between', 'outside'],
            modelAnswer: 'First find the roots of x² - 4x + 3 = 0, which are x = 1 and x = 3. Sketch the parabola y = x² - 4x + 3, noting that a = 1 > 0 so it opens upward. For the inequality f(x) < 0, we need the region where the parabola is below the x-axis, which is between the roots. The solution is 1 < x < 3.'
        },
        {
            id: 'kw-8',
            stem: 'State and explain the law of indices for division. [2 marks]',
            marks: 2,
            keywords: ['subtract', 'powers', 'same base', 'aᵐ ÷ aⁿ', 'a^(m-n)'],
            modelAnswer: 'The division law of indices states that aᵐ ÷ aⁿ = a^(m-n), provided the terms have the same base a. When dividing powers, you subtract the exponent of the denominator from the exponent of the numerator.'
        },
        {
            id: 'kw-9',
            stem: 'Explain what is meant by a surd and give two examples. [2 marks]',
            marks: 2,
            keywords: ['irrational', 'root', 'rational number', '√', '∛'],
            modelAnswer: 'A surd is an irrational number expressed as a root of a rational number. Examples include √2 (the square root of 2) and ∛5 (the cube root of 5). These cannot be simplified to exact rational values.'
        },
        {
            id: 'kw-10',
            stem: 'Describe the method for factorising a quadratic trinomial like x² + 5x + 6. [2 marks]',
            marks: 2,
            keywords: ['two numbers', 'multiply', 'add', 'coefficient', 'constant term'],
            modelAnswer: 'To factorise x² + bx + c, find two numbers that multiply to give the constant term c and add to give the coefficient of x, which is b. For x² + 5x + 6, the numbers 2 and 3 multiply to 6 and add to 5, giving (x + 2)(x + 3).'
        },
        {
            id: 'kw-11',
            stem: 'Explain how the sign of a in y = ax² + bx + c affects the shape of the parabola. [2 marks]',
            marks: 2,
            keywords: ['positive', 'negative', 'upward', 'downward', 'minimum', 'maximum', 'parabola'],
            modelAnswer: 'If a > 0, the parabola opens upward (∪-shaped) and has a minimum turning point. If a < 0, the parabola opens downward (∩-shaped) and has a maximum turning point. The magnitude of a determines how wide or narrow the parabola is.'
        },
        {
            id: 'kw-12',
            stem: 'Explain geometrically what the solutions to simultaneous linear equations represent. [2 marks]',
            marks: 2,
            keywords: ['intersection', 'straight lines', 'coordinates', 'point', 'unique'],
            modelAnswer: 'Each linear equation represents a straight line on a coordinate plane. The solution to the simultaneous equations is the coordinates of the single point where the two lines intersect. If the lines are parallel, there is no solution. If the lines are identical, there are infinitely many solutions.'
        },
    ],
    flashcards: [
        // Laws of indices
        {
            id: 'fc-1',
            front: 'What is the multiplication law of indices?',
            back: 'aᵐ × aⁿ = a^(m+n) — when multiplying terms with the same base, add the exponents.',
            topic: 'Laws of indices'
        },
        {
            id: 'fc-2',
            front: 'What is the division law of indices?',
            back: 'aᵐ ÷ aⁿ = a^(m-n) — when dividing terms with the same base, subtract the exponents.',
            topic: 'Laws of indices'
        },
        {
            id: 'fc-3',
            front: 'What is the bracket (power) law of indices?',
            back: '(aᵐ)ⁿ = a^(mn) — when raising a power to another power, multiply the exponents.',
            topic: 'Laws of indices'
        },
        {
            id: 'fc-4',
            front: 'What does any non-zero number raised to the power 0 equal?',
            back: 'a⁰ = 1 for any a ≠ 0 — the zero index rule.',
            topic: 'Laws of indices'
        },
        {
            id: 'fc-5',
            front: 'What does a negative index mean?',
            back: 'a⁻ᵐ = 1/aᵐ — a negative index means the reciprocal of the positive power.',
            topic: 'Laws of indices'
        },
        {
            id: 'fc-6',
            front: 'What does a^(1/n) represent?',
            back: 'ⁿ√a — the nth root of a. For example, a^(1/2) = √a and a^(1/3) = ∛a.',
            topic: 'Laws of indices'
        },
        {
            id: 'fc-7',
            front: 'Simplify x³ × x⁴.',
            back: 'x⁷ — add the exponents: 3 + 4 = 7.',
            topic: 'Laws of indices'
        },
        {
            id: 'fc-8',
            front: 'Simplify (y⁵)².',
            back: 'y¹⁰ — multiply the exponents: 5 × 2 = 10.',
            topic: 'Laws of indices'
        },
        // Surds
        {
            id: 'fc-9',
            front: 'What is a surd?',
            back: 'An irrational number expressed as a root of a rational number, e.g. √2, √3, ∛5. It cannot be simplified to an exact rational value.',
            topic: 'Manipulating surds'
        },
        {
            id: 'fc-10',
            front: 'How do you simplify √12?',
            back: 'Find the largest perfect square factor (4), write as √(4×3), then √4 × √3 = 2√3.',
            topic: 'Manipulating surds'
        },
        {
            id: 'fc-11',
            front: 'What does it mean to rationalise a denominator?',
            back: 'To remove surds from the denominator by multiplying numerator and denominator by the surd (or its conjugate for binomial denominators), resulting in a rational denominator.',
            topic: 'Rationalising the denominator'
        },
        {
            id: 'fc-12',
            front: 'Rationalise 1/√5.',
            back: 'Multiply by √5: (1 × √5)/(√5 × √5) = √5/5.',
            topic: 'Rationalising the denominator'
        },
        {
            id: 'fc-13',
            front: 'What are like surds?',
            back: 'Surds with the same radicand (number under the root), e.g. 2√3 and 5√3 are like surds and can be combined as 7√3.',
            topic: 'Manipulating surds'
        },
        // Expanding and factorising
        {
            id: 'fc-14',
            front: 'What is the FOIL method for expanding brackets?',
            back: 'First × Outer × Inner × Last — multiply (a+b)(c+d) = ac + ad + bc + bd.',
            topic: 'Expanding brackets'
        },
        {
            id: 'fc-15',
            front: 'Expand (x + 3)(x + 4).',
            back: 'x² + 7x + 12 — First: x×x = x², Outer: x×4 = 4x, Inner: 3×x = 3x, Last: 3×4 = 12, combine: x² + 4x + 3x + 12 = x² + 7x + 12.',
            topic: 'Expanding brackets'
        },
        {
            id: 'fc-16',
            front: 'What is the difference of two squares factorisation?',
            back: 'x² - a² = (x - a)(x + a) — e.g. x² - 9 = (x - 3)(x + 3).',
            topic: 'Factorisation'
        },
        {
            id: 'fc-17',
            front: 'How do you factorise x² - 9?',
            back: 'x² - 9 = (x - 3)(x + 3) — difference of two squares: x² - 3².',
            topic: 'Factorisation'
        },
        {
            id: 'fc-18',
            front: 'How do you factorise x² + 5x + 6?',
            back: 'Find two numbers that multiply to 6 and add to 5, which are 2 and 3. Result: (x + 2)(x + 3).',
            topic: 'Factorisation'
        },
        {
            id: 'fc-19',
            front: 'What is a common factor?',
            back: 'A term that divides every term in an expression, e.g. in 2x² - 4x, 2x is a common factor, giving 2x(x - 4).',
            topic: 'Factorisation'
        },
        // Quadratics and discriminant
        {
            id: 'fc-20',
            front: 'What is the discriminant formula?',
            back: 'Δ = b² - 4ac — used to determine the nature of roots of ax² + bx + c = 0.',
            topic: 'Discriminants'
        },
        {
            id: 'fc-21',
            front: 'What does Δ > 0 tell you about the roots?',
            back: 'Two distinct real roots — the parabola crosses the x-axis at two different points.',
            topic: 'Discriminants'
        },
        {
            id: 'fc-22',
            front: 'What does Δ = 0 tell you about the roots?',
            back: 'One repeated (equal) real root — the parabola touches the x-axis at the vertex only.',
            topic: 'Discriminants'
        },
        {
            id: 'fc-23',
            front: 'What does Δ < 0 tell you about the roots?',
            back: 'No real roots — the parabola does not cross the x-axis at all.',
            topic: 'Discriminants'
        },
        {
            id: 'fc-24',
            front: 'What is the quadratic formula?',
            back: 'x = (-b ± √(b² - 4ac))/2a — solves ax² + bx + c = 0 for any quadratic.',
            topic: 'Solving quadratic equations'
        },
        {
            id: 'fc-25',
            front: 'How do you find the vertex x-coordinate of a parabola?',
            back: 'x = -b/(2a) — the x-coordinate of the turning point/vertex.',
            topic: 'Quadratic graphs'
        },
        {
            id: 'fc-26',
            front: 'What is the y-intercept of y = ax² + bx + c?',
            back: '(0, c) — set x = 0, giving y = c.',
            topic: 'Quadratic graphs'
        },
        // Simultaneous equations
        {
            id: 'fc-27',
            front: 'What method is used to solve linear-quadratic simultaneous equations?',
            back: 'Substitution — rearrange the linear equation for one variable, substitute into the quadratic, solve the resulting quadratic, then find the other variable.',
            topic: 'Simultaneous equations (quadratic)'
        },
        {
            id: 'fc-28',
            front: 'How do you eliminate a variable in simultaneous linear equations?',
            back: 'Match coefficients by multiplying equations, then add (different signs) or subtract (same signs) to remove that variable.',
            topic: 'Elimination'
        },
        {
            id: 'fc-29',
            front: 'What does the solution to simultaneous equations represent geometrically?',
            back: 'The coordinates of the intersection point(s) of the graphs — where all equations are true simultaneously.',
            topic: 'Simultaneous equations (quadratic)'
        },
        // Inequalities
        {
            id: 'fc-30',
            front: 'For a > 0 and f(x) < 0, where does the solution lie?',
            back: 'Between the two roots x₁ < x < x₂ — the parabola is below the x-axis inside the roots.',
            topic: 'Quadratic inequalities'
        },
        {
            id: 'fc-31',
            front: 'For a > 0 and f(x) > 0, where does the solution lie?',
            back: 'Outside the two roots x < x₁ or x > x₂ — the parabola is above the x-axis outside the roots.',
            topic: 'Quadratic inequalities'
        },
    ],
};
