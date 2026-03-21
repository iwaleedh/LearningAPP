export const note_economics_1_3_4 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain how time constraints and storability affect the price elasticity of supply, including the concept of a fixed stock in the very short run.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Time and Stock Constraints on Supply', level: 2 },
      terms: []
    },
    {
      id: 'key-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Very Short Run',
        text: 'The <strong>very short run</strong> (also called the market period) is a time so short that <strong>supply is completely fixed</strong>. No additional output can be produced in response to a price change. The supply curve is <strong>perfectly inelastic (vertical)</strong>.'
      },
      terms: []
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 250"><rect width="360" height="250" fill="#0f172a"/><text x="180" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Supply Across Time Periods</text><!-- Axes left --><line x1="40" y1="210" x2="155" y2="210" stroke="#334155" stroke-width="1.5"/><line x1="40" y1="210" x2="40" y2="40" stroke="#334155" stroke-width="1.5"/><text x="158" y="214" font-size="9" fill="#334155">Q</text><text x="30" y="38" font-size="9" fill="#334155">P</text><!-- Vertical supply (very short run) --><line x1="90" y1="205" x2="90" y2="45" stroke="#ef4444" stroke-width="2.5"/><text x="92" y="40" font-size="9" fill="#ef4444">S_vsr</text><text x="75" y="226" font-size="9" fill="#ef4444">Very Short Run</text><text x="75" y="237" font-size="9" fill="#ef4444">(fixed stock)</text><!-- Axes right --><line x1="200" y1="210" x2="340" y2="210" stroke="#334155" stroke-width="1.5"/><line x1="200" y1="210" x2="200" y2="40" stroke="#334155" stroke-width="1.5"/><text x="343" y="214" font-size="9" fill="#334155">Q</text><text x="190" y="38" font-size="9" fill="#334155">P</text><!-- Inelastic short-run supply --><line x1="215" y1="200" x2="260" y2="50" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,3"/><text x="262" y="50" font-size="9" fill="#f59e0b">S_sr</text><!-- Elastic long-run supply --><line x1="215" y1="200" x2="330" y2="80" stroke="#10b981" stroke-width="2"/><text x="332" y="80" font-size="9" fill="#10b981">S_lr</text><text x="255" y="226" font-size="9" fill="#334155">Short run vs Long run</text></svg>',
        caption: 'Very short run: vertical supply (fixed stock). Short run: steep (inelastic). Long run: flatter (elastic).'
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Perishable vs Storable Goods', level: 3 },
      terms: []
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Perishable goods</strong> (e.g. fresh fish, cut flowers): Cannot be stored for long. If unsold, they perish. This makes supply <strong>highly inelastic</strong> — producers must sell at the prevailing price.' },
          { text: '<strong>Storable goods</strong> (e.g. tin cans, wheat, oil): Can be held in inventory. If prices are low, producers can hold stock and release it when prices rise. Supply is <strong>more elastic</strong>.' },
          { text: '<strong>Very short run (market period):</strong> Even for storable goods, the immediate stock on hand is fixed — supply is perfectly inelastic. A demand shift simply changes price, not quantity.' }
        ]
      },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Perishable vs storable goods — supply elasticity comparison',
        headers: ['Characteristic', 'Perishable Goods', 'Storable Goods'],
        rows: [
          ['Examples', 'Fresh fish, milk, cut flowers', 'Wheat, oil, tinned goods'],
          ['Can be held in stock?', 'No (or very short time)', 'Yes — can build inventory'],
          ['PES', 'Very inelastic (close to 0)', 'More elastic (can respond to price)'],
          ['Supply curve', 'Near-vertical', 'Upward-sloping with moderate gradient'],
          ['Effect of price rise', 'Small increase in quantity supplied', 'Larger increase as stock released']
        ]
      },
      terms: []
    },
    {
      id: 'tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When asked about PES, always consider the <strong>time horizon</strong> and <strong>storability</strong>. A question about a fisherman\'s daily catch is very different from a question about global oil reserves. State your assumptions explicitly.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "When asked about PES, always consider the time horizon and storability. A question about a fisherman's daily catch is very different from a question about global oil reserves. State your assumptions explicitly."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'In the very short run, supply is fixed (vertical curve). Perishable goods have inelastic supply; storable goods are more elastic because stock can be withheld or released.',
    cues: [
      { id: 'cue-1', blockId: 'key-1', prompt: 'What is the very short run, and what does the supply curve look like?', answer: 'The very short run is the market period when supply is completely fixed. The supply curve is vertical (perfectly inelastic).' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Why do perishable goods have highly inelastic supply?', answer: 'They cannot be stored — producers must sell at the prevailing price or lose the goods entirely, so quantity cannot respond to price changes.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'Why are storable goods more supply-elastic than perishable ones?', answer: 'Producers can hold inventory, withholding stock when prices are low and releasing it when prices rise, so quantity supplied responds more to price.' },
      { id: 'cue-4', blockId: 'list-1', prompt: 'In the very short run, what happens when demand increases?', answer: 'Only price changes; quantity supplied cannot change because the stock is fixed.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_3_4;
