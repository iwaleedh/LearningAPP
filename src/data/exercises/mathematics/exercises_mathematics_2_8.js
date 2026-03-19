/**
 * Exercises for A-Level Mathematics Unit 2 Topic 8: Integration
 * Subtopics: Standard integrals, Integration by substitution, Integration by parts,
 * Integration using partial fractions, Definite integration and areas
 */

export const exercises_mathematics_2_8 = {
    // ==================== MULTIPLE CHOICE QUESTIONS ====================
    mcq: [
        {
            id: 'mcq-2t8-1',
            question: 'What is ∫ e^(2x) dx?',
            options: ['e^(2x) + c', '(1/2)e^(2x) + c', '2e^(2x) + c', 'ln|e^(2x)| + c'],
            correctAnswer: 1,
            rationale: 'For ∫ e^(kx) dx, divide by the inner coefficient k. Here k=2, so the result is (1/2)e^(2x) + c.',
            topic: 'Standard integrals'
        },
        {
            id: 'mcq-2t8-2',
            question: 'What is ∫ sin(3x) dx?',
            options: ['cos(3x) + c', '-cos(3x) + c', '-3cos(3x) + c', '(1/3)cos(3x) + c'],
            correctAnswer: 1,
            rationale: '∫ sin(kx) dx = -(1/k)cos(kx) + c. The negative sign is essential when integrating sin.',
            topic: 'Standard integrals'
        },
        {
            id: 'mcq-2t8-3',
            question: 'What is ∫ 1/(5x) dx?',
            options: ['(1/5)ln|x| + c', '5ln|x| + c', '-5/x + c', 'ln|5x| + c'],
            correctAnswer: 0,
            rationale: '∫ 1/(kx) dx = (1/k)ln|x| + c. Here k=5, so the result is (1/5)ln|x| + c.',
            topic: 'Standard integrals'
        },
        {
            id: 'mcq-2t8-4',
            question: 'When evaluating ∫₀^π f(x) dx, what does π represent?',
            options: ['The integrand function', 'The constant of integration', 'The upper limit of integration', 'The variable of integration'],
            correctAnswer: 2,
            rationale: 'In ∫₀^π f(x) dx, 0 is the lower limit and π is the upper limit of integration.',
            topic: 'Definite integration'
        },
        {
            id: 'mcq-2t8-5',
            question: 'What is the result of ∫₋₁¹ x³ dx?',
            options: ['0', '1/2', '2', '-1/2'],
            correctAnswer: 0,
            rationale: '∫ x³ dx = x⁴/4 + c. Evaluating from -1 to 1: (1⁴/4) − ((-1)⁴/4) = 1/4 − 1/4 = 0.',
            topic: 'Definite integration'
        },
        {
            id: 'mcq-2t8-6',
            question: 'When using substitution u = x² + 1, what is du/dx?',
            options: ['x', '2x', 'x² + 1', '1/(2x)'],
            correctAnswer: 1,
            rationale: 'If u = x² + 1, then differentiating gives du/dx = 2x by the power rule.',
            topic: 'Integration by substitution'
        },
        {
            id: 'mcq-2t8-7',
            question: 'When evaluating ∫₀² f(x) dx using substitution u = x², what are the new limits?',
            options: ['u = 0 and u = 2', 'u = 0 and u = 4', 'u = 1 and u = 4', 'u = 0 and u = 8'],
            correctAnswer: 1,
            rationale: 'When x = 0, u = 0² = 0. When x = 2, u = 2² = 4. The new limits are 0 to 4.',
            topic: 'Integration by substitution'
        },
        {
            id: 'mcq-2t8-8',
            question: 'For integration by parts, which function should be chosen as u in ∫ x·ln x dx?',
            options: ['x', 'ln x', 'Both are equally good', 'Neither — substitution should be used'],
            correctAnswer: 1,
            rationale: 'According to LIATE, Logarithmic functions are chosen as u before Algebraic functions. So u = ln x.',
            topic: 'Integration by parts'
        },
        {
            id: 'mcq-2t8-9',
            question: 'What does L stand for in the LIATE rule for integration by parts?',
            options: ['Linear', 'Logarithmic', 'Leading', 'Lower'],
            correctAnswer: 1,
            rationale: 'LIATE stands for: L-Logarithmic, I-Inverse trig, A-Algebraic, T-Trigonometric, E-Exponential.',
            topic: 'Integration by parts'
        },
        {
            id: 'mcq-2t8-10',
            question: 'What is ∫ x·e^x dx using integration by parts?',
            options: ['x·e^x + c', 'e^x(x − 1) + c', 'e^x(x + 1) + c', 'x·e^x − e^x + c'],
            correctAnswer: 1,
            rationale: 'Let u = x, dv/dx = e^x. Then du/dx = 1, v = e^x. Result: x·e^x − ∫ e^x dx = x·e^x − e^x + c = e^x(x − 1) + c.',
            topic: 'Integration by parts'
        },
        {
            id: 'mcq-2t8-11',
            question: 'What is the partial fraction decomposition of 1/[(x+1)(x−2)]?',
            options: ['1/(x+1) + 1/(x−2)', '(1/3)/(x+1) − (1/3)/(x−2)', '(2/3)/(x+1) + (1/3)/(x−2)', '−(1/3)/(x+1) + (1/3)/(x−2)'],
            correctAnswer: 3,
            rationale: 'Setting 1/[(x+1)(x-2)] = A/(x+1) + B/(x-2): at x=2, B=1/3; at x=-1, A=-1/3.',
            topic: 'Integration using partial fractions'
        },
        {
            id: 'mcq-2t8-12',
            question: 'What is ∫ 1/(x+3) dx?',
            options: ['ln|x+3| + c', '(1/3)ln|x+3| + c', '−1/(x+3)² + c', '−3/(x+3) + c'],
            correctAnswer: 0,
            rationale: '∫ A/(ax+b) dx = (A/a)ln|ax+b| + c. Here A=1, a=1, so result is ln|x+3| + c.',
            topic: 'Integration using partial fractions'
        },
        {
            id: 'mcq-2t8-13',
            question: 'What is ∫ 1/(x+3)² dx?',
            options: ['ln|x+3| + c', '(1/3)ln|x+3| + c', '−1/(x+3) + c', '−3/(x+3)² + c'],
            correctAnswer: 2,
            rationale: 'For repeated factors with power ≥ 2, use power rule: ∫ (ax+b)^(-n) dx = (ax+b)^(-n+1)/[a(-n+1)]. Here: -1/(x+3) + c.',
            topic: 'Integration using partial fractions'
        },
        {
            id: 'mcq-2t8-14',
            question: 'If a curve lies below the x-axis from x=1 to x=3, what is the area?',
            options: ['∫₁³ f(x) dx', '|∫₁³ f(x) dx|', '-∫₁³ f(x) dx', '∫₁³ f(x)² dx'],
            correctAnswer: 1,
            rationale: 'When f(x) < 0, the definite integral is negative. Area is always positive, so take the absolute value.',
            topic: 'Area under a curve'
        },
        {
            id: 'mcq-2t8-15',
            question: 'What is the area between y = x² and the x-axis from x=0 to x=2?',
            options: ['4', '8/3', '2/3', '4/3'],
            correctAnswer: 1,
            rationale: 'Area = ∫₀² x² dx = [x³/3]₀² = 8/3 − 0 = 8/3.',
            topic: 'Area under a curve'
        },
        {
            id: 'mcq-2t8-16',
            question: 'What is the formula for area between curves f(x) and g(x) where f(x) ≥ g(x)?',
            options: ['∫[f(x) + g(x)] dx', '∫[g(x) − f(x)] dx', '∫[f(x) − g(x)] dx', '∫[f(x)·g(x)] dx'],
            correctAnswer: 2,
            rationale: 'Area between curves is the integral of (top curve − bottom curve): ∫ₐᵇ [f(x) − g(x)] dx.',
            topic: 'Area between 2 curves'
        },
        {
            id: 'mcq-2t8-17',
            question: 'To find intersection points of two curves, what equation do you solve?',
            options: ['f(x) = 0', 'g(x) = 0', 'f(x) = g(x)', 'f(x)·g(x) = 0'],
            correctAnswer: 2,
            rationale: 'Intersection points occur where f(x) = g(x). Solving this gives the x-values where the curves meet.',
            topic: 'Area between 2 curves'
        },
        {
            id: 'mcq-2t8-18',
            question: 'What is ∫ sec²x dx?',
            options: ['−sec x + c', 'tan x + c', 'sec x + c', 'cot x + c'],
            correctAnswer: 1,
            rationale: 'The derivative of tan x is sec²x, so the integral of sec²x is tan x + c.',
            topic: 'Standard integrals'
        },
        {
            id: 'mcq-2t8-19',
            question: 'What is ∫ cos(2x) dx?',
            options: ['sin(2x) + c', '-sin(2x) + c', '(1/2)sin(2x) + c', '-(1/2)sin(2x) + c'],
            correctAnswer: 2,
            rationale: '∫ cos(kx) dx = (1/k)sin(kx) + c. Here k=2, so result is (1/2)sin(2x) + c.',
            topic: 'Standard integrals'
        },
        {
            id: 'mcq-2t8-20',
            question: 'In integration by parts, which is the correct formula?',
            options: ['∫ u dv = uv + ∫ v du', '∫ u dv = uv − ∫ v du', '∫ u dv = u∫ v dv', '∫ u dv = v∫ u du'],
            correctAnswer: 1,
            rationale: 'The integration by parts formula is ∫ u dv/dx dx = uv − ∫ v du/dx dx, often written as ∫ u dv = uv − ∫ v du.',
            topic: 'Integration by parts'
        },
        {
            id: 'mcq-2t8-21',
            question: 'What is the first step for integrating ∫ (x² + 1)/(x + 1) dx?',
            options: ['Use substitution u = x + 1', 'Use partial fractions', 'Perform polynomial long division', 'Use integration by parts'],
            correctAnswer: 2,
            rationale: 'Since the degree of numerator (2) ≥ degree of denominator (1), this is an improper fraction. Use long division first.',
            topic: 'Integration using partial fractions'
        },
        {
            id: 'mcq-2t8-22',
            question: 'What is ∫ ln x dx?',
            options: ['x·ln x + c', 'x(ln x − 1) + c', '(1/x)ln x + c', 'ln(x)/x + c'],
            correctAnswer: 1,
            rationale: 'Write ∫ ln x dx as ∫ ln x·1 dx. Let u = ln x, dv/dx = 1. Result: x ln x − ∫ 1 dx = x ln x − x + c = x(ln x − 1) + c.',
            topic: 'Integration by parts'
        },
        {
            id: 'mcq-2t8-23',
            question: 'For ∫ x·cos x dx, what should u and dv/dx be?',
            options: ['u = cos x, dv/dx = x', 'u = x, dv/dx = cos x', 'Either choice works', 'Use substitution instead'],
            correctAnswer: 1,
            rationale: 'By LIATE, Algebraic (x) comes before Trigonometric (cos x). So u = x, dv/dx = cos x.',
            topic: 'Integration by parts'
        },
        {
            id: 'mcq-2t8-24',
            question: 'When is it necessary to use integration by parts twice?',
            options: ['For any exponential function', 'When u = x² or higher power times trig or exponential', 'Only for logarithms', 'Never'],
            correctAnswer: 1,
            rationale: 'When integrating x²·trig or x²·exp, you need integration by parts twice because after the first application, you still have x·trig or x·exp.',
            topic: 'Integration by parts'
        },
        {
            id: 'mcq-2t8-25',
            question: 'What does the Fundamental Theorem of Calculus state?',
            options: ['∫ₐᵇ f(x) dx = F(a) − F(b)', '∫ₐᵇ f(x) dx = F(b) − F(a)', '∫ₐᵇ f(x) dx = F(b) + F(a)', '∫ₐᵇ f(x) dx = f(b) − f(a)'],
            correctAnswer: 1,
            rationale: 'The Fundamental Theorem of Calculus: ∫ₐᵇ f(x) dx = F(b) − F(a) where F\'(x) = f(x). Evaluate at upper limit first.',
            topic: 'Fundamental theorem of calculus'
        },
        {
            id: 'mcq-2t8-26',
            question: 'If a curve crosses the x-axis at x=0, x=2, and x=4, how many separate areas must you calculate?',
            options: ['1', '2', '3', '4'],
            correctAnswer: 3,
            rationale: 'The curve is divided into 3 regions: [0,2], [2,4], and anything beyond. You need to integrate each separately and sum absolute values.',
            topic: 'Area under a curve'
        },
        {
            id: 'mcq-2t8-27',
            question: 'What is ∫₀^π sin x dx?',
            options: ['0', '1', '2', '-1'],
            correctAnswer: 2,
            rationale: '∫ sin x dx = -cos x. Evaluating: -cos(π) − (-cos(0)) = -(-1) − (-1) = 1 + 1 = 2.',
            topic: 'Definite integration'
        },
        {
            id: 'mcq-2t8-28',
            question: 'When integrating 2x(x²+1)³ dx, what is the best substitution?',
            options: ['u = 2x', 'u = x²+1', 'u = (x²+1)³', 'No substitution needed'],
            correctAnswer: 1,
            rationale: 'The inner function is x²+1. Let u = x²+1, then du = 2x dx, which matches the factor outside.',
            topic: 'Integration by substitution'
        },
        {
            id: 'mcq-2t8-29',
            question: 'What pattern indicates a substitution will work cleanly?',
            options: ['The numerator is the derivative of the denominator', 'The function has a factor that is its own derivative', 'The function is a perfect square', 'The function has a constant term'],
            correctAnswer: 1,
            rationale: 'If the expression has a factor that is the derivative of another factor, substitution works cleanly (e.g., 2x with x²+1).',
            topic: 'Integration by substitution'
        },
        {
            id: 'mcq-2t8-30',
            question: 'What is the result if you forget +c in an indefinite integral?',
            options: ['It is still correct', 'The answer is incomplete', 'The answer is wrong by a constant', 'It makes no difference'],
            correctAnswer: 1,
            rationale: 'The constant of integration c represents all possible antiderivatives. Without +c, the answer is incomplete.',
            topic: 'Standard integrals'
        }
    ],

    // ==================== FILL IN THE BLANK QUESTIONS ====================
    fillBlank: [
        {
            id: 'fb-2t8-1',
            template: 'The integral of e^x is __BLANK__ + c.',
            blanks: ['e^x'],
            topic: 'Standard integrals'
        },
        {
            id: 'fb-2t8-2',
            template: 'The integral of 1/x is __BLANK__|x| + c.',
            blanks: ['ln'],
            topic: 'Standard integrals'
        },
        {
            id: 'fb-2t8-3',
            template: 'The integral of cos x is __BLANK__ x + c.',
            blanks: ['sin'],
            topic: 'Standard integrals'
        },
        {
            id: 'fb-2t8-4',
            template: 'The integral of sin x is __BLANK__ cos x + c.',
            blanks: ['-'],
            topic: 'Standard integrals'
        },
        {
            id: 'fb-2t8-5',
            template: 'For definite integrals, evaluate at the __BLANK__ limit first, then subtract the value at the lower limit.',
            blanks: ['upper'],
            topic: 'Definite integration'
        },
        {
            id: 'fb-2t8-6',
            template: 'In ∫ u dv/dx dx = uv − ∫ __BLANK__ du/dx dx, the formula uses integration by parts.',
            blanks: ['v'],
            topic: 'Integration by parts'
        },
        {
            id: 'fb-2t8-7',
            template: 'The LIATE rule helps you choose __BLANK__ in integration by parts.',
            blanks: ['u'],
            topic: 'Integration by parts'
        },
        {
            id: 'fb-2t8-8',
            template: 'In LIATE, L stands for __BLANK__ functions.',
            blanks: ['logarithmic'],
            topic: 'Integration by parts'
        },
        {
            id: 'fb-2t8-9',
            template: 'The partial fraction form A/(ax+b) + B/(cx+d) is for two __BLANK__ linear factors.',
            blanks: ['distinct'],
            topic: 'Integration using partial fractions'
        },
        {
            id: 'fb-2t8-10',
            template: 'The integral of A/(ax+b) is (A/a)__BLANK__|ax+b| + c.',
            blanks: ['ln'],
            topic: 'Integration using partial fractions'
        },
        {
            id: 'fb-2t8-11',
            template: 'When f(x) < 0, the area is the __BLANK__ value of the integral.',
            blanks: ['absolute'],
            topic: 'Area under a curve'
        },
        {
            id: 'fb-2t8-12',
            template: 'Area between curves f(x) and g(x) equals ∫[__BLANK__ curve] minus [bottom curve] dx.',
            blanks: ['top'],
            topic: 'Area between 2 curves'
        },
        {
            id: 'fb-2t8-13',
            template: 'To find intersection points, solve f(x) __BLANK__ g(x).',
            blanks: ['='],
            topic: 'Area between 2 curves'
        },
        {
            id: 'fb-2t8-14',
            template: 'For substitution with definite integrals, __BLANK__ the limits using the substitution.',
            blanks: ['change'],
            topic: 'Integration by substitution'
        },
        {
            id: 'fb-2t8-15',
            template: 'The Fundamental Theorem of Calculus states that ∫ₐᵇ f(x) dx = F(b) __BLANK__ F(a).',
            blanks: ['-'],
            topic: 'Fundamental theorem of calculus'
        }
    ],

    // ==================== DRAG AND DROP QUESTIONS ====================
    dragDrop: [
        {
            id: 'dd-2t8-1',
            categories: ['Integral', 'Result'],
            items: [
                { text: '∫ e^x dx', category: 'Integral' },
                { text: 'e^x + c', category: 'Result' },
                { text: '∫ sin x dx', category: 'Integral' },
                { text: '-cos x + c', category: 'Result' },
                { text: '∫ cos x dx', category: 'Integral' },
                { text: 'sin x + c', category: 'Result' },
                { text: '∫ 1/x dx', category: 'Integral' },
                { text: 'ln|x| + c', category: 'Result' }
            ],
            topic: 'Standard integrals'
        },
        {
            id: 'dd-2t8-2',
            categories: ['LIATE Letter', 'Function Type'],
            items: [
                { text: 'L', category: 'LIATE Letter' },
                { text: 'Logarithmic', category: 'Function Type' },
                { text: 'I', category: 'LIATE Letter' },
                { text: 'Inverse trig', category: 'Function Type' },
                { text: 'A', category: 'LIATE Letter' },
                { text: 'Algebraic', category: 'Function Type' },
                { text: 'T', category: 'LIATE Letter' },
                { text: 'Trigonometric', category: 'Function Type' },
                { text: 'E', category: 'LIATE Letter' },
                { text: 'Exponential', category: 'Function Type' }
            ],
            topic: 'Integration by parts'
        },
        {
            id: 'dd-2t8-3',
            categories: ['Partial Fraction Form', 'Factor Type'],
            items: [
                { text: 'A/(ax+b) + B/(cx+d)', category: 'Partial Fraction Form' },
                { text: 'Two distinct linear factors', category: 'Factor Type' },
                { text: 'A/(ax+b) + B/(ax+b)²', category: 'Partial Fraction Form' },
                { text: 'Repeated linear factor', category: 'Factor Type' },
                { text: 'A/(ax+b) + (Bx+C)/(cx²+d)', category: 'Partial Fraction Form' },
                { text: 'Irreducible quadratic factor', category: 'Factor Type' }
            ],
            topic: 'Integration using partial fractions'
        },
        {
            id: 'dd-2t8-4',
            categories: ['Integral', 'Integration Method'],
            items: [
                { text: '∫ x·e^x dx', category: 'Integral' },
                { text: 'Integration by parts', category: 'Integration Method' },
                { text: '∫ 2x(x²+1)³ dx', category: 'Integral' },
                { text: 'Substitution', category: 'Integration Method' },
                { text: '∫ (3x+2)/[(x+1)(x-2)] dx', category: 'Integral' },
                { text: 'Partial fractions', category: 'Integration Method' },
                { text: '∫ x² dx', category: 'Integral' },
                { text: 'Power rule', category: 'Integration Method' }
            ],
            topic: 'Choosing integration method'
        },
        {
            id: 'dd-2t8-5',
            categories: ['Integration Formula', 'Application'],
            items: [
                { text: '∫ A/(ax+b) dx', category: 'Integration Formula' },
                { text: '(A/a)ln|ax+b| + c', category: 'Application' },
                { text: '∫ A/(ax+b)² dx', category: 'Integration Formula' },
                { text: '-A/[a(ax+b)] + c', category: 'Application' },
                { text: '∫ u dv/dx dx', category: 'Integration Formula' },
                { text: 'uv − ∫ v du/dx dx', category: 'Application' }
            ],
            topic: 'Integration techniques'
        },
        {
            id: 'dd-2t8-6',
            categories: ['Situation', 'Action Required'],
            items: [
                { text: 'f(x) < 0 on interval', category: 'Situation' },
                { text: 'Take absolute value of integral', category: 'Action Required' },
                { text: 'f(x) changes sign on interval', category: 'Situation' },
                { text: 'Split at zeros, integrate separately', category: 'Action Required' },
                { text: 'Two curves on same interval', category: 'Situation' },
                { text: 'Integrate (top − bottom) dx', category: 'Action Required' },
                { text: 'Degree(num) ≥ Degree(denom)', category: 'Situation' },
                { text: 'Perform long division first', category: 'Action Required' }
            ],
            topic: 'Problem-solving strategies'
        },
        {
            id: 'dd-2t8-7',
            categories: ['Standard Integral', 'Common Mistake'],
            items: [
                { text: '∫ sin x dx', category: 'Standard Integral' },
                { text: '-cos x + c (remember the negative)', category: 'Common Mistake' },
                { text: '∫ 1/x dx', category: 'Standard Integral' },
                { text: 'ln|x| + c (absolute value)', category: 'Common Mistake' },
                { text: '∫ e^kx dx', category: 'Standard Integral' },
                { text: '(1/k)e^kx + c (divide by k)', category: 'Common Mistake' }
            ],
            topic: 'Common pitfalls'
        },
        {
            id: 'dd-2t8-8',
            categories: ['Step', 'Description'],
            items: [
                { text: 'Step 1', category: 'Step' },
                { text: 'Choose u = inner function', category: 'Description' },
                { text: 'Step 2', category: 'Step' },
                { text: 'Find du/dx, get dx in terms of du', category: 'Description' },
                { text: 'Step 3', category: 'Step' },
                { text: 'Replace all x terms with u expressions', category: 'Description' },
                { text: 'Step 4', category: 'Step' },
                { text: 'Integrate with respect to u', category: 'Description' },
                { text: 'Step 5', category: 'Step' },
                { text: 'Back-substitute x for indefinite integrals', category: 'Description' }
            ],
            topic: 'Integration by substitution'
        },
        {
            id: 'dd-2t8-9',
            categories: ['Integral Type', 'Characteristic'],
            items: [
                { text: 'Definite integral', category: 'Integral Type' },
                { text: 'Has upper and lower limits', category: 'Characteristic' },
                { text: 'Indefinite integral', category: 'Integral Type' },
                { text: 'Always has +c constant', category: 'Characteristic' },
                { text: 'Area under curve', category: 'Integral Type' },
                { text: 'Always positive value', category: 'Characteristic' }
            ],
            topic: 'Integral types'
        },
        {
            id: 'dd-2t8-10',
            categories: ['Substitution', 'When Useful'],
            items: [
                { text: 'u = x² + 3', category: 'Substitution' },
                { text: 'When derivative 2x appears', category: 'When Useful' },
                { text: 'u = sin x', category: 'Substitution' },
                { text: 'When cos x dx is present', category: 'When Useful' },
                { text: 'u = e^x', category: 'Substitution' },
                { text: 'When e^x dx is present', category: 'When Useful' }
            ],
            topic: 'Integration by substitution'
        }
    ],

    // ==================== SEQUENCE QUESTIONS ====================
    sequence: [
        {
            id: 'seq-2t8-1',
            steps: [
                'Choose u = inner function',
                'Find du/dx',
                'Rearrange to get dx = du/(du/dx)',
                'Replace all x terms with u expressions',
                'Integrate with respect to u',
                'Back-substitute x (for indefinite integrals)'
            ],
            topic: 'Integration by substitution'
        },
        {
            id: 'seq-2t8-2',
            steps: [
                'Identify u and dv/dx using LIATE',
                'Find du/dx and integrate to get v',
                'Apply formula: uv − ∫ v du/dx dx',
                'Evaluate the remaining integral',
                'Simplify the result',
                'Add constant of integration +c'
            ],
            topic: 'Integration by parts'
        },
        {
            id: 'seq-2t8-3',
            steps: [
                'Factor denominator completely',
                'Write appropriate partial fraction form',
                'Multiply through by denominator',
                'Find constants (substitution or equate coefficients)',
                'Write partial fraction decomposition',
                'Integrate each term separately'
            ],
            topic: 'Integration using partial fractions'
        },
        {
            id: 'seq-2t8-4',
            steps: [
                'Find antiderivative F(x)',
                'Evaluate F(x) at upper limit b',
                'Evaluate F(x) at lower limit a',
                'Subtract: F(b) − F(a)',
                'Simplify the result'
            ],
            topic: 'Fundamental theorem of calculus'
        },
        {
            id: 'seq-2t8-5',
            steps: [
                'Find where f(x) = 0 (x-intercepts)',
                'Determine sign of f(x) in each interval',
                'Integrate each region separately',
                'Take absolute value of each integral',
                'Sum all absolute values'
            ],
            topic: 'Area under curve with sign changes'
        },
        {
            id: 'seq-2t8-6',
            steps: [
                'Set f(x) = g(x)',
                'Solve for x to find intersection points',
                'Determine which curve is on top',
                'Write integral of (top − bottom)',
                'Set limits from intersection points',
                'Evaluate the integral'
            ],
            topic: 'Area between two curves'
        },
        {
            id: 'seq-2t8-7',
            steps: [
                'Choose substitution u = inner function',
                'Calculate du/dx',
                'Change limits: u(a) and u(b)',
                'Replace x and dx with u and du',
                'Integrate with respect to u',
                'Evaluate using new limits (no back-substitution)'
            ],
            topic: 'Definite integral with substitution'
        },
        {
            id: 'seq-2t8-8',
            steps: [
                'Integrate to find F(x)',
                'Add constant c',
                'Use given point (x₀, y₀)',
                'Substitute x₀ and y₀ into F(x) + c',
                'Solve for c',
                'Write final answer with c value'
            ],
            topic: 'Finding constant of integration'
        }
    ],

    // ==================== KEYWORD QUESTIONS ====================
    keyword: [
        {
            id: 'kw-2t8-1',
            stem: 'State the standard integrals of e^x, 1/x, sin x, cos x, and sec²x. [5 marks]',
            keywords: ['e^x', 'ln', 'sin', 'cos', 'tan'],
            modelAnswer: '∫ e^x dx = e^x + c; ∫ 1/x dx = ln|x| + c; ∫ sin x dx = -cos x + c; ∫ cos x dx = sin x + c; ∫ sec²x dx = tan x + c',
            topic: 'Standard integrals'
        },
        {
            id: 'kw-2t8-2',
            stem: 'Explain the difference between a definite and indefinite integral. [3 marks]',
            keywords: ['limits', 'constant', 'number', 'function'],
            modelAnswer: 'A definite integral has upper and lower limits and evaluates to a specific number. An indefinite integral has no limits and represents a family of functions differing by a constant (+c).',
            topic: 'Definite integration'
        },
        {
            id: 'kw-2t8-3',
            stem: 'State the integration by parts formula and explain how LIATE helps choose u. [4 marks]',
            keywords: ['formula', 'LIATE', 'logarithmic', 'algebraic'],
            modelAnswer: '∫ u dv/dx dx = uv − ∫ v du/dx dx. LIATE helps choose u: Logarithmic > Inverse trig > Algebraic > Trigonometric > Exponential. Choose u from the first category present.',
            topic: 'Integration by parts'
        },
        {
            id: 'kw-2t8-4',
            stem: 'Describe the method for integration by substitution. [5 marks]',
            keywords: ['substitution', 'du', 'replace', 'back-substitute', 'limits'],
            modelAnswer: '1. Choose u = inner function. 2. Find du/dx. 3. Express dx in terms of du. 4. Replace all x terms with u. 5. Integrate with respect to u. 6. Back-substitute x (indefinite) or change limits (definite).',
            topic: 'Integration by substitution'
        },
        {
            id: 'kw-2t8-5',
            stem: 'Explain how to find the area when a curve is partly above and partly below the x-axis. [4 marks]',
            keywords: ['zero', 'separate', 'absolute', 'sum'],
            modelAnswer: 'Find where f(x) = 0. Split the region at these x-intercepts. Integrate each segment separately. Take the absolute value of each integral. Sum all absolute values.',
            topic: 'Area under a curve'
        },
        {
            id: 'kw-2t8-6',
            stem: 'State the formula for the area between two curves and how to find the limits. [3 marks]',
            keywords: ['top', 'bottom', 'intersection', 'f(x) = g(x)'],
            modelAnswer: 'Area = ∫ₐᵇ [top curve − bottom curve] dx. Find limits a and b by solving f(x) = g(x) to get intersection points.',
            topic: 'Area between 2 curves'
        },
        {
            id: 'kw-2t8-7',
            stem: 'Explain how to integrate using partial fractions. [4 marks]',
            keywords: ['decompose', 'A/(ax+b)', 'ln', 'integrate'],
            modelAnswer: 'Decompose the rational function into partial fractions like A/(ax+b) + B/(cx+d). Each term A/(ax+b) integrates to (A/a)ln|ax+b| + c. Sum all integrated terms.',
            topic: 'Integration using partial fractions'
        },
        {
            id: 'kw-2t8-8',
            stem: 'What must you do before using partial fractions if the fraction is improper? [2 marks]',
            keywords: ['long division', 'degree', 'numerator', 'denominator'],
            modelAnswer: 'If degree of numerator ≥ degree of denominator, perform polynomial long division first to express as a mixed number (polynomial + proper fraction).',
            topic: 'Integration using partial fractions'
        },
        {
            id: 'kw-2t8-9',
            stem: 'Explain the Fundamental Theorem of Calculus. [3 marks]',
            keywords: ['F(b)', 'F(a)', 'antiderivative', 'signed area'],
            modelAnswer: '∫ₐᵇ f(x) dx = F(b) − F(a) where F is any antiderivative of f. The definite integral equals the net signed area between the curve and x-axis from a to b.',
            topic: 'Fundamental theorem of calculus'
        },
        {
            id: 'kw-2t8-10',
            stem: 'Describe how to handle definite integrals when using substitution. [3 marks]',
            keywords: ['change limits', 'u(a)', 'u(b)', 'back-substitute'],
            modelAnswer: 'When using substitution u = g(x), change the limits using u(a) and u(b). Do NOT back-substitute; integrate in terms of u and evaluate directly.',
            topic: 'Integration by substitution'
        },
        {
            id: 'kw-2t8-11',
            stem: 'How do you find the constant of integration c given a point on the curve? [3 marks]',
            keywords: ['substitute', 'solve', 'condition'],
            modelAnswer: 'Integrate to find F(x) + c. Substitute the given x and y values into the equation. Solve the resulting equation for c.',
            topic: 'Standard integrals'
        },
        {
            id: 'kw-2t8-12',
            stem: 'Explain the pattern f\'(x)/f(x) and how it integrates. [3 marks]',
            keywords: ['ln', 'derivative', 'denominator'],
            modelAnswer: 'If the numerator is the derivative of the denominator, ∫ f\'(x)/f(x) dx = ln|f(x)| + c. This is a reverse chain rule pattern.',
            topic: 'Integration by substitution'
        }
    ],

    // ==================== FLASHCARDS ====================
    flashcard: [
        {
            id: 'fc-2t8-1',
            front: 'What is ∫ e^x dx?',
            back: 'e^x + c — e^x is its own derivative and integral',
            topic: 'Standard integrals'
        },
        {
            id: 'fc-2t8-2',
            front: 'What is ∫ e^(kx) dx?',
            back: '(1/k)e^(kx) + c — divide by the inner coefficient',
            topic: 'Standard integrals'
        },
        {
            id: 'fc-2t8-3',
            front: 'What is ∫ 1/x dx?',
            back: 'ln|x| + c — absolute value is essential since 1/x is defined for x ≠ 0',
            topic: 'Standard integrals'
        },
        {
            id: 'fc-2t8-4',
            front: 'What is ∫ sin x dx?',
            back: '-cos x + c — note the negative sign',
            topic: 'Standard integrals'
        },
        {
            id: 'fc-2t8-5',
            front: 'What is ∫ cos x dx?',
            back: 'sin x + c',
            topic: 'Standard integrals'
        },
        {
            id: 'fc-2t8-6',
            front: 'What is ∫ sec²x dx?',
            back: 'tan x + c — reverse of d/dx(tan x) = sec²x',
            topic: 'Standard integrals'
        },
        {
            id: 'fc-2t8-7',
            front: 'What does LIATE stand for in integration by parts?',
            back: 'L — Logarithmic, I — Inverse trig, A — Algebraic, T — Trigonometric, E — Exponential. Choose u from the first category present.',
            topic: 'Integration by parts'
        },
        {
            id: 'fc-2t8-8',
            front: 'State the integration by parts formula',
            back: '∫ u dv/dx dx = uv − ∫ v du/dx dx or ∫ u dv = uv − ∫ v du',
            topic: 'Integration by parts'
        },
        {
            id: 'fc-2t8-9',
            front: 'What is ∫ x·e^x dx?',
            back: 'e^x(x − 1) + c — use u = x, dv/dx = e^x',
            topic: 'Integration by parts'
        },
        {
            id: 'fc-2t8-10',
            front: 'What is ∫ ln x dx?',
            back: 'x(ln x − 1) + c — write as ∫ ln x·1 dx, use u = ln x, dv/dx = 1',
            topic: 'Integration by parts'
        },
        {
            id: 'fc-2t8-11',
            front: 'What is ∫ x²·ln x dx?',
            back: '(x³/9)(3 ln x − 1) + c — u = ln x (logarithm priority), dv/dx = x²',
            topic: 'Integration by parts'
        },
        {
            id: 'fc-2t8-12',
            front: 'When do you need to apply integration by parts twice?',
            back: 'When integrating x²·trig or x²·exponential functions. After the first application, you still have x·trig or x·exp to handle.',
            topic: 'Integration by parts'
        },
        {
            id: 'fc-2t8-13',
            front: 'What are the steps for integration by substitution?',
            back: '1. Choose u = inner function. 2. Find du/dx. 3. Express dx = du/(du/dx). 4. Replace all x terms with u. 5. Integrate in u. 6. Back-substitute (indefinite) or change limits (definite).',
            topic: 'Integration by substitution'
        },
        {
            id: 'fc-2t8-14',
            front: 'What is ∫ 2x(x²+1)³ dx?',
            back: '(x²+1)⁴/4 + c — let u = x²+1, du = 2x dx',
            topic: 'Integration by substitution'
        },
        {
            id: 'fc-2t8-15',
            front: 'What is ∫ cos x·sin³x dx?',
            back: 'sin⁴x/4 + c — let u = sin x, du = cos x dx',
            topic: 'Integration by substitution'
        },
        {
            id: 'fc-2t8-16',
            front: 'How do you handle definite integrals with substitution?',
            back: 'Change the limits using u = g(x). Evaluate at the new u-limits. Do NOT back-substitute.',
            topic: 'Integration by substitution'
        },
        {
            id: 'fc-2t8-17',
            front: 'What pattern gives ln|x| + c as the result?',
            back: '∫ f\'(x)/f(x) dx = ln|f(x)| + c — when the numerator is the derivative of the denominator (reverse chain rule)',
            topic: 'Integration by substitution'
        },
        {
            id: 'fc-2t8-18',
            front: 'What is the partial fraction form for two distinct linear factors?',
            back: 'f(x)/[(ax+b)(cx+d)] = A/(ax+b) + B/(cx+d)',
            topic: 'Integration using partial fractions'
        },
        {
            id: 'fc-2t8-19',
            front: 'What is the partial fraction form for a repeated linear factor?',
            back: 'f(x)/(ax+b)² = A/(ax+b) + B/(ax+b)²',
            topic: 'Integration using partial fractions'
        },
        {
            id: 'fc-2t8-20',
            front: 'What does ∫ A/(ax+b) dx equal?',
            back: '(A/a)ln|ax+b| + c',
            topic: 'Integration using partial fractions'
        },
        {
            id: 'fc-2t8-21',
            front: 'What does ∫ A/(ax+b)² dx equal?',
            back: '-A/[a(ax+b)] + c — use power rule: (ax+b)^(-2) integrates to (ax+b)^(-1)/(-a)',
            topic: 'Integration using partial fractions'
        },
        {
            id: 'fc-2t8-22',
            front: 'What must you do before partial fractions if the fraction is improper?',
            back: 'Perform polynomial long division first (when degree of numerator ≥ degree of denominator)',
            topic: 'Integration using partial fractions'
        },
        {
            id: 'fc-2t8-23',
            front: 'State the Fundamental Theorem of Calculus',
            back: '∫ₐᵇ f(x) dx = F(b) − F(a) where F\'(x) = f(x)',
            topic: 'Fundamental theorem of calculus'
        },
        {
            id: 'fc-2t8-24',
            front: 'What does the definite integral represent geometrically?',
            back: 'The net signed area between the curve f(x) and the x-axis from x=a to x=b',
            topic: 'Definite integration'
        },
        {
            id: 'fc-2t8-25',
            front: 'How do you find the area when f(x) < 0?',
            back: 'Area = |∫ f(x) dx| — take the absolute value since area is always positive',
            topic: 'Area under a curve'
        },
        {
            id: 'fc-2t8-26',
            front: 'How do you find the area when f(x) changes sign?',
            back: '1. Find where f(x) = 0. 2. Integrate each segment separately. 3. Take absolute value of each. 4. Sum all absolute values.',
            topic: 'Area under a curve'
        },
        {
            id: 'fc-2t8-27',
            front: 'What is the formula for the area between two curves?',
            back: 'Area = ∫ₐᵇ [top curve − bottom curve] dx, where a and b are the x-values where the curves intersect',
            topic: 'Area between 2 curves'
        },
        {
            id: 'fc-2t8-28',
            front: 'How do you find which curve is on top?',
            back: 'Check a test value in the interval. Substitute into both functions and compare. The larger value is the top curve.',
            topic: 'Area between 2 curves'
        },
        {
            id: 'fc-2t8-29',
            front: 'What is ∫₀^π sin x dx?',
            back: '2 — [-cos x]₀^π = (-cos π) − (-cos 0) = 1 − (-1) = 2',
            topic: 'Definite integration'
        },
        {
            id: 'fc-2t8-30',
            front: 'What is the area between y = x² and the x-axis from x=0 to x=2?',
            back: '8/3 — ∫₀² x² dx = [x³/3]₀² = 8/3 − 0 = 8/3',
            topic: 'Area under a curve'
        }
    ]
};
