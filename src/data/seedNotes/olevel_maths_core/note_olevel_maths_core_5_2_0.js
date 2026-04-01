export const note_olevel_maths_core_5_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Lengths Areas And Volumes/area-and-circumference-of-circles.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Calculate the circumference and area of circles, semi-circles, and quarter-circles. Find radius or diameter from given circumference or area using inverse operations.',
      },
    },
    {
      id: 'h-parts',
      type: 'heading',
      data: { text: 'Parts of a Circle', level: 2 },
    },
    {
      id: 'svg-circle',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial" font-size="12">
  <circle cx="150" cy="100" r="80" fill="#2d1b69" stroke="#3b82f6" stroke-width="2"/>
  <!-- diameter line -->
  <line x1="70" y1="100" x2="230" y2="100" stroke="#3b82f6" stroke-width="2"/>
  <!-- radius line -->
  <line x1="150" y1="100" x2="150" y2="20" stroke="#10b981" stroke-width="2"/>
  <!-- labels -->
  <text x="150" y="115" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="11">diameter d</text>
  <text x="163" y="58" fill="#10b981" font-weight="bold">radius r</text>
  <text x="152" y="100" r="4" fill="#374151">•</text>
  <circle cx="150" cy="100" r="3" fill="#374151"/>
  <text x="150" y="190" text-anchor="middle" fill="#3b82f6" font-size="11">Circumference C = distance around the circle</text>
</svg>`,
        caption: 'A circle showing radius r and diameter d = 2r',
      },
    },
    {
      id: 'callout-key-defs',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Relationships',
        text: '• <b>Diameter d = 2r</b> (diameter = 2 × radius)<br>• <b>Radius r = d ÷ 2</b><br>• <b>π ≈ 3.14159</b> — use the π key on your calculator for full accuracy',
      },
    },
    {
      id: 'h-circumference',
      type: 'heading',
      data: { text: 'Circumference of a Circle', level: 2 },
    },
    {
      id: 'p-circ',
      type: 'paragraph',
      data: {
        text: 'The <b>circumference</b> is the perimeter (distance around the outside) of a circle. There are two equivalent forms of the formula:',
      },
    },
    {
      id: 'eq-circ-r',
      type: 'equation',
      data: { html: 'C = 2πr', caption: 'Circumference using radius' },
    },
    {
      id: 'eq-circ-d',
      type: 'equation',
      data: { html: 'C = πd', caption: 'Circumference using diameter' },
    },
    {
      id: 'h-area',
      type: 'heading',
      data: { text: 'Area of a Circle', level: 2 },
    },
    {
      id: 'eq-area',
      type: 'equation',
      data: { html: 'A = πr²', caption: 'Area of a circle' },
    },
    {
      id: 'h-fractions',
      type: 'heading',
      data: { text: 'Semi-circles and Quarter-circles', level: 2 },
    },
    {
      id: 'tbl-fractions',
      type: 'comparisonTable',
      data: {
        caption: 'Area and circumference for parts of a circle',
        headers: ['Shape', 'Area', 'Perimeter'],
        rows: [
          ['Full circle', 'πr²', '2πr'],
          ['Semi-circle', '½πr²', 'πr + 2r'],
          ['Quarter-circle', '¼πr²', '½πr + 2r'],
        ],
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Circumference and area',
        text: 'A circle has radius 7 cm. Calculate its circumference and area. Give your answers to 3 significant figures.<br><br>Circumference C = 2πr = 2 × π × 7 = 43.98... ≈ <b>44.0 cm</b><br>Area A = πr² = π × 7² = π × 49 = 153.93... ≈ <b>154 cm²</b>',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Find radius from circumference',
        text: 'A circle has circumference 50 cm. Find its radius.<br><br>C = 2πr, so r = C ÷ (2π) = 50 ÷ (2π) = 50 ÷ 6.2832 = 7.958... ≈ <b>7.96 cm</b>',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Find radius from area',
        text: 'A circle has area 200 cm². Find its radius.<br><br>A = πr²<br>r² = A ÷ π = 200 ÷ π = 63.66...<br>r = √63.66 = 7.978... ≈ <b>7.98 cm</b>',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Semi-circle perimeter',
        text: 'A semi-circle has diameter 10 cm. Find its perimeter (the boundary all the way around).<br><br>Radius r = 5 cm<br>Curved part = πr = π × 5 = 15.71 cm<br>Diameter = 10 cm (straight edge)<br>Total perimeter = 15.71 + 10 = <b>25.7 cm</b> (3 s.f.)',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Diameter vs Radius',
        text: 'Always check whether you are given the radius or the diameter. If given the diameter, halve it to get the radius before substituting into A = πr². A very common error is using d where r is required.',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Use the π button on your calculator, not the approximation 3.14, unless the question specifically says to use 3.14. Round only at the final step. For semi-circle perimeter: the straight edge (diameter) is always included unless you are asked for the arc length only.',
      },
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can apply C = 2πr and C = πd', checked: false },
          { text: 'I can apply A = πr²', checked: false },
          { text: 'I can find r from C by dividing by 2π', checked: false },
          { text: 'I can find r from A by dividing by π, then square-rooting', checked: false },
          { text: 'I can calculate the perimeter and area of semi-circles and quarter-circles', checked: false },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Circumference: C = 2πr = πd. Area: A = πr². To reverse: r = C ÷ 2π; r = √(A ÷ π). For a semi-circle, halve C and A; the perimeter includes the straight diameter edge. Always use the π button on your calculator.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'C = 2πr, A = πr². Reverse: r = C/(2π); r = √(A/π). Semi-circle perimeter = πr + 2r.',
    cues: [
      { id: 'cue-1', blockId: 'eq-circ-r', prompt: 'Write the formula for the circumference of a circle using radius.' },
      { id: 'cue-2', blockId: 'eq-area', prompt: 'Write the formula for the area of a circle.' },
      { id: 'cue-3', blockId: 'callout-we2', prompt: 'A circle has circumference 50 cm. How do you find the radius?' },
      { id: 'cue-4', blockId: 'tbl-fractions', prompt: 'What is the perimeter of a semi-circle of radius r?' },
      { id: 'cue-5', blockId: 'callout-warning', prompt: 'What mistake is commonly made when the diameter is given instead of the radius?' },
    ],
  },
  evidence: [],
  mentions: [],
};
