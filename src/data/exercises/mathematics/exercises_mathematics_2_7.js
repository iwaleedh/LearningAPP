/**
 * Exercises for A-Level Mathematics WMA12 Topic 7: Differentiation
 */

export const exercises_mathematics_2_7 = {
    mcq: [
        // Standard derivatives (Subtopic 0)
        {
            id: 'mcq-2t7-1',
            stem: 'What is the derivative of eˣ?',
            options: ['eˣ', 'x e^(x-1)', 'eˣ/x', 'ln x'],
            correctAnswer: 0,
            rationale: 'd/dx(eˣ) = eˣ. The exponential function eˣ is unique because it is equal to its own derivative. This is a fundamental result that must be memorised.',
            topic: 'Differentiating standard functions'
        },
        {
            id: 'mcq-2t7-2',
            stem: 'What is the derivative of ln x?',
            options: ['ln x / x', '1/x', 'x', 'e^x'],
            correctAnswer: 1,
            rationale: 'd/dx(ln x) = 1/x. This is valid for x > 0 (the domain of ln x). The reciprocal relationship between ln x and 1/x is a key result in calculus.',
            topic: 'Differentiating standard functions'
        },
        {
            id: 'mcq-2t7-3',
            stem: 'What is the derivative of sin x?',
            options: ['-sin x', 'cos x', 'sec²x', 'tan x'],
            correctAnswer: 1,
            rationale: 'd/dx(sin x) = cos x. This result is only valid when x is measured in radians. If x is in degrees, you must convert using x° = x·π/180 rad.',
            topic: 'Differentiating standard functions'
        },
        {
            id: 'mcq-2t7-4',
            stem: 'What is the derivative of cos x?',
            options: ['cos x', 'sin x', '-sin x', 'sec²x'],
            correctAnswer: 2,
            rationale: 'd/dx(cos x) = -sin x. Note the negative sign! This derivative is also only valid for x in radians. The negative sign is crucial and often forgotten.',
            topic: 'Differentiating standard functions'
        },
        {
            id: 'mcq-2t7-5',
            stem: 'What is the derivative of e^(2x)?',
            options: ['e^(2x)', '2e^(2x)', '2e^x', 'e^x/x'],
            correctAnswer: 1,
            rationale: 'd/dx(e^(kx)) = k e^(kx). For k = 2: d/dx(e^(2x)) = 2e^(2x). The chain rule gives us the multiplier k, which is the derivative of the inner function 2x.',
            topic: 'Differentiating standard functions'
        },
        // Chain rule (Subtopic 1)
        {
            id: 'mcq-2t7-6',
            stem: 'What is the chain rule formula?',
            options: ['dy/dx = dy/du + du/dx', 'dy/dx = (dy/du)(du/dx)', 'dy/dx = dy/du ÷ du/dx', 'dy/dx = du/dx - dy/du'],
            correctAnswer: 1,
            rationale: 'The chain rule states dy/dx = (dy/du)(du/dx). This means: differentiate the outer function (keeping inner unchanged), then multiply by the derivative of the inner function.',
            topic: 'Chain rule'
        },
        {
            id: 'mcq-2t7-7',
            stem: 'Using the chain rule, what is d/dx[(3x + 1)⁴]?',
            options: ['4(3x + 1)³', '12(3x + 1)³', '4(3x + 1)⁴', '3(3x + 1)³'],
            correctAnswer: 1,
            rationale: 'Let u = 3x + 1, so y = u⁴. dy/du = 4u³ and du/dx = 3. By chain rule: dy/dx = 4u³ × 3 = 12(3x + 1)³. The factor of 3 comes from the inner derivative.',
            topic: 'Chain rule'
        },
        {
            id: 'mcq-2t7-8',
            stem: 'What is d/dx[ln(2x² + 3)]?',
            options: ['1/(2x² + 3)', '4x/(2x² + 3)', '2x/(2x² + 3)', '2/(2x² + 3)'],
            correctAnswer: 1,
            rationale: 'Using chain rule for ln(f(x)): d/dx[ln(f(x))] = f\'(x)/f(x). Here f(x) = 2x² + 3, so f\'(x) = 4x. The answer is 4x/(2x² + 3).',
            topic: 'Chain rule'
        },
        {
            id: 'mcq-2t7-9',
            stem: 'What is d/dx[e^(sin x)]?',
            options: ['e^(sin x)', 'cos x · e^(sin x)', 'sin x · e^(sin x)', 'e^(cos x)'],
            correctAnswer: 1,
            rationale: 'Let u = sin x, so y = e^u. dy/du = e^u and du/dx = cos x. By chain rule: dy/dx = e^u × cos x = cos x · e^(sin x). Remember to multiply by the derivative of the inner function.',
            topic: 'Chain rule'
        },
        {
            id: 'mcq-2t7-10',
            stem: 'What is a common mistake when applying the chain rule?',
            options: ['Forgetting to add instead of multiply', 'Forgetting to multiply by the inner derivative', 'Differentiating in the wrong order', 'Forgetting to use the product rule'],
            correctAnswer: 1,
            rationale: 'The most common mistake is forgetting to multiply by the derivative of the inner function (du/dx). For example, d/dx[sin(x²)] = 2x cos(x²), NOT just cos(x²). Always ask: "What is the inner function? Have I multiplied by its derivative?"',
            topic: 'Chain rule'
        },
        // Product rule (Subtopic 2)
        {
            id: 'mcq-2t7-11',
            stem: 'What is the product rule formula?',
            options: ['(uv)\' = u\'v\'', '(uv)\' = uv\' - vu\'', '(uv)\' = uv\' + vu\'', '(uv)\' = u\'v + uv\''],
            correctAnswer: 2,
            rationale: 'The product rule is (uv)\' = uv\' + vu\'. A helpful mnemonic is "first times derivative of second, plus second times derivative of first". This applies when differentiating products of two separate functions.',
            topic: 'Product rule'
        },
        {
            id: 'mcq-2t7-12',
            stem: 'What is d/dx[x³ eˣ]?',
            options: ['3x² eˣ', 'x³ eˣ + 3x² eˣ', '3x² eˣ + x³ eˣ', 'x³ eˣ(x + 3)'],
            correctAnswer: 3,
            rationale: 'Let u = x³, v = eˣ. du/dx = 3x², dv/dx = eˣ. Product rule: x³·eˣ + eˣ·3x² = eˣ(x³ + 3x²) = x²eˣ(x + 3). Always factorise the result when possible.',
            topic: 'Product rule'
        },
        {
            id: 'mcq-2t7-13',
            stem: 'When should you use the product rule?',
            options: ['When dividing two functions', 'When differentiating a composite function', 'When multiplying two separate functions', 'When finding the second derivative'],
            correctAnswer: 2,
            rationale: 'Use the product rule when y = f(x)·g(x) — i.e., when the expression is a product of two separate functions. Examples include x²·eˣ, sin x·ln x, and x³·cos(2x).',
            topic: 'Product rule'
        },
        // Quotient rule (Subtopic 3)
        {
            id: 'mcq-2t7-14',
            stem: 'What is the quotient rule formula?',
            options: ['d/dx(u/v) = (u\'v - v\'u)/v²', 'd/dx(u/v) = (vu\' - uv\')/v²', 'd/dx(u/v) = (uv\' - vu\')/v²', 'd/dx(u/v) = (u\'v\' - vu)/v²'],
            correctAnswer: 1,
            rationale: 'The quotient rule is d/dx(u/v) = (vu\' - uv\')/v². A helpful mnemonic is "vdu minus udv, all over v squared". The numerator is v·u\' - u·v\'.',
            topic: 'Quotient rule'
        },
        {
            id: 'mcq-2t7-15',
            stem: 'What is d/dx[x²/(x + 1)]?',
            options: ['(2x(x + 1) - x²)/(x + 1)²', '(2x(x + 1) + x²)/(x + 1)²', '(x² - 2x)/(x + 1)²', '(x² + 2x)/(x + 1)²'],
            correctAnswer: 0,
            rationale: 'Let u = x², v = x + 1. u\' = 2x, v\' = 1. Quotient rule: (v·u\' - u·v\')/v² = ((x + 1)·2x - x²·1)/(x + 1)² = (2x² + 2x - x²)/(x + 1)² = (x² + 2x)/(x + 1)².',
            topic: 'Quotient rule'
        },
        {
            id: 'mcq-2t7-16',
            stem: 'Using the quotient rule, what is d/dx[tan x]?',
            options: ['cos²x', 'sec²x', '1/cos x', 'tan²x'],
            correctAnswer: 1,
            rationale: 'tan x = sin x/cos x. Using quotient rule with u = sin x, v = cos x: (cos·cos - sin·(-sin))/cos² = (cos² + sin²)/cos² = 1/cos² = sec²x. This is a standard result that should be memorised.',
            topic: 'Quotient rule'
        },
        {
            id: 'mcq-2t7-17',
            stem: 'What is a common pitfall when using the quotient rule?',
            options: ['Forgetting to square the numerator', 'Getting the subtraction order wrong in the numerator', 'Forgetting to differentiate the denominator', 'Adding instead of multiplying'],
            correctAnswer: 1,
            rationale: 'A common mistake is getting the subtraction order wrong: the numerator is v·u\' - u·v\', NOT u·v\' - v·u\'. Reversing the sign changes the entire answer. Remember: "vdu minus udv".',
            topic: 'Quotient rule'
        },
        // Implicit and parametric differentiation (Subtopic 4)
        {
            id: 'mcq-2t7-18',
            stem: 'When differentiating y² with respect to x, what is the result?',
            options: ['2y', '2x', '2y · dy/dx', '2x · dy/dx'],
            correctAnswer: 2,
            rationale: 'Using implicit differentiation: d/dx(y²) = 2y · dy/dx. This is because y is a function of x, so we apply the chain rule: differentiate with respect to y, then multiply by dy/dx.',
            topic: 'Implicit and parametric differentiation'
        },
        {
            id: 'mcq-2t7-19',
            stem: 'For the curve x² + y² = 25, what is dy/dx?',
            options: ['x/y', 'y/x', '-x/y', '-y/x'],
            correctAnswer: 2,
            rationale: 'Differentiating: 2x + 2y·dy/dx = 0. Rearranging: 2y·dy/dx = -2x, so dy/dx = -x/y. This is a circle of radius 5 centered at the origin.',
            topic: 'Implicit and parametric differentiation'
        },
        {
            id: 'mcq-2t7-20',
            stem: 'What is the formula for parametric differentiation?',
            options: ['dy/dx = dx/dt ÷ dy/dt', 'dy/dx = (dy/dt) ÷ (dx/dt)', 'dy/dx = (dx/dt)(dy/dt)', 'dy/dx = dy/dt + dx/dt'],
            correctAnswer: 1,
            rationale: 'For parametric equations x = f(t), y = g(t): dy/dx = (dy/dt) ÷ (dx/dt) = g\'(t)/f\'(t). This follows from the chain rule: dy/dx = dy/dt · dt/dx.',
            topic: 'Implicit and parametric differentiation'
        },
        {
            id: 'mcq-2t7-21',
            stem: 'If x = t² and y = t³, what is dy/dx?',
            options: ['3t', '3t²', '3t/2', '3t²/2t'],
            correctAnswer: 2,
            rationale: 'dx/dt = 2t, dy/dt = 3t². dy/dx = (dy/dt)/(dx/dt) = 3t²/2t = 3t/2. Parametric differentiation lets us find gradients without eliminating the parameter.',
            topic: 'Implicit and parametric differentiation'
        },
        // Connected rates of change (Subtopic 5)
        {
            id: 'mcq-2t7-22',
            stem: 'How are connected rates of change related?',
            options: ['dy/dt = dy/dx + dx/dt', 'dy/dt = dy/dx - dx/dt', 'dy/dt = (dy/dx)(dx/dt)', 'dy/dt = dy/dx ÷ dx/dt'],
            correctAnswer: 2,
            rationale: 'By the chain rule: dy/dt = (dy/dx)·(dx/dt). This connects the rate of change of y with respect to time to the rate of change of x with respect to time, via the relationship between y and x.',
            topic: 'Connected rates of change'
        },
        {
            id: 'mcq-2t7-23',
            stem: 'A sphere has volume V = (4/3)πr³. If dV/dt = 12, what is dr/dt when r = 3?',
            options: ['1/(3π)', '1/(π)', '3/(π)', '12/(36π)'],
            correctAnswer: 0,
            rationale: 'dV/dr = 4πr² = 4π·9 = 36π. Using chain rule: dr/dt = (dr/dV)·(dV/dt) = (1/(4πr²))·12 = 12/(36π) = 1/(3π). Always check your units!',
            topic: 'Connected rates of change'
        },
        {
            id: 'mcq-2t7-24',
            stem: 'What does a negative rate of change indicate?',
            options: ['The quantity is increasing at a decreasing rate', 'The quantity is decreasing', 'The rate is constant', 'The calculation is incorrect'],
            correctAnswer: 1,
            rationale: 'A negative rate of change means the quantity is decreasing over time. For example, a deflating balloon would have dV/dt < 0. The magnitude tells you how fast, the sign tells you the direction of change.',
            topic: 'Connected rates of change'
        },
        // Stationary points and second derivative (Subtopic 6)
        {
            id: 'mcq-2t7-25',
            stem: 'What condition must be satisfied for a point to be a stationary point?',
            options: ['d²y/dx² = 0', 'dy/dx = 0', 'y = 0', 'x = 0'],
            correctAnswer: 1,
            rationale: 'A stationary point occurs where dy/dx = 0. This is because the gradient of the tangent is zero at such points. The second derivative d²y/dx² is used to classify the stationary point, not to find it.',
            topic: 'Stationary points and the second derivative'
        },
        {
            id: 'mcq-2t7-26',
            stem: 'If d²y/dx² > 0 at a stationary point, what type of point is it?',
            options: ['Local maximum', 'Local minimum', 'Point of inflection', 'Saddle point'],
            correctAnswer: 1,
            rationale: 'When d²y/dx² > 0 at a stationary point, the curve is concave up (like a smiley face), indicating a local minimum. Remember: positive second derivative = minimum, negative second derivative = maximum.',
            topic: 'Stationary points and the second derivative'
        },
        {
            id: 'mcq-2t7-27',
            stem: 'If d²y/dx² < 0 at a stationary point, what type of point is it?',
            options: ['Local maximum', 'Local minimum', 'Point of inflection', 'Saddle point'],
            correctAnswer: 0,
            rationale: 'When d²y/dx² < 0 at a stationary point, the curve is concave down (like a frowny face), indicating a local maximum. The negative second derivative means the gradient is decreasing through zero.',
            topic: 'Stationary points and the second derivative'
        },
        {
            id: 'mcq-2t7-28',
            stem: 'What should you do if d²y/dx² = 0 at a stationary point?',
            options: ['Assume it is a point of inflection', 'Use the sign-of-gradient method', 'Assume it is neither max nor min', 'Differentiate again'],
            correctAnswer: 1,
            rationale: 'If d²y/dx² = 0, the second derivative test is inconclusive. You must use the sign-of-gradient method: check the sign of dy/dx just before and after the point. No sign change = inflection, neg→0→pos = min, pos→0→neg = max.',
            topic: 'Stationary points and the second derivative'
        },
        {
            id: 'mcq-2t7-29',
            stem: 'What is the first step in an optimisation problem?',
            options: ['Differentiate the function', 'Set the derivative to zero', 'Define variables and write the objective function', 'Check the second derivative'],
            correctAnswer: 2,
            rationale: 'The first step in optimisation is to define your variables and write the objective function (the quantity you want to maximise or minimise). Only then can you use constraints to express everything in one variable and differentiate.',
            topic: 'Stationary points and the second derivative'
        },
        {
            id: 'mcq-2t7-30',
            stem: 'A rectangle has perimeter 24 cm. What dimensions maximise the area?',
            options: ['Length 12 cm, width 0 cm', 'Length 8 cm, width 4 cm', 'Length 6 cm, width 6 cm', 'Length 10 cm, width 2 cm'],
            correctAnswer: 2,
            rationale: 'Let length = x, width = 12 - x (since 2x + 2w = 24). Area A = x(12 - x) = 12x - x². dA/dx = 12 - 2x = 0 → x = 6. Second derivative is -2 < 0, so it\'s a maximum. A square maximises area for a fixed perimeter.',
            topic: 'Stationary points and the second derivative'
        }
    ],

    fillblank: [
        // Standard derivatives
        {
            id: 'fb-2t7-1',
            stem: 'The derivative of eˣ is __BLANK__.',
            template: 'The derivative of eˣ is __BLANK__.',
            blanks: [{ answer: 'e^x' }],
            rationale: 'd/dx(eˣ) = eˣ. The exponential function eˣ is unique because it equals its own derivative.'
        },
        {
            id: 'fb-2t7-2',
            stem: 'The derivative of ln x is __BLANK__.',
            template: 'The derivative of ln x is __BLANK__.',
            blanks: [{ answer: '1/x' }],
            rationale: 'd/dx(ln x) = 1/x. This is valid for x > 0 (the domain of the natural logarithm).'
        },
        {
            id: 'fb-2t7-3',
            stem: 'The derivative of sin x is __BLANK__.',
            template: 'The derivative of sin x is __BLANK__.',
            blanks: [{ answer: 'cos x' }],
            rationale: 'd/dx(sin x) = cos x. This result is only valid when x is in radians.'
        },
        {
            id: 'fb-2t7-4',
            stem: 'The derivative of cos x is __BLANK__.',
            template: 'The derivative of cos x is __BLANK__.',
            blanks: [{ answer: '-sin x' }],
            rationale: 'd/dx(cos x) = -sin x. Note the negative sign! This is often forgotten.'
        },
        {
            id: 'fb-2t7-5',
            stem: 'The derivative of tan x is __BLANK__.',
            template: 'The derivative of tan x is __BLANK__.',
            blanks: [{ answer: 'sec^2 x' }],
            rationale: 'd/dx(tan x) = sec²x. This can be derived using the quotient rule with tan x = sin x/cos x.'
        },
        // Chain rule
        {
            id: 'fb-2t7-6',
            stem: 'The chain rule formula is dy/dx = (dy/__BLANK__) × (__BLANK__/dx).',
            template: 'The chain rule formula is dy/dx = (dy/__BLANK__) × (__BLANK__/dx).',
            blanks: [{ answer: 'du' }, { answer: 'du' }],
            rationale: 'The chain rule is dy/dx = (dy/du)(du/dx). Differentiate the outer function, multiply by the derivative of the inner function.'
        },
        {
            id: 'fb-2t7-7',
            stem: 'd/dx[(2x + 1)³] = __BLANK__(2x + 1)².',
            template: 'd/dx[(2x + 1)³] = __BLANK__(2x + 1)².',
            blanks: [{ answer: '6' }],
            rationale: 'Let u = 2x + 1, so y = u³. dy/du = 3u², du/dx = 2. dy/dx = 3(2x + 1)² × 2 = 6(2x + 1)².'
        },
        {
            id: 'fb-2t7-8',
            stem: 'd/dx[ln(5x)] = __BLANK__/x.',
            template: 'd/dx[ln(5x)] = __BLANK__/x.',
            blanks: [{ answer: '5' }],
            rationale: 'd/dx[ln(5x)] = 5/(5x) = 1/x. Alternatively, ln(5x) = ln 5 + ln x, so the derivative is 1/x.'
        },
        // Product rule
        {
            id: 'fb-2t7-9',
            stem: 'The product rule is (uv)\' = u__BLANK__\' + v__BLINK__\'.',
            template: 'The product rule is (uv)\' = u__BLANK__\' + v__BLANK__\'.',
            blanks: [{ answer: 'v' }, { answer: 'u' }],
            rationale: '(uv)\' = uv\' + vu\'. "First times derivative of second, plus second times derivative of first."'
        },
        {
            id: 'fb-2t7-10',
            stem: 'd/dx[x² eˣ] = eˣ(__BLANK__ + __BLANK__).',
            template: 'd/dx[x² eˣ] = eˣ(__BLANK__ + __BLANK__).',
            blanks: [{ answer: 'x^2' }, { answer: '2x' }],
            rationale: 'Let u = x², v = eˣ. du/dx = 2x, dv/dx = eˣ. (uv)\' = x²eˣ + eˣ·2x = eˣ(x² + 2x).'
        },
        // Quotient rule
        {
            id: 'fb-2t7-11',
            stem: 'The quotient rule numerator is __BLANK__du - u__BLANK__.',
            template: 'The quotient rule numerator is __BLANK__du - u__BLANK__.',
            blanks: [{ answer: 'v' }, { answer: 'dv' }],
            rationale: 'd/dx(u/v) = (v·du/dx - u·dv/dx)/v². Remember: "vdu minus udv over v squared."'
        },
        {
            id: 'fb-2t7-12',
            stem: 'For d/dx(u/v), the denominator is __BLANK__².',
            template: 'For d/dx(u/v), the denominator is __BLANK__².',
            blanks: [{ answer: 'v' }],
            rationale: 'The quotient rule is (v·u\' - u·v\')/v². The denominator is always v squared, not v.'
        },
        // Implicit differentiation
        {
            id: 'fb-2t7-13',
            stem: 'd/dx[y²] = __BLANK__ · dy/dx.',
            template: 'd/dx[y²] = __BLANK__ · dy/dx.',
            blanks: [{ answer: '2y' }],
            rationale: 'Using implicit differentiation and the chain rule: d/dx[y²] = 2y · dy/dx. We differentiate with respect to y, then multiply by dy/dx.'
        },
        // Stationary points
        {
            id: 'fb-2t7-14',
            stem: 'At a stationary point, dy/dx = __BLANK__.',
            template: 'At a stationary point, dy/dx = __BLANK__.',
            blanks: [{ answer: '0' }],
            rationale: 'A stationary point occurs where the derivative dy/dx equals zero, meaning the gradient of the tangent is zero.'
        },
        {
            id: 'fb-2t7-15',
            stem: 'If d²y/dx² > 0 at a stationary point, it is a local __BLANK__.',
            template: 'If d²y/dx² > 0 at a stationary point, it is a local __BLANK__.',
            blanks: [{ answer: 'minimum' }],
            rationale: 'A positive second derivative means the curve is concave up (like a smiley face), indicating a local minimum.'
        }
    ],

    dragdrop: [
        {
            id: 'dd-2t7-1',
            stem: 'Sort these functions by their standard derivative.',
            categories: ['Derivative is itself', 'Derivative is 1/x', 'Derivative involves trig', 'Derivative involves exponent'],
            items: [
                { text: 'eˣ', category: 'Derivative is itself' },
                { text: 'ln x', category: 'Derivative is 1/x' },
                { text: 'sin x', category: 'Derivative involves trig' },
                { text: 'cos x', category: 'Derivative involves trig' },
                { text: 'tan x', category: 'Derivative involves trig' },
                { text: 'e^(2x)', category: 'Derivative involves exponent' },
                { text: '2^x', category: 'Derivative involves exponent' },
                { text: 'e^(-x)', category: 'Derivative involves exponent' }
            ]
        },
        {
            id: 'dd-2t7-2',
            stem: 'Match each rule to its formula.',
            categories: ['Chain Rule', 'Product Rule', 'Quotient Rule'],
            items: [
                { text: 'dy/dx = (dy/du)(du/dx)', category: 'Chain Rule' },
                { text: "(uv)' = uv' + vu'", category: 'Product Rule' },
                { text: "d/dx(u/v) = (vu' - uv')/v²", category: 'Quotient Rule' },
                { text: "d/dx[f(x)]ⁿ = nf'(x)[f(x)]ⁿ⁻¹", category: 'Chain Rule' },
                { text: "d/dx ln(f(x)) = f'(x)/f(x)", category: 'Chain Rule' },
                { text: '"vdu minus udv over v squared"', category: 'Quotient Rule' }
            ]
        },
        {
            id: 'dd-2t7-3',
            stem: 'Classify these stationary points based on the second derivative.',
            categories: ['Local Maximum (d²y/dx² < 0)', 'Local Minimum (d²y/dx² > 0)', 'Inconclusive (d²y/dx² = 0)'],
            items: [
                { text: 'Peak of a hill', category: 'Local Maximum (d²y/dx² < 0)' },
                { text: 'Bottom of a valley', category: 'Local Minimum (d²y/dx² > 0)' },
                { text: 'Use sign-of-gradient method', category: 'Inconclusive (d²y/dx² = 0)' },
                { text: 'Curve concave down', category: 'Local Maximum (d²y/dx² < 0)' },
                { text: 'Curve concave up', category: 'Local Minimum (d²y/dx² > 0)' },
                { text: 'Point of inflection possible', category: 'Inconclusive (d²y/dx² = 0)' }
            ]
        },
        {
            id: 'dd-2t7-4',
            stem: 'Sort these by the differentiation technique needed.',
            categories: ['Chain Rule Only', 'Product Rule Needed', 'Quotient Rule Needed', 'Implicit Differentiation'],
            items: [
                { text: '(3x + 1)⁵', category: 'Chain Rule Only' },
                { text: 'e^(sin x)', category: 'Chain Rule Only' },
                { text: 'x² eˣ', category: 'Product Rule Needed' },
                { text: 'x sin x', category: 'Product Rule Needed' },
                { text: '(x + 1)/(x - 2)', category: 'Quotient Rule Needed' },
                { text: 'sin x / x', category: 'Quotient Rule Needed' },
                { text: 'x² + y² = 25', category: 'Implicit Differentiation' },
                { text: 'x³ + 2xy + y³ = 5', category: 'Implicit Differentiation' }
            ]
        },
        {
            id: 'dd-2t7-5',
            stem: 'Match each derivative to its function.',
            categories: ['Derivative is f\'(x) = 2x', 'Derivative is f\'(x) = eˣ', 'Derivative is f\'(x) = 1/x', 'Derivative is f\'(x) = cos x'],
            items: [
                { text: 'y = x²', category: 'Derivative is f\'(x) = 2x' },
                { text: 'y = x² + 5', category: 'Derivative is f\'(x) = 2x' },
                { text: 'y = eˣ', category: 'Derivative is f\'(x) = eˣ' },
                { text: 'y = 3eˣ', category: 'Derivative is f\'(x) = eˣ (up to factor)' },
                { text: 'y = ln x', category: 'Derivative is f\'(x) = 1/x' },
                { text: 'y = ln(3x)', category: 'Derivative is f\'(x) = 1/x' },
                { text: 'y = sin x', category: 'Derivative is f\'(x) = cos x' },
                { text: 'y = 5 sin x', category: 'Derivative is f\'(x) = cos x (up to factor)' }
            ]
        },
        {
            id: 'dd-2t7-6',
            stem: 'Sort these optimisation steps in the correct category.',
            categories: ['Setup Phase', 'Differentiation Phase', 'Verification Phase', 'Answer Phase'],
            items: [
                { text: 'Define variables', category: 'Setup Phase' },
                { text: 'Write objective function', category: 'Setup Phase' },
                { text: 'Use constraints to reduce variables', category: 'Setup Phase' },
                { text: 'Differentiate the function', category: 'Differentiation Phase' },
                { text: 'Set derivative to zero', category: 'Differentiation Phase' },
                { text: 'Solve for critical values', category: 'Differentiation Phase' },
                { text: 'Check second derivative', category: 'Verification Phase' },
                { text: 'State dimensions and quantity', category: 'Answer Phase' }
            ]
        },
        {
            id: 'dd-2t7-7',
            stem: 'Match the parametric quantities.',
            categories: ['dx/dt', 'dy/dt', 'dy/dx'],
            items: [
                { text: 'Rate of change of x with respect to t', category: 'dx/dt' },
                { text: 'Rate of change of y with respect to t', category: 'dy/dt' },
                { text: 'Gradient of the curve', category: 'dy/dx' },
                { text: '(dy/dt) ÷ (dx/dt)', category: 'dy/dx' },
                { text: 'Used in chain rule', category: 'dx/dt' },
                { text: 'Numerator in parametric formula', category: 'dy/dt' }
            ]
        },
        {
            id: 'dd-2t7-8',
            stem: 'Classify these common mistakes.',
            categories: ['Chain Rule Mistakes', 'Product Rule Mistakes', 'Quotient Rule Mistakes'],
            items: [
                { text: 'Forgetting to multiply by inner derivative', category: 'Chain Rule Mistakes' },
                { text: 'd/dx[sin(x²)] = cos(x²)', category: 'Chain Rule Mistakes' },
                { text: 'Forgetting to add both terms', category: 'Product Rule Mistakes' },
                { text: "Using uv' - vu' instead of +", category: 'Product Rule Mistakes' },
                { text: 'Reversing vdu - udv to udv - vdu', category: 'Quotient Rule Mistakes' },
                { text: 'Forgetting to square the denominator', category: 'Quotient Rule Mistakes' }
            ]
        },
        {
            id: 'dd-2t7-9',
            stem: 'Sort geometric formulas for rates of change.',
            categories: ['Volume Formulas', 'Area Formulas', 'Surface Area Formulas'],
            items: [
                { text: 'V = (4/3)πr³ (sphere)', category: 'Volume Formulas' },
                { text: 'V = πr²h (cylinder)', category: 'Volume Formulas' },
                { text: 'V = (1/3)πr²h (cone)', category: 'Volume Formulas' },
                { text: 'A = πr² (circle)', category: 'Area Formulas' },
                { text: 'A = 4πr² (sphere surface)', category: 'Surface Area Formulas' },
                { text: 'A = 2πrh (cylinder side)', category: 'Surface Area Formulas' }
            ]
        },
        {
            id: 'dd-2t7-10',
            stem: 'Match each function type to when to use each rule.',
            categories: ['Use Chain Rule', 'Use Product Rule', 'Use Quotient Rule', 'Use Implicit'],
            items: [
                { text: 'y = [f(x)]ⁿ', category: 'Use Chain Rule' },
                { text: 'y = e^(f(x))', category: 'Use Chain Rule' },
                { text: 'y = f(x) · g(x)', category: 'Use Product Rule' },
                { text: 'y = f(x)/g(x)', category: 'Use Quotient Rule' },
                { text: 'Equation contains y² or e^y terms', category: 'Use Implicit' },
                { text: 'x and y mixed in same term', category: 'Use Implicit' }
            ]
        }
    ],

    sequence: [
        {
            id: 'seq-2t7-1',
            stem: 'Put the steps in order to differentiate y = (2x + 1)⁵ using the chain rule:',
            steps: [
                'Let u = 2x + 1, so y = u⁵',
                'Find du/dx = 2',
                'Find dy/du = 5u⁴',
                'Apply chain rule: dy/dx = (dy/du)(du/dx)',
                'Substitute back: dy/dx = 5(2x + 1)⁴ × 2 = 10(2x + 1)⁴'
            ]
        },
        {
            id: 'seq-2t7-2',
            stem: 'Put the steps in order to differentiate y = x² ln x using the product rule:',
            steps: [
                'Let u = x² and v = ln x',
                'Find du/dx = 2x',
                'Find dv/dx = 1/x',
                "Apply product rule: dy/dx = uv' + vu' = x²(1/x) + ln x(2x)",
                'Simplify: dy/dx = x + 2x ln x = x(1 + 2 ln x)'
            ]
        },
        {
            id: 'seq-2t7-3',
            stem: 'Put the steps in order to find dy/dx for x² + y² = 25 using implicit differentiation:',
            steps: [
                'Differentiate each term with respect to x',
                'd/dx(x²) = 2x and d/dx(y²) = 2y(dy/dx)',
                'Set up equation: 2x + 2y(dy/dx) = 0',
                'Rearrange: 2y(dy/dx) = -2x',
                'Solve: dy/dx = -x/y'
            ]
        },
        {
            id: 'seq-2t7-4',
            stem: 'Put the steps in order to find stationary points of y = x³ - 3x:',
            steps: [
                'Find dy/dx = 3x² - 3',
                'Set dy/dx = 0 and solve: 3x² - 3 = 0',
                'Find x = 1 or x = -1',
                'Find d²y/dx² = 6x',
                'Classify: at x = 1, d²y/dx² = 6 > 0 (min); at x = -1, d²y/dx² = -6 < 0 (max)'
            ]
        },
        {
            id: 'seq-2t7-5',
            stem: 'Put the steps in order to solve: A sphere expands at 10 cm³/s. Find dr/dt when r = 5:',
            steps: [
                'Write volume formula: V = (4/3)πr³',
                'Find dV/dr = 4πr²',
                'Evaluate at r = 5: dV/dr = 4π(25) = 100π',
                'Use chain rule: dr/dt = (dr/dV)(dV/dt) = (1/(100π))(10)',
                'Simplify: dr/dt = 1/(10π) cm/s'
            ]
        },
        {
            id: 'seq-2t7-6',
            stem: 'Put the steps in order to find dy/dx for x = t², y = 2t:',
            steps: [
                'Find dx/dt = 2t',
                'Find dy/dt = 2',
                'Use parametric formula: dy/dx = (dy/dt)/(dx/dt)',
                'Substitute: dy/dx = 2/(2t) = 1/t',
                'The gradient at any point is 1/t'
            ]
        },
        {
            id: 'seq-2t7-7',
            stem: 'Put the optimisation steps in order for maximum area with perimeter 20:',
            steps: [
                'Let length = x, width = (10 - x) since 2x + 2w = 20',
                'Write area function: A = x(10 - x) = 10x - x²',
                'Differentiate: dA/dx = 10 - 2x',
                'Set to zero: 10 - 2x = 0, so x = 5',
                'Verify: d²A/dx² = -2 < 0, so it\'s a maximum. Dimensions: 5 cm × 5 cm (a square)'
            ]
        },
        {
            id: 'seq-2t7-8',
            stem: 'Put the steps in order to classify a stationary point when d²y/dx² = 0:',
            steps: [
                'Check values of dy/dx just before the stationary point',
                'Check values of dy/dx just after the stationary point',
                'If neg → 0 → pos: it is a minimum',
                'If pos → 0 → neg: it is a maximum',
                'If no sign change: it is a point of inflection'
            ]
        }
    ],

    keyword: [
        {
            id: 'kw-2t7-1',
            stem: 'State the derivative of eˣ. [2 marks]',
            marks: 2,
            keywords: ['e^x', 'equals itself', 'same function'],
            modelAnswer: 'The derivative of eˣ is eˣ. This is a unique property of the exponential function eˣ — it is equal to its own derivative.'
        },
        {
            id: 'kw-2t7-2',
            stem: 'State the chain rule formula. [2 marks]',
            marks: 2,
            keywords: ['dy/dx', 'dy/du', 'du/dx', 'multiply', 'product'],
            modelAnswer: 'The chain rule states that dy/dx = (dy/du)(du/dx). In words: differentiate the outer function, then multiply by the derivative of the inner function.'
        },
        {
            id: 'kw-2t7-3',
            stem: 'State the product rule formula. [2 marks]',
            marks: 2,
            keywords: ["uv", "uv'", "vu'", "plus", "sum"],
            modelAnswer: "The product rule states that (uv)' = uv' + vu'. The derivative of a product is: first times derivative of second, plus second times derivative of first."
        },
        {
            id: 'kw-2t7-4',
            stem: 'State the quotient rule formula. [3 marks]',
            marks: 3,
            keywords: ['v', 'du', 'minus', 'u', 'dv', 'v squared', 'denominator'],
            modelAnswer: 'The quotient rule states that d/dx(u/v) = (v·du/dx - u·dv/dx)/v². The numerator is vdu minus udv, all over v squared.'
        },
        {
            id: 'kw-2t7-5',
            stem: 'Explain how to classify a stationary point using the second derivative. [3 marks]',
            marks: 3,
            keywords: ['d²y/dx²', 'positive', 'minimum', 'negative', 'maximum', 'zero', 'inconclusive', 'sign test'],
            modelAnswer: 'If d²y/dx² > 0 at the stationary point, it is a local minimum (curve concave up). If d²y/dx² < 0, it is a local maximum (curve concave down). If d²y/dx² = 0, the test is inconclusive — use the sign-of-gradient method to check if dy/dx changes sign through the point.'
        },
        {
            id: 'kw-2t7-6',
            stem: 'Differentiate y = (2x + 3)⁴. Show your working. [3 marks]',
            marks: 3,
            keywords: ['chain rule', '8', '2x+3', 'cubed', 'power', 'inner derivative'],
            modelAnswer: 'Let u = 2x + 3, so y = u⁴. dy/du = 4u³ = 4(2x + 3)³. du/dx = 2. By chain rule: dy/dx = 4(2x + 3)³ × 2 = 8(2x + 3)³.'
        },
        {
            id: 'kw-2t7-7',
            stem: 'Differentiate y = x² sin x using the product rule. Show your working. [3 marks]',
            marks: 3,
            keywords: ['product rule', 'u', 'v', '2x', 'cos x', 'x² cos x', '2x sin x'],
            modelAnswer: 'Let u = x², v = sin x. du/dx = 2x, dv/dx = cos x. Using product rule: dy/dx = uv\' + vu\' = x²(cos x) + sin x(2x) = x² cos x + 2x sin x.'
        },
        {
            id: 'kw-2t7-8',
            stem: 'Find dy/dx for x² + y² = 9 using implicit differentiation. [3 marks]',
            marks: 3,
            keywords: ['2x', '2y', 'dy/dx', 'equals zero', 'negative', 'x/y', 'implicit'],
            modelAnswer: 'Differentiating term by term with respect to x: 2x + 2y(dy/dx) = 0. Rearranging: 2y(dy/dx) = -2x. Solving: dy/dx = -x/y.'
        },
        {
            id: 'kw-2t7-9',
            stem: 'Find dy/dx for the parametric equations x = t², y = 3t. [2 marks]',
            marks: 2,
            keywords: ['dy/dt', 'dx/dt', '3', '2t', 'divide', '3/2t', 'parametric'],
            modelAnswer: 'dx/dt = 2t and dy/dt = 3. Using the parametric formula: dy/dx = (dy/dt)/(dx/dt) = 3/(2t).'
        },
        {
            id: 'kw-2t7-10',
            stem: 'A sphere has volume V = (4/3)πr³. If dV/dt = 8 cm³/s, find dr/dt when r = 2 cm. [4 marks]',
            marks: 4,
            keywords: ['dV/dr', '4πr²', '16π', 'chain rule', '8', '16π', '1/2π'],
            modelAnswer: 'First, dV/dr = 4πr² = 4π(4) = 16π at r = 2. Using the chain rule: dr/dt = (dr/dV)(dV/dt) = (1/(16π))(8) = 8/(16π) = 1/(2π) cm/s.'
        },
        {
            id: 'kw-2t7-11',
            stem: 'Find and classify the stationary points of y = x³ - 12x. [5 marks]',
            marks: 5,
            keywords: ['dy/dx', '3x²', '12', 'set to zero', 'x=2', 'x=-2', 'second derivative', '6x', 'minimum', 'maximum'],
            modelAnswer: 'dy/dx = 3x² - 12. Setting to zero: 3x² - 12 = 0, so x² = 4, giving x = 2 or x = -2. d²y/dx² = 6x. At x = 2: d²y/dx² = 12 > 0, so (2, -16) is a local minimum. At x = -2: d²y/dx² = -12 < 0, so (-2, 16) is a local maximum.'
        },
        {
            id: 'kw-2t7-12',
            stem: 'State the condition for a point to be a stationary point. [1 mark]',
            marks: 1,
            keywords: ['dy/dx', 'equals zero', 'gradient', 'zero'],
            modelAnswer: 'A stationary point occurs where dy/dx = 0. This means the gradient of the tangent to the curve at that point is zero.'
        }
    ],

    flashcards: [
        // Standard derivatives
        {
            id: 'fc-2t7-1',
            front: 'What is d/dx(eˣ)?',
            back: 'd/dx(eˣ) = eˣ\n\nThe exponential function eˣ is unique because it equals its own derivative.',
            topic: 'Differentiating standard functions'
        },
        {
            id: 'fc-2t7-2',
            front: 'What is d/dx(e^(kx))?',
            back: 'd/dx(e^(kx)) = k e^(kx)\n\nThe multiplier k comes from the chain rule — it\'s the derivative of the inner function kx.',
            topic: 'Differentiating standard functions'
        },
        {
            id: 'fc-2t7-3',
            front: 'What is d/dx(ln x)?',
            back: 'd/dx(ln x) = 1/x\n\nThis is valid for x > 0 (the domain of the natural logarithm).',
            topic: 'Differentiating standard functions'
        },
        {
            id: 'fc-2t7-4',
            front: 'What is d/dx(sin x)?',
            back: 'd/dx(sin x) = cos x\n\nThis is only valid when x is in radians. If x is in degrees, you must convert first.',
            topic: 'Differentiating standard functions'
        },
        {
            id: 'fc-2t7-5',
            front: 'What is d/dx(cos x)?',
            back: 'd/dx(cos x) = -sin x\n\nNote the negative sign! This is a common mistake. Valid only for x in radians.',
            topic: 'Differentiating standard functions'
        },
        {
            id: 'fc-2t7-6',
            front: 'What is d/dx(tan x)?',
            back: 'd/dx(tan x) = sec²x\n\nThis can be derived using the quotient rule with tan x = sin x/cos x.',
            topic: 'Differentiating standard functions'
        },
        // Chain rule
        {
            id: 'fc-2t7-7',
            front: 'State the chain rule.',
            back: 'dy/dx = (dy/du)(du/dx)\n\nDifferentiate the outer function, then multiply by the derivative of the inner function.',
            topic: 'Chain rule'
        },
        {
            id: 'fc-2t7-8',
            front: 'What is d/dx[ln(f(x))]',
            back: 'd/dx[ln(f(x))] = f\'(x)/f(x)\n\nThis is a special case of the chain rule. The derivative is the derivative of the inside divided by the inside.',
            topic: 'Chain rule'
        },
        {
            id: 'fc-2t7-9',
            front: 'What is d/dx[e^(f(x))]',
            back: 'd/dx[e^(f(x))] = f\'(x) · e^(f(x))\n\nDifferentiate the exponent, multiply by e^(f(x)).',
            topic: 'Chain rule'
        },
        {
            id: 'fc-2t7-10',
            front: 'What is d/dx[(f(x))ⁿ]?',
            back: 'd/dx[(f(x))ⁿ] = n f\'(x) [f(x)]ⁿ⁻¹\n\nThis is the general power rule, derived using the chain rule.',
            topic: 'Chain rule'
        },
        // Product rule
        {
            id: 'fc-2t7-11',
            front: 'State the product rule.',
            back: '(uv)\' = uv\' + vu\'\n\nThe derivative of a product is: first times derivative of second, plus second times derivative of first.',
            topic: 'Product rule'
        },
        {
            id: 'fc-2t7-12',
            front: 'When should you use the product rule?',
            back: 'Use the product rule when differentiating y = f(x)·g(x) — a product of two separate functions.\n\nExamples: x²·eˣ, sin x·ln x, x³·cos(2x)',
            topic: 'Product rule'
        },
        {
            id: 'fc-2t7-13',
            front: 'What is d/dx[x³ eˣ]?',
            back: 'Let u = x³, v = eˣ\n\nu\' = 3x², v\' = eˣ\n\ndy/dx = x³·eˣ + eˣ·3x² = eˣ(x³ + 3x²) = x²eˣ(x + 3)',
            topic: 'Product rule'
        },
        // Quotient rule
        {
            id: 'fc-2t7-14',
            front: 'State the quotient rule.',
            back: 'd/dx(u/v) = (v·u\' - u·v\')/v²\n\nMnemonic: "vdu minus udv, all over v squared".',
            topic: 'Quotient rule'
        },
        {
            id: 'fc-2t7-15',
            front: 'What is a common pitfall in the quotient rule?',
            back: 'Getting the subtraction order wrong in the numerator!\n\nNumerator is v·u\' - u·v\', NOT u·v\' - v·u\'.\n\nReversing the sign changes the entire answer.',
            topic: 'Quotient rule'
        },
        {
            id: 'fc-2t7-16',
            front: 'Use the quotient rule to prove d/dx(tan x) = sec²x.',
            back: 'tan x = sin x/cos x\n\nu = sin x, v = cos x\nu\' = cos x, v\' = -sin x\n\ndy/dx = (cos·cos - sin·(-sin))/cos² = (cos² + sin²)/cos² = 1/cos² = sec²x ✓',
            topic: 'Quotient rule'
        },
        // Implicit differentiation
        {
            id: 'fc-2t7-17',
            front: 'What is implicit differentiation?',
            back: 'Differentiating both sides of an equation with respect to x, treating y as a function of x.\n\nKey rule: d/dx[f(y)] = f\'(y)·dy/dx (chain rule)',
            topic: 'Implicit and parametric differentiation'
        },
        {
            id: 'fc-2t7-18',
            front: 'What is d/dx(y²)?',
            back: 'd/dx(y²) = 2y·dy/dx\n\nUsing the chain rule: differentiate with respect to y, then multiply by dy/dx because y is a function of x.',
            topic: 'Implicit and parametric differentiation'
        },
        {
            id: 'fc-2t7-19',
            front: 'What is d/dx(e^y)?',
            back: 'd/dx(e^y) = e^y·dy/dx\n\nChain rule: derivative of e^y with respect to y, times dy/dx.',
            topic: 'Implicit and parametric differentiation'
        },
        {
            id: 'fc-2t7-20',
            front: 'What is the parametric differentiation formula?',
            back: 'dy/dx = (dy/dt) ÷ (dx/dt) = g\'(t)/f\'(t)\n\nFor x = f(t), y = g(t), find derivatives with respect to t, then divide.',
            topic: 'Implicit and parametric differentiation'
        },
        // Connected rates
        {
            id: 'fc-2t7-21',
            front: 'How are connected rates related?',
            back: 'dy/dt = (dy/dx)·(dx/dt)\n\nThe chain rule connects rates of change with respect to time. The rate of change of y equals the rate of change of y with respect to x, multiplied by the rate of change of x.',
            topic: 'Connected rates of change'
        },
        {
            id: 'fc-2t7-22',
            front: 'What does a negative rate of change mean?',
            back: 'A negative rate of change means the quantity is decreasing over time.\n\nExample: A deflating balloon would have dV/dt < 0. The sign indicates the direction of change.',
            topic: 'Connected rates of change'
        },
        // Stationary points
        {
            id: 'fc-2t7-23',
            front: 'What is a stationary point?',
            back: 'A point on a curve where dy/dx = 0.\n\nThe gradient of the tangent is zero, so the curve is momentarily "flat" — neither rising nor falling.',
            topic: 'Stationary points and the second derivative'
        },
        {
            id: 'fc-2t7-24',
            front: 'How do you classify using the second derivative?',
            back: '• d²y/dx² < 0 → local maximum (concave down)\n• d²y/dx² > 0 → local minimum (concave up)\n• d²y/dx² = 0 → inconclusive (use sign test)',
            topic: 'Stationary points and the second derivative'
        },
        {
            id: 'fc-2t7-25',
            front: 'What is a point of inflection?',
            back: 'A point where the curve changes concavity (from concave up to concave down or vice versa).\n\nNecessary condition: d²y/dx² = 0\nAlso required: d²y/dx² must change sign through the point.',
            topic: 'Stationary points and the second derivative'
        },
        {
            id: 'fc-2t7-26',
            front: 'What is the sign-of-gradient method?',
            back: 'When d²y/dx² = 0, check the sign of dy/dx just before and after the stationary point:\n\n• neg → 0 → pos: minimum\n• pos → 0 → neg: maximum\n• no change: point of inflection',
            topic: 'Stationary points and the second derivative'
        },
        {
            id: 'fc-2t7-27',
            front: 'What are the 5 steps for optimisation?',
            back: '1. Define variables\n2. Write the objective function\n3. Use constraints to reduce to one variable\n4. Differentiate and set to zero\n5. Verify with second derivative and answer fully',
            topic: 'Stationary points and the second derivative'
        },
        {
            id: 'fc-2t7-28',
            front: 'What shape maximises area for a fixed perimeter?',
            back: 'A square maximises area for a fixed perimeter.\n\nFor a rectangle with perimeter P: length = width = P/4 gives maximum area.',
            topic: 'Stationary points and the second derivative'
        },
        {
            id: 'fc-2t7-29',
            front: 'What is d/dx(sin(x²))?',
            back: 'd/dx(sin(x²)) = 2x cos(x²)\n\nChain rule: inner function is x², derivative is 2x. Multiply by derivative of outer function cos(x²).',
            topic: 'Chain rule'
        },
        {
            id: 'fc-2t7-30',
            front: 'What is the geometric interpretation of dy/dx?',
            back: 'dy/dx represents the gradient of the tangent to the curve at a given point.\n\nIt tells us how steep the curve is at that point.',
            topic: 'Differentiating standard functions'
        }
    ]
};
