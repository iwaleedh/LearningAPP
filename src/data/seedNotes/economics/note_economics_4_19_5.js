export const note_economics_4_19_5 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Define terms of trade, perform calculations using the index formula, and explain how changes in the terms of trade affect an economy.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Terms of Trade', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Terms of Trade Formula', text: '<strong>Terms of Trade (ToT)</strong> = (Index of export prices / Index of import prices) × 100<br/><br/>An index starting at 100. If ToT > 100, terms have improved; if ToT < 100, terms have deteriorated.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Worked Calculation', level: 2 } },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Terms of Trade Calculation', text: 'Export price index = 120; Import price index = 100<br/><br/>ToT = (120 / 100) × 100 = <strong>120</strong><br/><br/>Interpretation: terms of trade have <strong>improved</strong> — 1 unit of exports now buys 20% more imports than the base year. Country is better off in terms of purchasing power from trade.' } },
    { id: 'h-3', type: 'heading', data: { text: 'Effects of Terms of Trade Changes', level: 2 } },
    { id: 'tbl-effects', type: 'comparisonTable', data: { caption: 'Improvement vs Deterioration in Terms of Trade', headers: ['Change', 'Meaning', 'Likely Effect on Economy'], rows: [['Improvement (ToT rises)', 'Export prices rise relative to import prices', 'Higher real incomes as each export buys more imports; potential CA improvement if export volumes hold'], ['Deterioration (ToT falls)', 'Import prices rise relative to export prices', 'Reduced purchasing power; inflationary pressure from expensive imports; CA may worsen']] } },
    { id: 'h-4', type: 'heading', data: { text: 'Causes of Terms of Trade Changes', level: 2 } },
    { id: 'list-causes', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Commodity dependence</strong>: LDCs relying on primary exports face volatile ToT — commodity prices fluctuate while prices of imported manufactures are stickier (Prebisch–Singer hypothesis: secular decline in primary commodity prices).' }, { text: '<strong>Exchange rate movements</strong>: currency appreciation raises export prices in foreign currency terms → ToT improvement; depreciation → deterioration.' }, { text: '<strong>Productivity improvements abroad</strong>: if trading partners produce cheaper manufactured goods, import prices fall → ToT improvement for importers.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'LA/LDC Exam Context', text: 'The Prebisch–Singer hypothesis (1950s): terms of trade for primary commodity exporters have historically declined relative to manufactured goods. This helps explain why developing countries dependent on primary exports struggle to grow despite volume increases — they earn less per unit exported.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Terms of trade = (export price index / import price index) × 100. Improvement: exports buy more imports; deterioration: higher import costs, lower purchasing power. Causes: exchange rates, commodity prices, productivity. Prebisch–Singer: secular ToT decline for primary exporters.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Terms of Trade = (Index of Export Prices / Index of Import Prices) \u00d7 100. A rise benefits exporters; a fall harms them. Examiners test whether you link ToT changes to real income effects\u2014don't just calculate mechanically."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Discuss structural factors as causes of inequality, such as technological change favoring skilled workers over unskilled, and the impact of globalisation on domestic wage disparities."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'ToT = (export price index / import price index) × 100. Improvement: exports buy more imports. Deterioration: imports costlier. Causes: exchange rate, commodity prices, productivity. Prebisch-Singer: primary commodities face secular price decline relative to manufactures.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'State the terms of trade formula and interpret a ToT of 110.', answer: 'ToT = (Export price index / Import price index) × 100. ToT of 110 means export prices are 10% higher relative to import prices compared to the base year — terms of trade have improved. The country can buy 10% more imports per unit of exports; real purchasing power from trade has increased.' },
      { id: 'cue-2', blockId: 'list-causes', prompt: 'Explain the Prebisch-Singer hypothesis and its implications for developing economies.', answer: 'Prebisch and Singer (1950s): the terms of trade for primary commodity exporters (mainly developing countries) decline secularly relative to manufactured goods. This is because: demand for primary commodities has low income elasticity (Engel\'s law); technological progress reduces commodity content of manufactures; market power is greater for industrial exporters. Implication: developing countries grow export volumes but real purchasing power (ToT) deteriorates — argues for industrialisation strategy rather than primary specialisation.' },
    ]
  },
  evidence: [], mentions: []
};
