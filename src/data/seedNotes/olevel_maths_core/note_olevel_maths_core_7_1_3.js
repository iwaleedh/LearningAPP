export const note_olevel_maths_core_7_1_3 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand enlargement from a centre using a scale factor; perform and describe enlargements; compare all four transformations.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is an Enlargement?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: 'An <strong>enlargement</strong> changes the size of a shape from a fixed point called the <strong>centre of enlargement</strong>. Every distance from the centre is multiplied by the <strong>scale factor (k)</strong>. The image is <strong>similar</strong> to the object — same angles, proportional sides — but not congruent (unless k = ±1).' }
    },
    {
      id: 'h-sf',
      type: 'heading',
      data: { text: 'Scale Factor Types', level: 2 }
    },
    {
      id: 'list-sf',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>k &gt; 1:</strong> image is larger than object; same side of centre as object' },
          { text: '<strong>0 &lt; k &lt; 1:</strong> image is smaller than object (reduction); same side of centre' },
          { text: '<strong>k &lt; 0:</strong> image is on the <em>opposite</em> side of the centre and inverted (rotated 180°)' },
          { text: '<strong>k = −1:</strong> equivalent to a 180° rotation about the centre' }
        ]
      }
    },
    {
      id: 'eq-lengths',
      type: 'equation',
      data: {
        html: 'Image length = k × Object length',
        caption: 'Every length in the image equals the scale factor multiplied by the corresponding object length'
      }
    },
    {
      id: 'eq-sf',
      type: 'equation',
      data: {
        html: 'k = <span class="nb-frac"><span class="nb-num">Image length</span><span class="nb-den">Object length</span></span>',
        caption: 'Finding scale factor from corresponding side lengths'
      }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Finding the Scale Factor',
        text: 'Divide any side length of the image by the corresponding side length of the object. Alternatively, divide the distance from the centre to an image vertex by the distance from the centre to the corresponding object vertex. k = image distance ÷ object distance.'
      }
    },
    {
      id: 'h-performing',
      type: 'heading',
      data: { text: 'Performing an Enlargement', level: 2 }
    },
    {
      id: 'p-performing',
      type: 'paragraph',
      data: { text: 'For each vertex, use the formula: <strong>Image vertex = Centre + k × (Object vertex − Centre)</strong>. This works for any scale factor, positive or negative.' }
    },
    {
      id: 'list-performing',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'For each object vertex, draw a ray from the centre of enlargement through the vertex.' },
          { text: 'Calculate the distance from centre to vertex; multiply by k.' },
          { text: 'Mark the image vertex that distance (× k) from the centre along the same ray.' },
          { text: 'Connect the image vertices to complete the image.' }
        ]
      }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Enlarge by Scale Factor 2 from Centre (1, 1)',
        text: 'Triangle with vertices A(2, 2), B(4, 2), C(2, 4). Enlarge by scale factor 2 from centre E(1, 1).\n\nFormula: Image = E + 2 × (Vertex − E)\n• A: (1,1) + 2×(2−1, 2−1) = (1,1) + (2, 2) = A\'(3, 3)\n• B: (1,1) + 2×(4−1, 2−1) = (1,1) + (6, 2) = B\'(7, 3)\n• C: (1,1) + 2×(2−1, 4−1) = (1,1) + (2, 6) = C\'(3, 7)\n\nCheck: AB = 2 units; A\'B\' = 4 units = 2 × 2 ✓. All angles are preserved ✓.'
      }
    },
    {
      id: 'svg-enlargement',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="300" height="250">
  <defs>
    <pattern id="engrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="300" height="250" fill="#f8fafc"/>
  <rect width="300" height="250" fill="url(#engrid)"/>
  <line x1="10" y1="230" x2="290" y2="230" stroke="#94a3b8" stroke-width="1"/>
  <line x1="20" y1="10" x2="20" y2="240" stroke="#94a3b8" stroke-width="1"/>
  <text x="283" y="226" font-size="9" fill="#64748b">x</text>
  <text x="24" y="14" font-size="9" fill="#64748b">y</text>
  <circle cx="40" cy="210" r="4" fill="#ef4444"/>
  <text x="22" y="206" font-size="9" fill="#ef4444" font-weight="bold">E(1,1)</text>
  <polygon points="60,190 100,190 60,150" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="56" y="204" font-size="9" fill="#1d4ed8">A(2,2)</text>
  <text x="95" y="204" font-size="9" fill="#1d4ed8">B(4,2)</text>
  <text x="40" y="148" font-size="9" fill="#1d4ed8">C(2,4)</text>
  <polygon points="80,170 160,170 80,90" fill="#fed7aa" stroke="#f97316" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="72" y="185" font-size="9" fill="#c2410c">A'(3,3)</text>
  <text x="153" y="185" font-size="9" fill="#c2410c">B'(7,3)</text>
  <text x="58" y="86" font-size="9" fill="#c2410c">C'(3,7)</text>
  <line x1="40" y1="210" x2="160" y2="170" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2,2" opacity="0.7"/>
  <line x1="40" y1="210" x2="80" y2="90" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2,2" opacity="0.7"/>
  <line x1="40" y1="210" x2="100" y2="190" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2,2" opacity="0.7"/>
  <text x="190" y="130" font-size="10" fill="#475569" font-weight="bold">SF = 2</text>
</svg>`,
        caption: 'Triangle ABC (blue) enlarged by scale factor 2 from centre E(1, 1) → image A\'B\'C\' (orange). Rays from E pass through both object and image vertices.'
      }
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Comparing All Four Transformations', level: 2 }
    },
    {
      id: 'tbl-transformations',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of the four transformations — what to state and image properties',
        headers: ['Transformation', 'What to State', 'Image vs Object'],
        rows: [
          ['Translation', 'Column vector', 'Congruent'],
          ['Reflection', 'Equation of mirror line', 'Congruent'],
          ['Rotation', 'Centre, angle, direction (CW/ACW)', 'Congruent'],
          ['Enlargement', 'Centre of enlargement, scale factor', 'Similar']
        ]
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Finding the Centre of Enlargement',
        text: 'Draw straight lines through each corresponding pair of vertices: A to A\', B to B\', C to C\'. Extend all lines — they all meet at the centre of enlargement. If k is negative, the image is on the opposite side so extend the lines in both directions until they meet.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Enlargement changes size using scale factor k from a centre. Image length = k × object length. k > 1: larger; 0 < k < 1: smaller; k < 0: inverted on opposite side. Describe with centre + scale factor. Image is similar (not congruent). Of the four transformations, only enlargement changes the size.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Enlargement from centre E with scale factor k: image similar, lengths × k. State centre and scale factor.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-sf',
        prompt: 'What happens to the image when the scale factor is negative?',
        answer: 'The image appears on the opposite side of the centre of enlargement and is inverted (rotated 180°).'
      },
      {
        id: 'cue-2',
        blockId: 'eq-sf',
        prompt: 'How do you calculate the scale factor from object and image side lengths?',
        answer: 'k = Image length ÷ Object length.'
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked1',
        prompt: 'Vertex A(2, 2) is enlarged by SF 2 from centre (1, 1). What is the image A\'?',
        answer: 'A\'(3, 3). Use: Centre + k×(Vertex − Centre) = (1,1) + 2×(1,1) = (3,3).'
      },
      {
        id: 'cue-4',
        blockId: 'tbl-transformations',
        prompt: 'Which of the four transformations produces a similar but not congruent image?',
        answer: 'Enlargement (when the scale factor k ≠ ±1).'
      },
      {
        id: 'cue-5',
        blockId: 'callout-tip1',
        prompt: 'How do you find the centre of enlargement given an object and its image?',
        answer: 'Draw lines through corresponding vertex pairs (A→A\', B→B\', C→C\') and extend them — they all intersect at the centre of enlargement.'
      }
    ]
  },
  evidence: []
};
