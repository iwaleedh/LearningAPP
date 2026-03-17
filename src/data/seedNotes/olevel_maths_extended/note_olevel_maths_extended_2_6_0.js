export const note_olevel_maths_extended_2_6_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/formulas-where-subject-appears-once.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Rearrange formulas to change the subject when the required variable appears only once; apply inverse operations in the correct order.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Rearranging Formulas — Subject Appears Once', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The <strong>subject</strong> of a formula is the variable on its own on one side of the equation. Rearranging means performing inverse operations to isolate a different variable.' }
    },
    {
      id: 'callout-key-principle',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Principle',
        text: 'Whatever you do to one side of the formula, you <strong>must do to the other side</strong>. Undo operations in <strong>reverse order</strong> — start with the outermost operation.'
      }
    },
    {
      id: 'h-linear',
      type: 'heading',
      data: { text: 'Linear Rearrangements', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Make <em>b</em> the subject of <em>a</em> = 3<em>b</em> + <em>c</em><br><br>Subtract <em>c</em>: &nbsp; <em>a</em> − <em>c</em> = 3<em>b</em><br>Divide by 3: &nbsp; <em>b</em> = <span class="nb-frac"><span class="nb-num"><em>a</em> − <em>c</em></span><span class="nb-den">3</span></span>'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Subject in a Fraction',
        text: 'Make <em>r</em> the subject of <em>V</em> = <span class="nb-frac"><span class="nb-num"><em>r</em> − 3</span><span class="nb-den">5</span></span><br><br>Multiply by 5: &nbsp; 5<em>V</em> = <em>r</em> − 3<br>Add 3: &nbsp; <em>r</em> = 5<em>V</em> + 3'
      }
    },
    {
      id: 'h-powers',
      type: 'heading',
      data: { text: 'Involving Powers and Roots', level: 2 }
    },
    {
      id: 'p-powers',
      type: 'paragraph',
      data: { text: 'To undo a <strong>square</strong>, take the <strong>square root</strong>. To undo a <strong>square root</strong>, <strong>square</strong> both sides. Get the squared/rooted term on its own first.' }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Undoing a Square',
        text: 'Make <em>r</em> the subject of <em>A</em> = π<em>r</em>²<br><br>Divide by π: &nbsp; <span class="nb-frac"><span class="nb-num"><em>A</em></span><span class="nb-den">π</span></span> = <em>r</em>²<br><br>Square root: &nbsp; <em>r</em> = √(<span class="nb-frac"><span class="nb-num"><em>A</em></span><span class="nb-den">π</span></span>)'
      }
    },
    {
      id: 'callout-worked4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Undoing a Square Root',
        text: 'Make <em>h</em> the subject of <em>T</em> = 2π√(<span class="nb-frac"><span class="nb-num"><em>h</em></span><span class="nb-den"><em>g</em></span></span>)<br><br>Divide by 2π: &nbsp; <span class="nb-frac"><span class="nb-num"><em>T</em></span><span class="nb-den">2π</span></span> = √(<span class="nb-frac"><span class="nb-num"><em>h</em></span><span class="nb-den"><em>g</em></span></span>)<br><br>Square both sides: &nbsp; (<span class="nb-frac"><span class="nb-num"><em>T</em></span><span class="nb-den">2π</span></span>)² = <span class="nb-frac"><span class="nb-num"><em>h</em></span><span class="nb-den"><em>g</em></span></span><br><br>Multiply by <em>g</em>: &nbsp; <em>h</em> = <em>g</em>(<span class="nb-frac"><span class="nb-num"><em>T</em></span><span class="nb-den">2π</span></span>)²'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'When undoing a fraction, multiply the <strong>whole</strong> other side — not just one term.<br><br>✘ If <em>y</em> = <span class="nb-frac"><span class="nb-num"><em>x</em> + 3</span><span class="nb-den">2</span></span>, the next step is 2<em>y</em> = <em>x</em> + 3, NOT <em>y</em> = <em>x</em> + <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">2</span></span>.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Think of the formula as a flow chart: subject &rarr; operations &rarr; answer. To reverse it, undo each operation in reverse order.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To make a variable the subject: undo operations in reverse order using inverse operations. Squares are undone by square roots and vice versa. Whatever you do to one side, you must do to the other. Get the target variable isolated on one side.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Rearrange formulas by undoing operations in reverse order. Use inverse operations: add ↔ subtract, multiply ↔ divide, square ↔ square root.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-principle', prompt: 'What is the key principle when rearranging formulas?', answer: 'Whatever you do to one side, you must do to the other side. Undo in reverse order.' },
      { id: 'cue-2', blockId: 'callout-worked3', prompt: 'Make r the subject of A = πr².', answer: 'Divide by π, then square root: r = √(A/π).' },
      { id: 'cue-3', blockId: 'callout-worked1', prompt: 'Make b the subject of a = 3b + c.', answer: 'b = (a − c) / 3.' },
      { id: 'cue-4', blockId: 'p-powers', prompt: 'How do you undo a square root in a formula?', answer: 'Square both sides.' },
      { id: 'cue-5', blockId: 'callout-worked4', prompt: 'Make h the subject of T = 2π√(h/g).', answer: 'h = g(T / 2π)².' }
    ]
  },
  evidence: []
};
