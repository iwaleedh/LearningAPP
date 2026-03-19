/**
 * Exercise set: Mathematics · WMA12 · Topic 6 · Trigonometry
 * Subtopics: Simple identities, Linear, Quadratic, Strategy for trigonometric equations
 */

export const exercises_mathematics_2_6 = {
    mcq: [
        // Simple identities
        {
            id: 'mcq-2t6-1',
            stem: 'Which of the following is the correct Pythagorean identity?',
            options: ['sin²θ + cos²θ = 1', 'sinθ + cosθ = 1', 'sin²θ − cos²θ = 1', 'sinθ cosθ = 1'],
            correctAnswer: 0,
            rationale: 'The Pythagorean identity sin²θ + cos²θ = 1 comes from the unit circle where x² + y² = 1, with x = cos θ and y = sin θ.',
            topic: 'Simple identities'
        },
        {
            id: 'mcq-2t6-2',
            stem: 'Which identity correctly defines tan θ in terms of sin θ and cos θ?',
            options: ['tan θ = sin θ + cos θ', 'tan θ = sin θ / cos θ', 'tan θ = cos θ / sin θ', 'tan θ = sin θ − cos θ'],
            correctAnswer: 1,
            rationale: 'tan θ = sin θ / cos θ is the definition of tangent, derived from SOHCAHTOA where opposite/hypotenuse divided by adjacent/hypotenuse gives opposite/adjacent.',
            topic: 'Simple identities'
        },
        {
            id: 'mcq-2t6-3',
            stem: 'Which value of cos θ is undefined for tan θ = sin θ / cos θ?',
            options: ['cos θ = 0', 'cos θ = 1', 'cos θ = −1', 'cos θ = 0.5'],
            correctAnswer: 0,
            rationale: 'When cos θ = 0, tan θ = sin θ / 0 is undefined. This occurs at θ = 90°, 270°, etc.',
            topic: 'Simple identities'
        },
        {
            id: 'mcq-2t6-4',
            stem: 'What is the correct derived identity when sin²θ + cos²θ = 1 is rearranged for cos²θ?',
            options: ['cos²θ = 1 + sin²θ', 'cos²θ = 1 − sin²θ', 'cos²θ = sin²θ − 1', 'cos²θ = 1/sin²θ'],
            correctAnswer: 1,
            rationale: 'Rearranging sin²θ + cos²θ = 1 gives cos²θ = 1 − sin²θ.',
            topic: 'Simple identities'
        },
        {
            id: 'mcq-2t6-5',
            stem: 'What is the correct derived identity when sin²θ + cos²θ = 1 is rearranged for sin²θ?',
            options: ['sin²θ = 1 + cos²θ', 'sin²θ = 1 − cos²θ', 'sin²θ = cos²θ − 1', 'sin²θ = 1/cos²θ'],
            correctAnswer: 1,
            rationale: 'Rearranging sin²θ + cos²θ = 1 gives sin²θ = 1 − cos²θ.',
            topic: 'Simple identities'
        },
        {
            id: 'mcq-2t6-6',
            stem: 'Which of the following is NOT a valid trigonometric identity?',
            options: ['sin²θ + cos²θ = 1', 'tan θ = sin θ / cos θ', 'sin θ = 1 − cos²θ', 'tan θ = (sin θ) / (cos θ)'],
            correctAnswer: 2,
            rationale: 'sin θ = 1 − cos²θ is incorrect. The correct identity is sin²θ = 1 − cos²θ.',
            topic: 'Simple identities'
        },
        {
            id: 'mcq-2t6-7',
            stem: 'Which reciprocal function is defined as 1/cos θ?',
            options: ['cosec θ', 'sec θ', 'cot θ', 'tan θ'],
            correctAnswer: 1,
            rationale: 'sec θ = 1/cos θ is the secant function.',
            topic: 'Simple identities'
        },
        {
            id: 'mcq-2t6-8',
            stem: 'At which angle is cosec θ undefined?',
            options: ['90°', '180°', '270°', '0°'],
            correctAnswer: 3,
            rationale: 'cosec θ = 1/sin θ is undefined when sin θ = 0, which occurs at θ = 0°, 180°, 360°, etc.',
            topic: 'Simple identities'
        },
        // Linear
        {
            id: 'mcq-2t6-9',
            stem: 'What is the principal value solution for sin θ = 0.5?',
            options: ['30°', '45°', '60°', '90°'],
            correctAnswer: 0,
            rationale: 'sin⁻¹(0.5) = 30°. This is the principal value in the first quadrant.',
            topic: 'Linear'
        },
        {
            id: 'mcq-2t6-10',
            stem: 'For the equation sin θ = −0.5, which quadrants contain solutions?',
            options: ['1st and 2nd', '2nd and 3rd', '3rd and 4th', '1st and 4th'],
            correctAnswer: 2,
            rationale: 'When sin θ is negative, solutions are in the 3rd and 4th quadrants according to the CAST diagram.',
            topic: 'Linear'
        },
        {
            id: 'mcq-2t6-11',
            stem: 'What is the second solution for cos θ = 0.5 given the principal value 60°?',
            options: ['120°', '240°', '300°', '30°'],
            correctAnswer: 2,
            rationale: 'For cos θ = k, the second solution is 360° − θ₀. So 360° − 60° = 300°.',
            topic: 'Linear'
        },
        {
            id: 'mcq-2t6-12',
            stem: 'What is the second solution for tan θ = 1 given the principal value 45°?',
            options: ['90°', '135°', '180°', '225°'],
            correctAnswer: 3,
            rationale: 'For tan θ = k, the second solution is θ₀ + 180°. So 45° + 180° = 225°.',
            topic: 'Linear'
        },
        {
            id: 'mcq-2t6-13',
            stem: 'Which statement about the CAST diagram is correct?',
            options: ['All functions are positive in the 3rd quadrant', 'Cosine is positive in the 2nd quadrant', 'Tangent is positive in the 3rd quadrant', 'Sine is positive in the 4th quadrant'],
            correctAnswer: 2,
            rationale: 'According to CAST: All positive in 1st, Sine positive in 2nd, Tangent positive in 3rd, Cosine positive in 4th.',
            topic: 'Linear'
        },
        {
            id: 'mcq-2t6-14',
            stem: 'What is the exact value of sin 30°?',
            options: ['0', '1/2', '√2/2', '√3/2'],
            correctAnswer: 1,
            rationale: 'sin 30° = 1/2 is one of the exact values that must be memorised.',
            topic: 'Linear'
        },
        {
            id: 'mcq-2t6-15',
            stem: 'What is the exact value of cos 45°?',
            options: ['1/2', '1/√2', '√3/2', '1'],
            correctAnswer: 1,
            rationale: 'cos 45° = 1/√2 is one of the exact values that must be memorised.',
            topic: 'Linear'
        },
        {
            id: 'mcq-2t6-16',
            stem: 'What is the exact value of tan 60°?',
            options: ['1', '1/√3', '√3', 'undefined'],
            correctAnswer: 2,
            rationale: 'tan 60° = √3 is one of the exact values that must be memorised.',
            topic: 'Linear'
        },
        // Quadratic
        {
            id: 'mcq-2t6-17',
            stem: 'When solving 2cos²θ − cosθ − 1 = 0, which substitution should be made?',
            options: ['Let x = sin θ', 'Let x = cos θ', 'Let x = tan θ', 'Let x = θ'],
            correctAnswer: 1,
            rationale: 'For a quadratic in cos θ, let x = cos θ to get 2x² − x − 1 = 0, then solve the quadratic.',
            topic: 'Quadratic'
        },
        {
            id: 'mcq-2t6-18',
            stem: 'What are the solutions to the quadratic 2x² − x − 1 = 0?',
            options: ['x = 1/2, x = −1', 'x = 1, x = −1/2', 'x = 2, x = −1', 'x = 1/2, x = 1'],
            correctAnswer: 1,
            rationale: '2x² − x − 1 = (2x + 1)(x − 1) = 0, so x = −1/2 or x = 1.',
            topic: 'Quadratic'
        },
        {
            id: 'mcq-2t6-19',
            stem: 'Which identity is useful for solving equations containing tan²θ?',
            options: ['sin²θ + cos²θ = 1', 'tan θ = sin θ / cos θ', '1 + tan²θ = sec²θ', '1 + cot²θ = cosec²θ'],
            correctAnswer: 2,
            rationale: '1 + tan²θ = sec²θ allows you to convert tan²θ to sec²θ, which can then be converted to cos terms.',
            topic: 'Quadratic'
        },
        {
            id: 'mcq-2t6-20',
            stem: 'When solving sin(2θ) = sin(θ), which identity should be used?',
            options: ['sin(2θ) = 2 sin θ', 'sin(2θ) = sin²θ', 'sin(2θ) = 2 sin θ cos θ', 'sin(2θ) = sin θ + sin θ'],
            correctAnswer: 2,
            rationale: 'The double angle formula sin(2θ) = 2 sin θ cos θ is needed to rewrite the equation.',
            topic: 'Quadratic'
        },
        {
            id: 'mcq-2t6-21',
            stem: 'What factorises from 2 sin θ cos θ − sin θ = 0?',
            options: ['sin θ', 'cos θ', '2 sin θ', 'sin θ cos θ'],
            correctAnswer: 0,
            rationale: '2 sin θ cos θ − sin θ = sin θ(2 cos θ − 1), so sin θ is the common factor.',
            topic: 'Quadratic'
        },
        {
            id: 'mcq-2t6-22',
            stem: 'Which form of cos(2θ) should be used to create an equation with only sin θ?',
            options: ['cos²θ − sin²θ', '2cos²θ − 1', '1 − 2sin²θ', 'cos θ'],
            correctAnswer: 2,
            rationale: 'cos(2θ) = 1 − 2sin²θ contains only sin θ, which is useful when you want to create a quadratic in sin θ.',
            topic: 'Quadratic'
        },
        // Strategy for trigonometric equations
        {
            id: 'mcq-2t6-23',
            stem: 'What is the first step when proving a trigonometric identity?',
            options: ['Work on both sides simultaneously', 'Work on one side only (usually the more complex)', 'Cross-multiply to eliminate denominators', 'Square both sides'],
            correctAnswer: 1,
            rationale: 'The standard proof strategy is to work on one side only (usually the more complex side) and transform it to match the other side.',
            topic: 'Strategy for trigonometric equations'
        },
        {
            id: 'mcq-2t6-24',
            stem: 'Which of the following is a valid proof strategy?',
            options: ['Cross-multiply both sides of the ≡ sign', 'Use identities to simplify one side', 'Square both sides to remove square roots', 'Move terms across the ≡ sign'],
            correctAnswer: 1,
            rationale: 'Valid strategies include: use identities to replace sin²θ or cos²θ, replace tan θ with sin θ/cos θ, and factorise. You never cross-multiply across ≡.',
            topic: 'Strategy for trigonometric equations'
        },
        {
            id: 'mcq-2t6-25',
            stem: 'When solving sin(2θ − 30°) = 0.5 for 0° ≤ θ ≤ 180°, what is the interval for the inner angle φ = 2θ − 30°?',
            options: ['0° ≤ φ ≤ 180°', '−30° ≤ φ ≤ 330°', '30° ≤ φ ≤ 150°', '0° ≤ φ ≤ 360°'],
            correctAnswer: 1,
            rationale: 'When 0° ≤ θ ≤ 180°, multiplying by 2 gives 0° ≤ 2θ ≤ 360°, then subtracting 30° gives −30° ≤ φ ≤ 330°.',
            topic: 'Strategy for trigonometric equations'
        },
        {
            id: 'mcq-2t6-26',
            stem: 'What is the sine addition formula?',
            options: ['sin(A + B) = sin A + sin B', 'sin(A + B) = sin A cos B + cos A sin B', 'sin(A + B) = sin A sin B + cos A cos B', 'sin(A + B) = cos A sin B − sin A cos B'],
            correctAnswer: 1,
            rationale: 'sin(A + B) = sin A cos B + cos A sin B is the correct sine addition formula.',
            topic: 'Strategy for trigonometric equations'
        },
        {
            id: 'mcq-2t6-27',
            stem: 'What is the cosine addition formula?',
            options: ['cos(A + B) = cos A + cos B', 'cos(A + B) = cos A cos B + sin A sin B', 'cos(A + B) = cos A cos B − sin A sin B', 'cos(A + B) = sin A cos B − cos A sin B'],
            correctAnswer: 2,
            rationale: 'cos(A + B) = cos A cos B − sin A sin B is the correct cosine addition formula. Note the minus sign.',
            topic: 'Strategy for trigonometric equations'
        },
        {
            id: 'mcq-2t6-28',
            stem: 'Which form of cos(2A) is most useful when you need to factorise?',
            options: ['cos(2A) = 1 − 2sin²A', 'cos(2A) = 2cos²A − 1', 'cos(2A) = cos²A − sin²A', 'cos(2A) = cos A'],
            correctAnswer: 2,
            rationale: 'cos(2A) = cos²A − sin²A is the difference of squares form, which can be factorised as (cos A − sin A)(cos A + sin A).',
            topic: 'Strategy for trigonometric equations'
        },
        {
            id: 'mcq-2t6-29',
            stem: 'When an equation has both cos(2θ) and sin θ, which substitution should be made?',
            options: ['cos(2θ) = cos²θ − sin²θ', 'cos(2θ) = 2cos²θ − 1', 'cos(2θ) = 1 − 2sin²θ', 'cos(2θ) = 2 sin θ cos θ'],
            correctAnswer: 2,
            rationale: 'Use cos(2θ) = 1 − 2sin²θ to make a quadratic in sin θ, since the equation already contains sin θ.',
            topic: 'Strategy for trigonometric equations'
        },
        {
            id: 'mcq-2t6-30',
            stem: 'What is sec θ when cos θ = −1?',
            options: ['0', '1', '−1', 'undefined'],
            correctAnswer: 2,
            rationale: 'sec θ = 1/cos θ = 1/(−1) = −1.',
            topic: 'Strategy for trigonometric equations'
        }
    ],

    fillblank: [
        // Simple identities
        {
            id: 'fb-2t6-1',
            stem: 'Complete the fundamental Pythagorean identity.',
            template: 'The Pythagorean identity is __BLANK__ + cos²θ = 1.',
            blanks: [{ answer: 'sin²θ' }],
            rationale: 'sin²θ + cos²θ = 1 is the fundamental Pythagorean identity.'
        },
        {
            id: 'fb-2t6-2',
            stem: 'Complete the tangent identity.',
            template: 'tan θ = sin θ __BLANK__ cos θ.',
            blanks: [{ answer: '/' }],
            rationale: 'tan θ = sin θ / cos θ is the definition of tangent.'
        },
        {
            id: 'fb-2t6-3',
            stem: 'What is sec θ in terms of cos θ?',
            template: 'sec θ = 1 __BLANK__ cos θ.',
            blanks: [{ answer: '/' }],
            rationale: 'sec θ = 1/cos θ is the definition of the secant function.'
        },
        {
            id: 'fb-2t6-4',
            stem: 'Complete the derived identity for cos²θ.',
            template: 'cos²θ = 1 __BLANK__ sin²θ.',
            blanks: [{ answer: '−' }],
            rationale: 'From sin²θ + cos²θ = 1, we get cos²θ = 1 − sin²θ.'
        },
        {
            id: 'fb-2t6-5',
            stem: 'What identity relates sec and tan?',
            template: '1 + tan²θ = __BLANK__.',
            blanks: [{ answer: 'sec²θ' }],
            rationale: '1 + tan²θ = sec²θ is derived by dividing sin²θ + cos²θ = 1 by cos²θ.'
        },
        // Linear
        {
            id: 'fb-2t6-6',
            stem: 'What is the exact value of sin 45°?',
            template: 'sin 45° = __BLANK__.',
            blanks: [{ answer: '1/√2' }],
            rationale: 'sin 45° = 1/√2 is one of the exact values to memorise.'
        },
        {
            id: 'fb-2t6-7',
            stem: 'What is the exact value of cos 60°?',
            template: 'cos 60° = __BLANK__.',
            blanks: [{ answer: '1/2' }],
            rationale: 'cos 60° = 1/2 is one of the exact values to memorise.'
        },
        {
            id: 'fb-2t6-8',
            stem: 'What is the exact value of tan 30°?',
            template: 'tan 30° = __BLANK__.',
            blanks: [{ answer: '1/√3' }],
            rationale: 'tan 30° = 1/√3 is one of the exact values to memorise.'
        },
        {
            id: 'fb-2t6-9',
            stem: 'Complete the CAST pattern for the second solution of cos.',
            template: 'For cos θ = k, the second solution is 360° __BLANK__ θ₀.',
            blanks: [{ answer: '−' }],
            rationale: 'For cos θ = k, the second solution is 360° − θ₀.'
        },
        {
            id: 'fb-2t6-10',
            stem: 'Complete the CAST pattern for the second solution of tan.',
            template: 'For tan θ = k, the second solution is θ₀ __BLANK__ 180°.',
            blanks: [{ answer: '+' }],
            rationale: 'For tan θ = k, the second solution is θ₀ + 180°.'
        },
        // Quadratic
        {
            id: 'fb-2t6-11',
            stem: 'Complete the double angle formula for sine.',
            template: 'sin(2θ) = __BLANK__ sin θ cos θ.',
            blanks: [{ answer: '2' }],
            rationale: 'sin(2θ) = 2 sin θ cos θ is the double angle formula for sine.'
        },
        {
            id: 'fb-2t6-12',
            stem: 'Complete one form of the double angle formula for cosine.',
            template: 'cos(2θ) = 1 __BLANK__ 2 sin²θ.',
            blanks: [{ answer: '−' }],
            rationale: 'cos(2θ) = 1 − 2 sin²θ is one of three equivalent forms.'
        },
        {
            id: 'fb-2t6-13',
            stem: 'What factorises from sin θ(2 cos θ − 1) = 0?',
            template: 'The equation factors as sin θ(__BLANK__) = 0.',
            blanks: [{ answer: '2 cos θ − 1' }],
            rationale: 'sin θ is the common factor, leaving (2 cos θ − 1) as the other factor.'
        },
        {
            id: 'fb-2t6-14',
            stem: 'Complete the cosec-tan identity.',
            template: '1 + cot²θ = __BLANK__.',
            blanks: [{ answer: 'cosec²θ' }],
            rationale: '1 + cot²θ = cosec²θ is derived by dividing sin²θ + cos²θ = 1 by sin²θ.'
        },
        // Strategy
        {
            id: 'fb-2t6-15',
            stem: 'Complete the sine addition formula.',
            template: 'sin(A + B) = sin A cos B __BLANK__ cos A sin B.',
            blanks: [{ answer: '+' }],
            rationale: 'sin(A + B) = sin A cos B + cos A sin B is the sine addition formula.'
        }
    ],

    dragdrop: [
        {
            id: 'dd-2t6-1',
            stem: 'Sort the exact trigonometric values by angle.',
            categories: ['30°', '45°', '60°'],
            items: [
                { text: 'sin = 1/2, cos = √3/2, tan = 1/√3', category: '30°' },
                { text: 'sin = 1/√2, cos = 1/√2, tan = 1', category: '45°' },
                { text: 'sin = √3/2, cos = 1/2, tan = √3', category: '60°' },
                { text: 'smallest angle', category: '30°' },
                { text: 'sin and cos are equal', category: '45°' },
                { text: 'largest sin value', category: '60°' }
            ]
        },
        {
            id: 'dd-2t6-2',
            stem: 'Sort the functions by their definition.',
            categories: ['Primary functions', 'Reciprocal functions'],
            items: [
                { text: 'sin θ', category: 'Primary functions' },
                { text: 'cos θ', category: 'Primary functions' },
                { text: 'tan θ', category: 'Primary functions' },
                { text: 'sec θ = 1/cos θ', category: 'Reciprocal functions' },
                { text: 'cosec θ = 1/sin θ', category: 'Reciprocal functions' },
                { text: 'cot θ = 1/tan θ', category: 'Reciprocal functions' }
            ]
        },
        {
            id: 'dd-2t6-3',
            stem: 'Sort the CAST quadrants by which function is positive.',
            categories: ['1st Quadrant (A)', '2nd Quadrant (S)', '3rd Quadrant (T)', '4th Quadrant (C)'],
            items: [
                { text: 'All functions positive', category: '1st Quadrant (A)' },
                { text: 'Sine positive only', category: '2nd Quadrant (S)' },
                { text: 'Tangent positive only', category: '3rd Quadrant (T)' },
                { text: 'Cosine positive only', category: '4th Quadrant (C)' },
                { text: '0° to 90°', category: '1st Quadrant (A)' },
                { text: '90° to 180°', category: '2nd Quadrant (S)' }
            ]
        },
        {
            id: 'dd-2t6-4',
            stem: 'Sort the identities by type.',
            categories: ['Pythagorean identities', 'Reciprocal definitions', 'Derived identities'],
            items: [
                { text: 'sin²θ + cos²θ = 1', category: 'Pythagorean identities' },
                { text: 'tan θ = sin θ / cos θ', category: 'Reciprocal definitions' },
                { text: 'cos²θ = 1 − sin²θ', category: 'Derived identities' },
                { text: 'sec θ = 1/cos θ', category: 'Reciprocal definitions' },
                { text: 'sin²θ = 1 − cos²θ', category: 'Derived identities' },
                { text: '1 + tan²θ = sec²θ', category: 'Pythagorean identities' }
            ]
        },
        {
            id: 'dd-2t6-5',
            stem: 'Sort the double angle formulae by function.',
            categories: ['Sine', 'Cosine', 'Tangent'],
            items: [
                { text: 'sin(2θ) = 2 sin θ cos θ', category: 'Sine' },
                { text: 'cos(2θ) = cos²θ − sin²θ', category: 'Cosine' },
                { text: 'cos(2θ) = 2cos²θ − 1', category: 'Cosine' },
                { text: 'cos(2θ) = 1 − 2sin²θ', category: 'Cosine' },
                { text: 'tan(2θ) = 2 tan θ / (1 − tan²θ)', category: 'Tangent' },
                { text: 'Has three equivalent forms', category: 'Cosine' }
            ]
        },
        {
            id: 'dd-2t6-6',
            stem: 'Sort the equation types by solving method.',
            categories: ['Linear trig equations', 'Quadratic in trig', 'Compound angle'],
            items: [
                { text: 'sin θ = 0.5', category: 'Linear trig equations' },
                { text: 'Use CAST to find all solutions', category: 'Linear trig equations' },
                { text: '2cos²θ − cosθ − 1 = 0', category: 'Quadratic in trig' },
                { text: 'Factorise or use quadratic formula', category: 'Quadratic in trig' },
                { text: 'sin(2θ − 30°) = 0.5', category: 'Compound angle' },
                { text: 'Widen the interval for inner angle', category: 'Compound angle' }
            ]
        },
        {
            id: 'dd-2t6-7',
            stem: 'Sort the proof strategies by category.',
            categories: ['Valid strategies', 'Invalid strategies'],
            items: [
                { text: 'Work on one side only', category: 'Valid strategies' },
                { text: 'Use identities to simplify', category: 'Valid strategies' },
                { text: 'Replace tan θ with sin θ/cos θ', category: 'Valid strategies' },
                { text: 'Factorise common terms', category: 'Valid strategies' },
                { text: 'Cross-multiply across ≡', category: 'Invalid strategies' },
                { text: 'Move terms across ≡ sign', category: 'Invalid strategies' }
            ]
        },
        {
            id: 'dd-2t6-8',
            stem: 'Sort the addition formulae by function.',
            categories: ['Sine', 'Cosine', 'Tangent'],
            items: [
                { text: 'sin(A + B) = sin A cos B + cos A sin B', category: 'Sine' },
                { text: 'sin(A − B) = sin A cos B − cos A sin B', category: 'Sine' },
                { text: 'cos(A + B) = cos A cos B − sin A sin B', category: 'Cosine' },
                { text: 'cos(A − B) = cos A cos B + sin A sin B', category: 'Cosine' },
                { text: 'tan(A + B) = (tan A + tan B)/(1 − tan A tan B)', category: 'Tangent' },
                { text: 'Note the sign change in cosine', category: 'Cosine' }
            ]
        },
        {
            id: 'dd-2t6-9',
            stem: 'Sort the undefined conditions by function.',
            categories: ['tan θ undefined', 'sec θ undefined', 'cosec θ undefined', 'cot θ undefined'],
            items: [
                { text: 'cos θ = 0', category: 'tan θ undefined' },
                { text: '90°, 270°', category: 'tan θ undefined' },
                { text: 'cos θ = 0', category: 'sec θ undefined' },
                { text: 'sin θ = 0', category: 'cosec θ undefined' },
                { text: '0°, 180°, 360°', category: 'cosec θ undefined' },
                { text: 'sin θ = 0 and tan θ undefined', category: 'cot θ undefined' }
            ]
        },
        {
            id: 'dd-2t6-10',
            stem: 'Sort the cos(2θ) forms by their use.',
            categories: ['To get only sin', 'To get only cos', 'To factorise'],
            items: [
                { text: 'cos(2θ) = 1 − 2sin²θ', category: 'To get only sin' },
                { text: 'cos(2θ) = 2cos²θ − 1', category: 'To get only cos' },
                { text: 'cos(2θ) = cos²θ − sin²θ', category: 'To factorise' },
                { text: 'Use when equation has cos(2θ) and sin θ', category: 'To get only sin' },
                { text: 'Use when equation has cos(2θ) and cos θ', category: 'To get only cos' },
                { text: 'Difference of squares form', category: 'To factorise' }
            ]
        }
    ],

    sequence: [
        {
            id: 'seq-2t6-1',
            stem: 'Put the steps for solving sin θ = k in the correct order:',
            steps: [
                'Find the principal value θ₀ using sin⁻¹(k)',
                'Check the sign of k to identify which quadrants have solutions',
                'Use symmetry to find the second solution: for sin, use 180° − θ₀',
                'Apply periodicity: add multiples of 360° until outside the interval',
                'List all solutions within the given interval'
            ]
        },
        {
            id: 'seq-2t6-2',
            stem: 'Put the steps for solving a quadratic in cos θ in the correct order:',
            steps: [
                'Let x = cos θ to form a standard quadratic',
                'Factorise or use the quadratic formula to solve for x',
                'Solve each case separately: cos θ = value₁ and cos θ = value₂',
                'For each case, use CAST to find all angle solutions in the interval',
                'Combine all solutions from both cases'
            ]
        },
        {
            id: 'seq-2t6-3',
            stem: 'Put the steps for proving a trigonometric identity in the correct order:',
            steps: [
                'Choose one side to work on (usually the more complex side)',
                'Use identities to replace sin²θ or cos²θ using sin²θ + cos²θ = 1',
                'Replace tan θ with sin θ/cos θ if present',
                'Factorise or simplify the expression',
                'Show that the transformed side equals the other side'
            ]
        },
        {
            id: 'seq-2t6-4',
            stem: 'Put the steps for solving a compound angle equation in the correct order:',
            steps: [
                'Let φ = aθ + b be the inner compound angle',
                'Find the interval for φ from the given interval for θ',
                'Find ALL φ values in this new interval (might be 4+ solutions)',
                'Back-substitute each φ value to find θ',
                'List all θ values within the original interval'
            ]
        },
        {
            id: 'seq-2t6-5',
            stem: 'Put the steps for deriving 1 + tan²θ = sec²θ in the correct order:',
            steps: [
                'Start with sin²θ + cos²θ = 1',
                'Divide every term by cos²θ (assuming cos θ ≠ 0)',
                'Simplify: sin²θ/cos²θ + 1 = 1/cos²θ',
                'Replace sin²θ/cos²θ with tan²θ',
                'Replace 1/cos²θ with sec²θ to get 1 + tan²θ = sec²θ'
            ]
        },
        {
            id: 'seq-2t6-6',
            stem: 'Put the steps for solving 2sinθcosθ − sinθ = 0 in the correct order:',
            steps: [
                'Recognise that 2sinθcosθ = sin(2θ)',
                'Rewrite as sin(2θ) − sinθ = 0',
                'Factorise out sinθ: sinθ(2cosθ − 1) = 0',
                'Set each factor to zero: sinθ = 0 and 2cosθ − 1 = 0',
                'Solve each case: sinθ = 0 gives θ = 0°, 180°, 360°; cosθ = 1/2 gives θ = 60°, 300°'
            ]
        },
        {
            id: 'seq-2t6-7',
            stem: 'Put the steps for using CAST in the correct order:',
            steps: [
                'Find the principal value θ₀ using the inverse trig function',
                'Identify which quadrants contain solutions based on the sign of the result',
                'Use the CAST diagram: A for all positive (1st), S for sine (2nd), T for tangent (3rd), C for cosine (4th)',
                'Find the second solution using the appropriate symmetry',
                'Add multiples of 360° if needed for a wider interval'
            ]
        },
        {
            id: 'seq-2t6-8',
            stem: 'Put the steps for finding cos(2θ) when θ = 30° in the correct order:',
            steps: [
                'Recall the exact value cos 30° = √3/2',
                'Recall the exact value sin 30° = 1/2',
                'Use cos(2θ) = cos²θ − sin²θ',
                'Calculate: (√3/2)² − (1/2)² = 3/4 − 1/4',
                'Simplify: 2/4 = 1/2'
            ]
        }
    ],

    keyword: [
        {
            id: 'kw-2t6-1',
            stem: 'State the Pythagorean identity and explain why it is true. [2 marks]',
            marks: 2,
            keywords: ['sin²θ', 'cos²θ', '1', 'unit circle', 'x² + y² = 1'],
            modelAnswer: 'The Pythagorean identity is sin²θ + cos²θ = 1. It is true because on the unit circle, a point at angle θ has coordinates (cos θ, sin θ), and by Pythagoras theorem x² + y² = 1, giving cos²θ + sin²θ = 1.'
        },
        {
            id: 'kw-2t6-2',
            stem: 'Define sec θ and state when it is undefined. [2 marks]',
            marks: 2,
            keywords: ['sec θ', '1/cos θ', 'undefined', 'cos θ = 0', '90°', '270°'],
            modelAnswer: 'sec θ = 1/cos θ. It is undefined when cos θ = 0, which occurs at θ = 90°, 270°, and 450°, etc.'
        },
        {
            id: 'kw-2t6-3',
            stem: 'Explain how to use the CAST diagram to find all solutions of a trigonometric equation. [3 marks]',
            marks: 3,
            keywords: ['principal value', 'inverse', 'sign', 'quadrants', 'symmetry', '180°', '360°'],
            modelAnswer: 'First find the principal value using sin⁻¹, cos⁻¹, or tan⁻¹. Check the sign of the result to identify which quadrants contain solutions: All positive in 1st (A), Sine positive in 2nd (S), Tangent positive in 3rd (T), Cosine positive in 4th (C). Use symmetry: for sin, 180° − θ₀; for cos, 360° − θ₀; for tan, θ₀ + 180°. Add multiples of 360° if needed.'
        },
        {
            id: 'kw-2t6-4',
            stem: 'Solve sin θ = −1/2 for 0° ≤ θ ≤ 360°, showing all working. [3 marks]',
            marks: 3,
            keywords: ['sin⁻¹', '30°', 'negative', '3rd', '4th', '180°', '210°', '330°'],
            modelAnswer: 'sin⁻¹(1/2) = 30° (principal value). Since sin θ is negative, solutions are in the 3rd and 4th quadrants. In 3rd: θ = 180° + 30° = 210°. In 4th: θ = 360° − 30° = 330°. Therefore θ = 210°, 330°.'
        },
        {
            id: 'kw-2t6-5',
            stem: 'Prove that (sin θ + cos θ)² ≡ 1 + 2 sin θ cos θ. [3 marks]',
            marks: 3,
            keywords: ['expand', 'sin²θ', '2 sin θ cos θ', 'cos²θ', 'identity', '1'],
            modelAnswer: 'LHS = (sin θ + cos θ)² = sin²θ + 2 sin θ cos θ + cos²θ. Using sin²θ + cos²θ = 1, this becomes 1 + 2 sin θ cos θ, which equals RHS. Therefore (sin θ + cos θ)² ≡ 1 + 2 sin θ cos θ.'
        },
        {
            id: 'kw-2t6-6',
            stem: 'State the double angle formulae for sin(2θ) and cos(2θ). [3 marks]',
            marks: 3,
            keywords: ['sin(2θ)', '2 sin θ cos θ', 'cos(2θ)', 'cos²θ − sin²θ', '2cos²θ − 1', '1 − 2sin²θ'],
            modelAnswer: 'sin(2θ) = 2 sin θ cos θ. cos(2θ) = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ (three equivalent forms).'
        },
        {
            id: 'kw-2t6-7',
            stem: 'Solve 2cos²θ − cosθ − 1 = 0 for 0° ≤ θ ≤ 360°. [4 marks]',
            marks: 4,
            keywords: ['quadratic', 'cos θ', 'factorise', '1/2', '1', '2nd', '3rd', '120°', '240°', '0°', '360°'],
            modelAnswer: 'Let x = cos θ: 2x² − x − 1 = 0. Factorising: (2x + 1)(x − 1) = 0, so x = −1/2 or x = 1. For cos θ = −1/2: θ = 120°, 240°. For cos θ = 1: θ = 0°, 360°. All solutions: θ = 0°, 120°, 240°, 360°.'
        },
        {
            id: 'kw-2t6-8',
            stem: 'Explain the strategy for proving trigonometric identities. [3 marks]',
            marks: 3,
            keywords: ['one side', 'complex', 'simplify', 'identities', 'tan θ', 'sin θ/cos θ', 'factorise', 'never cross-multiply'],
            modelAnswer: 'Work on one side only, usually the more complex side. Use identities to replace sin²θ or cos²θ using sin²θ + cos²θ = 1. Replace tan θ with sin θ/cos θ if present. Factorise and simplify. Never move terms across the ≡ sign or cross-multiply when proving an identity.'
        },
        {
            id: 'kw-2t6-9',
            stem: 'State the addition formulae for sin(A + B) and cos(A + B). [2 marks]',
            marks: 2,
            keywords: ['sin(A + B)', 'sin A cos B', 'cos A sin B', 'cos(A + B)', 'cos A cos B', 'sin A sin B'],
            modelAnswer: 'sin(A + B) = sin A cos B + cos A sin B. cos(A + B) = cos A cos B − sin A sin B.'
        },
        {
            id: 'kw-2t6-10',
            stem: 'Given sin θ = 3/5 and θ is acute, find the exact values of cos θ and tan θ. [4 marks]',
            marks: 4,
            keywords: ['sin²θ + cos²θ = 1', '(3/5)²', '9/25', '16/25', '4/5', 'tan θ', 'sin θ/cos θ', '3/4'],
            modelAnswer: 'Using sin²θ + cos²θ = 1: (3/5)² + cos²θ = 1 → 9/25 + cos²θ = 1 → cos²θ = 16/25 → cos θ = 4/5 (positive since θ is acute). tan θ = sin θ / cos θ = (3/5)/(4/5) = 3/4.'
        },
        {
            id: 'kw-2t6-11',
            stem: 'Solve sin(2θ − 30°) = 0.5 for 0° ≤ θ ≤ 180°, explaining each step. [5 marks]',
            marks: 5,
            keywords: ['φ', 'interval', '−30°', '330°', 'sin φ = 0.5', '30°', '150°', 'back-substitute', '30°', '90°'],
            modelAnswer: 'Let φ = 2θ − 30°. When 0° ≤ θ ≤ 180°, we have −30° ≤ φ ≤ 330°. sin φ = 0.5 gives φ = 30°, 150° (within the interval). For φ = 30°: 2θ − 30° = 30° → 2θ = 60° → θ = 30°. For φ = 150°: 2θ − 30° = 150° → 2θ = 180° → θ = 90°. Solutions: θ = 30°, 90°.'
        },
        {
            id: 'kw-2t6-12',
            stem: 'Explain which form of cos(2θ) to use in different situations. [3 marks]',
            marks: 3,
            keywords: ['1 − 2sin²θ', 'only sin', '2cos²θ − 1', 'only cos', 'cos²θ − sin²θ', 'factorise', 'difference of squares'],
            modelAnswer: 'Use cos(2θ) = 1 − 2sin²θ when you want only sin terms in the result, e.g., when solving an equation with cos(2θ) and sin θ. Use cos(2θ) = 2cos²θ − 1 when you want only cos terms. Use cos(2θ) = cos²θ − sin²θ (difference of squares) when factorisation is needed.'
        }
    ],

    flashcards: [
        // Simple identities
        {
            id: 'fc-2t6-1',
            front: 'What is the Pythagorean identity?',
            back: 'sin²θ + cos²θ = 1',
            topic: 'Simple identities'
        },
        {
            id: 'fc-2t6-2',
            front: 'What is the tangent identity?',
            back: 'tan θ = sin θ / cos θ (undefined when cos θ = 0)',
            topic: 'Simple identities'
        },
        {
            id: 'fc-2t6-3',
            front: 'What is the derived identity for cos²θ?',
            back: 'cos²θ = 1 − sin²θ',
            topic: 'Simple identities'
        },
        {
            id: 'fc-2t6-4',
            front: 'What is the derived identity for sin²θ?',
            back: 'sin²θ = 1 − cos²θ',
            topic: 'Simple identities'
        },
        {
            id: 'fc-2t6-5',
            front: 'Define sec θ.',
            back: 'sec θ = 1/cos θ (undefined when cos θ = 0, i.e., at 90°, 270°)',
            topic: 'Simple identities'
        },
        {
            id: 'fc-2t6-6',
            front: 'Define cosec θ.',
            back: 'cosec θ = 1/sin θ (undefined when sin θ = 0, i.e., at 0°, 180°, 360°)',
            topic: 'Simple identities'
        },
        {
            id: 'fc-2t6-7',
            front: 'Define cot θ.',
            back: 'cot θ = 1/tan θ = cos θ / sin θ',
            topic: 'Simple identities'
        },
        {
            id: 'fc-2t6-8',
            front: 'What is the identity relating sec and tan?',
            back: '1 + tan²θ = sec²θ (derived by dividing sin²θ + cos²θ = 1 by cos²θ)',
            topic: 'Simple identities'
        },
        {
            id: 'fc-2t6-9',
            front: 'What is the identity relating cosec and cot?',
            back: '1 + cot²θ = cosec²θ (derived by dividing sin²θ + cos²θ = 1 by sin²θ)',
            topic: 'Simple identities'
        },
        // Linear
        {
            id: 'fc-2t6-10',
            front: 'What are the exact values for 30°?',
            back: 'sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3',
            topic: 'Linear'
        },
        {
            id: 'fc-2t6-11',
            front: 'What are the exact values for 45°?',
            back: 'sin 45° = 1/√2, cos 45° = 1/√2, tan 45° = 1',
            topic: 'Linear'
        },
        {
            id: 'fc-2t6-12',
            front: 'What are the exact values for 60°?',
            back: 'sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3',
            topic: 'Linear'
        },
        {
            id: 'fc-2t6-13',
            front: 'What does CAST stand for?',
            back: 'CAST: All positive (1st quadrant), Sine positive (2nd), Tangent positive (3rd), Cosine positive (4th). Going anti-clockwise from the right.',
            topic: 'Linear'
        },
        {
            id: 'fc-2t6-14',
            front: 'How do you find the second solution for sin θ = k?',
            back: 'Use 180° − θ₀, where θ₀ is the principal value from sin⁻¹(k)',
            topic: 'Linear'
        },
        {
            id: 'fc-2t6-15',
            front: 'How do you find the second solution for cos θ = k?',
            back: 'Use 360° − θ₀, where θ₀ is the principal value from cos⁻¹(k)',
            topic: 'Linear'
        },
        {
            id: 'fc-2t6-16',
            front: 'How do you find the second solution for tan θ = k?',
            back: 'Use θ₀ + 180°, where θ₀ is the principal value from tan⁻¹(k)',
            topic: 'Linear'
        },
        // Quadratic
        {
            id: 'fc-2t6-17',
            front: 'What is the double angle formula for sine?',
            back: 'sin(2θ) = 2 sin θ cos θ',
            topic: 'Quadratic'
        },
        {
            id: 'fc-2t6-18',
            front: 'What are the three forms of cos(2θ)?',
            back: 'cos(2θ) = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ',
            topic: 'Quadratic'
        },
        {
            id: 'fc-2t6-19',
            front: 'What is the double angle formula for tangent?',
            back: 'tan(2θ) = 2 tan θ / (1 − tan²θ)',
            topic: 'Quadratic'
        },
        {
            id: 'fc-2t6-20',
            front: 'How do you solve a quadratic in cos θ?',
            back: 'Let x = cos θ, solve the quadratic, then solve each case for θ using CAST',
            topic: 'Quadratic'
        },
        {
            id: 'fc-2t6-21',
            front: 'What form of cos(2θ) should you use to get only sin terms?',
            back: 'cos(2θ) = 1 − 2sin²θ',
            topic: 'Quadratic'
        },
        {
            id: 'fc-2t6-22',
            front: 'What form of cos(2θ) should you use to get only cos terms?',
            back: 'cos(2θ) = 2cos²θ − 1',
            topic: 'Quadratic'
        },
        // Strategy
        {
            id: 'fc-2t6-23',
            front: 'What is the main strategy for proving trigonometric identities?',
            back: 'Work on one side only (usually the more complex side), use identities to simplify (replace sin²θ or cos²θ, replace tan θ with sin θ/cos θ), factorise, never cross-multiply across ≡',
            topic: 'Strategy for trigonometric equations'
        },
        {
            id: 'fc-2t6-24',
            front: 'What is the sine addition formula?',
            back: 'sin(A ± B) = sin A cos B ± cos A sin B',
            topic: 'Strategy for trigonometric equations'
        },
        {
            id: 'fc-2t6-25',
            front: 'What is the cosine addition formula?',
            back: 'cos(A ± B) = cos A cos B ∓ sin A sin B (note the opposite sign to ±)',
            topic: 'Strategy for trigonometric equations'
        },
        {
            id: 'fc-2t6-26',
            front: 'What is the tangent addition formula?',
            back: 'tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)',
            topic: 'Strategy for trigonometric equations'
        },
        {
            id: 'fc-2t6-27',
            front: 'How do you solve compound angle equations like sin(2θ − 30°) = k?',
            back: 'Let φ = aθ + b, find the interval for φ from the θ interval, find ALL φ solutions, back-substitute to find θ',
            topic: 'Strategy for trigonometric equations'
        },
        {
            id: 'fc-2t6-28',
            front: 'When solving sin(2θ − 30°) = 0.5 for 0° ≤ θ ≤ 180°, what is the interval for φ = 2θ − 30°?',
            back: '−30° ≤ φ ≤ 330° (multiply θ interval by 2: 0° to 360°, then subtract 30°)',
            topic: 'Strategy for trigonometric equations'
        }
    ]
};
