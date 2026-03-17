export const note_olevel_maths_core_1_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/place-value.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand place value in large and small numbers; read and write numbers using the correct column values.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What is Place Value?', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Place value</strong> tells you what a digit is <em>worth</em> based on its position in a number. The same digit has different values in different positions: the 3 in 300 is worth 300, but in 0.003 it is worth three thousandths.' }
    },
    {
      id: 'h-columns',
      type: 'heading',
      data: { text: 'Place Value Columns', level: 2 }
    },
    {
      id: 'tbl-columns',
      type: 'comparisonTable',
      data: {
        caption: 'Place Value Columns',
        headers: ['Millions', 'Hundred thousands', 'Ten thousands', 'Thousands', 'Hundreds', 'Tens', 'Units', '.', 'Tenths', 'Hundredths', 'Thousandths'],
        rows: [
          ['1 000 000', '100 000', '10 000', '1 000', '100', '10', '1', '.', '0.1', '0.01', '0.001']]
      }
    },
    {
      id: 'callout-key-pv',
      type: 'callout',
      data: { style: 'key', title: 'Key Rule', text: 'Each column to the <strong>left</strong> is <strong>10 times larger</strong>.<br>Each column to the <strong>right</strong> is <strong>10 times smaller</strong>.<br><br>In 4 572.39:<br>4 is in the <em>thousands</em> → worth 4 000<br>5 is in the <em>hundreds</em> → worth 500<br>7 is in the <em>tens</em> → worth 70<br>2 is in the <em>units</em> → worth 2<br>3 is in the <em>tenths</em> → worth 0.3<br>9 is in the <em>hundredths</em> → worth 0.09' }
    },
    {
      id: 'h-reading',
      type: 'heading',
      data: { text: 'Reading Large Numbers', level: 2 }
    },
    {
      id: 'p-reading',
      type: 'paragraph',
      data: { text: 'Group digits in threes from right to left, using commas or spaces as separators. Read each group as hundreds, tens, and units, then say the group name.' }
    },
    {
      id: 'callout-worked-large',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Read 3 047 286',
        text: 'Group: 3 | 047 | 286<br><br>3 → three million<br>047 → forty-seven thousand<br>286 → two hundred and eighty-six<br><br>Answer: <strong>three million, forty-seven thousand, two hundred and eighty-six</strong>'
      }
    },
    {
      id: 'h-small',
      type: 'heading',
      data: { text: 'Reading Small Decimal Numbers', level: 2 }
    },
    {
      id: 'p-small',
      type: 'paragraph',
      data: { text: 'After the decimal point, each digit is named by its column. Read 0.045 as "forty-five thousandths" (the last significant digit is in the thousandths column).' }
    },
    {
      id: 'callout-tip-zeros',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Zeros as Placeholders', text: 'Zeros hold the place to keep other digits in the correct column. In 405, the zero keeps 4 in the hundreds column and 5 in the units. In 0.07, the two zeros (0 and 0) ensure 7 is in the hundredths column, not the tenths.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Each digit\'s position determines its value. Moving left multiplies by 10; moving right divides by 10. Zeros act as placeholders to fix other digits in their correct column.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-intro', prompt: 'In the number 57 348, what is the value of the digit 7?' },
      { id: 'cue-2', blockId: 'tbl-columns', prompt: 'Name the place value columns from millions down to thousandths in order.' },
      { id: 'cue-3', blockId: 'h-reading', prompt: 'Write 2 305 010 in words.' },
      { id: 'cue-4', blockId: 'h-small', prompt: 'What is the value of 8 in 0.0083?' },
      { id: 'cue-5', blockId: 'callout-tip-zeros', prompt: 'Why is the zero in 305 important? What if it were missing?' }
    ],
    summaryText: 'Place value: each digit\'s value depends on its column position; each step left is ×10, each step right is ÷10.',
    ready: true
  },
  evidence: []
};
