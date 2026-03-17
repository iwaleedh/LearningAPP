export const note_olevel_maths_core_1_5_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/percentage-increases-and-decreases.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use the multiplier method to calculate new values after a percentage increase or decrease, and find the original value given the new value.' }
    },
    {
      id: 'h-multiplier',
      type: 'heading',
      data: { text: 'The Multiplier Method', level: 2 }
    },
    {
      id: 'p-multiplier',
      type: 'paragraph',
      data: { text: 'A <strong>multiplier</strong> combines the percentage change into a single number you multiply by. This is faster than finding the change separately and adding/subtracting.' }
    },
    {
      id: 'tbl-multipliers',
      type: 'comparisonTable',
      data: {
        caption: 'Finding the Multiplier',
        headers: ['Change', 'Multiplier', 'Example'],
        rows: [
          ['20% increase', '1 + 0.20 = 1.20', '$50 → $50 × 1.20 = $60'],
          ['15% decrease', '1 − 0.15 = 0.85', '$200 → $200 × 0.85 = $170'],
          ['5% increase', '1.05', '$80 × 1.05 = $84'],
          ['30% decrease', '0.70', '$150 × 0.70 = $105']
        ]
      }
    },
    {
      id: 'callout-worked-increase',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Percentage Increase',
        text: 'A salary of $1 200 increases by 8%. Find the new salary.<br><br>Multiplier = 1 + 0.08 = <strong>1.08</strong><br>New salary = $1 200 × 1.08 = <strong>$1 296</strong>'
      }
    },
    {
      id: 'callout-worked-decrease',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Percentage Decrease',
        text: 'A TV costs $650. It is reduced by 12%. Find the sale price.<br><br>Multiplier = 1 − 0.12 = <strong>0.88</strong><br>Sale price = $650 × 0.88 = <strong>$572</strong>'
      }
    },
    {
      id: 'h-reverse',
      type: 'heading',
      data: { text: 'Reverse Percentages: Finding the Original Value', level: 2 }
    },
    {
      id: 'p-reverse',
      type: 'paragraph',
      data: { text: 'If you know the new value and the percentage change, divide by the multiplier to find the original.' }
    },
    {
      id: 'callout-worked-reverse',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Reverse Percentage: Find Original Price',
        text: 'After a 25% increase, a price is $75. Find the original price.<br><br>Multiplier for 25% increase = 1.25<br>Original = 75 ÷ 1.25 = <strong>$60</strong><br><br>Check: $60 × 1.25 = $75 ✓'
      }
    },
    {
      id: 'callout-key-multiplier',
      type: 'callout',
      data: { style: 'key', title: 'Key Rule', text: 'Increase by r%: multiply by (1 + r/100).<br>Decrease by r%: multiply by (1 − r/100).<br>Reverse: new value ÷ multiplier = original.' }
    },
    {
      id: 'callout-tip-reverse',
      type: 'callout',
      data: { style: 'tip', title: 'Common Mistake: Reverse Percentages', text: 'After 20% increase, do NOT find 20% of new value and subtract. Divide new value by 1.20 instead. E.g. if price after 20% increase is $60: original = 60 ÷ 1.20 = $50 (not $60 − 20% of $60 = $48).' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Multiplier: increase by r%  → ×(1 + r/100); decrease by r% → ×(1 − r/100). For reverse: original = new value ÷ multiplier.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-multiplier', prompt: 'What is the multiplier for a 35% increase? A 15% decrease?' },
      { id: 'cue-2', blockId: 'callout-worked-increase', prompt: 'A salary of $1 200 increases by 8%. Use the multiplier to find the new salary.' },
      { id: 'cue-3', blockId: 'callout-worked-decrease', prompt: 'A TV costs $650; it is reduced by 12%. Find the sale price.' },
      { id: 'cue-4', blockId: 'h-reverse', prompt: 'After a 25% increase, a price is $75. How do you find the original price?' },
      { id: 'cue-5', blockId: 'callout-tip-reverse', prompt: 'Explain why you should NOT find 20% of the new value to reverse a 20% increase.' }
    ],
    summaryText: 'Increase r%: × (1+r/100). Decrease r%: ×(1−r/100). Reverse: new ÷ multiplier = original.',
    ready: true
  },
  evidence: []
};
