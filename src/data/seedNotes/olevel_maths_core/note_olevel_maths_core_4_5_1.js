export const note_olevel_maths_core_4_5_1 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply the theorem that the angle in a semicircle is 90° to find missing angles in circle problems.' }
    },
    {
      id: 'h-theorem',
      type: 'heading',
      data: { text: 'The Angle in a Semicircle Theorem', level: 2 }
    },
    {
      id: 'p-theorem',
      type: 'paragraph',
      data: { text: 'If one side of a triangle inscribed in a circle is the <strong>diameter</strong> of the circle, then the angle <strong>at the circumference</strong> (opposite the diameter) is always <strong>exactly 90°</strong>. In other words: the angle subtended by a diameter at any point on the circumference is a right angle.' }
    },
    {
      id: 'eq-theorem',
      type: 'equation',
      data: { html: '∠APB = 90° &nbsp;(angle in a semicircle, AB is a diameter)', caption: 'P is any point on the circumference, AB is a diameter' }
    },
    {
      id: 'h-why',
      type: 'heading',
      data: { text: 'Why This Works', level: 2 }
    },
    {
      id: 'p-why',
      type: 'paragraph',
      data: { text: 'The underlying principle is that the <strong>angle at the centre = 2 × the angle at the circumference</strong> when both are subtended by the same arc. For a diameter, the angle subtended at the centre is 180° (a straight line). Therefore the angle at the circumference = 180° ÷ 2 = <strong>90°</strong>. This is true no matter where P is on the semicircle.' }
    },
    {
      id: 'svg-semicircle',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 280" width="480" height="280">
  <style>
    text { font-family: sans-serif; font-size: 12px; fill: #374151; }
    .lbl { font-weight: 700; fill: #6366f1; font-size: 13px; }
    .angle { font-weight: 700; fill: #ef4444; font-size: 13px; }
  </style>
  <!-- Circle -->
  <circle cx="230" cy="155" r="110" fill="#2d2f72" fill-opacity="0.3" stroke="#6366f1" stroke-width="2"/>
  <!-- Diameter AB -->
  <line x1="120" y1="155" x2="340" y2="155" stroke="#6366f1" stroke-width="2.5"/>
  <circle cx="120" cy="155" r="4" fill="#6366f1"/>
  <circle cx="340" cy="155" r="4" fill="#6366f1"/>
  <text x="104" y="175" class="lbl">A</text>
  <text x="344" y="175" class="lbl">B</text>
  <!-- Centre O -->
  <circle cx="230" cy="155" r="4" fill="#374151"/>
  <text x="234" y="148" fill="#374151" font-size="11" font-weight="700">O</text>
  <!-- Point P on upper semicircle -->
  <circle cx="195" cy="55" r="5" fill="#ef4444"/>
  <text x="178" y="47" class="angle">P</text>
  <!-- Lines AP and BP -->
  <line x1="120" y1="155" x2="195" y2="55" stroke="#9333ea" stroke-width="1.8"/>
  <line x1="340" y1="155" x2="195" y2="55" stroke="#9333ea" stroke-width="1.8"/>
  <!-- Right angle square at P -->
  <g transform="translate(195,55)">
    <path d="M-11,25 L-3,13 L11,21" fill="none" stroke="#ef4444" stroke-width="2"/>
  </g>
  <text x="205" y="90" class="angle">90°</text>
  <!-- Angle labels -->
  <text x="145" y="135" fill="#9333ea" font-size="11">α</text>
  <text x="310" y="135" fill="#9333ea" font-size="11">β</text>
  <text x="120" y="230" fill="#374151" font-size="11">α + β = 90° (angles in triangle APB)</text>
  <!-- Second point P' to show theorem holds for any P -->
  <circle cx="300" cy="68" r="4" fill="#10b981" opacity="0.7"/>
  <line x1="120" y1="155" x2="300" y2="68" stroke="#10b981" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.7"/>
  <line x1="340" y1="155" x2="300" y2="68" stroke="#10b981" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.7"/>
  <text x="304" y="65" fill="#10b981" font-size="10">P' (also 90°)</text>
  <text x="80" y="255" fill="#6b7280" font-size="11">The 90° angle holds for ANY point P on the semicircle</text>
</svg>`,
        caption: 'Angle APB = 90° for any point P on the semicircle; AB is the diameter'
      }
    },
    {
      id: 'h-using',
      type: 'heading',
      data: { text: 'Using the Theorem to Find Angles', level: 2 }
    },
    {
      id: 'p-using',
      type: 'paragraph',
      data: { text: 'When you see a triangle inscribed in a semicircle with the diameter as its base:<br>1. Mark the angle at the circumference as 90°<br>2. Use the fact that angles in a triangle sum to 180°<br>3. Find the remaining angles using 90° + other angle + unknown = 180°' }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples',
        text: '<strong>Example 1:</strong> AB is a diameter. P is on the circle. ∠PAB = 35°. Find ∠PBA.<br>∠APB = 90° (angle in semicircle)<br>∠PBA = 180° − 90° − 35° = <strong>55°</strong><br><br><strong>Example 2:</strong> In a circle, AB is a diameter and C is on the circle. ∠CAB = 52°. Find ∠ACB and ∠CBA.<br>∠ACB = 90° (angle in semicircle)<br>∠CBA = 180° − 90° − 52° = <strong>38°</strong>'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Theorem',
        text: '<strong>Angle in a semicircle = 90°</strong><br>If AB is a diameter of a circle and P is any other point on the circle, then ∠APB = 90°.<br>In reverse: if a triangle is right-angled and you know the hypotenuse, then the hypotenuse is the diameter of the circumscribed circle.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Identify the Diameter',
        text: 'In exam diagrams, the key is spotting that a given chord IS the diameter. It will either be labelled "diameter", pass through the marked centre O, or be explicitly twice the radius. Once you know the diameter, the angle at the circumference is automatically 90°.'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Angle in a semicircle = 90°. If AB is a diameter and P is on the circle, ∠APB = 90°. This follows from the angle at centre = 2 × angle at circumference rule (180° at centre ÷ 2 = 90°). Use with angle sum in triangle to find other angles.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Angle subtended by diameter at circumference = 90° (angle in semicircle theorem).',
    cues: [
      { id: 'cue-1', blockId: 'p-theorem', prompt: 'State the angle-in-a-semicircle theorem. What condition must be met for it to apply?' },
      { id: 'cue-2', blockId: 'p-why', prompt: 'Why is the angle in a semicircle exactly 90°? Connect it to the angle at the centre rule.' },
      { id: 'cue-3', blockId: 'callout-worked', prompt: 'AB is a diameter. P is on the circle. ∠ABP = 48°. Find all angles in triangle ABP.' },
      { id: 'cue-4', blockId: 'callout-key', prompt: 'If a triangle has a right angle at C, and C lies on a circle, what can you say about side AB?' }
    ]
  },
  evidence: []
};
