export const note_olevel_maths_core_1_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/ordering-numbers.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Order integers and decimal numbers; use inequality symbols correctly; represent numbers on a number line.' }
    },
    {
      id: 'h-symbols',
      type: 'heading',
      data: { text: 'Inequality Symbols', level: 2 }
    },
    {
      id: 'callout-key-symbols',
      type: 'callout',
      data: { style: 'key', title: 'Inequality Symbols', text: '< &nbsp; means "less than" &nbsp; e.g. 3 < 7<br>> &nbsp; means "greater than" &nbsp; e.g. 9 > 4<br>≤ &nbsp; means "less than or equal to"<br>≥ &nbsp; means "greater than or equal to"<br><br><em>Memory trick: the symbol points to (opens towards) the larger number.</em>' }
    },
    {
      id: 'h-integers',
      type: 'heading',
      data: { text: 'Ordering Integers', level: 2 }
    },
    {
      id: 'p-integers',
      type: 'paragraph',
      data: { text: 'Integers are ordered by their position on the number line. Numbers further to the <strong>right</strong> are larger; numbers further to the <strong>left</strong> are smaller. Negative numbers are always smaller than positive numbers.' }
    },
    {
      id: 'callout-worked-int',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Order Integers',
        text: 'Write in ascending (smallest first) order: 7, −3, 0, −15, 4, −1<br><br>On a number line, left = smaller:<br>−15, −3, −1, 0, 4, 7<br><br><em>Ascending = smallest to largest. Descending = largest to smallest.</em>'
      }
    },
    {
      id: 'h-decimals',
      type: 'heading',
      data: { text: 'Ordering Decimals', level: 2 }
    },
    {
      id: 'p-decimals',
      type: 'paragraph',
      data: { text: 'To order decimals, compare digit by digit from left to right, starting with the units (whole number part). If the whole number parts are equal, compare the tenths, then hundredths, and so on.' }
    },
    {
      id: 'callout-worked-dec',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Order Decimals',
        text: 'Write in ascending order: 0.3, 0.25, 0.307, 0.31<br><br>Writing with the same number of decimal places helps:<br>0.300, 0.250, 0.307, 0.310<br><br>Comparing: 0.250 < 0.300 < 0.307 < 0.310<br><br>Answer: <strong>0.25, 0.3, 0.307, 0.31</strong>'
      }
    },
    {
      id: 'h-numberline',
      type: 'heading',
      data: { text: 'Number Lines', level: 2 }
    },
    {
      id: 'p-numberline',
      type: 'paragraph',
      data: { text: 'A <strong>number line</strong> is a straight line where numbers increase from left to right. It is useful for ordering numbers visually and understanding the relative size of numbers, including negatives.' }
    },
    {
      id: 'callout-tip-order',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Ordering Strategy', text: '1. Separate numbers by size of whole part first.<br>2. If whole parts are equal, align decimal points and compare column by column.<br>3. Adding trailing zeros (0.3 = 0.300) can make comparison easier — the number doesn\'t change!' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '< means less than, > means greater than. Ordering integers: negatives < zero < positives. Ordering decimals: compare column by column from left to right. Number lines show relative size visually.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-symbols', prompt: 'What do the symbols <, >, ≤, ≥ mean? Which way does the symbol "point"?' },
      { id: 'cue-2', blockId: 'h-integers', prompt: 'Write −8, 3, −1, 0, 5 in ascending order.' },
      { id: 'cue-3', blockId: 'h-decimals', prompt: 'Order 0.5, 0.48, 0.502, 0.49 from largest to smallest.' },
      { id: 'cue-4', blockId: 'h-numberline', prompt: 'On a number line, which direction represents larger numbers?' },
      { id: 'cue-5', blockId: 'callout-tip-order', prompt: 'How does writing trailing zeros help when ordering decimals? Give an example.' }
    ],
    summaryText: 'Use <, > to compare; order decimals column by column (align decimal points); negatives always less than positives.',
    ready: true
  },
  evidence: []
};
