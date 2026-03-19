export const exercises_olevel_maths_core_6_2 = {

  mcq: [
    // ── Trigonometric ratios — labelling and definitions ──
    { id: 'mcq-1', stem: 'In a right-angled triangle, the side opposite the right angle is called the:', options: ['Opposite', 'Adjacent', 'Hypotenuse', 'Base'], correctAnswer: 2, rationale: 'The hypotenuse is always the longest side and is opposite the right angle.', topic: 'Trigonometric ratios' },
    { id: 'mcq-2', stem: 'What does the mnemonic SOH CAH TOA stand for?', options: ['Sin = Opp/Hyp, Cos = Adj/Hyp, Tan = Opp/Adj', 'Sin = Adj/Hyp, Cos = Opp/Hyp, Tan = Opp/Adj', 'Sin = Opp/Adj, Cos = Adj/Hyp, Tan = Opp/Hyp', 'Sin = Hyp/Opp, Cos = Hyp/Adj, Tan = Adj/Opp'], correctAnswer: 0, rationale: 'SOH → Sin = Opposite ÷ Hypotenuse. CAH → Cos = Adjacent ÷ Hypotenuse. TOA → Tan = Opposite ÷ Adjacent.', topic: 'Trigonometric ratios' },
    { id: 'mcq-3', stem: 'Which ratio uses the opposite and hypotenuse?', options: ['cos θ', 'tan θ', 'sin θ', 'None of these'], correctAnswer: 2, rationale: 'sin θ = opposite ÷ hypotenuse (SOH).', topic: 'Trigonometric ratios' },
    { id: 'mcq-4', stem: 'Which ratio uses the opposite and adjacent sides?', options: ['sin θ', 'cos θ', 'tan θ', 'sec θ'], correctAnswer: 2, rationale: 'tan θ = opposite ÷ adjacent (TOA).', topic: 'Trigonometric ratios' },
    { id: 'mcq-5', stem: 'In a right-angled triangle with angle θ, the adjacent side is:', options: ['The longest side', 'Opposite the right angle', 'Next to angle θ (not the hypotenuse)', 'Always the vertical side'], correctAnswer: 2, rationale: 'The adjacent side is the one next to angle θ that is not the hypotenuse.', topic: 'Trigonometric ratios' },

    // ── Finding sides using trig ratios ──
    { id: 'mcq-6', stem: 'A right-angled triangle has θ = 30° and hypotenuse = 10 cm. What is the opposite side?', options: ['8.66 cm', '5 cm', '10 cm', '5.77 cm'], correctAnswer: 1, rationale: 'opposite = hypotenuse × sin 30° = 10 × 0.5 = 5 cm.', topic: 'Trigonometric ratios' },
    { id: 'mcq-7', stem: 'A right-angled triangle has θ = 40° and hypotenuse = 8 cm. What is the adjacent side (to 3 s.f.)?', options: ['5.14 cm', '6.13 cm', '5.00 cm', '7.66 cm'], correctAnswer: 1, rationale: 'adjacent = hypotenuse × cos 40° = 8 × 0.766 ≈ 6.13 cm.', topic: 'Trigonometric ratios' },
    { id: 'mcq-8', stem: 'A right-angled triangle has θ = 55° and adjacent = 7 cm. What is the opposite side (to 3 s.f.)?', options: ['5.73 cm', '8.54 cm', '10.0 cm', '4.02 cm'], correctAnswer: 2, rationale: 'opposite = adjacent × tan 55° = 7 × 1.428 ≈ 10.0 cm.', topic: 'Trigonometric ratios' },
    { id: 'mcq-9', stem: 'θ = 25° and the opposite side = 6 cm. What is the hypotenuse (to 3 s.f.)?', options: ['14.2 cm', '5.44 cm', '6.62 cm', '12.8 cm'], correctAnswer: 0, rationale: 'hypotenuse = opposite ÷ sin 25° = 6 ÷ 0.4226 ≈ 14.2 cm.', topic: 'Trigonometric ratios' },
    { id: 'mcq-10', stem: 'Which formula finds the hypotenuse when you know the adjacent and angle θ?', options: ['hyp = adj × cos θ', 'hyp = adj ÷ cos θ', 'hyp = adj × sin θ', 'hyp = adj ÷ tan θ'], correctAnswer: 1, rationale: 'cos θ = adj ÷ hyp, so hyp = adj ÷ cos θ.', topic: 'Trigonometric ratios' },
    { id: 'mcq-11', stem: 'A right-angled triangle has θ = 60° and opposite = 12 cm. What is the adjacent (to 3 s.f.)?', options: ['6.93 cm', '10.4 cm', '20.8 cm', '6.00 cm'], correctAnswer: 0, rationale: 'adjacent = opposite ÷ tan 60° = 12 ÷ 1.732 ≈ 6.93 cm.', topic: 'Trigonometric ratios' },
    { id: 'mcq-12', stem: 'A ladder leans against a wall at 70° to the ground. The ladder is 5 m long. How high up the wall does it reach (to 3 s.f.)?', options: ['1.71 m', '4.70 m', '5.32 m', '13.7 m'], correctAnswer: 1, rationale: 'The wall height is opposite, the ladder is the hypotenuse. opposite = 5 × sin 70° = 5 × 0.9397 ≈ 4.70 m.', topic: 'Trigonometric ratios' },

    // ── Finding angles using inverse trig ──
    { id: 'mcq-13', stem: 'Opposite = 6 cm, hypotenuse = 10 cm. What is angle θ (to 1 d.p.)?', options: ['53.1°', '30.0°', '36.9°', '60.0°'], correctAnswer: 2, rationale: 'sin θ = 6/10 = 0.6. θ = sin⁻¹(0.6) = 36.9°.', topic: 'Trigonometric ratios' },
    { id: 'mcq-14', stem: 'Adjacent = 9 cm, hypotenuse = 15 cm. What is angle θ (to 1 d.p.)?', options: ['36.9°', '53.1°', '45.0°', '60.0°'], correctAnswer: 1, rationale: 'cos θ = 9/15 = 0.6. θ = cos⁻¹(0.6) = 53.1°.', topic: 'Trigonometric ratios' },
    { id: 'mcq-15', stem: 'Opposite = 5 cm, adjacent = 12 cm. What is angle θ (to 1 d.p.)?', options: ['67.4°', '22.6°', '45.0°', '24.6°'], correctAnswer: 1, rationale: 'tan θ = 5/12 ≈ 0.4167. θ = tan⁻¹(0.4167) = 22.6°.', topic: 'Trigonometric ratios' },
    { id: 'mcq-16', stem: 'If sin θ = 0.5, what is θ?', options: ['60°', '45°', '30°', '90°'], correctAnswer: 2, rationale: 'θ = sin⁻¹(0.5) = 30°.', topic: 'Trigonometric ratios' },
    { id: 'mcq-17', stem: 'A right-angled triangle has legs 9 cm and 12 cm. What is the angle opposite the 9 cm side (to 1 d.p.)?', options: ['53.1°', '36.9°', '48.6°', '41.4°'], correctAnswer: 1, rationale: 'tan θ = 9/12 = 0.75. θ = tan⁻¹(0.75) = 36.9°.', topic: 'Trigonometric ratios' },
    { id: 'mcq-18', stem: 'In a right-angled triangle, one acute angle is 36.9°. What is the other acute angle?', options: ['36.9°', '143.1°', '53.1°', '63.1°'], correctAnswer: 2, rationale: 'The two acute angles in a right-angled triangle sum to 90°. 90° − 36.9° = 53.1°.', topic: 'Trigonometric ratios' },

    // ── Choosing the right method ──
    { id: 'mcq-19', stem: 'You know two sides and want a third side. No angles are given. Which method should you use?', options: ['sin ratio', 'cos ratio', 'tan ratio', 'Pythagoras\' theorem'], correctAnswer: 3, rationale: 'When you know two sides and need the third with no angles involved, use Pythagoras\' theorem.', topic: 'Trigonometric ratios' },
    { id: 'mcq-20', stem: 'You know one angle and one side and need another side. Which method should you use?', options: ['Pythagoras\' theorem', 'SOH CAH TOA', 'Angles in a triangle', 'Area formula'], correctAnswer: 1, rationale: 'When an angle and a side are known and you need another side, use trigonometry (SOH CAH TOA).', topic: 'Trigonometric ratios' },
    { id: 'mcq-21', stem: 'You know two sides and want an angle. Which should you use?', options: ['Pythagoras\' theorem', 'SOH CAH TOA directly', 'Inverse trig (sin⁻¹, cos⁻¹, tan⁻¹)', 'Interior angles rule'], correctAnswer: 2, rationale: 'To find an angle from two known sides, use inverse trig functions.', topic: 'Trigonometric ratios' },

    // ── Angles of elevation and depression ──
    { id: 'mcq-22', stem: 'An angle of elevation is measured from the:', options: ['Vertical upwards', 'Horizontal upwards', 'Horizontal downwards', 'Ground level only'], correctAnswer: 1, rationale: 'An angle of elevation is measured upward from the horizontal to the line of sight.', topic: 'Angles of elevation and depression' },
    { id: 'mcq-23', stem: 'An angle of depression is measured from the:', options: ['Horizontal upwards', 'Horizontal downwards', 'Vertical downwards', 'The ground'], correctAnswer: 1, rationale: 'An angle of depression is measured downward from the horizontal to the line of sight.', topic: 'Angles of elevation and depression' },
    { id: 'mcq-24', stem: 'A person stands 50 m from a tower and looks up at 35° to the top. Which calculation gives the tower height?', options: ['50 × cos 35°', '50 × sin 35°', '50 × tan 35°', '50 ÷ tan 35°'], correctAnswer: 2, rationale: 'The height is opposite, the distance is adjacent. tan 35° = height/50, so height = 50 × tan 35°.', topic: 'Angles of elevation and depression' },
    { id: 'mcq-25', stem: 'A person stands 50 m from a tower and looks up at 35°. What is the tower height (to 3 s.f.)?', options: ['28.7 m', '35.0 m', '40.9 m', '71.4 m'], correctAnswer: 1, rationale: 'height = 50 × tan 35° = 50 × 0.7002 ≈ 35.0 m.', topic: 'Angles of elevation and depression' },
    { id: 'mcq-26', stem: 'From the top of a 20 m cliff, the angle of depression to a boat is 28°. How far is the boat from the base of the cliff (to 3 s.f.)?', options: ['9.39 m', '37.6 m', '22.6 m', '42.5 m'], correctAnswer: 1, rationale: 'The angle of depression equals the angle of elevation from the boat. tan 28° = 20/distance, so distance = 20 ÷ tan 28° ≈ 37.6 m.', topic: 'Angles of elevation and depression' },
    { id: 'mcq-27', stem: 'The angle of depression from a lighthouse to a ship equals which angle at the ship?', options: ['Angle of depression at the ship', 'Angle of elevation from the ship', '90° minus the angle', 'Half the angle'], correctAnswer: 1, rationale: 'Alternate angles between parallel horizontal lines are equal, so the angle of depression from above equals the angle of elevation from below.', topic: 'Angles of elevation and depression' },
    { id: 'mcq-28', stem: 'A tree is 15 m tall. The angle of elevation from a point on the ground to the top is 40°. How far is the point from the tree (to 3 s.f.)?', options: ['17.9 m', '11.5 m', '23.3 m', '12.6 m'], correctAnswer: 0, rationale: 'tan 40° = 15/distance, so distance = 15 ÷ tan 40° = 15 ÷ 0.8391 ≈ 17.9 m.', topic: 'Angles of elevation and depression' },
    { id: 'mcq-29', stem: 'A kite string is 80 m long and makes an angle of 50° with the ground. How high is the kite (to 3 s.f.)?', options: ['51.4 m', '61.3 m', '80.0 m', '104 m'], correctAnswer: 1, rationale: 'The height is opposite, the string is the hypotenuse. height = 80 × sin 50° = 80 × 0.766 ≈ 61.3 m.', topic: 'Angles of elevation and depression' },
    { id: 'mcq-30', stem: 'From the top of a 45 m building, a car is seen at an angle of depression of 32°. What is the horizontal distance to the car (to 3 s.f.)?', options: ['72.0 m', '56.3 m', '28.1 m', '84.4 m'], correctAnswer: 0, rationale: 'tan 32° = 45/distance, so distance = 45 ÷ tan 32° = 45 ÷ 0.6249 ≈ 72.0 m.', topic: 'Angles of elevation and depression' },
  ],

  fillblank: [
    { id: 'fb-1', stem: 'The mnemonic for the three trig ratios is ___.', template: 'The mnemonic is __BLANK__', blanks: [{ answer: 'SOH CAH TOA' }], rationale: 'SOH CAH TOA stands for Sin = Opp/Hyp, Cos = Adj/Hyp, Tan = Opp/Adj.' },
    { id: 'fb-2', stem: 'sin θ = opposite ÷ ___.', template: 'sin θ = opposite ÷ __BLANK__', blanks: [{ answer: 'hypotenuse' }], rationale: 'SOH: Sin = Opposite ÷ Hypotenuse.' },
    { id: 'fb-3', stem: 'cos θ = ___ ÷ hypotenuse.', template: 'cos θ = __BLANK__ ÷ hypotenuse', blanks: [{ answer: 'adjacent' }], rationale: 'CAH: Cos = Adjacent ÷ Hypotenuse.' },
    { id: 'fb-4', stem: 'tan θ = opposite ÷ ___.', template: 'tan θ = opposite ÷ __BLANK__', blanks: [{ answer: 'adjacent' }], rationale: 'TOA: Tan = Opposite ÷ Adjacent.' },
    { id: 'fb-5', stem: 'To find an angle from two known sides, use the ___ trig function.', template: 'Use the __BLANK__ trig function', blanks: [{ answer: 'inverse' }], rationale: 'Inverse trig (sin⁻¹, cos⁻¹, tan⁻¹) returns an angle from a ratio.' },
    { id: 'fb-6', stem: 'sin⁻¹(0.5) = ___°.', template: 'sin⁻¹(0.5) = __BLANK__°', blanks: [{ answer: '30' }], rationale: 'sin 30° = 0.5, so sin⁻¹(0.5) = 30°.' },
    { id: 'fb-7', stem: 'The two acute angles in a right-angled triangle always sum to ___°.', template: 'They sum to __BLANK__°', blanks: [{ answer: '90' }], rationale: 'Angles in a triangle sum to 180°. The right angle is 90°, so the other two sum to 90°.' },
    { id: 'fb-8', stem: 'If θ = 30° and hypotenuse = 10, then opposite = 10 × sin 30° = ___ cm.', template: 'opposite = __BLANK__ cm', blanks: [{ answer: '5' }], rationale: '10 × sin 30° = 10 × 0.5 = 5.' },
    { id: 'fb-9', stem: 'An angle measured upward from the horizontal is called an angle of ___.', template: 'Angle of __BLANK__', blanks: [{ answer: 'elevation' }], rationale: 'An angle of elevation is measured upward from the horizontal to the line of sight.' },
    { id: 'fb-10', stem: 'An angle measured downward from the horizontal is called an angle of ___.', template: 'Angle of __BLANK__', blanks: [{ answer: 'depression' }], rationale: 'An angle of depression is measured downward from the horizontal.' },
    { id: 'fb-11', stem: 'The longest side of a right-angled triangle is the ___.', template: 'The longest side is the __BLANK__', blanks: [{ answer: 'hypotenuse' }], rationale: 'The hypotenuse is always the longest side, opposite the right angle.' },
    { id: 'fb-12', stem: 'On a calculator, to find sin⁻¹ you press ___ then sin.', template: 'Press __BLANK__ then sin', blanks: [{ answer: 'SHIFT' }], rationale: 'The SHIFT (or 2nd function) key accesses the inverse trig functions.' },
    { id: 'fb-13', stem: 'When you know an angle and the adjacent side and want the opposite, use ___.', template: 'Use __BLANK__', blanks: [{ answer: 'tan' }], rationale: 'tan θ = opposite ÷ adjacent, so opposite = adjacent × tan θ.' },
    { id: 'fb-14', stem: 'The angle of depression from A to B equals the angle of ___ from B to A.', template: 'Equals the angle of __BLANK__', blanks: [{ answer: 'elevation' }], rationale: 'By alternate angles between parallel horizontals, the angle of depression equals the angle of elevation.' },
    { id: 'fb-15', stem: 'Your calculator must be in ___ mode (not radians) for IGCSE trigonometry.', template: 'Must be in __BLANK__ mode', blanks: [{ answer: 'degree' }], rationale: 'IGCSE works in degrees. Ensure the calculator shows DEG, not RAD.' },
  ],

  dragdrop: [
    {
      id: 'dd-1',
      stem: 'Classify each trig ratio by which two sides it involves.',
      categories: ['sin (Opp & Hyp)', 'cos (Adj & Hyp)', 'tan (Opp & Adj)'],
      items: [
        { text: 'opposite ÷ hypotenuse', category: 'sin (Opp & Hyp)' },
        { text: 'adjacent ÷ hypotenuse', category: 'cos (Adj & Hyp)' },
        { text: 'opposite ÷ adjacent', category: 'tan (Opp & Adj)' },
        { text: 'hypotenuse × sin θ gives opposite', category: 'sin (Opp & Hyp)' },
        { text: 'hypotenuse × cos θ gives adjacent', category: 'cos (Adj & Hyp)' },
        { text: 'adjacent × tan θ gives opposite', category: 'tan (Opp & Adj)' },
      ],
    },
    {
      id: 'dd-2',
      stem: 'Classify each scenario: should you use Pythagoras or Trigonometry?',
      categories: ['Pythagoras\' theorem', 'Trigonometry'],
      items: [
        { text: 'Know 2 sides, want 3rd side, no angle given', category: 'Pythagoras\' theorem' },
        { text: 'Know angle + 1 side, want another side', category: 'Trigonometry' },
        { text: 'Know 2 sides, want an angle', category: 'Trigonometry' },
        { text: 'Check if a triangle is right-angled', category: 'Pythagoras\' theorem' },
        { text: 'Know hypotenuse and angle, find opposite', category: 'Trigonometry' },
        { text: 'Know two legs, find hypotenuse', category: 'Pythagoras\' theorem' },
      ],
    },
    {
      id: 'dd-3',
      stem: 'Sort the rearranged formulas by which ratio they come from.',
      categories: ['sin θ', 'cos θ', 'tan θ'],
      items: [
        { text: 'opposite = hypotenuse × sin θ', category: 'sin θ' },
        { text: 'hypotenuse = opposite ÷ sin θ', category: 'sin θ' },
        { text: 'adjacent = hypotenuse × cos θ', category: 'cos θ' },
        { text: 'hypotenuse = adjacent ÷ cos θ', category: 'cos θ' },
        { text: 'opposite = adjacent × tan θ', category: 'tan θ' },
        { text: 'adjacent = opposite ÷ tan θ', category: 'tan θ' },
      ],
    },
    {
      id: 'dd-4',
      stem: 'Sort each angle type.',
      categories: ['Angle of elevation', 'Angle of depression'],
      items: [
        { text: 'Looking up at the top of a building', category: 'Angle of elevation' },
        { text: 'Looking down from a cliff to a boat', category: 'Angle of depression' },
        { text: 'Observer on ground, sees a plane above', category: 'Angle of elevation' },
        { text: 'Pilot looking down at the runway', category: 'Angle of depression' },
        { text: 'Person looks up at a kite', category: 'Angle of elevation' },
        { text: 'Lifeguard looks down at a swimmer', category: 'Angle of depression' },
      ],
    },
    {
      id: 'dd-5',
      stem: 'Match each problem to the correct ratio choice.',
      categories: ['Use sin', 'Use cos', 'Use tan'],
      items: [
        { text: 'Know angle, know hypotenuse, find opposite', category: 'Use sin' },
        { text: 'Know angle, know hypotenuse, find adjacent', category: 'Use cos' },
        { text: 'Know angle, know adjacent, find opposite', category: 'Use tan' },
        { text: 'Know angle, know opposite, find hypotenuse', category: 'Use sin' },
        { text: 'Know angle, know adjacent, find hypotenuse', category: 'Use cos' },
        { text: 'Know angle, know opposite, find adjacent', category: 'Use tan' },
      ],
    },
    {
      id: 'dd-6',
      stem: 'Sort: does the calculation give a side length or an angle?',
      categories: ['Gives a side', 'Gives an angle'],
      items: [
        { text: '10 × sin 30°', category: 'Gives a side' },
        { text: 'sin⁻¹(0.6)', category: 'Gives an angle' },
        { text: '12 ÷ cos 40°', category: 'Gives a side' },
        { text: 'tan⁻¹(5/12)', category: 'Gives an angle' },
        { text: '7 × tan 55°', category: 'Gives a side' },
        { text: 'cos⁻¹(9/15)', category: 'Gives an angle' },
      ],
    },
    {
      id: 'dd-7',
      stem: 'Classify each inverse trig function by the sides you need.',
      categories: ['sin⁻¹ (Opp & Hyp)', 'cos⁻¹ (Adj & Hyp)', 'tan⁻¹ (Opp & Adj)'],
      items: [
        { text: 'Know opposite = 6, hypotenuse = 10', category: 'sin⁻¹ (Opp & Hyp)' },
        { text: 'Know adjacent = 9, hypotenuse = 15', category: 'cos⁻¹ (Adj & Hyp)' },
        { text: 'Know opposite = 5, adjacent = 12', category: 'tan⁻¹ (Opp & Adj)' },
        { text: 'Know opposite = 3, hypotenuse = 5', category: 'sin⁻¹ (Opp & Hyp)' },
        { text: 'Know adjacent = 8, hypotenuse = 10', category: 'cos⁻¹ (Adj & Hyp)' },
        { text: 'Know opposite = 7, adjacent = 7', category: 'tan⁻¹ (Opp & Adj)' },
      ],
    },
    {
      id: 'dd-8',
      stem: 'Match each label to the correct side of a right-angled triangle relative to angle θ.',
      categories: ['Hypotenuse', 'Opposite', 'Adjacent'],
      items: [
        { text: 'Longest side, opposite the right angle', category: 'Hypotenuse' },
        { text: 'Side directly across from θ', category: 'Opposite' },
        { text: 'Side next to θ (not the longest)', category: 'Adjacent' },
      ],
    },
    {
      id: 'dd-9',
      stem: 'Sort these values: are they valid inputs for sin⁻¹ / cos⁻¹ or not?',
      categories: ['Valid input (0 to 1)', 'Invalid input'],
      items: [
        { text: '0.5', category: 'Valid input (0 to 1)' },
        { text: '0.87', category: 'Valid input (0 to 1)' },
        { text: '1.5', category: 'Invalid input' },
        { text: '0.1', category: 'Valid input (0 to 1)' },
        { text: '2.0', category: 'Invalid input' },
        { text: '0.99', category: 'Valid input (0 to 1)' },
      ],
    },
    {
      id: 'dd-10',
      stem: 'Sort each real-world problem by whether it involves elevation or depression.',
      categories: ['Elevation', 'Depression'],
      items: [
        { text: 'Finding the height of a flagpole from ground level', category: 'Elevation' },
        { text: 'A drone looking down at a target on the ground', category: 'Depression' },
        { text: 'Measuring how high a bird is from where you stand', category: 'Elevation' },
        { text: 'A diver on a cliff estimating distance to a boat below', category: 'Depression' },
      ],
    },
  ],

  sequence: [
    {
      id: 'seq-1',
      stem: 'Put the steps in order to find a missing side using trigonometry.',
      steps: [
        'Label the sides relative to the given angle (opposite, adjacent, hypotenuse)',
        'Identify which two sides are involved (known and unknown)',
        'Choose the correct ratio (SOH, CAH, or TOA)',
        'Rearrange the formula to isolate the unknown side',
        'Substitute the values and calculate',
      ],
    },
    {
      id: 'seq-2',
      stem: 'Put the steps in order to find a missing angle using inverse trig.',
      steps: [
        'Draw and label the right-angled triangle',
        'Label the sides as opposite, adjacent, hypotenuse relative to the unknown angle',
        'Identify which two sides you know',
        'Choose the correct ratio (sin, cos, or tan)',
        'Write the ratio as a fraction',
        'Apply the inverse function on your calculator',
        'Write the angle to the required accuracy',
      ],
    },
    {
      id: 'seq-3',
      stem: 'Order the working to find the opposite when θ = 30° and hypotenuse = 10.',
      steps: [
        'Identify: know hypotenuse, want opposite → use sin',
        'Write: sin 30° = opposite ÷ 10',
        'Rearrange: opposite = 10 × sin 30°',
        'Calculate: opposite = 10 × 0.5 = 5 cm',
      ],
    },
    {
      id: 'seq-4',
      stem: 'Order the working to find angle θ when opposite = 6 and hypotenuse = 10.',
      steps: [
        'Identify sides: opposite = 6, hypotenuse = 10 → use sin',
        'Write: sin θ = 6 ÷ 10 = 0.6',
        'Apply inverse: θ = sin⁻¹(0.6)',
        'Calculate: θ = 36.9°',
      ],
    },
    {
      id: 'seq-5',
      stem: 'Order the steps to solve an angle of elevation problem.',
      steps: [
        'Draw a right-angled triangle with the horizontal distance and the height',
        'Mark the angle of elevation at the observer\'s position',
        'Label opposite (height) and adjacent (horizontal distance)',
        'Choose the correct ratio and substitute',
        'Calculate the answer',
      ],
    },
    {
      id: 'seq-6',
      stem: 'Order the decision process: Pythagoras or trigonometry?',
      steps: [
        'Ask: does the problem involve an angle?',
        'If no angle → use Pythagoras\' theorem',
        'If an angle is given or required → use trigonometry',
        'Identify which sides/angles are known and unknown',
        'Select the specific formula and solve',
      ],
    },
    {
      id: 'seq-7',
      stem: 'Order the working to find the distance from a cliff base when the cliff is 20 m and angle of depression is 28°.',
      steps: [
        'Recognise the angle of depression equals the angle of elevation from below (28°)',
        'Label: opposite = 20 m (cliff height), angle = 28°, adjacent = distance (unknown)',
        'Choose tan: tan 28° = 20 ÷ distance',
        'Rearrange: distance = 20 ÷ tan 28°',
        'Calculate: distance = 20 ÷ 0.5317 ≈ 37.6 m',
      ],
    },
    {
      id: 'seq-8',
      stem: 'Order the steps to find the adjacent when θ = 40° and hypotenuse = 8.',
      steps: [
        'Identify: know hypotenuse, want adjacent → use cos',
        'Write: cos 40° = adjacent ÷ 8',
        'Rearrange: adjacent = 8 × cos 40°',
        'Calculate: adjacent = 8 × 0.766 ≈ 6.13 cm',
      ],
    },
  ],

  keyword: [
    { id: 'kw-1', stem: 'What are the three trigonometric ratios and what does each relate? [3 marks]', marks: 3, keywords: ['sin', 'cos', 'tan', 'opposite', 'adjacent', 'hypotenuse'], modelAnswer: 'The three ratios are sin θ = opposite ÷ hypotenuse, cos θ = adjacent ÷ hypotenuse, and tan θ = opposite ÷ adjacent.' },
    { id: 'kw-2', stem: 'What is the mnemonic SOH CAH TOA and what does each part mean? [3 marks]', marks: 3, keywords: ['SOH', 'CAH', 'TOA', 'sin', 'cos', 'tan'], modelAnswer: 'SOH means Sin = Opposite over Hypotenuse. CAH means Cos = Adjacent over Hypotenuse. TOA means Tan = Opposite over Adjacent.' },
    { id: 'kw-3', stem: 'Explain how to label the sides of a right-angled triangle for trigonometry. [2 marks]', marks: 2, keywords: ['hypotenuse', 'opposite', 'adjacent', 'angle'], modelAnswer: 'The hypotenuse is the longest side opposite the right angle. The opposite side is across from the angle θ. The adjacent side is next to angle θ and is not the hypotenuse.' },
    { id: 'kw-4', stem: 'Describe the difference between sin θ and sin⁻¹. [2 marks]', marks: 2, keywords: ['sin', 'inverse', 'angle', 'ratio'], modelAnswer: 'sin θ takes an angle and returns a ratio (decimal). sin⁻¹ takes a ratio and returns an angle. They are inverse operations.' },
    { id: 'kw-5', stem: 'What is an angle of elevation? [2 marks]', marks: 2, keywords: ['horizontal', 'upward', 'line of sight'], modelAnswer: 'An angle of elevation is measured upward from the horizontal to the line of sight when looking at an object above.' },
    { id: 'kw-6', stem: 'What is an angle of depression? [2 marks]', marks: 2, keywords: ['horizontal', 'downward', 'line of sight'], modelAnswer: 'An angle of depression is measured downward from the horizontal to the line of sight when looking at an object below.' },
    { id: 'kw-7', stem: 'Explain why the angle of depression from A equals the angle of elevation from B. [2 marks]', marks: 2, keywords: ['alternate', 'parallel', 'equal'], modelAnswer: 'The horizontal lines at A and B are parallel. The line of sight is a transversal, so the angle of depression and angle of elevation are alternate angles and therefore equal.' },
    { id: 'kw-8', stem: 'Describe the steps to find a missing side using trigonometry. [3 marks]', marks: 3, keywords: ['label', 'ratio', 'rearrange', 'calculate'], modelAnswer: 'Label the sides relative to the known angle. Choose the ratio that involves the known and unknown sides. Rearrange to isolate the unknown side, then calculate using the angle.' },
    { id: 'kw-9', stem: 'When should you use Pythagoras\' theorem instead of trigonometry? [2 marks]', marks: 2, keywords: ['two sides', 'third side', 'no angle'], modelAnswer: 'Use Pythagoras\' theorem when you know two sides and want the third side, and no angle is given or needed.' },
    { id: 'kw-10', stem: 'How do you find the hypotenuse when given the opposite side and an angle? [2 marks]', marks: 2, keywords: ['sin', 'opposite', 'divide', 'hypotenuse'], modelAnswer: 'Use sin θ = opposite ÷ hypotenuse. Rearrange to get hypotenuse = opposite ÷ sin θ, then substitute and calculate.' },
    { id: 'kw-11', stem: 'Explain how to use tan⁻¹ to find an angle when opposite = 5 and adjacent = 12. [2 marks]', marks: 2, keywords: ['tan⁻¹', 'opposite', 'adjacent', 'angle'], modelAnswer: 'Divide opposite by adjacent: 5 ÷ 12 ≈ 0.417. Then use tan⁻¹(0.417) on the calculator to get θ ≈ 22.6°.' },
    { id: 'kw-12', stem: 'What must you check on your calculator before doing IGCSE trigonometry? [1 mark]', marks: 1, keywords: ['degree', 'mode'], modelAnswer: 'Check the calculator is set to degree mode, not radians or gradians.' },
  ],

  flashcards: [
    // ── Trigonometric ratios ──
    { id: 'fc-1', front: 'What does SOH stand for?', back: 'Sin = Opposite ÷ Hypotenuse', topic: 'Trigonometric ratios' },
    { id: 'fc-2', front: 'What does CAH stand for?', back: 'Cos = Adjacent ÷ Hypotenuse', topic: 'Trigonometric ratios' },
    { id: 'fc-3', front: 'What does TOA stand for?', back: 'Tan = Opposite ÷ Adjacent', topic: 'Trigonometric ratios' },
    { id: 'fc-4', front: 'What is the hypotenuse?', back: 'The longest side of a right-angled triangle, opposite the right angle.', topic: 'Trigonometric ratios' },
    { id: 'fc-5', front: 'What is the opposite side?', back: 'The side directly across from the angle θ in a right-angled triangle.', topic: 'Trigonometric ratios' },
    { id: 'fc-6', front: 'What is the adjacent side?', back: 'The side next to angle θ that is not the hypotenuse.', topic: 'Trigonometric ratios' },
    { id: 'fc-7', front: 'How do you find the opposite when you know the hypotenuse and angle θ?', back: 'opposite = hypotenuse × sin θ', topic: 'Trigonometric ratios' },
    { id: 'fc-8', front: 'How do you find the adjacent when you know the hypotenuse and angle θ?', back: 'adjacent = hypotenuse × cos θ', topic: 'Trigonometric ratios' },
    { id: 'fc-9', front: 'How do you find the opposite when you know the adjacent and angle θ?', back: 'opposite = adjacent × tan θ', topic: 'Trigonometric ratios' },
    { id: 'fc-10', front: 'How do you find the hypotenuse when you know the opposite and angle θ?', back: 'hypotenuse = opposite ÷ sin θ', topic: 'Trigonometric ratios' },
    { id: 'fc-11', front: 'How do you find the hypotenuse when you know the adjacent and angle θ?', back: 'hypotenuse = adjacent ÷ cos θ', topic: 'Trigonometric ratios' },
    { id: 'fc-12', front: 'How do you find the adjacent when you know the opposite and angle θ?', back: 'adjacent = opposite ÷ tan θ', topic: 'Trigonometric ratios' },
    { id: 'fc-13', front: 'What is sin 30°?', back: '0.5', topic: 'Trigonometric ratios' },
    { id: 'fc-14', front: 'What is cos 60°?', back: '0.5', topic: 'Trigonometric ratios' },
    { id: 'fc-15', front: 'What is tan 45°?', back: '1', topic: 'Trigonometric ratios' },

    // ── Inverse trig ──
    { id: 'fc-16', front: 'What does sin⁻¹ do?', back: 'It takes a ratio (opposite ÷ hypotenuse) and returns the angle θ.', topic: 'Trigonometric ratios' },
    { id: 'fc-17', front: 'What does cos⁻¹ do?', back: 'It takes a ratio (adjacent ÷ hypotenuse) and returns the angle θ.', topic: 'Trigonometric ratios' },
    { id: 'fc-18', front: 'What does tan⁻¹ do?', back: 'It takes a ratio (opposite ÷ adjacent) and returns the angle θ.', topic: 'Trigonometric ratios' },
    { id: 'fc-19', front: 'How do you access sin⁻¹ on a calculator?', back: 'Press SHIFT (or 2nd) then the sin button. Ensure the calculator is in degree mode.', topic: 'Trigonometric ratios' },
    { id: 'fc-20', front: 'The two acute angles in a right-angled triangle sum to …?', back: '90°', topic: 'Trigonometric ratios' },
    { id: 'fc-21', front: 'When should you use Pythagoras instead of trig?', back: 'When you know two sides and want the third side, with no angle given or needed.', topic: 'Trigonometric ratios' },

    // ── Angles of elevation and depression ──
    { id: 'fc-22', front: 'What is an angle of elevation?', back: 'An angle measured upward from the horizontal to the line of sight.', topic: 'Angles of elevation and depression' },
    { id: 'fc-23', front: 'What is an angle of depression?', back: 'An angle measured downward from the horizontal to the line of sight.', topic: 'Angles of elevation and depression' },
    { id: 'fc-24', front: 'Why does the angle of depression from point A equal the angle of elevation from point B?', back: 'Because the two horizontal lines are parallel, making them alternate angles with the line of sight as a transversal.', topic: 'Angles of elevation and depression' },
    { id: 'fc-25', front: 'A person 50 m from a tower looks up at 35°. Which ratio finds the height?', back: 'tan 35° = height ÷ 50, so height = 50 × tan 35° ≈ 35.0 m.', topic: 'Angles of elevation and depression' },
  ],

};
