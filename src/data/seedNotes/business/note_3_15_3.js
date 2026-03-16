export const note_business_3_15_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand and calculate Gearing and Return on Capital Employed (ROCE) to evaluate financial risk and investment efficiency.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Gearing Ratio', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'The gearing ratio measures the proportion of a business\'s capital that is financed by long-term debt (borrowing) compared to the total capital employed. It is a key indicator of long-term financial risk.' } },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Gearing Formula', text: 'Gearing (%) = (Non-Current Liabilities ÷ Capital Employed) × 100. \nNote: Capital Employed = Total Equity + Non-Current Liabilities.' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\**High Gearing (>50%):\** Highly reliant on debt. Vulnerable to interest rate rises and cash flow problems.' },
      { text: '\**Low Gearing (<25%):\** Financed mostly by equity. Lower financial risk but may miss out on growth funded by cheap borrowing.' }
    ] } },
    { id: 'h-2', type: 'heading', data: { text: 'Return on Capital Employed (ROCE)', level: 2 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'ROCE is arguably the most important primary profitability ratio. It evaluates how efficiently a business is utilizing its total capital to generate operating profit or profit before tax and interest.' } },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'ROCE Formula', text: 'ROCE (%) = (Operating Profit ÷ Capital Employed) × 100' } },
    { id: 'p-3', type: 'paragraph', data: { text: 'A higher ROCE indicates a more efficient use of capital. Investors will compare a firm\'s ROCE against the prevailing interest rates (return on risk-free savings) and against competitor ratios.' } },
    { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Improving Financial Ratios',
      headers: ['Ratio', 'How to Improve/Interpret'],
      rows: [
        ['Gearing', 'Pay off long-term loans, issue more shares, retain more profit'],
        ['ROCE', 'Increase operating profit (cut overheads, raise prices), reduce debt or equity without reducing profit scale']
      ]
    } },
    { id: 'call-3', type: 'callout', data: { style: 'worked', title: 'Calculating ROCE', text: 'Operating Profit = £2m. Total Equity = £6m. Long-term Loans = £4m. \nCapital Employed = £6m + £4m = £10m. \nROCE = (£2m ÷ £10m) × 100 = 20%.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Gearing indicates reliance on debt, showing long-term financial risk, while ROCE evaluates how effectively management uses the total capital pooled from shareholders and lenders to generate operating profit.' } },
    {
      id: 'enr-svg-gearing',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 320"><rect width="500" height="320" fill="#f8fafc"/><text x="250" y="25" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1f2937">Gearing = Debt / (Debt + Equity) × 100</text><rect x="60" y="50" width="120" height="220" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/><rect x="60" y="50" width="120" height="154" rx="4" fill="#dc2626"/><text x="120" y="140" text-anchor="middle" font-size="12" fill="white" font-family="sans-serif" font-weight="bold">Debt £70m</text><rect x="60" y="204" width="120" height="66" rx="0" fill="#e5e7eb"/><text x="120" y="244" text-anchor="middle" font-size="12" fill="#374151" font-family="sans-serif">Equity £30m</text><text x="120" y="288" text-anchor="middle" font-size="13" fill="#dc2626" font-family="sans-serif" font-weight="bold">70% Gearing</text><text x="120" y="306" text-anchor="middle" font-size="11" fill="#6b7280" font-family="sans-serif">(High — risky)</text><rect x="310" y="50" width="120" height="220" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/><rect x="310" y="50" width="120" height="66" rx="4" fill="#dc2626"/><text x="370" y="90" text-anchor="middle" font-size="12" fill="white" font-family="sans-serif" font-weight="bold">Debt £30m</text><rect x="310" y="116" width="120" height="154" rx="0" fill="#d1fae5"/><text x="370" y="206" text-anchor="middle" font-size="12" fill="#065f46" font-family="sans-serif">Equity £70m</text><text x="370" y="288" text-anchor="middle" font-size="13" fill="#059669" font-family="sans-serif" font-weight="bold">30% Gearing</text><text x="370" y="306" text-anchor="middle" font-size="11" fill="#6b7280" font-family="sans-serif">(Low — safer)</text><line x1="60" y1="160" x2="460" y2="160" stroke="#4f46e5" stroke-width="1.5" stroke-dasharray="5,5"/><text x="470" y="165" font-size="10" fill="#4f46e5" font-family="sans-serif">50%</text></svg>`,
        caption: 'Gearing comparison: high gearing (70%) increases financial risk; low gearing (30%) is safer but may indicate under-leveraged growth'
      }
    },
    {
      id: 'enr-callout-easyjet',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'EasyJet vs Rightmove — gearing in context',
        text: 'EasyJet has high gearing (~65%) due to aircraft lease debt. During COVID-19, interest payments became unsustainable as revenue collapsed. High gearing amplifies the risk from revenue falls. By contrast, Rightmove (property portal) has near-zero gearing — it requires little physical capital, so it has no need for debt financing. Context determines what level of gearing is appropriate.'
      }
    },
    {
      id: 'enr-callout-tip-gearroce',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip: ROCE and gearing together',
        text: 'ROCE = Operating Profit / Capital Employed × 100. Should exceed the bank interest rate — otherwise a savings account is more profitable. Gearing above 50% is considered high risk — always check whether profit covers interest payments (interest cover ratio = operating profit / interest). Include both ROCE and gearing when evaluating financial health.'
      }
    },
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
};