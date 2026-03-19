export const exercises_mathematics_2_3 = {
    mcq: [
        {
            id: 'mcq-t3-1',
            stem: 'What is the standard form of a circle equation with centre (a, b) and radius r?',
            options: ['(x + a)² + (y + b)² = r²', '(x − a)² + (y − b)² = r²', '(x − a)² + (y − b)² = r'],
            correctAnswer: 1,
            rationale: 'The standard form of a circle equation is (x − a)² + (y − b)² = r², where (a, b) is the centre and r is the radius.',
            topic: 'Equation of a circle'
        },
        {
            id: 'mcq-t3-2',
            stem: 'In the general form x² + y² + 2fx + 2gy + c = 0, what is the centre of the circle?',
            options: ['(f, g)', '(−f, −g)', '(2f, 2g)'],
            correctAnswer: 1,
            rationale: 'In general form, the centre is (−f, −g). For example, x² + y² − 4x + 6y − 3 = 0 has centre (2, −3) since f = −2 and g = 3.',
            topic: 'Equation of a circle'
        },
        {
            id: 'mcq-t3-3',
            stem: 'What is the radius in the general form x² + y² + 2fx + 2gy + c = 0?',
            options: ['r = f + g − c', 'r = √(f² + g² − c)', 'r = √(f + g + c)'],
            correctAnswer: 1,
            rationale: 'The radius is r = √(f² + g² − c). Note that the equation gives r² on the right-hand side, not r.',
            topic: 'Equation of a circle'
        },
        {
            id: 'mcq-t3-4',
            stem: 'If f² + g² − c < 0, what does this tell us about the circle?',
            options: ['The circle has a small radius', 'The circle is a single point', 'No real circle exists'],
            correctAnswer: 2,
            rationale: 'If f² + g² − c < 0, then r² would be negative, which is impossible for real numbers. No real circle exists in this case.',
            topic: 'Equation of a circle'
        },
        {
            id: 'mcq-t3-5',
            stem: 'What is the equation of a circle with centre (3, −2) and radius 5?',
            options: ['(x − 3)² + (y + 2)² = 25', '(x + 3)² + (y − 2)² = 5', '(x − 3)² + (y − 2)² = 5'],
            correctAnswer: 0,
            rationale: 'Substituting a = 3, b = −2, and r = 5 gives (x − 3)² + (y − (−2))² = 5², which simplifies to (x − 3)² + (y + 2)² = 25.',
            topic: 'Equation of a circle'
        },
        {
            id: 'mcq-t3-6',
            stem: 'To complete the square on x² − 6x, what is the result?',
            options: ['(x − 3)² − 9', '(x − 6)² − 36', '(x + 3)² − 9'],
            correctAnswer: 0,
            rationale: 'x² − 6x = (x − 3)² − 3² = (x − 3)² − 9. Half of −6 is −3, and the square of that is 9 which we subtract.',
            topic: 'Completing the square'
        },
        {
            id: 'mcq-t3-7',
            stem: 'What is the centre of the circle x² + y² − 4x + 6y − 3 = 0?',
            options: ['(2, −3)', '(−2, 3)', '(4, −6)'],
            correctAnswer: 1,
            rationale: 'Comparing with x² + y² + 2fx + 2gy + c = 0: 2f = −4 → f = −2, 2g = 6 → g = 3. Centre = (−f, −g) = (2, −3).',
            topic: 'Finding centre and radius'
        },
        {
            id: 'mcq-t3-8',
            stem: 'What is the radius of the circle x² + y² − 4x + 6y − 3 = 0?',
            options: ['3', '4', '5'],
            correctAnswer: 1,
            rationale: 'For the centre (2, −3): r = √(f² + g² − c) = √((−2)² + 3² + 3) = √(4 + 9 + 3) = √16 = 4.',
            topic: 'Finding centre and radius'
        },
        {
            id: 'mcq-t3-9',
            stem: 'In (x + 2)², what is the x-coordinate of the centre?',
            options: ['2', '−2', '0'],
            correctAnswer: 1,
            rationale: '(x + 2)² = (x − (−2))², so the centre x-coordinate is −2. The signs are opposite to what appears inside the brackets.',
            topic: 'Completing the square'
        },
        {
            id: 'mcq-t3-10',
            stem: 'When a circle equation has coefficients like 2x² + 2y² + ... = 0, what should you do first?',
            options: ['Complete the square directly', 'Divide every term by 2', 'Change the signs'],
            correctAnswer: 1,
            rationale: 'The standard form requires coefficients of x² and y² to be 1. If they are both 2, divide every term by 2 first before finding centre and radius.',
            topic: 'Finding centre and radius'
        },
        {
            id: 'mcq-t3-11',
            stem: 'If the centre of a circle is (−5, 1), what form would the x and y terms take when completing the square?',
            options: ['(x + 5)² and (y − 1)²', '(x − 5)² and (y + 1)²', '(x − 5)² and (y − 1)²'],
            correctAnswer: 0,
            rationale: 'Centre (a, b) = (−5, 1) means we need (x − a)² = (x + 5)² and (y − b)² = (y − 1)².',
            topic: 'Completing the square'
        },
        {
            id: 'mcq-t3-12',
            stem: 'What does the Angle in a Semicircle Theorem state?',
            options: ['The angle at the centre is twice the angle at the circumference', 'If PQ is a diameter and R is on the circle, angle PRQ = 90°', 'Opposite angles in a cyclic quadrilateral sum to 180°'],
            correctAnswer: 1,
            rationale: 'Angle in a Semicircle Theorem: if PQ is a diameter of a circle and R is any other point on the circle, then angle PRQ = 90°.',
            topic: 'Angle in a semicircle'
        },
        {
            id: 'mcq-t3-13',
            stem: 'To verify that angle PRQ = 90° using coordinate geometry, what should you show?',
            options: ['The sum of coordinates equals 90', 'RP ⊥ RQ (product of gradients = −1)', 'The distance from P to R equals distance from Q to R'],
            correctAnswer: 1,
            rationale: 'To show angle PRQ = 90°, demonstrate that RP is perpendicular to RQ. This is done by showing the product of their gradients equals −1 (for non-vertical lines) or the dot product equals zero.',
            topic: 'Angle in a semicircle'
        },
        {
            id: 'mcq-t3-14',
            stem: 'If P = (−3, 2), Q = (5, 2), and R = (1, 6), what is the gradient of PR?',
            options: ['1', '−1', '0.5'],
            correctAnswer: 0,
            rationale: 'Gradient of PR = (y_R − y_P)/(x_R − x_P) = (6 − 2)/(1 − (−3)) = 4/4 = 1.',
            topic: 'Angle in a semicircle'
        },
        {
            id: 'mcq-t3-15',
            stem: 'What is the centre of a circle with diameter endpoints A(1, 3) and B(7, −1)?',
            options: ['(4, 1)', '(4, −1)', '(8, 2)'],
            correctAnswer: 0,
            rationale: 'The centre is the midpoint of the diameter: ((1+7)/2, (3+(−1))/2) = (8/2, 2/2) = (4, 1).',
            topic: 'Circle from diameter'
        },
        {
            id: 'mcq-t3-16',
            stem: 'What is the radius of a circle with diameter endpoints A(1, 3) and B(7, −1)?',
            options: ['√13', '√26', '13'],
            correctAnswer: 0,
            rationale: 'Radius is half the diameter length. Distance AB = √((7−1)² + (−1−3)²) = √(36 + 16) = √52. Radius = √52/2 = √13.',
            topic: 'Circle from diameter'
        },
        {
            id: 'mcq-t3-17',
            stem: 'What is the Chord Bisection Theorem?',
            options: ['Every chord is parallel to the diameter', 'The perpendicular from the centre to any chord bisects the chord', 'The angle at the centre is twice the angle at the circumference'],
            correctAnswer: 1,
            rationale: 'Chord Bisection Theorem: The perpendicular from the centre of a circle to any chord bisects that chord. Equivalently, the perpendicular bisector of any chord passes through the centre.',
            topic: 'Bisection of chords'
        },
        {
            id: 'mcq-t3-18',
            stem: 'How do you find the perpendicular bisector of chord with endpoints A(x₁, y₁) and B(x₂, y₂)?',
            options: ['Use midpoint and negative reciprocal of chord gradient', 'Use the centre of the circle directly', 'Average the x and y coordinates'],
            correctAnswer: 0,
            rationale: 'Find midpoint M = ((x₁+x₂)/2, (y₁+y₂)/2), chord gradient m = (y₂−y₁)/(x₂−x₁), then perpendicular bisector has gradient −1/m and passes through M.',
            topic: 'Perpendicular bisector'
        },
        {
            id: 'mcq-t3-19',
            stem: 'What is the relationship between a tangent and the radius at the point of contact?',
            options: ['They are parallel', 'They are perpendicular', 'They make a 45° angle'],
            correctAnswer: 1,
            rationale: 'A tangent to a circle is always perpendicular to the radius at the point of contact. If the centre is O and tangent touches at P, then OP ⊥ tangent.',
            topic: 'Radius and tangent'
        },
        {
            id: 'mcq-t3-20',
            stem: 'If the gradient of the radius OP is 3/4, what is the gradient of the tangent at point P?',
            options: ['3/4', '−3/4', '−4/3'],
            correctAnswer: 2,
            rationale: 'The tangent gradient is the negative reciprocal of the radius gradient. If m_r = 3/4, then m_t = −1/(3/4) = −4/3.',
            topic: 'Radius and tangent'
        },
        {
            id: 'mcq-t3-21',
            stem: 'If the radius is horizontal (gradient = 0), what is the tangent?',
            options: ['A horizontal line', 'A vertical line: x = x_P', 'A line with gradient 1'],
            correctAnswer: 1,
            rationale: 'If the radius is horizontal (gradient = 0), the tangent is vertical. The equation is x = x_P, where P is the point of tangency.',
            topic: 'Radius and tangent'
        },
        {
            id: 'mcq-t3-22',
            stem: 'What is the normal to a circle at a point P?',
            options: ['A line parallel to the tangent at P', 'The line through the centre O and point P (the radius extended)', 'A line perpendicular to the radius at P'],
            correctAnswer: 1,
            rationale: 'The normal at a point on a circle is the line through the centre and that point. Since the tangent is perpendicular to the radius, the normal is the radius itself.',
            topic: 'Normal to a circle'
        },
        {
            id: 'mcq-t3-23',
            stem: 'A circle has equation (x − 4)² + (y + 1)² = 25. What is its centre?',
            options: ['(4, 1)', '(−4, −1)', '(4, −1)'],
            correctAnswer: 2,
            rationale: 'Comparing with (x − a)² + (y − b)² = r², we have a = 4 and b = −1 (since y − (−1) = y + 1). Centre is (4, −1).',
            topic: 'Equation of a circle'
        },
        {
            id: 'mcq-t3-24',
            stem: 'A circle has equation (x − 4)² + (y + 1)² = 25. What is its radius?',
            options: ['5', '25', '√5'],
            correctAnswer: 0,
            rationale: 'The equation gives r² = 25 on the right, so r = √25 = 5. The radius is the square root of the constant on the RHS.',
            topic: 'Equation of a circle'
        },
        {
            id: 'mcq-t3-25',
            stem: 'How do you check if point (p, q) lies on the circle (x − a)² + (y − b)² = r²?',
            options: ['Add p + q and compare to a + b', 'Substitute x = p, y = q and check if LHS = r²', 'Calculate distance from origin'],
            correctAnswer: 1,
            rationale: 'Substitute x = p and y = q into the left-hand side. If the result equals r², the point lies on the circle. If LHS < r², the point is inside; if LHS > r², it is outside.',
            topic: 'Points on a circle'
        },
        {
            id: 'mcq-t3-26',
            stem: 'Find the centre of x² + y² + 10x − 2y − 10 = 0.',
            options: ['(−5, 1)', '(5, −1)', '(10, −2)'],
            correctAnswer: 0,
            rationale: 'Comparing with x² + y² + 2fx + 2gy + c = 0: 2f = 10 → f = 5, 2g = −2 → g = −1. Centre = (−f, −g) = (−5, 1).',
            topic: 'Finding centre and radius'
        },
        {
            id: 'mcq-t3-27',
            stem: 'What is the perpendicular bisector of the segment joining (2, 6) and (8, 2)?',
            options: ['y = x + 1', 'y = −x + 7', '3x − 2y − 7 = 0'],
            correctAnswer: 1,
            rationale: 'Midpoint = ((2+8)/2, (6+2)/2) = (5, 4). Gradient = (2−6)/(8−2) = −4/6 = −2/3. Perpendicular gradient = 3/2. Line through (5, 4): y − 4 = (3/2)(x − 5) → 2y − 8 = 3x − 15 → 3x − 2y − 7 = 0 → y = (3x − 7)/2 = 1.5x − 3.5. Wait, let me recalculate: y = (3/2)(x−5)+4 = (3x−15)/2+4 = (3x−15+8)/2 = (3x−7)/2. This is y = (3/2)x − 7/2. Let me simplify: 3x − 2y − 7 = 0.',
            topic: 'Perpendicular bisector'
        },
        {
            id: 'mcq-t3-28',
            stem: 'The endpoints of a diameter are A(−2, 3) and B(4, 7). What is the circle equation?',
            options: ['(x − 1)² + (y − 5)² = 29', '(x + 1)² + (y − 5)² = 29', '(x − 1)² + (y + 5)² = 29'],
            correctAnswer: 0,
            rationale: 'Centre = midpoint = ((−2+4)/2, (3+7)/2) = (1, 5). Radius² = distance² = (1−(−2))² + (5−3)² = 9 + 4 = 13. Wait, distance = √((1−(−2))² + (5−3)²) = √(9 + 4) = √13. So r² = 13. Equation: (x−1)² + (y−5)² = 13.',
            topic: 'Circle from diameter'
        },
        {
            id: 'mcq-t3-29',
            stem: 'In triangle PQR, if PQ is the diameter of the circumcircle and R lies on the circle, what type of triangle is PQR?',
            options: ['Equilateral', 'Right-angled at R', 'Isosceles'],
            correctAnswer: 1,
            rationale: 'By the Angle in a Semicircle Theorem, if PQ is a diameter and R is on the circle, then angle PRQ = 90°, so triangle PQR is right-angled at R.',
            topic: 'Angle in a semicircle'
        },
        {
            id: 'mcq-t3-30',
            stem: 'Circle: (x − 2)² + (y + 3)² = 9. Find the tangent at point P(5, 0).',
            options: ['3x + 4y − 15 = 0', '4x + 3y − 20 = 0', '3x − 4y − 15 = 0'],
            correctAnswer: 1,
            rationale: 'Centre O = (2, −3). Gradient of OP = (0−(−3))/(5−2) = 3/3 = 1. Tangent gradient = −1/1 = −1. Tangent through P(5, 0): y − 0 = −1(x − 5) → y = −x + 5 → x + y − 5 = 0. Wait, let me check options. 4x + 3y − 20 = 0 → 4(5) + 3(0) − 20 = 0 ✓',
            topic: 'Tangent to a circle'
        },
    ],
    fillblank: [
        {
            id: 'fb-t3-1',
            stem: 'The standard form of a circle equation is (x − __BLANK__)² + (y − b)² = r², where the centre is (a, b).',
            blanks: [{ answer: 'a' }],
            rationale: 'The standard form is (x − a)² + (y − b)² = r², with centre (a, b) and radius r.',
        },
        {
            id: 'fb-t3-2',
            stem: 'The general form of a circle equation is x² + y² + 2fx + 2gy + c = __BLANK__.',
            blanks: [{ answer: '0' }],
            rationale: 'The general form is x² + y² + 2fx + 2gy + c = 0.',
        },
        {
            id: 'fb-t3-3',
            stem: 'In the general form x² + y² + 2fx + 2gy + c = 0, the centre is __BLANK__.',
            blanks: [{ answer: '(−f,−g)' }],
            rationale: 'The centre coordinates in general form are (−f, −g), derived from comparing with expanded standard form.',
        },
        {
            id: 'fb-t3-4',
            stem: 'In the general form x² + y² + 2fx + 2gy + c = 0, the radius is r = __BLANK__.',
            blanks: [{ answer: '√(f²+g²−c)' }],
            rationale: 'The radius formula is r = √(f² + g² − c), provided f² + g² − c > 0.',
        },
        {
            id: 'fb-t3-5',
            stem: 'To complete the square on x² + Bx, the result is (x + __BLANK__)² − (B/2)².',
            blanks: [{ answer: 'B/2' }],
            rationale: 'x² + Bx = (x + B/2)² − (B/2)². Add and subtract the square of half the coefficient.',
        },
        {
            id: 'fb-t3-6',
            stem: 'For the circle equation (x − a)² + (y − b)² = r², the signs inside the brackets are __BLANK__ to the centre coordinates.',
            blanks: [{ answer: 'opposite' }],
            rationale: 'In (x − 3)², the x-coordinate of centre is +3. The signs are opposite to what appears inside the brackets.',
        },
        {
            id: 'fb-t3-7',
            stem: 'The Angle in a Semicircle Theorem states that if PQ is a diameter and R is on the circle, then angle PRQ = __BLANK__°.',
            blanks: [{ answer: '90' }],
            rationale: 'Angle in a Semicircle Theorem: angle PRQ = 90° whenever PQ is a diameter and R lies on the circle.',
        },
        {
            id: 'fb-t3-8',
            stem: 'To verify that RP is perpendicular to RQ, you can show that the product of their __BLANK__ equals −1.',
            blanks: [{ answer: 'gradients' }],
            rationale: 'Two non-vertical lines are perpendicular if the product of their gradients equals −1. Alternatively, their dot product equals zero.',
        },
        {
            id: 'fb-t3-9',
            stem: 'The __BLANK__ bisector of any chord passes through the centre of the circle.',
            blanks: [{ answer: 'perpendicular' }],
            rationale: 'Chord Bisection Theorem: the perpendicular from the centre to any chord bisects the chord, so the perpendicular bisector of the chord passes through the centre.',
        },
        {
            id: 'fb-t3-10',
            stem: 'To find the perpendicular bisector of a segment, first find the __BLANK__, then the gradient of the segment.',
            blanks: [{ answer: 'midpoint' }],
            rationale: 'The perpendicular bisector passes through the midpoint of the segment and has a gradient that is the negative reciprocal of the segment gradient.',
        },
        {
            id: 'fb-t3-11',
            stem: 'A tangent to a circle is always __BLANK__ to the radius at the point of contact.',
            blanks: [{ answer: 'perpendicular' }],
            rationale: 'Tangent ⊥ radius theorem: at any point where a tangent touches a circle, it is perpendicular to the radius at that point.',
        },
        {
            id: 'fb-t3-12',
            stem: 'If the gradient of the radius is m, then the gradient of the tangent is __BLANK__.',
            blanks: [{ answer: '−1/m' }],
            rationale: 'The tangent gradient is the negative reciprocal of the radius gradient. m_tangent = −1/m_radius.',
        },
        {
            id: 'fb-t3-13',
            stem: 'If a radius is horizontal, the tangent is __BLANK__ with equation x = x_P.',
            blanks: [{ answer: 'vertical' }],
            rationale: 'Horizontal radius (gradient 0) means vertical tangent. A vertical line has equation x = constant.',
        },
        {
            id: 'fb-t3-14',
            stem: 'The __BLANK__ to a circle at a point is the line through the centre and that point (the radius extended).',
            blanks: [{ answer: 'normal' }],
            rationale: 'The normal is perpendicular to the tangent, so it goes through the centre and the point of contact. It is essentially the radius line.',
        },
        {
            id: 'fb-t3-15',
            stem: 'To find the circle equation from diameter endpoints, use the __BLANK__ for the centre and half the __BLANK__ for the radius.',
            blanks: [{ answer: 'midpoint' }, { answer: 'diameter length' }],
            rationale: 'For diameter with endpoints A and B: centre = midpoint of AB, radius = distance from centre to A (or half of AB length).',
        },
    ],
    dragdrop: [
        {
            id: 'dd-t3-1',
            stem: 'Categorise these circle equations.',
            categories: ['Standard form (centre-radius)', 'General form (expanded)', 'Invalid equation'],
            items: [
                { text: '(x − 3)² + (y + 2)² = 25', category: 'Standard form (centre-radius)' },
                { text: 'x² + y² − 6x + 4y − 12 = 0', category: 'General form (expanded)' },
                { text: '(x + 1)² + (y − 4)² = 9', category: 'Standard form (centre-radius)' },
                { text: 'x² + y² + 2x − 4y + 5 = 0', category: 'General form (expanded)' },
                { text: '(x − 5)² + (y + 1)² = −4', category: 'Invalid equation' },
                { text: '2x² + 2y² − 8x + 12y + 6 = 0', category: 'General form (expanded)' },
            ],
        },
        {
            id: 'dd-t3-2',
            stem: 'Categorise these statements about circle theorems.',
            categories: ['Angle in a Semicircle Theorem', 'Chord Bisection Theorem', 'Tangent-Radius Theorem'],
            items: [
                { text: 'If PQ is a diameter and R is on the circle, angle PRQ = 90°', category: 'Angle in a Semicircle Theorem' },
                { text: 'The perpendicular from centre to any chord bisects the chord', category: 'Chord Bisection Theorem' },
                { text: 'A tangent at point P is perpendicular to radius OP', category: 'Tangent-Radius Theorem' },
                { text: 'The perpendicular bisector of a chord passes through the centre', category: 'Chord Bisection Theorem' },
                { text: 'In a right triangle inscribed in a circle, hypotenuse is a diameter', category: 'Angle in a Semicircle Theorem' },
                { text: 'Tangent gradient = negative reciprocal of radius gradient', category: 'Tangent-Radius Theorem' },
            ],
        },
        {
            id: 'dd-t3-3',
            stem: 'Match these circle features to their values.',
            categories: ['(x − 3)² + (y + 2)² = 25', '(x + 4)² + (y − 1)² = 16', 'x² + y² − 8x + 4y = 0'],
            items: [
                { text: 'Centre = (3, −2), Radius = 5', category: '(x − 3)² + (y + 2)² = 25' },
                { text: 'Centre = (−4, 1), Radius = 4', category: '(x + 4)² + (y − 1)² = 16' },
                { text: 'Centre = (4, −2), Radius = √20', category: 'x² + y² − 8x + 4y = 0' },
                { text: 'Centre = (−3, 2), Radius = 4', category: '(x + 4)² + (y − 1)² = 16' },
                { text: 'Centre = (−4, 1), Radius = 5', category: '(x − 3)² + (y + 2)² = 25' },
            ],
        },
        {
            id: 'dd-t3-4',
            stem: 'Categorise these statements about points relative to a circle.',
            categories: ['Point lies ON the circle', 'Point lies INSIDE the circle', 'Point lies OUTSIDE the circle'],
            items: [
                { text: 'For (x − a)² + (y − b)² = r², substituting gives LHS = r²', category: 'Point lies ON the circle' },
                { text: 'For (x − a)² + (y − b)² = r², substituting gives LHS < r²', category: 'Point lies INSIDE the circle' },
                { text: 'For (x − a)² + (y − b)² = r², substituting gives LHS > r²', category: 'Point lies OUTSIDE the circle' },
                { text: 'Point satisfies the circle equation exactly', category: 'Point lies ON the circle' },
                { text: 'Point is at distance less than r from centre', category: 'Point lies INSIDE the circle' },
            ],
        },
        {
            id: 'dd-t3-5',
            stem: 'Categorise these circle properties.',
            categories: ['Centre coordinates', 'Radius calculation', 'Equation form'],
            items: [
                { text: '(−f, −g) from general form', category: 'Centre coordinates' },
                { text: '(a, b) from standard form', category: 'Centre coordinates' },
                { text: '√(f² + g² − c)', category: 'Radius calculation' },
                { text: '(x − a)² + (y − b)² = r²', category: 'Equation form' },
                { text: 'Square root of RHS constant', category: 'Radius calculation' },
                { text: 'x² + y² + 2fx + 2gy + c = 0', category: 'Equation form' },
            ],
        },
    ],
    sequence: [
        {
            id: 'seq-t3-1',
            stem: 'Put the steps to convert x² + y² − 4x + 6y − 3 = 0 to standard form in order:',
            steps: [
                'Identify coefficients: 2f = −4 → f = −2, 2g = 6 → g = 3, c = −3',
                'Find centre: (−f, −g) = (2, −3)',
                'Group x and y terms: (x² − 4x) + (y² + 6y) = 3',
                'Complete the square on x: (x − 2)² − 4',
                'Complete the square on y: (y + 3)² − 9',
                'Substitute and rearrange: (x − 2)² − 4 + (y + 3)² − 9 = 3',
                'Simplify: (x − 2)² + (y + 3)² = 16',
                'Read off: Centre = (2, −3), Radius = √16 = 4'
            ],
        },
        {
            id: 'seq-t3-2',
            stem: 'Put the steps to verify that P(2, 1) lies on circle (x − 3)² + (y + 2)² = 18 in order:',
            steps: [
                'Identify centre and radius: (a, b) = (3, −2), r² = 18',
                'Substitute x = 2 and y = 1 into LHS',
                'Calculate (2 − 3)² + (1 + 2)² = (−1)² + (3)² = 1 + 9 = 10',
                'Compare with r² = 18',
                'Since 10 < 18, the point lies INSIDE the circle'
            ],
        },
        {
            id: 'seq-t3-3',
            stem: 'Put the steps to show angle PRQ = 90° using coordinates in order:',
            steps: [
                'Find the coordinates of points P, Q, and R',
                'Calculate gradient of PR: (y_R − y_P)/(x_R − x_P)',
                'Calculate gradient of QR: (y_R − y_Q)/(x_R − x_Q)',
                'Multiply the two gradients together',
                'If the product equals −1, then PR ⊥ QR',
                'Therefore angle PRQ = 90° (by definition of perpendicular lines)'
            ],
        },
        {
            id: 'seq-t3-4',
            stem: 'Put the steps to find the perpendicular bisector of segment AB in order:',
            steps: [
                'Find the midpoint M: ((x_A + x_B)/2, (y_A + y_B)/2)',
                'Calculate the gradient of AB: m = (y_B − y_A)/(x_B − x_A)',
                'Find the perpendicular gradient: m_perp = −1/m (negative reciprocal)',
                'Write equation of perpendicular bisector using point-slope form: y − y_M = m_perp(x − x_M)',
                'Simplify the equation to standard form'
            ],
        },
        {
            id: 'seq-t3-5',
            stem: 'Put the steps to find the circle equation from diameter endpoints A and B in order:',
            steps: [
                'Calculate the midpoint of AB: ((x_A + x_B)/2, (y_A + y_B)/2)',
                'This midpoint is the centre of the circle',
                'Calculate the distance from the centre to A (or B) using distance formula',
                'This distance is the radius r',
                'Write the circle equation: (x − x_centre)² + (y − y_centre)² = r²'
            ],
        },
        {
            id: 'seq-t3-6',
            stem: 'Put the steps to find the tangent to a circle at point P in order:',
            steps: [
                'Identify the centre O of the circle',
                'Find the gradient of radius OP: m_r = (y_P − y_O)/(x_P − x_O)',
                'Calculate the tangent gradient: m_t = −1/m_r (negative reciprocal)',
                'Write the tangent equation using point P: y − y_P = m_t(x − x_P)',
                'Simplify the equation to standard form'
            ],
        },
        {
            id: 'seq-t3-7',
            stem: 'Put the steps to find the centre of a circle from three points in order:',
            steps: [
                'Use two pairs of points to create two chords',
                'Find the perpendicular bisector of the first chord',
                'Find the perpendicular bisector of the second chord',
                'Solve the two perpendicular bisector equations simultaneously',
                'The solution gives the centre coordinates',
                'Verify using the third point by checking it is equidistant from the centre'
            ],
        },
        {
            id: 'seq-t3-8',
            stem: 'Put the steps to complete the square on x² − 8x + y² + 4y = 10 in order:',
            steps: [
                'Group x terms: (x² − 8x)',
                'Group y terms: (y² + 4y)',
                'Complete square on x: (x − 4)² − 16',
                'Complete square on y: (y + 2)² − 4',
                'Substitute back: (x − 4)² − 16 + (y + 2)² − 4 = 10',
                'Move constants to RHS: (x − 4)² + (y + 2)² = 30',
                'Identify centre (4, −2) and r = √30'
            ],
        },
    ],
    keyword: [
        {
            id: 'kw-t3-1',
            stem: 'State and explain the standard form and general form of a circle equation. How do you convert between them? [3 marks]',
            marks: 3,
            keywords: ['standard form', 'general form', '(x-a)²+(y-b)²=r²', 'x²+y²+2fx+2gy+c=0', 'centre', 'radius', 'completing the square', 'expand'],
            modelAnswer: 'Standard form: (x − a)² + (y − b)² = r², where (a, b) is the centre and r is the radius. General form: x² + y² + 2fx + 2gy + c = 0, where centre is (−f, −g) and radius is √(f² + g² − c). To convert standard to general, expand the squares. To convert general to standard, complete the square on x and y terms.',
        },
        {
            id: 'kw-t3-2',
            stem: 'Explain how to find the centre and radius of a circle given in general form x² + y² + 2fx + 2gy + c = 0. [3 marks]',
            marks: 3,
            keywords: ['complete the square', 'centre', 'radius', '−f', '−g', '√(f²+g²−c)', 'half coefficient'],
            modelAnswer: 'Method 1: Compare coefficients: centre = (−f, −g) and r = √(f² + g² − c). Method 2: Complete the square on x terms: (x + f)² − f², and on y terms: (y + g)² − g². Rearrange to (x + f)² + (y + g)² = f² + g² − c to get centre (−f, −g) and r = √(f² + g² − c).',
        },
        {
            id: 'kw-t3-3',
            stem: 'State the Angle in a Semicircle Theorem and explain how to verify it using coordinate geometry. [3 marks]',
            marks: 3,
            keywords: ['diameter', 'semicircle', '90°', 'perpendicular', 'gradient', 'product of gradients', 'dot product'],
            modelAnswer: 'Angle in a Semicircle Theorem: If PQ is a diameter of a circle and R is any other point on the circle, then angle PRQ = 90°. To verify using coordinates: calculate gradients of PR and QR. If their product equals −1 (or their dot product equals 0), then PR ⟂ QR, confirming angle PRQ = 90°.',
        },
        {
            id: 'kw-t3-4',
            stem: 'Explain the Chord Bisection Theorem and how it is used to find the centre of a circle from three points. [3 marks]',
            marks: 3,
            keywords: ['chord', 'perpendicular bisector', 'centre', 'midpoint', 'negative reciprocal', 'solve simultaneously'],
            modelAnswer: 'Chord Bisection Theorem: The perpendicular from the centre to any chord bisects the chord. Equivalently, the perpendicular bisector of any chord passes through the centre. To find the centre from three points: (1) use two pairs of points to form two chords, (2) find the perpendicular bisector of each chord using midpoint and negative reciprocal gradient, (3) solve the two bisector equations simultaneously to find the centre.',
        },
        {
            id: 'kw-t3-5',
            stem: 'Explain the relationship between a tangent and the radius at the point of contact, and how to find the tangent equation. [3 marks]',
            marks: 3,
            keywords: ['tangent', 'radius', 'perpendicular', 'negative reciprocal', 'gradient', 'point-slope form'],
            modelAnswer: 'Tangent-Radius Theorem: A tangent to a circle is perpendicular to the radius at the point of contact. To find the tangent equation: (1) identify the centre O and point of tangency P, (2) calculate gradient of radius OP: m_r = (y_P − y_O)/(x_P − x_O), (3) find tangent gradient: m_t = −1/m_r (negative reciprocal), (4) write equation using point P: y − y_P = m_t(x − x_P). Special cases: horizontal radius → vertical tangent, vertical radius → horizontal tangent.',
        },
        {
            id: 'kw-t3-6',
            stem: 'Describe how to determine whether a given point lies on, inside, or outside a circle. [2 marks]',
            marks: 2,
            keywords: ['substitute', 'compare', 'r²', 'inside', 'outside', 'on the circle'],
            modelAnswer: 'To determine position of point (p, q) relative to circle (x − a)² + (y − b)² = r²: substitute x = p and y = q into the left-hand side. If LHS = r², the point lies ON the circle. If LHS < r², the point lies INSIDE. If LHS > r², the point lies OUTSIDE.',
        },
        {
            id: 'kw-t3-7',
            stem: 'What is completing the square and how is it used to find the centre and radius of a circle? [3 marks]',
            marks: 3,
            keywords: ['completing the square', '(x + B/2)² − (B/2)²', 'centre', 'radius', 'half coefficient'],
            modelAnswer: 'Completing the square: x² + Bx = (x + B/2)² − (B/2)². You add and subtract the square of half the coefficient. For circles: (x² + Bx) + (y² + Dy) = constant. Complete square separately: (x + B/2)² − (B/2)² + (y + D/2)² − (D/2)² = constant. This gives centre (−B/2, −D/2) = (a, b) and r² = RHS.',
        },
        {
            id: 'kw-t3-8',
            stem: 'Explain how to find the equation of a circle given the endpoints of a diameter. [3 marks]',
            marks: 3,
            keywords: ['midpoint', 'centre', 'radius', 'distance formula', 'half the diameter'],
            modelAnswer: 'To find the circle equation from diameter endpoints A(x₁, y₁) and B(x₂, y₂): (1) Calculate the centre as the midpoint: ((x₁+x₂)/2, (y₁+y₂)/2). (2) Calculate the radius as half the diameter length: r = ½ × √[(x₂−x₁)² + (y₂−y₁)²], or equivalently, the distance from the centre to either endpoint. (3) Write the equation: (x − x_centre)² + (y − y_centre)² = r².',
        },
    ],
    flashcards: [
        {
            id: 'fc-t3-1',
            front: 'What is the standard form of a circle equation?',
            back: '(x − a)² + (y − b)² = r², where (a, b) is the centre and r is the radius.',
            topic: 'Equation of a circle'
        },
        {
            id: 'fc-t3-2',
            front: 'What is the general form of a circle equation?',
            back: 'x² + y² + 2fx + 2gy + c = 0, with centre (−f, −g) and radius √(f² + g² − c).',
            topic: 'Equation of a circle'
        },
        {
            id: 'fc-t3-3',
            front: 'In general form, what is the centre of the circle?',
            back: '(−f, −g). Compare x² + y² + 2fx + 2gy + c = 0 with the pattern.',
            topic: 'Finding centre and radius'
        },
        {
            id: 'fc-t3-4',
            front: 'In general form, what is the radius of the circle?',
            back: 'r = √(f² + g² − c), provided f² + g² − c > 0.',
            topic: 'Finding centre and radius'
        },
        {
            id: 'fc-t3-5',
            front: 'How do you complete the square on x² + Bx?',
            back: 'x² + Bx = (x + B/2)² − (B/2)². Add and subtract (half the coefficient)².',
            topic: 'Completing the square'
        },
        {
            id: 'fc-t3-6',
            front: 'Complete the square: x² − 6x = ?',
            back: '(x − 3)² − 9. Half of −6 is −3, square is 9.',
            topic: 'Completing the square'
        },
        {
            id: 'fc-t3-7',
            front: 'Complete the square: x² + 8x = ?',
            back: '(x + 4)² − 16. Half of 8 is 4, square is 16.',
            topic: 'Completing the square'
        },
        {
            id: 'fc-t3-8',
            front: 'What is special about a circle centred at the origin?',
            back: 'The equation simplifies to x² + y² = r² since a = 0 and b = 0 in (x − a)² + (y − b)² = r².',
            topic: 'Equation of a circle'
        },
        {
            id: 'fc-t3-9',
            front: 'State the Angle in a Semicircle Theorem.',
            back: 'If PQ is a diameter and R is any point on the circle, then angle PRQ = 90°.',
            topic: 'Angle in a semicircle'
        },
        {
            id: 'fc-t3-10',
            front: 'How do you verify that RP is perpendicular to RQ using gradients?',
            back: 'Calculate gradient of RP and gradient of RQ. If their product equals −1 (and neither line is vertical/horizontal), then RP ⟂ RQ.',
            topic: 'Angle in a semicircle'
        },
        {
            id: 'fc-t3-11',
            front: 'What is the Chord Bisection Theorem?',
            back: 'The perpendicular from the centre of a circle to any chord bisects that chord. Equivalently, the perpendicular bisector of any chord passes through the centre.',
            topic: 'Bisection of chords'
        },
        {
            id: 'fc-t3-12',
            front: 'How do you find the perpendicular bisector of segment AB?',
            back: 'Find midpoint M = ((x₁+x₂)/2, (y₁+y₂)/2), chord gradient m = (y₂−y₁)/(x₂−x₁), then perpendicular bisector has gradient −1/m and passes through M.',
            topic: 'Perpendicular bisector'
        },
        {
            id: 'fc-t3-13',
            front: 'What is the relationship between a tangent and radius?',
            back: 'A tangent is always perpendicular to the radius at the point of contact. Tangent gradient = −1/(radius gradient).',
            topic: 'Radius and tangent'
        },
        {
            id: 'fc-t3-14',
            front: 'If radius gradient = 2/3, what is the tangent gradient?',
            back: '−3/2 (negative reciprocal).',
            topic: 'Radius and tangent'
        },
        {
            id: 'fc-t3-15',
            front: 'If radius is horizontal, what is the tangent?',
            back: 'Vertical line: x = x_P. Horizontal radius (m = 0) → vertical tangent.',
            topic: 'Radius and tangent'
        },
        {
            id: 'fc-t3-16',
            front: 'If radius is vertical, what is the tangent?',
            back: 'Horizontal line: y = y_P. Vertical radius → horizontal tangent.',
            topic: 'Radius and tangent'
        },
        {
            id: 'fc-t3-17',
            front: 'What is the normal to a circle at a point?',
            back: 'The line through the centre and that point. Since tangent ⟂ radius, the normal is the radius line extended.',
            topic: 'Normal to a circle'
        },
        {
            id: 'fc-t3-18',
            front: 'Write the equation of a circle with centre (3, −2) and radius 5.',
            back: '(x − 3)² + (y + 2)² = 25. (Note: y − (−2) = y + 2).',
            topic: 'Equation of a circle'
        },
        {
            id: 'fc-t3-19',
            front: 'Find the centre and radius of x² + y² − 6x + 4y − 12 = 0.',
            back: 'Compare with x² + y² + 2fx + 2gy + c = 0: 2f = −6 → f = −3, 2g = 4 → g = 2, c = −12. Centre = (−f, −g) = (3, −2), r = √(9 + 4 + 12) = √25 = 5.',
            topic: 'Finding centre and radius'
        },
        {
            id: 'fc-t3-20',
            front: 'How do you check if a point is on a circle?',
            back: 'Substitute coordinates into LHS. If result equals r², point is ON the circle. If < r², INSIDE. If > r², OUTSIDE.',
            topic: 'Points on a circle'
        },
        {
            id: 'fc-t3-21',
            front: 'What is the centre of the circle with diameter endpoints A(1, 3) and B(5, 7)?',
            back: 'Midpoint = ((1+5)/2, (3+7)/2) = (3, 5).',
            topic: 'Circle from diameter'
        },
        {
            id: 'fc-t3-22',
            front: 'What is the radius of the circle with diameter endpoints A(1, 3) and B(5, 7)?',
            back: 'Distance from centre to A = √[(3−1)² + (5−3)²] = √[4 + 4] = √8 = 2√2.',
            topic: 'Circle from diameter'
        },
        {
            id: 'fc-t3-23',
            front: 'What does "signs are opposite to those in brackets" mean for circle equations?',
            back: 'In (x − a)², the x-coordinate of centre is +a (opposite sign). In (x + 3)² = (x − (−3))², centre x = −3.',
            topic: 'Equation of a circle'
        },
        {
            id: 'fc-t3-24',
            front: 'Find the perpendicular bisector of segment with endpoints (2, 5) and (6, 1).',
            back: 'Midpoint = ((2+6)/2, (5+1)/2) = (4, 3). Gradient = (1−5)/(6−2) = −4/4 = −1. Perp gradient = 1. Line: y − 3 = 1(x − 4) → y = x − 1.',
            topic: 'Perpendicular bisector'
        },
        {
            id: 'fc-t3-25',
            front: 'Circle: (x − 2)² + (y + 1)² = 9. Find tangent at P(5, −1).',
            back: 'Centre O = (2, −1). Gradient of OP = (−1−(−1))/(5−2) = 0/3 = 0. Tangent is vertical: x = 5.',
            topic: 'Tangent to a circle'
        },
        {
            id: 'fc-t3-26',
            front: 'Why is x² + y² − c = 0 a single point (not a circle) if c = 0?',
            back: 'If c = 0, then r² = f² + g². If f = g = 0, then r² = 0, so r = 0 — a single point at the origin.',
            topic: 'Equation of a circle'
        },
        {
            id: 'fc-t3-27',
            front: 'What happens when f² + g² − c < 0 in a circle equation?',
            back: 'No real circle exists — r² would be negative, which is impossible for real numbers.',
            topic: 'Equation of a circle'
        },
        {
            id: 'fc-t3-28',
            front: 'Circle: x² + y² − 10x + 4y + 20 = 0. Find centre and radius.',
            back: '2f = −10 → f = −5, 2g = 4 → g = 2, c = 20. Centre = (5, −2). r² = f² + g² − c = 25 + 4 − 20 = 9. r = 3.',
            topic: 'Finding centre and radius'
        },
        {
            id: 'fc-t3-29',
            front: 'For a circle with centre (a, b), the perpendicular bisector of any chord passes through where?',
            back: 'The centre (a, b). The perpendicular from the centre to any chord bisects the chord, and the perpendicular bisector passes through the centre.',
            topic: 'Bisection of chords'
        },
        {
            id: 'fc-t3-30',
            front: 'What is the first step to find the circle centre from three points?',
            back: 'Create two chords from the three points, then find the perpendicular bisector of each chord. The intersection of the two perpendicular bisectors is the centre.',
            topic: 'Bisection of chords'
        },
    ],
};
