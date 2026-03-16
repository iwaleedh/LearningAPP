export const note_olevel_chemistry_11_11_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-1-4-naming-organic-compounds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply IUPAC naming rules to name and draw organic compounds including alkanes, alkenes, alcohols, and carboxylic acids with up to 4 carbons.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'IUPAC Naming Rules', level: 2 }
    },
    {
      id: 'call-prefix',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Carbon Chain Prefixes',
        text: 'The prefix tells you the number of carbon atoms in the longest chain:<br/><br/><strong>meth-</strong> = 1 carbon<br/><strong>eth-</strong> = 2 carbons<br/><strong>prop-</strong> = 3 carbons<br/><strong>but-</strong> = 4 carbons<br/><strong>pent-</strong> = 5 carbons<br/><strong>hex-</strong> = 6 carbons'
      }
    },
    {
      id: 'tbl-suffix',
      type: 'comparisonTable',
      data: {
        caption: 'Suffix by functional group',
        headers: ['Suffix', 'Family', 'Functional group', 'Example'],
        rows: [
          ['-ane', 'Alkane', 'No functional group (saturated)', 'Butane (4C alkane)'],
          ['-ene', 'Alkene', 'C=C double bond', 'But-1-ene, but-2-ene'],
          ['-ol', 'Alcohol', '–OH group', 'Propan-1-ol'],
          ['-oic acid', 'Carboxylic acid', '–COOH group', 'Propanoic acid']
        ]
      }
    },
    {
      id: 'call-rules',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Naming an Alkene or Alcohol — Position Numbers',
        text: 'For alkenes and alcohols with 3+ carbons, state the position number of the double bond or –OH group:<br/><br/><strong>Prop-1-ene</strong> = C=C starts at C1: CH₂=CHCH₃<br/><strong>Prop-2-ol</strong> = –OH on C2: CH₃CH(OH)CH₃<br/><strong>But-1-ene</strong> = C=C starts at C1: CH₂=CHCH₂CH₃<br/><strong>But-2-ene</strong> = C=C starts at C2: CH₃CH=CHCH₃<br/><br/>Rule: number from the end of the chain that gives the functional group the <strong>lower number</strong>.'
      }
    },
    {
      id: 'svg-naming',
      type: 'svg',
      data: {
        caption: 'Numbering carbon chains to give the lowest possible number to the functional group.',
        svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- But-1-ene -->
  <g transform="translate(50, 40)">
    <text x="0" y="0" font-family="var(--font-mono)" font-size="20" fill="var(--color-text)">CH<tspan dy="6" font-size="14">2</tspan><tspan dy="-6">=</tspan>CH<tspan dy="6" font-size="14"></tspan><tspan dy="-6">—</tspan>CH<tspan dy="6" font-size="14">2</tspan><tspan dy="-6">—</tspan>CH<tspan dy="6" font-size="14">3</tspan></text>
    
    <!-- Numbers -->
    <text x="12" y="25" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#ef4444">1</text>
    <text x="50" y="25" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#ef4444">2</text>
    <text x="100" y="25" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#ef4444">3</text>
    <text x="150" y="25" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#ef4444">4</text>

    <!-- Label -->
    <text x="75" y="60" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="#dc2626" text-anchor="middle">But-1-ene</text>
  </g>

  <!-- But-2-ene -->
  <g transform="translate(350, 40)">
    <text x="0" y="0" font-family="var(--font-mono)" font-size="20" fill="var(--color-text)">CH<tspan dy="6" font-size="14">3</tspan><tspan dy="-6">—</tspan>CH<tspan dy="6" font-size="14"></tspan><tspan dy="-6">=</tspan>CH<tspan dy="6" font-size="14"></tspan><tspan dy="-6">—</tspan>CH<tspan dy="6" font-size="14">3</tspan></text>
    
    <!-- Numbers -->
    <text x="12" y="25" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#3b82f6">1</text>
    <text x="60" y="25" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#3b82f6">2</text>
    <text x="100" y="25" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#3b82f6">3</text>
    <text x="150" y="25" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#3b82f6">4</text>

    <!-- Label -->
    <text x="75" y="60" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="#2563eb" text-anchor="middle">But-2-ene</text>
  </g>

  <!-- Propan-2-ol -->
  <g transform="translate(200, 140)">
    <text x="0" y="0" font-family="var(--font-mono)" font-size="20" fill="var(--color-text)">CH<tspan dy="6" font-size="14">3</tspan><tspan dy="-6">—</tspan>CH<tspan dy="6" font-size="14"></tspan><tspan dy="-6">—</tspan>CH<tspan dy="6" font-size="14">3</tspan></text>
    
    <!-- Branch OH -->
    <path d="M 68 8 L 68 25" fill="none" stroke="var(--color-text)" stroke-width="2"/>
    <text x="68" y="42" font-family="var(--font-mono)" font-size="18" fill="var(--color-text)" text-anchor="middle">OH</text>
    
    <!-- Numbers -->
    <text x="12" y="-20" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#10b981">1</text>
    <text x="60" y="-20" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#10b981">2</text>
    <text x="110" y="-20" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#10b981">3</text>

    <!-- Label -->
    <text x="210" y="5" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="#059669">Propan-2-ol</text>
  </g>

</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Prefix = chain length (meth/eth/prop/but). Suffix = family (-ane, -ene, -ol, -oic acid). For 3+ C, add position number of functional group (e.g. but-2-ene, propan-2-ol). Number from end that gives lowest position.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Prefix: meth(1), eth(2), prop(3), but(4). Suffix: -ane/-ene/-ol/-oic acid. Add position for 3+ C (e.g. but-2-ene, propan-2-ol).',
    cues: [
      { id: 'cue-1', blockId: 'call-prefix', prompt: 'What prefixes are used for 1, 2, 3, and 4 carbon chains in IUPAC nomenclature?', answer: 'meth- (1), eth- (2), prop- (3), but- (4).' },
      { id: 'cue-2', blockId: 'tbl-suffix', prompt: 'What suffix is used for carboxylic acids, and what is an example?', answer: '-oic acid. Example: ethanoic acid (2C carboxylic acid, CH₃COOH).' },
      { id: 'cue-3', blockId: 'call-rules', prompt: 'Name the isomers of butene and draw their structural formulae.', answer: 'But-1-ene: CH₂=CHCH₂CH₃. But-2-ene: CH₃CH=CHCH₃. The number shows which carbon the double bond starts on.' }
    ]
  },
  evidence: [],
  mentions: []
};
