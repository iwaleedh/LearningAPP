/**
 * Seed note: Accounting · Unit 1 · Topic 5 · Subtopic 2
 * "Asset-use ratios"
 */

export const note_accounting_1_5_2 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Calculate and interpret rate of inventory turnover, trade receivables collection period, trade payables payment period and asset turnover."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "How Efficiently Are Resources Used?",
        "level": 2
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "Asset-use (efficiency) ratios show how quickly inventory is sold, how quickly customers pay and how long the business takes to pay suppliers. They help explain changes in liquidity."
      }
    },
    {
      "id": "tbl-efficiency",
      "type": "comparisonTable",
      "data": {
        "caption": "Efficiency ratios",
        "headers": [
          "Ratio",
          "Formula",
          "Interpretation"
        ],
        "rows": [
          [
            "Rate of inventory turnover",
            "Cost of sales ÷ Average inventory",
            "Times per year inventory is sold; higher is usually better"
          ],
          [
            "Inventory days",
            "Average inventory ÷ Cost of sales × 365",
            "Days inventory is held"
          ],
          [
            "Trade receivables collection period",
            "Trade receivables ÷ Credit sales × 365",
            "Days customers take to pay"
          ],
          [
            "Trade payables payment period",
            "Trade payables ÷ Credit purchases × 365",
            "Days taken to pay suppliers"
          ],
          [
            "Non-current asset turnover",
            "Revenue ÷ Non-current assets (NBV)",
            "Revenue generated per £1 of non-current assets"
          ]
        ]
      }
    },
    {
      "id": "worked-eff",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Calculating Efficiency Ratios",
        "text": "Cost of sales £180 000; Opening inventory £14 000; Closing inventory £16 000\nCredit sales £240 000; Trade receivables £30 000\nCredit purchases £185 000; Trade payables £20 000\n\nAverage inventory = £15 000 → turnover = 180 000 ÷ 15 000 = 12 times\nCollection period = 30 000 ÷ 240 000 × 365 = 46 days\nPayment period = 20 000 ÷ 185 000 × 365 = 39 days"
      }
    },
    {
      "id": "h-2",
      "type": "heading",
      "data": {
        "text": "Reading the Ratios Together",
        "level": 2
      }
    },
    {
      "id": "p-together",
      "type": "paragraph",
      "data": {
        "text": "In the example, customers take 46 days to pay but suppliers are paid in 39 days, so cash flows out before it flows in. Shortening the collection period or negotiating longer supplier credit would improve the cash position."
      }
    },
    {
      "id": "list-1",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "A <strong>slower inventory turnover</strong> may indicate obsolete stock, over-ordering or falling demand."
          },
          {
            "text": "A <strong>longer collection period</strong> suggests weak credit control and a higher risk of irrecoverable debts."
          },
          {
            "text": "A <strong>longer payment period</strong> conserves cash but may damage supplier relationships and lose cash discounts."
          }
        ]
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Use Credit Figures",
        "text": "Use credit sales and credit purchases where given. If only total figures are provided, state the assumption that all sales/purchases were on credit."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Calculate inventory turnover, collection and payment periods",
            "checked": false
          },
          {
            "text": "Link efficiency ratios to liquidity",
            "checked": false
          },
          {
            "text": "Suggest causes and remedies for adverse changes",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Inventory turnover = cost of sales ÷ average inventory; collection period = receivables ÷ credit sales × 365; payment period = payables ÷ credit purchases × 365. Compare collection and payment periods to judge cash flow pressure."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Inventory turnover = cost of sales ÷ average inventory; collection period = receivables ÷ credit sales × 365; payment period = payables ÷ credit purchases × 365. Compare collection and payment periods to judge cash flow pressure.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "tbl-efficiency",
        "prompt": "State the formula for the trade receivables collection period.",
        "answer": "Trade receivables ÷ credit sales × 365 days."
      },
      {
        "id": "cue-2",
        "blockId": "worked-eff",
        "prompt": "Cost of sales £180 000, opening inventory £14 000, closing £16 000. Calculate the rate of inventory turnover.",
        "answer": "Average inventory £15 000; 180 000 ÷ 15 000 = 12 times a year."
      },
      {
        "id": "cue-3",
        "blockId": "p-together",
        "prompt": "Customers pay in 46 days but suppliers are paid in 39 days. Why is this a cash flow problem?",
        "answer": "Cash leaves the business to pay suppliers before it is received from customers."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_1_5_2;
