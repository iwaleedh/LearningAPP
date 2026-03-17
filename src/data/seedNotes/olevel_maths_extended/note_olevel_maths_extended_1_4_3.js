export const note_olevel_maths_extended_1_4_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/percentage-increases-and-decreases.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate percentage increases and decreases using multipliers, and find the percentage change between two values.' }
    },
    {
      id: 'h-increase',
      type: 'heading',
      data: { text: 'Percentage Increase', level: 2 }
    },
    {
      id: 'p-increase',
      type: 'paragraph',
      data: { text: 'To increase an amount by a percentage, find the percentage of the amount and <strong>add it to the original</strong>. A faster method is to use a <strong>multiplier</strong>.' }
    },
    {
      id: 'callout-key-multiplier',
      type: 'callout',
      data: { style: 'key', title: 'Multiplier Method', text: 'To increase by x%, multiply by <strong>(1 + <span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">100</span></span>)</strong>.\nExample: increase by 20% &rarr; multiply by 1.20.\n\nTo decrease by x%, multiply by <strong>(1 − <span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">100</span></span>)</strong>.\nExample: decrease by 15% &rarr; multiply by 0.85.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: 'A shirt costs $45. It is increased in price by 12%. Find the new price.\n\n<strong>Solution:</strong>\nMultiplier = 1 + 0.12 = 1.12\nNew price = $45 × 1.12 = <strong>$50.40</strong>' }
    },
    {
      id: 'h-decrease',
      type: 'heading',
      data: { text: 'Percentage Decrease', level: 2 }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2', text: 'A laptop originally costs $800, and is reduced by 35% in a sale. Find the sale price.\n\n<strong>Solution:</strong>\nMultiplier = 1 − 0.35 = 0.65\nSale price = $800 × 0.65 = <strong>$520</strong>' }
    },
    {
      id: 'h-pct-change',
      type: 'heading',
      data: { text: 'Percentage Change', level: 2 }
    },
    {
      id: 'callout-key-change',
      type: 'callout',
      data: { style: 'key', title: 'Percentage Change Formula', text: 'Percentage change = <span class="nb-frac"><span class="nb-num">change</span><span class="nb-den">original</span></span> × 100%\n\nwhere change = new value − original value.\nA positive result means increase; negative means decrease.' }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 3', text: 'A house was bought for $250 000 and sold for $290 000. Find the percentage profit.\n\n<strong>Solution:</strong>\nChange = $290 000 − $250 000 = $40 000\nPercentage change = <span class="nb-frac"><span class="nb-num">40 000</span><span class="nb-den">250 000</span></span> × 100 = <strong>16%</strong>' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Always divide by the <strong>original</strong> value when finding percentage change — not the new value. The denominator is always the starting amount.' }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: { style: 'warning', title: 'Common Mistake', text: 'An increase of 10% followed by a decrease of 10% does NOT get you back to the original. 100 × 1.10 = 110. Then 110 × 0.90 = 99. The result is 99, not 100.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Use multipliers for efficient percentage changes: multiply by (1 + x/100) to increase, (1 − x/100) to decrease. Percentage change = (change/original) × 100. Always divide by the original value.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-multiplier', prompt: 'What multiplier do you use for a 20% increase? A 15% decrease?' },
      { id: 'cue-2', blockId: 'callout-key-change', prompt: 'State the formula for percentage change.' },
      { id: 'cue-3', blockId: 'callout-warning-1', prompt: 'Why doesn\'t a 10% increase followed by a 10% decrease return to the original?' },
      { id: 'cue-4', blockId: 'callout-tip-1', prompt: 'When finding percentage change, what value do you always divide by?' },
      { id: 'cue-5', blockId: 'callout-worked-2', prompt: 'A $800 laptop is reduced by 35%. What is the sale price?' }
    ],
    summaryText: 'Multipliers make percentage increases/decreases quick; percentage change divides the change by the original amount.',
    ready: true
  },
  evidence: []
};
