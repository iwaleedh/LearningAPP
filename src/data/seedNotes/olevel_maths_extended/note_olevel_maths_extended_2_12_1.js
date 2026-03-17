export const note_olevel_maths_extended_2_12_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/inverse-proportion.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and use inverse proportion relationships, including inverse square proportion.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Inverse Proportion', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Two quantities are <strong>inversely proportional</strong> when one increases as the other decreases. If one doubles, the other halves. Their product stays constant.' }
    },
    {
      id: 'callout-key-notation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Notation & Formulae',
        text: '<em>y</em> ∝ <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den"><em>x</em></span></span> &nbsp; means &nbsp; <em>y</em> = <span class="nb-frac"><span class="nb-num"><em>k</em></span><span class="nb-den"><em>x</em></span></span> &nbsp; (inverse proportion)<br><br><em>y</em> ∝ <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den"><em>x</em>²</span></span> &nbsp; means &nbsp; <em>y</em> = <span class="nb-frac"><span class="nb-num"><em>k</em></span><span class="nb-den"><em>x</em>²</span></span> &nbsp; (inverse square proportion)<br><br><em>y</em> ∝ <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">√<em>x</em></span></span> &nbsp; means &nbsp; <em>y</em> = <span class="nb-frac"><span class="nb-num"><em>k</em></span><span class="nb-den">√<em>x</em></span></span><br><br>Key relationship: <strong><em>xy</em> = <em>k</em></strong> (constant product)'
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Method for Solving', level: 2 }
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Write the proportion: <em>y</em> ∝ 1/<em>x</em> (or 1/<em>x</em>², etc.)' },
          { text: 'Convert to equation: <em>y</em> = <em>k</em>/<em>x</em>' },
          { text: 'Substitute given values to find <em>k</em>' },
          { text: 'Write the complete formula' },
          { text: 'Substitute to find the unknown' }
        ]
      }
    },
    {
      id: 'callout-worked-basic',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — y ∝ 1/x',
        text: '<em>y</em> is inversely proportional to <em>x</em>. When <em>x</em> = 4, <em>y</em> = 6. Find <em>y</em> when <em>x</em> = 8.<br><br><em>y</em> = <span class="nb-frac"><span class="nb-num"><em>k</em></span><span class="nb-den"><em>x</em></span></span><br><br>6 = <span class="nb-frac"><span class="nb-num"><em>k</em></span><span class="nb-den">4</span></span> &rarr; <em>k</em> = 24<br><br>Formula: <em>y</em> = <span class="nb-frac"><span class="nb-num">24</span><span class="nb-den"><em>x</em></span></span><br><br>When <em>x</em> = 8: <em>y</em> = <span class="nb-frac"><span class="nb-num">24</span><span class="nb-den">8</span></span> = <strong>3</strong><br><br>Check: <em>x</em> doubled (4&rarr;8), <em>y</em> halved (6&rarr;3) ✓'
      }
    },
    {
      id: 'callout-worked-square',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — y ∝ 1/x²',
        text: '<em>y</em> is inversely proportional to <em>x</em>². When <em>x</em> = 2, <em>y</em> = 5. Find <em>y</em> when <em>x</em> = 10.<br><br><em>y</em> = <span class="nb-frac"><span class="nb-num"><em>k</em></span><span class="nb-den"><em>x</em>²</span></span><br><br>5 = <span class="nb-frac"><span class="nb-num"><em>k</em></span><span class="nb-den">4</span></span> &rarr; <em>k</em> = 20<br><br>Formula: <em>y</em> = <span class="nb-frac"><span class="nb-num">20</span><span class="nb-den"><em>x</em>²</span></span><br><br>When <em>x</em> = 10: <em>y</em> = <span class="nb-frac"><span class="nb-num">20</span><span class="nb-den">100</span></span> = <strong>0.2</strong>'
      }
    },
    {
      id: 'h-graphs',
      type: 'heading',
      data: { text: 'Graphs of Inverse Proportion', level: 2 }
    },
    {
      id: 'p-graphs',
      type: 'paragraph',
      data: { text: 'The graph of <em>y</em> ∝ 1/<em>x</em> is a <strong>reciprocal curve</strong> (hyperbola). It approaches but never touches the axes (asymptotes at <em>x</em> = 0 and <em>y</em> = 0). The graph does <strong>NOT</strong> pass through the origin.' }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Confusing inverse proportion with negative proportion — inverse means y = k/x, not y = −kx<br>• Thinking the graph passes through the origin — it does NOT for inverse proportion<br>• Forgetting to square or square-root where the relationship requires it'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Trigger words: "inversely proportional", "varies inversely". Quick check: if x doubles, does y halve? Then it is inverse proportion. For y ∝ 1/x², if x doubles, y is quartered.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Inverse proportion: y = k/x (or k/x², k/√x). Product xy = k stays constant. Graph is a reciprocal curve (hyperbola) that never touches the axes. Same 5-step method: write proportion, convert, find k, write formula, solve.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'y ∝ 1/x means y = k/x. Product xy = k is constant. Graph is a hyperbola with asymptotes at the axes.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-notation', prompt: 'What equation does y ∝ 1/x² give?', answer: 'y = k/x² where k is the constant of proportionality.' },
      { id: 'cue-2', blockId: 'callout-worked-basic', prompt: 'If y ∝ 1/x and y = 6 when x = 4, find k.', answer: 'y = k/x &rarr; 6 = k/4 &rarr; k = 24.' },
      { id: 'cue-3', blockId: 'p-graphs', prompt: 'Describe the graph of y ∝ 1/x.', answer: 'A reciprocal curve (hyperbola) that approaches but never touches the axes.' },
      { id: 'cue-4', blockId: 'callout-tip', prompt: 'If x doubles in y ∝ 1/x², what happens to y?', answer: 'y is divided by 4 (quartered).' }
    ]
  },
  evidence: []
};
