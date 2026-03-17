export const note_olevel_maths_core_2_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/simplifying-algebraic-fractions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Simplify algebraic fractions by cancelling common factors from numerator and denominator, including expressions with variables and powers.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'Simplifying Algebraic Fractions', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: 'An <strong>algebraic fraction</strong> is a fraction where the numerator or denominator (or both) contains a variable. We simplify them the same way as numerical fractions — by finding and cancelling <strong>common factors</strong>.' }
    },
    {
      id: 'h-coefficients',
      type: 'heading',
      data: { text: 'Step 1: Cancel Numerical Coefficients', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Cancelling Coefficients',
        text: 'Simplify <span class="nb-frac"><span class="nb-num">6x</span><span class="nb-den">3</span></span><br><br>The HCF of 6 and 3 is 3.<br>Divide numerator and denominator by 3:<br><span class="nb-frac"><span class="nb-num">6x ÷ 3</span><span class="nb-den">3 ÷ 3</span></span> = <span class="nb-frac"><span class="nb-num">2x</span><span class="nb-den">1</span></span> = <strong>2x</strong><br><br>Simplify <span class="nb-frac"><span class="nb-num">8y</span><span class="nb-den">12</span></span><br>HCF(8, 12) = 4<br><span class="nb-frac"><span class="nb-num">8y</span><span class="nb-den">12</span></span> = <span class="nb-frac"><span class="nb-num">2y</span><span class="nb-den">3</span></span>'
      }
    },
    {
      id: 'h-variables',
      type: 'heading',
      data: { text: 'Step 2: Cancel Variable Factors', level: 2 }
    },
    {
      id: 'p-variables',
      type: 'paragraph',
      data: { text: 'Variables can also be cancelled. If the same variable appears in both the numerator and denominator, divide both by the lower power of that variable.' }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Rule: Cancelling Variables',
        text: '<span class="nb-frac"><span class="nb-num">x<sup>m</sup></span><span class="nb-den">x<sup>n</sup></span></span> = x<sup>m − n</sup> (using the division index law)<br><br>Or think of it as cancelling: x² / x = x (one x cancels from each)<br><br><span class="nb-frac"><span class="nb-num">x<sup>5</sup></span><span class="nb-den">x<sup>3</sup></span></span> = x² &nbsp;&nbsp; <span class="nb-frac"><span class="nb-num">x²</span><span class="nb-den">x</span></span> = x &nbsp;&nbsp; <span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">x</span></span> = 1'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Cancelling Variables',
        text: 'Simplify <span class="nb-frac"><span class="nb-num">x²</span><span class="nb-den">x</span></span><br><br>= x<sup>2−1</sup> = <strong>x</strong><br><br>Simplify <span class="nb-frac"><span class="nb-num">12x⁵</span><span class="nb-den">4x²</span></span><br><br>Step 1 — cancel coefficients: 12 ÷ 4 = 3<br>Step 2 — cancel variables: x⁵ ÷ x² = x³<br>Result: <strong>3x³</strong><br><br>Simplify <span class="nb-frac"><span class="nb-num">6a³b²</span><span class="nb-den">3ab</span></span><br><br>Cancel 6/3 = 2; a³/a = a²; b²/b = b<br>Result: <strong>2a²b</strong>'
      }
    },
    {
      id: 'h-brackets',
      type: 'heading',
      data: { text: 'Cancelling Bracket Factors', level: 2 }
    },
    {
      id: 'p-brackets',
      type: 'paragraph',
      data: { text: 'If the same bracket appears in both numerator and denominator, it can be cancelled — just like cancelling a common variable factor.' }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Cancelling Brackets',
        text: 'Simplify <span class="nb-frac"><span class="nb-num">3(x + 2)</span><span class="nb-den">x + 2</span></span><br><br>The factor (x + 2) appears in both numerator and denominator.<br><span class="nb-frac"><span class="nb-num">3<s>(x + 2)</s></span><span class="nb-den"><s>(x + 2)</s></span></span> = <strong>3</strong><br><br>Simplify <span class="nb-frac"><span class="nb-num">(x + 5)(x − 1)</span><span class="nb-den">(x + 5)</span></span><br><br>Cancel (x + 5): result = <strong>(x − 1)</strong>'
      }
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Cannot Cancel Terms — Only Factors!',
        text: 'You can ONLY cancel factors that are multiplied, not terms that are added/subtracted.<br><br>❌ WRONG: <span class="nb-frac"><span class="nb-num">x + 6</span><span class="nb-den">6</span></span> ≠ x + 1 (you cannot cancel the 6)<br><br>✓ CORRECT: <span class="nb-frac"><span class="nb-num">6x</span><span class="nb-den">6</span></span> = x (6 is a multiplicative factor here)<br><br>The 6 in (x + 6) is being <em>added</em>, not multiplied — it is not a common factor.'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Domain Restrictions',
        text: 'Strictly, when simplifying <span class="nb-frac"><span class="nb-num">(x+2)</span><span class="nb-den">(x+2)</span></span> = 1, this is only valid when x ≠ −2 (to avoid dividing by zero). In IGCSE exams you may not need to state this unless asked, but be aware of it.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I cancel numerical coefficients by finding HCF', checked: false },
          { text: 'I cancel variable factors using the division index law', checked: false },
          { text: 'I can cancel bracket factors when they appear in both numerator and denominator', checked: false },
          { text: 'I know I can only cancel multiplicative factors, not added terms', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Simplify algebraic fractions by cancelling <strong>common factors</strong> (not terms!) from numerator and denominator. Cancel coefficients using HCF, cancel variable powers using the division index law (x<sup>m</sup>/x<sup>n</sup> = x<sup>m−n</sup>), and cancel bracket factors when the same bracket appears on top and bottom.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-worked1', prompt: 'Simplify 6x/3. Show the step of dividing numerator and denominator.' },
      { id: 'cue-2', blockId: 'callout-worked2', prompt: 'Simplify 12x⁵ / 4x². What are the two steps?' },
      { id: 'cue-3', blockId: 'callout-warning1', prompt: 'Can you simplify (x+6)/6 to (x+1)? Why or why not?' },
      { id: 'cue-4', blockId: 'callout-worked3', prompt: 'Simplify 3(x+2)/(x+2). Explain which factor is cancelled.' },
      { id: 'cue-5', blockId: 'callout-key1', prompt: 'Using the index law, simplify x⁵/x³.' },
    ],
    summaryText: 'Cancel only multiplicative common factors (not added terms) from top and bottom of algebraic fractions — coefficients, variable powers, and bracket factors.',
    ready: true,
  },
  evidence: [],
};
