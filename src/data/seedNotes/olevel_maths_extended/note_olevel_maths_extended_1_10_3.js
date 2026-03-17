export const note_olevel_maths_extended_1_10_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/speed.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Calculate speed, distance, and time using the formula triangle, and solve problems involving average speed and unit conversions.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Speed', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'Speed measures how fast something is moving. It is the rate of change of distance with respect to time.' } },

    { id: 'h-formula', type: 'heading', data: { text: 'The Speed Formula', level: 2 } },
    { id: 'callout-key-1', type: 'callout', data: { style: 'key', title: 'Speed–Distance–Time Triangle', text: 'Speed = <span class="nb-frac"><span class="nb-num">Distance</span><span class="nb-den">Time</span></span>\n\nDistance = Speed × Time\n\nTime = <span class="nb-frac"><span class="nb-num">Distance</span><span class="nb-den">Speed</span></span>\n\nRemember: <b>S = D ÷ T</b>. Cover the quantity you want to find.' } },

    { id: 'p-units', type: 'paragraph', data: { text: 'Common speed units: km/h (kilometres per hour), m/s (metres per second), mph (miles per hour). Make sure distance and time units are consistent with the speed unit.' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'A car travels 240 km in 3 hours. Find its average speed.\n\nSpeed = <span class="nb-frac"><span class="nb-num">Distance</span><span class="nb-den">Time</span></span> = <span class="nb-frac"><span class="nb-num">240</span><span class="nb-den">3</span></span> = 80 km/h\n\n<b>Answer:</b> 80 km/h' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'A cyclist rides at 15 km/h for 2 hours 20 minutes. How far does she travel?\n\nFirst convert time: 2 hours 20 min = 2 + <span class="nb-frac"><span class="nb-num">20</span><span class="nb-den">60</span></span> = 2<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span> hours = <span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">3</span></span> hours\n\nDistance = Speed × Time = 15 × <span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">3</span></span> = 35 km\n\n<b>Answer:</b> 35 km' } },

    { id: 'h-average', type: 'heading', data: { text: 'Average Speed', level: 2 } },
    { id: 'p-average', type: 'paragraph', data: { text: 'Average speed = <span class="nb-frac"><span class="nb-num">Total distance</span><span class="nb-den">Total time</span></span>. It is NOT the average of two speeds.' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: 'A runner runs 5 km at 10 km/h, then walks 3 km at 6 km/h. Find the average speed.\n\nTime for running = <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">10</span></span> = 0.5 hours\nTime for walking = <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">6</span></span> = 0.5 hours\n\nTotal distance = 5 + 3 = 8 km\nTotal time = 0.5 + 0.5 = 1 hour\n\nAverage speed = <span class="nb-frac"><span class="nb-num">8</span><span class="nb-den">1</span></span> = 8 km/h\n\n<b>Answer:</b> 8 km/h' } },

    { id: 'h-convert', type: 'heading', data: { text: 'Converting Speed Units', level: 2 } },
    { id: 'callout-key-2', type: 'callout', data: { style: 'key', title: 'km/h ↔ m/s Conversion', text: 'km/h &rarr; m/s: <b>divide by 3.6</b> (or multiply by <span class="nb-frac"><span class="nb-num">1000</span><span class="nb-den">3600</span></span>)\nm/s &rarr; km/h: <b>multiply by 3.6</b>\n\nBecause 1 km = 1000 m and 1 hour = 3600 seconds.' } },

    { id: 'callout-worked-4', type: 'callout', data: { style: 'worked', title: 'Worked Example 4', text: 'Convert 72 km/h to m/s.\n\n72 ÷ 3.6 = 20 m/s\n\n<b>Answer:</b> 20 m/s' } },

    { id: 'callout-warning-1', type: 'callout', data: { style: 'warning', title: 'Common Mistake', text: 'Average speed ≠ (speed₁ + speed₂) ÷ 2. You must calculate total distance ÷ total time. This is a very common exam error.' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Always convert time to hours (as a decimal or fraction) before using the speed formula if speed is in km/h. Don\'t use hours and minutes directly.' } },

    { id: 'sum-1', type: 'summary', data: { text: 'Speed = Distance ÷ Time. Average speed = Total distance ÷ Total time (not the average of speeds). Convert km/h to m/s by dividing by 3.6. Always ensure units are consistent.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-1', prompt: 'Write the three rearrangements of the speed formula.' },
      { id: 'cue-2', blockId: 'p-average', prompt: 'How is average speed different from the mean of two speeds?' },
      { id: 'cue-3', blockId: 'callout-key-2', prompt: 'How do you convert km/h to m/s?' },
      { id: 'cue-4', blockId: 'callout-worked-2', prompt: 'A cyclist rides at 15 km/h for 2 h 20 min. How far?' }
    ],
    summaryText: 'S = D/T. Average speed = total distance / total time. km/h to m/s: ÷ 3.6.',
    ready: true
  },
  evidence: []
};
