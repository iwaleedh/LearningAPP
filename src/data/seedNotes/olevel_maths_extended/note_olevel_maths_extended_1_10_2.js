export const note_olevel_maths_extended_1_10_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/time.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Convert between 12-hour and 24-hour clock formats, calculate time intervals, and solve problems involving time zones.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Time', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'Time calculations are common in IGCSE exams. You need to be confident with clock conversions, time intervals, and working across midnight or midday.' } },

    { id: 'h-clocks', type: 'heading', data: { text: '12-Hour and 24-Hour Clock', level: 2 } },
    { id: 'table-clocks', type: 'comparisonTable', data: {
      caption: '12-hour to 24-hour conversions',
      headers: ['12-hour', '24-hour'],
      rows: [
        ['12:00 midnight', '00:00'],
        ['7:30 am', '07:30'],
        ['12:00 noon', '12:00'],
        ['3:45 pm', '15:45'],
        ['11:59 pm', '23:59']
      ]
    }},
    { id: 'p-convert', type: 'paragraph', data: { text: 'For pm times, add 12 to the hours (except 12 pm which stays as 12:00). For 12 am (midnight), the 24-hour time is 00:00.' } },

    { id: 'h-intervals', type: 'heading', data: { text: 'Calculating Time Intervals', level: 2 } },
    { id: 'p-intervals', type: 'paragraph', data: { text: 'To find the time between two events, count forward in stages: first to the next whole hour, then count the remaining hours and minutes.' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'A train departs at 09:47 and arrives at 13:12. How long is the journey?\n\n09:47 &rarr; 10:00 = 13 minutes\n10:00 &rarr; 13:00 = 3 hours\n13:00 &rarr; 13:12 = 12 minutes\n\nTotal: 3 hours 25 minutes\n\n<b>Answer:</b> 3 hours 25 minutes' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'A flight departs at 22:40 and takes 7 hours 35 minutes. What time does it arrive?\n\n22:40 + 7 hours = 05:40 (next day)\n05:40 + 35 minutes = 06:15\n\n<b>Answer:</b> 06:15 the next day' } },

    { id: 'h-units', type: 'heading', data: { text: 'Converting Time Units', level: 2 } },
    { id: 'list-conversions', type: 'list', data: { style: 'bullet', items: [
      { text: '1 hour = 60 minutes' },
      { text: '1 minute = 60 seconds' },
      { text: '1 hour = 3600 seconds' },
      { text: '1 day = 24 hours' },
      { text: '1 year = 365 days (or 366 in a leap year)' }
    ] } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: 'Convert 2 hours 45 minutes to hours as a decimal.\n\n45 minutes = <span class="nb-frac"><span class="nb-num">45</span><span class="nb-den">60</span></span> = 0.75 hours\n\nTotal = 2.75 hours\n\n<b>Answer:</b> 2.75 hours' } },

    { id: 'callout-warning-1', type: 'callout', data: { style: 'warning', title: 'Common Mistake', text: '2 hours 30 minutes ≠ 2.30 hours. There are 60 minutes in an hour, not 100. 30 minutes = 0.5 hours, so 2 hours 30 minutes = 2.5 hours.' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'When calculating time intervals, it is safer to count forward in steps rather than subtracting. This avoids errors when crossing midnight or midday.' } },

    { id: 'sum-1', type: 'summary', data: { text: 'Convert pm times to 24-hour by adding 12. Calculate intervals by counting in steps. Remember: 60 minutes = 1 hour (not 100). Convert minutes to decimals by dividing by 60.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-convert', prompt: 'How do you convert a pm time to 24-hour format?' },
      { id: 'cue-2', blockId: 'p-intervals', prompt: 'What is the best method for calculating time intervals?' },
      { id: 'cue-3', blockId: 'callout-worked-3', prompt: 'How do you convert 2 hours 45 minutes to a decimal?' },
      { id: 'cue-4', blockId: 'callout-warning-1', prompt: 'Why is 2 hours 30 minutes not equal to 2.3 hours?' }
    ],
    summaryText: '24-hour clock: add 12 for pm. Time intervals: count in stages. Minutes to decimals: ÷ 60.',
    ready: true
  },
  evidence: []
};
