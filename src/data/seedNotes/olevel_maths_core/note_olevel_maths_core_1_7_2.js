export const note_olevel_maths_core_1_7_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/estimation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Estimate calculations by rounding each number to 1 significant figure; use estimates to check the reasonableness of answers.' }
    },
    {
      id: 'h-why-estimate',
      type: 'heading',
      data: { text: 'Why Estimate?', level: 2 }
    },
    {
      id: 'p-why-estimate',
      type: 'paragraph',
      data: { text: 'Estimation lets you quickly judge whether a calculated answer is <em>roughly correct</em>. If your calculator answer differs wildly from your estimate, you\'ve likely made an error. Estimation also appears in exam questions directly.' }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Method: Round to 1 Significant Figure', level: 2 }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Round <em>every</em> value in the calculation to 1 significant figure.' },
          { text: 'Perform the simplified calculation.' },
          { text: 'This gives your estimate.' }
        ]
      }
    },
    {
      id: 'callout-worked-mult',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Estimating a Multiplication',
        text: 'Estimate: 38.4 × 5.27<br><br>38.4 ≈ 40 (1 s.f.)<br>5.27 ≈ 5 (1 s.f.)<br><br>Estimate = 40 × 5 = <strong>200</strong><br><br>Exact answer: 202.4 — estimate is close ✓'
      }
    },
    {
      id: 'callout-worked-div',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Estimating a Division',
        text: 'Estimate: 783 ÷ 18.6<br><br>783 ≈ 800 (1 s.f.)<br>18.6 ≈ 20 (1 s.f.)<br><br>Estimate = 800 ÷ 20 = <strong>40</strong><br><br>Exact answer: ≈ 42.1 — estimate is reasonable ✓'
      }
    },
    {
      id: 'callout-worked-complex',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Estimating with Fractions/Roots',
        text: 'Estimate: √(48.7 × 3.1)<br><br>48.7 ≈ 50, 3.1 ≈ 3<br>50 × 3 = 150<br>√150 ≈ √144 = <strong>12</strong><br><br>(Exact: √150.97 ≈ 12.3 — very close ✓)'
      }
    },
    {
      id: 'callout-key-estimate',
      type: 'callout',
      data: { style: 'key', title: 'Key Rule', text: 'Round every number to <strong>1 significant figure</strong> before calculating. This should give an estimate within the right order of magnitude.' }
    },
    {
      id: 'callout-tip-estimate',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Show your rounded values clearly, then the estimated calculation. Never write the exact answer as the estimate. If the question says "estimate", marks are for showing the 1 s.f. rounding step.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Estimation: round every number to 1 s.f., then calculate. Useful for checking. On exam: always show the rounded values explicitly before computing the estimate.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-method', prompt: 'What does "estimate" mean in maths? What rounding rule do you use?' },
      { id: 'cue-2', blockId: 'callout-worked-mult', prompt: 'Estimate 38.4 × 5.27. Show each number rounded to 1 s.f.' },
      { id: 'cue-3', blockId: 'callout-worked-div', prompt: 'Estimate 783 ÷ 18.6. Show your working.' },
      { id: 'cue-4', blockId: 'callout-tip-estimate', prompt: 'What must you always write in an "estimate" question to get full marks?' }
    ],
    summaryText: 'Estimation = round each number to 1 s.f., then compute. Used to check exact answers and as a direct exam question.',
    ready: true
  },
  evidence: []
};
