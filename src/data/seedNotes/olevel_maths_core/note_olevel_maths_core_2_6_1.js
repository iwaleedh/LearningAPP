export const note_olevel_maths_core_2_6_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/equations-with-brackets-and-fractions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve linear equations that include brackets (expand first) and equations with fractional terms (multiply through by LCD to clear fractions).' }
    },
    {
      id: 'h-brackets',
      type: 'heading',
      data: { text: 'Equations with Brackets', level: 2 }
    },
    {
      id: 'p-brackets',
      type: 'paragraph',
      data: { text: 'When an equation contains brackets, the standard approach is to <strong>expand the brackets first</strong>, then collect like terms on each side, then solve using the balance method.' }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Brackets in Equations',
        text: '<strong>(a)</strong> 3(x + 4) = 21<br>Expand: 3x + 12 = 21<br>Subtract 12: 3x = 9<br>Divide by 3: x = <strong>3</strong><br>Check: 3(3+4) = 3(7) = 21 ✓<br><br><strong>(b)</strong> 2(3x − 5) + 4 = 18<br>Expand: 6x − 10 + 4 = 18<br>Collect: 6x − 6 = 18<br>Add 6: 6x = 24<br>Divide by 6: x = <strong>4</strong><br><br><strong>(c)</strong> 5(2x + 1) − 3(x + 4) = 17<br>Expand: 10x + 5 − 3x − 12 = 17<br>Collect: 7x − 7 = 17<br>Add 7: 7x = 24<br>Divide: x = <strong><span class="nb-frac"><span class="nb-num">24</span><span class="nb-den">7</span></span></strong>'
      }
    },
    {
      id: 'h-fractions',
      type: 'heading',
      data: { text: 'Equations with Fractions', level: 2 }
    },
    {
      id: 'p-fractions',
      type: 'paragraph',
      data: { text: 'To solve equations with fractional terms, <strong>multiply every term by the LCD</strong> (lowest common denominator) to eliminate all fractions, then solve normally.' }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Method: Clearing Fractions',
        text: '1. Find the LCD of all denominators.<br>2. Multiply <strong>every term</strong> on both sides by the LCD.<br>3. This clears all fractions — simplify and solve.<br><br>Example: <span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">3</span></span> + 2 = 5 → LCD = 3<br>Multiply all by 3: x + 6 = 15 → x = 9'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Simple Fractional Equations',
        text: '<strong>(a)</strong> <span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">3</span></span> + 2 = 5<br>Multiply all by 3: x + 6 = 15<br>Subtract 6: x = <strong>9</strong><br>Check: 9/3 + 2 = 3 + 2 = 5 ✓<br><br><strong>(b)</strong> <span class="nb-frac"><span class="nb-num">2x − 1</span><span class="nb-den">4</span></span> = 3<br>Multiply all by 4: 2x − 1 = 12<br>Add 1: 2x = 13<br>Divide by 2: x = <strong>6.5</strong>'
      }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Multiple Fractions',
        text: 'Solve <span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">2</span></span> + <span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">3</span></span> = 5<br><br>LCD of 2 and 3 is 6.<br>Multiply EVERY term by 6:<br>6 × <span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">2</span></span> + 6 × <span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">3</span></span> = 6 × 5<br>3x + 2x = 30<br>5x = 30<br>x = <strong>6</strong><br>Check: 6/2 + 6/3 = 3 + 2 = 5 ✓'
      }
    },
    {
      id: 'h-combined',
      type: 'heading',
      data: { text: 'Combined: Brackets and Fractions', level: 2 }
    },
    {
      id: 'callout-worked4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Combined',
        text: 'Solve <span class="nb-frac"><span class="nb-num">3(x + 1)</span><span class="nb-den">4</span></span> = 9<br><br>Multiply both sides by 4:<br>3(x + 1) = 36<br>Expand: 3x + 3 = 36<br>Subtract 3: 3x = 33<br>Divide by 3: x = <strong>11</strong><br>Check: 3(12)/4 = 36/4 = 9 ✓'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Multiply ALL Terms by the LCD',
        text: 'A common error is forgetting to multiply the <em>whole number</em> terms as well as the fractions.<br><br><span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">3</span></span> + 2 = 5 → multiply by 3:<br>Every term × 3: x + <strong>6</strong> = <strong>15</strong><br>Do NOT just multiply the fraction: x + 2 = 15 ✗'
      }
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Fractional Answers are Fine!',
        text: 'Linear equations can have fractional or decimal answers — do not assume the answer must be a whole number. For example x = 24/7 is a perfectly valid answer. Leave as a fraction unless told to give a decimal.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I expand brackets first, then collect terms, then balance', checked: false },
          { text: 'I find the LCD of all fractional denominators', checked: false },
          { text: 'I multiply EVERY term (including integer terms) by the LCD', checked: false },
          { text: 'I can solve equations with both brackets and fractions', checked: false },
          { text: 'I check my answer by substituting back', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'For equations with <strong>brackets</strong>: expand first, collect like terms, then balance. For equations with <strong>fractions</strong>: multiply every term by the LCD to clear fractions, then solve. When both are present, clear fractions first, then expand brackets.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-worked1', prompt: 'Solve 5(2x + 1) − 3(x + 4) = 17. What do you do first?' },
      { id: 'cue-2', blockId: 'callout-key1', prompt: 'What is the method for clearing fractions from an equation?' },
      { id: 'cue-3', blockId: 'callout-worked3', prompt: 'Solve x/2 + x/3 = 5. What is the LCD and what do you multiply?' },
      { id: 'cue-4', blockId: 'callout-tip1', prompt: 'Solve x/3 + 2 = 5. What happens to the 2 when you multiply by 3?' },
      { id: 'cue-5', blockId: 'callout-worked4', prompt: 'Solve 3(x+1)/4 = 9. Describe each step.' },
    ],
    summaryText: 'Equations with brackets: expand first. Equations with fractions: multiply all terms by the LCD to clear fractions, then solve.',
    ready: true,
  },
  evidence: [],
};
