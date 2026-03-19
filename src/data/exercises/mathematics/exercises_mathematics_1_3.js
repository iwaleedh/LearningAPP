/**
 * Exercise set: Mathematics · Unit 1 · Topic 3 · Trigonometry
 * Covers: Basic definitions, Right angled triangles, Trigonometry exact values,
 *          Non right angled triangles, Radian measure, Graphs of trigonometric functions,
 *          Transformations of trigonometric functions
 */

export const exercises_mathematics_1_3 = {
    mcq: [
        // Basic definitions
        {
            id: 'mcq-t3-1',
            stem: 'In a right-angled triangle, which side is always opposite the right angle?',
            options: ['The opposite side', 'The adjacent side', 'The hypotenuse', 'The shortest side'],
            correctAnswer: 2,
            rationale: 'The hypotenuse is always the longest side and is opposite the 90° angle. The opposite and adjacent sides are relative to the angle θ.',
            topic: 'Basic definitions'
        },
        {
            id: 'mcq-t3-2',
            stem: 'What is the definition of sin θ in a right-angled triangle?',
            options: ['Adjacent/Hypotenuse', 'Opposite/Hypotenuse', 'Opposite/Adjacent', 'Hypotenuse/Adjacent'],
            correctAnswer: 1,
            rationale: 'sin θ = Opposite/Hypotenuse — the ratio of the side opposite angle θ to the hypotenuse.',
            topic: 'Basic definitions'
        },
        {
            id: 'mcq-t3-3',
            stem: 'What is the definition of cos θ in a right-angled triangle?',
            options: ['Opposite/Hypotenuse', 'Hypotenuse/Opposite', 'Adjacent/Hypotenuse', 'Hypotenuse/Adjacent'],
            correctAnswer: 2,
            rationale: 'cos θ = Adjacent/Hypotenuse — the ratio of the side adjacent to angle θ (but not the hypotenuse) to the hypotenuse.',
            topic: 'Basic definitions'
        },
        {
            id: 'mcq-t3-4',
            stem: 'What is the definition of tan θ in a right-angled triangle?',
            options: ['Hypotenuse/Opposite', 'Opposite/Adjacent', 'Adjacent/Opposite', 'Hypotenuse/Adjacent'],
            correctAnswer: 1,
            rationale: 'tan θ = Opposite/Adjacent — the ratio of the side opposite angle θ to the side adjacent to angle θ.',
            topic: 'Basic definitions'
        },
        // Unit circle
        {
            id: 'mcq-t3-5',
            stem: 'What are the coordinates of a point on the unit circle at angle θ?',
            options: ['(sin θ, cos θ)', '(cos θ, sin θ)', '(1, θ)', '(θ, 1)'],
            correctAnswer: 1,
            rationale: 'On the unit circle (radius 1, centre at origin), coordinates are (cos θ, sin θ). The x-coordinate is cos θ and the y-coordinate is sin θ.',
            topic: 'Basic definitions'
        },
        {
            id: 'mcq-t3-6',
            stem: 'What is the value of tan θ in terms of sin and cos?',
            options: ['sin θ × cos θ', 'sin θ + cos θ', 'sin θ / cos θ', 'cos θ / sin θ'],
            correctAnswer: 2,
            rationale: 'tan θ = sin θ / cos θ. This is derived from tan θ = O/A = (O/H) ÷ (A/H) = sin θ / cos θ.',
            topic: 'Basic definitions'
        },
        // CAST and quadrants
        {
            id: 'mcq-t3-7',
            stem: 'For angles in the second quadrant (90° to 180°), which trigonometric function(s) are positive?',
            options: ['sin only', 'cos only', 'tan only', 'sin and cos only'],
            correctAnswer: 0,
            rationale: 'In Quadrant 2: x is negative, y is positive. sin θ = y (positive), cos θ = x (negative), tan θ = sin/cos (positive/negative = negative). So only sin is positive.',
            topic: 'Basic definitions'
        },
        {
            id: 'mcq-t3-8',
            stem: 'In which quadrant are all three trigonometric functions (sin, cos, tan) positive?',
            options: ['Quadrant 1 (0° to 90°)', 'Quadrant 2 (90° to 180°)', 'Quadrant 3 (180° to 270°)', 'Quadrant 4 (270° to 360°)'],
            correctAnswer: 0,
            rationale: 'In Quadrant 1 (0° to 90°): x > 0, y > 0. Therefore sin θ = y > 0, cos θ = x > 0, tan θ = sin/cos > 0. All three are positive only in Q1.',
            topic: 'Basic definitions'
        },
        // Exact values
        {
            id: 'mcq-t3-9',
            stem: 'What is the exact value of sin 30°?',
            options: ['1/2', '√3/2', '√2/2', '1'],
            correctAnswer: 0,
            rationale: 'sin 30° = 1/2. This comes from the 30-60-90 triangle where the opposite side is 1 and hypotenuse is 2.',
            topic: 'Trigonometry exact values'
        },
        {
            id: 'mcq-t3-10',
            stem: 'What is the exact value of cos 60°?',
            options: ['√3/2', '1/2', '√2/2', '0'],
            correctAnswer: 1,
            rationale: 'cos 60° = 1/2. From the 30-60-90 triangle, the adjacent side is 1 and hypotenuse is 2.',
            topic: 'Trigonometry exact values'
        },
        {
            id: 'mcq-t3-11',
            stem: 'What is the exact value of tan 45°?',
            options: ['1/√3', '√3', '1', '√2'],
            correctAnswer: 2,
            rationale: 'tan 45° = sin 45°/cos 45° = (√2/2)/(√2/2) = 1. In a 45-45-90 triangle, opposite = adjacent = 1.',
            topic: 'Trigonometry exact values'
        },
        {
            id: 'mcq-t3-12',
            stem: 'What is the exact value of sin 60°?',
            options: ['1/2', '√2/2', '√3/2', '1'],
            correctAnswer: 2,
            rationale: 'sin 60° = √3/2. From the 30-60-90 triangle, opposite side is √3 and hypotenuse is 2.',
            topic: 'Trigonometry exact values'
        },
        {
            id: 'mcq-t3-13',
            stem: 'What is the exact value of cos 90°?',
            options: ['1', '0', '-1', 'undefined'],
            correctAnswer: 1,
            rationale: 'cos 90° = 0. On the unit circle at 90°, the point is (0, 1), so x = cos θ = 0.',
            topic: 'Trigonometry exact values'
        },
        // Right angled triangles
        {
            id: 'mcq-t3-14',
            stem: 'In a right triangle with angle θ = 35°, opposite = 5.7, what is the hypotenuse?',
            options: ['10', '8', '7', '5.7 sin 35°'],
            correctAnswer: 0,
            rationale: 'sin 35° = O/H, so H = O/sin 35° = 5.7/0.574 ≈ 10 cm. (sin 35° ≈ 0.574)',
            topic: 'Right angled triangles'
        },
        {
            id: 'mcq-t3-15',
            stem: 'To find an unknown angle in a right triangle, which operation do you use?',
            options: ['Standard sin, cos, tan', 'Square root', 'Inverse trig functions: sin⁻¹, cos⁻¹, tan⁻¹', 'Multiply by 180/π'],
            correctAnswer: 2,
            rationale: 'Inverse trigonometric functions (sin⁻¹, cos⁻¹, tan⁻¹) are used to find angles from known ratios. For example, if cos θ = 0.6, then θ = cos⁻¹(0.6) ≈ 53.1°.',
            topic: 'Right angled triangles'
        },
        {
            id: 'mcq-t3-16',
            stem: 'Given a right triangle with adjacent = 6 and hypotenuse = 10, what is cos θ?',
            options: ['0.6', '1.67', '0.66', '1.5'],
            correctAnswer: 0,
            rationale: 'cos θ = A/H = 6/10 = 0.6. The angle θ = cos⁻¹(0.6) ≈ 53.1°.',
            topic: 'Right angled triangles'
        },
        // Non-right angled triangles
        {
            id: 'mcq-t3-17',
            stem: 'Which rule would you use to find a side when given two angles and one side (AAS or ASA)?',
            options: ['Cosine rule', 'Sine rule', 'Area formula ½ab sin C', 'Pythagoras theorem'],
            correctAnswer: 1,
            rationale: 'Sine rule: a/sin A = b/sin B = c/sin C. Use when given two angles and any side (AAS) or two angles and included side (ASA).',
            topic: 'Non right angled triangles'
        },
        {
            id: 'mcq-t3-18',
            stem: 'Which form of the cosine rule finds a side when given two sides and the included angle (SAS)?',
            options: ['a² = b² + c² + 2bc cos A', 'a² = b² + c² − 2bc cos A', 'cos A = (a² + b² − c²)/(2ab)', 'sin A/a = sin B/b'],
            correctAnswer: 1,
            rationale: 'To find a side: a² = b² + c² − 2bc cos A. Use when given two sides (b, c) and the included angle A.',
            topic: 'Non right angled triangles'
        },
        {
            id: 'mcq-t3-19',
            stem: 'What is the formula for the area of a triangle given two sides and the included angle?',
            options: ['½ab', '½bh', '½ab sin C', '½(a + b)h'],
            correctAnswer: 2,
            rationale: 'Area = ½ab sin C, where a and b are two sides and C is the included angle between them. Use when SAS is known.',
            topic: 'Non right angled triangles'
        },
        {
            id: 'mcq-t3-20',
            stem: 'In the sine rule a/sin A = b/sin B, what does "a" represent?',
            options: ['The angle at vertex A', 'The side opposite angle A', 'The included side', 'The perimeter'],
            correctAnswer: 1,
            rationale: 'In triangle labelling convention, side a is opposite angle A, side b is opposite angle B, side c is opposite angle C. Angles use uppercase letters, sides use matching lowercase letters.',
            topic: 'Non right angled triangles'
        },
        {
            id: 'mcq-t3-21',
            stem: 'When can the "ambiguous case" of the sine rule occur?',
            options: ['Given AAS (two angles and a side)', 'Given SAS (two sides and included angle)', 'Given SSA (two sides and non-included angle)', 'Given SSS (three sides)'],
            correctAnswer: 2,
            rationale: 'The ambiguous case occurs with SSA — two sides and a non-included angle. There may be two valid triangles because sin A = k gives two possible angles: A and (180° − A).',
            topic: 'Non right angled triangles'
        },
        {
            id: 'mcq-t3-22',
            stem: 'Which rule would you use to find an angle when given all three sides (SSS)?',
            options: ['Sine rule directly', 'Cosine rule to find angle: cos A = (b² + c² − a²)/(2bc)', 'Area formula', 'Pythagoras theorem'],
            correctAnswer: 1,
            rationale: 'Use the cosine rule rearranged to find an angle: cos A = (b² + c² − a²)/(2bc). This works for SSS (three known sides).',
            topic: 'Non right angled triangles'
        },
        // Radian measure
        {
            id: 'mcq-t3-23',
            stem: 'What is the conversion factor from degrees to radians?',
            options: ['Multiply by 180/π', 'Multiply by π/180', 'Divide by 360', 'Multiply by 2π'],
            correctAnswer: 1,
            rationale: 'To convert degrees to radians: multiply by π/180. For example, 60° × π/180 = π/3 radians.',
            topic: 'Radian measure'
        },
        {
            id: 'mcq-t3-24',
            stem: 'What is 90° in radians?',
            options: ['π/6', 'π/4', 'π/3', 'π/2'],
            correctAnswer: 3,
            rationale: '90° × π/180 = π/2 radians. The key conversion is π rad = 180°, so 90° = π/2.',
            topic: 'Radian measure'
        },
        {
            id: 'mcq-t3-25',
            stem: 'What is the arc length formula when the angle is in radians?',
            options: ['s = rθ', 's = 2πr', 's = πr', 's = rθ/2'],
            correctAnswer: 0,
            rationale: 'Arc length s = rθ, where r is radius and θ is the central angle in RADIANS. The angle must be in radians for this formula.',
            topic: 'Radian measure'
        },
        {
            id: 'mcq-t3-26',
            stem: 'What is the area of a sector formula when the angle is in radians?',
            options: ['A = r²θ', 'A = 2πr²', 'A = ½r²θ', 'A = πr²θ/360'],
            correctAnswer: 2,
            rationale: 'Sector area A = ½r²θ, where r is radius and θ is the central angle in RADIANS. The angle must be in radians.',
            topic: 'Radian measure'
        },
        {
            id: 'mcq-t3-27',
            stem: 'What is π/3 radians in degrees?',
            options: ['45°', '60°', '90°', '30°'],
            correctAnswer: 1,
            rationale: 'π/3 × 180/π = 60°. To convert radians to degrees: multiply by 180/π.',
            topic: 'Radian measure'
        },
        // Graphs of trigonometric functions
        {
            id: 'mcq-t3-28',
            stem: 'What is the period of y = sin x and y = cos x?',
            options: ['90° (π/2)', '180° (π)', '360° (2π)', '720° (4π)'],
            correctAnswer: 2,
            rationale: 'Both y = sin x and y = cos x have a period of 360° (2π radians). The graph repeats every full cycle of 360°.',
            topic: 'Graphs of trigonometric functions'
        },
        {
            id: 'mcq-t3-29',
            stem: 'What is the period of y = tan x?',
            options: ['90° (π/2)', '180° (π)', '360° (2π)', '270° (3π/2)'],
            correctAnswer: 1,
            rationale: 'y = tan x has a period of 180° (π radians). The graph repeats every half cycle compared to sin and cos.',
            topic: 'Graphs of trigonometric functions'
        },
        {
            id: 'mcq-t3-30',
            stem: 'Where are the vertical asymptotes of y = tan x located in the range 0° to 360°?',
            options: ['0°, 180°, 360°', '90°, 270°', '45°, 225°', 'No asymptotes'],
            correctAnswer: 1,
            rationale: 'y = tan x has vertical asymptotes at 90°, 270°, etc. (odd multiples of 90°). The function approaches ±∞ at these points because cos θ = 0.',
            topic: 'Graphs of trigonometric functions'
        },
        // Transformations of trigonometric functions
        {
            id: 'mcq-t3-31',
            stem: 'In y = a sin(bx + c) + d, what does the value of "a" represent?',
            options: ['The period of the function', 'The phase shift', 'The amplitude', 'The vertical translation'],
            correctAnswer: 2,
            rationale: 'The coefficient "a" represents the amplitude — the vertical stretch factor. The range becomes [-a, a] (before vertical translation). A negative "a" reflects in the x-axis.',
            topic: 'Transformations of trigonometric functions'
        },
        {
            id: 'mcq-t3-32',
            stem: 'In y = a sin(bx + c) + d, what is the period?',
            options: ['360°/a', '360°/b', '360° × b', '360°'],
            correctAnswer: 1,
            rationale: 'The period is 360°/b (or 2π/b in radians). A larger "b" means a shorter period and faster oscillation.',
            topic: 'Transformations of trigonometric functions'
        },
        {
            id: 'mcq-t3-33',
            stem: 'For y = sin(2x), what is the period?',
            options: ['90°', '180°', '360°', '720°'],
            correctAnswer: 1,
            rationale: 'Period = 360°/b = 360°/2 = 180°. The graph oscillates twice as fast as y = sin x.',
            topic: 'Transformations of trigonometric functions'
        },
        {
            id: 'mcq-t3-34',
            stem: 'What transformation does y = sin(x − 30°) represent compared to y = sin x?',
            options: ['Shift left by 30°', 'Shift right by 30°', 'Stretch vertically by 30°', 'Reflect in x-axis'],
            correctAnswer: 1,
            rationale: 'y = sin(x − 30°) shifts the graph RIGHT by 30°. (x − c) with c > 0 is a shift to the right; (x + c) with c > 0 is a shift to the left.',
            topic: 'Transformations of trigonometric functions'
        },
        {
            id: 'mcq-t3-35',
            stem: 'In y = 3 cos(2x) − 1, what is the range?',
            options: ['[-3, 3]', '[-4, 2]', '[-1, 1]', '[-2, 4]'],
            correctAnswer: 1,
            rationale: 'Amplitude = 3, so cos(2x) ranges from -3 to 3. Subtract 1: range = [-3 − 1, 3 − 1] = [-4, 2].',
            topic: 'Transformations of trigonometric functions'
        },
    ],
    fillblank: [
        // Basic definitions
        {
            id: 'fb-t3-1',
            stem: 'In a right-angled triangle, sin θ = __BLANK__/Hypotenuse.',
            blanks: [{ answer: 'Opposite' }],
            rationale: 'sin is the ratio of opposite side to hypotenuse.'
        },
        {
            id: 'fb-t3-2',
            stem: 'In a right-angled triangle, cos θ = __BLANK__/Hypotenuse.',
            blanks: [{ answer: 'Adjacent' }],
            rationale: 'cos is the ratio of adjacent side to hypotenuse.'
        },
        {
            id: 'fb-t3-3',
            stem: 'In a right-angled triangle, tan θ = __BLANK__/Adjacent.',
            blanks: [{ answer: 'Opposite' }],
            rationale: 'tan is the ratio of opposite side to adjacent side.'
        },
        {
            id: 'fb-t3-4',
            stem: 'The identity tan θ = __BLANK__/cos θ is derived from the basic definitions.',
            blanks: [{ answer: 'sin θ' }],
            rationale: 'tan θ = O/A = (O/H) ÷ (A/H) = sin θ/cos θ.'
        },
        // Unit circle and CAST
        {
            id: 'fb-t3-5',
            stem: 'On the unit circle, coordinates are (__BLANK__, __BLANK__).',
            blanks: [{ answer: 'cos θ' }, { answer: 'sin θ' }],
            rationale: 'The unit circle has radius 1, so x = cos θ and y = sin θ.'
        },
        {
            id: 'fb-t3-6',
            stem: 'CAST: In Quadrant 1, all functions are __BLANK__.',
            blanks: [{ answer: 'positive' }],
            rationale: 'In Q1 (0° to 90°): x > 0, y > 0, so sin > 0, cos > 0, tan > 0.'
        },
        {
            id: 'fb-t3-7',
            stem: 'CAST: In Quadrant 2, only __BLANK__ is positive.',
            blanks: [{ answer: 'sin' }],
            rationale: 'In Q2 (90° to 180°): x < 0, y > 0, so sin > 0 only.'
        },
        {
            id: 'fb-t3-8',
            stem: 'CAST: In Quadrant 3, only __BLANK__ is positive.',
            blanks: [{ answer: 'tan' }],
            rationale: 'In Q3 (180° to 270°): x < 0, y < 0, so tan = sin/cos > 0 (negative/negative = positive).'
        },
        {
            id: 'fb-t3-9',
            stem: 'CAST: In Quadrant 4, only __BLANK__ is positive.',
            blanks: [{ answer: 'cos' }],
            rationale: 'In Q4 (270° to 360°): x > 0, y < 0, so cos > 0 only.'
        },
        // Exact values
        {
            id: 'fb-t3-10',
            stem: 'sin 30° = __BLANK__.',
            blanks: [{ answer: '1/2' }],
            rationale: 'sin 30° = 1/2 from the 30-60-90 triangle.'
        },
        {
            id: 'fb-t3-11',
            stem: 'cos 60° = __BLANK__.',
            blanks: [{ answer: '1/2' }],
            rationale: 'cos 60° = 1/2 from the 30-60-90 triangle.'
        },
        {
            id: 'fb-t3-12',
            stem: 'tan 45° = __BLANK__.',
            blanks: [{ answer: '1' }],
            rationale: 'tan 45° = 1 from the 45-45-90 isosceles triangle.'
        },
        {
            id: 'fb-t3-13',
            stem: 'sin 60° = __BLANK__/2.',
            blanks: [{ answer: '√3' }],
            rationale: 'sin 60° = √3/2 from the 30-60-90 triangle.'
        },
        {
            id: 'fb-t3-14',
            stem: 'cos 45° = __BLANK__/2.',
            blanks: [{ answer: '√2' }],
            rationale: 'cos 45° = √2/2 from the 45-45-90 isosceles triangle.'
        },
        // Non-right angled triangles
        {
            id: 'fb-t3-15',
            stem: 'The sine rule for finding sides is: a/__BLANK__ = b/sin B.',
            blanks: [{ answer: 'sin A' }],
            rationale: 'Sine rule: a/sin A = b/sin B = c/sin C.'
        },
        {
            id: 'fb-t3-16',
            stem: 'The cosine rule for finding a side is: a² = b² + c² − __BLANK__bc cos A.',
            blanks: [{ answer: '2' }],
            rationale: 'Cosine rule: a² = b² + c² − 2bc cos A for SAS.'
        },
        {
            id: 'fb-t3-17',
            stem: 'Area of a triangle with two sides and included angle: __BLANK__ab sin C.',
            blanks: [{ answer: '½' }],
            rationale: 'Area = ½ab sin C where a, b are sides and C is included angle.'
        },
        // Radian measure
        {
            id: 'fb-t3-18',
            stem: 'To convert degrees to radians, multiply by __BLANK__/180.',
            blanks: [{ answer: 'π' }],
            rationale: 'Degrees → radians: multiply by π/180. Radians → degrees: multiply by 180/π.'
        },
        {
            id: 'fb-t3-19',
            stem: 'Arc length formula: s = __BLANK__θ (θ in radians).',
            blanks: [{ answer: 'r' }],
            rationale: 'Arc length s = rθ where r is radius and θ is angle in radians.'
        },
        {
            id: 'fb-t3-20',
            stem: 'Sector area formula: A = __BLANK__r²θ (θ in radians).',
            blanks: [{ answer: '½' }],
            rationale: 'Sector area A = ½r²θ where r is radius and θ is angle in radians.'
        },
        {
            id: 'fb-t3-21',
            stem: 'π radians = __BLANK__ degrees.',
            blanks: [{ answer: '180' }],
            rationale: 'π rad = 180°, so 2π rad = 360° (full circle).'
        },
        // Graphs and transformations
        {
            id: 'fb-t3-22',
            stem: 'Period of y = sin(3x) is __BLANK__°.',
            blanks: [{ answer: '120' }],
            rationale: 'Period = 360°/3 = 120°. Larger coefficient = shorter period.'
        },
        {
            id: 'fb-t3-23',
            stem: 'y = 2 sin x has amplitude __BLANK__.',
            blanks: [{ answer: '2' }],
            rationale: 'Amplitude = |a| where a is the coefficient of sin x. Range is [-2, 2].'
        },
        {
            id: 'fb-t3-24',
            stem: 'y = sin x + 3 shifts the graph __BLANK__ by 3.',
            blanks: [{ answer: 'up' }],
            rationale: 'Adding a constant shifts vertically: +d shifts up, -d shifts down. Midline is y = d.'
        },
        {
            id: 'fb-t3-25',
            stem: 'y = sin(x − 45°) shifts the graph __BLANK__ by 45°.',
            blanks: [{ answer: 'right' }],
            rationale: '(x − c) with c > 0 shifts right; (x + c) with c > 0 shifts left. Phase shift = -c/b.'
        },
    ],
    dragdrop: [
        // Basic definitions
        {
            id: 'dd-t3-1',
            stem: 'Sort these ratios into the correct trigonometric function category.',
            categories: ['sin θ', 'cos θ', 'tan θ', 'Not a basic ratio'],
            items: [
                { text: 'Opposite/Hypotenuse', category: 'sin θ' },
                { text: 'Adjacent/Hypotenuse', category: 'cos θ' },
                { text: 'Opposite/Adjacent', category: 'tan θ' },
                { text: 'Hypotenuse/Opposite', category: 'Not a basic ratio' },
                { text: 'Adjacent/Opposite', category: 'Not a basic ratio' },
                { text: 'sin θ × cos θ', category: 'Not a basic ratio' },
                { text: 'sin θ / cos θ', category: 'tan θ' },
            ],
        },
        // CAST and signs
        {
            id: 'dd-t3-2',
            stem: 'Categorise these angles by the signs of their trigonometric functions.',
            categories: ['Quadrant 1 (All +)', 'Quadrant 2 (Sin +)', 'Quadrant 3 (Tan +)', 'Quadrant 4 (Cos +)'],
            items: [
                { text: '30°', category: 'Quadrant 1 (All +)' },
                { text: '45°', category: 'Quadrant 1 (All +)' },
                { text: '120°', category: 'Quadrant 2 (Sin +)' },
                { text: '150°', category: 'Quadrant 2 (Sin +)' },
                { text: '210°', category: 'Quadrant 3 (Tan +)' },
                { text: '225°', category: 'Quadrant 3 (Tan +)' },
                { text: '300°', category: 'Quadrant 4 (Cos +)' },
                { text: '330°', category: 'Quadrant 4 (Cos +)' },
                { text: '60°', category: 'Quadrant 1 (All +)' },
                { text: '135°', category: 'Quadrant 2 (Sin +)' },
                { text: '240°', category: 'Quadrant 3 (Tan +)' },
                { text: '315°', category: 'Quadrant 4 (Cos +)' },
            ],
        },
        // Exact values
        {
            id: 'dd-t3-3',
            stem: 'Sort these exact values into their numerical categories.',
            categories: ['0', '1/2', '√2/2 or √3/2', '1'],
            items: [
                { text: 'sin 0°', category: '0' },
                { text: 'cos 90°', category: '0' },
                { text: 'sin 30°', category: '1/2' },
                { text: 'cos 60°', category: '1/2' },
                { text: 'sin 45°', category: '√2/2 or √3/2' },
                { text: 'cos 45°', category: '√2/2 or √3/2' },
                { text: 'sin 60°', category: '√2/2 or √3/2' },
                { text: 'tan 45°', category: '1' },
                { text: 'sin 90°', category: '1' },
                { text: 'tan 60°', category: '1' },
            ],
        },
        // Triangle rules
        {
            id: 'dd-t3-4',
            stem: 'Sort these given information types into the correct rule to use.',
            categories: ['Sine rule', 'Cosine rule (side)', 'Cosine rule (angle)', 'Area formula'],
            items: [
                { text: 'Two angles + one side (AAS/ASA)', category: 'Sine rule' },
                { text: 'Two sides + non-included angle (SSA)', category: 'Sine rule' },
                { text: 'Two sides + included angle (SAS)', category: 'Cosine rule (side)' },
                { text: 'Three sides (SSS)', category: 'Cosine rule (angle)' },
                { text: 'Two sides + included angle', category: 'Area formula' },
                { text: 'All three sides known', category: 'Area formula' },
            ],
        },
        // Radian conversions
        {
            id: 'dd-t3-5',
            stem: 'Sort these angles into degree or radian measures.',
            categories: ['Degrees', 'Radians', 'Both (π rad = 180°)'],
            items: [
                { text: '30°', category: 'Degrees' },
                { text: '45°', category: 'Degrees' },
                { text: '60°', category: 'Degrees' },
                { text: '90°', category: 'Degrees' },
                { text: 'π/6', category: 'Radians' },
                { text: 'π/4', category: 'Radians' },
                { text: 'π/3', category: 'Radians' },
                { text: 'π/2', category: 'Radians' },
                { text: 'π', category: 'Both (π rad = 180°)' },
                { text: '2π', category: 'Radians' },
                { text: '180°', category: 'Both (π rad = 180°)' },
            ],
        },
        // Trig graph properties
        {
            id: 'dd-t3-6',
            stem: 'Sort these properties by trigonometric function.',
            categories: ['y = sin x', 'y = cos x', 'y = tan x'],
            items: [
                { text: 'Period: 360° (2π)', category: 'y = sin x' },
                { text: 'Period: 360° (2π)', category: 'y = cos x' },
                { text: 'Period: 180° (π)', category: 'y = tan x' },
                { text: 'Range: [-1, 1]', category: 'y = sin x' },
                { text: 'Range: [-1, 1]', category: 'y = cos x' },
                { text: 'Range: all real numbers', category: 'y = tan x' },
                { text: 'y-intercept: 0', category: 'y = sin x' },
                { text: 'y-intercept: 1', category: 'y = cos x' },
                { text: 'y-intercept: 0', category: 'y = tan x' },
            ],
        },
        // Transformations
        {
            id: 'dd-t3-7',
            stem: 'Categorise these transformations by their effect on the graph.',
            categories: ['Vertical stretch/shrink', 'Horizontal stretch/shrink', 'Vertical shift', 'Horizontal shift'],
            items: [
                { text: 'y = 2 sin x', category: 'Vertical stretch/shrink' },
                { text: 'y = ½ cos x', category: 'Vertical stretch/shrink' },
                { text: 'y = sin(2x)', category: 'Horizontal stretch/shrink' },
                { text: 'y = cos(½x)', category: 'Horizontal stretch/shrink' },
                { text: 'y = sin x + 3', category: 'Vertical shift' },
                { text: 'y = cos x − 2', category: 'Vertical shift' },
                { text: 'y = sin(x − 30°)', category: 'Horizontal shift' },
                { text: 'y = cos(x + 45°)', category: 'Horizontal shift' },
            ],
        },
        // Right triangle scenarios
        {
            id: 'dd-t3-8',
            stem: 'Sort these right triangle scenarios into the correct trigonometric ratio.',
            categories: ['Use sin θ = O/H', 'Use cos θ = A/H', 'Use tan θ = O/A', 'Use Pythagoras'],
            items: [
                { text: 'Find opposite side: given angle and hypotenuse', category: 'Use sin θ = O/H' },
                { text: 'Find hypotenuse: given angle and opposite', category: 'Use sin θ = O/H' },
                { text: 'Find adjacent side: given angle and hypotenuse', category: 'Use cos θ = A/H' },
                { text: 'Find hypotenuse: given angle and adjacent', category: 'Use cos θ = A/H' },
                { text: 'Find opposite side: given angle and adjacent', category: 'Use tan θ = O/A' },
                { text: 'Find adjacent side: given angle and opposite', category: 'Use tan θ = O/A' },
                { text: 'Find third side: given two sides (no angle needed)', category: 'Use Pythagoras' },
            ],
        },
        // Special triangles
        {
            id: 'dd-t3-9',
            stem: 'Sort these angle values into their special triangle category.',
            categories: ['30-60-90 triangle', '45-45-90 triangle', 'Both triangles', 'Neither'],
            items: [
                { text: '30°', category: '30-60-90 triangle' },
                { text: '60°', category: '30-60-90 triangle' },
                { text: '45°', category: '45-45-90 triangle' },
                { text: '90°', category: 'Both triangles' },
                { text: 'sin 30° = 1/2', category: '30-60-90 triangle' },
                { text: 'cos 45° = √2/2', category: '45-45-90 triangle' },
                { text: 'tan 60° = √3', category: '30-60-90 triangle' },
                { text: 'tan 45° = 1', category: '45-45-90 triangle' },
                { text: 'sin 15°', category: 'Neither' },
            ],
        },
        // Ambiguous case check
        {
            id: 'dd-t3-10',
            stem: 'Categorise these triangle problems by whether ambiguous case is possible.',
            categories: ['Possible ambiguous case', 'No ambiguous case'],
            items: [
                { text: 'Given two angles and a side (AAS)', category: 'No ambiguous case' },
                { text: 'Given two sides and included angle (SAS)', category: 'No ambiguous case' },
                { text: 'Given two sides and non-included angle (SSA)', category: 'Possible ambiguous case' },
                { text: 'Given three sides (SSS)', category: 'No ambiguous case' },
                { text: 'Sine rule: finding side from two angles', category: 'No ambiguous case' },
                { text: 'Sine rule: finding angle from two sides', category: 'Possible ambiguous case' },
            ],
        },
    ],
    sequence: [
        // SOHCAHTOA process
        {
            id: 'seq-t3-1',
            stem: 'Put the steps for finding a missing side using SOHCAHTOA in order:',
            steps: [
                'Label the triangle sides: Hypotenuse (H), Opposite (O), Adjacent (A) relative to angle θ',
                'Identify which two sides are known and which is unknown',
                'Choose the correct ratio: SOH (sin), CAH (cos), or TOA (tan)',
                'Write the equation and substitute known values',
                'Rearrange and solve for the unknown side'
            ],
        },
        // Finding an angle
        {
            id: 'seq-t3-2',
            stem: 'Put the steps for finding a missing angle in a right triangle in order:',
            steps: [
                'Label the triangle: H, O, A relative to the unknown angle',
                'Identify which two sides are known',
                'Choose the correct trigonometric ratio (sin, cos, or tan)',
                'Write the equation with the unknown angle θ',
                'Apply the inverse function: θ = sin⁻¹(ratio), cos⁻¹(ratio), or tan⁻¹(ratio)'
            ],
        },
        // Sine rule procedure
        {
            id: 'seq-t3-3',
            stem: 'Put the steps for using the sine rule to find a missing side in order:',
            steps: [
                'Label triangle: angles A, B, C; opposite sides a, b, c',
                'Identify known values (e.g., A = 40°, B = 75°, a = 8 cm)',
                'Find the third angle if needed: C = 180° − A − B',
                'Set up sine rule proportion: a/sin A = b/sin B',
                'Rearrange: b = a × sin B / sin A, then calculate'
            ],
        },
        // Cosine rule for side
        {
            id: 'seq-t3-4',
            stem: 'Put the steps for using the cosine rule to find a side in order:',
            steps: [
                'Label triangle: sides a, b, c; angles A, B, C',
                'Identify SAS (two sides and included angle): e.g., b = 5, c = 8, A = 60°',
                'Use cosine rule formula: a² = b² + c² − 2bc cos A',
                'Substitute and simplify: a² = 5² + 8² − 2(5)(8)cos 60°',
                'Calculate: a² = 89 − 40 = 49, so a = 7'
            ],
        },
        // Area of triangle
        {
            id: 'seq-t3-5',
            stem: 'Put the steps for finding the area of a non-right triangle in order:',
            steps: [
                'Identify two sides of the triangle (a and b)',
                'Identify the included angle C (between sides a and b)',
                'Use formula: Area = ½ab sin C',
                'Multiply: ½ × a × b × sin C',
                'Calculate the final area value (square units)'
            ],
        },
        // Radian conversion
        {
            id: 'seq-t3-6',
            stem: 'Put the steps for converting 120° to radians in order:',
            steps: [
                'Recall conversion factor: multiply degrees by π/180',
                'Write: 120° × π/180',
                'Simplify the fraction: 120/180 = 2/3',
                'Final answer: 2π/3 radians'
            ],
        },
        // Arc length calculation
        {
            id: 'seq-t3-7',
            stem: 'Put the steps for finding arc length in order:',
            steps: [
                'Identify radius r and central angle θ',
                'Check that θ is in radians (convert if necessary)',
                'Use formula: s = rθ',
                'Multiply r by θ to get arc length'
            ],
        },
        // Solving trig equations
        {
            id: 'seq-t3-8',
            stem: 'Put the steps for solving sin x = 0.5 for 0° ≤ x ≤ 360° in order:',
            steps: [
                'Find principal value: x = sin⁻¹(0.5) = 30°',
                'Use CAST to identify quadrants where sin is positive (Q1 and Q2)',
                'Q1 solution: x = 30°',
                'Q2 solution: x = 180° − 30° = 150°',
                'Check both solutions are within the given range'
            ],
        },
    ],
    keyword: [
        // Basic definitions
        {
            id: 'kw-t3-1',
            stem: 'Define sin, cos, and tan in terms of the sides of a right-angled triangle. [3 marks]',
            marks: 3,
            keywords: ['hypotenuse', 'opposite', 'adjacent', 'ratio', 'SOHCAHTOA'],
            modelAnswer: 'In a right-angled triangle with angle θ: sin θ = Opposite/Hypotenuse, cos θ = Adjacent/Hypotenuse, tan θ = Opposite/Adjacent. The hypotenuse is always the longest side opposite the 90° angle.'
        },
        {
            id: 'kw-t3-2',
            stem: 'Explain what the CAST diagram shows and how to use it. [3 marks]',
            marks: 3,
            keywords: ['quadrants', 'positive', 'negative', 'sin', 'cos', 'tan', 'CAST'],
            modelAnswer: 'CAST shows which trigonometric functions are positive in each quadrant. Reading anticlockwise from Q4: Cos positive in Q4, All positive in Q1, Sin positive in Q2, Tan positive in Q3. Use CAST to find secondary solutions when solving trig equations.'
        },
        {
            id: 'kw-t3-3',
            stem: 'Prove that tan θ = sin θ / cos θ using the basic definitions. [2 marks]',
            marks: 2,
            keywords: ['opposite', 'adjacent', 'hypotenuse', 'O/H', 'A/H', 'ratio'],
            modelAnswer: 'From definitions: tan θ = Opposite/Adjacent = (O/H) ÷ (A/H) = sin θ/cos θ. This proves the identity.'
        },
        // Exact values
        {
            id: 'kw-t3-4',
            stem: 'State the exact values of sin, cos, and tan for 30°, 45°, and 60°. [3 marks]',
            marks: 3,
            keywords: ['1/2', '√2/2', '√3/2', '1', '√3', '1/√3'],
            modelAnswer: '30°: sin=1/2, cos=√3/2, tan=1/√3. 45°: sin=√2/2, cos=√2/2, tan=1. 60°: sin=√3/2, cos=1/2, tan=√3.'
        },
        // Right triangles
        {
            id: 'kw-t3-5',
            stem: 'Explain how to find a missing angle in a right-angled triangle. [3 marks]',
            marks: 3,
            keywords: ['inverse', 'sin⁻¹', 'cos⁻¹', 'tan⁻¹', 'calculator', 'ratio'],
            modelAnswer: 'Identify two known sides, write the appropriate trig ratio (sin, cos, or tan), then apply the inverse function. For example, if cos θ = 0.6, then θ = cos⁻¹(0.6) ≈ 53.1°. Ensure calculator is in degree mode.'
        },
        // Non-right triangles
        {
            id: 'kw-t3-6',
            stem: 'State the sine rule and cosine rule. Explain when to use each. [4 marks]',
            marks: 4,
            keywords: ['a/sin A', 'b/sin B', 'a² = b² + c²', 'AAS', 'ASA', 'SAS', 'SSS'],
            modelAnswer: 'Sine rule: a/sin A = b/sin B = c/sin C. Use for AAS (two angles + any side) or ASA (two angles + included side) or SSA (two sides + non-included angle — check ambiguous case). Cosine rule: a² = b² + c² − 2bc cos A. Use for SAS (two sides + included angle) to find a side, or SSS (three sides) to find an angle.'
        },
        {
            id: 'kw-t3-7',
            stem: 'Explain the ambiguous case of the sine rule. [2 marks]',
            marks: 2,
            keywords: ['SSA', 'two solutions', '180°', 'ambiguous', 'valid'],
            modelAnswer: 'When given two sides and a non-included angle (SSA), there may be two possible triangles. If sin A = k, the angle could be A or (180° − A). Both must be checked for validity (positive angles, sum to 180°).'
        },
        // Radians
        {
            id: 'kw-t3-8',
            stem: 'Explain what a radian is and give the key conversion factor. [3 marks]',
            marks: 3,
            keywords: ['arc length', 'radius', 'π rad = 180°', '2π rad = 360°', 'circle'],
            modelAnswer: 'One radian is the angle subtended at the centre of a circle by an arc equal in length to the radius. Key conversion: π radians = 180°, so a full circle is 2π radians. To convert: ×π/180 (deg→rad), ×180/π (rad→deg).'
        },
        {
            id: 'kw-t3-9',
            stem: 'State the formulas for arc length and sector area. What condition applies? [2 marks]',
            marks: 2,
            keywords: ['s = rθ', 'A = ½r²θ', 'radians', 'θ in radians'],
            modelAnswer: 'Arc length: s = rθ. Sector area: A = ½r²θ. The angle θ MUST be in radians for both formulas. Convert degrees to radians first if necessary.'
        },
        // Graphs
        {
            id: 'kw-t3-10',
            stem: 'Compare the graphs of y = sin x, y = cos x, and y = tan x. Include period and range. [4 marks]',
            marks: 4,
            keywords: ['period', '360°', '180°', 'range', '[-1, 1]', 'asymptotes', 'unbounded'],
            modelAnswer: 'y = sin x and y = cos x: period 360°, range [-1, 1], bounded. cos x is sin x shifted left by 90°. y = tan x: period 180°, range all real numbers (unbounded), vertical asymptotes at 90°, 270°, etc. (where cos θ = 0).'
        },
        {
            id: 'kw-t3-11',
            stem: 'Explain how to find all solutions to a trigonometric equation in a given interval. [3 marks]',
            marks: 3,
            keywords: ['principal value', 'CAST', 'quadrants', 'periodicity', '360°', 'solutions'],
            modelAnswer: 'Find the principal value from calculator. Use CAST to identify other quadrants where the function has the same sign. For sin positive: Q1 and Q2 solutions. Add or subtract the period (360° for sin/cos, 180° for tan) to find all solutions in the required range.'
        },
        // Transformations
        {
            id: 'kw-t3-12',
            stem: 'Explain the effect of a, b, c, and d in y = a sin(bx + c) + d. [4 marks]',
            marks: 4,
            keywords: ['amplitude', 'period', 'phase shift', 'vertical shift', 'stretch', 'translation'],
            modelAnswer: 'a: amplitude (vertical stretch by |a|, reflection if a < 0). b: period = 360°/b (horizontal stretch, larger b = shorter period). c: phase shift = −c/b (horizontal translation, left if c > 0, right if c < 0). d: vertical shift by d (up if d > 0, down if d < 0).'
        },
    ],
    flashcards: [
        // Basic definitions
        {
            id: 'fc-t3-1',
            front: 'What is sin θ?',
            back: 'Opposite/Hypotenuse — the ratio of the side opposite angle θ to the hypotenuse.',
            topic: 'Basic definitions'
        },
        {
            id: 'fc-t3-2',
            front: 'What is cos θ?',
            back: 'Adjacent/Hypotenuse — the ratio of the side adjacent to angle θ (but not the hypotenuse) to the hypotenuse.',
            topic: 'Basic definitions'
        },
        {
            id: 'fc-t3-3',
            front: 'What is tan θ?',
            back: 'Opposite/Adjacent — the ratio of the side opposite angle θ to the side adjacent to angle θ.',
            topic: 'Basic definitions'
        },
        {
            id: 'fc-t3-4',
            front: 'What does SOHCAHTOA stand for?',
            back: 'SOH: Sin = O/H; CAH: Cos = A/H; TOA: Tan = O/A. A mnemonic for remembering the trig ratios.',
            topic: 'Basic definitions'
        },
        // Unit circle and CAST
        {
            id: 'fc-t3-5',
            front: 'What are the coordinates of a point on the unit circle?',
            back: '(cos θ, sin θ) — for a point at angle θ, x = cos θ and y = sin θ on a circle of radius 1 centred at the origin.',
            topic: 'Basic definitions'
        },
        {
            id: 'fc-t3-6',
            front: 'What does CAST help you determine?',
            back: 'The signs (positive/negative) of sin, cos, and tan in each quadrant. Reading anticlockwise from Q4: Cos, All, Sin, Tan.',
            topic: 'Basic definitions'
        },
        {
            id: 'fc-t3-7',
            front: 'Which functions are positive in each quadrant?',
            back: 'Q1 (0°-90°): All positive. Q2 (90°-180°): Sin only. Q3 (180°-270°): Tan only. Q4 (270°-360°): Cos only.',
            topic: 'Basic definitions'
        },
        // Exact values
        {
            id: 'fc-t3-8',
            front: 'What is sin 30°?',
            back: '1/2 — from the 30-60-90 triangle or unit circle.',
            topic: 'Trigonometry exact values'
        },
        {
            id: 'fc-t3-9',
            front: 'What is sin 60°?',
            back: '√3/2 — from the 30-60-90 triangle or unit circle.',
            topic: 'Trigonometry exact values'
        },
        {
            id: 'fc-t3-10',
            front: 'What is sin 45°?',
            back: '√2/2 — from the 45-45-90 isosceles triangle or unit circle.',
            topic: 'Trigonometry exact values'
        },
        {
            id: 'fc-t3-11',
            front: 'What is cos 30°?',
            back: '√3/2 — from the 30-60-90 triangle or unit circle.',
            topic: 'Trigonometry exact values'
        },
        {
            id: 'fc-t3-12',
            front: 'What is cos 60°?',
            back: '1/2 — from the 30-60-90 triangle or unit circle.',
            topic: 'Trigonometry exact values'
        },
        {
            id: 'fc-t3-13',
            front: 'What is cos 45°?',
            back: '√2/2 — from the 45-45-90 isosceles triangle or unit circle.',
            topic: 'Trigonometry exact values'
        },
        {
            id: 'fc-t3-14',
            front: 'What is tan 30°?',
            back: '1/√3 — derived from tan 30° = sin 30°/cos 30° = (1/2)/(√3/2) = 1/√3.',
            topic: 'Trigonometry exact values'
        },
        {
            id: 'fc-t3-15',
            front: 'What is tan 45°?',
            back: '1 — from the 45-45-90 isosceles triangle where opposite = adjacent = 1.',
            topic: 'Trigonometry exact values'
        },
        {
            id: 'fc-t3-16',
            front: 'What is tan 60°?',
            back: '√3 — derived from tan 60° = sin 60°/cos 60° = (√3/2)/(1/2) = √3.',
            topic: 'Trigonometry exact values'
        },
        // Right triangles
        {
            id: 'fc-t3-17',
            front: 'How do you find a missing side in a right triangle?',
            back: 'Label H, O, A relative to the known angle. Choose the correct ratio (SOH, CAH, or TOA). Write the equation, substitute values, and solve for the unknown.',
            topic: 'Right angled triangles'
        },
        {
            id: 'fc-t3-18',
            front: 'How do you find a missing angle in a right triangle?',
            back: 'Identify two known sides. Use the appropriate inverse trig function: θ = sin⁻¹(O/H), cos⁻¹(A/H), or tan⁻¹(O/A).',
            topic: 'Right angled triangles'
        },
        // Non-right triangles
        {
            id: 'fc-t3-19',
            front: 'What is the sine rule for finding sides?',
            back: 'a/sin A = b/sin B = c/sin C. Use for AAS or ASA to find missing sides.',
            topic: 'Non right angled triangles'
        },
        {
            id: 'fc-t3-20',
            front: 'What is the cosine rule for finding a side?',
            back: 'a² = b² + c² − 2bc cos A. Use for SAS (two sides and included angle) or SSS (rearranged to find angle).',
            topic: 'Non right angled triangles'
        },
        {
            id: 'fc-t3-21',
            front: 'What is the area formula for a non-right triangle?',
            back: 'Area = ½ab sin C, where a and b are two sides and C is the included angle between them.',
            topic: 'Non right angled triangles'
        },
        {
            id: 'fc-t3-22',
            front: 'What is the ambiguous case?',
            back: 'When given SSA (two sides and non-included angle), there may be two valid triangles because sin A = k gives angles A and (180° − A).',
            topic: 'Non right angled triangles'
        },
        // Radians
        {
            id: 'fc-t3-23',
            front: 'How do you convert degrees to radians?',
            back: 'Multiply by π/180. Example: 60° × π/180 = π/3 radians.',
            topic: 'Radian measure'
        },
        {
            id: 'fc-t3-24',
            front: 'How do you convert radians to degrees?',
            back: 'Multiply by 180/π. Example: π/3 × 180/π = 60°.',
            topic: 'Radian measure'
        },
        {
            id: 'fc-t3-25',
            front: 'What is the arc length formula?',
            back: 's = rθ, where r is radius and θ is angle in RADIANS. Always check the angle is in radians!',
            topic: 'Radian measure'
        },
        {
            id: 'fc-t3-26',
            front: 'What is the sector area formula?',
            back: 'A = ½r²θ, where r is radius and θ is angle in RADIANS. Always check the angle is in radians!',
            topic: 'Radian measure'
        },
        // Graphs
        {
            id: 'fc-t3-27',
            front: 'What is the period of y = sin x and y = cos x?',
            back: '360° (2π radians). The graph completes one full cycle every 360°.',
            topic: 'Graphs of trigonometric functions'
        },
        {
            id: 'fc-t3-28',
            front: 'What is the period of y = tan x?',
            back: '180° (π radians). The graph completes one full cycle every 180°.',
            topic: 'Graphs of trigonometric functions'
        },
        {
            id: 'fc-t3-29',
            front: 'What is the range of y = sin x and y = cos x?',
            back: '[-1, 1]. Both functions are bounded between -1 and 1.',
            topic: 'Graphs of trigonometric functions'
        },
        {
            id: 'fc-t3-30',
            front: 'What are the vertical asymptotes of y = tan x?',
            back: 'At 90°, 270°, etc. (odd multiples of 90°). The function approaches ±∞ where cos θ = 0.',
            topic: 'Graphs of trigonometric functions'
        },
        // Transformations
        {
            id: 'fc-t3-31',
            front: 'What does "a" represent in y = a sin(bx + c) + d?',
            back: 'Amplitude — the vertical stretch factor. Range becomes [-a, a] before vertical translation.',
            topic: 'Transformations of trigonometric functions'
        },
        {
            id: 'fc-t3-32',
            front: 'What does "b" represent in y = a sin(bx + c) + d?',
            back: 'Period = 360°/b. Larger b means shorter period and faster oscillation.',
            topic: 'Transformations of trigonometric functions'
        },
        {
            id: 'fc-t3-33',
            front: 'What does "c" represent in y = a sin(bx + c) + d?',
            back: 'Phase shift = −c/b. The graph shifts horizontally: left if c > 0, right if c < 0.',
            topic: 'Transformations of trigonometric functions'
        },
        {
            id: 'fc-t3-34',
            front: 'What does "d" represent in y = a sin(bx + c) + d?',
            back: 'Vertical shift. The graph moves up by d if d > 0, down by |d| if d < 0.',
            topic: 'Transformations of trigonometric functions'
        },
    ],
};
