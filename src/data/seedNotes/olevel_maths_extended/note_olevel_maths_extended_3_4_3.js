export const note_olevel_maths_extended_3_4_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/translations-of-graphs.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand how graphs are translated horizontally and vertically by changes to the equation.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Translations of Graphs', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>translation</strong> slides a graph to a new position without changing its shape or size. Graphs can be translated <strong>vertically</strong> (up/down) or <strong>horizontally</strong> (left/right) by modifying the equation.' }
    },
    {
      id: 'h-vertical',
      type: 'heading',
      data: { text: 'Vertical Translations: y = f(x) + k', level: 2 }
    },
    {
      id: 'callout-key-vertical',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Vertical Translation',
        text: 'The graph of <strong><em>y</em> = f(<em>x</em>) + <em>k</em></strong> is a translation of <em>y</em> = f(<em>x</em>) by <strong><em>k</em> units vertically</strong>.<br><br>• If <em>k</em> > 0: shift <strong>up</strong><br>• If <em>k</em> < 0: shift <strong>down</strong><br><br>Every point (<em>x</em>, <em>y</em>) becomes (<em>x</em>, <em>y</em> + <em>k</em>).'
      }
    },
    {
      id: 'callout-worked-vertical',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Vertical Translation',
        text: 'The graph of <em>y</em> = <em>x</em>² is translated 3 units up. What is the new equation?<br><br>Every y-value increases by 3:<br><strong><em>y</em> = <em>x</em>² + 3</strong><br><br>The turning point moves from (0, 0) to (0, 3).'
      }
    },
    {
      id: 'h-horizontal',
      type: 'heading',
      data: { text: 'Horizontal Translations: y = f(x − h)', level: 2 }
    },
    {
      id: 'callout-key-horizontal',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Horizontal Translation',
        text: 'The graph of <strong><em>y</em> = f(<em>x</em> − <em>h</em>)</strong> is a translation of <em>y</em> = f(<em>x</em>) by <strong><em>h</em> units horizontally</strong>.<br><br>• If <em>h</em> > 0: shift <strong>right</strong> (note the minus sign in the bracket)<br>• If <em>h</em> < 0: shift <strong>left</strong><br><br>Every point (<em>x</em>, <em>y</em>) becomes (<em>x</em> + <em>h</em>, <em>y</em>).'
      }
    },
    {
      id: 'callout-warning-direction',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Watch the Direction!',
        text: 'Horizontal translations move in the <strong>opposite</strong> direction to what you might expect:<br>• <em>y</em> = (<em>x</em> − 3)² moves the graph <strong>3 right</strong><br>• <em>y</em> = (<em>x</em> + 2)² = (<em>x</em> − (−2))² moves it <strong>2 left</strong><br><br>The sign inside the bracket is the opposite of the direction.'
      }
    },
    {
      id: 'callout-worked-horizontal',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Horizontal Translation',
        text: 'Describe the transformation from <em>y</em> = <em>x</em>² to <em>y</em> = (<em>x</em> − 4)².<br><br>This is <em>y</em> = f(<em>x</em> − 4) where f(<em>x</em>) = <em>x</em>².<br><br>Translation of <strong>4 units to the right</strong>.<br>The turning point moves from (0, 0) to (4, 0).'
      }
    },
    {
      id: 'h-combined',
      type: 'heading',
      data: { text: 'Combined Translations', level: 2 }
    },
    {
      id: 'p-combined',
      type: 'paragraph',
      data: { text: 'The graph of <strong><em>y</em> = f(<em>x</em> − <em>h</em>) + <em>k</em></strong> combines both translations: <em>h</em> units right and <em>k</em> units up.' }
    },
    {
      id: 'callout-worked-combined',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Combined Translation',
        text: 'The graph of <em>y</em> = <em>x</em>² is transformed to <em>y</em> = (<em>x</em> − 2)² + 5.<br><br>This is:<br>• 2 units <strong>right</strong> (from the −2 inside the bracket)<br>• 5 units <strong>up</strong> (from the +5 outside)<br><br>The turning point moves from (0, 0) to <strong>(2, 5)</strong>.'
      }
    },
    {
      id: 'table-summary',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of translations',
        headers: ['Transformation', 'Equation form', 'Effect'],
        rows: [
          ['Translate up by k', 'y = f(x) + k', 'All y-values increase by k'],
          ['Translate down by k', 'y = f(x) − k', 'All y-values decrease by k'],
          ['Translate right by h', 'y = f(x − h)', 'All x-values increase by h'],
          ['Translate left by h', 'y = f(x + h)', 'All x-values decrease by h']
        ]
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Use <strong>vector notation</strong> to describe translations: (<span class="nb-frac"><span class="nb-num"><em>h</em></span><span class="nb-den"><em>k</em></span></span>) means <em>h</em> units right and <em>k</em> units up. For example, <em>y</em> = (<em>x</em> − 3)² + 1 is a translation by vector (<span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">1</span></span>).'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Vertical translations: y = f(x) + k shifts up/down by k. Horizontal translations: y = f(x − h) shifts right by h (opposite sign!). Combined: y = f(x − h) + k shifts h right and k up. The shape doesn\'t change — only the position.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Translations shift graphs without changing their shape.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-vertical', prompt: 'What does y = f(x) + 3 do to a graph?', answer: 'Translates (shifts) it 3 units up.' },
      { id: 'cue-2', blockId: 'callout-key-horizontal', prompt: 'What does y = f(x − 5) do to a graph?', answer: 'Translates it 5 units to the right.' },
      { id: 'cue-3', blockId: 'callout-warning-direction', prompt: 'Why does y = (x + 2)² shift left, not right?', answer: 'Because y = f(x + 2) = f(x − (−2)), and horizontal translations move opposite to the sign inside the bracket.' },
      { id: 'cue-4', blockId: 'callout-worked-combined', prompt: 'What is the turning point of y = (x − 2)² + 5?', answer: '(2, 5) — translated 2 right and 5 up from the origin.' },
      { id: 'cue-5', blockId: 'table-summary', prompt: 'How do you translate a graph down by 4 units?', answer: 'Replace y = f(x) with y = f(x) − 4.' }
    ]
  },
  evidence: []
};
