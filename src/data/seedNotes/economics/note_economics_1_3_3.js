export const note_economics_1_3_3 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define the short run and long run in production, explain their implications for supply, and compare how costs and supply responsiveness differ between the two periods.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Short Run vs Long Run in Production', level: 2 },
      terms: []
    },
    {
      id: 'key-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Short Run Definition',
        text: 'The <strong>short run</strong> is a time period in which <strong>at least one factor of production is fixed</strong> (typically capital — machinery, factory size). Firms can only vary variable inputs such as labour and raw materials.'
      },
      terms: []
    },
    {
      id: 'key-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Long Run Definition',
        text: 'The <strong>long run</strong> is a time period in which <strong>all factors of production are variable</strong>. Firms can build new factories, invest in new capital, and change their scale of production entirely.'
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Implications for Supply', level: 3 },
      terms: []
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Short run supply:</strong> Relatively inelastic. Firms cannot quickly expand capacity. Output can only be increased by using more variable inputs (e.g. overtime), subject to diminishing returns.' },
          { text: '<strong>Long run supply:</strong> More elastic. Firms can invest in new capacity, new factories, and more capital. New firms can also enter the market.' },
          { text: '<strong>Fixed costs (short run):</strong> Do not change with output — e.g. rent, machinery, insurance premiums.' },
          { text: '<strong>Variable costs (both periods):</strong> Change with output — e.g. raw materials, piece-rate labour.' }
        ]
      },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Short run vs long run: key comparisons',
        headers: ['Feature', 'Short Run', 'Long Run'],
        rows: [
          ['Factor fixity', 'At least one fixed factor (capital)', 'All factors variable'],
          ['Supply elasticity (PES)', 'Inelastic (steep supply curve)', 'More elastic (flatter supply curve)'],
          ['Capacity adjustment', 'Cannot change factory/plant size', 'Can build new factories, buy new machinery'],
          ['Market entry/exit', 'Barriers may prevent immediate entry', 'New firms can enter; firms can exit'],
          ['Costs', 'Fixed + variable costs', 'All costs become variable'],
          ['Response to price rise', 'Limited output increase (diminishing returns)', 'Full output expansion possible']
        ]
      },
      terms: []
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Diminishing Returns (Short Run)', level: 3 },
      terms: []
    },
    {
      id: 'key-3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Law of Diminishing Returns',
        text: 'As more units of a <strong>variable factor</strong> (e.g. labour) are added to a <strong>fixed factor</strong> (e.g. capital), beyond some point the <strong>marginal product of the variable factor will fall</strong>. This causes short-run costs to rise as output expands.'
      },
      terms: []
    },
    {
      id: 'tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The short run and long run are <strong>conceptual</strong> time periods — they are not fixed calendar durations. For a bakery, the long run might be 6 months; for a nuclear power station, it could be 10+ years. Always link the time period to the specific industry in your answer.'
      },
      terms: []
    },
    {
      id: 'warn-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Do not confuse the <em>short run</em> with a specific number of months or years. It simply means the period in which at least one factor cannot be varied. Also, <strong>diminishing returns</strong> applies only to the short run — do not apply it to long-run analysis.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "The short run and long run are conceptual time periods \u2014 they are not fixed calendar durations. For a bakery, the long run might be 6 months; for a nuclear power station, it could be 10+ years. Always link the time period to the specific industry in your answer."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "In microeconomics, clearly define the short run and long run. The short run is a period where at least one factor of production is fixed, whereas in the long run, all factors of production are variable."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'The short run has at least one fixed factor (usually capital); the long run has all factors variable. Short-run supply is inelastic due to capacity constraints; long-run supply is more elastic.',
    cues: [
      { id: 'cue-1', blockId: 'key-1', prompt: 'Define the short run in economic terms.', answer: 'A time period in which at least one factor of production (typically capital) is fixed.' },
      { id: 'cue-2', blockId: 'key-2', prompt: 'Define the long run in economic terms.', answer: 'A time period in which all factors of production are variable.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'Why is supply more elastic in the long run than the short run?', answer: 'In the long run, all factors are variable — firms can expand capacity and new firms can enter, allowing a bigger response to price changes.' },
      { id: 'cue-4', blockId: 'key-3', prompt: 'State the law of diminishing returns.', answer: 'As more units of a variable factor are added to a fixed factor, beyond some point the marginal product of the variable factor falls.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_3_3;
