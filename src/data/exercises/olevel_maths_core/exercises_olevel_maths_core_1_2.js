export const exercises_olevel_maths_core_1_2 = {

  /* ───────────────────────── MCQ  (~30) ───────────────────────── */
  mcq: [
    // ── Place Value ──
    {
      id: 'mcq-1',
      stem: 'In the number 47 385, what is the value of the digit 7?',
      options: ['7', '70', '700', '7 000'],
      correctAnswer: 3,
      rationale: '7 is in the thousands column so its value is 7 000. Option A gives the face value only; B and C place it in the wrong column.',
      topic: 'Place value'
    },
    {
      id: 'mcq-2',
      stem: 'What is the place value of the digit 4 in 0.0042?',
      options: ['Tenths', 'Hundredths', 'Thousandths', 'Ten-thousandths'],
      correctAnswer: 2,
      rationale: 'Counting columns after the decimal point: tenths (0), hundredths (0), thousandths (4). The 4 is in the thousandths column. Ten-thousandths is the next column where the 2 sits.',
      topic: 'Place value'
    },
    {
      id: 'mcq-3',
      stem: 'Which digit is in the hundred-thousands column of 3 524 167?',
      options: ['3', '5', '2', '4'],
      correctAnswer: 1,
      rationale: 'Reading right to left: 7 (units), 6 (tens), 1 (hundreds), 4 (thousands), 2 (ten-thousands), 5 (hundred-thousands). 3 is in the millions column; 2 is in the ten-thousands.',
      topic: 'Place value'
    },
    {
      id: 'mcq-4',
      stem: 'What is the value of 6 in 260.59?',
      options: ['6', '60', '600', '0.6'],
      correctAnswer: 1,
      rationale: '6 is in the tens column, so its value is 60. 600 would require the hundreds column; 0.6 is tenths; 6 is just the face value.',
      topic: 'Place value'
    },
    {
      id: 'mcq-5',
      stem: 'Why is the zero important in the number 5 076?',
      options: [
        'It makes the number larger',
        'It acts as a placeholder keeping 5 in the thousands column',
        'It has no purpose',
        'It means there are no units'
      ],
      correctAnswer: 1,
      rationale: 'Without the zero, the digits would shift and the number would become 576 instead of 5 076. The zero holds the hundreds place so every other digit stays in its correct column.',
      topic: 'Place value'
    },
    {
      id: 'mcq-6',
      stem: 'The number 2 305 010 written in words is:',
      options: [
        'Two million, thirty-five thousand and ten',
        'Two million, three hundred and five thousand and ten',
        'Twenty-three million, five thousand and ten',
        'Two million, three hundred and fifty thousand, one hundred'
      ],
      correctAnswer: 1,
      rationale: '2 (millions) → two million; 305 (thousands) → three hundred and five thousand; 010 → ten. Option A omits "three hundred"; C misplaces grouping; D gives wrong last group.',
      topic: 'Place value'
    },
    {
      id: 'mcq-7',
      stem: 'Each place value column to the left is how many times larger than the one to its right?',
      options: ['2 times', '5 times', '10 times', '100 times'],
      correctAnswer: 2,
      rationale: 'The place value system is base 10: each column to the left is 10 times larger and each to the right is 10 times smaller. 2, 5, and 100 are incorrect multipliers.',
      topic: 'Place value'
    },

    // ── Ordering Numbers ──
    {
      id: 'mcq-8',
      stem: 'Which list is in ascending order?',
      options: [
        '3, −1, 0, −5, 7',
        '−5, −1, 0, 3, 7',
        '7, 3, 0, −1, −5',
        '0, −1, −5, 3, 7'
      ],
      correctAnswer: 1,
      rationale: 'Ascending means smallest to largest. On a number line: −5 < −1 < 0 < 3 < 7. Option A is unordered; C is descending; D is unordered.',
      topic: 'Ordering numbers'
    },
    {
      id: 'mcq-9',
      stem: 'Which decimal is the largest: 0.4, 0.38, 0.405, 0.39?',
      options: ['0.4', '0.38', '0.405', '0.39'],
      correctAnswer: 2,
      rationale: 'Write with equal decimal places: 0.400, 0.380, 0.405, 0.390. Comparing: 0.405 is the largest. 0.4 = 0.400 which is less than 0.405.',
      topic: 'Ordering numbers'
    },
    {
      id: 'mcq-10',
      stem: 'Put these in descending order: 0.7, 0.07, 0.71, 0.077',
      options: [
        '0.07, 0.077, 0.7, 0.71',
        '0.71, 0.7, 0.077, 0.07',
        '0.7, 0.71, 0.077, 0.07',
        '0.71, 0.7, 0.07, 0.077'
      ],
      correctAnswer: 1,
      rationale: 'Descending = largest first. Align: 0.710, 0.700, 0.077, 0.070 → 0.71 > 0.7 > 0.077 > 0.07. Option D swaps 0.07 and 0.077 incorrectly.',
      topic: 'Ordering numbers'
    },
    {
      id: 'mcq-11',
      stem: 'Which number is between −4 and −2 on a number line?',
      options: ['−5', '−1', '−3', '0'],
      correctAnswer: 2,
      rationale: '−3 lies between −4 and −2 on a number line. −5 is less than −4; −1 and 0 are greater than −2.',
      topic: 'Ordering numbers'
    },
    {
      id: 'mcq-12',
      stem: 'On a number line, numbers increase in which direction?',
      options: ['Left', 'Right', 'Downward', 'It depends on the scale'],
      correctAnswer: 1,
      rationale: 'On a standard horizontal number line, numbers always increase from left to right. Moving left makes numbers smaller.',
      topic: 'Ordering numbers'
    },
    {
      id: 'mcq-13',
      stem: 'To compare 0.6 and 0.58, a helpful first step is to:',
      options: [
        'Multiply both by 10',
        'Write them with the same number of decimal places',
        'Round both to the nearest whole number',
        'Find the difference'
      ],
      correctAnswer: 1,
      rationale: 'Writing 0.6 as 0.60 makes comparison easy: 0.60 > 0.58. Multiplying by 10 works but is less standard; rounding to whole numbers gives 1 and 1, losing information.',
      topic: 'Ordering numbers'
    },

    // ── Mathematical Symbols ──
    {
      id: 'mcq-14',
      stem: 'Which symbol means "is not equal to"?',
      options: ['≈', '≤', '≠', '<'],
      correctAnswer: 2,
      rationale: '≠ means "is not equal to". ≈ means approximately equal; ≤ means less than or equal; < means strictly less than.',
      topic: 'Mathematical symbols'
    },
    {
      id: 'mcq-15',
      stem: 'Which symbol should go between 3 + 4 and 8 − 1?',
      options: ['<', '>', '=', '≈'],
      correctAnswer: 2,
      rationale: '3 + 4 = 7 and 8 − 1 = 7. Both sides equal 7 so the correct symbol is =. No approximation or inequality is needed.',
      topic: 'Mathematical symbols'
    },
    {
      id: 'mcq-16',
      stem: 'What does the symbol ≈ mean?',
      options: ['Is equal to', 'Is not equal to', 'Is greater than', 'Is approximately equal to'],
      correctAnswer: 3,
      rationale: '≈ means approximately equal to, used when a value is rounded or estimated. = is exact equality; ≠ is not equal; > is greater than.',
      topic: 'Mathematical symbols'
    },
    {
      id: 'mcq-17',
      stem: '"At least 12" written using inequality notation is:',
      options: ['x < 12', 'x > 12', 'x ≤ 12', 'x ≥ 12'],
      correctAnswer: 3,
      rationale: '"At least 12" means 12 or more, so x ≥ 12. x > 12 excludes 12 itself; x < 12 and x ≤ 12 mean less than 12.',
      topic: 'Mathematical symbols'
    },
    {
      id: 'mcq-18',
      stem: 'Which statement is TRUE?',
      options: ['5 > 8', '−3 > 0', '0.5 < 0.50', '−7 < −2'],
      correctAnswer: 3,
      rationale: '−7 is further left on the number line than −2, so −7 < −2 is true. 5 > 8 is false; −3 > 0 is false; 0.5 = 0.50 so 0.5 < 0.50 is false.',
      topic: 'Mathematical symbols'
    },
    {
      id: 'mcq-19',
      stem: 'If x ≤ 5, which of these values can x NOT be?',
      options: ['5', '−3', '0', '6'],
      correctAnswer: 3,
      rationale: 'x ≤ 5 means x can be 5 or any value less than 5. The value 6 is greater than 5 so it is not allowed. 5, −3, and 0 all satisfy x ≤ 5.',
      topic: 'Mathematical symbols'
    },
    {
      id: 'mcq-20',
      stem: 'What symbol goes between √2 and 1.41?',
      options: ['=', '<', '>', '≈'],
      correctAnswer: 3,
      rationale: '√2 = 1.41421… which is close to but not exactly 1.41. The correct symbol is ≈ (approximately equal). Using = would be incorrect because 1.41 is a rounded value.',
      topic: 'Mathematical symbols'
    },
    {
      id: 'mcq-21',
      stem: '"Fewer than 20" written in symbols is:',
      options: ['x ≤ 20', 'x < 20', 'x ≥ 20', 'x > 20'],
      correctAnswer: 1,
      rationale: '"Fewer than" means strictly less than, so x < 20. x ≤ 20 would include 20 ("no more than 20"); x > 20 and x ≥ 20 mean greater than.',
      topic: 'Mathematical symbols'
    },

    // ── Negative and Directed Numbers ──
    {
      id: 'mcq-22',
      stem: 'What is 5 + (−8)?',
      options: ['13', '−13', '3', '−3'],
      correctAnswer: 3,
      rationale: '5 + (−8) = 5 − 8 = −3. Adding a negative is the same as subtracting. 13 would be 5 + 8; 3 would be 8 − 5.',
      topic: 'Negative and directed numbers'
    },
    {
      id: 'mcq-23',
      stem: 'What is −6 − (−4)?',
      options: ['−10', '−2', '2', '10'],
      correctAnswer: 1,
      rationale: '−6 − (−4) = −6 + 4 = −2. Subtracting a negative is the same as adding. −10 would be −6 − 4; 2 and 10 have the wrong sign.',
      topic: 'Negative and directed numbers'
    },
    {
      id: 'mcq-24',
      stem: 'What is (−3) × (−5)?',
      options: ['−15', '15', '−8', '8'],
      correctAnswer: 1,
      rationale: 'Negative × negative = positive, so (−3) × (−5) = 15. −15 would be the result of different signs; −8 and 8 confuse multiplication with addition.',
      topic: 'Negative and directed numbers'
    },
    {
      id: 'mcq-25',
      stem: 'What is (−24) ÷ 6?',
      options: ['4', '−4', '−18', '18'],
      correctAnswer: 1,
      rationale: 'Negative ÷ positive = negative, so (−24) ÷ 6 = −4. Different signs give a negative result. 4 ignores the sign; −18 and 18 use subtraction instead of division.',
      topic: 'Negative and directed numbers'
    },
    {
      id: 'mcq-26',
      stem: 'What is (−2)³?',
      options: ['8', '−8', '6', '−6'],
      correctAnswer: 1,
      rationale: '(−2)³ = (−2) × (−2) × (−2) = 4 × (−2) = −8. An odd power of a negative number is always negative. 8 would be the result of an even power.',
      topic: 'Negative and directed numbers'
    },
    {
      id: 'mcq-27',
      stem: 'A temperature drops from 3°C to −7°C. How many degrees did it fall?',
      options: ['4°C', '7°C', '10°C', '3°C'],
      correctAnswer: 2,
      rationale: 'The difference is 3 − (−7) = 3 + 7 = 10°C. 7°C only counts from 0 to −7; 4°C subtracts incorrectly; 3°C only counts the positive part.',
      topic: 'Negative and directed numbers'
    },
    {
      id: 'mcq-28',
      stem: 'Which is the correct sign rule for multiplication and division?',
      options: [
        'Same signs → negative, different signs → positive',
        'Same signs → positive, different signs → negative',
        'Two negatives → negative',
        'All products are positive'
      ],
      correctAnswer: 1,
      rationale: 'Same signs (both positive or both negative) give a positive result; different signs (one positive, one negative) give a negative result.',
      topic: 'Negative and directed numbers'
    },
    {
      id: 'mcq-29',
      stem: 'What is (−4)² ?',
      options: ['−16', '16', '−8', '8'],
      correctAnswer: 1,
      rationale: '(−4)² = (−4) × (−4) = 16. An even power of a negative number is always positive. −16 would require (−4) × 4 with different signs.',
      topic: 'Negative and directed numbers'
    },
    {
      id: 'mcq-30',
      stem: 'A lift is on floor −3. It goes up 5 floors. Which floor is it on now?',
      options: ['Floor 8', 'Floor 2', 'Floor −8', 'Floor −2'],
      correctAnswer: 1,
      rationale: '−3 + 5 = 2, so the lift is now on floor 2. Floor 8 adds incorrectly; −8 and −2 ignore the upward direction.',
      topic: 'Negative and directed numbers'
    },
  ],

  /* ──────────────────────── FILL-BLANK (~15) ──────────────────── */
  fillblank: [
    // Place value
    {
      id: 'fb-1',
      stem: 'Complete the sentence about the digit 5 in 4 572.',
      template: 'The digit 5 is in the __BLANK__ column, so its value is __BLANK__.',
      blanks: [{ answer: 'hundreds' }, { answer: '500' }],
      rationale: 'In 4 572 the 5 sits in the hundreds position: 5 × 100 = 500.'
    },
    {
      id: 'fb-2',
      stem: 'Describe how place value columns change.',
      template: 'Each column to the left is __BLANK__ times larger; each column to the right is __BLANK__ times smaller.',
      blanks: [{ answer: '10' }, { answer: '10' }],
      rationale: 'Our number system is base 10, so every step left multiplies by 10 and every step right divides by 10.'
    },
    {
      id: 'fb-3',
      stem: 'What role do zeros play in a number?',
      template: 'Zeros act as __BLANK__ to keep other digits in the correct column.',
      blanks: [{ answer: 'placeholders' }],
      rationale: 'Zeros hold empty positions so that each digit maintains its correct place value.'
    },
    {
      id: 'fb-4',
      stem: 'The digit 8 in 0.0083 is in the thousandths column.',
      template: 'In 0.0083 the value of the digit 8 is __BLANK__.',
      blanks: [{ answer: '0.008' }],
      rationale: '8 is in the thousandths column: 8 × 0.001 = 0.008.'
    },

    // Ordering numbers
    {
      id: 'fb-5',
      stem: 'Complete the ordering rule.',
      template: 'On a number line, numbers increase from __BLANK__ to __BLANK__.',
      blanks: [{ answer: 'left' }, { answer: 'right' }],
      rationale: 'A standard number line always increases from left to right.'
    },
    {
      id: 'fb-6',
      stem: 'Ascending and descending order.',
      template: 'Ascending order means from __BLANK__ to __BLANK__.',
      blanks: [{ answer: 'smallest' }, { answer: 'largest' }],
      rationale: 'Ascending = going up = smallest first. Descending would be largest first.'
    },
    {
      id: 'fb-7',
      stem: 'How to compare decimals.',
      template: 'To compare decimals, add __BLANK__ so both numbers have the same number of decimal places.',
      blanks: [{ answer: 'trailing zeros' }],
      rationale: 'Adding trailing zeros (e.g. 0.3 → 0.300) does not change the value but makes digit-by-digit comparison easier.'
    },

    // Mathematical symbols
    {
      id: 'fb-8',
      stem: 'Define the symbol ≈.',
      template: 'The symbol ≈ means __BLANK__.',
      blanks: [{ answer: 'approximately equal to' }],
      rationale: '≈ is used when a value is rounded or estimated, meaning close to but not exactly equal.'
    },
    {
      id: 'fb-9',
      stem: 'Strict versus non-strict inequalities.',
      template: 'The symbols < and > are called __BLANK__ inequalities, while ≤ and ≥ are called __BLANK__ inequalities.',
      blanks: [{ answer: 'strict' }, { answer: 'non-strict' }],
      rationale: 'Strict inequalities exclude the boundary value; non-strict inequalities include it.'
    },
    {
      id: 'fb-10',
      stem: 'Translate the phrase.',
      template: '"No more than 5" is written as x __BLANK__ 5.',
      blanks: [{ answer: '≤' }],
      rationale: '"No more than" means the value can be 5 or less, giving x ≤ 5.'
    },
    {
      id: 'fb-11',
      stem: 'Memory trick for inequality symbols.',
      template: 'The inequality symbol always points towards the __BLANK__ number.',
      blanks: [{ answer: 'smaller' }],
      rationale: 'The pointed (closed) end faces the smaller value and the open end faces the larger value.'
    },

    // Negative and directed numbers
    {
      id: 'fb-12',
      stem: 'What happens with two negative signs?',
      template: 'Subtracting a negative is the same as __BLANK__.',
      blanks: [{ answer: 'adding' }],
      rationale: 'Two negative signs next to each other become a plus: a − (−b) = a + b.'
    },
    {
      id: 'fb-13',
      stem: 'Sign rules for multiplication.',
      template: 'When you multiply two numbers with the same sign, the answer is __BLANK__. With different signs, the answer is __BLANK__.',
      blanks: [{ answer: 'positive' }, { answer: 'negative' }],
      rationale: '(+)(+) = (+), (−)(−) = (+) → same signs positive; (+)(−) = (−), (−)(+) = (−) → different signs negative.'
    },
    {
      id: 'fb-14',
      stem: 'Negative powers pattern.',
      template: 'A negative number raised to an even power is always __BLANK__, and to an odd power is always __BLANK__.',
      blanks: [{ answer: 'positive' }, { answer: 'negative' }],
      rationale: 'Even number of negative factors cancel out; an odd number leaves one negative factor remaining.'
    },
    {
      id: 'fb-15',
      stem: 'Real-life directed number.',
      template: 'A temperature of −5°C means 5 degrees __BLANK__ zero.',
      blanks: [{ answer: 'below' }],
      rationale: 'Negative temperatures indicate values below the zero mark on a thermometer.'
    },
  ],

  /* ──────────────────────── DRAG-DROP (~10) ──────────────────── */
  dragdrop: [
    {
      id: 'dd-1',
      stem: 'Sort each digit into the correct place value column for the number 36 204.',
      categories: ['Ten-thousands', 'Thousands', 'Hundreds', 'Tens', 'Units'],
      items: [
        { text: '3', category: 'Ten-thousands' },
        { text: '6', category: 'Thousands' },
        { text: '2', category: 'Hundreds' },
        { text: '0', category: 'Tens' },
        { text: '4', category: 'Units' }
      ]
    },
    {
      id: 'dd-2',
      stem: 'Sort these numbers into "Positive" or "Negative".',
      categories: ['Positive', 'Negative'],
      items: [
        { text: '7', category: 'Positive' },
        { text: '−3', category: 'Negative' },
        { text: '0.5', category: 'Positive' },
        { text: '−12', category: 'Negative' },
        { text: '100', category: 'Positive' },
        { text: '−0.1', category: 'Negative' }
      ]
    },
    {
      id: 'dd-3',
      stem: 'Match each mathematical symbol to its meaning.',
      categories: ['Less than', 'Greater than', 'Not equal to', 'Approximately equal to'],
      items: [
        { text: '<', category: 'Less than' },
        { text: '>', category: 'Greater than' },
        { text: '≠', category: 'Not equal to' },
        { text: '≈', category: 'Approximately equal to' }
      ]
    },
    {
      id: 'dd-4',
      stem: 'Classify each inequality as "Strict" or "Non-strict".',
      categories: ['Strict', 'Non-strict'],
      items: [
        { text: '<', category: 'Strict' },
        { text: '>', category: 'Strict' },
        { text: '≤', category: 'Non-strict' },
        { text: '≥', category: 'Non-strict' }
      ]
    },
    {
      id: 'dd-5',
      stem: 'Sort each calculation result as "Positive" or "Negative".',
      categories: ['Positive', 'Negative'],
      items: [
        { text: '(−3) × (−4) = 12', category: 'Positive' },
        { text: '(−5) × 2 = −10', category: 'Negative' },
        { text: '(−8) ÷ (−2) = 4', category: 'Positive' },
        { text: '6 × (−1) = −6', category: 'Negative' },
        { text: '(−2)² = 4', category: 'Positive' },
        { text: '(−2)³ = −8', category: 'Negative' }
      ]
    },
    {
      id: 'dd-6',
      stem: 'Match each real-life situation to its directed number.',
      categories: ['−200 m', '−$50', '−5°C', '−2'],
      items: [
        { text: '200 m below sea level', category: '−200 m' },
        { text: 'A debt of $50', category: '−$50' },
        { text: '5 degrees below zero', category: '−5°C' },
        { text: 'Two floors below ground', category: '−2' }
      ]
    },
    {
      id: 'dd-7',
      stem: 'Sort the phrase into the correct inequality symbol.',
      categories: ['x < 10', 'x ≤ 10', 'x > 10', 'x ≥ 10'],
      items: [
        { text: '"fewer than 10"', category: 'x < 10' },
        { text: '"no more than 10"', category: 'x ≤ 10' },
        { text: '"more than 10"', category: 'x > 10' },
        { text: '"at least 10"', category: 'x ≥ 10' }
      ]
    },
    {
      id: 'dd-8',
      stem: 'Sort the decimals: which are greater than 0.5 and which are less than 0.5?',
      categories: ['Greater than 0.5', 'Less than 0.5'],
      items: [
        { text: '0.52', category: 'Greater than 0.5' },
        { text: '0.48', category: 'Less than 0.5' },
        { text: '0.507', category: 'Greater than 0.5' },
        { text: '0.499', category: 'Less than 0.5' },
        { text: '0.6', category: 'Greater than 0.5' },
        { text: '0.05', category: 'Less than 0.5' }
      ]
    },
    {
      id: 'dd-9',
      stem: 'Classify each sign-rule result for addition/subtraction of negatives.',
      categories: ['Becomes addition', 'Becomes subtraction'],
      items: [
        { text: '+ (−)', category: 'Becomes subtraction' },
        { text: '− (−)', category: 'Becomes addition' },
        { text: '+ (+)', category: 'Becomes addition' },
        { text: '− (+)', category: 'Becomes subtraction' }
      ]
    },
    {
      id: 'dd-10',
      stem: 'Sort the digits of 0.0739 into their correct decimal column.',
      categories: ['Tenths', 'Hundredths', 'Thousandths', 'Ten-thousandths'],
      items: [
        { text: '0', category: 'Tenths' },
        { text: '7', category: 'Hundredths' },
        { text: '3', category: 'Thousandths' },
        { text: '9', category: 'Ten-thousandths' }
      ]
    },
  ],

  /* ──────────────────────── SEQUENCE (~8) ──────────────────────── */
  sequence: [
    {
      id: 'seq-1',
      stem: 'Put the steps for reading a large number (e.g. 4 250 183) in the correct order.',
      steps: [
        'Group the digits in threes from right to left',
        'Read the leftmost group and say its group name (millions)',
        'Read the middle group and say "thousand"',
        'Read the last three digits as hundreds, tens, and units'
      ]
    },
    {
      id: 'seq-2',
      stem: 'Order the steps for comparing two decimals, e.g. 0.45 and 0.407.',
      steps: [
        'Align the decimal points',
        'Add trailing zeros so both have the same number of decimal places',
        'Compare digit by digit from left to right',
        'The first digit that differs determines which number is larger'
      ]
    },
    {
      id: 'seq-3',
      stem: 'Order the steps for placing integers on a number line (e.g. −3, 5, −1, 2).',
      steps: [
        'Draw a horizontal line with equally spaced marks',
        'Label the centre point as 0',
        'Mark negative numbers to the left of 0',
        'Mark positive numbers to the right of 0',
        'Read the numbers in order from left to right'
      ]
    },
    {
      id: 'seq-4',
      stem: 'Order the steps to calculate 7 − (−3).',
      steps: [
        'Identify the two signs next to each other: − (−)',
        'Apply the rule: subtracting a negative becomes adding',
        'Rewrite as 7 + 3',
        'Calculate the answer: 10'
      ]
    },
    {
      id: 'seq-5',
      stem: 'Order the steps to find the value of (−2)⁴.',
      steps: [
        'Write out the repeated multiplication: (−2) × (−2) × (−2) × (−2)',
        'Multiply the first pair: (−2) × (−2) = 4',
        'Multiply the second pair: (−2) × (−2) = 4',
        'Multiply the two results: 4 × 4 = 16'
      ]
    },
    {
      id: 'seq-6',
      stem: 'Order the steps to convert "at least 15" into inequality notation.',
      steps: [
        'Identify the key phrase: "at least"',
        'Recognise that "at least" means the value can equal 15 or be greater',
        'Choose the correct symbol: ≥',
        'Write the inequality: x ≥ 15'
      ]
    },
    {
      id: 'seq-7',
      stem: 'To find the value of the digit 6 in 56 032, follow these steps in order:',
      steps: [
        'Count the position of the digit from right to left',
        'Identify the column name (thousands)',
        'Multiply the digit by the column value: 6 × 1 000',
        'State the value: 6 000'
      ]
    },
    {
      id: 'seq-8',
      stem: 'Steps to order 0.3, 0.25, 0.307, 0.31 in ascending order.',
      steps: [
        'Write each number with the same number of decimal places: 0.300, 0.250, 0.307, 0.310',
        'Compare the hundredths digits: 0.250 is smallest',
        'Compare remaining numbers: 0.300 < 0.307 < 0.310',
        'Write the final ascending order: 0.25, 0.3, 0.307, 0.31'
      ]
    },
  ],

  /* ──────────────────────── KEYWORD (~12) ──────────────────────── */
  keyword: [
    // Place value
    {
      id: 'kw-1',
      stem: 'What does "place value" mean? [2 marks]',
      marks: 2,
      keywords: ['position', 'value'],
      modelAnswer: 'Place value is the value of a digit based on its position in a number. For instance, the 3 in 300 is worth 300 because it is in the hundreds position.'
    },
    {
      id: 'kw-2',
      stem: 'Explain why zeros are important in the number 4 058. [2 marks]',
      marks: 2,
      keywords: ['placeholder', 'column'],
      modelAnswer: 'The zero acts as a placeholder, keeping the digit 4 in the thousands column. Without it, the other digits would shift and the number would become 458.'
    },
    {
      id: 'kw-3',
      stem: 'How do you read a large number like 3 047 286? [2 marks]',
      marks: 2,
      keywords: ['group', 'threes'],
      modelAnswer: 'Group the digits in threes from right to left (3 | 047 | 286). Read each group with its place name: three million, forty-seven thousand, two hundred and eighty-six.'
    },

    // Ordering numbers
    {
      id: 'kw-4',
      stem: 'Describe a method for ordering decimals from smallest to largest. [3 marks]',
      marks: 3,
      keywords: ['align', 'decimal', 'compare'],
      modelAnswer: 'First align the decimal points and add trailing zeros so all numbers have the same number of decimal places. Then compare digit by digit from left to right. The first digit that differs tells you which number is smaller or larger.'
    },
    {
      id: 'kw-5',
      stem: 'What do "ascending" and "descending" mean when ordering numbers? [2 marks]',
      marks: 2,
      keywords: ['ascending', 'descending'],
      modelAnswer: 'Ascending order means listing numbers from smallest to largest. Descending order means listing them from largest to smallest.'
    },
    {
      id: 'kw-6',
      stem: 'Why are negative numbers always smaller than positive numbers? [2 marks]',
      marks: 2,
      keywords: ['left', 'number line'],
      modelAnswer: 'On a number line, negative numbers sit to the left of zero and positive numbers sit to the right. Since numbers increase from left to right, all negative numbers are smaller than all positive numbers.'
    },

    // Mathematical symbols
    {
      id: 'kw-7',
      stem: 'Explain the difference between < and ≤. [2 marks]',
      marks: 2,
      keywords: ['include', 'boundary'],
      modelAnswer: '< means strictly less than and does not include the boundary value. ≤ means less than or equal to and does include the boundary value. For example, x < 5 does not allow x = 5, but x ≤ 5 does.'
    },
    {
      id: 'kw-8',
      stem: 'When should you use the ≈ symbol instead of the = symbol? [2 marks]',
      marks: 2,
      keywords: ['approximate', 'rounded'],
      modelAnswer: 'Use ≈ when a value has been rounded or estimated and is not exactly equal. For example, π ≈ 3.14 because the actual value is 3.14159… which is only approximately 3.14.'
    },
    {
      id: 'kw-9',
      stem: 'How do you translate "no more than 20" into an inequality? [2 marks]',
      marks: 2,
      keywords: ['≤', 'include'],
      modelAnswer: '"No more than 20" means the value can be 20 or anything less. This is written as x ≤ 20 because the boundary value 20 is included.'
    },

    // Negative and directed numbers
    {
      id: 'kw-10',
      stem: 'State the sign rules for multiplying and dividing directed numbers. [2 marks]',
      marks: 2,
      keywords: ['same', 'positive', 'different', 'negative'],
      modelAnswer: 'When you multiply or divide two numbers with the same sign, the result is positive. When the signs are different, the result is negative.'
    },
    {
      id: 'kw-11',
      stem: 'Explain why 5 − (−3) = 8. [2 marks]',
      marks: 2,
      keywords: ['subtracting', 'adding'],
      modelAnswer: 'Subtracting a negative number is the same as adding the positive equivalent. So 5 − (−3) becomes 5 + 3 = 8.'
    },
    {
      id: 'kw-12',
      stem: 'Give two real-life contexts where negative numbers are used. [2 marks]',
      marks: 2,
      keywords: ['temperature', 'debt'],
      modelAnswer: 'Negative numbers are used for temperatures below zero (e.g. −5°C means 5 degrees below zero) and for debts in money (e.g. −$50 means owing $50).'
    },
  ],

  /* ──────────────────────── FLASHCARDS (~25) ──────────────────── */
  flashcards: [
    // Place value
    { id: 'fc-1', front: 'What does place value mean?', back: 'The value of a digit based on its position in a number.', topic: 'Place value' },
    { id: 'fc-2', front: 'What is the value of the digit 4 in 4 572?', back: '4 000 (it is in the thousands column).', topic: 'Place value' },
    { id: 'fc-3', front: 'How does each column change as you move left?', back: 'Each column to the left is 10 times larger.', topic: 'Place value' },
    { id: 'fc-4', front: 'How does each column change as you move right?', back: 'Each column to the right is 10 times smaller.', topic: 'Place value' },
    { id: 'fc-5', front: 'What role does zero play in a number?', back: 'Zero is a placeholder that keeps other digits in the correct column.', topic: 'Place value' },
    { id: 'fc-6', front: 'How do you read a large number?', back: 'Group digits in threes from right to left, then read each group with its place name (millions, thousands, etc.).', topic: 'Place value' },

    // Ordering numbers
    { id: 'fc-7', front: 'What does ascending order mean?', back: 'Listing numbers from smallest to largest.', topic: 'Ordering numbers' },
    { id: 'fc-8', front: 'What does descending order mean?', back: 'Listing numbers from largest to smallest.', topic: 'Ordering numbers' },
    { id: 'fc-9', front: 'How do you order decimals?', back: 'Align decimal points, add trailing zeros, then compare digit by digit from left to right.', topic: 'Ordering numbers' },
    { id: 'fc-10', front: 'On a number line, which direction is larger?', back: 'Right — numbers increase from left to right.', topic: 'Ordering numbers' },
    { id: 'fc-11', front: 'Are negative numbers larger or smaller than positive numbers?', back: 'Always smaller — they sit to the left of 0 on a number line.', topic: 'Ordering numbers' },
    { id: 'fc-12', front: 'Does adding trailing zeros change a decimal\'s value?', back: 'No. 0.3 = 0.30 = 0.300. It only helps with comparison.', topic: 'Ordering numbers' },

    // Mathematical symbols
    { id: 'fc-13', front: 'What does < mean?', back: 'Less than. The pointed end faces the smaller number.', topic: 'Mathematical symbols' },
    { id: 'fc-14', front: 'What does > mean?', back: 'Greater than. The open end faces the larger number.', topic: 'Mathematical symbols' },
    { id: 'fc-15', front: 'What does ≤ mean?', back: 'Less than or equal to (boundary value IS included).', topic: 'Mathematical symbols' },
    { id: 'fc-16', front: 'What does ≥ mean?', back: 'Greater than or equal to (boundary value IS included).', topic: 'Mathematical symbols' },
    { id: 'fc-17', front: 'What does ≠ mean?', back: 'Not equal to — the two values are different.', topic: 'Mathematical symbols' },
    { id: 'fc-18', front: 'What does ≈ mean?', back: 'Approximately equal to — used for rounded or estimated values.', topic: 'Mathematical symbols' },
    { id: 'fc-19', front: '"At least 12" in symbols?', back: 'x ≥ 12 (12 is included).', topic: 'Mathematical symbols' },
    { id: 'fc-20', front: '"Fewer than 20" in symbols?', back: 'x < 20 (20 is NOT included).', topic: 'Mathematical symbols' },

    // Negative and directed numbers
    { id: 'fc-21', front: 'What does − (−) become?', back: 'It becomes addition: a − (−b) = a + b.', topic: 'Negative and directed numbers' },
    { id: 'fc-22', front: 'What sign does (−) × (−) give?', back: 'Positive. Same signs multiply to give a positive result.', topic: 'Negative and directed numbers' },
    { id: 'fc-23', front: 'What sign does (+) × (−) give?', back: 'Negative. Different signs multiply to give a negative result.', topic: 'Negative and directed numbers' },
    { id: 'fc-24', front: 'Is (−3)² positive or negative?', back: 'Positive (= 9). An even power of a negative is always positive.', topic: 'Negative and directed numbers' },
    { id: 'fc-25', front: 'Is (−3)³ positive or negative?', back: 'Negative (= −27). An odd power of a negative is always negative.', topic: 'Negative and directed numbers' },
  ],

};
