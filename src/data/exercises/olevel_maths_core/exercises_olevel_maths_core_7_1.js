export const exercises_olevel_maths_core_7_1 = {

  mcq: [
    // ── Translations ──
    { id: 'mcq-1', stem: 'A translation moves a shape by the column vector (3, −2). What does the top number 3 mean?', options: ['3 units up', '3 units right', '3 units left', '3 units down'], correctAnswer: 1, rationale: 'The top number in a column vector is the horizontal (x) shift. Positive means right, so 3 means 3 units right.', topic: 'Translations and reflections' },
    { id: 'mcq-2', stem: 'Point A(2, 5) is translated by the column vector (4, −3). What are the coordinates of A′?', options: ['(6, 2)', '(6, 8)', '(−2, 8)', '(−2, 2)'], correctAnswer: 0, rationale: 'Add the vector to the point: (2 + 4, 5 + (−3)) = (6, 2).', topic: 'Translations and reflections' },
    { id: 'mcq-3', stem: 'Which transformation always produces a congruent image that has the same orientation as the object?', options: ['Reflection', 'Translation', 'Enlargement', 'Rotation'], correctAnswer: 1, rationale: 'A translation slides every point the same distance and direction, preserving size, shape, and orientation.', topic: 'Translations and reflections' },
    { id: 'mcq-4', stem: 'A shape is translated so that vertex P(1, 4) maps to P′(−2, 6). What is the column vector?', options: ['(3, −2)', '(−3, 2)', '(−2, 3)', '(2, −3)'], correctAnswer: 1, rationale: 'x-shift = −2 − 1 = −3, y-shift = 6 − 4 = 2. Column vector is (−3, 2).', topic: 'Translations and reflections' },
    { id: 'mcq-5', stem: 'Triangle ABC is translated by (−5, 0). How does the image compare to the object?', options: ['Same size, shifted left', 'Smaller, shifted left', 'Same size, shifted down', 'Same size, shifted right'], correctAnswer: 0, rationale: '(−5, 0) means 5 units left and no vertical movement. The image is congruent (same size and shape).', topic: 'Translations and reflections' },
    { id: 'mcq-6', stem: 'Point B(−3, 1) is translated by (7, −4). What are the coordinates of B′?', options: ['(4, −3)', '(−10, 5)', '(4, 5)', '(10, −3)'], correctAnswer: 0, rationale: '(−3 + 7, 1 + (−4)) = (4, −3).', topic: 'Translations and reflections' },

    // ── Reflections ──
    { id: 'mcq-7', stem: 'Point (3, 5) is reflected in the x-axis. What are the image coordinates?', options: ['(−3, 5)', '(3, −5)', '(5, 3)', '(−3, −5)'], correctAnswer: 1, rationale: 'Reflecting in the x-axis (y = 0): (x, y) → (x, −y). So (3, 5) → (3, −5).', topic: 'Translations and reflections' },
    { id: 'mcq-8', stem: 'Point (4, −2) is reflected in the y-axis. What are the image coordinates?', options: ['(4, 2)', '(−4, −2)', '(−4, 2)', '(−2, 4)'], correctAnswer: 1, rationale: 'Reflecting in the y-axis (x = 0): (x, y) → (−x, y). So (4, −2) → (−4, −2).', topic: 'Translations and reflections' },
    { id: 'mcq-9', stem: 'What must you always state when describing a reflection?', options: ['The distance moved', 'The column vector', 'The equation of the mirror line', 'The centre of reflection'], correctAnswer: 2, rationale: 'A reflection is fully described by stating the transformation type and the equation of the mirror line.', topic: 'Translations and reflections' },
    { id: 'mcq-10', stem: 'Point (2, 7) is reflected in the line y = x. What are the image coordinates?', options: ['(−2, 7)', '(7, 2)', '(2, −7)', '(−7, −2)'], correctAnswer: 1, rationale: 'Reflecting in y = x swaps the coordinates: (x, y) → (y, x). So (2, 7) → (7, 2).', topic: 'Translations and reflections' },
    { id: 'mcq-11', stem: 'A shape is reflected in the line x = 3. Point P(1, 4) maps to P′. What are the coordinates of P′?', options: ['(5, 4)', '(1, −4)', '(−1, 4)', '(3, 4)'], correctAnswer: 0, rationale: 'Using x → 2k − x with k = 3: x′ = 2(3) − 1 = 5. y stays the same. P′(5, 4).', topic: 'Translations and reflections' },
    { id: 'mcq-12', stem: 'The mirror line is the perpendicular ___ of the segment joining a point to its image.', options: ['bisector', 'diagonal', 'tangent', 'parallel'], correctAnswer: 0, rationale: 'The mirror line is the perpendicular bisector of the line segment from any point to its reflected image.', topic: 'Translations and reflections' },
    { id: 'mcq-13', stem: 'Point (5, 3) is reflected in the line y = −x. What are the image coordinates?', options: ['(−3, −5)', '(3, 5)', '(−5, −3)', '(5, −3)'], correctAnswer: 0, rationale: 'Reflecting in y = −x: (x, y) → (−y, −x). So (5, 3) → (−3, −5).', topic: 'Translations and reflections' },
    { id: 'mcq-14', stem: 'Point Q(4, 3) is reflected in the line y = 1. What is the y-coordinate of Q′?', options: ['−1', '1', '−3', '5'], correctAnswer: 0, rationale: 'y′ = 2k − y = 2(1) − 3 = −1. So Q′ has y-coordinate −1.', topic: 'Translations and reflections' },

    // ── Rotations ──
    { id: 'mcq-15', stem: 'To fully describe a rotation, which three things must you state?', options: ['Mirror line, direction, angle', 'Centre, angle, direction', 'Vector, angle, centre', 'Centre, scale factor, angle'], correctAnswer: 1, rationale: 'A rotation is described by the centre of rotation, the angle of rotation, and the direction (clockwise or anticlockwise).', topic: 'Rotations and enlargements' },
    { id: 'mcq-16', stem: 'Point (3, 0) is rotated 90° anticlockwise about the origin. What are the image coordinates?', options: ['(0, 3)', '(0, −3)', '(−3, 0)', '(3, 0)'], correctAnswer: 0, rationale: '90° anticlockwise about O: (x, y) → (−y, x). So (3, 0) → (0, 3).', topic: 'Rotations and enlargements' },
    { id: 'mcq-17', stem: 'Point (2, 5) is rotated 180° about the origin. What are the image coordinates?', options: ['(5, 2)', '(−2, 5)', '(−2, −5)', '(2, −5)'], correctAnswer: 2, rationale: '180° rotation about O: (x, y) → (−x, −y). So (2, 5) → (−2, −5).', topic: 'Rotations and enlargements' },
    { id: 'mcq-18', stem: 'A rotation of 90° clockwise about the origin maps (x, y) to which point?', options: ['(−y, x)', '(y, −x)', '(−x, −y)', '(x, −y)'], correctAnswer: 1, rationale: '90° clockwise about O: (x, y) → (y, −x).', topic: 'Rotations and enlargements' },
    { id: 'mcq-19', stem: 'After a rotation, the image is always ___ to the object.', options: ['similar', 'congruent', 'enlarged', 'parallel'], correctAnswer: 1, rationale: 'A rotation preserves size and shape, so the image is congruent to the object.', topic: 'Rotations and enlargements' },
    { id: 'mcq-20', stem: 'A triangle is rotated 90° anticlockwise about (0, 0). Vertex A(1, 2) maps to A′. What are the coordinates of A′?', options: ['(−2, 1)', '(2, −1)', '(−1, −2)', '(1, −2)'], correctAnswer: 0, rationale: '90° anticlockwise about O: (x, y) → (−y, x). So (1, 2) → (−2, 1).', topic: 'Rotations and enlargements' },

    // ── Enlargements ──
    { id: 'mcq-21', stem: 'An enlargement with scale factor 2, centre O, maps point P(3, 1) to P′. What are the coordinates of P′?', options: ['(6, 2)', '(5, 3)', '(1.5, 0.5)', '(3, 2)'], correctAnswer: 0, rationale: 'Multiply each coordinate by the scale factor: (3 × 2, 1 × 2) = (6, 2).', topic: 'Rotations and enlargements' },
    { id: 'mcq-22', stem: 'To fully describe an enlargement, you must state the scale factor and the ___.', options: ['direction', 'mirror line', 'centre of enlargement', 'column vector'], correctAnswer: 2, rationale: 'An enlargement is described by its scale factor and centre of enlargement.', topic: 'Rotations and enlargements' },
    { id: 'mcq-23', stem: 'A shape is enlarged by scale factor 3. If a side of the object is 4 cm, how long is the corresponding side of the image?', options: ['7 cm', '12 cm', '1.33 cm', '4 cm'], correctAnswer: 1, rationale: 'Image length = object length × scale factor = 4 × 3 = 12 cm.', topic: 'Rotations and enlargements' },
    { id: 'mcq-24', stem: 'An enlargement with scale factor ½ produces an image that is ___ the object.', options: ['the same size as', 'larger than', 'smaller than', 'congruent to'], correctAnswer: 2, rationale: 'A scale factor between 0 and 1 reduces the size. ½ makes the image half the size of the object.', topic: 'Rotations and enlargements' },
    { id: 'mcq-25', stem: 'Is the image of an enlargement congruent or similar to the object?', options: ['Congruent', 'Similar', 'Neither', 'Both'], correctAnswer: 1, rationale: 'Enlargement changes the size but preserves the shape and angles, so the image is similar (not congruent unless scale factor = 1).', topic: 'Rotations and enlargements' },
    { id: 'mcq-26', stem: 'Centre of enlargement is (1, 2) and scale factor is 2. Point A(3, 4) maps to A′. What are the coordinates of A′?', options: ['(5, 6)', '(6, 8)', '(7, 10)', '(4, 6)'], correctAnswer: 0, rationale: 'A′ = centre + scale factor × (point − centre) = (1 + 2(3−1), 2 + 2(4−2)) = (1 + 4, 2 + 4) = (5, 6).', topic: 'Rotations and enlargements' },
    { id: 'mcq-27', stem: 'Which transformation does NOT produce a congruent image?', options: ['Translation', 'Reflection', 'Rotation', 'Enlargement (scale factor ≠ 1)'], correctAnswer: 3, rationale: 'Enlargement changes the size of the shape (unless scale factor is 1), so the image is similar but not congruent.', topic: 'Rotations and enlargements' },

    // ── Mixed / identifying transformations ──
    { id: 'mcq-28', stem: 'A shape has been flipped so its image is a mirror version. Which transformation is this?', options: ['Translation', 'Rotation', 'Reflection', 'Enlargement'], correctAnswer: 2, rationale: 'A mirror-image flip is a reflection.', topic: 'Translations and reflections' },
    { id: 'mcq-29', stem: 'A shape has been turned around a fixed point. Which transformation is this?', options: ['Translation', 'Reflection', 'Enlargement', 'Rotation'], correctAnswer: 3, rationale: 'Turning around a fixed point is a rotation.', topic: 'Rotations and enlargements' },
    { id: 'mcq-30', stem: 'Which of these transformations always preserve the size of the shape? (i) Translation (ii) Reflection (iii) Rotation (iv) Enlargement', options: ['(i), (ii) and (iii) only', '(i) and (iii) only', 'All four', '(i), (ii), (iii) and (iv)'], correctAnswer: 0, rationale: 'Translation, reflection, and rotation all produce congruent images. Enlargement changes the size (unless scale factor is 1).', topic: 'Rotations and enlargements' },
  ],

  fillblank: [
    { id: 'fb-1', stem: 'In a column vector, the top number represents the ___ shift.', template: 'The top number is the __BLANK__ shift', blanks: [{ answer: 'horizontal' }], rationale: 'Top number = x-direction = horizontal movement.' },
    { id: 'fb-2', stem: 'A translation produces an image that is ___ to the object.', template: 'The image is __BLANK__ to the object', blanks: [{ answer: 'congruent' }], rationale: 'Translations preserve size and shape, so the image is congruent.' },
    { id: 'fb-3', stem: 'Point (5, 2) translated by (−3, 4) gives the image (___).', template: 'The image is (__BLANK__)', blanks: [{ answer: '2, 6' }], rationale: '(5 + (−3), 2 + 4) = (2, 6).' },
    { id: 'fb-4', stem: 'Reflecting (x, y) in the x-axis gives (x, ___).', template: 'Reflection in x-axis: (x, __BLANK__)', blanks: [{ answer: '−y' }], rationale: 'The x-axis reflection rule is (x, y) → (x, −y).' },
    { id: 'fb-5', stem: 'Reflecting (x, y) in the line y = x gives (___, x).', template: 'Reflection in y = x: (__BLANK__, x)', blanks: [{ answer: 'y' }], rationale: 'The y = x reflection rule swaps coordinates: (x, y) → (y, x).' },
    { id: 'fb-6', stem: 'When describing a reflection, you must state the equation of the ___.', template: 'You must state the __BLANK__', blanks: [{ answer: 'mirror line' }], rationale: 'Without the mirror line equation, the description is incomplete and earns no marks.' },
    { id: 'fb-7', stem: 'The mirror line is the perpendicular ___ of the segment from a point to its image.', template: 'The mirror line is the perpendicular __BLANK__', blanks: [{ answer: 'bisector' }], rationale: 'The mirror line cuts the segment joining each point and its image exactly in half at 90°.' },
    { id: 'fb-8', stem: 'A rotation is described by centre, angle, and ___.', template: 'Centre, angle, and __BLANK__', blanks: [{ answer: 'direction' }], rationale: 'You must state clockwise or anticlockwise (unless the angle is 180°).' },
    { id: 'fb-9', stem: '180° rotation about the origin maps (x, y) to (___, −y).', template: '180° rotation: (__BLANK__, −y)', blanks: [{ answer: '−x' }], rationale: '180° about O: (x, y) → (−x, −y).' },
    { id: 'fb-10', stem: 'An enlargement with scale factor 3 makes each length ___ times larger.', template: 'Each length becomes __BLANK__ times larger', blanks: [{ answer: '3' }], rationale: 'Scale factor 3 means every length is multiplied by 3.' },
    { id: 'fb-11', stem: 'An enlargement produces an image that is ___ to the object.', template: 'The image is __BLANK__ to the object', blanks: [{ answer: 'similar' }], rationale: 'Enlargement preserves shape and angles but changes size, so the image is similar.' },
    { id: 'fb-12', stem: 'A scale factor between 0 and 1 makes the image ___ than the object.', template: 'The image is __BLANK__ than the object', blanks: [{ answer: 'smaller' }], rationale: 'A fractional scale factor (e.g. ½) reduces all lengths, making the image smaller.' },
    { id: 'fb-13', stem: 'Reflecting (4, −2) in the y-axis gives (___).', template: 'The image is (__BLANK__)', blanks: [{ answer: '−4, −2' }], rationale: 'y-axis reflection: (x, y) → (−x, y). So (4, −2) → (−4, −2).' },
    { id: 'fb-14', stem: '90° anticlockwise rotation about O maps (x, y) to (−y, ___).', template: '90° anticlockwise: (−y, __BLANK__)', blanks: [{ answer: 'x' }], rationale: '90° anticlockwise about O: (x, y) → (−y, x).' },
    { id: 'fb-15', stem: 'Translation, reflection, and rotation all produce ___ images.', template: 'They all produce __BLANK__ images', blanks: [{ answer: 'congruent' }], rationale: 'These three transformations preserve both the size and shape of the object.' },
  ],

  dragdrop: [
    {
      id: 'dd-1',
      stem: 'Sort each transformation by whether the image is congruent or similar to the object.',
      categories: ['Congruent image', 'Similar image (not congruent)'],
      items: [
        { text: 'Translation', category: 'Congruent image' },
        { text: 'Reflection', category: 'Congruent image' },
        { text: 'Rotation', category: 'Congruent image' },
        { text: 'Enlargement (scale factor 2)', category: 'Similar image (not congruent)' },
        { text: 'Enlargement (scale factor ½)', category: 'Similar image (not congruent)' },
      ],
    },
    {
      id: 'dd-2',
      stem: 'Match each reflection rule to its mirror line.',
      categories: ['y = 0 (x-axis)', 'x = 0 (y-axis)', 'y = x', 'y = −x'],
      items: [
        { text: '(x, y) → (x, −y)', category: 'y = 0 (x-axis)' },
        { text: '(x, y) → (−x, y)', category: 'x = 0 (y-axis)' },
        { text: '(x, y) → (y, x)', category: 'y = x' },
        { text: '(x, y) → (−y, −x)', category: 'y = −x' },
      ],
    },
    {
      id: 'dd-3',
      stem: 'Sort what you need to state when describing each transformation.',
      categories: ['Translation', 'Reflection', 'Rotation', 'Enlargement'],
      items: [
        { text: 'Column vector', category: 'Translation' },
        { text: 'Equation of mirror line', category: 'Reflection' },
        { text: 'Centre, angle, direction', category: 'Rotation' },
        { text: 'Centre and scale factor', category: 'Enlargement' },
      ],
    },
    {
      id: 'dd-4',
      stem: 'Sort each column vector by movement direction.',
      categories: ['Moves right', 'Moves left'],
      items: [
        { text: '(3, −1)', category: 'Moves right' },
        { text: '(−5, 2)', category: 'Moves left' },
        { text: '(7, 0)', category: 'Moves right' },
        { text: '(−2, −4)', category: 'Moves left' },
        { text: '(1, 6)', category: 'Moves right' },
        { text: '(−8, 0)', category: 'Moves left' },
      ],
    },
    {
      id: 'dd-5',
      stem: 'Match each rotation about the origin to its coordinate rule.',
      categories: ['90° anticlockwise', '90° clockwise', '180°'],
      items: [
        { text: '(x, y) → (−y, x)', category: '90° anticlockwise' },
        { text: '(x, y) → (y, −x)', category: '90° clockwise' },
        { text: '(x, y) → (−x, −y)', category: '180°' },
      ],
    },
    {
      id: 'dd-6',
      stem: 'Sort each description by the type of transformation.',
      categories: ['Translation', 'Reflection', 'Rotation', 'Enlargement'],
      items: [
        { text: 'Every point slides the same distance and direction', category: 'Translation' },
        { text: 'Shape is flipped across a line', category: 'Reflection' },
        { text: 'Shape is turned around a fixed point', category: 'Rotation' },
        { text: 'Shape is made larger or smaller from a centre point', category: 'Enlargement' },
      ],
    },
    {
      id: 'dd-7',
      stem: 'Sort each scale factor by the effect on the image size.',
      categories: ['Image is larger', 'Image is smaller'],
      items: [
        { text: 'Scale factor 3', category: 'Image is larger' },
        { text: 'Scale factor ½', category: 'Image is smaller' },
        { text: 'Scale factor 5', category: 'Image is larger' },
        { text: 'Scale factor ⅓', category: 'Image is smaller' },
        { text: 'Scale factor 2', category: 'Image is larger' },
        { text: 'Scale factor ¼', category: 'Image is smaller' },
      ],
    },
    {
      id: 'dd-8',
      stem: 'Sort each property by whether it applies to reflections or translations.',
      categories: ['Translation', 'Reflection'],
      items: [
        { text: 'Described by a column vector', category: 'Translation' },
        { text: 'Described by a mirror line equation', category: 'Reflection' },
        { text: 'Image is laterally flipped', category: 'Reflection' },
        { text: 'Image has the same orientation', category: 'Translation' },
        { text: 'Uses perpendicular distance from a line', category: 'Reflection' },
        { text: 'Every point moves equal distance in same direction', category: 'Translation' },
      ],
    },
    {
      id: 'dd-9',
      stem: 'Match each transformation to whether orientation is preserved.',
      categories: ['Orientation preserved', 'Orientation reversed'],
      items: [
        { text: 'Translation', category: 'Orientation preserved' },
        { text: 'Rotation', category: 'Orientation preserved' },
        { text: 'Enlargement', category: 'Orientation preserved' },
        { text: 'Reflection', category: 'Orientation reversed' },
      ],
    },
    {
      id: 'dd-10',
      stem: 'Match each point and its image to the correct column vector.',
      categories: ['(3, −2)', '(−4, 1)', '(2, 5)'],
      items: [
        { text: 'A(1, 4) → A′(4, 2)', category: '(3, −2)' },
        { text: 'B(5, 3) → B′(1, 4)', category: '(−4, 1)' },
        { text: 'C(0, −1) → C′(2, 4)', category: '(2, 5)' },
      ],
    },
  ],

  sequence: [
    {
      id: 'seq-1',
      stem: 'Order the steps to perform a translation on a shape.',
      steps: [
        'Identify the column vector',
        'Add the x-component to each x-coordinate',
        'Add the y-component to each y-coordinate',
        'Plot the new vertices and join them',
      ],
    },
    {
      id: 'seq-2',
      stem: 'Order the steps to describe a translation from object to image.',
      steps: [
        'Pick a vertex on the object and its corresponding image vertex',
        'Calculate x-shift = x_image − x_object',
        'Calculate y-shift = y_image − y_object',
        'Write the column vector with x-shift on top and y-shift on bottom',
      ],
    },
    {
      id: 'seq-3',
      stem: 'Order the steps to reflect a shape in a given mirror line.',
      steps: [
        'Identify the equation of the mirror line',
        'For each vertex, measure the perpendicular distance to the mirror line',
        'Mark the image point the same distance on the other side of the line',
        'Join the image points to complete the reflected shape',
      ],
    },
    {
      id: 'seq-4',
      stem: 'Order the steps to describe a reflection from object to image.',
      steps: [
        'Join a vertex to its corresponding image vertex',
        'Find the midpoint of that segment',
        'Check the mirror line is perpendicular to the segment',
        'State: "Reflection in the line …" with the equation',
      ],
    },
    {
      id: 'seq-5',
      stem: 'Order the steps to rotate a shape about a given centre.',
      steps: [
        'Identify the centre of rotation, the angle, and the direction',
        'For each vertex, measure the distance from the centre',
        'Rotate each vertex by the given angle in the given direction',
        'Plot the new vertices and join them',
      ],
    },
    {
      id: 'seq-6',
      stem: 'Order the steps to perform an enlargement from a centre.',
      steps: [
        'Identify the centre of enlargement and the scale factor',
        'Draw a line from the centre through each vertex of the object',
        'Multiply the distance from the centre to each vertex by the scale factor',
        'Mark the image vertices and join them',
      ],
    },
    {
      id: 'seq-7',
      stem: 'Order the steps to find the centre of enlargement given object and image.',
      steps: [
        'Choose two pairs of corresponding vertices',
        'Draw a line through each object vertex and its image vertex',
        'Extend the lines until they meet at a single point',
        'The point of intersection is the centre of enlargement',
      ],
    },
    {
      id: 'seq-8',
      stem: 'Order the steps to find the scale factor of an enlargement.',
      steps: [
        'Measure the distance from the centre of enlargement to an image vertex',
        'Measure the distance from the centre of enlargement to the corresponding object vertex',
        'Divide the image distance by the object distance',
        'The result is the scale factor',
      ],
    },
  ],

  keyword: [
    { id: 'kw-1', stem: 'What is a translation? [2 marks]', marks: 2, keywords: ['slides', 'column vector'], modelAnswer: 'A translation slides every point of a shape the same distance and direction, described by a column vector.' },
    { id: 'kw-2', stem: 'What does the top number in a column vector represent? [1 mark]', marks: 1, keywords: ['horizontal'], modelAnswer: 'The top number represents the horizontal shift (positive = right, negative = left).' },
    { id: 'kw-3', stem: 'What does the bottom number in a column vector represent? [1 mark]', marks: 1, keywords: ['vertical'], modelAnswer: 'The bottom number represents the vertical shift (positive = up, negative = down).' },
    { id: 'kw-4', stem: 'What is a reflection? [2 marks]', marks: 2, keywords: ['mirror line', 'perpendicular'], modelAnswer: 'A reflection flips a shape across a mirror line so every image point is the same perpendicular distance from the line as the object point, but on the opposite side.' },
    { id: 'kw-5', stem: 'What must you always state when describing a reflection? [1 mark]', marks: 1, keywords: ['equation', 'mirror line'], modelAnswer: 'You must state the equation of the mirror line.' },
    { id: 'kw-6', stem: 'What is the coordinate rule for reflecting (x, y) in the line y = x? [1 mark]', marks: 1, keywords: ['swap', 'coordinates'], modelAnswer: 'Swap the coordinates: (x, y) maps to (y, x).' },
    { id: 'kw-7', stem: 'What three things must you state to describe a rotation? [2 marks]', marks: 2, keywords: ['centre', 'angle', 'direction'], modelAnswer: 'You must state the centre of rotation, the angle, and the direction (clockwise or anticlockwise).' },
    { id: 'kw-8', stem: 'Why is the image of a rotation congruent to the object? [2 marks]', marks: 2, keywords: ['same size', 'same shape'], modelAnswer: 'Rotation preserves both the size and shape of the object, so the image is congruent — same size and same shape.' },
    { id: 'kw-9', stem: 'How do you describe an enlargement? [2 marks]', marks: 2, keywords: ['scale factor', 'centre of enlargement'], modelAnswer: 'State the scale factor and the centre of enlargement.' },
    { id: 'kw-10', stem: 'What happens when the scale factor of an enlargement is between 0 and 1? [1 mark]', marks: 1, keywords: ['smaller'], modelAnswer: 'The image is smaller than the object.' },
    { id: 'kw-11', stem: 'Is the image from an enlargement congruent or similar to the object? Explain. [2 marks]', marks: 2, keywords: ['similar', 'same shape'], modelAnswer: 'The image is similar to the object — it has the same shape and equal angles but different side lengths.' },
    { id: 'kw-12', stem: 'Which transformations produce congruent images? [2 marks]', marks: 2, keywords: ['translation', 'reflection', 'rotation'], modelAnswer: 'Translation, reflection, and rotation all produce congruent images (same size and shape).' },
  ],

  flashcards: [
    // ── Translations ──
    { id: 'fc-1', front: 'What is a translation?', back: 'A transformation that slides every point of a shape the same distance in the same direction. The image is congruent to the object.', topic: 'Translations and reflections' },
    { id: 'fc-2', front: 'How is a translation described?', back: 'By a column vector. The top number is the horizontal shift and the bottom number is the vertical shift.', topic: 'Translations and reflections' },
    { id: 'fc-3', front: 'In a column vector, what does a positive top number mean?', back: 'Move right.', topic: 'Translations and reflections' },
    { id: 'fc-4', front: 'In a column vector, what does a negative bottom number mean?', back: 'Move down.', topic: 'Translations and reflections' },
    { id: 'fc-5', front: 'How do you find the column vector from object to image?', back: 'x-shift = x_image − x_object (top), y-shift = y_image − y_object (bottom).', topic: 'Translations and reflections' },
    { id: 'fc-6', front: 'Memory aid: column vector order', back: '"Along the corridor (x, horizontal) then up the stairs (y, vertical)."', topic: 'Translations and reflections' },

    // ── Reflections ──
    { id: 'fc-7', front: 'What is a reflection?', back: 'A transformation that flips a shape across a mirror line. Each image point is the same perpendicular distance from the line as the object point, on the opposite side.', topic: 'Translations and reflections' },
    { id: 'fc-8', front: 'Rule for reflecting in the x-axis (y = 0)?', back: '(x, y) → (x, −y). Negate the y-coordinate.', topic: 'Translations and reflections' },
    { id: 'fc-9', front: 'Rule for reflecting in the y-axis (x = 0)?', back: '(x, y) → (−x, y). Negate the x-coordinate.', topic: 'Translations and reflections' },
    { id: 'fc-10', front: 'Rule for reflecting in the line y = x?', back: '(x, y) → (y, x). Swap the coordinates.', topic: 'Translations and reflections' },
    { id: 'fc-11', front: 'Rule for reflecting in the line y = −x?', back: '(x, y) → (−y, −x). Swap and negate both.', topic: 'Translations and reflections' },
    { id: 'fc-12', front: 'Rule for reflecting in the line x = k?', back: '(x, y) → (2k − x, y). The y-coordinate stays the same.', topic: 'Translations and reflections' },
    { id: 'fc-13', front: 'Rule for reflecting in the line y = k?', back: '(x, y) → (x, 2k − y). The x-coordinate stays the same.', topic: 'Translations and reflections' },
    { id: 'fc-14', front: 'What must you always state when describing a reflection?', back: 'The equation of the mirror line (e.g. "reflection in the line y = 0").', topic: 'Translations and reflections' },

    // ── Rotations ──
    { id: 'fc-15', front: 'What three things describe a rotation?', back: 'Centre of rotation, angle of rotation, and direction (clockwise or anticlockwise).', topic: 'Rotations and enlargements' },
    { id: 'fc-16', front: 'Rule for 90° anticlockwise rotation about O?', back: '(x, y) → (−y, x).', topic: 'Rotations and enlargements' },
    { id: 'fc-17', front: 'Rule for 90° clockwise rotation about O?', back: '(x, y) → (y, −x).', topic: 'Rotations and enlargements' },
    { id: 'fc-18', front: 'Rule for 180° rotation about O?', back: '(x, y) → (−x, −y).', topic: 'Rotations and enlargements' },
    { id: 'fc-19', front: 'Is the image of a rotation congruent to the object?', back: 'Yes. Rotation preserves size and shape.', topic: 'Rotations and enlargements' },

    // ── Enlargements ──
    { id: 'fc-20', front: 'What two things describe an enlargement?', back: 'The scale factor and the centre of enlargement.', topic: 'Rotations and enlargements' },
    { id: 'fc-21', front: 'Scale factor > 1: what happens to the image?', back: 'The image is larger than the object.', topic: 'Rotations and enlargements' },
    { id: 'fc-22', front: 'Scale factor between 0 and 1: what happens?', back: 'The image is smaller than the object (it is reduced).', topic: 'Rotations and enlargements' },
    { id: 'fc-23', front: 'Is the image of an enlargement congruent or similar?', back: 'Similar — same shape and angles, but different size (unless scale factor = 1).', topic: 'Rotations and enlargements' },
    { id: 'fc-24', front: 'How do you find the image of point P under enlargement, centre C, scale factor k?', back: 'Image = C + k × (P − C). Multiply the displacement from C by k and add to C.', topic: 'Rotations and enlargements' },
    { id: 'fc-25', front: 'Which transformations produce congruent images?', back: 'Translation, reflection, and rotation (not enlargement, unless scale factor = 1).', topic: 'Rotations and enlargements' },
  ],

};
