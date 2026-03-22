export const note_business_2_8_4 = {
  pdfPath: '/notes/business/wbs12-8.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate and interpret the current ratio and acid test ratio, state their ideal values, and evaluate what high or low values indicate about a business\'s liquidity position.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Liquidity Ratios', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<b>Liquidity ratios</b> measure a business\'s ability to meet its <b>short-term financial obligations</b> (current liabilities) using its <b>current assets</b>. A liquid business has enough short-term assets to pay what it owes in the near future without needing to sell fixed assets or take on emergency borrowing. Liquidity problems are one of the main causes of business failure — even profitable firms can become insolvent if they cannot pay suppliers, wages or loan repayments when due.' }
    },
    {
      id: 'h-current',
      type: 'heading',
      data: { text: 'Current Ratio', level: 2 }
    },
    {
      id: 'p-current',
      type: 'paragraph',
      data: { text: 'The <b>current ratio</b> compares all current assets to all current liabilities. <b>Current assets</b> include cash, trade receivables (debtors), inventory (stock) and short-term investments. <b>Current liabilities</b> include trade payables (creditors due within one year), bank overdrafts and short-term loan repayments. The ratio is expressed as a number rather than a percentage — for example, 1.8:1 means the business has £1.80 of current assets for every £1 of current liabilities.' }
    },
    {
      id: 'eq-current',
      type: 'equation',
      data: {
        html: 'Current Ratio = <span class="nb-frac"><span class="nb-num">Current Assets</span><span class="nb-den">Current Liabilities</span></span>',
        caption: 'Expressed as a ratio (e.g. 1.8:1). Ideal range: 1.5:1 to 2:1.'
      }
    },
    {
      id: 'callout-current-interp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Interpreting the Current Ratio',
        text: '<b>Below 1:1</b> — current liabilities exceed current assets; short-term insolvency risk is high.\n<b>1:1 to 1.5:1</b> — tight but may be acceptable in some industries (e.g. fast-moving retail).\n<b>1.5:1 to 2:1</b> — generally considered ideal; adequate liquidity without excessive idle assets.\n<b>Above 2:1</b> — may indicate poor asset management; cash or stock sitting idle could be better utilised.'
      }
    },
    {
      id: 'h-acid',
      type: 'heading',
      data: { text: 'Acid Test Ratio (Quick Ratio)', level: 2 }
    },
    {
      id: 'p-acid',
      type: 'paragraph',
      data: { text: 'The <b>acid test ratio</b> (also called the quick ratio) is a more stringent test of liquidity because it <em>excludes inventories</em> from current assets. Inventory is excluded because it may not be quickly convertible to cash — it must first be sold and the customer must then pay. For businesses where inventory is illiquid (e.g. property developers, manufacturers with slow-moving stock), the acid test is a more conservative and meaningful measure of immediate liquidity.' }
    },
    {
      id: 'eq-acid',
      type: 'equation',
      data: {
        html: 'Acid Test Ratio = <span class="nb-frac"><span class="nb-num">Current Assets &minus; Inventories</span><span class="nb-den">Current Liabilities</span></span>',
        caption: 'Ideal value: approximately 1:1. Excludes inventory as it may not quickly convert to cash.'
      }
    },
    {
      id: 'callout-acid-interp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Interpreting the Acid Test Ratio',
        text: '<b>Below 0.75:1</b> — serious liquidity concern; the business cannot meet its short-term liabilities without selling stock or raising new finance.\n<b>0.75:1 to 1:1</b> — acceptable; many successful businesses operate in this range.\n<b>Above 1:1</b> — strong liquidity; may indicate excess idle cash that could be invested more productively.\n\nNote: Supermarkets routinely have acid test ratios well below 1:1 because they receive cash from customers before paying suppliers — context always matters.'
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Calculating Both Ratios',
        text: 'Beta Ltd balance sheet extract: Current Assets = £900,000 (of which Inventories = £300,000); Current Liabilities = £600,000.\n\nCurrent Ratio = £900,000 ÷ £600,000 = <b>1.5:1</b>\nAcid Test Ratio = (£900,000 &minus; £300,000) ÷ £600,000 = £600,000 ÷ £600,000 = <b>1.0:1</b>\n\nAnalysis: Current ratio is at the lower end of the ideal range. Acid test is exactly 1:1 — adequate but no margin for error. Management should monitor debtor collection closely.'
      }
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Current Ratio vs Acid Test Ratio',
        headers: ['Feature', 'Current Ratio', 'Acid Test Ratio'],
        rows: [
          ['Formula', 'Current Assets ÷ Current Liabilities', '(Current Assets − Inventory) ÷ Current Liabilities'],
          ['Includes inventory?', 'Yes', 'No'],
          ['Ideal value', '1.5:1 to 2:1', 'Approximately 1:1'],
          ['Strictness', 'Less stringent', 'More stringent (conservative)'],
          ['Best used for', 'General liquidity overview', 'Businesses with slow-moving or illiquid stock']
        ]
      }
    },
    {
      id: 'list-limitations',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Ideal ratio values vary significantly by industry — supermarkets can operate safely with ratios below 1:1.' },
          { text: 'Ratios are a snapshot at one point in time; liquidity can change rapidly.' },
          { text: 'A high current ratio could reflect poor inventory management (excess stock) rather than strong liquidity.' },
          { text: 'Ratios based on balance sheet figures use book values, which may differ from realisable market values.' },
          { text: 'The acid test ratio still includes trade receivables, which may include bad debts unlikely to be collected.' }
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always state the ideal benchmark when interpreting liquidity ratios (current ratio: 1.5–2:1; acid test: ~1:1). Then comment on whether the actual figure is above or below this, what it implies, and one limitation. Noting that "industry context matters" typically earns evaluation marks.'
      }
    },
    {
      "id": "enr-t8b-svg-liquidity-ratios",
      "type": "svg",
      "data": {
        "svg": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 220' font-family='Arial,sans-serif'><rect width='400' height='220' fill='#0f172a' rx='8'/><text x='200' y='18' text-anchor='middle' font-size='12' font-weight='bold' fill='#1e293b'>Liquidity Ratios</text><rect x='20' y='30' width='175' height='100' rx='6' fill='#0c4a6e'/><text x='108' y='52' text-anchor='middle' font-size='11' font-weight='bold' fill='#075985'>Current Ratio</text><text x='108' y='68' text-anchor='middle' font-size='10' fill='#075985'>Current Assets</text><text x='108' y='80' text-anchor='middle' font-size='10' fill='#075985'>─────────────</text><text x='108' y='92' text-anchor='middle' font-size='10' fill='#075985'>Current Liabilities</text><text x='108' y='112' text-anchor='middle' font-size='9' fill='#075985'>Ideal: 1.5 to 2.0</text><text x='108' y='124' text-anchor='middle' font-size='9' fill='#075985'>Includes inventory</text><rect x='205' y='30' width='175' height='100' rx='6' fill='#44370a'/><text x='293' y='52' text-anchor='middle' font-size='11' font-weight='bold' fill='#92400e'>Acid Test Ratio</text><text x='293' y='68' text-anchor='middle' font-size='10' fill='#92400e'>Current Assets – Inventory</text><text x='293' y='80' text-anchor='middle' font-size='10' fill='#92400e'>─────────────────────</text><text x='293' y='92' text-anchor='middle' font-size='10' fill='#92400e'>Current Liabilities</text><text x='293' y='112' text-anchor='middle' font-size='9' fill='#92400e'>Ideal: above 1.0</text><text x='293' y='124' text-anchor='middle' font-size='9' fill='#92400e'>Excludes slow inventory</text><text x='200' y='160' text-anchor='middle' font-size='10' fill='#64748b'>Ratios below ideal = liquidity risk</text><text x='200' y='175' text-anchor='middle' font-size='9' fill='#64748b'>Supermarkets often have low ratios — fast inventory turnover compensates</text></svg>",
        "caption": "Current ratio vs Acid Test ratio for measuring short-term liquidity"
      }
    },
    {
      "id": "enr-t8b-h-window",
      "type": "heading",
      "data": { "text": "Window Dressing", "level": 2 }
    },
    {
      "id": "enr-t8b-p-window",
      "type": "paragraph",
      "data": { "text": "<b>Window dressing</b> refers to practices used by businesses to make their financial statements appear more favourable than the underlying reality — without necessarily breaking any accounting rules. For liquidity specifically, a common technique is to deliberately delay payments to creditors just before the balance sheet date, temporarily reducing current liabilities so that the current ratio looks healthier. For example, a firm that normally settles supplier invoices within 30 days might hold back a batch of payments by a week so they fall after the balance sheet date — inflating the apparent current ratio. Investors and analysts should therefore look for sudden improvements in liquidity ratios at year-end and compare them against previous periods and industry norms as signs of possible window dressing." }
    },
    {
      "id": "enr-t8b-list-improve-liquidity",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          { "text": "<b>Reduce debtor days</b> — chase outstanding invoices promptly; offer early-payment discounts; use invoice factoring to convert receivables into instant cash." },
          { "text": "<b>Increase creditor days</b> — negotiate extended payment terms with suppliers (e.g. from 30 to 60 days) to keep cash in the business longer." },
          { "text": "<b>Sell unused assets</b> — dispose of surplus fixed assets (redundant machinery, unused property) to raise immediate cash and boost current assets." },
          { "text": "<b>Sale and leaseback</b> — sell a major asset (e.g. business premises) to a leasing company and immediately lease it back; raises a large lump sum while continuing to use the asset." },
          { "text": "<b>Reduce inventory</b> — sell excess stock at a discount to convert illiquid inventory into liquid cash, directly improving the acid test ratio." }
        ]
      }
    },
    {
      "id": "enr-t8b-callout-brand-tesco",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Real World: Tesco — Low Acid Test, High Turnover",
        "text": "Tesco, the UK's largest supermarket, consistently operates with an acid test ratio below 1:1 — sometimes as low as 0.3:1. For most businesses this would signal serious liquidity distress, yet Tesco remains financially stable. The reason: customers pay for groceries instantly (cash in immediately), while Tesco pays its suppliers on 30-day or longer credit terms. This negative cash conversion cycle means Tesco effectively uses supplier credit as free working capital — cash flows in before it flows out. This real example illustrates why liquidity ratios must always be interpreted within the context of the business model and industry before drawing conclusions."
      }
    },
    {
      "id": "enr-t8b-callout-student-catering",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Student Example: School Sandwich Stall",
        "text": "Imagine you run a sandwich stall at school. You buy ingredients on Wednesday morning (cash out — current liabilities rise, cash falls), prepare food that evening, and sell everything on Thursday, collecting cash immediately. If a balance sheet photograph were taken on Wednesday before the sale, your current ratio would look poor. By Thursday afternoon it would look excellent. This illustrates a key limitation: liquidity ratios are snapshots. Where you are in the trading cycle at snapshot date dramatically affects the figures — always mention this limitation when evaluating ratio results in exam answers."
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The <b>current ratio</b> (Current Assets ÷ Current Liabilities) measures overall short-term liquidity; the ideal range is 1.5–2:1. The <b>acid test ratio</b> ((Current Assets − Inventory) ÷ Current Liabilities) is more conservative, excluding illiquid stock; the ideal is approximately 1:1. Both ratios must be interpreted in industry context — a figure that indicates poor liquidity in one sector may be normal in another. Neither ratio alone provides a complete picture of financial health.' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Note: your source text appears truncated. Ensure you know ideal values: Current Ratio ~2:1, Acid Test ~1:1. High values = inefficient (idle cash, poor investment), low values = liquidity crisis risk. Evaluate context: retailers work with lower ratios."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students memorize 'Current Ratio should be 2:1' without understanding WHY. A very high ratio wastes shareholder money on idle cash. Examiners expect you to interpret what HIGH/LOW ratios actually signal about management and industry norms."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Current Ratio = Current Assets ÷ Current Liabilities (ideal: 1.5–2:1). Acid Test = (Current Assets − Inventory) ÷ Current Liabilities (ideal: ~1:1).',
    cues: [
      { id: 'cue-1', blockId: 'eq-current', prompt: 'Write the formula for the current ratio and state its ideal value.', answer: 'Current Ratio = Current Assets ÷ Current Liabilities. Ideal range is 1.5:1 to 2:1.' },
      { id: 'cue-2', blockId: 'eq-acid', prompt: 'Write the formula for the acid test ratio and explain why inventory is excluded.', answer: 'Acid Test = (Current Assets − Inventories) ÷ Current Liabilities. Inventory is excluded because it may not be quickly convertible to cash — it must first be sold and the customer must pay.' },
      { id: 'cue-3', blockId: 'callout-current-interp', prompt: 'What does a current ratio above 2:1 suggest about a business?', answer: 'It may indicate poor asset management — excessive cash or inventory is sitting idle rather than being invested productively to generate returns.' },
      { id: 'cue-4', blockId: 'callout-acid-interp', prompt: 'Why might a supermarket have an acid test ratio well below 1:1 without being in financial difficulty?', answer: 'Supermarkets receive cash from customers at point of sale but have extended payment terms with suppliers, so they receive cash before paying creditors — a negative cash conversion cycle means low liquidity ratios are normal.' },
      { id: 'cue-5', blockId: 'callout-we1', prompt: 'A firm has current assets of £900,000 (inventory £300,000) and current liabilities of £600,000. Calculate both ratios.', answer: 'Current Ratio = £900,000 ÷ £600,000 = 1.5:1; Acid Test = (£900,000 − £300,000) ÷ £600,000 = 1.0:1.' },
      { id: 'cue-6', blockId: 'list-limitations', prompt: 'Give two limitations of using liquidity ratios to assess a firm\'s financial position.', answer: 'Ratios are a point-in-time snapshot; ideal values vary by industry; a high ratio may reflect excess idle stock; book values may not reflect realisable values; receivables may include bad debts.' }
    ]
  },
  evidence: [],
  mentions: []
};
