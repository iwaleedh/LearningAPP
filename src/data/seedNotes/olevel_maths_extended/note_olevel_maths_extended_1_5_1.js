export const note_olevel_maths_extended_1_5_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/compound-interest.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate compound interest and the total amount using the compound interest formula. Compare compound and simple interest.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What Is Compound Interest?', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Compound interest</strong> is interest calculated on the original amount <em>plus</em> any interest already earned. Each year, the interest is added to the total, so the amount grows <strong>exponentially</strong>. This is "interest on interest".' }
    },
    {
      id: 'callout-key-formula',
      type: 'callout',
      data: { style: 'key', title: 'Compound Interest Formula', text: 'A = P(1 + <span class="nb-frac"><span class="nb-num">r</span><span class="nb-den">100</span></span>)<sup>n</sup>\n\nwhere:\n<strong>A</strong> = Total amount after n years\n<strong>P</strong> = Principal (initial amount)\n<strong>r</strong> = Rate of interest per year (%)\n<strong>n</strong> = Number of years\n\n<strong>Compound interest earned</strong> = A − P' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: '$5000 is invested at 4% compound interest per year for 3 years. Find the total amount and the interest earned.\n\n<strong>Solution:</strong>\nA = 5000 × (1 + <span class="nb-frac"><span class="nb-num">4</span><span class="nb-den">100</span></span>)³\nA = 5000 × (1.04)³\nA = 5000 × 1.124864\nA = <strong>$5624.32</strong>\n\nInterest = $5624.32 − $5000 = <strong>$624.32</strong>' }
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Compound vs Simple Interest', level: 2 }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: '$5000 at 4% for 3 years',
        headers: ['Year', 'Simple Interest Total', 'Compound Interest Total'],
        rows: [
          ['0', '$5000', '$5000'],
          ['1', '$5200', '$5200'],
          ['2', '$5400', '$5408'],
          ['3', '$5600', '$5624.32']
        ]
      }
    },
    {
      id: 'p-compare',
      type: 'paragraph',
      data: { text: 'Compound interest always produces a <strong>larger total</strong> than simple interest (for more than 1 year), because each year\'s interest is calculated on an increasing amount.' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2 — Finding the Number of Years', text: 'How many complete years until $3000 at 6% compound interest exceeds $4000?\n\n<strong>Solution:</strong>\nA = 3000 × (1.06)<sup>n</sup> > 4000\n(1.06)<sup>n</sup> > <span class="nb-frac"><span class="nb-num">4000</span><span class="nb-den">3000</span></span> = 1.333…\n\nTry: (1.06)⁴ = 1.2625 (not enough)\n(1.06)⁵ = 1.3382 (not enough)\n(1.06)⁶ = 1.4185 (exceeds 1.333)\nAnswer: <strong>5 complete years</strong> (it exceeds $4000 during year 6)' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Remember: the multiplier for compound interest is (1 + r/100). For a 4% increase each year, the multiplier is 1.04. Simply raise this to the power of the number of years.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Compound interest uses A = P(1 + r/100)ⁿ. Interest is calculated on the growing total, producing exponential growth. Compound interest always exceeds simple interest for periods longer than one year.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-formula', prompt: 'State the compound interest formula and define each variable.' },
      { id: 'cue-2', blockId: 'p-intro', prompt: 'How is compound interest different from simple interest?' },
      { id: 'cue-3', blockId: 'p-compare', prompt: 'Which gives more interest over multiple years — simple or compound? Why?' },
      { id: 'cue-4', blockId: 'callout-worked-2', prompt: 'How do you find the number of years for compound interest to reach a target?' },
      { id: 'cue-5', blockId: 'callout-tip-1', prompt: 'What is the multiplier for 4% compound interest?' }
    ],
    summaryText: 'Compound interest grows exponentially using A = P(1 + r/100)ⁿ; it outperforms simple interest over multiple years.',
    ready: true
  },
  evidence: []
};
