export const note_mathematics_6_1_4 = {
  pdfPath: '/notes/mathematics/data-presentation-and-interpretation/standard-deviation-and-variance.pdf',
  blocks: [
    {
      id: 'o-1',
      type: 'objective',
      data: {
        text: 'Calculate and understand variance and standard deviation for datasets.'
      }
    },
    {
      id: 'h-var',
      type: 'heading',
      data: { text: 'Variance and Standard Deviation', level: 2 }
    },
    {
      id: 'p-var',
      type: 'paragraph',
      data: { text: 'Variance and standard deviation measure how spread out the data is around the mean.<br/>Variance (σ²) is the average of squared differences from the mean.<br/>Standard deviation (σ) is the square root of the variance.' }
    },
    {
      id: 'h-formula',
      type: 'heading',
      data: { text: 'Formulae', level: 2 }
    },
    {
      id: 'p-formula-var',
      type: 'paragraph',
      data: { text: 'Sum of squares, <em>S<sub>xx</sub> = ∑x² − <span class="nb-frac"><span class="nb-num">(∑x)²</span><span class="nb-den">n</span></span></em>.' }
    },
    {
      id: 'p-sd',
      type: 'paragraph',
      data: { text: 'Variance = <span class="nb-frac"><span class="nb-num">S<sub>xx</sub></span><span class="nb-den">n</span></span> = <span class="nb-frac"><span class="nb-num">∑x²</span><span class="nb-den">n</span></span> − (x̄)².' }
    },
    {
      id: 'p-freq',
      type: 'paragraph',
      data: { text: 'For frequency tables: Standard deviation σ = <span style="white-space: nowrap; font-size: larger">√</span><span style="text-decoration:overline;">&nbsp;<span class="nb-frac"><span class="nb-num">∑fx²</span><span class="nb-den">∑f</span></span> − (x̄)²&nbsp;</span>' }
    },
    {
      id: 'call-calc',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Summary Stats Interpretation',
        text: 'You may be given summary statistics like ∑x and ∑x². Plugging them straight into the variance formula is faster than calculating every single difference.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Standard deviation is the square root of variance. It measures the average spread of values from the mean. Formula to remember: Variance = (Mean of squares) − (Square of mean).' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When calculating variance, examiners frequently see students forgetting to divide the sum of x-squared by 'n' before subtracting the square of the mean. Write the formula out first to avoid this."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Summary of variance and standard deviation.',
    cues: [
      { id: 'cue-1', blockId: 'p-var', prompt: 'What is the relationship between variance and standard deviation?' },
      { id: 'cue-2', blockId: 'p-formula-var', prompt: 'State the formula for Sxx.' },
      { id: 'cue-3', blockId: 'p-sd', prompt: 'Express variance in terms of ∑x² and the mean.' },
      { id: 'cue-4', blockId: 'p-freq', prompt: 'What is the standard deviation formula for a frequency table?' }
    ]
  },
  evidence: [],
  mentions: []
};
