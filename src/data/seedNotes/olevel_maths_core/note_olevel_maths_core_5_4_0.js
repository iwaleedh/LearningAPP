export const note_olevel_maths_core_5_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Lengths Areas And Volumes/similarity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Identify similar shapes and state their properties. Use the linear scale factor to find unknown lengths in similar figures, including similar triangles identified by AA, SSS, and SAS similarity conditions.',
      },
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'Similar Shapes', level: 2 },
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: {
        text: 'Two shapes are <b>similar</b> if they have the same shape but different sizes. This means:<br>• All corresponding angles are <b>equal</b>.<br>• All corresponding sides are in the <b>same ratio</b> (the scale factor k).',
      },
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Properties of Similar Shapes',
        text: 'For two similar shapes with linear scale factor k:<br>• corresponding angles are equal<br>• corresponding sides: large side ÷ small side = k (a constant ratio for all pairs)',
      },
    },
    {
      id: 'h-triangles',
      type: 'heading',
      data: { text: 'Similar Triangles', level: 2 },
    },
    {
      id: 'p-triangles',
      type: 'paragraph',
      data: {
        text: 'Triangles are similar if any of the following conditions hold:',
      },
    },
    {
      id: 'list-conditions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>AA (Angle-Angle):</b> Two pairs of corresponding angles are equal. (The third pair is automatically equal since angles in a triangle sum to 180°.)' },
          { text: '<b>SSS (Side-Side-Side ratios):</b> All three pairs of corresponding sides are in the same ratio.' },
          { text: '<b>SAS (Side-Angle-Side):</b> Two pairs of corresponding sides are in the same ratio AND the included angle between them is equal.' },
        ],
      },
    },
    {
      id: 'svg-similar',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial" font-size="11">
  <!-- Small triangle -->
  <polygon points="40,160 120,160 80,80" fill="#2d1b69" stroke="#3b82f6" stroke-width="2"/>
  <text x="70" y="175" text-anchor="middle" fill="#374151">6</text>
  <text x="27" y="125" fill="#374151">5</text>
  <text x="108" y="125" fill="#374151">5</text>
  <text x="80" y="68" text-anchor="middle" fill="#3b82f6" font-size="10">α</text>
  <text x="80" y="205" text-anchor="middle" fill="#3b82f6" font-weight="bold">Small Triangle</text>

  <!-- k label -->
  <text x="215" y="140" fill="#f59e0b" font-size="14" font-weight="bold">k = 2</text>
  <text x="200" y="160" fill="#374151">→</text>

  <!-- Large triangle (k=2) -->
  <polygon points="280,160 440,160 360,0" fill="#0a2e1a" stroke="#10b981" stroke-width="2"/>
  <text x="360" y="178" text-anchor="middle" fill="#374151">12</text>
  <text x="260" y="95" fill="#374151">10</text>
  <text x="445" y="95" fill="#374151">10</text>
  <text x="360" y="−10" text-anchor="middle" fill="#10b981" font-size="10">α</text>
  <text x="360" y="205" text-anchor="middle" fill="#10b981" font-weight="bold">Large Triangle (similar)</text>
</svg>`,
        caption: 'Two similar triangles: scale factor k = 2. All corresponding sides doubled.',
      },
    },
    {
      id: 'h-use-sf',
      type: 'heading',
      data: { text: 'Using the Scale Factor to Find Unknown Lengths', level: 2 },
    },
    {
      id: 'p-use-sf',
      type: 'paragraph',
      data: {
        text: 'Step 1: Identify corresponding sides (same position in each shape).<br>Step 2: Calculate k = known large side ÷ known small side.<br>Step 3: Multiply or divide the other sides by k.',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Find unknown side',
        text: 'Two similar triangles have sides as follows: small triangle has sides 4 cm, 6 cm, and x cm. Large triangle has corresponding sides 10 cm, 15 cm, and y cm.<br><br>Scale factor k = 10 ÷ 4 = 2.5<br>(Check: 15 ÷ 6 = 2.5 ✓)<br>y = x × 2.5 ... but we need x. Actually, since 10 corresponds to 4 and 15 to 6, the third side y = x × 2.5.<br><br>If x = 5 cm, then y = 5 × 2.5 = <b>12.5 cm</b>',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Triangles in a diagram',
        text: 'In a diagram, triangle ABC is similar to triangle PQR. AB = 9 cm, PQ = 6 cm, and QR = 8 cm. Find BC.<br><br>Scale factor: BC corresponds to QR, AB corresponds to PQ.<br>k = AB ÷ PQ = 9 ÷ 6 = 1.5<br>BC = QR × k = 8 × 1.5 = <b>12 cm</b>',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Proving similarity (AA)',
        text: 'Triangle ABC has angle A = 55° and angle B = 70°. Triangle DEF has angle D = 55° and angle E = 70°. Are the triangles similar?<br><br>In ABC: angle C = 180 − 55 − 70 = 55°.<br>In DEF: angle F = 180 − 55 − 70 = 55°.<br>All three corresponding angles are equal, so <b>the triangles are similar (AA condition)</b>.',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When writing the scale factor, always check which direction: k = large ÷ small (to enlarge) or k = small ÷ large (to reduce). State corresponding vertices in the correct order; the first letter of each triangle corresponds to the first letter of the other.',
      },
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can state the two properties of similar shapes', checked: false },
          { text: 'I can identify the three conditions for similar triangles (AA, SSS ratios, SAS)', checked: false },
          { text: 'I can calculate the linear scale factor from corresponding sides', checked: false },
          { text: 'I can use k to find unknown lengths in similar shapes', checked: false },
          { text: 'I can prove two triangles are similar using angle arguments', checked: false },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Similar shapes: equal corresponding angles AND sides in the same ratio k. Triangles: AA, SSS (ratios), or SAS. Scale factor k = large ÷ small. Multiply or divide known sides by k to find unknowns.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Similar shapes: equal angles, sides in ratio k. Similar triangles: AA, SSS ratios, or SAS. Use k to find unknowns.',
    cues: [
      { id: 'cue-1', blockId: 'p-def', prompt: 'State two properties that similar shapes must have.' },
      { id: 'cue-2', blockId: 'list-conditions', prompt: 'Name three conditions that prove two triangles are similar.' },
      { id: 'cue-3', blockId: 'p-use-sf', prompt: 'Describe the three steps to find an unknown length using a scale factor.' },
      { id: 'cue-4', blockId: 'callout-we2', prompt: 'In similar triangles, AB = 9, PQ = 6, QR = 8. How do you find BC?' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'Why is it important to state corresponding vertices in the correct order?' },
    ],
  },
  evidence: [],
  mentions: [],
};
