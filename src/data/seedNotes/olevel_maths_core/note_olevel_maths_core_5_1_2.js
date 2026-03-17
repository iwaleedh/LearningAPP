export const note_olevel_maths_core_5_1_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Lengths Areas And Volumes/adding-and-subtracting-areas.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Calculate the area of compound shapes by splitting them into simple shapes and adding or subtracting their areas. Solve problems involving shapes with holes or cut-outs.',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Compound Shapes', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'A <b>compound shape</b> (or composite shape) is made up of two or more standard shapes joined together or cut from one another. To find the area, you break the compound shape into simpler pieces, find each piece\'s area, then <b>add</b> or <b>subtract</b> as appropriate.',
      },
    },
    {
      id: 'h-strategy',
      type: 'heading',
      data: { text: 'Strategy for Compound Areas', level: 2 },
    },
    {
      id: 'list-strategy',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Look at the shape carefully and identify which standard shapes it contains.' },
          { text: 'Draw dotted dividing lines to split the compound shape into rectangles, triangles, etc.' },
          { text: 'Find any missing side lengths using the overall dimensions.' },
          { text: 'Calculate the area of each piece separately.' },
          { text: 'Add pieces together (addition) or subtract the cut-out (subtraction).' },
        ],
      },
    },
    {
      id: 'svg-compound',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial" font-size="11">
  <!-- L-shape (two rectangles) -->
  <polygon points="20,20 20,160 80,160 80,90 140,90 140,20" fill="#ede9fe" stroke="#6366f1" stroke-width="2"/>
  <line x1="80" y1="20" x2="80" y2="90" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- dimensions -->
  <text x="80" y="13" text-anchor="middle" fill="#374151">6 cm</text>
  <text x="9" y="90" fill="#374151">14</text>
  <text x="110" y="155" text-anchor="middle" fill="#374151">6</text>
  <text x="50" y="155" text-anchor="middle" fill="#374151">R1</text>
  <text x="110" y="60" text-anchor="middle" fill="#374151">R2</text>
  <text x="80" y="185" text-anchor="middle" fill="#6366f1" font-weight="bold">L-shape = R1 + R2</text>

  <!-- Shape with hole -->
  <rect x="220" y="20" width="120" height="90" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <rect x="250" y="45" width="50" height="40" fill="white" stroke="#10b981" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="280" y="15" text-anchor="middle" fill="#374151">12 cm</text>
  <text x="349" y="65" fill="#374151">9 cm</text>
  <text x="275" y="70" text-anchor="middle" fill="#374151" font-size="10">hole</text>
  <text x="280" y="130" text-anchor="middle" fill="#10b981" font-weight="bold">Outer − Hole</text>

  <!-- Semi-circle + rectangle -->
  <rect x="380" y="80" width="100" height="70" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <ellipse cx="430" cy="80" rx="50" ry="30" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" fill-opacity="0.7"/>
  <text x="430" y="160" text-anchor="middle" fill="#374151">r = 5</text>
  <text x="490" y="120" fill="#374151">h</text>
  <text x="430" y="180" text-anchor="middle" fill="#f59e0b" font-weight="bold">Rect + Semi-circle</text>
</svg>`,
        caption: 'Compound shapes: L-shape (add), rectangle with hole (subtract), rectangle with semi-circle (add)',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — L-shape (Addition)',
        text: `An L-shape has the following measurements: total height = 10 cm, total width = 8 cm, and a rectangle of 4 cm × 5 cm cut from the top-right corner.<br><br>
<b>Method 1 — two rectangles:</b><br>
Rectangle A (bottom): 8 cm × 5 cm = 40 cm²<br>
Rectangle B (top-left): 4 cm × 5 cm = 20 cm²<br>
Total area = 40 + 20 = <b>60 cm²</b><br><br>
<b>Method 2 — subtraction from overall:</b><br>
Full rectangle: 8 × 10 = 80 cm²<br>
Cut-out: 4 × 5 = 20 cm²<br>
Area = 80 − 20 = <b>60 cm²</b>`,
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Rectangle with rectangular hole',
        text: 'An outer rectangle measures 15 cm × 10 cm. A rectangular hole of 6 cm × 4 cm is cut from its centre. Find the shaded area.<br><br>Outer area = 15 × 10 = 150 cm²<br>Hole area = 6 × 4 = 24 cm²<br>Shaded area = 150 − 24 = <b>126 cm²</b>',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Rectangle combined with triangle',
        text: 'A shape consists of a rectangle 12 cm × 5 cm with a triangle on top. The triangle has base 12 cm and height 4 cm.<br><br>Rectangle area = 12 × 5 = 60 cm²<br>Triangle area = ½ × 12 × 4 = 24 cm²<br>Total = 60 + 24 = <b>84 cm²</b>',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always write down the dimensions of each sub-shape clearly. If a side length is not given directly, calculate it from the overall dimensions by subtracting the given partial lengths.',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Do not try to find the perimeter by adding the perimeters of the sub-shapes — that counts interior edges twice. For compound areas, you add individual areas. Perimeter is always the outer boundary only.',
      },
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can split a compound shape into rectangles and triangles', checked: false },
          { text: 'I can find missing side lengths from overall dimensions', checked: false },
          { text: 'I can calculate and add areas of sub-shapes', checked: false },
          { text: 'I can subtract a hole or cut-out from the main shape', checked: false },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'For compound shapes: split into standard shapes → find missing lengths → calculate each area → add (joining shapes) or subtract (removing a cut-out). Both methods (split-and-add and whole-minus-removal) give the same answer.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Compound area: split into rectangles/triangles, find missing lengths, then add or subtract individual areas.',
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What is a compound shape?' },
      { id: 'cue-2', blockId: 'list-strategy', prompt: 'List the 5 steps for finding the area of a compound shape.' },
      { id: 'cue-3', blockId: 'callout-we1', prompt: 'Name two methods for finding the area of an L-shape.' },
      { id: 'cue-4', blockId: 'callout-we2', prompt: 'How do you find the area of a shape with a rectangular hole cut out?' },
      { id: 'cue-5', blockId: 'callout-warning', prompt: 'Why can\'t you find the perimeter of a compound shape by adding the perimeters of its parts?' },
    ],
  },
  evidence: [],
  mentions: [],
};
