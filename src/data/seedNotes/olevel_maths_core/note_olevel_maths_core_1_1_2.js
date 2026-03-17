export const note_olevel_maths_core_1_1_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/squares-cubes-and-roots.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate squares, cubes, square roots, and cube roots; identify perfect squares and perfect cubes.' }
    },
    {
      id: 'h-squares',
      type: 'heading',
      data: { text: 'Square Numbers', level: 2 }
    },
    {
      id: 'p-squares',
      type: 'paragraph',
      data: { text: 'When you multiply a number by itself, the result is a <strong>square number</strong>. We write n<sup>2</sup> to mean "n squared". A number is a <strong>perfect square</strong> if it is the square of an integer.' }
    },
    {
      id: 'list-squares',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '1<sup>2</sup> = 1, &nbsp;2<sup>2</sup> = 4, &nbsp;3<sup>2</sup> = 9, &nbsp;4<sup>2</sup> = 16, &nbsp;5<sup>2</sup> = 25' },
          { text: '6<sup>2</sup> = 36, &nbsp;7<sup>2</sup> = 49, &nbsp;8<sup>2</sup> = 64, &nbsp;9<sup>2</sup> = 81, &nbsp;10<sup>2</sup> = 100' },
          { text: '11<sup>2</sup> = 121, &nbsp;12<sup>2</sup> = 144, &nbsp;13<sup>2</sup> = 169, &nbsp;15<sup>2</sup> = 225' }
        ]
      }
    },
    {
      id: 'h-cubes',
      type: 'heading',
      data: { text: 'Cube Numbers', level: 2 }
    },
    {
      id: 'p-cubes',
      type: 'paragraph',
      data: { text: 'When you multiply a number by itself twice, the result is a <strong>cube number</strong>. We write n<sup>3</sup> to mean "n cubed". A number is a <strong>perfect cube</strong> if it is the cube of an integer.' }
    },
    {
      id: 'list-cubes',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '1<sup>3</sup> = 1, &nbsp;2<sup>3</sup> = 8, &nbsp;3<sup>3</sup> = 27, &nbsp;4<sup>3</sup> = 64' },
          { text: '5<sup>3</sup> = 125, &nbsp;6<sup>3</sup> = 216, &nbsp;7<sup>3</sup> = 343, &nbsp;10<sup>3</sup> = 1000' }
        ]
      }
    },
    {
      id: 'h-sqrt',
      type: 'heading',
      data: { text: 'Square Roots', level: 2 }
    },
    {
      id: 'p-sqrt',
      type: 'paragraph',
      data: { text: 'The <strong>square root</strong> of a number n is the value that, when squared, gives n. We write √n. Every positive number has two square roots (positive and negative), but √n refers to the <em>positive</em> root.' }
    },
    {
      id: 'callout-key-roots',
      type: 'callout',
      data: { style: 'key', title: 'Square Root and Cube Root', text: '√n = the positive number whose square is n<br>e.g. √25 = 5 &nbsp;(since 5 × 5 = 25)<br><br>∛n = the number whose cube is n<br>e.g. ∛8 = 2 &nbsp;(since 2 × 2 × 2 = 8)<br>e.g. ∛−27 = −3 &nbsp;(cube roots can be negative)' }
    },
    {
      id: 'h-cuberoots',
      type: 'heading',
      data: { text: 'Cube Roots', level: 2 }
    },
    {
      id: 'p-cuberoots',
      type: 'paragraph',
      data: { text: 'The <strong>cube root</strong> (∛n) is the number that must be cubed to get n. Unlike square roots, cube roots exist for negative numbers too: ∛(−8) = −2.' }
    },
    {
      id: 'callout-tip-calc',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Calculator Use', text: 'On your calculator, use x<sup>2</sup> for squaring and √ for square root. For cube: use x<sup>3</sup> or x<sup>y</sup> with y = 3. For cube root use ∛ button or x<sup>y</sup> with y = 1/3.<br>Memorise squares 1–15 and cubes 1–10 for non-calculator questions.' }
    },
    {
      id: 'callout-worked-roots',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '<strong>a)</strong> Calculate √144<br>→ 12<sup>2</sup> = 144, so √144 = <strong>12</strong><br><br><strong>b)</strong> Calculate ∛125<br>→ 5<sup>3</sup> = 125, so ∛125 = <strong>5</strong><br><br><strong>c)</strong> Is 196 a perfect square?<br>→ √196 = 14 (since 14 × 14 = 196) → <strong>Yes</strong><br><br><strong>d)</strong> Estimate √50 without a calculator<br>→ 7<sup>2</sup> = 49, 8<sup>2</sup> = 64, so √50 ≈ <strong>7.07</strong>'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'n<sup>2</sup> means n × n (square); n<sup>3</sup> means n × n × n (cube). √n is the positive square root; ∛n is the cube root. Know squares 1–15 and cubes 1–10. Square roots of negative numbers do not exist in real numbers.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-squares', prompt: 'What is 13 squared? What is 7 squared?' },
      { id: 'cue-2', blockId: 'h-cubes', prompt: 'What is 4 cubed? What is 5 cubed?' },
      { id: 'cue-3', blockId: 'h-sqrt', prompt: 'What is √169? What is √225?' },
      { id: 'cue-4', blockId: 'h-cuberoots', prompt: 'What is ∛27? Can cube roots be negative?' },
      { id: 'cue-5', blockId: 'callout-worked-roots', prompt: 'Is 72 a perfect square? How do you check?' }
    ],
    summaryText: 'Squares (n²) and cubes (n³) are found by repeated multiplication; square roots (√) and cube roots (∛) reverse these operations.',
    ready: true
  },
  evidence: []
};
