export const note_olevel_maths_core_2_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/algebraic-roots-and-indices.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply the index laws to simplify algebraic expressions: multiplication, division, power of a power, zero index, and negative indices.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What are Indices?', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'An <strong>index</strong> (plural: <em>indices</em>) is the power to which a number or variable is raised. In x<sup>4</sup>, the index is 4 and x is the <strong>base</strong>. x<sup>4</sup> = x × x × x × x.' }
    },
    {
      id: 'h-laws',
      type: 'heading',
      data: { text: 'The Five Index Laws', level: 2 }
    },
    {
      id: 'tbl-laws',
      type: 'comparisonTable',
      data: {
        caption: 'Algebraic index laws — learn these',
        headers: ['Law', 'Rule', 'Example'],
        rows: [
          ['Multiplication', 'x<sup>m</sup> × x<sup>n</sup> = x<sup>m+n</sup>', 'x³ × x⁴ = x⁷'],
          ['Division', 'x<sup>m</sup> ÷ x<sup>n</sup> = x<sup>m−n</sup>', 'x⁶ ÷ x² = x⁴'],
          ['Power of a power', '(x<sup>m</sup>)<sup>n</sup> = x<sup>mn</sup>', '(x³)⁴ = x¹²'],
          ['Zero index', 'x⁰ = 1 (x ≠ 0)', '5x⁰ = 5 × 1 = 5'],
          ['Negative index', 'x<sup>−n</sup> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">x<sup>n</sup></span></span>', 'x⁻³ = 1/x³'],
        ]
      }
    },
    {
      id: 'h-mult',
      type: 'heading',
      data: { text: 'Law 1: Multiplying Powers', level: 2 }
    },
    {
      id: 'p-mult',
      type: 'paragraph',
      data: { text: 'When multiplying expressions with the <strong>same base</strong>, add the indices. The base stays the same.' }
    },
    {
      id: 'equation-mult',
      type: 'equation',
      data: { html: 'x<sup>m</sup> × x<sup>n</sup> = x<sup>m + n</sup>', caption: 'Multiplication law' }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Multiplication Law',
        text: 'Simplify each:<br><br><strong>(a)</strong> x² × x⁵ = x<sup>2+5</sup> = <strong>x⁷</strong><br><br><strong>(b)</strong> 3x⁴ × 2x³ = (3 × 2) × x<sup>4+3</sup> = <strong>6x⁷</strong><br>(Multiply coefficients separately, add indices)<br><br><strong>(c)</strong> 5a² × a⁴ = 5 × a<sup>2+4</sup> = <strong>5a⁶</strong><br><br><strong>(d)</strong> 4m × 3m⁵ = 12m<sup>1+5</sup> = <strong>12m⁶</strong><br>(Remember: m = m¹)'
      }
    },
    {
      id: 'h-div',
      type: 'heading',
      data: { text: 'Law 2: Dividing Powers', level: 2 }
    },
    {
      id: 'equation-div',
      type: 'equation',
      data: { html: 'x<sup>m</sup> ÷ x<sup>n</sup> = x<sup>m − n</sup>', caption: 'Division law' }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Division Law',
        text: '<strong>(a)</strong> x⁷ ÷ x³ = x<sup>7−3</sup> = <strong>x⁴</strong><br><br><strong>(b)</strong> <span class="nb-frac"><span class="nb-num">12x⁵</span><span class="nb-den">4x²</span></span> = <span class="nb-frac"><span class="nb-num">12</span><span class="nb-den">4</span></span> × x<sup>5−2</sup> = <strong>3x³</strong><br>(Divide the coefficients, subtract the indices)<br><br><strong>(c)</strong> <span class="nb-frac"><span class="nb-num">y⁸</span><span class="nb-den">y⁸</span></span> = y<sup>8−8</sup> = y⁰ = <strong>1</strong>'
      }
    },
    {
      id: 'h-pow',
      type: 'heading',
      data: { text: 'Law 3: Power of a Power', level: 2 }
    },
    {
      id: 'equation-pow',
      type: 'equation',
      data: { html: '(x<sup>m</sup>)<sup>n</sup> = x<sup>mn</sup>', caption: 'Power of a power: multiply the indices' }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Power of a Power',
        text: '<strong>(a)</strong> (x²)⁵ = x<sup>2×5</sup> = <strong>x¹⁰</strong><br><br><strong>(b)</strong> (2x³)⁴ = 2⁴ × x<sup>3×4</sup> = 16x<sup>12</sup> → <strong>16x¹²</strong><br>(Raise the coefficient to the power too!)<br><br><strong>(c)</strong> (3y²)³ = 3³ × y<sup>2×3</sup> = 27y⁶ → <strong>27y⁶</strong>'
      }
    },
    {
      id: 'h-zero-neg',
      type: 'heading',
      data: { text: 'Zero and Negative Indices', level: 2 }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Facts: Zero and Negative Indices',
        text: '<strong>Zero index:</strong> Any base (≠0) raised to the power 0 equals 1.<br>x⁰ = 1, (4y)⁰ = 1, 100⁰ = 1<br><br><strong>Negative index:</strong> A negative power means "take the reciprocal".<br>x⁻² = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">x²</span></span> &nbsp;&nbsp; x⁻¹ = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">x</span></span>'
      }
    },
    {
      id: 'callout-worked4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Zero and Negative Indices',
        text: '<strong>(a)</strong> Simplify x³ × x⁻⁵ = x<sup>3+(−5)</sup> = x<sup>−2</sup> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">x²</span></span><br><br><strong>(b)</strong> Simplify <span class="nb-frac"><span class="nb-num">x²</span><span class="nb-den">x⁵</span></span> = x<sup>2−5</sup> = x<sup>−3</sup> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">x³</span></span><br><br><strong>(c)</strong> Write 8x⁰ in simplified form: 8 × 1 = <strong>8</strong>'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Only Same Bases Can Be Combined',
        text: 'You can ONLY apply the multiplication/division index laws when the <strong>bases are the same</strong>.<br>• x³ × x⁴ = x⁷ ✓ (same base x)<br>• x³ × y⁴ ≠ (xy)⁷ ✗ (different bases — CANNOT combine!)<br>• 3x² × 5x = 15x³ ✓ (same base x, multiply coefficients separately)'
      }
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: (2x³)⁴',
        text: 'When raising a product to a power, <strong>every factor</strong> gets raised:<br>(2x³)⁴ = 2⁴ × (x³)⁴ = 16x¹²<br>Do NOT write (2x³)⁴ = 2x¹² — you must raise the coefficient 2 to the power 4 as well.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can apply the multiplication law: add indices when multiplying same base', checked: false },
          { text: 'I can apply the division law: subtract indices when dividing same base', checked: false },
          { text: 'I can apply the power-of-a-power law: multiply indices', checked: false },
          { text: 'I know x⁰ = 1 for any non-zero x', checked: false },
          { text: 'I know x⁻ⁿ = 1/xⁿ', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Five index laws: <strong>multiply</strong> → add indices; <strong>divide</strong> → subtract indices; <strong>power of a power</strong> → multiply indices; <strong>zero index</strong> → equals 1; <strong>negative index</strong> → reciprocal (1/xⁿ). Only apply these laws to expressions with the <em>same base</em>.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'tbl-laws', prompt: 'State the multiplication index law. What do you do to the indices?' },
      { id: 'cue-2', blockId: 'callout-worked1', prompt: 'Simplify 3x⁴ × 2x³. Show your working.' },
      { id: 'cue-3', blockId: 'callout-key1', prompt: 'What is x⁰ equal to? What does x⁻³ mean?' },
      { id: 'cue-4', blockId: 'callout-worked3', prompt: 'Simplify (2x³)⁴. Why must you raise the coefficient to the power as well?' },
      { id: 'cue-5', blockId: 'callout-tip1', prompt: 'Can you apply the multiplication law to x³ × y⁴? Why or why not?' },
    ],
    summaryText: 'When multiplying same-base terms add indices; when dividing subtract; power of a power multiplies indices; x⁰ = 1; x⁻ⁿ = 1/xⁿ.',
    ready: true,
  },
  evidence: [],
};
