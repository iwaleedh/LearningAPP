export const note_olevel_maths_extended_2_13_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/logarithms.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand logarithms, convert between exponential and logarithmic forms, and apply the laws of logarithms.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Logarithms', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>logarithm</strong> is the inverse of an exponent. It answers the question: "What power must the base be raised to in order to get this number?"' }
    },
    {
      id: 'callout-key-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Logarithm Definition',
        text: 'If <em>b</em><sup><em>x</em></sup> = <em>a</em>, &nbsp;then &nbsp; log<sub><em>b</em></sub> <em>a</em> = <em>x</em><br><br>Read as: "log base <em>b</em> of <em>a</em> equals <em>x</em>"<br><br>Examples:<br>• 2³ = 8 &nbsp;↔&nbsp; log₂ 8 = 3<br>• 10² = 100 &nbsp;↔&nbsp; log₁₀ 100 = 2<br>• 5⁰ = 1 &nbsp;↔&nbsp; log₅ 1 = 0'
      }
    },
    {
      id: 'h-converting',
      type: 'heading',
      data: { text: 'Converting Between Forms', level: 2 }
    },
    {
      id: 'table-convert',
      type: 'comparisonTable',
      data: {
        caption: 'Exponential form ↔ Logarithmic form',
        headers: ['Exponential Form', 'Logarithmic Form'],
        rows: [
          ['3⁴ = 81', 'log₃ 81 = 4'],
          ['10³ = 1000', 'log₁₀ 1000 = 3'],
          ['2⁻¹ = 0.5', 'log₂ 0.5 = −1'],
          ['7¹ = 7', 'log₇ 7 = 1'],
          ['aⁿ = p', 'logₐ p = n']
        ]
      }
    },
    {
      id: 'h-laws',
      type: 'heading',
      data: { text: 'Laws of Logarithms', level: 2 }
    },
    {
      id: 'callout-key-laws',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Three Laws of Logarithms',
        text: '<strong>1. Product rule:</strong> &nbsp; log <em>a</em> + log <em>b</em> = log(<em>ab</em>)<br><br><strong>2. Quotient rule:</strong> &nbsp; log <em>a</em> − log <em>b</em> = log(<span class="nb-frac"><span class="nb-num"><em>a</em></span><span class="nb-den"><em>b</em></span></span>)<br><br><strong>3. Power rule:</strong> &nbsp; log <em>a</em><sup><em>n</em></sup> = <em>n</em> log <em>a</em><br><br>Also remember:<br>• log<sub><em>b</em></sub> 1 = 0 &nbsp; (any base)<br>• log<sub><em>b</em></sub> <em>b</em> = 1 &nbsp; (log of base = 1)'
      }
    },
    {
      id: 'h-evaluating',
      type: 'heading',
      data: { text: 'Evaluating Logarithms', level: 2 }
    },
    {
      id: 'callout-worked-eval',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Evaluating',
        text: 'Find the value of:<br><br>(a) log₂ 32<br>2<sup>?</sup> = 32 &rarr; 2⁵ = 32 &rarr; <strong>log₂ 32 = 5</strong><br><br>(b) log₃ <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">9</span></span><br>3<sup>?</sup> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">9</span></span> &rarr; 3⁻² = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">9</span></span> &rarr; <strong>log₃ <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">9</span></span> = −2</strong><br><br>(c) log₁₀ 0.001<br>10<sup>?</sup> = 0.001 &rarr; 10⁻³ = 0.001 &rarr; <strong>log₁₀ 0.001 = −3</strong>'
      }
    },
    {
      id: 'h-solving',
      type: 'heading',
      data: { text: 'Solving Exponential Equations with Logs', level: 2 }
    },
    {
      id: 'callout-worked-solve',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Solving with Logarithms',
        text: 'Solve 3<sup><em>x</em></sup> = 20.<br><br>Take log₁₀ of both sides:<br>log 3<sup><em>x</em></sup> = log 20<br><em>x</em> log 3 = log 20<br><em>x</em> = <span class="nb-frac"><span class="nb-num">log 20</span><span class="nb-den">log 3</span></span> = <span class="nb-frac"><span class="nb-num">1.301</span><span class="nb-den">0.4771</span></span> = <strong>2.73</strong> (3 s.f.)'
      }
    },
    {
      id: 'callout-worked-laws',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Using Laws',
        text: 'Simplify log 12 + log 3 − log 4<br><br>= log(<span class="nb-frac"><span class="nb-num">12 × 3</span><span class="nb-den">4</span></span>)<br>= log(<span class="nb-frac"><span class="nb-num">36</span><span class="nb-den">4</span></span>)<br>= <strong>log 9</strong>'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Thinking log(<em>a</em> + <em>b</em>) = log <em>a</em> + log <em>b</em> — WRONG! The laws only apply to multiplication/division<br>• Confusing log₁₀ and ln (natural log) — at IGCSE, log usually means log₁₀<br>• Forgetting that you cannot take the log of zero or a negative number'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'To solve <em>a</em><sup><em>x</em></sup> = <em>b</em>, take log of both sides: <em>x</em> = log <em>b</em> / log <em>a</em>. Use your calculator for the division. Give answers to 3 significant figures unless stated otherwise.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Logarithms reverse exponents: if bˣ = a then log_b a = x. Three laws: product (add logs), quotient (subtract logs), power (bring down exponent). Use logs to solve exponential equations: x = log b / log a. log 1 = 0, log_b b = 1.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Logs are inverse of exponents. Three laws: log(ab) = log a + log b; log(a/b) = log a − log b; log(aⁿ) = n log a. Solve aˣ = b by x = log b / log a.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-def', prompt: 'If 2³ = 8, write this as a logarithm.', answer: 'log₂ 8 = 3.' },
      { id: 'cue-2', blockId: 'callout-key-laws', prompt: 'State the three laws of logarithms.', answer: '1. log a + log b = log(ab), 2. log a − log b = log(a/b), 3. log(aⁿ) = n log a.' },
      { id: 'cue-3', blockId: 'callout-worked-solve', prompt: 'How do you solve 3ˣ = 20?', answer: 'Take log of both sides: x = log 20 / log 3 ≈ 2.73.' },
      { id: 'cue-4', blockId: 'callout-worked-eval', prompt: 'Find log₂ 32.', answer: '5, because 2⁵ = 32.' },
      { id: 'cue-5', blockId: 'callout-warning', prompt: 'Does log(a + b) = log a + log b?', answer: 'No! The product rule is log(a × b) = log a + log b. There is no rule for log(a + b).' }
    ]
  },
  evidence: []
};
