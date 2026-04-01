export const note_olevel_maths_core_5_4_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Lengths Areas And Volumes/congruence.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Identify congruent shapes and state their properties. Know and apply the four triangle congruence conditions (SSS, SAS, ASA/AAS, RHS) to prove triangles are congruent and find unknown measurements.',
      },
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'Congruent Shapes', level: 2 },
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: {
        text: 'Two shapes are <b>congruent</b> if they are <b>exactly the same shape AND the same size</b>. All corresponding sides are equal AND all corresponding angles are equal. One shape can be obtained from the other by a translation, rotation, or reflection (no resizing).',
      },
    },
    {
      id: 'callout-key-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Congruent vs Similar',
        text: '• <b>Congruent</b>: same shape, same size (scale factor k = 1)<br>• <b>Similar</b>: same shape, different size (scale factor k ≠ 1)<br><br>All congruent shapes are similar, but not all similar shapes are congruent.',
      },
    },
    {
      id: 'h-conditions',
      type: 'heading',
      data: { text: 'Congruence Conditions for Triangles', level: 2 },
    },
    {
      id: 'p-conditions',
      type: 'paragraph',
      data: {
        text: 'For triangles, there are four conditions that are sufficient to prove congruence. You only need ONE of these to apply:',
      },
    },
    {
      id: 'tbl-conditions',
      type: 'comparisonTable',
      data: {
        caption: 'The four triangle congruence conditions',
        headers: ['Condition', 'What it means', 'Notes'],
        rows: [
          ['SSS', 'All 3 pairs of corresponding sides are equal', 'Side–Side–Side'],
          ['SAS', '2 pairs of sides equal AND the included angle (between them) is equal', 'Side–Angle–Side; angle must be between the two sides'],
          ['ASA or AAS', '2 pairs of angles equal AND 1 pair of corresponding sides equal', 'Any side works for AAS; for ASA the side is between the two angles'],
          ['RHS', 'Right angle, Hypotenuse equal, and one other Side equal', 'Only for right-angled triangles'],
        ],
      },
    },
    {
      id: 'svg-congruent',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial" font-size="11">
  <!-- SSS example: two identical triangles -->
  <polygon points="20,160 100,160 60,90" fill="#2d1b69" stroke="#3b82f6" stroke-width="2"/>
  <text x="60" y="175" text-anchor="middle" fill="#374151">8</text>
  <text x="12" y="130" fill="#374151">7</text>
  <text x="97" y="130" fill="#374151">6</text>

  <polygon points="130,160 210,160 170,90" fill="#2d1b69" stroke="#3b82f6" stroke-width="2"/>
  <text x="170" y="175" text-anchor="middle" fill="#374151">8</text>
  <text x="122" y="130" fill="#374151">7</text>
  <text x="207" y="130" fill="#374151">6</text>
  <text x="115" y="200" text-anchor="middle" fill="#3b82f6" font-weight="bold">SSS</text>

  <!-- SAS example -->
  <polygon points="240,160 320,160 280,90" fill="#0a2e1a" stroke="#10b981" stroke-width="2"/>
  <text x="280" y="175" text-anchor="middle" fill="#374151">10</text>
  <text x="232" y="130" fill="#374151">8</text>
  <text x="268" y="158" fill="#f59e0b" font-size="10">65°</text>

  <polygon points="355,90 435,90 395,160" fill="#0a2e1a" stroke="#10b981" stroke-width="2"/>
  <text x="395" y="175" text-anchor="middle" fill="#374151">10</text>
  <text x="447" y="130" fill="#374151">8</text>
  <text x="383" y="105" fill="#f59e0b" font-size="10">65°</text>
  <text x="335" y="200" text-anchor="middle" fill="#10b981" font-weight="bold">SAS</text>

  <!-- Labels -->
  <text x="115" y="215" text-anchor="middle" fill="#374151" font-size="10">(reflected/rotated — still congruent)</text>
</svg>`,
        caption: 'Examples of triangle congruence: SSS (same three sides), SAS (two sides and included angle)',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Proving congruence (SAS)',
        text: 'In triangles ABC and PQR: AB = PQ = 7 cm, BC = QR = 9 cm, angle ABC = angle PQR = 50°. Prove the triangles are congruent.<br><br>AB = PQ (given)<br>BC = QR (given)<br>Angle ABC = Angle PQR = 50° (given, and this is the <b>included angle</b> between the two equal sides)<br>Therefore triangles ABC and PQR are <b>congruent by SAS</b>.',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Proving congruence (AAS)',
        text: 'In triangles ABC and DEF: angle A = angle D = 40°, angle B = angle E = 75°, BC = EF = 8 cm. Are the triangles congruent?<br><br>Angle A = Angle D = 40° ✓<br>Angle B = Angle E = 75° ✓<br>BC = EF = 8 cm (note: BC and EF are sides <b>not</b> between the two given angles, so this is AAS)<br>Therefore <b>congruent by AAS</b>.',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Using congruence to find unknowns',
        text: 'Triangles ABC and PQR are congruent. In triangle ABC: AB = 6 cm, BC = 8 cm, angle A = 35°. In triangle PQR: PQ corresponds to AB, QR corresponds to BC. Find PQ, QR, and angle P.<br><br>Because the triangles are congruent, corresponding parts are equal.<br>PQ = AB = <b>6 cm</b><br>QR = BC = <b>8 cm</b><br>Angle P = Angle A = <b>35°</b>',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'SSA is NOT a Congruence Condition',
        text: 'Two sides and a NON-included angle (SSA) does <b>not</b> prove congruence — two different triangles can have the same two sides and a non-included angle. Only use SAS where the angle is <b>between</b> the two given sides.',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When writing a congruence proof, always: (1) state which sides/angles are equal and why, (2) name the congruence condition used (SSS/SAS/ASA/AAS/RHS), (3) state the conclusion with matching vertex order: "Triangle ABC ≅ Triangle PQR".',
      },
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can distinguish between congruent and similar shapes', checked: false },
          { text: 'I can state and apply SSS congruence', checked: false },
          { text: 'I can state and apply SAS congruence (included angle)', checked: false },
          { text: 'I can state and apply ASA and AAS congruence', checked: false },
          { text: 'I can state and apply RHS congruence for right-angled triangles', checked: false },
          { text: 'I can write a complete congruence proof', checked: false },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Congruent = same shape AND size. Four triangle conditions: SSS, SAS (included angle), ASA/AAS, RHS. SSA is NOT sufficient. In a proof: state equal pairs, name the condition, state the conclusion with matching vertex order.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Congruent = same shape and size. Conditions: SSS, SAS, AAS/ASA, RHS. SSA is not enough. State condition and matching vertices.',
    cues: [
      { id: 'cue-1', blockId: 'p-def', prompt: 'What does "congruent" mean for two shapes?' },
      { id: 'cue-2', blockId: 'callout-key-def', prompt: 'What is the difference between congruent and similar shapes?' },
      { id: 'cue-3', blockId: 'tbl-conditions', prompt: 'State all four congruence conditions for triangles.' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'Why is SSA (two sides and non-included angle) not a valid congruence condition?' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'What three things must you include in a written congruence proof?' },
    ],
  },
  evidence: [],
  mentions: [],
};
