export const exercises_olevel_maths_core_2_9 = {

  mcq: [
    // ── Basic one-step rearrangements ──
    { id: 'mcq-1', stem: 'Make u the subject of v = u + at.', options: ['u = v + at', 'u = v − at', 'u = at − v', 'u = v ÷ at'], correctAnswer: 1, rationale: 'Subtract at from both sides: u = v − at.', topic: 'Rearranging formulas' },
    { id: 'mcq-2', stem: 'Make b the subject of a = b − c.', options: ['b = a − c', 'b = c − a', 'b = a + c', 'b = ac'], correctAnswer: 2, rationale: 'Add c to both sides: b = a + c.', topic: 'Rearranging formulas' },
    { id: 'mcq-3', stem: 'Make x the subject of y = 3x.', options: ['x = 3y', 'x = y − 3', 'x = y ÷ 3', 'x = y + 3'], correctAnswer: 2, rationale: 'Divide both sides by 3: x = y ÷ 3.', topic: 'Rearranging formulas' },
    { id: 'mcq-4', stem: 'Make r the subject of C = 2πr.', options: ['r = 2πC', 'r = C ÷ (2π)', 'r = C − 2π', 'r = 2C ÷ π'], correctAnswer: 1, rationale: 'Divide both sides by 2π: r = C ÷ (2π).', topic: 'Rearranging formulas' },
    { id: 'mcq-5', stem: 'Make m the subject of F = ma.', options: ['m = Fa', 'm = a ÷ F', 'm = F ÷ a', 'm = F − a'], correctAnswer: 2, rationale: 'Divide both sides by a: m = F ÷ a.', topic: 'Rearranging formulas' },

    // ── Two-step rearrangements ──
    { id: 'mcq-6', stem: 'Make t the subject of v = u + at.', options: ['t = (v − u) ÷ a', 't = v − u − a', 't = (v + u) ÷ a', 't = a(v − u)'], correctAnswer: 0, rationale: 'Subtract u: v − u = at. Divide by a: t = (v − u) ÷ a.', topic: 'Rearranging formulas' },
    { id: 'mcq-7', stem: 'Make x the subject of y = 5x − 2.', options: ['x = (y − 2) ÷ 5', 'x = (y + 2) ÷ 5', 'x = 5(y + 2)', 'x = 5y + 2'], correctAnswer: 1, rationale: 'Add 2: y + 2 = 5x. Divide by 5: x = (y + 2) ÷ 5.', topic: 'Rearranging formulas' },
    { id: 'mcq-8', stem: 'Make a the subject of s = ½at².', options: ['a = 2s ÷ t²', 'a = s ÷ (2t²)', 'a = st² ÷ 2', 'a = 2st²'], correctAnswer: 0, rationale: 'Multiply by 2: 2s = at². Divide by t²: a = 2s ÷ t².', topic: 'Rearranging formulas' },
    { id: 'mcq-9', stem: 'Make w the subject of P = 2l + 2w.', options: ['w = (P + 2l) ÷ 2', 'w = P − 2l', 'w = (P − 2l) ÷ 2', 'w = 2P − l'], correctAnswer: 2, rationale: 'Subtract 2l: P − 2l = 2w. Divide by 2: w = (P − 2l) ÷ 2.', topic: 'Rearranging formulas' },
    { id: 'mcq-10', stem: 'Make c the subject of a = 3c + 7.', options: ['c = (a + 7) ÷ 3', 'c = (a − 7) ÷ 3', 'c = 3a − 7', 'c = a ÷ 3 − 7'], correctAnswer: 1, rationale: 'Subtract 7: a − 7 = 3c. Divide by 3: c = (a − 7) ÷ 3.', topic: 'Rearranging formulas' },

    // ── Rearranging with squares ──
    { id: 'mcq-11', stem: 'Make r the subject of A = πr².', options: ['r = A ÷ π', 'r = √(A ÷ π)', 'r = √A ÷ π', 'r = (A − π)²'], correctAnswer: 1, rationale: 'Divide by π: A ÷ π = r². Square root: r = √(A ÷ π).', topic: 'Rearranging formulas' },
    { id: 'mcq-12', stem: 'Make v the subject of E = ½mv².', options: ['v = √(2E ÷ m)', 'v = 2E ÷ m', 'v = √(E ÷ 2m)', 'v = E ÷ (2m)'], correctAnswer: 0, rationale: 'Multiply by 2: 2E = mv². Divide by m: v² = 2E ÷ m. Square root: v = √(2E ÷ m).', topic: 'Rearranging formulas' },
    { id: 'mcq-13', stem: 'Make l the subject of T = 2π√(l ÷ g). Which first step is correct?', options: ['Subtract 2π', 'Divide by 2π', 'Square both sides', 'Divide by g'], correctAnswer: 1, rationale: 'The outermost operation on l is multiplication by 2π, so divide both sides by 2π first, then square.', topic: 'Rearranging formulas' },
    { id: 'mcq-14', stem: 'Make a the subject of v² = u² + 2as.', options: ['a = (v² + u²) ÷ (2s)', 'a = (v² − u²) × 2s', 'a = (v² − u²) ÷ (2s)', 'a = v² ÷ (2su²)'], correctAnswer: 2, rationale: 'Subtract u²: v² − u² = 2as. Divide by 2s: a = (v² − u²) ÷ (2s).', topic: 'Rearranging formulas' },
    { id: 'mcq-15', stem: 'Make h the subject of V = πr²h.', options: ['h = V − πr²', 'h = Vπr²', 'h = V ÷ (πr²)', 'h = πV ÷ r²'], correctAnswer: 2, rationale: 'Divide both sides by πr²: h = V ÷ (πr²).', topic: 'Rearranging formulas' },

    // ── Rearranging with square roots ──
    { id: 'mcq-16', stem: 'Make x the subject of y = √(x − 3).', options: ['x = y² − 3', 'x = y² + 3', 'x = (y − 3)²', 'x = √(y + 3)'], correctAnswer: 1, rationale: 'Square both sides: y² = x − 3. Add 3: x = y² + 3.', topic: 'Rearranging formulas' },
    { id: 'mcq-17', stem: 'Make p the subject of q = √(2p).', options: ['p = q² ÷ 2', 'p = 2q²', 'p = (q ÷ 2)²', 'p = √(2q)'], correctAnswer: 0, rationale: 'Square both sides: q² = 2p. Divide by 2: p = q² ÷ 2.', topic: 'Rearranging formulas' },
    { id: 'mcq-18', stem: 'What operation undoes a square root when rearranging?', options: ['Dividing by 2', 'Taking the square root again', 'Squaring both sides', 'Multiplying by 2'], correctAnswer: 2, rationale: 'The inverse of √ is squaring. Square both sides to remove the square root.', topic: 'Rearranging formulas' },

    // ── Variable in the denominator ──
    { id: 'mcq-19', stem: 'Make t the subject of s = d ÷ t.', options: ['t = s ÷ d', 't = sd', 't = d ÷ s', 't = d − s'], correctAnswer: 2, rationale: 'Multiply by t: st = d. Divide by s: t = d ÷ s.', topic: 'Rearranging formulas' },
    { id: 'mcq-20', stem: 'Make x the subject of y = 10 ÷ x.', options: ['x = y ÷ 10', 'x = 10y', 'x = 10 ÷ y', 'x = 10 − y'], correctAnswer: 2, rationale: 'Multiply by x: xy = 10. Divide by y: x = 10 ÷ y.', topic: 'Rearranging formulas' },
    { id: 'mcq-21', stem: 'When the variable you want is in the denominator, what should you do first?', options: ['Divide both sides by it', 'Subtract it from both sides', 'Multiply both sides by it', 'Square both sides'], correctAnswer: 2, rationale: 'Multiply both sides by the variable to remove it from the denominator.', topic: 'Rearranging formulas' },

    // ── Inverse operations knowledge ──
    { id: 'mcq-22', stem: 'What is the inverse operation of adding 5?', options: ['Add 5 again', 'Multiply by 5', 'Subtract 5', 'Divide by 5'], correctAnswer: 2, rationale: 'The inverse of +5 is −5.', topic: 'Rearranging formulas' },
    { id: 'mcq-23', stem: 'What is the inverse operation of squaring?', options: ['Halving', 'Dividing by 2', 'Cubing', 'Taking the square root'], correctAnswer: 3, rationale: 'The inverse of x² is √x.', topic: 'Rearranging formulas' },
    { id: 'mcq-24', stem: 'What is the inverse operation of multiplying by −4?', options: ['Subtracting 4', 'Adding 4', 'Dividing by −4', 'Multiplying by 4'], correctAnswer: 2, rationale: 'The inverse of ×(−4) is ÷(−4).', topic: 'Rearranging formulas' },

    // ── Common mistakes ──
    { id: 'mcq-25', stem: 'A student writes "If A = πr² then r = √A ÷ π." What is wrong?', options: ['Nothing — the answer is correct', 'They should divide by π first, then square root the whole result', 'They should subtract π instead', 'They should cube root instead'], correctAnswer: 1, rationale: 'You must divide A by π first, giving r² = A ÷ π, then r = √(A ÷ π). The square root applies to the whole fraction.', topic: 'Rearranging formulas' },
    { id: 'mcq-26', stem: 'Make n the subject of m = 4n − 1. A student says n = m − 1 ÷ 4. What is the correct answer?', options: ['n = (m − 1) ÷ 4', 'n = (m + 1) ÷ 4', 'n = 4(m + 1)', 'n = 4m + 1'], correctAnswer: 1, rationale: 'Add 1 first: m + 1 = 4n. Divide by 4: n = (m + 1) ÷ 4. The student forgot to add 1 and missed brackets.', topic: 'Rearranging formulas' },

    // ── Mixed / applied ──
    { id: 'mcq-27', stem: 'The formula for speed is s = d ÷ t. Make d the subject.', options: ['d = s ÷ t', 'd = t ÷ s', 'd = st', 'd = s + t'], correctAnswer: 2, rationale: 'Multiply both sides by t: d = st.', topic: 'Rearranging formulas' },
    { id: 'mcq-28', stem: 'Make b the subject of A = ½bh.', options: ['b = 2A ÷ h', 'b = A ÷ (2h)', 'b = Ah ÷ 2', 'b = 2Ah'], correctAnswer: 0, rationale: 'Multiply by 2: 2A = bh. Divide by h: b = 2A ÷ h.', topic: 'Rearranging formulas' },
    { id: 'mcq-29', stem: 'Make g the subject of T = 2π√(l ÷ g). After dividing by 2π and squaring, you get T² ÷ (4π²) = l ÷ g. What is the next step?', options: ['Multiply by g', 'Divide by l', 'Subtract l', 'Square root both sides'], correctAnswer: 0, rationale: 'Multiply both sides by g to get g × T² ÷ (4π²) = l, then rearrange for g.', topic: 'Rearranging formulas' },
    { id: 'mcq-30', stem: 'Make y the subject of x = (y + 3) ÷ 2.', options: ['y = 2x + 3', 'y = 2x − 3', 'y = x ÷ 2 − 3', 'y = (x − 3) × 2'], correctAnswer: 1, rationale: 'Multiply by 2: 2x = y + 3. Subtract 3: y = 2x − 3.', topic: 'Rearranging formulas' },
  ],

  fillblank: [
    { id: 'fb-1', stem: 'The subject of a formula is the variable on its own on ___ side of the equation.', template: 'The subject is alone on __BLANK__ side', blanks: [{ answer: 'one' }], rationale: 'The subject is the variable that appears by itself on one side of the equals sign.' },
    { id: 'fb-2', stem: 'To change the subject, we use ___ operations.', template: 'We use __BLANK__ operations to rearrange', blanks: [{ answer: 'inverse' }], rationale: 'Inverse operations undo what has been done to the variable (e.g. + ↔ −, × ↔ ÷).' },
    { id: 'fb-3', stem: 'The inverse of squaring is taking the ___.', template: 'The inverse of x² is __BLANK__', blanks: [{ answer: 'square root' }], rationale: 'x² ↔ √x. Taking the square root undoes squaring.' },
    { id: 'fb-4', stem: 'Make u the subject: v = u + at → u = ___.', template: 'u = __BLANK__', blanks: [{ answer: 'v − at' }], rationale: 'Subtract at from both sides: u = v − at.' },
    { id: 'fb-5', stem: 'Make x the subject: y = 3x + 7 → x = (y − 7) ÷ ___.', template: 'x = (y − 7) ÷ __BLANK__', blanks: [{ answer: '3' }], rationale: 'Subtract 7: y − 7 = 3x. Divide by 3.' },
    { id: 'fb-6', stem: 'Make r the subject: A = πr² → r = √(___ ÷ π).', template: 'r = √(__BLANK__ ÷ π)', blanks: [{ answer: 'A' }], rationale: 'Divide by π: r² = A ÷ π. Square root: r = √(A ÷ π).' },
    { id: 'fb-7', stem: 'Make t the subject: s = d ÷ t → first multiply both sides by ___.', template: 'First multiply both sides by __BLANK__', blanks: [{ answer: 't' }], rationale: 'To clear the denominator, multiply both sides by t: st = d.' },
    { id: 'fb-8', stem: 'Make b the subject: A = ½bh → b = 2A ÷ ___.', template: 'b = 2A ÷ __BLANK__', blanks: [{ answer: 'h' }], rationale: 'Multiply by 2: 2A = bh. Divide by h: b = 2A ÷ h.' },
    { id: 'fb-9', stem: 'The inverse of multiplying by 5 is ___ by 5.', template: 'The inverse of ×5 is __BLANK__ by 5', blanks: [{ answer: 'dividing' }], rationale: '× ↔ ÷. The inverse of ×5 is ÷5.' },
    { id: 'fb-10', stem: 'Make x the subject: y = √(x + 1) → first ___ both sides.', template: 'First __BLANK__ both sides', blanks: [{ answer: 'square' }], rationale: 'The inverse of √ is squaring. Square both sides: y² = x + 1.' },
    { id: 'fb-11', stem: 'Make w the subject: P = 2(l + w) → P ÷ 2 = l + w → w = P ÷ 2 − ___.', template: 'w = P ÷ 2 − __BLANK__', blanks: [{ answer: 'l' }], rationale: 'Divide by 2, then subtract l: w = P ÷ 2 − l.' },
    { id: 'fb-12', stem: 'When rearranging, you must apply each operation to ___ sides of the equation.', template: 'Apply to __BLANK__ sides of the equation', blanks: [{ answer: 'both' }], rationale: 'The equation stays balanced only if you do the same thing to both sides.' },
    { id: 'fb-13', stem: 'Make d the subject: s = d ÷ t → d = ___.', template: 'd = __BLANK__', blanks: [{ answer: 'st' }], rationale: 'Multiply both sides by t: d = st.' },
    { id: 'fb-14', stem: 'Make h the subject: V = πr²h → h = V ÷ ___.', template: 'h = V ÷ __BLANK__', blanks: [{ answer: 'πr²' }], rationale: 'Divide both sides by πr²: h = V ÷ (πr²).' },
    { id: 'fb-15', stem: 'In the exam, write each step on a new line with an ___ sign.', template: 'Show each step with an __BLANK__ sign', blanks: [{ answer: 'equals' }], rationale: 'Examiners award method marks for clear working with equals signs on every line.' },
  ],

  dragdrop: [
    {
      id: 'dd-1',
      stem: 'Sort each operation with its inverse.',
      categories: ['Add ↔ Subtract', 'Multiply ↔ Divide', 'Square ↔ Square root'],
      items: [
        { text: '+ 5 undone by − 5', category: 'Add ↔ Subtract' },
        { text: '× 3 undone by ÷ 3', category: 'Multiply ↔ Divide' },
        { text: 'x² undone by √x', category: 'Square ↔ Square root' },
        { text: '− 7 undone by + 7', category: 'Add ↔ Subtract' },
        { text: '÷ 4 undone by × 4', category: 'Multiply ↔ Divide' },
        { text: '√x undone by x²', category: 'Square ↔ Square root' },
      ],
    },
    {
      id: 'dd-2',
      stem: 'Sort each formula by how many steps are needed to make x the subject.',
      categories: ['One step', 'Two steps'],
      items: [
        { text: 'y = x + 3', category: 'One step' },
        { text: 'y = 5x − 1', category: 'Two steps' },
        { text: 'y = x ÷ 4', category: 'One step' },
        { text: 'y = 2x + 7', category: 'Two steps' },
        { text: 'y = x − 9', category: 'One step' },
        { text: 'y = (x + 3) ÷ 2', category: 'Two steps' },
      ],
    },
    {
      id: 'dd-3',
      stem: 'Match each formula to the correct rearranged form for the given subject.',
      categories: ['r = C ÷ (2π)', 'b = 2A ÷ h', 't = (v − u) ÷ a', 'm = F ÷ a'],
      items: [
        { text: 'C = 2πr → make r subject', category: 'r = C ÷ (2π)' },
        { text: 'A = ½bh → make b subject', category: 'b = 2A ÷ h' },
        { text: 'v = u + at → make t subject', category: 't = (v − u) ÷ a' },
        { text: 'F = ma → make m subject', category: 'm = F ÷ a' },
      ],
    },
    {
      id: 'dd-4',
      stem: 'Sort each rearrangement by the type of inverse operation needed first.',
      categories: ['Undo addition/subtraction first', 'Undo multiplication/division first'],
      items: [
        { text: 'y = 3x + 2 → make x subject', category: 'Undo addition/subtraction first' },
        { text: 'y = 5x → make x subject', category: 'Undo multiplication/division first' },
        { text: 'y = x − 8 → make x subject', category: 'Undo addition/subtraction first' },
        { text: 'y = x ÷ 7 → make x subject', category: 'Undo multiplication/division first' },
        { text: 'v = u + at → make u subject', category: 'Undo addition/subtraction first' },
        { text: 'A = πr² → make r subject', category: 'Undo multiplication/division first' },
      ],
    },
    {
      id: 'dd-5',
      stem: 'Classify each formula by whether the subject involves a square root or not.',
      categories: ['Subject involves √', 'Subject does not involve √'],
      items: [
        { text: 'A = πr² → r = √(A ÷ π)', category: 'Subject involves √' },
        { text: 'F = ma → m = F ÷ a', category: 'Subject does not involve √' },
        { text: 'E = ½mv² → v = √(2E ÷ m)', category: 'Subject involves √' },
        { text: 'P = 2l + 2w → w = (P − 2l) ÷ 2', category: 'Subject does not involve √' },
        { text: 'y = √(x − 1) → x = y² + 1', category: 'Subject does not involve √' },
        { text: 'V = 4πr³ ÷ 3 → r involves cube root', category: 'Subject involves √' },
      ],
    },
    {
      id: 'dd-6',
      stem: 'Sort the first step needed when making x the subject of each formula.',
      categories: ['Multiply both sides', 'Subtract from both sides', 'Square both sides'],
      items: [
        { text: 'y = x ÷ 5 → multiply by 5', category: 'Multiply both sides' },
        { text: 'y = x + 4 → subtract 4', category: 'Subtract from both sides' },
        { text: 'y = √x → square both sides', category: 'Square both sides' },
        { text: 'y = 3 ÷ x → multiply by x', category: 'Multiply both sides' },
        { text: 'y = √(x + 2) → square both sides', category: 'Square both sides' },
        { text: 'y = x + 10 → subtract 10', category: 'Subtract from both sides' },
      ],
    },
    {
      id: 'dd-7',
      stem: 'Match the common mistake with the correct version.',
      categories: ['Correct', 'Incorrect'],
      items: [
        { text: 'A = πr² → r = √(A ÷ π)', category: 'Correct' },
        { text: 'A = πr² → r = √A ÷ π', category: 'Incorrect' },
        { text: 'y = 4x − 1 → x = (y + 1) ÷ 4', category: 'Correct' },
        { text: 'y = 4x − 1 → x = y ÷ 4 + 1', category: 'Incorrect' },
      ],
    },
    {
      id: 'dd-8',
      stem: 'Sort each formula by whether it involves a variable in the denominator.',
      categories: ['Variable in denominator', 'No variable in denominator'],
      items: [
        { text: 's = d ÷ t (make t subject)', category: 'Variable in denominator' },
        { text: 'y = 2x + 1 (make x subject)', category: 'No variable in denominator' },
        { text: 'y = 10 ÷ x (make x subject)', category: 'Variable in denominator' },
        { text: 'A = πr² (make r subject)', category: 'No variable in denominator' },
        { text: 'v = d ÷ t (make t subject)', category: 'Variable in denominator' },
        { text: 'v = u + at (make t subject)', category: 'No variable in denominator' },
      ],
    },
    {
      id: 'dd-9',
      stem: 'Match each rearranged formula to the original.',
      categories: ['v = u + at', 'A = πr²', 's = d ÷ t', 'E = ½mv²'],
      items: [
        { text: 't = (v − u) ÷ a', category: 'v = u + at' },
        { text: 'r = √(A ÷ π)', category: 'A = πr²' },
        { text: 't = d ÷ s', category: 's = d ÷ t' },
        { text: 'v = √(2E ÷ m)', category: 'E = ½mv²' },
      ],
    },
    {
      id: 'dd-10',
      stem: 'Classify whether each step shows a correct or incorrect rearrangement.',
      categories: ['Correct step', 'Incorrect step'],
      items: [
        { text: 'From y = 3x: divide by 3 → x = y ÷ 3', category: 'Correct step' },
        { text: 'From y = 3x: subtract 3 → x = y − 3', category: 'Incorrect step' },
        { text: 'From y = x + 4: subtract 4 → x = y − 4', category: 'Correct step' },
        { text: 'From y = x + 4: divide by 4 → x = y ÷ 4', category: 'Incorrect step' },
        { text: 'From y² = x: square root → x = y', category: 'Incorrect step' },
        { text: 'From y = x²: square root → x = √y', category: 'Correct step' },
      ],
    },
  ],

  sequence: [
    {
      id: 'seq-1',
      stem: 'Put the steps in order to make t the subject of v = u + at.',
      steps: ['Start with v = u + at', 'Subtract u from both sides: v − u = at', 'Divide both sides by a', 'Write t = (v − u) ÷ a'],
    },
    {
      id: 'seq-2',
      stem: 'Put the steps in order to make r the subject of A = πr².',
      steps: ['Start with A = πr²', 'Divide both sides by π: A ÷ π = r²', 'Take the square root of both sides', 'Write r = √(A ÷ π)'],
    },
    {
      id: 'seq-3',
      stem: 'Put the steps in order to make x the subject of y = √(x − 3).',
      steps: ['Start with y = √(x − 3)', 'Square both sides: y² = x − 3', 'Add 3 to both sides', 'Write x = y² + 3'],
    },
    {
      id: 'seq-4',
      stem: 'Put the steps in order to make t the subject of s = d ÷ t.',
      steps: ['Start with s = d ÷ t', 'Multiply both sides by t: st = d', 'Divide both sides by s', 'Write t = d ÷ s'],
    },
    {
      id: 'seq-5',
      stem: 'Put the steps in order to make b the subject of A = ½bh.',
      steps: ['Start with A = ½bh', 'Multiply both sides by 2: 2A = bh', 'Divide both sides by h', 'Write b = 2A ÷ h'],
    },
    {
      id: 'seq-6',
      stem: 'Put the steps in order to make v the subject of E = ½mv².',
      steps: ['Start with E = ½mv²', 'Multiply both sides by 2: 2E = mv²', 'Divide both sides by m: v² = 2E ÷ m', 'Take the square root: v = √(2E ÷ m)'],
    },
    {
      id: 'seq-7',
      stem: 'Put the steps in order to make w the subject of P = 2l + 2w.',
      steps: ['Start with P = 2l + 2w', 'Subtract 2l from both sides: P − 2l = 2w', 'Divide both sides by 2', 'Write w = (P − 2l) ÷ 2'],
    },
    {
      id: 'seq-8',
      stem: 'Put the steps in order to make a the subject of v² = u² + 2as.',
      steps: ['Start with v² = u² + 2as', 'Subtract u² from both sides: v² − u² = 2as', 'Divide both sides by 2s', 'Write a = (v² − u²) ÷ (2s)'],
    },
  ],

  keyword: [
    { id: 'kw-1', stem: 'What does it mean to "change the subject" of a formula? [2 marks]', marks: 2, keywords: ['isolate', 'variable', 'one side'], modelAnswer: 'Changing the subject means rearranging the formula to isolate a chosen variable on one side of the equation.' },
    { id: 'kw-2', stem: 'What is an inverse operation? Give one example. [2 marks]', marks: 2, keywords: ['undoes', 'reverse', 'opposite'], modelAnswer: 'An inverse operation undoes or reverses its pair. For example, subtraction is the inverse of addition.' },
    { id: 'kw-3', stem: 'Make t the subject of v = u + at. Show your working. [2 marks]', marks: 2, keywords: ['subtract u', 'divide', 'a'], modelAnswer: 'Subtract u from both sides: v − u = at. Divide by a: t = (v − u) ÷ a.' },
    { id: 'kw-4', stem: 'Make r the subject of A = πr². Show your working. [3 marks]', marks: 3, keywords: ['divide', 'π', 'square root'], modelAnswer: 'Divide both sides by π: A ÷ π = r². Take the square root: r = √(A ÷ π).' },
    { id: 'kw-5', stem: 'Explain why you must divide by π before taking the square root when rearranging A = πr². [2 marks]', marks: 2, keywords: ['whole expression', 'both sides', 'before'], modelAnswer: 'You must divide by π first so the square root is applied to the whole expression A ÷ π, not just A.' },
    { id: 'kw-6', stem: 'Make x the subject of y = √(x + 5). Show your working. [2 marks]', marks: 2, keywords: ['square', 'both sides', 'subtract 5'], modelAnswer: 'Square both sides: y² = x + 5. Subtract 5: x = y² − 5.' },
    { id: 'kw-7', stem: 'Explain what the first step should be when the variable you want is in the denominator. [1 mark]', marks: 1, keywords: ['multiply'], modelAnswer: 'Multiply both sides by the variable in the denominator to clear the fraction.' },
    { id: 'kw-8', stem: 'Make t the subject of s = d ÷ t. Show your working. [2 marks]', marks: 2, keywords: ['multiply', 't', 'divide', 's'], modelAnswer: 'Multiply both sides by t: st = d. Divide both sides by s: t = d ÷ s.' },
    { id: 'kw-9', stem: 'Why is it important to show equals signs on every line when rearranging? [1 mark]', marks: 1, keywords: ['method marks', 'working'], modelAnswer: 'Each line of working with an equals sign earns method marks in the exam.' },
    { id: 'kw-10', stem: 'State the four inverse pairs used in rearranging formulas. [2 marks]', marks: 2, keywords: ['add', 'subtract', 'multiply', 'divide', 'square', 'root'], modelAnswer: 'Add ↔ subtract, multiply ↔ divide, square ↔ square root, cube ↔ cube root.' },
    { id: 'kw-11', stem: 'Make w the subject of P = 2(l + w). Show your working. [2 marks]', marks: 2, keywords: ['divide', '2', 'subtract', 'l'], modelAnswer: 'Divide both sides by 2: P ÷ 2 = l + w. Subtract l: w = P ÷ 2 − l.' },
    { id: 'kw-12', stem: 'Describe the general strategy for changing the subject of a formula. [2 marks]', marks: 2, keywords: ['inverse', 'operations', 'both sides', 'isolate'], modelAnswer: 'Identify what is being done to the variable, then apply inverse operations to both sides, working from the outermost operation inward, until the variable is isolated.' },
  ],

  flashcards: [
    { id: 'fc-1', front: 'What does "subject of a formula" mean?', back: 'The variable that is on its own on one side of the equation.', topic: 'Rearranging formulas' },
    { id: 'fc-2', front: 'What strategy do you use to change the subject?', back: 'Use inverse operations applied to both sides, working from the outermost operation inward.', topic: 'Rearranging formulas' },
    { id: 'fc-3', front: 'What is the inverse of addition?', back: 'Subtraction.', topic: 'Rearranging formulas' },
    { id: 'fc-4', front: 'What is the inverse of multiplication?', back: 'Division.', topic: 'Rearranging formulas' },
    { id: 'fc-5', front: 'What is the inverse of squaring (x²)?', back: 'Taking the square root (√x).', topic: 'Rearranging formulas' },
    { id: 'fc-6', front: 'Make u the subject: v = u + at', back: 'Subtract at: u = v − at', topic: 'Rearranging formulas' },
    { id: 'fc-7', front: 'Make t the subject: v = u + at', back: 'Subtract u: v − u = at. Divide by a: t = (v − u) ÷ a', topic: 'Rearranging formulas' },
    { id: 'fc-8', front: 'Make r the subject: C = 2πr', back: 'Divide by 2π: r = C ÷ (2π)', topic: 'Rearranging formulas' },
    { id: 'fc-9', front: 'Make m the subject: F = ma', back: 'Divide by a: m = F ÷ a', topic: 'Rearranging formulas' },
    { id: 'fc-10', front: 'Make r the subject: A = πr²', back: 'Divide by π: r² = A ÷ π. Square root: r = √(A ÷ π)', topic: 'Rearranging formulas' },
    { id: 'fc-11', front: 'Make x the subject: y = √(x − 3)', back: 'Square both sides: y² = x − 3. Add 3: x = y² + 3', topic: 'Rearranging formulas' },
    { id: 'fc-12', front: 'Make a the subject: v² = u² + 2as', back: 'Subtract u²: v² − u² = 2as. Divide by 2s: a = (v² − u²) ÷ (2s)', topic: 'Rearranging formulas' },
    { id: 'fc-13', front: 'Make t the subject: s = d ÷ t', back: 'Multiply by t: st = d. Divide by s: t = d ÷ s', topic: 'Rearranging formulas' },
    { id: 'fc-14', front: 'Make x the subject: y = 10 ÷ x', back: 'Multiply by x: xy = 10. Divide by y: x = 10 ÷ y', topic: 'Rearranging formulas' },
    { id: 'fc-15', front: 'Make b the subject: A = ½bh', back: 'Multiply by 2: 2A = bh. Divide by h: b = 2A ÷ h', topic: 'Rearranging formulas' },
    { id: 'fc-16', front: 'Make h the subject: V = πr²h', back: 'Divide by πr²: h = V ÷ (πr²)', topic: 'Rearranging formulas' },
    { id: 'fc-17', front: 'Make v the subject: E = ½mv²', back: 'Multiply by 2: 2E = mv². Divide by m: v² = 2E ÷ m. Square root: v = √(2E ÷ m)', topic: 'Rearranging formulas' },
    { id: 'fc-18', front: 'Make w the subject: P = 2l + 2w', back: 'Subtract 2l: P − 2l = 2w. Divide by 2: w = (P − 2l) ÷ 2', topic: 'Rearranging formulas' },
    { id: 'fc-19', front: 'What is the common mistake when rearranging A = πr²?', back: 'Writing r = √A ÷ π instead of r = √(A ÷ π). You must divide by π first, then square root the entire result.', topic: 'Rearranging formulas' },
    { id: 'fc-20', front: 'What should you do when the variable is in the denominator?', back: 'Multiply both sides by that variable first to clear the fraction.', topic: 'Rearranging formulas' },
    { id: 'fc-21', front: 'Why show equals signs on every line?', back: 'Each line with an equals sign earns method marks in the exam.', topic: 'Rearranging formulas' },
    { id: 'fc-22', front: 'Make x the subject: y = 5x − 2', back: 'Add 2: y + 2 = 5x. Divide by 5: x = (y + 2) ÷ 5', topic: 'Rearranging formulas' },
    { id: 'fc-23', front: 'Make d the subject: s = d ÷ t', back: 'Multiply by t: d = st', topic: 'Rearranging formulas' },
    { id: 'fc-24', front: 'Make y the subject: x = (y + 3) ÷ 2', back: 'Multiply by 2: 2x = y + 3. Subtract 3: y = 2x − 3', topic: 'Rearranging formulas' },
    { id: 'fc-25', front: 'What direction do you undo operations when rearranging?', back: 'From the outermost operation inward — reverse of the order of operations (reverse BIDMAS).', topic: 'Rearranging formulas' },
  ],

};
