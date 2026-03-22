export const note_economics_3_15_6 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Distinguish between price and non-price competition, explain why oligopolists prefer non-price competition, and evaluate each method with examples.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Price vs Non-Price Competition', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'In oligopolistic markets, firms must compete for customers without triggering destructive price wars. Competition takes two broad forms: <strong>price competition</strong> (competing on the price charged) and <strong>non-price competition</strong> (competing on everything else — quality, branding, service, innovation). Oligopolists tend to strongly prefer non-price competition.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Price Competition', level: 2 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Price competition</strong> involves firms cutting prices to attract customers. In theory, this benefits consumers through lower prices. However, in oligopoly, price cuts are likely to be matched by rivals (as in the kinked demand model), triggering a <strong>price war</strong>. Price wars erode profit margins for all firms without producing lasting market share gains.' }] } },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'The Risk of Price Wars',
        text: 'A price war occurs when competing firms continuously undercut each other\'s prices. While consumers benefit in the short run, price wars can reduce industry profits to near-zero levels and even drive firms out of the market. Predatory pricing — cutting prices below cost to eliminate rivals — is also illegal.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Non-Price Competition', level: 2 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Non-price competition</strong> allows firms to differentiate themselves without cutting prices. Because rivals cannot immediately copy most non-price strategies (unlike price cuts, which are instantly visible and matchable), they provide more durable competitive advantage. Key methods include product quality, branding, advertising, loyalty schemes, after-sales service, and product innovation.' }] } },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Price vs non-price competition: methods, advantages, and examples',
        headers: ['Method', 'Type', 'Advantage', 'Example'],
        rows: [
          ['Price cutting', 'Price', 'Gains customers quickly', 'Supermarket price wars on staples'],
          ['Loss leaders', 'Price', 'Drives footfall to store', 'Cheap milk/bread in supermarkets'],
          ['Product quality', 'Non-price', 'Builds brand loyalty, harder to copy', 'Apple\'s premium product quality'],
          ['Advertising/branding', 'Non-price', 'Creates perceived differentiation', 'Coca-Cola vs Pepsi brand campaigns'],
          ['Loyalty schemes', 'Non-price', 'Raises switching costs for customers', 'Tesco Clubcard, airline air miles'],
          ['After-sales service', 'Non-price', 'Reduces price sensitivity', 'Extended warranties, free delivery'],
          ['Innovation/R&D', 'Non-price', 'First-mover advantage in new products', 'Pharmaceutical new drug development'],
          ['Packaging/design', 'Non-price', 'Influences purchasing decisions', 'Premium packaging in cosmetics']
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Why Oligopolists Prefer Non-Price Competition', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Avoids price wars</strong>: Price cuts are matched instantly; non-price strategies take time for rivals to replicate.' },
          { text: '<strong>Protects profit margins</strong>: Maintaining prices allows firms to retain supernormal profits and fund investment.' },
          { text: '<strong>Builds lasting differentiation</strong>: Brand loyalty and product quality create barriers that are harder to overcome than price alone.' },
          { text: '<strong>Reduces uncertainty</strong>: Non-price competition creates more predictable competitive dynamics than price instability.' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Evaluation Point',
        text: 'Non-price competition is not always welfare-improving. Heavy advertising expenditure may raise costs without improving product quality — it creates barriers to entry (advertising sunk costs) and may manipulate consumer preferences rather than genuinely serving their interests.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Price competition is wasteful (race-to-the-bottom); non-price competition (branding, quality, service) is strategic. Don't assume all competitive tactics are price wars. Oligopolists often favour non-price competition precisely because it's less destabilizing\u2014this signals rational self-interest."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Price competition risks triggering price wars that destroy industry profits. Non-price competition — through quality, branding, loyalty schemes, and innovation — provides more durable competitive advantage in oligopoly.',
    cues: [
      { id: 'cue-1', blockId: 'para-2', prompt: 'Why is price competition risky in oligopoly?', answer: 'Price cuts are matched by rivals (kinked demand model), triggering price wars that reduce profit margins for all firms without lasting market share gains.' },
      { id: 'cue-2', blockId: 'para-3', prompt: 'Give three methods of non-price competition.', answer: 'Product quality, advertising/branding, loyalty schemes, after-sales service, product innovation, packaging.' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'Why do oligopolists prefer non-price to price competition?', answer: 'Non-price strategies take longer for rivals to copy, protect profit margins, build brand loyalty, and avoid destructive price wars.' },
      { id: 'cue-4', blockId: 'call-1', prompt: 'What is predatory pricing?', answer: 'Cutting prices below cost deliberately to drive rivals out of the market — this is illegal under competition law.' },
      { id: 'cue-5', blockId: 'call-2', prompt: 'Evaluate one limitation of non-price competition.', answer: 'Heavy advertising can raise costs without improving product quality, create entry barriers, and manipulate rather than genuinely serve consumer preferences.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_3_15_6;
