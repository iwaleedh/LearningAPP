export const note_olevel_maths_extended_1_5_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/simple-interest.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate simple interest and the total amount after a given number of years using the simple interest formula.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What Is Simple Interest?', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Simple interest (SI)</strong> is interest calculated only on the <strong>original amount</strong> (the <em>principal</em>). The interest earned each year is the same — it does not compound.' }
    },
    {
      id: 'callout-key-formula',
      type: 'callout',
      data: { style: 'key', title: 'Simple Interest Formula', text: 'I = <span class="nb-frac"><span class="nb-num">P × R × T</span><span class="nb-den">100</span></span>\n\nwhere:\n<strong>I</strong> = Interest earned\n<strong>P</strong> = Principal (original amount)\n<strong>R</strong> = Rate of interest per year (%)\n<strong>T</strong> = Time in years\n\n<strong>Total amount</strong> = P + I' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: '$2000 is invested at 5% simple interest per year for 3 years. Find the interest earned and the total amount.\n\n<strong>Solution:</strong>\nI = <span class="nb-frac"><span class="nb-num">2000 × 5 × 3</span><span class="nb-den">100</span></span> = <span class="nb-frac"><span class="nb-num">30 000</span><span class="nb-den">100</span></span> = <strong>$300</strong>\n\nTotal = $2000 + $300 = <strong>$2300</strong>' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2 — Finding the Rate', text: '$1500 was invested for 4 years and earned $240 in simple interest. Find the rate.\n\n<strong>Solution:</strong>\nI = <span class="nb-frac"><span class="nb-num">PRT</span><span class="nb-den">100</span></span> &rarr; R = <span class="nb-frac"><span class="nb-num">100 × I</span><span class="nb-den">P × T</span></span>\nR = <span class="nb-frac"><span class="nb-num">100 × 240</span><span class="nb-den">1500 × 4</span></span> = <span class="nb-frac"><span class="nb-num">24 000</span><span class="nb-den">6000</span></span> = <strong>4%</strong>' }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 3 — Finding Time in Months', text: 'How long for $800 to earn $60 interest at 3% per year?\n\n<strong>Solution:</strong>\nT = <span class="nb-frac"><span class="nb-num">100 × I</span><span class="nb-den">P × R</span></span> = <span class="nb-frac"><span class="nb-num">100 × 60</span><span class="nb-den">800 × 3</span></span> = <span class="nb-frac"><span class="nb-num">6000</span><span class="nb-den">2400</span></span> = 2.5 years = <strong>2 years 6 months</strong>' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'The formula can be rearranged to find P, R, or T. Cover the variable you want (like the triangle method) and the remaining two variables tell you what to do.' }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: { style: 'warning', title: 'Common Mistake', text: 'Make sure time T is in <strong>years</strong>. If given months, convert: 18 months = 1.5 years. If given days, convert: 146 days ≈ <span class="nb-frac"><span class="nb-num">146</span><span class="nb-den">365</span></span> = 0.4 years.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Simple interest = (P × R × T) / 100. Interest is the same each year. The formula can be rearranged to find P, R, or T. Always ensure time is in years.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-formula', prompt: 'State the simple interest formula and define each variable.' },
      { id: 'cue-2', blockId: 'p-intro', prompt: 'How is simple interest different from compound interest?' },
      { id: 'cue-3', blockId: 'callout-worked-2', prompt: 'How do you rearrange the SI formula to find the rate?' },
      { id: 'cue-4', blockId: 'callout-warning-1', prompt: 'How do you convert months to years for the SI formula?' }
    ],
    summaryText: 'Simple interest is calculated on the principal only using I = PRT/100; it stays constant each year.',
    ready: true
  },
  evidence: []
};
