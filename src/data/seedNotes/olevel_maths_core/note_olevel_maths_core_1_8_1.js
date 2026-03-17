export const note_olevel_maths_core_1_8_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/powers-and-roots.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate and interpret powers (squares, cubes, higher) and roots (square, cube, higher); understand fractional indices.' }
    },
    {
      id: 'h-squares-cubes',
      type: 'heading',
      data: { text: 'Squares and Cubes Review', level: 2 }
    },
    {
      id: 'tbl-squares',
      type: 'comparisonTable',
      data: {
        caption: 'Squares 1–15 and Cubes 1–10',
        headers: ['n', 'n²', 'n³'],
        rows: [
          ['1', '1', '1'],
          ['2', '4', '8'],
          ['3', '9', '27'],
          ['4', '16', '64'],
          ['5', '25', '125'],
          ['6', '36', '216'],
          ['7', '49', '343'],
          ['8', '64', '512'],
          ['9', '81', '729'],
          ['10', '100', '1000']
        ]
      }
    },
    {
      id: 'h-higher-powers',
      type: 'heading',
      data: { text: 'Higher Powers', level: 2 }
    },
    {
      id: 'p-higher-powers',
      type: 'paragraph',
      data: { text: 'Any repeated multiplication: 2⁴ = 16, 3⁵ = 243, 10⁶ = 1 000 000. Use a calculator for larger powers (press: base, x^y or ^ button, power, =).' }
    },
    {
      id: 'h-roots',
      type: 'heading',
      data: { text: 'Square Roots and Cube Roots', level: 2 }
    },
    {
      id: 'p-roots',
      type: 'paragraph',
      data: { text: '<strong>Square root</strong> (√): the positive number that squares to give n. E.g. √64 = 8 (since 8² = 64). Note that (−8)² = 64 too, so −8 is the negative square root.<br><br><strong>Cube root</strong> (∛): the number that cubed gives n. E.g. ∛27 = 3 (since 3³ = 27). Cube roots can be negative: ∛(−125) = −5.' }
    },
    {
      id: 'h-fractional',
      type: 'heading',
      data: { text: 'Fractional Indices', level: 2 }
    },
    {
      id: 'list-fractional',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'a<sup>1/2</sup> = √a (square root)' },
          { text: 'a<sup>1/3</sup> = ∛a (cube root)' },
          { text: 'a<sup>1/n</sup> = ⁿ√a (nth root)' },
          { text: 'a<sup>m/n</sup> = (ⁿ√a)ᵐ = ⁿ√(aᵐ) — root first, then power (or vice versa)' }
        ]
      }
    },
    {
      id: 'callout-worked-frac',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Fractional Indices',
        text: 'Evaluate 27<sup>2/3</sup>:<br>Cube root of 27 = 3<br>3² = <strong>9</strong><br><br>Evaluate 16<sup>3/4</sup>:<br>4th root of 16 = 2<br>2³ = <strong>8</strong><br><br>Evaluate 8<sup>−2/3</sup>:<br>∛8 = 2, 2² = 4, so 8<sup>2/3</sup> = 4<br>8<sup>−2/3</sup> = 1/4'
      }
    },
    {
      id: 'callout-key-frac',
      type: 'callout',
      data: { style: 'key', title: 'Key Rule: Fractional Indices', text: 'a<sup>m/n</sup> = (ⁿ√a)ᵐ. The denominator of the fraction is the root; the numerator is the power. Do the <em>root first</em> to keep numbers manageable.' }
    },
    {
      id: 'callout-tip-frac',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Always root first when evaluating a<sup>m/n</sup> — taking the root first usually gives a smaller number to raise to a power, which is easier to compute (especially without a calculator).' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Powers: aⁿ means a multiplied n times. Square root: positive value that squares to n. Cube root: can be negative. Fractional index a<sup>m/n</sup> = (ⁿ√a)ᵐ — root first, then power.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-roots', prompt: 'What is the difference between a square root and a cube root? Can ∛(−8) be evaluated?' },
      { id: 'cue-2', blockId: 'h-fractional', prompt: 'What does a<sup>1/2</sup> mean? What about a<sup>m/n</sup>?' },
      { id: 'cue-3', blockId: 'callout-worked-frac', prompt: 'Evaluate 27<sup>2/3</sup> and 16<sup>3/4</sup> without a calculator.' },
      { id: 'cue-4', blockId: 'callout-tip-frac', prompt: 'When computing a<sup>m/n</sup>, should you take the root first or apply the power first? Why?' }
    ],
    summaryText: 'Fractional index a^(m/n): denominator = root, numerator = power. Do root first. Cube roots of negatives are defined; square roots of negatives are not.',
    ready: true
  },
  evidence: []
};
