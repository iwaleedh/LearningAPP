/**
 * Exercise set for A-Level Mathematics
 * Unit 1 (WMA11) — Topic 4: Differentiation
 */

export const exercises_mathematics_1_4 = {
    mcq: [
        // Definition of gradient
        {
            id: 'mcq-t4-1',
            stem: 'What is the gradient of a curve at a point P defined as?',
            options: ['Gradient of the curve', 'Gradient of a line through P', 'Gradient of the tangent to the curve at P', 'Rate of change of y with respect to x'],
            correctAnswer: 2,
            rationale: 'The gradient of a curve at point P is defined as the gradient of the tangent to the curve at P. There is exactly one tangent at each smooth point of a curve.',
            topic: 'Definition of gradient'
        },
        {
            id: 'mcq-t4-2',
            stem: 'What is a secant?',
            options: ['A line perpendicular to a curve', 'A line parallel to a curve', 'A straight line through two points on a curve', 'A horizontal line'],
            correctAnswer: 2,
            rationale: 'A secant is a straight line that passes through two points on a curve. As the two points get closer together, the secant rotates and becomes the tangent in the limiting position.',
            topic: 'Definition of gradient'
        },
        {
            id: 'mcq-t4-3',
            stem: 'Which statement is TRUE about gradients of curves?',
            options: [
                'A curve has the same gradient at every point',
                'A straight line has a varying gradient everywhere',
                'A smooth curve has a different gradient at each point',
                'The gradient of a curve at a point equals the gradient of the normal there'
            ],
            correctAnswer: 2,
            rationale: 'Unlike a straight line which has a single, fixed gradient, a smooth curve has a different gradient at every point. The gradient at any point P equals the gradient of the tangent to the curve at P.',
            topic: 'Definition of gradient'
        },
        {
            id: 'mcq-t4-4',
            stem: 'What does a positive gradient (m > 0) indicate about a curve?',
            options: ['Rising from left to right', 'Falling from right to left', 'Horizontal line', 'Stationary point'],
            correctAnswer: 0,
            rationale: 'A positive gradient means the curve is rising/increasing as x increases — it goes upward from left to right.',
            topic: 'Definition of gradient'
        },
        {
            id: 'mcq-t4-5',
            stem: 'What does a zero gradient (m = 0) indicate about a curve?',
            options: ['Rising from left to right', 'Falling from right to left', 'Horizontal line', 'Stationary point (maximum or minimum)'],
            correctAnswer: 3,
            rationale: 'A zero gradient indicates a stationary point — either a maximum (if the curve changes from rising to falling) or a minimum (if the curve changes from falling to rising). The tangent at this point is horizontal.',
            topic: 'Definition of gradient'
        },
        {
            id: 'mcq-t4-6',
            stem: 'What does a negative gradient (m < 0) indicate about a curve?',
            options: ['Rising from left to right', 'Falling from right to left', 'Horizontal line', 'Stationary point'],
            correctAnswer: 1,
            rationale: 'A negative gradient means the curve is falling/decreasing as x increases — it goes downward from right to left.',
            topic: 'Definition of gradient'
        },
        {
            id: 'mcq-t4-7',
            stem: 'What is the gradient of the normal to a curve at point P if the tangent gradient is m?',
            options: ['The negative reciprocal -1/m', 'The same as the tangent gradient m', 'The reciprocal 1/m', 'Perpendicular to the x-axis'],
            correctAnswer: 0,
            rationale: 'The normal at point P is perpendicular to the tangent at P. If the tangent has gradient m, the normal has gradient -1/m (negative reciprocal).',
            topic: 'Definition of gradient'
        },
        // Differentiation from first principles
        {
            id: 'mcq-t4-8',
            stem: 'What is the first principles definition of the derivative?',
            options: [
                'f\'(x) = [f(x+h) - f(x)] / h',
                'f\'(x) = lim(h→0) [f(x+h) - f(x)] / h',
                'f\'(x) = f(x+h) - f(x)',
                'f\'(x) = lim(h→0) [f(x) - f(x-h)] / h'
            ],
            correctAnswer: 1,
            rationale: 'The correct first principles definition is f\'(x) = lim(h→0) [f(x+h) - f(x)]/h. As h approaches zero, the secant becomes the tangent, and the gradient of the tangent equals this limiting value.',
            topic: 'Differentiation from first principles'
        },
        {
            id: 'mcq-t4-9',
            stem: 'Which notation for the derivative is used when the function is defined as f(x)?',
            options: ['dy/dx', 'd/dx()', 'f\'(x)', 'delta y/delta x'],
            correctAnswer: 2,
            rationale: 'f\'(x) is the Lagrange notation, used when the function is defined as f(x). dy/dx is Leibniz notation used when the equation is given as y = ..., and d/dx() is an operator notation.',
            topic: 'Differentiation from first principles'
        },
        {
            id: 'mcq-t4-10',
            stem: 'If f(x) = 3x², what is f(x+h) expanded?',
            options: ['3x² + 6xh + 3h²', '3x² + 6xh + 3h²', '3x² + 6xh + h²', '3x² + 3h²'],
            correctAnswer: 0,
            rationale: 'Using expansion: 3(x+h)² = 3(x² + 2xh + h²) = 3x² + 6xh + 3h². This is the first step in differentiating from first principles.',
            topic: 'Differentiation from first principles'
        },
        {
            id: 'mcq-t4-11',
            stem: 'What is the derivative of f(x) = x³ from first principles?',
            options: ['3x²', '3x³', 'x²', '3x'],
            correctAnswer: 0,
            rationale: 'f\'(x) = lim(h→0) [(x+h)³ - x³]/h = lim(h→0) [3x²h + 3xh² + h³]/h = lim(h→0) [3x² + 3xh + h²] = 3x².',
            topic: 'Differentiation from first principles'
        },
        {
            id: 'mcq-t4-12',
            stem: 'What is the derivative of f(x) = 4x from first principles?',
            options: ['4', '0', '4x', '4h'],
            correctAnswer: 0,
            rationale: 'f\'(x) = lim(h→0) [4(x+h) - 4x]/h = lim(h→0) [4h]/h = lim(h→0) [4] = 4. The derivative of a linear function is its coefficient.',
            topic: 'Differentiation from first principles'
        },
        // Differentiating powers of x
        {
            id: 'mcq-t4-13',
            stem: 'What is the power rule for differentiation?',
            options: [
                'd/dx(xⁿ) = nxⁿ⁻¹',
                'd/dx(xⁿ) = nxⁿ',
                'd/dx(xⁿ) = nⁿ⁻¹',
                'd/dx(xⁿ) = nxⁿ+1'
            ],
            correctAnswer: 0,
            rationale: 'The power rule is d/dx(xⁿ) = nxⁿ⁻¹ — bring down the power as a coefficient and reduce the power by 1.',
            topic: 'Differentiating powers of x'
        },
        {
            id: 'mcq-t4-14',
            stem: 'What is d/dx(5x³)?',
            options: ['15x²', '5x²', '15x³', '5x²⁻¹'],
            correctAnswer: 0,
            rationale: 'Using the power rule: d/dx(axⁿ) = anxⁿ⁻¹. Here a = 5, n = 3, so d/dx(5x³) = 5 × 3 × x² = 15x².',
            topic: 'Differentiating powers of x'
        },
        {
            id: 'mcq-t4-15',
            stem: 'What is d/dx(x⁻²)?',
            options: ['-2x⁻³', '2x⁻³', '-2x⁻¹', '2x⁻¹'],
            correctAnswer: 0,
            rationale: 'Using the power rule with n = -2: d/dx(x⁻²) = -2x⁻²⁻¹ = -2x⁻³. The negative power becomes part of the coefficient.',
            topic: 'Differentiating powers of x'
        },
        {
            id: 'mcq-t4-16',
            stem: 'What is the derivative of a constant, e.g., d/dx(7)?',
            options: ['7', '0', '1', 'Undefined'],
            correctAnswer: 1,
            rationale: 'The derivative of any constant is zero. This is because constants do not change as x changes — their rate of change is zero.',
            topic: 'Differentiating powers of x'
        },
        {
            id: 'mcq-t4-17',
            stem: 'What is d/dx(√x)?',
            options: ['1/(2√x)', '2√x', '1/(2x)', '√x'],
            correctAnswer: 0,
            rationale: 'Rewrite √x as x^(1/2), then apply power rule: d/dx(x^(1/2)) = (1/2)x^(-1/2) = 1/(2√x).',
            topic: 'Differentiating powers of x'
        },
        {
            id: 'mcq-t4-18',
            stem: 'How should you rewrite 3/x² before differentiating?',
            options: ['3x⁻²', '3x²', 'x⁻²/3', '3x⁻¹'],
            correctAnswer: 0,
            rationale: 'Rewrite reciprocals as negative powers: 3/x² = 3x⁻². Then apply power rule: d/dx(3x⁻²) = -6x⁻³ = -6/x³.',
            topic: 'Differentiating powers of x'
        },
        {
            id: 'mcq-t4-19',
            stem: 'What is d/dx(4x + 3)?',
            options: ['4', '7', '4x', '0'],
            correctAnswer: 0,
            rationale: 'Differentiate term by term: d/dx(4x) = 4, d/dx(3) = 0. The result is 4 + 0 = 4.',
            topic: 'Differentiating powers of x'
        },
        {
            id: 'mcq-t4-20',
            stem: 'What is the derivative of y = x^(3/2)?',
            options: ['(3/2)x^(1/2)', '(3/2)x^(-1/2)', 'x^(1/2)', '(3/2)x^(3/2)'],
            correctAnswer: 0,
            rationale: 'Using the power rule with n = 3/2: d/dx(x^(3/2)) = (3/2)x^(3/2 - 1) = (3/2)x^(1/2) = (3/2)√x.',
            topic: 'Differentiating powers of x'
        },
        // Gradients, tangents and normals
        {
            id: 'mcq-t4-21',
            stem: 'To find the gradient of y = f(x) at x = a, you should:',
            options: [
                'Differentiate to get f\'(x), then substitute x = a',
                'Substitute x = a into y = f(x)',
                'Set f(x) = 0 and solve for x',
                'Integrate f(x) and evaluate at x = a'
            ],
            correctAnswer: 0,
            rationale: 'The gradient at a point is found by first differentiating to get f\'(x), then substituting the x-coordinate of the point. The result f\'(a) is the gradient at that point.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'mcq-t4-22',
            stem: 'What is the point-slope form of a line with gradient m passing through (x₁, y₁)?',
            options: [
                'y - y₁ = m(x - x₁)',
                'y + y₁ = m(x - x₁)',
                'y - y₁ = m(x + x₁)',
                'y = mx + c'
            ],
            correctAnswer: 0,
            rationale: 'The point-slope form is y - y₁ = m(x - x₁). This is used to find equations of tangents and normals once you have the gradient and a point on the line.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'mcq-t4-23',
            stem: 'What is the first step in finding the equation of a tangent to y = f(x) at x = a?',
            options: [
                'Differentiate to find dy/dx',
                'Find the y-coordinate at x = a',
                'Write the point-slope form',
                'Find the normal gradient'
            ],
            correctAnswer: 0,
            rationale: 'The first step is to differentiate to find dy/dx = f\'(x). This gives the gradient function, which you then substitute x = a into to find the gradient at that point.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'mcq-t4-24',
            stem: 'If the tangent to a curve has gradient 5, what is the gradient of the normal?',
            options: ['-1/5', '5', '1/5', '-5'],
            correctAnswer: 0,
            rationale: 'The normal is perpendicular to the tangent, so its gradient is the negative reciprocal: -1/m = -1/5.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'mcq-t4-25',
            stem: 'What does f\'(x) > 0 indicate about the function?',
            options: ['The function is increasing', 'The function is decreasing', 'The function has a stationary point', 'The function is constant'],
            correctAnswer: 0,
            rationale: 'When f\'(x) > 0, the function is increasing. The curve is rising from left to right at those x-values.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'mcq-t4-26',
            stem: 'What does f\'(x) < 0 indicate about the function?',
            options: ['The function is decreasing', 'The function is increasing', 'The function has a maximum', 'The function is constant'],
            correctAnswer: 0,
            rationale: 'When f\'(x) < 0, the function is decreasing. The curve is falling from left to right at those x-values.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'mcq-t4-27',
            stem: 'What does f\'(x) = 0 indicate about the function?',
            options: ['A stationary point', 'The function is increasing', 'The function is decreasing', 'The function is always constant'],
            correctAnswer: 0,
            rationale: 'When f\'(x) = 0, there is a stationary point. The tangent is horizontal at this point, which could be a maximum, minimum, or point of inflection.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'mcq-t4-28',
            stem: 'For the curve y = x³ - 4x + 1, what is the gradient at x = 2?',
            options: ['8', '1', '4', '12'],
            correctAnswer: 0,
            rationale: 'dy/dx = 3x² - 4. At x = 2: dy/dx = 3(4) - 4 = 12 - 4 = 8.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'mcq-t4-29',
            stem: 'Find the equation of the tangent to y = x² at the point (2, 4).',
            options: ['y = 4x - 4', 'y = 2x', 'y = 4x + 4', 'y = 2x - 4'],
            correctAnswer: 0,
            rationale: 'dy/dx = 2x. At x = 2, m = 4. Point is (2, 4). Using y - y₁ = m(x - x₁): y - 4 = 4(x - 2), so y = 4x - 4.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'mcq-t4-30',
            stem: 'If a tangent is horizontal (gradient = 0), what is the gradient of the normal?',
            options: ['Undefined (vertical)', '0', '1', '-1'],
            correctAnswer: 0,
            rationale: 'If the tangent is horizontal (m = 0), the normal is vertical. A vertical line has an undefined gradient — its equation is of the form x = constant.',
            topic: 'Gradients, tangents and normals'
        },
    ],
    fillblank: [
        // Definition of gradient
        {
            id: 'fb-t4-1',
            stem: 'The gradient of a curve at point P is the gradient of the __BLANK__ to the curve at P.',
            blanks: [{ answer: 'tangent' }],
            rationale: 'The gradient at a point equals the gradient of the tangent at that point.'
        },
        {
            id: 'fb-t4-2',
            stem: 'As a secant approaches the limiting position, it becomes a __BLANK__.',
            blanks: [{ answer: 'tangent' }],
            rationale: 'In the limit as the two points get closer together, the secant becomes the tangent.'
        },
        {
            id: 'fb-t4-3',
            stem: 'For m > 0, the curve is __BLANK__ as x increases.',
            blanks: [{ answer: 'rising' }],
            rationale: 'A positive gradient indicates the curve goes upward (rising) from left to right.'
        },
        {
            id: 'fb-t4-4',
            stem: 'For m < 0, the curve is __BLANK__ as x increases.',
            blanks: [{ answer: 'falling' }],
            rationale: 'A negative gradient indicates the curve goes downward (falling) as x increases.'
        },
        {
            id: 'fb-t4-5',
            stem: 'A stationary point occurs where the gradient is __BLANK__.',
            blanks: [{ answer: '0' }],
            rationale: 'At a stationary point (maximum or minimum), the gradient of the tangent is zero (horizontal).'
        },
        {
            id: 'fb-t4-6',
            stem: 'If a curve has gradient m at point P, the normal has gradient __BLANK__.',
            blanks: [{ answer: '-1/m' }],
            rationale: 'The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of m.'
        },
        // Differentiation from first principles
        {
            id: 'fb-t4-7',
            stem: 'The first principles definition is f\'(x) = lim(__BLANK__→0) [f(x+h) - f(x)]/h.',
            blanks: [{ answer: 'h' }],
            rationale: 'As h approaches zero, the secant approaches the tangent.'
        },
        {
            id: 'fb-t4-8',
            stem: 'The notation f\'(x) is used when the function is defined as __BLANK__.',
            blanks: [{ answer: 'f(x)' }],
            rationale: 'f\'(x) notation is used with functions defined in the form f(x) = ...'
        },
        {
            id: 'fb-t4-9',
            stem: 'The notation dy/dx is used when the equation is given as __BLANK__.',
            blanks: [{ answer: 'y =' }],
            rationale: 'dy/dx notation is Leibniz notation, used when the equation is given as y = ...'
        },
        {
            id: 'fb-t4-10',
            stem: 'If f(x) = x³, then f(x+h) - f(x) = __BLANK__h(3x² + 3xh + h²).',
            blanks: [{ answer: '' }],
            rationale: 'Using binomial expansion: (x+h)³ = x³ + 3x²h + 3xh² + h³, so the difference with f(x) is 3x²h + 3xh² + h².'
        },
        // Differentiating powers of x
        {
            id: 'fb-t4-11',
            stem: 'The power rule is d/dx(xⁿ) = __BLANK__xⁿ⁻¹.',
            blanks: [{ answer: 'n' }],
            rationale: 'Bring down the power as the coefficient n, then reduce the power by 1.'
        },
        {
            id: 'fb-t4-12',
            stem: 'The derivative of any constant is __BLANK__.',
            blanks: [{ answer: '0' }],
            rationale: 'Constants do not change, so their rate of change (derivative) is zero.'
        },
        {
            id: 'fb-t4-13',
            stem: 'To differentiate 1/xⁿ, rewrite it as x raised to the __BLANK__ power.',
            blanks: [{ answer: 'negative' }],
            rationale: '1/xⁿ = x⁻ⁿ. Rewrite reciprocals as negative powers before applying the power rule.'
        },
        {
            id: 'fb-t4-14',
            stem: 'The square root √x can be rewritten as x raised to the power of __BLANK__.',
            blanks: [{ answer: '1/2' }],
            rationale: '√x = x^(1/2). Rewrite roots as fractional powers before differentiating.'
        },
        {
            id: 'fb-t4-15',
            stem: 'd/dx(4x³) = __BLANK__x².',
            blanks: [{ answer: '12' }],
            rationale: 'Using the power rule: d/dx(4x³) = 4 × 3 × x² = 12x².'
        },
        // Gradients, tangents and normals
        {
            id: 'fb-t4-16',
            stem: 'To find the gradient at x = a, first differentiate to get __BLANK__, then substitute x = a.',
            blanks: [{ answer: "f'(x)" }],
            rationale: 'Find the derivative f\'(x), then evaluate it at x = a to get the gradient at that point.'
        },
        {
            id: 'fb-t4-17',
            stem: 'The point-slope form of a line is y - y₁ = __BLANK__(x - x₁).',
            blanks: [{ answer: 'm' }],
            rationale: 'The point-slope form uses the gradient m and the point (x₁, y₁).'
        },
        {
            id: 'fb-t4-18',
            stem: 'When f\'(x) > 0, the function is __BLANK__.',
            blanks: [{ answer: 'increasing' }],
            rationale: 'A positive derivative indicates the function is increasing (rising) at those x-values.'
        },
        {
            id: 'fb-t4-19',
            stem: 'When f\'(x) < 0, the function is __BLANK__.',
            blanks: [{ answer: 'decreasing' }],
            rationale: 'A negative derivative indicates the function is decreasing (falling) at those x-values.'
        },
        {
            id: 'fb-t4-20',
            stem: 'When f\'(x) = 0, the function has a __BLANK__ point.',
            blanks: [{ answer: 'stationary' }],
            rationale: 'A zero derivative indicates a stationary point where the tangent is horizontal.'
        },
    ],
    dragdrop: [
        {
            id: 'dd-t4-1',
            stem: 'Categorise these gradient interpretations.',
            categories: ['Gradient > 0', 'Gradient = 0', 'Gradient < 0', 'Gradient Relationship'],
            items: [
                { text: 'Curve is rising/increasing', category: 'Gradient > 0' },
                { text: 'Curve is falling/decreasing', category: 'Gradient < 0' },
                { text: 'Horizontal tangent', category: 'Gradient = 0' },
                { text: 'Stationary point (max or min)', category: 'Gradient = 0' },
                { text: 'Normal gradient = -1/m', category: 'Gradient Relationship' },
                { text: 'Upward from left to right', category: 'Gradient > 0' },
            ],
        },
        {
            id: 'dd-t4-2',
            stem: 'Sort these derivatives into the correct category.',
            categories: ['Correct Derivative', 'Incorrect Derivative', 'Not a Derivative', 'Special Case'],
            items: [
                { text: 'd/dx(x³) = 3x²', category: 'Correct Derivative' },
                { text: 'd/dx(x⁵) = 5x⁴', category: 'Correct Derivative' },
                { text: 'd/dx(5) = 5', category: 'Incorrect Derivative' },
                { text: 'd/dx(7) = 0', category: 'Special Case' },
                { text: 'd/dx(4x) = 4', category: 'Correct Derivative' },
                { text: '∫x²dx', category: 'Not a Derivative' },
                { text: 'd/dx(x⁻²) = +2x⁻³', category: 'Incorrect Derivative' },
            ],
        },
        {
            id: 'dd-t4-3',
            stem: 'Categorise these functions by how to rewrite before differentiating.',
            categories: ['Rewrite as x^(1/2)', 'Rewrite as x^(-n)', 'Already in power form', 'Rewrite term by term'],
            items: [
                { text: '√x', category: 'Rewrite as x^(1/2)' },
                { text: '³√x', category: 'Rewrite as x^(1/2)' },
                { text: '1/x²', category: 'Rewrite as x^(-n)' },
                { text: '2/x³', category: 'Rewrite as x^(-n)' },
                { text: 'x⁵ + 3x²', category: 'Already in power form' },
                { text: '(x³ + 2x)/x', category: 'Rewrite term by term' },
                { text: '4√x', category: 'Rewrite as x^(1/2)' },
            ],
        },
        {
            id: 'dd-t4-4',
            stem: 'Sort these steps for finding a tangent equation into order.',
            categories: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
            items: [
                { text: 'Differentiate to find dy/dx', category: 'Step 1' },
                { text: 'Substitute x-coordinate to find gradient m', category: 'Step 2' },
                { text: 'Find y-coordinate by substituting x into y', category: 'Step 3' },
                { text: 'Use point-slope form: y - y₁ = m(x - x₁)', category: 'Step 4' },
            ],
        },
        {
            id: 'dd-t4-5',
            stem: 'Categorise these derivative notation.',
            categories: ['Function Notation f\'(x)', 'Leibniz Notation dy/dx', 'Operator Notation d/dx()', 'Not Derivative Notation'],
            items: [
                { text: 'f\'(x) = 2x', category: 'Function Notation f\'(x)' },
                { text: 'dy/dx = 3x²', category: 'Leibniz Notation dy/dx' },
                { text: 'd/dx(4x³) = 12x²', category: 'Operator Notation d/dx()' },
                { text: 'Δy/Δx', category: 'Not Derivative Notation' },
                { text: 'f(x) = x²', category: 'Not Derivative Notation' },
                { text: 'd²y/dx²', category: 'Operator Notation d/dx()' },
            ],
        },
        {
            id: 'dd-t4-6',
            stem: 'Sort these by what they represent in differentiation.',
            categories: ['Derivative/Gradient', 'Original Function', 'Point on Curve', 'Secant/Tangent'],
            items: [
                { text: 'f(x) or y', category: 'Original Function' },
                { text: 'f\'(x) or dy/dx', category: 'Derivative/Gradient' },
                { text: 'Line through two points', category: 'Secant/Tangent' },
                { text: '(x, y) coordinates', category: 'Point on Curve' },
                { text: 'Rate of change', category: 'Derivative/Gradient' },
                { text: 'Limiting position of secant', category: 'Secant/Tangent' },
            ],
        },
        {
            id: 'dd-t4-7',
            stem: 'Categorise these behaviours based on f\'(x).',
            categories: ['Increasing Function', 'Decreasing Function', 'Stationary Point', 'Cannot Determine'],
            items: [
                { text: 'f\'(x) > 0', category: 'Increasing Function' },
                { text: 'f\'(x) < 0', category: 'Decreasing Function' },
                { text: 'f\'(x) = 0', category: 'Stationary Point' },
                { text: 'Rising from left to right', category: 'Increasing Function' },
                { text: 'Falling from right to left', category: 'Decreasing Function' },
                { text: 'Horizontal tangent', category: 'Stationary Point' },
            ],
        },
        {
            id: 'dd-t4-8',
            stem: 'Sort these derivatives into correct categories.',
            categories: ['Negative Power Result', 'Fractional Power Result', 'Constant Result', 'Linear Term Result'],
            items: [
                { text: 'd/dx(x⁻²) = -2x⁻³', category: 'Negative Power Result' },
                { text: 'd/dx(x^(1/2)) = (1/2)x^(-1/2)', category: 'Fractional Power Result' },
                { text: 'd/dx(7) = 0', category: 'Constant Result' },
                { text: 'd/dx(5x) = 5', category: 'Linear Term Result' },
                { text: 'd/dx(1/x) = -1/x²', category: 'Negative Power Result' },
                { text: 'd/dx(4x^(3/2)) = 6x^(1/2)', category: 'Fractional Power Result' },
            ],
        },
        {
            id: 'dd-t4-9',
            stem: 'Categorise these by tangent/normal relationship.',
            categories: ['Tangent Property', 'Normal Property', 'Both Properties', 'Neither Property'],
            items: [
                { text: 'Gradient = f\'(a)', category: 'Tangent Property' },
                { text: 'Gradient = -1/f\'(a)', category: 'Normal Property' },
                { text: 'Perpendicular to each other', category: 'Both Properties' },
                { text: 'Both pass through the same point', category: 'Both Properties' },
                { text: 'Perpendicular to the x-axis', category: 'Neither Property' },
                { text: 'Horizontal when f\'(a) = 0', category: 'Tangent Property' },
            ],
        },
        {
            id: 'dd-t4-10',
            stem: 'Sort these first principles steps.',
            categories: ['Write f(x+h)', 'Form Ratio', 'Simplify', 'Factorise', 'Take Limit'],
            items: [
                { text: 'Substitute (x+h) for x in f(x)', category: 'Write f(x+h)' },
                { text: 'Calculate [f(x+h) - f(x)]/h', category: 'Form Ratio' },
                { text: 'Expand and cancel terms', category: 'Simplify' },
                { text: 'Factor out h from numerator', category: 'Factorise' },
                { text: 'Substitute h = 0', category: 'Take Limit' },
            ],
        },
    ],
    sequence: [
        {
            id: 'seq-t4-1',
            stem: 'Put the steps for finding derivative of f(x) = x³ using first principles in order:',
            steps: [
                'Write f(x+h) = (x+h)³ = x³ + 3x²h + 3xh² + h³',
                'Form difference: f(x+h) - f(x) = 3x²h + 3xh² + h³',
                'Divide by h: [f(x+h) - f(x)]/h = 3x² + 3xh + h²',
                'Take limit as h → 0: f\'(x) = 3x²'
            ],
        },
        {
            id: 'seq-t4-2',
            stem: 'Put the steps for finding the equation of a tangent in order:',
            steps: [
                'Differentiate to find dy/dx',
                'Substitute x-coordinate to find gradient m',
                'Find y-coordinate by substituting x into original equation',
                'Use point-slope form: y - y₁ = m(x - x₁)',
                'Simplify to get the equation of the tangent'
            ],
        },
        {
            id: 'seq-t4-3',
            stem: 'Put the steps for finding the normal equation in order:',
            steps: [
                'Find the tangent gradient m',
                'Calculate the normal gradient = -1/m',
                'Use the point-slope form with the normal gradient',
                'Write in required form (e.g., ax + by + c = 0)'
            ],
        },
        {
            id: 'seq-t4-4',
            stem: 'Put the steps for differentiating using the power rule in order:',
            steps: [
                'Identify the power n in xⁿ',
                'Bring down n as the coefficient',
                'Reduce the power by 1 to get n-1',
                'Write the result as nxⁿ⁻¹',
                'If there is a constant multiplier a, include it: anxⁿ⁻¹'
            ],
        },
        {
            id: 'seq-t4-5',
            stem: 'Put the steps for differentiating 1/xⁿ in order:',
            steps: [
                'Rewrite 1/xⁿ as x⁻ⁿ',
                'Apply power rule: d/dx(x⁻ⁿ) = -nx⁻ⁿ⁻¹',
                'Simplify the exponent: -n - 1 = -(n+1)',
                'Write result: -n/xⁿ⁺¹'
            ],
        },
        {
            id: 'seq-t4-6',
            stem: 'Put the steps for differentiating √x in order:',
            steps: [
                'Rewrite √x as x^(1/2)',
                'Apply power rule: d/dx(x^(1/2)) = (1/2)x^(1/2 - 1)',
                'Simplify exponent: 1/2 - 1 = -1/2',
                'Write result: (1/2)x^(-1/2) = 1/(2√x)'
            ],
        },
        {
            id: 'seq-t4-7',
            stem: 'Put the steps for interpreting function behaviour from f\'(x) in order:',
            steps: [
                'Find f\'(x) by differentiating f(x)',
                'Examine the sign of f\'(x) at specific x-values',
                'If f\'(x) > 0: function is increasing (rising)',
                'If f\'(x) < 0: function is decreasing (falling)',
                'If f\'(x) = 0: function has a stationary point'
            ],
        },
        {
            id: 'seq-t4-8',
            stem: 'Put the steps for differentiating from first principles in order:',
            steps: [
                'Write f(x+h) by substituting (x+h) for x',
                'Form the difference quotient [f(x+h) - f(x)]/h',
                'Expand and simplify the numerator',
                'Factorise h and cancel with denominator',
                'Take the limit as h → 0 by substituting h = 0'
            ],
        },
    ],
    keyword: [
        {
            id: 'kw-t4-1',
            stem: 'Define the gradient of a curve at a point P. [2 marks]',
            marks: 2,
            keywords: ['tangent', 'limit', 'secant', 'derivative'],
            modelAnswer: 'The gradient of a curve at point P is defined as the gradient of the tangent to the curve at P. This is the limiting value of the gradient of a secant as two points on the curve approach P. Algebraically, it equals the derivative f\'(P).'
        },
        {
            id: 'kw-t4-2',
            stem: 'Explain the difference between a secant and a tangent. [2 marks]',
            marks: 2,
            keywords: ['two points', 'limiting position', 'rotates', 'becomes', 'intersection', 'touch'],
            modelAnswer: 'A secant is a straight line through two distinct points on a curve. As these two points get closer together, the secant rotates toward the tangent. In the limiting position, the secant touches the curve at exactly one point, becoming the tangent. Unlike a secant, a tangent intersects the curve at exactly one point locally.'
        },
        {
            id: 'kw-t4-3',
            stem: 'Explain how positive, negative, and zero gradients indicate different behaviours of a curve. [3 marks]',
            marks: 3,
            keywords: ['increasing', 'rising', 'decreasing', 'falling', 'stationary', 'maximum', 'minimum', 'horizontal tangent'],
            modelAnswer: 'A positive gradient (m > 0) means the curve is rising or increasing as x increases — it goes upward from left to right. A negative gradient (m < 0) means the curve is falling or decreasing as x increases — it goes downward from right to left. A zero gradient (m = 0) indicates a stationary point where the tangent is horizontal — this could be a maximum (if curve changes from rising to falling) or a minimum (if changes from falling to rising).'
        },
        {
            id: 'kw-t4-4',
            stem: 'State the limit definition of derivative from first principles. [2 marks]',
            marks: 2,
            keywords: ['limit', 'h approaches 0', '[f(x+h) - f(x)]/h', "f'(x)", 'secant', 'tangent'],
            modelAnswer: 'The derivative from first principles is f\'(x) = lim(h→0) [f(x+h) - f(x)]/h. As the increment h approaches zero, the secant through (x, f(x)) and (x+h, f(x+h)) approaches the tangent at x. The gradient of the tangent equals this limiting value of the difference quotient.'
        },
        {
            id: 'kw-t4-5',
            stem: 'Describe the relationship between the gradient of a tangent and the gradient of the normal at the same point. [2 marks]',
            marks: 2,
            keywords: ['perpendicular', 'negative reciprocal', 'product -1', '90 degrees', 'right angle'],
            modelAnswer: 'If the tangent has gradient m, then the normal has gradient -1/m (the negative reciprocal). This relationship comes from the fact that perpendicular lines have gradients whose product equals -1. The normal is perpendicular to both the tangent and the curve at the point of contact.'
        },
        {
            id: 'kw-t4-6',
            stem: 'State the power rule for differentiation. [2 marks]',
            marks: 2,
            keywords: ['d/dx(xⁿ)', 'nxⁿ⁻¹', 'bring down', 'reduce power', 'coefficient'],
            modelAnswer: 'The power rule states that d/dx(xⁿ) = nxⁿ⁻¹. You bring down the power n as the coefficient and reduce the power by 1. For a constant multiplier a, d/dx(axⁿ) = anxⁿ⁻¹.'
        },
        {
            id: 'kw-t4-7',
            stem: 'Explain how to differentiate a function with multiple terms. [2 marks]',
            marks: 2,
            keywords: ['term by term', 'sum', 'difference', 'constant', 'zero'],
            modelAnswer: 'Differentiate sums and differences term by term. Apply the power rule to each term independently. Constants differentiate to zero. For example, d/dx(3x² - 5x + 2) = 6x - 5 + 0 = 6x - 5.'
        },
        {
            id: 'kw-t4-8',
            stem: 'Explain how to rewrite expressions before differentiating. [3 marks]',
            marks: 3,
            keywords: ['reciprocal', 'negative power', 'root', 'fractional power', 'split', 'divide'],
            modelAnswer: 'Rewrite every term as a power of x before differentiating. For reciprocals, use negative powers: 1/xⁿ → x⁻ⁿ. For roots, use fractional powers: √x → x^(1/2). For complex fractions, split terms: (x³ + 2x)/x = x² + 2. Then apply the power rule term by term.'
        },
        {
            id: 'kw-t4-9',
            stem: 'Describe the steps to find the equation of a tangent to a curve at a given point. [3 marks]',
            marks: 3,
            keywords: ['differentiate', 'substitute', 'gradient', 'y-coordinate', 'point-slope', 'y - y₁ = m(x - x₁)'],
            modelAnswer: 'First, differentiate to find dy/dx. Second, substitute the x-coordinate to find the gradient m. Third, find the y-coordinate by substituting x into the original equation. Finally, use the point-slope form y - y₁ = m(x - x₁) to write the equation of the tangent.'
        },
        {
            id: 'kw-t4-10',
            stem: 'Explain what f\'(x) tells us about the function f(x). [3 marks]',
            marks: 3,
            keywords: ['rate of change', 'gradient', 'increasing', 'decreasing', 'stationary', 'positive', 'negative', 'zero'],
            modelAnswer: 'f\'(x) gives the gradient of f(x) at any point x and represents the rate of change of the function. When f\'(x) > 0, the function is increasing. When f\'(x) < 0, the function is decreasing. When f\'(x) = 0, there is a stationary point.'
        },
        {
            id: 'kw-t4-11',
            stem: 'Differentiate y = 3x⁴ - 5x² + 2/x + 7. Show your working. [3 marks]',
            marks: 3,
            keywords: ['12x³', '-10x', '-2x⁻²', '0', 'rewrite', 'power rule'],
            modelAnswer: 'Rewrite: y = 3x⁴ - 5x² + 2x⁻¹ + 7. Differentiate term by term: dy/dx = 12x³ - 10x - 2x⁻² + 0. The final answer is dy/dx = 12x³ - 10x - 2/x².'
        },
        {
            id: 'kw-t4-12',
            stem: 'Find the equation of the normal to y = x² + 3x - 2 at x = 1. [4 marks]',
            marks: 4,
            keywords: ['dy/dx', '2x+3', '5', 'normal gradient', '-1/5', 'point', '(1, 2)', 'x + 5y - 11 = 0'],
            modelAnswer: 'dy/dx = 2x + 3. At x = 1, tangent gradient = 5. Normal gradient = -1/5. Point: when x = 1, y = 1 + 3 - 2 = 2, so (1, 2). Normal: y - 2 = (-1/5)(x - 1). Multiply by 5: 5y - 10 = -x + 1. Rearrange: x + 5y - 11 = 0.'
        },
    ],
    flashcards: [
        // Definition of gradient
        {
            id: 'fc-t4-1',
            front: 'What is the gradient of a curve at point P?',
            back: 'Gradient of the tangent to the curve at P — defined as the limiting gradient as two points on the curve approach each other.',
            topic: 'Definition of gradient'
        },
        {
            id: 'fc-t4-2',
            front: 'What is a secant?',
            back: 'A straight line through two points on a curve. As the points get closer, it approaches the tangent.',
            topic: 'Definition of gradient'
        },
        {
            id: 'fc-t4-3',
            front: 'What does m > 0 indicate about a curve?',
            back: 'Rising/increasing — curve goes upward from left to right as x increases.',
            topic: 'Definition of gradient'
        },
        {
            id: 'fc-t4-4',
            front: 'What does m = 0 indicate about a curve?',
            back: 'Stationary point — tangent is horizontal (m = 0). Could be maximum or minimum.',
            topic: 'Definition of gradient'
        },
        {
            id: 'fc-t4-5',
            front: 'What does m < 0 indicate about a curve?',
            back: 'Falling/decreasing — curve goes downward from right to left as x increases.',
            topic: 'Definition of gradient'
        },
        {
            id: 'fc-t4-6',
            front: 'What is the relationship between tangent and normal gradients?',
            back: 'Normal gradient = -1/m — negative reciprocal. Both are perpendicular at the point of contact.',
            topic: 'Definition of gradient'
        },
        // Differentiation from first principles
        {
            id: 'fc-t4-7',
            front: 'What is the limit definition of derivative from first principles?',
            back: 'f\'(x) = lim(h→0) [f(x+h) - f(x)]/h — as h→0, the secant approaches the tangent, giving the derivative.',
            topic: 'Differentiation from first principles'
        },
        {
            id: 'fc-t4-8',
            front: 'What notation is used for the derivative when f(x) = ...?',
            back: 'f\'(x) — this is Lagrange notation, also called prime notation.',
            topic: 'Differentiation from first principles'
        },
        {
            id: 'fc-t4-9',
            front: 'What notation is used for the derivative when y = ...?',
            back: 'dy/dx — this is Leibniz notation, read as "dy by dx".',
            topic: 'Differentiation from first principles'
        },
        {
            id: 'fc-t4-10',
            front: 'What is d/dx(x³)?',
            back: '3x² — power rule: bring down 3, reduce power from 3 to 2.',
            topic: 'Differentiation from first principles'
        },
        {
            id: 'fc-t4-11',
            front: 'What is d/dx(4x)?',
            back: '4 — derivative of a linear term is its coefficient. The x becomes 1.',
            topic: 'Differentiation from first principles'
        },
        {
            id: 'fc-t4-12',
            front: 'List the 5 steps for differentiating from first principles.',
            back: '1. Write f(x+h) by substituting (x+h) for x.\n2. Form [f(x+h) - f(x)]/h.\n3. Expand and simplify.\n4. Factorise h and cancel.\n5. Take limit h → 0.',
            topic: 'Differentiation from first principles'
        },
        // Differentiating powers of x
        {
            id: 'fc-t4-13',
            front: 'State the power rule for differentiation.',
            back: 'd/dx(xⁿ) = nxⁿ⁻¹. For d/dx(axⁿ) = anxⁿ⁻¹. Bring down the power, reduce by 1.',
            topic: 'Differentiating powers of x'
        },
        {
            id: 'fc-t4-14',
            front: 'What is the derivative of any constant?',
            back: '0 — constants do not change, so their rate of change is zero.',
            topic: 'Differentiating powers of x'
        },
        {
            id: 'fc-t4-15',
            front: 'How do you rewrite 1/xⁿ before differentiating?',
            back: 'Rewrite as x⁻ⁿ (negative power). Then apply power rule: d/dx(x⁻ⁿ) = -nx⁻ⁿ⁻¹.',
            topic: 'Differentiating powers of x'
        },
        {
            id: 'fc-t4-16',
            front: 'How do you rewrite √x before differentiating?',
            back: 'Rewrite as x^(1/2) (fractional power). Then apply power rule: d/dx(x^(1/2)) = (1/2)x^(-1/2) = 1/(2√x).',
            topic: 'Differentiating powers of x'
        },
        {
            id: 'fc-t4-17',
            front: 'What is d/dx(x⁻²)?',
            back: '-2x⁻³ or -2/x³. Power rule: bring down -2, reduce power from -2 to -3.',
            topic: 'Differentiating powers of x'
        },
        {
            id: 'fc-t4-18',
            front: 'What is d/dx(5x³)?',
            back: '15x². Power rule: 5 × 3 × x² = 15x².',
            topic: 'Differentiating powers of x'
        },
        {
            id: 'fc-t4-19',
            front: 'What is d/dx(x^(3/2))?',
            back: '(3/2)x^(1/2) or (3/2)√x. Bring down 3/2, reduce power from 3/2 to 1/2.',
            topic: 'Differentiating powers of x'
        },
        {
            id: 'fc-t4-20',
            front: 'Differentiate y = 3x⁴ - 5x² + 7.',
            back: 'dy/dx = 12x³ - 10x. Differentiate term by term: 12x³ - 10x + 0.',
            topic: 'Differentiating powers of x'
        },
        // Gradients, tangents and normals
        {
            id: 'fc-t4-21',
            front: 'How do you find the gradient at x = a?',
            back: 'Differentiate to get f\'(x), then substitute x = a. The result f\'(a) is the gradient at that point.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'fc-t4-22',
            front: 'What is the point-slope form of a line?',
            back: 'y - y₁ = m(x - x₁) — used to find equations of tangents and normals.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'fc-t4-23',
            front: 'What are the steps to find a tangent equation?',
            back: '1. Differentiate to find dy/dx.\n2. Substitute x to find gradient m.\n3. Find y-coordinate.\n4. Use y - y₁ = m(x - x₁).',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'fc-t4-24',
            front: 'If tangent gradient = m, what is the normal gradient?',
            back: '-1/m — the negative reciprocal. The normal is perpendicular to the tangent.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'fc-t4-25',
            front: 'What does f\'(x) > 0 mean?',
            back: 'Function is increasing (rising) at those x-values.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'fc-t4-26',
            front: 'What does f\'(x) < 0 mean?',
            back: 'Function is decreasing (falling) at those x-values.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'fc-t4-27',
            front: 'What does f\'(x) = 0 mean?',
            back: 'Function has a stationary point. The tangent is horizontal.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'fc-t4-28',
            front: 'Find the gradient of y = x³ - 4x + 1 at x = 2.',
            back: 'dy/dx = 3x² - 4. At x = 2: dy/dx = 12 - 4 = 8.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'fc-t4-29',
            front: 'Find the tangent to y = x² at (2, 4).',
            back: 'dy/dx = 2x. At x = 2, m = 4. Using y - 4 = 4(x - 2): y = 4x - 4.',
            topic: 'Gradients, tangents and normals'
        },
        {
            id: 'fc-t4-30',
            front: 'If tangent is horizontal (m = 0), what is the normal?',
            back: 'Vertical line. Its equation is x = constant. The gradient is undefined.',
            topic: 'Gradients, tangents and normals'
        },
    ],
};
