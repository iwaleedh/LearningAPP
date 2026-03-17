export const note_olevel_maths_extended_9_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/range-and-interquartile-range.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the range, quartiles, and interquartile range (IQR) and understand what they measure about the spread of data.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Range and Interquartile Range', level: 2 }
    },
    {
      id: 'p-range',
      type: 'paragraph',
      data: { text: 'The <strong>range</strong> measures the total spread of data: Range = highest value − lowest value. It is simple but affected by outliers.' }
    },
    {
      id: 'h-quartiles',
      type: 'heading',
      data: { text: 'Quartiles', level: 2 }
    },
    {
      id: 'p-quartiles',
      type: 'paragraph',
      data: { text: 'Quartiles divide ordered data into four equal parts:<br>• <strong>Q₁</strong> (lower quartile) — 25% of data below<br>• <strong>Q₂</strong> (median) — 50% of data below<br>• <strong>Q₃</strong> (upper quartile) — 75% of data below' }
    },
    {
      id: 'callout-key-iqr',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Interquartile Range (IQR)',
        text: 'IQR = Q₃ − Q₁<br><br>The IQR measures the spread of the <strong>middle 50%</strong> of data. It is <strong>not affected by outliers</strong>, making it more reliable than the range.'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Data (ordered): 2, 4, 5, 7, 8, 10, 11, 13, 15 (9 values)<br><br>Q₂ (median) = 5th value = 8<br>Q₁ = median of lower half (2, 4, 5, 7) = <span class="nb-frac"><span class="nb-num">4 + 5</span><span class="nb-den">2</span></span> = 4.5<br>Q₃ = median of upper half (10, 11, 13, 15) = <span class="nb-frac"><span class="nb-num">11 + 13</span><span class="nb-den">2</span></span> = 12<br><br>IQR = 12 − 4.5 = <strong>7.5</strong><br>Range = 15 − 2 = <strong>13</strong>'
      }
    },
    {
      id: 'callout-tip-compare',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Comparing Data Sets',
        text: 'When comparing two data sets, compare an <strong>average</strong> (mean or median) and a <strong>measure of spread</strong> (range or IQR). Use the context of the question in your comparison.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Range = max − min (affected by outliers). Quartiles split data into four parts. IQR = Q₃ − Q₁, measuring the middle 50% spread, unaffected by outliers.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Range = max − min. IQR = Q₃ − Q₁ measures the middle 50% spread.',
    cues: [
      { id: 'cue-1', blockId: 'p-range', prompt: 'How is the range calculated?', answer: 'Range = highest value − lowest value.' },
      { id: 'cue-2', blockId: 'callout-key-iqr', prompt: 'What is the IQR and how is it found?', answer: 'IQR = Q₃ − Q₁. It measures the spread of the middle 50% of data.' },
      { id: 'cue-3', blockId: 'callout-key-iqr', prompt: 'Why is IQR better than range for measuring spread?', answer: 'IQR is not affected by outliers.' },
      { id: 'cue-4', blockId: 'callout-tip-compare', prompt: 'What should you compare when comparing two data sets?', answer: 'An average (mean or median) and a measure of spread (range or IQR).' }
    ]
  },
  evidence: []
};
