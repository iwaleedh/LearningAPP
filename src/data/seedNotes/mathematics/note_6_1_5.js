export const note_mathematics_6_1_5 = {
  pdfPath: '/notes/mathematics/data-presentation-and-interpretation/data-coding.pdf',
  blocks: [
    {
      id: 'o-1',
      type: 'objective',
      data: {
        text: 'Understand the effect of coding on the mean and standard deviation.'
      }
    },
    {
      id: 'h-coding',
      type: 'heading',
      data: { text: 'Data Coding', level: 2 }
    },
    {
      id: 'p-coding',
      type: 'paragraph',
      data: { text: 'Data coding involves manipulating a dataset by adding, subtracting, multiplying, or dividing by constants to make the numbers easier to work with. For instance, code <em>y = <span class="nb-frac"><span class="nb-num">x − a</span><span class="nb-den">b</span></span></em>.' }
    },
    {
      id: 'h-effects',
      type: 'heading',
      data: { text: 'Effect on Mean and Standard Deviation', level: 2 }
    },
    {
      id: 'list-effects',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Measures of Location (Mean, Median, Mode):</strong> Are affected by both addition/subtraction and multiplication/division.' },
          { text: '<strong>Measures of Spread (Standard Deviation, Variance, Range, IQR):</strong> Are ONLY affected by multiplication/division. Adding or subtracting a constant shifts the whole data block, but does not change how spread out it is.' }
        ]
      }
    },
    {
      id: 'call-mean-sd',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Formula for Coded Data',
        text: 'If <em>y = <span class="nb-frac"><span class="nb-num">x − a</span><span class="nb-den">b</span></span></em>, then: <br/> ȳ = <span class="nb-frac"><span class="nb-num">x̄ − a</span><span class="nb-den">b</span></span> <br/> σ<sub>y</sub> = <span class="nb-frac"><span class="nb-num">σ<sub>x</sub></span><span class="nb-den">b</span></span>.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Coding simplifies large numbers. Means are affected by all operations: ȳ = (x̄ − a)/b. Spread measures like standard deviation are only affected by multiplication/division: σ_y = σ_x / b.' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Remember a golden rule for coding: multiplying or dividing the data changes both the mean and standard deviation, but adding or subtracting a constant ONLY changes the mean. The spread of the data is unaffected by translation."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Summary for data coding impacts.',
    cues: [
      { id: 'cue-1', blockId: 'p-coding', prompt: 'What is the purpose of coding data?' },
      { id: 'cue-2', blockId: 'list-effects', prompt: 'How does adding a constant affect the standard deviation?' },
      { id: 'cue-3', blockId: 'list-effects', prompt: 'Which statistical measures are affected by both addition and multiplication?' },
      { id: 'cue-4', blockId: 'call-mean-sd', prompt: 'If data x is coded using y = (x - a)/b, what is the new mean ȳ in terms of x̄?' }
    ]
  },
  evidence: [],
  mentions: []
};
