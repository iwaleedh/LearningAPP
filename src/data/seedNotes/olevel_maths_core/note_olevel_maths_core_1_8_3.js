export const note_olevel_maths_core_1_8_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/operations-with-standard-form.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Multiply, divide, add, and subtract numbers given in standard form; give answers in standard form.' }
    },
    {
      id: 'h-multiply',
      type: 'heading',
      data: { text: 'Multiplying in Standard Form', level: 2 }
    },
    {
      id: 'p-multiply',
      type: 'paragraph',
      data: { text: 'Multiply the A values together and add the indices of 10. Then check A is still in range (1 ≤ A &lt; 10).' }
    },
    {
      id: 'callout-worked-mult',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Multiplying Standard Form',
        text: '(3 × 10⁴) × (2 × 10⁶)<br>= (3 × 2) × 10⁴⁺⁶<br>= 6 × 10¹⁰ ✓<br><br>(4 × 10³) × (5 × 10²)<br>= 20 × 10⁵<br>A = 20 is not in range! Rewrite:<br>= 2 × 10⁶ ✓'
      }
    },
    {
      id: 'h-divide',
      type: 'heading',
      data: { text: 'Dividing in Standard Form', level: 2 }
    },
    {
      id: 'p-divide',
      type: 'paragraph',
      data: { text: 'Divide the A values and subtract the indices of 10. Adjust if needed.' }
    },
    {
      id: 'callout-worked-div',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Dividing Standard Form',
        text: '(8 × 10⁷) ÷ (2 × 10³)<br>= (8 ÷ 2) × 10⁷⁻³<br>= 4 × 10⁴ ✓<br><br>(6 × 10⁵) ÷ (4 × 10²)<br>= 1.5 × 10³ ✓'
      }
    },
    {
      id: 'h-add-sub',
      type: 'heading',
      data: { text: 'Adding and Subtracting in Standard Form', level: 2 }
    },
    {
      id: 'p-add-sub',
      type: 'paragraph',
      data: { text: 'You can only add/subtract when the powers of 10 are the <em>same</em>. Convert to the same power first, then add/subtract the A values.' }
    },
    {
      id: 'callout-worked-add',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Adding Standard Form',
        text: '3.2 × 10⁵ + 4 × 10⁴<br>Convert to same power: 3.2 × 10⁵ + 0.4 × 10⁵<br>= (3.2 + 0.4) × 10⁵<br>= 3.6 × 10⁵ ✓<br><br>Alternatively convert to ordinary numbers: 320 000 + 40 000 = 360 000 = 3.6 × 10⁵'
      }
    },
    {
      id: 'callout-key-ops',
      type: 'callout',
      data: { style: 'key', title: 'Rules Summary', text: 'Multiply: × A values, + indices.<br>Divide: ÷ A values, − indices.<br>Add/Subtract: make powers the same, then combine A values.<br>Always rewrite if A is out of range (1 ≤ A &lt; 10).' }
    },
    {
      id: 'callout-tip-ops',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'For add/subtract, converting to ordinary numbers is often safest for IGCSE. Check your final answer is in correct standard form before writing it.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Standard form operations: ×=multiply A and add powers; ÷=divide A and subtract powers. Add/subtract: match the powers first. Always ensure 1 ≤ A < 10 in final answer.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-multiply', prompt: 'Multiply (3 × 10⁴) × (2 × 10⁶). Write the answer in standard form.' },
      { id: 'cue-2', blockId: 'callout-worked-mult', prompt: 'Why does (4 × 10³) × (5 × 10²) = 2 × 10⁶ and not 20 × 10⁵?' },
      { id: 'cue-3', blockId: 'h-divide', prompt: 'Divide (8 × 10⁷) by (2 × 10³) in standard form.' },
      { id: 'cue-4', blockId: 'h-add-sub', prompt: 'Why can\'t you simply add 3.2 × 10⁵ + 4 × 10⁴ without adjusting first?' },
      { id: 'cue-5', blockId: 'callout-worked-add', prompt: 'Add 3.2 × 10⁵ + 4 × 10⁴. Show the conversion to a common power.' }
    ],
    summaryText: 'Standard form: ×→multiply A, add indices; ÷→divide A, subtract indices; +/−→equalise powers first. Always check 1≤A<10.',
    ready: true
  },
  evidence: []
};
