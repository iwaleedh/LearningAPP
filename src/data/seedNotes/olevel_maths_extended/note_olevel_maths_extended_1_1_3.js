export const note_olevel_maths_extended_1_1_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/negative-numbers.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Perform arithmetic operations with negative numbers including addition, subtraction, multiplication, and division.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Understanding Negative Numbers', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Negative numbers are numbers less than zero, written with a minus sign. They appear on the left side of zero on a number line. Real-world examples include temperatures below freezing (−5°C), debts (−$200), and depths below sea level (−30 m).' }
    },
    {
      id: 'h-add-sub',
      type: 'heading',
      data: { text: 'Adding and Subtracting Negative Numbers', level: 2 }
    },
    {
      id: 'callout-key-rules',
      type: 'callout',
      data: { style: 'key', title: 'Sign Rules for Addition & Subtraction', text: '<strong>Adding a negative</strong> = subtracting: 5 + (−3) = 5 − 3 = 2\n<strong>Subtracting a negative</strong> = adding: 5 − (−3) = 5 + 3 = 8\n<strong>Two negatives next to each other</strong> &rarr; change to plus\n<strong>A positive and a negative next to each other</strong> &rarr; change to minus' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: 'Calculate (−4) + (−7).\n\n<strong>Solution:</strong>\nBoth numbers are negative, so we move further left on the number line:\n(−4) + (−7) = −(4 + 7) = <strong>−11</strong>' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2', text: 'Calculate (−3) − (−8).\n\n<strong>Solution:</strong>\nSubtracting a negative means adding:\n(−3) − (−8) = (−3) + 8 = <strong>5</strong>' }
    },
    {
      id: 'h-mult-div',
      type: 'heading',
      data: { text: 'Multiplying and Dividing Negative Numbers', level: 2 }
    },
    {
      id: 'callout-key-mult',
      type: 'callout',
      data: { style: 'key', title: 'Sign Rules for × and ÷', text: '<strong>Same signs &rarr; positive result:</strong>\n(+) × (+) = (+) &nbsp;&nbsp; (−) × (−) = (+)\n\n<strong>Different signs &rarr; negative result:</strong>\n(+) × (−) = (−) &nbsp;&nbsp; (−) × (+) = (−)\n\nThe same rules apply to division.' }
    },
    {
      id: 'table-signs',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of sign rules',
        headers: ['Operation', 'Signs', 'Result', 'Example'],
        rows: [
          ['×  or  ÷', '(+)(+)', 'Positive', '6 × 3 = 18'],
          ['×  or  ÷', '(−)(−)', 'Positive', '(−6) × (−3) = 18'],
          ['×  or  ÷', '(+)(−)', 'Negative', '6 × (−3) = −18'],
          ['×  or  ÷', '(−)(+)', 'Negative', '(−6) × 3 = −18']
        ]
      }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 3', text: 'Calculate (−12) ÷ (−4) × (−2).\n\n<strong>Solution:</strong>\nWork left to right:\n(−12) ÷ (−4) = 3 &nbsp;&nbsp; (same signs &rarr; positive)\n3 × (−2) = <strong>−6</strong> &nbsp;&nbsp; (different signs &rarr; negative)' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'When multiplying multiple negative numbers, count the negatives: an <strong>even number</strong> of negatives gives a <strong>positive</strong> result; an <strong>odd number</strong> gives a <strong>negative</strong> result.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Two like signs together become positive (+); two unlike signs become negative (−). For multiplication and division: same signs give a positive answer, different signs give a negative answer. Count the negatives to determine the final sign.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-rules', prompt: 'What happens when you subtract a negative number?' },
      { id: 'cue-2', blockId: 'callout-key-mult', prompt: 'State the sign rules for multiplying and dividing negative numbers.' },
      { id: 'cue-3', blockId: 'callout-tip-1', prompt: 'How can you quickly find the sign when multiplying several negative numbers?' },
      { id: 'cue-4', blockId: 'h-add-sub', prompt: 'Calculate (−5) + (−3) and (−5) − (−3). Explain each step.' }
    ],
    summaryText: 'Negative number arithmetic follows sign rules: same signs give positive, different signs give negative for × and ÷.',
    ready: true
  },
  evidence: []
};
