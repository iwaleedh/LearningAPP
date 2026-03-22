export const note_business_2_8_5 = {
  pdfPath: '/notes/business/wbs12-8.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain the concept of working capital, calculate the cash conversion cycle, and evaluate strategies for managing debtors, creditors and inventory to maintain adequate liquidity.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Working Capital', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<b>Working capital</b> is the capital available for the day-to-day operations of a business. It represents the short-term financial resources a business has available once its short-term obligations have been accounted for. Adequate working capital allows a business to pay wages, purchase materials, meet tax deadlines and service short-term debts without stress. Insufficient working capital — even in a profitable business — can prevent it from operating normally and may lead to insolvency.' }
    },
    {
      id: 'eq-wc',
      type: 'equation',
      data: {
        html: '<b>Working Capital</b> = Current Assets &minus; Current Liabilities',
        caption: 'A positive figure indicates the business can cover its short-term liabilities. Negative working capital = serious liquidity concern.'
      }
    },
    {
      id: 'h-components',
      type: 'heading',
      data: { text: 'Components of Working Capital', level: 2 }
    },
    {
      id: 'tbl-components',
      type: 'comparisonTable',
      data: {
        caption: 'Working Capital Components',
        headers: ['Current Assets (inflows)', 'Current Liabilities (outflows)'],
        rows: [
          ['Cash and cash equivalents', 'Trade payables (creditors due < 1 year)'],
          ['Trade receivables (debtors)', 'Bank overdraft'],
          ['Inventories (stock)', 'Short-term bank loans'],
          ['Short-term investments', 'Tax and VAT payable'],
          ['Prepaid expenses', 'Accruals (expenses due but unpaid)']
        ]
      }
    },
    {
      id: 'h-ccc',
      type: 'heading',
      data: { text: 'The Cash Conversion Cycle (CCC)', level: 2 }
    },
    {
      id: 'p-ccc',
      type: 'paragraph',
      data: { text: 'The <b>cash conversion cycle</b> (also called the working capital cycle) measures the number of days it takes for a business to convert its investment in inventory and other resources into cash from sales. A shorter (or negative) CCC means cash flows back quickly and the business needs less working capital. A longer CCC means cash is tied up for longer, increasing the need for financing.' }
    },
    {
      id: 'eq-ccc',
      type: 'equation',
      data: {
        html: '<b>CCC</b> = Inventory Days + Receivables Days &minus; Payables Days',
        caption: 'A negative CCC (like supermarkets) means cash is received before payments are made.'
      }
    },
    {
      id: 'tbl-days',
      type: 'comparisonTable',
      data: {
        caption: 'Component Formulae of the Cash Conversion Cycle',
        headers: ['Metric', 'Formula', 'What it Measures'],
        rows: [
          ['Inventory Days', '(Inventory ÷ Cost of Sales) × 365', 'Average days stock is held before being sold'],
          ['Receivables Days', '(Trade Receivables ÷ Revenue) × 365', 'Average days to collect payment from customers'],
          ['Payables Days', '(Trade Payables ÷ Cost of Sales) × 365', 'Average days taken to pay suppliers']
        ]
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Cash Conversion Cycle',
        text: 'Gamma Ltd: Revenue = £6,000,000; Cost of Sales = £4,000,000; Inventory = £400,000; Receivables = £500,000; Payables = £300,000.\n\nInventory Days = (£400,000 ÷ £4,000,000) × 365 = <b>36.5 days</b>\nReceivables Days = (£500,000 ÷ £6,000,000) × 365 = <b>30.4 days</b>\nPayables Days = (£300,000 ÷ £4,000,000) × 365 = <b>27.4 days</b>\n\nCCC = 36.5 + 30.4 &minus; 27.4 = <b>39.5 days</b>\n\nGamma\'s cash is tied up for about 40 days on average before it is recovered from sales — management should aim to shorten this.'
      }
    },
    {
      id: 'h-managing',
      type: 'heading',
      data: { text: 'Managing Working Capital', level: 2 }
    },
    {
      id: 'p-managing',
      type: 'paragraph',
      data: { text: 'Businesses manage working capital by controlling three key elements: debtors (receivables), creditors (payables) and inventory. The goal is to maximise cash inflows and minimise cash outflows while maintaining good supplier and customer relationships. Each element can be managed through specific strategies.' }
    },
    {
      id: 'tbl-strategies',
      type: 'comparisonTable',
      data: {
        caption: 'Working Capital Management Strategies',
        headers: ['Element', 'Goal', 'Strategies', 'Risk'],
        rows: [
          ['Debtors (receivables)', 'Reduce receivables days — collect cash faster', 'Offer early payment discounts; strict credit checks; invoice promptly; chase late payments; factoring', 'Strict terms may lose customers to competitors'],
          ['Creditors (payables)', 'Extend payables days — pay suppliers later', 'Negotiate longer payment terms; use extended credit; batch payments', 'Damaging supplier relationships; losing early payment discounts'],
          ['Inventory', 'Reduce inventory days — hold less stock', 'Just-in-time (JIT) ordering; better demand forecasting; reduce safety stock', 'Risk of stockouts if demand unexpectedly rises']
        ]
      }
    },
    {
      id: 'list-tips',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Factoring</b> — selling trade receivables to a specialist company (factor) at a discount; raises cash immediately but reduces revenue slightly.' },
          { text: '<b>Just-in-time (JIT)</b> — ordering materials only when needed, minimising inventory holding costs and cash tied up in stock.' },
          { text: '<b>Overdraft facility</b> — a flexible short-term buffer for working capital gaps; relatively expensive but quickly accessible.' },
          { text: '<b>Sale and leaseback</b> — selling fixed assets and leasing them back releases cash for working capital without losing use of the asset.' }
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Working capital questions often ask you to recommend how a business should improve its liquidity. Structure your answer around the three components: debtors, creditors and inventory. Always evaluate by acknowledging the trade-off — for example, chasing debtors too aggressively may damage customer relationships.'
      }
    },
    {
      "id": "enr-t8b-h-overtrading-wc",
      "type": "heading",
      "data": { "text": "Over-Trading and Working Capital Strain", "level": 2 }
    },
    {
      "id": "enr-t8b-p-overtrading-wc",
      "type": "paragraph",
      "data": { "text": "<b>Over-trading</b> is one of the most dangerous working capital problems a growing business can face. It occurs when a firm wins more orders than its working capital can support. Each new order demands cash upfront — raw materials, labour, packaging — but payment from the customer may not arrive for 30–90 days. As the order book grows rapidly, cash outflows accelerate while cash inflows lag behind. Inventories and receivables both swell, lengthening the CCC. The business appears successful on the income statement (rising revenue) but its cash position deteriorates steadily. Working capital is stretched beyond capacity and, without additional external financing, the firm faces a liquidity crisis despite being technically profitable. This is why fast-growing businesses must plan working capital requirements carefully, not just revenue targets." }
    },
    {
      "id": "enr-t8b-p-negative-ccc",
      "type": "paragraph",
      "data": { "text": "A <b>negative CCC</b> is highly desirable and represents a competitive advantage. When the CCC is negative, a business collects cash from customers <em>before</em> it must pay its suppliers — effectively financing its operations with other people's money. Large supermarkets and platform businesses often achieve this. A negative CCC reduces the need for external working capital financing, lowers interest costs and can fund rapid expansion without proportionate debt increases. Businesses should therefore aim not just to shorten the CCC but, where the business model allows, to push it into negative territory through strong buyer power over suppliers and fast customer payment." }
    },
    {
      "id": "enr-t8b-callout-brand-amazon",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Real World: Amazon — The Negative CCC Advantage",
        "text": "Amazon consistently maintains a negative cash conversion cycle of roughly −30 to −40 days. Customers pay instantly (or within minutes) via card when buying on the platform. Amazon then pays its product suppliers on 30–90 day credit terms and pays marketplace sellers only after items are delivered. The result: Amazon is sitting on billions of dollars of customer cash before it owes any of it to suppliers. This massive, interest-free working capital pool has helped Amazon invest aggressively in AWS, Prime Video and logistics infrastructure — often at near-zero net financing cost. Amazon's negative CCC is a fundamental strategic advantage, not merely an accounting coincidence."
      }
    },
    {
      "id": "enr-t8b-callout-student-merch",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Student Example: Custom Hoodie Business",
        "text": "Suppose you organise custom hoodies for your year group's prom. You take £30 deposits from 50 classmates in October (cash in: +£1,500 — great!), but the printing company requires full payment of £2,200 upfront before starting the order in November. If only 30 people have paid their deposit by then, you are £700 short — you have committed to more orders than your working capital supports. This is classic over-trading: rising committed orders, insufficient cash to fulfil them. You might need a short-term loan or to delay the order. This is exactly the working capital squeeze fast-growing businesses experience — more orders is not always better if cash cannot keep up."
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '<b>Working capital</b> (Current Assets − Current Liabilities) funds day-to-day operations. The <b>cash conversion cycle</b> (Inventory Days + Receivables Days − Payables Days) measures how quickly a business converts investment into cash. Effective working capital management involves reducing debtor collection times, extending creditor payment terms and minimising inventory holdings — while balancing the relationship risks of each strategy.' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Calculate and explain cash conversion cycle step-by-step: 'Days Inventory + Days Sales Outstanding \u2212 Days Payable Outstanding = CCC days of cash tied up.' Lower is better. Show practical strategies: faster collections, slower payments, inventory optimization."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students often treat working capital management as abstract. In reality, delaying payment to suppliers can strain relationships (they raise prices or cut credit). Pushing collections too hard angers customers. Balance relationship management with optimal cash timing."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Working Capital = Current Assets − Current Liabilities. CCC = Inventory Days + Receivables Days − Payables Days. Manage via debtors, creditors and inventory.',
    cues: [
      { id: 'cue-1', blockId: 'eq-wc', prompt: 'Write the formula for working capital and explain what a negative working capital indicates.', answer: 'Working Capital = Current Assets − Current Liabilities. Negative working capital means current liabilities exceed current assets — a serious short-term liquidity risk that may prevent the business from meeting its obligations.' },
      { id: 'cue-2', blockId: 'eq-ccc', prompt: 'Write the formula for the cash conversion cycle.', answer: 'CCC = Inventory Days + Receivables Days − Payables Days. It measures the average number of days cash is tied up before being recovered from sales.' },
      { id: 'cue-3', blockId: 'tbl-days', prompt: 'How is receivables days (debtor days) calculated and what does a high figure indicate?', answer: 'Receivables Days = (Trade Receivables ÷ Revenue) × 365. A high figure means customers are taking a long time to pay, increasing the CCC and straining cash flow.' },
      { id: 'cue-4', blockId: 'tbl-strategies', prompt: 'Give two strategies for reducing the cash conversion cycle by managing debtors.', answer: 'Offer early payment discounts; carry out strict credit checks on customers; invoice immediately after delivery; use debt factoring to convert receivables to instant cash.' },
      { id: 'cue-5', blockId: 'tbl-strategies', prompt: 'Explain the risk of extending creditor payment terms as a working capital management strategy.', answer: 'Delaying payments to suppliers can damage the business relationship — suppliers may impose stricter terms, refuse credit, reduce priority service or stop supplying altogether.' },
      { id: 'cue-6', blockId: 'callout-we1', prompt: 'A firm has inventory days of 36.5, receivables days of 30.4 and payables days of 27.4. Calculate the CCC.', answer: 'CCC = 36.5 + 30.4 − 27.4 = 39.5 days. Cash is tied up for approximately 40 days before being recovered.' }
    ]
  },
  evidence: [],
  mentions: []
};
