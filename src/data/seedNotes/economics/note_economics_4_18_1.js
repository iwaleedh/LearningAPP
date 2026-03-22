export const note_economics_4_18_1 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand the role of transnational corporations (TNCs) and foreign direct investment (FDI) in driving globalisation, distinguishing greenfield from brownfield investment and explaining key drivers of FDI growth.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Transnational Corporations and FDI Growth', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'A <strong>transnational corporation (TNC)</strong> — also called a multinational corporation (MNC) — is a firm that operates productive activities in two or more countries. TNCs are the principal agents of globalisation: they account for the majority of world trade (including intra-firm trade), and they are the primary source of <strong>foreign direct investment (FDI)</strong>.' }] } },
    {
      id: 'callout-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definitions',
        text: '<strong>FDI</strong> is a long-term investment in productive assets in a foreign country, giving the investor a significant degree of influence or control (typically ≥ 10% ownership).<br/><strong>Greenfield FDI:</strong> building new facilities from scratch (e.g. Toyota building a factory in Derby).<br/><strong>Brownfield FDI:</strong> acquiring or merging with an existing foreign firm (e.g. Jaguar Land Rover acquired by Tata Motors).'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Trends in FDI Growth', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'Global FDI stock has grown <strong>faster than world GDP</strong> and even faster than world trade since the 1980s. UNCTAD estimates that by the early 2020s, FDI stock exceeded $40 trillion. However, FDI flows are volatile — they collapsed during the 2008–09 Global Financial Crisis and again in 2020 during the COVID-19 pandemic before recovering.' }] } },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Drivers of TNC and FDI Growth', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Lower trade barriers:</strong> WTO rounds reduced tariffs, making cross-border production more viable.' },
          { text: '<strong>Advances in ICT:</strong> internet and telecommunications allow TNCs to coordinate operations globally.' },
          { text: '<strong>Reduced transport costs:</strong> containerisation made shipping cheap and reliable.' },
          { text: '<strong>Skilled labour globally:</strong> expanding education systems in emerging economies created workforces for TNCs.' },
          { text: '<strong>Deregulation of capital markets:</strong> financial liberalisation allowed profits, dividends, and capital to move freely.' },
          { text: '<strong>Host-country incentives:</strong> tax concessions, special economic zones, and favourable regulations attract FDI.' }
        ]
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Greenfield vs Brownfield FDI',
        headers: ['Feature', 'Greenfield FDI', 'Brownfield FDI'],
        rows: [
          ['Definition', 'Build entirely new facility', 'Acquire/merge with existing firm'],
          ['Capital creation', 'Adds new capital to host economy', 'Transfers existing capital'],
          ['Employment effect', 'Creates new jobs directly', 'Uncertain — may involve restructuring'],
          ['Speed of entry', 'Slower (construction required)', 'Faster (instant market access)'],
          ['Example', 'BMW expanding plant in South Africa', 'Anheuser-Busch acquiring SABMiller']
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'TNCs and Intra-Firm Trade', level: 3 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'A significant share of world trade is <strong>intra-firm trade</strong> — trade between different subsidiaries of the same TNC. TNCs may use <strong>transfer pricing</strong> to shift profits to low-tax jurisdictions by overcharging or undercharging subsidiaries for internal transactions. This reduces their global tax liability but deprives host governments of tax revenue.' }] } },
    {
      id: 'callout-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Exam Tip',
        text: 'Examiners often ask whether FDI always benefits the host country. Be ready to argue both sides: yes (jobs, technology), but also no (profit repatriation, transfer pricing, crowding out domestic firms).'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "In essays, distinguish between FDI (ownership and control of productive assets) and portfolio investment (passive shareholding). Examiners expect you to explain why TNCs choose FDI over exports\u2014this is about control, not just cost minimisation."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'TNCs drive globalisation through FDI; greenfield FDI builds new capacity while brownfield acquires existing firms. FDI stock has grown faster than GDP, driven by lower barriers, ICT, and deregulated capital markets.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-1',
        prompt: 'What is a transnational corporation and what is the minimum ownership threshold for FDI?',
        answer: 'A TNC operates in two or more countries. FDI requires at least 10% ownership to give significant influence or control.'
      },
      {
        id: 'cue-2',
        blockId: 'callout-1',
        prompt: 'Distinguish between greenfield and brownfield FDI with an example of each.',
        answer: 'Greenfield builds new facilities (e.g. Toyota plant in Derby); brownfield acquires an existing firm (e.g. Tata acquiring Jaguar Land Rover).'
      },
      {
        id: 'cue-3',
        blockId: 'list-1',
        prompt: 'State three drivers of FDI growth since the 1980s.',
        answer: 'Lower trade barriers (WTO rounds), advances in ICT enabling global coordination, and reduced transport costs through containerisation.'
      },
      {
        id: 'cue-4',
        blockId: 'para-3',
        prompt: 'What is transfer pricing and why is it controversial?',
        answer: 'Transfer pricing involves TNCs setting prices for internal transactions to shift profits to low-tax jurisdictions, reducing their tax bill and depriving host governments of revenue.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_18_1;
