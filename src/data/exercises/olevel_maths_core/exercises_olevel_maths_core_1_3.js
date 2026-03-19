export const exercises_olevel_maths_core_1_3 = {

  /* ──────────────── MCQ  (~30) ──────────────── */
  mcq: [
    // Addition / Subtraction
    { id: 'mcq-1', stem: 'What is 3 847 + 2 965?', options: ['6 812', '6 712', '6 802', '6 912'], correctAnswer: 0, rationale: 'Column addition: 7+5=12 carry 1, 4+6+1=11 carry 1, 8+9+1=18 carry 1, 3+2+1=6 → 6 812.', topic: 'Addition/subtraction' },
    { id: 'mcq-2', stem: 'What is 5 304 − 1 867?', options: ['3 537', '3 437', '3 447', '3 337'], correctAnswer: 1, rationale: 'Column subtraction with borrowing gives 3 437.', topic: 'Addition/subtraction' },
    { id: 'mcq-3', stem: 'When performing column addition, in which direction should you work?', options: ['Left to right', 'Right to left', 'Top to bottom', 'It does not matter'], correctAnswer: 1, rationale: 'Always start from the units (rightmost) column and move left.', topic: 'Addition/subtraction' },
    { id: 'mcq-4', stem: 'In column addition, what happens when a column total equals 15?', options: ['Write 15 below the line', 'Write 5 and carry 1', 'Write 1 and carry 5', 'Round to 20'], correctAnswer: 1, rationale: 'Write the units digit (5) and carry the tens digit (1) to the next column.', topic: 'Addition/subtraction' },
    { id: 'mcq-5', stem: 'What is 12.7 + 3.045?', options: ['15.745', '15.345', '15.045', '16.745'], correctAnswer: 0, rationale: 'Align decimal points: 12.700 + 3.045 = 15.745.', topic: 'Addition/subtraction' },
    { id: 'mcq-6', stem: 'Which method can you use to check that 749 + 263 = 1 012 is correct?', options: ['Multiply 749 by 263', 'Calculate 1 012 − 263 and see if you get 749', 'Divide 1 012 by 2', 'Square root 1 012'], correctAnswer: 1, rationale: 'Subtraction is the inverse of addition, so 1 012 − 263 should give 749.', topic: 'Addition/subtraction' },
    { id: 'mcq-7', stem: 'Calculate 8.5 − 3.27.', options: ['5.23', '5.33', '5.13', '5.27'], correctAnswer: 0, rationale: 'Align decimals: 8.50 − 3.27 = 5.23.', topic: 'Addition/subtraction' },

    // Multiplication / Division
    { id: 'mcq-8', stem: 'What is 347 × 28?', options: ['9 716', '9 616', '9 816', '10 716'], correctAnswer: 0, rationale: '347 × 8 = 2 776, 347 × 20 = 6 940. Sum = 9 716.', topic: 'Multiplication/division' },
    { id: 'mcq-9', stem: 'What is 784 ÷ 7?', options: ['112', '122', '111', '102'], correctAnswer: 0, rationale: 'Long division: 7 into 7=1, 7 into 8=1 r1, 7 into 14=2. Answer 112.', topic: 'Multiplication/division' },
    { id: 'mcq-10', stem: 'What is 137 ÷ 6 as a whole number with remainder?', options: ['22 r 5', '23 r 1', '22 r 3', '21 r 5'], correctAnswer: 0, rationale: '6 × 22 = 132, remainder = 137 − 132 = 5.', topic: 'Multiplication/division' },
    { id: 'mcq-11', stem: 'When dividing 936 ÷ 8, the answer is:', options: ['117', '116', '118', '127'], correctAnswer: 0, rationale: '8 × 117 = 936. Check: 8 × 100 = 800, 8 × 17 = 136, total 936.', topic: 'Multiplication/division' },
    { id: 'mcq-12', stem: 'To estimate 483 × 19, a good approximation is:', options: ['500 × 20 = 10 000', '480 × 20 = 9 600', '400 × 20 = 8 000', '500 × 19 = 9 500'], correctAnswer: 0, rationale: 'Round both to 1 significant figure: 500 × 20 = 10 000.', topic: 'Multiplication/division' },
    { id: 'mcq-13', stem: 'The four steps of long division in order are:', options: ['Divide, Multiply, Subtract, Bring down', 'Multiply, Divide, Bring down, Subtract', 'Subtract, Divide, Multiply, Bring down', 'Bring down, Divide, Multiply, Subtract'], correctAnswer: 0, rationale: 'Long division follows: Divide → Multiply → Subtract → Bring down, then repeat.', topic: 'Multiplication/division' },
    { id: 'mcq-14', stem: 'What is 246 × 35?', options: ['8 610', '8 510', '8 710', '8 600'], correctAnswer: 0, rationale: '246 × 5 = 1 230, 246 × 30 = 7 380. Sum = 8 610.', topic: 'Multiplication/division' },

    // Order of operations (BIDMAS/BODMAS)
    { id: 'mcq-15', stem: 'What does the B in BIDMAS stand for?', options: ['Brackets', 'Base', 'Borrow', 'Binary'], correctAnswer: 0, rationale: 'B = Brackets, which are evaluated first.', topic: 'Order of operations (BIDMAS/BODMAS)' },
    { id: 'mcq-16', stem: 'Evaluate: 3 + 4 × 2 − 1', options: ['10', '7', '13', '14'], correctAnswer: 0, rationale: 'Multiplication first: 4 × 2 = 8. Then 3 + 8 − 1 = 10.', topic: 'Order of operations (BIDMAS/BODMAS)' },
    { id: 'mcq-17', stem: 'Evaluate: (2 + 3)² − 4 × 3 + 8 ÷ 2', options: ['17', '15', '19', '21'], correctAnswer: 0, rationale: 'Brackets: 5. Indices: 25. Mult/Div: 12 and 4. Then 25 − 12 + 4 = 17.', topic: 'Order of operations (BIDMAS/BODMAS)' },
    { id: 'mcq-18', stem: 'What is 12 ÷ 4 × 2?', options: ['6', '1.5', '8', '3'], correctAnswer: 0, rationale: 'Division and multiplication have equal priority — work left to right: 12 ÷ 4 = 3, then 3 × 2 = 6.', topic: 'Order of operations (BIDMAS/BODMAS)' },
    { id: 'mcq-19', stem: 'Evaluate: 2 × [5 + (3 − 1)²]', options: ['18', '14', '20', '16'], correctAnswer: 0, rationale: 'Inner bracket: 3−1=2. Index: 2²=4. Outer bracket: 5+4=9. Then 2×9=18.', topic: 'Order of operations (BIDMAS/BODMAS)' },
    { id: 'mcq-20', stem: 'In BIDMAS, which pair has equal priority?', options: ['Division and Multiplication', 'Brackets and Indices', 'Addition and Multiplication', 'Indices and Division'], correctAnswer: 0, rationale: 'D and M have equal priority and are performed left to right.', topic: 'Order of operations (BIDMAS/BODMAS)' },
    { id: 'mcq-21', stem: 'Evaluate: 5 + 2 × 3 − 4', options: ['7', '17', '3', '11'], correctAnswer: 0, rationale: 'Multiplication first: 2 × 3 = 6. Then 5 + 6 − 4 = 7.', topic: 'Order of operations (BIDMAS/BODMAS)' },
    { id: 'mcq-22', stem: 'A fraction bar acts like:', options: ['Brackets around the numerator and denominator', 'A multiplication sign', 'An index', 'Nothing — it only means divide'], correctAnswer: 0, rationale: 'A fraction bar groups the numerator and denominator, acting as brackets.', topic: 'Order of operations (BIDMAS/BODMAS)' },

    // Operations with decimals
    { id: 'mcq-23', stem: 'What is 5.6 × 2.3?', options: ['12.88', '12.08', '13.88', '11.88'], correctAnswer: 0, rationale: '56 × 23 = 1 288. Total decimal places = 2. Answer: 12.88.', topic: 'Operations with decimals' },
    { id: 'mcq-24', stem: 'What is 4.8 ÷ 0.6?', options: ['8', '0.8', '80', '0.08'], correctAnswer: 0, rationale: 'Multiply both by 10: 48 ÷ 6 = 8.', topic: 'Operations with decimals' },
    { id: 'mcq-25', stem: 'How many decimal places does the answer to 3.4 × 0.12 have?', options: ['3', '2', '1', '4'], correctAnswer: 0, rationale: '3.4 has 1 d.p. and 0.12 has 2 d.p. Total = 3 d.p.', topic: 'Operations with decimals' },
    { id: 'mcq-26', stem: 'What is 3.47 × 100?', options: ['347', '34.7', '3 470', '0.0347'], correctAnswer: 0, rationale: 'Multiplying by 100 moves the decimal point 2 places to the right.', topic: 'Operations with decimals' },
    { id: 'mcq-27', stem: 'What is 56.2 ÷ 100?', options: ['0.562', '5.62', '0.0562', '562'], correctAnswer: 0, rationale: 'Dividing by 100 moves the decimal point 2 places to the left.', topic: 'Operations with decimals' },
    { id: 'mcq-28', stem: 'To divide 3.75 ÷ 0.05, you should first:', options: ['Multiply both by 100', 'Multiply both by 10', 'Multiply only 3.75 by 100', 'Ignore the decimals and divide 375 ÷ 5'], correctAnswer: 0, rationale: 'Multiply both by 100 to make the divisor a whole number: 375 ÷ 5 = 75.', topic: 'Operations with decimals' },
    { id: 'mcq-29', stem: 'What is 14.6 + 3.047?', options: ['17.647', '17.107', '18.647', '17.747'], correctAnswer: 0, rationale: 'Align decimals: 14.600 + 3.047 = 17.647.', topic: 'Operations with decimals' },
    { id: 'mcq-30', stem: 'When multiplying 0.3 × 0.4, the answer is:', options: ['0.12', '1.2', '0.012', '12'], correctAnswer: 0, rationale: '3 × 4 = 12. Total d.p. = 1 + 1 = 2. Answer: 0.12.', topic: 'Operations with decimals' },
  ],

  /* ──────────────── FILL-BLANK  (~15) ──────────────── */
  fillblank: [
    { id: 'fb-1', stem: 'In column addition, when a column total is 10 or more you must _____ the extra to the next column.', template: 'In column addition, when a column total is 10 or more you must __BLANK__ the extra to the next column.', blanks: [{ answer: 'carry' }], rationale: 'When the sum in a column is ≥ 10, writing the units digit and carrying the tens digit is called "carrying".' },
    { id: 'fb-2', stem: 'In column subtraction, when the top digit is smaller than the bottom digit you must _____.', template: 'In column subtraction, when the top digit is smaller than the bottom digit you must __BLANK__.', blanks: [{ answer: 'borrow' }], rationale: 'Borrowing takes 10 from the next column to the left so the subtraction can proceed.' },
    { id: 'fb-3', stem: 'Before adding or subtracting decimals, you must align the _____.', template: 'Before adding or subtracting decimals, you must align the __BLANK__.', blanks: [{ answer: 'decimal points' }], rationale: 'Aligning decimal points ensures digits of the same place value are in the same column.' },
    { id: 'fb-4', stem: 'To check an addition, you can use the _____ operation, which is subtraction.', template: 'To check an addition, you can use the __BLANK__ operation, which is subtraction.', blanks: [{ answer: 'inverse' }], rationale: 'Subtraction is the inverse of addition and can verify the result.' },
    { id: 'fb-5', stem: 'In long division, the four repeating steps are Divide, Multiply, Subtract, and _____.', template: 'In long division, the four repeating steps are Divide, Multiply, Subtract, and __BLANK__.', blanks: [{ answer: 'Bring down' }], rationale: 'After subtracting, you bring down the next digit and repeat the cycle.' },
    { id: 'fb-6', stem: '137 ÷ 6 gives a quotient of 22 with a remainder of _____.', template: '137 ÷ 6 gives a quotient of 22 with a remainder of __BLANK__.', blanks: [{ answer: '5' }], rationale: '6 × 22 = 132, and 137 − 132 = 5.' },
    { id: 'fb-7', stem: 'BIDMAS stands for Brackets, Indices, Division, Multiplication, Addition, and _____.', template: 'BIDMAS stands for Brackets, Indices, Division, Multiplication, Addition, and __BLANK__.', blanks: [{ answer: 'Subtraction' }], rationale: 'S stands for Subtraction, the last operation in BIDMAS.' },
    { id: 'fb-8', stem: 'In BIDMAS, division and multiplication have _____ priority.', template: 'In BIDMAS, division and multiplication have __BLANK__ priority.', blanks: [{ answer: 'equal' }], rationale: 'Division and multiplication share the same priority and are worked left to right.' },
    { id: 'fb-9', stem: 'When brackets are nested, you evaluate the _____ brackets first.', template: 'When brackets are nested, you evaluate the __BLANK__ brackets first.', blanks: [{ answer: 'innermost' }], rationale: 'Work from the inside out when dealing with nested brackets.' },
    { id: 'fb-10', stem: 'To multiply 5.6 × 2.3, first calculate 56 × 23 = 1 288, then place _____ decimal place(s) in the answer.', template: 'To multiply 5.6 × 2.3, first calculate 56 × 23 = 1 288, then place __BLANK__ decimal place(s) in the answer.', blanks: [{ answer: '2' }], rationale: '5.6 has 1 d.p. and 2.3 has 1 d.p., so the answer needs 1 + 1 = 2 decimal places.' },
    { id: 'fb-11', stem: 'To divide by a decimal, multiply both numbers by a power of _____ to make the divisor whole.', template: 'To divide by a decimal, multiply both numbers by a power of __BLANK__ to make the divisor whole.', blanks: [{ answer: '10' }], rationale: 'Multiplying both dividend and divisor by 10, 100, etc. removes the decimal from the divisor.' },
    { id: 'fb-12', stem: 'Multiplying a number by 1 000 moves the decimal point _____ places to the right.', template: 'Multiplying a number by 1 000 moves the decimal point __BLANK__ places to the right.', blanks: [{ answer: '3' }], rationale: '1 000 has three zeros, so the decimal moves three places right.' },
    { id: 'fb-13', stem: 'In long multiplication of 347 × 28, you first multiply 347 × 8, then multiply 347 × _____.', template: 'In long multiplication of 347 × 28, you first multiply 347 × 8, then multiply 347 × __BLANK__.', blanks: [{ answer: '20' }], rationale: 'The 2 in 28 represents 20, so the second partial product is 347 × 20.' },
    { id: 'fb-14', stem: 'A fraction bar acts like _____ in the order of operations.', template: 'A fraction bar acts like __BLANK__ in the order of operations.', blanks: [{ answer: 'brackets' }], rationale: 'The fraction bar groups the numerator and denominator, functioning as brackets.' },
    { id: 'fb-15', stem: '4.8 ÷ 0.6 can be rewritten as _____ ÷ 6 after multiplying both by 10.', template: '4.8 ÷ 0.6 can be rewritten as __BLANK__ ÷ 6 after multiplying both by 10.', blanks: [{ answer: '48' }], rationale: '4.8 × 10 = 48 and 0.6 × 10 = 6.' },
  ],

  /* ──────────────── DRAG-DROP  (~10) ──────────────── */
  dragdrop: [
    { id: 'dd-1', stem: 'Sort each operation into its BIDMAS priority level.', categories: ['Higher priority (D/M)', 'Lower priority (A/S)'], items: [ { text: '6 × 3', category: 'Higher priority (D/M)' }, { text: '12 ÷ 4', category: 'Higher priority (D/M)' }, { text: '8 + 5', category: 'Lower priority (A/S)' }, { text: '10 − 7', category: 'Lower priority (A/S)' }, { text: '2 × 9', category: 'Higher priority (D/M)' }, { text: '15 + 3', category: 'Lower priority (A/S)' } ] },
    { id: 'dd-2', stem: 'Classify each calculation technique.', categories: ['Addition/Subtraction technique', 'Multiplication/Division technique'], items: [ { text: 'Carrying digits', category: 'Addition/Subtraction technique' }, { text: 'Borrowing from next column', category: 'Addition/Subtraction technique' }, { text: 'Partial products', category: 'Multiplication/Division technique' }, { text: 'Divide, Multiply, Subtract, Bring down', category: 'Multiplication/Division technique' }, { text: 'Aligning decimal points', category: 'Addition/Subtraction technique' } ] },
    { id: 'dd-3', stem: 'Sort each expression by whether brackets change the answer or not.', categories: ['Brackets change the result', 'Brackets do NOT change the result'], items: [ { text: '(3 + 4) × 2 vs 3 + 4 × 2', category: 'Brackets change the result' }, { text: '(5 × 2) + 1 vs 5 × 2 + 1', category: 'Brackets do NOT change the result' }, { text: '(10 − 2) ÷ 4 vs 10 − 2 ÷ 4', category: 'Brackets change the result' }, { text: '6 + (3 + 1) vs 6 + 3 + 1', category: 'Brackets do NOT change the result' } ] },
    { id: 'dd-4', stem: 'Classify each calculation as having a whole-number answer or a decimal answer.', categories: ['Whole number', 'Decimal'], items: [ { text: '784 ÷ 7', category: 'Whole number' }, { text: '137 ÷ 6', category: 'Decimal' }, { text: '5.6 × 2.3', category: 'Decimal' }, { text: '48 ÷ 6', category: 'Whole number' }, { text: '3.75 ÷ 0.05', category: 'Whole number' } ] },
    { id: 'dd-5', stem: 'Match each BIDMAS letter to its meaning.', categories: ['B', 'I', 'D', 'M', 'A', 'S'], items: [ { text: 'Brackets', category: 'B' }, { text: 'Indices', category: 'I' }, { text: 'Division', category: 'D' }, { text: 'Multiplication', category: 'M' }, { text: 'Addition', category: 'A' }, { text: 'Subtraction', category: 'S' } ] },
    { id: 'dd-6', stem: 'Sort each action by whether the decimal point moves right or left.', categories: ['Decimal moves right', 'Decimal moves left'], items: [ { text: '× 10', category: 'Decimal moves right' }, { text: '× 100', category: 'Decimal moves right' }, { text: '÷ 10', category: 'Decimal moves left' }, { text: '÷ 1 000', category: 'Decimal moves left' }, { text: '× 1 000', category: 'Decimal moves right' }, { text: '÷ 100', category: 'Decimal moves left' } ] },
    { id: 'dd-7', stem: 'Sort each checking strategy by which operation it best checks.', categories: ['Check addition', 'Check multiplication'], items: [ { text: 'Subtract answer from total', category: 'Check addition' }, { text: 'Divide answer by one factor', category: 'Check multiplication' }, { text: 'Estimate by rounding both factors', category: 'Check multiplication' }, { text: 'Use inverse subtraction', category: 'Check addition' } ] },
    { id: 'dd-8', stem: 'Classify each decimal multiplication by the number of decimal places in the answer.', categories: ['2 decimal places', '3 decimal places'], items: [ { text: '2.4 × 0.3', category: '2 decimal places' }, { text: '5.6 × 2.3', category: '2 decimal places' }, { text: '3.4 × 0.12', category: '3 decimal places' }, { text: '1.5 × 0.04', category: '3 decimal places' } ] },
    { id: 'dd-9', stem: 'Sort these values into addition or subtraction results for 8.5 and 3.27.', categories: ['8.5 + 3.27', '8.5 − 3.27'], items: [ { text: '11.77', category: '8.5 + 3.27' }, { text: '5.23', category: '8.5 − 3.27' } ] },
    { id: 'dd-10', stem: 'Classify each expression by what you evaluate first according to BIDMAS.', categories: ['Evaluate brackets first', 'Evaluate multiplication/division first'], items: [ { text: '(3 + 2) × 5', category: 'Evaluate brackets first' }, { text: '7 + 6 × 4', category: 'Evaluate multiplication/division first' }, { text: '2 × (8 − 3)', category: 'Evaluate brackets first' }, { text: '15 − 10 ÷ 2', category: 'Evaluate multiplication/division first' } ] },
  ],

  /* ──────────────── SEQUENCE  (~8) ──────────────── */
  sequence: [
    { id: 'seq-1', stem: 'Put the BIDMAS order of operations in the correct sequence, from first to last.', steps: ['Brackets', 'Indices', 'Division / Multiplication (left to right)', 'Addition / Subtraction (left to right)'] },
    { id: 'seq-2', stem: 'Order the steps for evaluating: (2 + 3)² − 4 × 3 + 8 ÷ 2', steps: ['Brackets: 2 + 3 = 5', 'Indices: 5² = 25', 'Multiplication and Division: 4 × 3 = 12, 8 ÷ 2 = 4', 'Addition and Subtraction: 25 − 12 + 4 = 17'] },
    { id: 'seq-3', stem: 'Order the steps to perform long division.', steps: ['Divide', 'Multiply', 'Subtract', 'Bring down the next digit'] },
    { id: 'seq-4', stem: 'Order the steps for multiplying 5.6 × 2.3.', steps: ['Ignore decimals: write 56 and 23', 'Multiply as whole numbers: 56 × 23 = 1 288', 'Count total decimal places: 1 + 1 = 2', 'Place the decimal point: 12.88'] },
    { id: 'seq-5', stem: 'Order the steps for dividing 4.8 ÷ 0.6.', steps: ['Identify the decimal divisor: 0.6', 'Multiply both by 10: 48 ÷ 6', 'Divide as whole numbers: 48 ÷ 6 = 8', 'Write the answer: 8'] },
    { id: 'seq-6', stem: 'Order the steps for column addition of 3 847 + 2 965.', steps: ['Align digits by place value', 'Add units: 7 + 5 = 12, write 2 carry 1', 'Add tens: 4 + 6 + 1 = 11, write 1 carry 1', 'Continue adding hundreds and thousands with carries to get 6 812'] },
    { id: 'seq-7', stem: 'Order the steps for adding 12.7 + 3.045.', steps: ['Align decimal points vertically', 'Add trailing zeros: write 12.700', 'Add column by column from right to left', 'Write the answer: 15.745'] },
    { id: 'seq-8', stem: 'Order the steps to evaluate: 2 × [5 + (3 − 1)²]', steps: ['Innermost brackets: 3 − 1 = 2', 'Indices: 2² = 4', 'Outer brackets: 5 + 4 = 9', 'Multiplication: 2 × 9 = 18'] },
  ],

  /* ──────────────── KEYWORD  (~12) ──────────────── */
  keyword: [
    { id: 'kw-1', stem: 'Describe the process of carrying in column addition. [2 marks]', marks: 2, keywords: ['carry', 'column total ≥ 10'], modelAnswer: 'When a column total is 10 or more, you write the units digit and carry the tens digit to the next column on the left.' },
    { id: 'kw-2', stem: 'Explain what borrowing means in column subtraction. [2 marks]', marks: 2, keywords: ['borrow', 'next column'], modelAnswer: 'If the top digit is smaller than the bottom digit, you borrow 10 from the next column to the left so the subtraction can be completed.' },
    { id: 'kw-3', stem: 'How do you check an addition using an inverse operation? [2 marks]', marks: 2, keywords: ['inverse', 'subtraction'], modelAnswer: 'Subtract one of the original numbers from the answer. If you get the other original number, the addition is correct.' },
    { id: 'kw-4', stem: 'Explain the four steps of long division. [2 marks]', marks: 2, keywords: ['divide', 'multiply', 'subtract', 'bring down'], modelAnswer: 'Divide the divisor into the current digits, multiply the quotient by the divisor, subtract the result, then bring down the next digit. Repeat until finished.' },
    { id: 'kw-5', stem: 'What does BIDMAS stand for and why is it important? [3 marks]', marks: 3, keywords: ['Brackets', 'Indices', 'Division', 'Multiplication', 'Addition', 'Subtraction'], modelAnswer: 'BIDMAS stands for Brackets, Indices, Division, Multiplication, Addition, Subtraction. It tells you the correct order in which to evaluate mathematical operations so everyone gets the same answer.' },
    { id: 'kw-6', stem: 'Explain why 3 + 4 × 2 is not equal to 14. [2 marks]', marks: 2, keywords: ['multiplication first', 'BIDMAS'], modelAnswer: 'By BIDMAS, multiplication is done before addition. So 4 × 2 = 8 is evaluated first, giving 3 + 8 = 11, not (3 + 4) × 2 = 14.' },
    { id: 'kw-7', stem: 'How do you handle nested brackets? [2 marks]', marks: 2, keywords: ['innermost', 'work outward'], modelAnswer: 'Evaluate the innermost brackets first, then work outward, applying BIDMAS at each level until all brackets are removed.' },
    { id: 'kw-8', stem: 'Describe the method for multiplying two decimal numbers. [3 marks]', marks: 3, keywords: ['ignore decimals', 'whole numbers', 'count decimal places'], modelAnswer: 'Ignore the decimal points and multiply as whole numbers. Count the total number of decimal places in both original numbers. Place the decimal point in the answer so it has that total number of decimal places.' },
    { id: 'kw-9', stem: 'Explain how to divide by a decimal number such as 4.8 ÷ 0.6. [2 marks]', marks: 2, keywords: ['multiply both', 'whole number divisor'], modelAnswer: 'Multiply both the dividend and divisor by a power of 10 to make the divisor a whole number (e.g. 48 ÷ 6), then divide normally.' },
    { id: 'kw-10', stem: 'Why must you align decimal points when adding or subtracting decimals? [2 marks]', marks: 2, keywords: ['place value', 'same column'], modelAnswer: 'Aligning decimal points ensures digits with the same place value are in the same column, so units are added to units, tenths to tenths, and so on.' },
    { id: 'kw-11', stem: 'Explain what happens to the decimal point when you multiply a number by 100. [1 mark]', marks: 1, keywords: ['moves right', '2 places'], modelAnswer: 'The decimal point moves 2 places to the right.' },
    { id: 'kw-12', stem: 'State how estimation can be used to check a multiplication answer. [2 marks]', marks: 2, keywords: ['round', 'reasonable'], modelAnswer: 'Round each number to 1 significant figure and multiply mentally. If the estimate is close to the actual answer, the answer is reasonable.' },
  ],

  /* ──────────────── FLASHCARDS  (~25) ──────────────── */
  flashcards: [
    // Addition / Subtraction
    { id: 'fc-1', front: 'What does "carrying" mean in column addition?', back: 'When a column total is ≥ 10, you write the units digit and carry the tens digit to the next column.', topic: 'Addition/subtraction' },
    { id: 'fc-2', front: 'What does "borrowing" mean in column subtraction?', back: 'When the top digit is smaller than the bottom, you take 10 from the next column to the left.', topic: 'Addition/subtraction' },
    { id: 'fc-3', front: 'How do you add or subtract decimals?', back: 'Align the decimal points vertically, add trailing zeros so all numbers have the same decimal places, then calculate as with whole numbers.', topic: 'Addition/subtraction' },
    { id: 'fc-4', front: 'How can you check an addition answer?', back: 'Use the inverse operation (subtraction) or estimate by rounding to 1 s.f.', topic: 'Addition/subtraction' },
    { id: 'fc-5', front: 'What is 3 847 + 2 965?', back: '6 812', topic: 'Addition/subtraction' },
    { id: 'fc-6', front: 'What is 5 304 − 1 867?', back: '3 437', topic: 'Addition/subtraction' },

    // Multiplication / Division
    { id: 'fc-7', front: 'What is the method for long multiplication?', back: 'Multiply by each digit of the bottom number separately (shift left for each successive digit), then add the partial products.', topic: 'Multiplication/division' },
    { id: 'fc-8', front: 'What are the four steps of long division?', back: 'Divide → Multiply → Subtract → Bring down. Repeat until no digits remain.', topic: 'Multiplication/division' },
    { id: 'fc-9', front: 'What is 784 ÷ 7?', back: '112', topic: 'Multiplication/division' },
    { id: 'fc-10', front: 'What is 137 ÷ 6 as a remainder and as a decimal?', back: '22 remainder 5, or approximately 22.83.', topic: 'Multiplication/division' },
    { id: 'fc-11', front: 'How do you check a division answer?', back: 'Multiply the answer by the divisor — you should get the original number.', topic: 'Multiplication/division' },
    { id: 'fc-12', front: 'What is 347 × 28?', back: '9 716', topic: 'Multiplication/division' },

    // Order of operations
    { id: 'fc-13', front: 'What does BIDMAS stand for?', back: 'Brackets, Indices, Division, Multiplication, Addition, Subtraction.', topic: 'Order of operations (BIDMAS/BODMAS)' },
    { id: 'fc-14', front: 'In BIDMAS, which operations share equal priority?', back: 'Division and Multiplication share equal priority (do left to right). Addition and Subtraction also share equal priority.', topic: 'Order of operations (BIDMAS/BODMAS)' },
    { id: 'fc-15', front: 'What is 3 + 4 × 2 − 1?', back: '10. Multiply first (4 × 2 = 8), then 3 + 8 − 1 = 10.', topic: 'Order of operations (BIDMAS/BODMAS)' },
    { id: 'fc-16', front: 'What is 12 ÷ 4 × 2?', back: '6. Work left to right: 12 ÷ 4 = 3, then 3 × 2 = 6.', topic: 'Order of operations (BIDMAS/BODMAS)' },
    { id: 'fc-17', front: 'How do you handle nested brackets?', back: 'Evaluate the innermost brackets first, then work outward.', topic: 'Order of operations (BIDMAS/BODMAS)' },
    { id: 'fc-18', front: 'What does a fraction bar mean in terms of order of operations?', back: 'It acts like brackets — you evaluate the numerator and denominator separately before dividing.', topic: 'Order of operations (BIDMAS/BODMAS)' },
    { id: 'fc-19', front: 'What is (2 + 3)² − 4 × 3 + 8 ÷ 2?', back: '17. Brackets → 5, Indices → 25, Mult/Div → 12 and 4, then 25 − 12 + 4 = 17.', topic: 'Order of operations (BIDMAS/BODMAS)' },

    // Operations with decimals
    { id: 'fc-20', front: 'How do you multiply two decimal numbers?', back: 'Ignore the decimal points, multiply as whole numbers, then place the decimal point so the answer has the total number of decimal places from both numbers.', topic: 'Operations with decimals' },
    { id: 'fc-21', front: 'How do you divide by a decimal?', back: 'Multiply both the dividend and divisor by a power of 10 to make the divisor a whole number, then divide normally.', topic: 'Operations with decimals' },
    { id: 'fc-22', front: 'What is 5.6 × 2.3?', back: '12.88 (56 × 23 = 1 288, then 2 decimal places).', topic: 'Operations with decimals' },
    { id: 'fc-23', front: 'What is 4.8 ÷ 0.6?', back: '8 (multiply both by 10 → 48 ÷ 6 = 8).', topic: 'Operations with decimals' },
    { id: 'fc-24', front: 'What happens to the decimal point when you multiply by 100?', back: 'It moves 2 places to the right.', topic: 'Operations with decimals' },
    { id: 'fc-25', front: 'What happens to the decimal point when you divide by 1 000?', back: 'It moves 3 places to the left.', topic: 'Operations with decimals' },
  ],

};
