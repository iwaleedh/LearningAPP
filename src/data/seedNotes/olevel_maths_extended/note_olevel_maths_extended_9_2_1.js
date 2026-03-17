export const note_olevel_maths_extended_9_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/bar-charts-and-pictograms.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Draw and interpret bar charts (including composite and dual bar charts) and pictograms.' }
    },
    {
      id: 'h-bar',
      type: 'heading',
      data: { text: 'Bar Charts', level: 2 }
    },
    {
      id: 'p-bar',
      type: 'paragraph',
      data: { text: 'A <strong>bar chart</strong> uses rectangular bars to represent data. The height (or length) of each bar is proportional to the frequency. Bars have <strong>equal width</strong> and <strong>gaps</strong> between them (for discrete/categorical data).' }
    },
    {
      id: 'callout-key-types',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Types of Bar Chart',
        text: '• <strong>Simple bar chart:</strong> one bar per category<br>• <strong>Dual (comparative) bar chart:</strong> two bars side by side for each category, allowing direct comparison<br>• <strong>Composite (stacked) bar chart:</strong> sections stacked on top of each other, showing how each category breaks down'
      }
    },
    {
      id: 'h-pictogram',
      type: 'heading',
      data: { text: 'Pictograms', level: 2 }
    },
    {
      id: 'p-pictogram',
      type: 'paragraph',
      data: { text: 'A <strong>pictogram</strong> uses symbols or pictures to represent data. Each symbol represents a fixed number of items, shown in a <strong>key</strong>. Half or quarter symbols represent partial amounts.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Reading a Pictogram',
        text: 'If ☺ = 10 people and a row shows ☺☺☺½, how many people does it represent?<br><br><strong>Solution:</strong> 3.5 × 10 = <strong>35 people</strong>'
      }
    },
    {
      id: 'callout-tip-draw',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Drawing Bar Charts — Exam Checklist',
        text: '✓ Label both axes<br>✓ Give a title<br>✓ Use consistent scale on the frequency axis<br>✓ Equal bar widths<br>✓ Gaps between bars (for categorical/discrete data)<br>✓ Use a ruler for neat bars'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Bar charts use bars with gaps for categorical/discrete data. Pictograms use symbols with a key. Always label axes, use consistent scales, and include a title.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Bar charts have gaps between bars and use frequency on the y-axis. Pictograms use symbols with a key.',
    cues: [
      { id: 'cue-1', blockId: 'p-bar', prompt: 'What determines the frequency in a bar chart?', answer: 'The height (or length) of each bar.' },
      { id: 'cue-2', blockId: 'callout-key-types', prompt: 'What is a composite bar chart?', answer: 'Sections stacked on top of each other showing how categories break down.' },
      { id: 'cue-3', blockId: 'p-pictogram', prompt: 'What must a pictogram include?', answer: 'A key showing what each symbol represents.' },
      { id: 'cue-4', blockId: 'callout-tip-draw', prompt: 'List three things required when drawing a bar chart.', answer: 'Label both axes, consistent scale, equal bar widths with gaps.' }
    ]
  },
  evidence: []
};
