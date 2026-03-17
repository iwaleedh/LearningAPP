export const note_olevel_maths_core_1_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/introduction-to-fractions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand fractions as parts of a whole; identify numerators and denominators; distinguish proper fractions, improper fractions, and unit fractions.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is a Fraction?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: 'A <strong>fraction</strong> represents equal parts of a whole. The number above the line is the <strong>numerator</strong> (how many parts you have). The number below the line is the <strong>denominator</strong> (how many equal parts the whole is divided into).' }
    },
    {
      id: 'callout-key-frac',
      type: 'callout',
      data: { style: 'key', title: 'Parts of a Fraction', text: '<span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">5</span></span> &nbsp;= &nbsp; <sup>3 ← numerator (parts you have)</sup>/<sub>5 ← denominator (total equal parts)</sub><br><br>Read as "three fifths": 3 out of 5 equal parts.' }
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Types of Fractions', level: 2 }
    },
    {
      id: 'tbl-types',
      type: 'comparisonTable',
      data: {
        caption: 'Types of Fractions',
        headers: ['Type', 'Definition', 'Example'],
        rows: [
          ['Proper fraction', 'Numerator < denominator (value < 1)', '³⁄₄, ²⁄₇'],
          ['Improper fraction', 'Numerator ≥ denominator (value ≥ 1)', '⁷⁄₄, ⁵⁄₅'],
          ['Unit fraction', 'Numerator = 1', '¹⁄₃, ¹⁄₁₀'],
          ['Mixed number', 'Whole number + fraction', '2¹⁄₄, 3²⁄₅']
        ]
      }
    },
    {
      id: 'h-unit',
      type: 'heading',
      data: { text: 'Unit Fractions', level: 2 }
    },
    {
      id: 'p-unit',
      type: 'paragraph',
      data: { text: 'A <strong>unit fraction</strong> has a numerator of 1: ½, ⅓, ¼, ⅕, ... The larger the denominator, the smaller the fraction. ½ > ⅓ > ¼ > ⅕ ...' }
    },
    {
      id: 'h-fraction-bar',
      type: 'heading',
      data: { text: 'Fraction as Division', level: 2 }
    },
    {
      id: 'p-fraction-bar',
      type: 'paragraph',
      data: { text: 'A fraction also represents a <strong>division</strong>: <sup>a</sup>/<sub>b</sub> = a ÷ b. For example, <sup>3</sup>/<sub>4</sub> = 3 ÷ 4 = 0.75. This is useful for converting fractions to decimals.' }
    },
    {
      id: 'callout-worked-intro',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Identify and Describe Fractions',
        text: 'For each fraction, state its type:<br><br><strong>a) 5/8</strong> → Numerator (5) < denominator (8) → Proper fraction<br><strong>b) 9/4</strong> → Numerator (9) > denominator (4) → Improper fraction<br><strong>c) 1/6</strong> → Numerator = 1 → Unit fraction<br><strong>d) 3 2/5</strong> → Whole number + fraction → Mixed number'
      }
    },
    {
      id: 'callout-tip-size',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Comparing Unit Fractions', text: 'For unit fractions, bigger denominator = smaller fraction.<br>¼ < ½ because splitting into 4 equal parts gives smaller pieces than splitting into 2 parts.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Fraction = numerator/denominator = parts/whole. Proper: numerator < denominator. Improper: numerator ≥ denominator. Unit fraction: numerator = 1. Any fraction a/b = a ÷ b.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-what', prompt: 'In the fraction 5/9, what does the 5 mean? What does the 9 mean?' },
      { id: 'cue-2', blockId: 'h-types', prompt: 'What is the difference between a proper fraction and an improper fraction?' },
      { id: 'cue-3', blockId: 'h-unit', prompt: 'List the first 5 unit fractions. Which is larger: 1/3 or 1/7?' },
      { id: 'cue-4', blockId: 'h-fraction-bar', prompt: 'What decimal is equal to 7/8? How do you work this out?' },
      { id: 'cue-5', blockId: 'callout-worked-intro', prompt: 'Classify these: 11/5, 3/7, 1/4, 2 3/8.' }
    ],
    summaryText: 'Fractions show parts of a whole: numerator/denominator. Proper < 1, improper ≥ 1, unit has numerator 1.',
    ready: true
  },
  evidence: []
};
