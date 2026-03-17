export const note_olevel_maths_extended_1_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/operations-with-decimals.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Add, subtract, multiply, and divide decimal numbers accurately, understanding place value in decimal arithmetic.' }
    },
    {
      id: 'h-add-sub',
      type: 'heading',
      data: { text: 'Adding and Subtracting Decimals', level: 2 }
    },
    {
      id: 'p-add-sub',
      type: 'paragraph',
      data: { text: 'To add or subtract decimals, <strong>line up the decimal points</strong> in a column. Fill any gaps with trailing zeros to make the numbers the same length, then add or subtract as usual.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: 'Calculate 14.7 + 3.85.\n\n<strong>Solution:</strong>\nAlign decimal points:\n  14.70\n+  3.85\n= <strong>18.55</strong>' }
    },
    {
      id: 'h-mult',
      type: 'heading',
      data: { text: 'Multiplying Decimals', level: 2 }
    },
    {
      id: 'p-mult',
      type: 'paragraph',
      data: { text: 'To multiply decimals: (1) ignore the decimal points and multiply as whole numbers, (2) count the total number of decimal places in both numbers, (3) place the decimal point in the answer so it has the same total number of decimal places.' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2', text: 'Calculate 3.4 × 2.7.\n\n<strong>Solution:</strong>\nIgnore decimals: 34 × 27 = 918\nCount decimal places: 3.4 (1 d.p.) + 2.7 (1 d.p.) = 2 d.p. total\nPlace the decimal: 9.18\nAnswer: <strong>9.18</strong>' }
    },
    {
      id: 'h-div',
      type: 'heading',
      data: { text: 'Dividing Decimals', level: 2 }
    },
    {
      id: 'p-div',
      type: 'paragraph',
      data: { text: 'To divide by a decimal, convert the divisor to a whole number by multiplying both numbers by a power of 10. For example, 6.48 ÷ 0.3 becomes 64.8 ÷ 3 (multiply both by 10).' }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 3', text: 'Calculate 7.56 ÷ 0.04.\n\n<strong>Solution:</strong>\nMultiply both by 100 to make the divisor a whole number:\n7.56 ÷ 0.04 = 756 ÷ 4 = <strong>189</strong>' }
    },
    {
      id: 'callout-key-powers10',
      type: 'callout',
      data: { style: 'key', title: 'Multiplying and Dividing by Powers of 10', text: '<strong>Multiplying by 10:</strong> move decimal point one place right.\n<strong>Multiplying by 100:</strong> move two places right.\n<strong>Dividing by 10:</strong> move decimal point one place left.\n<strong>Dividing by 100:</strong> move two places left.\n\nExample: 4.5 × 1000 = 4500 &nbsp;&nbsp; 320 ÷ 100 = 3.2' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Use estimation to check: 3.4 × 2.7 ≈ 3 × 3 = 9. If your answer is 91.8 or 0.918, you know the decimal point is wrong.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Align decimal points for addition/subtraction. For multiplication, multiply as whole numbers then place the decimal point using the total count of decimal places. For division, make the divisor a whole number by multiplying both numbers by 10, 100, etc.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-add-sub', prompt: 'What must you always do when adding or subtracting decimals?' },
      { id: 'cue-2', blockId: 'p-mult', prompt: 'Describe the three-step method for multiplying decimals.' },
      { id: 'cue-3', blockId: 'p-div', prompt: 'How do you divide by a decimal number?' },
      { id: 'cue-4', blockId: 'callout-key-powers10', prompt: 'What happens when you multiply a decimal by 100?' }
    ],
    summaryText: 'Decimal arithmetic relies on place value alignment, counting decimal places for multiplication, and eliminating decimal divisors.',
    ready: true
  },
  evidence: []
};
