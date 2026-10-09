/**
 * Seed note: Accounting · Unit 1 · Topic 5 · Subtopic 1
 * "Liquidity ratios"
 */

export const note_accounting_1_5_1 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Calculate and interpret the current ratio and the liquid (acid test) ratio, and explain the dangers of both poor and excessive liquidity."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Can the Business Pay Its Debts?",
        "level": 2
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "Liquidity is the ability to pay short-term liabilities as they fall due. A profitable business can still fail if it runs out of cash, so liquidity ratios are examined alongside profitability."
      }
    },
    {
      "id": "tbl-liquidity",
      "type": "comparisonTable",
      "data": {
        "caption": "Liquidity ratios",
        "headers": [
          "Ratio",
          "Formula",
          "Typical benchmark"
        ],
        "rows": [
          [
            "Current ratio",
            "Current assets : Current liabilities",
            "Around 1.5 : 1 to 2 : 1"
          ],
          [
            "Liquid (acid test) ratio",
            "(Current assets − Inventory) : Current liabilities",
            "Around 1 : 1"
          ]
        ]
      }
    },
    {
      "id": "key-inventory",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Why Exclude Inventory?",
        "text": "Inventory is the least liquid current asset — it must be sold (often on credit) and the cash collected before it can pay creditors. The acid test therefore gives a stricter view of immediate solvency."
      }
    },
    {
      "id": "worked-liquidity",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Calculating Liquidity",
        "text": "Inventory £30 000; Trade receivables £18 000; Bank £6 000; Current liabilities £32 000\n\nCurrent assets = £54 000\nCurrent ratio = 54 000 : 32 000 = 1.69 : 1\nLiquid ratio = (54 000 − 30 000) : 32 000 = 0.75 : 1\nThe business relies on selling inventory to meet its short-term debts."
      }
    },
    {
      "id": "h-2",
      "type": "heading",
      "data": {
        "text": "Too Little or Too Much",
        "level": 2
      }
    },
    {
      "id": "list-balance",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "<strong>Too low</strong>: risk of being unable to pay suppliers and lenders; may lose credit terms or face legal action."
          },
          {
            "text": "<strong>Too high</strong>: cash, receivables or inventory are tied up instead of earning a return; may indicate slow-moving inventory or poor credit control."
          }
        ]
      }
    },
    {
      "id": "p-2",
      "type": "paragraph",
      "data": {
        "text": "Benchmarks vary by industry: a supermarket sells for cash and buys on credit, so it can operate safely with a liquid ratio well below 1 : 1."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Improving Liquidity",
        "text": "Suggestions should be realistic: chase receivables, reduce inventory levels, negotiate longer supplier credit, sell unused non-current assets, or raise long-term finance. Increasing profit alone does not immediately raise cash."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Calculate the current and liquid ratios",
            "checked": false
          },
          {
            "text": "Explain why inventory is excluded from the liquid ratio",
            "checked": false
          },
          {
            "text": "Evaluate whether liquidity is too low or too high for the business",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Current ratio = current assets : current liabilities; liquid ratio = (current assets − inventory) : current liabilities. Low liquidity risks failing to pay debts; excessive liquidity means idle resources. Benchmarks depend on the industry."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Current ratio = current assets : current liabilities; liquid ratio = (current assets − inventory) : current liabilities. Low liquidity risks failing to pay debts; excessive liquidity means idle resources. Benchmarks depend on the industry.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "tbl-liquidity",
        "prompt": "State the formula for the liquid (acid test) ratio.",
        "answer": "(Current assets − inventory) : current liabilities."
      },
      {
        "id": "cue-2",
        "blockId": "key-inventory",
        "prompt": "Why is inventory excluded from the acid test ratio?",
        "answer": "It is the least liquid current asset — it must be sold and the cash collected before it can pay debts."
      },
      {
        "id": "cue-3",
        "blockId": "list-balance",
        "prompt": "Give one problem with a current ratio that is too high.",
        "answer": "Resources are tied up in idle cash, receivables or inventory instead of earning a return."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_1_5_1;
