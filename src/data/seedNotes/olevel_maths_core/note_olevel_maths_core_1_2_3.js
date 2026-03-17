export const note_olevel_maths_core_1_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/negative-and-directed-numbers.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use directed (negative) numbers in context; add, subtract, multiply, and divide with negative numbers; understand the rules for signs.' }
    },
    {
      id: 'h-context',
      type: 'heading',
      data: { text: 'Negative Numbers in Context', level: 2 }
    },
    {
      id: 'p-context',
      type: 'paragraph',
      data: { text: '<strong>Directed numbers</strong> have both a size (magnitude) and a direction. Negative numbers appear in many real-life situations. Positive direction is often chosen as the "normal" or "above zero" direction.' }
    },
    {
      id: 'list-context',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Temperature:</strong> −5°C means 5 degrees below zero' },
          { text: '<strong>Altitude:</strong> −200 m means 200 m below sea level' },
          { text: '<strong>Money:</strong> −$50 means a debt of $50' },
          { text: '<strong>Floors:</strong> −2 means two floors below ground' }
        ]
      }
    },
    {
      id: 'h-add-sub',
      type: 'heading',
      data: { text: 'Adding and Subtracting Negative Numbers', level: 2 }
    },
    {
      id: 'callout-key-rules',
      type: 'callout',
      data: { style: 'key', title: 'Sign Rules for Addition/Subtraction', text: '+ (+) → Add: &nbsp; 5 + 3 = 8<br>+ (−) → Subtract: &nbsp; 5 + (−3) = 5 − 3 = 2<br>− (+) → Subtract: &nbsp; 5 − 3 = 2<br>− (−) → Add: &nbsp; 5 − (−3) = 5 + 3 = 8<br><br><em>Two negatives next to each other → becomes positive.</em>' }
    },
    {
      id: 'callout-worked-add',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Adding and Subtracting',
        text: '<strong>a)</strong> 4 + (−9) = 4 − 9 = <strong>−5</strong><br><strong>b)</strong> −3 + (−7) = −3 − 7 = <strong>−10</strong><br><strong>c)</strong> 2 − (−5) = 2 + 5 = <strong>7</strong><br><strong>d)</strong> −6 − (−4) = −6 + 4 = <strong>−2</strong><br><br><em>Tip: draw a number line and count left for minus, right for plus.</em>'
      }
    },
    {
      id: 'h-mult-div',
      type: 'heading',
      data: { text: 'Multiplying and Dividing Negative Numbers', level: 2 }
    },
    {
      id: 'callout-key-mult',
      type: 'callout',
      data: { style: 'key', title: 'Sign Rules for Multiplication/Division', text: '(+) × (+) = (+) &nbsp; e.g. 3 × 4 = 12<br>(+) × (−) = (−) &nbsp; e.g. 3 × (−4) = −12<br>(−) × (+) = (−) &nbsp; e.g. −3 × 4 = −12<br>(−) × (−) = (+) &nbsp; e.g. −3 × (−4) = 12<br><br><strong>Same signs → positive. Different signs → negative.</strong><br>The same rules apply to division.' }
    },
    {
      id: 'callout-worked-mult',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Multiplying and Dividing',
        text: '<strong>a)</strong> (−4) × 5 = <strong>−20</strong><br><strong>b)</strong> (−6) × (−3) = <strong>18</strong><br><strong>c)</strong> (−15) ÷ 3 = <strong>−5</strong><br><strong>d)</strong> (−20) ÷ (−4) = <strong>5</strong><br><strong>e)</strong> (−2)<sup>3</sup> = (−2) × (−2) × (−2) = 4 × (−2) = <strong>−8</strong>'
      }
    },
    {
      id: 'callout-tip-even-odd',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Even and Odd Negative Powers', text: 'When raising a negative number to a power:<br>(−n)<sup>even</sup> is always <strong>positive</strong>: (−3)<sup>2</sup> = 9<br>(−n)<sup>odd</sup> is always <strong>negative</strong>: (−3)<sup>3</sup> = −27' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Negative numbers have values below zero. Two negative signs next to each other → addition. Multiplication/division: same signs give +, different signs give −. Remember to count direction carefully on number lines.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-context', prompt: 'Give three real-life examples of negative numbers being used.' },
      { id: 'cue-2', blockId: 'callout-key-rules', prompt: 'What does − (−) equal? Calculate 8 − (−3).' },
      { id: 'cue-3', blockId: 'callout-worked-add', prompt: 'Calculate: (a) −4 + (−6), (b) 3 − (−7).' },
      { id: 'cue-4', blockId: 'callout-key-mult', prompt: 'What is the rule for signs when multiplying? What is (−5) × (−4)?' },
      { id: 'cue-5', blockId: 'callout-tip-even-odd', prompt: 'What is (−2)⁴? What is (−2)⁵? Explain why one is positive and one is negative.' }
    ],
    summaryText: 'Directed numbers: −(−) = +; same signs multiply/divide → positive; different signs → negative.',
    ready: true
  },
  evidence: []
};
