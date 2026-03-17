export const note_olevel_maths_extended_8_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Probability/two-way-tables.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Read, complete, and use two-way tables to find probabilities.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Two-Way Tables', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A <strong>two-way table</strong> organises data by two categories. Rows represent one category, columns represent the other. Row and column totals help you find missing values.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '60 students were asked if they like Maths or Science:<br><br>| | Like Maths | Don\'t like Maths | Total |<br>|---|---|---|---|<br>| Like Science | 18 | 12 | 30 |<br>| Don\'t like Science | 15 | 15 | 30 |<br>| Total | 33 | 27 | 60 |<br><br>(a) P(likes both) = <span class="nb-frac"><span class="nb-num">18</span><span class="nb-den">60</span></span> = <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">10</span></span><br>(b) P(doesn\'t like Maths) = <span class="nb-frac"><span class="nb-num">27</span><span class="nb-den">60</span></span> = <span class="nb-frac"><span class="nb-num">9</span><span class="nb-den">20</span></span>'
      }
    },
    {
      id: 'callout-key-complete',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Completing a Two-Way Table',
        text: '• Each row total = sum of the entries in that row<br>• Each column total = sum of the entries in that column<br>• Grand total (bottom right) = sum of all row totals = sum of all column totals<br>• Use subtraction to find missing values'
      }
    },
    {
      id: 'callout-tip-denominator',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Choosing the Denominator',
        text: 'If the question says "one of the 60 students is chosen at random", the denominator is 60. If it says "one of the students who likes Maths is chosen", the denominator is 33 (the column total).'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Two-way tables show data categorised by two variables. Use row and column totals to complete the table. Probabilities use the grand total as denominator unless a condition restricts the group.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Two-way tables categorise data by two variables. Use totals to find missing values and calculate probabilities.',
    cues: [
      { id: 'cue-1', blockId: 'p-def', prompt: 'What is a two-way table?', answer: 'A table that organises data by two categories, with rows for one variable and columns for the other.' },
      { id: 'cue-2', blockId: 'callout-key-complete', prompt: 'How do you find a missing value in a two-way table?', answer: 'Use the row or column total and subtract the known values.' },
      { id: 'cue-3', blockId: 'callout-tip-denominator', prompt: 'How do you choose the right denominator for probabilities?', answer: 'Use the grand total unless the question restricts to a specific group (row/column total).' },
      { id: 'cue-4', blockId: 'callout-worked-1', prompt: 'What is the denominator when "one from the whole group" is chosen?', answer: 'The grand total of the table.' }
    ]
  },
  evidence: []
};
