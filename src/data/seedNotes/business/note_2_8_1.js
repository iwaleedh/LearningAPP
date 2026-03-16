export const note_business_2_8_1 = {
  pdfPath: '/notes/business/wbs12-8.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate and interpret gross profit margin, operating profit margin and net profit margin, and evaluate how changes in these ratios indicate different aspects of business performance.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Profitability Ratios — Overview', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<b>Profitability ratios</b> measure how effectively a business converts its revenue into profit at different stages of the income statement. Unlike absolute profit figures — which can grow simply because revenue grows — ratios express profit as a <b>percentage of revenue</b>, enabling meaningful comparisons over time (trend analysis) and between firms of different sizes (inter-firm comparison). Edexcel IAL examiners expect you to calculate, interpret and evaluate all three margins in context.' }
    },
    {
      id: 'h-gpm',
      type: 'heading',
      data: { text: 'Gross Profit Margin (GPM)', level: 2 }
    },
    {
      id: 'p-gpm',
      type: 'paragraph',
      data: { text: 'The <b>gross profit margin</b> shows what percentage of revenue is retained as gross profit after deducting only the <em>direct</em> cost of production. A high GPM indicates strong pricing power and/or efficient production. A falling GPM typically signals rising raw material costs, a shift toward discounting, or an unfavourable change in the product mix towards lower-margin products. Retailers tend to have lower GPMs (~25%) while software or consultancy firms can achieve GPMs above 70%.' }
    },
    {
      id: 'eq-gpm',
      type: 'equation',
      data: {
        html: 'GPM (%) = <span class="nb-frac"><span class="nb-num">Gross Profit</span><span class="nb-den">Revenue</span></span> &times; 100',
        caption: 'GPM = (Gross Profit ÷ Revenue) × 100. Measures production and pricing efficiency.'
      }
    },
    {
      id: 'h-opm',
      type: 'heading',
      data: { text: 'Operating Profit Margin (OPM)', level: 2 }
    },
    {
      id: 'p-opm',
      type: 'paragraph',
      data: { text: 'The <b>operating profit margin</b> measures the percentage of revenue remaining after deducting <em>both</em> cost of sales and operating expenses (overheads such as rent, admin, distribution and salaries). It reflects overall operational efficiency and overhead cost control. If GPM is stable but OPM falls, it means overheads have risen disproportionately. OPM is preferred for inter-firm comparison because it excludes interest and tax, which depend on capital structure decisions rather than operations.' }
    },
    {
      id: 'eq-opm',
      type: 'equation',
      data: {
        html: 'OPM (%) = <span class="nb-frac"><span class="nb-num">Operating Profit</span><span class="nb-den">Revenue</span></span> &times; 100',
        caption: 'Also called EBIT margin. Excludes interest and tax — best for comparing operational efficiency between firms.'
      }
    },
    {
      id: 'h-npm',
      type: 'heading',
      data: { text: 'Net Profit Margin (NPM)', level: 2 }
    },
    {
      id: 'p-npm',
      type: 'paragraph',
      data: { text: 'The <b>net profit margin</b> shows the percentage of revenue retained as profit for owners after <em>all</em> costs — including interest and tax — have been deducted. It is the most comprehensive profitability ratio. A widening gap between OPM and NPM indicates either high interest payments (heavy debt) or a large tax liability. Comparing NPM over time reveals whether a business is becoming more or less profitable overall.' }
    },
    {
      id: 'eq-npm',
      type: 'equation',
      data: {
        html: 'NPM (%) = <span class="nb-frac"><span class="nb-num">Net Profit</span><span class="nb-den">Revenue</span></span> &times; 100',
        caption: 'Net profit = profit after interest and tax (profit for the year). Reflects returns to owners.'
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Calculating All Three Margins',
        text: 'Rexford plc: Revenue = £10,000,000; Gross Profit = £4,500,000; Operating Profit = £2,000,000; Net Profit = £1,300,000.\n\nGPM = (£4,500,000 ÷ £10,000,000) × 100 = <b>45%</b>\nOPM = (£2,000,000 ÷ £10,000,000) × 100 = <b>20%</b>\nNPM = (£1,300,000 ÷ £10,000,000) × 100 = <b>13%</b>\n\nInterpretation: Rexford retains 45p of every £1 of revenue after direct costs. Overheads reduce this to 20p, and financing/tax reduces it further to 13p for owners.'
      }
    },
    {
      id: 'tbl-scenarios',
      type: 'comparisonTable',
      data: {
        caption: 'Interpreting Changes in Profitability Margins',
        headers: ['Scenario', 'Likely Cause', 'Management Response'],
        rows: [
          ['GPM falls', 'Rising raw material costs or price discounting', 'Renegotiate supplier contracts; review pricing strategy'],
          ['GPM stable, OPM falls', 'Overhead costs increasing (rent, admin wages)', 'Cut overheads; improve cost control procedures'],
          ['OPM stable, NPM falls', 'Higher interest costs or increased tax', 'Reduce debt; restructure financing'],
          ['All margins rising', 'Improved operational efficiency or pricing power', 'Sustain strategy; consider reinvestment for growth'],
          ['All margins falling', 'Broad cost pressures and/or falling revenue', 'Full operational review; consider restructuring']
        ]
      }
    },
    {
      id: 'list-limitations',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Ratios are more meaningful when compared over time (<b>trend analysis</b>) or against competitors (<b>inter-firm comparison</b>).' },
          { text: 'Different industries have very different typical margin levels (e.g. supermarkets: low GPM ~25%; software: GPM 70%+).' },
          { text: 'Ratios use historical accounting data and do not reflect future prospects or off-balance-sheet risks.' },
          { text: 'Accounting policies (e.g. depreciation method, inventory valuation) can distort comparisons between firms.' },
          { text: 'A high margin does not guarantee financial health if revenue has fallen significantly in absolute terms.' }
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — How to Analyse a Ratio',
        text: 'When asked to "analyse" a ratio, always: (1) calculate it correctly and state the unit (%), (2) state whether it has improved or declined versus a comparison figure, (3) explain a likely cause, (4) evaluate a possible limitation of the ratio. Avoid merely restating the formula without applying it in context.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The three profitability margins — GPM, OPM and NPM — express profit as a percentage of revenue. <b>GPM</b> measures production and pricing efficiency; <b>OPM</b> reflects overall operational efficiency including overhead control; <b>NPM</b> shows returns to owners after all costs. All three should be compared over time and against industry benchmarks, with limitations acknowledged. A ratio standing alone carries limited meaning without context.' }
    },
    {
      id: 'enr-t8a-1-h-roce',
      type: 'heading',
      data: { text: 'Return on Capital Employed (ROCE)', level: 2 }
    },
    {
      id: 'enr-t8a-1-p-roce',
      type: 'paragraph',
      data: { text: '<b>Return on Capital Employed (ROCE)</b> measures how efficiently a business generates operating profit from the total capital invested in it. It is widely regarded as the most comprehensive single measure of financial performance because it links profitability directly to the funds committed by investors and lenders. A higher ROCE signals better returns per pound of capital employed. Critically, ROCE should be compared against the cost of borrowing: if ROCE exceeds the interest rate on loans, the business is generating genuine value from its capital.' }
    },
    {
      id: 'enr-t8a-1-eq-roce',
      type: 'equation',
      data: {
        html: 'ROCE (%) = <span class="nb-frac"><span class="nb-num">Operating Profit</span><span class="nb-den">Capital Employed</span></span> &times; 100',
        caption: 'Capital Employed = Total Assets − Current Liabilities (or Equity + Long-term Debt). Compare ROCE against the business\'s borrowing rate to assess value creation.'
      }
    },
    {
      id: 'enr-t8a-1-tbl-benchmarks',
      type: 'comparisonTable',
      data: {
        caption: 'Typical Profitability Ratios by Industry (approximate)',
        headers: ['Industry', 'Typical GPM', 'Typical NPM', 'Key Driver'],
        rows: [
          ['Supermarkets (e.g. Tesco)', '~25%', '2–3%', 'High volume; thin margins compressed by overheads'],
          ['Software / SaaS', '70–80%', '15–25%', 'Very low cost of sales; high overhead leverage'],
          ['Luxury goods (e.g. LVMH)', '65–70%', '18–22%', 'Premium pricing power from brand exclusivity'],
          ['Construction', '15–20%', '2–5%', 'High material and labour costs; narrow margins'],
          ['Restaurant / Hospitality', '60–70%', '3–9%', 'High GPM but large overheads (rent, staff) compress NPM']
        ]
      }
    },
    {
      id: 'enr-t8a-1-callout-apple',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Real Business — Apple vs Supermarkets',
        text: 'Apple consistently achieves a gross profit margin of around 43–46% and a net profit margin above 25%, driven by premium pricing and ecosystem lock-in. By contrast, Tesco typically posts a GPM of around 25% and an NPM below 3% — competing on volume with wafer-thin margins. Both are enormously successful businesses, yet their profitability profiles are completely different. This underlines why ratios must always be compared against <b>industry-specific benchmarks</b>: a 3% NPM is excellent for a supermarket but alarming for a software firm.'
      }
    },
    {
      id: 'enr-t8a-1-callout-student',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Relatable Example — Two Lemonade Stalls',
        text: 'Stall A and Stall B both earn £200 revenue. Stall A uses quality lemons and charges premium prices: GPM = 60% (£120 gross profit). Stall B underprices to attract more customers: GPM = 30% (£60 gross profit). After paying the same pitch hire fee of £40, Stall A has operating profit of £80 while Stall B makes only £20. Same revenue, very different profitability — just like comparing Apple to a budget smartphone brand. <b>Margins matter as much as revenue.</b>'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'GPM = (Gross Profit ÷ Revenue) × 100; OPM = (Operating Profit ÷ Revenue) × 100; NPM = (Net Profit ÷ Revenue) × 100.',
    cues: [
      { id: 'cue-1', blockId: 'eq-gpm', prompt: 'Write the formula for gross profit margin and state what it measures.', answer: 'GPM = (Gross Profit ÷ Revenue) × 100. It measures what percentage of revenue is retained after direct production costs, indicating pricing and production efficiency.' },
      { id: 'cue-2', blockId: 'eq-opm', prompt: 'Write the formula for operating profit margin and explain why it is preferred for inter-firm comparison.', answer: 'OPM = (Operating Profit ÷ Revenue) × 100. It is preferred for inter-firm comparison because it excludes interest and tax, which depend on capital structure rather than operations.' },
      { id: 'cue-3', blockId: 'eq-npm', prompt: 'What does the net profit margin tell you that operating profit margin does not?', answer: 'NPM includes the deduction of interest and tax, showing the proportion of revenue retained for owners after all costs including financing costs.' },
      { id: 'cue-4', blockId: 'tbl-scenarios', prompt: 'If GPM is stable but OPM falls significantly, what does this indicate about the business?', answer: 'It indicates that operating expenses (overheads) have risen as a proportion of revenue — direct production costs are controlled but indirect costs (e.g. rent, admin) are not.' },
      { id: 'cue-5', blockId: 'list-limitations', prompt: 'Give two limitations of using profitability ratios to assess business performance.', answer: 'Ratios use historical data; different industries have very different typical margins; accounting policies can distort comparisons; a high margin is misleading if revenue has collapsed.' },
      { id: 'cue-6', blockId: 'callout-we1', prompt: 'A firm has revenue £10m, gross profit £4.5m, operating profit £2m, net profit £1.3m. Calculate all three margins.', answer: 'GPM = 45%; OPM = 20%; NPM = 13%.' }
    ]
  },
  evidence: [],
  mentions: []
};
