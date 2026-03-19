export const exercises_olevel_maths_core_2_7 = {

  mcq: [
    // ── Forming equations from shapes ──
    { id: 'mcq-1', stem: 'A triangle has angles x°, (x + 40)° and (2x + 20)°. What is the equation to find x?', options: ['x + x + 40 + 2x + 20 = 360', 'x + x + 40 + 2x + 20 = 180', 'x × (x + 40) × (2x + 20) = 180', 'x + 40 + 2x + 20 = 180'], correctAnswer: 1, rationale: 'Angles in a triangle sum to 180°, so x + (x + 40) + (2x + 20) = 180.', topic: 'Forming equations from shapes' },
    { id: 'mcq-2', stem: 'A triangle has angles x°, (x + 40)° and (2x + 20)°. Find x.', options: ['30', '45', '20', '40'], correctAnswer: 0, rationale: 'x + x + 40 + 2x + 20 = 180 → 4x + 60 = 180 → 4x = 120 → x = 30.', topic: 'Forming equations from shapes' },
    { id: 'mcq-3', stem: 'A rectangle has length (2x + 3) cm and width (x − 1) cm. Its perimeter is 34 cm. What equation gives x?', options: ['2x + 3 + x − 1 = 34', '2(2x + 3) + 2(x − 1) = 34', '(2x + 3)(x − 1) = 34', '4x + 3 + x − 1 = 34'], correctAnswer: 1, rationale: 'Perimeter of a rectangle = 2 × length + 2 × width, so 2(2x + 3) + 2(x − 1) = 34.', topic: 'Forming equations from shapes' },
    { id: 'mcq-4', stem: 'A rectangle has length (2x + 3) cm and width (x − 1) cm. Its perimeter is 34 cm. Find the width.', options: ['4 cm', '5 cm', '11 cm', '6 cm'], correctAnswer: 0, rationale: '2(2x + 3) + 2(x − 1) = 34 → 4x + 6 + 2x − 2 = 34 → 6x + 4 = 34 → 6x = 30 → x = 5. Width = 5 − 1 = 4 cm.', topic: 'Forming equations from shapes' },
    { id: 'mcq-5', stem: 'An isosceles triangle has two equal angles of (2x + 10)° and a third angle of (x − 10)°. Find x.', options: ['34', '38', '30', '40'], correctAnswer: 0, rationale: '2(2x + 10) + (x − 10) = 180 → 4x + 20 + x − 10 = 180 → 5x + 10 = 180 → 5x = 170 → x = 34.', topic: 'Forming equations from shapes' },
    { id: 'mcq-6', stem: 'A quadrilateral has angles 2x°, 3x°, (x + 40)° and (2x − 20)°. What do the angles sum to?', options: ['180°', '270°', '360°', '540°'], correctAnswer: 2, rationale: 'Angles in any quadrilateral always sum to 360°.', topic: 'Forming equations from shapes' },
    { id: 'mcq-7', stem: 'A quadrilateral has angles 2x°, 3x°, (x + 40)° and (2x − 20)°. Find x.', options: ['45', '42.5', '40', '50'], correctAnswer: 1, rationale: '2x + 3x + x + 40 + 2x − 20 = 360 → 8x + 20 = 360 → 8x = 340 → x = 42.5.', topic: 'Forming equations from shapes' },
    { id: 'mcq-8', stem: 'Two angles on a straight line are (3x + 15)° and (2x + 40)°. Find x.', options: ['25', '30', '35', '20'], correctAnswer: 0, rationale: 'Angles on a straight line sum to 180°. 3x + 15 + 2x + 40 = 180 → 5x + 55 = 180 → 5x = 125 → x = 25.', topic: 'Forming equations from shapes' },
    { id: 'mcq-9', stem: 'An equilateral triangle has sides (2x + 1) cm, (3x − 4) cm and 11 cm. Find x.', options: ['3', '4', '5', '6'], correctAnswer: 2, rationale: 'All sides equal: 2x + 1 = 11 → 2x = 10 → x = 5. Check: 3(5) − 4 = 11 ✓.', topic: 'Forming equations from shapes' },
    { id: 'mcq-10', stem: 'A triangle has a perimeter of 30 cm. Its sides are x cm, (x + 4) cm and (2x − 2) cm. Find x.', options: ['5', '6', '7', '8'], correctAnswer: 2, rationale: 'x + x + 4 + 2x − 2 = 30 → 4x + 2 = 30 → 4x = 28 → x = 7.', topic: 'Forming equations from shapes' },
    { id: 'mcq-11', stem: 'A square has side length (3x − 2) cm and perimeter 40 cm. Find x.', options: ['4', '3', '12', '3.5'], correctAnswer: 0, rationale: 'Perimeter = 4 × side: 4(3x − 2) = 40 → 12x − 8 = 40 → 12x = 48 → x = 4.', topic: 'Forming equations from shapes' },
    { id: 'mcq-12', stem: 'An isosceles triangle has equal sides of (x + 6) cm and a base of (2x − 3) cm. The perimeter is 33 cm. Find x.', options: ['5', '6', '7', '8'], correctAnswer: 1, rationale: '2(x + 6) + (2x − 3) = 33 → 2x + 12 + 2x − 3 = 33 → 4x + 9 = 33 → 4x = 24 → x = 6.', topic: 'Forming equations from shapes' },
    { id: 'mcq-13', stem: 'Angles around a point sum to 360°. Three angles at a point are x°, 2x° and (x + 80)°. Find x.', options: ['60', '70', '80', '90'], correctAnswer: 1, rationale: 'x + 2x + x + 80 = 360 → 4x + 80 = 360 → 4x = 280 → x = 70.', topic: 'Forming equations from shapes' },
    { id: 'mcq-14', stem: 'A rectangle has length (5x − 1) cm and width (2x + 3) cm. The length is twice the width. Find x.', options: ['5', '7', '6', '8'], correctAnswer: 1, rationale: '5x − 1 = 2(2x + 3) → 5x − 1 = 4x + 6 → x = 7.', topic: 'Forming equations from shapes' },
    { id: 'mcq-15', stem: 'Two sides of a triangle are equal with lengths (4x − 3) cm and (2x + 5) cm. Find x.', options: ['2', '3', '4', '5'], correctAnswer: 2, rationale: 'Equal sides: 4x − 3 = 2x + 5 → 2x = 8 → x = 4.', topic: 'Forming equations from shapes' },

    // ── Forming equations from words ──
    { id: 'mcq-16', stem: '"I think of a number, multiply it by 3 and add 5. The result is 26." What is the equation?', options: ['3n + 5 = 26', 'n + 3 × 5 = 26', '3(n + 5) = 26', '3n − 5 = 26'], correctAnswer: 0, rationale: 'Let n be the number. Multiply by 3 gives 3n, add 5 gives 3n + 5 = 26.', topic: 'Forming equations from words' },
    { id: 'mcq-17', stem: '"I think of a number, multiply it by 3 and add 5. The result is 26." Find the number.', options: ['6', '7', '8', '9'], correctAnswer: 1, rationale: '3n + 5 = 26 → 3n = 21 → n = 7.', topic: 'Forming equations from words' },
    { id: 'mcq-18', stem: 'The sum of three consecutive integers is 72. If the smallest is n, which equation is correct?', options: ['3n = 72', 'n + n + 1 + n + 2 = 72', 'n(n + 1)(n + 2) = 72', 'n + 2n + 3n = 72'], correctAnswer: 1, rationale: 'Three consecutive integers are n, n + 1, n + 2. Their sum: n + (n + 1) + (n + 2) = 72.', topic: 'Forming equations from words' },
    { id: 'mcq-19', stem: 'The sum of three consecutive integers is 72. Find the largest integer.', options: ['23', '24', '25', '26'], correctAnswer: 2, rationale: '3n + 3 = 72 → 3n = 69 → n = 23. Largest = 23 + 2 = 25.', topic: 'Forming equations from words' },
    { id: 'mcq-20', stem: 'Sam is twice as old as Tom. Together their ages total 36. How old is Sam?', options: ['12', '18', '24', '30'], correctAnswer: 2, rationale: 'Let Tom = x. Sam = 2x. x + 2x = 36 → 3x = 36 → x = 12. Sam = 24.', topic: 'Forming equations from words' },
    { id: 'mcq-21', stem: 'A pen costs $0.50 more than a pencil. Five pencils and three pens cost $5.50. What equation finds the pencil price p?', options: ['5p + 3p = 5.50', '5p + 3(p + 0.50) = 5.50', '5(p + 0.50) + 3p = 5.50', '8p + 0.50 = 5.50'], correctAnswer: 1, rationale: 'Pencil = p, pen = p + 0.50. Total: 5p + 3(p + 0.50) = 5.50.', topic: 'Forming equations from words' },
    { id: 'mcq-22', stem: 'A pen costs $0.50 more than a pencil. Five pencils and three pens cost $5.50. Find the cost of a pen.', options: ['$0.50', '$0.75', '$1.00', '$1.25'], correctAnswer: 2, rationale: '5p + 3p + 1.50 = 5.50 → 8p = 4.00 → p = 0.50. Pen = 0.50 + 0.50 = $1.00.', topic: 'Forming equations from words' },
    { id: 'mcq-23', stem: '"I think of a number, double it and add 7. The result is 5 less than four times the number." Find n.', options: ['4', '5', '6', '7'], correctAnswer: 2, rationale: '2n + 7 = 4n − 5 → 12 = 2n → n = 6.', topic: 'Forming equations from words' },
    { id: 'mcq-24', stem: 'Anna is 4 years older than Ben. In 6 years, the sum of their ages will be 50. How old is Ben now?', options: ['15', '16', '17', '18'], correctAnswer: 2, rationale: 'Ben = x, Anna = x + 4. In 6 years: (x + 6) + (x + 10) = 50 → 2x + 16 = 50 → 2x = 34 → x = 17.', topic: 'Forming equations from words' },
    { id: 'mcq-25', stem: 'The sum of two consecutive even numbers is 54. Find the smaller number.', options: ['24', '26', '28', '30'], correctAnswer: 1, rationale: 'Let n be the smaller even number. n + (n + 2) = 54 → 2n + 2 = 54 → 2n = 52 → n = 26.', topic: 'Forming equations from words' },
    { id: 'mcq-26', stem: 'A number is tripled and then 8 is subtracted. The result is 22. What is the number?', options: ['8', '9', '10', '11'], correctAnswer: 2, rationale: '3n − 8 = 22 → 3n = 30 → n = 10.', topic: 'Forming equations from words' },
    { id: 'mcq-27', stem: 'Tom has x marbles. Jerry has three times as many minus 4. Together they have 32. How many does Jerry have?', options: ['9', '23', '12', '20'], correctAnswer: 1, rationale: 'x + (3x − 4) = 32 → 4x − 4 = 32 → 4x = 36 → x = 9. Jerry = 3(9) − 4 = 23.', topic: 'Forming equations from words' },
    { id: 'mcq-28', stem: 'A father is 30 years older than his son. Their combined age is 56. How old is the son?', options: ['11', '12', '13', '14'], correctAnswer: 2, rationale: 'Son = x, Father = x + 30. x + x + 30 = 56 → 2x = 26 → x = 13.', topic: 'Forming equations from words' },
    { id: 'mcq-29', stem: 'Five identical books cost $4 more than three identical books. What is the cost of one book?', options: ['$1', '$2', '$3', '$4'], correctAnswer: 1, rationale: '5b = 3b + 4 → 2b = 4 → b = $2.', topic: 'Forming equations from words' },
    { id: 'mcq-30', stem: '"I think of a number, add 9 and then halve the result. The answer is 8." Find the number.', options: ['5', '6', '7', '8'], correctAnswer: 2, rationale: '(n + 9) ÷ 2 = 8 → n + 9 = 16 → n = 7.', topic: 'Forming equations from words' },
  ],

  fillblank: [
    // ── Forming equations from shapes ──
    { id: 'fb-1', stem: 'Angles in a triangle sum to ___ degrees.', template: 'The angle sum of a triangle is __BLANK__°', blanks: [{ answer: '180' }], rationale: 'The interior angles of any triangle always add up to 180°.' },
    { id: 'fb-2', stem: 'Angles in a quadrilateral sum to ___ degrees.', template: 'The angle sum of a quadrilateral is __BLANK__°', blanks: [{ answer: '360' }], rationale: 'The interior angles of any quadrilateral always add up to 360°.' },
    { id: 'fb-3', stem: 'A triangle has angles 2x°, 3x° and 5x°. Form: 2x + 3x + 5x = 180, so 10x = 180 and x = ___.', template: 'x = __BLANK__', blanks: [{ answer: '18' }], rationale: '10x = 180 → x = 18.' },
    { id: 'fb-4', stem: 'A rectangle has length (4x + 1) cm and width (x + 2) cm. Perimeter = 2(4x + 1) + 2(x + 2) = ___ (simplified).', template: 'Perimeter = __BLANK__', blanks: [{ answer: '10x + 6' }], rationale: '8x + 2 + 2x + 4 = 10x + 6.' },
    { id: 'fb-5', stem: 'An equilateral triangle has all ___ sides equal.', template: 'An equilateral triangle has __BLANK__ equal sides', blanks: [{ answer: 'three' }], rationale: 'An equilateral triangle has three equal sides and three equal angles of 60°.' },
    { id: 'fb-6', stem: 'In an isosceles triangle, the two ___ angles are equal.', template: 'The two __BLANK__ angles are equal', blanks: [{ answer: 'base' }], rationale: 'An isosceles triangle has two equal base angles.' },
    { id: 'fb-7', stem: 'A square has side (2x + 1) cm and perimeter 28 cm. 4(2x + 1) = 28, so x = ___.', template: 'x = __BLANK__', blanks: [{ answer: '3' }], rationale: '8x + 4 = 28 → 8x = 24 → x = 3.' },
    { id: 'fb-8', stem: 'Angles on a straight line sum to ___ degrees.', template: 'Angles on a straight line add up to __BLANK__°', blanks: [{ answer: '180' }], rationale: 'Adjacent angles on a straight line always sum to 180°.' },

    // ── Forming equations from words ──
    { id: 'fb-9', stem: 'Three consecutive integers: n, n + 1, n + 2. Their sum = 3n + ___.', template: 'Sum = 3n + __BLANK__', blanks: [{ answer: '3' }], rationale: 'n + (n + 1) + (n + 2) = 3n + 3.' },
    { id: 'fb-10', stem: '"I think of a number, multiply by 5 and subtract 3. The result is 17." The equation is 5n − 3 = ___.', template: '5n − 3 = __BLANK__', blanks: [{ answer: '17' }], rationale: 'Translating the words directly: multiply by 5 → 5n, subtract 3 → 5n − 3, result is 17.' },
    { id: 'fb-11', stem: 'When forming equations from words, the first step is to ___ the unknown.', template: 'Step 1: __BLANK__ the unknown', blanks: [{ answer: 'define' }], rationale: 'The first step is always to define the unknown, e.g. "Let n = the number".' },
    { id: 'fb-12', stem: 'Ali has x sweets. Bella has twice as many. Together they have 3x. If 3x = 24, then x = ___.', template: 'x = __BLANK__', blanks: [{ answer: '8' }], rationale: '3x = 24 → x = 8.' },
    { id: 'fb-13', stem: '"I think of a number, add 6, then double it. The result is 28." The equation is 2(n + 6) = 28, so n = ___.', template: 'n = __BLANK__', blanks: [{ answer: '8' }], rationale: '2(n + 6) = 28 → n + 6 = 14 → n = 8.' },
    { id: 'fb-14', stem: 'Two consecutive odd numbers sum to 40. If the first is n, the second is n + ___.', template: 'The second odd number is n + __BLANK__', blanks: [{ answer: '2' }], rationale: 'Consecutive odd numbers differ by 2, so they are n and n + 2.' },
    { id: 'fb-15', stem: 'After solving for x, you should ___ your answer back into the original problem.', template: 'Always __BLANK__ your answer', blanks: [{ answer: 'check' }], rationale: 'Substituting back confirms the solution satisfies the original condition.' },
  ],

  dragdrop: [
    {
      id: 'dd-1',
      stem: 'Sort each problem by the type of equation it forms.',
      categories: ['Equation from shapes', 'Equation from words'],
      items: [
        { text: 'A triangle has angles x°, 2x° and 60°', category: 'Equation from shapes' },
        { text: '"I think of a number, double it and add 5"', category: 'Equation from words' },
        { text: 'A rectangle with perimeter 40 cm and sides (x + 3) and (2x − 1)', category: 'Equation from shapes' },
        { text: '"Sam is 5 years older than Tom. Their ages total 29."', category: 'Equation from words' },
        { text: 'An isosceles triangle with base angles (3x + 10)°', category: 'Equation from shapes' },
        { text: '"Three consecutive integers sum to 99"', category: 'Equation from words' },
      ],
    },
    {
      id: 'dd-2',
      stem: 'Match each word-problem phrase to its algebraic expression (let n = the number).',
      categories: ['n + 7', '2n − 3', '3n', '(n + 4) ÷ 2'],
      items: [
        { text: 'A number increased by 7', category: 'n + 7' },
        { text: 'Three times a number', category: '3n' },
        { text: 'Double a number, then subtract 3', category: '2n − 3' },
        { text: 'Add 4 to a number, then halve it', category: '(n + 4) ÷ 2' },
      ],
    },
    {
      id: 'dd-3',
      stem: 'Match each geometric rule to the correct total.',
      categories: ['180°', '360°'],
      items: [
        { text: 'Angles in a triangle', category: '180°' },
        { text: 'Angles in a quadrilateral', category: '360°' },
        { text: 'Angles on a straight line', category: '180°' },
        { text: 'Angles around a point', category: '360°' },
      ],
    },
    {
      id: 'dd-4',
      stem: 'Sort each scenario by whether you use an angle sum or a perimeter to form the equation.',
      categories: ['Angle sum', 'Perimeter'],
      items: [
        { text: 'Three angles of a triangle given algebraically', category: 'Angle sum' },
        { text: 'Sides of a rectangle given with a total distance around', category: 'Perimeter' },
        { text: 'Four angles in a quadrilateral expressed in terms of x', category: 'Angle sum' },
        { text: 'Three sides of a triangle adding up to 42 cm', category: 'Perimeter' },
        { text: 'Two angles on a straight line given in terms of x', category: 'Angle sum' },
      ],
    },
    {
      id: 'dd-5',
      stem: 'Match each word-problem type to its correct setup (let x = unknown).',
      categories: ['x + (x + 1) + (x + 2)', 'x + 2x = total', '3x − 8 = result', 'x + (x + 30) = sum'],
      items: [
        { text: 'Sum of three consecutive integers', category: 'x + (x + 1) + (x + 2)' },
        { text: '"One value is double the other, total given"', category: 'x + 2x = total' },
        { text: '"Triple a number then subtract 8 equals result"', category: '3x − 8 = result' },
        { text: '"Father is 30 years older, combined ages given"', category: 'x + (x + 30) = sum' },
      ],
    },
    {
      id: 'dd-6',
      stem: 'Match each shape property to the correct equation component.',
      categories: ['Equal sides', 'Equal angles', 'Sum to 180°', 'Sum to 360°'],
      items: [
        { text: 'Equilateral triangle side lengths', category: 'Equal sides' },
        { text: 'Isosceles triangle base angles', category: 'Equal angles' },
        { text: 'Triangle interior angles', category: 'Sum to 180°' },
        { text: 'Quadrilateral interior angles', category: 'Sum to 360°' },
      ],
    },
    {
      id: 'dd-7',
      stem: 'Sort each expression into what it represents in the problem: "A pen costs $1.50 more than a pencil. 4 pens and 2 pencils cost $12."',
      categories: ['Pencil cost', 'Pen cost', 'Total cost equation'],
      items: [
        { text: 'x', category: 'Pencil cost' },
        { text: 'x + 1.50', category: 'Pen cost' },
        { text: '4(x + 1.50) + 2x = 12', category: 'Total cost equation' },
      ],
    },
    {
      id: 'dd-8',
      stem: 'Match each phrase to "from shapes" or "from words".',
      categories: ['From shapes', 'From words'],
      items: [
        { text: 'Perimeter of a pentagon = 45 cm', category: 'From shapes' },
        { text: '"Five more than twice a number is 19"', category: 'From words' },
        { text: 'Angles in a triangle: (x + 10)°, 2x°, 50°', category: 'From shapes' },
        { text: '"A father is 4 times his son\'s age"', category: 'From words' },
      ],
    },
    {
      id: 'dd-9',
      stem: 'Match each step number to the correct action in the four-step method for word problems.',
      categories: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
      items: [
        { text: 'Define the unknown', category: 'Step 1' },
        { text: 'Express other quantities in terms of the unknown', category: 'Step 2' },
        { text: 'Form the equation from the given condition', category: 'Step 3' },
        { text: 'Solve the equation and state the answer', category: 'Step 4' },
      ],
    },
    {
      id: 'dd-10',
      stem: 'Classify each equation as forming from a shape rule or a word problem.',
      categories: ['Shape rule', 'Word problem'],
      items: [
        { text: '(3x + 10) + (2x + 5) + x = 180', category: 'Shape rule' },
        { text: '2n + 7 = 4n − 3', category: 'Word problem' },
        { text: '2(2x + 1) + 2(x − 3) = 26', category: 'Shape rule' },
        { text: 'x + (x + 1) + (x + 2) = 63', category: 'Word problem' },
      ],
    },
  ],

  sequence: [
    {
      id: 'seq-1',
      stem: 'Order the steps to form and solve an equation from a triangle with angles x°, (2x + 10)° and (x + 30)°.',
      steps: [
        'Identify the rule: angles in a triangle sum to 180°',
        'Write the equation: x + (2x + 10) + (x + 30) = 180',
        'Simplify: 4x + 40 = 180',
        'Solve: 4x = 140, so x = 35',
      ],
    },
    {
      id: 'seq-2',
      stem: 'Order the steps to solve: "I think of a number, multiply by 4 and subtract 3. The result is 21."',
      steps: [
        'Define the unknown: let n = the number',
        'Form the equation: 4n − 3 = 21',
        'Solve: 4n = 24, so n = 6',
        'Check: 4 × 6 − 3 = 21 ✓',
      ],
    },
    {
      id: 'seq-3',
      stem: 'Order the steps to find x when a rectangle has length (3x + 2) cm, width (x + 5) cm and perimeter 46 cm.',
      steps: [
        'Write perimeter formula: 2 × length + 2 × width',
        'Substitute: 2(3x + 2) + 2(x + 5) = 46',
        'Expand: 6x + 4 + 2x + 10 = 46',
        'Simplify and solve: 8x + 14 = 46, so x = 4',
      ],
    },
    {
      id: 'seq-4',
      stem: 'Order the steps to solve: "The sum of three consecutive integers is 63."',
      steps: [
        'Let the integers be n, n + 1 and n + 2',
        'Form: n + (n + 1) + (n + 2) = 63',
        'Simplify: 3n + 3 = 63',
        'Solve: n = 20, so the integers are 20, 21 and 22',
      ],
    },
    {
      id: 'seq-5',
      stem: 'Order the steps to solve an age problem: "Ali is 3 times as old as Ben. In 5 years Ali will be twice as old as Ben."',
      steps: [
        'Define: let Ben\'s age = x, so Ali\'s age = 3x',
        'In 5 years: Ben = x + 5, Ali = 3x + 5',
        'Form equation: 3x + 5 = 2(x + 5)',
        'Solve: 3x + 5 = 2x + 10, so x = 5',
      ],
    },
    {
      id: 'seq-6',
      stem: 'Order the steps to form an equation from an isosceles triangle with base angles (2x + 5)° and apex angle (x + 20)°.',
      steps: [
        'Identify: isosceles → two base angles are equal',
        'Write: 2(2x + 5) + (x + 20) = 180',
        'Expand: 4x + 10 + x + 20 = 180',
        'Solve: 5x + 30 = 180, so x = 30',
      ],
    },
    {
      id: 'seq-7',
      stem: 'Order the steps to solve: "A pen costs $1.20 more than a pencil. 3 pens and 2 pencils cost $8.40."',
      steps: [
        'Let pencil = x, so pen = x + 1.20',
        'Form: 3(x + 1.20) + 2x = 8.40',
        'Expand: 3x + 3.60 + 2x = 8.40',
        'Solve: 5x = 4.80, pencil = $0.96, pen = $2.16',
      ],
    },
    {
      id: 'seq-8',
      stem: 'Order the four-step method for forming equations from words.',
      steps: [
        'Define: choose a letter for the unknown',
        'Express: write all quantities in terms of that letter',
        'Form: write an equation using the given condition',
        'Solve: solve the equation and state the answer in context',
      ],
    },
  ],

  keyword: [
    // ── Forming equations from shapes ──
    { id: 'kw-1', stem: 'A triangle has angles (x + 15)°, (2x − 5)° and (x + 10)°. Form an equation and find x. [3 marks]', marks: 3, keywords: ['180', '4x + 20 = 180', 'x = 40'], modelAnswer: 'Angles in a triangle sum to 180°. (x + 15) + (2x − 5) + (x + 10) = 180 → 4x + 20 = 180 → 4x = 160 → x = 40.' },
    { id: 'kw-2', stem: 'A rectangle has sides (3x − 1) cm and (x + 4) cm. The perimeter is 38 cm. Find the length. [3 marks]', marks: 3, keywords: ['2(3x − 1) + 2(x + 4) = 38', 'x = 4', '11'], modelAnswer: '2(3x − 1) + 2(x + 4) = 38 → 6x − 2 + 2x + 8 = 38 → 8x + 6 = 38 → 8x = 32 → x = 4. Length = 3(4) − 1 = 11 cm.' },
    { id: 'kw-3', stem: 'An isosceles triangle has base angles of (4x − 5)° and an apex angle of 2x°. Find the size of each angle. [3 marks]', marks: 3, keywords: ['2(4x − 5) + 2x = 180', 'x = 19', '71'], modelAnswer: '2(4x − 5) + 2x = 180 → 8x − 10 + 2x = 180 → 10x = 190 → x = 19. Base angles = 4(19) − 5 = 71°, apex = 38°.' },
    { id: 'kw-4', stem: 'Two angles on a straight line are (5x + 10)° and (3x + 2)°. Find the value of both angles. [3 marks]', marks: 3, keywords: ['5x + 10 + 3x + 2 = 180', 'x = 21', '115'], modelAnswer: '5x + 10 + 3x + 2 = 180 → 8x + 12 = 180 → 8x = 168 → x = 21. Angles: 5(21) + 10 = 115° and 3(21) + 2 = 65°.' },
    { id: 'kw-5', stem: 'A quadrilateral has angles x°, 2x°, (x + 50)° and (3x − 10)°. Find x. [2 marks]', marks: 2, keywords: ['7x + 40 = 360', 'x ≈ 45.7'], modelAnswer: 'x + 2x + x + 50 + 3x − 10 = 360 → 7x + 40 = 360 → 7x = 320 → x ≈ 45.7.' },
    { id: 'kw-6', stem: 'A triangle has perimeter 48 cm. Sides are (2x + 1) cm, (3x − 2) cm and (x + 7) cm. Find the longest side. [3 marks]', marks: 3, keywords: ['6x + 6 = 48', 'x = 7', '19'], modelAnswer: '(2x + 1) + (3x − 2) + (x + 7) = 48 → 6x + 6 = 48 → 6x = 42 → x = 7. Sides: 15, 19, 14. Longest = 19 cm.' },

    // ── Forming equations from words ──
    { id: 'kw-7', stem: '"I think of a number, double it and add 7. The result is 3 less than 4 times the number." Find the number. [3 marks]', marks: 3, keywords: ['2n + 7 = 4n − 3', '10 = 2n', 'n = 5'], modelAnswer: 'Let n = the number. 2n + 7 = 4n − 3 → 7 + 3 = 4n − 2n → 10 = 2n → n = 5.' },
    { id: 'kw-8', stem: 'The sum of four consecutive integers is 86. Find all four integers. [3 marks]', marks: 3, keywords: ['4n + 6 = 86', 'n = 20', '20, 21, 22, 23'], modelAnswer: 'Let n, n+1, n+2, n+3. Sum: 4n + 6 = 86 → 4n = 80 → n = 20. Integers: 20, 21, 22, 23.' },
    { id: 'kw-9', stem: 'Sara is 5 years older than Mia. Together their ages total 37. How old is each person? [2 marks]', marks: 2, keywords: ['2x + 5 = 37', 'Mia is 16'], modelAnswer: 'Let Mia = x, Sara = x + 5. x + x + 5 = 37 → 2x = 32 → x = 16. Mia is 16, Sara is 21.' },
    { id: 'kw-10', stem: 'A book costs $3 more than a magazine. Four books and two magazines cost $30. Find the cost of a book. [3 marks]', marks: 3, keywords: ['4(x + 3) + 2x = 30', 'x = 3', 'book costs $6'], modelAnswer: 'Let magazine = x, book = x + 3. 4(x + 3) + 2x = 30 → 4x + 12 + 2x = 30 → 6x = 18 → x = 3. Book = $6.' },
    { id: 'kw-11', stem: '"I think of a number, subtract 5, then multiply by 3. The result is 27." Find the number. [2 marks]', marks: 2, keywords: ['3(n − 5) = 27', 'n = 14'], modelAnswer: '3(n − 5) = 27 → n − 5 = 9 → n = 14.' },
    { id: 'kw-12', stem: 'Explain the four-step method for forming equations from word problems. [2 marks]', marks: 2, keywords: ['define', 'form', 'solve'], modelAnswer: '1. Define the unknown (let n = ...). 2. Express other quantities in terms of n. 3. Form an equation from the condition. 4. Solve and state the answer in context.' },
  ],

  flashcards: [
    // ── Forming equations from shapes ──
    { id: 'fc-1', front: 'What do the angles of a triangle always sum to?', back: '180°', topic: 'Forming equations from shapes' },
    { id: 'fc-2', front: 'What do the angles of a quadrilateral always sum to?', back: '360°', topic: 'Forming equations from shapes' },
    { id: 'fc-3', front: 'What do angles on a straight line always sum to?', back: '180°', topic: 'Forming equations from shapes' },
    { id: 'fc-4', front: 'What do angles around a point always sum to?', back: '360°', topic: 'Forming equations from shapes' },
    { id: 'fc-5', front: 'In an isosceles triangle, which angles are equal?', back: 'The two base angles are equal.', topic: 'Forming equations from shapes' },
    { id: 'fc-6', front: 'What is the formula for the perimeter of a rectangle?', back: 'Perimeter = 2 × length + 2 × width', topic: 'Forming equations from shapes' },
    { id: 'fc-7', front: 'A triangle has angles x°, 2x° and 3x°. What equation do you write?', back: 'x + 2x + 3x = 180 → 6x = 180 → x = 30', topic: 'Forming equations from shapes' },
    { id: 'fc-8', front: 'A rectangle has length (2x + 1) and width x. Perimeter = 26. What is the equation?', back: '2(2x + 1) + 2x = 26 → 4x + 2 + 2x = 26 → 6x = 24 → x = 4', topic: 'Forming equations from shapes' },
    { id: 'fc-9', front: 'An equilateral triangle has sides (2x − 3) and (x + 4). What equation finds x?', back: '2x − 3 = x + 4 → x = 7 (all sides are equal)', topic: 'Forming equations from shapes' },
    { id: 'fc-10', front: 'What is the first step when forming an equation from a shape?', back: 'Identify the geometric rule (angle sum, perimeter, equal sides, etc.).', topic: 'Forming equations from shapes' },
    { id: 'fc-11', front: 'After finding x from a shape equation, what must you always do?', back: 'Substitute x back to find the actual lengths or angles, and check the geometric rule.', topic: 'Forming equations from shapes' },
    { id: 'fc-12', front: 'A square has side (x + 3) cm and perimeter 48 cm. Find x.', back: '4(x + 3) = 48 → x + 3 = 12 → x = 9', topic: 'Forming equations from shapes' },
    { id: 'fc-13', front: 'Two angles on a straight line are (4x + 10)° and (2x + 50)°. Find x.', back: '4x + 10 + 2x + 50 = 180 → 6x + 60 = 180 → 6x = 120 → x = 20', topic: 'Forming equations from shapes' },

    // ── Forming equations from words ──
    { id: 'fc-14', front: 'What are the four steps for forming equations from words?', back: '1. Define the unknown. 2. Express other quantities. 3. Form the equation. 4. Solve and state the answer.', topic: 'Forming equations from words' },
    { id: 'fc-15', front: '"I think of a number, multiply by 3, add 5. Result is 26." Write the equation.', back: 'Let n = the number. 3n + 5 = 26, so n = 7.', topic: 'Forming equations from words' },
    { id: 'fc-16', front: 'How do you represent three consecutive integers algebraically?', back: 'n, n + 1, n + 2', topic: 'Forming equations from words' },
    { id: 'fc-17', front: 'How do you represent three consecutive even numbers?', back: 'n, n + 2, n + 4 (where n is even)', topic: 'Forming equations from words' },
    { id: 'fc-18', front: '"Sam is twice as old as Tom. Total age = 36." Find both ages.', back: 'Tom = x, Sam = 2x. x + 2x = 36 → 3x = 36 → x = 12. Tom = 12, Sam = 24.', topic: 'Forming equations from words' },
    { id: 'fc-19', front: 'In an age problem, how do you express someone\'s age "in 5 years"?', back: 'Add 5 to their current age expression. If current age = x, in 5 years = x + 5.', topic: 'Forming equations from words' },
    { id: 'fc-20', front: '"A pen costs $1.20 more than a pencil." If pencil = x, what is the pen\'s cost?', back: 'Pen = x + 1.20', topic: 'Forming equations from words' },
    { id: 'fc-21', front: 'What common mistake should you avoid when answering word-problem equations?', back: 'Don\'t just write x = ... — state the full answer in context (e.g. "Ben is 5 years old").', topic: 'Forming equations from words' },
    { id: 'fc-22', front: '"I think of a number, add 9, halve it. Answer is 8." Write and solve.', back: '(n + 9) ÷ 2 = 8 → n + 9 = 16 → n = 7', topic: 'Forming equations from words' },
    { id: 'fc-23', front: 'Sum of two numbers is 40 and one is 6 more than the other. Find both.', back: 'x + (x + 6) = 40 → 2x = 34 → x = 17. Numbers: 17 and 23.', topic: 'Forming equations from words' },
    { id: 'fc-24', front: 'Why should you check your answer after solving a word-problem equation?', back: 'To verify it satisfies the original condition — the equation may be correct but the answer might not match the context.', topic: 'Forming equations from words' },
    { id: 'fc-25', front: '"Five identical books cost $4 more than three identical books." Write the equation.', back: '5b = 3b + 4 → 2b = 4 → b = $2', topic: 'Forming equations from words' },
  ],

};
