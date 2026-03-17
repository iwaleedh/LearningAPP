export const note_olevel_maths_extended_2_13_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/exponential-growth-and-decay.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand exponential growth and decay, and solve problems involving repeated percentage change.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Exponential Growth and Decay', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Exponential growth</strong> occurs when a quantity increases by a fixed <strong>percentage</strong> each time period. <strong>Exponential decay</strong> occurs when a quantity decreases by a fixed percentage each period. Unlike linear change (constant amount), exponential change accelerates over time.' }
    },
    {
      id: 'callout-key-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Exponential Formula',
        text: '<strong><em>A</em> = <em>A</em>₀ × <em>r</em><sup><em>n</em></sup></strong><br><br>where:<br>• <em>A</em>₀ = initial amount<br>• <em>r</em> = multiplier per period<br>• <em>n</em> = number of periods<br>• <em>A</em> = amount after <em>n</em> periods<br><br><strong>Growth:</strong> <em>r</em> = 1 + <span class="nb-frac"><span class="nb-num">% increase</span><span class="nb-den">100</span></span> &nbsp; (e.g. 5% growth &rarr; <em>r</em> = 1.05)<br><strong>Decay:</strong> <em>r</em> = 1 − <span class="nb-frac"><span class="nb-num">% decrease</span><span class="nb-den">100</span></span> &nbsp; (e.g. 3% decay &rarr; <em>r</em> = 0.97)'
      }
    },
    {
      id: 'h-growth',
      type: 'heading',
      data: { text: 'Exponential Growth', level: 2 }
    },
    {
      id: 'callout-worked-growth',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Population Growth',
        text: 'A town has a population of 20 000. It grows by 3% each year. Find the population after 5 years.<br><br><em>r</em> = 1 + 0.03 = 1.03<br><br><em>A</em> = 20 000 × 1.03⁵<br><em>A</em> = 20 000 × 1.15927…<br><em>A</em> = <strong>23 185</strong> (nearest whole number)'
      }
    },
    {
      id: 'h-decay',
      type: 'heading',
      data: { text: 'Exponential Decay', level: 2 }
    },
    {
      id: 'callout-worked-decay',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Depreciation',
        text: 'A car costs $12 000 and depreciates by 15% per year. Find its value after 4 years.<br><br><em>r</em> = 1 − 0.15 = 0.85<br><br><em>A</em> = 12 000 × 0.85⁴<br><em>A</em> = 12 000 × 0.52200…<br><em>A</em> = <strong>$6264</strong> (nearest dollar)'
      }
    },
    {
      id: 'h-compound',
      type: 'heading',
      data: { text: 'Compound Interest', level: 2 }
    },
    {
      id: 'p-compound',
      type: 'paragraph',
      data: { text: '<strong>Compound interest</strong> is a specific application of exponential growth where interest is earned on the total (principal + previous interest) each period.' }
    },
    {
      id: 'callout-worked-ci',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Compound Interest',
        text: '$5000 is invested at 4% per annum compound interest. Find the value after 3 years.<br><br><em>A</em> = 5000 × 1.04³<br><em>A</em> = 5000 × 1.124864<br><em>A</em> = <strong>$5624.32</strong><br><br>Interest earned = 5624.32 − 5000 = $624.32'
      }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Simple vs Compound Interest',
        headers: ['Feature', 'Simple Interest', 'Compound Interest'],
        rows: [
          ['Interest on', 'Original principal only', 'Principal + accumulated interest'],
          ['Formula', 'A = P(1 + rn)', 'A = P(1 + r)ⁿ'],
          ['Growth type', 'Linear', 'Exponential']
        ]
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Using the percentage directly as <em>r</em> (e.g. 5 instead of 1.05)<br>• Confusing simple and compound interest formulae<br>• Rounding the multiplier during calculation — keep full precision until the final answer<br>• Using addition for repeated % change instead of multiplication'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If a question says "after <em>n</em> years", use the exponent directly. Don\'t calculate year by year — use the formula <em>A</em> = <em>A</em>₀ × <em>r</em><sup><em>n</em></sup> in one step.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Exponential change: A = A₀ × rⁿ. Growth: r > 1 (e.g. 1.05 for 5%). Decay: r < 1 (e.g. 0.85 for 15% decrease). Compound interest is exponential growth applied to money. Always use the multiplier method.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'A = A₀ × rⁿ. Growth: r = 1 + %/100. Decay: r = 1 − %/100. Compound interest = exponential growth on money.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-formula', prompt: 'What is the multiplier for 5% growth?', answer: 'r = 1.05.' },
      { id: 'cue-2', blockId: 'callout-key-formula', prompt: 'What is the multiplier for 15% decay?', answer: 'r = 0.85.' },
      { id: 'cue-3', blockId: 'callout-worked-ci', prompt: 'Find the value of $5000 at 4% compound interest for 3 years.', answer: '5000 × 1.04³ = $5624.32.' },
      { id: 'cue-4', blockId: 'table-compare', prompt: 'What is the key difference between simple and compound interest?', answer: 'Simple interest is calculated on the original principal only; compound interest is on the total including previous interest.' },
      { id: 'cue-5', blockId: 'callout-worked-decay', prompt: 'A car worth $12 000 depreciates 15% per year. Value after 4 years?', answer: '12 000 × 0.85⁴ = $6264.' }
    ]
  },
  evidence: []
};
