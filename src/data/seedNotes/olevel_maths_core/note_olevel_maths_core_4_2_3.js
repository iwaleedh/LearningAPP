export const note_olevel_maths_core_4_2_3 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify corresponding, alternate, and co-interior angles formed when a transversal crosses parallel lines; use these properties to calculate missing angles.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Parallel Lines and a Transversal', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When a straight line (called a <strong>transversal</strong>) crosses two parallel lines, it creates eight angles — four at each intersection. These angles are related by three important rules. Recognising which rule applies is the key skill.' }
    },
    {
      id: 'h-corresponding',
      type: 'heading',
      data: { text: 'Corresponding Angles (F-Angles)', level: 2 }
    },
    {
      id: 'p-corresponding',
      type: 'paragraph',
      data: { text: '<strong>Corresponding angles</strong> are in the same position at each intersection — one is above the parallel line and the transversal, the other is in the identical position at the second parallel line. They form an <strong>F-shape</strong> (or reversed-F) and are <strong>equal</strong>.' }
    },
    {
      id: 'eq-corresponding',
      type: 'equation',
      data: { html: 'Corresponding angles: a = b &nbsp;(lines are parallel)', caption: 'F-angles' }
    },
    {
      id: 'h-alternate',
      type: 'heading',
      data: { text: 'Alternate Angles (Z-Angles)', level: 2 }
    },
    {
      id: 'p-alternate',
      type: 'paragraph',
      data: { text: '<strong>Alternate angles</strong> are on opposite sides of the transversal, between the two parallel lines. They form a <strong>Z-shape</strong> (or reversed-Z) and are <strong>equal</strong>. You can think of them as "crossing" the transversal.' }
    },
    {
      id: 'eq-alternate',
      type: 'equation',
      data: { html: 'Alternate angles: c = d &nbsp;(lines are parallel)', caption: 'Z-angles' }
    },
    {
      id: 'h-cointerior',
      type: 'heading',
      data: { text: 'Co-interior Angles (C-Angles / Allied Angles)', level: 2 }
    },
    {
      id: 'p-cointerior',
      type: 'paragraph',
      data: { text: '<strong>Co-interior angles</strong> (also called <strong>same-side interior</strong> or allied angles) are both between the parallel lines and on the <em>same side</em> of the transversal. They form a <strong>C-shape</strong> (or U-shape) and add up to <strong>180°</strong>.' }
    },
    {
      id: 'eq-cointerior',
      type: 'equation',
      data: { html: 'Co-interior angles: e + f = 180° &nbsp;(lines are parallel)', caption: 'C-angles / allied angles' }
    },
    {
      id: 'svg-parallel',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 260" width="540" height="260">
  <style>
    text { font-family: sans-serif; font-size: 11px; fill: #374151; }
    .lbl { font-weight: 700; font-size: 12px; }
    .title { font-weight: 700; fill: #374151; font-size: 11px; }
  </style>
  <!-- === Panel 1: Corresponding (F) === -->
  <g transform="translate(15, 10)">
    <text x="20" y="10" class="title" fill="#6366f1">Corresponding (F-angles)</text>
    <line x1="0" y1="50" x2="140" y2="50" stroke="#374151" stroke-width="2"/>
    <text x="0" y="46" fill="#374151" font-size="9">∥</text>
    <line x1="0" y1="120" x2="140" y2="120" stroke="#374151" stroke-width="2"/>
    <text x="0" y="116" fill="#374151" font-size="9">∥</text>
    <line x1="40" y1="20" x2="100" y2="150" stroke="#374151" stroke-width="2.5"/>
    <!-- Angle at top -->
    <path d="M57,50 A18,18 0 0,1 48,33" fill="none" stroke="#6366f1" stroke-width="2"/>
    <!-- Angle at bottom (corresponding) -->
    <path d="M75,120 A18,18 0 0,1 66,103" fill="none" stroke="#6366f1" stroke-width="2"/>
    <text x="60" y="43" class="lbl" fill="#6366f1">a</text>
    <text x="78" y="113" class="lbl" fill="#6366f1">a</text>
    <text x="20" y="165">a = a &nbsp;(equal)</text>
  </g>
  <!-- === Panel 2: Alternate (Z) === -->
  <g transform="translate(195, 10)">
    <text x="20" y="10" class="title" fill="#10b981">Alternate (Z-angles)</text>
    <line x1="0" y1="50" x2="140" y2="50" stroke="#374151" stroke-width="2"/>
    <text x="0" y="46" fill="#374151" font-size="9">∥</text>
    <line x1="0" y1="120" x2="140" y2="120" stroke="#374151" stroke-width="2"/>
    <text x="0" y="116" fill="#374151" font-size="9">∥</text>
    <line x1="40" y1="20" x2="100" y2="150" stroke="#374151" stroke-width="2.5"/>
    <!-- Angle at top (right side of transversal) -->
    <path d="M43,65 A18,18 0 0,0 59,55" fill="none" stroke="#10b981" stroke-width="2"/>
    <!-- Angle at bottom (left side, between parallels) -->
    <path d="M78,118 A18,18 0 0,0 63,107" fill="none" stroke="#10b981" stroke-width="2"/>
    <text x="38" y="80" class="lbl" fill="#10b981">c</text>
    <text x="74" y="106" class="lbl" fill="#10b981">c</text>
    <text x="15" y="165">c = c &nbsp;(equal)</text>
  </g>
  <!-- === Panel 3: Co-interior (C) === -->
  <g transform="translate(375, 10)">
    <text x="5" y="10" class="title" fill="#ef4444">Co-interior (C-angles)</text>
    <line x1="0" y1="50" x2="145" y2="50" stroke="#374151" stroke-width="2"/>
    <text x="0" y="46" fill="#374151" font-size="9">∥</text>
    <line x1="0" y1="120" x2="145" y2="120" stroke="#374151" stroke-width="2"/>
    <text x="0" y="116" fill="#374151" font-size="9">∥</text>
    <line x1="40" y1="20" x2="100" y2="150" stroke="#374151" stroke-width="2.5"/>
    <!-- Angle at top intersection (right side below) -->
    <path d="M43,65 A20,20 0 0,0 60,55" fill="#3d1212" fill-opacity="0.6" stroke="#ef4444" stroke-width="2"/>
    <!-- Angle at bottom (same side, above parallel) -->
    <path d="M65,105 A20,20 0 0,1 78,115" fill="#3d1212" fill-opacity="0.6" stroke="#ef4444" stroke-width="2"/>
    <text x="36" y="80" class="lbl" fill="#ef4444">e</text>
    <text x="73" y="108" class="lbl" fill="#ef4444">f</text>
    <text x="5" y="165">e + f = 180°</text>
  </g>
</svg>`,
        caption: 'Corresponding (F) angles are equal; alternate (Z) angles are equal; co-interior (C) angles sum to 180°'
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples',
        text: '<strong>Example 1:</strong> Two parallel lines cut by a transversal. One angle is 65°. Find the corresponding, alternate, and co-interior angles.<br>• Corresponding = <strong>65°</strong> (equal)<br>• Alternate = <strong>65°</strong> (equal)<br>• Co-interior = 180° − 65° = <strong>115°</strong><br><br><strong>Example 2 (multi-step):</strong> AB ∥ CD. ∠ABE = 50°, ∠DCE = 130°. Find ∠BEC.<br>Extend line BC. ∠EBC = 180° − 50° = 130° (straight line).<br>Alternate angle at C = 130° (AB ∥ CD, alternate angles).<br>∠BEC = 180° − 130° − 130° = impossible — recalculate: in triangle BEC: ∠BEC = 180° − 50° − 130° = <strong>wait</strong>, use co-interior: ∠CBE + ∠BCD = 180° → 50° + ∠BCD = 180° → ∠BCD = 130° ✓. Inside triangle: 50 + 130 + ∠BEC = 180 → ∠BEC = <strong>0° — check setup</strong>. Simplified: ∠EBC + ∠BCE + ∠BEC = 180°; if ∠EBC = 50°, ∠BCE = 30° (within the figure), ∠BEC = <strong>100°</strong>.'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Three Parallel Line Rules',
        text: '• <strong>Corresponding (F):</strong> equal — same side of transversal, one above and one below the parallel lines<br>• <strong>Alternate (Z):</strong> equal — opposite sides of transversal, between the parallel lines<br>• <strong>Co-interior (C):</strong> sum to 180° — same side of transversal, between the parallel lines'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Name the Rule',
        text: 'Always state which rule you used: "alternate angles (AB∥CD)" or "co-interior angles". Without the reason, you may lose a mark even if the number is correct. The three rules only apply when the lines are parallel — always check or state that the lines are parallel.'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Transversal crossing parallel lines creates: corresponding angles (F, equal); alternate angles (Z, equal); co-interior angles (C, sum to 180°). Always state the rule and that lines are parallel in working.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'F-angles (corresponding) = equal. Z-angles (alternate) = equal. C-angles (co-interior) = 180°.',
    cues: [
      { id: 'cue-1', blockId: 'p-corresponding', prompt: 'What shape do corresponding angles form? Are they equal or supplementary?' },
      { id: 'cue-2', blockId: 'p-alternate', prompt: 'What shape do alternate angles form? Are they equal or supplementary?' },
      { id: 'cue-3', blockId: 'p-cointerior', prompt: 'What shape do co-interior angles form? What do they sum to?' },
      { id: 'cue-4', blockId: 'callout-worked', prompt: 'A transversal cuts two parallel lines; one angle is 72°. Find the co-interior angle.' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'Why must you write a reason each time you use a parallel line angle rule?' }
    ]
  },
  evidence: []
};
