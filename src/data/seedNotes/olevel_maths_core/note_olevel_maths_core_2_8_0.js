export const note_olevel_maths_core_2_8_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/interpreting-inequalities.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand inequality notation, interpret inequality statements, list integer solutions, and solve simple linear inequalities.' }
    },
    {
      id: 'h-symbols',
      type: 'heading',
      data: { text: 'Inequality Symbols', level: 2 }
    },
    {
      id: 'tbl-symbols',
      type: 'comparisonTable',
      data: {
        caption: 'Inequality symbols and their meanings',
        headers: ['Symbol', 'Meaning', 'Example', 'Reading'],
        rows: [
          ['>', 'greater than', '7 > 3', '"7 is greater than 3"'],
          ['<', 'less than', '−2 < 5', '"−2 is less than 5"'],
          ['≥', 'greater than or equal to', 'x ≥ 4', '"x is at least 4"'],
          ['≤', 'less than or equal to', 'x ≤ 10', '"x is at most 10"'],
        ]
      }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Memory Trick: which way does the symbol point?',
        text: 'The <strong>open end</strong> of the inequality sign always faces the <strong>larger value</strong>.<br>7 <strong>></strong> 3: the open end points to 7 (the bigger one).<br>A good trick: the symbol looks like a hungry alligator mouth — the mouth (open end) eats the bigger number.'
      }
    },
    {
      id: 'h-interpret',
      type: 'heading',
      data: { text: 'Interpreting Inequalities', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Interpreting and Listing Integer Solutions',
        text: '<strong>(a)</strong> x > 3 means x can be any value greater than 3 (not including 3).<br>Integer solutions: 4, 5, 6, 7, ...<br><br><strong>(b)</strong> x ≤ −1 means x is at most −1 (including −1).<br>Integer solutions: ..., −4, −3, −2, −1<br><br><strong>(c)</strong> −2 < x ≤ 5 means x is greater than −2 AND at most 5.<br>Integer solutions: −1, 0, 1, 2, 3, 4, 5 (7 values)<br><br><strong>(d)</strong> −3 ≤ x < 2, x is an integer. List the values.<br>x = −3, −2, −1, 0, 1 (5 values)'
      }
    },
    {
      id: 'h-solving',
      type: 'heading',
      data: { text: 'Solving Simple Linear Inequalities', level: 2 }
    },
    {
      id: 'p-solving',
      type: 'paragraph',
      data: { text: 'Solving inequalities follows almost the same steps as solving equations, with one critical exception: <strong>when you multiply or divide both sides by a negative number, you must reverse the inequality sign.</strong>' }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Solving Inequalities',
        text: '<strong>(a)</strong> Solve 3x − 5 > 7<br>3x > 12<br>x > <strong>4</strong><br><br><strong>(b)</strong> Solve 2x + 3 ≤ 11<br>2x ≤ 8<br>x ≤ <strong>4</strong><br><br><strong>(c)</strong> Solve 14 − 3x > 2 (dividing by negative, so flip!)<br>−3x > 2 − 14<br>−3x > −12<br>x < <strong>4</strong> ← sign reverses when dividing by −3<br><br><strong>(d)</strong> Solve 5 ≤ 2x − 1 < 13<br>Add 1 throughout: 6 ≤ 2x < 14<br>Divide by 2: <strong>3 ≤ x < 7</strong>'
      }
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: Flipping the Sign',
        text: 'When solving −2x > 8, pupils often forget to flip:<br><br>❌ Wrong: Divide by −2 → x > −4<br>✅ Correct: Divide by −2 → x <strong><</strong> −4 (flip the sign!)<br><br>One memory strategy: any time you see a <strong>negative multiplier or divisor</strong>, tell yourself "flip it!"'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: "≤" Includes the Endpoint',
        text: 'Know whether the endpoint is <strong>included</strong>:<br>• x > 4: 4 is <strong>not</strong> included (open inequality)<br>• x ≥ 4: 4 <strong>is</strong> included<br><br>This affects which integers you list — if asked for integer solutions of x > 4, the smallest is 5, not 4.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can correctly read and write >, <, ≥, ≤ symbols', checked: false },
          { text: 'I can list integer solutions of a given inequality', checked: false },
          { text: 'I solve inequalities using the same steps as equations', checked: false },
          { text: 'I remember to flip the inequality sign when dividing/multiplying by a negative', checked: false },
          { text: 'I can solve double inequalities such as −2 < x ≤ 5', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Inequalities use >, <, ≥, ≤ to compare quantities. Solve them like equations, but <strong>reverse the inequality sign when multiplying or dividing by a negative number</strong>. ≤ and ≥ include the boundary value; < and > do not.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'tbl-symbols', prompt: 'What is the difference between x > 3 and x ≥ 3? Give an example of an integer that satisfies one but not the other.' },
      { id: 'cue-2', blockId: 'callout-worked1', prompt: 'List the integer solutions of −2 < x ≤ 5.' },
      { id: 'cue-3', blockId: 'callout-worked2', prompt: 'Solve 14 − 3x > 2. What happens to the inequality sign and why?' },
      { id: 'cue-4', blockId: 'callout-warning1', prompt: 'Why do you flip the inequality sign when dividing by a negative number?' },
      { id: 'cue-5', blockId: 'callout-worked2', prompt: 'Solve the double inequality 5 ≤ 2x − 1 < 13.' },
    ],
    summaryText: 'Solve inequalities like equations but flip the sign when multiplying or dividing by a negative. ≥ and ≤ include the endpoint; > and < do not.',
    ready: true,
  },
  evidence: [],
};
