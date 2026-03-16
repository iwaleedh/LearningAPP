const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'data', 'seedNotes', 'business');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const notes = {
  "note_3_15_0": {
    topic: "Income statement interpretation",
    content: `export const note_business_3_15_0 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand how to interpret the components and significance of an income statement.' } },
    { id: 'h-1', type: 'heading', data: { text: 'The Income Statement', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'The income statement, formerly known as the profit and loss account, is a key financial document that shows a business\\'s revenue, expenses, and profit over a specific trading period, typically a year. It provides vital information on the financial performance and operational efficiency of the business.' } },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Key Idea', text: 'The income statement highlights the difference between revenue (money in from sales) and costs (money out), indicating whether a profit or loss was generated.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Components of an Income Statement', level: 3 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\\**Revenue (Sales or Turnover):\\** The total value of goods or services sold during the period.' },
      { text: '\\**Cost of Sales:\\** The direct costs attributable to producing the goods sold by a company (e.g., raw materials).' },
      { text: '\\**Gross Profit:\\** Revenue minus the Cost of Sales.' },
      { text: '\\**Operating Expenses (Overheads):\\** Indirect costs not directly tied to production, such as rent, salaries, and marketing.' },
      { text: '\\**Operating Profit:\\** Gross profit minus Operating Expenses.' },
      { text: '\\**Finance Costs:\\** Interest paid on borrowings.' },
      { text: '\\**Profit for the Year (Net Profit):\\** Operating profit minus finance costs and tax.' }
    ] } },
    { id: 'call-2', type: 'callout', data: { style: 'warning', title: 'Common Pitfall', text: 'Do not confuse gross profit with net profit. Gross profit only considers direct production costs, whereas net profit takes all business expenses into account.' } },
    { id: 'h-3', type: 'heading', data: { text: 'Interpreting the Income Statement', level: 3 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'Interpreting an income statement involves more than just looking at the final profit figure. It requires analyzing trends over time and comparing figures with competitors to assess competitiveness.' } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [
      { text: 'A falling gross profit margin might indicate rising raw material costs or increased price competition.' },
      { text: 'A rising operating profit suggests better control over overheads and improved operational efficiency.' },
      { text: 'High finance costs compared to operating profit can indicate that the business is overly reliant on debt.' }
    ] } },
    { id: 'call-3', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'If a business has a Revenue of £500,000, Cost of Sales of £200,000, and Overheads of £150,000. \\nGross Profit = £500,000 - £200,000 = £300,000. \\nOperating Profit = £300,000 - £150,000 = £150,000.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'The income statement is essential for assessing business performance. By analyzing its components—Revenue, Gross Profit, Operating Profit, and Profit for the Year—stakeholders can interpret the efficiency and profitability of trading activities.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-1', prompt: 'What is the primary purpose of an income statement?', answer: 'To show a business\\'s revenue, expenses, and profit (financial performance) over a specific trading period.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'How is Gross Profit calculated?', answer: 'Revenue minus Cost of Sales.' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'How is Operating Profit calculated?', answer: 'Gross Profit minus Operating Expenses (Overheads).' },
      { id: 'cue-4', blockId: 'list-1', prompt: 'What does "Profit for the Year" represent?', answer: 'The final net profit after all expenses, finance costs, and tax have been deducted from revenue.' },
      { id: 'cue-5', blockId: 'list-2', prompt: 'What might an increasing operating profit indicate?', answer: 'Improved operational efficiency and better control over overhead expenses.' }
    ],
    summaryText: 'Income statements show financial performance over a period, detailing revenue, costs, gross profit, operating profit, and net profit.'
  }
};`
  },
  "note_3_15_1": {
    topic: "Statement of financial position interpretation",
    content: `export const note_business_3_15_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand how to interpret the components and significance of a statement of financial position (balance sheet).' } },
    { id: 'h-1', type: 'heading', data: { text: 'The Statement of Financial Position', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'The statement of financial position, traditionally known as the balance sheet, provides a snapshot of a business\\'s financial health at a specific point in time. It details the assets the business owns, the liabilities it owes, and the equity invested by shareholders.' } },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Key Equation', text: 'Assets = Liabilities + Equity. The fundamental accounting equation ensures that the statement of financial position always "balances".' } },
    { id: 'h-2', type: 'heading', data: { text: 'Key Components', level: 3 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\\**Non-current Assets:\\** Items intended for long-term use (e.g., premises, machinery, vehicles, intangibles like goodwill).' },
      { text: '\\**Current Assets:\\** Short-term items that can quickly be converted to cash (e.g., inventory, trade receivables, cash at bank).' },
      { text: '\\**Current Liabilities:\\** Short-term debts payable within a year (e.g., trade payables, overdrafts).' },
      { text: '\\**Non-current Liabilities:\\** Long-term debts payable over more than a year (e.g., bank loans, mortgages).' },
      { text: '\\**Total Equity:\\** The capital invested by shareholders plus retained earnings.' }
    ] } },
    { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Assets vs Liabilities',
      headers: ['Type', 'Definition', 'Examples'],
      rows: [
        ['Current Assets', 'Owned items easily converted to cash within 1 year', 'Cash, Inventory, Receivables'],
        ['Non-current Assets', 'Owned items held for long-term use (>1 year)', 'Property, Equipment, Intangibles'],
        ['Current Liabilities', 'Owed debts payable within 1 year', 'Overdraft, Payables, Short-term loan'],
        ['Non-current Liab.', 'Owed debts payable in >1 year', 'Mortgage, Long-term bank loan']
      ]
    } },
    { id: 'call-2', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Net Current Assets (Working Capital) is Current Assets minus Current Liabilities. It shows the short-term financial liquidity of the firm.' } },
    { id: 'h-3', type: 'heading', data: { text: 'Interpreting the Statement', level: 3 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'Analyzing the statement of financial position helps stakeholders assess the liquidity and solvency of a company. A strong position shows high equity, manageable debt levels (gearing), and sufficient working capital to cover short-term liabilities.' } },
    { id: 'p-3', type: 'paragraph', data: { text: 'Conversely, relying too heavily on overdrafts (high current liabilities) compared to liquid assets suggests a weak liquidity position and potential cash flow difficulties.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'The statement of financial position is a snapshot showing Assets (what is owned), Liabilities (what is owed), and Equity. Interpretation involves assessing liquidity (working capital) and long-term financial stability.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-1', prompt: 'What does the statement of financial position show?', answer: 'A snapshot of a business\\'s assets, liabilities, and equity at a specific point in time.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Define non-current assets and provide an example.', answer: 'Assets intended for long-term use in the business, such as machinery, premises, or vehicles.' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'What are current liabilities?', answer: 'Short-term debts that the business must pay within one year, e.g., overdrafts or trade payables.' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'How is working capital (net current assets) calculated?', answer: 'Current Assets minus Current Liabilities.' },
      { id: 'cue-5', blockId: 'call-1', prompt: 'What is the fundamental accounting equation?', answer: 'Assets = Liabilities + Equity' }
    ],
    summaryText: 'Statement of financial position details assets, liabilities, and equity at a point in time, indicating working capital and long-term stability.'
  }
};`
  },
  "note_3_15_2": {
    topic: "Profitability and liquidity ratios",
    content: `export const note_business_3_15_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Calculate and interpret profitability and liquidity ratios to assess business competitiveness.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Profitability Ratios', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'Profitability ratios measure a company\\'s absolute and relative success at generating profit from its operations and revenue. They are critical for investors and managers assessing efficiency.' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\\**Gross Profit Margin (%):\\** (Gross Profit ÷ Revenue) × 100. Measures the percentage of sales revenue left after deducting direct costs of production.' },
      { text: '\\**Operating Profit Margin (%):\\** (Operating Profit ÷ Revenue) × 100. Indicates how well a business is managing its indirect costs (overheads).' },
      { text: '\\**Profit for the Year Margin (%):\\** (Profit for the Year ÷ Revenue) × 100. Shows the final percentage of revenue that is retained as net profit.' }
    ] } },
    { id: 'call-1', type: 'callout', data: { style: 'worked', title: 'Calculating Profitability', text: 'Revenue = £800k, Gross Profit = £400k, Operating Profit = £160k. \\nGross Profit Margin = (400/800)*100 = 50%.\\nOperating Profit Margin = (160/800)*100 = 20%.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Liquidity Ratios', level: 2 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'Liquidity ratios assess a business\\'s ability to meet its short-term debt obligations using its short-term assets. A lack of liquidity can lead to insolvency and business failure.' } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [
      { text: '\\**Current Ratio:\\** Current Assets ÷ Current Liabilities. Evaluates general short-term solvency. A ratio between 1.5:1 and 2:1 is generally considered healthy.' },
      { text: '\\**Acid Test (Quick) Ratio:\\** (Current Assets - Inventory) ÷ Current Liabilities. A more severe test of liquidity that excludes stock, as inventory can be difficult to sell quickly. A ratio of around 1:1 is desirable.' }
    ] } },
    { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Interpreting Liquidity Ratios',
      headers: ['Ratio Result', 'Indication', 'Potential Action'],
      rows: [
        ['Current Ratio < 1:1', 'Poor liquidity, struggle to pay debts', 'Delay payments, sell assets, obtain loan'],
        ['Current Ratio > 2:1', 'Too much cash tied up in unproductive assets', 'Invest cash, distribute dividends'],
        ['Acid Test < 1:1', 'Severe short-term cash flow risk, reliance on stock', 'Negotiate overdraft, improve trade receivable collection']
      ]
    } },
    { id: 'call-2', type: 'callout', data: { style: 'warning', title: 'Watch Out', text: 'A high current ratio isn\\'t always good. It may mean the firm is holding too much idle cash or obsolete stock rather than investing it for growth.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Profitability ratios (gross, operating, and net margins) highlight cost control and efficiency. Liquidity ratios (current and acid test) reveal the short-term financial stability and debt-paying ability of the firm.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'What is the formula for Gross Profit Margin?', answer: '(Gross Profit ÷ Revenue) × 100' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What does the Operating Profit Margin measure?', answer: 'It measures the proportion of revenue left after deducting both direct costs and overheads; it indicates efficiency in managing indirect costs.' },
      { id: 'cue-3', blockId: 'list-2', prompt: 'What is the formula for the Current Ratio?', answer: 'Current Assets ÷ Current Liabilities' },
      { id: 'cue-4', blockId: 'list-2', prompt: 'How does the Acid Test Ratio differ from the Current Ratio?', answer: 'The Acid Test Ratio excludes inventory from current assets, providing a stricter measure of immediate liquidity.' },
      { id: 'cue-5', blockId: 'tbl-1', prompt: 'What does a Current Ratio of less than 1:1 indicate?', answer: 'Poor liquidity; the business has more short-term debts than short-term assets and may struggle to pay creditors.' }
    ],
    summaryText: 'Profitability ratios measure financial efficiency via margins, while liquidity ratios assess short-term solvency using the current and acid test ratios.'
  }
};`
  },
  "note_3_15_3": {
    topic: "Gearing and ROCE",
    content: `export const note_business_3_15_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand and calculate Gearing and Return on Capital Employed (ROCE) to evaluate financial risk and investment efficiency.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Gearing Ratio', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'The gearing ratio measures the proportion of a business\\'s capital that is financed by long-term debt (borrowing) compared to the total capital employed. It is a key indicator of long-term financial risk.' } },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Gearing Formula', text: 'Gearing (%) = (Non-Current Liabilities ÷ Capital Employed) × 100. \\nNote: Capital Employed = Total Equity + Non-Current Liabilities.' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\\**High Gearing (>50%):\\** Highly reliant on debt. Vulnerable to interest rate rises and cash flow problems.' },
      { text: '\\**Low Gearing (<25%):\\** Financed mostly by equity. Lower financial risk but may miss out on growth funded by cheap borrowing.' }
    ] } },
    { id: 'h-2', type: 'heading', data: { text: 'Return on Capital Employed (ROCE)', level: 2 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'ROCE is arguably the most important primary profitability ratio. It evaluates how efficiently a business is utilizing its total capital to generate operating profit or profit before tax and interest.' } },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'ROCE Formula', text: 'ROCE (%) = (Operating Profit ÷ Capital Employed) × 100' } },
    { id: 'p-3', type: 'paragraph', data: { text: 'A higher ROCE indicates a more efficient use of capital. Investors will compare a firm\\'s ROCE against the prevailing interest rates (return on risk-free savings) and against competitor ratios.' } },
    { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Improving Financial Ratios',
      headers: ['Ratio', 'How to Improve/Interpret'],
      rows: [
        ['Gearing', 'Pay off long-term loans, issue more shares, retain more profit'],
        ['ROCE', 'Increase operating profit (cut overheads, raise prices), reduce debt or equity without reducing profit scale']
      ]
    } },
    { id: 'call-3', type: 'callout', data: { style: 'worked', title: 'Calculating ROCE', text: 'Operating Profit = £2m. Total Equity = £6m. Long-term Loans = £4m. \\nCapital Employed = £6m + £4m = £10m. \\nROCE = (£2m ÷ £10m) × 100 = 20%.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Gearing indicates reliance on debt, showing long-term financial risk, while ROCE evaluates how effectively management uses the total capital pooled from shareholders and lenders to generate operating profit.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What is the formula for the Gearing Ratio?', answer: '(Non-Current Liabilities ÷ Capital Employed) × 100' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What constitutes a highly geared business?', answer: 'A business with an over 50% gearing ratio, indicating high reliance on long-term debt.' },
      { id: 'cue-3', blockId: 'call-1', prompt: 'How do you calculate Capital Employed?', answer: 'Total Equity + Non-Current Liabilities' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'What is the formula for Return on Capital Employed (ROCE)?', answer: '(Operating Profit ÷ Capital Employed) × 100' },
      { id: 'cue-5', blockId: 'p-3', prompt: 'Why is a high ROCE desirable?', answer: 'It indicates that management is efficiently using the capital invested in the business to generate operating profit.' }
    ],
    summaryText: 'Gearing measures debt dependence and risk, whilst ROCE measures the percentage return generated from the total capital employed in a business.'
  }
};`
  },
  "note_3_15_4": {
    topic: "Ratio-analysis limitations",
    content: `export const note_business_3_15_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Examine the limitations of relying purely on ratio analysis when assessing business performance.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Limitations of Ratio Analysis', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'While ratio analysis provides quantitative insights into financial performance, it has several notable limitations. Decision-makers must look beyond ratios to understand the complete picture of a business\\'s health and competitiveness.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Key Weaknesses', level: 3 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\\**Historic Data:\\** Financial accounts are backward-looking. A strong past performance does not guarantee future success, especially in rapidly changing markets.' },
      { text: '\\**Window Dressing:\\** Firms can manipulate their accounts to make their financial situation appear more favorable (e.g., delaying payments to creditors to increase cash balances at year-end).' },
      { text: '\\**Ignores Qualitative Factors:\\** Ratios ignore non-financial indicators like staff morale, customer loyalty, management quality, or brand reputation.' },
      { text: '\\**Inflation:\\** Over time, inflation distorts financial figures, making comparisons across several years less accurate.' },
      { text: '\\**Different Accounting Practices:\\** Companies might use different methods for valuing inventory or depreciating assets, complicating industry comparisons.' }
    ] } },
    { id: 'call-1', type: 'callout', data: { style: 'tip', title: 'Context is Crucial', text: 'A single ratio is meaningless in isolation. It must be compared to previous years (trend analysis) or industry averages (cross-sectional analysis) to provide value.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Need for Holistic Assessment', level: 2 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'To gain a true measure of competitiveness, stakeholders should pair quantitative ratio analysis with qualitative evaluations such as SWOT analysis or PESTLE analysis. A highly profitable firm may still fail if it faces a sudden regulatory shift or high staff turnover.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Ratio analysis is restricted by its reliance on historic, potentially manipulated data, and its omission of qualitative factors like employee motivation and market changes.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'Why is the historic nature of financial data a limitation of ratio analysis?', answer: 'Because backward-looking data does not guarantee future success or reflect current market conditions.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What is window dressing in accounting?', answer: 'The legal manipulation of financial accounts to make a business\\'s financial position appear better than it actually is.' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'Identify two qualitative factors ignored by ratio analysis.', answer: 'Staff morale, management quality, customer loyalty, or brand reputation.' },
      { id: 'cue-4', blockId: 'call-1', prompt: 'Why is a single ratio considered meaningless in isolation?', answer: 'Because it lacks context; ratios must be compared against past trends or industry averages to provide insight.' }
    ],
    summaryText: 'Limitations of ratio analysis include historic data, window dressing, ignoring qualitative factors, inflation distortion, and different accounting policies.'
  }
};`
  },
  "note_3_15_5": {
    topic: "Labour productivity metrics",
    content: `export const note_business_3_15_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand and calculate labour productivity metrics as a measure of human resource efficiency.' } },
    { id: 'h-1', type: 'heading', data: { text: 'What is Labour Productivity?', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'Labour productivity measures the amount of output produced by an individual workforce or employee over a given period. High productivity is a major source of competitive advantage, as it lowers the average unit cost of production.' } },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Formula', text: 'Labour Productivity = Total Output (per period) ÷ Average Number of Employees (per period)' } },
    { id: 'h-2', type: 'heading', data: { text: 'Importance of Labour Productivity', level: 3 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\\**Lower Unit Costs:\\** Higher output per worker means wage costs are spread over a greater number of units.' },
      { text: '\\**Competitive Pricing:\\** Lower unit costs enable the firm to reduce prices and gain market share.' },
      { text: '\\**Higher Profit Margins:\\** If prices are maintained while unit cost falls, profit margins expand.' },
      { text: '\\**Wage Demands:\\** Increases in productivity often justify higher employee wages without driving up overall costs.' }
    ] } },
    { id: 'h-2', type: 'heading', data: { text: 'Unit Labour Cost', level: 2 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'Unit labour cost is another vital metric that highlights the wage expense required to produce a single item.' } },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'Formula', text: 'Unit Labour Cost = Total Labour Costs ÷ Total Output' } },
    { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Improving Productivity vs Quality',
      headers: ['Strategy for Output', 'Potential Risk'],
      rows: [
        ['Piece-rate pay systems', 'Rushed work leading to poor quality'],
        ['Automation / New tech', 'Initial high investment, staff resistance'],
        ['Staff training', 'Training costs, staff may leave for better jobs']
      ]
    } },
    { id: 'call-3', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'A factory produces 500,000 units a year with 50 workers. \\nLabour Productivity = 500,000 ÷ 50 = 10,000 units per worker. \\nIf total labour cost is £1.5m, Unit Labour Cost = £1,500,000 ÷ 500,000 = £3.00 per unit.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Labour productivity indicates HR efficiency by evaluating output per employee. Improving productivity lowers unit labour costs, thereby increasing competitiveness and profit margins.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What is the formula for labour productivity?', answer: 'Total Output (per period) ÷ Average Number of Employees' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'How does high labour productivity increase competitiveness?', answer: 'It lowers average unit costs, allowing firms to reduce prices or achieve higher profit margins.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'How do you calculate Unit Labour Cost?', answer: 'Total Labour Costs ÷ Total Output' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'What is a potential negative side-effect of linking pay directly to output speed?', answer: 'It may cause workers to rush, leading to a drop in quality or increased wastage.' }
    ],
    summaryText: 'Labour productivity tracks output per worker, and higher productivity leads to reduced unit labour costs and greater competitive advantage.'
  }
};`
  },
  "note_3_15_6": {
    topic: "Turnover, retention and absenteeism metrics",
    content: `export const note_business_3_15_6 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Analyse and calculate HR metrics including labour turnover, retention, and absenteeism rates.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Labour Turnover', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'Labour turnover measures the rate at which employees leave a business over a given period. High turnover can be a sign of poor motivation or poor working conditions, and it incurs high recruitment and training costs.' } },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Turnover Formula', text: 'Labour Turnover (%) = (Number of staff leaving during year ÷ Average number of staff employed) × 100' } },
    { id: 'h-2', type: 'heading', data: { text: 'Retention Rate', level: 2 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'Retention rate measures the ability of a business to keep its employees. A high retention rate indicates a stable, motivated workforce.' } },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'Retention Formula', text: 'Retention Rate (%) = (Number of staff staying for the whole year ÷ Number of staff at start of year) × 100' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\\**High Turnover Cons:\\** High recruitment costs, loss of expertise, low team morale, reduced productivity during onboarding.' },
      { text: '\\**High Turnover Pros:\\** Brings in "fresh blood" and new ideas, easy way to reduce workforce size if demand drops.' }
    ] } },
    { id: 'h-2', type: 'heading', data: { text: 'Absenteeism', level: 2 } },
    { id: 'p-3', type: 'paragraph', data: { text: 'Absenteeism measures the rate at which staff are absent from work. Persistent, unscheduled absenteeism disrupts production schedules, forces the use of expensive agency cover, and stresses the remaining workforce.' } },
    { id: 'call-3', type: 'callout', data: { style: 'key', title: 'Absenteeism Formula', text: 'Absenteeism Rate (%) = (Number of staff absent ÷ Total number of staff) × 100 \\nOR (Total days lost to absence ÷ Total possible working days) × 100' } },
    { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Causes & Solutions for HR Metrics',
      headers: ['Issue', 'Potential Causes', 'HR Strategies'],
      rows: [
        ['High Turnover', 'Poor pay, toxic culture, rigid hours', 'Better benefits, flexible working, career paths'],
        ['High Absenteeism', 'Stress, bullying, illness, lack of motivation', 'Wellness programs, strict disciplinary actions, job enrichment']
      ]
    } },
    { id: 'sum-1', type: 'summary', data: { text: 'Turnover, retention, and absenteeism are critical indicators of workforce morale and stability. Actively monitoring these metrics helps firms implement strategies to maintain productivity and minimize recruitment and absence costs.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What is the formula for Labour Turnover?', answer: '(Number of staff leaving during year ÷ Average number of staff) × 100' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'How is the Retention Rate calculated?', answer: '(Number of staff staying the whole year ÷ Number of staff at start of year) × 100' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'What is a major cost associated with high labour turnover?', answer: 'High recruitment and training costs, along with lost productivity during onboarding.' },
      { id: 'cue-4', blockId: 'call-3', prompt: 'Provide one formula for measuring Absenteeism.', answer: '(Total days lost to absence ÷ Total possible working days) × 100' },
      { id: 'cue-5', blockId: 'list-1', prompt: 'Can high labour turnover occasionally be beneficial? Why?', answer: 'Yes, because it brings in new ideas ("fresh blood") and naturally reduces the workforce if the firm needs to downsize.' }
    ],
    summaryText: 'HR metrics like turnover, retention, and absenteeism allow firms to diagnose low morale and high staff costs.'
  }
};`
  },
  "note_3_15_7": {
    topic: "HR strategies for productivity and retention",
    content: `export const note_business_3_15_7 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Evaluate human resource strategies designed to enhance labour productivity and improve staff retention.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Financial Strategies', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'Firms can manipulate pay structures to incentivize greater output and loyalty. Financial methods appeal to the physiological and security needs of employees.' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\\**Performance-related pay (PRP):\\** Bonuses tied to meeting specific targets or appraisals.' },
      { text: '\\**Piece-rate systems:\\** Pay linked directly to the volume of output produced.' },
      { text: '\\**Profit sharing & Share ownership:\\** Gives employees a vested financial interest in the overall success of the company, boosting retention.' },
      { text: '\\**Fringe benefits:\\** Perks such as company cars, health insurance, or gym memberships.' }
    ] } },
    { id: 'h-2', type: 'heading', data: { text: 'Non-Financial Strategies', level: 2 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'Modern theorists (such as Herzberg and Maslow) emphasize that non-financial rewards are often more effective at driving long-term motivation and retention than purely financial incentives.' } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [
      { text: '\\**Job Enlargement:\\** Increasing the scope of a job by adding more tasks of a similar complexity level (reduces boredom).' },
      { text: '\\**Job Enrichment:\\** Giving employees tasks that require higher skill and responsibility, providing opportunities for psychological growth.' },
      { text: '\\**Empowerment & Delegation:\\** Allowing employees to make their own decisions regarding their work, building trust.' },
      { text: '\\**Flexible working:\\** Offering remote work, flexitime, or compressed hours to improve work-life balance.' }
    ] } },
    { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Financial vs Non-Financial HR Strategies',
      headers: ['Approach', 'Advantages', 'Disadvantages'],
      rows: [
        ['Financial Methods', 'Immediate impact, clear direct incentives', 'Expensive, impact may wear off over time, can breed resentment'],
        ['Non-Financial Methods', 'Long-lasting motivation, helps meet higher-level needs', 'Takes time to implement, requires trust and good management']
      ]
    } },
    { id: 'call-1', type: 'callout', data: { style: 'warning', title: 'Evaluation Point', text: 'There is no "one-size-fits-all" strategy. The best HR approach depends on the culture of the organisation, the skill level of the workforce, and the company\\'s financial resources.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Improving productivity and retention requires a balanced mix of financial incentives (such as PRP and profit sharing) and non-financial strategies (such as empowerment and flexible working) tailored to the specific needs of the workforce.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'How does profit sharing help improve retention?', answer: 'It gives employees a vested financial interest in the company\\'s long-term success, reducing the likelihood of them leaving.' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'What is the difference between job enlargement and job enrichment?', answer: 'Job enlargement adds more tasks of a similar level to reduce boredom, whereas job enrichment adds more complex tasks with greater responsibility.' },
      { id: 'cue-3', blockId: 'list-2', prompt: 'Give an example of a flexible working arrangement.', answer: 'Remote working, flexitime, or compressed working hours.' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'What is a drawback of relying solely on financial methods for motivation?', answer: 'They are expensive, their motivational impact may be short-lived, and they do not fulfil higher-level psychological needs.' }
    ],
    summaryText: 'HR strategies blend financial (PRP, profit sharing) and non-financial (job enrichment, empowerment) methods to boost productivity and lower turnover.'
  }
};`
  }
};

for (const [filename, data] of Object.entries(notes)) {
  const filePath = path.join(dir, `${filename}.js`);
  fs.writeFileSync(filePath, data.content, 'utf8');
  console.log(`Wrote ${filename}.js`);
}