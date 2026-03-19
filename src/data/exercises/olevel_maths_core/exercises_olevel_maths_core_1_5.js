export const exercises_olevel_maths_core_1_5 = {

  /* ──────────────────────────────────────────────
     MCQ  (~30)
     ────────────────────────────────────────────── */
  mcq: [
    // ── Converting fractions / decimals / percentages ──
    { id: 'mcq-1', stem: 'What is 3/8 as a decimal?', options: ['0.25', '0.375', '0.38', '0.35'], correctAnswer: 1, rationale: '3 ÷ 8 = 0.375.', topic: 'Converting fractions/decimals/percentages' },
    { id: 'mcq-2', stem: 'Convert 0.65 to a percentage.', options: ['6.5%', '0.65%', '65%', '650%'], correctAnswer: 2, rationale: '0.65 × 100 = 65%.', topic: 'Converting fractions/decimals/percentages' },
    { id: 'mcq-3', stem: 'What is 45% as a decimal?', options: ['4.5', '0.45', '0.045', '45.0'], correctAnswer: 1, rationale: '45 ÷ 100 = 0.45.', topic: 'Converting fractions/decimals/percentages' },
    { id: 'mcq-4', stem: 'Convert 7/20 to a percentage.', options: ['35%', '70%', '14%', '3.5%'], correctAnswer: 0, rationale: '7 ÷ 20 = 0.35; 0.35 × 100 = 35%.', topic: 'Converting fractions/decimals/percentages' },
    { id: 'mcq-5', stem: 'What fraction is equivalent to 0.125?', options: ['1/4', '1/5', '1/8', '1/10'], correctAnswer: 2, rationale: '0.125 = 125/1000 = 1/8.', topic: 'Converting fractions/decimals/percentages' },
    { id: 'mcq-6', stem: 'Which of these is equal to 2/5?', options: ['0.25', '0.4', '0.45', '0.52'], correctAnswer: 1, rationale: '2 ÷ 5 = 0.4.', topic: 'Converting fractions/decimals/percentages' },

    // ── Ordering fractions / decimals / percentages ──
    { id: 'mcq-7', stem: 'Which is the smallest: 3/5, 0.62, 58%?', options: ['3/5', '0.62', '58%', 'They are all equal'], correctAnswer: 2, rationale: '3/5 = 0.60, 0.62 = 0.62, 58% = 0.58. Smallest is 0.58 (58%).', topic: 'Ordering fractions/decimals/percentages' },
    { id: 'mcq-8', stem: 'Place in order from smallest to largest: 0.7, 68%, 3/4.', options: ['68%, 0.7, 3/4', '0.7, 68%, 3/4', '3/4, 0.7, 68%', '68%, 3/4, 0.7'], correctAnswer: 0, rationale: '68% = 0.68, 0.7 = 0.70, 3/4 = 0.75. Order: 0.68 < 0.70 < 0.75.', topic: 'Ordering fractions/decimals/percentages' },
    { id: 'mcq-9', stem: 'Which is larger: 4/7 or 5/9?', options: ['4/7', '5/9', 'They are equal', 'Cannot be determined'], correctAnswer: 0, rationale: '4/7 = 36/63 and 5/9 = 35/63. 36/63 > 35/63, so 4/7 is larger.', topic: 'Ordering fractions/decimals/percentages' },
    { id: 'mcq-10', stem: 'Which value is between 0.3 and 0.4?', options: ['30%', '1/4', '7/20', '2/5'], correctAnswer: 2, rationale: '7/20 = 0.35, which lies between 0.3 and 0.4.', topic: 'Ordering fractions/decimals/percentages' },
    { id: 'mcq-11', stem: 'Which is the largest: 2/3, 0.65, 67%?', options: ['2/3', '0.65', '67%', '2/3 and 67% are equal'], correctAnswer: 2, rationale: '2/3 ≈ 0.667, 0.65 = 0.65, 67% = 0.67. Largest is 0.67 (67%).', topic: 'Ordering fractions/decimals/percentages' },

    // ── Percentages of amounts ──
    { id: 'mcq-12', stem: 'What is 25% of 360?', options: ['72', '80', '90', '100'], correctAnswer: 2, rationale: '25% of 360 = 0.25 × 360 = 90.', topic: 'Percentages of amounts' },
    { id: 'mcq-13', stem: 'Calculate 15% of 240.', options: ['24', '36', '48', '30'], correctAnswer: 1, rationale: '10% = 24, 5% = 12; 15% = 24 + 12 = 36.', topic: 'Percentages of amounts' },
    { id: 'mcq-14', stem: 'What is 5% of $820?', options: ['$41', '$82', '$164', '$410'], correctAnswer: 0, rationale: '10% = $82; 5% = $82 ÷ 2 = $41.', topic: 'Percentages of amounts' },
    { id: 'mcq-15', stem: 'Find 12.5% of 480.', options: ['48', '60', '72', '96'], correctAnswer: 1, rationale: '12.5% = 1/8; 480 ÷ 8 = 60.', topic: 'Percentages of amounts' },
    { id: 'mcq-16', stem: 'A class has 30 students. 60% are girls. How many girls are there?', options: ['12', '15', '18', '20'], correctAnswer: 2, rationale: '60% of 30 = 0.6 × 30 = 18.', topic: 'Percentages of amounts' },
    { id: 'mcq-17', stem: 'What is 1% of 5 400?', options: ['5.4', '54', '540', '5 400'], correctAnswer: 1, rationale: '1% = 5 400 ÷ 100 = 54.', topic: 'Percentages of amounts' },

    // ── Percentage change ──
    { id: 'mcq-18', stem: 'A price goes from $40 to $50. What is the percentage increase?', options: ['10%', '20%', '25%', '50%'], correctAnswer: 2, rationale: 'Change = 10; (10 ÷ 40) × 100 = 25%.', topic: 'Percentage change' },
    { id: 'mcq-19', stem: 'A population drops from 800 to 680. What is the percentage decrease?', options: ['12%', '15%', '17.6%', '20%'], correctAnswer: 1, rationale: 'Change = 120; (120 ÷ 800) × 100 = 15%.', topic: 'Percentage change' },
    { id: 'mcq-20', stem: 'Express 36 as a percentage of 90.', options: ['25%', '36%', '40%', '45%'], correctAnswer: 2, rationale: '(36 ÷ 90) × 100 = 40%.', topic: 'Percentage change' },
    { id: 'mcq-21', stem: 'A test score rises from 60 to 72. What is the percentage increase?', options: ['12%', '16.7%', '20%', '25%'], correctAnswer: 2, rationale: 'Change = 12; (12 ÷ 60) × 100 = 20%.', topic: 'Percentage change' },
    { id: 'mcq-22', stem: 'In the percentage change formula, what should the denominator always be?', options: ['The new value', 'The original value', 'The change', 'The sum of both values'], correctAnswer: 1, rationale: 'Percentage change = (change ÷ original) × 100%. Always divide by the original.', topic: 'Percentage change' },

    // ── Percentage increases / decreases ──
    { id: 'mcq-23', stem: 'What is the multiplier for a 20% increase?', options: ['0.20', '0.80', '1.02', '1.20'], correctAnswer: 3, rationale: 'Multiplier = 1 + 0.20 = 1.20.', topic: 'Percentage increases/decreases' },
    { id: 'mcq-24', stem: 'A shirt costs $45 and is reduced by 10%. What is the sale price?', options: ['$35', '$40.50', '$41.50', '$36'], correctAnswer: 1, rationale: 'Multiplier = 0.90; $45 × 0.90 = $40.50.', topic: 'Percentage increases/decreases' },
    { id: 'mcq-25', stem: 'What is the multiplier for a 35% decrease?', options: ['0.35', '0.65', '1.35', '0.75'], correctAnswer: 1, rationale: 'Multiplier = 1 − 0.35 = 0.65.', topic: 'Percentage increases/decreases' },
    { id: 'mcq-26', stem: 'After a 25% increase, a price is $75. What was the original price?', options: ['$50', '$56.25', '$60', '$65'], correctAnswer: 2, rationale: 'Multiplier = 1.25; original = 75 ÷ 1.25 = $60.', topic: 'Percentage increases/decreases' },
    { id: 'mcq-27', stem: 'A car worth $12 000 depreciates by 15%. What is its new value?', options: ['$10 200', '$10 800', '$11 400', '$9 600'], correctAnswer: 0, rationale: 'Multiplier = 0.85; $12 000 × 0.85 = $10 200.', topic: 'Percentage increases/decreases' },
    { id: 'mcq-28', stem: 'After a 20% decrease, a value is $160. What was the original value?', options: ['$180', '$192', '$200', '$210'], correctAnswer: 2, rationale: 'Multiplier = 0.80; original = 160 ÷ 0.80 = $200.', topic: 'Percentage increases/decreases' },
    { id: 'mcq-29', stem: 'A salary of $2 500 increases by 6%. What is the new salary?', options: ['$2 600', '$2 650', '$2 650', '$2 500'], correctAnswer: 1, rationale: 'Multiplier = 1.06; $2 500 × 1.06 = $2 650.', topic: 'Percentage increases/decreases' },
    { id: 'mcq-30', stem: 'Which calculation is WRONG for reversing a 30% increase on a new price of $130?', options: ['$130 ÷ 1.30', '$130 × (100/130)', '$130 − 30% of $130', 'All are correct'], correctAnswer: 2, rationale: 'Subtracting 30% of the new value gives the wrong answer. You must divide by the multiplier 1.30.', topic: 'Percentage increases/decreases' },
  ],

  /* ──────────────────────────────────────────────
     FILL-BLANK  (~15)
     ────────────────────────────────────────────── */
  fillblank: [
    // ── Converting ──
    { id: 'fb-1', stem: 'Convert 3/4 to a decimal.', template: '3/4 = __BLANK__', blanks: [{ answer: '0.75' }], rationale: '3 ÷ 4 = 0.75.' },
    { id: 'fb-2', stem: 'Convert 0.4 to a percentage.', template: '0.4 = __BLANK__%', blanks: [{ answer: '40' }], rationale: '0.4 × 100 = 40.' },
    { id: 'fb-3', stem: 'Convert 72% to a decimal.', template: '72% = __BLANK__', blanks: [{ answer: '0.72' }], rationale: '72 ÷ 100 = 0.72.' },

    // ── Ordering ──
    { id: 'fb-4', stem: 'To compare fractions, decimals and percentages, convert them all to the same form, usually ____.', template: 'Convert them all to __BLANK__', blanks: [{ answer: 'decimals' }], rationale: 'Decimals are the easiest form for comparison.' },
    { id: 'fb-5', stem: '3/5 as a decimal is ____.', template: '3/5 = __BLANK__', blanks: [{ answer: '0.6' }], rationale: '3 ÷ 5 = 0.6.' },

    // ── Percentages of amounts ──
    { id: 'fb-6', stem: 'The formula for x% of y is (x ÷ ___) × y.', template: '(x ÷ __BLANK__) × y', blanks: [{ answer: '100' }], rationale: 'x% of y = (x ÷ 100) × y.' },
    { id: 'fb-7', stem: '10% of 350 = ____.', template: '10% of 350 = __BLANK__', blanks: [{ answer: '35' }], rationale: '10% means divide by 10: 350 ÷ 10 = 35.' },
    { id: 'fb-8', stem: '50% of 180 = ____.', template: '50% of 180 = __BLANK__', blanks: [{ answer: '90' }], rationale: '50% means divide by 2: 180 ÷ 2 = 90.' },

    // ── Percentage change ──
    { id: 'fb-9', stem: 'Percentage change = (change ÷ ____) × 100%.', template: '(change ÷ __BLANK__) × 100%', blanks: [{ answer: 'original' }], rationale: 'Always divide the change by the original value.' },
    { id: 'fb-10', stem: 'A price rises from $50 to $60. The percentage increase is ___%.', template: 'Percentage increase = __BLANK__%', blanks: [{ answer: '20' }], rationale: 'Change = 10; (10 ÷ 50) × 100 = 20%.' },
    { id: 'fb-11', stem: 'Express 18 as a percentage of 72.', template: '18 as a % of 72 = __BLANK__%', blanks: [{ answer: '25' }], rationale: '(18 ÷ 72) × 100 = 25%.' },

    // ── Percentage increases / decreases ──
    { id: 'fb-12', stem: 'The multiplier for a 15% increase is ____.', template: 'Multiplier = __BLANK__', blanks: [{ answer: '1.15' }], rationale: '1 + 0.15 = 1.15.' },
    { id: 'fb-13', stem: 'The multiplier for a 30% decrease is ____.', template: 'Multiplier = __BLANK__', blanks: [{ answer: '0.70' }], rationale: '1 − 0.30 = 0.70.' },
    { id: 'fb-14', stem: 'To find the original value after a percentage change, divide the new value by the ____.', template: 'Divide by the __BLANK__', blanks: [{ answer: 'multiplier' }], rationale: 'Original = new value ÷ multiplier.' },
    { id: 'fb-15', stem: '$200 increased by 8% becomes $____.', template: '$200 × 1.08 = $__BLANK__', blanks: [{ answer: '216' }], rationale: '$200 × 1.08 = $216.' },
  ],

  /* ──────────────────────────────────────────────
     DRAG-DROP  (~10)
     ────────────────────────────────────────────── */
  dragdrop: [
    { id: 'dd-1', stem: 'Sort these into their equivalent groups.', categories: ['50%', '25%', '75%'], items: [{ text: '½', category: '50%' }, { text: '0.5', category: '50%' }, { text: '¼', category: '25%' }, { text: '0.25', category: '25%' }, { text: '¾', category: '75%' }, { text: '0.75', category: '75%' }] },
    { id: 'dd-2', stem: 'Sort these values as less than or greater than 50%.', categories: ['Less than 50%', 'Greater than 50%'], items: [{ text: '3/8', category: 'Less than 50%' }, { text: '0.45', category: 'Less than 50%' }, { text: '48%', category: 'Less than 50%' }, { text: '0.55', category: 'Greater than 50%' }, { text: '4/7', category: 'Greater than 50%' }, { text: '52%', category: 'Greater than 50%' }] },
    { id: 'dd-3', stem: 'Match each fraction to its percentage.', categories: ['20%', '40%', '60%', '80%'], items: [{ text: '1/5', category: '20%' }, { text: '2/5', category: '40%' }, { text: '3/5', category: '60%' }, { text: '4/5', category: '80%' }] },
    { id: 'dd-4', stem: 'Classify each multiplier as representing an increase or decrease.', categories: ['Increase', 'Decrease'], items: [{ text: '1.15', category: 'Increase' }, { text: '0.85', category: 'Decrease' }, { text: '1.08', category: 'Increase' }, { text: '0.72', category: 'Decrease' }, { text: '1.50', category: 'Increase' }, { text: '0.95', category: 'Decrease' }] },
    { id: 'dd-5', stem: 'Sort these into "Calculator Method" or "Non-Calculator Strategy".', categories: ['Calculator Method', 'Non-Calculator Strategy'], items: [{ text: 'Type 0.35 × 240', category: 'Calculator Method' }, { text: 'Find 10%, then build up', category: 'Non-Calculator Strategy' }, { text: 'Multiply decimal equivalent', category: 'Calculator Method' }, { text: 'Halve 10% to get 5%', category: 'Non-Calculator Strategy' }] },
    { id: 'dd-6', stem: 'Match each decimal to its equivalent fraction.', categories: ['1/8', '1/4', '1/3', '1/2'], items: [{ text: '0.125', category: '1/8' }, { text: '0.25', category: '1/4' }, { text: '0.333...', category: '1/3' }, { text: '0.5', category: '1/2' }] },
    { id: 'dd-7', stem: 'Sort these percentage problems by type.', categories: ['Percentage of Amount', 'Percentage Change'], items: [{ text: 'Find 20% of $450', category: 'Percentage of Amount' }, { text: 'Price rises from $40 to $50', category: 'Percentage Change' }, { text: 'Calculate 15% of 360', category: 'Percentage of Amount' }, { text: 'Weight drops from 80 kg to 72 kg', category: 'Percentage Change' }] },
    { id: 'dd-8', stem: 'Match each percentage change to its multiplier.', categories: ['1.12', '0.88', '1.05', '0.70'], items: [{ text: '12% increase', category: '1.12' }, { text: '12% decrease', category: '0.88' }, { text: '5% increase', category: '1.05' }, { text: '30% decrease', category: '0.70' }] },
    { id: 'dd-9', stem: 'Sort these values into the correct order group: smallest third, middle third, largest third.', categories: ['Smallest', 'Middle', 'Largest'], items: [{ text: '0.2', category: 'Smallest' }, { text: '15%', category: 'Smallest' }, { text: '0.5', category: 'Middle' }, { text: '45%', category: 'Middle' }, { text: '0.8', category: 'Largest' }, { text: '90%', category: 'Largest' }] },
    { id: 'dd-10', stem: 'Sort these reverse-percentage statements as correct or incorrect.', categories: ['Correct', 'Incorrect'], items: [{ text: 'Original = new ÷ multiplier', category: 'Correct' }, { text: 'Divide $120 by 1.20 to reverse a 20% increase', category: 'Correct' }, { text: 'Subtract 20% of the new value to reverse a 20% increase', category: 'Incorrect' }, { text: 'Divide $80 by 0.80 to reverse a 20% decrease', category: 'Correct' }] },
  ],

  /* ──────────────────────────────────────────────
     SEQUENCE  (~8)
     ────────────────────────────────────────────── */
  sequence: [
    { id: 'seq-1', stem: 'Order the steps to convert a fraction to a percentage.', steps: ['Start with the fraction (e.g. 3/8)', 'Divide numerator by denominator (3 ÷ 8 = 0.375)', 'Multiply the decimal by 100 (0.375 × 100)', 'Write your answer with a % sign (37.5%)'] },
    { id: 'seq-2', stem: 'Order the steps to compare 3/5, 0.62, and 58%.', steps: ['Convert all values to decimals', '3/5 = 0.60, 0.62 stays, 58% = 0.58', 'Compare: 0.58 < 0.60 < 0.62', 'Write in original form: 58% < 3/5 < 0.62'] },
    { id: 'seq-3', stem: 'Order the steps to find 35% of 240 without a calculator.', steps: ['Find 10% of 240 = 24', 'Find 30% = 3 × 24 = 72', 'Find 5% = 24 ÷ 2 = 12', 'Add: 35% = 72 + 12 = 84'] },
    { id: 'seq-4', stem: 'Order the steps to calculate percentage increase from $80 to $92.', steps: ['Find the change: 92 − 80 = 12', 'Divide change by original: 12 ÷ 80', 'Multiply by 100: 0.15 × 100', 'State the answer: 15% increase'] },
    { id: 'seq-5', stem: 'Order the steps to increase $1 200 by 8% using the multiplier method.', steps: ['Convert 8% to a decimal: 0.08', 'Add to 1: multiplier = 1 + 0.08 = 1.08', 'Multiply: $1 200 × 1.08', 'New value = $1 296'] },
    { id: 'seq-6', stem: 'Order the steps to find the original price if the price after a 25% increase is $75.', steps: ['Identify the multiplier: 1 + 0.25 = 1.25', 'Divide new price by multiplier: $75 ÷ 1.25', 'Calculate: $75 ÷ 1.25 = $60', 'Check: $60 × 1.25 = $75 ✓'] },
    { id: 'seq-7', stem: 'Order the steps to convert 0.035 to a percentage.', steps: ['Start with the decimal 0.035', 'Multiply by 100', 'Move the decimal point 2 places right', 'Answer: 3.5%'] },
    { id: 'seq-8', stem: 'Order the steps to find 17.5% of 320 without a calculator.', steps: ['10% of 320 = 32', '5% of 320 = 16', '2.5% of 320 = 8', '17.5% = 32 + 16 + 8 = 56'] },
  ],

  /* ──────────────────────────────────────────────
     KEYWORD  (~12)
     ────────────────────────────────────────────── */
  keyword: [
    { id: 'kw-1', stem: 'Explain how to convert a fraction to a decimal. [2 marks]', marks: 2, keywords: ['divide', 'numerator', 'denominator'], modelAnswer: 'Divide the numerator by the denominator. For example 3/4: divide 3 by 4 to get 0.75.' },
    { id: 'kw-2', stem: 'How do you convert a decimal to a percentage? [1 mark]', marks: 1, keywords: ['multiply', '100'], modelAnswer: 'Multiply the decimal by 100 and add a % sign.' },
    { id: 'kw-3', stem: 'Give the strategy to order a mixed list of fractions, decimals and percentages. [2 marks]', marks: 2, keywords: ['convert', 'decimals', 'compare', 'original'], modelAnswer: 'Convert all values to decimals, compare them in order, then write the answer using the original forms.' },
    { id: 'kw-4', stem: 'How do you compare two fractions with different denominators without converting to decimals? [2 marks]', marks: 2, keywords: ['common denominator', 'LCM', 'numerators'], modelAnswer: 'Find the LCM of the denominators to create a common denominator, convert both fractions, then compare the numerators.' },
    { id: 'kw-5', stem: 'State the formula for finding x% of an amount y. [1 mark]', marks: 1, keywords: ['divide', '100', 'multiply'], modelAnswer: 'x% of y = (x ÷ 100) × y.' },
    { id: 'kw-6', stem: 'Explain the building-block method for finding percentages without a calculator. [2 marks]', marks: 2, keywords: ['10%', 'divide by 10', 'build'], modelAnswer: 'Start by finding 10% (divide by 10). Then build other percentages from it — e.g. 5% is half of 10%, and 15% is 10% + 5%.' },
    { id: 'kw-7', stem: 'Write the formula for percentage change and state what the denominator must be. [2 marks]', marks: 2, keywords: ['change', 'original', '100', 'denominator'], modelAnswer: 'Percentage change = (change ÷ original) × 100%. The denominator must always be the original value.' },
    { id: 'kw-8', stem: 'Explain the difference between "express A as a percentage of B" and "percentage change". [2 marks]', marks: 2, keywords: ['reference value', 'original', 'change'], modelAnswer: 'Express A as % of B uses B as the reference denominator: (A ÷ B) × 100. Percentage change uses the original value as the denominator and involves finding the difference first.' },
    { id: 'kw-9', stem: 'What is the multiplier method for percentage increases and decreases? [2 marks]', marks: 2, keywords: ['multiplier', 'increase', 'decrease', '1'], modelAnswer: 'For an increase of r%, the multiplier is 1 + r/100. For a decrease of r%, it is 1 − r/100. Multiply the original by this multiplier to get the new value.' },
    { id: 'kw-10', stem: 'How do you find the original value using a reverse percentage? [2 marks]', marks: 2, keywords: ['divide', 'multiplier', 'original'], modelAnswer: 'Divide the new value by the multiplier. Do NOT subtract the percentage of the new value.' },
    { id: 'kw-11', stem: 'What common mistake do students make when reversing a percentage increase? [2 marks]', marks: 2, keywords: ['subtract', 'new value', 'divide', 'multiplier'], modelAnswer: 'They subtract the percentage of the new value instead of dividing by the multiplier. For example, to reverse a 20% increase on $60 they wrongly do $60 − 20% of $60 = $48 instead of $60 ÷ 1.20 = $50.' },
    { id: 'kw-12', stem: 'Convert 62.5% to a fraction in its simplest form. Show your reasoning. [2 marks]', marks: 2, keywords: ['divide', '100', 'simplify', '5/8'], modelAnswer: '62.5% = 62.5/100 = 625/1000. Simplify by dividing by 125: 625 ÷ 125 = 5, 1000 ÷ 125 = 8. So 62.5% = 5/8.' },
  ],

  /* ──────────────────────────────────────────────
     FLASHCARDS  (~25)
     ────────────────────────────────────────────── */
  flashcards: [
    // ── Converting ──
    { id: 'fc-1', front: 'How do you convert a fraction to a decimal?', back: 'Divide the numerator by the denominator. E.g. 3/4 → 3 ÷ 4 = 0.75.', topic: 'Converting fractions/decimals/percentages' },
    { id: 'fc-2', front: 'How do you convert a decimal to a percentage?', back: 'Multiply by 100 (move decimal 2 places right). E.g. 0.35 → 35%.', topic: 'Converting fractions/decimals/percentages' },
    { id: 'fc-3', front: 'How do you convert a percentage to a decimal?', back: 'Divide by 100 (move decimal 2 places left). E.g. 45% → 0.45.', topic: 'Converting fractions/decimals/percentages' },
    { id: 'fc-4', front: 'What is ½ as a decimal and percentage?', back: '0.5 and 50%.', topic: 'Converting fractions/decimals/percentages' },
    { id: 'fc-5', front: 'What is ¼ as a decimal and percentage?', back: '0.25 and 25%.', topic: 'Converting fractions/decimals/percentages' },
    { id: 'fc-6', front: 'What is ¾ as a decimal and percentage?', back: '0.75 and 75%.', topic: 'Converting fractions/decimals/percentages' },
    { id: 'fc-7', front: 'What is ⅓ as a decimal and percentage?', back: '0.333… and 33.3…% (recurring).', topic: 'Converting fractions/decimals/percentages' },
    { id: 'fc-8', front: 'What is ⅛ as a decimal and percentage?', back: '0.125 and 12.5%.', topic: 'Converting fractions/decimals/percentages' },

    // ── Ordering ──
    { id: 'fc-9', front: 'What is the best method to order a mixed list of fractions, decimals and percentages?', back: 'Convert everything to decimals, compare, then write the answer in the original forms.', topic: 'Ordering fractions/decimals/percentages' },
    { id: 'fc-10', front: 'How do you compare fractions with different denominators?', back: 'Find the LCM of the denominators, convert both to equivalent fractions, then compare numerators.', topic: 'Ordering fractions/decimals/percentages' },
    { id: 'fc-11', front: 'Which is larger: 4/7 or 5/9?', back: '4/7 (= 36/63) is larger than 5/9 (= 35/63).', topic: 'Ordering fractions/decimals/percentages' },

    // ── Percentages of amounts ──
    { id: 'fc-12', front: 'State the formula: x% of y = ?', back: '(x ÷ 100) × y, or equivalently x/100 × y.', topic: 'Percentages of amounts' },
    { id: 'fc-13', front: 'How do you find 10% of any number?', back: 'Divide it by 10.', topic: 'Percentages of amounts' },
    { id: 'fc-14', front: 'How do you find 5% of a number?', back: 'Find 10% then halve it.', topic: 'Percentages of amounts' },
    { id: 'fc-15', front: 'How do you find 1% of a number?', back: 'Divide it by 100.', topic: 'Percentages of amounts' },
    { id: 'fc-16', front: 'What is the building-block method for non-calculator percentages?', back: 'Start from 10% (÷10), then build up: 5% = 10%÷2, 1% = 10%÷10, 15% = 10% + 5%, etc.', topic: 'Percentages of amounts' },

    // ── Percentage change ──
    { id: 'fc-17', front: 'State the percentage change formula.', back: 'Percentage change = (change ÷ original) × 100%. Change = new − original.', topic: 'Percentage change' },
    { id: 'fc-18', front: 'What must the denominator always be in the percentage change formula?', back: 'The original (starting) value.', topic: 'Percentage change' },
    { id: 'fc-19', front: 'How do you express A as a percentage of B?', back: '(A ÷ B) × 100%.', topic: 'Percentage change' },
    { id: 'fc-20', front: 'A price rises from $80 to $92. What is the % change?', back: 'Change = 12; (12 ÷ 80) × 100 = 15% increase.', topic: 'Percentage change' },

    // ── Percentage increases / decreases ──
    { id: 'fc-21', front: 'What is the multiplier for an increase of r%?', back: '1 + r/100. E.g. 20% increase → 1.20.', topic: 'Percentage increases/decreases' },
    { id: 'fc-22', front: 'What is the multiplier for a decrease of r%?', back: '1 − r/100. E.g. 15% decrease → 0.85.', topic: 'Percentage increases/decreases' },
    { id: 'fc-23', front: 'How do you find the original value using reverse percentages?', back: 'Divide the new value by the multiplier. E.g. $75 after 25% increase → $75 ÷ 1.25 = $60.', topic: 'Percentage increases/decreases' },
    { id: 'fc-24', front: 'Why is it WRONG to subtract 20% of the new value to reverse a 20% increase?', back: '20% of the new value is larger than 20% of the original. Dividing by 1.20 is correct.', topic: 'Percentage increases/decreases' },
    { id: 'fc-25', front: '$650 reduced by 12%. What is the sale price?', back: 'Multiplier = 0.88; $650 × 0.88 = $572.', topic: 'Percentage increases/decreases' },
  ],

};
