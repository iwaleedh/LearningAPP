export const note_olevel_maths_extended_9_1_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/averages-from-tables.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the mean, median, and mode from frequency tables for discrete data.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Averages from Frequency Tables', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When data is presented in a <strong>frequency table</strong>, the frequency <em>f</em> tells you how many times each value <em>x</em> occurs. You need different methods to find averages.' }
    },
    {
      id: 'callout-key-mean',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Mean from a Frequency Table',
        text: 'Mean = <span class="nb-frac"><span class="nb-num">Σ(<em>f</em> × <em>x</em>)</span><span class="nb-den">Σ<em>f</em></span></span><br><br>Multiply each value by its frequency, add these products, then divide by the total frequency.'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '| Score (<em>x</em>) | 1 | 2 | 3 | 4 | 5 |<br>| Frequency (<em>f</em>) | 3 | 5 | 8 | 6 | 3 |<br><br>Σ(<em>f</em> × <em>x</em>) = 3 + 10 + 24 + 24 + 15 = 76<br>Σ<em>f</em> = 25<br>Mean = <span class="nb-frac"><span class="nb-num">76</span><span class="nb-den">25</span></span> = <strong>3.04</strong><br><br><strong>Median:</strong> 25 values &rarr; median is 13th value. Count cumulative: 3, 8, 16... 13th value is in score 3 &rarr; <strong>median = 3</strong><br><strong>Mode:</strong> Highest frequency is 8 (score 3) &rarr; <strong>mode = 3</strong>'
      }
    },
    {
      id: 'callout-key-median',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Median from a Frequency Table',
        text: 'Find the position using <span class="nb-frac"><span class="nb-num">Σ<em>f</em> + 1</span><span class="nb-den">2</span></span>. Then use <strong>cumulative frequency</strong> to identify which value the median falls in.'
      }
    },
    {
      id: 'callout-tip-fx',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Add a <em>f</em> × <em>x</em> column to your table. It keeps calculations tidy and makes it easy to check. Show the totals row.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'From a frequency table: mean = Σ(fx) ÷ Σf; median = use cumulative frequency to find the middle position; mode = value with the highest frequency.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Mean = Σ(fx)/Σf from frequency tables. Median uses cumulative frequency. Mode has the highest f.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-mean', prompt: 'How do you find the mean from a frequency table?', answer: 'Mean = Σ(f × x) ÷ Σf.' },
      { id: 'cue-2', blockId: 'callout-key-median', prompt: 'How do you find the median position from a frequency table?', answer: 'Position = (Σf + 1)/2, then use cumulative frequency to locate it.' },
      { id: 'cue-3', blockId: 'callout-worked-1', prompt: 'What is the mode from a frequency table?', answer: 'The value with the highest frequency.' },
      { id: 'cue-4', blockId: 'callout-tip-fx', prompt: 'What extra column should you add to a frequency table?', answer: 'An f × x column to help calculate the mean.' }
    ]
  },
  evidence: []
};
