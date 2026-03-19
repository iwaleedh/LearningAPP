export const exercises_olevel_maths_core_1_7 = {

  /* ============================================================
     MCQ  (~30)
     ============================================================ */
  mcq: [
    // ── Rounding to a given place value ──
    {
      id: 'mcq-1',
      stem: 'Round 7.382 to 2 decimal places.',
      options: ['7.38', '7.39', '7.40', '7.30'],
      correctAnswer: 0,
      rationale: 'The deciding digit is 2 (< 5), so the 8 stays. Answer: 7.38.',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'mcq-2',
      stem: 'Round 4.167 to 2 decimal places.',
      options: ['4.16', '4.17', '4.20', '4.10'],
      correctAnswer: 1,
      rationale: 'Deciding digit is 7 (≥ 5), so round the 6 up to 7. Answer: 4.17.',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'mcq-3',
      stem: 'Round 3.495 to 2 decimal places.',
      options: ['3.49', '3.50', '3.40', '3.59'],
      correctAnswer: 1,
      rationale: 'Deciding digit is 5 (≥ 5), so the 9 rounds up to 10, carrying over. Answer: 3.50.',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'mcq-4',
      stem: 'Round 3 748 to the nearest 10.',
      options: ['3 750', '3 740', '3 700', '3 800'],
      correctAnswer: 0,
      rationale: 'Deciding digit (units) = 8 ≥ 5 → round up. Answer: 3 750.',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'mcq-5',
      stem: 'Round 3 748 to the nearest 100.',
      options: ['3 800', '3 700', '3 750', '4 000'],
      correctAnswer: 1,
      rationale: 'Hundreds digit is 7, deciding digit (tens) = 4 < 5 → round down. Answer: 3 700.',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'mcq-6',
      stem: 'Round 3 748 to the nearest 1 000.',
      options: ['3 000', '4 000', '3 700', '3 800'],
      correctAnswer: 1,
      rationale: 'Thousands digit is 3, deciding digit (hundreds) = 7 ≥ 5 → round up. Answer: 4 000.',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'mcq-7',
      stem: 'Round 6.999 to 1 decimal place.',
      options: ['6.9', '7.0', '7.1', '6.0'],
      correctAnswer: 1,
      rationale: 'Deciding digit is 9 (≥ 5). Rounding gives 7.0 (carry over from 6.9 + 0.1).',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'mcq-8',
      stem: 'Round 2 450 to the nearest 100.',
      options: ['2 400', '2 500', '2 000', '2 450'],
      correctAnswer: 1,
      rationale: 'Deciding digit (tens) = 5 ≥ 5 → round up. Answer: 2 500.',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'mcq-9',
      stem: 'Round 0.8462 to 3 decimal places.',
      options: ['0.846', '0.847', '0.850', '0.845'],
      correctAnswer: 0,
      rationale: 'Deciding digit is 2 (< 5), so the 6 stays. Answer: 0.846.',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'mcq-10',
      stem: 'Why should you write 3.50 instead of 3.5 when rounding 3.495 to 2 d.p.?',
      options: [
        'The trailing zero shows the level of accuracy (2 d.p.)',
        'It makes the number larger',
        'It is a different value from 3.5',
        'Trailing zeros are always required'
      ],
      correctAnswer: 0,
      rationale: 'The trailing zero indicates the answer has been rounded to exactly 2 decimal places.',
      topic: 'Rounding to a given place value'
    },

    // ── Rounding to significant figures ──
    {
      id: 'mcq-11',
      stem: 'How many significant figures does 0.0052 have?',
      options: ['4', '2', '3', '1'],
      correctAnswer: 1,
      rationale: 'Leading zeros are not significant. Only 5 and 2 count, giving 2 s.f.',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'mcq-12',
      stem: 'Round 47 836 to 2 significant figures.',
      options: ['47 000', '48 000', '47 800', '50 000'],
      correctAnswer: 1,
      rationale: '1st s.f. = 4, 2nd s.f. = 7. Deciding digit = 8 ≥ 5 → round 7 up to 8. Answer: 48 000.',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'mcq-13',
      stem: 'Round 0.007384 to 2 significant figures.',
      options: ['0.0074', '0.0073', '0.007', '0.00738'],
      correctAnswer: 0,
      rationale: '1st s.f. = 7, 2nd s.f. = 3. Deciding digit = 8 ≥ 5 → round 3 up to 4. Answer: 0.0074.',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'mcq-14',
      stem: 'Round 3 055 to 1 significant figure.',
      options: ['3 000', '4 000', '3 100', '3 060'],
      correctAnswer: 0,
      rationale: '1st s.f. = 3. Deciding digit = 0 < 5 → keep 3. Answer: 3 000.',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'mcq-15',
      stem: 'How many significant figures does 0.0500 have?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 2,
      rationale: 'Leading zeros don\'t count. 5, 0, 0 after the decimal all count → 3 s.f.',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'mcq-16',
      stem: 'Round 0.000 405 to 1 significant figure.',
      options: ['0.0004', '0.0005', '0.000 41', '0.000 4'],
      correctAnswer: 0,
      rationale: '1st s.f. = 4. Deciding digit = 0 < 5 → keep 4. Answer: 0.0004.',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'mcq-17',
      stem: 'Round 6 842 to 3 significant figures.',
      options: ['6 840', '6 800', '6 850', '6 900'],
      correctAnswer: 0,
      rationale: '1st = 6, 2nd = 8, 3rd = 4. Deciding digit = 2 < 5 → keep 4. Answer: 6 840.',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'mcq-18',
      stem: 'What is the first significant figure of 0.003 09?',
      options: ['0', '3', '9', '1'],
      correctAnswer: 1,
      rationale: 'Significant figures start from the first non-zero digit reading left to right, which is 3.',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'mcq-19',
      stem: 'Round 9.962 to 2 significant figures.',
      options: ['10', '9.9', '9.96', '100'],
      correctAnswer: 0,
      rationale: '1st s.f. = 9, 2nd s.f. = 9. Deciding digit = 6 ≥ 5 → round up. 9.9 → 10. Answer: 10.',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'mcq-20',
      stem: 'Which statement about significant figures is correct?',
      options: [
        'Leading zeros are always significant',
        'Trailing zeros after a decimal point are significant',
        'All zeros are insignificant',
        'Significant figures start from the last digit'
      ],
      correctAnswer: 1,
      rationale: 'Trailing zeros after a decimal point are significant because they indicate precision.',
      topic: 'Rounding to significant figures'
    },

    // ── Estimation ──
    {
      id: 'mcq-21',
      stem: 'Estimate 38.4 × 5.27 by rounding each number to 1 significant figure.',
      options: ['200', '190', '210', '180'],
      correctAnswer: 0,
      rationale: '38.4 ≈ 40, 5.27 ≈ 5. Estimate = 40 × 5 = 200.',
      topic: 'Estimation'
    },
    {
      id: 'mcq-22',
      stem: 'Estimate 783 ÷ 18.6 by rounding to 1 significant figure.',
      options: ['40', '50', '30', '45'],
      correctAnswer: 0,
      rationale: '783 ≈ 800, 18.6 ≈ 20. Estimate = 800 ÷ 20 = 40.',
      topic: 'Estimation'
    },
    {
      id: 'mcq-23',
      stem: 'Why do we estimate calculations?',
      options: [
        'To check whether an exact answer is roughly correct',
        'To always get an exact answer',
        'To avoid using a calculator',
        'To make the answer smaller'
      ],
      correctAnswer: 0,
      rationale: 'Estimation helps you quickly judge if a calculated answer is reasonable.',
      topic: 'Estimation'
    },
    {
      id: 'mcq-24',
      stem: 'Estimate 4.93 × 21.2 by rounding each value to 1 s.f.',
      options: ['100', '120', '80', '110'],
      correctAnswer: 0,
      rationale: '4.93 ≈ 5, 21.2 ≈ 20. Estimate = 5 × 20 = 100.',
      topic: 'Estimation'
    },
    {
      id: 'mcq-25',
      stem: 'Estimate √(48.7 × 3.1) by rounding to 1 s.f. first.',
      options: ['12', '15', '10', '13'],
      correctAnswer: 0,
      rationale: '48.7 ≈ 50, 3.1 ≈ 3. 50 × 3 = 150. √150 ≈ √144 = 12.',
      topic: 'Estimation'
    },
    {
      id: 'mcq-26',
      stem: 'Estimate (612 × 3.8) ÷ 19.4 by rounding each value to 1 s.f.',
      options: ['120', '100', '130', '90'],
      correctAnswer: 0,
      rationale: '612 ≈ 600, 3.8 ≈ 4, 19.4 ≈ 20. Estimate = (600 × 4) ÷ 20 = 2 400 ÷ 20 = 120.',
      topic: 'Estimation'
    },
    {
      id: 'mcq-27',
      stem: 'Estimate 0.48 × 310 by rounding to 1 significant figure.',
      options: ['150', '200', '120', '160'],
      correctAnswer: 0,
      rationale: '0.48 ≈ 0.5, 310 ≈ 300. Estimate = 0.5 × 300 = 150.',
      topic: 'Estimation'
    },
    {
      id: 'mcq-28',
      stem: 'In an estimation question on an exam, what must you always show?',
      options: [
        'The rounded values before calculating',
        'Only the final estimated answer',
        'The exact calculator answer',
        'A number line'
      ],
      correctAnswer: 0,
      rationale: 'Marks are awarded for showing each number rounded to 1 s.f. before the estimation calculation.',
      topic: 'Estimation'
    },
    {
      id: 'mcq-29',
      stem: 'Round 12.46 to the nearest integer.',
      options: ['12', '13', '12.5', '10'],
      correctAnswer: 0,
      rationale: 'Deciding digit (first decimal place) = 4 < 5 → round down. Answer: 12.',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'mcq-30',
      stem: 'Estimate 89.7 ÷ 2.95 by rounding to 1 s.f.',
      options: ['30', '45', '25', '35'],
      correctAnswer: 0,
      rationale: '89.7 ≈ 90, 2.95 ≈ 3. Estimate = 90 ÷ 3 = 30.',
      topic: 'Estimation'
    }
  ],

  /* ============================================================
     FILL-IN-THE-BLANK  (~15)
     ============================================================ */
  fillblank: [
    {
      id: 'fb-1',
      stem: 'Round 5.274 to 1 decimal place.',
      template: '5.274 rounded to 1 d.p. is __BLANK__.',
      blanks: [{ answer: '5.3' }],
      rationale: 'Deciding digit is 7 (≥ 5), so the 2 rounds up to 3. Answer: 5.3.'
    },
    {
      id: 'fb-2',
      stem: 'Round 6 450 to the nearest 1 000.',
      template: '6 450 to the nearest thousand is __BLANK__.',
      blanks: [{ answer: '6 000' }],
      rationale: 'Deciding digit (hundreds) = 4 < 5 → round down. Answer: 6 000.'
    },
    {
      id: 'fb-3',
      stem: 'Round 0.0836 to 2 significant figures.',
      template: '0.0836 to 2 s.f. is __BLANK__.',
      blanks: [{ answer: '0.084' }],
      rationale: '1st s.f. = 8, 2nd s.f. = 3. Deciding digit = 6 ≥ 5 → round up. Answer: 0.084.'
    },
    {
      id: 'fb-4',
      stem: 'When rounding, the digit immediately after the required position is called the ____.',
      template: 'It is called the __BLANK__.',
      blanks: [{ answer: 'deciding digit' }],
      rationale: 'The deciding digit determines whether you round up or down.'
    },
    {
      id: 'fb-5',
      stem: 'How many significant figures does 0.0500 have?',
      template: '0.0500 has __BLANK__ significant figures.',
      blanks: [{ answer: '3' }],
      rationale: 'Leading zeros don\'t count. The digits 5, 0, 0 are all significant → 3 s.f.'
    },
    {
      id: 'fb-6',
      stem: 'Estimate 58.3 × 4.1 by rounding to 1 s.f.',
      template: 'The estimate is __BLANK__.',
      blanks: [{ answer: '240' }],
      rationale: '58.3 ≈ 60, 4.1 ≈ 4. Estimate = 60 × 4 = 240.'
    },
    {
      id: 'fb-7',
      stem: 'Round 2.998 to 2 decimal places.',
      template: '2.998 to 2 d.p. is __BLANK__.',
      blanks: [{ answer: '3.00' }],
      rationale: 'Deciding digit = 8 ≥ 5. Rounding 2.99 → 3.00 (keep trailing zeros for 2 d.p.).'
    },
    {
      id: 'fb-8',
      stem: 'Round 52 370 to 2 significant figures.',
      template: '52 370 to 2 s.f. is __BLANK__.',
      blanks: [{ answer: '52 000' }],
      rationale: '1st s.f. = 5, 2nd s.f. = 2. Deciding digit = 3 < 5 → keep. Answer: 52 000.'
    },
    {
      id: 'fb-9',
      stem: 'Significant figures start from the first ____ digit reading left to right.',
      template: 'They start from the first __BLANK__ digit.',
      blanks: [{ answer: 'non-zero' }],
      rationale: 'Leading zeros are not significant; counting begins at the first non-zero digit.'
    },
    {
      id: 'fb-10',
      stem: 'Estimate 392 ÷ 7.8 by rounding to 1 s.f.',
      template: 'The estimate is __BLANK__.',
      blanks: [{ answer: '50' }],
      rationale: '392 ≈ 400, 7.8 ≈ 8. Estimate = 400 ÷ 8 = 50.'
    },
    {
      id: 'fb-11',
      stem: 'Round 8.351 to 1 decimal place.',
      template: '8.351 to 1 d.p. is __BLANK__.',
      blanks: [{ answer: '8.4' }],
      rationale: 'Deciding digit = 5 (≥ 5) → round the 3 up to 4. Answer: 8.4.'
    },
    {
      id: 'fb-12',
      stem: 'Round 374 to the nearest 10.',
      template: '374 to the nearest 10 is __BLANK__.',
      blanks: [{ answer: '370' }],
      rationale: 'Deciding digit (units) = 4 < 5 → round down. Answer: 370.'
    },
    {
      id: 'fb-13',
      stem: 'To estimate a calculation, round every number to ____ significant figure(s) before calculating.',
      template: 'Round to __BLANK__ significant figure(s).',
      blanks: [{ answer: '1' }],
      rationale: 'The standard estimation method is to round each value to 1 significant figure.'
    },
    {
      id: 'fb-14',
      stem: 'Round 0.004 72 to 1 significant figure.',
      template: '0.004 72 to 1 s.f. is __BLANK__.',
      blanks: [{ answer: '0.005' }],
      rationale: '1st s.f. = 4. Deciding digit = 7 ≥ 5 → round up. Answer: 0.005.'
    },
    {
      id: 'fb-15',
      stem: 'If the deciding digit is 5 or more, you should ____.',
      template: 'You should __BLANK__.',
      blanks: [{ answer: 'round up' }],
      rationale: 'The rounding rule: deciding digit ≥ 5 → round up.'
    }
  ],

  /* ============================================================
     DRAG-AND-DROP  (~10)
     ============================================================ */
  dragdrop: [
    {
      id: 'dd-1',
      stem: 'Sort these numbers by how many significant figures they have.',
      categories: ['1 s.f.', '2 s.f.', '3 s.f.'],
      items: [
        { text: '0.003', category: '1 s.f.' },
        { text: '4 000', category: '1 s.f.' },
        { text: '0.0052', category: '2 s.f.' },
        { text: '73', category: '2 s.f.' },
        { text: '0.0500', category: '3 s.f.' },
        { text: '6.02', category: '3 s.f.' }
      ]
    },
    {
      id: 'dd-2',
      stem: 'Match each number to its value when rounded to 1 decimal place.',
      categories: ['3.5', '3.6', '3.7'],
      items: [
        { text: '3.54', category: '3.5' },
        { text: '3.549', category: '3.5' },
        { text: '3.55', category: '3.6' },
        { text: '3.649', category: '3.6' },
        { text: '3.65', category: '3.7' },
        { text: '3.73', category: '3.7' }
      ]
    },
    {
      id: 'dd-3',
      stem: 'Sort these rounding tasks into the correct method used.',
      categories: ['Decimal places (d.p.)', 'Significant figures (s.f.)'],
      items: [
        { text: 'Round 4.386 to 2 d.p.', category: 'Decimal places (d.p.)' },
        { text: 'Round 0.004 72 to 1 s.f.', category: 'Significant figures (s.f.)' },
        { text: 'Round 8.916 to 1 d.p.', category: 'Decimal places (d.p.)' },
        { text: 'Round 34 820 to 3 s.f.', category: 'Significant figures (s.f.)' },
        { text: 'Round 7.999 to 2 d.p.', category: 'Decimal places (d.p.)' },
        { text: 'Round 0.0836 to 2 s.f.', category: 'Significant figures (s.f.)' }
      ]
    },
    {
      id: 'dd-4',
      stem: 'Match each estimation to its correct estimated answer (round to 1 s.f.).',
      categories: ['200', '40', '120'],
      items: [
        { text: '38.4 × 5.27', category: '200' },
        { text: '783 ÷ 18.6', category: '40' },
        { text: '612 × 3.8 ÷ 19.4', category: '120' }
      ]
    },
    {
      id: 'dd-5',
      stem: 'Sort these zeros into "Significant" or "Not significant".',
      categories: ['Significant', 'Not significant'],
      items: [
        { text: 'The 0 in 3.50', category: 'Significant' },
        { text: 'The 0 in 0.07', category: 'Not significant' },
        { text: 'The 0s in 0.0500 (last two)', category: 'Significant' },
        { text: 'The 0 in 0.003', category: 'Not significant' },
        { text: 'The 0 in 6.02', category: 'Significant' },
        { text: 'The 0 in 0.9', category: 'Not significant' }
      ]
    },
    {
      id: 'dd-6',
      stem: 'Match each number to its value rounded to 1 significant figure.',
      categories: ['0.005', '0.004', '0.007'],
      items: [
        { text: '0.004 72', category: '0.005' },
        { text: '0.004 31', category: '0.004' },
        { text: '0.006 83', category: '0.007' }
      ]
    },
    {
      id: 'dd-7',
      stem: 'Sort these into "Round up" or "Round down" when rounding to 2 d.p.',
      categories: ['Round up', 'Round down'],
      items: [
        { text: '5.347 → deciding digit 7', category: 'Round up' },
        { text: '2.831 → deciding digit 1', category: 'Round down' },
        { text: '9.125 → deciding digit 5', category: 'Round up' },
        { text: '0.464 → deciding digit 4', category: 'Round down' },
        { text: '7.089 → deciding digit 9', category: 'Round up' },
        { text: '1.232 → deciding digit 2', category: 'Round down' }
      ]
    },
    {
      id: 'dd-8',
      stem: 'Match each number to the correct place value it is rounded to.',
      categories: ['Nearest 10', 'Nearest 100', 'Nearest 1 000'],
      items: [
        { text: '3 748 → 3 750', category: 'Nearest 10' },
        { text: '3 748 → 3 700', category: 'Nearest 100' },
        { text: '3 748 → 4 000', category: 'Nearest 1 000' }
      ]
    },
    {
      id: 'dd-9',
      stem: 'Sort each number into its 1 s.f. rounded value for estimation.',
      categories: ['40', '5', '300'],
      items: [
        { text: '38.4', category: '40' },
        { text: '43.1', category: '40' },
        { text: '5.27', category: '5' },
        { text: '4.63', category: '5' },
        { text: '310', category: '300' },
        { text: '287', category: '300' }
      ]
    },
    {
      id: 'dd-10',
      stem: 'Match each value to its subtopic.',
      categories: ['Rounding to d.p.', 'Rounding to s.f.', 'Estimation'],
      items: [
        { text: 'Round 6.381 to 2 d.p.', category: 'Rounding to d.p.' },
        { text: 'Round 0.0062 to 1 s.f.', category: 'Rounding to s.f.' },
        { text: 'Approximate 49.3 × 2.1', category: 'Estimation' },
        { text: 'Round 9.995 to 2 d.p.', category: 'Rounding to d.p.' },
        { text: 'Round 7 258 to 2 s.f.', category: 'Rounding to s.f.' },
        { text: 'Check 812 ÷ 3.9 ≈ ?', category: 'Estimation' }
      ]
    }
  ],

  /* ============================================================
     SEQUENCE  (~8)
     ============================================================ */
  sequence: [
    {
      id: 'seq-1',
      stem: 'Put the steps for rounding to decimal places in order.',
      steps: [
        'Identify the digit at the required decimal place',
        'Look at the next digit (the deciding digit)',
        'Apply the rounding rule (≥ 5 round up, < 5 round down)',
        'Drop all digits after the required place'
      ]
    },
    {
      id: 'seq-2',
      stem: 'Order the steps for rounding to significant figures.',
      steps: [
        'Find the first non-zero digit (1st significant figure)',
        'Count to the required number of significant figures',
        'Look at the deciding digit (the next digit)',
        'Round using the standard rule and replace remaining digits with zeros'
      ]
    },
    {
      id: 'seq-3',
      stem: 'Order the steps to estimate 38.4 × 5.27.',
      steps: [
        'Round 38.4 to 1 s.f. → 40',
        'Round 5.27 to 1 s.f. → 5',
        'Multiply the rounded values: 40 × 5',
        'Write the estimate: 200'
      ]
    },
    {
      id: 'seq-4',
      stem: 'Arrange the steps to round 3.495 to 2 decimal places.',
      steps: [
        'Identify the 2nd decimal digit: 9',
        'Find the deciding digit: 5',
        'Since 5 ≥ 5, round the 9 up (carries over)',
        'Write the answer as 3.50 (keep trailing zero)'
      ]
    },
    {
      id: 'seq-5',
      stem: 'Order the steps to round 47 836 to 2 significant figures.',
      steps: [
        'Identify 1st s.f. = 4 and 2nd s.f. = 7',
        'Look at deciding digit = 8',
        'Since 8 ≥ 5, round the 7 up to 8',
        'Replace remaining digits with zeros → 48 000'
      ]
    },
    {
      id: 'seq-6',
      stem: 'Order the steps to estimate 783 ÷ 18.6.',
      steps: [
        'Round 783 to 1 s.f. → 800',
        'Round 18.6 to 1 s.f. → 20',
        'Divide the rounded values: 800 ÷ 20',
        'Write the estimate: 40'
      ]
    },
    {
      id: 'seq-7',
      stem: 'Arrange the steps to estimate √(48.7 × 3.1).',
      steps: [
        'Round 48.7 to 1 s.f. → 50 and 3.1 → 3',
        'Multiply: 50 × 3 = 150',
        'Find the nearest perfect square: √144 = 12',
        'Write the estimate: 12'
      ]
    },
    {
      id: 'seq-8',
      stem: 'Order the steps to round 0.007384 to 2 significant figures.',
      steps: [
        'Skip leading zeros: 0.00…',
        'Identify 1st s.f. = 7 and 2nd s.f. = 3',
        'Look at deciding digit = 8 (≥ 5 → round up)',
        'Write answer: 0.0074'
      ]
    }
  ],

  /* ============================================================
     KEYWORD  (~12)
     ============================================================ */
  keyword: [
    {
      id: 'kw-1',
      stem: 'Explain the rounding rule used for decimal places and whole-number place values. [2 marks]',
      marks: 2,
      keywords: ['deciding digit', 'round up'],
      modelAnswer: 'Look at the deciding digit (the digit immediately after the required place). If it is 5 or more, round up; if it is less than 5, round down.'
    },
    {
      id: 'kw-2',
      stem: 'What are significant figures and where do you start counting them? [2 marks]',
      marks: 2,
      keywords: ['first non-zero', 'meaningful digits'],
      modelAnswer: 'Significant figures are the meaningful digits in a number. You start counting from the first non-zero digit reading left to right.'
    },
    {
      id: 'kw-3',
      stem: 'Explain why trailing zeros matter when rounding to decimal places. [2 marks]',
      marks: 2,
      keywords: ['trailing zero', 'accuracy'],
      modelAnswer: 'A trailing zero after the decimal point shows the level of accuracy. For example, 3.50 shows the answer is given to 2 d.p., not 1 d.p.'
    },
    {
      id: 'kw-4',
      stem: 'Describe the method for estimating a calculation. [2 marks]',
      marks: 2,
      keywords: ['1 significant figure', 'simplified calculation'],
      modelAnswer: 'Round every number in the calculation to 1 significant figure, then perform the simplified calculation to get the estimate.'
    },
    {
      id: 'kw-5',
      stem: 'Why is estimation useful when solving maths problems? [2 marks]',
      marks: 2,
      keywords: ['check', 'roughly correct'],
      modelAnswer: 'Estimation lets you quickly check whether your exact answer is roughly correct. If the exact answer differs wildly from the estimate, there is likely an error.'
    },
    {
      id: 'kw-6',
      stem: 'Explain why leading zeros in a decimal are not significant. [2 marks]',
      marks: 2,
      keywords: ['leading zeros', 'place holder'],
      modelAnswer: 'Leading zeros serve as place holders to show the position of the decimal point. They do not represent measured or meaningful values, so they are not counted as significant figures.'
    },
    {
      id: 'kw-7',
      stem: 'What happens to digits after the required significant figure in a large number? [1 mark]',
      marks: 1,
      keywords: ['replaced with zeros'],
      modelAnswer: 'Digits after the required significant figure are replaced with zeros to maintain the place value of the number.'
    },
    {
      id: 'kw-8',
      stem: 'State the difference between rounding to decimal places and rounding to significant figures. [2 marks]',
      marks: 2,
      keywords: ['decimal point', 'first non-zero digit'],
      modelAnswer: 'Decimal places counts digits after the decimal point. Significant figures counts meaningful digits starting from the first non-zero digit, regardless of the decimal point.'
    },
    {
      id: 'kw-9',
      stem: 'In an estimation exam question, what must you show to gain full marks? [1 mark]',
      marks: 1,
      keywords: ['rounded values'],
      modelAnswer: 'You must show each number rounded to 1 significant figure before performing the estimated calculation.'
    },
    {
      id: 'kw-10',
      stem: 'How do you round 6.999 to 1 decimal place? Explain why. [2 marks]',
      marks: 2,
      keywords: ['carry over', '7.0'],
      modelAnswer: 'The deciding digit is 9 (≥ 5), so round the 9 in the first decimal place up. This causes a carry over, giving 7.0.'
    },
    {
      id: 'kw-11',
      stem: 'Describe how to round 0.007384 to 2 significant figures. [2 marks]',
      marks: 2,
      keywords: ['skip leading zeros', '0.0074'],
      modelAnswer: 'Skip the leading zeros and identify the first two significant figures: 7 and 3. The deciding digit is 8 (≥ 5), so round up from 3 to 4, giving 0.0074.'
    },
    {
      id: 'kw-12',
      stem: 'What does "order of magnitude" mean in the context of estimation? [2 marks]',
      marks: 2,
      keywords: ['power of ten', 'same size'],
      modelAnswer: 'Order of magnitude refers to the power of ten closest to a number. An estimate should be the same order of magnitude (same rough size) as the exact answer.'
    }
  ],

  /* ============================================================
     FLASHCARDS  (~25)
     ============================================================ */
  flashcards: [
    // ── Rounding to a given place value ──
    {
      id: 'fc-1',
      front: 'What is the rounding rule?',
      back: 'If the deciding digit is 5 or more → round up. If it is less than 5 → round down.',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'fc-2',
      front: 'What is the "deciding digit"?',
      back: 'The digit immediately after the required rounding position.',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'fc-3',
      front: 'Round 7.382 to 2 d.p.',
      back: '7.38 (deciding digit = 2 < 5 → round down)',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'fc-4',
      front: 'Round 4.167 to 2 d.p.',
      back: '4.17 (deciding digit = 7 ≥ 5 → round up)',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'fc-5',
      front: 'Round 3.495 to 2 d.p.',
      back: '3.50 (deciding digit = 5 → round up; keep trailing zero to show 2 d.p.)',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'fc-6',
      front: 'Round 3 748 to the nearest 100.',
      back: '3 700 (deciding digit = 4 < 5 → round down)',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'fc-7',
      front: 'Round 3 748 to the nearest 1 000.',
      back: '4 000 (deciding digit = 7 ≥ 5 → round up)',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'fc-8',
      front: 'Why write 3.50 instead of 3.5 when rounding to 2 d.p.?',
      back: 'The trailing zero shows the answer is accurate to 2 decimal places.',
      topic: 'Rounding to a given place value'
    },
    {
      id: 'fc-9',
      front: 'Round 6.999 to 1 d.p.',
      back: '7.0 (deciding digit = 9 ≥ 5 → rounding carries over)',
      topic: 'Rounding to a given place value'
    },

    // ── Rounding to significant figures ──
    {
      id: 'fc-10',
      front: 'Where do you start counting significant figures?',
      back: 'From the first non-zero digit, reading left to right.',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'fc-11',
      front: 'Are leading zeros significant?',
      back: 'No. Leading zeros are place holders and do not count as significant figures.',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'fc-12',
      front: 'How many significant figures does 0.0052 have?',
      back: '2 (only 5 and 2 count).',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'fc-13',
      front: 'How many significant figures does 0.0500 have?',
      back: '3 (5, 0, 0 – trailing zeros after the decimal point are significant).',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'fc-14',
      front: 'Round 47 836 to 2 s.f.',
      back: '48 000 (deciding digit = 8 ≥ 5 → round up the 7 to 8)',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'fc-15',
      front: 'Round 0.007384 to 2 s.f.',
      back: '0.0074 (skip leading zeros; 1st s.f. = 7, 2nd = 3; deciding = 8 → round up)',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'fc-16',
      front: 'Round 3 055 to 1 s.f.',
      back: '3 000 (1st s.f. = 3; deciding = 0 < 5 → round down)',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'fc-17',
      front: 'What is the key difference between d.p. and s.f.?',
      back: 'D.p. counts digits after the decimal point. S.f. counts meaningful digits from the first non-zero digit.',
      topic: 'Rounding to significant figures'
    },
    {
      id: 'fc-18',
      front: 'Round 9.962 to 2 s.f.',
      back: '10 (deciding digit = 6 ≥ 5 → 9.9 rounds to 10)',
      topic: 'Rounding to significant figures'
    },

    // ── Estimation ──
    {
      id: 'fc-19',
      front: 'What is the standard method for estimation?',
      back: 'Round every number in the calculation to 1 significant figure, then compute.',
      topic: 'Estimation'
    },
    {
      id: 'fc-20',
      front: 'Estimate 38.4 × 5.27',
      back: '40 × 5 = 200',
      topic: 'Estimation'
    },
    {
      id: 'fc-21',
      front: 'Estimate 783 ÷ 18.6',
      back: '800 ÷ 20 = 40',
      topic: 'Estimation'
    },
    {
      id: 'fc-22',
      front: 'Estimate √(48.7 × 3.1)',
      back: '50 × 3 = 150; √150 ≈ √144 = 12',
      topic: 'Estimation'
    },
    {
      id: 'fc-23',
      front: 'Why is estimation useful?',
      back: 'It lets you quickly check whether an exact answer is roughly correct.',
      topic: 'Estimation'
    },
    {
      id: 'fc-24',
      front: 'What must you show in an estimation exam question?',
      back: 'Each number rounded to 1 s.f. and the estimated calculation — never write just the exact answer.',
      topic: 'Estimation'
    },
    {
      id: 'fc-25',
      front: 'Estimate 0.48 × 310',
      back: '0.5 × 300 = 150',
      topic: 'Estimation'
    }
  ]
};
