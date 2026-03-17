export const note_olevel_maths_extended_2_12_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/variation-models.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Set up and solve combined variation and joint proportion problems.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Variation Models', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Many real-world problems involve <strong>combined variation</strong> — a quantity depending on two or more variables, mixing direct and inverse proportion. IGCSE Extended may ask you to form and use these formulae.' }
    },
    {
      id: 'h-joint',
      type: 'heading',
      data: { text: 'Joint / Combined Variation', level: 2 }
    },
    {
      id: 'callout-key-combined',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Combined Variation Patterns',
        text: '"<em>z</em> varies directly as <em>x</em> and inversely as <em>y</em>" &rarr;<br><em>z</em> = <span class="nb-frac"><span class="nb-num"><em>kx</em></span><span class="nb-den"><em>y</em></span></span><br><br>"<em>z</em> varies jointly as <em>x</em> and <em>y</em>" &rarr;<br><em>z</em> = <em>kxy</em><br><br>"<em>z</em> varies directly as <em>x</em>² and inversely as √<em>y</em>" &rarr;<br><em>z</em> = <span class="nb-frac"><span class="nb-num"><em>kx</em>²</span><span class="nb-den">√<em>y</em></span></span>'
      }
    },
    {
      id: 'callout-worked-joint',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Joint Variation',
        text: '<em>F</em> varies directly as <em>m</em> and inversely as <em>d</em>². When <em>m</em> = 10 and <em>d</em> = 2, <em>F</em> = 15.<br><br><em>F</em> = <span class="nb-frac"><span class="nb-num"><em>km</em></span><span class="nb-den"><em>d</em>²</span></span><br><br>15 = <span class="nb-frac"><span class="nb-num">10<em>k</em></span><span class="nb-den">4</span></span><br><br>60 = 10<em>k</em> &rarr; <em>k</em> = 6<br><br>Formula: <em>F</em> = <span class="nb-frac"><span class="nb-num">6<em>m</em></span><span class="nb-den"><em>d</em>²</span></span><br><br>Find <em>F</em> when <em>m</em> = 20, <em>d</em> = 3:<br><em>F</em> = <span class="nb-frac"><span class="nb-num">6(20)</span><span class="nb-den">9</span></span> = <span class="nb-frac"><span class="nb-num">120</span><span class="nb-den">9</span></span> = <strong>13.3</strong> (3 s.f.)'
      }
    },
    {
      id: 'h-applications',
      type: 'heading',
      data: { text: 'Real-World Applications', level: 2 }
    },
    {
      id: 'table-applications',
      type: 'comparisonTable',
      data: {
        caption: 'Common proportion models in science and everyday life',
        headers: ['Scenario', 'Relationship', 'Formula'],
        rows: [
          ['Speed, distance, time', 'Speed ∝ distance / time', 's = d/t'],
          ['Gravitational force', 'F ∝ m₁m₂/d²', 'F = km₁m₂/d²'],
          ['Area of circle', 'A ∝ r²', 'A = πr²'],
          ['Pressure, force, area', 'P ∝ F/A', 'P = F/A'],
          ['Stretching a spring', 'F ∝ x', 'F = kx (Hooke\'s law)']
        ]
      }
    },
    {
      id: 'h-percentage',
      type: 'heading',
      data: { text: 'Effect of Changing Variables', level: 2 }
    },
    {
      id: 'callout-worked-change',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Effect of Change',
        text: 'Given <em>y</em> = <span class="nb-frac"><span class="nb-num"><em>k</em></span><span class="nb-den"><em>x</em>²</span></span>, what happens to <em>y</em> if <em>x</em> is tripled?<br><br>New <em>y</em> = <span class="nb-frac"><span class="nb-num"><em>k</em></span><span class="nb-den">(3<em>x</em>)²</span></span> = <span class="nb-frac"><span class="nb-num"><em>k</em></span><span class="nb-den">9<em>x</em>²</span></span> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">9</span></span> × <span class="nb-frac"><span class="nb-num"><em>k</em></span><span class="nb-den"><em>x</em>²</span></span><br><br><em>y</em> is <strong>divided by 9</strong> (reduced to one-ninth).'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Not distinguishing "jointly" (multiply) from "and" in the context of direct/inverse<br>• Forgetting to square/cube the variable in the denominator when finding the effect of changes<br>• Leaving <em>k</em> unsimplified — always compute <em>k</em> as a number'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For "what happens to y if x is halved" questions: substitute x/2 into the formula and simplify. Express the answer as a multiplier (e.g. "y is multiplied by 4").'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Combined variation mixes direct and inverse proportion. Translate words to formula: "directly as x, inversely as y²" &rarr; z = kx/y². Find k from given values. For change questions, substitute the modified variable and simplify the ratio.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Combined variation: translate words &rarr; formula (e.g. z = kx/y²). Find k, then solve. For change questions, substitute the new expression and simplify.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-combined', prompt: 'Write the formula for "z varies directly as x and inversely as y".', answer: 'z = kx/y.' },
      { id: 'cue-2', blockId: 'callout-worked-joint', prompt: 'If F = km/d² and F = 15 when m = 10, d = 2, find k.', answer: '15 = 10k/4 &rarr; k = 6.' },
      { id: 'cue-3', blockId: 'callout-worked-change', prompt: 'If y = k/x² and x is tripled, what happens to y?', answer: 'y is divided by 9.' },
      { id: 'cue-4', blockId: 'callout-key-combined', prompt: 'What does "z varies jointly as x and y" mean?', answer: 'z = kxy (z is directly proportional to both x and y).' }
    ]
  },
  evidence: []
};
