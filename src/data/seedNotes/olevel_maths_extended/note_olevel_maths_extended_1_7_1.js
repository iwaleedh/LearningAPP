export const note_olevel_maths_extended_1_7_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/operations-with-standard-form.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Add, subtract, multiply and divide numbers in standard form. Give answers in correct standard form.' }
    },
    {
      id: 'h-mult',
      type: 'heading',
      data: { text: 'Multiplying in Standard Form', level: 2 }
    },
    {
      id: 'p-mult',
      type: 'paragraph',
      data: { text: 'Multiply the number parts (a values) and <strong>add</strong> the powers of 10. If the result\'s number part is ≥ 10, adjust to keep it in standard form.' }
    },
    {
      id: 'callout-key-mult',
      type: 'callout',
      data: { style: 'key', title: 'Multiplication Rule', text: '(a × 10<sup>m</sup>) × (b × 10<sup>n</sup>) = (a × b) × 10<sup>m+n</sup>\n\nThen adjust if a × b ≥ 10.' }
    },
    {
      id: 'callout-worked-mult',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example — Multiplication', text: '(3 × 10⁴) × (5 × 10³)\n= (3 × 5) × 10⁴⁺³\n= 15 × 10⁷\n= <strong>1.5 × 10⁸</strong> (adjusted: 15 = 1.5 × 10¹)\n\n(4.2 × 10⁻³) × (2 × 10⁵)\n= (4.2 × 2) × 10⁻³⁺⁵\n= 8.4 × 10²\n= <strong>8.4 × 10²</strong> (already in standard form)' }
    },
    {
      id: 'h-div',
      type: 'heading',
      data: { text: 'Dividing in Standard Form', level: 2 }
    },
    {
      id: 'p-div',
      type: 'paragraph',
      data: { text: 'Divide the number parts and <strong>subtract</strong> the powers of 10. Adjust if the result is less than 1.' }
    },
    {
      id: 'callout-key-div',
      type: 'callout',
      data: { style: 'key', title: 'Division Rule', text: '(a × 10<sup>m</sup>) ÷ (b × 10<sup>n</sup>) = (<span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">b</span></span>) × 10<sup>m−n</sup>\n\nThen adjust if a/b < 1 or a/b ≥ 10.' }
    },
    {
      id: 'callout-worked-div',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example — Division', text: '(8.4 × 10⁷) ÷ (4 × 10³)\n= (8.4 ÷ 4) × 10⁷⁻³\n= 2.1 × 10⁴\n= <strong>2.1 × 10⁴</strong>\n\n(3.6 × 10⁵) ÷ (9 × 10⁷)\n= (3.6 ÷ 9) × 10⁵⁻⁷\n= 0.4 × 10⁻²\n= <strong>4 × 10⁻³</strong> (adjusted: 0.4 = 4 × 10⁻¹)' }
    },
    {
      id: 'h-add-sub',
      type: 'heading',
      data: { text: 'Adding and Subtracting in Standard Form', level: 2 }
    },
    {
      id: 'p-add-sub',
      type: 'paragraph',
      data: { text: 'To add or subtract numbers in standard form, the <strong>powers of 10 must be the same</strong>. Either convert to ordinary numbers or adjust one number to match the other\'s power.' }
    },
    {
      id: 'callout-worked-add',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example — Addition', text: '(3.4 × 10⁵) + (6.2 × 10⁴)\n\n<strong>Method 1 — Convert to ordinary numbers:</strong>\n340 000 + 62 000 = 402 000 = <strong>4.02 × 10⁵</strong>\n\n<strong>Method 2 — Match powers:</strong>\n(3.4 × 10⁵) + (0.62 × 10⁵)\n= (3.4 + 0.62) × 10⁵\n= 4.02 × 10⁵\n= <strong>4.02 × 10⁵</strong>' }
    },
    {
      id: 'callout-worked-sub',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example — Subtraction', text: '(5 × 10⁻²) − (3 × 10⁻³)\n\nConvert to ordinary numbers:\n0.05 − 0.003 = 0.047 = <strong>4.7 × 10⁻²</strong>\n\nOr match powers to 10⁻³:\n(50 × 10⁻³) − (3 × 10⁻³)\n= 47 × 10⁻³\n= <strong>4.7 × 10⁻²</strong>' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'For ×/÷ work with the numbers and powers separately. For +/− it\'s usually easiest to convert to ordinary numbers first, then convert back. Always check your final answer is in correct standard form (1 ≤ a < 10).' }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: { style: 'warning', title: 'Common Mistakes', text: '• Forgetting to adjust the answer back to standard form (e.g. leaving 15 × 10⁷ instead of 1.5 × 10⁸)\n• Adding powers when multiplying but forgetting to subtract when dividing\n• Trying to add the number parts directly when the powers are different' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Multiply: multiply a values, add powers. Divide: divide a values, subtract powers. Add/Subtract: match the powers first or convert to ordinary numbers. Always ensure the final answer has 1 ≤ a < 10.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-mult', prompt: 'State the rule for multiplying two numbers in standard form.' },
      { id: 'cue-2', blockId: 'callout-key-div', prompt: 'State the rule for dividing two numbers in standard form.' },
      { id: 'cue-3', blockId: 'p-add-sub', prompt: 'What must be true before you can add or subtract numbers in standard form?' },
      { id: 'cue-4', blockId: 'callout-worked-mult', prompt: 'Calculate (3 × 10⁴) × (5 × 10³) and give your answer in standard form.' },
      { id: 'cue-5', blockId: 'callout-warning-1', prompt: 'What are three common mistakes when working with standard form operations?' }
    ],
    summaryText: 'For × add powers; for ÷ subtract powers; for +/− match powers first. Always adjust final answer to proper standard form.',
    ready: true
  },
  evidence: []
};
