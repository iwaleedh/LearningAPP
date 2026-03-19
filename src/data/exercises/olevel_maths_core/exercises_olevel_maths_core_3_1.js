export const exercises_olevel_maths_core_3_1 = {

  mcq: [
    // ── Coordinates ──
    { id: 'mcq-1', stem: 'What are the coordinates of the origin?', options: ['(1, 1)', '(0, 1)', '(0, 0)', '(1, 0)'], correctAnswer: 2, rationale: 'The origin is where the x-axis and y-axis cross, at (0, 0).', topic: 'Coordinates' },
    { id: 'mcq-2', stem: 'In the ordered pair (x, y), which value is written first?', options: ['The y-coordinate', 'The x-coordinate', 'The larger number', 'The positive number'], correctAnswer: 1, rationale: 'In an ordered pair, the x-coordinate (horizontal) is always written first.', topic: 'Coordinates' },
    { id: 'mcq-3', stem: 'The point (−3, 5) lies in which quadrant?', options: ['1st quadrant', '2nd quadrant', '3rd quadrant', '4th quadrant'], correctAnswer: 1, rationale: 'Negative x and positive y means the point is in the 2nd quadrant (top-left).', topic: 'Coordinates' },
    { id: 'mcq-4', stem: 'Which point lies in the 3rd quadrant?', options: ['(2, −4)', '(−1, 3)', '(−5, −2)', '(4, 6)'], correctAnswer: 2, rationale: 'The 3rd quadrant has both x and y negative. (−5, −2) has x = −5 and y = −2.', topic: 'Coordinates' },
    { id: 'mcq-5', stem: 'A point has coordinates (4, −3). What does the −3 tell you?', options: ['4 units left of the origin', '3 units below the x-axis', '3 units left of the y-axis', '4 units above the x-axis'], correctAnswer: 1, rationale: 'The y-coordinate −3 means the point is 3 units below the x-axis.', topic: 'Coordinates' },
    { id: 'mcq-6', stem: 'The point (0, 7) lies on which axis?', options: ['x-axis', 'y-axis', 'Both axes', 'Neither axis'], correctAnswer: 1, rationale: 'When x = 0 the point lies on the y-axis.', topic: 'Coordinates' },
    { id: 'mcq-7', stem: 'Which of these points lies on the x-axis?', options: ['(0, 5)', '(3, 3)', '(−2, 0)', '(1, −1)'], correctAnswer: 2, rationale: 'A point lies on the x-axis when its y-coordinate is 0. (−2, 0) has y = 0.', topic: 'Coordinates' },
    { id: 'mcq-8', stem: 'The point (6, −1) lies in which quadrant?', options: ['1st', '2nd', '3rd', '4th'], correctAnswer: 3, rationale: 'Positive x and negative y places the point in the 4th quadrant (bottom-right).', topic: 'Coordinates' },

    // ── Gradient of a line ──
    { id: 'mcq-9', stem: 'What is the gradient of the line passing through (1, 2) and (3, 8)?', options: ['2', '3', '5', '6'], correctAnswer: 1, rationale: 'm = (8 − 2) ÷ (3 − 1) = 6 ÷ 2 = 3.', topic: 'Gradient of a line' },
    { id: 'mcq-10', stem: 'A line goes from (0, 5) to (4, 5). What is its gradient?', options: ['0', '1', '5', 'Undefined'], correctAnswer: 0, rationale: 'm = (5 − 5) ÷ (4 − 0) = 0 ÷ 4 = 0. A horizontal line has gradient 0.', topic: 'Gradient of a line' },
    { id: 'mcq-11', stem: 'What type of gradient does a line that rises from left to right have?', options: ['Zero', 'Negative', 'Positive', 'Undefined'], correctAnswer: 2, rationale: 'A line that rises from left to right has a positive gradient.', topic: 'Gradient of a line' },
    { id: 'mcq-12', stem: 'Find the gradient of the line through (2, 7) and (5, 1).', options: ['2', '−2', '3', '−3'], correctAnswer: 1, rationale: 'm = (1 − 7) ÷ (5 − 2) = −6 ÷ 3 = −2.', topic: 'Gradient of a line' },
    { id: 'mcq-13', stem: 'A vertical line x = 4 has a gradient that is:', options: ['0', '4', 'Undefined', '1'], correctAnswer: 2, rationale: 'A vertical line has no change in x, so division by zero makes the gradient undefined.', topic: 'Gradient of a line' },
    { id: 'mcq-14', stem: 'The gradient formula is m = (y₂ − y₁) ÷ (x₂ − x₁). What does the numerator represent?', options: ['Change in x', 'Change in y', 'Sum of y-values', 'Product of coordinates'], correctAnswer: 1, rationale: 'The numerator y₂ − y₁ is the change in y (the rise).', topic: 'Gradient of a line' },
    { id: 'mcq-15', stem: 'Find the gradient of the line through (−1, 3) and (2, 9).', options: ['1', '2', '3', '4'], correctAnswer: 1, rationale: 'm = (9 − 3) ÷ (2 − (−1)) = 6 ÷ 3 = 2.', topic: 'Gradient of a line' },
    { id: 'mcq-16', stem: 'A line has gradient −4. This means it:', options: ['Rises steeply to the right', 'Falls steeply to the right', 'Is horizontal', 'Is vertical'], correctAnswer: 1, rationale: 'A negative gradient means the line falls from left to right. A large absolute value means it is steep.', topic: 'Gradient of a line' },

    // ── Midpoint of a line ──
    { id: 'mcq-17', stem: 'Find the midpoint of (2, 4) and (6, 10).', options: ['(4, 7)', '(8, 14)', '(3, 5)', '(4, 14)'], correctAnswer: 0, rationale: 'M = ((2 + 6) ÷ 2, (4 + 10) ÷ 2) = (4, 7).', topic: 'Midpoint of a line' },
    { id: 'mcq-18', stem: 'The midpoint of A(1, 3) and B(5, 9) is:', options: ['(6, 12)', '(3, 6)', '(4, 6)', '(2, 3)'], correctAnswer: 1, rationale: 'M = ((1 + 5) ÷ 2, (3 + 9) ÷ 2) = (3, 6).', topic: 'Midpoint of a line' },
    { id: 'mcq-19', stem: 'Find the midpoint of (−4, 2) and (6, −8).', options: ['(1, −3)', '(2, −6)', '(−2, 10)', '(5, −5)'], correctAnswer: 0, rationale: 'M = ((−4 + 6) ÷ 2, (2 + (−8)) ÷ 2) = (2 ÷ 2, −6 ÷ 2) = (1, −3).', topic: 'Midpoint of a line' },
    { id: 'mcq-20', stem: 'The midpoint formula finds the ___ of corresponding coordinates.', options: ['Sum', 'Difference', 'Average', 'Product'], correctAnswer: 2, rationale: 'The midpoint formula averages the x-values and averages the y-values.', topic: 'Midpoint of a line' },
    { id: 'mcq-21', stem: 'The midpoint of (0, 0) and (8, 6) is:', options: ['(8, 6)', '(4, 3)', '(16, 12)', '(2, 1.5)'], correctAnswer: 1, rationale: 'M = ((0 + 8) ÷ 2, (0 + 6) ÷ 2) = (4, 3).', topic: 'Midpoint of a line' },
    { id: 'mcq-22', stem: 'M(3, 5) is the midpoint of A(1, 2) and B. What are the coordinates of B?', options: ['(5, 8)', '(2, 3)', '(4, 7)', '(6, 10)'], correctAnswer: 0, rationale: '3 = (1 + x) ÷ 2 → x = 5. 5 = (2 + y) ÷ 2 → y = 8. B = (5, 8).', topic: 'Midpoint of a line' },

    // ── Length of a line ──
    { id: 'mcq-23', stem: 'Find the distance between (1, 1) and (4, 5).', options: ['3', '4', '5', '7'], correctAnswer: 2, rationale: 'd = √((4 − 1)² + (5 − 1)²) = √(9 + 16) = √25 = 5.', topic: 'Length of a line' },
    { id: 'mcq-24', stem: 'The distance formula is derived from which theorem?', options: ['Pythagoras\' theorem', 'The factor theorem', 'The midpoint theorem', 'Thales\' theorem'], correctAnswer: 0, rationale: 'The distance formula d = √((x₂ − x₁)² + (y₂ − y₁)²) comes from Pythagoras\' theorem.', topic: 'Length of a line' },
    { id: 'mcq-25', stem: 'Find the distance between (0, 0) and (3, 4).', options: ['5', '7', '12', '25'], correctAnswer: 0, rationale: 'd = √(3² + 4²) = √(9 + 16) = √25 = 5.', topic: 'Length of a line' },
    { id: 'mcq-26', stem: 'What is the distance between (−2, 1) and (1, 5)?', options: ['3', '4', '5', '7'], correctAnswer: 2, rationale: 'd = √((1 − (−2))² + (5 − 1)²) = √(9 + 16) = √25 = 5.', topic: 'Length of a line' },
    { id: 'mcq-27', stem: 'Find the distance between (2, 3) and (2, 9).', options: ['0', '3', '6', '9'], correctAnswer: 2, rationale: 'd = √((2 − 2)² + (9 − 3)²) = √(0 + 36) = √36 = 6.', topic: 'Length of a line' },
    { id: 'mcq-28', stem: 'In the distance formula, why do we square the differences?', options: ['To make them larger', 'To remove negative signs', 'To find the average', 'To simplify fractions'], correctAnswer: 1, rationale: 'Squaring removes negative signs so that distances in any direction give a positive result.', topic: 'Length of a line' },
    { id: 'mcq-29', stem: 'Find the distance between (−3, −1) and (0, 3).', options: ['4', '5', '7', '25'], correctAnswer: 1, rationale: 'd = √((0 − (−3))² + (3 − (−1))²) = √(9 + 16) = √25 = 5.', topic: 'Length of a line' },
    { id: 'mcq-30', stem: 'The distance between (1, 2) and (7, 10) is:', options: ['6', '8', '10', '14'], correctAnswer: 2, rationale: 'd = √((7 − 1)² + (10 − 2)²) = √(36 + 64) = √100 = 10.', topic: 'Length of a line' },
  ],

  fillblank: [
    // ── Coordinates ──
    { id: 'fb-1', stem: 'The horizontal axis is called the ___.', template: 'The horizontal axis is the __BLANK__', blanks: [{ answer: 'x-axis' }], rationale: 'The x-axis runs horizontally (left to right).' },
    { id: 'fb-2', stem: 'The vertical axis is called the ___.', template: 'The vertical axis is the __BLANK__', blanks: [{ answer: 'y-axis' }], rationale: 'The y-axis runs vertically (up and down).' },
    { id: 'fb-3', stem: 'The point where the axes cross is called the ___.', template: 'The axes cross at the __BLANK__', blanks: [{ answer: 'origin' }], rationale: 'The origin is at (0, 0) where the x-axis and y-axis meet.' },
    { id: 'fb-4', stem: 'The point (−4, −6) lies in the ___ quadrant.', template: '(−4, −6) is in the __BLANK__ quadrant', blanks: [{ answer: '3rd' }], rationale: 'Both coordinates are negative, which places the point in the 3rd quadrant.' },

    // ── Gradient ──
    { id: 'fb-5', stem: 'Gradient is calculated as change in y divided by change in ___.', template: 'Gradient = change in y ÷ change in __BLANK__', blanks: [{ answer: 'x' }], rationale: 'Gradient = rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁).' },
    { id: 'fb-6', stem: 'A horizontal line has a gradient of ___.', template: 'Gradient of a horizontal line = __BLANK__', blanks: [{ answer: '0' }], rationale: 'There is no vertical change, so rise = 0, giving m = 0.' },
    { id: 'fb-7', stem: 'The gradient of the line through (1, 3) and (5, 11) is ___.', template: 'm = __BLANK__', blanks: [{ answer: '2' }], rationale: 'm = (11 − 3) ÷ (5 − 1) = 8 ÷ 4 = 2.' },
    { id: 'fb-8', stem: 'A line that falls from left to right has a ___ gradient.', template: 'A falling line has a __BLANK__ gradient', blanks: [{ answer: 'negative' }], rationale: 'When y decreases as x increases, the gradient is negative.' },

    // ── Midpoint ──
    { id: 'fb-9', stem: 'The midpoint of (2, 6) and (8, 10) is (5, ___).', template: 'Midpoint y-coordinate = __BLANK__', blanks: [{ answer: '8' }], rationale: 'y-midpoint = (6 + 10) ÷ 2 = 16 ÷ 2 = 8.' },
    { id: 'fb-10', stem: 'The midpoint formula finds the ___ of the coordinates.', template: 'The midpoint formula finds the __BLANK__', blanks: [{ answer: 'average' }], rationale: 'The midpoint is found by averaging the x-values and averaging the y-values.' },
    { id: 'fb-11', stem: 'The midpoint of (0, 0) and (10, 4) is (___, 2).', template: 'Midpoint x-coordinate = __BLANK__', blanks: [{ answer: '5' }], rationale: 'x-midpoint = (0 + 10) ÷ 2 = 10 ÷ 2 = 5.' },

    // ── Length ──
    { id: 'fb-12', stem: 'The distance formula is derived from ___ theorem.', template: 'Derived from __BLANK__ theorem', blanks: [{ answer: 'Pythagoras\'' }], rationale: 'The distance formula comes from applying Pythagoras\' theorem to the right triangle formed by the coordinate differences.' },
    { id: 'fb-13', stem: 'The distance between (0, 0) and (5, 12) is ___.', template: 'd = __BLANK__', blanks: [{ answer: '13' }], rationale: 'd = √(5² + 12²) = √(25 + 144) = √169 = 13.' },
    { id: 'fb-14', stem: 'In the distance formula, the horizontal leg has length |x₂ − ___| .', template: 'Horizontal leg = |x₂ − __BLANK__|', blanks: [{ answer: 'x₁' }], rationale: 'The horizontal distance is the absolute difference of the x-coordinates.' },
    { id: 'fb-15', stem: 'The distance between (3, 1) and (3, 8) is ___.', template: 'd = __BLANK__', blanks: [{ answer: '7' }], rationale: 'Same x-coordinates, so d = |8 − 1| = 7. (Or √(0² + 7²) = 7.)' },
  ],

  dragdrop: [
    {
      id: 'dd-1',
      stem: 'Sort each point into the correct quadrant.',
      categories: ['1st quadrant', '2nd quadrant', '3rd quadrant', '4th quadrant'],
      items: [
        { text: '(3, 5)', category: '1st quadrant' },
        { text: '(−2, 4)', category: '2nd quadrant' },
        { text: '(−3, −2)', category: '3rd quadrant' },
        { text: '(4, −1)', category: '4th quadrant' },
        { text: '(1, 7)', category: '1st quadrant' },
        { text: '(−6, −5)', category: '3rd quadrant' },
      ],
    },
    {
      id: 'dd-2',
      stem: 'Sort each point by whether it lies on an axis or in a quadrant.',
      categories: ['On the x-axis', 'On the y-axis', 'In a quadrant'],
      items: [
        { text: '(3, 0)', category: 'On the x-axis' },
        { text: '(0, −5)', category: 'On the y-axis' },
        { text: '(2, 7)', category: 'In a quadrant' },
        { text: '(−4, 0)', category: 'On the x-axis' },
        { text: '(0, 3)', category: 'On the y-axis' },
        { text: '(−1, −6)', category: 'In a quadrant' },
      ],
    },
    {
      id: 'dd-3',
      stem: 'Match each line description to the correct gradient type.',
      categories: ['Positive gradient', 'Negative gradient', 'Zero gradient', 'Undefined gradient'],
      items: [
        { text: 'Rises from left to right', category: 'Positive gradient' },
        { text: 'Falls from left to right', category: 'Negative gradient' },
        { text: 'Horizontal line', category: 'Zero gradient' },
        { text: 'Vertical line', category: 'Undefined gradient' },
      ],
    },
    {
      id: 'dd-4',
      stem: 'Match each pair of points to the gradient of the line joining them.',
      categories: ['m = 2', 'm = 3', 'm = −1', 'm = ½'],
      items: [
        { text: '(1, 2) and (3, 6)', category: 'm = 2' },
        { text: '(0, 1) and (2, 7)', category: 'm = 3' },
        { text: '(1, 5) and (4, 2)', category: 'm = −1' },
        { text: '(0, 0) and (4, 2)', category: 'm = ½' },
      ],
    },
    {
      id: 'dd-5',
      stem: 'Match each pair of points to their midpoint.',
      categories: ['(3, 4)', '(2, 5)', '(0, 3)', '(4, 1)'],
      items: [
        { text: '(1, 2) and (5, 6)', category: '(3, 4)' },
        { text: '(0, 3) and (4, 7)', category: '(2, 5)' },
        { text: '(−3, 1) and (3, 5)', category: '(0, 3)' },
        { text: '(2, −1) and (6, 3)', category: '(4, 1)' },
      ],
    },
    {
      id: 'dd-6',
      stem: 'Match each pair of points to the distance between them.',
      categories: ['d = 5', 'd = 10', 'd = 13', 'd = 15'],
      items: [
        { text: '(0, 0) and (3, 4)', category: 'd = 5' },
        { text: '(1, 2) and (7, 10)', category: 'd = 10' },
        { text: '(0, 0) and (5, 12)', category: 'd = 13' },
        { text: '(1, 1) and (10, 13)', category: 'd = 15' },
      ],
    },
    {
      id: 'dd-7',
      stem: 'Sort each formula to the correct concept.',
      categories: ['Gradient', 'Midpoint', 'Distance'],
      items: [
        { text: '(y₂ − y₁) ÷ (x₂ − x₁)', category: 'Gradient' },
        { text: '((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2)', category: 'Midpoint' },
        { text: '√((x₂ − x₁)² + (y₂ − y₁)²)', category: 'Distance' },
      ],
    },
    {
      id: 'dd-8',
      stem: 'Sort these gradient values into positive or negative.',
      categories: ['Positive gradient', 'Negative gradient'],
      items: [
        { text: 'm = 3', category: 'Positive gradient' },
        { text: 'm = −2', category: 'Negative gradient' },
        { text: 'm = ½', category: 'Positive gradient' },
        { text: 'm = −5', category: 'Negative gradient' },
        { text: 'm = 0.1', category: 'Positive gradient' },
        { text: 'm = −¾', category: 'Negative gradient' },
      ],
    },
    {
      id: 'dd-9',
      stem: 'Match each coordinate property to the correct axis.',
      categories: ['x-axis', 'y-axis'],
      items: [
        { text: 'Horizontal number line', category: 'x-axis' },
        { text: 'Vertical number line', category: 'y-axis' },
        { text: 'y-coordinate is always 0', category: 'x-axis' },
        { text: 'x-coordinate is always 0', category: 'y-axis' },
      ],
    },
    {
      id: 'dd-10',
      stem: 'Match each step of the distance formula to its description.',
      categories: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
      items: [
        { text: 'Subtract the x-coordinates and y-coordinates', category: 'Step 1' },
        { text: 'Square each difference', category: 'Step 2' },
        { text: 'Add the two squared values', category: 'Step 3' },
        { text: 'Take the square root', category: 'Step 4' },
      ],
    },
  ],

  sequence: [
    {
      id: 'seq-1',
      stem: 'Put the steps in order to find the gradient of the line through (2, 3) and (6, 11).',
      steps: [
        'Identify the two points: (2, 3) and (6, 11)',
        'Label: x₁ = 2, y₁ = 3, x₂ = 6, y₂ = 11',
        'Calculate rise: y₂ − y₁ = 11 − 3 = 8',
        'Calculate run: x₂ − x₁ = 6 − 2 = 4',
        'Divide: m = 8 ÷ 4 = 2',
      ],
    },
    {
      id: 'seq-2',
      stem: 'Order the steps to find the midpoint of (1, 4) and (7, 10).',
      steps: [
        'Identify the endpoints: (1, 4) and (7, 10)',
        'Add the x-coordinates: 1 + 7 = 8',
        'Add the y-coordinates: 4 + 10 = 14',
        'Divide each sum by 2: 8 ÷ 2 = 4, 14 ÷ 2 = 7',
        'Write the midpoint: M = (4, 7)',
      ],
    },
    {
      id: 'seq-3',
      stem: 'Order the steps to find the distance between (1, 1) and (4, 5).',
      steps: [
        'Subtract x-coordinates: 4 − 1 = 3',
        'Subtract y-coordinates: 5 − 1 = 4',
        'Square each difference: 3² = 9 and 4² = 16',
        'Add the squares: 9 + 16 = 25',
        'Take the square root: √25 = 5',
      ],
    },
    {
      id: 'seq-4',
      stem: 'Order the steps to plot the point (−3, 2) on a coordinate grid.',
      steps: [
        'Start at the origin (0, 0)',
        'Move 3 units to the left along the x-axis',
        'Move 2 units up parallel to the y-axis',
        'Mark and label the point (−3, 2)',
      ],
    },
    {
      id: 'seq-5',
      stem: 'Order the steps to find a missing endpoint when the midpoint is known. M(4, 3) is the midpoint of A(2, 1) and B(x, y).',
      steps: [
        'Use the midpoint formula: 4 = (2 + x) ÷ 2',
        'Solve for x: 8 = 2 + x, so x = 6',
        'Use the formula for y: 3 = (1 + y) ÷ 2',
        'Solve for y: 6 = 1 + y, so y = 5',
        'Write the answer: B = (6, 5)',
      ],
    },
    {
      id: 'seq-6',
      stem: 'Order the steps to determine the type of gradient a line has.',
      steps: [
        'Pick two points on the line',
        'Calculate m = (y₂ − y₁) ÷ (x₂ − x₁)',
        'If m > 0 the line rises (positive gradient)',
        'If m < 0 the line falls (negative gradient)',
        'If m = 0 the line is horizontal',
      ],
    },
    {
      id: 'seq-7',
      stem: 'Order the steps to find the distance between (−2, 3) and (4, −5).',
      steps: [
        'Subtract x-coordinates: 4 − (−2) = 6',
        'Subtract y-coordinates: −5 − 3 = −8',
        'Square each: 6² = 36 and (−8)² = 64',
        'Add: 36 + 64 = 100',
        'Square root: √100 = 10',
      ],
    },
    {
      id: 'seq-8',
      stem: 'Order the steps to find the gradient of a line through (−1, 5) and (3, −3).',
      steps: [
        'Label: x₁ = −1, y₁ = 5, x₂ = 3, y₂ = −3',
        'Calculate rise: −3 − 5 = −8',
        'Calculate run: 3 − (−1) = 4',
        'Divide: m = −8 ÷ 4 = −2',
        'The gradient is negative so the line falls from left to right',
      ],
    },
  ],

  keyword: [
    // ── Coordinates ──
    { id: 'kw-1', stem: 'What is the Cartesian coordinate system? [2 marks]', marks: 2, keywords: ['two', 'axes', 'perpendicular', 'position', 'point'], modelAnswer: 'The Cartesian coordinate system uses two perpendicular axes (x and y) to describe the position of any point on a plane using an ordered pair (x, y).' },
    { id: 'kw-2', stem: 'What are the four quadrants? [2 marks]', marks: 2, keywords: ['quadrant', 'axes', 'positive', 'negative', 'four'], modelAnswer: 'The two axes divide the plane into four quadrants. In the 1st quadrant both coordinates are positive, in the 2nd x is negative and y positive, in the 3rd both are negative, and in the 4th x is positive and y negative.' },
    { id: 'kw-3', stem: 'Explain why (x, y) is called an ordered pair. [1 mark]', marks: 1, keywords: ['order', 'x first', 'matters'], modelAnswer: 'The order matters because the x-coordinate must always be written first and the y-coordinate second. Swapping them gives a different point.' },

    // ── Gradient ──
    { id: 'kw-4', stem: 'What does the gradient of a line measure? [2 marks]', marks: 2, keywords: ['steep', 'rise', 'run', 'change'], modelAnswer: 'The gradient measures how steep a line is. It is the ratio of the vertical change (rise) to the horizontal change (run) between two points on the line.' },
    { id: 'kw-5', stem: 'Explain why a vertical line has an undefined gradient. [2 marks]', marks: 2, keywords: ['vertical', 'x-coordinates', 'same', 'divide by zero'], modelAnswer: 'A vertical line has the same x-coordinate for all points, so x₂ − x₁ = 0. Dividing by zero is not possible, making the gradient undefined.' },
    { id: 'kw-6', stem: 'Describe the difference between positive and negative gradients. [2 marks]', marks: 2, keywords: ['positive', 'rises', 'negative', 'falls', 'left to right'], modelAnswer: 'A positive gradient means the line rises from left to right. A negative gradient means the line falls from left to right.' },

    // ── Midpoint ──
    { id: 'kw-7', stem: 'Explain what the midpoint formula does. [2 marks]', marks: 2, keywords: ['average', 'x-coordinates', 'y-coordinates', 'halfway'], modelAnswer: 'The midpoint formula finds the point exactly halfway between two endpoints by averaging the x-coordinates and averaging the y-coordinates.' },
    { id: 'kw-8', stem: 'How would you find a missing endpoint if you know the midpoint and one endpoint? [3 marks]', marks: 3, keywords: ['midpoint formula', 'rearrange', 'solve', 'multiply by 2', 'subtract'], modelAnswer: 'Substitute the known midpoint and endpoint into the midpoint formula. Multiply both sides by 2 to remove the division, then subtract the known endpoint coordinate to find the missing value.' },

    // ── Length ──
    { id: 'kw-9', stem: 'Explain how the distance formula is derived. [3 marks]', marks: 3, keywords: ['Pythagoras', 'right triangle', 'horizontal', 'vertical', 'hypotenuse', 'square root'], modelAnswer: 'Draw horizontal and vertical lines from the two points to form a right-angled triangle. The horizontal leg is x₂ − x₁ and the vertical leg is y₂ − y₁. By Pythagoras\' theorem the hypotenuse (distance) is the square root of the sum of the squares of these legs.' },
    { id: 'kw-10', stem: 'Why do we square the differences in the distance formula? [1 mark]', marks: 1, keywords: ['negative', 'positive', 'remove'], modelAnswer: 'Squaring removes any negative signs so that differences in any direction give a positive result before taking the square root.' },
    { id: 'kw-11', stem: 'What is the distance between two points that share the same x-coordinate? [2 marks]', marks: 2, keywords: ['vertical', 'y-coordinates', 'subtract', 'difference'], modelAnswer: 'If two points share the same x-coordinate they lie on a vertical line. The distance is simply the absolute difference of their y-coordinates.' },
    { id: 'kw-12', stem: 'Describe how gradient, midpoint and distance formulas all use coordinate differences. [2 marks]', marks: 2, keywords: ['subtract', 'coordinates', 'x₂ − x₁', 'y₂ − y₁'], modelAnswer: 'All three formulas start by subtracting x₂ − x₁ and y₂ − y₁. Gradient divides these, midpoint averages the sums, and distance squares them, adds, then takes the square root.' },
  ],

  flashcards: [
    // ── Coordinates ──
    { id: 'fc-1', front: 'What is the origin?', back: 'The point (0, 0) where the x-axis and y-axis cross.', topic: 'Coordinates' },
    { id: 'fc-2', front: 'In an ordered pair (x, y), which comes first?', back: 'The x-coordinate (horizontal position) is always written first.', topic: 'Coordinates' },
    { id: 'fc-3', front: 'What are the sign rules for the 1st quadrant?', back: 'Both x and y are positive: (+, +).', topic: 'Coordinates' },
    { id: 'fc-4', front: 'What are the sign rules for the 2nd quadrant?', back: 'x is negative, y is positive: (−, +).', topic: 'Coordinates' },
    { id: 'fc-5', front: 'What are the sign rules for the 3rd quadrant?', back: 'Both x and y are negative: (−, −).', topic: 'Coordinates' },
    { id: 'fc-6', front: 'What are the sign rules for the 4th quadrant?', back: 'x is positive, y is negative: (+, −).', topic: 'Coordinates' },
    { id: 'fc-7', front: 'Which axis does a point lie on if its y-coordinate is 0?', back: 'The x-axis.', topic: 'Coordinates' },

    // ── Gradient ──
    { id: 'fc-8', front: 'What is the gradient formula?', back: 'm = (y₂ − y₁) ÷ (x₂ − x₁).', topic: 'Gradient of a line' },
    { id: 'fc-9', front: 'What does a positive gradient look like?', back: 'The line rises from left to right (/).', topic: 'Gradient of a line' },
    { id: 'fc-10', front: 'What does a negative gradient look like?', back: 'The line falls from left to right (\\).', topic: 'Gradient of a line' },
    { id: 'fc-11', front: 'What is the gradient of a horizontal line?', back: 'Zero (m = 0).', topic: 'Gradient of a line' },
    { id: 'fc-12', front: 'What is the gradient of a vertical line?', back: 'Undefined — division by zero.', topic: 'Gradient of a line' },
    { id: 'fc-13', front: 'Find the gradient through (1, 2) and (3, 8).', back: 'm = (8 − 2) ÷ (3 − 1) = 6 ÷ 2 = 3.', topic: 'Gradient of a line' },
    { id: 'fc-14', front: 'What does "rise over run" mean?', back: 'The vertical change (rise) divided by the horizontal change (run) between two points.', topic: 'Gradient of a line' },

    // ── Midpoint ──
    { id: 'fc-15', front: 'What is the midpoint formula?', back: 'M = ((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2).', topic: 'Midpoint of a line' },
    { id: 'fc-16', front: 'What does the midpoint represent?', back: 'The exact middle point between two endpoints on a line segment.', topic: 'Midpoint of a line' },
    { id: 'fc-17', front: 'Find the midpoint of (2, 4) and (6, 10).', back: 'M = ((2 + 6) ÷ 2, (4 + 10) ÷ 2) = (4, 7).', topic: 'Midpoint of a line' },
    { id: 'fc-18', front: 'How do you find a missing endpoint from the midpoint?', back: 'Rearrange the midpoint formula: multiply the midpoint coordinate by 2 and subtract the known endpoint.', topic: 'Midpoint of a line' },
    { id: 'fc-19', front: 'Find the midpoint of (−4, 2) and (6, −8).', back: 'M = ((−4 + 6) ÷ 2, (2 + (−8)) ÷ 2) = (1, −3).', topic: 'Midpoint of a line' },

    // ── Length of a line ──
    { id: 'fc-20', front: 'What is the distance formula?', back: 'd = √((x₂ − x₁)² + (y₂ − y₁)²).', topic: 'Length of a line' },
    { id: 'fc-21', front: 'Which theorem is the distance formula based on?', back: 'Pythagoras\' theorem (a² + b² = c²).', topic: 'Length of a line' },
    { id: 'fc-22', front: 'Find the distance between (0, 0) and (3, 4).', back: 'd = √(9 + 16) = √25 = 5.', topic: 'Length of a line' },
    { id: 'fc-23', front: 'Find the distance between (1, 1) and (4, 5).', back: 'd = √(9 + 16) = √25 = 5.', topic: 'Length of a line' },
    { id: 'fc-24', front: 'Why do we square the differences in the distance formula?', back: 'To remove negative signs so differences in any direction give a positive result.', topic: 'Length of a line' },
    { id: 'fc-25', front: 'Find the distance between (−2, 3) and (4, −5).', back: 'd = √(36 + 64) = √100 = 10.', topic: 'Length of a line' },
  ],

};
