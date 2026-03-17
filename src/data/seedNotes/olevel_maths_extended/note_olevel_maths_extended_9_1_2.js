export const note_olevel_maths_extended_9_1_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/calculations-with-the-mean.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use the mean to find missing totals, to solve problems when values are added or removed, and to find combined means.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Calculations with the Mean', level: 2 }
    },
    {
      id: 'callout-key-rearrange',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Relationship',
        text: 'Mean = <span class="nb-frac"><span class="nb-num">Total</span><span class="nb-den"><em>n</em></span></span><br><br>Rearranging: <strong>Total = Mean × <em>n</em></strong><br><br>This lets you find the total from the mean, or find a missing value.'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Finding a Missing Value',
        text: 'Five numbers have mean 8. Four of the numbers are 6, 7, 9, 10. Find the fifth.<br><br><strong>Solution:</strong><br>Total = 8 × 5 = 40<br>Sum of known = 6 + 7 + 9 + 10 = 32<br>Missing number = 40 − 32 = <strong>8</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Combined Mean',
        text: 'Class A: 20 students, mean = 65. Class B: 30 students, mean = 70. Find the combined mean.<br><br><strong>Solution:</strong><br>Total A = 20 × 65 = 1300<br>Total B = 30 × 70 = 2100<br>Combined mean = <span class="nb-frac"><span class="nb-num">1300 + 2100</span><span class="nb-den">20 + 30</span></span> = <span class="nb-frac"><span class="nb-num">3400</span><span class="nb-den">50</span></span> = <strong>68</strong>'
      }
    },
    {
      id: 'callout-warning-combine',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'The combined mean is NOT the average of the two means (unless both groups are the same size). You must find the total of each group and add them, then divide by the total number.'
      }
    },
    {
      id: 'callout-tip-add-remove',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Adding / Removing Values',
        text: 'If a value is added: new total = old total + new value, new n = old n + 1.<br>If a value is removed: new total = old total − removed value, new n = old n − 1.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Total = Mean × n. Use this to find missing values, combined means, or adjust when values are added/removed. The combined mean is NOT the simple average of two means.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Total = Mean × n. Use this relationship to find missing values and combined means.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-rearrange', prompt: 'How do you find the total from the mean?', answer: 'Total = Mean × n.' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'Five numbers have mean 8. Four are 6,7,9,10. Find the fifth.', answer: 'Total = 40, sum of four = 32, so fifth = 8.' },
      { id: 'cue-3', blockId: 'callout-warning-combine', prompt: 'Can you find a combined mean by averaging the two means?', answer: 'No — unless both groups are the same size. Find totals first.' },
      { id: 'cue-4', blockId: 'callout-tip-add-remove', prompt: 'If a value is removed from a data set, how do you find the new mean?', answer: 'New total = old total − removed value. New mean = new total ÷ (n − 1).' }
    ]
  },
  evidence: []
};
