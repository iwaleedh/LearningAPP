export const note_olevel_maths_extended_9_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/pie-charts.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Draw and interpret pie charts, calculate sector angles, and find frequencies from given angles.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Pie Charts', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A <strong>pie chart</strong> is a circle divided into sectors. Each sector represents a category, and the <strong>angle</strong> of the sector is proportional to the frequency for that category. The total angle is 360°.' }
    },
    {
      id: 'callout-key-angle',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Calculating Sector Angles',
        text: 'Angle = <span class="nb-frac"><span class="nb-num">frequency</span><span class="nb-den">total frequency</span></span> × 360°<br><br>To find frequency from an angle:<br>Frequency = <span class="nb-frac"><span class="nb-num">angle</span><span class="nb-den">360°</span></span> × total'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Drawing',
        text: '40 students choose a sport: Football 15, Tennis 10, Swimming 8, Other 7.<br><br>Football: <span class="nb-frac"><span class="nb-num">15</span><span class="nb-den">40</span></span> × 360 = 135°<br>Tennis: <span class="nb-frac"><span class="nb-num">10</span><span class="nb-den">40</span></span> × 360 = 90°<br>Swimming: <span class="nb-frac"><span class="nb-num">8</span><span class="nb-den">40</span></span> × 360 = 72°<br>Other: <span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">40</span></span> × 360 = 63°<br><br>Check: 135 + 90 + 72 + 63 = 360° ✓'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Interpreting',
        text: 'A pie chart has a sector of 120° for "Walk". Total surveyed = 90 people.<br>Frequency = <span class="nb-frac"><span class="nb-num">120</span><span class="nb-den">360</span></span> × 90 = <strong>30 people</strong>'
      }
    },
    {
      id: 'callout-tip-check',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always check your angles add to 360°. Use a protractor carefully when drawing. Label each sector or include a legend.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Pie charts show proportions as sectors of a circle (total 360°). Angle = (frequency/total) × 360°. Frequency = (angle/360) × total. Always check angles sum to 360°.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Pie chart angles: (frequency ÷ total) × 360°. Angles must sum to 360°.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-angle', prompt: 'How do you calculate a sector angle?', answer: 'Angle = (frequency ÷ total frequency) × 360°.' },
      { id: 'cue-2', blockId: 'callout-key-angle', prompt: 'How do you find the frequency from a sector angle?', answer: 'Frequency = (angle ÷ 360) × total.' },
      { id: 'cue-3', blockId: 'callout-tip-check', prompt: 'What should pie chart angles sum to?', answer: '360°.' },
      { id: 'cue-4', blockId: 'callout-worked-1', prompt: '15 out of 40 students: what angle on the pie chart?', answer: '(15/40) × 360 = 135°.' }
    ]
  },
  evidence: []
};
