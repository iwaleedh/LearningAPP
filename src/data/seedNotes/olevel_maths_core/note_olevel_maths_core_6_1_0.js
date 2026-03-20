export const note_olevel_maths_core_6_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Pythagoras And Trigonometry/pythagoras-theorem.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand and apply Pythagoras\' theorem to find missing sides in right-angled triangles, identify Pythagorean triples, and verify whether a triangle is right-angled.',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Pythagoras\' Theorem', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Pythagoras\' theorem applies to any <strong>right-angled triangle</strong>. It states that the square of the <strong>hypotenuse</strong> (the longest side, opposite the right angle) equals the sum of the squares of the other two sides.',
      },
    },
    {
      id: 'eq-theorem',
      type: 'equation',
      data: {
        html: 'a² + b² = c²',
        caption: 'Pythagoras\' theorem — c is the hypotenuse',
      },
    },
    {
      id: 'svg-triangle',
      type: 'svg',
      data: {
        caption: 'A right-angled triangle with sides a, b and hypotenuse c',
        svg: `<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Triangle -->
  <polygon points="30,170 30,40 200,170" fill="#2d2d72" stroke="#6366f1" stroke-width="2"/>
  <!-- Right angle marker -->
  <polyline points="30,150 50,150 50,170" fill="none" stroke="#6366f1" stroke-width="1.5"/>
  <!-- Side a — vertical -->
  <text x="8" y="110" font-size="16" fill="#6366f1" font-weight="bold">a</text>
  <!-- Side b — horizontal -->
  <text x="108" y="190" font-size="16" fill="#6366f1" font-weight="bold">b</text>
  <!-- Side c — hypotenuse -->
  <text x="122" y="100" font-size="16" fill="#e11d48" font-weight="bold">c</text>
  <!-- Right angle label -->
  <text x="36" y="145" font-size="11" fill="#374151">90°</text>
</svg>`,
      },
    },
    {
      id: 'h-hyp',
      type: 'heading',
      data: { text: 'Identifying the Hypotenuse', level: 2 },
    },
    {
      id: 'p-hyp',
      type: 'paragraph',
      data: {
        text: 'The <strong>hypotenuse</strong> is always the side <em>opposite</em> the right angle. It is the longest side of a right-angled triangle. Label it <em>c</em> when applying Pythagoras\' theorem.',
      },
    },
    {
      id: 'callout-key-hyp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Rule',
        text: 'The hypotenuse is always opposite the right angle and is always the longest side. Never use Pythagoras\' theorem unless you have confirmed there is a right angle.',
      },
    },
    {
      id: 'h-finding',
      type: 'heading',
      data: { text: 'Finding Missing Sides', level: 2 },
    },
    {
      id: 'p-finding',
      type: 'paragraph',
      data: {
        text: 'There are two situations: finding the <strong>hypotenuse</strong> (you know both shorter sides) or finding a <strong>shorter side</strong> (you know the hypotenuse and one other side).',
      },
    },
    {
      id: 'eq-hyp',
      type: 'equation',
      data: {
        html: 'c = √(a² + b²)',
        caption: 'Finding the hypotenuse',
      },
    },
    {
      id: 'eq-short',
      type: 'equation',
      data: {
        html: 'a = √(c² − b²)',
        caption: 'Finding a shorter side',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Find the hypotenuse',
        text: 'A right-angled triangle has shorter sides of length 6 cm and 8 cm. Find the hypotenuse.\n\nStep 1: Write the formula: c² = a² + b²\nStep 2: Substitute: c² = 6² + 8² = 36 + 64 = 100\nStep 3: Square root: c = √100 = 10 cm\n\n✓ Answer: The hypotenuse is 10 cm.',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Find a shorter side',
        text: 'A right-angled triangle has a hypotenuse of 13 cm and one shorter side of 5 cm. Find the missing side.\n\nStep 1: Write the formula: a² = c² − b²\nStep 2: Substitute: a² = 13² − 5² = 169 − 25 = 144\nStep 3: Square root: a = √144 = 12 cm\n\n✓ Answer: The missing side is 12 cm.',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Decimal answer',
        text: 'Find the hypotenuse of a right-angled triangle with legs 5 cm and 7 cm.\n\nStep 1: c² = 5² + 7² = 25 + 49 = 74\nStep 2: c = √74 ≈ 8.60 cm (3 s.f.)\n\n✓ Answer: c ≈ 8.60 cm',
      },
    },
    {
      id: 'h-triples',
      type: 'heading',
      data: { text: 'Pythagorean Triples', level: 2 },
    },
    {
      id: 'p-triples',
      type: 'paragraph',
      data: {
        text: '<strong>Pythagorean triples</strong> are sets of three whole numbers that satisfy a² + b² = c². Recognising common triples allows you to find answers without a calculator.',
      },
    },
    {
      id: 'tbl-triples',
      type: 'comparisonTable',
      data: {
        caption: 'Common Pythagorean triples',
        headers: ['a', 'b', 'c', 'Verification'],
        rows: [
          ['3', '4', '5', '9 + 16 = 25 ✓'],
          ['5', '12', '13', '25 + 144 = 169 ✓'],
          ['8', '15', '17', '64 + 225 = 289 ✓'],
          ['6', '8', '10', '36 + 64 = 100 ✓ (3,4,5 × 2)'],
          ['9', '12', '15', '81 + 144 = 225 ✓ (3,4,5 × 3)'],
        ],
      },
    },
    {
      id: 'h-check',
      type: 'heading',
      data: { text: 'Checking If a Triangle Is Right-Angled', level: 2 },
    },
    {
      id: 'p-check',
      type: 'paragraph',
      data: {
        text: 'To verify whether a triangle with sides <em>a</em>, <em>b</em>, <em>c</em> (where <em>c</em> is the longest side) is right-angled, check whether a² + b² = c². If the equation holds, the triangle has a right angle.',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Is this triangle right-angled?',
        text: 'A triangle has sides 7 cm, 24 cm and 25 cm. Is it right-angled?\n\nStep 1: Identify the longest side: c = 25\nStep 2: Check: a² + b² = 7² + 24² = 49 + 576 = 625\nStep 3: c² = 25² = 625\nStep 4: Since 625 = 625, the triangle IS right-angled.\n\n✓ Answer: Yes, the triangle is right-angled (7, 24, 25 is a Pythagorean triple).',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always check your answer is sensible — the hypotenuse must be the longest side. If your calculated value for c is less than a or b, you have made an error. Also look out for Pythagorean triples in exam questions — they often use 3,4,5 or 5,12,13.',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'When finding a shorter side, students often add instead of subtract: a² = c² − b², NOT c² + b². Remember you must subtract because you are finding the smaller value.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: '<strong>Pythagoras\' theorem:</strong> a² + b² = c² where c is the hypotenuse. Use c = √(a² + b²) to find the hypotenuse, and a = √(c² − b²) to find a shorter side. Common triples: 3,4,5 — 5,12,13 — 8,15,17. Check if a triangle is right-angled by testing whether a² + b² = c².',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Pythagoras: a² + b² = c². Find hypotenuse: c = √(a² + b²). Find shorter side: a = √(c² − b²). Common triples: 3,4,5 and 5,12,13.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-theorem',
        prompt: 'State Pythagoras\' theorem.',
        answer: 'a² + b² = c², where c is the hypotenuse (the side opposite the right angle).',
      },
      {
        id: 'cue-2',
        blockId: 'p-hyp',
        prompt: 'How do you identify the hypotenuse in a right-angled triangle?',
        answer: 'The hypotenuse is opposite the right angle and is always the longest side.',
      },
      {
        id: 'cue-3',
        blockId: 'eq-short',
        prompt: 'A right-angled triangle has hypotenuse 13 cm and a leg of 5 cm. Find the other leg.',
        answer: 'a = √(13² − 5²) = √(169 − 25) = √144 = 12 cm.',
      },
      {
        id: 'cue-4',
        blockId: 'tbl-triples',
        prompt: 'Name three common Pythagorean triples.',
        answer: '3, 4, 5 — 5, 12, 13 — 8, 15, 17.',
      },
      {
        id: 'cue-5',
        blockId: 'h-check',
        prompt: 'How do you check whether a triangle with sides 9, 40, 41 is right-angled?',
        answer: 'Check if 9² + 40² = 41²: 81 + 1600 = 1681 = 41². Yes, it is right-angled.',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
