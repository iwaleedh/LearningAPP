export const note_economics_4_23_9 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Analyse how governance quality and corruption affect development outcomes, and evaluate institutional reform and international accountability mechanisms.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Governance, Corruption and Development', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Institutional quality — the rules, enforcement mechanisms, and organisational structures that govern economic and political life — is increasingly recognised as perhaps the most fundamental determinant of long-run economic development. Acemoglu, Johnson, and Robinson\'s research (Why Nations Fail, 2012) argues that inclusive institutions (secure property rights, rule of law, broad political participation) are the key difference between rich and poor nations, rather than geography or culture.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Good Governance Features', level: 3 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Good Governance Features and Development Effects',
        headers: ['Governance Feature', 'How It Promotes Development', 'Absence Creates...'],
        rows: [
          ['Rule of law', 'Contracts enforced; crimes prosecuted; predictable legal system encourages long-run investment and trade', 'Contract insecurity; arbitrary expropriation; capital flight; informal economy dominance'],
          ['Secure property rights', 'Assets can be used as collateral; incentive to invest and improve; Hernando de Soto: "dead capital" of unregistered assets cannot be leveraged', 'No incentive to invest in land or physical capital; legal informality; inability to access formal credit'],
          ['Transparency and accountability', 'Public knows how resources are used; corruption harder to conceal; public pressure for effective service delivery', 'Corruption; misallocation of public spending; elite capture of state resources'],
          ['Political stability / absence of violence', 'Long-term investment horizons possible; businesses plan and commit capital', 'Capital flight; underinvestment; physical destruction; diaspora exodus'],
          ['Regulatory quality', 'Effective regulation of markets reduces externalities; predictable business environment attracts FDI', 'Market failures unaddressed; arbitrary regulation deters investment; firms stay informal to avoid compliance']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Corruption and Development', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: '<strong>Corruption</strong> — the abuse of public power for private gain — diverts public resources to private pockets (embezzlement of aid and tax revenues); increases business costs (bribes to obtain licences, permits, contracts); distorts resource allocation (contracts awarded on bribes not merit); deters FDI (firms reluctant to invest where bribe costs are high and unpredictable); and undermines public trust in institutions. The <strong>Transparency International Corruption Perceptions Index (CPI)</strong> ranks countries on perceived corruption levels: Denmark, Finland, and New Zealand score highest (~90/100); South Sudan, Syria, and Somalia score lowest (~10/100). There is strong cross-country correlation between low CPI scores and low HDI.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Policy Responses', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>IMF/World Bank conditionality</strong> — loans contingent on governance reforms, transparency requirements, and anti-corruption measures; controversial effectiveness' },
          { text: '<strong>Transparency in extractive industries</strong> — EITI (Extractive Industries Transparency Initiative): companies publish what they pay; governments publish what they receive from oil/minerals' },
          { text: '<strong>Beneficial ownership registers</strong> — publicly disclosed registers of who ultimately owns companies prevent shell company corruption' },
          { text: '<strong>Independent anti-corruption bodies</strong> — e.g. Hong Kong\'s ICAC (Independent Commission Against Corruption) transformed governance from 1970s; Singapore\'s CPIB' },
          { text: '<strong>Digitalisation of public payments</strong> — direct government payments to beneficiaries via mobile money (as in India\'s DBT — Direct Benefit Transfer) reduces opportunities for corrupt intermediaries' }
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Good governance — rule of law, secure property rights, transparency, political stability, regulatory quality — is fundamental to development; corruption diverts resources, deters investment, and undermines trust; TI CPI shows strong correlation between corruption and low development; policy responses include conditionality, transparency initiatives, and digital payments.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'Explain how insecure property rights constrain economic development.',
        answer: 'Without secure property rights, there is no incentive to invest in land or assets (could be expropriated); assets cannot be used as collateral for credit (Hernando de Soto\'s "dead capital" — billions of dollars of unregistered property in developing countries cannot be leveraged for loans); long-term investment is deterred; firms remain informal to avoid state interactions.'
      },
      {
        id: 'cue-2',
        blockId: 'para-2',
        prompt: 'Through what mechanisms does corruption harm economic development?',
        answer: 'Corruption diverts public resources to private pockets (embezzlement of aid/tax revenues); increases business costs (bribes for licences/permits); distorts resource allocation (contracts awarded on bribes not merit); deters FDI (unpredictable bribe costs); undermines public trust in institutions. TI CPI shows strong cross-country correlation between high corruption and low HDI.'
      },
      {
        id: 'cue-3',
        blockId: 'list-1',
        prompt: 'How has digitalisation of public payments reduced corruption opportunities?',
        answer: 'India\'s Direct Benefit Transfer (DBT) programme routes government benefit payments directly to beneficiaries\' bank accounts via mobile phone, bypassing intermediary officials who previously demanded bribes to release payments. This has reduced leakage in food subsidies, fuel subsidies, and social transfers — saving billions and ensuring benefits reach intended recipients.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_23_9;
