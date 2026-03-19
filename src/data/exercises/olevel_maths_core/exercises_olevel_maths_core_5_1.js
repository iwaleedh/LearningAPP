export const exercises_olevel_maths_core_5_1 = {

  mcq: [
    // ── Perimeter of rectangles ──
    { id: 'mcq-1', stem: 'A rectangle has length 12 cm and width 5 cm. What is its perimeter?', options: ['34 cm', '60 cm', '17 cm', '24 cm'], correctAnswer: 0, rationale: 'P = 2(l + w) = 2(12 + 5) = 2 × 17 = 34 cm.', topic: 'Perimeter of 2D shapes' },
    { id: 'mcq-2', stem: 'A rectangle has perimeter 40 cm and length 13 cm. What is the width?', options: ['14 cm', '27 cm', '7 cm', '10 cm'], correctAnswer: 2, rationale: '40 = 2(13 + w) → 20 = 13 + w → w = 7 cm.', topic: 'Perimeter of 2D shapes' },
    { id: 'mcq-3', stem: 'Which formula gives the perimeter of a rectangle?', options: ['P = l × w', 'P = 2l + w', 'P = 2(l + w)', 'P = l + w'], correctAnswer: 2, rationale: 'A rectangle has two lengths and two widths, so P = 2(l + w).', topic: 'Perimeter of 2D shapes' },
    { id: 'mcq-4', stem: 'A square has side length 9 m. What is its perimeter?', options: ['18 m', '81 m', '27 m', '36 m'], correctAnswer: 3, rationale: 'A square has 4 equal sides. P = 4 × 9 = 36 m.', topic: 'Perimeter of 2D shapes' },
    { id: 'mcq-5', stem: 'A rectangle has perimeter 50 m. The length is 3 times the width. What is the width?', options: ['6.25 m', '12.5 m', '25 m', '8 m'], correctAnswer: 0, rationale: 'Let w = width. 2(3w + w) = 50 → 8w = 50 → w = 6.25 m.', topic: 'Perimeter of 2D shapes' },

    // ── Perimeter of triangles ──
    { id: 'mcq-6', stem: 'A triangle has sides 7 cm, 8 cm and 10 cm. What is its perimeter?', options: ['56 cm', '25 cm', '15 cm', '80 cm'], correctAnswer: 1, rationale: 'P = 7 + 8 + 10 = 25 cm.', topic: 'Perimeter of 2D shapes' },
    { id: 'mcq-7', stem: 'An equilateral triangle has perimeter 27 cm. What is the length of one side?', options: ['3 cm', '9 cm', '13.5 cm', '6 cm'], correctAnswer: 1, rationale: 'All 3 sides are equal. Side = 27 ÷ 3 = 9 cm.', topic: 'Perimeter of 2D shapes' },
    { id: 'mcq-8', stem: 'An isosceles triangle has two equal sides of 11 cm and a base of 6 cm. What is the perimeter?', options: ['17 cm', '22 cm', '28 cm', '33 cm'], correctAnswer: 2, rationale: 'P = 11 + 11 + 6 = 28 cm.', topic: 'Perimeter of 2D shapes' },
    { id: 'mcq-9', stem: 'A triangle has perimeter 34 cm. Two sides are 12 cm and 9 cm. What is the third side?', options: ['21 cm', '15 cm', '13 cm', '11 cm'], correctAnswer: 2, rationale: 'Third side = 34 − 12 − 9 = 13 cm.', topic: 'Perimeter of 2D shapes' },

    // ── Perimeter of other polygons ──
    { id: 'mcq-10', stem: 'A regular hexagon has perimeter 54 cm. What is the length of one side?', options: ['6 cm', '9 cm', '27 cm', '12 cm'], correctAnswer: 1, rationale: 'A regular hexagon has 6 equal sides. Side = 54 ÷ 6 = 9 cm.', topic: 'Perimeter of 2D shapes' },
    { id: 'mcq-11', stem: 'A regular pentagon has side length 8 cm. What is its perimeter?', options: ['32 cm', '40 cm', '48 cm', '16 cm'], correctAnswer: 1, rationale: 'A pentagon has 5 sides. P = 5 × 8 = 40 cm.', topic: 'Perimeter of 2D shapes' },
    { id: 'mcq-12', stem: 'Which unit is used for perimeter?', options: ['cm²', 'cm', 'cm³', 'm²'], correctAnswer: 1, rationale: 'Perimeter is a length, so it uses linear units such as cm, m, km — not squared units.', topic: 'Perimeter of 2D shapes' },

    // ── Area of rectangles ──
    { id: 'mcq-13', stem: 'A rectangle has length 15 cm and width 8 cm. What is its area?', options: ['46 cm²', '23 cm²', '120 cm²', '60 cm²'], correctAnswer: 2, rationale: 'A = l × w = 15 × 8 = 120 cm².', topic: 'Area of rectangles' },
    { id: 'mcq-14', stem: 'A rectangle has area 72 m² and length 9 m. What is the width?', options: ['8 m', '63 m', '81 m', '7 m'], correctAnswer: 0, rationale: 'w = A ÷ l = 72 ÷ 9 = 8 m.', topic: 'Area of rectangles' },
    { id: 'mcq-15', stem: 'A square has area 49 cm². What is the side length?', options: ['24.5 cm', '12.25 cm', '7 cm', '14 cm'], correctAnswer: 2, rationale: 'Side = √49 = 7 cm.', topic: 'Area of rectangles' },
    { id: 'mcq-16', stem: 'Which units are used for area?', options: ['cm', 'm', 'cm²', 'cm³'], correctAnswer: 2, rationale: 'Area is measured in square units because you multiply two lengths together.', topic: 'Area of rectangles' },

    // ── Area of triangles ──
    { id: 'mcq-17', stem: 'A triangle has base 12 cm and perpendicular height 5 cm. What is its area?', options: ['60 cm²', '17 cm²', '30 cm²', '120 cm²'], correctAnswer: 2, rationale: 'A = ½ × b × h = ½ × 12 × 5 = 30 cm².', topic: 'Area of triangles' },
    { id: 'mcq-18', stem: 'A triangle has area 24 m² and base 8 m. What is the perpendicular height?', options: ['3 m', '6 m', '16 m', '12 m'], correctAnswer: 1, rationale: '24 = ½ × 8 × h → 24 = 4h → h = 6 m.', topic: 'Area of triangles' },
    { id: 'mcq-19', stem: 'Why must you use the perpendicular height when finding the area of a triangle?', options: ['Because it is the longest side', 'Because the formula requires it', 'Because it is always horizontal', 'Because it equals the base'], correctAnswer: 1, rationale: 'The formula A = ½bh specifically uses the height measured at 90° to the base. Using the slant height gives the wrong answer.', topic: 'Area of triangles' },
    { id: 'mcq-20', stem: 'A right-angled triangle has legs 6 cm and 10 cm. What is its area?', options: ['16 cm²', '60 cm²', '30 cm²', '15 cm²'], correctAnswer: 2, rationale: 'The two legs are the base and perpendicular height. A = ½ × 6 × 10 = 30 cm².', topic: 'Area of triangles' },

    // ── Area of parallelograms ──
    { id: 'mcq-21', stem: 'A parallelogram has base 14 cm and perpendicular height 6 cm. What is its area?', options: ['84 cm²', '20 cm²', '42 cm²', '168 cm²'], correctAnswer: 0, rationale: 'A = b × h = 14 × 6 = 84 cm².', topic: 'Area of parallelograms' },
    { id: 'mcq-22', stem: 'A parallelogram has base 10 m, slant side 7 m and perpendicular height 5 m. What is the area?', options: ['70 m²', '50 m²', '35 m²', '17 m²'], correctAnswer: 1, rationale: 'A = b × h = 10 × 5 = 50 m². The slant side is not used in the area formula.', topic: 'Area of parallelograms' },
    { id: 'mcq-23', stem: 'The area of a parallelogram is 63 cm² and its base is 9 cm. What is the perpendicular height?', options: ['54 cm', '7 cm', '72 cm', '6 cm'], correctAnswer: 1, rationale: 'h = A ÷ b = 63 ÷ 9 = 7 cm.', topic: 'Area of parallelograms' },
    { id: 'mcq-24', stem: 'Which of these correctly describes the area formula for a parallelogram?', options: ['A = ½ × b × h', 'A = b × h', 'A = ½(a + b) × h', 'A = b²'], correctAnswer: 1, rationale: 'The area of a parallelogram is base × perpendicular height.', topic: 'Area of parallelograms' },

    // ── Area of trapeziums ──
    { id: 'mcq-25', stem: 'A trapezium has parallel sides 10 cm and 6 cm, and perpendicular height 4 cm. What is its area?', options: ['60 cm²', '32 cm²', '40 cm²', '24 cm²'], correctAnswer: 1, rationale: 'A = ½(a + b) × h = ½(10 + 6) × 4 = ½ × 16 × 4 = 32 cm².', topic: 'Area of trapeziums' },
    { id: 'mcq-26', stem: 'A trapezium has parallel sides 12 m and 8 m, and height 5 m. What is its area?', options: ['100 m²', '50 m²', '60 m²', '96 m²'], correctAnswer: 1, rationale: 'A = ½(12 + 8) × 5 = ½ × 20 × 5 = 50 m².', topic: 'Area of trapeziums' },
    { id: 'mcq-27', stem: 'The area of a trapezium is 45 cm². The parallel sides are 7 cm and 11 cm. What is the height?', options: ['5 cm', '2.5 cm', '9 cm', '10 cm'], correctAnswer: 0, rationale: '45 = ½(7 + 11) × h → 45 = 9h → h = 5 cm.', topic: 'Area of trapeziums' },
    { id: 'mcq-28', stem: 'In the trapezium area formula A = ½(a + b) × h, what do a and b represent?', options: ['The diagonals', 'The two parallel sides', 'The base and slant side', 'The base and height'], correctAnswer: 1, rationale: 'a and b are the two parallel sides of the trapezium.', topic: 'Area of trapeziums' },

    // ── Mixed / comparison ──
    { id: 'mcq-29', stem: 'A rectangle and a parallelogram both have base 10 cm and height 6 cm. How do their areas compare?', options: ['The rectangle is larger', 'The parallelogram is larger', 'They are equal', 'Not enough information'], correctAnswer: 2, rationale: 'Both use A = b × h. With the same base and perpendicular height, the areas are equal: 10 × 6 = 60 cm².', topic: 'Area of parallelograms' },
    { id: 'mcq-30', stem: 'Convert 3.5 m to cm.', options: ['35 cm', '350 cm', '0.035 cm', '3500 cm'], correctAnswer: 1, rationale: '1 m = 100 cm. 3.5 × 100 = 350 cm.', topic: 'Perimeter of 2D shapes' },
  ],

  fillblank: [
    { id: 'fb-1', stem: 'Perimeter is the total ___ around a shape.', template: 'Perimeter is the total __BLANK__ around a shape', blanks: [{ answer: 'distance' }], rationale: 'Perimeter measures the total distance around the outside of a 2D shape.' },
    { id: 'fb-2', stem: 'The perimeter of a rectangle is P = 2(___ + ___).', template: 'P = 2(__BLANK__ + __BLANK__)', blanks: [{ answer: 'l' }, { answer: 'w' }], rationale: 'The formula uses P = 2(l + w) where l = length and w = width.' },
    { id: 'fb-3', stem: 'A regular polygon with 5 sides each of length 6 cm has perimeter ___ cm.', template: 'Perimeter = __BLANK__ cm', blanks: [{ answer: '30' }], rationale: 'P = n × s = 5 × 6 = 30 cm.' },
    { id: 'fb-4', stem: 'Area is measured in ___ units.', template: 'Area is measured in __BLANK__ units', blanks: [{ answer: 'square' }], rationale: 'Area uses square units (e.g. cm², m²) because two lengths are multiplied together.' },
    { id: 'fb-5', stem: 'The area of a triangle is A = ½ × ___ × h.', template: 'A = ½ × __BLANK__ × h', blanks: [{ answer: 'b' }], rationale: 'The formula is A = ½ × base × perpendicular height.' },
    { id: 'fb-6', stem: 'A rectangle 9 cm by 4 cm has perimeter ___ cm.', template: 'Perimeter = __BLANK__ cm', blanks: [{ answer: '26' }], rationale: 'P = 2(9 + 4) = 2 × 13 = 26 cm.' },
    { id: 'fb-7', stem: 'A triangle with base 10 m and height 6 m has area ___ m².', template: 'Area = __BLANK__ m²', blanks: [{ answer: '30' }], rationale: 'A = ½ × 10 × 6 = 30 m².' },
    { id: 'fb-8', stem: 'For a parallelogram, you must use the ___ height, not the slant side.', template: 'Use the __BLANK__ height', blanks: [{ answer: 'perpendicular' }], rationale: 'The area formula requires the height measured at 90° to the base.' },
    { id: 'fb-9', stem: 'The area formula for a trapezium is A = ½(___ + ___) × h.', template: 'A = ½(__BLANK__ + __BLANK__) × h', blanks: [{ answer: 'a' }, { answer: 'b' }], rationale: 'a and b are the two parallel sides of the trapezium.' },
    { id: 'fb-10', stem: 'A trapezium with parallel sides 9 cm and 5 cm and height 4 cm has area ___ cm².', template: 'Area = __BLANK__ cm²', blanks: [{ answer: '28' }], rationale: 'A = ½(9 + 5) × 4 = ½ × 14 × 4 = 28 cm².' },
    { id: 'fb-11', stem: 'A parallelogram with base 8 cm and height 5 cm has area ___ cm².', template: 'Area = __BLANK__ cm²', blanks: [{ answer: '40' }], rationale: 'A = b × h = 8 × 5 = 40 cm².' },
    { id: 'fb-12', stem: '1 m = ___ cm.', template: '1 m = __BLANK__ cm', blanks: [{ answer: '100' }], rationale: 'There are 100 centimetres in 1 metre.' },
    { id: 'fb-13', stem: 'A rectangle with area 56 cm² and length 8 cm has width ___ cm.', template: 'Width = __BLANK__ cm', blanks: [{ answer: '7' }], rationale: 'w = A ÷ l = 56 ÷ 8 = 7 cm.' },
    { id: 'fb-14', stem: 'An equilateral triangle with side 10 cm has perimeter ___ cm.', template: 'Perimeter = __BLANK__ cm', blanks: [{ answer: '30' }], rationale: 'P = 3 × 10 = 30 cm.' },
    { id: 'fb-15', stem: 'The perimeter of a shape is measured in the same unit as ___.', template: 'Perimeter uses the same unit as __BLANK__', blanks: [{ answer: 'length' }], rationale: 'Perimeter is a total length, so it uses linear units (cm, m, km).' },
  ],

  dragdrop: [
    {
      id: 'dd-1',
      stem: 'Sort each formula to the correct shape.',
      categories: ['Rectangle', 'Triangle', 'Parallelogram', 'Trapezium'],
      items: [
        { text: 'A = l × w', category: 'Rectangle' },
        { text: 'A = ½ × b × h', category: 'Triangle' },
        { text: 'A = b × h', category: 'Parallelogram' },
        { text: 'A = ½(a + b) × h', category: 'Trapezium' },
      ],
    },
    {
      id: 'dd-2',
      stem: 'Sort each measurement as either a perimeter or an area.',
      categories: ['Perimeter', 'Area'],
      items: [
        { text: '26 cm', category: 'Perimeter' },
        { text: '30 cm²', category: 'Area' },
        { text: '48 m', category: 'Perimeter' },
        { text: '120 m²', category: 'Area' },
        { text: '15 mm', category: 'Perimeter' },
        { text: '64 cm²', category: 'Area' },
      ],
    },
    {
      id: 'dd-3',
      stem: 'Match each shape to the number of sides used to calculate its perimeter.',
      categories: ['3 sides', '4 sides', '5 sides', '6 sides'],
      items: [
        { text: 'Triangle', category: '3 sides' },
        { text: 'Rectangle', category: '4 sides' },
        { text: 'Pentagon', category: '5 sides' },
        { text: 'Hexagon', category: '6 sides' },
      ],
    },
    {
      id: 'dd-4',
      stem: 'Sort each unit as a unit of length or a unit of area.',
      categories: ['Length', 'Area'],
      items: [
        { text: 'cm', category: 'Length' },
        { text: 'cm²', category: 'Area' },
        { text: 'm', category: 'Length' },
        { text: 'm²', category: 'Area' },
        { text: 'km', category: 'Length' },
        { text: 'km²', category: 'Area' },
      ],
    },
    {
      id: 'dd-5',
      stem: 'Match each shape to the correct calculated area.',
      categories: ['30 cm²', '40 cm²', '60 cm²', '28 cm²'],
      items: [
        { text: 'Triangle: base 10 cm, height 6 cm', category: '30 cm²' },
        { text: 'Parallelogram: base 8 cm, height 5 cm', category: '40 cm²' },
        { text: 'Rectangle: 12 cm × 5 cm', category: '60 cm²' },
        { text: 'Trapezium: sides 9 cm & 5 cm, height 4 cm', category: '28 cm²' },
      ],
    },
    {
      id: 'dd-6',
      stem: 'Sort each variable to the shape formula where it is used.',
      categories: ['Rectangle (A = l × w)', 'Trapezium (A = ½(a + b) × h)'],
      items: [
        { text: 'l (length)', category: 'Rectangle (A = l × w)' },
        { text: 'w (width)', category: 'Rectangle (A = l × w)' },
        { text: 'a (parallel side)', category: 'Trapezium (A = ½(a + b) × h)' },
        { text: 'b (parallel side)', category: 'Trapezium (A = ½(a + b) × h)' },
      ],
    },
    {
      id: 'dd-7',
      stem: 'Classify each statement as true or false for area calculations.',
      categories: ['True', 'False'],
      items: [
        { text: 'Use perpendicular height for triangles', category: 'True' },
        { text: 'Multiply slant side × base for parallelogram area', category: 'False' },
        { text: 'Area is measured in square units', category: 'True' },
        { text: 'Perimeter is measured in square units', category: 'False' },
      ],
    },
    {
      id: 'dd-8',
      stem: 'Match each conversion to the correct value.',
      categories: ['10', '100', '1000'],
      items: [
        { text: '1 cm = ___ mm', category: '10' },
        { text: '1 m = ___ cm', category: '100' },
        { text: '1 km = ___ m', category: '1000' },
      ],
    },
    {
      id: 'dd-9',
      stem: 'Sort these shapes by whether their area formula includes ½.',
      categories: ['Includes ½', 'Does not include ½'],
      items: [
        { text: 'Triangle', category: 'Includes ½' },
        { text: 'Trapezium', category: 'Includes ½' },
        { text: 'Rectangle', category: 'Does not include ½' },
        { text: 'Parallelogram', category: 'Does not include ½' },
      ],
    },
    {
      id: 'dd-10',
      stem: 'Match each shape to the correct perimeter calculation.',
      categories: ['P = 2(l + w)', 'P = a + b + c', 'P = 4s', 'P = ns'],
      items: [
        { text: 'Rectangle', category: 'P = 2(l + w)' },
        { text: 'Triangle', category: 'P = a + b + c' },
        { text: 'Square', category: 'P = 4s' },
        { text: 'Regular polygon', category: 'P = ns' },
      ],
    },
  ],

  sequence: [
    {
      id: 'seq-1',
      stem: 'Put these steps in order to find the perimeter of a rectangle with length 9 cm and width 4 cm.',
      steps: [
        'Write the formula P = 2(l + w)',
        'Substitute: P = 2(9 + 4)',
        'Add inside the bracket: 9 + 4 = 13',
        'Multiply: 2 × 13 = 26 cm',
      ],
    },
    {
      id: 'seq-2',
      stem: 'Order the steps to find the area of a triangle with base 10 m and height 6 m.',
      steps: [
        'Write the formula A = ½ × b × h',
        'Substitute: A = ½ × 10 × 6',
        'Multiply base and height: 10 × 6 = 60',
        'Halve the result: 60 ÷ 2 = 30 m²',
      ],
    },
    {
      id: 'seq-3',
      stem: 'Order the steps to find the missing side of a triangle with perimeter 30 cm and two sides of 11 cm and 8 cm.',
      steps: [
        'Add the two known sides: 11 + 8 = 19',
        'Subtract from perimeter: 30 − 19',
        'Third side = 11 cm',
        'Check: 11 + 8 + 11 = 30 ✓',
      ],
    },
    {
      id: 'seq-4',
      stem: 'Order the steps to find the area of a trapezium with parallel sides 9 cm and 5 cm, height 4 cm.',
      steps: [
        'Write the formula A = ½(a + b) × h',
        'Add the parallel sides: 9 + 5 = 14',
        'Multiply by height: 14 × 4 = 56',
        'Halve: 56 ÷ 2 = 28 cm²',
      ],
    },
    {
      id: 'seq-5',
      stem: 'Order the steps to find the width of a rectangle with perimeter 46 m and length 15 m.',
      steps: [
        'Write: 46 = 2(15 + w)',
        'Divide both sides by 2: 23 = 15 + w',
        'Subtract 15: w = 23 − 15',
        'w = 8 m',
      ],
    },
    {
      id: 'seq-6',
      stem: 'Order the steps to find the side length of a regular hexagon with perimeter 42 cm.',
      steps: [
        'Identify the number of sides: 6',
        'Write: perimeter = n × s',
        'Substitute: 42 = 6 × s',
        'Divide: s = 42 ÷ 6 = 7 cm',
      ],
    },
    {
      id: 'seq-7',
      stem: 'Order the steps to find the perpendicular height of a parallelogram with area 63 cm² and base 9 cm.',
      steps: [
        'Write the formula A = b × h',
        'Substitute: 63 = 9 × h',
        'Divide both sides by 9',
        'h = 7 cm',
      ],
    },
    {
      id: 'seq-8',
      stem: 'Order the steps to find the height of a triangle with area 24 m² and base 8 m.',
      steps: [
        'Write: 24 = ½ × 8 × h',
        'Simplify: 24 = 4h',
        'Divide both sides by 4',
        'h = 6 m',
      ],
    },
  ],

  keyword: [
    { id: 'kw-1', stem: 'Define perimeter. [2 marks]', marks: 2, keywords: ['total distance', 'around', 'outside'], modelAnswer: 'Perimeter is the total distance around the outside of a 2D shape.' },
    { id: 'kw-2', stem: 'State the formula for the area of a triangle and define the variables. [2 marks]', marks: 2, keywords: ['½', 'base', 'perpendicular height'], modelAnswer: 'A = ½ × b × h, where b is the base and h is the perpendicular height.' },
    { id: 'kw-3', stem: 'State the formula for the area of a trapezium. [2 marks]', marks: 2, keywords: ['½', 'parallel sides', 'height'], modelAnswer: 'A = ½(a + b) × h, where a and b are the two parallel sides and h is the perpendicular height.' },
    { id: 'kw-4', stem: 'Explain why you must use perpendicular height, not slant height, in area formulas. [2 marks]', marks: 2, keywords: ['perpendicular', '90°', 'correct area'], modelAnswer: 'The perpendicular height is at 90° to the base. Using the slant height would give an incorrect, larger value for the area.' },
    { id: 'kw-5', stem: 'Explain why area is measured in square units. [1 mark]', marks: 1, keywords: ['two lengths', 'multiplied'], modelAnswer: 'Area is measured in square units because you multiply two lengths together.' },
    { id: 'kw-6', stem: 'Describe how to find a missing side of a polygon when the perimeter is known. [2 marks]', marks: 2, keywords: ['subtract', 'known sides', 'perimeter'], modelAnswer: 'Add up all the known side lengths and subtract the total from the given perimeter to find the missing side.' },
    { id: 'kw-7', stem: 'State the perimeter formula for a regular polygon with n sides of length s. [1 mark]', marks: 1, keywords: ['P = ns', 'n sides'], modelAnswer: 'P = n × s, where n is the number of sides and s is the side length.' },
    { id: 'kw-8', stem: 'Explain the difference between the area formulas for a rectangle and a parallelogram. [2 marks]', marks: 2, keywords: ['same formula', 'perpendicular height', 'not slant'], modelAnswer: 'Both use A = base × height. The key difference is that for a parallelogram you must use the perpendicular height, not the slant side.' },
    { id: 'kw-9', stem: 'State the formula for the perimeter of a rectangle. [1 mark]', marks: 1, keywords: ['P = 2(l + w)', 'length', 'width'], modelAnswer: 'P = 2(l + w), where l is the length and w is the width.' },
    { id: 'kw-10', stem: 'A rectangle has length 13 cm and width 5 cm. Explain how to find the area. [2 marks]', marks: 2, keywords: ['multiply', '13', '5', '65'], modelAnswer: 'Multiply the length by the width: A = 13 × 5 = 65 cm².' },
    { id: 'kw-11', stem: 'State the conversion: 1 km = ___ m and 1 m = ___ cm. [2 marks]', marks: 2, keywords: ['1000', '100'], modelAnswer: '1 km = 1000 m and 1 m = 100 cm.' },
    { id: 'kw-12', stem: 'Explain why a trapezium area formula adds the two parallel sides before multiplying. [2 marks]', marks: 2, keywords: ['average', 'parallel sides', 'height'], modelAnswer: 'Adding the parallel sides and halving gives the average width. Multiplying this average by the height gives the area.' },
  ],

  flashcards: [
    { id: 'fc-1', front: 'What is perimeter?', back: 'The total distance around the outside of a 2D shape.', topic: 'Perimeter of 2D shapes' },
    { id: 'fc-2', front: 'Formula for the perimeter of a rectangle?', back: 'P = 2(l + w)', topic: 'Perimeter of 2D shapes' },
    { id: 'fc-3', front: 'Formula for the perimeter of any triangle?', back: 'P = a + b + c (sum of all three sides)', topic: 'Perimeter of 2D shapes' },
    { id: 'fc-4', front: 'Perimeter of an equilateral triangle with side s?', back: 'P = 3s', topic: 'Perimeter of 2D shapes' },
    { id: 'fc-5', front: 'Perimeter of a regular polygon with n sides of length s?', back: 'P = n × s', topic: 'Perimeter of 2D shapes' },
    { id: 'fc-6', front: 'How do you find a missing side from a known perimeter?', back: 'Subtract the sum of all known sides from the total perimeter.', topic: 'Perimeter of 2D shapes' },
    { id: 'fc-7', front: 'What units are used for perimeter?', back: 'Linear units: mm, cm, m, km (not squared).', topic: 'Perimeter of 2D shapes' },
    { id: 'fc-8', front: '1 m = ? cm', back: '100 cm', topic: 'Perimeter of 2D shapes' },
    { id: 'fc-9', front: '1 km = ? m', back: '1000 m', topic: 'Perimeter of 2D shapes' },
    { id: 'fc-10', front: 'What is area?', back: 'The amount of 2D space enclosed within a shape, measured in square units.', topic: 'Area of rectangles' },
    { id: 'fc-11', front: 'Formula for the area of a rectangle?', back: 'A = l × w', topic: 'Area of rectangles' },
    { id: 'fc-12', front: 'What units are used for area?', back: 'Square units: mm², cm², m², km².', topic: 'Area of rectangles' },
    { id: 'fc-13', front: 'Formula for the area of a triangle?', back: 'A = ½ × b × h (b = base, h = perpendicular height)', topic: 'Area of triangles' },
    { id: 'fc-14', front: 'Why must you use perpendicular height for triangles?', back: 'The formula requires the height at 90° to the base. Using slant height gives an incorrect answer.', topic: 'Area of triangles' },
    { id: 'fc-15', front: 'Formula for the area of a parallelogram?', back: 'A = b × h (h = perpendicular height, not slant side)', topic: 'Area of parallelograms' },
    { id: 'fc-16', front: 'Common mistake with parallelogram area?', back: 'Multiplying the two sides together instead of using base × perpendicular height.', topic: 'Area of parallelograms' },
    { id: 'fc-17', front: 'Formula for the area of a trapezium?', back: 'A = ½(a + b) × h, where a and b are the parallel sides.', topic: 'Area of trapeziums' },
    { id: 'fc-18', front: 'What do a and b represent in the trapezium formula?', back: 'The two parallel sides of the trapezium.', topic: 'Area of trapeziums' },
    { id: 'fc-19', front: 'Perimeter of a rectangle: length 9 cm, width 4 cm?', back: 'P = 2(9 + 4) = 26 cm', topic: 'Perimeter of 2D shapes' },
    { id: 'fc-20', front: 'Area of a triangle: base 10 m, height 6 m?', back: 'A = ½ × 10 × 6 = 30 m²', topic: 'Area of triangles' },
    { id: 'fc-21', front: 'Area of a trapezium: sides 9 cm & 5 cm, height 4 cm?', back: 'A = ½(9 + 5) × 4 = 28 cm²', topic: 'Area of trapeziums' },
    { id: 'fc-22', front: 'A rectangle has area 72 m² and length 9 m. Width?', back: 'w = 72 ÷ 9 = 8 m', topic: 'Area of rectangles' },
    { id: 'fc-23', front: 'Formula for the area of a rhombus or kite?', back: 'A = ½ × d₁ × d₂ (d₁ and d₂ are the diagonals)', topic: 'Area of triangles' },
    { id: 'fc-24', front: 'Perimeter of a square with side 9 m?', back: 'P = 4 × 9 = 36 m', topic: 'Perimeter of 2D shapes' },
    { id: 'fc-25', front: 'How do you check your perimeter units before calculating?', back: 'Make sure all side lengths are in the same unit. Convert if needed before adding.', topic: 'Perimeter of 2D shapes' },
  ],

};
