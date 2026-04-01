export const note_olevel_maths_core_4_1_1 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply the rules for angles on a straight line, angles around a point, and vertically opposite angles to calculate missing angles.' }
    },
    {
      id: 'h-straight',
      type: 'heading',
      data: { text: 'Angles on a Straight Line', level: 2 }
    },
    {
      id: 'p-straight',
      type: 'paragraph',
      data: { text: 'When two or more angles are formed on one side of a straight line and share a common vertex on that line, they always add up to <strong>180°</strong>. These angle pairs are called <strong>supplementary angles</strong>. If you know one angle, subtract from 180° to find the other.' }
    },
    {
      id: 'eq-straight',
      type: 'equation',
      data: { html: 'Angles on a straight line: a + b = 180°', caption: 'Supplementary angles' }
    },
    {
      id: 'h-point',
      type: 'heading',
      data: { text: 'Angles Around a Point', level: 2 }
    },
    {
      id: 'p-point',
      type: 'paragraph',
      data: { text: 'All the angles formed at a single point (a complete rotation) always add up to <strong>360°</strong>. This rule holds however many rays meet at that point — simply add all the angles and subtract from 360° to find any missing one.' }
    },
    {
      id: 'eq-point',
      type: 'equation',
      data: { html: 'Angles around a point: a + b + c + ⋯ = 360°', caption: 'Angles at a point' }
    },
    {
      id: 'h-vert',
      type: 'heading',
      data: { text: 'Vertically Opposite Angles', level: 2 }
    },
    {
      id: 'p-vert',
      type: 'paragraph',
      data: { text: 'When two straight lines cross, they form two pairs of <strong>vertically opposite angles</strong>. The angles in each pair are <strong>equal</strong>. They are called vertically opposite because they sit directly opposite each other at the vertex — they are <em>not</em> adjacent.' }
    },
    {
      id: 'eq-vert',
      type: 'equation',
      data: { html: 'Vertically opposite angles: a = c &nbsp;and&nbsp; b = d', caption: 'Where a and c are opposite, and b and d are opposite' }
    },
    {
      id: 'svg-rules',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 200" width="560" height="200">
  <style>
    text { font-family: sans-serif; font-size: 11px; fill: #374151; }
    .lbl { font-weight: 700; fill: #3b82f6; font-size: 12px; }
    .title { font-weight: 700; fill: #374151; font-size: 12px; }
  </style>
  <!-- Panel 1: Angles on a line -->
  <g transform="translate(10,50)">
    <text x="10" y="-25" class="title">Angles on a straight line</text>
    <line x1="0" y1="0" x2="155" y2="0" stroke="#374151" stroke-width="2"/>
    <line x1="70" y1="0" x2="55" y2="-65" stroke="#374151" stroke-width="2"/>
    <path d="M90,0 A20,20 0 0,0 70,0" fill="none" stroke="#ef4444" stroke-width="1.5"/>
    <path d="M50,0 A22,22 0 0,0 55,-22" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="56" y="-14" class="lbl" fill="#3b82f6">a</text>
    <text x="77" y="-8" class="lbl" fill="#ef4444">b</text>
    <text x="60" y="18">a + b = 180°</text>
  </g>
  <!-- Panel 2: Angles around a point -->
  <g transform="translate(210,110)">
    <text x="-20" y="-85" class="title">Angles around a point</text>
    <line x1="0" y1="0" x2="65" y2="0" stroke="#374151" stroke-width="2"/>
    <line x1="0" y1="0" x2="-65" y2="0" stroke="#374151" stroke-width="2"/>
    <line x1="0" y1="0" x2="0" y2="-65" stroke="#374151" stroke-width="2"/>
    <line x1="0" y1="0" x2="46" y2="-46" stroke="#374151" stroke-width="2"/>
    <path d="M30,0 A30,30 0 0,0 21.2,-21.2" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
    <path d="M21.2,-21.2 A30,30 0 0,0 0,-30" fill="none" stroke="#10b981" stroke-width="1.5"/>
    <path d="M0,-30 A30,30 0 0,0 -30,0" fill="none" stroke="#ef4444" stroke-width="1.5"/>
    <path d="M-30,0 A30,30 0 0,0 30,0" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="22" y="-10" class="lbl" fill="#3b82f6">a</text>
    <text x="5" y="-33" class="lbl" fill="#10b981">b</text>
    <text x="-20" y="-15" class="lbl" fill="#ef4444">c</text>
    <text x="-5" y="22" class="lbl" fill="#f59e0b">d</text>
    <text x="-30" y="55">a+b+c+d = 360°</text>
  </g>
  <!-- Panel 3: Vertically opposite -->
  <g transform="translate(440,100)">
    <text x="-30" y="-85" class="title">Vertically opposite</text>
    <line x1="-65" y1="-45" x2="65" y2="45" stroke="#374151" stroke-width="2"/>
    <line x1="-65" y1="45" x2="65" y2="-45" stroke="#374151" stroke-width="2"/>
    <path d="M18,12 A22,22 0 1,1 22,18" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-width="1.5"/>
    <path d="M-18,-12 A22,22 0 1,1 -22,-18" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="22" y="8" class="lbl" fill="#3b82f6">a</text>
    <text x="-32" y="-4" class="lbl" fill="#3b82f6">a</text>
    <text x="-32" y="16" class="lbl" fill="#ef4444">b</text>
    <text x="22" y="-8" class="lbl" fill="#ef4444">b</text>
    <text x="-28" y="55">a = a, &nbsp; b = b (equal)</text>
  </g>
</svg>`,
        caption: 'Three angle rules: supplementary (180°), around a point (360°), and vertically opposite (equal)'
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples',
        text: '<strong>Example 1:</strong> Angles on a straight line are 3x and 2x. Find x.<br>3x + 2x = 180° → 5x = 180° → x = 36°<br><br><strong>Example 2:</strong> Three angles around a point are 120°, 95°, and y. Find y.<br>120° + 95° + y = 360° → y = 360° − 215° = <strong>145°</strong><br><br><strong>Example 3:</strong> Two straight lines cross. One angle is 72°. Find all four angles.<br>Vertically opposite to 72°: also 72°<br>Adjacent (on straight line): 180° − 72° = 108°<br>Opposite to 108°: also 108°<br>→ Four angles: <strong>72°, 108°, 72°, 108°</strong>'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Three Essential Rules',
        text: '① <strong>Angles on a straight line = 180°</strong> (supplementary)<br>② <strong>Angles around a point = 360°</strong><br>③ <strong>Vertically opposite angles are equal</strong> (when two straight lines cross)'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — State Your Reason',
        text: 'In exam questions, always write the <strong>reason</strong> alongside your calculation, for example: "angles on a straight line" or "vertically opposite angles". This earns method marks even if you calculate the wrong number.'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Angles on a straight line sum to 180°. Angles around a point sum to 360°. When two straight lines intersect, vertically opposite angles are equal. Always state the geometric reason in working.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Straight line sum = 180°; point sum = 360°; vertically opposite angles are equal.',
    cues: [
      { id: 'cue-1', blockId: 'p-straight', prompt: 'What do angles on a straight line always sum to? What is the term for these angle pairs?' },
      { id: 'cue-2', blockId: 'p-point', prompt: 'What do all angles around a point sum to?' },
      { id: 'cue-3', blockId: 'p-vert', prompt: 'When do vertically opposite angles form? What is special about them?' },
      { id: 'cue-4', blockId: 'callout-worked', prompt: 'Two straight lines cross and one angle is 55°. Find all four angles at the intersection.' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'Why should you write a reason when calculating angles in an exam?' }
    ]
  },
  evidence: []
};
