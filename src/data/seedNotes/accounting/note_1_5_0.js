/**
 * Seed note: Accounting · Unit 1 · Topic 5 · Subtopic 0
 * "Profitability ratios"
 */

export const note_accounting_1_5_0 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Calculate and interpret gross profit margin, mark-up, profit margin and return on capital employed."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Measuring Profitability",
        "level": 2
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "Profitability ratios compare profit with revenue or with the capital used to generate it. On their own they mean little — they are interpreted by comparing with <strong>previous years</strong>, <strong>competitors</strong> or <strong>industry averages</strong>."
      }
    },
    {
      "id": "tbl-ratios",
      "type": "comparisonTable",
      "data": {
        "caption": "Key profitability ratios",
        "headers": [
          "Ratio",
          "Formula",
          "Shows"
        ],
        "rows": [
          [
            "Gross profit margin",
            "Gross profit ÷ Revenue × 100",
            "Profit earned on trading, before expenses"
          ],
          [
            "Mark-up",
            "Gross profit ÷ Cost of sales × 100",
            "How much is added to cost to set the selling price"
          ],
          [
            "Profit margin (net)",
            "Profit for the year ÷ Revenue × 100",
            "Profit left after all expenses"
          ],
          [
            "Return on capital employed (ROCE)",
            "Profit from operations ÷ Capital employed × 100",
            "How efficiently capital generates profit"
          ]
        ]
      }
    },
    {
      "id": "key-ce",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Capital Employed",
        "text": "For a sole trader: opening (or average) capital + non-current liabilities. For a limited company: equity + non-current liabilities (total assets − current liabilities). Use profit <em>before</em> interest and tax so that it matches the capital that financed it."
      }
    },
    {
      "id": "worked-ratios",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Calculating the Ratios",
        "text": "Revenue £200 000; Cost of sales £120 000; Expenses £50 000; Capital employed £150 000\n\nGross profit = £80 000\nGross profit margin = 80 000 ÷ 200 000 × 100 = 40%\nMark-up = 80 000 ÷ 120 000 × 100 = 66.7%\nProfit for the year = £30 000 → Profit margin = 15%\nROCE = 30 000 ÷ 150 000 × 100 = 20%"
      }
    },
    {
      "id": "h-2",
      "type": "heading",
      "data": {
        "text": "Interpreting Changes",
        "level": 2
      }
    },
    {
      "id": "list-interpret",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "<strong>Falling gross margin</strong>: lower selling prices (competition), higher purchase costs, more theft or wastage, or a change in sales mix."
          },
          {
            "text": "<strong>Gross margin steady but net margin falling</strong>: expenses are growing faster than revenue — look at wages, rent or advertising."
          },
          {
            "text": "<strong>Falling ROCE</strong>: new capital has been invested but has not yet produced matching profit, or profit has fallen."
          }
        ]
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Margin vs Mark-up",
        "text": "Margin uses <em>revenue</em> as the base; mark-up uses <em>cost</em>. A 25% margin equals a 33⅓% mark-up. Always state which you have calculated."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Calculate gross margin, mark-up, net margin and ROCE",
            "checked": false
          },
          {
            "text": "Define capital employed correctly",
            "checked": false
          },
          {
            "text": "Suggest reasons for changes in each ratio",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Gross margin = GP ÷ revenue; mark-up = GP ÷ cost of sales; profit margin = profit ÷ revenue; ROCE = profit from operations ÷ capital employed. Interpret ratios by comparison over time or against competitors and explain the causes."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Gross margin = GP ÷ revenue; mark-up = GP ÷ cost of sales; profit margin = profit ÷ revenue; ROCE = profit from operations ÷ capital employed. Interpret ratios by comparison over time or against competitors and explain the causes.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "tbl-ratios",
        "prompt": "State the formulae for gross profit margin and mark-up.",
        "answer": "Gross margin = GP ÷ revenue × 100; mark-up = GP ÷ cost of sales × 100."
      },
      {
        "id": "cue-2",
        "blockId": "worked-ratios",
        "prompt": "Revenue £200 000, gross profit £80 000, profit £30 000, capital employed £150 000. Calculate gross margin and ROCE.",
        "answer": "Gross margin 40%; ROCE 20%."
      },
      {
        "id": "cue-3",
        "blockId": "list-interpret",
        "prompt": "Gross margin is unchanged but profit margin has fallen. What does this suggest?",
        "answer": "Expenses have risen relative to revenue."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_1_5_0;
