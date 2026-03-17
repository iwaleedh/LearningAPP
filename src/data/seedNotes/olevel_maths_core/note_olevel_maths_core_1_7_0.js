export const note_olevel_maths_core_1_7_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/rounding-to-a-given-place-value.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Round numbers to a given number of decimal places (d.p.) or to the nearest integer, ten, hundred, or thousand.' }
    },
    {
      id: 'h-dp',
      type: 'heading',
      data: { text: 'Rounding to Decimal Places', level: 2 }
    },
    {
      id: 'list-dp-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Identify the digit at the required decimal place.' },
          { text: 'Look at the <strong>next</strong> digit (the "deciding digit").' },
          { text: 'If the deciding digit is <strong>5 or more</strong>: round up (add 1 to the last kept digit).' },
          { text: 'If the deciding digit is <strong>less than 5</strong>: round down (leave last kept digit unchanged).' },
          { text: 'Drop all digits after the required place.' }
        ]
      }
    },
    {
      id: 'callout-worked-dp',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Decimal Places',
        text: 'Round 7.382 to 2 d.p.:<br>Keep up to 2nd decimal place (8). Deciding digit = 2 &lt; 5. Round down.<br>Answer: <strong>7.38</strong><br><br>Round 4.1<u>6</u>7 to 2 d.p.:<br>Deciding digit = 7 ≥ 5. Round up.<br>Answer: <strong>4.17</strong><br><br>Round 3.495 to 2 d.p.:<br>Deciding digit = 5 ≥ 5. Round up to 3.50 (keep trailing zero).<br>Answer: <strong>3.50</strong>'
      }
    },
    {
      id: 'h-place-value-round',
      type: 'heading',
      data: { text: 'Rounding to the Nearest Integer, 10, 100, 1000', level: 2 }
    },
    {
      id: 'list-place-value-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Nearest integer</strong>: look at first decimal place. 3.7 → 4; 3.2 → 3' },
          { text: '<strong>Nearest 10</strong>: look at units digit. 374 → 370; 375 → 380' },
          { text: '<strong>Nearest 100</strong>: look at tens digit. 2 450 → 2 500; 2 430 → 2 400' },
          { text: '<strong>Nearest 1 000</strong>: look at hundreds digit. 6 500 → 7 000; 6 499 → 6 000' }
        ]
      }
    },
    {
      id: 'callout-worked-whole',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Rounding 3 748 to Different Accuracies',
        text: 'Nearest 10: deciding digit = 4 &lt; 5 → <strong>3 740</strong><br>Nearest 100: deciding digit = 4 &lt; 5 → <strong>3 700</strong><br>Nearest 1 000: deciding digit = 7 ≥ 5 → <strong>4 000</strong>'
      }
    },
    {
      id: 'callout-key-round',
      type: 'callout',
      data: { style: 'key', title: 'The Rounding Rule', text: '<strong>Deciding digit ≥ 5 → round up.</strong><br><strong>Deciding digit < 5 → keep (round down).</strong><br>Always look at the digit <em>immediately after</em> the required position.' }
    },
    {
      id: 'callout-tip-trailing-zero',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Trailing Zeros', text: 'If rounding gives a zero in the last required decimal place, keep it. E.g. "round to 2 d.p." → write 3.50, not 3.5. The trailing zero shows the level of accuracy.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Rounding: look at the deciding digit (next after required place). ≥5: round up; <5: round down. Keep trailing zeros at required d.p. to show accuracy.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-dp', prompt: 'Describe the 5-step rounding procedure for decimal places.' },
      { id: 'cue-2', blockId: 'callout-worked-dp', prompt: 'Round 4.167 to 2 d.p. and 3.495 to 2 d.p.' },
      { id: 'cue-3', blockId: 'callout-worked-whole', prompt: 'Round 3 748 to the nearest 10, 100, and 1 000.' },
      { id: 'cue-4', blockId: 'callout-key-round', prompt: 'State the rounding rule. What is the "deciding digit"?' },
      { id: 'cue-5', blockId: 'callout-tip-trailing-zero', prompt: 'Rounding 3.495 to 2 d.p. gives 3.500. Should you write 3.5 or 3.50? Why?' }
    ],
    summaryText: 'Deciding digit ≥5: round up; <5: round down. Keep trailing zeros in d.p. answers to show level of accuracy.',
    ready: true
  },
  evidence: []
};
