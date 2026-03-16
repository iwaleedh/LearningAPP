export const note_economics_4_20_1 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Analyse the causes and consequences of current account deficits and surpluses, and evaluate methods of financing a current account deficit.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Current Account Deficits and Surpluses', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'A <strong>current account deficit</strong> exists when the value of imports of goods and services plus net income and transfer outflows exceeds the value of exports plus income and transfer inflows. A <strong>current account surplus</strong> is the reverse — more earned from abroad than paid abroad. The UK has run a persistent current account deficit since the early 1980s, while Germany, China, and Japan are persistent surplus countries.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Causes of the UK Current Account Deficit', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Deindustrialisation</strong> — loss of manufacturing export capacity since the 1970s means the UK cannot export enough goods to cover its import bill' },
          { text: '<strong>High propensity to import</strong> — strong domestic demand pulls in imports, particularly consumer goods' },
          { text: '<strong>Relatively high inflation</strong> — historically eroded price competitiveness of UK exports' },
          { text: '<strong>Overvalued exchange rate</strong> — sterling was overvalued at times (e.g. in the ERM 1990-92), making exports uncompetitive' },
          { text: '<strong>Low national savings rate</strong> — by national income accounting, CA deficit = investment - domestic savings; low UK savings imply borrowing from abroad' },
          { text: '<strong>Primary income deficit</strong> — profits repatriated by foreign-owned UK firms exceed UK firms\' overseas profits' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Surplus Countries: Germany, China, Japan', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Germany runs a large current account surplus (typically 6-8% of GDP) due to its strong export manufacturing base (cars, machinery, chemicals) and relatively low domestic consumption. China\'s surplus reflects export-led growth, currency management keeping the RMB undervalued, and high domestic savings rates. Japan\'s surplus reflects an ageing population with high savings and a strong export manufacturing sector, though the surplus has narrowed as import costs rose after 2011 (Fukushima nuclear closures increased energy imports).'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Financing a Current Account Deficit', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'A current account deficit must be financed — matched by a surplus on the financial and capital accounts. This occurs through: <strong>inward FDI</strong> (foreign firms investing in domestic assets), <strong>portfolio capital inflows</strong> (foreigners buying domestic bonds and equities), <strong>borrowing</strong> by government or firms from abroad, or <strong>running down foreign exchange reserves</strong>. The sustainability of deficit financing depends on the confidence of foreign investors.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Current Account Deficit: Causes, Consequences and Financing Methods',
        headers: ['Aspect', 'Detail', 'Policy Implication'],
        rows: [
          ['Goods deficit', 'UK imports more goods than it exports — structural manufacturing weakness', 'Supply-side policies to boost manufacturing productivity; education and skills'],
          ['Services surplus', 'UK has a services surplus (finance, education, professional services)', 'Protect and grow services exports; financial regulation matters for competitiveness'],
          ['Primary income deficit', 'Foreign ownership of UK assets means profit outflows exceed UK overseas earnings', 'Encourage UK outward FDI; improve returns on existing overseas investments'],
          ['Financed by FDI inflows', 'Foreign firms invest in UK — productive but implies growing foreign ownership', 'Sustainable if investment generates future export capacity'],
          ['Financed by portfolio flows', 'Foreign purchase of UK gilts and equities — more volatile than FDI', 'Vulnerable to sudden stops if confidence falls — risk of sterling crisis'],
          ['Financed by reserve depletion', 'Central bank sells foreign reserves — only viable short-term', 'Unsustainable — reserves finite; must eventually address underlying deficit']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Is a Current Account Deficit Necessarily a Problem?',
        text: 'Not always. A deficit financed by productive FDI inflows may improve future export capacity. A deficit reflecting high investment (not low savings) may be growth-enhancing. However, a deficit reflecting low competitiveness or excessive consumption financed by volatile portfolio flows is unsustainable and risks a sharp exchange rate correction.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'A current account deficit arises when import payments plus income outflows exceed export earnings plus income inflows; the UK deficit reflects deindustrialisation, low savings, and low competitiveness; it must be financed through capital and financial account surpluses.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-1',
        prompt: 'Give three structural causes of the UK\'s persistent current account deficit.',
        answer: 'Deindustrialisation (loss of manufacturing export capacity), high propensity to import consumer goods, and a low national savings rate meaning investment must be financed from abroad.'
      },
      {
        id: 'cue-2',
        blockId: 'para-3',
        prompt: 'How can a country finance a current account deficit?',
        answer: 'Through inward FDI, portfolio capital inflows (foreigners buying bonds/equities), government or corporate borrowing from abroad, or running down foreign exchange reserves. Sustainability depends on investor confidence.'
      },
      {
        id: 'cue-3',
        blockId: 'para-2',
        prompt: 'Why does Germany run a persistent current account surplus?',
        answer: 'Germany has a strong manufacturing export base (cars, machinery, chemicals), relatively low domestic consumption, and high household savings. Its surplus typically runs at 6-8% of GDP.'
      },
      {
        id: 'cue-4',
        blockId: 'call-1',
        prompt: 'Under what conditions is a current account deficit not a serious problem?',
        answer: 'When financed by productive FDI inflows that improve future export capacity, or when it reflects high investment rather than low savings. It becomes a problem when it reflects low competitiveness and is financed by volatile portfolio flows vulnerable to sudden reversal.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_20_1;
