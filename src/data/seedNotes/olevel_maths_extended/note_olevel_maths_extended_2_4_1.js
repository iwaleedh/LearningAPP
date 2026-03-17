export const note_olevel_maths_extended_2_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/solving-linear-inequalities.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve linear inequalities; represent solutions on a number line using open and closed circles; understand the effect of multiplying or dividing by a negative number.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Linear Inequalities', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'An <strong>inequality</strong> compares expressions using &lt;, &gt;, ≤, or ≥ instead of =. Solving an inequality is very similar to solving an equation, with one critical difference when multiplying or dividing by a negative.' }
    },
    {
      id: 'callout-key-symbols',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Inequality Symbols',
        text: '&lt; means "less than" (strict)<br>&gt; means "greater than" (strict)<br>≤ means "less than or equal to"<br>≥ means "greater than or equal to"<br><br>On a number line:<br>• <strong>Open circle ○</strong> = strict (&lt; or &gt;) — value NOT included<br>• <strong>Closed circle ●</strong> = non-strict (≤ or ≥) — value IS included'
      }
    },
    {
      id: 'h-solving',
      type: 'heading',
      data: { text: 'Solving Inequalities', level: 2 }
    },
    {
      id: 'p-solving',
      type: 'paragraph',
      data: { text: 'Solve just like equations: use inverse operations to isolate the variable. The inequality sign stays the same direction — unless you multiply or divide by a <strong>negative number</strong>.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Solve 3<em>x</em> + 5 &lt; 20<br><br>3<em>x</em> &lt; 20 − 5<br>3<em>x</em> &lt; 15<br><em>x</em> &lt; 5<br><br>Number line: open circle at 5, arrow pointing left.'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Both Sides',
        text: 'Solve 7<em>x</em> − 4 ≥ 3<em>x</em> + 8<br><br>7<em>x</em> − 3<em>x</em> ≥ 8 + 4<br>4<em>x</em> ≥ 12<br><em>x</em> ≥ 3<br><br>Number line: closed circle at 3, arrow pointing right.'
      }
    },
    {
      id: 'h-negative',
      type: 'heading',
      data: { text: 'Multiplying/Dividing by a Negative', level: 2 }
    },
    {
      id: 'callout-warning-flip',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'CRITICAL RULE — Flip the Sign',
        text: 'When you <strong>multiply or divide both sides by a negative number</strong>, the inequality sign <strong>reverses</strong>.<br><br>Example: −2<em>x</em> &gt; 6<br>Divide by −2 (flip the sign): <em>x</em> <strong>&lt;</strong> −3<br><br>Why? If −2 &gt; −5, then 2 &lt; 5. Multiplying by −1 reverses the order.'
      }
    },
    {
      id: 'callout-worked-flip',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Solve 4 − 3<em>x</em> ≤ 13<br><br>−3<em>x</em> ≤ 13 − 4<br>−3<em>x</em> ≤ 9<br><em>x</em> ≥ −3 &nbsp;&nbsp;(÷ −3 flips ≤ to ≥)<br><br>Number line: closed circle at −3, arrow pointing right.'
      }
    },
    {
      id: 'h-double',
      type: 'heading',
      data: { text: 'Double Inequalities', level: 2 }
    },
    {
      id: 'callout-worked-double',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4',
        text: 'Solve −3 &lt; 2<em>x</em> + 1 ≤ 9<br><br>Subtract 1 from all three parts:<br>−4 &lt; 2<em>x</em> ≤ 8<br><br>Divide all three parts by 2:<br>−2 &lt; <em>x</em> ≤ 4<br><br>This means <em>x</em> is greater than −2 (not included) and less than or equal to 4 (included).'
      }
    },
    {
      id: 'callout-tip-integer',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Integer Values',
        text: 'If asked "list the integer values of <em>n</em> satisfying −2 &lt; <em>n</em> ≤ 4", the answer is: −1, 0, 1, 2, 3, 4. Note: −2 is NOT included (&lt;) but 4 IS included (≤).'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Solve inequalities like equations but <strong>flip the sign when multiplying/dividing by a negative</strong>. Use open circles (○) for &lt; and &gt;, closed circles (●) for ≤ and ≥ on number lines. For double inequalities, apply operations to all three parts.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Solve inequalities like equations but flip the sign when multiplying/dividing by a negative number.',
    cues: [
      { id: 'cue-1', blockId: 'callout-warning-flip', prompt: 'When must you reverse the inequality sign?', answer: 'When you multiply or divide both sides by a negative number.' },
      { id: 'cue-2', blockId: 'callout-key-symbols', prompt: 'What do open and closed circles mean on a number line?', answer: 'Open circle = not included (< or >). Closed circle = included (≤ or ≥).' },
      { id: 'cue-3', blockId: 'callout-worked-flip', prompt: 'Solve 4 − 3x ≤ 13.', answer: '−3x ≤ 9, so x ≥ −3 (flip the sign when dividing by −3).' },
      { id: 'cue-4', blockId: 'callout-tip-integer', prompt: 'List integer values satisfying −2 < n ≤ 4.', answer: '−1, 0, 1, 2, 3, 4' }
    ]
  },
  evidence: []
};
