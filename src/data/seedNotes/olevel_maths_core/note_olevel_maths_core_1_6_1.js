export const note_olevel_maths_core_1_6_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/compound-interest.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate compound interest using the formula A = P(1 + r/100)ⁿ, and compare simple and compound interest.' }
    },
    {
      id: 'h-definition',
      type: 'heading',
      data: { text: 'What is Compound Interest?', level: 2 }
    },
    {
      id: 'p-definition',
      type: 'paragraph',
      data: { text: '<strong>Compound interest</strong> is calculated on the principal <em>plus</em> all previously accumulated interest. Each period, the interest earned is added to the balance, and the next period\'s interest is calculated on that larger amount — interest earns interest.' }
    },
    {
      id: 'h-formula',
      type: 'heading',
      data: { text: 'Compound Interest Formula', level: 2 }
    },
    {
      id: 'eq-ci',
      type: 'equation',
      data: {
        html: 'A = P × (1 + <span class="nb-frac"><span class="nb-num">r</span><span class="nb-den">100</span></span>)<sup>n</sup>',
        caption: 'A = total amount; P = principal; r = annual rate (%); n = number of years'
      }
    },
    {
      id: 'p-ci-interest',
      type: 'paragraph',
      data: { text: 'Compound interest earned = A − P.' }
    },
    {
      id: 'callout-worked-ci',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Compound Interest',
        text: 'Invest $1 000 at 5% per year compound interest for 3 years.<br><br>A = 1000 × (1 + 5/100)³<br>A = 1000 × (1.05)³<br>A = 1000 × 1.157625<br>A = <strong>$1 157.63</strong><br><br>Interest earned = $1 157.63 − $1 000 = <strong>$157.63</strong>'
      }
    },
    {
      id: 'h-year-by-year',
      type: 'heading',
      data: { text: 'Year-by-Year Method (Building up)', level: 2 }
    },
    {
      id: 'p-year-by-year',
      type: 'paragraph',
      data: { text: 'You can check by multiplying by the multiplier each year.' }
    },
    {
      id: 'tbl-year-by-year',
      type: 'comparisonTable',
      data: {
        caption: '$1 000 at 5% compound interest',
        headers: ['Year', 'Start balance', 'Interest (5%)', 'End balance'],
        rows: [
          ['1', '$1 000.00', '$50.00', '$1 050.00'],
          ['2', '$1 050.00', '$52.50', '$1 102.50'],
          ['3', '$1 102.50', '$55.13', '$1 157.63']
        ]
      }
    },
    {
      id: 'callout-key-ci-vs-si',
      type: 'callout',
      data: { style: 'key', title: 'Compound vs Simple Interest', text: '<strong>Simple:</strong> same interest every period (on original principal only).<br><strong>Compound:</strong> growing interest every period (on principal + accumulated interest).<br><br>Compound always gives <em>more</em> interest over time than simple, for the same rate.' }
    },
    {
      id: 'callout-tip-ci',
      type: 'callout',
      data: { style: 'tip', title: 'Calculator Tip', text: 'Type P × 1.0r^n. For 5% → 1.05^n; for 12% → 1.12^n. Use brackets: P × (1.05)^3. Make sure to raise to the power of years only, NOT the whole product.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Compound interest: A = P(1 + r/100)ⁿ. Interest earned = A − P. Each year interest is calculated on the growing total. Compound > simple for same rate and period.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-ci', prompt: 'Write the compound interest formula. What does each letter represent?' },
      { id: 'cue-2', blockId: 'callout-worked-ci', prompt: '$1 000 invested at 5% compound interest for 3 years. Find the total amount and interest earned.' },
      { id: 'cue-3', blockId: 'tbl-year-by-year', prompt: 'Show how $1 000 grows year-by-year at 5% compound interest.' },
      { id: 'cue-4', blockId: 'callout-key-ci-vs-si', prompt: 'What is the key difference between simple and compound interest?' },
      { id: 'cue-5', blockId: 'callout-tip-ci', prompt: 'Which part of the formula A = P(1.05)³ do you raise to the power?' }
    ],
    summaryText: 'Compound interest: A = P(1 + r/100)ⁿ. Interest compounds (earns on previous interest). Always gives more than simple interest.',
    ready: true
  },
  evidence: []
};
