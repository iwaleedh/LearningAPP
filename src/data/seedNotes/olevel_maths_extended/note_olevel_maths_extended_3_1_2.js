export const note_olevel_maths_extended_3_1_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/midpoint-of-a-line.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Find the midpoint of a line segment joining two given points.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Midpoint of a Line Segment', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The <strong>midpoint</strong> of a line segment is the point exactly halfway between the two endpoints. It is found by averaging the x-coordinates and averaging the y-coordinates.' }
    },
    {
      id: 'callout-key-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Midpoint Formula',
        text: 'For two points (<em>x</em>₁, <em>y</em>₁) and (<em>x</em>₂, <em>y</em>₂), the midpoint M is:<br><br><strong>M = ( <span class="nb-frac"><span class="nb-num"><em>x</em>₁ + <em>x</em>₂</span><span class="nb-den">2</span></span> , <span class="nb-frac"><span class="nb-num"><em>y</em>₁ + <em>y</em>₂</span><span class="nb-den">2</span></span> )</strong>'
      }
    },
    {
      id: 'eq-midpoint',
      type: 'equation',
      data: {
        html: 'M = ( <span class="nb-frac"><span class="nb-num"><em>x</em>₁ + <em>x</em>₂</span><span class="nb-den">2</span></span> , <span class="nb-frac"><span class="nb-num"><em>y</em>₁ + <em>y</em>₂</span><span class="nb-den">2</span></span> )',
        caption: 'Midpoint formula'
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'How to Find the Midpoint', level: 2 }
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Add the two x-coordinates and divide by 2' },
          { text: 'Add the two y-coordinates and divide by 2' },
          { text: 'Write the result as an ordered pair' }
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Find the midpoint of the line segment joining A(2, 8) and B(6, 4).<br><br>x-midpoint = <span class="nb-frac"><span class="nb-num">2 + 6</span><span class="nb-den">2</span></span> = <span class="nb-frac"><span class="nb-num">8</span><span class="nb-den">2</span></span> = 4<br><br>y-midpoint = <span class="nb-frac"><span class="nb-num">8 + 4</span><span class="nb-den">2</span></span> = <span class="nb-frac"><span class="nb-num">12</span><span class="nb-den">2</span></span> = 6<br><br><strong>Midpoint = (4, 6)</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Negative Coordinates',
        text: 'Find the midpoint of P(−5, 3) and Q(7, −1).<br><br>x-midpoint = <span class="nb-frac"><span class="nb-num">−5 + 7</span><span class="nb-den">2</span></span> = <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">2</span></span> = 1<br><br>y-midpoint = <span class="nb-frac"><span class="nb-num">3 + (−1)</span><span class="nb-den">2</span></span> = <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">2</span></span> = 1<br><br><strong>Midpoint = (1, 1)</strong>'
      }
    },
    {
      id: 'h-reverse',
      type: 'heading',
      data: { text: 'Finding an Endpoint Given the Midpoint', level: 2 }
    },
    {
      id: 'p-reverse',
      type: 'paragraph',
      data: { text: 'If you know one endpoint and the midpoint, you can find the other endpoint. If A = (<em>x</em>₁, <em>y</em>₁) and M = (<em>m</em>₁, <em>m</em>₂) is the midpoint, then the other endpoint B satisfies:<br><em>x</em>₂ = 2<em>m</em>₁ − <em>x</em>₁ &nbsp;&nbsp;and&nbsp;&nbsp; <em>y</em>₂ = 2<em>m</em>₂ − <em>y</em>₁' }
    },
    {
      id: 'callout-worked-reverse',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Finding a Missing Endpoint',
        text: 'A line segment has one endpoint at A(3, 7) and midpoint M(5, 4). Find the other endpoint B.<br><br><em>x</em>₂ = 2(5) − 3 = 10 − 3 = 7<br><em>y</em>₂ = 2(4) − 7 = 8 − 7 = 1<br><br><strong>B = (7, 1)</strong><br><br>Check: midpoint of (3, 7) and (7, 1) = ((3+7)/2, (7+1)/2) = (5, 4) ✓'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The midpoint formula gives <strong>non-integer</strong> answers when the sum of coordinates is odd, e.g. midpoint of (1, 2) and (4, 5) = (2.5, 3.5). Don\'t round — leave as a decimal or fraction.'
      }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'The midpoint formula uses <strong>addition</strong>, not subtraction. Don\'t confuse it with the distance/gradient formulae which subtract coordinates.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'The midpoint of a line segment is found by averaging the x- and y-coordinates: M = ((x₁+x₂)/2, (y₁+y₂)/2). To find a missing endpoint, rearrange to x₂ = 2m − x₁. Results may be non-integer — don\'t round unless asked.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'The midpoint is found by averaging both coordinates of the two endpoints.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-formula', prompt: 'State the midpoint formula.', answer: 'M = ((x₁ + x₂)/2, (y₁ + y₂)/2)' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'Find the midpoint of (2, 8) and (6, 4).', answer: '(4, 6)' },
      { id: 'cue-3', blockId: 'p-reverse', prompt: 'How do you find a missing endpoint given one endpoint and the midpoint?', answer: 'x₂ = 2m₁ − x₁ and y₂ = 2m₂ − y₁' },
      { id: 'cue-4', blockId: 'callout-warning-1', prompt: 'Does the midpoint formula use addition or subtraction?', answer: 'Addition — you ADD the coordinates then divide by 2.' },
      { id: 'cue-5', blockId: 'callout-worked-2', prompt: 'Find the midpoint of (−5, 3) and (7, −1).', answer: '(1, 1)' }
    ]
  },
  evidence: []
};
