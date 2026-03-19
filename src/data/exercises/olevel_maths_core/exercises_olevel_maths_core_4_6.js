export const exercises_olevel_maths_core_4_6 = {

  mcq: [
    // ── Three-figure bearings ──
    { id: 'mcq-1', stem: 'Bearings are always measured from which direction?', options: ['East', 'South', 'North', 'West'], correctAnswer: 2, rationale: 'Bearings are always measured starting from North (the upward direction on a map).', topic: 'Three-figure bearings' },
    { id: 'mcq-2', stem: 'In which direction are bearings measured?', options: ['Anticlockwise', 'Clockwise', 'Left to right', 'Right to left'], correctAnswer: 1, rationale: 'Bearings are always measured clockwise from North.', topic: 'Three-figure bearings' },
    { id: 'mcq-3', stem: 'What is the bearing for due East?', options: ['045°', '090°', '180°', '270°'], correctAnswer: 1, rationale: 'East is 90° clockwise from North, written as a three-figure bearing: 090°.', topic: 'Three-figure bearings' },
    { id: 'mcq-4', stem: 'What is the bearing for due South?', options: ['090°', '270°', '180°', '360°'], correctAnswer: 2, rationale: 'South is directly opposite North, which is 180° clockwise from North.', topic: 'Three-figure bearings' },
    { id: 'mcq-5', stem: 'What is the bearing for due West?', options: ['090°', '180°', '270°', '360°'], correctAnswer: 2, rationale: 'West is 270° clockwise from North.', topic: 'Three-figure bearings' },
    { id: 'mcq-6', stem: 'Which of the following is a correctly written bearing?', options: ['45°', '90', '045°', '45 degrees'], correctAnswer: 2, rationale: 'Bearings must always be written as three-figure numbers with a degree symbol: 045°.', topic: 'Three-figure bearings' },
    { id: 'mcq-7', stem: 'What is the bearing for North-East?', options: ['045°', '090°', '135°', '315°'], correctAnswer: 0, rationale: 'North-East is halfway between North (000°) and East (090°), giving 045°.', topic: 'Three-figure bearings' },
    { id: 'mcq-8', stem: 'What is the bearing for South-East?', options: ['045°', '090°', '135°', '225°'], correctAnswer: 2, rationale: 'South-East is halfway between East (090°) and South (180°), giving 135°.', topic: 'Three-figure bearings' },
    { id: 'mcq-9', stem: 'What is the bearing for South-West?', options: ['135°', '180°', '225°', '315°'], correctAnswer: 2, rationale: 'South-West is halfway between South (180°) and West (270°), giving 225°.', topic: 'Three-figure bearings' },
    { id: 'mcq-10', stem: 'What is the bearing for North-West?', options: ['045°', '225°', '270°', '315°'], correctAnswer: 3, rationale: 'North-West is halfway between West (270°) and North (360°/000°), giving 315°.', topic: 'Three-figure bearings' },
    { id: 'mcq-11', stem: '"The bearing of B from A" means you stand at which point?', options: ['Point B', 'Point A', 'Halfway between A and B', 'Any point on the line AB'], correctAnswer: 1, rationale: '"Bearing of B from A" means stand at A, face North, and rotate clockwise until facing B.', topic: 'Three-figure bearings' },
    { id: 'mcq-12', stem: 'A bearing of 000° points in which direction?', options: ['East', 'South', 'West', 'North'], correctAnswer: 3, rationale: '000° means no rotation from North, so the direction is due North.', topic: 'Three-figure bearings' },
    { id: 'mcq-13', stem: 'A ship travels on a bearing of 120°. In which general direction is it heading?', options: ['North-East', 'South-East', 'South-West', 'North-West'], correctAnswer: 1, rationale: '120° is between East (090°) and South (180°), so the ship heads roughly South-East.', topic: 'Three-figure bearings' },
    { id: 'mcq-14', stem: 'A plane flies on a bearing of 250°. In which general direction is it heading?', options: ['North-East', 'South-East', 'South-West', 'West'], correctAnswer: 3, rationale: '250° is between South-West (225°) and West (270°), so the general direction is South-West to West.', topic: 'Three-figure bearings' },
    { id: 'mcq-15', stem: 'Which bearing is equivalent to due North?', options: ['000°', '090°', '180°', '360°'], correctAnswer: 0, rationale: 'Due North is written as 000°. Although 360° points the same way, the conventional three-figure bearing for North is 000°.', topic: 'Three-figure bearings' },

    // ── Back bearings and problems ──
    { id: 'mcq-16', stem: 'The bearing of B from A is 060°. What is the bearing of A from B?', options: ['120°', '240°', '300°', '060°'], correctAnswer: 1, rationale: '060° < 180°, so the back-bearing = 060° + 180° = 240°.', topic: 'Back bearings and problems' },
    { id: 'mcq-17', stem: 'The bearing of Q from P is 145°. What is the bearing of P from Q?', options: ['035°', '145°', '215°', '325°'], correctAnswer: 3, rationale: '145° < 180°, so back-bearing = 145° + 180° = 325°.', topic: 'Back bearings and problems' },
    { id: 'mcq-18', stem: 'The bearing of Y from X is 210°. What is the bearing of X from Y?', options: ['030°', '210°', '390°', '150°'], correctAnswer: 0, rationale: '210° ≥ 180°, so back-bearing = 210° − 180° = 030°.', topic: 'Back bearings and problems' },
    { id: 'mcq-19', stem: 'The bearing of B from A is 305°. What is the bearing of A from B?', options: ['125°', '305°', '485°', '055°'], correctAnswer: 0, rationale: '305° ≥ 180°, so back-bearing = 305° − 180° = 125°.', topic: 'Back bearings and problems' },
    { id: 'mcq-20', stem: 'The bearing of B from A is 090°. What is the bearing of A from B?', options: ['180°', '270°', '090°', '000°'], correctAnswer: 1, rationale: '090° < 180°, so back-bearing = 090° + 180° = 270°. If B is east of A, then A is west of B.', topic: 'Back bearings and problems' },
    { id: 'mcq-21', stem: 'The bearing of B from A is 180°. What is the bearing of A from B?', options: ['000°', '180°', '360°', '090°'], correctAnswer: 0, rationale: '180° ≥ 180°, so back-bearing = 180° − 180° = 000°. If B is due south of A, then A is due north of B.', topic: 'Back bearings and problems' },
    { id: 'mcq-22', stem: 'A back-bearing always differs from the original bearing by how many degrees?', options: ['90°', '120°', '180°', '270°'], correctAnswer: 2, rationale: 'A back-bearing is always 180° more or less than the original bearing, because the two North lines are parallel.', topic: 'Back bearings and problems' },
    { id: 'mcq-23', stem: 'The bearing of B from A is 072°. What is the bearing of A from B?', options: ['252°', '108°', '288°', '072°'], correctAnswer: 0, rationale: '072° < 180°, so back-bearing = 072° + 180° = 252°.', topic: 'Back bearings and problems' },
    { id: 'mcq-24', stem: 'The bearing of town B from town A is 350°. What is the bearing of A from B?', options: ['170°', '190°', '010°', '530°'], correctAnswer: 0, rationale: '350° ≥ 180°, so back-bearing = 350° − 180° = 170°.', topic: 'Back bearings and problems' },
    { id: 'mcq-25', stem: 'A hiker walks from camp on a bearing of 040° to a lake. To return to camp, which bearing should they follow?', options: ['040°', '140°', '220°', '320°'], correctAnswer: 2, rationale: '040° < 180°, so the return bearing = 040° + 180° = 220°.', topic: 'Back bearings and problems' },
    { id: 'mcq-26', stem: 'Why do back-bearings work by adding or subtracting 180°?', options: ['Because a full turn is 360°', 'Because the North lines at both points are parallel', 'Because bearings use three figures', 'Because a protractor measures 180°'], correctAnswer: 1, rationale: 'All North lines are parallel. From parallel-line angle rules (alternate/co-interior), the difference between a bearing and its reverse is exactly 180°.', topic: 'Back bearings and problems' },
    { id: 'mcq-27', stem: 'The bearing of C from D is 265°. What is the bearing of D from C?', options: ['085°', '265°', '445°', '175°'], correctAnswer: 0, rationale: '265° ≥ 180°, so back-bearing = 265° − 180° = 085°.', topic: 'Back bearings and problems' },
    { id: 'mcq-28', stem: 'A boat sails from harbour H on a bearing of 155° to an island I. What bearing does it sail on to return from I to H?', options: ['335°', '025°', '205°', '155°'], correctAnswer: 0, rationale: '155° < 180°, so back-bearing = 155° + 180° = 335°.', topic: 'Back bearings and problems' },
    { id: 'mcq-29', stem: 'Town B is on a bearing of 045° from town A. Town C is on a bearing of 135° from town A. What is the angle ∠BAC?', options: ['45°', '90°', '135°', '180°'], correctAnswer: 1, rationale: 'Angle BAC = 135° − 045° = 90°.', topic: 'Back bearings and problems' },
    { id: 'mcq-30', stem: 'A cyclist rides on a bearing of 300° and then needs to return. The return bearing is:', options: ['120°', '060°', '300°', '480°'], correctAnswer: 0, rationale: '300° ≥ 180°, so the return (back) bearing = 300° − 180° = 120°.', topic: 'Back bearings and problems' },
  ],

  fillblank: [
    { id: 'fb-1', stem: 'Bearings are always measured clockwise from ___.', template: 'Bearings are measured clockwise from __BLANK__', blanks: [{ answer: 'North' }], rationale: 'The first rule of bearings: always start from North.' },
    { id: 'fb-2', stem: 'A bearing must always be written as a ___-figure number.', template: 'Bearings use a __BLANK__-figure number', blanks: [{ answer: 'three' }], rationale: 'Bearings are always written with three digits, e.g. 045° not 45°.' },
    { id: 'fb-3', stem: 'The bearing for due East is ___.', template: 'Due East = __BLANK__', blanks: [{ answer: '090°' }], rationale: 'East is 90° clockwise from North, written as 090°.' },
    { id: 'fb-4', stem: 'The bearing for due South is ___.', template: 'Due South = __BLANK__', blanks: [{ answer: '180°' }], rationale: 'South is directly opposite North = 180°.' },
    { id: 'fb-5', stem: 'The bearing for due West is ___.', template: 'Due West = __BLANK__', blanks: [{ answer: '270°' }], rationale: 'West is 270° clockwise from North.' },
    { id: 'fb-6', stem: '"Bearing of B from A" means stand at ___ and face North.', template: 'Stand at point __BLANK__', blanks: [{ answer: 'A' }], rationale: 'The word "from" tells you where to stand. You stand at A and rotate clockwise towards B.' },
    { id: 'fb-7', stem: 'A back-bearing differs from the original bearing by ___ degrees.', template: 'Difference = __BLANK__ degrees', blanks: [{ answer: '180' }], rationale: 'Back-bearings are always 180° more or less because all North lines are parallel.' },
    { id: 'fb-8', stem: 'If the bearing of B from A is 075°, the back-bearing is 075° + 180° = ___.', template: 'Back-bearing = __BLANK__', blanks: [{ answer: '255°' }], rationale: '075° < 180°, so add 180°: 075° + 180° = 255°.' },
    { id: 'fb-9', stem: 'If the bearing of B from A is 230°, the back-bearing is 230° − 180° = ___.', template: 'Back-bearing = __BLANK__', blanks: [{ answer: '050°' }], rationale: '230° ≥ 180°, so subtract 180°: 230° − 180° = 050°.' },
    { id: 'fb-10', stem: 'North-East has a bearing of ___.', template: 'NE = __BLANK__', blanks: [{ answer: '045°' }], rationale: 'North-East is halfway between North (000°) and East (090°), giving 045°.' },
    { id: 'fb-11', stem: 'South-West has a bearing of ___.', template: 'SW = __BLANK__', blanks: [{ answer: '225°' }], rationale: 'South-West is halfway between South (180°) and West (270°), giving 225°.' },
    { id: 'fb-12', stem: 'When drawing a bearing, you must draw a ___ arrow at the starting point.', template: 'Draw a __BLANK__ arrow at the start', blanks: [{ answer: 'North' }], rationale: 'You must always draw a North arrow at the point you are measuring from.' },
    { id: 'fb-13', stem: 'If the bearing of B from A is less than 180°, you ___ 180° to find the back-bearing.', template: 'You __BLANK__ 180°', blanks: [{ answer: 'add' }], rationale: 'For bearings < 180°, back-bearing = bearing + 180°.' },
    { id: 'fb-14', stem: 'If the bearing of B from A is 180° or more, you ___ 180° to find the back-bearing.', template: 'You __BLANK__ 180°', blanks: [{ answer: 'subtract' }], rationale: 'For bearings ≥ 180°, back-bearing = bearing − 180° to keep the result in range 000°–360°.' },
    { id: 'fb-15', stem: 'The bearing of Q from P is 310°. The back-bearing of P from Q is ___.', template: 'Back-bearing = __BLANK__', blanks: [{ answer: '130°' }], rationale: '310° ≥ 180°, so 310° − 180° = 130°.' },
  ],

  dragdrop: [
    {
      id: 'dd-1',
      stem: 'Match each compass direction to its three-figure bearing.',
      categories: ['000°', '090°', '180°', '270°'],
      items: [
        { text: 'North', category: '000°' },
        { text: 'East', category: '090°' },
        { text: 'South', category: '180°' },
        { text: 'West', category: '270°' },
      ],
    },
    {
      id: 'dd-2',
      stem: 'Match each inter-cardinal direction to its bearing.',
      categories: ['045°', '135°', '225°', '315°'],
      items: [
        { text: 'North-East', category: '045°' },
        { text: 'South-East', category: '135°' },
        { text: 'South-West', category: '225°' },
        { text: 'North-West', category: '315°' },
      ],
    },
    {
      id: 'dd-3',
      stem: 'Sort each bearing into its correct quadrant.',
      categories: ['North to East (000°–090°)', 'East to South (090°–180°)', 'South to West (180°–270°)', 'West to North (270°–360°)'],
      items: [
        { text: '035°', category: 'North to East (000°–090°)' },
        { text: '150°', category: 'East to South (090°–180°)' },
        { text: '245°', category: 'South to West (180°–270°)' },
        { text: '310°', category: 'West to North (270°–360°)' },
        { text: '072°', category: 'North to East (000°–090°)' },
        { text: '195°', category: 'South to West (180°–270°)' },
      ],
    },
    {
      id: 'dd-4',
      stem: 'Match each bearing to its correct back-bearing.',
      categories: ['240°', '330°', '045°', '100°'],
      items: [
        { text: 'Bearing 060° → back-bearing', category: '240°' },
        { text: 'Bearing 150° → back-bearing', category: '330°' },
        { text: 'Bearing 225° → back-bearing', category: '045°' },
        { text: 'Bearing 280° → back-bearing', category: '100°' },
      ],
    },
    {
      id: 'dd-5',
      stem: 'Sort these statements into TRUE or FALSE.',
      categories: ['True', 'False'],
      items: [
        { text: 'Bearings are measured anticlockwise', category: 'False' },
        { text: 'Bearings are always three-figure numbers', category: 'True' },
        { text: 'Bearings are measured from East', category: 'False' },
        { text: 'A back-bearing differs by 180°', category: 'True' },
        { text: 'North has a bearing of 090°', category: 'False' },
        { text: 'A bearing of 045° means North-East', category: 'True' },
      ],
    },
    {
      id: 'dd-6',
      stem: 'Classify each bearing as needing "+180°" or "−180°" to find the back-bearing.',
      categories: ['Add 180°', 'Subtract 180°'],
      items: [
        { text: '050°', category: 'Add 180°' },
        { text: '125°', category: 'Add 180°' },
        { text: '210°', category: 'Subtract 180°' },
        { text: '340°', category: 'Subtract 180°' },
        { text: '175°', category: 'Add 180°' },
        { text: '260°', category: 'Subtract 180°' },
      ],
    },
    {
      id: 'dd-7',
      stem: 'Match each description to the correct bearing.',
      categories: ['045°', '135°', '270°', '000°'],
      items: [
        { text: 'Directly North', category: '000°' },
        { text: 'Directly West', category: '270°' },
        { text: 'North-East', category: '045°' },
        { text: 'South-East', category: '135°' },
      ],
    },
    {
      id: 'dd-8',
      stem: 'Sort these written bearings into correct or incorrect format.',
      categories: ['Correct', 'Incorrect'],
      items: [
        { text: '045°', category: 'Correct' },
        { text: '45°', category: 'Incorrect' },
        { text: '180°', category: 'Correct' },
        { text: '90', category: 'Incorrect' },
        { text: '005°', category: 'Correct' },
        { text: '5°', category: 'Incorrect' },
      ],
    },
    {
      id: 'dd-9',
      stem: 'Match each original bearing to its back-bearing.',
      categories: ['200°', '005°', '295°', '350°'],
      items: [
        { text: '020° → back-bearing', category: '200°' },
        { text: '185° → back-bearing', category: '005°' },
        { text: '115° → back-bearing', category: '295°' },
        { text: '170° → back-bearing', category: '350°' },
      ],
    },
    {
      id: 'dd-10',
      stem: 'Match the keyword to its correct definition.',
      categories: ['Starting direction for bearings', 'Direction of rotation', 'Reverse bearing (±180°)', 'Number of digits required'],
      items: [
        { text: 'North', category: 'Starting direction for bearings' },
        { text: 'Clockwise', category: 'Direction of rotation' },
        { text: 'Back-bearing', category: 'Reverse bearing (±180°)' },
        { text: 'Three', category: 'Number of digits required' },
      ],
    },
  ],

  sequence: [
    {
      id: 'seq-1',
      stem: 'Put these steps for measuring a bearing in the correct order.',
      steps: [
        'Draw a North arrow at the starting point',
        'Place the protractor centre on the point, baseline along North',
        'Measure the angle clockwise from North to the direction line',
        'Write the angle as a three-figure bearing'
      ]
    },
    {
      id: 'seq-2',
      stem: 'Order the steps for drawing a bearing of 130° from point A.',
      steps: [
        'Mark point A and draw a North arrow pointing up',
        'Place your protractor at A with 0° aligned to North',
        'Measure 130° clockwise and mark the angle',
        'Draw a line from A through the mark and label the end point'
      ]
    },
    {
      id: 'seq-3',
      stem: 'Order the steps for finding the back-bearing when the bearing of B from A is 065°.',
      steps: [
        'Identify the bearing of B from A: 065°',
        'Check if 065° is less than 180° — it is',
        'Add 180° to the bearing: 065° + 180°',
        'Write the back-bearing: 245°'
      ]
    },
    {
      id: 'seq-4',
      stem: 'Order the steps for finding the back-bearing when the bearing of B from A is 290°.',
      steps: [
        'Identify the bearing of B from A: 290°',
        'Check if 290° is 180° or more — it is',
        'Subtract 180° from the bearing: 290° − 180°',
        'Write the back-bearing: 110°'
      ]
    },
    {
      id: 'seq-5',
      stem: 'Put the compass directions in clockwise order starting from North.',
      steps: [
        'North (000°)',
        'East (090°)',
        'South (180°)',
        'West (270°)'
      ]
    },
    {
      id: 'seq-6',
      stem: 'Order the steps for solving: "A walks to B on bearing 040°, then B walks to C on bearing 130°. Find angle ABC."',
      steps: [
        'Draw a sketch with a North arrow at each point',
        'Find the back-bearing of A from B: 040° + 180° = 220°',
        'Note the bearing of C from B is 130°',
        'Calculate angle ABC = 360° − 220° + 130° = 270° or use the angles between the directions to find 90°'
      ]
    },
    {
      id: 'seq-7',
      stem: 'Put the eight compass points in clockwise order from North.',
      steps: [
        'N (000°), NE (045°)',
        'E (090°), SE (135°)',
        'S (180°), SW (225°)',
        'W (270°), NW (315°)'
      ]
    },
    {
      id: 'seq-8',
      stem: 'Order the key rules for bearings from most fundamental to how they are applied.',
      steps: [
        'Always start measuring from North',
        'Always measure clockwise',
        'Always write as a three-figure number',
        'For back-bearings, add or subtract 180°'
      ]
    },
  ],

  keyword: [
    { id: 'kw-1', stem: 'State the three rules for writing a bearing. [3 marks]', marks: 3, keywords: ['North', 'clockwise', 'three-figure'], modelAnswer: 'Bearings are measured from North, in a clockwise direction, and are always written as a three-figure number.' },
    { id: 'kw-2', stem: 'Explain what "bearing of B from A" means. [2 marks]', marks: 2, keywords: ['stand at A', 'clockwise'], modelAnswer: 'Stand at point A, face North, then rotate clockwise until you face B. The angle you turn through is the bearing.' },
    { id: 'kw-3', stem: 'How do you find a back-bearing? [2 marks]', marks: 2, keywords: ['180°', 'add or subtract'], modelAnswer: 'Add 180° to the bearing if it is less than 180°, or subtract 180° if it is 180° or more.' },
    { id: 'kw-4', stem: 'Why does the back-bearing differ from the original bearing by 180°? [2 marks]', marks: 2, keywords: ['North lines', 'parallel'], modelAnswer: 'The North lines at both points are parallel, so alternate or co-interior angle rules mean the difference is exactly 180°.' },
    { id: 'kw-5', stem: 'The bearing of B from A is 115°. Find the bearing of A from B. [2 marks]', marks: 2, keywords: ['115°', '295°'], modelAnswer: '115° is less than 180°, so add 180°: 115° + 180° = 295°.' },
    { id: 'kw-6', stem: 'The bearing of Q from P is 250°. Find the bearing of P from Q. [2 marks]', marks: 2, keywords: ['250°', '070°'], modelAnswer: '250° is 180° or more, so subtract 180°: 250° − 180° = 070°.' },
    { id: 'kw-7', stem: 'What bearing is due North, and what is its back-bearing? [2 marks]', marks: 2, keywords: ['000°', '180°'], modelAnswer: 'Due North is 000°. Its back-bearing is 000° + 180° = 180° (due South).' },
    { id: 'kw-8', stem: 'Describe the steps to draw a bearing of 140° from a point P. [3 marks]', marks: 3, keywords: ['North arrow', 'protractor', '140° clockwise'], modelAnswer: 'Draw a North arrow at P. Place a protractor at P with 0° along North. Measure 140° clockwise and draw a line from P in that direction.' },
    { id: 'kw-9', stem: 'A ship sails from port on a bearing of 055° to an island. What bearing should it take to return? [2 marks]', marks: 2, keywords: ['055°', '235°'], modelAnswer: '055° < 180°, so return bearing = 055° + 180° = 235°.' },
    { id: 'kw-10', stem: 'Explain why 45° is not an acceptable way to write a bearing. [1 mark]', marks: 1, keywords: ['three-figure', '045°'], modelAnswer: 'Bearings must be written as three-figure numbers, so it should be 045°, not 45°.' },
    { id: 'kw-11', stem: 'What is the difference between a bearing and a compass direction? [2 marks]', marks: 2, keywords: ['angle', 'three-figure'], modelAnswer: 'A bearing is a precise three-figure angle measured clockwise from North, whereas a compass direction (like NE or SW) is a general label.' },
    { id: 'kw-12', stem: 'Town X is on a bearing of 320° from town Y. Explain how to find the bearing of Y from X. [2 marks]', marks: 2, keywords: ['subtract 180°', '140°'], modelAnswer: '320° ≥ 180°, so back-bearing = 320° − 180° = 140°. The bearing of Y from X is 140°.' },
  ],

  flashcards: [
    { id: 'fc-1', front: 'What is a bearing?', back: 'A direction measured as an angle, taken clockwise from North, written as a three-figure number (e.g. 045°).', topic: 'Three-figure bearings' },
    { id: 'fc-2', front: 'What are the three rules of bearings?', back: '1. Measured from North\n2. Measured clockwise\n3. Written as three figures (000°–360°)', topic: 'Three-figure bearings' },
    { id: 'fc-3', front: 'What is the three-figure bearing for North?', back: '000°', topic: 'Three-figure bearings' },
    { id: 'fc-4', front: 'What is the three-figure bearing for East?', back: '090°', topic: 'Three-figure bearings' },
    { id: 'fc-5', front: 'What is the three-figure bearing for South?', back: '180°', topic: 'Three-figure bearings' },
    { id: 'fc-6', front: 'What is the three-figure bearing for West?', back: '270°', topic: 'Three-figure bearings' },
    { id: 'fc-7', front: 'What is the bearing for North-East?', back: '045°', topic: 'Three-figure bearings' },
    { id: 'fc-8', front: 'What is the bearing for South-East?', back: '135°', topic: 'Three-figure bearings' },
    { id: 'fc-9', front: 'What is the bearing for South-West?', back: '225°', topic: 'Three-figure bearings' },
    { id: 'fc-10', front: 'What is the bearing for North-West?', back: '315°', topic: 'Three-figure bearings' },
    { id: 'fc-11', front: '"Bearing of B from A" — where do you stand?', back: 'Stand at point A, face North, then rotate clockwise until you face B.', topic: 'Three-figure bearings' },
    { id: 'fc-12', front: 'What does "from" tell you in a bearing question?', back: 'It tells you the point where you stand and draw your North line.', topic: 'Three-figure bearings' },
    { id: 'fc-13', front: 'Why must bearings be three figures?', back: 'To avoid ambiguity — e.g. 045° is clearly different from 450° and cannot be confused with other numbers.', topic: 'Three-figure bearings' },
    { id: 'fc-14', front: 'What is a back-bearing?', back: 'The bearing in the reverse direction — the bearing from B back to A. It differs from the original bearing by exactly 180°.', topic: 'Back bearings and problems' },
    { id: 'fc-15', front: 'Back-bearing rule: bearing < 180°', back: 'Add 180° to the original bearing.', topic: 'Back bearings and problems' },
    { id: 'fc-16', front: 'Back-bearing rule: bearing ≥ 180°', back: 'Subtract 180° from the original bearing.', topic: 'Back bearings and problems' },
    { id: 'fc-17', front: 'Why does the back-bearing differ by exactly 180°?', back: 'Because the North lines at both points are parallel, so alternate/co-interior angle rules give a difference of 180°.', topic: 'Back bearings and problems' },
    { id: 'fc-18', front: 'Bearing of B from A = 060°. What is the back-bearing?', back: '060° + 180° = 240°', topic: 'Back bearings and problems' },
    { id: 'fc-19', front: 'Bearing of B from A = 200°. What is the back-bearing?', back: '200° − 180° = 020°', topic: 'Back bearings and problems' },
    { id: 'fc-20', front: 'Bearing of B from A = 145°. What is the back-bearing?', back: '145° + 180° = 325°', topic: 'Back bearings and problems' },
    { id: 'fc-21', front: 'Bearing of B from A = 310°. What is the back-bearing?', back: '310° − 180° = 130°', topic: 'Back bearings and problems' },
    { id: 'fc-22', front: 'Quick rule for back-bearings', back: 'Add or subtract 180° — whichever keeps the answer between 000° and 360°.', topic: 'Back bearings and problems' },
    { id: 'fc-23', front: 'What must you draw at every point in a bearings diagram?', back: 'A North arrow pointing upwards.', topic: 'Three-figure bearings' },
    { id: 'fc-24', front: 'A bearing of 120° points roughly which direction?', back: 'South-East (between East 090° and South 180°).', topic: 'Three-figure bearings' },
    { id: 'fc-25', front: 'Steps to draw a bearing from a point', back: '1. Mark point and draw North arrow\n2. Place protractor at point, 0° along North\n3. Measure angle clockwise\n4. Draw the line in that direction', topic: 'Three-figure bearings' },
  ],

};
