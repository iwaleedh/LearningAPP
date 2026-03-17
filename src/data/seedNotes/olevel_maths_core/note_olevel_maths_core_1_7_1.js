export const note_olevel_maths_core_1_7_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/rounding-to-significant-figures.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Round numbers to a given number of significant figures (s.f.), including large numbers and decimals less than 1.' }
    },
    {
      id: 'h-what-are-sf',
      type: 'heading',
      data: { text: 'What are Significant Figures?', level: 2 }
    },
    {
      id: 'p-what-are-sf',
      type: 'paragraph',
      data: { text: 'Significant figures are the meaningful digits in a number. They start from the <strong>first non-zero digit</strong> (reading left to right) and include all digits after it.' }
    },
    {
      id: 'tbl-sf-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Counting Significant Figures',
        headers: ['Number', 'Sig figs', 'Reason'],
        rows: [
          ['3 746', '4', 'All non-zero, all count'],
          ['0.0052', '2', 'Leading zeros don\'t count; 5 and 2 count'],
          ['1 300', '2 (approximately)', 'Trailing zeros in whole numbers are ambiguous'],
          ['1 300.0', '5', 'Decimal point shows zeros are significant'],
          ['0.0500', '3', 'Trailing zeros after decimal point count (5, 0, 0)']
        ]
      }
    },
    {
      id: 'h-rounding-sf',
      type: 'heading',
      data: { text: 'How to Round to Significant Figures', level: 2 }
    },
    {
      id: 'list-sf-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Identify the 1st significant figure (first non-zero digit from the left).' },
          { text: 'Count to the required number of s.f.' },
          { text: 'Apply the rounding rule using the deciding digit (the next digit).' },
          { text: 'Replace remaining digits before the decimal with zeros to maintain place value.' }
        ]
      }
    },
    {
      id: 'callout-worked-sf-large',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Rounding Large Numbers to s.f.',
        text: 'Round 47 836 to 2 s.f.:<br>1st s.f. = 4, 2nd s.f. = 7, deciding digit = 8 ≥ 5 → round up the 7 to 8.<br>Replace remaining digits with zeros: <strong>48 000</strong><br><br>Round 3 055 to 1 s.f.:<br>1st s.f. = 3, deciding digit = 0 &lt; 5 → keep 3.<br>Answer: <strong>3 000</strong>'
      }
    },
    {
      id: 'callout-worked-sf-small',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Rounding Decimals to s.f.',
        text: 'Round 0.007384 to 2 s.f.:<br>1st s.f. = 7 (ignore the leading zeros), 2nd s.f. = 3, deciding digit = 8 ≥ 5 → round up.<br>Answer: <strong>0.0074</strong><br><br>Round 0.000 405 to 1 s.f.:<br>1st s.f. = 4, deciding digit = 0 &lt; 5 → 0.0004'
      }
    },
    {
      id: 'callout-key-sf',
      type: 'callout',
      data: { style: 'key', title: 'Key Rule', text: '<strong>Start counting from the first non-zero digit.</strong><br>Leading zeros: NOT significant. Trailing zeros after decimal: ARE significant. Trailing zeros before decimal: ambiguous unless specified.' }
    },
    {
      id: 'callout-tip-sf-vs-dp',
      type: 'callout',
      data: { style: 'tip', title: 'Sig Figs vs Decimal Places', text: 'D.p. counts digits after the decimal point. S.f. counts meaningful digits from the first non-zero digit. For 0.0047:<br>2 d.p. would give 0.00 (not useful!)<br>2 s.f. gives 0.0047 → stays as 0.0047  (only 2 sig figs already).' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Significant figures: start counting from the first non-zero digit. Leading zeros are not significant. Use the same rounding rule (deciding digit ≥5: up; <5: down). For large numbers, replace non-significant digits with zeros.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-what-are-sf', prompt: 'Where do you start counting significant figures? Why don\'t leading zeros count?' },
      { id: 'cue-2', blockId: 'callout-worked-sf-large', prompt: 'Round 47 836 to 2 significant figures. Show all steps.' },
      { id: 'cue-3', blockId: 'callout-worked-sf-small', prompt: 'Round 0.007384 to 2 significant figures.' },
      { id: 'cue-4', blockId: 'tbl-sf-examples', prompt: 'How many sig figs does 0.0500 have? What about 1 300?' },
      { id: 'cue-5', blockId: 'callout-tip-sf-vs-dp', prompt: 'What is the key difference between rounding to 2 d.p. and 2 s.f.?' }
    ],
    summaryText: 'Count sig figs from first non-zero digit. Leading zeros do not count. Round with standard rule. For large numbers, fill trailing positions with zeros.',
    ready: true
  },
  evidence: []
};
