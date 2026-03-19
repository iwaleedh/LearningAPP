export const exercises_olevel_maths_core_1_8 = {

  mcq: [
    /* ── Laws of Indices ── */
    { id: 'mcq-1', stem: 'Simplify a⁴ × a³.', options: ['a⁷', 'a¹²', 'a¹', '2a⁷'], correctAnswer: 0, rationale: 'When multiplying with the same base, add the indices: 4 + 3 = 7.', topic: 'Laws of Indices' },
    { id: 'mcq-2', stem: 'Simplify x⁸ ÷ x².', options: ['x⁴', 'x⁶', 'x¹⁰', 'x¹⁶'], correctAnswer: 1, rationale: 'When dividing with the same base, subtract the indices: 8 − 2 = 6.', topic: 'Laws of Indices' },
    { id: 'mcq-3', stem: 'Simplify (y³)⁴.', options: ['y⁷', 'y³⁴', 'y¹²', 'y⁶⁴'], correctAnswer: 2, rationale: 'Power of a power — multiply the indices: 3 × 4 = 12.', topic: 'Laws of Indices' },
    { id: 'mcq-4', stem: 'What is the value of 9⁰?', options: ['0', '9', '1', 'Undefined'], correctAnswer: 2, rationale: 'Any non-zero number raised to the power 0 equals 1.', topic: 'Laws of Indices' },
    { id: 'mcq-5', stem: 'Write 2⁻³ as a fraction.', options: ['1/6', '1/8', '−8', '−1/8'], correctAnswer: 1, rationale: '2⁻³ = 1/2³ = 1/8.', topic: 'Laws of Indices' },
    { id: 'mcq-6', stem: 'Simplify (2x³)².', options: ['2x⁶', '4x⁵', '4x⁶', '2x⁵'], correctAnswer: 2, rationale: 'Apply the power to both: 2² = 4 and (x³)² = x⁶, giving 4x⁶.', topic: 'Laws of Indices' },
    { id: 'mcq-7', stem: 'Simplify p⁵ × p⁻².', options: ['p³', 'p⁷', 'p¹⁰', 'p⁻¹⁰'], correctAnswer: 0, rationale: 'Add the indices: 5 + (−2) = 3.', topic: 'Laws of Indices' },
    { id: 'mcq-8', stem: 'What is the value of (3/5)⁻¹?', options: ['−3/5', '5/3', '−5/3', '15'], correctAnswer: 1, rationale: 'A negative index of −1 means the reciprocal: (3/5)⁻¹ = 5/3.', topic: 'Laws of Indices' },

    /* ── Powers and Roots ── */
    { id: 'mcq-9', stem: 'What is √144?', options: ['11', '12', '13', '14'], correctAnswer: 1, rationale: '12 × 12 = 144, so √144 = 12.', topic: 'Powers and Roots' },
    { id: 'mcq-10', stem: 'What is ∛64?', options: ['2', '4', '8', '16'], correctAnswer: 1, rationale: '4 × 4 × 4 = 64, so ∛64 = 4.', topic: 'Powers and Roots' },
    { id: 'mcq-11', stem: 'Evaluate 27²ᐟ³.', options: ['3', '9', '18', '27'], correctAnswer: 1, rationale: 'Cube root of 27 = 3, then 3² = 9.', topic: 'Powers and Roots' },
    { id: 'mcq-12', stem: 'Evaluate 16¹ᐟ⁴.', options: ['2', '4', '8', '16'], correctAnswer: 0, rationale: 'The 4th root of 16 = 2 because 2⁴ = 16.', topic: 'Powers and Roots' },
    { id: 'mcq-13', stem: 'What is the value of 5³?', options: ['15', '25', '125', '625'], correctAnswer: 2, rationale: '5 × 5 × 5 = 125.', topic: 'Powers and Roots' },
    { id: 'mcq-14', stem: 'Evaluate 8⁻²ᐟ³.', options: ['1/4', '4', '−4', '1/2'], correctAnswer: 0, rationale: '∛8 = 2, 2² = 4, then 8⁻²ᐟ³ = 1/4.', topic: 'Powers and Roots' },
    { id: 'mcq-15', stem: 'Which of these equals √49?', options: ['5', '6', '7', '8'], correctAnswer: 2, rationale: '7 × 7 = 49.', topic: 'Powers and Roots' },

    /* ── Converting to/from Standard Form ── */
    { id: 'mcq-16', stem: 'Write 56 000 in standard form.', options: ['5.6 × 10³', '56 × 10³', '5.6 × 10⁴', '0.56 × 10⁵'], correctAnswer: 2, rationale: 'Move the decimal 4 places left: 5.6 × 10⁴.', topic: 'Converting to/from Standard Form' },
    { id: 'mcq-17', stem: 'Write 0.0074 in standard form.', options: ['7.4 × 10⁻²', '7.4 × 10⁻³', '74 × 10⁻⁴', '0.74 × 10⁻²'], correctAnswer: 1, rationale: 'Move the decimal 3 places right: 7.4 × 10⁻³.', topic: 'Converting to/from Standard Form' },
    { id: 'mcq-18', stem: 'Convert 4.7 × 10⁵ to an ordinary number.', options: ['47 000', '470 000', '4 700 000', '4 700'], correctAnswer: 1, rationale: 'Move the decimal 5 places right: 470 000.', topic: 'Converting to/from Standard Form' },
    { id: 'mcq-19', stem: 'Convert 6.8 × 10⁻⁴ to an ordinary number.', options: ['0.68', '0.068', '0.0068', '0.00068'], correctAnswer: 3, rationale: 'Move the decimal 4 places left: 0.00068.', topic: 'Converting to/from Standard Form' },
    { id: 'mcq-20', stem: 'Which of these is NOT in correct standard form?', options: ['3.5 × 10⁴', '12 × 10³', '9.01 × 10⁻²', '1.0 × 10⁶'], correctAnswer: 1, rationale: '12 is not between 1 and 10, so 12 × 10³ is not standard form.', topic: 'Converting to/from Standard Form' },
    { id: 'mcq-21', stem: 'Write 3 820 000 in standard form.', options: ['3.82 × 10⁵', '3.82 × 10⁶', '38.2 × 10⁵', '3.82 × 10⁷'], correctAnswer: 1, rationale: 'Move the decimal 6 places left: 3.82 × 10⁶.', topic: 'Converting to/from Standard Form' },
    { id: 'mcq-22', stem: 'Rewrite 15 × 10³ in correct standard form.', options: ['1.5 × 10³', '1.5 × 10⁴', '15 × 10³', '0.15 × 10⁵'], correctAnswer: 1, rationale: '15 = 1.5 × 10¹, so 15 × 10³ = 1.5 × 10⁴.', topic: 'Converting to/from Standard Form' },

    /* ── Operations with Standard Form ── */
    { id: 'mcq-23', stem: 'Calculate (3 × 10⁴) × (2 × 10⁶). Give your answer in standard form.', options: ['6 × 10¹⁰', '5 × 10¹⁰', '6 × 10²⁴', '5 × 10²⁴'], correctAnswer: 0, rationale: '3 × 2 = 6; add indices 4 + 6 = 10. Answer: 6 × 10¹⁰.', topic: 'Operations with Standard Form' },
    { id: 'mcq-24', stem: 'Calculate (8 × 10⁷) ÷ (2 × 10³). Give your answer in standard form.', options: ['4 × 10⁴', '6 × 10⁴', '4 × 10¹⁰', '16 × 10⁴'], correctAnswer: 0, rationale: '8 ÷ 2 = 4; subtract indices 7 − 3 = 4. Answer: 4 × 10⁴.', topic: 'Operations with Standard Form' },
    { id: 'mcq-25', stem: 'Calculate (4 × 10³) × (5 × 10²). Give your answer in standard form.', options: ['20 × 10⁵', '2 × 10⁶', '2 × 10⁵', '20 × 10⁶'], correctAnswer: 1, rationale: '4 × 5 = 20, indices 3 + 2 = 5 → 20 × 10⁵ = 2 × 10⁶.', topic: 'Operations with Standard Form' },
    { id: 'mcq-26', stem: 'Calculate 3.2 × 10⁵ + 4 × 10⁴. Give your answer in standard form.', options: ['7.2 × 10⁵', '3.6 × 10⁵', '3.6 × 10⁴', '7.2 × 10⁹'], correctAnswer: 1, rationale: 'Convert: 4 × 10⁴ = 0.4 × 10⁵. Then 3.2 + 0.4 = 3.6 × 10⁵.', topic: 'Operations with Standard Form' },
    { id: 'mcq-27', stem: 'Calculate (6 × 10⁵) ÷ (4 × 10²). Give your answer in standard form.', options: ['2 × 10³', '1.5 × 10³', '1.5 × 10⁷', '2 × 10⁷'], correctAnswer: 1, rationale: '6 ÷ 4 = 1.5; subtract indices 5 − 2 = 3. Answer: 1.5 × 10³.', topic: 'Operations with Standard Form' },
    { id: 'mcq-28', stem: 'Calculate 5.1 × 10⁶ − 3 × 10⁵. Give your answer in standard form.', options: ['4.8 × 10⁶', '2.1 × 10⁶', '4.8 × 10⁵', '2.1 × 10¹'], correctAnswer: 0, rationale: '3 × 10⁵ = 0.3 × 10⁶. Then 5.1 − 0.3 = 4.8 × 10⁶.', topic: 'Operations with Standard Form' },
    { id: 'mcq-29', stem: 'Which step do you do first when multiplying numbers in standard form?', options: ['Add the A values', 'Multiply the A values', 'Subtract the indices', 'Add the indices'], correctAnswer: 1, rationale: 'When multiplying in standard form, you multiply the A values first and add the indices.', topic: 'Operations with Standard Form' },
    { id: 'mcq-30', stem: 'Why must you adjust after getting 20 × 10⁵?', options: ['20 is greater than 10, so A is out of range', 'The power is wrong', 'You should subtract', 'Standard form must have a negative index'], correctAnswer: 0, rationale: 'In standard form, A must satisfy 1 ≤ A < 10. Since 20 ≥ 10, you rewrite as 2 × 10⁶.', topic: 'Operations with Standard Form' },
  ],

  fillblank: [
    /* ── Laws of Indices ── */
    { id: 'fb-1', stem: 'When you multiply powers with the same base you ___ the indices.', template: 'When you multiply powers with the same base you __BLANK__ the indices.', blanks: [{ answer: 'add' }], rationale: 'aᵐ × aⁿ = aᵐ⁺ⁿ, so we add the indices.' },
    { id: 'fb-2', stem: 'When you divide powers with the same base you ___ the indices.', template: 'When you divide powers with the same base you __BLANK__ the indices.', blanks: [{ answer: 'subtract' }], rationale: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ, so we subtract the indices.' },
    { id: 'fb-3', stem: 'Any non-zero number raised to the power 0 equals ___.', template: 'Any non-zero number raised to the power 0 equals __BLANK__.', blanks: [{ answer: '1' }], rationale: 'a⁰ = 1 for any a ≠ 0.' },
    { id: 'fb-4', stem: 'a⁻ⁿ can be rewritten as ___.', template: 'a⁻ⁿ can be rewritten as __BLANK__.', blanks: [{ answer: '1/aⁿ' }], rationale: 'A negative index means the reciprocal: a⁻ⁿ = 1/aⁿ.' },
    /* ── Powers and Roots ── */
    { id: 'fb-5', stem: 'The square root of 81 is ___.', template: 'The square root of 81 is __BLANK__.', blanks: [{ answer: '9' }], rationale: '9 × 9 = 81, so √81 = 9.' },
    { id: 'fb-6', stem: 'The cube root of 125 is ___.', template: 'The cube root of 125 is __BLANK__.', blanks: [{ answer: '5' }], rationale: '5 × 5 × 5 = 125, so ∛125 = 5.' },
    { id: 'fb-7', stem: 'In a fractional index, the denominator tells you the ___.', template: 'In a fractional index, the denominator tells you the __BLANK__.', blanks: [{ answer: 'root' }], rationale: 'In aᵐᐟⁿ, n is the root and m is the power.' },
    { id: 'fb-8', stem: '16³ᐟ⁴ = ___.', template: '16³ᐟ⁴ = __BLANK__.', blanks: [{ answer: '8' }], rationale: '4th root of 16 = 2, then 2³ = 8.' },
    /* ── Converting to/from Standard Form ── */
    { id: 'fb-9', stem: 'In standard form, A must satisfy 1 ≤ A < ___.', template: 'In standard form, A must satisfy 1 ≤ A < __BLANK__.', blanks: [{ answer: '10' }], rationale: 'The value of A must be at least 1 but less than 10.' },
    { id: 'fb-10', stem: 'For large numbers the power of 10 is ___.', template: 'For large numbers the power of 10 is __BLANK__.', blanks: [{ answer: 'positive' }], rationale: 'Large numbers have a positive index; small decimals have a negative index.' },
    { id: 'fb-11', stem: '0.000 056 in standard form is 5.6 × 10___.', template: '0.000 056 in standard form is 5.6 × 10__BLANK__.', blanks: [{ answer: '⁻⁵' }], rationale: 'The decimal moves 5 places right, so n = −5.' },
    { id: 'fb-12', stem: '2.03 × 10³ as an ordinary number is ___.', template: '2.03 × 10³ as an ordinary number is __BLANK__.', blanks: [{ answer: '2030' }], rationale: 'Move the decimal 3 places right: 2030.' },
    /* ── Operations with Standard Form ── */
    { id: 'fb-13', stem: 'When multiplying in standard form you multiply the A values and ___ the indices.', template: 'When multiplying in standard form you multiply the A values and __BLANK__ the indices.', blanks: [{ answer: 'add' }], rationale: '(A₁ × 10ᵐ)(A₂ × 10ⁿ) = A₁A₂ × 10ᵐ⁺ⁿ.' },
    { id: 'fb-14', stem: 'Before adding or subtracting in standard form you must make the ___ the same.', template: 'Before adding or subtracting in standard form you must make the __BLANK__ the same.', blanks: [{ answer: 'powers' }], rationale: 'You can only combine A values when the powers of 10 match.' },
    { id: 'fb-15', stem: '(8 × 10⁷) ÷ (2 × 10³) = ___ × 10⁴.', template: '(8 × 10⁷) ÷ (2 × 10³) = __BLANK__ × 10⁴.', blanks: [{ answer: '4' }], rationale: '8 ÷ 2 = 4 and 7 − 3 = 4, giving 4 × 10⁴.' },
  ],

  dragdrop: [
    /* ── Laws of Indices ── */
    { id: 'dd-1', stem: 'Sort each expression by the index law used.', categories: ['Add indices', 'Subtract indices', 'Multiply indices'], items: [
      { text: 'x³ × x⁵', category: 'Add indices' },
      { text: 'y⁸ ÷ y²', category: 'Subtract indices' },
      { text: '(m⁴)³', category: 'Multiply indices' },
      { text: 'a² × a⁶', category: 'Add indices' },
      { text: 'b⁹ ÷ b⁵', category: 'Subtract indices' },
      { text: '(k²)⁵', category: 'Multiply indices' },
    ]},
    { id: 'dd-2', stem: 'Sort each value as positive, negative, or equal to 1.', categories: ['Positive', 'Negative', 'Equal to 1'], items: [
      { text: '3²', category: 'Positive' },
      { text: '(−2)³', category: 'Negative' },
      { text: '7⁰', category: 'Equal to 1' },
      { text: '5⁻²', category: 'Positive' },
      { text: '1⁰', category: 'Equal to 1' },
    ]},
    /* ── Powers and Roots ── */
    { id: 'dd-3', stem: 'Match each expression to its value.', categories: ['4', '8', '9', '2'], items: [
      { text: '∛64', category: '4' },
      { text: '2³', category: '8' },
      { text: '27²ᐟ³', category: '9' },
      { text: '16¹ᐟ⁴', category: '2' },
    ]},
    { id: 'dd-4', stem: 'Sort into perfect squares and non-perfect squares.', categories: ['Perfect square', 'Not a perfect square'], items: [
      { text: '36', category: 'Perfect square' },
      { text: '49', category: 'Perfect square' },
      { text: '50', category: 'Not a perfect square' },
      { text: '64', category: 'Perfect square' },
      { text: '72', category: 'Not a perfect square' },
    ]},
    /* ── Converting to/from Standard Form ── */
    { id: 'dd-5', stem: 'Sort each number by whether its standard form uses a positive or negative power of 10.', categories: ['Positive power', 'Negative power'], items: [
      { text: '56 000', category: 'Positive power' },
      { text: '0.0074', category: 'Negative power' },
      { text: '3 820 000', category: 'Positive power' },
      { text: '0.000 056', category: 'Negative power' },
      { text: '470 000', category: 'Positive power' },
      { text: '0.015', category: 'Negative power' },
    ]},
    { id: 'dd-6', stem: 'Sort into correct standard form and NOT correct standard form.', categories: ['Correct', 'Not correct'], items: [
      { text: '3.5 × 10⁴', category: 'Correct' },
      { text: '12 × 10³', category: 'Not correct' },
      { text: '0.5 × 10⁶', category: 'Not correct' },
      { text: '9.01 × 10⁻²', category: 'Correct' },
      { text: '1.0 × 10⁶', category: 'Correct' },
    ]},
    /* ── Operations with Standard Form ── */
    { id: 'dd-7', stem: 'Match each standard form calculation to the correct first step.', categories: ['Multiply A values', 'Divide A values', 'Make powers equal'], items: [
      { text: '(3 × 10⁴) × (2 × 10⁶)', category: 'Multiply A values' },
      { text: '(8 × 10⁷) ÷ (2 × 10³)', category: 'Divide A values' },
      { text: '3.2 × 10⁵ + 4 × 10⁴', category: 'Make powers equal' },
    ]},
    { id: 'dd-8', stem: 'Match each standard form product to its simplified answer.', categories: ['6 × 10¹⁰', '2 × 10⁶', '1.5 × 10³'], items: [
      { text: '(3 × 10⁴) × (2 × 10⁶)', category: '6 × 10¹⁰' },
      { text: '(4 × 10³) × (5 × 10²)', category: '2 × 10⁶' },
      { text: '(6 × 10⁵) ÷ (4 × 10²)', category: '1.5 × 10³' },
    ]},
    { id: 'dd-9', stem: 'Sort these numbers by size from smallest to largest category.', categories: ['Smallest', 'Middle', 'Largest'], items: [
      { text: '3 × 10⁻⁴', category: 'Smallest' },
      { text: '5.2 × 10²', category: 'Middle' },
      { text: '1.7 × 10⁶', category: 'Largest' },
    ]},
    { id: 'dd-10', stem: 'Sort the operation rules for standard form.', categories: ['Add the indices', 'Subtract the indices', 'Equalise powers first'], items: [
      { text: 'Multiplying', category: 'Add the indices' },
      { text: 'Dividing', category: 'Subtract the indices' },
      { text: 'Adding', category: 'Equalise powers first' },
      { text: 'Subtracting', category: 'Equalise powers first' },
    ]},
  ],

  sequence: [
    /* ── Laws of Indices ── */
    { id: 'seq-1', stem: 'Put the steps in order to simplify (3a²b)³.', steps: ['Apply the power to the coefficient: 3³ = 27', 'Apply the power to a²: (a²)³ = a⁶', 'Apply the power to b: b³', 'Write the answer: 27a⁶b³'] },
    { id: 'seq-2', stem: 'Put the steps in order to evaluate (2/5)⁻².', steps: ['Flip the fraction: (5/2)', 'Square the fraction: (5/2)²', 'Calculate numerator: 5² = 25', 'Calculate denominator: 2² = 4, answer is 25/4'] },
    /* ── Powers and Roots ── */
    { id: 'seq-3', stem: 'Put the steps in order to evaluate 27²ᐟ³.', steps: ['Identify the root: denominator 3 means cube root', 'Find the cube root: ∛27 = 3', 'Apply the power: 3² = 9', 'Write the answer: 9'] },
    { id: 'seq-4', stem: 'Put the steps in order to evaluate 8⁻²ᐟ³.', steps: ['Find the cube root: ∛8 = 2', 'Square the result: 2² = 4', 'Apply the negative index: take the reciprocal', 'Write the answer: 1/4'] },
    /* ── Converting to/from Standard Form ── */
    { id: 'seq-5', stem: 'Put the steps in order to write 56 000 in standard form.', steps: ['Place the decimal after the first significant digit: 5.6', 'Count how many places the decimal moved: 4 places left', 'Write the power of 10: 10⁴', 'Combine: 5.6 × 10⁴'] },
    { id: 'seq-6', stem: 'Put the steps in order to write 0.0074 in standard form.', steps: ['Place the decimal after the first significant digit: 7.4', 'Count how many places the decimal moved: 3 places right', 'The power is negative: 10⁻³', 'Combine: 7.4 × 10⁻³'] },
    /* ── Operations with Standard Form ── */
    { id: 'seq-7', stem: 'Put the steps in order to calculate (4 × 10³) × (5 × 10²).', steps: ['Multiply the A values: 4 × 5 = 20', 'Add the indices: 3 + 2 = 5', 'Combine: 20 × 10⁵', 'Adjust A to standard form: 2 × 10⁶'] },
    { id: 'seq-8', stem: 'Put the steps in order to add 3.2 × 10⁵ + 4 × 10⁴.', steps: ['Choose a common power: 10⁵', 'Convert: 4 × 10⁴ = 0.4 × 10⁵', 'Add the A values: 3.2 + 0.4 = 3.6', 'Write the answer: 3.6 × 10⁵'] },
  ],

  keyword: [
    /* ── Laws of Indices ── */
    { id: 'kw-1', stem: 'Explain what happens to the indices when you multiply two powers of the same base. [2 marks]', marks: 2, keywords: ['add', 'indices'], modelAnswer: 'When you multiply powers of the same base, you add the indices together. For example, aᵐ × aⁿ = aᵐ⁺ⁿ.' },
    { id: 'kw-2', stem: 'Why can you not simplify 2³ × 3⁴ using index laws? [2 marks]', marks: 2, keywords: ['different', 'base'], modelAnswer: 'The bases are different (2 and 3). Index laws only apply when the base is the same.' },
    { id: 'kw-3', stem: 'Explain what a⁰ equals and why. [2 marks]', marks: 2, keywords: ['1', 'zero'], modelAnswer: 'a⁰ = 1 for any non-zero value of a. This follows from the division law: aⁿ ÷ aⁿ = aⁿ⁻ⁿ = a⁰ = 1.' },
    /* ── Powers and Roots ── */
    { id: 'kw-4', stem: 'Describe how to evaluate a number with a fractional index such as a²ᐟ³. [2 marks]', marks: 2, keywords: ['root', 'power'], modelAnswer: 'First take the cube root (denominator is 3), then raise the result to the power 2 (numerator). Root first keeps numbers small.' },
    { id: 'kw-5', stem: 'Explain the difference between a square root and a cube root. [2 marks]', marks: 2, keywords: ['square', 'cube'], modelAnswer: 'A square root finds the number that multiplied by itself gives n. A cube root finds the number multiplied by itself three times. Cube roots can be negative.' },
    { id: 'kw-6', stem: 'Why is it recommended to take the root first when evaluating fractional indices? [1 mark]', marks: 1, keywords: ['smaller'], modelAnswer: 'Taking the root first gives a smaller number, making it easier to raise to a power without a calculator.' },
    /* ── Converting to/from Standard Form ── */
    { id: 'kw-7', stem: 'State the two conditions that define standard form A × 10ⁿ. [2 marks]', marks: 2, keywords: ['1 ≤ A < 10', 'integer'], modelAnswer: 'A must be between 1 and 10 (1 ≤ A < 10), and n must be an integer (positive or negative).' },
    { id: 'kw-8', stem: 'Explain how to decide whether the power of 10 is positive or negative when converting to standard form. [2 marks]', marks: 2, keywords: ['large', 'positive', 'negative'], modelAnswer: 'For large numbers the decimal moves left so n is positive. For small decimals the decimal moves right so n is negative.' },
    { id: 'kw-9', stem: 'Why is 15 × 10³ not in standard form, and how would you correct it? [2 marks]', marks: 2, keywords: ['15', 'not between', '1.5 × 10⁴'], modelAnswer: '15 is not between 1 and 10. Rewrite: 15 × 10³ = 1.5 × 10¹ × 10³ = 1.5 × 10⁴.' },
    /* ── Operations with Standard Form ── */
    { id: 'kw-10', stem: 'Describe the steps for multiplying two numbers in standard form. [2 marks]', marks: 2, keywords: ['multiply', 'add'], modelAnswer: 'Multiply the A values together and add the indices of 10. If the new A value is not between 1 and 10, adjust it.' },
    { id: 'kw-11', stem: 'Explain why you must equalise powers of 10 before adding numbers in standard form. [2 marks]', marks: 2, keywords: ['same power', 'combine'], modelAnswer: 'You can only add or subtract the A values when the powers of 10 are the same, because the place values must match before combining.' },
    { id: 'kw-12', stem: 'After computing a product in standard form, what check must you always perform? [1 mark]', marks: 1, keywords: ['A', 'range'], modelAnswer: 'Check that the A value is still between 1 and 10. If not, adjust by moving the decimal and changing the power of 10.' },
  ],

  flashcards: [
    /* ── Laws of Indices ── */
    { id: 'fc-1', front: 'State the multiplication law of indices.', back: 'aᵐ × aⁿ = aᵐ⁺ⁿ — add the indices.', topic: 'Laws of Indices' },
    { id: 'fc-2', front: 'State the division law of indices.', back: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ — subtract the indices.', topic: 'Laws of Indices' },
    { id: 'fc-3', front: 'State the power-of-a-power law.', back: '(aᵐ)ⁿ = aᵐⁿ — multiply the indices.', topic: 'Laws of Indices' },
    { id: 'fc-4', front: 'What is a⁰?', back: 'a⁰ = 1 (any non-zero base to the power 0).', topic: 'Laws of Indices' },
    { id: 'fc-5', front: 'What is a⁻ⁿ?', back: 'a⁻ⁿ = 1/aⁿ — flip to a fraction.', topic: 'Laws of Indices' },
    { id: 'fc-6', front: 'Evaluate 2⁻³.', back: '2⁻³ = 1/2³ = 1/8.', topic: 'Laws of Indices' },
    { id: 'fc-7', front: 'Simplify (2x³)².', back: '4x⁶ — apply the power to both 2 and x³.', topic: 'Laws of Indices' },
    /* ── Powers and Roots ── */
    { id: 'fc-8', front: 'What is √64?', back: '√64 = 8', topic: 'Powers and Roots' },
    { id: 'fc-9', front: 'What is ∛27?', back: '∛27 = 3', topic: 'Powers and Roots' },
    { id: 'fc-10', front: 'What does a¹ᐟ² mean?', back: 'a¹ᐟ² = √a (the square root of a).', topic: 'Powers and Roots' },
    { id: 'fc-11', front: 'What does a¹ᐟ³ mean?', back: 'a¹ᐟ³ = ∛a (the cube root of a).', topic: 'Powers and Roots' },
    { id: 'fc-12', front: 'Evaluate 27²ᐟ³.', back: '∛27 = 3, then 3² = 9.', topic: 'Powers and Roots' },
    { id: 'fc-13', front: 'Evaluate 16³ᐟ⁴.', back: '4th root of 16 = 2, then 2³ = 8.', topic: 'Powers and Roots' },
    { id: 'fc-14', front: 'Evaluate 8⁻²ᐟ³.', back: '∛8 = 2, 2² = 4, reciprocal = 1/4.', topic: 'Powers and Roots' },
    { id: 'fc-15', front: 'Can cube roots be negative?', back: 'Yes. E.g. ∛(−125) = −5.', topic: 'Powers and Roots' },
    /* ── Converting to/from Standard Form ── */
    { id: 'fc-16', front: 'What is standard form?', back: 'A × 10ⁿ where 1 ≤ A < 10 and n is an integer.', topic: 'Converting to/from Standard Form' },
    { id: 'fc-17', front: 'Write 56 000 in standard form.', back: '5.6 × 10⁴', topic: 'Converting to/from Standard Form' },
    { id: 'fc-18', front: 'Write 0.0074 in standard form.', back: '7.4 × 10⁻³', topic: 'Converting to/from Standard Form' },
    { id: 'fc-19', front: 'Convert 4.7 × 10⁵ to an ordinary number.', back: '470 000', topic: 'Converting to/from Standard Form' },
    { id: 'fc-20', front: 'Convert 6.8 × 10⁻⁴ to ordinary form.', back: '0.00068', topic: 'Converting to/from Standard Form' },
    { id: 'fc-21', front: 'Positive n in standard form means…', back: 'The number is large (≥ 10).', topic: 'Converting to/from Standard Form' },
    /* ── Operations with Standard Form ── */
    { id: 'fc-22', front: 'How do you multiply in standard form?', back: 'Multiply the A values, add the indices. Adjust A if ≥ 10.', topic: 'Operations with Standard Form' },
    { id: 'fc-23', front: 'How do you divide in standard form?', back: 'Divide the A values, subtract the indices. Adjust A if < 1.', topic: 'Operations with Standard Form' },
    { id: 'fc-24', front: 'How do you add/subtract in standard form?', back: 'Make the powers of 10 the same, then add/subtract the A values.', topic: 'Operations with Standard Form' },
    { id: 'fc-25', front: '(4 × 10³) × (5 × 10²) = ?', back: '20 × 10⁵ → adjust to 2 × 10⁶.', topic: 'Operations with Standard Form' },
  ],

};
