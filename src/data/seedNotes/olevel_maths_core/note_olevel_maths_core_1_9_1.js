export const note_olevel_maths_core_1_9_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/equivalent-and-simplified-ratios.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Create equivalent ratios and express ratios in their simplest form; identify when two ratios are equivalent.' }
    },
    {
      id: 'h-equivalent',
      type: 'heading',
      data: { text: 'Equivalent Ratios', level: 2 }
    },
    {
      id: 'p-equivalent',
      type: 'paragraph',
      data: { text: 'Two ratios are <strong>equivalent</strong> if one can be obtained from the other by multiplying or dividing both parts by the same number. This is like scaling fractions.' }
    },
    {
      id: 'callout-worked-equiv',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Creating Equivalent Ratios',
        text: '3 : 5 is equivalent to:<br>× 2 → 6 : 10<br>× 4 → 12 : 20<br>× 10 → 30 : 50<br><br>All of 6:10, 12:20, 30:50 simplify back to <strong>3 : 5</strong>.'
      }
    },
    {
      id: 'h-simplify',
      type: 'heading',
      data: { text: 'Simplifying to Lowest Terms', level: 2 }
    },
    {
      id: 'p-simplify',
      type: 'paragraph',
      data: { text: 'Divide all parts of the ratio by their HCF. Continue until no further simplification is possible.' }
    },
    {
      id: 'callout-worked-simp',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Step-by-Step Simplification',
        text: 'Simplify 72 : 48<br>HCF(72, 48) = 24<br>72 ÷ 24 : 48 ÷ 24 = <strong>3 : 2</strong><br><br>Simplify 0.5 : 1.5<br>Multiply both by 2: 1 : 3<br>Already simplified: <strong>1 : 3</strong>'
      }
    },
    {
      id: 'h-fractions',
      type: 'heading',
      data: { text: 'Ratio as a Fraction', level: 2 }
    },
    {
      id: 'p-fractions',
      type: 'paragraph',
      data: { text: 'The ratio a : b can be written as the fraction a/b. This is useful when comparing or scaling.' }
    },
    {
      id: 'callout-worked-check',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Are These Ratios Equivalent?',
        text: 'Are 4 : 6 and 6 : 9 equivalent?<br>4/6 = 2/3 and 6/9 = 2/3 — <strong>Yes, both equal 2 : 3</strong>'
      }
    },
    {
      id: 'callout-key-equiv',
      type: 'callout',
      data: { style: 'key', title: 'Key Rule', text: 'Multiply or divide ALL parts of a ratio by the same non-zero number to create equivalent ratios.' }
    },
    {
      id: 'callout-tip-decimals',
      type: 'callout',
      data: { style: 'tip', title: 'Ratios with Decimals or Fractions', text: 'To simplify ratios involving decimals, multiply all parts by the appropriate power of 10 to eliminate decimals. For fractions, multiply by the LCM of denominators.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Equivalent ratios: multiply/divide all parts by the same number. Simplest form: divide by HCF. Check equivalence by simplifying both to lowest terms.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-equivalent', prompt: 'What makes two ratios equivalent? Give two ratios equivalent to 3 : 5.' },
      { id: 'cue-2', blockId: 'callout-worked-simp', prompt: 'Simplify 72 : 48 to lowest terms.' },
      { id: 'cue-3', blockId: 'callout-worked-check', prompt: 'Are 4 : 6 and 6 : 9 equivalent? Show how you check.' },
      { id: 'cue-4', blockId: 'callout-tip-decimals', prompt: 'How do you simplify a ratio like 0.5 : 1.5 or 1/2 : 3/4?' }
    ],
    summaryText: 'Equivalent ratios: scale all parts by same factor. Simplest form: divide by HCF. To check equivalence: simplify both and compare.',
    ready: true
  },
  evidence: []
};
