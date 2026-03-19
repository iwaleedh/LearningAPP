export const exercises_olevel_maths_core_5_3 = {

  mcq: [
    // ── Volume of cuboids ──
    { id: 'mcq-1', stem: 'A cuboid is 5 cm long, 4 cm wide and 3 cm tall. What is its volume?', options: ['35 cm³', '60 cm³', '47 cm³', '94 cm³'], correctAnswer: 1, rationale: 'V = l × w × h = 5 × 4 × 3 = 60 cm³.', topic: 'Volume of prisms and cylinders' },
    { id: 'mcq-2', stem: 'A rectangular box has dimensions 10 cm × 6 cm × 2 cm. What is its volume?', options: ['120 cm³', '18 cm³', '180 cm³', '60 cm³'], correctAnswer: 0, rationale: 'V = 10 × 6 × 2 = 120 cm³.', topic: 'Volume of prisms and cylinders' },
    { id: 'mcq-3', stem: 'A cube has side length 4 cm. What is its volume?', options: ['16 cm³', '48 cm³', '64 cm³', '12 cm³'], correctAnswer: 2, rationale: 'V = 4 × 4 × 4 = 64 cm³.', topic: 'Volume of prisms and cylinders' },
    { id: 'mcq-4', stem: 'A cuboid has volume 180 cm³. Its length is 9 cm and width is 5 cm. What is its height?', options: ['2 cm', '4 cm', '6 cm', '3 cm'], correctAnswer: 1, rationale: 'V = l × w × h → 180 = 9 × 5 × h → h = 180 ÷ 45 = 4 cm.', topic: 'Volume of prisms and cylinders' },

    // ── Volume of prisms ──
    { id: 'mcq-5', stem: 'Which formula gives the volume of any prism?', options: ['V = l × w × h', 'V = πr²h', 'V = cross-section area × length', 'V = ⅓ × base area × h'], correctAnswer: 2, rationale: 'The volume of any prism = area of cross-section × length (or height).', topic: 'Volume of prisms and cylinders' },
    { id: 'mcq-6', stem: 'A triangular prism has a cross-section with base 8 cm and height 5 cm. The prism is 12 cm long. What is its volume?', options: ['480 cm³', '240 cm³', '120 cm³', '96 cm³'], correctAnswer: 1, rationale: 'Cross-section area = ½ × 8 × 5 = 20 cm². V = 20 × 12 = 240 cm³.', topic: 'Volume of prisms and cylinders' },
    { id: 'mcq-7', stem: 'A prism has a cross-sectional area of 30 cm² and a length of 7 cm. What is its volume?', options: ['37 cm³', '210 cm³', '150 cm³', '4.3 cm³'], correctAnswer: 1, rationale: 'V = A × l = 30 × 7 = 210 cm³.', topic: 'Volume of prisms and cylinders' },
    { id: 'mcq-8', stem: 'A prism has volume 360 cm³ and length 15 cm. What is its cross-sectional area?', options: ['24 cm²', '30 cm²', '12 cm²', '45 cm²'], correctAnswer: 0, rationale: 'A = V ÷ l = 360 ÷ 15 = 24 cm².', topic: 'Volume of prisms and cylinders' },
    { id: 'mcq-9', stem: 'A trapezoidal prism has a cross-section with parallel sides 6 cm and 10 cm, and height 4 cm. The prism is 9 cm long. What is its volume?', options: ['288 cm³', '360 cm³', '144 cm³', '216 cm³'], correctAnswer: 0, rationale: 'Trapezium area = ½ × (6 + 10) × 4 = 32 cm². V = 32 × 9 = 288 cm³.', topic: 'Volume of prisms and cylinders' },

    // ── Volume of cylinders ──
    { id: 'mcq-10', stem: 'A cylinder has radius 3 cm and height 10 cm. What is its volume? (Use π = 3.14)', options: ['94.2 cm³', '188.4 cm³', '282.6 cm³', '28.3 cm³'], correctAnswer: 2, rationale: 'V = πr²h = 3.14 × 3² × 10 = 3.14 × 9 × 10 = 282.6 cm³.', topic: 'Volume of prisms and cylinders' },
    { id: 'mcq-11', stem: 'Which expression gives the volume of a cylinder with radius r and height h?', options: ['2πrh', 'πr²h', '⅓πr²h', 'πrh²'], correctAnswer: 1, rationale: 'The volume of a cylinder is V = πr²h.', topic: 'Volume of prisms and cylinders' },
    { id: 'mcq-12', stem: 'A cylinder has diameter 8 cm and height 7 cm. What is its volume in terms of π?', options: ['56π cm³', '112π cm³', '448π cm³', '28π cm³'], correctAnswer: 1, rationale: 'Radius = 8 ÷ 2 = 4 cm. V = π × 4² × 7 = 112π cm³.', topic: 'Volume of prisms and cylinders' },
    { id: 'mcq-13', stem: 'A cylindrical tank has radius 5 cm and volume 500π cm³. What is its height?', options: ['10 cm', '20 cm', '25 cm', '100 cm'], correctAnswer: 1, rationale: 'V = πr²h → 500π = π × 25 × h → h = 500 ÷ 25 = 20 cm.', topic: 'Volume of prisms and cylinders' },
    { id: 'mcq-14', stem: 'A cylinder has volume 150π cm³ and height 6 cm. What is its radius?', options: ['5 cm', '25 cm', '10 cm', '3 cm'], correctAnswer: 0, rationale: 'V = πr²h → 150π = πr² × 6 → r² = 25 → r = 5 cm.', topic: 'Volume of prisms and cylinders' },

    // ── Volume of cones and spheres ──
    { id: 'mcq-15', stem: 'A cone has base radius 3 cm and height 12 cm. What is its volume in terms of π?', options: ['108π cm³', '36π cm³', '12π cm³', '324π cm³'], correctAnswer: 1, rationale: 'V = ⅓πr²h = ⅓ × π × 9 × 12 = 36π cm³.', topic: 'Volume of prisms and cylinders' },
    { id: 'mcq-16', stem: 'The volume of a cone is exactly what fraction of a cylinder with the same base and height?', options: ['½', '⅓', '¼', '⅔'], correctAnswer: 1, rationale: 'A cone is ⅓ the volume of a cylinder with the same base radius and height.', topic: 'Volume of prisms and cylinders' },
    { id: 'mcq-17', stem: 'A sphere has radius 6 cm. What is its volume in terms of π?', options: ['144π cm³', '288π cm³', '864π cm³', '48π cm³'], correctAnswer: 1, rationale: 'V = (4/3)πr³ = (4/3) × π × 216 = 288π cm³.', topic: 'Volume of prisms and cylinders' },

    // ── Surface area of cuboids ──
    { id: 'mcq-18', stem: 'A cuboid is 5 cm × 3 cm × 2 cm. What is its total surface area?', options: ['62 cm²', '30 cm²', '31 cm²', '60 cm²'], correctAnswer: 0, rationale: 'SA = 2(lw + lh + wh) = 2(15 + 10 + 6) = 2 × 31 = 62 cm².', topic: 'Surface area of 3D shapes' },
    { id: 'mcq-19', stem: 'Which formula gives the surface area of a cuboid?', options: ['l × w × h', '2(l + w + h)', '2(lw + lh + wh)', 'lw + lh + wh'], correctAnswer: 2, rationale: 'A cuboid has 3 pairs of identical rectangular faces: SA = 2(lw + lh + wh).', topic: 'Surface area of 3D shapes' },
    { id: 'mcq-20', stem: 'A cube has side length 6 cm. What is its total surface area?', options: ['36 cm²', '216 cm²', '144 cm²', '72 cm²'], correctAnswer: 1, rationale: 'A cube has 6 identical square faces. SA = 6 × 6² = 6 × 36 = 216 cm².', topic: 'Surface area of 3D shapes' },

    // ── Surface area of cylinders ──
    { id: 'mcq-21', stem: 'A cylinder has radius 4 cm and height 10 cm. What is its curved surface area in terms of π?', options: ['40π cm²', '80π cm²', '160π cm²', '32π cm²'], correctAnswer: 1, rationale: 'Curved SA = 2πrh = 2 × π × 4 × 10 = 80π cm².', topic: 'Surface area of 3D shapes' },
    { id: 'mcq-22', stem: 'A cylinder has radius 5 cm and height 12 cm. What is its total surface area in terms of π?', options: ['120π cm²', '170π cm²', '85π cm²', '145π cm²'], correctAnswer: 1, rationale: 'SA = 2πrh + 2πr² = 2π(5)(12) + 2π(25) = 120π + 50π = 170π cm².', topic: 'Surface area of 3D shapes' },
    { id: 'mcq-23', stem: 'When unrolled, the curved surface of a cylinder forms which shape?', options: ['Circle', 'Triangle', 'Rectangle', 'Trapezium'], correctAnswer: 2, rationale: 'The curved surface unrolls into a rectangle with width = 2πr and height = h.', topic: 'Surface area of 3D shapes' },
    { id: 'mcq-24', stem: 'What is the difference between "curved surface area" and "total surface area" of a cylinder?', options: ['There is no difference', 'Curved SA includes the two circular ends', 'Total SA includes the two circular ends', 'Total SA uses the diameter instead'], correctAnswer: 2, rationale: 'Curved SA = 2πrh (lateral only). Total SA = 2πrh + 2πr² (lateral + both circles).', topic: 'Surface area of 3D shapes' },

    // ── Surface area of cones ──
    { id: 'mcq-25', stem: 'A cone has base radius 6 cm and slant height 10 cm. What is its curved surface area in terms of π?', options: ['60π cm²', '30π cm²', '120π cm²', '36π cm²'], correctAnswer: 0, rationale: 'Curved SA = πrl = π × 6 × 10 = 60π cm².', topic: 'Surface area of 3D shapes' },
    { id: 'mcq-26', stem: 'A cone has radius 3 cm and perpendicular height 4 cm. What is its slant height?', options: ['7 cm', '5 cm', '√7 cm', '12 cm'], correctAnswer: 1, rationale: 'l = √(r² + h²) = √(9 + 16) = √25 = 5 cm.', topic: 'Surface area of 3D shapes' },
    { id: 'mcq-27', stem: 'The surface area formula for a cone uses which measurement: perpendicular height or slant height?', options: ['Perpendicular height', 'Slant height', 'Both', 'Neither'], correctAnswer: 1, rationale: 'SA = πrl + πr² uses the slant height l, not the perpendicular height h.', topic: 'Surface area of 3D shapes' },

    // ── Surface area of spheres ──
    { id: 'mcq-28', stem: 'A sphere has radius 7 cm. What is its surface area in terms of π?', options: ['49π cm²', '196π cm²', '28π cm²', '98π cm²'], correctAnswer: 1, rationale: 'SA = 4πr² = 4 × π × 49 = 196π cm².', topic: 'Surface area of 3D shapes' },
    { id: 'mcq-29', stem: 'Which formula gives the surface area of a sphere?', options: ['2πr²', '4πr²', '(4/3)πr³', 'πr²'], correctAnswer: 1, rationale: 'Surface area of a sphere = 4πr².', topic: 'Surface area of 3D shapes' },
    { id: 'mcq-30', stem: 'A sphere has surface area 100π cm². What is its radius?', options: ['10 cm', '25 cm', '5 cm', '50 cm'], correctAnswer: 2, rationale: 'SA = 4πr² → 100π = 4πr² → r² = 25 → r = 5 cm.', topic: 'Surface area of 3D shapes' },
  ],

  fillblank: [
    { id: 'fb-1', stem: 'Volume is measured in ___ units (e.g. cm³).', template: 'Volume is measured in __BLANK__ units', blanks: [{ answer: 'cubic' }], rationale: 'Volume measures 3D space, so it is in cubic units such as cm³ or m³.' },
    { id: 'fb-2', stem: 'The volume of a cuboid = length × width × ___.', template: 'V = length × width × __BLANK__', blanks: [{ answer: 'height' }], rationale: 'V = l × w × h for a cuboid.' },
    { id: 'fb-3', stem: 'The volume of any prism = cross-section area × ___.', template: 'V = cross-section area × __BLANK__', blanks: [{ answer: 'length' }], rationale: 'V = A × l, where A is the area of the cross-section and l is the length of the prism.' },
    { id: 'fb-4', stem: 'A cylinder with radius 5 cm and height 8 cm has volume = ___ cm³ (in terms of π).', template: 'V = __BLANK__ cm³', blanks: [{ answer: '200π' }], rationale: 'V = πr²h = π × 25 × 8 = 200π cm³.' },
    { id: 'fb-5', stem: 'A cone is exactly ___ the volume of a cylinder with the same base and height.', template: 'A cone is __BLANK__ of the cylinder', blanks: [{ answer: '⅓' }], rationale: 'V(cone) = ⅓πr²h, which is ⅓ of πr²h (the cylinder).' },
    { id: 'fb-6', stem: 'The formula for the volume of a sphere is V = (4/3)π___', template: 'V = (4/3)π__BLANK__', blanks: [{ answer: 'r³' }], rationale: 'V = (4/3)πr³.' },
    { id: 'fb-7', stem: 'Surface area is measured in ___ units (e.g. cm²).', template: 'Surface area is in __BLANK__ units', blanks: [{ answer: 'square' }], rationale: 'Surface area measures 2D area so it uses square units.' },
    { id: 'fb-8', stem: 'A cuboid has ___ rectangular faces in total.', template: 'A cuboid has __BLANK__ faces', blanks: [{ answer: '6' }], rationale: 'A cuboid has 6 faces: 3 pairs of identical rectangles.' },
    { id: 'fb-9', stem: 'The curved surface area of a cylinder = 2πr × ___.', template: 'Curved SA = 2πr × __BLANK__', blanks: [{ answer: 'h' }], rationale: 'Curved SA = 2πrh.' },
    { id: 'fb-10', stem: 'When unrolled, the curved surface of a cylinder forms a ___.', template: 'The unrolled surface is a __BLANK__', blanks: [{ answer: 'rectangle' }], rationale: 'The curved surface unrolls into a rectangle with width 2πr and height h.' },
    { id: 'fb-11', stem: 'For a cone, the slant height l = √(r² + ___).', template: 'l = √(r² + __BLANK__)', blanks: [{ answer: 'h²' }], rationale: 'The slant height is found using Pythagoras: l = √(r² + h²).' },
    { id: 'fb-12', stem: 'The surface area formula for a cone uses the ___ height, not the perpendicular height.', template: 'The cone SA uses __BLANK__ height', blanks: [{ answer: 'slant' }], rationale: 'SA = πrl + πr² uses the slant height l.' },
    { id: 'fb-13', stem: 'The surface area of a sphere is SA = ___πr².', template: 'SA = __BLANK__πr²', blanks: [{ answer: '4' }], rationale: 'SA = 4πr².' },
    { id: 'fb-14', stem: 'A cube with side 3 cm has total surface area = ___ cm².', template: 'SA = __BLANK__ cm²', blanks: [{ answer: '54' }], rationale: 'SA = 6 × 3² = 6 × 9 = 54 cm².' },
    { id: 'fb-15', stem: 'A sphere with radius 10 cm has surface area = ___π cm².', template: 'SA = __BLANK__π cm²', blanks: [{ answer: '400' }], rationale: 'SA = 4π × 10² = 400π cm².' },
  ],

  dragdrop: [
    {
      id: 'dd-1',
      stem: 'Sort each formula into the correct category: Volume or Surface Area.',
      categories: ['Volume formula', 'Surface area formula'],
      items: [
        { text: 'πr²h', category: 'Volume formula' },
        { text: '2πrh + 2πr²', category: 'Surface area formula' },
        { text: 'l × w × h', category: 'Volume formula' },
        { text: '2(lw + lh + wh)', category: 'Surface area formula' },
        { text: '(4/3)πr³', category: 'Volume formula' },
        { text: '4πr²', category: 'Surface area formula' },
      ],
    },
    {
      id: 'dd-2',
      stem: 'Match each shape to its volume formula.',
      categories: ['l × w × h', 'A × l', 'πr²h', '⅓πr²h', '(4/3)πr³'],
      items: [
        { text: 'Cuboid', category: 'l × w × h' },
        { text: 'Triangular prism', category: 'A × l' },
        { text: 'Cylinder', category: 'πr²h' },
        { text: 'Cone', category: '⅓πr²h' },
        { text: 'Sphere', category: '(4/3)πr³' },
      ],
    },
    {
      id: 'dd-3',
      stem: 'Match each shape to its surface area formula.',
      categories: ['2(lw + lh + wh)', '2πrh + 2πr²', 'πrl + πr²', '4πr²'],
      items: [
        { text: 'Cuboid', category: '2(lw + lh + wh)' },
        { text: 'Cylinder', category: '2πrh + 2πr²' },
        { text: 'Cone', category: 'πrl + πr²' },
        { text: 'Sphere', category: '4πr²' },
      ],
    },
    {
      id: 'dd-4',
      stem: 'Sort the units: which are for volume and which are for surface area?',
      categories: ['Volume (cubic)', 'Surface area (square)'],
      items: [
        { text: 'cm³', category: 'Volume (cubic)' },
        { text: 'cm²', category: 'Surface area (square)' },
        { text: 'm³', category: 'Volume (cubic)' },
        { text: 'm²', category: 'Surface area (square)' },
        { text: 'mm³', category: 'Volume (cubic)' },
        { text: 'mm²', category: 'Surface area (square)' },
      ],
    },
    {
      id: 'dd-5',
      stem: 'Sort these shapes: which have a factor of ⅓ in their volume formula?',
      categories: ['Has ⅓ factor', 'No ⅓ factor'],
      items: [
        { text: 'Cone', category: 'Has ⅓ factor' },
        { text: 'Pyramid', category: 'Has ⅓ factor' },
        { text: 'Cylinder', category: 'No ⅓ factor' },
        { text: 'Cuboid', category: 'No ⅓ factor' },
        { text: 'Sphere', category: 'No ⅓ factor' },
        { text: 'Prism', category: 'No ⅓ factor' },
      ],
    },
    {
      id: 'dd-6',
      stem: 'Match each cylinder part to its area expression.',
      categories: ['2πrh', 'πr²', '2πr² + 2πrh'],
      items: [
        { text: 'Curved surface', category: '2πrh' },
        { text: 'One circular end', category: 'πr²' },
        { text: 'Total surface area', category: '2πr² + 2πrh' },
      ],
    },
    {
      id: 'dd-7',
      stem: 'Sort the measurements: which does the cone surface area formula use?',
      categories: ['Used in cone SA', 'Not used directly in cone SA'],
      items: [
        { text: 'Base radius r', category: 'Used in cone SA' },
        { text: 'Slant height l', category: 'Used in cone SA' },
        { text: 'Perpendicular height h', category: 'Not used directly in cone SA' },
      ],
    },
    {
      id: 'dd-8',
      stem: 'Match each calculation to the correct volume.',
      categories: ['120 cm³', '200π cm³', '288 cm³'],
      items: [
        { text: 'Cuboid: 6 × 5 × 4', category: '120 cm³' },
        { text: 'Cylinder: π × 5² × 8', category: '200π cm³' },
        { text: 'Trapezoid prism: ½(6+10) × 4 × 9', category: '288 cm³' },
      ],
    },
    {
      id: 'dd-9',
      stem: 'Sort: does the question ask for curved SA only or total SA?',
      categories: ['Curved SA only', 'Total SA'],
      items: [
        { text: '"Find the curved surface area of the cylinder"', category: 'Curved SA only' },
        { text: '"Find the total surface area of the cylinder"', category: 'Total SA' },
        { text: '"Find the surface area of the closed cylinder"', category: 'Total SA' },
        { text: '"Find the area of the lateral surface"', category: 'Curved SA only' },
      ],
    },
    {
      id: 'dd-10',
      stem: 'Match each shape to the number of faces used in its surface area calculation.',
      categories: ['6 faces', '3 surfaces (2 circles + 1 curved)', '2 surfaces (1 circle + 1 curved)', '1 continuous surface'],
      items: [
        { text: 'Cuboid', category: '6 faces' },
        { text: 'Closed cylinder', category: '3 surfaces (2 circles + 1 curved)' },
        { text: 'Closed cone', category: '2 surfaces (1 circle + 1 curved)' },
        { text: 'Sphere', category: '1 continuous surface' },
      ],
    },
  ],

  sequence: [
    {
      id: 'seq-1',
      stem: 'Order the steps to find the volume of a triangular prism.',
      steps: [
        'Identify the triangular cross-section',
        'Calculate the area of the triangle: A = ½ × base × height',
        'Identify the length of the prism',
        'Multiply: V = A × length',
      ],
    },
    {
      id: 'seq-2',
      stem: 'Order the steps to find the volume of a cylinder.',
      steps: [
        'Identify the radius r and height h',
        'Square the radius: r²',
        'Multiply by π: πr²',
        'Multiply by the height: V = πr²h',
      ],
    },
    {
      id: 'seq-3',
      stem: 'Order the steps to find the total surface area of a cuboid (6 cm × 4 cm × 3 cm).',
      steps: [
        'Find the three different face areas: 6×4 = 24, 6×3 = 18, 4×3 = 12',
        'Add them: 24 + 18 + 12 = 54',
        'Multiply by 2 (each face has a matching pair): 2 × 54 = 108',
        'State the answer with correct units: 108 cm²',
      ],
    },
    {
      id: 'seq-4',
      stem: 'Order the steps to find the total surface area of a cylinder.',
      steps: [
        'Find the curved surface area: 2πrh',
        'Find the area of one circular end: πr²',
        'Double it for both ends: 2πr²',
        'Add curved + both ends: SA = 2πrh + 2πr²',
      ],
    },
    {
      id: 'seq-5',
      stem: 'Order the steps to find the total surface area of a cone given radius r and perpendicular height h.',
      steps: [
        'Find the slant height: l = √(r² + h²)',
        'Calculate the curved surface area: πrl',
        'Calculate the base area: πr²',
        'Add them: SA = πrl + πr²',
      ],
    },
    {
      id: 'seq-6',
      stem: 'Order the steps to find the unknown radius of a cylinder given V = 450π cm³ and h = 18 cm.',
      steps: [
        'Write down V = πr²h',
        'Substitute: 450π = πr² × 18',
        'Divide both sides by 18π: r² = 25',
        'Take the square root: r = 5 cm',
      ],
    },
    {
      id: 'seq-7',
      stem: 'Order the steps to find the volume of a trapezoidal prism.',
      steps: [
        'Identify the two parallel sides a, b and the height h of the trapezium',
        'Calculate the cross-section area: A = ½(a + b) × h',
        'Identify the length L of the prism',
        'Multiply: V = A × L',
      ],
    },
    {
      id: 'seq-8',
      stem: 'Order the steps to find the volume of a cone.',
      steps: [
        'Identify the base radius r and perpendicular height h',
        'Calculate πr²h (as if it were a cylinder)',
        'Divide by 3: V = ⅓πr²h',
        'Substitute values and simplify',
      ],
    },
  ],

  keyword: [
    { id: 'kw-1', stem: 'Define volume and state the units it is measured in. [2 marks]', marks: 2, keywords: ['3D space', 'cubic units'], modelAnswer: 'Volume is the amount of 3D space occupied by a solid, measured in cubic units such as cm³ or m³.' },
    { id: 'kw-2', stem: 'State the formula for the volume of any prism and explain the variables. [2 marks]', marks: 2, keywords: ['cross-section area', 'length'], modelAnswer: 'V = A × l, where A is the area of the cross-section and l is the length (or depth) of the prism.' },
    { id: 'kw-3', stem: 'Explain why a cone has ⅓ in its volume formula compared to a cylinder. [2 marks]', marks: 2, keywords: ['⅓', 'same base', 'same height'], modelAnswer: 'A cone with the same base radius and height as a cylinder has exactly ⅓ of the cylinder\'s volume, so V = ⅓πr²h.' },
    { id: 'kw-4', stem: 'Define surface area and state its units. [2 marks]', marks: 2, keywords: ['total area', 'outer faces', 'square units'], modelAnswer: 'Surface area is the total area of all the outer faces of a 3D shape, measured in square units such as cm² or m².' },
    { id: 'kw-5', stem: 'Explain how to find the curved surface area of a cylinder. [2 marks]', marks: 2, keywords: ['2πrh', 'rectangle'], modelAnswer: 'The curved surface unrolls into a rectangle of width 2πr and height h, so the curved surface area = 2πrh.' },
    { id: 'kw-6', stem: 'Explain the difference between the slant height and the perpendicular height of a cone. [2 marks]', marks: 2, keywords: ['slant height', 'perpendicular height', 'Pythagoras'], modelAnswer: 'The perpendicular height h is the vertical distance from base to apex. The slant height l is the distance along the sloped side, found by l = √(r² + h²) using Pythagoras.' },
    { id: 'kw-7', stem: 'A cylinder has radius 4 cm and height 10 cm. Explain how to find its total surface area. [3 marks]', marks: 3, keywords: ['2πrh', '2πr²', 'curved', 'circles'], modelAnswer: 'Find the curved surface area 2πrh = 2π(4)(10) = 80π. Find the area of both circles 2πr² = 2π(16) = 32π. Total SA = 80π + 32π = 112π cm².' },
    { id: 'kw-8', stem: 'Describe how to find the volume of a triangular prism with base 6 cm, triangle height 4 cm, and prism length 10 cm. [3 marks]', marks: 3, keywords: ['½ × base × height', 'cross-section', 'multiply by length'], modelAnswer: 'Find the cross-section area: ½ × 6 × 4 = 12 cm². Then multiply by the prism length: V = 12 × 10 = 120 cm³.' },
    { id: 'kw-9', stem: 'Explain why surface area and volume have different units. [2 marks]', marks: 2, keywords: ['two dimensions', 'three dimensions'], modelAnswer: 'Surface area measures flat (2D) area, so units are squared (cm²). Volume measures 3D space, so units are cubed (cm³).' },
    { id: 'kw-10', stem: 'State the surface area formula for a sphere and explain why there is no curved vs total distinction. [2 marks]', marks: 2, keywords: ['4πr²', 'no flat faces'], modelAnswer: 'SA = 4πr². A sphere has no flat faces — the entire surface is curved — so there is only one formula for its surface area.' },
    { id: 'kw-11', stem: 'Explain what "cross-section" means in the context of prisms. [2 marks]', marks: 2, keywords: ['same shape', 'along the length'], modelAnswer: 'A cross-section is the shape you see when you slice through the prism perpendicular to its length. All cross-sections of a prism are identical.' },
    { id: 'kw-12', stem: 'Explain how to find the total surface area of a cone when given the radius and perpendicular height. [3 marks]', marks: 3, keywords: ['slant height', '√(r² + h²)', 'πrl', 'πr²'], modelAnswer: 'First find the slant height l = √(r² + h²). Then curved SA = πrl and base area = πr². Total SA = πrl + πr².' },
  ],

  flashcards: [
    { id: 'fc-1', front: 'What is volume?', back: 'The amount of 3D space occupied by a solid, measured in cubic units (cm³, m³).', topic: 'Volume of prisms and cylinders' },
    { id: 'fc-2', front: 'Volume of a cuboid', back: 'V = l × w × h', topic: 'Volume of prisms and cylinders' },
    { id: 'fc-3', front: 'Volume of any prism', back: 'V = cross-section area × length (V = A × l)', topic: 'Volume of prisms and cylinders' },
    { id: 'fc-4', front: 'Volume of a cylinder', back: 'V = πr²h', topic: 'Volume of prisms and cylinders' },
    { id: 'fc-5', front: 'Volume of a cone', back: 'V = ⅓πr²h', topic: 'Volume of prisms and cylinders' },
    { id: 'fc-6', front: 'Volume of a sphere', back: 'V = (4/3)πr³', topic: 'Volume of prisms and cylinders' },
    { id: 'fc-7', front: 'Volume of a pyramid', back: 'V = ⅓ × base area × perpendicular height', topic: 'Volume of prisms and cylinders' },
    { id: 'fc-8', front: 'Which shapes have a ⅓ factor in their volume formula?', back: 'Cones and pyramids.', topic: 'Volume of prisms and cylinders' },
    { id: 'fc-9', front: 'How is a cone\'s volume related to a cylinder\'s?', back: 'A cone is exactly ⅓ the volume of a cylinder with the same base and height.', topic: 'Volume of prisms and cylinders' },
    { id: 'fc-10', front: 'What is the cross-section of a prism?', back: 'The uniform shape you see when you cut through the prism at right angles to its length. It is the same all the way along.', topic: 'Volume of prisms and cylinders' },
    { id: 'fc-11', front: 'Area of a trapezium (for prism cross-sections)', back: 'A = ½(a + b) × h, where a and b are the parallel sides.', topic: 'Volume of prisms and cylinders' },
    { id: 'fc-12', front: 'If a cylinder has V = πr²h and you know V and h, how do you find r?', back: 'r² = V ÷ (πh), then r = √(V ÷ (πh)).', topic: 'Volume of prisms and cylinders' },
    { id: 'fc-13', front: 'What is surface area?', back: 'The total area of all the outer faces of a 3D shape, measured in square units (cm², m²).', topic: 'Surface area of 3D shapes' },
    { id: 'fc-14', front: 'Surface area of a cuboid', back: 'SA = 2(lw + lh + wh)', topic: 'Surface area of 3D shapes' },
    { id: 'fc-15', front: 'Surface area of a cube with side s', back: 'SA = 6s²', topic: 'Surface area of 3D shapes' },
    { id: 'fc-16', front: 'Curved surface area of a cylinder', back: 'CSA = 2πrh', topic: 'Surface area of 3D shapes' },
    { id: 'fc-17', front: 'Total surface area of a cylinder', back: 'SA = 2πrh + 2πr²', topic: 'Surface area of 3D shapes' },
    { id: 'fc-18', front: 'Why does the curved surface of a cylinder = 2πrh?', back: 'When unrolled it forms a rectangle: width = circumference = 2πr, height = h. Area = 2πr × h.', topic: 'Surface area of 3D shapes' },
    { id: 'fc-19', front: 'Curved surface area of a cone', back: 'CSA = πrl (l = slant height)', topic: 'Surface area of 3D shapes' },
    { id: 'fc-20', front: 'Total surface area of a cone', back: 'SA = πrl + πr² (curved + base circle)', topic: 'Surface area of 3D shapes' },
    { id: 'fc-21', front: 'How do you find the slant height of a cone?', back: 'l = √(r² + h²) using Pythagoras\' theorem.', topic: 'Surface area of 3D shapes' },
    { id: 'fc-22', front: 'Surface area of a sphere', back: 'SA = 4πr²', topic: 'Surface area of 3D shapes' },
    { id: 'fc-23', front: 'Curved SA vs Total SA — what\'s the difference?', back: 'Curved SA counts only the lateral/curved surface. Total SA also includes flat ends (circles/bases).', topic: 'Surface area of 3D shapes' },
    { id: 'fc-24', front: 'Exam tip: cone SA formula', back: 'The formula SA = πrl + πr² uses the slant height l, NOT the perpendicular height. If given h, first find l = √(r² + h²).', topic: 'Surface area of 3D shapes' },
    { id: 'fc-25', front: 'How many faces does a cuboid have, and how are they paired?', back: '6 faces in 3 pairs: top/bottom (l × w), front/back (l × h), left/right (w × h).', topic: 'Surface area of 3D shapes' },
  ],

};
