export const note_economics_4_23_5 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Apply the Harrod-Domar model to analyse savings and foreign exchange gaps as constraints on development, and evaluate policy responses.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Savings and Foreign Exchange Gaps', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The <strong>Harrod-Domar model</strong> (1940s-50s) provides a simple framework for understanding why many developing economies struggle to sustain adequate growth rates. It identifies two binding constraints: the <strong>savings gap</strong> (insufficient domestic savings to finance necessary investment) and the <strong>foreign exchange gap</strong> (insufficient export earnings to finance necessary imports of capital goods).'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Harrod-Domar Model: Growth and Savings', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'The Harrod-Domar model states that the rate of economic growth depends on the level of savings and the productivity of capital investment:'
      }
    },
    {
      id: 'equation-1',
      type: 'equation',
      data: {
        latex: 'g = \\frac{s}{k}',
        caption: 'g = economic growth rate; s = savings rate (savings/GDP); k = capital-output ratio (investment needed per unit of output)'
      }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'If the required growth rate to absorb a growing labour force is, say, 5%, and the capital-output ratio is 4, the required savings rate is 20% (s = g × k = 5% × 4 = 20%). If domestic savings are only 10% of GDP, a <strong>savings gap</strong> of 10% of GDP exists — investment cannot proceed at the required rate without external finance. Many low-income countries have savings rates below 15% of GDP.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'The Savings Gap', level: 3 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: 'In a capital-scarce developing economy, domestic savings are insufficient to finance the level of investment needed to achieve adequate growth. Reasons for low savings in developing countries: (1) <strong>low incomes</strong> — poor households save very little as most income is consumed for basic needs; (2) <strong>lack of financial institutions</strong> — no safe or convenient savings vehicles; (3) <strong>capital flight</strong> — savings of wealthy nationals held abroad. The savings gap can be filled by: foreign direct investment (FDI), official development assistance (ODA/aid), portfolio capital inflows, or remittances.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'The Foreign Exchange Gap', level: 3 }
    },
    {
      id: 'para-5',
      type: 'paragraph',
      data: {
        text: 'Development requires importing capital goods (machinery, technology) and intermediate goods that cannot be produced domestically. If export earnings are insufficient to pay for these imports, a <strong>foreign exchange (forex) gap</strong> emerges. The forex gap is binding when: exports are concentrated in low-value commodities; import demand for capital goods is high; commodity prices are low; and external borrowing options are limited. Without filling this gap, investment and growth are constrained even if domestic savings are adequate.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Savings vs Foreign Exchange Gaps',
        headers: ['Gap Type', 'Definition', 'Causes', 'Policy Response'],
        rows: [
          ['Savings gap', 'Domestic savings < investment needed for target growth rate', 'Low incomes; lack of financial institutions; capital flight; cultural factors', 'FDI attraction; ODA (aid); remittances; microfinance; domestic financial sector development; postal savings banks'],
          ['Foreign exchange gap', 'Export earnings < import requirements for development-related capital goods', 'Commodity price falls; low export diversification; high import dependency for capital goods', 'Export promotion; trade liberalisation to lower import costs; FDI that brings in forex; IMF/World Bank loans; foreign aid tied to capital goods imports']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Limitations of the Harrod-Domar Model',
        text: 'The model assumes a fixed capital-output ratio (k) — in reality k varies with technology and management quality. It assumes savings automatically translate into productive investment — in reality, investment quality matters more than quantity. Post-colonial development experience showed many countries received foreign aid to fill savings gaps but grew slowly due to poor governance and institutional weakness. Robert Solow showed long-run growth is driven by productivity (TFP), not just savings rates.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Harrod-Domar: g = s/k; savings gap occurs when domestic savings < required investment; forex gap when export earnings < import needs for capital goods; both gaps can be filled by FDI, aid, remittances, and foreign loans, but model neglects institutional quality and productivity.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'equation-1',
        prompt: 'State the Harrod-Domar growth equation and use it to calculate the required savings rate if target growth is 6% and capital-output ratio is 4.',
        answer: 'g = s/k, where g = growth rate, s = savings rate, k = capital-output ratio. Required savings rate: s = g × k = 6% × 4 = 24% of GDP. If domestic savings are only 12%, a savings gap of 12% of GDP exists, requiring external finance (FDI, aid, loans) to fill it.'
      },
      {
        id: 'cue-2',
        blockId: 'para-5',
        prompt: 'Explain the foreign exchange gap and why it is a binding constraint on development.',
        answer: 'Development requires importing capital goods (machinery, technology) not available domestically. If export earnings are insufficient to cover these import costs, a forex gap emerges. Investment cannot proceed even if domestic savings are adequate because the needed capital goods cannot be purchased internationally. The gap must be filled by export earnings growth, FDI, aid, or foreign borrowing.'
      },
      {
        id: 'cue-3',
        blockId: 'call-1',
        prompt: 'Why did the Harrod-Domar model overestimate the growth impact of foreign aid in practice?',
        answer: 'The model assumes savings automatically translate into productive investment and that k (capital-output ratio) is fixed. In practice, investment quality (governance, institutions, project selection) matters more than quantity. Many aid-recipient countries had weak governance and institutional capacity, so aid did not generate the predicted growth — it was often wasted, misallocated, or captured by elites.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_23_5;
