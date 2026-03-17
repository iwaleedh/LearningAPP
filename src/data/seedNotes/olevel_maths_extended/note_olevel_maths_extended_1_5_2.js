export const note_olevel_maths_extended_1_5_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/depreciation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate depreciation using a reducing balance method. Apply the compound interest formula to decreasing values.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What Is Depreciation?', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Depreciation</strong> is a decrease in value over time. Cars, machinery, and electronics lose value each year. Depreciation typically works like "reverse compound interest" — the value decreases by a fixed <strong>percentage</strong> each year.' }
    },
    {
      id: 'callout-key-formula',
      type: 'callout',
      data: { style: 'key', title: 'Depreciation Formula', text: 'A = P(1 − <span class="nb-frac"><span class="nb-num">r</span><span class="nb-den">100</span></span>)<sup>n</sup>\n\nwhere:\n<strong>A</strong> = Value after n years\n<strong>P</strong> = Original value\n<strong>r</strong> = Rate of depreciation per year (%)\n<strong>n</strong> = Number of years\n\nNotice the <strong>minus</strong> sign — the multiplier is less than 1.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: 'A car costs $24 000. It depreciates at 15% per year. Find its value after 4 years.\n\n<strong>Solution:</strong>\nA = 24000 × (1 − <span class="nb-frac"><span class="nb-num">15</span><span class="nb-den">100</span></span>)⁴\nA = 24000 × (0.85)⁴\nA = 24000 × 0.52200625\nA = <strong>$12 528.15</strong>\n\nThe car has lost $24 000 − $12 528.15 = $11 471.85 in value.' }
    },
    {
      id: 'h-comparison',
      type: 'heading',
      data: { text: 'Depreciation vs Compound Interest', level: 2 }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Key differences',
        headers: ['Feature', 'Compound Interest', 'Depreciation'],
        rows: [
          ['Multiplier', '(1 + r/100)', '(1 − r/100)'],
          ['Multiplier value', 'Greater than 1', 'Less than 1'],
          ['Effect', 'Value increases', 'Value decreases'],
          ['Graph shape', 'Exponential growth', 'Exponential decay']
        ]
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2 — Finding the Rate', text: 'A laptop worth $1200 is valued at $768 after 2 years. Find the annual rate of depreciation.\n\n<strong>Solution:</strong>\n768 = 1200 × (1 − <span class="nb-frac"><span class="nb-num">r</span><span class="nb-den">100</span></span>)²\n<span class="nb-frac"><span class="nb-num">768</span><span class="nb-den">1200</span></span> = (1 − <span class="nb-frac"><span class="nb-num">r</span><span class="nb-den">100</span></span>)²\n0.64 = (1 − <span class="nb-frac"><span class="nb-num">r</span><span class="nb-den">100</span></span>)²\n√0.64 = 1 − <span class="nb-frac"><span class="nb-num">r</span><span class="nb-den">100</span></span>\n0.8 = 1 − <span class="nb-frac"><span class="nb-num">r</span><span class="nb-den">100</span></span>\n<span class="nb-frac"><span class="nb-num">r</span><span class="nb-den">100</span></span> = 0.2\nr = <strong>20%</strong>' }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: { style: 'warning', title: 'Common Mistake', text: 'Don\'t use (1 + r/100) for depreciation — always use (1 − r/100). The multiplier should be less than 1 since the value is decreasing.' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'If the question says "loses 15% of its value each year", the multiplier is 0.85. If it says "worth 85% of its previous value each year", the multiplier is also 0.85. Both mean the same thing.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Depreciation uses A = P(1 − r/100)ⁿ. The multiplier is less than 1, producing exponential decay. You can rearrange the formula to find the rate or the number of years.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-formula', prompt: 'Write the depreciation formula and explain what each letter stands for.' },
      { id: 'cue-2', blockId: 'table-compare', prompt: 'How does the multiplier for depreciation differ from compound interest?' },
      { id: 'cue-3', blockId: 'callout-worked-2', prompt: 'Describe how to find the annual depreciation rate given an initial and final value.' },
      { id: 'cue-4', blockId: 'callout-tip-1', prompt: 'What multiplier would you use for a 15% annual depreciation?' }
    ],
    summaryText: 'Depreciation models value decrease using A = P(1 − r/100)ⁿ with a multiplier less than 1, giving exponential decay.',
    ready: true
  },
  evidence: []
};
