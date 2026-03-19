export const exercises_olevel_maths_core_1_4 = {

  /* ──────────────────────────── MCQ (~30) ──────────────────────────── */
  mcq: [
    // --- Introduction to fractions ---
    { id: 'mcq-1', stem: 'In the fraction 7/9, what is the numerator?', options: ['9', '7', '16', '2'], correctAnswer: 1, rationale: 'The numerator is the top number (7). It tells you how many parts you have.', topic: 'Introduction to fractions' },
    { id: 'mcq-2', stem: 'Which of the following is a proper fraction?', options: ['9/4', '5/5', '3/8', '7/3'], correctAnswer: 2, rationale: '3/8 is proper because the numerator (3) is less than the denominator (8).', topic: 'Introduction to fractions' },
    { id: 'mcq-3', stem: 'Which fraction is a unit fraction?', options: ['2/5', '1/6', '3/3', '4/7'], correctAnswer: 1, rationale: 'A unit fraction has a numerator of 1. Only 1/6 fits this definition.', topic: 'Introduction to fractions' },
    { id: 'mcq-4', stem: 'Which is the largest unit fraction?', options: ['1/8', '1/3', '⅕', '1/10'], correctAnswer: 1, rationale: 'For unit fractions, the smaller the denominator the larger the fraction. ⅓ is the largest.', topic: 'Introduction to fractions' },
    { id: 'mcq-5', stem: 'What is the decimal equivalent of ¾?', options: ['0.25', '0.34', '0.75', '1.33'], correctAnswer: 2, rationale: '¾ = 3 ÷ 4 = 0.75.', topic: 'Introduction to fractions' },

    // --- Equivalent / simplified fractions ---
    { id: 'mcq-6', stem: 'Which fraction is equivalent to ⅔?', options: ['4/9', '8/12', '3/6', '5/8'], correctAnswer: 1, rationale: '⅔ × 4/4 = 8/12. Both the numerator and denominator are multiplied by 4.', topic: 'Equivalent / simplified fractions' },
    { id: 'mcq-7', stem: 'Simplify 18/24 to its lowest terms.', options: ['3/4', '9/12', '6/8', '2/3'], correctAnswer: 0, rationale: 'HCF of 18 and 24 is 6. 18 ÷ 6 = 3, 24 ÷ 6 = 4. Answer: ¾.', topic: 'Equivalent / simplified fractions' },
    { id: 'mcq-8', stem: 'Which pair of fractions are equivalent?', options: ['2/3 and 4/9', '3/5 and 9/15', '1/4 and 3/16', '5/6 and 10/18'], correctAnswer: 1, rationale: '3/5 × 3/3 = 9/15. They represent the same value.', topic: 'Equivalent / simplified fractions' },
    { id: 'mcq-9', stem: 'What is the HCF of 12 and 30?', options: ['3', '6', '12', '2'], correctAnswer: 1, rationale: 'Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30. HCF = 6.', topic: 'Equivalent / simplified fractions' },
    { id: 'mcq-10', stem: 'Which is larger: ⅗ or 7/12?', options: ['⅗', '7/12', 'They are equal', 'Cannot tell'], correctAnswer: 0, rationale: 'LCD = 60. ⅗ = 36/60, 7/12 = 35/60. Since 36 > 35, ⅗ is larger.', topic: 'Equivalent / simplified fractions' },

    // --- Mixed / improper fractions ---
    { id: 'mcq-11', stem: 'Convert 2¾ to an improper fraction.', options: ['9/4', '11/4', '8/4', '10/4'], correctAnswer: 1, rationale: '2 × 4 = 8, then 8 + 3 = 11. So 2¾ = 11/4.', topic: 'Mixed / improper fractions' },
    { id: 'mcq-12', stem: 'Convert 17/5 to a mixed number.', options: ['3⅕', '3⅗', '3⅖', '2⅗'], correctAnswer: 2, rationale: '17 ÷ 5 = 3 remainder 2. So 17/5 = 3 2/5 = 3⅖.', topic: 'Mixed / improper fractions' },
    { id: 'mcq-13', stem: 'Which of these is an improper fraction?', options: ['¾', '2½', '9/7', '⅕'], correctAnswer: 2, rationale: '9/7 has numerator (9) greater than denominator (7), making it improper.', topic: 'Mixed / improper fractions' },
    { id: 'mcq-14', stem: 'Convert 4⅓ to an improper fraction.', options: ['12/3', '13/3', '7/3', '15/3'], correctAnswer: 1, rationale: '4 × 3 = 12, then 12 + 1 = 13. So 4⅓ = 13/3.', topic: 'Mixed / improper fractions' },
    { id: 'mcq-15', stem: 'Convert 29/6 to a mixed number.', options: ['4⅚', '5⅙', '4⅔', '3⅚'], correctAnswer: 0, rationale: '29 ÷ 6 = 4 remainder 5. So 29/6 = 4 5/6.', topic: 'Mixed / improper fractions' },

    // --- Adding / subtracting fractions ---
    { id: 'mcq-16', stem: 'Calculate ⅗ + ⅕.', options: ['⅘', '⅖', '6/10', '4/10'], correctAnswer: 0, rationale: 'Same denominator: 3 + 1 = 4. So ⅗ + ⅕ = ⅘.', topic: 'Adding / subtracting fractions' },
    { id: 'mcq-17', stem: 'Calculate ⅔ + ¼.', options: ['3/7', '11/12', '5/7', '8/12'], correctAnswer: 1, rationale: 'LCD = 12. ⅔ = 8/12, ¼ = 3/12. 8/12 + 3/12 = 11/12.', topic: 'Adding / subtracting fractions' },
    { id: 'mcq-18', stem: 'Calculate ⅚ − ⅓.', options: ['½', '4/6', '⅔', '⅙'], correctAnswer: 0, rationale: 'LCD = 6. ⅓ = 2/6. So 5/6 − 2/6 = 3/6 = ½.', topic: 'Adding / subtracting fractions' },
    { id: 'mcq-19', stem: 'What is 2½ + 1¾?', options: ['3¼', '4¼', '3¾', '4½'], correctAnswer: 1, rationale: '2½ = 5/2 = 10/4, 1¾ = 7/4. 10/4 + 7/4 = 17/4 = 4¼.', topic: 'Adding / subtracting fractions' },
    { id: 'mcq-20', stem: 'Calculate 3⅓ − 1⅚.', options: ['1½', '2½', '1⅚', '2⅙'], correctAnswer: 0, rationale: '3⅓ = 10/3 = 20/6, 1⅚ = 11/6. 20/6 − 11/6 = 9/6 = 3/2 = 1½.', topic: 'Adding / subtracting fractions' },

    // --- Multiplying / dividing fractions ---
    { id: 'mcq-21', stem: 'Calculate ⅔ × ¾.', options: ['6/12', '½', '5/7', '⅙'], correctAnswer: 1, rationale: '⅔ × ¾ = 6/12 = ½.', topic: 'Multiplying / dividing fractions' },
    { id: 'mcq-22', stem: 'What is the reciprocal of ⅗?', options: ['3/5', '⅖', '5/3', '1/3'], correctAnswer: 2, rationale: 'The reciprocal of ⅗ is found by flipping the fraction: 5/3.', topic: 'Multiplying / dividing fractions' },
    { id: 'mcq-23', stem: 'Calculate ¾ ÷ ½.', options: ['3/8', '1½', '⅜', '2'], correctAnswer: 1, rationale: '¾ ÷ ½ = ¾ × 2/1 = 6/4 = 3/2 = 1½.', topic: 'Multiplying / dividing fractions' },
    { id: 'mcq-24', stem: 'Calculate ⅖ × 5/8.', options: ['¼', '10/40', '7/13', '½'], correctAnswer: 0, rationale: '⅖ × 5/8 = 10/40 = ¼.', topic: 'Multiplying / dividing fractions' },
    { id: 'mcq-25', stem: 'Calculate 1½ × 2⅓.', options: ['2½', '3½', '3⅓', '4'], correctAnswer: 1, rationale: '1½ = 3/2, 2⅓ = 7/3. 3/2 × 7/3 = 21/6 = 7/2 = 3½.', topic: 'Multiplying / dividing fractions' },

    // --- Fractions of amounts ---
    { id: 'mcq-26', stem: 'What is ¾ of 60?', options: ['40', '45', '48', '15'], correctAnswer: 1, rationale: '60 ÷ 4 = 15, then 15 × 3 = 45.', topic: 'Fractions of amounts' },
    { id: 'mcq-27', stem: 'Find ⅖ of $120.', options: ['$24', '$60', '$48', '$96'], correctAnswer: 2, rationale: '120 ÷ 5 = 24, then 24 × 2 = $48.', topic: 'Fractions of amounts' },
    { id: 'mcq-28', stem: 'Which is greater: ⅔ of 90 or ¾ of 80?', options: ['⅔ of 90', '¾ of 80', 'They are equal', 'Cannot tell'], correctAnswer: 0, rationale: '⅔ of 90 = 60. ¾ of 80 = 60. They are equal.', topic: 'Fractions of amounts' },
    { id: 'mcq-29', stem: 'A class has 35 students. 3/7 go on a trip. How many students go?', options: ['5', '10', '15', '21'], correctAnswer: 2, rationale: '35 ÷ 7 = 5, then 5 × 3 = 15 students.', topic: 'Fractions of amounts' },
    { id: 'mcq-30', stem: 'A shirt costs $80. It is reduced by ¼. What is the sale price?', options: ['$20', '$40', '$60', '$64'], correctAnswer: 2, rationale: '¼ of $80 = $20. Sale price = $80 − $20 = $60.', topic: 'Fractions of amounts' }
  ],

  /* ──────────────────────────── FILL-BLANK (~15) ──────────────────────────── */
  fillblank: [
    // --- Introduction to fractions ---
    { id: 'fb-1', stem: 'Name the top part of a fraction.', template: 'The top number of a fraction is called the __BLANK__.', blanks: [{ answer: 'numerator' }], rationale: 'The numerator is the number above the fraction line showing how many parts you have.' },
    { id: 'fb-2', stem: 'What type of fraction has a numerator of 1?', template: 'A fraction with a numerator of 1 is called a __BLANK__ fraction.', blanks: [{ answer: 'unit' }], rationale: 'Unit fractions always have 1 as the numerator, e.g. ½, ⅓, ¼.' },
    { id: 'fb-3', stem: 'Convert ⅜ to a decimal.', template: '⅜ as a decimal is __BLANK__.', blanks: [{ answer: '0.375' }], rationale: '3 ÷ 8 = 0.375.' },

    // --- Equivalent / simplified fractions ---
    { id: 'fb-4', stem: 'Complete the equivalent fraction: ⅖ = ?/20.', template: '⅖ = __BLANK__/20.', blanks: [{ answer: '8' }], rationale: '5 × 4 = 20, so numerator = 2 × 4 = 8.' },
    { id: 'fb-5', stem: 'Simplify 15/25 to lowest terms.', template: '15/25 simplified is __BLANK__.', blanks: [{ answer: '3/5' }], rationale: 'HCF of 15 and 25 is 5. 15 ÷ 5 = 3, 25 ÷ 5 = 5.' },

    // --- Mixed / improper fractions ---
    { id: 'fb-6', stem: 'Convert 3⅖ to an improper fraction.', template: '3⅖ as an improper fraction is __BLANK__.', blanks: [{ answer: '17/5' }], rationale: '3 × 5 = 15, then 15 + 2 = 17. So 3⅖ = 17/5.' },
    { id: 'fb-7', stem: 'Convert 23/4 to a mixed number.', template: '23/4 as a mixed number is __BLANK__.', blanks: [{ answer: '5 3/4' }], rationale: '23 ÷ 4 = 5 remainder 3. So 23/4 = 5¾.' },

    // --- Adding / subtracting fractions ---
    { id: 'fb-8', stem: 'Calculate ⅗ + ⅖.', template: '⅗ + ⅖ = __BLANK__.', blanks: [{ answer: '1' }], rationale: 'Same denominator: 3 + 2 = 5. So 5/5 = 1.' },
    { id: 'fb-9', stem: 'Calculate ⅔ + ⅙.', template: '⅔ + ⅙ = __BLANK__.', blanks: [{ answer: '5/6' }], rationale: 'LCD = 6. ⅔ = 4/6. Then 4/6 + 1/6 = 5/6.' },
    { id: 'fb-10', stem: 'What is the LCD of 4 and 6?', template: 'The lowest common denominator of 4 and 6 is __BLANK__.', blanks: [{ answer: '12' }], rationale: 'LCM of 4 and 6 is 12.' },

    // --- Multiplying / dividing fractions ---
    { id: 'fb-11', stem: 'To divide by a fraction, multiply by its ____.', template: 'To divide by a fraction, you multiply by its __BLANK__.', blanks: [{ answer: 'reciprocal' }], rationale: 'The reciprocal is the fraction flipped: the reciprocal of a/b is b/a.' },
    { id: 'fb-12', stem: 'Calculate ⅓ × ¾.', template: '⅓ × ¾ = __BLANK__.', blanks: [{ answer: '1/4' }], rationale: '1 × 3 = 3, 3 × 4 = 12. So 3/12 = ¼.' },
    { id: 'fb-13', stem: 'Calculate ⅗ ÷ ⅖.', template: '⅗ ÷ ⅖ = __BLANK__.', blanks: [{ answer: '3/2' }], rationale: '⅗ × 5/2 = 15/10 = 3/2.' },

    // --- Fractions of amounts ---
    { id: 'fb-14', stem: 'Find ⅕ of 45.', template: '⅕ of 45 = __BLANK__.', blanks: [{ answer: '9' }], rationale: '45 ÷ 5 = 9.' },
    { id: 'fb-15', stem: 'Find ⅔ of 120 cm.', template: '⅔ of 120 cm = __BLANK__ cm.', blanks: [{ answer: '80' }], rationale: '120 ÷ 3 = 40, then 40 × 2 = 80 cm.' }
  ],

  /* ──────────────────────────── DRAG-DROP (~10) ──────────────────────────── */
  dragdrop: [
    { id: 'dd-1', stem: 'Classify each fraction as proper or improper.', categories: ['Proper', 'Improper'], items: [
      { text: '¾', category: 'Proper' },
      { text: '9/5', category: 'Improper' },
      { text: '⅖', category: 'Proper' },
      { text: '7/7', category: 'Improper' },
      { text: '11/8', category: 'Improper' },
      { text: '⅓', category: 'Proper' }
    ] },
    { id: 'dd-2', stem: 'Classify each fraction as a unit fraction or not a unit fraction.', categories: ['Unit fraction', 'Not a unit fraction'], items: [
      { text: '½', category: 'Unit fraction' },
      { text: '⅔', category: 'Not a unit fraction' },
      { text: '¼', category: 'Unit fraction' },
      { text: '⅗', category: 'Not a unit fraction' },
      { text: '⅕', category: 'Unit fraction' },
      { text: '¾', category: 'Not a unit fraction' }
    ] },
    { id: 'dd-3', stem: 'Match each fraction to its equivalent.', categories: ['½', '⅓', '¾'], items: [
      { text: '5/10', category: '½' },
      { text: '4/12', category: '⅓' },
      { text: '9/12', category: '¾' },
      { text: '3/6', category: '½' },
      { text: '6/18', category: '⅓' },
      { text: '15/20', category: '¾' }
    ] },
    { id: 'dd-4', stem: 'Sort these fractions into simplified or not yet simplified.', categories: ['Fully simplified', 'Not fully simplified'], items: [
      { text: '⅗', category: 'Fully simplified' },
      { text: '4/8', category: 'Not fully simplified' },
      { text: '⅔', category: 'Fully simplified' },
      { text: '6/9', category: 'Not fully simplified' },
      { text: '5/7', category: 'Fully simplified' },
      { text: '10/15', category: 'Not fully simplified' }
    ] },
    { id: 'dd-5', stem: 'Match each mixed number to its improper fraction.', categories: ['11/4', '17/5', '7/3'], items: [
      { text: '2¾', category: '11/4' },
      { text: '3⅖', category: '17/5' },
      { text: '2⅓', category: '7/3' }
    ] },
    { id: 'dd-6', stem: 'Classify each operation result as a proper fraction or an improper fraction / mixed number.', categories: ['Less than 1', '1 or more'], items: [
      { text: '⅓ + ¼', category: 'Less than 1' },
      { text: '⅔ + ½', category: '1 or more' },
      { text: '⅚ − ⅓', category: 'Less than 1' },
      { text: '¾ + ⅗', category: '1 or more' }
    ] },
    { id: 'dd-7', stem: 'Match each division to its answer.', categories: ['½', '1½', '2'], items: [
      { text: '¾ ÷ 1½', category: '½' },
      { text: '¾ ÷ ½', category: '1½' },
      { text: '⅔ ÷ ⅓', category: '2' }
    ] },
    { id: 'dd-8', stem: 'Sort these into the correct method: Keep denominator same OR Find LCD first.', categories: ['Same denominator', 'Find LCD'], items: [
      { text: '⅗ + ⅕', category: 'Same denominator' },
      { text: '¼ + ⅓', category: 'Find LCD' },
      { text: '7/9 − 2/9', category: 'Same denominator' },
      { text: '⅚ − ¼', category: 'Find LCD' },
      { text: '3/10 + 7/10', category: 'Same denominator' },
      { text: '½ + ⅗', category: 'Find LCD' }
    ] },
    { id: 'dd-9', stem: 'Match each "fraction of an amount" to its value.', categories: ['$15', '$24', '$40'], items: [
      { text: '¼ of $60', category: '$15' },
      { text: '⅖ of $60', category: '$24' },
      { text: '⅔ of $60', category: '$40' }
    ] },
    { id: 'dd-10', stem: 'Sort fractions by whether you flip (use reciprocal) or not.', categories: ['Use reciprocal', 'Do not use reciprocal'], items: [
      { text: '⅗ ÷ ¼', category: 'Use reciprocal' },
      { text: '⅗ × ¼', category: 'Do not use reciprocal' },
      { text: '2 ÷ ⅗', category: 'Use reciprocal' },
      { text: '⅔ × ⅚', category: 'Do not use reciprocal' }
    ] }
  ],

  /* ──────────────────────────── SEQUENCE (~8) ──────────────────────────── */
  sequence: [
    { id: 'seq-1', stem: 'Order the steps to simplify 24/36 to its lowest terms.', steps: [
      'Find factors of 24 and 36',
      'Identify the HCF (12)',
      'Divide numerator by 12: 24 ÷ 12 = 2',
      'Divide denominator by 12: 36 ÷ 12 = 3',
      'Write the simplified fraction: ⅔'
    ] },
    { id: 'seq-2', stem: 'Order the steps to convert 3⅖ to an improper fraction.', steps: [
      'Multiply the whole number by the denominator: 3 × 5 = 15',
      'Add the numerator: 15 + 2 = 17',
      'Write the result over the original denominator: 17/5'
    ] },
    { id: 'seq-3', stem: 'Order the steps to convert 23/4 to a mixed number.', steps: [
      'Divide the numerator by the denominator: 23 ÷ 4',
      'Write down the quotient as the whole number: 5',
      'Write the remainder as the new numerator: 3',
      'Keep the original denominator: 4',
      'Write the mixed number: 5¾'
    ] },
    { id: 'seq-4', stem: 'Order the steps to add ⅔ + ¾.', steps: [
      'Find the LCD of 3 and 4: LCD = 12',
      'Convert ⅔ to 8/12',
      'Convert ¾ to 9/12',
      'Add the numerators: 8 + 9 = 17',
      'Write the answer: 17/12 = 1 5/12'
    ] },
    { id: 'seq-5', stem: 'Order the steps to calculate ¾ ÷ ⅖.', steps: [
      'Keep the first fraction: ¾',
      'Change ÷ to ×',
      'Flip the second fraction: ⅖ becomes 5/2',
      'Multiply: ¾ × 5/2 = 15/8',
      'Convert to a mixed number: 1⅞'
    ] },
    { id: 'seq-6', stem: 'Order the steps to find ⅗ of $80.', steps: [
      'Divide $80 by the denominator: 80 ÷ 5 = $16',
      'Multiply by the numerator: 16 × 3 = $48',
      'Write the answer: ⅗ of $80 = $48'
    ] },
    { id: 'seq-7', stem: 'Order the steps to multiply ⅘ × 5/6 using cross-cancelling.', steps: [
      'Identify a common factor: 5 appears in numerator and denominator',
      'Cancel the 5s: ⅘ × 5/6 becomes 4/1 × 1/6',
      'Multiply numerators: 4 × 1 = 4',
      'Multiply denominators: 1 × 6 = 6',
      'Simplify: 4/6 = ⅔'
    ] },
    { id: 'seq-8', stem: 'Order the steps to compare ⅗ and 7/12.', steps: [
      'Find the LCD of 5 and 12: LCD = 60',
      'Convert ⅗ to 36/60',
      'Convert 7/12 to 35/60',
      'Compare numerators: 36 > 35',
      'Conclude: ⅗ > 7/12'
    ] }
  ],

  /* ──────────────────────────── KEYWORD (~12) ──────────────────────────── */
  keyword: [
    // --- Introduction to fractions ---
    { id: 'kw-1', stem: 'Explain what the numerator and denominator of a fraction represent. [2 marks]', marks: 2, keywords: ['numerator', 'denominator'], modelAnswer: 'The numerator is the top number showing how many parts are taken. The denominator is the bottom number showing how many equal parts the whole is divided into.' },
    { id: 'kw-2', stem: 'What is a unit fraction? Give an example. [2 marks]', marks: 2, keywords: ['numerator', '1'], modelAnswer: 'A unit fraction has a numerator of 1, for example ⅓ or ¼.' },

    // --- Equivalent / simplified fractions ---
    { id: 'kw-3', stem: 'Explain how to create an equivalent fraction. [2 marks]', marks: 2, keywords: ['multiply', 'same number'], modelAnswer: 'Multiply both the numerator and the denominator by the same non-zero number. This does not change the value of the fraction.' },
    { id: 'kw-4', stem: 'Describe how to simplify a fraction to its lowest terms. [2 marks]', marks: 2, keywords: ['HCF', 'divide'], modelAnswer: 'Find the HCF of the numerator and denominator, then divide both by the HCF. The fraction is fully simplified when the HCF is 1.' },

    // --- Mixed / improper fractions ---
    { id: 'kw-5', stem: 'Explain how to convert a mixed number to an improper fraction. [3 marks]', marks: 3, keywords: ['multiply', 'denominator', 'add numerator'], modelAnswer: 'Multiply the whole number by the denominator, add the numerator, and place the result over the original denominator.' },
    { id: 'kw-6', stem: 'Explain why improper fractions are useful for calculations. [2 marks]', marks: 2, keywords: ['improper', 'arithmetic'], modelAnswer: 'Improper fractions are a single fraction without a whole-number part, making arithmetic operations like adding, subtracting, multiplying and dividing simpler and less error-prone.' },

    // --- Adding / subtracting fractions ---
    { id: 'kw-7', stem: 'Describe the method for adding two fractions with different denominators. [3 marks]', marks: 3, keywords: ['LCD', 'equivalent', 'add numerators'], modelAnswer: 'Find the LCD of the two denominators. Convert each fraction to an equivalent fraction with that LCD. Then add the numerators and keep the common denominator. Simplify if needed.' },
    { id: 'kw-8', stem: 'Explain why you cannot just add the denominators when adding fractions. [2 marks]', marks: 2, keywords: ['equal parts', 'different sizes'], modelAnswer: 'Each denominator represents parts of different sizes. Adding denominators would mix different-sized parts, giving an incorrect answer. Fractions must share a common denominator so the parts are equal.' },

    // --- Multiplying / dividing fractions ---
    { id: 'kw-9', stem: 'Explain the KCF method for dividing fractions. [3 marks]', marks: 3, keywords: ['keep', 'change', 'flip'], modelAnswer: 'KCF stands for Keep, Change, Flip. Keep the first fraction, change the ÷ sign to ×, and flip the second fraction (use its reciprocal). Then multiply as normal.' },
    { id: 'kw-10', stem: 'What is cross-cancelling and why is it useful? [2 marks]', marks: 2, keywords: ['common factor', 'simplify'], modelAnswer: 'Cross-cancelling means dividing a numerator and a denominator (from different fractions) by a common factor before multiplying. It keeps numbers smaller and makes the calculation easier.' },

    // --- Fractions of amounts ---
    { id: 'kw-11', stem: 'Describe the two-step method for finding a fraction of an amount. [2 marks]', marks: 2, keywords: ['divide', 'multiply'], modelAnswer: 'First divide the amount by the denominator to find one part. Then multiply by the numerator to find the required number of parts.' },
    { id: 'kw-12', stem: 'A skirt is priced at $60 and reduced by ⅓. Explain how to find the sale price. [2 marks]', marks: 2, keywords: ['divide by 3', 'subtract'], modelAnswer: 'Divide $60 by 3 to get $20 (the discount). Subtract $20 from $60 to get the sale price of $40.' }
  ],

  /* ──────────────────────────── FLASHCARDS (~25) ──────────────────────────── */
  flashcards: [
    // --- Introduction to fractions ---
    { id: 'fc-1', front: 'What is the numerator of a fraction?', back: 'The top number — it tells you how many parts you have.', topic: 'Introduction to fractions' },
    { id: 'fc-2', front: 'What is the denominator of a fraction?', back: 'The bottom number — it tells you how many equal parts the whole is divided into.', topic: 'Introduction to fractions' },
    { id: 'fc-3', front: 'What is a proper fraction?', back: 'A fraction where the numerator is less than the denominator (value < 1). Example: ¾.', topic: 'Introduction to fractions' },
    { id: 'fc-4', front: 'What is a unit fraction?', back: 'A fraction with a numerator of 1. Examples: ½, ⅓, ¼, ⅕.', topic: 'Introduction to fractions' },
    { id: 'fc-5', front: 'How does a fraction relate to division?', back: 'a/b = a ÷ b. For example, ¾ = 3 ÷ 4 = 0.75.', topic: 'Introduction to fractions' },

    // --- Equivalent / simplified fractions ---
    { id: 'fc-6', front: 'What are equivalent fractions?', back: 'Fractions that represent the same value but have different numerators and denominators. Example: ½ = 2/4 = 3/6.', topic: 'Equivalent / simplified fractions' },
    { id: 'fc-7', front: 'How do you create an equivalent fraction?', back: 'Multiply (or divide) both the numerator and the denominator by the same non-zero number.', topic: 'Equivalent / simplified fractions' },
    { id: 'fc-8', front: 'What does it mean to simplify a fraction?', back: 'Divide both the numerator and denominator by their HCF until no common factors remain (HCF = 1).', topic: 'Equivalent / simplified fractions' },
    { id: 'fc-9', front: 'What is the LCD?', back: 'The Lowest Common Denominator — the smallest number that is a multiple of both denominators. Used to compare or add/subtract fractions.', topic: 'Equivalent / simplified fractions' },

    // --- Mixed / improper fractions ---
    { id: 'fc-10', front: 'What is an improper fraction?', back: 'A fraction where the numerator is greater than or equal to the denominator (value ≥ 1). Example: 7/4.', topic: 'Mixed / improper fractions' },
    { id: 'fc-11', front: 'How do you convert a mixed number to an improper fraction?', back: '(Whole × denominator + numerator) / denominator. Example: 2¾ → (2×4+3)/4 = 11/4.', topic: 'Mixed / improper fractions' },
    { id: 'fc-12', front: 'How do you convert an improper fraction to a mixed number?', back: 'Divide numerator by denominator. Quotient = whole part, remainder = new numerator. Example: 17/5 → 3 remainder 2 → 3⅖.', topic: 'Mixed / improper fractions' },
    { id: 'fc-13', front: 'When should you use improper fractions instead of mixed numbers?', back: 'Use improper fractions for calculations (adding, subtracting, multiplying, dividing). Use mixed numbers for final answers.', topic: 'Mixed / improper fractions' },

    // --- Adding / subtracting fractions ---
    { id: 'fc-14', front: 'How do you add fractions with the same denominator?', back: 'Add the numerators and keep the denominator the same. Example: 3/7 + 2/7 = 5/7.', topic: 'Adding / subtracting fractions' },
    { id: 'fc-15', front: 'How do you add fractions with different denominators?', back: '1. Find the LCD. 2. Convert both to equivalent fractions. 3. Add the numerators. 4. Simplify.', topic: 'Adding / subtracting fractions' },
    { id: 'fc-16', front: 'What is ⅔ + ¼?', back: 'LCD = 12. ⅔ = 8/12, ¼ = 3/12. 8/12 + 3/12 = 11/12.', topic: 'Adding / subtracting fractions' },
    { id: 'fc-17', front: 'How do you subtract mixed numbers?', back: 'Convert both to improper fractions, find the LCD, subtract the numerators, then convert back to a mixed number.', topic: 'Adding / subtracting fractions' },

    // --- Multiplying / dividing fractions ---
    { id: 'fc-18', front: 'How do you multiply two fractions?', back: 'Multiply the numerators together and the denominators together: a/b × c/d = (a×c)/(b×d). Simplify the result.', topic: 'Multiplying / dividing fractions' },
    { id: 'fc-19', front: 'What is cross-cancelling?', back: 'Dividing a numerator and a denominator from different fractions by a common factor before multiplying. Keeps numbers smaller.', topic: 'Multiplying / dividing fractions' },
    { id: 'fc-20', front: 'What does KCF stand for?', back: 'Keep, Change, Flip. Keep the first fraction. Change ÷ to ×. Flip (use the reciprocal of) the second fraction.', topic: 'Multiplying / dividing fractions' },
    { id: 'fc-21', front: 'What is the reciprocal of ⅗?', back: '5/3. You flip the fraction — swap the numerator and denominator.', topic: 'Multiplying / dividing fractions' },
    { id: 'fc-22', front: 'How do you multiply or divide mixed numbers?', back: 'Always convert mixed numbers to improper fractions first, then multiply or divide as normal.', topic: 'Multiplying / dividing fractions' },

    // --- Fractions of amounts ---
    { id: 'fc-23', front: 'How do you find a/b of a quantity Q?', back: 'Divide Q by the denominator (b), then multiply by the numerator (a). Or: Q × a/b.', topic: 'Fractions of amounts' },
    { id: 'fc-24', front: 'What is ¾ of 60?', back: '60 ÷ 4 = 15, then 15 × 3 = 45.', topic: 'Fractions of amounts' },
    { id: 'fc-25', front: 'How do you compare fractions of different amounts?', back: 'Calculate each value separately and then compare the results. Example: ⅖ of 80 = 32 vs ⅓ of 90 = 30 → 32 > 30.', topic: 'Fractions of amounts' }
  ]

};
