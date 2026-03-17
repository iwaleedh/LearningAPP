export const note_olevel_maths_extended_2_7_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/quadratic-simultaneous-equations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve simultaneous equations where one is linear and one is quadratic, using the substitution method.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Quadratic Simultaneous Equations', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When one equation is <strong>linear</strong> and the other is <strong>quadratic</strong> (contains <em>x</em>², <em>y</em>², or <em>xy</em>), the <strong>substitution method</strong> must be used. Elimination will not work because the terms are different degrees.' }
    },
    {
      id: 'callout-key-method',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Method — Always Substitution',
        text: '1. Rearrange the <strong>linear</strong> equation to make <em>x</em> or <em>y</em> the subject<br>2. Substitute this into the <strong>quadratic</strong> equation<br>3. Expand and simplify to get a quadratic in one variable<br>4. Solve the quadratic (factorise or use the formula)<br>5. Substitute each solution back into the <strong>linear</strong> equation to find the matching value<br>6. Write the solutions as <strong>pairs</strong>'
      }
    },
    {
      id: 'h-worked1',
      type: 'heading',
      data: { text: 'Worked Examples', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Solve: &nbsp; ① <em>y</em> = <em>x</em> + 3 &nbsp;&nbsp; ② <em>x</em>² + <em>y</em>² = 29<br><br>Substitute ① into ②:<br><em>x</em>² + (<em>x</em> + 3)² = 29<br><em>x</em>² + <em>x</em>² + 6<em>x</em> + 9 = 29<br>2<em>x</em>² + 6<em>x</em> − 20 = 0<br><em>x</em>² + 3<em>x</em> − 10 = 0<br>(<em>x</em> + 5)(<em>x</em> − 2) = 0<br><br><em>x</em> = −5: &nbsp; <em>y</em> = −5 + 3 = −2<br><em>x</em> = 2: &nbsp;&nbsp; <em>y</em> = 2 + 3 = 5<br><br>Solutions: <strong>(<em>x</em>, <em>y</em>) = (−5, −2) and (2, 5)</strong>'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Solve: &nbsp; ① 2<em>x</em> + <em>y</em> = 7 &nbsp;&nbsp; ② <em>x</em>² + <em>xy</em> = 6<br><br>From ①: <em>y</em> = 7 − 2<em>x</em><br><br>Substitute into ②:<br><em>x</em>² + <em>x</em>(7 − 2<em>x</em>) = 6<br><em>x</em>² + 7<em>x</em> − 2<em>x</em>² = 6<br>−<em>x</em>² + 7<em>x</em> − 6 = 0<br><em>x</em>² − 7<em>x</em> + 6 = 0 &nbsp;&nbsp;(multiply by −1)<br>(<em>x</em> − 1)(<em>x</em> − 6) = 0<br><br><em>x</em> = 1: &nbsp; <em>y</em> = 7 − 2 = 5<br><em>x</em> = 6: &nbsp; <em>y</em> = 7 − 12 = −5<br><br>Solutions: <strong>(1, 5) and (6, −5)</strong>'
      }
    },
    {
      id: 'p-pairs',
      type: 'paragraph',
      data: { text: 'There are usually <strong>two pairs</strong> of solutions (because the quadratic gives two values). Write each solution as a coordinate pair and make sure you match the correct <em>x</em> with the correct <em>y</em>.' }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Substituting into the <strong>quadratic</strong> equation to find <em>y</em> — always substitute back into the <strong>linear</strong> equation (simpler and avoids extra solutions)<br>• Forgetting to expand (<em>x</em> + 3)² properly — it\'s <em>x</em>² + 6<em>x</em> + 9, NOT <em>x</em>² + 9<br>• Mismatching <em>x</em> and <em>y</em> values in the final answer'
      }
    },
    {
      id: 'callout-tip-geometry',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Geometric Interpretation',
        text: 'A linear equation represents a <strong>straight line</strong>; a quadratic represents a <strong>curve</strong> (circle, parabola, or hyperbola). The solutions are the <strong>points of intersection</strong>. Two pairs = two intersection points. If the quadratic has no real solutions, the line doesn\'t intersect the curve.'
      }
    },
    {
      id: 'callout-tip-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always <strong>simplify</strong> the quadratic before solving. Dividing by common factors makes factorising easier (e.g. 2x² + 6x − 20 = 0 &rarr; x² + 3x − 10 = 0).'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'For one linear + one quadratic equation, use substitution: rearrange the linear equation, substitute into the quadratic, solve the resulting quadratic, then substitute back into the linear equation to find matching values. Solutions come in pairs — always state both.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Use substitution only. Rearrange linear &rarr; substitute into quadratic &rarr; solve quadratic &rarr; find matching y (or x) from the linear equation. Two solution pairs.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-method', prompt: 'Why must you use substitution (not elimination) for quadratic simultaneous equations?', answer: 'Because the terms are different degrees — you can\'t match coefficients to eliminate.' },
      { id: 'cue-2', blockId: 'callout-worked1', prompt: 'Solve y = x + 3 and x² + y² = 29.', answer: '(x, y) = (−5, −2) and (2, 5).' },
      { id: 'cue-3', blockId: 'callout-warning', prompt: 'Why should you substitute back into the linear equation, not the quadratic?', answer: 'The linear equation is simpler and won\'t produce extra unwanted solutions.' },
      { id: 'cue-4', blockId: 'callout-tip-geometry', prompt: 'What does it mean geometrically when quadratic simultaneous equations have two solutions?', answer: 'The straight line intersects the curve at two points.' },
      { id: 'cue-5', blockId: 'callout-worked2', prompt: 'Solve 2x + y = 7 and x² + xy = 6.', answer: '(1, 5) and (6, −5).' }
    ]
  },
  evidence: []
};
