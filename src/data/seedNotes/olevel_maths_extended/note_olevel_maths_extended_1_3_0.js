export const note_olevel_maths_extended_1_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/basic-fractions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand fractions as parts of a whole, simplify fractions to their lowest terms, and find equivalent fractions.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What Is a Fraction?', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>fraction</strong> represents a part of a whole. It is written as <span class="nb-frac"><span class="nb-num">numerator</span><span class="nb-den">denominator</span></span>. The <strong>numerator</strong> (top) tells how many parts you have; the <strong>denominator</strong> (bottom) tells how many equal parts the whole is divided into.' }
    },
    {
      id: 'callout-key-types',
      type: 'callout',
      data: { style: 'key', title: 'Types of Fractions', text: '<strong>Proper fraction:</strong> numerator < denominator, e.g. <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">4</span></span>\n<strong>Improper fraction:</strong> numerator ≥ denominator, e.g. <span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">3</span></span>\n<strong>Mixed number:</strong> whole number + proper fraction, e.g. 2<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span>' }
    },
    {
      id: 'h-equiv',
      type: 'heading',
      data: { text: 'Equivalent Fractions', level: 2 }
    },
    {
      id: 'p-equiv',
      type: 'paragraph',
      data: { text: '<strong>Equivalent fractions</strong> are different fractions that represent the same value. You create them by multiplying (or dividing) both the numerator and denominator by the same number. For example, <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span> = <span class="nb-frac"><span class="nb-num">4</span><span class="nb-den">6</span></span> = <span class="nb-frac"><span class="nb-num">6</span><span class="nb-den">9</span></span> = <span class="nb-frac"><span class="nb-num">8</span><span class="nb-den">12</span></span>.' }
    },
    {
      id: 'h-simplify',
      type: 'heading',
      data: { text: 'Simplifying Fractions', level: 2 }
    },
    {
      id: 'p-simplify',
      type: 'paragraph',
      data: { text: 'To <strong>simplify</strong> a fraction to its lowest terms, divide the numerator and denominator by their <strong>highest common factor</strong> (HCF). A fraction is fully simplified when the only common factor is 1.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: 'Simplify <span class="nb-frac"><span class="nb-num">24</span><span class="nb-den">36</span></span>.\n\n<strong>Solution:</strong>\nFind the HCF of 24 and 36: HCF = 12.\nDivide both by 12:\n<span class="nb-frac"><span class="nb-num">24 ÷ 12</span><span class="nb-den">36 ÷ 12</span></span> = <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span>' }
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Comparing Fractions', level: 2 }
    },
    {
      id: 'p-compare',
      type: 'paragraph',
      data: { text: 'To compare fractions, convert them to equivalent fractions with the <strong>same denominator</strong> (use the LCM), then compare the numerators. Alternatively, convert each fraction to a decimal.' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2', text: 'Which is larger: <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">5</span></span> or <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">8</span></span>?\n\n<strong>Solution:</strong>\nLCM of 5 and 8 = 40.\n<span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">5</span></span> = <span class="nb-frac"><span class="nb-num">24</span><span class="nb-den">40</span></span> &nbsp;&nbsp; <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">8</span></span> = <span class="nb-frac"><span class="nb-num">25</span><span class="nb-den">40</span></span>\nSince 25 > 24: <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">8</span></span> is larger.' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Always simplify your final answer unless the question says otherwise. Check if both numbers share a common factor greater than 1.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Fractions represent parts of a whole. Equivalent fractions have the same value but different numerators/denominators. Simplify by dividing by the HCF. Compare fractions using a common denominator.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What do the numerator and denominator of a fraction represent?' },
      { id: 'cue-2', blockId: 'p-equiv', prompt: 'How do you find an equivalent fraction?' },
      { id: 'cue-3', blockId: 'p-simplify', prompt: 'How do you simplify a fraction to its lowest terms?' },
      { id: 'cue-4', blockId: 'p-compare', prompt: 'Describe two methods for comparing fractions.' },
      { id: 'cue-5', blockId: 'callout-key-types', prompt: 'What is the difference between a proper and improper fraction?' }
    ],
    summaryText: 'Fractions show parts of a whole; simplify using the HCF; compare using a common denominator or decimal conversion.',
    ready: true
  },
  evidence: []
};
