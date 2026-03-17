export const note_olevel_maths_core_1_6_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/simple-interest.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate simple interest and the total amount after a period using SI = PRT/100.' }
    },
    {
      id: 'h-definition',
      type: 'heading',
      data: { text: 'What is Simple Interest?', level: 2 }
    },
    {
      id: 'p-definition',
      type: 'paragraph',
      data: { text: '<strong>Simple interest</strong> is calculated only on the <em>original principal</em> — the interest does not itself earn further interest. Each year (or period) the same fixed amount of interest is earned.' }
    },
    {
      id: 'h-formula',
      type: 'heading',
      data: { text: 'Formula', level: 2 }
    },
    {
      id: 'eq-si',
      type: 'equation',
      data: {
        html: 'SI = <span class="nb-frac"><span class="nb-num">P × R × T</span><span class="nb-den">100</span></span>',
        caption: 'P = principal; R = annual rate (%); T = time in years'
      }
    },
    {
      id: 'eq-total',
      type: 'equation',
      data: {
        html: 'Total amount = P + SI',
        caption: 'Principal plus interest earned'
      }
    },
    {
      id: 'callout-worked-basic',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Invest $500 at 4% per year for 3 years. Find the interest and total amount.<br><br>SI = (500 × 4 × 3) ÷ 100 = 6000 ÷ 100 = <strong>$60</strong><br><br>Total = 500 + 60 = <strong>$560</strong>'
      }
    },
    {
      id: 'callout-worked-months',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Time in Months',
        text: 'SI on $800 at 6% per year for 9 months.<br><br>Convert months to years: T = 9/12 = 0.75<br><br>SI = (800 × 6 × 0.75) ÷ 100 = 3600 ÷ 100 = <strong>$36</strong>'
      }
    },
    {
      id: 'h-rearrange',
      type: 'heading',
      data: { text: 'Rearranging the Formula', level: 2 }
    },
    {
      id: 'list-rearranged',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Find P: P = (SI × 100) ÷ (R × T)' },
          { text: 'Find R: R = (SI × 100) ÷ (P × T)' },
          { text: 'Find T: T = (SI × 100) ÷ (P × R)' }
        ]
      }
    },
    {
      id: 'callout-key-si',
      type: 'callout',
      data: { style: 'key', title: 'Key Formula', text: 'SI = PRT/100. Total Amount = P + SI. Simple interest stays the <em>same every period</em> — it does not grow.' }
    },
    {
      id: 'callout-tip-si',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Always express time in <strong>years</strong>. If given months, divide by 12. If given days, divide by 365 (or 360 in some contexts). Show your substitution clearly.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Simple interest: SI = PRT/100 where P = principal, R = rate (%), T = time (years). Interest is fixed each period (no compounding). Total amount = P + SI.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-si', prompt: 'Write the simple interest formula. What do P, R, and T stand for?' },
      { id: 'cue-2', blockId: 'callout-worked-basic', prompt: 'Calculate simple interest on $500 at 4% per year for 3 years.' },
      { id: 'cue-3', blockId: 'callout-worked-months', prompt: 'How do you convert months to years for the SI formula?' },
      { id: 'cue-4', blockId: 'h-rearrange', prompt: 'Rearrange the SI formula to find the principal P.' },
      { id: 'cue-5', blockId: 'h-definition', prompt: 'Explain why the interest stays the same each year in simple interest.' }
    ],
    summaryText: 'SI = PRT/100. Convert time to years. Total = P + SI. Each period earns the same interest (no compounding).',
    ready: true
  },
  evidence: []
};
