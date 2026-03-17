export const note_olevel_maths_core_1_11_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/speed.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate speed, distance, and time using the speed formula; convert between km/h and m/s; and interpret distance–time graphs.' }
    },
    {
      id: 'h-formula',
      type: 'heading',
      data: { text: 'The Speed Formula', level: 2 }
    },
    {
      id: 'eq-speed',
      type: 'equation',
      data: {
        html: 'Speed = <span class="nb-frac"><span class="nb-num">Distance</span><span class="nb-den">Time</span></span>&nbsp;&nbsp;&nbsp; Distance = Speed × Time&nbsp;&nbsp;&nbsp; Time = <span class="nb-frac"><span class="nb-num">Distance</span><span class="nb-den">Speed</span></span>',
        caption: 'Rearranging the speed formula (units must be consistent)'
      }
    },
    {
      id: 'callout-key-formula',
      type: 'callout',
      data: { style: 'key', title: 'Formula Triangle', text: 'Write D on top, S × T on the bottom. Cover the letter you want to find:<br>• Cover D → D = S × T<br>• Cover S → S = D ÷ T<br>• Cover T → T = D ÷ S' }
    },
    {
      id: 'h-conversion',
      type: 'heading',
      data: { text: 'Converting Between km/h and m/s', level: 2 }
    },
    {
      id: 'p-conversion',
      type: 'paragraph',
      data: { text: '1 km = 1000 m and 1 hour = 3600 s, so 1 km/h = 1000 ÷ 3600 m/s = 1 ÷ 3.6 m/s.' }
    },
    {
      id: 'callout-key-conv',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Conversion Rule',
        text: 'km/h → m/s: <strong>divide by 3.6</strong><br>m/s → km/h: <strong>multiply by 3.6</strong><br><br>Example: 90 km/h = 90 ÷ 3.6 = 25 m/s'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: Find Distance',
        text: 'A train travels at 120 km/h for 45 minutes. How far does it travel?<br><br>Convert time: 45 min = 0.75 hours<br>Distance = Speed × Time = 120 × 0.75 = <strong>90 km</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: Find Time',
        text: 'How long does it take to travel 270 km at 90 km/h?<br><br>Time = Distance ÷ Speed = 270 ÷ 90 = <strong>3 hours</strong>'
      }
    },
    {
      id: 'h-dtgraph',
      type: 'heading',
      data: { text: 'Distance–Time Graphs', level: 2 }
    },
    {
      id: 'list-dtgraph',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Gradient</strong> = speed (rise ÷ run = distance ÷ time)' },
          { text: '<strong>Horizontal line</strong> = stationary (speed = 0)' },
          { text: '<strong>Steeper gradient</strong> = faster speed' },
          { text: '<strong>Line going down</strong> = moving back towards start' }
        ]
      }
    },
    {
      id: 'callout-tip-time',
      type: 'callout',
      data: { style: 'tip', title: 'Time Unit Warning', text: 'Never mix hours and minutes in the same calculation. Convert all time to the same unit before using the formula. Express answers in hours if the speed is in km/h.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Speed = D/T (rearranges to D = S×T and T = D/S). Convert km/h to m/s by ÷3.6. On a distance–time graph, gradient = speed; horizontal = stationary.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-speed', prompt: 'State the three versions of the speed formula.' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'A train travels at 120 km/h for 45 minutes. How far does it travel?' },
      { id: 'cue-3', blockId: 'callout-key-conv', prompt: 'How do you convert 72 km/h to m/s? Show working.' },
      { id: 'cue-4', blockId: 'h-dtgraph', prompt: 'On a distance–time graph, what does the gradient represent? What does a horizontal section mean?' },
      { id: 'cue-5', blockId: 'callout-tip-time', prompt: 'Why must you be careful about units of time in speed calculations?' }
    ],
    summaryText: 'Speed = D/T. km/h ÷ 3.6 = m/s. On distance–time graphs, gradient = speed, horizontal line = stationary.',
    ready: true
  },
  evidence: []
};
