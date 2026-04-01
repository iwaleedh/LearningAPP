export const note_olevel_maths_core_5_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Lengths Areas And Volumes/perimeter.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand perimeter as the total distance around the outside of a shape. Calculate the perimeter of rectangles, triangles, and other polygons, and find missing side lengths given the perimeter.',
      },
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'What is Perimeter?', level: 2 },
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: {
        text: '<b>Perimeter</b> is the total distance around the outside of a 2D shape. You find it by adding up the lengths of <b>all the sides</b>. The unit of perimeter is the same as the unit of length: mm, cm, m, or km.',
      },
    },
    {
      id: 'h-formulas',
      type: 'heading',
      data: { text: 'Perimeter Formulas', level: 2 },
    },
    {
      id: 'callout-rect',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rectangle',
        text: 'P = 2(l + w) where <b>l</b> = length and <b>w</b> = width. Because a rectangle has two pairs of equal sides, you can also write P = 2l + 2w.',
      },
    },
    {
      id: 'eq-rect',
      type: 'equation',
      data: {
        html: 'P = 2(l + w)',
        caption: 'Perimeter of a rectangle',
      },
    },
    {
      id: 'callout-tri',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Triangle',
        text: 'P = a + b + c, where a, b, and c are the three side lengths. For an equilateral triangle: P = 3s. For an isosceles triangle with two equal sides: P = 2a + b.',
      },
    },
    {
      id: 'eq-tri',
      type: 'equation',
      data: {
        html: 'P = a + b + c',
        caption: 'Perimeter of a triangle',
      },
    },
    {
      id: 'callout-poly',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Any Polygon',
        text: 'P = sum of all side lengths. For a regular polygon with n sides each of length s: P = ns.',
      },
    },
    {
      id: 'svg-shapes',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial" font-size="12">
  <!-- Rectangle -->
  <rect x="20" y="30" width="120" height="70" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <text x="70" y="25" text-anchor="middle" fill="#374151">l = 12 cm</text>
  <text x="155" y="70" fill="#374151">w = 7 cm</text>
  <text x="70" y="125" text-anchor="middle" fill="#3b82f6" font-weight="bold">Rectangle</text>

  <!-- Triangle -->
  <polygon points="230,100 300,100 265,30" fill="none" stroke="#10b981" stroke-width="2"/>
  <text x="265" y="118" text-anchor="middle" fill="#374151">8 cm</text>
  <text x="220" y="62" fill="#374151">7 cm</text>
  <text x="295" y="62" fill="#374151">7 cm</text>
  <text x="265" y="135" text-anchor="middle" fill="#10b981" font-weight="bold">Isosceles △</text>

  <!-- Regular Pentagon -->
  <polygon points="420,30 460,58 445,100 395,100 380,58" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <text x="420" y="130" text-anchor="middle" fill="#374151">s = 5 cm</text>
  <text x="420" y="145" text-anchor="middle" fill="#f59e0b" font-weight="bold">Regular Pentagon</text>
</svg>`,
        caption: 'Examples of shapes with labelled side lengths',
      },
    },
    {
      id: 'h-units',
      type: 'heading',
      data: { text: 'Units of Length', level: 2 },
    },
    {
      id: 'tbl-units',
      type: 'comparisonTable',
      data: {
        caption: 'Length unit conversions',
        headers: ['Conversion', 'Relationship'],
        rows: [
          ['10 mm = 1 cm', '1 cm = 10 mm'],
          ['100 cm = 1 m', '1 m = 100 cm'],
          ['1000 m = 1 km', '1 km = 1000 m'],
        ],
      },
    },
    {
      id: 'h-missing',
      type: 'heading',
      data: { text: 'Finding a Missing Side from Perimeter', level: 2 },
    },
    {
      id: 'p-missing',
      type: 'paragraph',
      data: {
        text: 'If you know the perimeter and all sides except one, set up an equation: <b>P = sum of known sides + x</b>, then solve for x.',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Perimeter of a rectangle',
        text: 'A rectangle has length 9 cm and width 4 cm. Find the perimeter.<br><br>P = 2(l + w) = 2(9 + 4) = 2 × 13 = <b>26 cm</b>',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Missing side of a triangle',
        text: 'A triangle has perimeter 30 cm. Two sides are 11 cm and 8 cm. Find the third side.<br><br>Third side = 30 − 11 − 8 = <b>11 cm</b>',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Regular hexagon',
        text: 'A regular hexagon has perimeter 42 cm. Find the length of one side.<br><br>A regular hexagon has 6 equal sides.<br>Side = 42 ÷ 6 = <b>7 cm</b>',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Finding a missing side (rectangle)',
        text: 'A rectangle has perimeter 46 m and length 15 m. Find the width.<br><br>46 = 2(15 + w)<br>23 = 15 + w<br>w = <b>8 m</b>',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always check your units are consistent before calculating. If sides are given in different units, convert them first. Also re-read the question — sometimes you need to convert your final answer to a different unit.',
      },
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can state that perimeter = total distance around the outside', checked: false },
          { text: 'I can apply P = 2(l + w) for rectangles', checked: false },
          { text: 'I can add all sides for triangles and polygons', checked: false },
          { text: 'I can find a missing side when given the perimeter', checked: false },
          { text: 'I can convert between mm, cm, m, and km', checked: false },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Perimeter = sum of all side lengths. For a rectangle: P = 2(l + w). For a regular polygon with n sides: P = ns. To find a missing side, subtract all known sides from the total perimeter.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Perimeter is the total boundary length: P = 2(l+w) for rectangles, sum of sides for polygons.',
    cues: [
      { id: 'cue-1', blockId: 'p-def', prompt: 'How do you find the perimeter of any polygon?' },
      { id: 'cue-2', blockId: 'callout-rect', prompt: 'State the formula for the perimeter of a rectangle.' },
      { id: 'cue-3', blockId: 'callout-tri', prompt: 'How do you find the perimeter of a triangle with sides a, b, and c?' },
      { id: 'cue-4', blockId: 'p-missing', prompt: 'How do you find a missing side when only the perimeter is given?' },
      { id: 'cue-5', blockId: 'tbl-units', prompt: 'How many centimetres are in 1 metre?' },
    ],
  },
  evidence: [],
  mentions: [],
};
