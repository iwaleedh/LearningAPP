export const note_economics_4_22_12 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Evaluate international efforts to control multinational tax avoidance including BEPS, the global minimum corporate tax, and automatic information exchange.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Controlling TNC Tax Avoidance', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Transnational corporations (TNCs) use complex international structures to minimise their corporate tax bills. This deprives governments of revenue needed for public services and creates an unfair competitive advantage for large multinationals over domestic firms. The OECD estimates Base Erosion and Profit Shifting (BEPS) costs governments $100-240 billion per year globally — 4-10% of global corporate tax revenues.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Key Tax Avoidance Methods', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Transfer pricing manipulation</strong> — TNCs set internal prices for transactions between subsidiaries in different countries to shift profits to low-tax jurisdictions (e.g. a UK subsidiary "buys" services from a Cayman Islands subsidiary at an inflated price, reducing UK taxable profits)' },
          { text: '<strong>Tax haven use</strong> — booking profits in low/zero-tax jurisdictions (Ireland, Luxembourg, Cayman Islands, Bermuda) where little real economic activity occurs' },
          { text: '<strong>Debt shifting</strong> — loading high-tax subsidiaries with intra-group debt, making interest payments deductible; shifting interest income to low-tax entities' },
          { text: '<strong>IP holding companies</strong> — locating intellectual property rights (patents, brands) in low-tax jurisdictions; charging high royalties to high-tax operating subsidiaries' },
          { text: '<strong>Treaty shopping</strong> — routing dividends, interest, or royalties through countries with favourable tax treaty networks to minimise withholding taxes' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'OECD BEPS Project', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'The OECD\'s <strong>Base Erosion and Profit Shifting (BEPS)</strong> project (launched 2013) produced 15 action points to close tax avoidance loopholes. Key actions include: (1) Country-by-Country Reporting (CbCR) — TNCs must report profits, taxes, employees in each country; (2) Limiting interest deductibility; (3) Transfer pricing guidelines tightened; (4) Hybrid mismatch rules; (5) Anti-abuse provisions in tax treaties. Implementation is ongoing and varies by country.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Global Minimum Corporate Tax', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'In October 2021, 137 countries (representing 90%+ of global GDP) agreed to implement a <strong>global 15% minimum effective corporate tax rate</strong> for large MNCs (annual revenue >€750m) under the OECD/G20 Inclusive Framework Pillar Two. Under the "top-up" mechanism, if a company pays an effective rate below 15% in any country, its home country can top up the tax to 15%. This removes much of the incentive for tax haven profit-booking. The EU and UK have implemented the rules; developing countries\' implementation is more variable.'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Common Reporting Standard (CRS)', level: 3 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: 'The <strong>Common Reporting Standard (CRS)</strong>, developed by the OECD and adopted by 100+ countries, requires financial institutions to automatically exchange information about account holders with foreign tax authorities. This makes it much harder for individuals and companies to hide income or assets in foreign accounts without tax authorities knowing. The US has its own version — FATCA (Foreign Account Tax Compliance Act).'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Tax Avoidance Methods and Policy Responses',
        headers: ['Avoidance Method', 'Mechanism', 'Policy Response'],
        rows: [
          ['Transfer pricing', 'Internal prices set to shift profits to low-tax subsidiaries', 'OECD arm\'s length transfer pricing guidelines; country-by-country reporting'],
          ['Tax havens / profit-booking', 'Booking profits in zero/low-tax jurisdictions', 'Global 15% minimum corporate tax (Pillar Two, 2021); CRS information exchange'],
          ['Debt shifting', 'Intra-group loans shift interest deductions to high-tax entities', 'BEPS Action 4: interest deductibility cap at 30% EBITDA'],
          ['IP holding companies', 'Royalty payments to IP-holding entities in low-tax jurisdictions', 'Nexus approach: IP tax benefits only where R&D activity occurs'],
          ['Offshore account concealment', 'Hiding income/assets in foreign bank accounts', 'CRS automatic information exchange; FATCA; beneficial ownership registers']
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'TNCs use transfer pricing, tax havens, debt shifting, and IP structures to minimise taxes, costing governments $100-240bn/year; OECD BEPS project (2013) closes loopholes; the 2021 global 15% minimum corporate tax removes incentives for haven profit-booking; CRS enables automatic information exchange.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-1',
        prompt: 'Explain how transfer pricing manipulation enables TNCs to avoid corporate tax.',
        answer: 'TNCs set internal prices for transactions between subsidiaries across borders. By charging inflated prices for services/goods from low-tax subsidiaries to high-tax ones, they artificially reduce taxable profits in high-tax jurisdictions and inflate profits in low-tax jurisdictions, shifting the tax base to where rates are lowest.'
      },
      {
        id: 'cue-2',
        blockId: 'para-3',
        prompt: 'How does the global minimum corporate tax (Pillar Two) work?',
        answer: 'Large MNCs (revenue >€750m) must pay an effective rate of at least 15% globally. If they pay less than 15% in any jurisdiction (through profit-booking in tax havens), their home country can "top up" the tax to 15%. This removes the incentive to book profits in zero-tax havens, as the home country captures the revenue instead.'
      },
      {
        id: 'cue-3',
        blockId: 'para-4',
        prompt: 'What is the Common Reporting Standard and why is it important?',
        answer: 'The CRS requires financial institutions to automatically exchange information about foreign account holders with the relevant tax authorities. Adopted by 100+ countries, it makes it much harder to hide income or assets in foreign bank accounts — eliminating the secrecy that makes tax havens attractive. It represents a shift from reactive to automatic information sharing.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_22_12;
