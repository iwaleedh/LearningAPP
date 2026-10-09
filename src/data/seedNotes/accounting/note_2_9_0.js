/**
 * Seed note: Accounting · Unit 2 · Topic 9 · Subtopic 0
 * "IAS 7 statement of cash flows"
 */

export const note_accounting_2_9_0 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Explain the purpose of the statement of cash flows and calculate net cash from operating activities using the indirect method."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Why Profit Is Not Cash",
        "level": 2
      }
    },
    {
      "id": "p-purpose",
      "type": "paragraph",
      "data": {
        "text": "Profit is measured on the accruals basis and includes non-cash items such as depreciation. The <strong>statement of cash flows</strong> (IAS 7) shows the actual cash generated and used, helping users assess liquidity and the ability to pay dividends and repay debt."
      }
    },
    {
      "id": "h-indirect",
      "type": "heading",
      "data": {
        "text": "Indirect Method: Operating Activities",
        "level": 2
      }
    },
    {
      "id": "list-steps",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          {
            "text": "Start with <strong>profit from operations</strong> (or profit before tax, then add back finance costs)."
          },
          {
            "text": "Add back <strong>non-cash expenses</strong>: depreciation, amortisation, loss on disposal. Deduct any <strong>profit on disposal</strong>."
          },
          {
            "text": "Adjust for <strong>working capital</strong>: increase in inventory or receivables → deduct; decrease → add. Increase in trade payables → add; decrease → deduct."
          },
          {
            "text": "= Cash generated from operations; then deduct <strong>interest paid</strong> and <strong>tax paid</strong> = net cash from operating activities."
          }
        ]
      }
    },
    {
      "id": "worked-ocf",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Operating Cash Flow",
        "text": "Profit from operations £84 000; depreciation £20 000; profit on disposal £3 000\nInventory up £6 000; receivables down £4 000; payables up £5 000\nInterest paid £2 000; tax paid £15 000\n\n  Profit from operations           84 000\n  Add depreciation                 20 000\n  Less profit on disposal          (3 000)\n  Increase in inventory            (6 000)\n  Decrease in receivables           4 000\n  Increase in payables              5 000\n  Cash generated from operations  104 000\n  Interest paid                    (2 000)\n  Tax paid                        (15 000)\n  Net cash from operating           87 000"
      }
    },
    {
      "id": "key-wc",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Working Capital Logic",
        "text": "More cash tied up in inventory or receivables means less cash in the bank → deduct the increase. More owed to suppliers means cash has not yet been paid out → add the increase."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Tax Paid ≠ Tax Expense",
        "text": "Find tax paid from a ledger account: opening tax liability + tax charge for the year − closing tax liability."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Explain why profit differs from cash",
            "checked": false
          },
          {
            "text": "Adjust profit for non-cash items",
            "checked": false
          },
          {
            "text": "Adjust for changes in working capital",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "IAS 7 statement of cash flows shows actual cash movements. Indirect method: profit from operations + depreciation and losses − gains, adjusted for working capital changes, less interest and tax paid = net cash from operating activities."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "IAS 7 statement of cash flows shows actual cash movements. Indirect method: profit from operations + depreciation and losses − gains, adjusted for working capital changes, less interest and tax paid = net cash from operating activities.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-purpose",
        "prompt": "Why is a statement of cash flows needed when there is already a statement of profit or loss?",
        "answer": "Profit includes accruals and non-cash items; the cash flow statement shows actual cash generated and used, revealing liquidity."
      },
      {
        "id": "cue-2",
        "blockId": "key-wc",
        "prompt": "Inventory has increased. Is this added or deducted in the indirect method, and why?",
        "answer": "Deducted — more cash is tied up in inventory."
      },
      {
        "id": "cue-3",
        "blockId": "worked-ocf",
        "prompt": "Why is a profit on disposal deducted from profit from operations?",
        "answer": "It is a non-cash gain; the cash proceeds are shown under investing activities."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_9_0;
