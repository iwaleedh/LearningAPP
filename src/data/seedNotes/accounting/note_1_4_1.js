/**
 * Seed note: Accounting · Unit 1 · Topic 4 · Subtopic 1
 * "Inventory Valuation Differences"
 */

export const note_accounting_1_4_1 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Explain how the choice of inventory valuation method affects cost of sales, gross profit, profit for the year and the statement of financial position."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "One Set of Transactions, Different Profits",
        "level": 2
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "The physical goods and the cash spent are identical whichever method is used — only the <strong>allocation of cost</strong> between cost of sales and closing inventory changes. Because closing inventory reduces cost of sales, a higher closing inventory produces a higher gross profit."
      }
    },
    {
      "id": "key-chain",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "The Chain of Effects",
        "text": "Higher closing inventory → lower cost of sales → higher gross profit → higher profit for the year → higher current assets and higher capital/retained earnings."
      }
    },
    {
      "id": "h-rising",
      "type": "heading",
      "data": {
        "text": "Rising Prices Comparison",
        "level": 2
      }
    },
    {
      "id": "tbl-rising",
      "type": "comparisonTable",
      "data": {
        "caption": "Effect of each method when purchase prices are rising",
        "headers": [
          "",
          "FIFO",
          "AVCO",
          "LIFO"
        ],
        "rows": [
          [
            "Closing inventory",
            "Highest",
            "Middle",
            "Lowest"
          ],
          [
            "Cost of sales",
            "Lowest",
            "Middle",
            "Highest"
          ],
          [
            "Gross profit",
            "Highest",
            "Middle",
            "Lowest"
          ]
        ]
      }
    },
    {
      "id": "p-2",
      "type": "paragraph",
      "data": {
        "text": "When prices are <strong>falling</strong> the pattern reverses: FIFO gives the lowest closing inventory and the lowest profit."
      }
    },
    {
      "id": "worked-gp",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Gross Profit Under Two Methods",
        "text": "Revenue £10 000. Purchases £7 000. No opening inventory.\nClosing inventory: FIFO £1 800, AVCO £1 650\n\nFIFO: Cost of sales = 7 000 − 1 800 = £5 200 → Gross profit £4 800\nAVCO: Cost of sales = 7 000 − 1 650 = £5 350 → Gross profit £4 650\nDifference in profit = difference in closing inventory = £150"
      }
    },
    {
      "id": "h-2",
      "type": "heading",
      "data": {
        "text": "Errors in Inventory",
        "level": 2
      }
    },
    {
      "id": "p-errors",
      "type": "paragraph",
      "data": {
        "text": "An overstatement of closing inventory overstates this year's profit. Because closing inventory becomes next year's opening inventory, next year's cost of sales is then overstated and next year's profit is <strong>understated</strong> by the same amount — the error reverses over two periods."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Consistency Concept",
        "text": "A business should apply the same method each year. Switching methods to improve reported profit would make year-on-year comparisons meaningless and breaches the consistency concept."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Explain why higher closing inventory raises gross profit",
            "checked": false
          },
          {
            "text": "Compare FIFO and AVCO results when prices rise and fall",
            "checked": false
          },
          {
            "text": "Explain the two-year effect of an inventory error",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Valuation methods only change how cost is split between cost of sales and closing inventory. In rising prices FIFO gives the highest closing inventory and profit. An inventory error reverses in the following year because closing inventory becomes opening inventory."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Valuation methods only change how cost is split between cost of sales and closing inventory. In rising prices FIFO gives the highest closing inventory and profit. An inventory error reverses in the following year because closing inventory becomes opening inventory.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "key-chain",
        "prompt": "Trace the effect of a higher closing inventory figure through to the statement of financial position.",
        "answer": "Lower cost of sales → higher gross and net profit → higher current assets and higher capital/retained earnings."
      },
      {
        "id": "cue-2",
        "blockId": "tbl-rising",
        "prompt": "With rising prices, which method gives the lowest gross profit?",
        "answer": "LIFO (of the permitted methods, AVCO gives a lower profit than FIFO)."
      },
      {
        "id": "cue-3",
        "blockId": "p-errors",
        "prompt": "Closing inventory is overstated by £500 this year. What is the effect on this year's and next year's profit?",
        "answer": "This year's profit is overstated by £500; next year's profit is understated by £500."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_1_4_1;
