export const note_olevel_maths_extended_8_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Probability/relative-and-expected-frequency.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate relative frequency from experimental data, use it to estimate probabilities, and find expected frequencies.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Relative Frequency', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: '<strong>Relative frequency</strong> (also called <strong>experimental probability</strong>) is used when outcomes are not equally likely. It is calculated from the results of an experiment or survey.' }
    },
    {
      id: 'eq-rf',
      type: 'equation',
      data: {
        html: 'Relative frequency = <span class="nb-frac"><span class="nb-num">number of times event occurs</span><span class="nb-den">total number of trials</span></span>',
        caption: 'Relative frequency formula'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'A drawing pin is dropped 200 times. It lands "point up" 72 times. Estimate the probability of landing point up.<br><br><strong>Solution:</strong><br>Relative frequency = <span class="nb-frac"><span class="nb-num">72</span><span class="nb-den">200</span></span> = <strong>0.36</strong>'
      }
    },
    {
      id: 'p-improve',
      type: 'paragraph',
      data: { text: 'The more trials you carry out, the more reliable the estimate. As the number of trials increases, the relative frequency gets closer to the <strong>true (theoretical) probability</strong>.' }
    },
    {
      id: 'h-expected',
      type: 'heading',
      data: { text: 'Expected Frequency', level: 2 }
    },
    {
      id: 'p-expected',
      type: 'paragraph',
      data: { text: 'The <strong>expected frequency</strong> is the number of times we <em>expect</em> an event to occur. It is calculated by multiplying the probability by the number of trials.' }
    },
    {
      id: 'eq-ef',
      type: 'equation',
      data: {
        html: 'Expected frequency = P(event) × number of trials',
        caption: 'Expected frequency formula'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'A fair die is rolled 300 times. How many times would you expect to roll a 6?<br><br><strong>Solution:</strong><br>P(6) = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">6</span></span><br>Expected frequency = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">6</span></span> × 300 = <strong>50</strong>'
      }
    },
    {
      id: 'callout-tip-bias',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Testing for Bias',
        text: 'To test if a die or coin is biased, compare the experimental relative frequency with the theoretical probability. Large numbers of trials are needed to make conclusions reliable.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Relative frequency = frequency ÷ total trials. It estimates probability from experimental data. Expected frequency = probability × number of trials. More trials give better estimates.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Relative frequency estimates probability from experiments. Expected frequency = P(event) × trials.',
    cues: [
      { id: 'cue-1', blockId: 'eq-rf', prompt: 'What is the formula for relative frequency?', answer: 'Relative frequency = number of times event occurs ÷ total number of trials.' },
      { id: 'cue-2', blockId: 'eq-ef', prompt: 'How do you find the expected frequency?', answer: 'Expected frequency = P(event) × number of trials.' },
      { id: 'cue-3', blockId: 'p-improve', prompt: 'How can you improve a relative frequency estimate?', answer: 'Increase the number of trials — more trials give estimates closer to the true probability.' },
      { id: 'cue-4', blockId: 'callout-worked-2', prompt: 'A fair die is rolled 300 times. How many 6s are expected?', answer: '(1/6) × 300 = 50.' }
    ]
  },
  evidence: []
};
