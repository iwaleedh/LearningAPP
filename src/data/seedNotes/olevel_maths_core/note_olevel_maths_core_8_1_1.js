export const note_olevel_maths_core_8_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Probability/relative-and-expected-frequency.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Calculate relative frequency from experimental data and use it as an estimate of probability. Calculate expected frequency. Understand the relationship between experimental and theoretical probability.',
      },
    },
    {
      id: 'h-relfreq',
      type: 'heading',
      data: { text: 'Relative Frequency (Experimental Probability)', level: 2 },
    },
    {
      id: 'p-relfreq',
      type: 'paragraph',
      data: {
        text: 'When we perform an experiment or survey, we can estimate probability using the results. The <b>relative frequency</b> of an outcome is the proportion of times that outcome occurred in the experiment. It is also called <b>experimental probability</b>.',
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Relative Frequency Formula',
        text: 'Relative frequency = frequency of outcome ÷ total number of trials',
      },
    },
    {
      id: 'eq-relfreq',
      type: 'equation',
      data: {
        html: 'Relative frequency = <span class="nb-frac"><span class="nb-num">frequency of outcome</span><span class="nb-den">total number of trials</span></span>',
        caption: 'Relative frequency (experimental probability)',
      },
    },
    {
      id: 'h-table',
      type: 'heading',
      data: { text: 'Reading Frequency Tables', level: 2 },
    },
    {
      id: 'p-table',
      type: 'paragraph',
      data: {
        text: 'Experimental data is often presented in a <b>frequency table</b>. To find relative frequency, divide each frequency by the total number of trials. The relative frequencies of all outcomes must add up to 1.',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Biased Coin',
        text: 'A coin is tossed 200 times. It lands heads 130 times and tails 70 times.<br><br>Relative frequency of heads = 130/200 = <b>0.65</b><br>Relative frequency of tails = 70/200 = <b>0.35</b><br><br>Sum check: 0.65 + 0.35 = 1 ✓<br><br>Is the coin fair? A fair coin gives P(heads) = 0.5. Since 0.65 ≠ 0.5, the coin appears to be <b>biased towards heads</b>.',
      },
    },
    {
      id: 'tbl-spinner',
      type: 'comparisonTable',
      data: {
        caption: 'A spinner with 5 sections is spun 100 times',
        headers: ['Outcome', 'Frequency', 'Relative Frequency'],
        rows: [
          ['1', '18', '18/100 = 0.18'],
          ['2', '22', '22/100 = 0.22'],
          ['3', '35', '35/100 = 0.35'],
          ['4', '15', '15/100 = 0.15'],
          ['5', '10', '10/100 = 0.10'],
          ['Total', '100', '1.00'],
        ],
      },
    },
    {
      id: 'h-convergence',
      type: 'heading',
      data: { text: 'More Trials → Better Estimate', level: 2 },
    },
    {
      id: 'p-convergence',
      type: 'paragraph',
      data: {
        text: 'The more trials you carry out, the <b>closer the relative frequency gets to the theoretical probability</b>. With very few trials the relative frequency can vary widely; with thousands of trials it stabilises. This is an important principle in probability.',
      },
    },
    {
      id: 'callout-key2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Principle',
        text: 'As the number of trials increases, relative frequency → theoretical probability.<br>A small number of trials can give misleading results.',
      },
    },
    {
      id: 'h-expected',
      type: 'heading',
      data: { text: 'Expected Frequency', level: 2 },
    },
    {
      id: 'p-expected',
      type: 'paragraph',
      data: {
        text: '<b>Expected frequency</b> is the number of times you would <i>expect</i> an outcome to occur in a given number of trials, based on its probability. It is not guaranteed — it is a prediction.',
      },
    },
    {
      id: 'eq-expected',
      type: 'equation',
      data: {
        html: 'Expected frequency = probability × number of trials',
        caption: 'Expected frequency formula',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Expected Frequency',
        text: 'A fair six-sided die is rolled 300 times. How many times would you expect to roll a 6?<br><br>P(6) = 1/6<br><b>Expected frequency = 1/6 × 300 = 50</b><br><br>You would expect to roll a 6 about <b>50 times</b>.',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Using Relative Frequency',
        text: 'A drawing pin is dropped 80 times. It lands point-up 56 times.<br><br>(a) Find the relative frequency of landing point-up.<br><b>56/80 = 0.7</b><br><br>(b) If the pin is dropped 200 times, how many times would you expect it to land point-up?<br><b>0.7 × 200 = 140 times</b>',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Expected frequency is <b>not</b> a probability — it is a count. It can be greater than 1. If a question asks "how many times would you expect…", multiply probability by the number of trials.',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Biased vs Fair',
        text: 'If the relative frequency of an outcome is <b>not equal</b> to the theoretical probability for a fair item (e.g. 1/6 for a die), the item may be biased. You can only say a result suggests bias — you cannot be certain from a finite experiment.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: '<b>Relative frequency = frequency ÷ total trials.</b> More trials give a better estimate of theoretical probability. <b>Expected frequency = probability × trials.</b> Biased events have relative frequencies that differ from theoretical probability.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Relative frequency = frequency ÷ trials; more trials → closer to theoretical probability; expected frequency = probability × trials.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-relfreq',
        prompt: 'What is the formula for relative frequency?',
        answer: 'Relative frequency = frequency of outcome ÷ total number of trials.',
      },
      {
        id: 'cue-2',
        blockId: 'h-convergence',
        prompt: 'What happens to relative frequency as the number of trials increases?',
        answer: 'It gets closer to the theoretical probability.',
      },
      {
        id: 'cue-3',
        blockId: 'eq-expected',
        prompt: 'A fair coin is tossed 500 times. What is the expected frequency of heads?',
        answer: 'Expected frequency = 0.5 × 500 = 250 times.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-we1',
        prompt: 'A coin lands heads 65 times in 100 tosses. What does this suggest about the coin?',
        answer: 'The relative frequency (0.65) ≠ theoretical P(heads) = 0.5, so the coin appears biased towards heads.',
      },
      {
        id: 'cue-5',
        blockId: 'callout-warning',
        prompt: 'Can you be certain that a coin is biased based on experimental results alone?',
        answer: 'No — experimental results only suggest bias; a finite experiment cannot prove a coin is biased with certainty.',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
