export const note_economics_4_23_7 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Analyse financial exclusion and limited credit access as development constraints, and evaluate microfinance and mobile banking as solutions.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Credit and Banking Access in Development', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: '<strong>Financial exclusion</strong> — the inability to access basic financial services (savings accounts, credit, insurance, payment systems) — affects approximately 1.4 billion adults globally (World Bank Global Findex 2021). This is primarily concentrated in developing countries: only ~45% of adults in Sub-Saharan Africa and ~50% in South Asia have bank accounts. Financial exclusion prevents households from saving securely, borrowing to invest in businesses or education, insuring against shocks, and making efficient payments — all of which are fundamental to development.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Why Do Formal Banks Exclude the Poor?', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>High transaction costs</strong> — small loans and deposits are not profitable for banks; fixed costs spread over small amounts make them unviable' },
          { text: '<strong>Information asymmetry</strong> — banks lack credit information on poor borrowers; no credit history, no collateral; adverse selection and moral hazard problems are severe' },
          { text: '<strong>Geographic remoteness</strong> — rural areas lack bank branches; high travel costs make accessing banks impractical for poor farmers' },
          { text: '<strong>Documentation requirements</strong> — proof of income, identity documents, and formal address requirements exclude many in the informal sector' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Microfinance', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: '<strong>Microfinance</strong> provides small loans (microcredit), savings facilities, and insurance to low-income individuals and microenterprises outside the formal banking system. The <strong>Grameen Bank</strong> (Muhammad Yunus, Bangladesh, 1983) pioneered the group lending model: loans given to small groups (~5 women) where peer pressure and joint liability serve as collateral substitutes, dramatically reducing default rates. By 2023, the Grameen Bank had over 9 million borrowers, ~97% women, in 81,000 Bangladeshi villages. Yunus won the Nobel Peace Prize in 2006.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Mobile Banking and Digital Finance', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: '<strong>M-Pesa</strong> (launched 2007 in Kenya by Safaricom/Vodafone) revolutionised financial inclusion in East Africa by allowing mobile phone users to store, send, and receive money via text message — without a bank account. By 2023, M-Pesa processed over $300 billion in transactions annually and had 51 million active users across 7 African countries. Research (Suri & Jack, 2016) found M-Pesa lifted 194,000 Kenyan households out of poverty by enabling women to save and start businesses. The mobile banking model has since spread across Africa, South Asia, and Southeast Asia (bKash in Bangladesh, GCash in Philippines).'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Microfinance vs Mobile Banking',
        headers: ['Feature', 'Microfinance (Grameen model)', 'Mobile Banking (M-Pesa model)'],
        rows: [
          ['Primary service', 'Small loans (microcredit); savings; insurance', 'Payments; money transfers; savings; increasingly credit and insurance'],
          ['Infrastructure needed', 'Field officers; branch network or group meetings', 'Mobile phone and SIM; no bank branch needed'],
          ['Scalability', 'Limited by cost of field officers; growth is personnel-intensive', 'Highly scalable — can reach millions cheaply through mobile network'],
          ['Key innovation', 'Group liability replaces collateral; social pressure reduces default', 'Mobile money agent network replaces bank branches; airtime-based identity'],
          ['Limitations', 'Interest rates often very high (20-40%); risk of over-indebtedness; credit not always used productively', 'Requires mobile phone access; network infrastructure; regulation challenges; digital literacy needed']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Criticism of Microfinance',
        text: 'Randomised controlled trials (Banerjee, Duflo, Karlan et al.) found average impact of microcredit on income and poverty is modest. Some borrowers use credit for consumption rather than investment. High interest rates (Grameen averages ~20%, commercial microfinance 30-40%) can trap vulnerable households in debt. Critics argue microfinance is oversold as a development solution — it can help at the margin but cannot substitute for public investment in education, health, and infrastructure.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Financial exclusion affects ~1.4bn adults globally; formal banks exclude the poor due to high transaction costs, information asymmetry, and geographic remoteness; Grameen Bank pioneered group-liability microfinance; M-Pesa mobile banking in Kenya reached millions cheaply and demonstrably reduced poverty.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'How does the Grameen Bank\'s group lending model solve the collateral problem for poor borrowers?',
        answer: 'Loans are given to small groups (~5 people) with joint liability — if one member defaults, the others are responsible. Peer pressure and social capital within the group substitute for formal collateral, dramatically reducing default rates. The model also provides regular group meetings for loan monitoring and financial education.'
      },
      {
        id: 'cue-2',
        blockId: 'para-3',
        prompt: 'How did M-Pesa transform financial inclusion in Kenya?',
        answer: 'M-Pesa (2007) allows mobile phone users to store, send, and receive money via text message without a bank account, using a network of mobile money agents instead of bank branches. By 2023 it had 51 million users and processed $300bn+ annually. Research found it lifted 194,000 Kenyan households out of poverty by enabling women\'s savings and entrepreneurship.'
      },
      {
        id: 'cue-3',
        blockId: 'call-1',
        prompt: 'What does RCT evidence show about the actual impact of microcredit on poverty?',
        answer: 'RCTs (Banerjee, Duflo, Karlan et al.) found average impacts of microcredit on income and poverty are modest. Some borrowers use loans for consumption not investment; high interest rates (20-40%) can create debt traps. Microfinance helps at the margin but cannot substitute for public investment in education, health, and infrastructure as a development strategy.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_23_7;
