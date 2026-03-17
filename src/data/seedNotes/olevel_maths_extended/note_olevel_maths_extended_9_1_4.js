export const note_olevel_maths_extended_9_1_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/averages-from-grouped-data.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Estimate the mean from grouped frequency tables using midpoints, identify the modal class, and find the class containing the median.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Averages from Grouped Data', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When data is grouped into <strong>class intervals</strong>, individual values are unknown. We can only <strong>estimate</strong> the mean and identify the <strong>modal class</strong> and the <strong>class containing the median</strong>.' }
    },
    {
      id: 'callout-key-mean',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Estimated Mean from Grouped Data',
        text: 'Estimated mean = <span class="nb-frac"><span class="nb-num">Σ(<em>f</em> × <em>midpoint</em>)</span><span class="nb-den">Σ<em>f</em></span></span><br><br>The <strong>midpoint</strong> of a class is <span class="nb-frac"><span class="nb-num">lower bound + upper bound</span><span class="nb-den">2</span></span>'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '| Height (cm) | 140–149 | 150–159 | 160–169 | 170–179 |<br>| Frequency | 4 | 12 | 18 | 6 |<br><br>Midpoints: 144.5, 154.5, 164.5, 174.5<br>Σ(f × midpoint) = 578 + 1854 + 2961 + 1047 = 6440<br>Σf = 40<br>Estimated mean = <span class="nb-frac"><span class="nb-num">6440</span><span class="nb-den">40</span></span> = <strong>161 cm</strong><br><br><strong>Modal class:</strong> 160–169 (highest frequency = 18)<br><strong>Median class:</strong> 20th/21st values &rarr; 160–169 (cumulative: 4, 16, 34...)'
      }
    },
    {
      id: 'callout-warning-exact',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Important',
        text: 'The mean from grouped data is an <strong>estimate</strong>. You cannot find the exact mean because the original data values are unknown. Always write "estimated mean" or "estimate of the mean".'
      }
    },
    {
      id: 'callout-tip-modal',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Modal Class vs Mode',
        text: 'For grouped data, give the <strong>modal class</strong> (the interval with the highest frequency), not a single mode value. Write the full interval, e.g. "160–169".'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'For grouped data: estimated mean = Σ(f × midpoint) ÷ Σf. The modal class has the highest frequency. The median class is found using cumulative frequency. These are estimates.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Use midpoints to estimate the mean from grouped data. Modal class = highest frequency interval.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-mean', prompt: 'How do you estimate the mean from grouped data?', answer: 'Estimated mean = Σ(f × midpoint) ÷ Σf.' },
      { id: 'cue-2', blockId: 'callout-key-mean', prompt: 'How do you find the midpoint of a class interval?', answer: 'Midpoint = (lower bound + upper bound) ÷ 2.' },
      { id: 'cue-3', blockId: 'callout-tip-modal', prompt: 'What is the modal class?', answer: 'The class interval with the highest frequency.' },
      { id: 'cue-4', blockId: 'callout-warning-exact', prompt: 'Why is the mean from grouped data an estimate?', answer: 'Because the original individual data values are unknown — we use midpoints as approximations.' }
    ]
  },
  evidence: []
};
