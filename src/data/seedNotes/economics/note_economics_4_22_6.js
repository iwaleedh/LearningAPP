export const note_economics_4_22_6 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Construct and interpret the Laffer curve, evaluate its policy implications, and assess the empirical evidence for its use to justify tax cuts.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Laffer Curve', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The <strong>Laffer Curve</strong> illustrates the relationship between income tax rates and total government tax revenue. The key insight is that the relationship is non-linear: at both extreme tax rates (0% and 100%), tax revenue equals zero. Therefore, there must exist a revenue-maximising tax rate somewhere in between, and beyond this rate, raising taxes further reduces total revenue.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="480" height="320" fill="#0f172a" rx="8"/><text x="240" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">The Laffer Curve</text><line x1="60" y1="270" x2="420" y2="270" stroke="#6b7280" stroke-width="2"/><line x1="60" y1="40" x2="60" y2="270" stroke="#6b7280" stroke-width="2"/><text x="240" y="298" text-anchor="middle" font-size="12" fill="#374151">Tax Rate (%)</text><text x="18" y="155" text-anchor="middle" font-size="12" fill="#374151" transform="rotate(-90,18,155)">Tax Revenue</text><path d="M60,270 Q130,60 240,60 Q350,60 420,270" stroke="#6366f1" stroke-width="2.5" fill="none"/><line x1="240" y1="60" x2="240" y2="270" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="5,4"/><text x="240" y="285" text-anchor="middle" font-size="11" fill="#ef4444">t*</text><text x="50" y="285" text-anchor="end" font-size="11" fill="#6b7280">0%</text><text x="420" y="285" text-anchor="middle" font-size="11" fill="#6b7280">100%</text><text x="240" y="52" text-anchor="middle" font-size="11" fill="#10b981">Revenue max</text><text x="90" y="170" font-size="11" fill="#374151">Raising rate</text><text x="90" y="183" font-size="11" fill="#374151">increases revenue</text><text x="310" y="170" font-size="11" fill="#374151">Raising rate</text><text x="310" y="183" font-size="11" fill="#374151">reduces revenue</text></svg>',
        caption: 'Laffer Curve: tax revenue is zero at 0% and 100% rates; maximum revenue at t*; beyond t*, higher rates reduce total revenue'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Logic of the Laffer Curve', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'At <strong>0% tax rate</strong>: government collects no revenue. At <strong>100% tax rate</strong>: no one would work (all earnings confiscated), so there is no taxable income and revenue = 0. Between these extremes, there is a revenue-maximising rate (t*). Beyond t*, the disincentive effects dominate: workers reduce hours, businesses reduce investment, activities shift to the informal economy, and high earners emigrate. The theory predicts that if a country\'s current tax rate is above t*, cutting the rate would actually increase total tax revenue.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Policy Implications and Empirical Evidence', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'The Laffer curve was famously popularised by supply-side economists advising Ronald Reagan (1981) and was used to justify large income tax cuts. The argument: US top marginal rates at 70% were above t*, so cutting them to 28% would increase revenue. In practice, the Reagan tax cuts significantly reduced revenue and tripled the national debt. UK: when the 50p additional rate was cut to 45p in 2013, Chancellor Osborne claimed it was on the "wrong side" of the Laffer curve — HMRC analysis found modest revenue loss but the evidence was disputed.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Political Abuse of the Laffer Curve',
        text: 'The Laffer curve is theoretically uncontroversial — it is mathematically true. The controversy is where t* lies. Most economists estimate the revenue-maximising top marginal rate for developed economies is well above current rates (often cited as 60-70%+). Tax cuts from current UK/US rates of 40-45% are unlikely to be self-financing. The Laffer curve has frequently been used to provide intellectual cover for tax cuts that primarily benefit the wealthy without economic justification.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'The Laffer curve shows tax revenue is zero at 0% and 100% rates and maximised at an intermediate rate t*; beyond t* higher rates reduce revenue through disincentive effects; the curve is theoretically valid but the location of t* is disputed — most economists place it well above current tax rates.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'Explain why tax revenue equals zero at both a 0% and a 100% tax rate.',
        answer: 'At 0%: the government levies no tax, so revenue = 0 regardless of how much economic activity occurs. At 100%: all earnings are confiscated, so there is no financial incentive to work or invest; economic activity collapses to zero, meaning there is no taxable income and revenue = 0.'
      },
      {
        id: 'cue-2',
        blockId: 'para-3',
        prompt: 'What was the empirical outcome of Reagan\'s tax cuts based on Laffer curve logic?',
        answer: 'Reagan cut top marginal income tax rates from 70% to 28%, arguing the US was on the "wrong side" of the Laffer curve. In practice, tax revenues fell significantly and the national debt tripled. The tax cuts did not prove self-financing, suggesting the US was NOT above the revenue-maximising rate t*.'
      },
      {
        id: 'cue-3',
        blockId: 'call-1',
        prompt: 'Why is the Laffer curve "theoretically valid but practically contested"?',
        answer: 'The curve is mathematically true — revenue must be zero at 0% and 100% rates. The controversy is where the revenue-maximising rate (t*) lies. Most economists estimate t* for top earners is at 60-70%+, well above current UK (45%) or US (37%) top rates. This means cuts from current levels are unlikely to be self-financing — the Laffer curve does not support most tax cut proposals.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_22_6;
