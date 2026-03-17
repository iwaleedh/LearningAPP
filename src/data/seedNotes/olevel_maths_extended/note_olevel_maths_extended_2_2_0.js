export const note_olevel_maths_extended_2_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/algebraic-roots-and-indices.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply the laws of indices to simplify algebraic expressions involving integer, fractional, and negative exponents.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Laws of Indices', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The <strong>laws of indices</strong> (index laws) allow you to simplify expressions involving powers. These rules apply when the <em>base</em> is the same.' }
    },
    {
      id: 'callout-key-laws',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Seven Laws of Indices',
        text: '1. <strong>Multiplication:</strong> <em>a<sup>m</sup></em> × <em>a<sup>n</sup></em> = <em>a</em><sup><em>m</em>+<em>n</em></sup><br>2. <strong>Division:</strong> <em>a<sup>m</sup></em> ÷ <em>a<sup>n</sup></em> = <em>a</em><sup><em>m</em>−<em>n</em></sup><br>3. <strong>Power of a power:</strong> (<em>a<sup>m</sup></em>)<sup><em>n</em></sup> = <em>a</em><sup><em>mn</em></sup><br>4. <strong>Zero index:</strong> <em>a</em>⁰ = 1 &nbsp;(for <em>a</em> ≠ 0)<br>5. <strong>Negative index:</strong> <em>a</em><sup>−<em>n</em></sup> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den"><em>a<sup>n</sup></em></span></span><br>6. <strong>Fractional index (root):</strong> <em>a</em><sup><span class="nb-frac"><span class="nb-num">1</span><span class="nb-den"><em>n</em></span></span></sup> = <sup><em>n</em></sup>√<em>a</em><br>7. <strong>Fractional index (root + power):</strong> <em>a</em><sup><span class="nb-frac"><span class="nb-num"><em>m</em></span><span class="nb-den"><em>n</em></span></span></sup> = (<sup><em>n</em></sup>√<em>a</em>)<sup><em>m</em></sup>'
      }
    },
    {
      id: 'h-multiply',
      type: 'heading',
      data: { text: 'Multiplying and Dividing with Indices', level: 2 }
    },
    {
      id: 'callout-worked-mult',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Multiplication',
        text: 'Simplify 3<em>x</em>⁴ × 5<em>x</em>³<br><br>Multiply coefficients: 3 × 5 = 15<br>Add indices: <em>x</em><sup>4+3</sup> = <em>x</em>⁷<br><br>Answer: <strong>15<em>x</em>⁷</strong>'
      }
    },
    {
      id: 'callout-worked-div',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Division',
        text: 'Simplify <span class="nb-frac"><span class="nb-num">12<em>x</em>⁵</span><span class="nb-den">4<em>x</em>²</span></span><br><br>Divide coefficients: 12 ÷ 4 = 3<br>Subtract indices: <em>x</em><sup>5−2</sup> = <em>x</em>³<br><br>Answer: <strong>3<em>x</em>³</strong>'
      }
    },
    {
      id: 'h-negative',
      type: 'heading',
      data: { text: 'Negative Indices', level: 2 }
    },
    {
      id: 'p-negative',
      type: 'paragraph',
      data: { text: 'A negative index means "one over" (the reciprocal). It does <em>not</em> make the answer negative.' }
    },
    {
      id: 'callout-worked-neg',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Negative Indices',
        text: 'Simplify 2<em>x</em><sup>−3</sup><br><br>= <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den"><em>x</em>³</span></span><br><br>Evaluate 5<sup>−2</sup><br>= <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">5²</span></span> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">25</span></span>'
      }
    },
    {
      id: 'h-fractional',
      type: 'heading',
      data: { text: 'Fractional Indices', level: 2 }
    },
    {
      id: 'p-fractional',
      type: 'paragraph',
      data: { text: 'A fractional index represents a root. The denominator tells you which root; the numerator tells you the power.' }
    },
    {
      id: 'callout-worked-frac',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Fractional Indices',
        text: 'Evaluate 8<sup>⅔</sup><br><br>= (∛8)²<br>= (2)²<br>= <strong>4</strong><br><br>Evaluate 27<sup>−⅓</sup><br>= <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">27<sup>⅓</sup></span></span> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">∛27</span></span> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span>'
      }
    },
    {
      id: 'callout-tip-frac',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Order of Operations',
        text: 'For <em>a</em><sup><em>m</em>/<em>n</em></sup>: always take the <strong>root first</strong>, then raise to the power. This keeps the numbers small and manageable.'
      }
    },
    {
      id: 'callout-warning-base',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Index laws only work when bases are the <strong>same</strong>.<br><br>✔ 2³ × 2⁵ = 2⁸ (same base)<br>✘ 2³ × 3⁵ ≠ 6⁸ (different bases — cannot combine)'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'The laws of indices: multiply &rarr; add powers; divide &rarr; subtract powers; power of a power &rarr; multiply powers; zero index &rarr; 1; negative index &rarr; reciprocal; fractional index &rarr; root. Always check bases are the same before applying laws.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Laws of indices let you simplify powers: add indices when multiplying, subtract when dividing, multiply for power-of-a-power.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-laws', prompt: 'State the multiplication law of indices.', answer: 'a^m × a^n = a^(m+n) — add the powers when multiplying with the same base.' },
      { id: 'cue-2', blockId: 'callout-key-laws', prompt: 'What does a negative index mean?', answer: 'a^(−n) = 1/aⁿ — it means the reciprocal; it does NOT make the answer negative.' },
      { id: 'cue-3', blockId: 'callout-worked-frac', prompt: 'Evaluate 8^(2/3).', answer: '(∛8)² = 2² = 4. Take the root first, then the power.' },
      { id: 'cue-4', blockId: 'callout-key-laws', prompt: 'What is a⁰ equal to?', answer: 'a⁰ = 1 for any non-zero value of a.' },
      { id: 'cue-5', blockId: 'callout-warning-base', prompt: 'Can you apply index laws to 2³ × 3⁵?', answer: 'No — the bases are different, so index laws cannot be applied directly.' }
    ]
  },
  evidence: []
};
