export const note_olevel_maths_core_3_1_1 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Calculate the gradient of a line using two points, and identify positive, negative, zero, and undefined gradients.'
      }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is Gradient?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: {
        text: 'The <strong>gradient</strong> (or slope) of a straight line measures how steep the line is. It describes how much the line rises or falls for every unit you move to the right. Gradient is often denoted by the letter <strong>m</strong>.'
      }
    },
    {
      id: 'eq-gradient',
      type: 'equation',
      data: {
        html: 'm = <span class="nb-frac"><span class="nb-num">rise</span><span class="nb-den">run</span></span> = <span class="nb-frac"><span class="nb-num">change in y</span><span class="nb-den">change in x</span></span> = <span class="nb-frac"><span class="nb-num">y<sub>2</sub> − y<sub>1</sub></span><span class="nb-den">x<sub>2</sub> − x<sub>1</sub></span></span>',
        caption: 'Gradient formula using two points (x₁, y₁) and (x₂, y₂)'
      }
    },
    {
      id: 'callout-key-grad',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Formula',
        text: 'If you know two points on a line, say (x<sub>1</sub>, y<sub>1</sub>) and (x<sub>2</sub>, y<sub>2</sub>):<br><br><strong>m = (y<sub>2</sub> − y<sub>1</sub>) ÷ (x<sub>2</sub> − x<sub>1</sub>)</strong><br><br>It does not matter which point you call 1 or 2, as long as you are consistent — subtract in the same order for both numerator and denominator.'
      }
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Types of Gradient', level: 2 }
    },
    {
      id: 'table-grad-types',
      type: 'comparisonTable',
      data: {
        caption: 'Types of gradient and their visual appearance',
        headers: ['Gradient type', 'Value of m', 'Line direction', 'Example'],
        rows: [
          ['Positive', 'm > 0', 'Rises left to right (/)','m = 2'],
          ['Negative', 'm < 0', 'Falls left to right (\\)', 'm = −3'],
          ['Zero', 'm = 0', 'Perfectly horizontal (—)', 'y = 4'],
          ['Undefined', 'no value', 'Perfectly vertical (|)', 'x = 2']
        ]
      }
    },
    {
      id: 'svg-grad-types',
      type: 'svg',
      data: {
        caption: 'Four lines showing positive, negative, zero, and undefined gradients',
        svg: `<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- Positive gradient panel -->
  <rect x="5" y="5" width="80" height="80" fill="#0f172a" stroke="#ddd"/>
  <line x1="15" y1="80" x2="75" y2="15" stroke="#6366f1" stroke-width="2.5"/>
  <text x="44" y="95" text-anchor="middle" fill="#6366f1" font-weight="bold">Positive</text>
  <text x="44" y="107" text-anchor="middle" fill="#6366f1">m &gt; 0</text>
  <!-- rise/run arrows -->
  <line x1="55" y1="47" x2="75" y2="47" stroke="#999" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="75" y1="47" x2="75" y2="15" stroke="#999" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="64" y="57" fill="#999" font-size="9">run</text>
  <text x="78" y="35" fill="#999" font-size="9">rise</text>

  <!-- Negative gradient panel -->
  <rect x="95" y="5" width="80" height="80" fill="#3d1212" stroke="#ddd"/>
  <line x1="105" y1="15" x2="165" y2="80" stroke="#ef4444" stroke-width="2.5"/>
  <text x="134" y="95" text-anchor="middle" fill="#ef4444" font-weight="bold">Negative</text>
  <text x="134" y="107" text-anchor="middle" fill="#ef4444">m &lt; 0</text>

  <!-- Zero gradient panel -->
  <rect x="185" y="5" width="80" height="80" fill="#0a2e1a" stroke="#ddd"/>
  <line x1="195" y1="45" x2="255" y2="45" stroke="#10b981" stroke-width="2.5"/>
  <text x="224" y="95" text-anchor="middle" fill="#10b981" font-weight="bold">Zero</text>
  <text x="224" y="107" text-anchor="middle" fill="#10b981">m = 0</text>

  <!-- Undefined gradient panel -->
  <rect x="275" y="5" width="80" height="80" fill="#44370a" stroke="#ddd"/>
  <line x1="315" y1="10" x2="315" y2="80" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="315" y="95" text-anchor="middle" fill="#f59e0b" font-weight="bold">Undefined</text>
  <text x="315" y="107" text-anchor="middle" fill="#f59e0b">no gradient</text>
</svg>`
      }
    },
    {
      id: 'h-calc',
      type: 'heading',
      data: { text: 'Calculating Gradient from Two Points', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Positive Gradient',
        text: 'Find the gradient of the line passing through (1, 2) and (4, 8).<br><br>Let (x<sub>1</sub>, y<sub>1</sub>) = (1, 2) and (x<sub>2</sub>, y<sub>2</sub>) = (4, 8).<br><br>m = (8 − 2) ÷ (4 − 1) = 6 ÷ 3 = <strong>2</strong><br><br>The gradient is 2 (positive, so the line rises left to right).'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Negative Gradient',
        text: 'Find the gradient of the line passing through (−1, 5) and (3, −3).<br><br>m = (−3 − 5) ÷ (3 − (−1)) = −8 ÷ 4 = <strong>−2</strong><br><br>The gradient is −2 (negative, so the line falls left to right).'
      }
    },
    {
      id: 'h-grid',
      type: 'heading',
      data: { text: 'Reading Gradient from a Grid', level: 2 }
    },
    {
      id: 'p-grid',
      type: 'paragraph',
      data: {
        text: 'When a line is drawn on a grid, choose two points that lie exactly on grid intersections. Count the number of squares up (rise) and across (run) between them. Then divide: gradient = rise ÷ run. If the line goes downward, the rise is negative.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• <strong>Mixing up y and x</strong>: Always put the change in y on top and change in x on the bottom — not the other way around.<br>• <strong>Sign errors</strong>: Take care with negative coordinates. (3 − (−1)) = 3 + 1 = 4, not 2.<br>• <strong>Undefined vs zero</strong>: A <em>horizontal</em> line has gradient 0; a <em>vertical</em> line has undefined gradient.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Gradient m = (y₂ − y₁) ÷ (x₂ − x₁). Positive gradient → line rises. Negative → line falls. Zero gradient → horizontal line. Undefined gradient → vertical line. Always subtract in the same order for y and x.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Gradient = rise ÷ run = (y₂−y₁)/(x₂−x₁). Positive rises, negative falls, zero is horizontal, undefined is vertical.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-gradient',
        prompt: 'Write the gradient formula using two points (x₁, y₁) and (x₂, y₂).',
        answer: 'm = (y₂ − y₁) ÷ (x₂ − x₁). Change in y divided by change in x.'
      },
      {
        id: 'cue-2',
        blockId: 'table-grad-types',
        prompt: 'What does a negative gradient tell you about a line?',
        answer: 'The line falls from left to right (goes downward as you move right).'
      },
      {
        id: 'cue-3',
        blockId: 'table-grad-types',
        prompt: 'What is the gradient of a horizontal line?',
        answer: 'Zero (m = 0). There is no rise — the line is flat.'
      },
      {
        id: 'cue-4',
        blockId: 'callout-worked1',
        prompt: 'Find the gradient of the line through (1, 2) and (4, 8).',
        answer: 'm = (8−2)÷(4−1) = 6÷3 = 2.'
      },
      {
        id: 'cue-5',
        blockId: 'callout-warning',
        prompt: 'What is the gradient of a vertical line?',
        answer: 'Undefined — you would be dividing by zero because the change in x is 0.'
      }
    ]
  },
  evidence: []
};
