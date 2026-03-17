export const note_olevel_maths_core_5_1_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Lengths Areas And Volumes/problem-solving-with-areas.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Solve real-world and algebraic problems involving area: find side lengths from area, use area scale factors, and apply area concepts to practical contexts such as tiling, carpeting, and land measurement.',
      },
    },
    {
      id: 'h-reverse',
      type: 'heading',
      data: { text: 'Finding Side Length from Area', level: 2 },
    },
    {
      id: 'p-reverse',
      type: 'paragraph',
      data: {
        text: 'If you know the area and one dimension, rearrange the formula to find the missing dimension. For a rectangle: if A = l × w, then <b>l = A ÷ w</b>. For a triangle: if A = ½bh, then <b>h = 2A ÷ b</b>.',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Find the width of a rectangle',
        text: 'A rectangle has area 48 cm² and length 8 cm. Find the width.<br><br>A = l × w<br>48 = 8 × w<br>w = 48 ÷ 8 = <b>6 cm</b>',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Find the height of a triangle',
        text: 'A triangle has area 30 m² and base 12 m. Find the perpendicular height.<br><br>A = ½ × b × h<br>30 = ½ × 12 × h = 6h<br>h = 30 ÷ 6 = <b>5 m</b>',
      },
    },
    {
      id: 'h-algebra',
      type: 'heading',
      data: { text: 'Area with Algebraic Expressions', level: 2 },
    },
    {
      id: 'p-algebra',
      type: 'paragraph',
      data: {
        text: 'Side lengths may be given as algebraic expressions. Set up an equation using the area formula and solve for the unknown variable.',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Algebraic area',
        text: 'A rectangle has length (2x + 1) cm and width 4 cm. Its area is 36 cm². Find x.<br><br>Area = 4(2x + 1) = 36<br>8x + 4 = 36<br>8x = 32<br>x = <b>4</b><br><br>Check: length = 2(4) + 1 = 9 cm. Area = 4 × 9 = 36 cm² ✓',
      },
    },
    {
      id: 'h-scale',
      type: 'heading',
      data: { text: 'Area Scale Factors', level: 2 },
    },
    {
      id: 'p-scale',
      type: 'paragraph',
      data: {
        text: 'When a shape is enlarged by a <b>linear scale factor k</b>, all lengths are multiplied by k. Since area involves multiplying two lengths, area is multiplied by <b>k²</b>.',
      },
    },
    {
      id: 'callout-scale',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Area Scale Factor',
        text: 'If the linear scale factor is k, then:<br>new area = k² × original area<br><br>Conversely: k = √(new area ÷ original area)',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Scale factor and area',
        text: 'A photograph is enlarged by a linear scale factor of 3. The original photo has area 24 cm². Find the area of the enlarged photo.<br><br>Area scale factor = k² = 3² = 9<br>New area = 9 × 24 = <b>216 cm²</b>',
      },
    },
    {
      id: 'h-practical',
      type: 'heading',
      data: { text: 'Real-World Problem Solving', level: 2 },
    },
    {
      id: 'list-practical',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Tiling:</b> Number of tiles needed = floor area ÷ area of one tile (always round up to a whole number).' },
          { text: '<b>Carpeting:</b> Area of room in m²; cost = area × price per m².' },
          { text: '<b>Painting:</b> One tin covers a certain area; divide wall area by coverage to find tins needed.' },
          { text: '<b>Land area:</b> Fields and plots given in m² or km²; convert mindfully (1 km² = 1 000 000 m²).' },
        ],
      },
    },
    {
      id: 'callout-we5',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 5 — Tiling a floor',
        text: 'A rectangular floor measures 6 m × 4.5 m. Square tiles measuring 30 cm × 30 cm are used. How many tiles are needed?<br><br>Floor area = 6 × 4.5 = 27 m²<br>Tile area = 0.30 × 0.30 = 0.09 m²<br>Number of tiles = 27 ÷ 0.09 = <b>300 tiles</b>',
      },
    },
    {
      id: 'callout-we6',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 6 — Painting a wall',
        text: 'A wall is 8 m wide and 3 m high. One tin of paint covers 12 m². How many tins are needed?<br><br>Wall area = 8 × 3 = 24 m²<br>Tins = 24 ÷ 12 = 2 tins<br>Answer: <b>2 tins</b>',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• When finding the number of tiles or tins, always <b>round up</b> — you can\'t buy a fraction of a tile or tin.<br>• Show all substitutions clearly in multi-step problems.<br>• For scale factor problems, identify whether the ratio given is linear (k) or area (k²) before calculating.',
      },
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can rearrange area formulas to find a missing dimension', checked: false },
          { text: 'I can solve area problems involving algebraic expressions', checked: false },
          { text: 'I can apply the relationship: area scale factor = k²', checked: false },
          { text: 'I can solve tiling and carpeting problems', checked: false },
          { text: 'I know when to round up in practical contexts', checked: false },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'To find a missing dimension: rearrange the area formula and divide. For algebraic areas, form an equation and solve. Area scale factor = k². In practical problems (tiles, paint), always round up to the nearest whole number.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Reverse area problems: rearrange formula. Area scale factor = k². Practical problems: round up tile/tin counts.',
    cues: [
      { id: 'cue-1', blockId: 'p-reverse', prompt: 'A rectangle has area 54 cm² and length 9 cm. How do you find the width?' },
      { id: 'cue-2', blockId: 'callout-scale', prompt: 'If the linear scale factor is k, what is the area scale factor?' },
      { id: 'cue-3', blockId: 'callout-we4', prompt: 'A shape is enlarged by scale factor 3. How many times larger is its area?' },
      { id: 'cue-4', blockId: 'list-practical', prompt: 'When calculating the number of tiles needed, why do you always round up?' },
      { id: 'cue-5', blockId: 'callout-we3', prompt: 'How do you solve an area problem where the side length is an algebraic expression?' },
    ],
  },
  evidence: [],
  mentions: [],
};
