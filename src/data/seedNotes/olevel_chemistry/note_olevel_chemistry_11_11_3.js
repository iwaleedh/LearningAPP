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
