export const note_olevel_maths_core_7_1_0 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand translation using column vectors; perform and describe translations on a coordinate grid.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is a Translation?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: 'A <strong>translation</strong> moves every point of a shape the same distance in the same direction. The shape does not rotate or flip — it slides. The image is <strong>congruent</strong> to the object (same size and shape).' }
    },
    {
      id: 'h-vector',
      type: 'heading',
      data: { text: 'Column Vector Notation', level: 2 }
    },
    {
      id: 'p-vector',
      type: 'paragraph',
      data: { text: 'A translation is described by a <strong>column vector</strong>. The top number gives the horizontal movement; the bottom number gives the vertical movement.' }
    },
    {
      id: 'eq-vector',
      type: 'equation',
      data: {
        html: '<span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">y</span></span> &nbsp;— top = horizontal shift, bottom = vertical shift',
        caption: 'Column vector: positive top → right, negative top → left; positive bottom → up, negative bottom → down'
      }
    },
    {
      id: 'list-vector',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Top number:</strong> positive → move right; negative → move left' },
          { text: '<strong>Bottom number:</strong> positive → move up; negative → move down' },
          { text: 'Example: vector <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">−2</span></span> means 3 units right and 2 units down' }
        ]
      }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Column Vector Meaning',
        text: 'In the column vector <span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">b</span></span>, <em>a</em> is the x-shift (horizontal) and <em>b</em> is the y-shift (vertical). Negative top = left; negative bottom = down.'
      }
    },
    {
      id: 'h-performing',
      type: 'heading',
      data: { text: 'Performing a Translation', level: 2 }
    },
    {
      id: 'p-performing',
      type: 'paragraph',
      data: { text: 'Apply the column vector to <strong>every vertex</strong>: add the x-component to each x-coordinate and the y-component to each y-coordinate. Join the new vertices to form the image.' }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Translate Triangle ABC',
        text: 'Triangle ABC: A(1, 2), B(3, 2), C(2, 4). Translate by <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">−2</span></span>.\n\nAdd 3 to each x-coordinate and −2 to each y-coordinate:\n• A(1, 2) → A\'(1+3, 2−2) = A\'(4, 0)\n• B(3, 2) → B\'(3+3, 2−2) = B\'(6, 0)\n• C(2, 4) → C\'(2+3, 4−2) = C\'(5, 2)\n\nThe image triangle A\'B\'C\' is congruent to ABC — same size and shape, just moved.'
      }
    },
    {
      id: 'h-describing',
      type: 'heading',
      data: { text: 'Describing a Translation', level: 2 }
    },
    {
      id: 'p-describing',
      type: 'paragraph',
      data: { text: 'To describe a translation, state the <strong>column vector</strong> that maps the object onto the image. Pick any corresponding pair of vertices, find the difference in x and y, and write as a column vector.' }
    },
    {
      id: 'list-describing',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Choose a vertex and its image (e.g. A and A\').' },
          { text: 'x-shift = x<sub>image</sub> − x<sub>object</sub>' },
          { text: 'y-shift = y<sub>image</sub> − y<sub>object</sub>' },
          { text: 'Write the answer as a column vector.' }
        ]
      }
    },
    {
      id: 'svg-translation',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" width="280" height="200">
  <defs>
    <pattern id="tgrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="280" height="200" fill="#0f172a"/>
  <rect width="280" height="200" fill="url(#tgrid)"/>
  <line x1="20" y1="100" x2="260" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="80" y1="10" x2="80" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <text x="255" y="95" font-size="10" fill="#64748b">x</text>
  <text x="84" y="14" font-size="10" fill="#64748b">y</text>
  <text x="63" y="114" font-size="9" fill="#64748b">O</text>
  <polygon points="100,60 140,60 120,20" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="91" y="74" font-size="9" fill="#1d4ed8">A(1,2)</text>
  <text x="132" y="74" font-size="9" fill="#1d4ed8">B(3,2)</text>
  <text x="112" y="16" font-size="9" fill="#1d4ed8">C(2,4)</text>
  <polygon points="160,100 200,100 180,60" fill="#532407" stroke="#f97316" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="148" y="114" font-size="9" fill="#c2410c">A'(4,0)</text>
  <text x="190" y="114" font-size="9" fill="#c2410c">B'(6,0)</text>
  <text x="172" y="56" font-size="9" fill="#c2410c">C'(5,2)</text>
  <line x1="100" y1="60" x2="157" y2="98" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,2"/>
  <polygon points="157,98 149,92 154,105" fill="#64748b"/>
  <text x="114" y="77" font-size="9" fill="#475569">(3,−2)</text>
</svg>`,
        caption: 'Triangle ABC (blue) translated by column vector (3, −2) to give image A\'B\'C\' (orange)'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'x Before y — Along Then Up',
        text: 'Remember: the <strong>top</strong> of the column vector is the x-direction (horizontal), and the <strong>bottom</strong> is the y-direction (vertical). A helpful way to remember: "along the corridor, then up or down the stairs."'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'A translation slides every point by the same column vector. Top number = horizontal (right +, left −); bottom number = vertical (up +, down −). Apply to every vertex to find the image. Image is congruent to the object. To describe a translation, give the column vector.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Translation: column vector top = horizontal, bottom = vertical. Add to each vertex. Image is congruent.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-vector',
        prompt: 'In a column vector, what does the top number represent?',
        answer: 'The horizontal (x) shift: positive = right, negative = left.'
      },
      {
        id: 'cue-2',
        blockId: 'callout-worked1',
        prompt: 'Vertex A is at (1, 2). The translation vector is (3, −2). Where does A move to?',
        answer: 'A\'(4, 0) — add 3 to x and −2 to y.'
      },
      {
        id: 'cue-3',
        blockId: 'list-describing',
        prompt: 'How do you find the translation vector from an object and its image?',
        answer: 'Subtract the object coordinates from the image coordinates: x-shift = x_image − x_object, y-shift = y_image − y_object.'
      },
      {
        id: 'cue-4',
        blockId: 'p-what',
        prompt: 'Is a translated image congruent or similar to the object?',
        answer: 'Congruent — same size and shape, just moved to a new position.'
      }
    ]
  },
  evidence: []
};
