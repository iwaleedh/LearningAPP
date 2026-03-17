export const note_olevel_maths_extended_9_1_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/using-calculators-to-find-averages.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use a scientific calculator\'s statistics mode to efficiently find the mean, standard deviation, and other statistical measures from raw and grouped data.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Using Calculators for Averages', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Scientific calculators have a <strong>statistics mode</strong> (often accessed via MODE &rarr; STAT or similar) that can calculate measures automatically when you input data and frequencies.' }
    },
    {
      id: 'callout-key-steps',
      type: 'callout',
      data: {
        style: 'key',
        title: 'General Steps',
        text: '1. Enter statistics mode (MODE &rarr; STAT &rarr; 1-VAR)<br>2. Enter each data value (or midpoint for grouped data)<br>3. Enter the corresponding frequency (if using a frequency column)<br>4. Access results: typically x̄ for mean, σ for standard deviation, n for count<br>5. Clear data when finished'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Frequency Data',
        text: 'Scores: 1, 2, 3, 4, 5 with frequencies 3, 5, 8, 6, 3.<br><br>Enter into calculator:<br>x₁ = 1, f₁ = 3<br>x₂ = 2, f₂ = 5<br>x₃ = 3, f₃ = 8<br>x₄ = 4, f₄ = 6<br>x₅ = 5, f₅ = 3<br><br>Calculator gives: x̄ = <strong>3.04</strong>, n = 25'
      }
    },
    {
      id: 'callout-tip-grouped',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'For Grouped Data',
        text: 'Enter the <strong>midpoints</strong> of each class interval as the data values and the frequencies as before. The calculator gives the <strong>estimated</strong> mean — the same as Σ(f × midpoint) ÷ Σf.'
      }
    },
    {
      id: 'callout-warning-clear',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Important',
        text: 'Always clear old data before entering new data. Left-over data will give wrong results. On Casio: SHIFT &rarr; CLR &rarr; STAT &rarr; EXE.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Use your calculator\'s statistics mode for quick mean calculations. Enter midpoints for grouped data. Always clear previous data before starting a new calculation.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Use statistics mode to enter data + frequencies and read off the mean and standard deviation.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-steps', prompt: 'What mode do you use on a calculator for statistics?', answer: 'Statistics mode (MODE &rarr; STAT &rarr; 1-VAR).' },
      { id: 'cue-2', blockId: 'callout-tip-grouped', prompt: 'What do you enter for grouped data?', answer: 'Midpoints of each class interval as the data values.' },
      { id: 'cue-3', blockId: 'callout-warning-clear', prompt: 'What must you do before entering new statistical data?', answer: 'Clear any old data from the calculator.' },
      { id: 'cue-4', blockId: 'callout-key-steps', prompt: 'What symbol represents the mean on a calculator display?', answer: 'x̄ (x-bar).' }
    ]
  },
  evidence: []
};
