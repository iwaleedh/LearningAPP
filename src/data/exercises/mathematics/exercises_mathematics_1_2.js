export const exercises_mathematics_1_2 = {
    mcq: [
        // Basic coordinate geometry
        {
            id: 'mcq-1',
            stem: 'What is the distance between points A(2, 3) and B(6, 7)?',
            options: ['√20', '5', '√32', '4√5'],
            correctAnswer: 0,
            rationale: 'Using distance formula: d = √[(6-2)² + (7-3)²] = √[16 + 16] = √32 = 4√2.',
            topic: 'Basic coordinate geometry'
        },
        {
            id: 'mcq-2',
            stem: 'What is the midpoint of the line segment joining A(1, 4) and B(7, 8)?',
            options: ['(4, 6)', '(3.5, 6)', '(4, 6)', '(3.5, 5)'],
            correctAnswer: 0,
            rationale: 'Midpoint M = ((x₁+x₂)/2, (y₁+y₂)/2) = ((1+7)/2, (4+8)/2) = (4, 6).',
            topic: 'Basic coordinate geometry'
        },
        {
            id: 'mcq-3',
            stem: 'What is the gradient of the line passing through A(1, 1) and B(5, 3)?',
            options: ['1/2', '2', '1/4', '4'],
            correctAnswer: 0,
            rationale: 'Gradient m = (y₂-y₁)/(x₂-x₁) = (3-1)/(5-1) = 2/2 = 1.',
            topic: 'Basic coordinate geometry'
        },
        {
            id: 'mcq-4',
            stem: 'What is the equation of the line with gradient 2 passing through (0, 3)?',
            options: ['y = 2x + 3', 'y = 2x - 3', 'y = 3x + 2', 'y = x + 3'],
            correctAnswer: 0,
            rationale: 'Using point-slope form y - y₁ = m(x - x₁): y - 3 = 2(x - 0), so y - 3 = 2x, giving y = 2x + 3.',
            topic: 'Equation of a straight line'
        },
        {
            id: 'mcq-5',
            stem: 'Which form of straight line equation has integer coefficients a and b in ax + by + c = 0?',
            options: ['y = mx + c', 'y - y₁ = m(x - x₁)', 'ax + by + c = 0', 'y = (y₂-y₁)/(x₂-x₁)'],
            correctAnswer: 2,
            rationale: 'The general form with integer coefficients is ax + by + c = 0, where a, b, c are integers. y = mx + c also works but m and c may not be integers.',
            topic: 'Equation of a straight line'
        },
        {
            id: 'mcq-6',
            stem: 'What is the equation of a vertical line through x = 5?',
            options: ['x = 5y', 'x = 5', 'y = 5', 'y = 5x'],
            correctAnswer: 1,
            rationale: 'A vertical line has the form x = k, where k is constant. The gradient is undefined. This is because all points have the same x-coordinate.',
            topic: 'Equation of a straight line'
        },
        {
            id: 'mcq-7',
            stem: 'What is the equation of a horizontal line through y = 4?',
            options: ['y = 4x', 'y = x + 4', 'y = 4', 'y = 4 + x'],
            correctAnswer: 2,
            rationale: 'A horizontal line has the form y = k, where k is constant. The gradient m = 0 because y does not change as x changes.',
            topic: 'Equation of a straight line'
        },
        // Parallel and perpendicular gradients
        {
            id: 'mcq-8',
            stem: 'What is the gradient of a line perpendicular to y = 4x + 1?',
            options: ['4', '-4', '1/4', '-1/4'],
            correctAnswer: 3,
            rationale: 'Perpendicular gradient is the negative reciprocal. If m₁ = 4, then m₂ = -1/4.',
            topic: 'Parallel and perpendicular gradients'
        },
        {
            id: 'mcq-9',
            stem: 'If two lines have gradients 2/3 and -3/2, what is the relationship between them?',
            options: ['Parallel', 'Perpendicular', 'Neither', 'Cannot determine'],
            correctAnswer: 0,
            rationale: 'Parallel lines have the same gradient. Since 2/3 = 2/3, these lines are parallel (or coincident).',
            topic: 'Parallel and perpendicular gradients'
        },
        {
            id: 'mcq-10',
            stem: 'What is the product of gradients of two perpendicular lines?',
            options: ['0', '1', '-1', 'Undefined'],
            correctAnswer: 1,
            rationale: 'For perpendicular lines, the product of their gradients is -1. m₁ × m₂ = -1.',
            topic: 'Parallel and perpendicular gradients'
        },
        {
            id: 'mcq-11',
            stem: 'A line has gradient 1/2. What is the gradient of a line perpendicular to it?',
            options: ['2', '-2', '-1/2', '-2'],
            correctAnswer: 2,
            rationale: 'Perpendicular gradient is the negative reciprocal. If m = 1/2, perpendicular m = -1/(1/2) = -2.',
            topic: 'Parallel and perpendicular gradients'
        },
        {
            id: 'mcq-12',
            stem: 'Which line is perpendicular to y = -3x + 5?',
            options: ['y = 3x + 5', 'y = (1/3)x + 5', 'y = -3x - 5', 'y = -3x + 2'],
            correctAnswer: 1,
            rationale: 'Given gradient m₁ = -3. Perpendicular m₂ = -1/m₁ = -1/(-3) = 1/3.',
            topic: 'Parallel and perpendicular gradients'
        },
        {
            id: 'mcq-13',
            stem: 'What is the relationship between gradients of lines y = 5x - 2 and y = 5x + 7?',
            options: ['Parallel', 'Perpendicular', 'Neither', 'Cannot determine'],
            correctAnswer: 0,
            rationale: 'Both lines have gradient 5, so they are parallel (distinct parallel lines have different y-intercepts).',
            topic: 'Parallel and perpendicular gradients'
        },
        // Collinear points
        {
            id: 'mcq-14',
            stem: 'Which condition must be satisfied for three points to be collinear?',
            options: ['They must form a right triangle', 'Gradients between all pairs must be equal', 'They must have the same x-coordinate', 'The sum of their coordinates must be zero'],
            correctAnswer: 1,
            rationale: 'Three points are collinear if they all lie on the same straight line. This is verified by checking that the gradient between any two pairs is the same, or that the points share a common coordinate.',
            topic: 'Collinear points'
        },
        {
            id: 'mcq-15',
            stem: 'Are points A(1, 3), B(3, 7), and C(5, 11) collinear?',
            options: ['Yes, because AB and BC have equal gradients', 'No, because AB and AC have different gradients', 'Yes, because they form a triangle', 'Cannot determine without more information'],
            correctAnswer: 0,
            rationale: 'Gradient AB = (7-3)/(3-1) = 4/2 = 2. Gradient BC = (11-7)/(5-3) = 4/2 = 2. Equal gradients and shared point B → collinear.',
            topic: 'Collinear points'
        },
        {
            id: 'mcq-16',
            stem: 'Points A(2, 1), B(4, 5), and C are collinear. What is the x-coordinate of C?',
            options: ['5', '6', '8', 'Cannot determine'],
            correctAnswer: 1,
            rationale: 'Gradient AB = (5-1)/(4-2) = 4/2 = 2. For collinearity, BC must have same gradient: (x_C-5)/(x_C-4) = 2, giving x_C - 5 = 2(x_C - 4), so x_C = 6.',
            topic: 'Collinear points'
        },
        {
            id: 'mcq-17',
            stem: 'Points P(1, 2), Q(4, y), and R are collinear with R as midpoint of PQ. What are the coordinates of R?',
            options: ['(2.5, y)', '(2, y)', '(3, y)', '(2.5, (y+2)/2)'],
            correctAnswer: 0,
            rationale: 'R is midpoint of PQ: ((1+4)/2, (2+y)/2) = (2.5, (y+2)/2). Wait, R being midpoint of PQ means R = midpoint of P and Q, not necessarily on the line. Given R is on line with P and Q, if R is midpoint of P and Q, that would require specific conditions. Let me recalculate: P(1,2), Q(4,y). If R is midpoint of PQ, then R = ((1+4)/2, (2+y)/2) = (2.5, (y+2)/2).',
            topic: 'Collinear points'
        },
    ],
    fillblank: [
        {
            id: 'fb-1',
            stem: 'The distance formula between (x₁, y₁) and (x₂, y₂) is d = __BLANK__.',
            blanks: [{ answer: '√[(x₂-x₁)²+(y₂-y₁)²]' }],
            rationale: 'Distance is found using Pythagoras theorem on the horizontal and vertical differences.'
        },
        {
            id: 'fb-2',
            stem: 'The midpoint formula is M = (__BLANK__, __BLANK__).',
            blanks: [{ answer: '(x₁+x₂)/2' }, { answer: '(y₁+y₂)/2' }],
            rationale: 'Midpoint is the average of each coordinate pair.'
        },
        {
            id: 'fb-3',
            stem: 'The gradient formula is m = __BLANK__.',
            blanks: [{ answer: '(y₂-y₁)/(x₂-x₁)' }],
            rationale: 'Gradient measures steepness, calculated as rise divided by run.'
        },
        {
            id: 'fb-4',
            stem: 'A line through (0, 3) with gradient 2 has equation y = __BLANK__.',
            blanks: [{ answer: '2x+3' }],
            rationale: 'Using y - y₁ = m(x - x₁): y - 3 = 2(x - 0) → y = 2x + 3.'
        },
        {
            id: 'fb-5',
            stem: 'The general form with integer coefficients is __BLANK__.',
            blanks: [{ answer: 'ax+by+c=0' }],
            rationale: 'This form is useful when answers are required with integer coefficients.'
        },
        {
            id: 'fb-6',
            stem: 'A vertical line through x = 7 has equation __BLANK__.',
            blanks: [{ answer: 'x=7' }],
            rationale: 'Vertical lines have undefined gradient and the form x = constant.'
        },
        {
            id: 'fb-7',
            stem: 'A horizontal line through y = 4 has equation __BLANK__.',
            blanks: [{ answer: 'y=4' }],
            rationale: 'Horizontal lines have gradient 0 and the form y = constant.'
        },
        {
            id: 'fb-8',
            stem: 'For perpendicular lines, the product of gradients m₁ × m₂ = __BLANK__.',
            blanks: [{ answer: '-1' }],
            rationale: 'The product of perpendicular line gradients is always -1.'
        },
        {
            id: 'fb-9',
            stem: 'If a line has gradient 3, a perpendicular line has gradient __BLANK__.',
            blanks: [{ answer: '-1/3' }],
            rationale: 'Perpendicular gradient is the negative reciprocal: m₂ = -1/m₁ = -1/3.'
        },
        {
            id: 'fb-10',
            stem: 'Parallel lines have __BLANK__ gradients.',
            blanks: [{ answer: 'the same' }],
            rationale: 'Two lines are parallel if and only if their gradients are equal (m₁ = m₂).'
        },
        {
            id: 'fb-11',
            stem: 'The point-slope form of a line is y - y₁ = __BLANK__(x - x₁).',
            blanks: [{ answer: 'm' }],
            rationale: 'This form is used when the gradient m and a point (x₁, y₁) are known.'
        },
        {
            id: 'fb-12',
            stem: 'Three points are collinear if the gradients between __BLANK__ pairs are equal.',
            blanks: [{ answer: 'all' }],
            rationale: 'For collinearity, check that the gradient is consistent regardless of which two points you compare.'
        },
    ],
    dragdrop: [
        {
            id: 'dd-1',
            stem: 'Categorise these lines by their gradient type.',
            categories: ['Positive Gradient (Uphill)', 'Negative Gradient (Downhill)', 'Zero Gradient (Horizontal)', 'Undefined (Vertical)'],
            items: [
                { text: 'y = 3x + 2', category: 'Positive Gradient (Uphill)' },
                { text: 'y = -2x + 5', category: 'Negative Gradient (Downhill)' },
                { text: 'y = 7', category: 'Zero Gradient (Horizontal)' },
                { text: 'x = 4', category: 'Undefined (Vertical)' },
                { text: 'y = 0.5x - 1', category: 'Positive Gradient (Uphill)' },
                { text: 'y = -x/3 + 2', category: 'Negative Gradient (Downhill)' },
                { text: 'x = -3', category: 'Undefined (Vertical)' },
                { text: 'y = 5', category: 'Zero Gradient (Horizontal)' },
            ],
        },
        {
            id: 'dd-2',
            stem: 'Sort these line relationships.',
            categories: ['Parallel Lines (m₁ = m₂)', 'Perpendicular Lines (m₁m₂ = -1)', 'Neither Parallel nor Perpendicular'],
            items: [
                { text: 'y = 2x and y = 2x - 5', category: 'Parallel Lines (m₁ = m₂)' },
                { text: 'y = 3x and y = -x/3', category: 'Perpendicular Lines (m₁m₂ = -1)' },
                { text: 'y = x + 4 and y = -x', category: 'Neither Parallel nor Perpendicular' },
                { text: 'y = 4x + 1 and y = (1/4)x', category: 'Perpendicular Lines (m₁m₂ = -1)' },
                { text: 'y = -2x and y = 2x + 3', category: 'Neither Parallel nor Perpendicular' },
                { text: 'y = 5 and y = -5', category: 'Parallel Lines (m₁ = m₂)' },
            ],
        },
        {
            id: 'dd-3',
            stem: 'Categorise these coordinate geometry problems.',
            categories: ['Distance Calculation', 'Midpoint Finding', 'Gradient Calculation', 'Collinearity Check'],
            items: [
                { text: 'Find distance between (1,2) and (5,7)', category: 'Distance Calculation' },
                { text: 'Find midpoint of segment from (0,0) to (8,6)', category: 'Midpoint Finding' },
                { text: 'Calculate gradient between (2,3) and (6,9)', category: 'Gradient Calculation' },
                { text: 'Verify if A(1,3), B(4,7), C(7,11) are collinear', category: 'Collinearity Check' },
                { text: 'Find distance between (-3,-2) and (4,5)', category: 'Distance Calculation' },
                { text: 'Find midpoint of segment from (2,-1) to (10,3)', category: 'Midpoint Finding' },
                { text: 'Calculate gradient of line through (1,1) and (3,5)', category: 'Gradient Calculation' },
                { text: 'Verify if P(0,4), Q(2,6), R(4,8) are collinear', category: 'Collinearity Check' },
            ],
        },
        {
            id: 'dd-4',
            stem: 'Sort these special line cases.',
            categories: ['Horizontal Line (m = 0)', 'Vertical Line (undefined)', 'Through Origin (c = 0)', 'General Line (both m and c non-zero)'],
            items: [
                { text: 'y = 5', category: 'Horizontal Line (m = 0)' },
                { text: 'x = -3', category: 'Vertical Line (undefined)' },
                { text: 'y = 2x', category: 'Through Origin (c = 0)' },
                { text: 'y = -x + 4', category: 'General Line (both m and c non-zero)' },
                { text: 'x = 7', category: 'Vertical Line (undefined)' },
                { text: 'y = 3x - 2', category: 'Through Origin (c = 0)' },
                { text: 'y = 0.5x + 1', category: 'General Line (both m and c non-zero)' },
            ],
        },
        {
            id: 'dd-5',
            stem: 'Categorise these equations by the form of straight line.',
            categories: ['Slope-Intercept (y = mx + c)', 'Point-Slope (y - y₁ = m(x - x₁))', 'General Form (ax + by + c = 0)', 'Special Vertical (x = k)'],
            items: [
                { text: 'y = 3x - 2', category: 'Slope-Intercept (y = mx + c)' },
                { text: 'y + 4 = 2(x - 3)', category: 'Point-Slope (y - y₁ = m(x - x₁))' },
                { text: '2x - 3y + 5 = 0', category: 'General Form (ax + by + c = 0)' },
                { text: 'y = 0.5x + 1', category: 'Slope-Intercept (y = mx + c)' },
                { text: 'y - 7 = 0.5(x + 2)', category: 'Point-Slope (y - y₁ = m(x - x₁))' },
                { text: '3x + 2y - 8 = 0', category: 'General Form (ax + by + c = 0)' },
                { text: 'x = 4', category: 'Special Vertical (x = k)' },
            ],
        },
        {
            id: 'dd-6',
            stem: 'Sort these pairs of points by whether they are collinear.',
            categories: ['Collinear (Same Line)', 'Not Collinear (Form Triangle)'],
            items: [
                { text: '(1,2), (3,4), (5,6)', category: 'Collinear (Same Line)' },
                { text: '(0,0), (2,1), (3,2)', category: 'Not Collinear (Form Triangle)' },
                { text: '(1,1), (2,3), (4,5)', category: 'Collinear (Same Line)' },
                { text: '(-1,-1), (1,1), (3,1)', category: 'Not Collinear (Form Triangle)' },
                { text: '(2,5), (4,7), (6,9)', category: 'Collinear (Same Line)' },
                { text: '(1,3), (5,1), (7,2)', category: 'Not Collinear (Form Triangle)' },
                { text: '(0,2), (2,4), (4,6)', category: 'Collinear (Same Line)' },
                { text: '(3,1), (5,4), (6,2)', category: 'Not Collinear (Form Triangle)' },
            ],
        },
    ],
    sequence: [
        {
            id: 'seq-1',
            stem: 'Put steps for finding distance between A(2,1) and B(8,5) in order:',
            steps: [
                'Identify coordinates: A(2,1) and B(8,5)',
                'Calculate horizontal difference: x₂ - x₁ = 8 - 2 = 6',
                'Calculate vertical difference: y₂ - y₁ = 5 - 1 = 4',
                'Square each difference: 6² = 36, 4² = 16',
                'Add squared differences: 36 + 16 = 52',
                'Take square root: d = √52 = 2√13'
            ],
        },
        {
            id: 'seq-2',
            stem: 'Put steps for finding midpoint of AB where A(3,-2) and B(7,4) in order:',
            steps: [
                'Calculate average of x-coordinates: (3 + 7)/2 = 5',
                'Calculate average of y-coordinates: (-2 + 4)/2 = 1',
                'Write midpoint: M(5, 1)'
            ],
        },
        {
            id: 'seq-3',
            stem: 'Put steps for finding equation through P(1,2) with gradient -1/2 in order:',
            steps: [
                'Use point-slope form: y - y₁ = m(x - x₁)',
                'Substitute values: y - 2 = (-1/2)(x - 1)',
                'Simplify: y - 2 = -x/2 + 1/2',
                'Rearrange: y = -x/2 + 5/2'
            ],
        },
        {
            id: 'seq-4',
            stem: 'Put steps for proving collinearity of A(1,2), B(3,6), C(5,10) in order:',
            steps: [
                'Calculate gradient AB: (6 - 2)/(3 - 1) = 4/2 = 2',
                'Calculate gradient BC: (10 - 6)/(5 - 3) = 4/2 = 2',
                'Calculate gradient AC: (10 - 2)/(5 - 1) = 8/4 = 2',
                'Since AB ≠ AC, points are NOT collinear',
                'For collinearity, need AB = BC = AC (all equal)'
            ],
        },
        {
            id: 'seq-5',
            stem: 'Put steps for finding perpendicular line to y = 4x - 1 through (3,5) in order:',
            steps: [
                'Identify gradient of given line: m₁ = 4',
                'Calculate perpendicular gradient: m₂ = -1/m₁ = -1/4',
                'Use point-slope form with point (3,5): y - 5 = (-1/4)(x - 3)',
                'Simplify: y - 5 = -x/4 + 3/4',
                'Rearrange: y = -x/4 + 23/4 = -x/4 + 5.75 = -x/4 + 23/4'
            ],
        },
        {
            id: 'seq-6',
            stem: 'Put steps for converting y = 2x - 3 to general form ax + by + c = 0 in order:',
            steps: [
                'Identify coefficients: a = 2, b = -2, c = -3',
                'Multiply by suitable number to eliminate fractions: multiply by 3',
                'Write: 6x - 3y - 9 = 0',
                'This is in the form ax + by + c = 0 with integer coefficients'
            ],
        },
    ],
    keyword: [
        {
            id: 'kw-1',
            stem: 'Define the distance formula between two points in coordinate geometry. [2 marks]',
            marks: 2,
            keywords: ['Pythagoras', 'square root', 'horizontal', 'vertical', 'differences'],
            modelAnswer: 'The distance d between points (x₁, y₁) and (x₂, y₂) is given by d = √[(x₂ - x₁)² + (y₂ - y₁)²]. This is derived from Pythagoras theorem, treating the horizontal and vertical differences as legs of a right-angled triangle.'
        },
        {
            id: 'kw-2',
            stem: 'Explain the midpoint formula and give an example. [2 marks]',
            marks: 2,
            keywords: ['average', 'x-coordinate', 'y-coordinate', '((x₁+x₂)/2', '(y₁+y₂)/2)'],
            modelAnswer: 'The midpoint M of a line segment joining (x₁, y₁) and (x₂, y₂) is the average of each pair of coordinates: M = ((x₁ + x₂)/2, (y₁ + y₂)/2). For example, the midpoint of A(1,3) and B(5,7) is ((1+5)/2, (3+7)/2) = (3, 5).'
        },
        {
            id: 'kw-3',
            stem: 'Explain how to find the equation of a line given a point and gradient. [3 marks]',
            marks: 3,
            keywords: ['point-slope', 'y - y₁ = m(x - x₁)', 'substitute', 'rearrange', 'y = mx + c'],
            modelAnswer: 'Given a point (x₁, y₁) and gradient m, use the point-slope form: y - y₁ = m(x - x₁). Substitute the known values, then rearrange to the required form. For example, with point (0,3) and gradient 2: y - 3 = 2(x - 0), giving y = 2x + 3.'
        },
        {
            id: 'kw-4',
            stem: 'Explain the condition for two lines to be parallel. [2 marks]',
            marks: 2,
            keywords: ['equal gradients', 'm₁ = m₂', 'same slope', 'never intersect'],
            modelAnswer: 'Two lines are parallel if and only if they have the same gradient, meaning m₁ = m₂. Parallel lines with different y-intercepts are distinct lines that never intersect. If they share the same y-intercept as well, they are actually the same line (coincident).'
        },
        {
            id: 'kw-5',
            stem: 'Explain the condition for two lines to be perpendicular and give the perpendicular gradient formula. [3 marks]',
            marks: 3,
            keywords: ['product', 'm₁ × m₂ = -1', 'negative reciprocal', '90 degrees', 'right angle'],
            modelAnswer: 'Two lines are perpendicular (meet at 90°) if and only if the product of their gradients equals -1. The perpendicular gradient m₂ = -1/m₁, which is the negative reciprocal of the original gradient. For example, a line with gradient 3 has a perpendicular line with gradient -1/3.'
        },
        {
            id: 'kw-6',
            stem: 'Describe the gradient of a vertical line. [1 mark]',
            marks: 1,
            keywords: ['undefined', 'infinite', 'steepness', 'x = k'],
            modelAnswer: 'A vertical line has the equation x = k, where k is a constant. The gradient is undefined because there is no horizontal change in x, only vertical change.'
        },
        {
            id: 'kw-7',
            stem: 'Describe the gradient of a horizontal line. [1 mark]',
            marks: 1,
            keywords: ['zero', 'flat', 'no steepness', 'y = k'],
            modelAnswer: 'A horizontal line has the equation y = k, where k is a constant. The gradient m = 0 because the y-coordinate does not change as x changes.'
        },
        {
            id: 'kw-8',
            stem: 'Explain what is meant by collinear points and how to verify collinearity. [3 marks]',
            marks: 3,
            keywords: ['same line', 'straight line', 'equal gradients', 'three points', 'AB = BC = AC'],
            modelAnswer: 'Three or more points are collinear if they all lie on the same straight line. To verify, calculate the gradient between two pairs of points. If all pairs of points produce the same gradient (e.g., AB = BC = AC), the points are collinear. Alternatively, if one point is the midpoint of the segment joining the other two, that also proves collinearity.'
        },
    ],
    flashcards: [
        {
            id: 'fc-1',
            front: 'What is the distance formula between (x₁, y₁) and (x₂, y₂)?',
            back: 'd = √[(x₂ - x₁)² + (y₂ - y₁)²] — derived from Pythagoras theorem.',
            topic: 'Basic coordinate geometry'
        },
        {
            id: 'fc-2',
            front: 'What is the midpoint formula?',
            back: 'M = ((x₁ + x₂)/2, (y₁ + y₂)/2) — the average of each coordinate pair.',
            topic: 'Basic coordinate geometry'
        },
        {
            id: 'fc-3',
            front: 'What is the gradient formula?',
            back: 'm = (y₂ - y₁)/(x₂ - x₁) — the steepness (rise over run).',
            topic: 'Basic coordinate geometry'
        },
        {
            id: 'fc-4',
            front: 'What are the three forms of a straight line equation?',
            back: 'y = mx + c (slope-intercept), y - y₁ = m(x - x₁) (point-slope), ax + by + c = 0 (general with integer coefficients)',
            topic: 'Equation of a straight line'
        },
        {
            id: 'fc-5',
            front: 'What is the equation of a vertical line?',
            back: 'x = k — the gradient is undefined; all points have the same x-coordinate.',
            topic: 'Equation of a straight line'
        },
        {
            id: 'fc-6',
            front: 'What is the equation of a horizontal line?',
            back: 'y = k — the gradient is 0; y is constant regardless of x.',
            topic: 'Equation of a straight line'
        },
        {
            id: 'fc-7',
            front: 'What is the condition for parallel lines?',
            back: 'm₁ = m₂ — same gradient means lines are parallel (or coincident if same intercept too).',
            topic: 'Parallel and perpendicular gradients'
        },
        {
            id: 'fc-8',
            front: 'What is the condition for perpendicular lines?',
            back: 'm₁ × m₂ = -1 — product of gradients equals -1 (negative reciprocal relationship).',
            topic: 'Parallel and perpendicular gradients'
        },
        {
            id: 'fc-9',
            front: 'What is the perpendicular gradient formula?',
            back: 'm₂ = -1/m₁ — negative reciprocal of the original gradient.',
            topic: 'Parallel and perpendicular gradients'
        },
        {
            id: 'fc-10',
            front: 'What does it mean for points to be collinear?',
            back: 'All points lie on the same straight line — verified by equal gradients between any pairs or one point being the midpoint of others.',
            topic: 'Collinear points'
        },
        {
            id: 'fc-11',
            front: 'How do you use the point-slope form?',
            back: 'y - y₁ = m(x - x₁) — when gradient m and a point (x₁, y₁) are known, substitute into this formula to find the line equation.',
            topic: 'Equation of a straight line'
        },
        {
            id: 'fc-12',
            front: 'What does the general form ax + by + c = 0 represent?',
            back: 'A line with integer coefficients a, b, c — useful when the answer requires all coefficients to be integers (e.g., 2x - 3y + 6 = 0).',
            topic: 'Equation of a straight line'
        },
        {
            id: 'fc-13',
            front: 'What is the relationship between parallel lines?',
            back: 'Same gradient (m₁ = m₂) — they never intersect unless also coincident.',
            topic: 'Parallel and perpendicular gradients'
        },
    ],
};
