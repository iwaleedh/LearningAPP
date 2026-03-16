export const note_business_2_10_2 = {
  pdfPath: '/notes/business/wbs12-10.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Analyse how changes in interest rates affect business borrowing costs, consumer spending, investment decisions and cash flow, and evaluate who is most affected.' }
    },
    {
      id: 'h-ir-def',
      type: 'heading',
      data: { text: 'What Are Interest Rates?', level: 2 }
    },
    {
      id: 'p-ir-def',
      type: 'paragraph',
      data: { text: 'The <b>interest rate</b> is the cost of borrowing money, expressed as a percentage of the amount borrowed. The <b>Bank of England base rate</b> is the key rate in the UK; commercial banks set their lending rates above this. When the Bank of England raises the base rate to reduce inflationary pressure, borrowing becomes more expensive across the economy. When it cuts rates to stimulate growth, borrowing becomes cheaper.' }
    },
    {
      id: 'callout-key-base',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Term',
        text: '<b>Bank of England base rate:</b> The interest rate at which the Bank of England lends to commercial banks. It influences all other interest rates in the economy — mortgages, business loans, savings accounts.'
      }
    },
    {
      id: 'h-borrowing',
      type: 'heading',
      data: { text: 'Effect on Business Borrowing Costs', level: 2 }
    },
    {
      id: 'p-borrowing',
      type: 'paragraph',
      data: { text: 'Higher interest rates increase the cost of <b>business loans and overdrafts</b>. Firms with variable-rate loans pay more interest automatically. New loans become more expensive, making it costlier to finance expansion, new equipment or working capital. This reduces business <b>investment</b> — firms delay or cancel capital expenditure projects when the cost of borrowing outweighs the expected return.' }
    },
    {
      id: 'list-borrowing',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Variable-rate loans:</b> Repayment costs rise immediately when base rate increases.' },
          { text: '<b>Fixed-rate loans:</b> Unaffected for the current term, but refinancing at expiry costs more.' },
          { text: '<b>Overdrafts:</b> Higher rate increases the cost of day-to-day cash flow management.' },
          { text: '<b>Capital investment:</b> Higher cost of capital reduces the net present value of investment projects.' }
        ]
      }
    },
    {
      id: 'h-consumer',
      type: 'heading',
      data: { text: 'Effect on Consumer Spending', level: 2 }
    },
    {
      id: 'p-consumer',
      type: 'paragraph',
      data: { text: 'Higher interest rates increase mortgage costs for homeowners, reducing their disposable income and therefore their spending on goods and services. Consumer credit (credit cards, car finance) becomes more expensive, discouraging borrowing to fund purchases. The result is a fall in <b>aggregate demand</b> — businesses reliant on consumer spending (retailers, hospitality, leisure) see lower revenues. Conversely, lower interest rates stimulate consumer spending, boosting demand.' }
    },
    {
      id: 'h-investment',
      type: 'heading',
      data: { text: 'Effect on Business Investment', level: 2 }
    },
    {
      id: 'p-investment',
      type: 'paragraph',
      data: { text: 'Investment decisions are evaluated against the <b>cost of capital</b>. When interest rates are low, the opportunity cost of investing is lower, making more projects financially viable. High interest rates raise the hurdle rate — projects that were previously profitable may no longer cover their financing costs. This is particularly significant for capital-intensive businesses such as construction, manufacturing and utilities, which often finance major projects through long-term borrowing.' }
    },
    {
      id: 'callout-worked-ir',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A firm borrows £500,000 at a variable rate. At 2% interest, annual repayment cost = £10,000. If the base rate rises to 5%, cost rises to £25,000 — an increase of £15,000/year. This directly reduces annual profit by £15,000 if revenue stays constant.'
      }
    },
    {
      id: 'table-ir-effects',
      type: 'comparisonTable',
      data: {
        caption: 'Impact of Rising interest rates vs Falling interest rates',
        headers: ['Area', 'Rising Interest Rates', 'Falling Interest Rates'],
        rows: [
          ['Business loans', 'Costlier to borrow → less investment', 'Cheaper to borrow → more investment'],
          ['Consumer spending', 'Mortgages more expensive → less disposable income → lower demand', 'Mortgages cheaper → more disposable income → higher demand'],
          ['Cash flow', 'Higher loan repayments strain cash flow', 'Lower repayments ease cash flow'],
          ['Savings', 'Consumers save more (opportunity cost of spending rises)', 'Consumers save less → more spending']
        ]
      }
    },
    {
      id: 'h-most-affected',
      type: 'heading',
      data: { text: 'Which Businesses Are Most Affected?', level: 2 }
    },
    {
      id: 'list-most-affected',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Highly geared firms</b> (high debt relative to equity) — a rate rise significantly raises interest payments.' },
          { text: '<b>Capital-intensive industries</b> (construction, manufacturing) — depend on cheap loans for machinery and buildings.' },
          { text: '<b>Retailers and consumer goods</b> — suffer when consumer spending falls due to higher mortgage costs.' },
          { text: '<b>Start-ups and SMEs</b> — often have limited equity, so rely more on borrowing at variable rates.' }
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Consider both the <b>supply side</b> (higher borrowing costs → higher costs → lower profitability) and the <b>demand side</b> (lower consumer spending → lower revenues). The combined effect makes a rate rise particularly damaging for businesses that are both highly geared and sell to households.'
      }
    },
    {
      id: 'enr-t10a-h-monetary',
      type: 'heading',
      data: { text: 'Interest Rates as Monetary Policy', level: 2 }
    },
    {
      id: 'enr-t10a-p-monetary',
      type: 'paragraph',
      data: { text: '<b>Monetary policy</b> refers to the Bank of England\'s use of interest rates (and other tools such as quantitative easing) to manage inflation and economic growth. The <b>Monetary Policy Committee (MPC)</b> meets eight times per year and votes on whether to change the base rate. When inflation rises above the 2% target, the MPC typically raises rates to cool borrowing and spending. When growth is too slow, rates are cut to stimulate investment and consumption. Businesses monitor MPC decisions carefully because they directly affect cost of capital and customer demand.' }
    },
    {
      id: 'enr-t10a-p-savers',
      type: 'paragraph',
      data: { text: 'Higher interest rates benefit <b>savers</b>, who earn more on deposits. However, for businesses, the dominant effect of a rate rise is negative: debt-servicing costs rise, consumer credit becomes more expensive (reducing demand), and the hurdle rate for capital projects increases. Businesses with large cash reserves — such as Apple — are relatively insulated. Start-ups and highly geared SMEs are most vulnerable, as they rely on variable-rate borrowing and have limited reserves to absorb rising interest payments.' }
    },
    {
      id: 'enr-t10a-callout-brand-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Real-World Example: Taylor Wimpey & Rising UK Rates 2022\u201323',
        text: 'Between December 2021 and August 2023, the Bank of England raised the base rate from 0.1% to 5.25% to combat double-digit inflation. UK house builders like Taylor Wimpey and Persimmon saw new home reservations collapse by over 40% as mortgage rates surged from ~2% to 6%+ — pricing buyers out of the market. Taylor Wimpey\'s pre-tax profit fell by 67% in 2023 compared with 2022. This illustrates how interest rate rises can devastate capital-intensive, consumer-facing sectors where purchases are financed largely through long-term borrowing.'
      }
    },
    {
      id: 'enr-t10a-callout-student-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Student-Relatable: Your Bank Overdraft & the Cost of Borrowing',
        text: 'Most student bank accounts offer a 0% overdraft (typically £1,500\u2013£3,000). That\'s a hidden interest subsidy worth potentially £60\u2013£120/year at standard rates. When you graduate and lose the 0% deal, a £1,000 overdraft at 40% EAR (a typical bank overdraft rate) costs ~£400/year. This mirrors exactly how interest rate changes hit businesses: when base rates rise, borrowing costs soar, eating into cash flow and profitability. Highly geared firms — with lots of debt relative to equity — feel every basis point of every rate rise.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Higher interest rates increase business borrowing costs, reduce consumer spending and depress business investment. Highly geared, capital-intensive firms and consumer-facing businesses are most vulnerable. Lower rates stimulate investment and spending but can fuel inflation. The Bank of England adjusts the base rate to balance growth and inflation targets.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Higher interest rates: costlier loans → less investment, lower consumer spending → less demand. Highly geared and capital-intensive firms are most affected. Lower rates stimulate spending and investment.',
    cues: [
      { id: 'cue-1', blockId: 'p-ir-def', prompt: 'What is the Bank of England base rate and why does it matter to businesses?', answer: 'The base rate is the rate at which the Bank of England lends to commercial banks. It influences all other interest rates in the UK, including business loans, mortgages and overdrafts.' },
      { id: 'cue-2', blockId: 'p-borrowing', prompt: 'How do rising interest rates affect a business with a variable-rate loan?', answer: 'The cost of loan repayments rises immediately, increasing costs and reducing profit unless revenue also rises.' },
      { id: 'cue-3', blockId: 'p-consumer', prompt: 'Why do rising interest rates reduce demand for consumer goods?', answer: 'Higher mortgage costs reduce homeowners\' disposable income. Costlier credit discourages consumer borrowing. Both reduce spending on goods and services.' },
      { id: 'cue-4', blockId: 'h-investment', prompt: 'Why do high interest rates reduce business investment?', answer: 'Investment projects are evaluated against the cost of capital. High borrowing costs raise the hurdle rate — fewer projects generate returns that exceed their financing costs.' },
      { id: 'cue-5', blockId: 'h-most-affected', prompt: 'Name TWO types of firm most affected by rising interest rates and explain why.', answer: '1. Highly geared firms — high debt means large interest payments increase sharply. 2. Capital-intensive firms (e.g. construction) — rely on long-term loans for machinery/buildings, so higher rates significantly raise their costs.' }
    ]
  },
  evidence: [],
  mentions: []
};
