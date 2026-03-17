export const note_olevel_maths_extended_9_4_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/interpreting-cumulative-frequency-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use cumulative frequency diagrams to estimate the median, quartiles, interquartile range, and percentiles, and to draw box-and-whisker plots.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Interpreting Cumulative Frequency Diagrams', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Once a cumulative frequency curve is drawn, you can read off estimates for the <strong>median</strong>, <strong>quartiles</strong>, <strong>percentiles</strong>, and answer questions like "how many values are above/below a given threshold?"' }
    },
    {
      id: 'callout-key-read',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reading Median and Quartiles',
        text: 'For <em>n</em> data values, read across from the y-axis:<br>• <strong>Median</strong> at <span class="nb-frac"><span class="nb-num"><em>n</em></span><span class="nb-den">2</span></span><br>• <strong>Q₁</strong> at <span class="nb-frac"><span class="nb-num"><em>n</em></span><span class="nb-den">4</span></span><br>• <strong>Q₃</strong> at <span class="nb-frac"><span class="nb-num">3<em>n</em></span><span class="nb-den">4</span></span><br><br>Read horizontally to the curve, then down to the x-axis.'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '50 values plotted on a cumulative frequency curve.<br><br>Median = read at CF = 25 &rarr; go across to curve &rarr; read down = <strong>64 kg</strong><br>Q₁ = CF = 12.5 &rarr; <strong>56 kg</strong><br>Q₃ = CF = 37.5 &rarr; <strong>72 kg</strong><br>IQR = 72 − 56 = <strong>16 kg</strong>'
      }
    },
    {
      id: 'h-box',
      type: 'heading',
      data: { text: 'Box-and-Whisker Plots', level: 2 }
    },
    {
      id: 'p-box',
      type: 'paragraph',
      data: { text: 'A <strong>box-and-whisker plot</strong> (box plot) displays the five-figure summary on a number line: minimum, Q₁, median, Q₃, maximum. The box shows the IQR, the line inside marks the median, and whiskers extend to the min and max.' }
    },
    {
      id: 'callout-tip-threshold',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Finding Values Above a Threshold',
        text: 'To find how many values are above 70: read up from 70 on x-axis to the curve, across to y-axis (e.g. CF = 40). Then: number above 70 = total − 40.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'From a cumulative frequency curve: median at n/2, Q₁ at n/4, Q₃ at 3n/4. IQR = Q₃ − Q₁. Box plots show min, Q₁, median, Q₃, max. Use the curve to find how many values are above/below thresholds.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Median at n/2, Q₁ at n/4, Q₃ at 3n/4 on the cumulative frequency axis. IQR = Q₃ − Q₁.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-read', prompt: 'Where do you read the median on a cumulative frequency curve?', answer: 'At CF = n/2 — go across to the curve, then down to the x-axis.' },
      { id: 'cue-2', blockId: 'callout-key-read', prompt: 'Where do you read Q₁ and Q₃?', answer: 'Q₁ at CF = n/4; Q₃ at CF = 3n/4.' },
      { id: 'cue-3', blockId: 'p-box', prompt: 'What five values make up a box-and-whisker plot?', answer: 'Minimum, Q₁, median, Q₃, maximum.' },
      { id: 'cue-4', blockId: 'callout-tip-threshold', prompt: 'How do you find how many values exceed a threshold from the curve?', answer: 'Read up from the threshold to the curve, across to the CF axis — subtract from total.' }
    ]
  },
  evidence: []
};
