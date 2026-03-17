export const note_olevel_maths_extended_2_10_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/domain-and-range.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and determine the domain and range of a function.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Domain and Range', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Every function has a set of allowed inputs and a set of possible outputs. These are called the <strong>domain</strong> and <strong>range</strong> respectively.' }
    },
    {
      id: 'callout-key-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definitions',
        text: '<strong>Domain</strong> — the set of all <em>input</em> values (<em>x</em>-values) for which the function is defined.<br><br><strong>Range</strong> — the set of all <em>output</em> values (f(<em>x</em>) values / <em>y</em>-values) produced by the function.'
      }
    },
    {
      id: 'h-restrictions',
      type: 'heading',
      data: { text: 'Domain Restrictions', level: 2 }
    },
    {
      id: 'p-restrictions',
      type: 'paragraph',
      data: { text: 'Most functions at IGCSE have domain "all real numbers". However, there are two common restrictions:' }
    },
    {
      id: 'list-restrictions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Division by zero:</strong> If the function has <em>x</em> in a denominator, exclude values where denominator = 0' },
          { text: '<strong>Square roots:</strong> If the function has √<em>x</em>, the expression under the root must be ≥ 0' }
        ]
      }
    },
    {
      id: 'callout-worked-domain',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding Domain',
        text: 'Find the domain of f(<em>x</em>) = <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den"><em>x</em> − 2</span></span><br><br>Denominator = 0 when <em>x</em> = 2<br><br>Domain: <em>x</em> ∈ ℝ, <em>x</em> ≠ 2 &nbsp; (all real numbers except 2)'
      }
    },
    {
      id: 'h-range',
      type: 'heading',
      data: { text: 'Finding the Range', level: 2 }
    },
    {
      id: 'p-range',
      type: 'paragraph',
      data: { text: 'The range depends on the function type. The easiest method at IGCSE level is to <strong>sketch the graph</strong> and read off the <em>y</em>-values covered.' }
    },
    {
      id: 'table-ranges',
      type: 'comparisonTable',
      data: {
        caption: 'Common functions and their ranges',
        headers: ['Function', 'Domain', 'Range'],
        rows: [
          ['f(<em>x</em>) = 2<em>x</em> + 3', 'All real numbers', 'All real numbers'],
          ['f(<em>x</em>) = <em>x</em>²', 'All real numbers', 'f(<em>x</em>) ≥ 0'],
          ['f(<em>x</em>) = <em>x</em>² + 3', 'All real numbers', 'f(<em>x</em>) ≥ 3'],
          ['f(<em>x</em>) = −(<em>x</em> − 2)² + 5', 'All real numbers', 'f(<em>x</em>) ≤ 5'],
          ['f(<em>x</em>) = 1/<em>x</em>', '<em>x</em> ≠ 0', 'f(<em>x</em>) ≠ 0'],
          ['f(<em>x</em>) = 2<sup><em>x</em></sup>', 'All real numbers', 'f(<em>x</em>) > 0']
        ]
      }
    },
    {
      id: 'callout-worked-range',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Quadratic Range',
        text: 'Find the range of f(<em>x</em>) = (<em>x</em> − 3)² − 4.<br><br>This is a U-shaped parabola with vertex at (3, −4).<br>The minimum value of f(<em>x</em>) is −4.<br><br><strong>Range: f(<em>x</em>) ≥ −4</strong>'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For quadratic ranges, complete the square to find the vertex. The maximum or minimum value at the vertex gives the boundary of the range.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Domain = set of valid inputs; Range = set of possible outputs. Restrictions arise from division by zero and square roots. For quadratics, use the vertex to find the range. Linear functions have range = all reals.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Domain = allowed inputs, Range = possible outputs. Exclude denominator zeros and negative square roots. Use vertex for quadratic range.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-def', prompt: 'Define "domain" and "range".', answer: 'Domain = set of all valid input values. Range = set of all possible output values.' },
      { id: 'cue-2', blockId: 'callout-worked-domain', prompt: 'What is the domain of f(x) = 3/(x−2)?', answer: 'x ∈ ℝ, x ≠ 2 (all reals except 2).' },
      { id: 'cue-3', blockId: 'callout-worked-range', prompt: 'Find the range of f(x) = (x−3)² − 4.', answer: 'f(x) ≥ −4 (minimum at vertex (3, −4)).' },
      { id: 'cue-4', blockId: 'list-restrictions', prompt: 'What two situations restrict the domain?', answer: 'Division by zero (denominator = 0) and square roots of negative numbers.' }
    ]
  },
  evidence: []
};
