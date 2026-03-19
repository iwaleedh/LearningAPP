export const exercises_olevel_maths_core_2_3 = {

  /* ───────────────────── MCQ (~30) ───────────────────── */
  mcq: [
    // ── Collecting Like Terms ──
    { id: 'mcq-1', stem: 'Simplify: 3x + 5x', options: ['8x', '15x', '8x²', '8'], correctAnswer: 0, rationale: 'Both are x-terms: 3 + 5 = 8, so result is 8x.', topic: 'Collecting like terms' },
    { id: 'mcq-2', stem: 'Simplify: 7y − 4y', options: ['3y', '11y', '3', '−3y'], correctAnswer: 0, rationale: '7 − 4 = 3, so 7y − 4y = 3y.', topic: 'Collecting like terms' },
    { id: 'mcq-3', stem: 'Which pair are like terms?', options: ['3x and 3x²', '5a and −2a', '4x and 4y', '2xy and 2x'], correctAnswer: 1, rationale: '5a and −2a both have variable a to the power 1 — they are like terms.', topic: 'Collecting like terms' },
    { id: 'mcq-4', stem: 'Simplify: 9a − a', options: ['8a', '9', '10a', '9a²'], correctAnswer: 0, rationale: 'a = 1a, so 9a − 1a = 8a.', topic: 'Collecting like terms' },
    { id: 'mcq-5', stem: 'Simplify: 5x + 3 − 2x + 8', options: ['3x + 11', '7x + 11', '3x + 5', '7x + 5'], correctAnswer: 0, rationale: 'x-terms: 5x − 2x = 3x. Constants: 3 + 8 = 11. Answer: 3x + 11.', topic: 'Collecting like terms' },
    { id: 'mcq-6', stem: 'Simplify: 2x² + 3x − x² + 4x − 5', options: ['x² + 7x − 5', '3x² + 7x − 5', 'x² − x − 5', '2x² + 7x − 5'], correctAnswer: 0, rationale: 'x²: 2x² − x² = x². x: 3x + 4x = 7x. Constant: −5. Result: x² + 7x − 5.', topic: 'Collecting like terms' },
    { id: 'mcq-7', stem: 'Simplify: 5a + 3b − 2a + 7b − 4', options: ['3a + 10b − 4', '7a + 10b − 4', '3a + 4b − 4', '3a + 10b + 4'], correctAnswer: 0, rationale: 'a: 5a − 2a = 3a. b: 3b + 7b = 10b. Constant: −4.', topic: 'Collecting like terms' },
    { id: 'mcq-8', stem: 'Which expression cannot be simplified further?', options: ['3x + 2y', '4a + 6a', '5x − x', '7y + 3y'], correctAnswer: 0, rationale: '3x and 2y are unlike terms (different variables), so they cannot be combined.', topic: 'Collecting like terms' },
    { id: 'mcq-9', stem: 'Simplify: 4x² + 3x² − x²', options: ['6x²', '7x²', '6x⁶', '8x²'], correctAnswer: 0, rationale: '4 + 3 − 1 = 6, so result is 6x².', topic: 'Collecting like terms' },
    { id: 'mcq-10', stem: 'Simplify: 6m − 3n + 2m + n', options: ['8m − 2n', '8m − 4n', '4m − 2n', '8m + 2n'], correctAnswer: 0, rationale: 'm: 6m + 2m = 8m. n: −3n + n = −2n.', topic: 'Collecting like terms' },
    { id: 'mcq-11', stem: 'What is the simplified form of −3p + 8p?', options: ['5p', '−11p', '11p', '−5p'], correctAnswer: 0, rationale: '−3 + 8 = 5, so −3p + 8p = 5p.', topic: 'Collecting like terms' },
    { id: 'mcq-12', stem: 'Simplify: 3xy + 5xy − 2xy', options: ['6xy', '6x²y²', '8xy', '6'], correctAnswer: 0, rationale: '3 + 5 − 2 = 6. All terms are in xy, giving 6xy.', topic: 'Collecting like terms' },
    { id: 'mcq-13', stem: 'Are 4ab and 4ba like terms?', options: ['Yes — ab and ba are the same', 'No — the letters are in different order', 'No — they have different powers', 'Only if a = b'], correctAnswer: 0, rationale: 'Multiplication is commutative: ab = ba, so 4ab and 4ba are like terms.', topic: 'Collecting like terms' },
    { id: 'mcq-14', stem: 'Simplify: 10 − 3x + 7 + x', options: ['17 − 2x', '17 − 4x', '14 − 2x', '20x'], correctAnswer: 0, rationale: 'Constants: 10 + 7 = 17. x-terms: −3x + x = −2x. Result: 17 − 2x.', topic: 'Collecting like terms' },
    { id: 'mcq-15', stem: 'Simplify: x² + 5x + 2x² − 3x + 1', options: ['3x² + 2x + 1', 'x² + 2x + 1', '3x² + 8x + 1', '3x² − 2x + 1'], correctAnswer: 0, rationale: 'x²: 1 + 2 = 3. x: 5 − 3 = 2. Constant: 1.', topic: 'Collecting like terms' },

    // ── Simplifying Algebraic Fractions ──
    { id: 'mcq-16', stem: 'Simplify: 6x ÷ 3', options: ['2x', '3x', '2', '6x − 3'], correctAnswer: 0, rationale: 'HCF of 6 and 3 is 3. 6x ÷ 3 = 2x.', topic: 'Simplifying algebraic fractions' },
    { id: 'mcq-17', stem: 'Simplify: 8y / 12', options: ['2y/3', '4y/6', '2y/6', '8y/12'], correctAnswer: 0, rationale: 'HCF(8,12) = 4. 8y ÷ 4 = 2y, 12 ÷ 4 = 3. Answer: 2y/3.', topic: 'Simplifying algebraic fractions' },
    { id: 'mcq-18', stem: 'Simplify: x² / x', options: ['x', 'x²', '1', 'x³'], correctAnswer: 0, rationale: 'Using the index law: x² ÷ x = x²⁻¹ = x.', topic: 'Simplifying algebraic fractions' },
    { id: 'mcq-19', stem: 'Simplify: 12x⁵ / 4x²', options: ['3x³', '3x⁷', '8x³', '3x²'], correctAnswer: 0, rationale: 'Coefficients: 12 ÷ 4 = 3. Variables: x⁵ ÷ x² = x³.', topic: 'Simplifying algebraic fractions' },
    { id: 'mcq-20', stem: 'Simplify: 6a³b² / 3ab', options: ['2a²b', '2a³b²', '3a²b', '2a²b²'], correctAnswer: 0, rationale: '6 ÷ 3 = 2. a³ ÷ a = a². b² ÷ b = b. Result: 2a²b.', topic: 'Simplifying algebraic fractions' },
    { id: 'mcq-21', stem: 'Simplify: 3(x + 2) / (x + 2)', options: ['3', '3x + 2', 'x + 2', '3x + 6'], correctAnswer: 0, rationale: 'The factor (x + 2) cancels from numerator and denominator, leaving 3.', topic: 'Simplifying algebraic fractions' },
    { id: 'mcq-22', stem: 'Can you simplify (x + 6) / 6 to (x + 1)?', options: ['No — 6 is added, not a factor', 'Yes — divide each term by 6', 'Yes — cancel the 6', 'No — you must expand first'], correctAnswer: 0, rationale: 'You can only cancel multiplicative factors. The 6 in (x + 6) is being added, not multiplied.', topic: 'Simplifying algebraic fractions' },
    { id: 'mcq-23', stem: 'Simplify: 15x³ / 5x', options: ['3x²', '3x³', '10x²', '3x'], correctAnswer: 0, rationale: '15 ÷ 5 = 3. x³ ÷ x = x². Answer: 3x².', topic: 'Simplifying algebraic fractions' },
    { id: 'mcq-24', stem: 'Simplify: 20ab / 10a', options: ['2b', '2ab', '10b', '2a'], correctAnswer: 0, rationale: '20 ÷ 10 = 2. a ÷ a = 1. Result: 2b.', topic: 'Simplifying algebraic fractions' },
    { id: 'mcq-25', stem: 'Simplify: (x + 5)(x − 1) / (x + 5)', options: ['x − 1', 'x + 5', '(x − 1)(x + 5)', 'x² + 4x − 5'], correctAnswer: 0, rationale: 'Cancel the common factor (x + 5) to leave (x − 1).', topic: 'Simplifying algebraic fractions' },
    { id: 'mcq-26', stem: 'Simplify: 10x²y / 2xy', options: ['5x', '5xy', '5x²', '8x'], correctAnswer: 0, rationale: '10 ÷ 2 = 5. x² ÷ x = x. y ÷ y = 1. Result: 5x.', topic: 'Simplifying algebraic fractions' },
    { id: 'mcq-27', stem: 'What is x⁵ / x³ simplified?', options: ['x²', 'x⁸', 'x¹⁵', 'x'], correctAnswer: 0, rationale: 'Using the division index law: 5 − 3 = 2, so x⁵ ÷ x³ = x².', topic: 'Simplifying algebraic fractions' },
    { id: 'mcq-28', stem: 'Simplify: 9p²q / 3pq', options: ['3p', '3p²', '6p', '3q'], correctAnswer: 0, rationale: '9 ÷ 3 = 3. p² ÷ p = p. q ÷ q = 1. Result: 3p.', topic: 'Simplifying algebraic fractions' },
    { id: 'mcq-29', stem: 'Which step comes first when simplifying 18x⁴ / 6x?', options: ['Find the HCF of the coefficients', 'Cancel the variable powers', 'Add the powers', 'Multiply numerator and denominator'], correctAnswer: 0, rationale: 'First cancel the numerical coefficients (18 ÷ 6 = 3), then cancel the variable powers.', topic: 'Simplifying algebraic fractions' },
    { id: 'mcq-30', stem: 'Simplify: 4(x − 3) / 2(x − 3)', options: ['2', '4', '2(x − 3)', '2x − 3'], correctAnswer: 0, rationale: 'Cancel (x − 3) and simplify 4/2 = 2.', topic: 'Simplifying algebraic fractions' },
  ],

  /* ───────────────────── FILL-BLANK (~15) ───────────────────── */
  fillblank: [
    // ── Collecting Like Terms ──
    { id: 'fb-1', stem: 'What do we call terms with the same variable and the same power?', template: 'They are called __BLANK__ terms.', blanks: [{ answer: 'like' }], rationale: 'Like terms share the same variable(s) raised to the same power(s).' },
    { id: 'fb-2', stem: 'Simplify: 4x + 6x', template: '4x + 6x = __BLANK__', blanks: [{ answer: '10x' }], rationale: '4 + 6 = 10, so 4x + 6x = 10x.' },
    { id: 'fb-3', stem: 'Simplify: 8a − 3a', template: '8a − 3a = __BLANK__', blanks: [{ answer: '5a' }], rationale: '8 − 3 = 5, giving 5a.' },
    { id: 'fb-4', stem: 'Simplify: 7y − y', template: '7y − y = __BLANK__', blanks: [{ answer: '6y' }], rationale: 'Remember y = 1y, so 7 − 1 = 6.' },
    { id: 'fb-5', stem: 'The coefficient of x in the term x is what number?', template: 'The coefficient is __BLANK__.', blanks: [{ answer: '1' }], rationale: 'x is the same as 1x, so the coefficient is 1.' },
    { id: 'fb-6', stem: 'Simplify: 3x² + 5x² − 2x²', template: '3x² + 5x² − 2x² = __BLANK__', blanks: [{ answer: '6x²' }], rationale: '3 + 5 − 2 = 6, so the answer is 6x².' },
    { id: 'fb-7', stem: '3x and 2y are what kind of terms?', template: 'They are __BLANK__ terms.', blanks: [{ answer: 'unlike' }], rationale: 'They have different variables (x vs y), so they are unlike terms.' },
    { id: 'fb-8', stem: 'Simplify: −2p + 9p', template: '−2p + 9p = __BLANK__', blanks: [{ answer: '7p' }], rationale: '−2 + 9 = 7, so the result is 7p.' },

    // ── Simplifying Algebraic Fractions ──
    { id: 'fb-9', stem: 'Simplify: 6x / 3', template: '6x ÷ 3 = __BLANK__', blanks: [{ answer: '2x' }], rationale: 'HCF of 6 and 3 is 3. 6x ÷ 3 = 2x.' },
    { id: 'fb-10', stem: 'Simplify: x³ / x', template: 'x³ ÷ x = __BLANK__', blanks: [{ answer: 'x²' }], rationale: 'Using the index law: 3 − 1 = 2, so x³ ÷ x = x².' },
    { id: 'fb-11', stem: 'When simplifying algebraic fractions, you can only cancel common...', template: 'You can only cancel common __BLANK__.', blanks: [{ answer: 'factors' }], rationale: 'Only multiplicative factors can be cancelled, not added terms.' },
    { id: 'fb-12', stem: 'Simplify: 10a / 5', template: '10a ÷ 5 = __BLANK__', blanks: [{ answer: '2a' }], rationale: '10 ÷ 5 = 2, giving 2a.' },
    { id: 'fb-13', stem: 'Simplify: x / x', template: 'x ÷ x = __BLANK__', blanks: [{ answer: '1' }], rationale: 'Any non-zero expression divided by itself equals 1.' },
    { id: 'fb-14', stem: 'Simplify: 14x² / 7x', template: '14x² ÷ 7x = __BLANK__', blanks: [{ answer: '2x' }], rationale: '14 ÷ 7 = 2. x² ÷ x = x. Result: 2x.' },
    { id: 'fb-15', stem: 'The rule xᵐ ÷ xⁿ = x raised to the power of...', template: 'xᵐ ÷ xⁿ = x^(__BLANK__)', blanks: [{ answer: 'm − n' }], rationale: 'The division index law: subtract the powers.' },
  ],

  /* ───────────────────── DRAG-DROP (~10) ───────────────────── */
  dragdrop: [
    { id: 'dd-1', stem: 'Sort each pair as "Like Terms" or "Unlike Terms".', categories: ['Like Terms', 'Unlike Terms'], items: [
      { text: '3x and 5x', category: 'Like Terms' },
      { text: '2x² and 7x²', category: 'Like Terms' },
      { text: '4xy and −9xy', category: 'Like Terms' },
      { text: '3x and 3x²', category: 'Unlike Terms' },
      { text: '5x and 5y', category: 'Unlike Terms' },
      { text: '6 and −11', category: 'Like Terms' },
    ]},
    { id: 'dd-2', stem: 'Sort each pair as "Like Terms" or "Unlike Terms".', categories: ['Like Terms', 'Unlike Terms'], items: [
      { text: '8ab and 3ab', category: 'Like Terms' },
      { text: '4x and 4', category: 'Unlike Terms' },
      { text: '−2y² and 5y²', category: 'Like Terms' },
      { text: '6p and 6pq', category: 'Unlike Terms' },
    ]},
    { id: 'dd-3', stem: 'Sort each expression as "Can simplify" or "Cannot simplify further".', categories: ['Can simplify', 'Cannot simplify further'], items: [
      { text: '4a + 6a', category: 'Can simplify' },
      { text: '3x + 2y', category: 'Cannot simplify further' },
      { text: '5x − x', category: 'Can simplify' },
      { text: '7a + 3b', category: 'Cannot simplify further' },
      { text: '2x² + 3x²', category: 'Can simplify' },
    ]},
    { id: 'dd-4', stem: 'Classify each fraction simplification as "Correct" or "Incorrect".', categories: ['Correct', 'Incorrect'], items: [
      { text: '6x ÷ 3 = 2x', category: 'Correct' },
      { text: '(x + 6) ÷ 6 = x + 1', category: 'Incorrect' },
      { text: '12x⁵ ÷ 4x² = 3x³', category: 'Correct' },
      { text: '8y ÷ 12 = 2y/3', category: 'Correct' },
      { text: 'x² ÷ x = x²', category: 'Incorrect' },
    ]},
    { id: 'dd-5', stem: 'Sort each item as something you "Can cancel" or "Cannot cancel" in a fraction.', categories: ['Can cancel', 'Cannot cancel'], items: [
      { text: 'A common numerical factor', category: 'Can cancel' },
      { text: 'A common variable factor', category: 'Can cancel' },
      { text: 'A term that is added', category: 'Cannot cancel' },
      { text: 'A bracket factor on top and bottom', category: 'Can cancel' },
    ]},
    { id: 'dd-6', stem: 'Match each fraction to its simplified form.', categories: ['x', '2x', '3x²'], items: [
      { text: 'x² / x', category: 'x' },
      { text: '6x / 3', category: '2x' },
      { text: '9x⁴ / 3x²', category: '3x²' },
    ]},
    { id: 'dd-7', stem: 'Sort these simplified results as correct for "3a + 10b − 4" or "Not from this expression".', categories: ['Part of the simplification', 'Not from this expression'], items: [
      { text: 'a-terms: 5a − 2a = 3a', category: 'Part of the simplification' },
      { text: 'b-terms: 3b + 7b = 10b', category: 'Part of the simplification' },
      { text: 'a-terms: 5a + 2a = 7a', category: 'Not from this expression' },
      { text: 'constant: −4', category: 'Part of the simplification' },
    ]},
    { id: 'dd-8', stem: 'Sort into "Uses HCF cancelling" or "Uses index law cancelling".', categories: ['Uses HCF cancelling', 'Uses index law cancelling'], items: [
      { text: '12 ÷ 4 = 3 (coefficient step)', category: 'Uses HCF cancelling' },
      { text: 'x⁵ ÷ x² = x³ (variable step)', category: 'Uses index law cancelling' },
      { text: '8 ÷ 12 → 2/3 (coefficient step)', category: 'Uses HCF cancelling' },
      { text: 'a³ ÷ a = a² (variable step)', category: 'Uses index law cancelling' },
    ]},
    { id: 'dd-9', stem: 'Classify as "Like terms (same group)" or "Different groups" in 2x² + 3x − x² + 4x − 5.', categories: ['x² group', 'x group', 'constant group'], items: [
      { text: '2x²', category: 'x² group' },
      { text: '−x²', category: 'x² group' },
      { text: '3x', category: 'x group' },
      { text: '4x', category: 'x group' },
      { text: '−5', category: 'constant group' },
    ]},
    { id: 'dd-10', stem: 'Match each algebraic fraction to its simplified form.', categories: ['3', '2a²b', 'x − 1'], items: [
      { text: '3(x + 2) / (x + 2)', category: '3' },
      { text: '6a³b² / 3ab', category: '2a²b' },
      { text: '(x + 5)(x − 1) / (x + 5)', category: 'x − 1' },
    ]},
  ],

  /* ───────────────────── SEQUENCE (~8) ───────────────────── */
  sequence: [
    { id: 'seq-1', stem: 'Put the steps for collecting like terms in order.', steps: [
      'Identify all sets of like terms in the expression',
      'Group each set of like terms together',
      'Add or subtract the coefficients within each group',
      'Write the simplified result',
    ]},
    { id: 'seq-2', stem: 'Order the steps to simplify: 5x + 3 − 2x + 8', steps: [
      'Identify like terms: 5x and −2x are x-terms; 3 and 8 are constants',
      'Collect x-terms: 5x − 2x = 3x',
      'Collect constants: 3 + 8 = 11',
      'Write the result: 3x + 11',
    ]},
    { id: 'seq-3', stem: 'Order the steps to simplify: 2x² + 3x − x² + 4x − 5', steps: [
      'Identify three groups: x²-terms, x-terms, and constants',
      'Collect x²-terms: 2x² − x² = x²',
      'Collect x-terms: 3x + 4x = 7x',
      'Write the result: x² + 7x − 5',
    ]},
    { id: 'seq-4', stem: 'Order the steps to simplify the fraction 12x⁵ / 4x².', steps: [
      'Identify the common numerical factor (HCF of 12 and 4 is 4)',
      'Divide coefficients: 12 ÷ 4 = 3',
      'Divide variable powers: x⁵ ÷ x² = x³',
      'Write the result: 3x³',
    ]},
    { id: 'seq-5', stem: 'Order the steps to simplify 6a³b² / 3ab.', steps: [
      'Cancel coefficients: 6 ÷ 3 = 2',
      'Cancel variable a: a³ ÷ a = a²',
      'Cancel variable b: b² ÷ b = b',
      'Write the result: 2a²b',
    ]},
    { id: 'seq-6', stem: 'Order the steps to simplify 3(x + 2) / (x + 2).', steps: [
      'Identify the common bracket factor (x + 2)',
      'Cancel (x + 2) from numerator and denominator',
      'Write the result: 3',
    ]},
    { id: 'seq-7', stem: 'Order the steps to decide if two terms are "like" terms.', steps: [
      'Check if the terms have the same variable(s)',
      'Check if each variable is raised to the same power',
      'If both match, they are like terms; otherwise they are unlike',
    ]},
    { id: 'seq-8', stem: 'Order the steps to simplify an algebraic fraction with both coefficients and variables.', steps: [
      'Find the HCF of the numerical coefficients',
      'Divide numerator and denominator coefficients by the HCF',
      'Apply the division index law to cancel variable powers',
      'Write the fully simplified fraction',
    ]},
  ],

  /* ───────────────────── KEYWORD (~12) ───────────────────── */
  keyword: [
    // ── Collecting Like Terms ──
    { id: 'kw-1', stem: 'What are like terms? [2 marks]', marks: 2, keywords: ['same variable', 'same power'], modelAnswer: 'Like terms are terms that have the same variable(s) raised to the same power(s).' },
    { id: 'kw-2', stem: 'Explain why 3x and 3x² are not like terms. [2 marks]', marks: 2, keywords: ['different powers', 'x¹', 'x²'], modelAnswer: '3x has x to the power 1, while 3x² has x to the power 2. Because the powers are different, they are not like terms.' },
    { id: 'kw-3', stem: 'Describe how to simplify an expression by collecting like terms. [3 marks]', marks: 3, keywords: ['identify', 'group', 'add or subtract coefficients'], modelAnswer: 'Identify the sets of like terms, group them together, then add or subtract their coefficients to simplify.' },
    { id: 'kw-4', stem: 'Why can\'t you simplify 4x + 3y to 7xy? [2 marks]', marks: 2, keywords: ['unlike terms', 'different variables'], modelAnswer: '4x and 3y are unlike terms because they have different variables (x and y), so they cannot be combined.' },
    { id: 'kw-5', stem: 'What is the coefficient of a in the expression 9a − a? [1 mark]', marks: 1, keywords: ['1'], modelAnswer: 'The coefficient of a in the term "a" is 1, because a = 1a.' },
    { id: 'kw-6', stem: 'Simplify 5a + 3b − 2a + 7b − 4 and explain each step. [3 marks]', marks: 3, keywords: ['3a', '10b', '−4'], modelAnswer: 'Collect a-terms: 5a − 2a = 3a. Collect b-terms: 3b + 7b = 10b. Constant: −4. Answer: 3a + 10b − 4.' },

    // ── Simplifying Algebraic Fractions ──
    { id: 'kw-7', stem: 'Explain the difference between a factor and a term when simplifying fractions. [2 marks]', marks: 2, keywords: ['multiplied', 'added or subtracted'], modelAnswer: 'A factor is something that is multiplied and can be cancelled. A term is something that is added or subtracted and cannot be cancelled from a fraction.' },
    { id: 'kw-8', stem: 'Explain why (x + 6) / 6 cannot be simplified to (x + 1). [2 marks]', marks: 2, keywords: ['added', 'not a factor'], modelAnswer: 'The 6 in (x + 6) is being added, not multiplied. Only common multiplicative factors can be cancelled, so this simplification is incorrect.' },
    { id: 'kw-9', stem: 'State the division index law for variables. [1 mark]', marks: 1, keywords: ['xᵐ ÷ xⁿ', 'm − n'], modelAnswer: 'xᵐ ÷ xⁿ = x^(m − n), where you subtract the exponents.' },
    { id: 'kw-10', stem: 'Describe two steps to simplify 12x⁵ / 4x². [2 marks]', marks: 2, keywords: ['cancel coefficients', 'cancel variable powers'], modelAnswer: 'Step 1: Cancel coefficients using HCF (12 ÷ 4 = 3). Step 2: Cancel variable powers using the index law (x⁵ ÷ x² = x³). Result: 3x³.' },
    { id: 'kw-11', stem: 'Explain how to simplify 3(x + 2) / (x + 2). [2 marks]', marks: 2, keywords: ['common factor', 'cancel', '(x + 2)'], modelAnswer: 'The bracket (x + 2) is a common factor in numerator and denominator. Cancel it to leave 3.' },
    { id: 'kw-12', stem: 'What does HCF stand for and how is it used when simplifying algebraic fractions? [2 marks]', marks: 2, keywords: ['highest common factor', 'divide numerator and denominator'], modelAnswer: 'HCF stands for Highest Common Factor. To simplify, divide both the numerator and denominator by their HCF.' },
  ],

  /* ───────────────────── FLASHCARDS (~25) ───────────────────── */
  flashcards: [
    // ── Collecting Like Terms ──
    { id: 'fc-1', front: 'What are like terms?', back: 'Terms with the same variable(s) raised to the same power(s).', topic: 'Collecting like terms' },
    { id: 'fc-2', front: 'Are 3x and 5x like terms?', back: 'Yes — both have variable x to the power 1.', topic: 'Collecting like terms' },
    { id: 'fc-3', front: 'Are 3x and 3x² like terms?', back: 'No — they have different powers of x (x¹ ≠ x²).', topic: 'Collecting like terms' },
    { id: 'fc-4', front: 'Simplify: 3x + 5x', back: '8x', topic: 'Collecting like terms' },
    { id: 'fc-5', front: 'Simplify: 9a − a', back: '8a (remember a = 1a)', topic: 'Collecting like terms' },
    { id: 'fc-6', front: 'Simplify: 5x + 3 − 2x + 8', back: '3x + 11', topic: 'Collecting like terms' },
    { id: 'fc-7', front: 'Can you add 3x² + 5x?', back: 'No — they are unlike terms (different powers).', topic: 'Collecting like terms' },
    { id: 'fc-8', front: 'Simplify: 2x² + 3x − x² + 4x − 5', back: 'x² + 7x − 5', topic: 'Collecting like terms' },
    { id: 'fc-9', front: 'Simplify: 5a + 3b − 2a + 7b − 4', back: '3a + 10b − 4', topic: 'Collecting like terms' },
    { id: 'fc-10', front: 'Are 4ab and 4ba like terms?', back: 'Yes — ab = ba (multiplication is commutative).', topic: 'Collecting like terms' },
    { id: 'fc-11', front: 'Simplify: −3p + 8p', back: '5p', topic: 'Collecting like terms' },
    { id: 'fc-12', front: 'What is the coefficient of x in the term x?', back: '1 (because x = 1x).', topic: 'Collecting like terms' },
    { id: 'fc-13', front: 'Simplify: 6m − 3n + 2m + n', back: '8m − 2n', topic: 'Collecting like terms' },

    // ── Simplifying Algebraic Fractions ──
    { id: 'fc-14', front: 'Simplify: 6x ÷ 3', back: '2x', topic: 'Simplifying algebraic fractions' },
    { id: 'fc-15', front: 'Simplify: 8y / 12', back: '2y/3', topic: 'Simplifying algebraic fractions' },
    { id: 'fc-16', front: 'Simplify: x² / x', back: 'x (using x²⁻¹ = x)', topic: 'Simplifying algebraic fractions' },
    { id: 'fc-17', front: 'State the division index law.', back: 'xᵐ ÷ xⁿ = x^(m − n)', topic: 'Simplifying algebraic fractions' },
    { id: 'fc-18', front: 'Simplify: 12x⁵ / 4x²', back: '3x³', topic: 'Simplifying algebraic fractions' },
    { id: 'fc-19', front: 'Simplify: 6a³b² / 3ab', back: '2a²b', topic: 'Simplifying algebraic fractions' },
    { id: 'fc-20', front: 'Simplify: 3(x + 2) / (x + 2)', back: '3 — cancel the common factor (x + 2).', topic: 'Simplifying algebraic fractions' },
    { id: 'fc-21', front: 'Can you cancel the 6 in (x + 6) / 6?', back: 'No — the 6 is added, not a factor. Only factors can be cancelled.', topic: 'Simplifying algebraic fractions' },
    { id: 'fc-22', front: 'What does HCF stand for?', back: 'Highest Common Factor.', topic: 'Simplifying algebraic fractions' },
    { id: 'fc-23', front: 'Simplify: (x + 5)(x − 1) / (x + 5)', back: 'x − 1', topic: 'Simplifying algebraic fractions' },
    { id: 'fc-24', front: 'Simplify: 20ab / 10a', back: '2b', topic: 'Simplifying algebraic fractions' },
    { id: 'fc-25', front: 'What is x⁵ ÷ x³?', back: 'x² (subtract powers: 5 − 3 = 2)', topic: 'Simplifying algebraic fractions' },
  ],

};
