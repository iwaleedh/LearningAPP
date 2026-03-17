export const note_olevel_maths_core_1_11_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/time.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use and convert between 12-hour and 24-hour clock times; calculate time durations including overnight; convert between hours, minutes, and seconds.' }
    },
    {
      id: 'h-12-24',
      type: 'heading',
      data: { text: '12-Hour and 24-Hour Clock', level: 2 }
    },
    {
      id: 'tbl-clock',
      type: 'comparisonTable',
      data: {
        caption: '12-Hour vs 24-Hour Conversion',
        headers: ['12-Hour', '24-Hour', 'Word'],
        rows: [
          ['12:00 am (midnight)', '00:00', 'Midnight'],
          ['1:30 am', '01:30', 'Morning'],
          ['12:00 pm (noon)', '12:00', 'Midday'],
          ['3:45 pm', '15:45', 'Afternoon'],
          ['11:59 pm', '23:59', 'Night']
        ]
      }
    },
    {
      id: 'callout-key-convert',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Converting 12-Hour ↔ 24-Hour',
        text: '<strong>12-hour → 24-hour:</strong><br>• am times: same (1:00 am = 01:00), except 12:xx am → 00:xx<br>• pm times: add 12 (3:15 pm → 15:15), except 12:xx pm → 12:xx<br><br><strong>24-hour → 12-hour:</strong><br>• 00:xx → 12:xx am; 01–11 → am<br>• 12:xx → 12:xx pm; 13–23 → subtract 12, add pm'
      }
    },
    {
      id: 'h-duration',
      type: 'heading',
      data: { text: 'Calculating Time Durations', level: 2 }
    },
    {
      id: 'p-duration',
      type: 'paragraph',
      data: { text: 'To find the duration between two times, use the <strong>counting up</strong> method: count from the start time to the next whole hour, then count whole hours, then count remaining minutes.' }
    },
    {
      id: 'callout-worked-duration',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Duration',
        text: 'A film starts at 14:45 and ends at 17:20. How long is the film?<br><br>14:45 → 15:00 = 15 minutes<br>15:00 → 17:00 = 2 hours<br>17:00 → 17:20 = 20 minutes<br>Total = 2 hours 35 minutes = <strong>2 h 35 min</strong>'
      }
    },
    {
      id: 'callout-worked-overnight',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Overnight Duration',
        text: 'A night shift starts at 22:30 and ends at 06:15. How long is the shift?<br><br>22:30 → 00:00 (midnight) = 1 h 30 min<br>00:00 → 06:00 = 6 hours<br>06:00 → 06:15 = 15 minutes<br>Total = <strong>7 h 45 min</strong>'
      }
    },
    {
      id: 'h-convert-time',
      type: 'heading',
      data: { text: 'Converting Units of Time', level: 2 }
    },
    {
      id: 'list-time-conversions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '1 minute = 60 seconds' },
          { text: '1 hour = 60 minutes = 3 600 seconds' },
          { text: '1 day = 24 hours' },
          { text: 'Hours → decimal: 2 h 30 min = 2.5 h (because 30/60 = 0.5)' },
          { text: 'Decimal → h/min: 3.25 h = 3 h 15 min (0.25 × 60 = 15 min)' }
        ]
      }
    },
    {
      id: 'callout-tip-decimal',
      type: 'callout',
      data: { style: 'tip', title: 'Decimal Hours Warning', text: '2 hours 30 minutes ≠ 2.30 hours. 2 h 30 min = 2.5 hours. Never use 2.30 in speed/distance/time calculations — convert properly.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '24-hour clock: pm times add 12. Count up method for durations. 1 hour = 60 minutes; convert to decimal hours for calculations (30 min = 0.5 h, 45 min = 0.75 h).' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'tbl-clock', prompt: 'How do you convert 3:45 pm to 24-hour clock? How do you convert 15:45 back?' },
      { id: 'cue-2', blockId: 'callout-worked-duration', prompt: 'A film starts at 14:45 and ends at 17:20. How long is the film?' },
      { id: 'cue-3', blockId: 'callout-worked-overnight', prompt: 'A shift starts at 22:30 and ends at 06:15. How long is the shift?' },
      { id: 'cue-4', blockId: 'h-convert-time', prompt: 'Convert 2 hours 45 minutes to decimal hours, and 3.4 hours to hours and minutes.' },
      { id: 'cue-5', blockId: 'callout-tip-decimal', prompt: 'Why is 2 h 30 min not the same as 2.30 hours in a calculation?' }
    ],
    summaryText: 'pm + 12 = 24-hour. Duration: count up method. 30 min = 0.5 h, 45 min = 0.75 h — always convert to decimal hours for calculations.',
    ready: true
  },
  evidence: []
};
